(ns stack.components.tasks
  (:require [clojure.string :as str]
            [replicant.alias :refer [defalias]]
            [stack.components.forms :as forms]
            [stack.components.layout :as layout]
            [stack.examples.models.domain :as domain]))

(defalias task [{::keys [id description done read-only] :as attrs} _children]
  [:fieldset.fieldset.p-4.bg-base-100.border.border-base-300.rounded-box.w-auto
   attrs
   [:label.fieldset-label.flex
    [:input.checkbox {:type :checkbox
                      :checked done
                      :disabled read-only
                      :on {:change [[:domain/transact {:db/id id :task/done (not done)}]]}}]
    [:div.grow description]
    (when-not read-only
      [:button.border-0.text-red-600.cursor-pointer
       {:on {:click [[:domain/transact [:db.fn/retractEntity id]]]}}
       "x"])]])

(defalias header [{::keys [task-filter] :as attrs} children]
  [:div.flex
   attrs
   [:div.grow
    [:h2.text-base.font-semibold children]]
   [:div.flex-none
    [::forms/select {:value task-filter
                     :on {:input [[:user/input :task-filter :event/target.value-as-keyword]]}
                     ::forms/options (map (fn [kw] {:key kw :value kw :content (str/capitalize (name kw))}) domain/task-filters)}]]])


(defalias task-input [{::keys [input-id] :as attrs} children]
  [::forms/labelled-input
   (merge attrs {:placeholder "Enter task description and press 'Enter' to save"
                 :on {:input [[:user/input input-id :event/target.value]]
                      :keydown [[:user/on-key "Enter" :event/key
                                 [[:domain/transact {:task/description :event/target.value :task/done false}]
                                  [:user/input input-id ""]]]]}})
   children])

(defalias task-view [{::keys [title immutable task-filter  new-task tasks task-counts] :as attrs}]
  [::layout/card
   attrs
   [::layout/header [::header {::task-filter task-filter} title]]
   [::layout/content.grid-cols-1
    [::task-input {::input-id :new-task
                   :value new-task}
     "TODO"]
    [:ul.list.bg-base-100.rounded-box.shadow-md
     (for [{:keys [id description done] :as task} tasks]
       [:li {:replicant/key id} [::task {::id id ::description description ::done done ::read-only immutable}]])]
    [::layout/footer
     [:span [:strong (:done task-counts)] " of " [:strong (:total task-counts)] " tasks completed"]]]])
