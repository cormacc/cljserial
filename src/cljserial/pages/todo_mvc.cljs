(ns cljserial.pages.todo-mvc
  (:require [uix.core :refer [defui $]]
            ;; [refx.alpha :refer [use-sub dispatch]]
            [cljserial.components.todo :as todo]))

(defui layout []
  ($ todo/sample-app))
