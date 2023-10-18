(ns cljserial.core
  (:require
   [lambdaisland.glogi :as log]
   [lambdaisland.glogi.console :as glogi-console]
   [uix.core :refer [$]]
   [uix.dom]
   [refx.alpha :refer [dispatch-sync]]
   [cljserial.model]
   [cljserial.utils.hsm :as hsm-refx]
   [cljserial.webserial :as webserial]
   [cljserial.app :as app]))

;; -- Logging ----------------------------------------------------------
;; See https://github.com/lambdaisland/glogi
(glogi-console/install!)
(log/set-levels
 {:glogi/root   :config    ;; Set a root logger level, this will be inherited by all loggers
  'cljserial.utils.hsm :trace   ;; Some namespaces you might want detailed logging
  'my.app.other :error   ;; or for others you only want to see errors.
  })

(log/info :startup/logging "Logging initialised!")
(enable-console-print!)   ;; so that println writes to `console.log`

;; -- Initialise refx application database ------------------------------------
;; The event handler for `:initialise-db` can be found in `model.cljs`
;; Using the sync version of dispatch means that value is in place before we go onto the next step.
(dispatch-sync [:initialise-db])

(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn render []
  (uix.dom/render-root ($ app/layout) root))

(defn ^:export init []
  (hsm-refx/register webserial/controller)
  (app/start!)
  (render))
