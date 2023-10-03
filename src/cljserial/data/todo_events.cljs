(ns cljserial.data.todo-events
  [:require
   [refx.alpha :refer [reg-event-db reg-sub]]
   [refx.interceptors :refer [path]]
   [cljserial.refx-utils :as refx-utils]])



(def store-id "todos-refx")                         ;; localstore key

;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; INTERCEPTORS
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

;; -- First Interceptor ------------------------------------------------------
;;
;; Event handlers change state, that's their job. But what happens if there's
;; a bug in the event handler and it corrupts application state in some subtle way?
;; Next, we create an interceptor called `check-spec-interceptor`.
;; Later, we use this interceptor in the interceptor chain of all event handlers.
;; When included in the interceptor chain of an event handler, this interceptor
;; runs `check-and-throw` `after` the event handler has finished, checking
;; the value for `app-db` against a spec.
;; If the event handler corrupted the value for `app-db` an exception will be
;; thrown. This helps us detect event handler bugs early.
;; Because all state is held in `app-db`, we are effectively validating the
;; ENTIRE state of the application after each event handler runs.  All of it.


;; now we create an interceptor using `after`
(def check-spec-interceptor (refx-utils/spec-check-interceptor :todo/tasks))



;; -- Second Interceptor -----------------------------------------------------
;;
;; Part of the TodoMVC challenge is to store todos in local storage.
;; Next, we define an interceptor to help with this challenge.
;; This interceptor runs `after` an event handler, and it stores the
;; current todos into local storage.
;; Later, we include this interceptor into the interceptor chain
;; of all event handlers which modify todos.  In this way, we ensure that
;; every change to todos is written to local storage.
(def todo-browser-cache-interceptor (refx-utils/browser-cache-interceptor store-id))



;; -- Interceptor Chain ------------------------------------------------------
;;
;; Each event handler can have its own chain of interceptors.
;; We now create the interceptor chain shared by all event handlers
;; which manipulate todos.
;; A chain of interceptors is a vector of interceptors.
;; The initial `path` interceptor ensures that the value passed to subsequent interceptors
;; including the event handler will be the value from that path within the db rather than entire
;; db, and the returned value will be interpreted in the same way (i.e. treated as an `assoc-in` operation)
(def todo-task-interceptors
  [(path [:todo-data :tasks])      ;; Extract the data of interest
   check-spec-interceptor          ;; ensure the spec is still valid  (after)
   todo-browser-cache-interceptor]);; write todos to localstore  (after)


;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; EVENTS

;; -- Helpers -----------------------------------------------------------------

(defn allocate-next-id
  "Returns the next todo id.
  Assumes todos are sorted.
  Returns one more than the current largest id."
  [todos]
  ((fnil inc 0) (last (keys todos))))

;; -- Event Handlers -----------------------------------------------------------------

;; usage:  (dispatch [:apply-todo-filter  :pending])
(reg-event-db      ;; part of the re-frame API
 :apply-todo-filter     ;; event-id

  ;; only one interceptor
 ;; [check-spec-interceptor]       ;; after event handler runs, check app-db for correctness. Does it still match Spec?

  ;; handler
 (fn [db [_ new-filter-kw]]     ;; new-filter-kw is one of :all, :active or :done
   (assoc-in db [:todo-data :task-filter] new-filter-kw)))

;; NOTE: below is a rewrite of the event handler (above) using a `path` Interceptor
;; You'll find it illuminating to compare this rewrite with the original.
;;
;; A `path` interceptor has BOTH a before and after action.
;; When you create one, you supply "a path" into `app-db`, like:
;; [:a :b 1]
;; The job of "before" is to replace the app-db with the value
;; of `app-db` at the nominated path. And, then, "after" to
;; take the event handler returned value and place it back into
;; app-db at the nominated path.  So the event handler works
;; with a particular, narrower path within app-db, not all of it.
;;
;; So, `path` operates a little like `update-in`
;;
#_(reg-event-db
   :apply-todo-filter

  ;; this now a chain of 2 interceptors. Note use of `path`
   [check-spec-interceptor
    (path :todo-data :task-filter)]

  ;; The event handler
  ;; Because of the `path` interceptor above, the 1st parameter to
  ;; the handler below won't be the entire 'db', and instead will
  ;; be the value at the path `[:task-filter]` within db.
  ;; Equally the value returned will be the new value for that path
  ;; within app-db.
   (fn [old-task-filter-value [_ new-task-filter-value]]
     new-task-filter-value))                  ;; return new state for the path


;; usage:  (dispatch [:add-todo  "a description string"])
(reg-event-db                     ;; given the text, create a new todo
 :add-todo

  ;; Use the standard interceptors, defined above, which we
  ;; use for all todos-modifying event handlers. Looks after
  ;; writing todos to LocalStore, etc.
 todo-task-interceptors

  ;; The event handler function.
  ;; The "path" interceptor in `todo-task-interceptors` means 1st parameter is the
  ;; value at `:tasks` path within `db`, rather than the full `db`.
  ;; And, further, it means the event handler returns just the value to be
  ;; put into the `[:tasks]` path, and not the entire `db`.
  ;; So, again, a path interceptor acts like clojure's `update-in`
 (fn [todos [_ text]]
   (let [id (allocate-next-id todos)]
     (assoc todos id {:id id :description text :done false}))))


(reg-event-db
 :toggle-todo
 todo-task-interceptors
 (fn [todos [_ id]]
   (update-in todos [id :done] not)))


(reg-event-db
 :save-todo
 todo-task-interceptors
 (fn [todos [_ id title]]
   (assoc-in todos [id :description] title)))


(reg-event-db
 :delete-todo
 todo-task-interceptors
 (fn [todos [_ id]]
   (dissoc todos id)))


;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; SUBSCRIPTIONS

;; -------------------------------------------------------------------------------------
;; Layer 2
;;
;; See https://day8.github.io/re-frame/subscriptions/
;;
;; Layer 2 query functions are "extractors". They take from `app-db`
;; and don't do any further computation on the extracted values. Any further
;; computation should happen in Layer 3.
;; Why?  It is an efficiency thing. Every Layer 2 subscription will rerun any time
;; that `app-db` changes (in any way). As a result, we want Layer 2 to be trivial.
;;

(reg-sub
 :todo-data          ;; usage:   (use-sub [:task-filter])
 (fn [db _]        ;; db is the (map) value stored in the app-db atom
   (:todo-data db))) ;; extract a value from the application state

;; -------------------------------------------------------------------------------------
;; Layer 3
;;
;; See https://day8.github.io/re-frame/subscriptions/
;;
;; A subscription handler is a function which is re-run when its input signals
;; change. Each time it is rerun, it produces a new output (return value).
;;
;; In the simple case, app-db is the only input signal, as was the case in the two
;; simple subscriptions above. But many subscriptions are not directly dependent on
;; app-db, and instead, depend on a value derived from app-db.
;;
;; Such handlers represent "intermediate nodes" in a signal graph.  New values emanate
;; from app-db, and flow out through a signal graph, into and out of these intermediate
;; nodes, before a leaf subscription delivers data into views which render data as hiccup.
;;
;; When writing and registering the handler for an intermediate node, you must nominate
;; one or more input signals (typically one or two).
;;
;; reg-sub allows you to supply:
;;
;;   1. a function which returns the input signals. It can return either a single signal or
;;      a vector of signals, or a map where the values are the signals.
;;
;;   2. a function which does the computation. It takes input values and produces a new
;;      derived value.
;;
;; In the two simple examples at the top, we only supplied the 2nd of these functions.
;; But now we are dealing with intermediate (layer 3) nodes, we'll need to provide both fns.
;;


(reg-sub
 :task-filter          ;; usage:   (use-sub [:task-filter])
 :<- [:todo-data]
 (fn [todo-data _]        ;; db is the (map) value stored in the app-db atom
   (:task-filter todo-data))) ;; extract a value from the application state
