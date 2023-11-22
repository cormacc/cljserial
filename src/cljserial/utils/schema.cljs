(ns cljserial.utils.schema
  (:require [malli.core :as m]))

(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [type inst]
  (when-not (m/validate type inst)
    (throw (ex-info (str "schema check failed: " (m/explain type inst)) {}))))
