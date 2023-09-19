(ns stack.examples.re-frame.model
  (:require
   [taoensso.telemere :as t]
   [stack.utils.dbfx :as dbfx]
   [stack.utils.model :as model]
   [stack.statecharts.webserial :as webserial]
   [stack.services.core :as services]
   [stack.examples.models.domain :as domain]))


(services/init-reframe-integration)

;; -- Default app-db Value  ---------------------------------------------------
(def default-db
  {:session nil
   :route-match nil
   ;;
   ;; The services dict is populated via calls to functions in the `stack.services.core` namespace
   :services {}
   ;;
   ;; The datascript domain database is embedded within the re-frame db atom
   ;; ... see `stack.utils.model` namespace
   :domain-db {}
   ;; Container for form / user input element data
   ;; :user-input {:create-todo {:schema domain/Task
   ;;                            ;;TODO: Add function to augment/provide defaults ?
   ;;                            :data {:id nil :description "" :done false}}}
   ;;
   :task-filter :all
   ;; This was intended as the output for a re-frame flow, but can't get it to work...
   ;; :tasks []
   ;; TODO: Maybe create a :views key here as a common parent for computed flows
   ;;       assuming I can get them to work as expected
   })


;; -- Domain data integration ---------------------------------------------------
;; Domain db load effect
(dbfx/reg-fx
 :init-domain-db
 (fn [_]
   ;; This embeds a persistent bitemporal datascript db in the re-frame app db.
   ;; The db appears at :domain-db within  the re-frame app-db and is a dict with the following keys:
   ;; - :data :: the current state of the datascript db
   ;; - :tx-log :: the current state of the backing transaction log
   ;;
   ;; It defines the following re-frame artefacts
   ;; - A :transact effect for side-effecting DB transactions from event handlers
   ;; - A :transact event listener to allow transactions using (rf/dispatch [:transact <datalog query>])
   ;; - Subscriptions for the data (:domain-data), tx-log (:domain-tx-log) and parent db (:domain-db)
   ;;
   (model/embed-bitemporal-db domain/storage-id domain/schema)))

;; Service
;; .... basic service integration via subs and events in stack.services.core namespace

;; -- ui initialisation event handler ------------------------------------------------------
;; Dispatched once on startup from core.cljs
(dbfx/reg-event-fx
 :init-example-app
 (fn [_cofx _e]
   (t/log! :info "Initialising")
   {:db default-db
    :fx [[:init-domain-db]]}))

;;-- WebSerial events
(dbfx/reg-sub
 :serial-events
 :<- [(:id webserial/controller)] ;;This is the service subscription created at registration
 (fn [webserial-state _]
   (:events webserial-state))) ;;

;; -- Domain CRUD events (TodoMVC)
;; All datalog queries and transactions live in domain.cljs
(dbfx/reg-event-fx
 :add-task
 (fn [_cofx [_ text]]
   {:fx [[:transact (domain/add-task text)]]}))

(dbfx/reg-event-fx
 :set-task-completed
 (fn [_cofx [_eid task-id done]]
   {:fx [[:transact (domain/set-task-completed task-id done)]]}))

(dbfx/reg-event-fx
 :save-task
 (fn [_cofx [_eid task-id description]]
   {:fx [[:transact (domain/set-task-description task-id description)]]}))

(dbfx/reg-event-fx
 :delete-task
 (fn [_cofx [_eid task-id]]
   {:fx [[:transact (domain/delete-task task-id)]]}))

;; -- View events (TodoMVC)

(dbfx/reg-event-db
 :apply-task-filter
 [(dbfx/path [:task-filter])]
 (fn [_db [_ new-filter-kw]]     ;; new-filter-kw is one of :all, :active or :done
   new-filter-kw))

;; -- Domain data subs / derived views ---------------------------------------------------
;; ... malli schema

(dbfx/reg-sub
 :tasks
 :<- [:domain-data]
 (fn [ddb _]
   (domain/extract-tasks ddb)))

(dbfx/reg-sub
 :task-filter
 (fn [db _]
   (:task-filter db)))

;;TODO: Rework this lot as a re-frame flow? That way it'll appear as data in the db...
;;      I.e. Easily inspectable
;;      See https://day8.github.io/re-frame/Flows/
(dbfx/reg-sub
 :task-counts
 :<- [:tasks]
 (fn [tasks _]
   (domain/get-task-counts tasks)))

(dbfx/reg-sub
 :visible-tasks
 :<- [:tasks]
 :<- [:task-filter]
 (fn [[tasks task-filter] _]
   (domain/filter-by task-filter tasks)))

(dbfx/reg-sub
 :task-view
 :<- [:task-filter]
 :<- [:visible-tasks]
 :<- [:task-counts]
 (fn [[task-filter tasks task-counts] _]
   {:tasks tasks
    :task-filter task-filter
    :task-counts task-counts}))


;; This attempt to rework the :tasks sub as a a flow isn't working for me for some reason
;; Revisit https://day8.github.io/re-frame/Flows/
;; (dbfx/reg-flow
;;  {:id     :task-list
;;   :inputs {:ddb [:domain-db]}
;;   :output (fn [_ {:keys [ddb] :as inputs}]
;;             (t/log! {:level :info :data ddb})
;;             (d/q '[:find ?id ?desc ?done
;;                    :keys id description done
;;                    :where
;;                    [?id :task/description ?desc]
;;                    [?id :task/done ?done]]
;;                  ddb))
;;   :path   [:tasks]})

;; (dbfx/reg-sub
;;  :tasks
;;  (fn [db _]
;;    (:tasks db)))
