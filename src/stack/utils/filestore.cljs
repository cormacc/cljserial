(ns stack.utils.filestore
  "A persistent local filestore using the web OPFS and IndexedDB APIs.
  OPFS (Origin Private File System) acts as the principal file store.
  The OPFS API doesn't provide file metadata (create/modified timestamp etc.).
  Size is available, but only by downloading the entire file blob and calling size on that.

  To work around this limitation, IndexedDB is used as a file metadata store.
  IndexedDB could also be used to store the file blob (and might be faster - see RxDB article
  linked below), but if so, blobs should be stored in a separate table, otherwise we're replicating
  the size determination friction from OPFS, and precluding using ObjectStore.getAll() to quickly
  load the index. The implementation here should (if I do it right) allow replacing OPFS blob storage with
  IndexedDB blob storage easily at a later date.

  N.B. This implementation assumes we only want the most recent version of a file retained. If we want a local
       filestore with history, that should be implementable readily enough using the bitemporal domain database
       implementation in `stack.utils.datascript`, although it'll probably start creaking if it accumulates large
       binaries (that's an assumption - not based on any performance measurement data). Though if we externalised
       blob storage for the bitemporal db that might not be the case.... anyway.

  There's an excellent article published by RxDB on the relative merits of the following storage options:
  - LocalStorage
  - IndexedDB
  - Cookies
  - OPFS
  - WASM-SQLite

  See https://rxdb.info/articles/localstorage-indexeddb-cookies-opfs-sqlite-wasm.html
  "
  (:require
   [clojure.string :as str]
   [taoensso.telemere :as t]
   [promesa.core :as p]
   [stack.schema.filestore :as schema]
   [stack.apis.opfs :as opfs]
   [stack.apis.indexed-db :as indexed-db]))


(def index-schema-version 1)
(def index-store-id "filestore-index")

(defonce index-connection (atom nil))
(defonce index-cache (atom (sorted-map)))

(defn- index-schema-upgrade-handler [idb-conn]
  ;; TODO: Add a schema version check here?
  ;; TODO: Should we index by path only? Or should we have a numeric ID in addition to path?
  (.createObjectStore idb-conn index-store-id (clj->js {:keyPath "path"})))

;; See https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate
;;     N.B. usageDetails is only provided on some browsers (chromium etc)
(defn get-usage-estimates+ []
  (-> (.estimate (.-storage js/navigator))
      (p/then (fn [raw-result]
                (let [{:keys [quota usage usageDetails] :as result} (js->clj raw-result :keywordize-keys true)]
                  (t/event! ::filestore-usage {:data result})
                  {:capacity quota
                   :used usage
                   :details usageDetails})))))


(defn reload-index+ []
  (-> (indexed-db/open+ index-store-id
                     :schema-version index-schema-version
                     :on-upgrade index-schema-upgrade-handler)
      (p/then #(reset! index-connection %))
      (p/then #(indexed-db/get-all+ % index-store-id))
      (p/then #(reset! index-cache %))))

(def empty-filestore
  {:entries (sorted-map)
   :info {:capacity 0 :used 0}})

(defn init+ []
  (p/plet [entries (reload-index+)
           usage (get-usage-estimates+)]
          {:entries entries
           :info usage}))

(defn normalise-path [entry-path]
  (if (= "/" (first entry-path))
    entry-path
    (str "/" entry-path)))

(defn- create-index-entry+ [{:keys [path size] :as opts}]
  (t/event! ::create-index-entry {:data opts})
  (let [timestamp (.now js/Date)
        path-norm (normalise-path path)
        entry {:path path-norm :size size
               ;; TODO: Should this include some sort of file mode id (binary/text) or mime-type info?
               ;; N.B. These will diverge from local OPFS modified timestamp if file created/modified elsewhere and then synced
               :created timestamp :modified timestamp
               ;; Timestamp of last sync
               :synced 0
               ;; Placeholder for eventual index sync with lazy blob sync -- true when we expect to find a local copy of the blob
               :local true}]
    (swap! index-cache assoc path-norm entry)
    (indexed-db/add+ @index-connection index-store-id entry)))

(comment
  (require '[stack.utils.debug :as du])
  (def rslt (du/inspect-promise (create-index-entry+ {:path "/bla" :size 0})))
 ;;---
  )

;;Arguably unnecessary - `write+` automatically creates folder structure...
(defn create-directory+ [path]
  (-> (opfs/create-directory+ path)
      ;;N.B. No index entry for a directory...
      (p/then (fn [dir-handle]
                (t/event! ::filestore-create-directory-ok {:data path})
                dir-handle))))

;; FIXME: For some reason this fails -- the final handler in the chain doesn't get executed....
;; (defn write+ [filepath content]
;;   (-> (opfs/write+ filepath content)
;;       (p/then (create-index-entry+ {:path filepath :size (count content)}))
;;       (p/then (fn [entry]
;;                 (t/event! ::filestore-write-ok {:data entry})
;;                 entry))))

(defn- write_+ [filepath content]
  (-> (opfs/write+ filepath content)
      (p/then #(create-index-entry+ %))))

;; FIXME (continue) .... but this split version works
(defn write+ [filepath content]
  (-> (write_+ filepath content)
      (p/then (fn [entry]
                (t/event! ::filestore-write-ok {:data entry})
                entry))))

;;TODO Add logging here for consistency...
(defn read+ [filepath & {:keys [as] :or {as :text}}]
  (let [path-norm (normalise-path filepath)
        index-entry (get @index-cache path-norm)]
    (-> (opfs/read+ path-norm :as as)
        (p/then (fn [file-data]
                  (t/event! ::filestore-read-ok {:data file-data})
                  (assoc-in index-entry [:data] (:data file-data)))))))

(defn delete+ [filepath]
  (p/let [path-norm (normalise-path filepath)
          _opfs_deleted (opfs/delete+ path-norm)
          _idb_deleted (indexed-db/delete+ @index-connection index-store-id path-norm)]
    ;; Remove the entry from the index cache
    (swap! index-cache dissoc path-norm)
    (t/event! ::filestore-delete-ok {:data path-norm})
    filepath))

(comment

  (require '[stack.utils.debug :as du])
  ;; Write a file
  (def rslt (du/inspect-promise (write+ "test11.txt" "blehblehblhe")))
  ;; Write a file with a leading /
  (->
   (write+ "/test-prefixed.txt" "blablablabla")
   (p/then #(reset! rslt %)))

  (delete+ "/test-prefixed.txt")
;; Write a file in nested folders
  (->
   (write+ "/some/sub/directories/test-prefixed.txt" "blablablabla")
   (p/then #(reset! rslt %)))

  (-> (read+ "test.txt")
      (p/then #(reset! rslt %)))
;;-----
  )
