(ns stack.services.command-parser
  (:require
   [taoensso.telemere :as t]
   [malli.core :as m]
   [stack.utils.dbfx :as dbfx]))

;;---------------------------------------------------------------------------------------
;; Schema
;; .... see stack.utils.term

;;---------------------------------------------------------------------------------------
;; Implementation

(defn- get-handler [handlers command]
  (first (filter #(re-matches (:matcher %) command) handlers)))

;; 1. When webserial module announces new data received, identify/announce a completed command/response transaction
(defn set-exchange-tokeniser [command-complete?]
  (dbfx/reg-event-fx
   :webserial-rx ;;FIXME: Hard coded assumption that we're only handling webserial events -- allow for bluetooth, most likely by adding event id as an input parameter
   ;; wss/serial-event-interceptors
   [dbfx/path [:services :webserial]]
   (fn [{:keys [db timestamp]}  [_ _]]
     ;; 1. Construct a command-response pair from the last two serial events...
     (let [[command response] (->> db
                                   (take-last 2) ;; ... last two event map entries (each of form [<key>timestamp <value>event]
                                   (map second)  ;; ... discard the key
                                   (map :event-data)) ;; ... and dig into event data
           ;; 2. Check if the response is complete using the provided callback fn
           is-complete? (command-complete? command response)]
       ;; 3. If complete, publish the command-response pair for downstream parsing
       ;;    This uses the :dispatch effect built-in to refx (and also reframe)
       {:fx [(when is-complete?
               [:dispatch [:command-response {:timestamp timestamp
                                              :command command
                                              :response response}]])]}))))

;; FIXME: Can't have two handlers for same event
;; If we want this, rework so that this is the event handler and the parser subscribes
;; to the history db....
;; 2 (optional). When a command/response pair is announced, append it to the command history
;; (defn retain-history []
;;   (dbfx/reg-event-db
;;    :command-response
;;    [(dbfx/path [:command-history])]
;;    (fn [history [_ new-entry]]
;;      {:pre [(m/validate Exchange new-entry)]}
;;      (t/log! :info (str new-entry))
;;      (assoc history (:timestamp new-entry) new-entry))))

;; 3. When a command/response pair is announced, look up a handler to parse the response and
;;    update application state
(defn set-handlers [handlers db-path-base]
  (dbfx/reg-event-db
   :command-response
   [(dbfx/path [db-path-base])]
   (fn [db [_ new-entry]]
     (let [{:keys [command response]} new-entry
           cmd-text (:bytes command)
           resp-text (:bytes response)
           cmd-handler (get-handler handlers cmd-text)
           ;;TODO: Implement support for the :db-subpath entry of the handler map
           db-update (when cmd-handler ((:response-parser cmd-handler) db resp-text))]
       ;; return updated db, but only if non-nil
       (or db-update db)))))
