(ns cljserial.layout
  (:require
   [phosphor.icons :as phosphor]
   [stack.components.navigation :as nav]
   [stack.components.forms :as forms]
   [stack.utils.i18n :as i18n]
   [stack.utils.themes :as themes]))

;;Preload the icons to prevent reloading per render...
(def usb-icon (phosphor/icon :phosphor.regular/usb))

(defn render [links {:keys [route language theme] :as state}]
  (themes/select theme)
  (let [{:keys [data]} route
        active-route-id (:id data)
        view (:view data)]
    [:div
     [:header.navbar
      [::nav/brand {:icon usb-icon :title "CLJSerial (Replicant)"}]
      [:div.navbar-center.px-4
       [::nav/tabs {:links links :active active-route-id}]]
      [:div.navbar-end
       [::forms/select
        {::forms/selected theme
         ::forms/options (map (fn [t] {:key t :value t :content t}) themes/all)
         :on {:input [[:view/assoc :theme :event/target.value]]}}]
       [::forms/select
        {::forms/selected language
         ::forms/options (map (fn [{:keys [code name]}] {:key code :value code :content name}) i18n/supported-languages)
         :on {:input [[:view/assoc :language :event/target.value]]}}]
       [::nav/profile-dropdown]
       [::nav/settings-dropdown]]]
     (view state)]))
