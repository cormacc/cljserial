(ns stack.examples.re-frame.pages.cloud-filestore
  "A page demonstrating some backend functionality provided by supabase.
  Using react state/effect hooks for now to keep things focused (no re-frame).

  TODO: Rework to detect connection failure and display an appropriate message
  "
  (:require
   ;Libs
   [taoensso.telemere :as t]
   [uix.core :refer [defui $]]
   ;Stack
   [stack.utils.supabase :as supabase]
   [stack.services.auth :as auth]
   ;App
   [stack.uix.cards :as cards]
   [stack.uix.tables :as tables]))

(defui folder-list [{:keys [folders on-folder-click]}]
  ($ tables/table
     ($ :caption "Buckets")
     ($ :thead ($ :tr ($ :th "Name") ($ :th "Public")))

     ($ :tbody
        (for [b folders]
          (let [id (:id b)
                public (if (:public b)
                         "Y"
                         "N")]
            ($ :tr {:key id}
               ($ :td {:on-click (fn [^js _] (on-folder-click id))} (:name b))
                  ;; ($ :td (:created_at b))
                  ;; ($ :td (:updated_at b))
               ($ :td public)
                  ;;---
               ))))))

;; TODO: Consolidate this with components/file-table
;; TODO: We're remapping the Supabase/S3 file type schema here -- should be happening
(defui folder-contents-panel [{:keys [folder items on-item-click]}]
  ($ tables/table
     ($ :caption (str "Bucket contents (" folder ")"))
     ($ :thead ($ :tr ($ :th "Name") ($ :th "Created") ($ :th "Modified")  ($ :th "Size")))
     ($ :tbody
        (for [i items]
          (let [name (:name i)
                folder? (nil? (:id i))]
            ($ :tr {:key name} ;; (:id f) only valid for files, not folders
               ($ :td {:on-click (if folder?
                                   (fn [^js _] (t/log! {:data {:folder folder :subfolder name}} "TODO: Folder selected"))
                                   (fn [^js _] (on-item-click name)))}
                  name)
               ($ :td (str (:created_at i)))
               ($ :td (str (:updated_at i)))
               ($ :td (str (:size (:metadata i))))))))))

(defui file-contents-panel [{:keys [path content]}]
  ($ :.flex.flex-col
     ($ :pre (or content "<Select a file to view its contents>"))
     ($ :label (or path "<No file selected>"))))

(defui file-explorer [{:keys [folders on-folder-click folder items on-item-click file]}]
  ($ cards/card {:title "File explorer"}
     ($ :.flex.flex-col
        ($ :.flex.flex-row
           ($ :.flex-none
              ($ folder-list {:folders folders :on-folder-click on-folder-click}))
           ($ :.grow
              ($ folder-contents-panel {:folder folder :items items :on-item-click on-item-click})))
        ($ file-contents-panel file))))
;; TODO: subscribe to something (?files table?) for real-time updates from this or another client
;;       See clojurians slack / dart channel for some discussion/examples
(def test-bucket-id "test")

(defui layout [_props]

  ;; Using local state hooks rather then re-frame db here while exploring the supabase api...
  (let [[buckets set-buckets!] (uix.core/use-state [])
        [bucket set-bucket!] (uix.core/use-state test-bucket-id)
        [files set-files!] (uix.core/use-state [])
        [file set-file!] (uix.core/use-state {:path nil :content nil})
        show-bucket-callback (fn [bucket]
                                  ;; Setting bucket should cause effect hook to re-run
                               (set-bucket! bucket))
        show-file-callback (fn [path] (supabase/get-file {:bucket bucket :path path :then set-file!}))]
    (uix.core/use-effect
     (fn []
       (supabase/list-buckets {:then set-buckets!}))
     ;; No dependencies -- i.e. don't re-run the effecthook
     [])
    (uix.core/use-effect
     (fn []
       (supabase/list-files bucket {:then set-files!}))
        ;; Re-run if 'bucket' changes
     [bucket])
    ($ file-explorer {:folders buckets :on-folder-click show-bucket-callback
                      :folder bucket :items files :on-item-click show-file-callback
                      :file file})
;;
    ))

(defui layout-with-auth [_props]
  ($ auth/wrap-layout {:layout layout}))
