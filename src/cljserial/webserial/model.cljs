(ns cljserial.webserial.model
  (:require [cljs.spec.alpha :as s]
            [refx.alpha :refer [reg-event-fx reg-event-db inject-cofx reg-sub]]
            [refx.effects :as effects]
            [refx.interceptors :refer [path]]
            [cljserial.utils.hsm :as hsm-refx]))

;; == Spec =====================================================================

(s/def :webserial/byte-encoding #{:text :binary})
(s/def :webserial/bytes string?)

(s/def :webserial/event-data
  (s/keys :req-un [::byte-encoding ::bytes]))

(s/def :webserial/event-type #{:tx :rx})

(s/def :webserial/timestamp int?)

(s/def :webserial/event
  (s/keys :req-un [:webserial/timestamp :webserial/event-type :webserial/event-data]))

(s/def :webserial/events (s/and
                          (s/map-of :webserial/timestamp :webserial/event)
                          #(instance? PersistentTreeMap %)))

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

(effects/register
 :webserial-tx
 (fn [{:keys [bytes]} as data]
   ;; Could call webserial/write here, but better to let statemachine own the port...
   (hsm-refx/dispatch [:webserial-tx bytes])))

(reg-event-fx
 :serial-tx
 serial-event-interceptors
 (fn [{:keys [db timestamp]} [_ bytes]]
   {:db (append-event db {:timestamp timestamp
                          :event-type :tx
                          :bytes bytes})
    :webserial-tx {:bytes bytes}}))

(reg-event-fx
 :serial-rx
 serial-event-interceptors
 (fn [{:keys [db timestamp]} [_event_id bytes]]
   ;;Append to an ongoing rx event...
   (let [prev-event (last (vals db))
         ongoing (and (some? prev-event) (= (:event-type prev-event prev-event) :rx))
         ts (if ongoing (:timestamp prev-event) timestamp)
         data (if ongoing (str (:bytes (:event-data prev-event)) bytes) bytes)]
     {:db (append-event db {:timestamp ts
                            :event-type :rx
                            :bytes data})})))

(reg-sub
 :serial-data
 (fn [db _]
   (:terminal db))) ;;


(reg-sub
 :serial-events
 :<- [:serial-data]
 (fn [serial-state _]
   (:events serial-state))) ;;
