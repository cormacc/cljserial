(ns stack.components.webserial-scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [stack.schema.webserial :as wss]
            [stack.components.webserial :as webserial]))

(defscene serial-options-disconnected
  :title "Port settings - disconnected"
  [::webserial/port-config {:port nil :port-description nil :options wss/DEFAULTS}])

(defscene serial-options-connected
  :title "Port settings - connected"
  [::webserial/port-config {:port "/dev/ttyUSB0" :port-description "0000:0000" :options wss/DEFAULTS}])
