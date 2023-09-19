(ns cljserial.core
  (:require
   [uix.core :refer [$]]
   [uix.dom]
   [cljserial.views :as views]))

(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn render []
  (uix.dom/render-root ($ views/app-layout) root))

(defn ^:export init []
  (render))
