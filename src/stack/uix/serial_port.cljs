(ns stack.uix.serial-port
  "A webserial connection settings UI component."
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [stack.utils.schema :as schema]
   [stack.schema.webserial :as webserial]
   [stack.uix.cards :as cards]
   [stack.uix.tables :as tables]
   [stack.uix.buttons :as buttons]
   [stack.uix.forms :as forms :refer [select]]))

(defn format-keyword [kw]
  (if (keyword? kw)
    (name kw)
    (str kw)))

(defui settings
  [{:keys [port options on-port-request on-port-forget on-option-update]}]
  {:pre [(m/validate webserial/SerialOptions options)]}

  (let [has-port (not (= port nil))]
    ($ cards/card {:title "Port settings"
                   :action (if has-port
                             ($ buttons/button
                                {:size :xs :on-click on-port-forget}
                                "Close port")
                             ($ buttons/button
                                {:size :xs :on-click on-port-request}
                                "Request port"))}
       ($ tables/table
          ($ :tbody
             (if has-port
               ($ :tr ($ :td "Port") ($ :td port))
               ($ :tr
                  ($ :td "Port filter")
                  ($ :td ($ select {:items webserial/PORT-FILTERS
                                    :format webserial/describe-port-filter
                                    :value #(:usbVendorId %)
                                    :selected (:vendorIdFilter options)
                                    :disabled has-port
                                    :on-change #(on-option-update :vendorIdFilter (.-value (.-target %1)))}))))
             ($ :tr
                ($ :td "Baud rate")
                ($ :td ($ select {:items webserial/BAUD-RATES
                                  :selected (:baudRate options)
                                  :disabled has-port
                                  :on-change #(on-option-update :baudRate (.-value (.-target %1)))})))
             ($ :tr
                ($ :td "Data bits")
                ($ :td ($ select {:items (schema/int-range webserial/DataBits)
                                  :format #(str %)
                                  :selected (:dataBits options)
                                  :disabled has-port
                                  :on-change #(on-option-update :dataBits (.-value (.-target %1)))})))
             ($ :tr
                ($ :td "Stop bits")
                ($ :td ($ select {:items (schema/int-range webserial/StopBits)
                                  :format #(str %)
                                  :selected (:stopBits options)
                                  :disabled has-port
                                  :on-change #(on-option-update :stopBits (.-value (.-target %1)))})))
             ($ :tr
                ($ :td "Parity")
                ($ :td ($ select {:items (schema/enum-values webserial/Parity)
                                  :format format-keyword
                                  :selected (:parity options)
                                  :disabled has-port
                                  :on-change #(on-option-update :parity (.-value (.-target %1)))})))
             ($ :tr
                ($ :td "Flow control")
                ($ :td ($ select {:items (schema/enum-values webserial/FlowControl)
                                  :format format-keyword
                                  :selected (:flowControl options)
                                  :disabled has-port
                                  :on-change #(on-option-update :flowControl (.-value (.-target %1)))}))))))))
