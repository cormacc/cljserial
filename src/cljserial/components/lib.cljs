(ns cljserial.components.lib
  (:require
   [uix.core :refer [defui $]]))

(defui select
  [{:keys [items selected format] :or {selected nil format (fn [item] item)}}]
  ($ :select.rounded-md.w-full.h-6.py-0.text-xs
     (map-indexed
      (fn [idx item] ($ :option {:key idx :selected (= selected item)} (format item)))
      items)))
