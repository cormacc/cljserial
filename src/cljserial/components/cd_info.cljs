(ns cljserial.components.cd-info
  (:require
   [cljs.spec.alpha :as s]
   [clojure.string :as str]
   [uix.core :as uix :refer [defui $]]
   [cljserial.cd.model :as cdm]))

;;TODO: Move this somewhere more appropriate...
(defn semver-format [version]
  {:pre [(s/valid? :semver/version version)]}
  (str "v" (:major version) "." (:minor version) "." (:patch version)))

(defui table [cd-info]
  {:pre [s/valid? :cd/state cd-info]}
  ($ :table.table
     ($ :tbody
        ($ :tr ($ :th "Serial #") ($ :td (:serial cd-info)))
        ($ :tr ($ :th "Hardware Revision") ($ :td (:hardware-revision cd-info)))
        ($ :tr ($ :th "Firmware Revision")  ($ :td (semver-format (:firmware-revision cd-info))))
        ($ :tr ($ :th "Track") ($ :td (:track cd-info))))))
