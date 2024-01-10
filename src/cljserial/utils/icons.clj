(ns cljserial.utils.icons
  (:require
    [fontawesome.icons :as fai]))

(defmacro fa-icon [icon-name opts]
  `(cljserial.utils.icons/hiccup->svg (fontawesome.icons/render (fontawesome.icons/icon ~icon-name) ~opts)))
