(ns stack.example.pages.filestore
  (:require [stack.components.files :as files]))


(defn render [{:keys [filestore user-input] :as _state}]
  (let [{:keys [create-file-path create-file-content selected-file-path]} user-input
        selected-file  (if (empty? selected-file-path)
                         {:path "" :data ""}
                         (get (:entries filestore) selected-file-path))]
    [:div.grid.grid-cols-2
     [::files/file-table
      {::files/filestore filestore
       ::files/read-action [:file/read]
       ::files/file-path-addr [:user-input :selected-file-path]
       ::files/delete-action [:file/delete]}
      "Files (OPFS)"]
     [::files/file-card
      {::files/file selected-file}
      "Selected file"]]))
