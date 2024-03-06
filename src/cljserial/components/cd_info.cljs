(ns cljserial.components.cd-info
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [cljserial.components.cards :as cards]
   [cljserial.components.tables :as tables :refer [td]]
   [cljserial.schema.version :as version]
   [cljserial.services.cd :as cd]))

(defui table [cd-info]
  {:pre [m/validate cd/CdState cd-info]}
  ($ cards/card {:title "Controller Info"}
     ($ tables/table
        ($ :tbody
           ($ :tr ($ td "Serial #") ($ td (:serial cd-info)))
           ($ :tr ($ td "Hardware Revision") ($ td (:hardware-revision cd-info)))
           ($ :tr ($ td "Firmware Revision")  ($ td (version/->string (:firmware-revision cd-info))))
           ($ :tr ($ td "Build Configuration") ($ td (:build-configuration cd-info)))
           ($ :tr ($ td "Track") ($ td (:track cd-info)))))))
