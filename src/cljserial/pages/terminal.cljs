(ns cljserial.pages.terminal
  (:require [uix.core :refer [defui $]]
            [refx.alpha :refer [use-sub dispatch]]
            [cljserial.utils.hsm :as hsm-refx]
            [cljserial.webserial.interface :as wsi]
            [cljserial.components.term :as term]))

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
       (println "Rendering hsm state " serial-state)
       [(cond
          (hsm-refx/in-state serial-state :webserial-check-failed) ($ webserial-unsupported-message)
          (hsm-refx/in-state serial-state :port-pending) ($ port-request-button)
          :else ($ :div "TODO: Display port status"))
        ($ :div "State " (str serial-state))])
     ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx})))
