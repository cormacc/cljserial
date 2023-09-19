(ns cljserial.views
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [cljserial.components.todo :as todo]
   ))

(defui uix-icon []
  ($ :button.btn.btn-square.btn-ghost
     ($ :img {:src "https://raw.githubusercontent.com/pitch-io/uix/master/logo.png" :width 32})))

(defui header []
  ($ :header.navbar
     ($ :.flex-none
        ($ uix-icon))
     ($ :.flex-1
        ($ :a.btn.btn-ghost.normal-case.text-xl "UIx2 + shadow-cljs + portfolio + tailwind + DaisyUI"))
     ($ :.flex-none
        ($ uix-icon))))

(defui footer []
  ($ :footer.footer.footer-center.p-4.bg-base-300.text-base-content.rounded-xl.shadow-lg.sticky.bottom-0
     ($ :aside ($ :p "Copyright 2023 - All rights reserved by CormacC"))))

(defui app-layout []
  ($ :.container.mx-auto.max-w-full.p-2
     ($ header)
     ($ todo/sample-app)
     ($ footer)))
