(ns cljserial.layout
  (:require
   [uix.core :as uix :refer [defui $]]
   [cljserial.components.appbar :refer [appbar]]
   [cljserial.components.statusbar :refer [statusbar]]))

(defui app-layout [{:keys [routes languages view]}]
  [($ appbar {:routes routes :languages languages})
   ($ :main.flex-grow ($ view))
   ($ statusbar)])
