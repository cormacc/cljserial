(ns cljserial.utils.hsm
  (:require [statecharts.core :as hsm :refer [assign]]
            [lambdaisland.glogi :as log]
            [refx.alpha :as refx]
            [refx.effects :as effects]
            [refx.interceptors :refer [path]]))

; See https://lucywang000.github.io/clj-statecharts/

;-- Schema (malli)
(def Id :keyword)
(def State [:sequential :keyword])

;; Data for a single statemachine
(def Data
  [:map
   ;;Context can include additional keys -- malli schema is open, so not a problem
   [:context [:map [:_state State]]]
   [:_impl :any]])

;; Data store for all defined statemachines
(def Store [:map-of Id Data])


;-- Helper functions

(defn get-state [context]
  (:_state context))

;-- refx...

;-- ... helper fns
(defn- init [machine]
  (refx/dispatch [:hsm-init machine]))


(defn- handle [hsm-store hsm-id e]
  (let [hsm-data (hsm-id hsm-store)
        context (:context hsm-data)
        state (get-state context)
        machine (:_impl hsm-data)
        event (if (vector? e)
                {:type (first e) :data (rest e)}
                {:type e})
        new-context (hsm/transition machine context event)
        ;; new-context context
        new-state (get-state new-context)]

    (log/debug :handle/transition (str hsm-id "@" state "/" e "->" new-state))
    (log/trace :handle/event event)
    (assoc-in hsm-store [hsm-id :context] new-context)))


(defn- dispatch-all [hsm-store e]
  ;; use doseq rather than for, as for returns a lazy seq
  (doseq [[id _data] hsm-store]
    (refx/dispatch [:hsm-handle id e]))
  ;;FIXME Doing this to avoid clobbering the (unaltered) hsm-store as do-seq returns nil
  ;;      But that feels stupid -- should probably be using reg-event-fx instead of db below....
  hsm-store)

(defn sub-name [hsm-id sub-tag]
  (keyword (str (name hsm-id) "-" sub-tag)))

(defn sub-context-name [hsm-id]
  (sub-name hsm-id "context"))

(defn sub-state-name [hsm-id]
  (sub-name hsm-id "state"))

;-- ... interceptors
;;Could use this to instrument all event handlers rather than use the :hsm-dispatch eventid...
;; (def hsm-event-dispatch-interceptor
;;   (after hsm-event-dispatch-all))

(def store-path-interceptor (path [:hsm-store]))

;; (def hsm-event-interceptors
;;   [hsm-store-path-interceptor
;;    hsm-event-dispatch-interceptor])

;-- ... event handlers
(refx/reg-event-db
 :hsm-init
 store-path-interceptor
 (fn [hsm-store [_event_id hsm]]
   (let [hsm-id (:id hsm)
         context (hsm/initialize hsm)
         state (get-state context)]
     (log/config :init/transition (str hsm-id "/" _event_id "->" state))
     (log/trace :init/context context)
     (assoc-in hsm-store [hsm-id] {:context context :_impl hsm}))))

(refx/reg-event-db
 :hsm-handle
 store-path-interceptor
 (fn [hsm-store [_prefix hsm-id e]]
   ;;_prefix is the :hsm-dispatch refx event id - we discard that and pass argument through to
   (log/debug :handle (str "HANDLING " e "for" hsm-id))
   (handle hsm-store hsm-id e)))

(refx/reg-event-db
 :hsm-dispatch
 store-path-interceptor
 (fn [hsm-store [_prefix e]]
   ;;_prefix is the :hsm-dispatch refx event id - we discard that and pass argument through to
   (dispatch-all hsm-store e)))

;;-- ... subscriptions
;;-- .... layer 2 subscriptions
(refx/reg-sub
 :hsm-store
 (fn [db _]
   ;;TODO: feels like this key should be defined as a constant
   (:hsm-store db)))

;;-- .... layer 3 subscriptions
(defn reg-sub-context
  "Define a subscription for the context of a given statemachine ID"
  [hsm-id]
  (let [sub-name (sub-context-name hsm-id)]
    (log/config :reg-sub/context hsm-id)
    (refx/reg-sub
     sub-name
     :<- [:hsm-store]
     (fn [hsm-store _]
     ;;TODO: Add check for existence of hsm-id key?
       (:context (get hsm-store hsm-id))))))

(defn reg-sub-state
  "Define a subscription for the state of a given statemachine ID"
  [hsm-id]
  (let [sub-name (sub-state-name hsm-id)]
    (log/config :reg-sub/state hsm-id)
    (refx/reg-sub
     sub-name
     :<- [(sub-context-name hsm-id)]
     (fn [hsm-context _]
       (get-state hsm-context)))))


(defn use-sub-context [hsm-id]
  (refx/use-sub [(sub-context-name hsm-id)]))

(defn use-sub-state [hsm-id]
  (refx/use-sub [(sub-state-name hsm-id)]))

;; API

(defn dispatch [e]
  (let [full-event (vec (conj [:hsm-dispatch] e))]
    (log/info :hsm/dispatch full-event)
    (refx/dispatch full-event)))

(defn register [machine]
  (let [hsm-id (:id machine)]
    (log/config :register/on-dom-content-loaded (:id machine))
    (.addEventListener js/document "DOMContentLoaded" (init machine))
    (reg-sub-context hsm-id)
    (reg-sub-state hsm-id)))

(defn in-state [current-state match-state]
  (some #(= match-state %) (flatten [current-state])))


;-- ... coeffects

(effects/register
 :hsm-dispatch
 (fn [event-vector]
   (dispatch event-vector)))
