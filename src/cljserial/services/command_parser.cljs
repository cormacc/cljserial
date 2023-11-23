(ns cljserial.services.command-parser
  (:require
   [malli.core :as m]
   [lambdaisland.glogi :as log]
   [refx.alpha :as refx :refer [reg-event-fx reg-event-db]]
   [refx.interceptors :refer [path]]
   [cljserial.services.webserial :as wss]))


;;---------------------------------------------------------------------------------------
;; Schema
(def Exchange [:map
                  [:command wss/EventData]
                  [:response wss/EventData]])

(def ExchangeHistory
  [:map-of wss/Timestamp Exchange])

(defn new-history-store [] (sorted-map))

;;---------------------------------------------------------------------------------------
;; Implementation

(defn- get-handler [handlers command]
  (first (filter #(re-matches (:matcher %) command) handlers)))

;; 1. When webserial module announces new data received, identify/announce a completed command/response transaction
(defn set-exchange-tokeniser [command-complete?]
  (reg-event-fx
   :webserial-rx
   wss/serial-event-interceptors
   (fn [{:keys [db timestamp]}  [_ _]]
     ;; 1. Construct a command-response pair from the last two serial events...
     (let [[command response] (->> db
                                   (take-last 2) ;; ... last two event map entries (each of form [<key>timestamp <value>event]
                                   (map second)  ;; ... discard the key
                                   (map :event-data)) ;; ... and dig into event data
           ;; 2. Check if the response is complete using the provided callback fn
           is-complete? (command-complete? command response)]
       ;; 3. If complete, publish the command-response pair for downstream parsing
       ;;    This uses the :dispatch coeffect built-in to refx (and also reframe)
       {:fx [(when is-complete?
               [:dispatch [:command-response {:timestamp timestamp
                                              :command command
                                              :response response}]])]}))))

;; 2 (optional). When a command/response pair is announced, append it to the command history
(defn retain-history []
  (reg-event-db
   :command-response
   [(path [:command-history])]
   (fn [history [_ new-entry]]
     {:pre [(m/validate Exchange new-entry)]}
     (log/info :model/command-history new-entry)
     (assoc history (:timestamp new-entry) new-entry))))

;; 3. When a command/response pair is announced, look up a handler to parse the response and
;;    update application state
(defn set-handlers [handlers db-path-base]
  (reg-event-db
   :command-response
   [(path [db-path-base])]
   (fn [db [_ new-entry]]
     (let [{:keys [command response]} new-entry
           cmd-text (:bytes command)
           resp-text (:bytes response)
           cmd-handler (get-handler handlers cmd-text)
           ;;TODO: Implement support for the :db-subpath entry of the handler map
           db-update ((:response-parser cmd-handler) db resp-text)]
       ;; return updated db, but only if non-nil
       (or db-update db)))))
