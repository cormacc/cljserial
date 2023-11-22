(ns cljserial.model
  (:require [cljs.reader]
            [refx.alpha :refer [reg-cofx reg-event-fx reg-event-db reg-sub inject-cofx]]
            [refx.interceptors :refer [path]]
            [cljserial.browser :as browser]
            [cljserial.utils.refx :as refx-utils]
            ;;... to define events and subs
            [cljserial.webserial.model :as wsm]
            [cljserial.webserial.commands :as wsc]
            [cljserial.cd.model :as cdm]
            [cljserial.todo.model :as todo]))

;; TODO: Eliminate this, or move it to relevant component/page?
(def Terminal [:map
               [:connection :string]
               [:events wsm/Events]])

(def AppDb [:map
            [:route-match :any]
            [:todo-data todo/TaskStore]
            [:command-history wsc/ExchangeHistory]
            ;; TODO: Rename this key
            [:state cdm/CdState]
            [:terminal Terminal]])

;; Nicked from the refx example here: https://github.com/ferdinand-beyer/refx/blob/main/examples/shared/src/todomvc/db.cljs

;; -- Default app-db Value  ---------------------------------------------------
;;
;; When the application first starts, this will be the value put in app-db
;; Unless, of course, there are todos in the LocalStore (see further below)
;; Look in:
;;   1.  `core.cljs` for  "(dispatch-sync [:initialise-db])"
;;   2.  this file for the registration of :initialise-db handler
;;

(def default-db           ;; what gets put into app-db by default.
  {:route-match nil
   :todo-data (todo/new-task-store todo/store-id)
   :command-history (wsc/new-history-store)
   :state cdm/initial-state
   :terminal {:connection "bla"
              :events (wsm/new-event-store)}})


;; -- Interceptors --------------------------------------------------------------
;;
;; Interceptors are a more advanced topic. So, we're plunging into the deep
;; end here.
;;
;; There is a tutorial on Interceptors in re-frame's `/docs`, but to get
;; you going fast, here's a very high level description ...
;;
;; Every event handler can be "wrapped" in a chain of interceptors. A
;; "chain of interceptors" is actually just a "vector of interceptors". Each
;; of these interceptors can have a `:before` function and an `:after` function.
;; Each interceptor wraps around the "handler", so that its `:before`
;; is called before the event handler runs, and its `:after` runs after
;; the event handler has run.
;;
;; Interceptors with a `:before` action, can be used to "inject" values
;; into what will become the `coeffects` parameter of an event handler.
;; That's a way of giving an event handler access to certain resources,
;; like values in LocalStore.
;;
;; Interceptors with an `:after` action, can, among other things,
;; process the effects produced by the event handler. One could
;; check if the new value for `app-db` correctly matches a Spec.
;;


;; -- First  ------------------------------------------------------
;;
;; Event handlers change state, that's their job. But what happens if there's
;; a bug in the event handler and it corrupts application state in some subtle way?
;; Next, we create an interceptor called `schema-check-interceptor`.

;; The original refx example used this in the interceptor chain of all event handlers.
;; Because all state is held in `app-db`, this was effectively validating the
;; ENTIRE state of the application after each event handler runs.  Which may be a good idea.
;;
;; As a learning exercise, we've implemented an interceptor for a subtree and placed it in a chain.
;; See events_todo.cljs.
;;
;; This uber-interceptor is now just used  to validate the db contents after the initial reload from browser cache.
;;
;; When included in the interceptor chain of an event handler, this interceptor
;; runs `check-and-throw` `after` the event handler has finished, checking
;; the value for `app-db` against a spec.
;; If the event handler corrupted the value for `app-db` an exception will be
;; thrown. This helps us detect event handler bugs early.

(def schema-check-interceptor (refx-utils/schema-check-interceptor AppDb))



;; -- cofx Registrations  -----------------------------------------------------

;; FIXME: This should be reworked to inject the store id as the second parameter and moved to `todo_events.cljs`

;; Use `reg-cofx` to register a "coeffect handler" which will load the todos
;; stored in localstore.
;;
;; We must supply a `sorted-map` but in LocalStore it is stored as a `map`.
;;
(reg-cofx
  :local-store-todos
  (fn [cofx _]
      ;; put the localstore todos into the coeffect under :local-store-todos
      (assoc cofx :local-store-todos
             ;; read in todos from localstore, and process into a sorted map
             (browser/read-map todo/store-id))))

;; now / timestamp coeffects
;; this allows timestamp to be injected (or stubbed for testing), keeping event handler functions pure
(reg-cofx
 :timestamp
 (fn [cofx _]
   (assoc cofx :timestamp (js/Date.now))))


;; -- db initialisation event handler ------------------------------------------------------
;; usage:  (dispatch [:initialise-db])
;;
;; This event is dispatched in the app's `main` (core.cljs).
;; It establishes initial application state in `app-db`.
;; That means merging:
;;   1. Any todos stored in LocalStore (from the last session of this app)
;;   2. Default initial values
(reg-event-fx                 ;; part of the re-frame API
 :initialise-db              ;; event id being handled

  ;; the interceptor chain (a vector of 2 interceptors in this case)
 [(inject-cofx :local-store-todos) ;; gets todos from localstore, and puts value into coeffects arg
  ;; FIXME: Bypassing schema-check-interceptor while we migrate to malli....
  ;; schema-check-interceptor ;; after event handler runs, check app-db for correctness. Does it still match Spec?
  ]

  ;; the event handler (function) being registered
 (fn [{:keys [db local-store-todos]} _]                  ;; take 2 values from coeffects. Ignore event vector itself.
   {:db (assoc-in default-db [:todo-data :tasks] local-store-todos)}))   ;; all hail the new state to be put in app-db


;; -- router event handler ------------------------------------------------------
(reg-event-db
 :route-matched
 ;;Interceptors
 [(path [:route-match])]
 (fn [_current-match [_ new-match]]
   new-match)) ;;Overwrite old with new

(reg-sub
 :route-match
 (fn [db _]
   (:route-match db)))
