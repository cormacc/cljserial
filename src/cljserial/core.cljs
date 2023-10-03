(ns cljserial.core
  (:require
   [uix.core :refer [$]]
   [uix.dom]
   [refx.alpha :refer [dispatch-sync]]
   [cljserial.data.db]
   [cljserial.routes :as routes]))

;; -- Debugging aids ----------------------------------------------------------
(enable-console-print!)   ;; so that println writes to `console.log`

;; -- Initialise refx application database ------------------------------------
;; The event handler for `:initialise-db` can be found in `events.cljs`
;; Using the sync version of dispatch means that value is in
;; place before we go onto the next step.
(dispatch-sync [:initialise-db])

(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn render []
  (uix.dom/render-root ($ routes/app-layout) root))

(defn ^:export init []
  (routes/start!)
  (render))
