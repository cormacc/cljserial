(ns cljserial.app
  (:require
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [refx.alpha :refer [use-sub dispatch]]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [reitit.coercion.spec :as rss]
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


;; -------------------------------------------------------------------
;; -- View -----------------------------------------------------------

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
        ($ :a.btn.btn-ghost.normal-case.text-xl "+ refx + cljs-statecharts + shadow-cljs + reitit + portfolio + tailwind + DaisyUI"))
     ($ route-links)))

(defui footer []
  ($ :footer.footer.footer-center.p-4.bg-base-300.text-base-content.rounded-xl.shadow-lg.sticky.bottom-0
     ($ :aside ($ :p "Copyright (c) 2023 Cormac Cannon / Provided under terms of MIT license"))))

(defui layout []
  (let [route-match (use-sub [:route-match])]
    ($ :.container.mx-auto.max-w-full.p-2
       ($ header)
       ($ :ul ())
       (if route-match
         (let [view (:view (:data route-match))]
           ($ view))
         ($ default-view))
       ($ footer))))


;; -------------------------------------------------------------------
;; -- Intent? ----------------------------------------------------------

(defn start! []
  (rfe/start!
   ;;What's this coercion bit about?
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [m]
     (dispatch [:route-matched m]))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))
