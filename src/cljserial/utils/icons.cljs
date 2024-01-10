(ns cljserial.utils.icons
  (:require-macros [cljserial.utils.icons])
  (:require
   [fontawesome.icons]
   [uix.core :refer [$]]))

;; This does a very crude hiccup->uix conversion tightly coupled to svg structure returned by fai/render....
;; TODO: replace with new functions due in next uix update (>1.0.1)
(defn hiccup->svg [icon]
  (let [props (get icon 1)
        comment (get icon 2)
        path (-> icon
                 (get 3)
                 (get 1))]
    ($ :svg props comment ($ :path path))))
