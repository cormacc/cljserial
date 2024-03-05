(ns cljserial.utils.webserial
  (:require
   ;;TODO: Eliminate use of core async here -- use native js interop or promesa?
   ;;....  as core async allegedly increases bundle size considerably....
   [cljs.core.async :as async :refer [go go-loop chan >!]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [lambdaisland.glogi :as log]
   ;; To define a js class for use with streams API
   [shadow.cljs.modern :refer (defclass)]
   [cuerdas.core :as str]
   [malli.core :as m]
   ;; [malli.generator :as mg]
   [malli.transform :as mt]
   ))


;; Some reasonable standard baud rates for FTDI USB serial devices
(def ^:const BAUD-RATES [4000000 2000000 1000000 512000 256000 128000 115200 57600 38400 19200 9600])

;; Defined by WebSerial API
;; See https://wicg.github.io/serial/#ref-for-dom-serialoptions-2

(def DataBits [:int {:min 7, :max 8}])
(def StopBits [:int {:min 0, :max 1}])
(def Parity [:enum :none :even :odd])
(def FlowControl [:enum :none :hardware])


;; Port filter for WebSerial requestPort method
;; API allows narrowing by product ID also, but vendor ID is as far as we want to go just now
(def VendorId [:int {:min 0x0000, :max 0xFFFF}])

(def PortFilter [:map
                 :name [:string {:min 1 :default "None"}]
                 :usbVendorId {:default 0}])

(def SerialOptions [:map
                    [:vendorIdFilter {:default 0} VendorId]
                    [:baudRate {:default 115200}[:int {:min 1, :max 10000000}]]
                    [:dataBits {:default 8} DataBits]
                    [:stopBits {:default 1} StopBits]
                    [:parity {:default :none} Parity]
                    ;;I have no idea what the max is here - though it's an unsigned long...
                    [:bufferSize {:default 255} [:int {:min 1, :max (* 1024 1024)}]]
                    [:flowControl {:default :none} FlowControl]])

(def ^:const DEFAULTS (m/decode SerialOptions {} mt/default-value-transformer))

(def ^:const PORT-FILTERS [{:name "None" :usbVendorId 0x0000}
                           {:name "FTDI" :usbVendorId 0x0403}])

(defn describe-port-filter [pf]
  ;; {:pre [(m/validate PortFilter pf)]}
  (str/format "%s (%s)" (:name pf) (:usbVendorId pf)))

;; Hard coded filter for FTDI devices for now, as that's what I'm using
;; TODO: Generalise this and replace with a settings component of some description...
(def ^:const FTDI_PORT_FILTER {:usbVendorId 0x0403 :name "FTDI"})

(def ^:const BAUD_RATE_DEFAULT 115200)
(def ^:const FLOW_CONTROL_DEFAULT "hardware")

(defn get-webserial-entrypoint []
  (.-serial js/navigator))

(defn is-supported? [] (not (nil? (get-webserial-entrypoint))))

(defn- request-port+ [vendor-id]
  (log/info :port/request "Requesting port"
            :port/filter vendor-id)
  (let [filters (if (and vendor-id (> vendor-id 0))
                  [{:usbVendorId vendor-id}]
                  [])]
    (.requestPort (get-webserial-entrypoint) (clj->js {:filters filters}))))

(defn describe-port [port]
  (let [port-info (.getInfo ^js port)]
    ;; ClojureScript uselessly doesn't have built in hex formatting
    (str/format "%s::%s" (.-usbVendorId port-info) (.-usbProductId port-info))))

(defn await-port [& {:keys [vendor-id on-success on-failure] :or {vendor-id nil}}]
  (go (let [port (<p! (request-port+ vendor-id))]
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

(defn open-port [port & {:keys [options on-success on-failure] :or {options DEFAULTS}}]
  (go (try
        (log/info :port/open-serial-options options)
        (<p! (open-port+ port))
        (log/info :port/open-success port)
        (on-success port)
        (catch js/Error e
          (log/error :port/open-failure e)
          ;; InvalidStateError = port already open
          ;; NetworkError = failed to open port
          (on-failure port)
          nil))))

(defn forget-port
  "Close and 'forget' the port (i.e. relinquish the access permissions).
  See https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/forget"
  [port & {:keys [on-success on-failure]}]
  (try
    (go (let [_result (<p! (.forget ^js port))]
        ;; The promise resolves to nil
          (on-success)))
    (catch js/Error e
      (log/error :port/forget-failure e)
      (on-failure e))))

;;TODO Add flag for graceful exit?
;;     Currently when we forget/disconnect, there's an error in the console
;;     Harmless, but noisy/inelegant
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
