(ns cljserial.utils.webserial
  (:require
   ;;TODO: Eliminate use of core async here -- use native js interop or promesa?
   ;;....  as core async allegedly increases bundle size considerably....
   [cljs.core.async :as async :refer [go go-loop chan >!]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [lambdaisland.glogi :as log]
   ;; To define a js class for use with streams API
   [shadow.cljs.modern :refer (defclass)]
   [cuerdas.core :as str]))

;; TODO: Define a meaningful connection parameters spec elswhere and include it...

;; Hard coded filter for FTDI devices for now, as that's what I'm using
;; TODO: Generalise this and replace with a settings component of some description...
(def ^:const FTDI_PORT_FILTER {:usbVendorId 0x0403})
(def ^:const BAUD_RATE_DEFAULT 115200)
(def ^:const FLOW_CONTROL_DEFAULT "hardware")

(defn get-webserial-entrypoint []
  (.-serial js/navigator))

(defn is-supported? [] (not (nil? (get-webserial-entrypoint))))

(defn- request-port+ []
  (log/info :port/request "Requesting port")
  (.requestPort (get-webserial-entrypoint) (clj->js {:filters [FTDI_PORT_FILTER]})))

(defn describe-port [port]
  (let [port-info (.getInfo ^js port)]
    ;; ClojureScript uselessly doesn't have built in hex formatting
    (str/format "%s::%s" (.-usbVendorId port-info) (.-usbProductId port-info))))

(defn await-port [& {:keys [on-success on-failure]}]
  (go (let [port (<p! (request-port+))]
        (if port (on-success port) (on-failure))
        (log/info :port/acquired (str "Got port " (describe-port port))))))

(defn- open-port+ [port]
  (log/info :port/open-attempt (describe-port port))
  (try
    ;; This returns a promise...
    (.open port (clj->js {:baudRate BAUD_RATE_DEFAULT
                          :flowControl FLOW_CONTROL_DEFAULT
                          :bufferSize 4096}))
    (catch js/Error e
      (log/error :port/open-failure e)
      ;; InvalidStateError = port already open
      ;; NetworkError = failed to open port
      nil)))

(defn open-port [port & {:keys [on-success on-failure]}]
  (go (try
        (<p! (open-port+ port))
        (log/info :port/open-success port)
        (on-success port)
        (catch js/Error e
          (log/error :port/open-failure e)
          ;; InvalidStateError = port already open
          ;; NetworkError = failed to open port
          (on-failure port)
          nil))))

(defn go-read-as [{:keys [port byte-stream-transformer handler]}]
  (go-loop [readable (.-readable port)]
    (when readable
      (let [reader (-> readable
                       (byte-stream-transformer)
                       (.getReader))]
        (try
          (loop [response (<p! (.read reader))]
            (when response
              ;; N.B. converted javascript hashmap keys are strings rather than keywords...
              ;; N.B. 'done' flag is a mechanism to allow aborting a read via reader.cancel()
              ;;      ... though we're not respecting that here (yet)
              (let [{:strs [value _done]} (js->clj response)
                    ;;if we want to work with binary data later, this will convert bytearr to string
                    ;;bytes-as-str (apply str (map char (vec value)))
                    ]
                (handler value)))
            (recur (<p! (.read reader))))
          (catch js/Error e

            (log/error :port/read-failure e))
          (finally
            (log/debug :port/release-read-lock port)
            (.releaseLock reader)))
        (recur (.-readable port))))))


(defn as-byte-readable [readable]
  ;;This one's an NOP
  readable)

(defn as-text-readable [readable]
  (.pipeThrough readable (js/TextDecoderStream.)))


;; Define javascript class using shadow-cljs modern macro
;; I may not need this, as not extending a clas....
;; TODO: Investigate doing this with deftype instead?
(defclass LineBreakTransformer
  (field line-break)
  (field text-buffer)
  (constructor [this line-break-str]
    (set! line-break line-break-str)
    (set! text-buffer ""))
  Object
  (transform [this chunk controller]
    (let [in (str text-buffer chunk)
          lines (.split in line-break)
          remaining (.pop lines)]
      (doseq [l lines]
        (log/trace :port/rx-line l)
        (.enqueue controller l))
      (set! text-buffer remaining)))
  (flush [this controller]
    (.enqueue controller text-buffer)))


;; This one could be adapted for packet-type handling -- using another defined sequence rather than \r\n
(defn as-line-readable [readable]
  (-> readable
      (.pipeThrough (js/TextDecoderStream.)
                       ;; This gives us an error cannot pip through a locked stream...
      (.pipeThrough (js/TransformStream. (LineBreakTransformer. "\r\n"))))))

;; Three implementations of the read loop...
(defn go-read-text [port handler]
  (go-read-as {:port port
               :handler handler
               :byte-stream-transformer as-text-readable}))

(defn go-read-bytes [port handler]
  (go-read-as {:port port
               :handler handler
               :byte-stream-transformer as-byte-readable}))

(defn go-read-lines [port handler]
  (go-read-as {:port port
               :handler handler
               :byte-stream-transformer as-line-readable}))



(defn get-read-channel [port]
  (let [byte-channel (chan)
        byte-handler (fn [new-bytes] (>! byte-channel new-bytes))]
    (go-read-bytes port byte-handler)
    ; return the channel
    byte-channel))

(defn write [port command]
  (let [writer (.getWriter (.-writable port))
        encoder (js/TextEncoder.)]
    (log/debug :port/tx-line command)
    (.write writer (.encode encoder command))
    (.releaseLock writer)))
