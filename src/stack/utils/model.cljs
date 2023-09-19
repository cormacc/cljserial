(ns stack.utils.model
  (:require
   [taoensso.telemere :as t]
   [re-frame.db]
   [promesa.core :as p]
   [stack.utils.datascript :as du]
   [stack.utils.dbfx :as dbfx]))

;;
;; EMBED THE DB AND TRANSACTION LOG IN A REFRAME DB

(defn reg-reframe-transactions [schema]
  (t/log! :debug "Registering re-frame transactions...")
  ;; Transaction log initialisation event handler -- triggered after load
  (dbfx/reg-event-db
   :tx-log-loaded
   [(dbfx/path :domain-db)]
   (fn [domain-db [_eid transactions]]
     (du/rebuild domain-db transactions)))
  ;; Transaction effect -- syntactic sugar to abbreviate fx: [[:dispatch [:transact ....]]]
  (dbfx/reg-fx
   :transact
   (fn [transaction]
     (dbfx/dispatch [:transact transaction])))
  ;; Transaction event handler -- interface between frontend and domain db
  (dbfx/reg-event-fx
   :transact
   [(dbfx/path :domain-db)]
   (fn [{:keys [db]} [_eid transaction]]
     (t/event! ::handling-transaction {:level :debug :data {:db db :trans transaction}})
     (let [new-db (du/transact db transaction)
           new-transaction (last (:tx-log new-db))]
       {:db new-db
        :fx [[:persist-transaction new-transaction]]})))
  ;; Transaction persistence effect -- persists each transaction to indexeddb
  (dbfx/reg-fx
   :persist-transaction
   (fn [transaction]
     (du/add-tx+ transaction))))

(defn reg-reframe-subs []
  (dbfx/reg-sub
   :domain-db
   (fn [db _]
     (:domain-db db)))

  (dbfx/reg-sub
   :domain-data
   :<- [:domain-db]
   (fn [ddb _]
     (:data ddb)))

  (dbfx/reg-sub
   :domain-tx-log
   :<- [:domain-db]
   (fn [ddb _]
     (:tx-log ddb))))

(defn embed-bitemporal-db
  [id schema]
  (t/log! {:level :info :data id} "Embedding bi-temporal DB ...")
  (let [db (du/empty-db id schema)]
    (reg-reframe-transactions schema)
    (reg-reframe-subs)
    (p/->
     (du/open-tx-log+ id)
     (p/then #(dbfx/dispatch [:tx-log-loaded %])))
    db))

;; Convenience functions for inspection at the repl
(defn get-embedded-db
  "Retrieve the current state of the embedded db."
  []
  (:domain-db @re-frame.db/app-db))

(defn get-data [] (:data (get-embedded-db)))
(defn get-tx-log [] (:tx-log (get-embedded-db)))
(defn transact! [transaction]
  (dbfx/dispatch [:transact transaction]))
