(ns cljserial.components.button-scenes
  (:require
   [cljserial.components.buttons :as buttons :refer [button]]
   [portfolio.react-18 :refer-macros [defscene]]
   [uix.core :refer [defui $]]))

(defui scene-container [{:keys [children]}]
  ($ :div {:class "flex flex-row justify-between items-center"} children))


(defscene button-default
  :title "Default button (Primary :: md)"
  ($ button "Don't click me - I'm useless!"))

(defscene button-on-click
  :title "Button - with onClick handler"
  ($ button {:on-click (fn [] (js/alert "Aw thanks!"))} "Click me!"))

(defscene buttons-primary
  :title "Primary buttons - all sizes"
  ($ scene-container
     (map #($ button {:colour :primary :size %} (str "Primary :: " (name %))) buttons/sizes)))

(defscene buttons-secondary
  :title "Secondary buttons - all sizes"
  ($ scene-container
     (map  #($ button {:colour :secondary :size %} (str "Secondary :: " (name %))) buttons/sizes)))

(defscene buttons-rounded
  :title "Rounded buttons - all sizes"
  ($ scene-container
     (map #($ button {:shape :rounded :colour :primary :size %} (str "Primary :: " (name %))) buttons/sizes)))
