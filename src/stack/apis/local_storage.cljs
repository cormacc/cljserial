(ns stack.apis.local-storage
  (:require [cljs.reader]))

;; TODO: rename this to local-storage? And put indexed-db stuff elsewhere...

(defn write
  "Write a string to local storage"
  [id data]
  (.setItem js/localStorage id data))

(defn read
  "Read a string from local storage"
  [id]
  (.getItem js/localStorage id))

(defn has-data?
  ""
  [id]
  (.hasOwnProperty js/localStorage id))


(defn delete
  "Delete a data item from local storage"
  [id]
  (.removeItem js/localStorage id))

(defn serialise
  "Serialise EDN data to local storage"
  [id data]
  (write id (pr-str data)))

(defn deserialise
  "Deserialise EDN data from local storage"
  [id]
  (some->> (read id)
           (cljs.reader/read-string)))
