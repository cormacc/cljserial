(ns stack.pages.webserial-scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [stack.pages.webserial :as webserial]
            ;; [stack.examples.models.domain :as domain]
            ;; [malli.generator :as mg]
            ;;TODO: Refactor / eliminate this -- re-frame deps...
            ))


(defn fake-term-events [count]
  (let [d (js/Date.now)]
    (into {} (for [n (range count)] [(- d n) {:timestamp (- d n) :event-type (if (odd? n) :tx :rx) :event-data {:byte-encoding :text :bytes "bla"}}]))))


(defscene term-widget-empty
  :title "Terminal widget - no items, no input"
  (webserial/render-page {})
  [::/term-widget {:events {}
                       :on-add-event nil} ])

(defscene term-widget-one
  :title "Terminal widget - one item"
  ($ term/term-widget {:events (fake-term-events 1)
                       :on-add-event nil}))

(defscene term-widget-many
  :title "Terminal widget - multiple items"
  ($ term/term-widget {:events (fake-term-events 10)
                       :on-add-event nil}))

(defscene term-widget-any
  :title "Terminal widget - functional (with state)"
  (let [[events set-events!] (use-state {})]
    ($ term/term-widget {:events events
                         :on-add-event #(set-events! (assoc events (js/Date.now) {:timestamp (js/Date.now)
                                                                                  :event-type :tx
                                                                                  :event-data {:byte-encoding :text
                                                                                               :bytes %}}))})))

;; (defn fake-task-map
;;   "Generate a sorted map of `count` fake todos. See also [[fake-task-store]] "
;;   [count]
;;   (into (sorted-map) (for [todo (mg/sample domain/Task {:size count})] [(:id todo) todo])))

;; ;; N.B. Including the task filter here is nonsensical with the data-driven approach -- filters
;; ;;      applied in the view / re-frame subs rather than by the component....
;; (defn fake-task-store [task-count task-filter]
;;   (let [tasks (fake-task-map task-count)]
;;     {:tasks tasks :task-filter task-filter :task-counts (domain/get-task-counts (vals tasks))}))

;; (defscene todo-empty
;;   :title "Todos - no tasks"
;;   (todos/render (fake-task-store 0 :all)))

;; (defscene todo-one
;;   :title "Todos - 1 task"
;;   (todos/render (fake-task-store 1 :all)))

;; (defscene todo-ten
;;   :title "Todos - 10 tasks"
;;   (todos/render (fake-task-store 10 :all)))


;; (defscene todo-list-many
;; r r :title "Todo widget - multiple items"
;;   ($ todo/todo-widget (fake-task-store 5 :all)))

;; (defscene todo-list-pending-tasks
;;   :title "Todo widget - pending tasks filter"
;;   ($ todo/todo-widget (fake-task-store 5 :pending)))

;; (defscene todo-list-completed-tasks
;;   :title "Todo widget - completed tasks filter"
;;   ($ todo/todo-widget (fake-task-store 5 :done)))

;; (defscene todo-list-generative
;;   :title "Todo widget - random task-filter"
;;   ($ todo/todo-widget (fake-task-store 10 (mg/generate view/TaskFilter))))
