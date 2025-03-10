(ns stack.schema.filestore
  (:require
   [clojure.string :as str]))


(def Path [:string {:min 1}])

(def FileType [:enum :directory :file])

 ;;TODO Revisit this type..
(def Timestamp [:int])

(def File
  [:map
   [:path Path]
   [:size [:int (:min 0)]]
   [:created Timestamp]
   [:modified Timestamp]
   [:synced Timestamp]
   ;;FIXME: This should be optional
   ;;FIXME: This should be a binary data type later
   [:data :string]])

(def FileMap
  [:map-of Path File])

(def FSInfo
  [:map
   [:capacity :int]
   [:used :int]
   [:details {:optional true} [:map-of :keyword :int]]])

(def FileStore
  [:map
   [:info FSInfo]
   ;;TODO: Rename this to files? Or will we reintroduce the notion of directory elements?
   [:entries FileMap]])

(defn get-filename
  "Extract the filename component of a path string of the form '/some/folders/filename.ext'."
  [path]
  (last (str/split path "/")))

(defn get-path-vector
  "Extract a vector representation of a given path"
  [path]
  (let [p (if (= "/" (first path))
            (subs path 1)
            path)]
    (str/split p "/")))

(defn get-dir-vector
  "Extract a vector representation of the folder components of a given path"
  [path]
  (butlast (get-path-vector path)))
