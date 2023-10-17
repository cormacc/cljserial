(ns cljserial.components.todo
  (:require
   [cljs.spec.alpha :as s]
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [refx.alpha :refer [use-sub dispatch]]))


(defn filter-by [todos task-filter]
  (let [filter-fn (case task-filter
                    :pending (complement :done)
                    :done :done
                    :all identity)]
    (filter filter-fn todos)))

(defui header [{:keys [task-filter]}]
  ($ :.navbar.flex.rounded-box
     ($ :.flex-1.px-2.flex-none
        ($ :a.text-lg.font-bold "Uix2 TODOMVC - " (name task-filter) " tasks"))
     ($ :.flex.justify-end.flex-1.px-2
        ($ :.flex.items-stretch
           ($ :.dropdown.dropdown-end
              ($ :label.btn.btn-ghost.rounded-btn {:tab-index 0} "Filter")
              ($ :ul.menu.dropdown-content.p-2.shadow.bg-base-100.rounded-box.w-52.mt-4 {:tab-index 0}
                 (for [show (seq [:all :pending :done])]
                   ($ :li {:key (name show)
                           :on-click #(dispatch [:apply-todo-filter show])}
                      ($ :a (name show))))))))))


(defui footer [{:keys [done total]}]
  ($ :footer.flex.items-center.p-4
     ($ :aside.items-center.grid-flow-col
        ($ :span ($ :strong done) " of " ($ :strong total) " tasks completed"))))

(defui todo-input [{:keys [on-add-todo]}]
  (let [[value set-value!] (uix/use-state "")]
    ($ :.flex.items-center
       ($ :input.flex-1.py-8.px-12.border-x-0.border-y-2.text-lg
          {:value value
           :placeholder "Add a new todo and hit Enter to save"
           :on-change (fn [^js e]
                        (set-value! (.. e -target -value)))
           :on-key-down (fn [^js e]
                          (when (= "Enter" (.-key e))
                            (set-value! "")
                            (on-add-todo value)))}))))

(defui todo-item-text [{:keys [text text-style on-done-editing]}]
  (let [[editing? set-editing!] (uix/use-state false)
        [editing-value set-editing-value!] (uix/use-state "")]
    (if editing?
      ($ :input.flex-1.text-lg.outline-0.border-0
        {:value editing-value
         :auto-focus true
         :on-change (fn [^js e]
                      (set-editing-value! (.. e -target -value)))
         :on-key-down (fn [^js e]
                        (when (= "Enter" (.-key e))
                          (set-editing-value! "")
                          (set-editing! false)
                          (on-done-editing editing-value)))})
      ($ :span.flex-1
        {:style text-style
         :on-click (fn [_]
                     (set-editing! true)
                     (set-editing-value! text))}
        text))))

(defui todo-item
  [{:keys [id description done] :as props}]
  {:pre [(s/valid? :todo/task props)]}
  ($ :li.flex.items-center.justify-between.py-8.px-12.border-b-2.text-lg.font-medium
     {:key id}
     ($ :input.w-5.h-5.mr-12
        {:type :checkbox
         :checked (= done true)
         :on-change #(dispatch [:toggle-todo id])})
     ($ todo-item-text
        {:text description
         :text-style {:text-decoration (when (= true done) :line-through)}
         :on-done-editing #(dispatch [:save-todo id %])})
     ($ :button.border-0.text-xl.text-red-600.cursor-pointer
        {:on-click #(dispatch [:delete-todo id])}
        "×")))

(defui todo-widget [{:keys [tasks task-filter]}]
  (let [all-tasks (vals tasks)
        done  (count (filter :done all-tasks))
        total (count all-tasks)]
    ($ :.block.p-6.w-full.mx-auto.bg-white.rounded-xl.shadow-lg
       ($ header {:task-filter task-filter})
       ($ todo-input {:on-add-todo #(when (seq %)
                                      (dispatch [:add-todo %]))})
       (when (seq tasks)
         ($ :ul
            (for [todo (filter-by all-tasks task-filter)]
              ($ todo-item todo))))
       ($ footer {:done done :total total}))))

(defui todo-app [{:keys [sub]}]
  (let [todo-data (use-sub [sub])]
    ($ todo-widget todo-data)))

(defui sample-app []
  ($ todo-app {:sub :todo-data}))
