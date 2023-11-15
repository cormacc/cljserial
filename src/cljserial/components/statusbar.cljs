(ns cljserial.components.statusbar
  (:require
   [uix.core :as uix :refer [defui $] ]))

(defui statusbar []
  ($ :footer.footer.footer-center
     ($ :aside ($ :p "Copyright (c) 2023 Cormac Cannon / Provided under the MIT license"))))
