(ns cljserial.utils.icons
  (:require
   [phosphor.icons]
   [fontawesome.icons]))

;; See https://github.com/cjohansen/phosphor-clj
;; Also https://phosphoricons.com/
(defmacro icon [icon-name opts]
  `(cljserial.utils.icons/hiccup->react (phosphor.icons/render (phosphor.icons/icon ~icon-name) ~opts)))

;; See https://github.com/cjohansen/fontawesome-clj
;; Also https://fontawesome.com/icons
(defmacro fa-icon [icon-name opts]
  `(cljserial.utils.icons/hiccup->react (fontawesome.icons/render (fontawesome.icons/icon ~icon-name) ~opts)))
