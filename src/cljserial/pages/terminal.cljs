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
  ($ :div "Sorry, Web Serial is not supported on this device, make sure you're running Chrome, Edge or Safari.  See " ($ :a {:href "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"} "Mozilla documentation") " for more details on browser support."))

(defui side-panel []
  ($ :.flex.flex-col
   ($ serial-port/settings
      {:port nil
       :serial-options wsu/DEFAULTS
       :on-port-request port-request-callback})
   (let [cd-info (refx/use-sub [:cd-info])]
     ($ cd-info/table cd-info))))

(defui terminal-pane []
  ($ :.flex.flex-col
     (let [serial-state (hsm-refx/use-sub-state :serial)]
       (log/trace :terminal/layout (str "Rendering hsm state " serial-state))
       (if (hsm-refx/in-state serial-state :webserial-check-failed)
         ($ webserial-unsupported-message)
         ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx})))))

(defui layout []
  ($ :.flex.flex-row.gap-1
     ($ :.basis-80.grow-0 ($ side-panel))
     ($ :.basis-0.grow
        ($ terminal-pane))))
