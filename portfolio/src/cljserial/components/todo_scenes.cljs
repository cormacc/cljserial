(ns cljserial.components.todo-scenes
 (:require [uix.core :refer [$ use-state]]
           [uix.dom]
           [portfolio.react-18 :refer-macros [defscene]]
           [cljserial.components.todo :as todo]))

(defn fake-todos [count]
  (let [d (js/Date.now)]
    (into {} (for [n (range count)] [(- d n) {:text "bla" :status :unresolved}]))))

(defscene todo-list-empty
  :title "Todo widget - no items"
  ($ todo/todo-widget {:todos {}
                       :set-todos! nil}))

(defscene todo-list-one
  :title "Todo widget - one item"
  ($ todo/todo-widget {:todos (fake-todos 1)
                       :set-todos! nil}))

(defscene todo-list-many
  :title "Todo widget - multiple items"
  ($ todo/todo-widget {:todos (fake-todos 10)
                       :set-todos! nil}))

(defscene todo-list-any
  :title "Todo widget - functional (with state)"
  (let [[todos set-todos!] (use-state {})]
    ($ todo/todo-widget {:todos todos
                         :set-todos! set-todos!})))
