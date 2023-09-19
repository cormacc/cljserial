(ns stack.uix.appbar
  (:require
   [uix.core :as uix :refer [defui $]]
   [stack.utils.icons :as icons]))

;;Preload the icons to prevent reloading per render...
(def brand-icon-size "2rem")
(def appbar-icon  (icons/icon :phosphor.regular/usb {:size brand-icon-size}))

;;TODO: Add subscription logic to add 'tab-active'
;;TODO: (weeks later) What the hell did I mean by the previous TODO?
(defui route-links [{:keys [routes]}]
  ($ :.tabs.tabs-box {:role "tablist"}
     (for [[_route route-props] routes]
       ($ :a {:key (:name route-props)
              :role "tab"
              :class (if (:active route-props) "tab tab-active" "tab")
              :href (:href route-props)}  (:title route-props)))))

(defui appbar [{:keys [title routes menus]}]
  ($ :header.navbar
     ($ :.navbar-start
        ($ icons/round-icon appbar-icon)
        ($ :.text-xl title))
     ($ :.navbar-center
        ($ route-links {:routes routes}))
     ($ :.navbar-end menus)))
