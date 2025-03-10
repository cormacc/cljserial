(ns stack.example.routes
  (:require [stack.example.pages.webserial-terminal :as terminal]
            [stack.example.pages.filestore :as filestore]
            [stack.example.pages.todos :as todos]
            [stack.example.pages.plotly :as plotly]))

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

   ["/plotly"
    {:id ::plotly
     :title "Plotly"
     :description "Plotly.js integration"
     :view #'plotly/render}]

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
