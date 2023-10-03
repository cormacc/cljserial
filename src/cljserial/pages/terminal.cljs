(ns cljserial.pages.terminal
  (:require [uix.core :refer [defui $]]
            [refx.alpha :refer [use-sub dispatch]]
            [cljserial.components.term :as term]))

(defui term-widget-refx [{:keys [event-sub tx-event-id] :as props}]
  (let [events (use-sub [event-sub])]
    ($ term/term-widget {:events events
                         :on-add-event #(when (seq %)
                                          (dispatch [tx-event-id %]))})))

(defui layout []
  ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx}))
