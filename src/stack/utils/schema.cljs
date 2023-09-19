(ns stack.utils.schema
  (:require [malli.core :as m]))

(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [type inst]
  (when-not (m/validate type inst)
    (throw (ex-info (str "schema check failed: " (m/explain type inst)) {}))))

(defn enum-values
  [enum]
  (rest enum))

(defn enum-map
  "Apply map to elements of a malli schema enum."
  [f enum]
  ;; Discard first, as enum syntax is [:enum <elements>]
  (map f (enum-values enum)))

(defn enum-map-indexed
  "Apply map-indexed to elements of a malli schema enum."
  [f enum]
  (map-indexed f (enum-values enum)))

(defn int-range [int-schema]
  (let [bounds (second int-schema)]
    (range (:min bounds) (inc (:max bounds)))))
