(ns cljserial.views
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [refx.alpha :refer [use-sub dispatch]]
   [cljserial.components.term :as term]
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
        ($ :a.btn.btn-ghost.normal-case.text-xl "UIx2 + refx + shadow-cljs + portfolio + tailwind + DaisyUI"))
     ($ :.flex-none
        ($ uix-icon))))

(defui footer []
  ($ :footer.footer.footer-center.p-4.bg-base-300.text-base-content.rounded-xl.shadow-lg.sticky.bottom-0
     ($ :aside ($ :p "Copyright 2023 - All rights reserved by CormacC"))))


(defui term-widget-refx [{:keys [event-sub tx-event-id] :as props}]
  (println props)
  (let [events (use-sub [event-sub])]
    ($ term/term-widget {:events events
                         :on-add-event #(when (seq %)
                                          (dispatch [tx-event-id %]))})))

;; TODO: Put the terminal and TODO widgets on different tabs
(defui app-layout []
  ($ :.container.mx-auto.max-w-full.p-2
     ($ header)
     ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx})
     ($ todo/sample-app)
     ($ footer)))
