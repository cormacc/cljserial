(ns cljserial.components.serial-port
  "A webserial connection settings UI component."
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [cljserial.utils.webserial :as webserial]
   [cljserial.utils.schema :as schema]
   [cljserial.components.lib :as my]))


(defui settings
  [{:keys [port serial-options connected]}]
  {:pre [(m/validate webserial/SerialOptions serial-options)]}
  ($ :.card.bg-white
     ($ :.card-body
        ($ :table
           ($ :tbody
              ($ :tr
                 ($ :td "Port")
                 ($ :td port))
              ($ :tr
                 ($ :td "Baud rate")
                 ($ :td ($ my/select {:items webserial/BAUD-RATES :selected (:baudRate serial-options)})))
              ($ :tr
                 ($ :td "Data bits")
                 ($ :td ($ my/select {:items (schema/int-range webserial/DataBits)
                                      :format #(str %)
                                      :selected (:dataBits serial-options)})))
              ($ :tr
                 ($ :td "Stop bits")
                 ($ :td ($ my/select {:items (schema/int-range webserial/StopBits)
                                      :format #(str %)
                                      :selected (:stopBits serial-options)})))
              ($ :tr
                 ($ :td "Parity")
                 ($ :td ($ my/select {:items (schema/enum-values webserial/Parity)
                                      :format (fn [i] (name i))
                                      :selected (:parity serial-options)})))
              ($ :tr
                 ($ :td "Flow control")
                 ($ :td ($ my/select {:items (schema/enum-values webserial/FlowControl)
                                      :format (fn [i] (name i))
                                      :selected (:flowControl serial-options)})))))
        "N.B.: Not actually applying these settings as yet")))
