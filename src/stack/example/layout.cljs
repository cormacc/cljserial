(ns stack.example.layout
  (:require
   [stack.components.navigation :as nav]
   [stack.components.forms :as forms]
   [stack.components.webserial :as webserial]
   [stack.utils.i18n :as i18n]
   [stack.utils.themes :as themes]))

(defn render [links {:keys [route language theme webserial] :as state}]
  (themes/select theme)
  (let [{:keys [data]} route
        active-route-id (:id data)
        view (:view data)
        connected? (= :connected (:_state webserial))]
    [:div
     [:nav.navbar.top-0.sticky.z-10
      [:div.navbar-start
       [::webserial/connection-button {::webserial/connected? connected?}]
       [:div.text-xl.px-4 "CLJStack"]]
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
     (view state)
     [:div.fixed.bottom-0.z-10 [::webserial/connection-status {::webserial/connected? connected?}]]]))
