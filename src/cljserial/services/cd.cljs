(ns cljserial.services.cd
  (:require
   [clojure.string :as str]
   [malli.core :as m]
   [lambdaisland.glogi :as log]
   [refx.alpha :as refx :refer [reg-sub reg-event-fx reg-event-db]]
   [cljserial.schema.version :refer [Version]]
   [cljserial.services.webserial :as wss]
   [cljserial.services.command-parser :as commands]))


;;---------------------------------------------------------------------------------------
;; Schema
(def File
  [:map
   [:path :string]
   [:attributes :string]
   [:size :int]
   [:timestamp :string]
   [:bytes :string]])

(def CdState
  [:map
   [:serial :int]
   [:hardware-revision :int]
   [:firmware-revision Version]
   [:build-configuration :string]
   [:bluetooth-firmware :string]
   [:track :int]])

(def initial-state
  {:serial 0
   :hardware-revision 0
   :firmware-revision {:major 0 :minor 0 :patch 0}
   :build-configuration ""
   :bluetooth-firmware ""
   :track 0})


;;---------------------------------------------------------------------------------------

(def line-terminator "\r\n")
(def response-terminator (str line-terminator "OK" line-terminator))
;;TODO: Rework this later to allow binary and text mode command handling...
(defn command-complete? [cmd resp]
  {:pre [(m/validate wss/EventData cmd)
         (m/validate wss/EventData resp)]}
  (str/ends-with? (:bytes resp) response-terminator))


;; TODO: Rework this and webserial/commands module to allow effects as well as db modification
;;       E.g. for file storage etc. we'll probably want to have coeffects to trigger file upload to S3 or whatever...
(def command-handlers
  [;; >> getid
   ;; MBT Controller #00000092 / HW v1 / FW v15.2.9
   ;; BT: Melody Audio V5.6 RC2 (MELODY_5x)
   ;; IOD 1601#0000112 / 145 hrs
   ;; OK
   {:id :getid
    :matcher #"getid"
    :db-subpath nil
    :response-parser
    (fn [db resp]
      (when-let [match (re-find #"MBT (\S+) #(\d+) / HW v(\d+) / FW v(\d+)\.(\d+)\.(\d+)" resp)]
        (assoc db
               :build-configuration (get match 1)
               :serial (int (get match 2))
               :hardware-revision (int (get match 3))
               :firmware-revision
               {:major (int (get match 4))
                :minor (int (get match 5))
                :patch (int (get match 6))})))}
   ;; >> clin track
   ;; Selected TRACK01
   ;; OK
   {:id :clin-track
    :matcher #"clin track"
    :db-subpath nil
    :response-parser
    (fn [db resp]
      (when-let [match (re-find #"Selected TRACK(\d+)" resp)]
        (assoc db
               :track (int (get match 1)))))}])

(defn init []
  (commands/set-exchange-tokeniser command-complete?)
  (commands/retain-history)
  (commands/set-handlers command-handlers [:cd-info])

;; Subscription for cd state database updates...
;; TODO: Maybe we should do this in (commands/set-handlers instead?)
  (reg-sub
   :cd-info
   (fn [db _query-vector]
     (get-in db [:cd-info]))))
