(ns stack.examples.re-frame.pages.cloud-db
  "A page demonstrating some backend functionality provided by supabase.
  Using react state/effect hooks for now to keep things focused (no re-frame).

  TODO: Rework to detect connection failure and display an appropriate message
  "
  (:require
   ;Libs
   [taoensso.telemere :as t]
   [uix.core :refer [defui $]]
   ;Stack
   [stack.utils.supabase :as supabase]
   [stack.services.auth :as auth]
   ;App
   [stack.uix.hardware :refer [device-table]]))


(defui layout [_props]
  ;; Using local state hooks rather then re-frame db here while exploring the supabase api...
  (let [[devices set-devices!] (uix.core/use-state [])]
    (uix.core/use-effect
     ;; Retrieve the device table
     (fn [] (supabase/get-table "devices" :then set-devices!))
     ;; No dependencies -- i.e. don't re-run the effecthook
     [])
    ($ device-table {:devices devices})))

(defui layout-with-auth [_props]
  ($ auth/wrap-layout {:layout layout}))
