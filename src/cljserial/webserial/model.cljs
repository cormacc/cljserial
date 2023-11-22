(ns cljserial.webserial.model
  (:require
   [malli.core :as m]
   [lambdaisland.glogi :as log]
   [refx.alpha :as refx :refer [reg-event-fx inject-cofx reg-sub]]
   [refx.interceptors :refer [path]]))

;; == Schema =====================================================================
(def Timestamp :int)
(def ByteEncoding [:enum :text :binary])

(def EventType [:enum :tx :rx])
(def EventData [:map
                [:byte-encoding ByteEncoding]
                [:bytes :string]])

(def Event [:map
            [:timestamp Timestamp]
            [:event-type EventType]
            [:event-data EventData]])
(def Events [:map-of Timestamp Event])

(defn new-event-store []
  (sorted-map))

;; ============================================================================
;; re-fx events and subscriptions

;; Define a standard set of interceptors for all serial port events
(def serial-event-interceptors
  ;; The "path" interceptor means 1st parameter is the
  ;; value at `:terminal :events` path within `db`, rather than the full `db`.
  ;; And, further, it means the event handler returns just the value to be
  ;; put into the specified path, and not the entire `db`.
  ;; i.e. a path interceptor acts like clojure's `update-in`
  [(path [:terminal :events])
   ;; Provide event timestamp as coeffect so our event handlers can be pure functions
   (inject-cofx :timestamp)])

(defn append-event [events {:keys [timestamp event-type bytes]}]
  (assoc events timestamp {:timestamp timestamp
                           :event-type event-type
                           :event-data {:byte-encoding :text
                                        :bytes bytes}}))

(reg-event-fx
 :serial-tx
 serial-event-interceptors
 (fn [{:keys [db timestamp]} [_ bytes]]
   ;;DB effect: Append entry to the serial event database
   {:db (append-event db {:timestamp timestamp
                          :event-type :tx
                          :bytes bytes})
    ;;Coeffect - pass the request on to the statemachine to transmit
    :fx [[:hsm-dispatch [:webserial-tx bytes]]]}))

(reg-event-fx
 :serial-rx
 serial-event-interceptors
 (fn [{:keys [db timestamp]} [_event_id bytes]]
   ;;Append to an ongoing rx event...
   (log/info :wsm/serial-rx bytes)
   (let [prev-event (last (vals db))
         ongoing (and (some? prev-event) (= (:event-type prev-event prev-event) :rx))
         ts (if ongoing (:timestamp prev-event) timestamp)
         data (if ongoing (str (:bytes (:event-data prev-event)) bytes) bytes)]
     ;;DB effect: Append entry to the serial event database
     {:db (append-event db {:timestamp ts
                            :event-type :rx
                            :bytes data})
      ;;Coeffect: Notify any downstream listeners (e.g. CD handlers) that new rx data has been added to the DB
      :fx [[:dispatch [:webserial-rx nil]]]})))

(reg-sub
 :serial-data
 (fn [db _]
   (:terminal db))) ;;

(reg-sub
 :serial-events
 :<- [:serial-data]
 (fn [serial-state _]
   (:events serial-state))) ;;
