(ns stack.utils.supabase
  (:require
   [cljs.core.async :as async]
   [cljs.core.async.interop :refer-macros [<p!]]
   [goog.object]
   [taoensso.telemere :as t]
   [promesa.core :as p]
   ["@supabase/supabase-js" :refer [createClient]]
   ; Migrate these ui bits out of here...
   ;; ["@supabase/auth-ui-react" :refer [Auth]]
   ;; ["@supabase/auth-ui-shared" :refer [ThemeSupa]]
   ))


; ENVIRONMENT CONFIG

; Use Lenire Connect (dev) environment by default
; These can be overridden via deps.edn or using --config-merge on launch
; See https://shadow-cljs.github.io/docs/UsersGuide.html#closure-defines
(goog-define API-URL "https://vyayflsbqdtxjgnhqoah.supabase.co")
(goog-define ANON-KEY "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXlmbHNicWR0eGpnbmhxb2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMjQ0MDMsImV4cCI6MjAzNTYwMDQwM30.5r2s9BcLF9po-q4OKfsARcjYV4B8-RR6OLQCSePt5Go")


(defonce client (createClient API-URL ANON-KEY))

; CORE HELPER FUNCTIONS

; N.B. May want to try cljs-bean if we start seeing performance issues down the road...
  ; See https://github.com/mfikes/cljs-bean
(defn extract-result-data [query-result]
  (-> (.-data query-result)
      (js->clj :keywordize-keys true)))


; DATABASE API

(defn get-table [table-id & {:keys [then] :or {then nil}}]
  (async/go
    (t/event! ::get-table {:data table-id})
    (p/-> client
          (.from table-id)
          (.select "*")
          (p/then (fn [result]
                    (let [rows (extract-result-data result)]
                      (t/event! ::get-table-ok {:data {:id table-id :row-count (count rows)}})
                      (when then (then rows)))))
          (p/catch (fn [e] (t/event! ::table-get-failure {:level :error :data e}))))))

; STORAGE API
; Returns a sequence of maps with the following keys..
;;[id "test"]
;;[:name "test"]
;;[:owner ""]
;;[:public false]
;;[:file_size_limit nil]
;;[:allowed_mime_types nil]
;;[:created_at "2024-09-06T17:10:08.893Z"]
;;[:updated_at "2024-09-06T17:10:08.893Z"]
(defn list-buckets [{:keys [then] :or {then nil}}]
  (async/go
    (t/log! :info "all")
    (try
      (let [result (<p! (-> (.-storage client)
                            (.listBuckets)))
            buckets (extract-result-data result)]
        (t/event! ::list-buckets-ok {:data buckets})
        (when then (then buckets)))
      (catch js/Error err (t/event! ::list-buckets-error {:level :error :data err})))))


(defn- from-bucket [bucket]
  (-> client
      (.-storage)
      (.from bucket)))

(defn list-files [bucket-id {:keys [then limit offset] :or {then nil limit 100 offset 0}}]
  (async/go
    (t/log! :info bucket-id)
    (try
      (let [result (<p! (-> (from-bucket bucket-id)
                            ;; The first arg is the path within the bucket - an empty string indicates root
                            (.list "" (clj->js {:limit limit :offset offset :sort-by {:column "name" :order "asc"}}))))
            items (extract-result-data result)]
        (t/event! ::list-files-ok {:data {:bucket bucket-id :item-count (count items) :files items}})
        (when then (then items)))
      (catch js/Error err (t/event! ::list-files-error {:level :error :data err})))))


(defn get-file [{:keys [bucket path then] :or {then nil}}]
  (async/go
    (t/event! ::file-get {:level :info :data {:bucket bucket :path path}})
    (try
      (let [result (<p! (-> (from-bucket bucket)
                            (.download path)))
            blob (extract-result-data result)
            file {:path path :content (<p! (.text blob))}]
        (t/event! ::file-get-ok {:level :info :data {:bucket bucket :path path}})
        (when then (then file)))
      (catch js/Error err (t/event! ::file-get-error {:level :error :data err})))))

; AUTH API
; See https://supabase.com/docs/guides/auth/quickstarts/react

(defn get-session+ []
  (-> client
      (.-auth)
      (.getSession)))

(defn get-session [& {:keys [then] :or {then nil}}]
  (async/go
    (t/event! ::get-session)
    (-> client
        (.-auth)
        (.getSession)
        (p/then (fn [result]
                  (let [session (-> result
                                    extract-result-data
                                    :session)]
                    (t/event! ::get-session-ok {:level :info :data session})
                    (when then (then session)))))
        (p/catch (fn [e] (t/event! ::get-session-error {:level :error :data e}))))))

(defn on-auth-state-change [set-session]
  ; Register the subscription
  (let [response (-> client
                     (.-auth)
                     (.onAuthStateChange (fn [_event session]
                                           (set-session session))))]
    ; Extract the subscription proxy from the result
    (-> response
        extract-result-data
        :subscription)))

(defn register-session-callback [callback]
  ; Get the initial session state
  (get-session :then callback)
  ; ... then register a callback to execute when backend session state changes
  ; ... N.B. this returns a subscription which we should unsubscribe from if using
  ; ... use-effect in a react component, but OK to bypass here. I hope :)
  (on-auth-state-change callback))

(defn sign-out []
  ; TODO: May not need to do anything here, as we're not waiting for the promise to resolve?
  (async/go
    (t/log! :info "ending session")
    (-> client
        (.-auth)
        (.signOut)
        (p/catch (fn [e] (t/event! ::signout-error {:level :error :data e}))))))

; See https://supabase.com/docs/guides/auth/quickstarts/react
;;
;; (defui auth-ui []
;;   (let [[session set-session] (uix.core/use-state nil)]
;;     (uix.core/use-effect
;;      (fn []
;;        ; 1. Get the initial auth state
;;        (get-session :then set-session)
;;        ; 2. Add a subscription callback if auth state changes in the backend
;;        (let [subscription (on-auth-state-change set-session)]
;;          ; 3. Unsubscribe when removing the component from the DOM
;;          (fn [] (.unsubscribe subscription))))
;;      ;NO dependencies
;;      [])
;;     (t/log! :info session)
;;     ; FIXME Make this a wrapper function, conditionally rendering the auth layout OR the currently selected route...
;;     (if session
;;       ($ :div {:on-click sign-out} "Yay you're logged in")
;;       ($ Auth {:supabaseClient client :appearance #js {:theme ThemeSupa}}))))
;; (defui auth-component [] ($ Auth {:supabaseClient client :appearance #js {:theme ThemeSupa}}))
;; (defui auth-ui []
;;   ($ Auth {:supabaseClient}))
