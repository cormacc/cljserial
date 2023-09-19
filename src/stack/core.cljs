(ns stack.core)


(def ^:dynamic *dispatch* nil)


(defn ^:export set-dispatch!
  "Register a global dispatch function for event handlers and life-cycle hooks
  that are not functions. See data-driven event handlers and life-cycle hooks in
  the user guide for details."
  [f]
  (set! *dispatch* f))

(defn dispatch [args]
  (*dispatch* args))
