(ns cljserial.cd.model
  (:require
   [clojure.string :as str]
   [cljs.spec.alpha :as s]
   [lambdaisland.glogi :as log]
   [refx.alpha :as refx :refer [reg-sub reg-event-fx reg-event-db]]
   [cljserial.webserial.commands :as commands]))


;;---------------------------------------------------------------------------------------
;; Schema

;;... CD info / state
(s/def :semver/major int?)
(s/def :semver/minor int?)
(s/def :semver/patch int?)
(s/def :semver/version (s/keys :req-un [:semver/major :semver/minor :semver/patch]))

(s/def :device/lot int?)
(s/def :device/serial int?)
(s/def :device/hardware-revision int?)
(s/def :device/firmware-revision :semver/version)

(s/def :iod/hours int?)

;;Omitting hwrev and fwrev for now while we parse getid output
(s/def :iod/iod (s/keys :req-un [:device/lot :device/serial :iod/hours]))

;;Omitting BT firmware revision for now as we'll probably switch over to malli shortly -> save rework
(s/def :cd/track int?)
(s/def :cd/state (s/keys :req-un [:device/serial :device/hardware-revision :device/firmware-revision
                                  :cd/track]))

(def initial-state
  {:serial 0
   :hardware-revision 0
   :firmware-revision {:major 0 :minor 0 :patch 0}
   :track 0})


;;---------------------------------------------------------------------------------------
;;FIXME: This key is too generic -- review at cljserial/model level
(def state-path [:state])

(def line-terminator "\r\n")
(def response-terminator (str line-terminator "OK" line-terminator))
;;TODO: Rework this later to allow binary and text mode command handling...
(defn command-complete? [cmd resp]
  {:pre (s/valid? :webserial/event-data resp)}
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
      (when-let [match (re-find #"MBT Controller #(\d+) / HW v(\d+) / FW v(\d+)\.(\d+)\.(\d+)" resp)]
        (assoc db
               :serial (int (get match 1))
               :hardware-revision (int (get match 2))
               :firmware-revision
               {:major (int (get match 3))
                :minor (int (get match 4))
                :patch (int (get match 5))})))}
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

(commands/set-exchange-tokeniser command-complete?)
(commands/retain-history)
(commands/set-handlers command-handlers state-path)

;; Subscription for cd state database updates...
;; TODO: Maybe we should do this in (commands/set-handlers instead?)
(reg-sub
 :cd-info
 (fn [db _query-vector]
   (get-in db state-path)))