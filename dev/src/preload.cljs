(ns preload
  (:require [uix.dev]
            [taoensso.telemere :as t]))

(uix.dev/init-fast-refresh!)

(defn ^:dev/after-load refresh []
  (t/log! :info "fast refresh" )
  (uix.dev/refresh!))
