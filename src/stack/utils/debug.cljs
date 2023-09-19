(ns stack.utils.debug
  "Functions and utilities for development/debugging workflows."
  (:require
   [promesa.core :as p]))

(defn inspect-promise
  "Place the result of a promise in an atom and return the atom.
  For quick and dirty evaluation at the repl."
  [promise]
  (let [result (atom nil)]
    (-> promise
        (p/then #(reset! result %)))
    result))
