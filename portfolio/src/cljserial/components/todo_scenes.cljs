(ns cljserial.components.todo-scenes
 (:require [uix.core :refer [$ use-state]]
           [portfolio.react-18 :refer-macros [defscene]]
           [cljserial.todo.model :as model]
           [cljserial.components.todo :as todo]
           [malli.generator :as mg]))

(defn fake-tasks
  "Generate a sorted map of `count` fake todos. See also [[fake-todo-seq]] "
  [count]
  (into (sorted-map) (for [todo (mg/sample model/Task {:size count})] [(:id todo) todo])))

(defn fake-task-store [task-count]
  {:tasks (fake-tasks task-count) :task-filter (mg/generate model/TaskFilter)}
  ;; {:tasks (fake-tasks task-count) :task-filter (gen/generate (s/gen :todo/task-filter))}
  )

(defscene todo-list-empty
  :title "Todo widget - no items"
  (println (fake-tasks 10))
  ($ todo/todo-widget {:tasks {} :task-filter :all}))

(defscene todo-list-one
  :title "Todo widget - one item"
  ($ todo/todo-widget {:tasks (fake-tasks 1) :task-filter :all}))

(defscene todo-list-many
  :title "Todo widget - multiple items"
  ($ todo/todo-widget {:tasks (fake-tasks 5) :task-filter :all}))

(defscene todo-list-pending-tasks
  :title "Todo widget - pending tasks filter"
  ($ todo/todo-widget {:tasks (fake-tasks 5) :task-filter :pending}))

(defscene todo-list-completed-tasks
  :title "Todo widget - completed tasks filter"
  ($ todo/todo-widget {:tasks (fake-tasks 5) :task-filter :done}))

(defscene todo-list-functional
  :title "Todo widget - functional (with state) - FIXME"
  ;; N.B. This ISN'T functional any more since I switched implementation to refx...
  ;; TODO: Add example of simple refx db/sub local to this scene?
  (let [[todos set-todos!] (use-state {})]
    ($ todo/todo-widget {:tasks todos :task-filter :all})))

(defscene todo-list-generative
  :title "Todo widget - random task-filter"
  ($ todo/todo-widget (fake-task-store 10)))
