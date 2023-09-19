(ns stack.pages.filestore
  (:require [taoensso.telemere :as t]
            [stack.components.files :as files]))


(defn render [{:keys [filestore user-input] :as _state}]
  (let [{:keys [create-file-path create-file-content selected-file-path]} user-input
        selected-file  (if (empty? selected-file-path)
                         {:path "" :data ""}
                         (get (:entries filestore) selected-file-path))]
    (t/log! {:level :info :data selected-file} "Rendering filestore")
  ;;TODO: Add file view card
    [:div.grid.grid-cols-2
     [::files/file-card
      {::files/file {:path create-file-path :data create-file-content}}
      "Create file"]
     [::files/file-card
      {::files/file selected-file
       ::files/readonly true}
      "View file"]
     [::files/file-table.col-span-2 {::files/filestore filestore} "Files (local)"]]))
