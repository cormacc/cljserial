(ns cljserial.components.serial-port-scenes
  (:require [uix.core :refer [$ use-state]]
            [portfolio.react-18 :refer-macros [defscene]]
            [cljserial.components.serial-port :as serial-port]
            [cljserial.utils.webserial :refer [SerialOptions DEFAULTS]]
            [malli.generator :as mg]))

(defscene port-settings-disconnected
  :title "Port settings - disconnected"
  ($ serial-port/settings {:port nil :serial-options DEFAULTS}))

(defscene port-settings-connected
  :title "Port settings - connected"
  ($ serial-port/settings {:port "/dev/ttyUSB0" :serial-options DEFAULTS}))