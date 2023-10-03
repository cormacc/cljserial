(ns cljserial.routes
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [refx.alpha :refer [use-sub dispatch]]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
   ;;
   [cljserial.pages.terminal :as terminal]
   [cljserial.pages.todo-mvc :as todo-mvc]))


(def routes
  [["/"
    {:name ::terminal
     :title "Terminal"
     :view terminal/layout}]

   ["/todo"
    {:name ::todo
     :title "TodoMVC"
     :view todo-mvc/layout}]])

(def default-view terminal/layout)

(defui route-links []
  ($ :.navbar-center
     ($ :ul.menu.menu-horizontal.px-1
        (for [[_route route-props] routes]
          ($ :li {:key (:name route-props)} ($ :a {:href (rfe/href (:name route-props))}  (:title route-props)))))))

(defui uix-icon []
  ($ :button.btn.btn-square.btn-ghost
     ($ :img {:src "https://raw.githubusercontent.com/pitch-io/uix/master/logo.png" :width 32})))

(defui header []
  ($ :header.navbar
     ($ :.flex-none
        ($ uix-icon))
     ($ :.flex-1
        ($ :a.btn.btn-ghost.normal-case.text-xl "UIx2 + refx + shadow-cljs + portfolio + tailwind + DaisyUI + reitit"))
     ($ route-links)
     ($ :.flex-none
        ($ uix-icon))))

(defui footer []
  ($ :footer.footer.footer-center.p-4.bg-base-300.text-base-content.rounded-xl.shadow-lg.sticky.bottom-0
     ($ :aside ($ :p "Copyright 2023 - All rights reserved by CormacC"))))

(defui app-layout []
  (let [route-match (use-sub [:route-match])]
    ($ :.container.mx-auto.max-w-full.p-2
       ($ header)
       ($ :ul ())
       (if route-match
         (let [view (:view (:data route-match))]
           ($ view))
         ($ default-view))
     ;; ($ term-widget-refx {:event-sub :serial-events :tx-event-id :serial-tx})
     ;; ($ todo/sample-app)
       ($ footer))))

(defn start! []
  (rfe/start!
   ;;What's this coercion bit about?
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m]
     (dispatch [:route-matched m]))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))
