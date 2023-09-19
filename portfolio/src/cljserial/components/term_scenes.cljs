(ns cljserial.components.term-scenes
  (:require [uix.core :refer [$ use-state]]
            [uix.dom]
            [portfolio.react-18 :refer-macros [defscene]]
            [cljserial.components.term :as term]))

(defn fake-term-events [count]
  (let [d (js/Date.now)]
    (into {} (for [n (range count)] [(- d n) {:type (if (odd? n) :tx :rx) :payload {:type :text :data "bla"}}]))))

(defscene term-widget-empty
  :title "Terminal widget - no items"
  ($ term/term-widget {:events {}
                       :set-events! nil}))

(defscene term-widget-one
  :title "Terminal widget - one item"
  ($ term/term-widget {:events (fake-term-events 1)
                       :set-events! nil}))

(defscene term-widget-many
  :title "Terminal widget - multiple items"
  ($ term/term-widget {:events (fake-term-events 10)
                       :set-events! nil}))

(defscene term-widget-any
  :title "Terminal widget - functional (with state)"
  (let [[events set-events!] (use-state {})]
    ($ term/term-widget {:events events
                         :set-events! set-events!})))
