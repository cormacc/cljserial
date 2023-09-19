(ns stack.uix.forms
  (:require
   [uix.core :refer [defui $]]))

(defui select
  [{:keys [items selected format value disabled on-change] :or {selected nil format (fn [item] item) value format disabled false}}]
  ($ :select.rounded-md.w-full.h-6.py-0.text-xs
     {:default-value (value selected)
      :disabled disabled
      :on-change on-change}
     (map-indexed
      (fn [idx item] ($ :option {:key idx :value (value item)} (format item)))
      items)))
