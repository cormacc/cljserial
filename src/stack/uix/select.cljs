(ns stack.uix.select
  (:require
   [uix.core :as uix :refer [defui $]]))

(defui select [{:keys [items selected on-change]}]
  ;; Would like to use .select-sm here also, but inner text not displayed properly -- margin or something? Revisit
  ($ :select.select
     {:on-change (fn [^js event]
                   (let [selected (.. event -target -value)]
                     (on-change selected)))
      :value selected}
     (for [item items]
       (let [id (:id item)
             text (:text item)]
         ($ :option {:key id :value id} text)))))
