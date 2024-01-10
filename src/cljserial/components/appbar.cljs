(ns cljserial.components.appbar
  ;; (:require-macros [cljserial.utils.icons :as icons])
  (:require
   [uix.core :as uix :refer [defui $]]
   ;;TODO Revisit reworking the icon loading code below as a macro..
   [fontawesome.icons :as fai]
   [cljserial.utils.icons :as icons]
   ;;
   ))

;;Preload the icons to prevent reloading per render...
(def brand-icon-size "2rem")
(def icon-size "2rem")
(def appbar-icon  (icons/fa-icon :fontawesome.brands/usb {:size brand-icon-size}))
(def user-icon  (icons/fa-icon :fontawesome.solid/user {:size icon-size}))
(def settings-icon  (icons/fa-icon :fontawesome.solid/gears {:size icon-size}))

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
     ($ round-icon {:tabindex "0" :role "button"} user-icon)
     ($ :ul {:class "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"}
        ($ :li ($ :a.justify-between "Profile" ($ :span.badge "New")))
        ($ :li ($ :a "Settings"))
        ($ :li ($ :a "Logout")))))

(defui settings-dropdown []
  ($ :div {:class "dropdown dropdown-end"}
     ($ round-icon {:tabindex "0" :role "button"} settings-icon)
     ($ :ul {:class "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"}
        ($ :li ($ :a.justify-between "Bla" ($ :span.badge "New")))
        ($ :li ($ :a "Bleh"))
        ($ :li ($ :a "Bleee")))))

(defui appbar [{:keys [routes languages]}]
  ($ :header.navbar
     ($ :.navbar-start
        ($ round-icon appbar-icon)
        ($ :.text-xl "CLJSerial Demo"))
     ($ :.navbar-center
        ($ route-links {:routes routes}))
     ($ :.navbar-end
        ($ language-dropdown {:languages languages})
        ($ settings-dropdown)
        ($ profile-dropdown))))
