(ns stack.uix.menus
  (:require
   [uix.core :refer [defui $]]

   [stack.utils.icons :as icons]
   [stack.uix.select :refer [select]]))

(def user-icon  (icons/icon :phosphor.regular/user {:size icons/default-size}))
(def settings-icon  (icons/icon :phosphor.regular/gear {:size icons/default-size}))


(defui theme-menu [{:keys [themes selected on-change]}]
  ($ select {:items (map (fn [t] {:id t :text t}) themes)
             :selected selected
             :on-change on-change}))

(defui language-menu [{:keys [languages selected on-change]}]
  ($ select {:items (map (fn [l] {:id (:code l) :text (:name l)}) languages)
             :selected selected
             :on-change on-change}))

(defui profile-menu [{:keys [on-sign-out]}]
  ($ :div {:class "dropdown dropdown-end"}
     ($ icons/round-icon {:tabIndex "0" :role "button"} user-icon)
     ($ :ul {:class "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-sm bg-base-100 rounded-box w-52"}
        ($ :li ($ :a.justify-between "Profile" ($ :span.badge "New")))
        ($ :li ($ :a "Settings"))
        ; N.B. Using a button rather than an anchor here to assign an on-click event
        ($ :li ($ :button {:on-click on-sign-out} "Sign Out")))))

;; TODO: Subscribe to port/connection settings
(defui settings-menu []
  ($ :div {:class "dropdown dropdown-end"}
     ($ icons/round-icon {:tabIndex 0 :role "button"} settings-icon)
     ($ :.dropdown-content.w-72.z-50
        ;; TODO: Replace serial-port settings here....
        )))
