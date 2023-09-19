(ns cljserial.portfolio
  (:require [portfolio.ui :as ui]
            [cljserial.components.simple-scenes]
            [cljserial.components.term-scenes]
            [cljserial.components.todo-scenes]))


(ui/start!
 {:config
  {:css-paths ["/tailwind.css"]
   :background/default-option-id :dark-mode}})
(defn init [])
