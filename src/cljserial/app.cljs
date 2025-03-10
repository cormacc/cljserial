(ns cljserial.app
  (:require
   [taoensso.telemere :as t]
   [gadget.inspector :as inspector]
   [replicant.dom :as r]
   [promesa.core :as p]
   [stack.core :as stack]
   [stack.utils.router :as router]
   [stack.utils.filestore :as filestore]
   [stack.example.model :as model]
   [stack.example.dispatch :as dispatch]
   [stack.example.routes :as routes]
   ;; In practice, I fork these in the app namespace
   ;; [cljserial.model :as model]
   ;; [cljserial.dispatch :as dispatch]
   ;; [cljserial.routes :as routes]
   [cljserial.layout :as layout]
   ))

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
  (r/set-dispatch! dispatch/handle-event)

  (stack/set-dispatch! #(dispatch/handle-event {:replicant/trigger :replicant.trigger/external} %))

  ;;Initialise the app db
  (model/init! (router/get-default routes/all))

  ;;Wire in gadget inspector (dev data browser)
  ;; See https://github.com/cjohansen/gadget-inspector
  (inspector/inspect "model" model/!state)

  ;;Reload our local filestore index
  (-> (filestore/init+)
      (p/then #(stack/dispatch [[:view/assoc :filestore %]])))

  (router/start! routes/all #(stack/dispatch [[:view/assoc :route %]]))

  ;; Wire in our renderer
  (model/watch! render-app)

;;;-----
  )
