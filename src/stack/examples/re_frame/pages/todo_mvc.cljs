(ns stack.examples.re-frame.pages.todo-mvc
  (:require [uix.core :refer [defui $]]
            ;; [stack.utils.dbfx :refer [use-sub dispatch]]
            [stack.uix.todo :as todo]))

(defui layout []
  ($ todo/sample-app))
