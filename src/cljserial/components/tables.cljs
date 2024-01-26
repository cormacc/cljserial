(ns cljserial.components.tables
  (:require
   [uix.core :as uix :refer [defui $]]
   [cljserial.utils.component :as cu]))


(defui table [props]
  ($ :table (cu/merge-classes props "min-w-full")))

(defui td [props]
  ($ :td (cu/merge-classes props "px-2")))
