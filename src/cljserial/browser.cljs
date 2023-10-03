(ns cljserial.browser
  (:require [cljs.reader]))


(defn write
  "Write data to browser storage"
  [{:keys [id data]}]
  (.setItem js/localStorage id (str data)))


(defn read
  "Read data from browser storage"
  [id]
  (.getItem js/localStorage id))

(defn read-map
  "Read data from browser local storage as a sorted map"
  [id]
  (into (sorted-map)
        (some->> (read id)
                 (cljs.reader/read-string)    ;; EDN map -> map
                 )))
