(ns stack.components.files-scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [malli.generator :as mg]
            [stack.schema.filestore :refer [FSInfo File]]
            [stack.components.files :as files]))


(defn fake-files
  "Generate a sorted map of `count` fake files."
  [count]
  (into (sorted-map) (for [file (mg/sample File {:size count})] [(:path file) file])))

(defn fake-file-store [file-count]
  {:entries (fake-files file-count) :info (mg/generate FSInfo)})

(defscene file-table-empty
  :title "File table - no files"
  [::files/file-table {::files/filestore (fake-file-store 0)} "No files"])

(defscene file-table-one
  :title "File table - one file"
  [::files/file-table {::files/filestore (fake-file-store 1)} "A file"])

(defscene file-table-ten
  :title "File table - multiple files"
  [::files/file-table {::files/filestore (fake-file-store 10)} "Some files"])
