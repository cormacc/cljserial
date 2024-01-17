(ns cljserial.pages.converter
  (:require
   [clojure.string :as s]
   [lambdaisland.glogi :as log]
   [uix.core :refer [defui $]]
   [cljserial.utils.uix :as uu]))

(defui layout []
  (let [[output set-output!] (uix.core/use-state "")]
    ($ :.flex.flex-col
       ($ :label {:for "converter-input"} "HTML  input")
       ($ :textarea.min-h-60
          {:id "converter-input"
           :placeholder "Enter HTML markup in this box for conversion."
           :on-change (fn [^js event]
                        (let [input (.. event -target -value)]
                          (log/info :converter/converting input)
                          (set-output! (uu/html->uix input))))})
       ($ :label {:for "converter-output"} "UIx markup output")
       ($ :textarea.min-h-60
          {:id "converter-output" :readOnly true :value output}))))

(comment
  (def input
    (.-value
     (.getElementById js/document "converter-input")))
  ;
  )
