(ns cljserial.components.appbar
  (:require
   [uix.core :as uix :refer [defui $]]
   [cljserial.utils.icons :as icons]
   [cljserial.components.serial-port :as serial-port]))

;;Preload the icons to prevent reloading per render...
(def brand-icon-size "2rem")
(def icon-size "2rem")
(def appbar-icon  (icons/icon :phosphor.regular/usb {:size brand-icon-size}))
(def user-icon  (icons/icon :phosphor.regular/user {:size icon-size}))
(def settings-icon  (icons/icon :phosphor.regular/gear {:size icon-size}))

;;TODO: Add subscription logic to add 'tab-active'
;;TODO: (weeks later) What the hell did I mean by the previous TODO?
(defui route-links [{:keys [routes]}]
  ($ :.tabs.tabs-boxed {:role "tablist"}
     (for [[_route route-props] routes]
       ($ :a {:key (:name route-props)
              :role "tab"
              :class (if (:active route-props) "tab tab-active" "tab")
              :href (:href route-props)
              }  (:title route-props)))))

(defui round-icon [props]
  ($ :.btn.btn-ghost.btn-circle props))

(defui language-dropdown [{:keys [languages]}]
  ($ :select.select.select-bordered.select-sm
     (for [{:keys [code name]} languages]
       ($ :option {:key code :value code} name))))

(defui profile-dropdown []
  ($ :div {:class "dropdown dropdown-end"}
     ($ round-icon {:tabIndex "0" :role "button"} user-icon)
     ($ :ul {:class "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"}
        ($ :li ($ :a.justify-between "Profile" ($ :span.badge "New")))
        ($ :li ($ :a "Settings"))
        ($ :li ($ :a "Logout")))))

(defui settings-dropdown []
  ($ :div {:class "dropdown dropdown-end"}
     ($ round-icon {:tabIndex 0 :role "button"} settings-icon)
     ($ :div {:tabIndex 0 :class "dropdown-content z-[1] card card-compact"}
        ($ serial-port/settings nil))))

(defui appbar [{:keys [routes languages settings]}]
  ($ :header.navbar
     ($ :.navbar-start
        ($ round-icon appbar-icon)
        ($ :.text-xl "CLJSerial Demo"))
     ($ :.navbar-center
        ($ route-links {:routes routes}))
     ($ :.navbar-end
        ($ language-dropdown {:languages languages})
        ($ settings-dropdown settings)
        ($ profile-dropdown))))
