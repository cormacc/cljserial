(ns stack.schema.version)

(def Version
  [:map
   [:major :int]
   [:minor :int]
   [:patch :int]])

(defn ->string [version]
  (str "v" (:major version) "." (:minor version) "." (:patch version)))
