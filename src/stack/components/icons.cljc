(ns stack.components.icons
  (:require [replicant.alias :refer [defalias]]
            [phosphor.icons :as phosphor]))

(def default-size "1.5rem")

(defalias round-icon [attrs children]
  [:div.btn.btn-ghost.btn-circle attrs children])

;; This doesn't work...
;; (defalias icon [attrs children]
;;   (phosphor/render (first children) (merge {:size default-size} attrs)))

;; And neither does this -- probably needs to be implemented as a macro instead...
;; (defn render [icon & {:keys [size] :or {size default-size} :as attrs}]
;;   (phosphor/render icon attrs))
