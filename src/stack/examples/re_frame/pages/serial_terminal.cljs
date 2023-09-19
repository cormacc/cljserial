(ns stack.examples.re-frame.pages.serial-terminal
  (:require
   [uix.core :refer [defui $]]
   [stack.utils.dbfx :as dbfx]
   [stack.utils.hsm :as hsm-dbfx]
   [stack.apis.webserial :as wsu]
   [stack.services.core :as services]
   [stack.uix.serial-port :as serial-port]
   [stack.uix.term :as term]))


(defui term-widget-dbfx [{:keys [event-sub tx-event-prefix] :as props}]
  (let [events (dbfx/use-sub [event-sub])]
    ($ term/term-widget {:events events
                         :on-add-event #(when (seq %)
                                          (dbfx/dispatch [tx-event-prefix :write %]))})))

(defui webserial-unsupported-message []
  ($ :div "The Web Serial API is not currently available. Make sure you're running Chrome, Edge or Safari and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"} "browser support") ", and " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"} "secure contexts") "."))

(defui side-panel []
  ($ :.flex.flex-col
     (let [port-context (dbfx/use-sub [:webserial])
           port (:port port-context)
           port-config (:port-config port-context)]
       ($ serial-port/settings
          {:port (if port
                   (wsu/describe-port port)
                   nil)
           :options port-config
           :on-port-request #(dbfx/dispatch [:webserial :request-port])
           :on-port-forget #(dbfx/dispatch [:webserial :forget-port])
           :on-option-update (fn [k v]
                               (dbfx/dispatch [:webserial/option k v]))}))))

(defui terminal-pane []
  ($ :.flex.flex-col
     (let [serial-state (hsm-dbfx/use-sub-state :webserial)]
       (if (hsm-dbfx/in-state serial-state :no-webserial)
         ($ webserial-unsupported-message)
         ($ term-widget-dbfx {:event-sub :serial-events :tx-event-prefix :webserial})))))

(defui layout []
  ($ :.flex.flex-row.gap-1
     ($ :.basis-80.grow-0 ($ side-panel))
     ($ :.basis-0.grow
        ($ terminal-pane))))
