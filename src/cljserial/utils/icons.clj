(ns cljserial.utils.icons
  ;; (:require-macros [fontawesome.icons])
  (:require
    [fontawesome.icons :as fai]))

(defmacro fa->svg [icon-name]
  `(cljserial.utils.icons/hiccup->svg (fontawesome.icons/render ~(fontawesome.icons/icon icon-name))))
