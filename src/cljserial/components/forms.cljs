(ns cljserial.components.forms
  (:require
   [uix.core :refer [defui $]]))

(defui select
  [{:keys [items selected format disabled] :or {selected nil format (fn [item] item) disabled false}}]
  ($ :select.rounded-md.w-full.h-6.py-0.text-xs
     {:default-value (format selected)
      :disabled disabled}
     (map-indexed
      (fn [idx item] ($ :option {:key idx} (format item)))
      items)))
