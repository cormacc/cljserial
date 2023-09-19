(ns stack.apis.async-iterator
  "Utils for dealing with js async iterators. Other peoples work"
  (:require [cljs.core.async :as async :refer [go >! close!]]))


;; CHANNEL BASED APPROACH -- credit to jjsullivan5196
;; See https://gist.github.com/jjsullivan5196/0904057a2ec3eb080de5c4d6f45da630
;; See usage example in stack.apis.opfs
(defn get-iterator
  "Create an async iterator object from `iterable`. `iterable` must have a method
  definition for `js/Symbol.asyncIterator`."
  [iterable]
  (js-invoke iterable js/Symbol.asyncIterator))

(defn push-next
  "Run `step` when `value` is taken from `output` channel."
  [output value step]
  (go (when (>! output value)
        (step))))

(defn take-value
  "Pull the value from an async iterator `element`."
  [element]
  (when (not (.-done element))
    (.-value element)))

(defn onto-chan
  "Iteratively take values from async `iterator` and push them to channel
  `output`. By default, will close `output` when `iterator` is
  exhausted. Provide false `close?` argument to leave the output open."
  ([output iterator] (onto-chan output iterator true))
  ([output iterator close?]
   (let [step #(onto-chan output iterator)]
     (.. iterator
         (next)
         (then
           (fn [element]
             (if-let [value (take-value element)]
               (push-next output value step)
               (when close? (close! output))))
           (fn [err]
             (push-next output err step)))))))

(defn to-chan
  "Create an unbuffered `core.async` channel that pulls values from async
  `iterator`. Channel will close when `iterator` is exhausted."
  [iterator]
  (let [iter-chan (async/chan)]
    (onto-chan iter-chan iterator)
    iter-chan))


;; For an alternative macro-based approach...
;; See https://ask.clojure.org/index.php/10896/how-to-work-with-asynciterable-interface-in-cljs
