(ns cljserial.subs
  (:require [refx.alpha :refer [reg-sub sub]]))

;; -------------------------------------------------------------------------------------
;; Layer 2
;;
;; See https://day8.github.io/re-frame/subscriptions/
;;
;; Layer 2 query functions are "extractors". They take from `app-db`
;; and don't do any further computation on the extracted values. Any further
;; computation should happen in Layer 3.
;; Why?  It is an efficiency thing. Every Layer 2 subscription will rerun any time
;; that `app-db` changes (in any way). As a result, we want Layer 2 to be trivial.
;;

(reg-sub
 :todo-data          ;; usage:   (use-sub [:task-filter])
 (fn [db _]        ;; db is the (map) value stored in the app-db atom
   (:todo-data db))) ;; extract a value from the application state


;; -------------------------------------------------------------------------------------
;; Layer 3
;;
;; See https://day8.github.io/re-frame/subscriptions/
;;
;; A subscription handler is a function which is re-run when its input signals
;; change. Each time it is rerun, it produces a new output (return value).
;;
;; In the simple case, app-db is the only input signal, as was the case in the two
;; simple subscriptions above. But many subscriptions are not directly dependent on
;; app-db, and instead, depend on a value derived from app-db.
;;
;; Such handlers represent "intermediate nodes" in a signal graph.  New values emanate
;; from app-db, and flow out through a signal graph, into and out of these intermediate
;; nodes, before a leaf subscription delivers data into views which render data as hiccup.
;;
;; When writing and registering the handler for an intermediate node, you must nominate
;; one or more input signals (typically one or two).
;;
;; reg-sub allows you to supply:
;;
;;   1. a function which returns the input signals. It can return either a single signal or
;;      a vector of signals, or a map where the values are the signals.
;;
;;   2. a function which does the computation. It takes input values and produces a new
;;      derived value.
;;
;; In the two simple examples at the top, we only supplied the 2nd of these functions.
;; But now we are dealing with intermediate (layer 3) nodes, we'll need to provide both fns.
;;


(reg-sub
 :task-filter          ;; usage:   (use-sub [:task-filter])
 :<- [:todo-data]
 (fn [todo-data _]        ;; db is the (map) value stored in the app-db atom
   (:task-filter todo-data))) ;; extract a value from the application state
