(ns stack.uix.file-card
  (:require
   [cuerdas.core :as str]
   [uix.core :as uix :refer [defui $]]
   [malli.core :as m]
   [stack.uix.cards :as cards]
   [stack.uix.tables :as tables]
   [stack.schema.filestore :refer [FileStore]]))

(defui card-with-footer [{:keys [filestore on-file-click]}]
  {:pre [m/validate FileStore filestore]}
  (let [info (:info filestore)
        entries (:entries filestore)]
    ($ cards/card {:title "Files"}
       ($ tables/table
          ($ :thead ($ :tr ($ :th "type") ($ :th "name") ($ :th "size")))
          ($ :tbody
             ;;FIXME: Sorting should probably happen at re-frame DB level rather than in the component?
             (for [{:keys [name type size]} (sort-by #(str (:type %) (:name %)) (vals entries))]
               ;;TODO: Differentiate between files and folders here...
               ($ :tr {:key name :on-click (fn [^js _] (on-file-click name))} ($ :td (str type)) ($ :td name) ($ :td size)))
             ($ :tr ($ :td "Storage") ($ :td (str/format "%s / %s MB" (:used_mb info) (:capacity_mb info)))))))))

(defui card [{:keys [title filestore on-file-click]}]
  ;; {:pre [m/validate FSEntryMap entries]}
  ;; TODO: Can probably do this via nested destructuring above?
  (let [{:keys [entries info]} filestore]
    ($ cards/card {:title title}
       ($ tables/table
          ($ :thead ($ :tr  ($ :th "path") ($ :th "size") ($ :th "created") ($ :th "modified") ($ :th "synced")))
          ($ :tbody
             (for [{:keys [path size created modified synced]}  (vals entries)]
               ($ :tr {:key path :on-click (fn [^js _] (on-file-click path))}  ($ :td path)
                  ($ :td size)
                  ($ :td created) ($ :td modified) ($ :td synced)))
             ;;TODO: Allow for non-standard additional info here (indexeddb/etc)?
             ($ :tr ($ :td "Storage") ($ :td (str/format "%s / %s bytes" (:used info) (:capacity info)))))))))
