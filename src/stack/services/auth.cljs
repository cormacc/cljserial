 (ns stack.services.auth
  (:require
   [taoensso.telemere :as t]
   [uix.core :refer [defui $]]
   ;; [stack.utils.supabase :as supabase]
   ))


;;---------------------------------------------------------------------------------------
;; Schema

; Placeholder for now -- elaborate at some point...
(def Session [:maybe :map])

(def initial-state nil)

;;---------------------------------------------------------------------------------------
;; Events etc.

; Subscribe to this for auth changes
;; (dbfx/reg-sub
;;  :auth-session
;;  (fn [db _query_vector]
;;    (get-in db [:session])))

;; ; Used to both set session token on sign-in and nil it on sign-out
;; (dbfx/reg-event-fx
;;  :auth-set-session
;;  [(dbfx/path [:session])]
;;  (fn [{:keys [db]} [_eid session]]
;;    {:db session
;;     ;;TODO: Include username as event arg?
;;     :fx [[:dispatch [(if session
;;                        :auth-sign-in
;;                        :auth-sign-out)]]]}))

(defn init [enable]
  (t/log! :info enable)
  ;; (if enable
    ;; (supabase/register-session-callback #(dbfx/dispatch [:auth-set-session %]))
    ; Set to any non-nil value to be effectively authenticated
    ; .... todo spoof some data to render in the UI
    ;; (dbfx/dispatch [:auth-set-session {:auth-enabled false}])
    ;; )
)

(defn sign-out []
  (t/log! :info "initiated")
  (supabase/sign-out))


;; (def ui-component supabase/auth-component)

(defui wrap-layout [{:keys [layout]}]
  (let [session (dbfx/use-sub [:auth-session])]
    (if session
      ($ layout)
      ($ ui-component))))
