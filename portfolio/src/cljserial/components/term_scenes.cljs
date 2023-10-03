(ns cljserial.components.term-scenes
  (:require [uix.core :refer [$ use-state]]
            [uix.dom]
            [portfolio.react-18 :refer-macros [defscene]]
            [cljserial.components.term :as term]))

(defn fake-term-events [count]
  (let [d (js/Date.now)]
    (into {} (for [n (range count)] [(- d n) {:timestamp (- d n) :event-type (if (odd? n) :tx :rx) :event-data {:byte-encoding :text :bytes "bla"}}]))))

(defscene term-widget-empty
  :title "Terminal widget - no items"
  ($ term/term-widget {:events {}
                       :on-add-event nil}))

(defscene term-widget-one
  :title "Terminal widget - one item"
  ($ term/term-widget {:events (fake-term-events 1)
                       :on-add-event nil}))

(defscene term-widget-many
  :title "Terminal widget - multiple items"
  ($ term/term-widget {:events (fake-term-events 10)
                       :on-add-event nil}))

(defscene term-widget-any
  :title "Terminal widget - functional (with state)"
  (let [[events set-events!] (use-state {})]
    ($ term/term-widget {:events events
                         :on-add-event #(set-events! (assoc events (js/Date.now) {:timestamp (js/Date.now)
                                                                                  :event-type :tx
                                                                                  :event-data {:byte-encoding :text
                                                                                               :bytes %}}))})))
