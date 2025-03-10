(ns stack.utils.hsm
  (:require
   [taoensso.telemere :as t]
   [statecharts.core :as hsm]
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
