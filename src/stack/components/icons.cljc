(ns stack.components.icons
  (:require [replicant.alias :refer [defalias]]))

(defalias round-icon [attrs children]
  [:div.btn.btn-ghost.btn-circle attrs children])
