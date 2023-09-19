(ns stack.examples.re-frame.app
  (:require
   [taoensso.telemere :as t]

   [stack.core :as stack]
   [stack.utils.dbfx :as dbfx]
   [stack.utils.hsm :as hsm]
   ;; Models ...
   [stack.examples.re-frame.model]
   [stack.examples.models.domain]
   ;; Services ...
   [stack.services.router :as router]
   [stack.services.auth]
   [stack.services.filestore]
   [stack.services.sync]
   ;; [stack.services.bt]
   [stack.statecharts.webserial :as webserial]
   ;; UI ...
   [stack.examples.re-frame.layout :refer [app-layout]]
   [stack.examples.re-frame.pages.serial-terminal :as serial-terminal]
   [stack.examples.re-frame.pages.todo-mvc :as todo]
   [stack.examples.re-frame.pages.local-db :as local-db]
   [stack.examples.re-frame.pages.cloud-db :as cloud-db]
   [stack.examples.re-frame.pages.local-filestore :as local-filestore]
   [stack.examples.re-frame.pages.cloud-filestore :as cloud-filestore]
   [stack.examples.re-frame.pages.converter :as converter]))

;; -- Logging ----------------------------------------------------------

;; ... without a framework
;; (enable-console-print!)   ;; so that println writes to `console.log`


;; ... with telemere
;;     See https://github.com/taoensso/telemere
;; 1. Replace default console text handler with console-raw (for use with cljs-devtools / structured data)
;; TODO: add a custom preamble function
(t/add-handler! :default/console (t/handler:console-raw))
;; (t/add-handler! :default/console (tu/handler:console-bling))

(t/set-min-level! :debug)

(t/log! "Logging initialised!")


;; -- Setup routes ------------------------------------
(def routes
  [["/"
    {:name ::serial-terminal
     :title "WebSerial"
     :view serial-terminal/layout}]

   ["/todo"
    {:name ::todo
     :title "TodoMVC"
     :view todo/layout}]

   ["/local-db"
    {:name ::local-db
     :title "Database (local)"
     :view local-db/layout}]

   ["/cloud-db"
    {:name ::cloud-db
     :title "Database (cloud)"
     :view cloud-db/layout-with-auth}]

   ["/local-filestore"
    {:name ::local-filestore
     :title "Filestore (local)"
     :view local-filestore/layout}]

   ["/cloud-filestore"
    {:name ::cloud-filestore
     :title "Filestore (cloud)"
     :view cloud-filestore/layout-with-auth}]

   ["/convert"
    {:name ::convert
     :title "HTML->UIx"
     :view converter/layout}]])


;; -- Initialise UI ------------------------------------
(defn ^:export main []

  (stack/set-dispatch! dbfx/dispatch)

  ;; The event handler for `:init-example-app` can be found in `stack/examples/re_frame/model.cljs`
  ;; Using the sync version of dispatch means that value is in place before we go onto the next step.
  (dbfx/dispatch-sync [:init-example-app])

  ;; Local filestore service (OPFS)
  (stack.services.filestore/init)

  ;; Database sync service
  ;; (stack.services.sync/init)

  ;; User signup and auth service - currently provided via a supabase backend.
  ;; Pass 'false' to disable backend and spoof an active session
  ;; (stack.services.auth/init true)
  (stack.services.auth/init false)

  ;; The WebSerial service is implemented as a heirarchical state machine
  ;; Can be used for a simple terminal, or as a basis for services using a command parser
  (hsm/register webserial/controller)

  (t/log! :info "Rendering!")

  ;; Wrap the entire UI in auth
  ;; (router/render! {:routes routes :layout app-layout
  ;;                  :wrapper stack.services.auth/wrap-layout ;;                  })

  ;; ... or let auth stay in backend page, but retain sign-out link in appbar
  (router/render! {:routes routes :layout app-layout})
;;
  )
