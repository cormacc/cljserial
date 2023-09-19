(ns stack.examples.re-frame.pages.bt-terminal
  (:require
   [uix.core :refer [defui $]]
   [stack.utils.dbfx :as dbfx]
   [stack.utils.hsm :as hsm-dbfx]
   [stack.services.bt :as bt]
   [stack.uix.bt-device :as bt-device]
   [stack.uix.term :as term]))


(defui term-widget-dbfx [{:keys [event-sub tx-event-id] :as props}]
  (let [events (dbfx/use-sub [event-sub])]
    ($ term/term-widget {:events events
                         :on-add-event #(when (seq %)
                                          (dbfx/dispatch [tx-event-id %]))})))

(defui bluetooth-unsupported-message []
  ($ :div "The Web Bluetooth API is not currently available. Make sure you're running Chrome, Edge or Opera and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth#browser_compatibility"} "browser support") ", and " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"} "secure contexts") "."))

(defui side-panel []
  ($ :.flex.flex-col
     (let [bt-context (dbfx/use-sub :bt-serial)
           device (:device bt-context)]
       ($ bt-device/settings
          {:device device
           :on-device-request (partial bt/device-request-callback (:options bt-context))
           :on-device-forget #(dbfx/dispatch [:bt-disconnect])}))))

(defui terminal-pane []
  ($ :.flex.flex-col
     (let [bt-state (hsm-dbfx/use-sub-state :bt-serial)]
       (if (hsm-dbfx/in-state bt-state :unsupported)
         ($ bluetooth-unsupported-message)
         ($ term-widget-dbfx {:event-sub :bt-serial-events :tx-event-id :bt-serial-tx})))))

(defui layout []
  ($ :.flex.flex-row.gap-1
     ($ :.basis-80.grow-0 ($ side-panel))
     ($ :.basis-0.grow
        ($ terminal-pane))))
