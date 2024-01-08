(ns cljserial.utils.icons
  ;; (:require-macros [cljserial.utils.icons])
  (:require
   [fontawesome.icons :as fai]
   [uix.core :refer [$]]))

;; This doesn't work as fai/icon is a macro.... rework this as a macro?
;; (defn fa->svg [icon]
;;   (let [hiccup-icon (fai/render (fai/icon icon))]
;;     hiccup-icon))

;; This does a very crude hiccup->uix conversion tightly coupled to svg structure returned by fai/render....
;; TODO: Make more generic
;; TODO: Do macro magic to allow loading icon by name...
(defn hiccup->svg [icon]
  (let [props (get icon 1)
        comment (get icon 2)
        path (-> icon
                 (get 3)
                 (get 1))]
    ($ :svg props comment ($ :path path))))

(defn render [icon]
  (hiccup->svg (fai/render icon)))
