(ns portfolio
  (:require [portfolio.ui :as portfolio]
            [replicant.dom :as r]
            [stack.components.forms-scenes]
            [stack.components.files-scenes]
            [stack.components.term-scenes]
            [stack.components.tasks-scenes]
            [stack.components.webserial-scenes]))

(defn main []
  (r/set-dispatch! (fn [event-data actions] (js/alert (str "REPLICANT DISPATCH!\n\nActions:\n" actions "\n\nData:\n" event-data))))
  (portfolio/start!
   {:config
    {:css-paths ["/tailwind.css"]
     :background/default-option-id :dark-mode
     :viewport/defaults {:background/background-color "#fdeddd"}}}))
