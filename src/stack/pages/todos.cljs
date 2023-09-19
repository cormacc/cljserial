(ns stack.pages.todos
  (:require [stack.utils.datascript :as du]
            [stack.examples.models.domain :as domain]
            [stack.components.layout :as layout]
            [stack.components.forms :as forms]
            [stack.components.tasks :as tasks]))


(defn render-task-view [{:keys [title immutable data task-filter new-task]}]
  (let [tasks (domain/extract-tasks data)
        task-counts (domain/get-task-counts tasks)
        visible-tasks (domain/filter-by task-filter tasks)]
    [::tasks/task-view {::tasks/title title
                        ::tasks/immutable immutable
                        ::tasks/task-filter task-filter
                        ::tasks/new-task new-task
                        ::tasks/tasks visible-tasks
                        ::tasks/task-counts task-counts}]))

(defn render [{:keys [domain-db user-input] :as _state}]
  (let [{:keys [tx-times valid-times]} domain-db
        {:keys [tx-time valid-time task-filter new-task]} user-input
        ;;TODO: data-now and data-then (and the derived tasks, task-counts, visible tasks)
        ;;      should probably be updated in the dispatch loop rather than regenerated here
        data-now (:data domain-db)
        data-then (du/as-of domain-db :tx-time tx-time :valid-time valid-time)]
    [::layout/card
     [::layout/header
      [:h2.text-base.font-semibold "Time-travelling TodoMVC"]]
     [::layout/content
      [::forms/range-slider.range-sm.range-info
       {::forms/input-id :tx-time
        ::forms/values tx-times
        :value tx-time}]
      [::forms/range-slider.range-sm.range-accent
       {::forms/input-id :valid-time
        ::forms/values valid-times
        :value valid-time}]
      [:div.grid.grid-cols-2
       (render-task-view {:title "Now"
                          :immutable false
                          :data data-now
                          :task-filter task-filter
                          :new-task new-task})
       (render-task-view {:title "Then"
                          :immutable true
                          :data data-then
                          :task-filter task-filter
                          :new-task new-task})]]]))
