(ns stack.components.navigation
  (:require [replicant.alias :refer [defalias]]
            [phosphor.icons :as phosphor]
            [stack.components.icons :as icons]))

(def navbar-icon-size "2rem")

(def profile-icon  (phosphor/icon :phosphor.regular/user))
(def settings-icon  (phosphor/icon :phosphor.regular/gear))

(defalias brand [{:keys [icon title] :as _attrs} _children]
  [:div.navbar-start
   [:a.pr-4 {:href "#/" :title "I wanna go home!!!"} (phosphor/render icon  {:size navbar-icon-size})]
   [:div.text-xl title]])

(defalias tabs [{:keys [links active] :as attrs} _children]
  [:div.tabs.tabs-box {:role "tablist"}
   (for [{:keys [id title description href]} links]
     [:a.tab {:replicant/key id
              :role "tab"
              :class (when (= active id)
                       [:tab-active])
              :href href
              :title description}
      title])])

(defalias profile-dropdown [_attrs _children]
  [:div.dropdown.dropdown-end
   [::icons/round-icon {:tab-index 0 :role "button"}
    (phosphor/render profile-icon {:size navbar-icon-size})]
   [:ul.menu.menu-sm.dropdown-content.mt-3.p-2.shadow-sm.bg-base-100.rounded-box.w-52
    {:class "z-[1]"}
    [:li [:a.justify-between "Profile" [:span.badge "New"]]]
    [:li [:a "Settings"]]
    [:li [:button {:on {:click [[:user/sign-out]]}} "Sign Out"]]]])

(defalias settings-dropdown [_attrs _children]
  [:div.dropdown.dropdown-end
   [::icons/round-icon {:tab-index 0 :role "button"} (phosphor/render settings-icon {:size navbar-icon-size})]
   [:div.dropdown-content.w-72.z-50
    ;; TODO
    ]])
