(ns cljserial.webserial
  (:require
   ;; [re-frame.core :as rf]
   [cljs.spec.alpha :as s]
   [cljs.core.async :as async :refer [go chan >!]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [cuerdas.core :as str]))


;; TODO: Define a meaningful connection parameters spec elswhere and include it...
(s/def ::connection string?)

;; This is LFS specific - probably belongs elsewhere
(def ^:const FTDI_PORT_FILTER {:usbVendorId 0x0403})
(def ^:const BAUD_RATE_DEFAULT 115200)
(def ^:const FLOW_CONTROL_DEFAULT "hardware")

(defn get-webserial-entrypoint []
  (.-serial js/navigator))

(defn is-supported? [] (not (nil? (get-webserial-entrypoint))))

;; REINSTATE WHEN THIS IS CONVERTED FROM RE-FRAME TO RE-FX
;; (defn display-support-status [id sub]
;;   (let [webserial-supported? (rf/subscribe sub)]
;;       [:div {:id id :hidden webserial-supported?} "Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags"]))

(defn- request-port+ []
  (js/console.log "Requesting port")
  (.requestPort (get-webserial-entrypoint) (clj->js {:filters [FTDI_PORT_FILTER]})))

;; (defn describe-port [port]
;;   (let [port-info (.getInfo ^js port)]
;;     (str (.-usbVendorId port-info) "::" (.-usbProductId port-info))))

(defn describe-port [port]
  (let [port-info (.getInfo ^js port)]
    ;; ClojureScript uselessly doesn't have built in hex formatting
    (str/format "%s::%s" (.-usbVendorId port-info) (.-usbProductId port-info))))

(defn await-port [& {:keys [on-success on-failure]}]
  (go (let [port (<p! (request-port+))]
        (if port (on-success port) (on-failure))
        (js/console.log (str "Got port " (describe-port port))))))

(defn- open-port+ [port]
  (js/console.log (str "Opening port" port))
  (try
    ;; This returns a promise...
    (.open port (clj->js {:baudRate BAUD_RATE_DEFAULT :flowControl FLOW_CONTROL_DEFAULT}))
    (catch js/Error e
      (js/console.log "Error opening port: " e)
      ;; InvalidStateError = port already open
      ;; NetworkError = failed to open port
      nil)))

(defn open-port [port & {:keys [on-success on-failure]}]
  (go (try
        (<p! (open-port+ port))
        (js/console.log "Opened port: " port)
        (on-success port)
        (catch js/Error e
          (js/console.log "Error opening port: " e)
          ;; InvalidStateError = port already open
          ;; NetworkError = failed to open port
          (on-failure port)
          nil))))

;; get-read-channel modelled on the js example below:
;; ... from https://wicg.github.io/serial/#readable-attribute
;;
;; while (port.readable) {
;;   const reader = port.readable.getReader();
;;   try {
;;     while (true) {
;;       const { value, done } = await reader.read();
;;       if (done) {
;;         // |reader| has been canceled.
;;         break;
;;       }
;;       // Do something with |value|...
;;     }
;;   } catch (error) {
;;     // Handle |error|...
;;   } finally {
;;     reader.releaseLock();
;;   }
;; }
(defn read-next [reader]
  (go (try
        (<p! (.read reader))
        (catch js/Error e
          (js/console.log "Port read error" e)
          nil))))

(defn do-read-loop [port byte-handler]
  (loop [readable (.readable port)]
    (when readable
      (let [reader (.getReader readable)]
        (try
          (loop [new-bytes (read-next reader)]
            (when new-bytes
              (byte-handler new-bytes))
            (recur (read-next reader)))
          (catch js/Error e
            (js/console.log "Port read error" e))
          (finally (.releaseLock reader))))
      (recur (.readable port)))))

(defn get-read-channel [port]
  (let [byte-channel (chan)
        byte-handler (fn [new-bytes] (>! byte-channel new-bytes))]
    (go (do-read-loop port byte-handler))
    ; return the channel
    byte-channel))

(defn write [port command]
  (let [writer (.getWriter (.writable port))
        encoder (js/web.TextEncoder.)]
    (js/console.log (str ">> " command))
    (.write writer (.encode encoder command))
    (.releaseLock writer)))
