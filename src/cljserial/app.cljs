(ns cljserial.app
  (:require
   [taoensso.telemere :as t]
   [gadget.inspector :as inspector]
   [replicant.dom :as r]
   [promesa.core :as p]
   [stack.core :as stack]
   [stack.utils.router :as router]
   [stack.utils.filestore :as filestore]
   [cljserial.model :as model]
   [cljserial.dispatch :as dispatch]
   [cljserial.routes :as routes]
   [cljserial.layout :as layout]))

(defonce el (js/document.getElementById "app-root"))

;; -- Logging ----------------------------------------------------------
;; ... with telemere
;;     See https://github.com/taoensso/telemere
;; 1. Replace default console text handler with console-raw (for use with cljs-devtools / structured data)
;; TODO: add a custom preamble function
(t/add-handler! :default/console (t/handler:console-raw))
;; (t/add-handler! :default/console (tu/handler:console-bling))

(t/set-min-level! :debug)

(t/log! "Logging initialised!")



(defn render-app [state]
  (r/render (js/document.getElementById "app-root") (layout/render (router/=>links routes/all) state)))

;; Startup

(defn ^:dev/after-load main []

  ;;Wire our event-handler in to replicant
  (r/set-dispatch! dispatch/handle-events)

  ;;Set our generic dispatch function to use replicant dispatcher, minus the dom event interpolation
  ;;This takes a single action rather than a vector of... for re-frame interop
  (stack/set-dispatch! #(dispatch/execute-actions [%]))

  ;;Initialise the app db
  (model/init! routes/default)

  ;;Wire in gadget inspector (dev data browser)
  ;; See https://github.com/cjohansen/gadget-inspector
  (inspector/inspect "model" model/!state)

  ;;Reload our local filestore index
  (-> (filestore/init+)
      (p/then #(dispatch/handle-events nil [[:view/assoc :filestore %]])))

  (router/start! routes/all #(dispatch/handle-events nil [[:view/assoc :route %]]))

  ;; Wire in our renderer
  (model/watch! render-app)

;;;-----
  )
