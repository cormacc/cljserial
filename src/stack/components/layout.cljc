(ns stack.components.layout
  (:require [replicant.alias :refer [defalias]]))

;; TODO: Rework this as an alias
(defalias card [attrs children]
  [:div.divide-y.divide-gray-200.overflow-hidden.rounded-lg.bg-white.shadow.px-4.py-5
   attrs children])

(defalias header [attrs children]
  [:div.px-4.py-5 attrs children])

(defalias content [attrs children]
  [:div.px-4.py-5 attrs children])

(defalias footer [attrs children]
  [:div.px-4.py-4 attrs children])
