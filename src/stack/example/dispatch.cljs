(ns stack.example.dispatch
  (:require [clojure.walk :as walk]
            [taoensso.telemere :as t]
            [promesa.core :as p]
            [statecharts.core :as hsm]
            ["plotly.js-dist-min"]
            [stack.utils.datascript :as du]
            [stack.utils.filestore :as filestore]
            [stack.statecharts.webserial :as webserial]
            [stack.example.model :as model]))


;; replicant event dispatch...
;; See:
;; - https://replicant.fun/event-handlers/
;; - https://replicant.fun/life-cycle-hooks/
;; - https://github.com/anteoas/replicant-mini-app/blob/main/src/mini/app.cljs


(defn interpolate-actions [event actions]
  (walk/postwalk
   (fn [x]
     (cond
       ;; Value interpolation....
       (keyword? x)
       (case x
         :event/target.id (.. event -target -id)
         :event/target.value (.. event -target -value)
         :event/target.value-as-int  (.. event -target -valueAsNumber)
         :event/target.value-as-keyword (keyword (.. event -target -value))
         :event/key (.. event -key)
         x)
       ;; Augment a simple-input event
       ;; ... this is overengineering / needless obfuscation
       ;; (and (vector? x) (= :simple/input (first x)))
       ;; [:view/assoc-in [:user-input (keyword (.. event -target -id))] (second x)]
       :else x))
   actions))

(defn execute-actions [actions]
  (doseq [[action & args] actions]
    (case action

;;=== View model actions ===
      :view/assoc
      (apply swap! model/!state assoc args)

      :view/assoc-in
      (apply swap! model/!state assoc-in args)

      :view/dissoc
      (apply swap! model/!state dissoc args)

;;=== Domain model actions ===
      :domain/transact
      (let [current-db (:domain-db @model/!state)
            new-db (du/transact! current-db args)]
        ;;TODO: Update tx-time and valid-time if they're pointing at prev transaction
        (swap! model/!state assoc :domain-db new-db))

;;=== User actions ===
      :user/input
      (let [[id & value] args]
        (apply swap! model/!state assoc-in [:user-input id] value))

      :user/on-key
      (let [[key-exp key-act nested-actions] args]
        (when (= key-exp key-act)
          (execute-actions nested-actions)))

      :user/sign-out
      (t/log! "IMPLEMENT ME!")

;;=== Filesystem actions ===
      ;;Initiate a write to the local filestore
      :file/write
      (let [[path data] args]
        (-> (filestore/write+ path data)
            (p/then #(execute-actions [[:file/update-index %]]))))

      ;;Initiate a read from the local filestore
      :file/read
      (-> (filestore/read+ (first args))
          (p/then #(execute-actions [[:file/update-index %]])))

      ;;Update the file index after a read or write
      ;;TODO: Strictly speaking should also update the storage usage attributes here....
      :file/update-index
      (let [{:keys [path data]} args]
        (t/event! ::file-index-updated {:data {:args args :path path :data data}})
        (apply swap! model/!state assoc-in [:filestore :entries path] args)
        ;; Display the file content for editing...
        ;; ... FIXME: Why doesn't this work? It only takes the first char
        ;; (apply swap! model/!state assoc-in [:user-input :create-file-path] path)
        ;; (apply swap! model/!state assoc-in [:user-input :create-file-content] data)
        ;; ....
        )

;;=== Statechart integrations ===
      :webserial
      (let [event-type (first args)
            event-data (rest args)
            current-context (:webserial @model/!state)
            new-context (hsm/transition webserial/controller current-context {:type event-type :data event-data})]
        (swap! model/!state assoc :webserial new-context))


;;=== Default action / catchall -- log an error ===
      (t/event! ::action-unrecognised {:level :error :data {:action action :args args}}))))

(defonce !busy (atom false))
(defonce !action-queue (atom []))

(defn handle-actions
  "This wraps the action handler in a naive queue implementation.
  A safeguard against nested action handling during event dispatch"
  [actions]
  (if @!busy
    (swap! !action-queue conj actions)
    (do
      (reset! !busy true)
      (execute-actions actions)
      (while (seq @!action-queue)
        (let [actionses @!action-queue] ; N.B. this is a vector-of-vectors-of-vectors
          (reset! !action-queue [])
          (for [actions actionses]
            (execute-actions actions))))
      (reset! !busy false))))

(defn handle-dom-event [e actions]
  (->> actions
       (interpolate-actions
        (:replicant/dom-event e))
       handle-actions))

(defn handle-lifecycle-event [{:keys [replicant/node replicant/life-cycle] :as _e} hooks]
  (t/event! ::lifecycle-event {:data {:phase life-cycle :hooks hooks :node node}})
  (doseq [[hook args] hooks]
    (case hook

      :plotly/plot
      (.newPlot js/Plotly (.-id node) (clj->js (first args)) (clj->js (second args)))

      ;; Default action / catchall
      (t/event! ::hook-unrecognised {:level :error :data {:hook hook :args args}}))))

(defn handle-events [{:keys [replicant/trigger] :as e} data]
  (t/event! ::handle-event {:level :debug :data {:data data :event e}})
  (if (= :replicant.trigger/life-cycle trigger)
    (handle-lifecycle-event e data)
    (handle-dom-event e data)))
