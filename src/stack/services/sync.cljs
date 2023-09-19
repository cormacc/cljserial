(ns stack.services.sync
  "A database synchronisation service for a local-first application"
  (:require
   [taoensso.telemere :as t]
   [statecharts.core :as hsm]
   [stack.utils.hsm :as hsm-dbfx]))

;; ============================================================================
;; Sync service - a statemachine
;; See https://lucywang000.github.io/clj-statecharts/

;;Initial context...
(def default-context {})

(def controller
  (hsm/machine
   {:id :sync-service
    :initial :offline
    :context default-context

    :states {:offline {:entry (fn [ctx, e]
                                (t/log! :info "TODO: Start building transaction backlog"))
                       :on {:auth-sign-in :online}}
             :online {:entry (fn [_ctx, _e]
                               (t/log! :info "TODO: Begin sync"))
                      :on {:auth-sign-out :offline}}}}))

(defn init []
  (hsm-dbfx/register controller))
