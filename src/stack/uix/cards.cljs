(ns stack.uix.cards
  (:require
   [uix.core :as uix :refer [defui $]]))

(defui title-simple- [{:keys [title]}]
  ($ :div {:class "pb-2"}
     ($ :h3 {:class "font-semibold"} title)))

(defui title-with-action- [{:keys [title action]}]
  ($ :div {:class "pb-2"}
     ($ :div {:class "-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"}
        ($ :div {:class "ml-4 mt-2"}
           ($ :h3 {:class "font-semibold"} title))
        ($ :div {:class "ml-4 mt-2 flex-shrink-0"}
           action))))


(defui card [{:keys [title action children]}]
  ($ :div {:class "overflow-hidden rounded-lg shadow-sm p-4"}
     (if action
       ($ title-with-action- {:title title :action action})
       ($ title-simple- {:title title}))
     ($ :div children)))
