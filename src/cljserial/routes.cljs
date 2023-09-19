(ns cljserial.routes
  (:require [cljserial.domain :as domain]
            [stack.pages.webserial-terminal :as terminal]
            [stack.pages.filestore :as filestore]
            [stack.pages.todos :as todos]))

(def all

  [["/"
    {:id ::webserial
     :title "WebSerial"
     :description "WebSerial Terminal"
     :view #'terminal/render}]

   ["/todo"
    {:id ::todo
     :title "Bitemporal Todo"
     :description "We are travelling through space and time...."
     :view #'todos/render}]

   ["/files"
    {:id ::files
     :title "Files"
     :description "Files (local)"
     :view #'filestore/render}]

   ;; ["/local-db"
   ;;  {:name ::local-db
   ;;   :title "Database (local)"
   ;;   :view local-db/layout}]

   ;; ["/local-filestore"
   ;;  {:name ::local-filestore
   ;;   :title "Filestore (local)"
   ;;   :view local-filestore/layout}]
;;----
   ])

(def default (first all))
