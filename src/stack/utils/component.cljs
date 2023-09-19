(ns stack.utils.component
  (:require
   [clojure.string :as str]))

(defn merge-classes [props extra-classes]
  (if (:class props)
    (assoc props :class (str/join " " [(:class props) extra-classes]))
    (assoc props :class extra-classes)))

(comment
  (merge-classes {} "bla")              ; {:class "bla"}
  (merge-classes {:class "bleh"} "bla") ; {:class "bleh bla"}
;
  )
