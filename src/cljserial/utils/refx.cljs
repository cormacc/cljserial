(ns cljserial.utils.refx
  (:require [refx.interceptors :refer [after]]
            [cljserial.utils.browser :as browser]
            [cljserial.utils.schema :as schema-utils]))


(defn schema-check-interceptor
  "Defines a refx interceptor that validates updated db content against a given (malli) `schema`"
  [schema]
  (after (partial schema-utils/check-and-throw schema)))

(defn browser-cache-interceptor
  "Defines a refx interceptor that caches data to browser local storage under the specified `id`"
  [id] (after #(browser/write {:id id :data %})))
