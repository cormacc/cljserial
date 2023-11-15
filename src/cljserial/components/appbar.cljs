(ns cljserial.components.appbar
  (:require
   [uix.core :as uix :refer [defui $]]))


(defui route-links [{:keys [routes]}]
  ($ :.navbar-center
     ($ :ul.menu.menu-horizontal.px-1
        (for [[_route route-props] routes]
          ($ :li {:key (:name route-props)} ($ :a {:href (:href route-props)}  (:title route-props)))))))

(defui uix-icon []
  ($ :button.btn.btn-square.btn-ghost
     ($ :img {:src "https://raw.githubusercontent.com/pitch-io/uix/master/logo.png" :width 32})))

(defui appbar [{:keys [routes]}]
  ($ :header.navbar
     ($ :.flex-none
        ($ uix-icon))
     ($ :.flex-1
        ($ :a.btn.btn-ghost.normal-case.text-xl "+ refx + cljs-statecharts + shadow-cljs + reitit + portfolio + tailwind + DaisyUI"))
     ($ route-links {:routes routes})))
