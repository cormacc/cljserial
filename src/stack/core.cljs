(ns stack.core
  (:require [replicant.core :as r]))

(defn dispatch [args]
  (r/*dispatch* {:replicant/trigger :replicant.trigger/external} args))
