(ns stack.uix.bt-device
  "A WebBluetooth device settings UI component."
  (:require
   [uix.core :as uix :refer [defui $]]
   [stack.apis.webbluetooth :as weble]
   [stack.uix.cards :as cards]
   [stack.uix.tables :as tables]
   [stack.uix.buttons :as buttons]))


(defui settings
  [{:keys [device on-device-request on-device-forget]}]
  ($ cards/card {:title "Bluetooth settings"
                 :action (if (some? device)
                           ($ buttons/button
                              {:size :xs :on-click on-device-forget}
                              "Disconnect device")
                           ($ buttons/button
                              {:size :xs :on-click on-device-request}
                              "Connect device"))}
     ($ tables/table
        ($ :tbody
           (if (some? device)
             ($ :tr ($ :td "Device") ($ :td (weble/describe-device device)))
             ($ :tr ($ :td "Device") ($ :td "Disconnected")))))))
