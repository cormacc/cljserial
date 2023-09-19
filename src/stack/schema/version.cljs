(ns stack.schema.version
  (:require
   [malli.core :as m]))

(def Version
  [:map
   [:major :int]
   [:minor :int]
   [:patch :int]])

(defn ->string [version]
  {:pre [(m/validate Version version)]}
  (str "v" (:major version) "." (:minor version) "." (:patch version)))
