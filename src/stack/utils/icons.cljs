(ns stack.utils.icons
  (:require-macros [stack.utils.icons])
  (:require
   ; These two used by macros in icons.clj
   [fontawesome.icons]
   [phosphor.icons]
   [uix.core :refer [defui $]]))


;; TODO: Handle this better within icon macro
(def default-size "2rem")

;; This is adapted from the hiccup->uix function in as yet unreleased version
;; of uix (>1.0.1), written by Roman Liutikov
;; The original produces markup to paste as source, whereas this just
;; removes some syntax quoting etc. in the last couple of lines to give
;; js/react output instead.
(defn hiccup->react [form]
  (cond
    (seq? form)
    (mapv hiccup->react form)

    (vector? form)
    (let [form (cond
                 (= :> (first form))
                 (rest form)

                 :else form)
          [tag attrs & children] form
          [attrs children] (cond
                             (map? attrs) [attrs children]
                             (> (count form) 1) [nil (into [attrs] children)]
                             :else [nil children])
          attrs (cond-> attrs
                  (contains? (meta form) :key)
                  (assoc :key (:key (meta form))))
          children (map hiccup->react children)]
      (if attrs
        ($ tag attrs children)
        ($ tag children)))

    :else form))

;; TODO: refactor this as a macro to allow one-shot use rather than (round-icon (icon ...))
(defui round-icon [props]
  ($ :.btn.btn-ghost.btn-circle props))
