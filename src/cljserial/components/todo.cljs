(ns cljserial.components.todo
  (:require
   [cljs.spec.alpha :as s]
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [cljserial.state :refer [use-persistent-state]]))

;; This is sample application code provided by the UIx2 starter project.
;; Reorganised slightly

(defui header []
  ($ :header.flex.p-8.justify-center.items-center
     ($ :img.p-2 {:src "https://raw.githubusercontent.com/pitch-io/uix/master/logo.png" :width 48})
     ($ :.text-lg "  made with " ($ :a {:href "https://github.com/pitch-io/uix"} "UIx2"))))

(defui footer []
  ($ :footer.text-center.p-8
     ($ :small "Adapted from the TODO example in the " ($ :a {:href "https://github.com/pitch-io/uix"} "'pitch-io/uix-starter'") " project")))

(defui text-field [{:keys [on-add-todo]}]
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
                            (on-add-todo #(assoc % (js/Date.now) {:text value
                                                                  :status :unresolved}))))}))))

(defui editable-text [{:keys [text text-style on-done-editing]}]
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

(s/def :todo/text string?)
(s/def :todo/status #{:unresolved :resolved})

(s/def :todo/item
  (s/keys :req-un [:todo/text :todo/status]))

(defui todo-item
  [{:keys [created-at text status on-update-todos] :as props}]
  {:pre [(s/valid? :todo/item props)]}
  ($ :.flex.items-center.justify-between.py-8.px-12.border-b-2.text-lg.font-medium
    {:key created-at}
    ($ :input.w-5.h-5.mr-12
      {:type :checkbox
       :checked (= status :resolved)
       :on-change (fn [_]
                    (on-update-todos #(update-in % [created-at :status] {:unresolved :resolved
                                                                         :resolved :unresolved})))})
    ($ editable-text
      {:text text
       :text-style {:text-decoration (when (= :resolved status) :line-through)}
       :on-done-editing (fn [value]
                          (on-update-todos #(assoc-in % [created-at :text] value)))})
    ($ :button.border-0.text-xl.text-red-600.cursor-pointer
      {:on-click (fn [_]
                   (on-update-todos #(dissoc % created-at)))}
      "×")))

(defui todo-widget [{:keys [todos set-todos!] :as props}]
  ($ :.block.p-6.w-full.mx-auto.bg-white.rounded-xl.shadow-lg
     ($ header)
     ($ text-field {:on-add-todo set-todos!})
     (for [[created-at todo] todos]
       ($ todo-item
          (assoc todo :created-at created-at
                 :key created-at
                 :on-update-todos set-todos!)))
     ($ footer)))

(defui sample-app []
  (let [[todos set-todos!] (use-persistent-state "cljserial/todos" (sorted-map-by >))]
    ($ todo-widget {:todos todos
                    :set-todos! set-todos!})))
