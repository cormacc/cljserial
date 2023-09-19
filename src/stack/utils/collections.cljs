(ns stack.utils.collections)


(defn find-first
  [m k]
  (->> (tree-seq map? vals m)
       (filter map?)
       (some k)))

(defn find-all
  [m k]
  (->> (tree-seq map? vals m)
       (filter map?)
       (keep k)))
