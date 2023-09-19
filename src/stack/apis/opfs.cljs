(ns stack.apis.opfs
  "Interface to the Origin Private File System - browser local storage.
  See https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system"
  (:require
   [cljs.core.async :as async :refer [go-loop <!]]
   [taoensso.telemere :as t]
   [promesa.core :as p]
   [stack.schema.filestore :as fs]
   [stack.apis.async-iterator :as async-iterator]))

;; N.B. Some of the OPFS api methods use async iterators....
;; See https://gist.github.com/jjsullivan5196/0904057a2ec3eb080de5c4d6f45da630 for some useful refs on these in cljs
;; Or an alternative approach... https://ask.clojure.org/index.php/10896/how-to-work-with-asynciterable-interface-in-cljs

(defn get-root+
  "Get the root OPFS folder for this app."
  []
  (.getDirectory (.-storage js/navigator)))

(defn get-subdirectory+
  "Get a subdirectory relative to the provided root"
  [root+ dir-name & {:keys [create] :or {create false}}]
  (p/-> root+
        (.getDirectoryHandle dir-name (clj->js {:create create}))))

(defn get-directory+
  "Get a nested subdirectory given an absolute path."
  [dir-vector & {:keys [create] :or {create false}}]
  ;;To do this, we reduce the vector of directory names to a chain of promises
  (reduce #(get-subdirectory+ %1 %2 :create create)
          (get-root+)
          dir-vector))

(defn create-directory+ [dir-path]
  (-> (get-directory+ (fs/get-path-vector dir-path) :create true)
      (p/then (fn [dir-handle]
                (t/event! ::opfs-create-directory-ok {:data {:directory dir-path}})
                dir-handle))
      (p/catch #(t/event! ::opfs-create-directory-error {:level :error :data {:directory dir-path :error %}}))))

(defn remove-entry+
  "Delete a file or directory from OPFS."
  [entry-name]
  (->
   (p/-> (get-root+)
         (.removeEntry entry-name));;TODO: Should we delete recursively by default?
   (p/then #(t/event! ::opfs-delete-ok {:data entry-name}))
   (p/catch #(t/event! ::opfs-delete-error {:level :error :data {:entry-name entry-name :error %}}))))

(defn get-entries+ []
  (let [result (p/deferred)]
    (p/let [folder (get-root+)
            folder-name (.-name folder)
            entry-iter (p/-> (.entries folder)
                             (async-iterator/get-iterator))
            iter-chan (async-iterator/to-chan entry-iter)]
      (go-loop [entry-map {}]
        (let [entry (<! iter-chan)]
          (if (nil? entry)
          ;; We're done listing -- handle the result
            (do
              (t/event! ::opfs-get-entries-ok {:data entry-map})
              (p/resolve! result entry-map))
            (do
              (t/event! ::opfs-entry {:level :debug :data entry})
              ;; MAYBE: call getFile on the file handles to extract the size, created and modified metadata
              ;;       This returns another promise, so a bit fiddly...
              (let [[entry-name handle] entry
                    entry-path (str folder-name "/" entry-name)
                    file {:path entry-path :name entry-name :type (name (.-kind handle)) :size 0 :created 0 :modified 0 :bytes ""}]
                (recur (assoc-in entry-map [entry-path] file))))))))
    result))

(defn get-file-handle+
  [filepath & {:keys [create] :or {create false}}]
  (let [fname (fs/get-filename filepath)
        fdirs (fs/get-dir-vector filepath)]
    (-> (get-directory+ fdirs :create create)
        (p/then #(.getFileHandle % fname (clj->js {:create create}))))))

(defn get-file+
  "Get a File object from the OPFS.
  See the following API docs on the File and underlying Blob interfaces:
  - File :: https://developer.mozilla.org/en-US/docs/Web/API/File
  - Blob :: https://developer.mozilla.org/en-US/docs/Web/API/Blob"
  [filepath]
  (p/-> (get-file-handle+ filepath)
    (.getFile)))

(defn- get-file-info [file]
  {:name (.-name file)
   :modified (.-lastModified file)
   :mime-type (.-type file)
   :size (.-size file)})

(defn read+ [filepath & {:keys [as] :or {as :text}}]
  (p/let [file (get-file+ filepath)
          ;;TODO: Consider doing this on the basis of the extracted mime type info rather than an :as argument?
          content (if (= :text as)
                    (.text file)
                    (.arrayBuffer file))]
    (let [finfo (get-file-info file)]
      (t/event! ::opfs-read-ok {:data finfo})
      (-> finfo
          (assoc-in [:path] filepath)
          (assoc-in [:data] content)))))

;; TODO: Add replace / overwrite flag?
(defn write+ [filepath content]
  (->
   (p/let [writeable (p/-> (get-file-handle+ filepath :create true)
                           (.createWritable))
           _written (.write writeable content)
           _closed (.close writeable)]
     (t/event! ::opfs-write-ok {:data filepath})
     {:path filepath :size (count content)})
   (p/catch #(t/event! ::opfs-write-error {:level :error :data {:filepath filepath :error %}}))))

(defn delete+ [filepath]
  (let [fdirs (fs/get-dir-vector filepath)
        fname (fs/get-filename filepath)]
    (p/let [_done
            (p/-> (get-directory+ fdirs)
                  (.removeEntry fname))]
          (t/event! ::opfs-delete-ok {:data filepath}))))


(comment
  (write+ "/bla.bla" "blalbalbla")
  (delete+ "/bla.bla")
  ;;----
  )
