(ns stack.apis.webserial
  (:require
   [cljs.core.async :as async]
   [cljs.core.async.interop :refer-macros [<p!]]
   [taoensso.telemere :as t]
   [promesa.core :as p]
   [cuerdas.core :as str]
   [stack.schema.webserial :refer [BAUD-RATE-DEFAULT FLOW-CONTROL-DEFAULT DEFAULTS]]))

(defn get-webserial-entrypoint []
  (.-serial js/navigator))

(defn is-supported? [] (not (nil? (get-webserial-entrypoint))))

(defn- request-port+ [vendor-id]
  (t/log! {:level :info :data {:vendor-filter vendor-id}} "Requesting port")
  (let [filters (if (and vendor-id (> vendor-id 0))
                  [{:usbVendorId vendor-id}]
                  [])]
    (.requestPort (get-webserial-entrypoint) (clj->js {:filters filters}))))

(defn describe-port [port]
  (let [port-info (.getInfo ^js port)]
    ;; ClojureScript uselessly doesn't have built in hex formatting
    (str/format "%s::%s" (.-usbVendorId port-info) (.-usbProductId port-info))))

(defn await-port [& {:keys [vendor-id on-success on-failure] :or {vendor-id nil}}]
  (async/go (p/let [port (request-port+ vendor-id)]
             (if port (on-success port) (on-failure))
             (t/log! :info (str "Got port " (describe-port port))))))

(defn- open-port+ [port]
  (t/log! :info (describe-port port))
  (try
    ;; This returns a promise...
    (.open port (clj->js {:baudRate BAUD-RATE-DEFAULT
                          :flowControl FLOW-CONTROL-DEFAULT
                          :bufferSize 4096}))
    (catch js/Error e
      (t/event! ::port-open-failure {:level :error :data e})
      ;; InvalidStateError = port already open
      ;; NetworkError = failed to open port
      nil)))

(defn open-port [port & {:keys [options on-success on-failure] :or {options DEFAULTS}}]
  (async/go (t/log! {:level :info :data options} "Opening port...")
           (-> (open-port+ port)
               (p/then (fn []
                         (t/event! ::port-opened {:level :info :data port})
                         (on-success port)))
               (p/catch (fn [e]
                          (t/event! ::port-open-failure {:level :error :data e})
                          ;; InvalidStateError = port already open
                          ;; NetworkError = failed to open port
                          (on-failure port)
                          nil)))))

(defn forget-port
  "Close and 'forget' the port (i.e. relinquish the access permissions).
  See https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/forget"
  [port & {:keys [on-success on-failure]}]
  (async/go (-> (.forget ^js port)
               ;; The promise resolves to nil
               (p/then on-success)
               (p/catch (fn [e]
                          (t/event! ::port-forget-failure {:level :error :data e})
                          (on-failure e))))))

;;TODO Add flag for graceful exit?
;;     Currently when we forget/disconnect, there's an error in the console
;;     Harmless, but noisy/inelegant
(defn go-read-as [{:keys [port byte-stream-transformer handler]}]
  (async/go
    (let [reader (-> (.-readable port)
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
          (t/event! :port-read-failure {:level :error :data e}))
        (finally
          (t/log! {:level :debug :data port} "Releasing port read lock")
          (.releaseLock reader))))))


(defn as-byte-readable [readable]
  ;;This one's an NOP
  readable)

(defn as-text-readable [readable]
  (.pipeThrough readable (js/TextDecoderStream.)))

(defn go-read-text [port handler]
  (go-read-as {:port port
               :handler handler
               :byte-stream-transformer as-text-readable}))

(defn go-read-bytes [port handler]
  (go-read-as {:port port
               :handler handler
               :byte-stream-transformer as-byte-readable}))

(defn get-read-channel [port]
  (let [byte-channel (async/chan)
        byte-handler (fn [new-bytes] (async/>! byte-channel new-bytes))]
    (go-read-bytes port byte-handler)
    ; return the channel
    byte-channel))

(defn write [port command]
  (let [writer (.getWriter (.-writable port))
        encoder (js/TextEncoder.)]
    (t/log! :debug command)
    (.write writer (.encode encoder command))
    (.releaseLock writer)))
