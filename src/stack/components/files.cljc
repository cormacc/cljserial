(ns stack.components.files
  (:require [cuerdas.core :as str]
            [replicant.alias :refer [defalias]]
            [stack.components.layout :as layout]
            [stack.components.forms :as forms]))

;;TODO: Extract these from malli schema instead?
(def all-cols [:path :size :created :modified :synced])

(defalias file-table
  [{::keys [filestore read-action file-path-addr delete-action cols] :or {cols all-cols} :as attrs} children]
  (let [{:keys [info entries]} filestore]
    [::layout/card
     attrs
     [::layout/header children]
     [::layout/content
      [:table.table.table-auto

       [:thead [:tr (map (fn [heading] [:th (name heading)]) cols)]]
       [:tbody
        (for [f (vals entries)]
          [:tr
           (map (fn [col-id] [:td {:on {:click [(conj read-action (:path f))
                                                [:view/assoc-in file-path-addr (:path f)]]}}
                              (get f col-id)]) cols)
           (when delete-action
             [:td [:button.border-0.text-red-600.cursor-pointer
                   {:on {:click [(conj delete-action (:path f))]}}
                   "X"]])])

        [:tr [:td "Storage"] [:td (str/format "%s / %s bytes" (:used info) (:capacity info))]]]]]]))


(defalias file-card [{::keys [file write-action file-path-addr file-content-addr]} children]
  (let [{:keys [path data]} file
        readonly (nil? write-action)]
    [::layout/card
     [::layout/header children]
     [::layout/content
      [::forms/fieldset
       [:label.input.w-full "Path"
        [:input
         {:type "text" :placeholder "/"
          :value path
          :readonly readonly
          :on {:input [[:view/assoc-in file-path-addr :event/target.value]]}}]]
       [:textarea.textarea.w-full.overflow-auto
        {:rows 25
         :placeholder "Enter file content here..."
         :value data
         :readonly readonly
         :on {:input [[:view/assoc-in file-content-addr :event/target.value]]}}]
       (when-not  readonly
         [:button.btn.btn-neutral.mt-4 {:on {:click [(conj write-action file)]}}
          "Save"])]]]))
