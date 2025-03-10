(ns stack.schema.hardware
  (:require
   [stack.schema.version :refer [Version]]))

;;---------------------------------------------------------------------------------------
;; Schema

(def EmbeddedDevice
  [:map
   [:serial :int]
   [:hardware-revision :int]
   [:firmware-revision Version]
   [:bootloader-revision Version]])
