(ns cljserial.components.serial-port
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [cljserial.utils.webserial :refer [SerialOptions]]))

(defui settings
  [serial-options]
  ;; {:pre [(m/validate SerialOptions serial-options)]}
  ($ :.card-body
     ($ :table
        ($ :tbody
           ($ :tr ($ :td "Port") ($ :td "<Select Port>"))
           ($ :tr ($ :td "Baud rate") ($ :td "<Select baudrate>"))
           ($ :tr ($ :td "Data bits") ($ :td "<Radio>"))
           ($ :tr ($ :td "Stop bits") ($ :td "<Radio>"))
           ($ :tr ($ :td "Parity") ($ :td "<Select>"))
           ($ :tr ($ :td "Flow control") ($ :td "<Select>"))))))
