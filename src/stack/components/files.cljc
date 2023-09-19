(ns stack.components.files
  (:require [cuerdas.core :as str]
            [replicant.alias :refer [defalias]]
            [stack.components.layout :as layout]
            [stack.components.forms :as forms]))

;;TODO: Extract these from malli schema instead?
(def cols [:path :size :created :modified :synced])

(defalias file-table [{::keys [filestore] :as attrs} children]
  (let [{:keys [info entries]} filestore]
    [::layout/card
     attrs
     [::layout/header children]
     [::layout/content
      [:table.table

       [:thead [:tr (map (fn [heading] [:th (name heading)]) cols)]]
       [:tbody
        (for [f (vals entries)]
          [:tr
           {:on {:click [[:file/read (:path f)]
                         [:user/input :selected-file-path (:path f)]]}}
           (map (fn [col-id] [:td (get f col-id)]) cols)])
        [:tr [:td "Storage"] [:td (str/format "%s / %s bytes" (:used info) (:capacity info))]]]]]]))


(defalias file-card [{::keys [file readonly]} children]
  (let [{:keys [path data]} file]
    [::layout/card
     [::layout/header children]
     [::layout/content
      [::forms/fieldset
       [:label.input.w-full "Path"
        [:input
         {:type "text" :placeholder "/"
          :value path
          :readonly readonly
          :on {:input [[:user/input :create-file-path :event/target.value]]}}]]
       [:textarea.textarea.w-full.h-24
        {:placeholder "Enter file content here..."
         :value data
         :readonly readonly
         :on {:input [[:user/input :create-file-content :event/target.value]]}}]
       (when-not  readonly
                 [:button.btn.btn-neutral.mt-4
                  {:on {:click [[:file/write path data]]}}
                  "Save"])]]]))
