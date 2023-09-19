(ns stack.uix.hardware
  (:require
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [stack.schema.hardware :refer [EmbeddedDevice]];;This doesn't exist yet
   [stack.uix.cards :as cards]
   [stack.uix.tables :as tables]))

(defui device-table [{:keys [devices]}]
  {:pre [m/validate [:seqable EmbeddedDevice] devices]}
  ($ cards/card {:title "Devices"}
     ($ tables/table
        ($ :thead ($ :tr ($ :th "Serial") ($ :th "Hardware revision") ($ :th "Firmware")  ($ :th "Bootloader")))
        ($ :tbody
           (for [d devices]
             ($ :tr {:key (:serial d)}
                ($ :td (str (:serial d)))
                ($ :td (str (:hardware_rev d)))
                ($ :td (str (:firmware_rev d)))
                ($ :td (str (:bootloader_rev d)))))))))
