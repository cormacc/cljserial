(ns stack.components.term-scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [stack.components.term :as term]))

(defn fake-term-events [count]
  (let [d (- (js/Date.now) count)]
    (into {} (for [n (range count)] [(+ d n) {:timestamp (- d n) :event-type (if (even? n) :command :response) :event-data {:byte-encoding :text :bytes "bla"}}]))))

(defscene term-widget-empty
  :title "Terminal widget - no events"
  [::term/terminal {::term/events {}}])

(defscene term-widget-one
  :title "Terminal widget - one event"
  [::term/terminal {::term/events (fake-term-events 1)}])

(defscene term-widget-ten
  :title "Terminal widget - ten events"
  [::term/terminal {::term/events (fake-term-events 10)}])


(defscene term-widget-with-input
  :title "Terminal widget - with partial command entry"
  [::term/terminal {::term/input-value "file put bl"
                    ::term/events (fake-term-events 10)}])
