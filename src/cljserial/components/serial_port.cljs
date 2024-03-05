(ns cljserial.components.serial-port
  "A webserial connection settings UI component."
  (:require
   [lambdaisland.glogi :as log]
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [cljserial.utils.webserial :as webserial]
   [cljserial.utils.schema :as schema]
   [cljserial.components.cards :as cards]
   [cljserial.components.tables :as tables :refer [td]]
   [cljserial.components.buttons :as buttons]
   [cljserial.components.forms :as forms :refer [select]]))


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
               ($ :tr ($ td "Port") ($ td port))
               ($ :tr
                  ($ td "Port filter")
                  ($ td ($ select {:items webserial/PORT-FILTERS
                                   :format webserial/describe-port-filter
                                   :value #(:usbVendorId %)
                                   :selected (:vendorIdFilter options)
                                   :disabled has-port
                                   :on-change #(on-option-update :vendorIdFilter (.-value (.-target %1)))
                                   }))))
             ($ :tr
                ($ td "Baud rate")
                ($ td ($ select {:items webserial/BAUD-RATES
                                 :selected (:baudRate options)
                                 :disabled has-port
                                 :on-change #(on-option-update :baudRate (.-value (.-target %1)))})))
             ($ :tr
                ($ td "Data bits")
                ($ td ($ select {:items (schema/int-range webserial/DataBits)
                                 :format #(str %)
                                 :selected (:dataBits options)
                                 :disabled has-port
                                 :on-change #(on-option-update :dataBits (.-value (.-target %1)))})))
             ($ :tr
                ($ td "Stop bits")
                ($ td ($ select {:items (schema/int-range webserial/StopBits)
                                 :format #(str %)
                                 :selected (:stopBits options)
                                 :disabled has-port
                                 :on-change #(on-option-update :stopBits (.-value (.-target %1)))})))
             ($ :tr
                ($ td "Parity")
                ($ td ($ select {:items (schema/enum-values webserial/Parity)
                                 :format (fn [i] (name i))
                                 :selected (:parity options)
                                 :disabled has-port
                                 :on-change #(on-option-update :parity (.-value (.-target %1)))})))
             ($ :tr
                ($ td "Flow control")
                ($ td ($ select {:items (schema/enum-values webserial/FlowControl)
                                 :format (fn [i] (name i))
                                 :selected (:flowControl options)
                                 :disabled has-port
                                 :on-change #(on-option-update :flowControl (.-value (.-target %1)))}))))))))
