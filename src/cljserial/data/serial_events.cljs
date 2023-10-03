(ns cljserial.data.serial-events
  (:require [refx.alpha :refer [reg-event-db reg-sub]]
            [refx.interceptors :refer [path]]))

;; Define a standard set of interceptors for all serial port events
(def serial-event-interceptors
  [(path [:terminal :events])])

;; usage:  (dispatch [:add-todo  "a description string"])
(reg-event-db                     ;; given the text, create a new todo
 :serial-tx

  ;; Use the standard interceptors, defined above, whic
 serial-event-interceptors

  ;; The event handler function.
  ;; The "path" interceptor above means 1st parameter is the
  ;; value at `:terminal :events` path within `db`, rather than the full `db`.
  ;; And, further, it means the event handler returns just the value to be
  ;; put into the specified path, and not the entire `db`.
  ;; i.e. a path interceptor acts like clojure's `update-in`
 (fn [events [_ bytes]]
   (let [timestamp (js/Date.now)]
     (assoc events timestamp {:timestamp timestamp
                              :event-type :tx
                              :event-data {:byte-encoding :text
                                           :bytes bytes}}))))

(reg-sub
 :serial-state
 (fn [db _]
   (:terminal db))) ;;


(reg-sub
 :serial-events
 :<- [:serial-state]
 (fn [serial-state _]
   (:events serial-state))) ;;
