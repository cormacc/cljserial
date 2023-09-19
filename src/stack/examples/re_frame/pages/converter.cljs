(ns stack.examples.re-frame.pages.converter
  "A HTML -> UIX syntax converter for use during development.
  Implemented using straight uix/react state hooks rather than re-frame/refx, to isolate it
  from proper application state."
  (:require
   [uix.core :refer [defui $]]
   [stack.utils.uix :as uu]))

(defui layout []
  (let [[output set-output!] (uix.core/use-state "")]
    ($ :.flex.flex-col
       ($ :label {:for "converter-input"} "HTML  input")
       ($ :textarea.min-h-60
          {:id "converter-input"
           :placeholder "Enter HTML markup in this box ..."
           :on-change (fn [^js event]
                        (let [input (.. event -target -value)]
                          (set-output! (uu/html->uix input))))})
       ($ :label {:for "converter-output"} "UIx markup output")
       ($ :textarea.min-h-60
          {:id "converter-output"
           :placeholder "... and the corresponding UIx markup will appear here."
           :readOnly true
           :value output}))))

(comment
  ;; Get current content of input element for debugging
  (def input
    (.-value
     (.getElementById js/document "converter-input")))
  ;
  )
