(ns stack.components.forms
  (:require [replicant.alias :refer [defalias]]))

(defalias select [attrs children]
  (let [selection (::selected attrs)
        options (::options attrs)]
    [:select.select
     attrs
     (for [{:keys [key value content]} options]
       [:option {:key key :value value :selected (= value selection)} content])]))

;;FIXME: Passing the attrs through to the inner element is a bit nasty/counterintuitive.
(defalias labelled-input [attrs children]
  [:label.input.input-bordered.flex.items-center.gap-2.w-auto
   children
   [:input.grow (assoc attrs :type "text")]])

(defalias fieldset [attrs children]
  [:fieldset.fieldset
   attrs
   children])

(defalias range-slider [{::keys [input-id values] :as attrs}]
  (let [list-id (str (name input-id) "-values")]
    [:div.flex
     [:datalist
      {:id list-id}
      (for [v values] [:option {:value v}])]
     [:label.basis-40 (name input-id)]
     [:input.range.grow
      (merge
       attrs
       {:type "range" :min (first values) :max (last values) :list list-id
        :on {:change [[:user/input input-id :event/target.value-as-int]]}})]]))
