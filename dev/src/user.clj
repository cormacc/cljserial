;; See https://docs.cider.mx/cider/cljs/shadow-cljs.html#using-cider-connect-cljs
(ns user
  (:require [shadow.cljs.devtools.api :as shadow]
            [shadow.cljs.devtools.server :as server]))

(defn cljs-repl
  "Connects to a given build-id. Defaults to `:app`."
  ([]
  ;; (cljs-repl :portfolio)
   ;;TODO: I should be able to select at run time without editing this?
   ;; (cljs-repl :examples)
   (cljs-repl :replicant)
   ;; (cljs-repl :app)
   ;;---------------
   )
  ([build-id]
   (server/start!)
   (shadow/watch build-id)
   (shadow/nrepl-select build-id)))
