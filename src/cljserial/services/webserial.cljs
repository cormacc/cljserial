(ns cljserial.services.webserial
  (:require
   [lambdaisland.glogi :as log]
   [refx.alpha :as refx :refer [reg-event-fx inject-cofx reg-sub]]
   [refx.interceptors :as rfi]
   [statecharts.core :as hsm]
   [cljserial.utils.hsm :as hsm-refx]
   [cljserial.utils.webserial :as wsi]))


;; == Schema =====================================================================
(def Timestamp :int)
(def ByteEncoding [:enum :text :binary])

(def Direction [:enum :tx :rx])
(def EventData [:map
                [:byte-encoding ByteEncoding]
                [:bytes :string]])

(def Event [:map
            [:timestamp Timestamp]
            [:event-type Direction]
            [:event-data EventData]])
(def Events [:map-of Timestamp Event])

(defn new-event-store []
  (sorted-map))

;; ============================================================================
;; re-fx events and subscriptions

;; Define a standard set of interceptors for all serial port events
(def serial-event-interceptors
  ;; "path" interceptor: Update specified subsection of db rather than entire db
  [(rfi/path [:terminal :events])
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


;; ============================================================================
;; Controller - a statemachine
;; See https://lucywang000.github.io/clj-statecharts/

;;Initial context...
;; TODO Write a Schema?
;; ... also consider including event store in context here rather than separately in the refx db

(def default-context {:port nil
                      :serial-options wsi/DEFAULTS
                      :line-terminator "\r"})

(def controller
  (hsm/machine
   {:id :serial
    :initial :disconnected
    :context default-context

    :states

    {;; TOP-LEVEL STATE
     :disconnected
     {:initial :webserial_pending
      :entry (hsm/assign (fn [ctx e]
                           (log/info :state/entry "Resetting port assignment")
                           (assoc ctx :port nil)))
      :on {:webserial-option {:actions
                              (hsm/assign
                               (fn [ctx {:keys [data]}]
                                 (let [key (first data)
                                       value-text (second data)
                                       ;; TODO: Use malli coercion here instead?
                                       value (if (re-matches #"\d+" value-text)
                                               (int value-text)
                                               (keyword value-text))]
                                   (log/debug :option/set (str key " : " value))
                                   (assoc-in ctx [:serial-options key] value))))}

           :webserial-port-opened :connected}
      :states
      {:webserial_pending
       {:entry (fn [ctx e]
                 (log/debug :state/entry (str "HSM INIT" ctx e))
                 (hsm-refx/dispatch (if (wsi/is-supported?)
                                      :webserial-check-passed
                                      :webserial-check-failed)))
        :on {:webserial-check-passed :port-pending
             :webserial-check-failed :no-webserial}}
       :no-webserial {}
       :port-pending
       {:entry (fn [ctx e]
                  ;; Ideally we'd do this, however webserial port request must be initiated via ui element click
                  ;; (wsi/await-port
                  ;;  :on-success #(refx/dispatch [:ui/event :webserial-has-port %1])
                  ;;  :on-failure #(refx/dispatch [:ui/event :webserial-no-port]))
                 (log/debug :state/entry (str "PORT PENDING" ctx e)))
        :on {:webserial-has-port {:actions (hsm/assign (fn [ctx e]
                                                         ;;The ports get passed through as a sequence...
                                                         (assoc ctx :port (first (:data e)))))
                                  :target :awaiting_connection}
;;
             }}
       :awaiting_connection
       {:entry (fn [ctx e]
                 (log/debug :state/entry (str "WAITING TO OPEN PORT" ctx))
                 (wsi/open-port (:port ctx)
                                :options (:serial-options ctx)
                                :on-success #(hsm-refx/dispatch :webserial-port-opened)
                                :on-failure #(hsm-refx/dispatch :webserial-port-open-failure)))
        :on {:webserial-port-open-failure {:actions (fn [ctx e] (log/error :port/open e))}}}}}

     ;; TOP-LEVEL STATE
     :connected
     {:entry (fn [ctx e]
               (let [port (:port ctx)
                     port-id (wsi/describe-port port)]
                 (log/info :read/spawn-loop {:port-id port-id})
                 (wsi/go-read-text port #(refx/dispatch [:serial-rx %]))))
      :on {:webserial-tx
           {:actions (fn [context {:keys [data]}]
                       (let [{:keys [port line-terminator]} context
                             ;; The event parameters are wrapped in a vector - get first element
                             cmd (first data)]
                         (log/info :write/text cmd)
                         (wsi/write port (str cmd line-terminator))))}
           :webserial-forget-port :disconnecting}}

     ;; TOP-LEVEL STATE
     :disconnecting
     {:entry (fn [ctx e]
               (log/info :port/forget "TODO: Forget request received - IMPLEMENT ME")
               (let [port (:port ctx)
                     port-info (wsi/describe-port port)]
                 (wsi/forget-port port {:on-success #(hsm-refx/dispatch :webserial-port-forgotten)
                                        :on-failure #(log/error :port/forget (str "Failed to forget " port-info))})))
      :on {:webserial-port-forgotten :disconnected}}

;; END TOP-LEVEL STATES
     }}))

(defn init []
  (hsm-refx/register controller))
