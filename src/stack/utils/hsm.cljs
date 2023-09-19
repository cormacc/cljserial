(ns stack.utils.hsm
  (:require
   [taoensso.telemere :as t]
   [statecharts.core :as hsm]
   [stack.services.core :as services]
   [stack.utils.dbfx :as dbfx]
   [stack.utils.collections :as c-utils]))

; See https://lucywang000.github.io/clj-statecharts/
; Utilities to integrate clj-statecharts with re-frame

;-- Helper functions

(defn get-state [context]
  (:_state context))

(defn in-state [current-state match-state]
  (some #(= match-state %) (flatten [current-state])))

;Remnants of older more complex re-frame integration -- `handled-events` and `can-handle`
;may be useful for future introspection...
(defn- get-state-events [state]
  (if (contains? state :on)
    (keys (:on state))
    nil))

(defn- find-machine-events
  [top-state]
  (->> (c-utils/find-all top-state :on)
       (map keys)
       flatten
       set))

(defn- recurse-state-events
  ([parent-state state-v] (recurse-state-events parent-state (flatten [state-v]) []))
  ([parent-state state-v event-v]
   (if (empty? state-v)
     (set event-v) ; we're done
     (let [[state-v-first & state-v-rest] state-v
           next-state (state-v-first (:states parent-state))
           event-v-new (reduce conj event-v (get-state-events next-state))]
       (recur next-state state-v-rest event-v-new)))))

(defn handled-events
  ([machine] (find-machine-events machine))
  ([machine state-v] (recurse-state-events machine state-v)))

(defn can-handle [machine state-v event-id]
  (contains? (handled-events machine state-v) event-id))



;;-- re-frame integration

(defn sub-name [hsm-id sub-tag]
  (keyword (str (name hsm-id) "-" sub-tag)))

(defn sub-state-name [hsm-id]
  (sub-name hsm-id "state"))

(defn reg-sub-state
  "Define a subscription for the state of a given statemachine ID"
  [hsm-id]
  (let [sub-name (sub-state-name hsm-id)]
    (t/event! ::reg-sub-state {:level :debug :data {:hsm-id hsm-id}})
    (dbfx/reg-sub
     sub-name
     ;; :<- [(sub-context-name hsm-id)]
     :<- [hsm-id]
     (fn [hsm-context _]
       (get-state hsm-context)))))

(defn register-handler [{:keys [id] :as machine}]
  (t/log! {:level :info :data {:id id}} "Registering handler...")
  (dbfx/reg-event-db
   id
   [(services/path-interceptor [id])]
   (fn [db [_dispatch-id event-type & event-params]]
   ;;N.B. `db` here is the current statemachine context
     (hsm/transition machine db {:type event-type :data event-params}))))

;; API
(defn register [machine]
  (let [hsm-id (:id machine)]
    (t/event! ::register {:data {:hsm-id hsm-id}})
    (services/register hsm-id)
    (reg-sub-state hsm-id)
    (register-handler machine)
    (dbfx/dispatch [:init-service {:id hsm-id :data (hsm/initialize machine)}])))

(defn use-sub-state [hsm-id]
  (dbfx/use-sub [(sub-state-name hsm-id)]))
