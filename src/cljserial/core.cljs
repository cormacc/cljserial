(ns cljserial.core
  (:require
   [lambdaisland.glogi :as log]
   [lambdaisland.glogi.console :as glogi-console]
   [refx.alpha :refer [dispatch-sync]]
   [cljserial.model]
   [cljserial.i18n :as i18n]
   [cljserial.utils.router :as router]
   ;; AWS integration bypassed for now
   ;; [cljserial.utils.aws :as aws]
   [cljserial.services.webserial :as webserial]
   [cljserial.services.cd :as cd]
   [cljserial.layout :refer [app-layout]]
   [cljserial.pages.terminal :as terminal]
   [cljserial.pages.todo-mvc :as todo]
   [cljserial.pages.converter :as converter]))

;; -- Logging ----------------------------------------------------------
;; See https://github.com/lambdaisland/glogi
(glogi-console/install!)
(log/set-levels
 {:glogi/root   :debug    ;; Set a root logger level, this will be inherited by all loggers
  'cljserial.utils.hsm :debug   ;; Some namespaces you might want detailed logging
  'my.app.other :error   ;; or for others you only want to see errors.
  })

(log/info :startup/logging "Logging initialised!")
(enable-console-print!)   ;; so that println writes to `console.log`

;; -- Initialise refx application database ------------------------------------
;; The event handler for `:initialise-db` can be found in `model.cljs`
;; Using the sync version of dispatch means that value is in place before we go onto the next step.
(dispatch-sync [:initialise-db])

;; -- Setup routes ------------------------------------
(def routes
  [["/"
    {:name ::terminal
     :title "Terminal"
     :view terminal/layout}]

   ["/todo"
    {:name ::todo
     :title "TodoMVC"
     :view todo/layout}]

   ["/convert"
    {:name ::convert
     :title "HTML->UIx"
     :view converter/layout}]])


(defn init-services []
  ;; The WebSerial service is implemented as a heirarchical state machine
  ;; Can be used for a simple terminal, or as a basis for services using a command parser
  (cljserial.services.webserial/init)

  ;; CD service - implements command/response parsing on top of the webserial service
  (cljserial.services.cd/init))

;; -- Wrap UIx layout in AWS Amplify auth --------------
;; (defn aws-auth-wrap [uix-layout]
;;   (withAuthenticator (uix/as-react uix-layout)))

;; -- Initialise UI ------------------------------------
(defn ^:export init []

  (init-services)

;; AWS integration bypassed for now
  ;; (aws/configure)
  ;; (router/render! {:routes routes :languages i18n/supported-languages :layout (aws/with-authenticator app-layout)})

  (router/render! {:routes routes :languages i18n/supported-languages :layout app-layout})

  ;;
  )
