(ns cljserial.components.serial-port
  "A webserial connection settings UI component."
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [cljserial.utils.webserial :as webserial]
   [cljserial.utils.schema :as schema]
   [cljserial.components.cards :as cards]
   [cljserial.components.tables :as tables :refer [td]]
   [cljserial.components.buttons :as buttons]
   [cljserial.components.forms :as forms :refer [select]]))


(defui settings
  [{:keys [port serial-options on-port-request on-port-close]}]
  {:pre [(m/validate webserial/SerialOptions serial-options)]}

  (let [has-port (not (= port nil))]
    ($ cards/card {:title "Port settings"
                   :action (if has-port
                             ($ buttons/button
                                {:size :xs :on-click on-port-close}
                                "Close port")
                             ($ buttons/button
                                {:size :xs :on-click on-port-request}
                                "Request port"))}
       ($ tables/table
          ($ :tbody
             ($ :tr
                ($ td "Port")
                (if has-port
                  ($ td port)
                  ($ td "None")))
             ($ :tr
                ($ td "Baud rate")
                ($ td ($ select {:items webserial/BAUD-RATES
                                 :selected (:baudRate serial-options)
                                 :disabled has-port})))
             ($ :tr
                ($ td "Data bits")
                ($ td ($ select {:items (schema/int-range webserial/DataBits)
                                 :format #(str %)
                                 :selected (:dataBits serial-options)
                                 :disabled has-port})))
             ($ :tr
                ($ td "Stop bits")
                ($ td ($ select {:items (schema/int-range webserial/StopBits)
                                 :format #(str %)
                                 :selected (:stopBits serial-options)
                                 :disabled has-port})))
             ($ :tr
                ($ td "Parity")
                ($ td ($ select {:items (schema/enum-values webserial/Parity)
                                 :format (fn [i] (name i))
                                 :selected (:parity serial-options)
                                 :disabled has-port})))
             ($ :tr
                ($ td "Flow control")
                ($ td ($ select {:items (schema/enum-values webserial/FlowControl)
                                 :format (fn [i] (name i))
                                 :selected (:flowControl serial-options)
                                 :disabled has-port}))))))))
