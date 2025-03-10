(ns stack.components.term
  (:require [replicant.alias :refer [defalias]]))

(defalias input [attrs _children]
  [:label.input.flex.w-auto.bg-inherit.p-0
   "> "
   [:input.grow (merge attrs {:placeholder "Type a command and press 'Enter'..."})]])

(defalias event [attrs children]
  (let [command? (= (::event-type attrs) :command)
        prefix (if command? "> " "")
        suffix (if command? "" "\n")]
    [:div prefix children suffix]))

(defalias container [attrs children]
  [:pre.w-full.bg-black.text-white.rounded-md.p-4
   attrs
   [:code
    children]])

(defalias terminal [attrs _children]
  (let [events (::events attrs)
        dispatch-prefix (::dispatch-prefix attrs)
        input-id (::input-id attrs)
        input-value (::input-value attrs)]
    [::container
     attrs
     (for [[_ts evt] events]
       [::event {::event-type (:event-type evt)} (:bytes (:event-data evt))])
     [::input {:value input-value
               :on {:input [[:user/input input-id :event/target.value]]
                    :keydown [[:user/on-key "Enter" :event/key
                               [[dispatch-prefix :send input-value]
                                [:user/input input-id ""]]]]}}]]))
