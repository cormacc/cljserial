(ns cljserial.utils.refx
  (:require [refx.interceptors :refer [after]]
            [cljserial.browser :as browser]
            [cljserial.utils.spec :as spec-utils]))


(defn spec-check-interceptor
  "Defines a refx interceptor that validates updated db content against a given `spec-id`"
  [spec-id]
  (after (partial spec-utils/check-and-throw spec-id)))

(defn browser-cache-interceptor
  "Defines a refx interceptor that caches data to browser local storage under the specified `id`"
  [id] (after #(browser/write {:id id :data %})))
