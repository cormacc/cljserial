(ns stack.components.tasks-scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [malli.generator :as mg]
            [stack.example.models.domain :as domain]
            [stack.components.tasks :as tasks]
            ))
(defn fake-tasks
  "Generate a seq of `count` fake todos. See also [[fake-task-store]] "
  [count]
  (into [] (mg/sample domain/Task {:size count})))


(defscene task-pending
  :title "Task - pending"
  [::tasks/task {::tasks/id 1
                 ::tasks/description "A pending task"
                 ::tasks/done false}])

(defscene task-done
  :title "Task - done"
  [::tasks/task {::tasks/id 1
                 ::tasks/description "Here's one I done earlier..."
                 ::tasks/done true}])

(defscene task-read-only
  :title "Task - read-only"
  [::tasks/task {::tasks/id 1
                 ::tasks/description "I'm perfect just the way I am..."
                 ::tasks/done true
                 ::tasks/read-only true}])

(defscene header-all
  :title "Header"
  [::tasks/header {::tasks/task-filter :all} "A task widget header"])

(defscene task-input
  :title "New task input - no prefix"
  [::tasks/task-input {::tasks/input-id :injected-task}])

(defscene task-input-prefixed
  :title "New task input - prefixed"
  [::tasks/task-input {::tasks/input-id :injected-task} "TODO"])

(defscene task-view-none
  :title "Task view - no tasks"
  [::tasks/task-view {::tasks/title "A task view"
                      ::tasks/task-filter :all
                      ::tasks/new-task ""
                      ::tasks/tasks []
                      ::tasks/task-counts {:done 0 :total 0}}])

(defscene task-view-one
  :title "Task view - one task"
  [::tasks/task-view {::tasks/title "A task"
                      ::tasks/task-filter :all
                      ::tasks/new-task ""
                      ::tasks/tasks (fake-tasks 1)
                      ::tasks/task-counts {:done 0 :total 1}}])

(defscene task-view-ten
  :title "Task view - ten tasks"
  [::tasks/task-view {::tasks/title "More tasks...."
                      ::tasks/task-filter :all
                      ::tasks/new-task ""
                      ::tasks/tasks (fake-tasks 10)
                      ::tasks/task-counts {:done 5 :total 10}}])

(defscene task-view-immutable
  :title "Task view - read-only"
  [::tasks/task-view {::tasks/title "Immutable tasks...."
                      ::tasks/immutable true
                      ::tasks/task-filter :all
                      ::tasks/new-task ""
                      ::tasks/tasks (fake-tasks 5)
                      ::tasks/task-counts {:done 3 :total 5}}])
