(ns cljserial.components.cd-info
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [cljserial.schema.version :as version]
   [cljserial.cd.model :as cdm]))

(defui table [cd-info]
  {:pre [m/validate cdm/CdState cd-info]}
  ($ :table.table
     ($ :tbody
        ($ :tr ($ :th "Serial #") ($ :td (:serial cd-info)))
        ($ :tr ($ :th "Hardware Revision") ($ :td (:hardware-revision cd-info)))
        ($ :tr ($ :th "Firmware Revision")  ($ :td (version/->string (:firmware-revision cd-info))))
        ($ :tr ($ :th "Track") ($ :td (:track cd-info))))))
