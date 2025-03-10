(ns stack.example.pages.webserial-terminal
  (:require [stack.components.webserial :as webserial]
            [stack.components.term :as term]))


(defn render [{:keys [webserial user-input] :as _state}]
  (let [{:keys [webserial-cmd]} user-input]
    [:div.flex.flex-row.gap-1
     [:div.basis-80.grow-0
      [::webserial/port-config webserial]]
     [:div.basis-80.grow
      [::term/terminal {::term/dispatch-prefix :webserial
                        ::term/input-id :webserial-cmd
                        ::term/input-value webserial-cmd
                        ::term/events (:events webserial)}]]]))
