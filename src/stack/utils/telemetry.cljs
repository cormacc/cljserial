(ns stack.utils.telemetry
  (:require
   [taoensso.telemere :as t]
   [taoensso.telemere.utils :as t-utils]
   [bling.core :as bling]))


(defn- signal->callout-opts
  "Returns {:keys [type label data?]} for use with `bling/callout`, etc."
  [{:keys [level]}]
  (let [label (t-utils/format-level level)
        type
        (case level
          (:report)       :info
          (:fatal :error) :error
          (:warn)         :warning
          (:trace :debug) :subtle
          (do             :neutral))]

    {:type type, :label label, :data? true, :margin-top 0, :margin-bottom 1}))

(def telemere-format-signal-fn (t-utils/format-signal-fn {:incl-newline? false}))

(defn telemere-bling-output-fn [signal]
  (let [norm-output (telemere-format-signal-fn signal)]
    (bling.core/callout
     (signal->callout-opts signal)
     norm-output)))

;; Stolen from here, with minor adaptations: https://gist.github.com/ptaoussanis/f8a80f85d3e0f89b307a470ce6e044b5
(defn handler:console-bling []
  ;; The downside to this is it doesn't let us have the nice structured browsing for clojure objects
  ;;      See ...
  ;;      - https://cljdoc.org/d/com.taoensso/telemere/1.0.0-RC2/api/taoensso.telemere#handler:console-raw
  ;;      - https://cljdoc.org/d/com.taoensso/telemere/1.0.0-RC2/api/taoensso.telemere#handler:console
  ;; I think what we want to do is use cljs-devtools markup in a preamble formatter. See custom formatting example here:
  ;; https://github.com/binaryage/cljs-devtools/blob/master/examples/shadow/src/app/core.cljs
  (t/handler:console {:output-fn telemere-bling-output-fn}))

(comment
  ;; Test bling in console...
  (bling/print-bling (bling/bling [:bold "bold"]
                                  ", "
                                  [:italic "italic"]
                                  ", or "
                                  [:blue "colored"]))

  ;; Add our handler
  (t/add-handler! :my-bling-handler
                  (handler:console-bling))
;;;
  )
