(ns cljserial.routes
  (:require
   [cljserial.pages.terminal :as terminal]
   [cljserial.pages.todo-mvc :as todo-mvc]))

(def routes
  [["/"
    {:name ::terminal
     :title "Terminal"
     :view terminal/layout}]

   ["/todo"
    {:name ::todo
     :title "TodoMVC"
     :view todo-mvc/layout}]])
