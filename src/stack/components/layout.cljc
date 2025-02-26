(ns stack.components.layout
  (:require [replicant.alias :refer [defalias]]))

(defalias card [attrs children]
  [:div.card.card-border
   attrs children])

(defalias header [attrs children]
  [:div.px-4.py-5 attrs children])

(defalias content [attrs children]
  [:div.px-4.py-5 attrs children])

(defalias footer [attrs children]
  [:div.px-4.py-4 attrs children])
