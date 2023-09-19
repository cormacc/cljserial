(ns stack.utils.events)

(defn add-listener
  "Add a DOM event listener and return the target -- syntactic sugar for chained listener creation"
  [target type callback]
  (.addEventListener target type callback)
  target)

(defn extract-result [e]
  (.-result (.-target e)))
