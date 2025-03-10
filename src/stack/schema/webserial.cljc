(ns stack.schema.webserial
  (:require
   [malli.core :as m]
   [malli.transform :as mt]
   [cuerdas.core :as str]
   [stack.utils.schema :as schema]))

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
                    [:baudRate {:default 115200} [:int {:min 1, :max 10000000}]]
                    [:dataBits {:default 8} DataBits]
                    [:stopBits {:default 1} StopBits]
                    [:parity {:default :none} Parity]
                    ;;I have no idea what the max is here - though it's an unsigned long...
                    [:bufferSize {:default 255} [:int {:min 1, :max (* 1024 1024)}]]
                    [:flowControl {:default :none} FlowControl]])

(def ^:const DEFAULTS (m/decode SerialOptions {} mt/default-value-transformer))

(def ^:const FTDI-USB-VENDOR-ID 0x0403)

(def ^:const PORT-FILTERS [{:name "None" :usbVendorId 0x0000}
                           {:name "FTDI" :usbVendorId FTDI-USB-VENDOR-ID}])

;;TODO: Reconcile these with the decoded DEFAULTS above...
(def ^:const BAUD-RATE-DEFAULT 115200)
(def ^:const FLOW-CONTROL-DEFAULT "hardware")

(def ^:const DATA-BITS (schema/int-range DataBits))
(def ^:const STOP-BITS (schema/int-range StopBits))
(def ^:const PARITY (schema/enum-values Parity))
(def ^:const FLOW-CONTROL (schema/enum-values FlowControl))


(defn describe-port-filter [pf]
  ;; {:pre [(m/validate PortFilter pf)]}
  (str/format "%s (%s)" (:name pf) (:usbVendorId pf)))
