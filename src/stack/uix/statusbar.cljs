(ns stack.uix.statusbar
  (:require
   [uix.core :as uix :refer [defui $]]
   [cuerdas.core :as str]))

(defui statusbar [{:keys [copyright]}]
  (let [notice (str/format "Copyright (c) %s %s"
                           (:year copyright)
                           (:holder copyright))]
    ($ :footer.footer.footer-center
       ($ :aside ($ :p notice)))))
