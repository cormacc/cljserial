(ns stack.utils.aws
  (:require
   [taoensso.telemere :as t]
   [shadow.cljs.modern :refer (js-await)]
   ;;Configuration
   ["aws-amplify" :refer [Amplify]]
   ["/aws-exports.js" :default aws-exports]
   ;;Auth
   ["aws-amplify/auth" :refer [signOut]]
   ;;UI components
   ["@aws-amplify/ui-react" :refer (withAuthenticator)]
   [uix.core :as uix]))

;; See https://docs.amplify.aws/

(defn configure []
  (.configure Amplify aws-exports))

(defn with-authenticator [uix-layout]
  (withAuthenticator (uix/as-react uix-layout)))

(defn sign-out []
  (js-await [_unused (signOut)]
            (t/log! :info "Signed out - YAY!!!")
            (catch failure
                   (t/event! ::signout-failure {:level :error :data {:error failure}}))))
