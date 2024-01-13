(ns cljserial.layout
  (:require
   [uix.core :as uix :refer [defui $]]
   [cljserial.components.appbar :refer [appbar]]
   [cljserial.components.statusbar :refer [statusbar]]
   [cljserial.components.serial-port :as serial-port]))

(defui app-layout [{:keys [routes languages view]}]
  [($ appbar {:routes routes :languages languages})
   ($ :main.flex-grow ($ view))
   ($ statusbar)])
