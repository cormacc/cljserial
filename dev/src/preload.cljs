(ns preload
  (:require [uix.dev]
            [lambdaisland.glogi :as log]))

(uix.dev/init-fast-refresh!)

(defn ^:dev/after-load refresh []
  (log/info :uix.dev "fast refresh" )
  (uix.dev/refresh!))
