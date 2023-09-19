(ns stack.examples.re-frame.layout
  (:require
   [taoensso.telemere :as t]

   [uix.core :as uix :refer [defui $]]

   [stack.utils.themes :as themes]
   [stack.services.auth :as auth]
   [stack.uix.menus :as menus]

   [stack.utils.i18n :as i18n]
   [stack.uix.appbar :refer [appbar]]
   [stack.uix.statusbar :refer [statusbar]]))

;;TODO: Wire in re-frame etc. to menus
(defui app-layout [{:keys [routes view on-sign-out]}]
  [($ appbar {:title "CLJStack re-framed"
              :routes routes
              :menus [($ menus/theme-menu {:key :themes
                                           :themes themes/all :selected themes/default
                                           :on-change themes/select})
                      ($ menus/language-menu {:key :languages
                                              :languages i18n/supported-languages
                                              :selected i18n/default-language-code
                                              :on-change #(t/log! {:level :warn :data %} "TODO: Implement language selection")}
                         ($ menus/settings-menu {:key :settings}))
                      ($ menus/profile-menu {:key :profile :on-sign-out auth/sign-out})]})
   ($ :main.flex-grow ($ view))
   ($ statusbar {:copyright {:year 2024 :holder "My, myself and I"}})])
