(ns cljserial.pages.terminal
  (:require
   [lambdaisland.glogi :as log]
   [uix.core :refer [defui $]]
   [refx.alpha :refer [use-sub dispatch]]
   [cljserial.utils.hsm :as hsm-refx]
   [cljserial.webserial.interface :as wsi]
   ;;TODO: Elminate this import once we introduce a subscription
   [cljserial.cd.model :as cdm]
   [cljserial.components.cd-info :as cd-info]
   [cljserial.components.term :as term]
   [refx.alpha :as refx]))

;-- refx...
;-- ...


(defui term-widget-refx [{:keys [event-sub tx-event-id] :as props}]
  (let [events (use-sub [event-sub])]
    ($ term/term-widget {:events events
                         :on-add-event #(when (seq %)
                                          (dispatch [tx-event-id %]))})))
(defui port-request-button []
  ($ :button.btn-primary
     {:on-click (fn [e] (wsi/await-port
                         :on-success #(hsm-refx/dispatch [:webserial-has-port %1])
                         :on-failure #(hsm-refx/dispatch [:webserial-no-port])))}
     "Request port"))

(defui webserial-unsupported-message []
  ($ :div "Sorry, Web Serial is not supported on this device, make sure you're running Chrome 78 or later and have enabled the #enable-experimental-web-platform-features flag in chrome://flags"))


(defui layout []
  ($ :.flex.flex-col
     (let [serial-state (hsm-refx/use-sub-state :serial)]
       (log/trace :terminal/layout (str "Rendering hsm state " serial-state))
       [(cond
          (hsm-refx/in-state serial-state :webserial-check-failed) ($ webserial-unsupported-message)
          (hsm-refx/in-state serial-state :port-pending) ($ port-request-button)
          :else ($ :div "TODO: Display port status"))
        ($ :div "State " (str serial-state))])
     (let [cd-info (refx/use-sub [:cd-info])]
       ($ cd-info/table cd-info))
     ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx})))
