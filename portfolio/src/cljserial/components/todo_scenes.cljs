(ns cljserial.components.todo-scenes
 (:require [uix.core :refer [$ use-state]]
           [portfolio.react-18 :refer-macros [defscene]]
           [cljserial.components.todo :as todo]
           [clojure.spec.alpha :as s]
           [clojure.test.check.generators :as gen]))

(defn fake-todo-seq
  "Generate a sequence of `count` fake todos"
  [count]
  (for [id (range count)]
    {:id id
     :description (gen/generate (s/gen :todo/description))
     :done (gen/generate (s/gen :todo/done))}))

(defn fake-todos
  "Generate a sorted map of `count` fake todos. See also [[fake-todo-seq]] "
  [count]
  (into (sorted-map) (for [todo (fake-todo-seq count)] [(:id todo) todo])))

(defn fake-todo-data [task-count]
  {:tasks (fake-todos task-count) :task-filter (gen/generate (s/gen :todo/task-filter))})

(defscene todo-list-empty
  :title "Todo widget - no items"
  (println (fake-todos 10))
  ($ todo/todo-widget {:tasks {} :task-filter :all}))

(defscene todo-list-one
  :title "Todo widget - one item"
  ($ todo/todo-widget {:tasks (fake-todos 1) :task-filter :all}))

(defscene todo-list-many
  :title "Todo widget - multiple items"
  ($ todo/todo-widget {:tasks (fake-todos 5) :task-filter :all}))

(defscene todo-list-pending-tasks
  :title "Todo widget - pending tasks filter"
  ($ todo/todo-widget {:tasks (fake-todos 5) :task-filter :pending}))

(defscene todo-list-completed-tasks
  :title "Todo widget - completed tasks filter"
  ($ todo/todo-widget {:tasks (fake-todos 5) :task-filter :done}))

(defscene todo-list-any
  :title "Todo widget - functional (with state) - FIXME"
  ;; N.B. This ISN'T functional any more since I switched implementation to refx...
  ;; TODO: Add example of simple refx db/sub local to this scene?
  (let [[todos set-todos!] (use-state {})]
    ($ todo/todo-widget {:tasks todos :task-filter :all})))

(defscene todo-list-generative
  :title "Todo widget - random task-filter"
  ;;See  https://clojure.org/guides/spec
  ($ todo/todo-widget (fake-todo-data 10)))
