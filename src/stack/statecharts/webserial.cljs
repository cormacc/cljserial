(ns stack.statecharts.webserial
  (:require
   [taoensso.telemere :as t]
   [statecharts.core :as hsm]
   [stack.core :refer [dispatch]]
   [stack.schema.webserial :as wss]
   [stack.apis.webserial :as wsi]))

;; ============================================================================
;; Utility functions

;;Append to an ongoing rx event...
;;As long data streams can be read over multiple rx events, if the previous recorded
;;comms event is rx, we assume this is an ongoing event and consolidate.
;;
;;N.B. This does NOT do any command terminator parsing -- that's a higher level concern
;;     to be dealt with by any subscribers to :webserial-rx
(defn receive-bytes [events bytes]
  (let [prev-event (last (vals events))
        ongoing (and (some? prev-event) (= (:event-type prev-event prev-event) :rx))
        ts (if ongoing (:timestamp prev-event) (.now js/Date))
        data (if ongoing (str (:bytes (:event-data prev-event)) bytes) bytes)]
    (assoc events ts {:timestamp ts
                      :event-type :rx
                      :event-data {:byte-encoding :text
                                   :bytes data}})))
;;TODO: Notify any downstream listeners (e.g. CD handlers) that new rx data has been added to the DB
;; :fx [[:dispatch [:webserial rx nil]]]))


;; ============================================================================
;; Controller - a statemachine
;; See https://lucywang000.github.io/clj-statecharts/

;;Initial context...
;; TODO Write a Schema?
;; ... also consider including event store in context here rather than separately in the refx db

(def default-context {:port nil
                      :port-description "NONE"
                      :port-config wss/DEFAULTS
                      :line-terminator "\r"
                      :events (sorted-map)})


(defn extract-last-exchange [events]
  (let [[command response] (->> events
                                (take-last 2) ;; ... last two event map entries (each of form [<key>timestamp <value>event]
                                (map second)  ;; ... discard the key
                                (map :event-data))] ;; ... and dig into event data
        {:timestamp (:timestamp response)
         :command command
         :response response}))

;; Notes:
;; 1. The event parameter passed to action handlers is a map containing {:data (<event-parameters>)}
;; 2. The use of `stack.core/dispatch` here has the potential to be a major footgun. It can ONLY be used
;;    for async callbacks. Synchronous use (for events targeting this statechart at least) will place this machine
;;    in an invalid state.
;;    Regardless - synchronous use of dispatch for events for this statechart should be considered a red flag -
;;    anything that can be resolved synchronously should be handled immediately within the machine rather than
;;    dispatching an event to trigger another call.
(def controller
  (hsm/machine
   {:id :webserial
    :initial :disconnected
    :context default-context

    :states

    {;; TOP-LEVEL STATE
     :disconnected
     {:initial :webserial_pending
      :entry (hsm/assign (fn [ctx _e]
                           (t/log! :info "Resetting port assignment")
                           (-> ctx
                               (assoc :port nil)
                               (assoc :port-description "NONE"))))
      :on {:port-disconnected {:actions (fn [_ctx _e]
                                          (t/log! :debug "Ignoring initial disconnection"))}
           :port-opened :connected}
      :states
      {:webserial_pending
       ;; Check the browser supports the webserial API
       {:always [{:guard wsi/is-supported?
                  :target :port-pending}
                 {:guard #(not (wsi/is-supported?))
                  :target :no-webserial}]}
       :no-webserial {}
       :port-pending
       {:entry (fn [ctx e]
                  ;; webserial port request must be initiated via ui element click
                 (t/log! :debug (str "PORT PENDING" ctx e)))
        :on {:request-port {:actions (fn [_ctx {:keys [data] :as _evt}]
                                        ;;TODO: We currently have two sources of truth for vendor-id filter -- the
                                        ;;      event parameter and data stored in context... choose one....
                                       (let [vendor-id (int (first data))]
                                         (wsi/await-port
                                          :vendor-id vendor-id
                                          :on-success #(dispatch [[:webserial :has-port %]])
                                          :on-failure #(t/log! :error "No port access granted"))))}

             :has-port {:actions (hsm/assign (fn [ctx {:keys [data] :as _evt}]
                                               ;;The ports get passed through as a sequence...
                                               (let [port (first data)]
                                                 (.addEventListener port "disconnect" #(dispatch [[:webserial :port-disconnected]]))
                                                 (-> ctx
                                                     (assoc :port port)
                                                     (assoc :port-description (wsi/describe-port port))))))
                        :target :opening_port}}}
       :opening_port
       {:entry (fn [ctx e]
                 (t/log! :debug (str "WAITING TO OPEN PORT" ctx e))
                 (wsi/open-port (:port ctx)
                                :options (:port-config ctx)
                                :on-success #(dispatch [[:webserial :port-opened]])
                                :on-failure #(dispatch [[:webserial :port-open-failure]])))
        :on {:port-open-failure {:actions (fn [ctx e] (t/event! ::port-open-failure {:data {:context ctx :error e}}))}}}}}

     ;; TOP-LEVEL STATE
     :connected
     {:entry (fn [ctx _e]
               (let [port (:port ctx)
                     port-id (wsi/describe-port port)]
                 (t/log! :info {:port-id port-id})
                 (wsi/go-read-text port #(dispatch [[:webserial :received %]]))))
      :on {:send
           {:actions (hsm/assign (fn [context {:keys [data]}]
                                   (let [{:keys [port line-terminator]} context
                                         ;; The event parameters are wrapped in a vector - get first element
                                         cmd (first data)
                                         timestamp (.now js/Date)]
                                     (t/log! :info cmd)
                                     (wsi/write port (str cmd line-terminator))
                                     ;; Append the command to event history for terminal view or whatever...
                                     (assoc-in context [:events timestamp] {:timestamp timestamp
                                                                            :event-type :command
                                                                            :event-data {:byte-encoding :text
                                                                                         :bytes cmd}}))))}
           :received
           {:actions (hsm/assign (fn [{:keys [events] :as context} {:keys [data]}]
                                   (let [bytes (first data)
                                         updated-events (receive-bytes events bytes)]
                                     (assoc context :events updated-events))))}
           :forget-port :disconnecting

           :port-disconnected :disconnected}}

     ;; TOP-LEVEL STATE
     :disconnecting
     {:entry (fn [ctx _event]
               (t/log! :info "TODO: Forget request received - IMPLEMENT ME")
               (let [port (:port ctx)
                     port-info (wsi/describe-port port)]
                 (wsi/forget-port port {:on-success #(dispatch [[:webserial :port-forgotten]])
                                        :on-failure #(t/event! ::forget-port-failure {:level :error :port port-info})})))
      :on {:port-forgotten :disconnected}}

;; END TOP-LEVEL STATES
     }}))

(defn init []
  (hsm/initialize controller default-context))
