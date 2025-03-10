(ns stack.services.bt
  (:require
   [taoensso.telemere :as t]
   [statecharts.core :as hsm]

   [stack.utils.hsm :as hsm-dbfx]
   [stack.apis.webbluetooth :as weble]))

(defn device-request-callback [options _e]
  (weble/await-device
   :filter-options options
   :on-success #(dbfx/dispatch [:bt-has-device %1])
   :on-failure #(dbfx/dispatch [:bt-no-device])))

(defn device-connect-callback [device]
  (weble/await-device-gatt-connect
   :device device
   :on-success #(dbfx/dispatch [:bt-has-gatt %1])
   :on-failure #(dbfx/dispatch [:bt-no-gatt])))

(defn gatt-get-service-callback [gatt]
  (weble/await-gatt-get-service
   :gatt gatt
   :on-success #(dbfx/dispatch [:bt-has-service %1])
   :on-failure #(dbfx/dispatch [:bt-no-service])))

(defn service-get-tx-char-callback [service]
  (weble/await-service-get-tx-characteristic
   :service service
   :on-success #(dbfx/dispatch [:bt-has-tx-char %1])
   :on-failure #(dbfx/dispatch [:bt-no-tx-char])))

(defn service-get-rx-char-callback [service]
  (weble/await-service-get-rx-characteristic
   :service service
   :on-success #(dbfx/dispatch [:bt-has-rx-char %1])
   :on-failure #(dbfx/dispatch [:bt-no-rx-char])))

;; == Schema =====================================================================
;; -- see stack.utils.term

;; ============================================================================
;; re-fx events and subscriptions

;; TODO: Inject the db path during initialisation instead maybe?

;; Define a standard set of interceptors for all serial port events
;; (def serial-event-interceptors
;;   ;; "path" interceptor: Update specified subsection of db rather than entire db
;;   [(dbfx/path [:bt-serial-term :events])
;;    ;; Provide event timestamp as coeffect so our event handlers can be pure functions
;;    (inject-cofx :timestamp)])

(defn append-event [events {:keys [timestamp event-type bytes]}]
  (assoc events timestamp {:timestamp timestamp
                           :event-type event-type
                           :event-data {:byte-encoding :text
                                        :bytes bytes}}))

;; Clients transmit a :serial-tx event containg commands/data to be transmitted
;; This logs it to the app database, then generates an internal :webbluetooth-tx event
;; that triggers the statemachine to transmit data via the port
;;
;; N.B. this may need adaptation to allow for coexistence with a webserial
;; connection.... TBD
;; (reg-event-fx
;;  :bt-serial-tx
;;  serial-event-interceptors
;;  (fn [{:keys [db timestamp]} [_ bytes]]
;;    ;;DB effect: Append entry to the serial event database
;;    {:db (append-event db {:timestamp timestamp
;;                           :event-type :tx
;;                           :bytes bytes})
;;     ;;Coeffect - pass the request on to the statemachine to transmit
;;     :fx [[:dispatch [:bt-tx bytes]]]}))

;; (reg-event-fx
;;  :bt-serial-rx
;;  serial-event-interceptors
;;  (fn [{:keys [db timestamp]} [_event_id bytes]]
;;    ;;Append to an ongoing rx event...
;;    ;;As long data streams can be read over multiple rx events, if the previous recorded
;;    ;;comms event is rx, we assume this is an ongoing event and consolidate.
;;    ;;
;;    ;;N.B. This does NOT do any command terminator parsing -- that's a higher level concern
;;    ;;     to be dealt with by any subscribers to :weble-rx
;;    (t/event! ::<-bytes {:level :debug :data bytes})
;;    (let [prev-event (last (vals db))
;;          ongoing (and (some? prev-event) (= (:event-type prev-event prev-event) :rx))
;;          ts (if ongoing (:timestamp prev-event) timestamp)
;;          data (if ongoing (str (:bytes (:event-data prev-event)) bytes) bytes)]
;;      ;;DB effect: Append entry to the serial event database
;;      {:db (append-event db {:timestamp ts
;;                             :event-type :rx
;;                             :bytes data})
;;       ;;Coeffect: Notify any downstream listeners (e.g. CD handlers) that new rx data has been added to the DB
;;       :fx [[:dispatch [:weble-rx nil]]]})))

;; (reg-sub
;;  :bt-serial-data
;;  (fn [db _]
;;    (:bt-serial-term db))) ;;

;; (reg-sub
;;  :bt-serial-events
;;  :<- [:bt-serial-data]
;;  (fn [bt-serial-state _]
;;    (:events bt-serial-state))) ;;

;; JS: event.target.value
;; (defn- extract-rx-payload
;;   [response]
;;   (.-value (.-target ^js (first (:data response)))))

;; (defn- extract-rx-payload
;;   [response]
;;   (.. (first (:data response)) -target -value))

;; (defn- extract-rx-payload
;;   [response]
;;   (.. (-> response :data first) -target -value))

(defn- extract-rx-payload
  [response]
  (-> response
      :data
      first
      .-target
      .-value))


;; ============================================================================
;; Controller - a statemachine
;; See https://lucywang000.github.io/clj-statecharts/

;;Initial context...
;; TODO Write a Schema?
;; ... also consider including event store in context here rather than separately in the refx db

(def default-context {:device nil
                      :gatt nil
                      :service nil
                      :tx-char nil
                      :rx-char nil
                      :options weble/DEFAULT_OPTIONS
                      :line-terminator "\r"})

(def controller
  (hsm/machine
   {:id :bt-serial
    :initial :check
    :context default-context
    :states
    {:check {:entry (fn [ctx e]
                      (t/log! :debug (str "Check web bluetooth" ctx e))
                      (dbfx/dispatch [(if (weble/is-supported?)
                                        :bt-disconnected
                                        :bt-unsupported)]))
             :on {:bt-disconnected [:> :supported :disconnected]
                  :bt-unsupported :unsupported}}
     :supported {:initial :disconnected
                 :on {:bt-disconnected [:> :supported :disconnected]
                      :bt-disconnect [:> :supported :disconnecting]}
                 :states
                 {:connected {:entry (fn [ctx e]
                                       (let [rx-char (:rx-char ctx)]
                                         (t/log! :info "Start Notifications")
                                         (.startNotifications ^js rx-char)))
                              :on {:bt-rx {:actions (fn [ctx e]
                                                      (t/log! :info (str ctx e))
                                                      (let [bytes (extract-rx-payload e)
                                                            decoder (js/TextDecoder. "utf-8")]
                                                        (t/log! :info bytes)
                                                        (dbfx/dispatch [:bt-serial-rx (.decode ^js decoder bytes)])))}
                                   :bt-tx {:actions (fn [ctx e]
                                                      (let [text (first (:data e)) tx-char (:tx-char ctx)
                                                            encoder (js/TextEncoder. "utf-8")]
                                                        (t/log! :info text)
                                                        (weble/service-write-value-without-response tx-char (.encode ^js encoder text))))}}}
                  :disconnecting {:entry (fn [ctx e]
                                           (let [device (:device ctx)]
                                             (t/log! :info "Disconnecting device")
                                             (weble/forget-device {:device device
                                                                   :on-success #(dbfx/dispatch [:bt-disconnected])
                                                                   :on-failure #(t/log! :error (str "Failed to forget " device))})))}
                  :disconnected {:initial :device-pending
                                 :entry (hsm/assign
                                         (fn [ctx e]
                                           (t/log! :info "Resetting device assignment")
                                               ;;(dbfx/dispatch [:bt-disconnect])
                                           (assoc ctx
                                                  :device nil
                                                  :gatt nil
                                                  :service nil
                                                  :tx-char nil
                                                  :rx-char nil)))
                                 :on {:bt-connected [:> :supported :connected]}
                                 :states
                                 {:device-pending {:entry (fn [ctx e]
                                                            (t/log! :debug (str "DEVICE PENDING" ctx e)))
                                                   :on {:bt-has-device
                                                        {:actions (hsm/assign (fn [ctx e]
                                                                                (let [device (first (:data e))]
                                                                                  (.addEventListener
                                                                                   ^js device "gattserverdisconnected" (fn [event]
                                                                                                                         (t/log! :debug (str event))
                                                                                                                         (dbfx/dispatch [:bt-disconnected device])))
                                                                                  (assoc ctx :device device))))
                                                         :target :bluetooth-connecting}
                                                        :bt-no-device [:> :supported :disconnected]}}
                                  :bluetooth-connecting {:entry (fn [ctx e]
                                                                  (t/log! :debug (str "CONNECTING" ctx e))
                                                                  (device-connect-callback (:device ctx)))
                                                         :on {:bt-has-gatt
                                                              {:actions (hsm/assign (fn [ctx e]
                                                                                      (let [gatt (first (:data e))]
                                                                                        (assoc ctx :gatt gatt))))
                                                               :target :bluetooth-getting-service}
                                                              :bt-no-gatt [:> :supported :disconnecting]}}
                                  :bluetooth-getting-service {:entry (fn [ctx e]
                                                                       (t/log! :debug (str "GETTING SERVICE" ctx e))
                                                                       (gatt-get-service-callback (:gatt ctx)))
                                                              :on {:bt-has-service
                                                                   {:actions (hsm/assign (fn [ctx e]
                                                                                           (let [service (first (:data e))]
                                                                                             (assoc ctx :service service))))
                                                                    :target :bluetooth-getting-tx-char}
                                                                   :bt-no-service [:> :supported :disconnecting]}}
                                  :bluetooth-getting-tx-char {:entry (fn [ctx e]
                                                                       (t/log! :debug (str "GETTING TX CHARACTERISTIC" ctx e))
                                                                       (service-get-tx-char-callback (:service ctx)))
                                                              :on {:bt-has-tx-char
                                                                   {:actions (hsm/assign
                                                                              (fn [ctx e]
                                                                                (let [tx-char (first (:data e))]
                                                                                  (assoc ctx :tx-char tx-char))))
                                                                    :target :bluetooth-getting-rx-char}
                                                                   :bt-no-tx-char [:> :supported :disconnecting]}}
                                  :bluetooth-getting-rx-char {:entry (fn [ctx e]
                                                                       (t/log! :debug (str "GETTING RX CHARACTERISTIC" ctx e))
                                                                       (service-get-rx-char-callback (:service ctx)))
                                                              :on {:bt-has-rx-char
                                                                   {:actions (hsm/assign
                                                                              (fn [ctx e]
                                                                                (let [rx-char (first (:data e))]
                                                                                  (t/log! :debug (str "add event listener"))
                                                                                  (.addEventListener
                                                                                   ^js rx-char "characteristicvaluechanged" (fn [event]
                                                                                                                              (t/log! :debug (str event))
                                                                                                                              (dbfx/dispatch [:bt-rx event])))
                                                                                  (assoc ctx :rx-char rx-char))))
                                                                    :target [:> :supported :connected]}
                                                                   :bt-no-rx-char [:> :supported :disconnecting]}}}}}}
     :unsupported {}}}))

(defn init []
  (hsm/initialize controller default-context))
