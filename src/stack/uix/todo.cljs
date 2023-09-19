(ns stack.uix.todo
  (:require
   [uix.core :as uix :refer [defui $]]
   [stack.utils.dbfx :as dbfx]))

(defui header [{:keys [task-filter]}]
  ($ :.navbar.flex.rounded-box
     ($ :.flex-1.px-2.flex-none
        ($ :a.text-lg.font-bold "Uix2 TodoMVC - " (name task-filter) " tasks"))
     ($ :.flex.justify-end.flex-1.px-2
        ($ :.flex.items-stretch
           ($ :.dropdown.dropdown-end
              ($ :label.btn.btn-ghost.rounded-btn {:tab-index 0} "Filter")
              ($ :ul.menu.dropdown-content.p-2.shadow-sm.bg-base-100.rounded-box.w-52.mt-4 {:tab-index 0}
                 (for [show (seq [:all :pending :done])]
                   ($ :li {:key (name show)
                           :on-click #(dbfx/dispatch [:apply-task-filter show])}
                      ($ :a (name show))))))))))


(defui footer [{:keys [done total]}]
  ($ :footer.flex.items-center.p-4
     ($ :aside.items-center.grid-flow-col
        ($ :span ($ :strong done) " of " ($ :strong total) " tasks completed"))))

(defui todo-input [{:keys [on-add-task]}]
  (let [[value set-value!] (uix/use-state "")]
    ($ :.flex.items-center
       ($ :input.flex-1.py-2.px-2.border-x-0.border-y-0.text-lg
          {:value value
           :placeholder "Add a new todo and hit Enter to save"
           :on-change (fn [^js e]
                        (set-value! (.. e -target -value)))
           :on-key-down (fn [^js e]
                          (when (= "Enter" (.-key e))
                            (set-value! "")
                            (on-add-task value)))}))))

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
  ($ :.flex.items-center.justify-between.py-2.px-2.border-b-2.text-lg.font-medium
     ($ :input.w-5.h-5.mr-12
        {:type :checkbox
         :checked (= done true)
         :on-change #(dbfx/dispatch [:set-task-completed id (not done)])})
     ($ todo-item-text
        {:text description
         :text-style {:text-decoration (when (= true done) :line-through)}
         :on-done-editing #(dbfx/dispatch [:save-task id %])})
     ($ :button.border-0.text-xl.text-red-600.cursor-pointer
        {:on-click #(dbfx/dispatch [:delete-task id])}
        "×")))

(defui todo-widget [{:keys [tasks task-filter task-counts] :as props}]
  ($ :.block.p-6.w-full.mx-auto.rounded-xl.shadow-lg
     ($ header {:task-filter task-filter})
     ($ todo-input {:on-add-task #(when (seq %)
                                    (dbfx/dispatch [:add-task %]))})
     (when (seq tasks)
       ($ :ul
          (for [todo tasks]
            ($ :li {:key (:id todo)} ($ todo-item todo)))))
     ($ footer task-counts)))

(defui todo-app [{:keys [sub]}]
  (let [todo-data (dbfx/use-sub [sub])]
    ($ todo-widget todo-data)))

(defui sample-app []
  ($ todo-app {:sub :task-view}))
