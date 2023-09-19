(ns stack.uix.tables
  (:require
   [uix.core :as uix :refer [defui $]]))


(defui table [props]
  ($ :table.table props))
