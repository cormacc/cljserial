(ns cljserial.components.simple-scenes
  (:require [uix.core :refer [defui $ use-state]]
            [portfolio.react-18 :refer-macros [defscene]]))

(defui counter []
  (let [[count set-count] (use-state 0)]
    ($ :div
       ($ :p "Count: " count)
       ($ :button {:on-click #(set-count inc)} "Increase"))))

(defscene uix-counter
  :title "Counter with React Hooks"
  ($ counter))
