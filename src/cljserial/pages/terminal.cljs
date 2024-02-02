(ns cljserial.pages.terminal
  (:require
   [lambdaisland.glogi :as log]
   [uix.core :refer [defui $]]
   [refx.alpha :as refx]
   [cljserial.utils.hsm :as hsm-refx]
   [cljserial.utils.webserial :as wsu]
   [cljserial.components.cd-info :as cd-info]
   [cljserial.components.serial-port :as serial-port]
   [cljserial.components.term :as term]))

;-- refx...
;-- ...


(defui term-widget-refx [{:keys [event-sub tx-event-id] :as props}]
  (let [events (refx/use-sub [event-sub])]
    ($ term/term-widget {:events events
                         :on-add-event #(when (seq %)
                                          (refx/dispatch [tx-event-id %]))})))

(defn port-request-callback [e]
  (wsu/await-port
   :on-success #(hsm-refx/dispatch [:webserial-has-port %1])
   :on-failure #(hsm-refx/dispatch [:webserial-no-port])))

(defui webserial-unsupported-message []
  ($ :div "Sorry, Web Serial is not supported on this device, make sure you're running Chrome, Edge or Safari and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"} "browser support") ", and " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"} "secure contexts") "."))

(defui side-panel []
  ($ :.flex.flex-col
     (let [port-context (hsm-refx/use-sub-context :serial)
           port (:port port-context)
           serial-options (:serial-options port-context)]
       (log/debug :terminal/options serial-options)
       ($ serial-port/settings
          {:port (if port
                   (wsu/describe-port port)
                   nil)
           :options serial-options
           :on-port-request port-request-callback
           :on-port-forget #(hsm-refx/dispatch [:webserial-forget-port])
           :on-option-update (fn [k v]
                               (hsm-refx/dispatch [:webserial-option k v]))}))
     (let [cd-info (refx/use-sub [:cd-info])]
       ($ cd-info/table cd-info))))

(defui terminal-pane []
  ($ :.flex.flex-col
     (let [serial-state (hsm-refx/use-sub-state :serial)]
       (log/debug :terminal/layout (str "Rendering hsm state " serial-state))
       (if (hsm-refx/in-state serial-state :no-webserial)
         ($ webserial-unsupported-message)
         ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx})))))

(defui layout []
  ($ :.flex.flex-row.gap-1
     ($ :.basis-80.grow-0 ($ side-panel))
     ($ :.basis-0.grow
        ($ terminal-pane))))
