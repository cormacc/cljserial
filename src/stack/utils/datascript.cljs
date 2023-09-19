(ns stack.utils.datascript
  (:require
   [cljs.reader]
   [taoensso.telemere :as t]
   [promesa.core :as p]
   [datascript.core :as d]
   [datascript.db :as ddb]
   [stack.apis.local-storage :as local-storage]
   [stack.apis.indexed-db :as indexed-db]))

;; See https://cljdoc.org/d/datascript/datascript/1.7.3/api/datascript.core

;; Malli schema for the transaction log
;; (Though we're not actually using it anywhere as yet)
(def Datom
  [:map
   [:e :int]
   [:a :keyword]
   [:v :any]
   [:added :bool]])

(def Transaction
  [:map
   [:id :int]
   [:tx-time :int]
   [:valid-time :int]
   [:datoms [:vector Datom]]])

(def TransactionLog
  [:vector Transaction])


(defonce tx-log-schema-version 1)
(defonce tx-log-store-id "tx-log")
(defonce tx-log-conn (atom nil))

(defn empty-db [id schema]
  {:id id
   :data (d/empty-db schema)
   :tx-log nil})


;; CURRENT VALUE PERSISTENCE TO LOCAL STORAGE
;; This persists and reloads the current value of the datascript DB
(defn- load-db-value [id schema]
  (or (local-storage/deserialise id)
      (d/empty-db schema)))

(defn- save-db-value [id data]
  (js/setTimeout #(local-storage/serialise id data)))

(defn- reload-simple-db! [db-atom]
  (let [{:keys [id data]} @db-atom
        schema (:schema data)]
    (reset! db-atom (assoc-in @db-atom [:data] (load-db-value id schema)))))

(defn create-simple-db
  "Create a DB with value persistence (i.e. no transaction log / temporal functionality)"
  [id schema]
  (let [db-atom (atom (empty-db id schema))]
    (reload-simple-db! db-atom)
    (add-watch db-atom :local-storage
               (fn [_key _atom _old_state {:keys [data] :as _new_state}]
                 (save-db-value id data)))
    db-atom))


;; TRANSACTION LOG PERSISTENCE
;; This gives us an temporal database in the browser

(defn replay [schema transactions]
  (let [data (d/empty-db schema)
        datoms (map :datoms transactions)]
    (reduce d/db-with (cons data datoms))))

(defn rebuild [{:keys [data] :as db} transactions]
  (let [schema (:schema data)]
    (-> db
        (assoc :data (replay schema transactions))
        (assoc :tx-log transactions)
        (assoc :tx-times (mapv :tx-time transactions))
        (assoc :valid-times (mapv :valid-time transactions)))))

(defn rebuild! [db-atom transactions]
  (swap! db-atom rebuild transactions))

(defn- augment-transaction [tx-data]
  (let [tx-id (ddb/datom-tx (first tx-data))
        timestamp (.now js/Date)]
    {:id tx-id
     :tx-time timestamp
     :valid-time timestamp
     :datoms tx-data}))

(defn as-of [db & {:keys [tx-time valid-time]
                   :or {tx-time (.now js/Date)
                        valid-time (.now js/Date)}}]
  (let [transactions (filter #(and
                               (<= (:tx-time %) tx-time)
                               (<= (:valid-time %) valid-time))
                             (:tx-log db))]
    (replay (:schema db) transactions)))

;; .... TO indexedDB
(defn as-serialisable-datom [da]
  {:e (:e da) :a (pr-str (:a da)) :v (pr-str (:v da)) :tx (:tx da) :added (:added da)})

(defn as-serialisable-transaction [tx]
  (update-in tx [:datoms] #(into [] (map as-serialisable-datom %))))

(defn from-serialisable-datom [da]
  (d/datom (:e da) (cljs.reader/read-string (:a da)) (cljs.reader/read-string (:v da)) (:tx da) (:added da)))

(defn from-serialisable-transaction [tx]
  (update-in tx [:datoms] #(into [] (map from-serialisable-datom %))))

(defn add-tx+ [tx]
  (indexed-db/add+ @tx-log-conn tx-log-store-id (as-serialisable-transaction tx)))

(defn read-transactions+ [idb-conn]
  (t/event! ::read-transactions {:data {:conn idb-conn :id (.-name idb-conn)}})
  (-> (indexed-db/get-all+ idb-conn tx-log-store-id :as :vector)
      (p/then #(into [] (map from-serialisable-transaction %)))))

(defn- tx-log-schema-upgrade-handler [idb]
  ;; TODO: Add a schema version check here?
  ;; TODO: Create additional indices for the transaction? E.g. on local and remote IDs?
  (.createObjectStore idb tx-log-store-id (clj->js {:keyPath "id"})))


(defn open-tx-log+ [id]
  (-> (indexed-db/open+ id
                        :schema-version tx-log-schema-version
                        :on-upgrade tx-log-schema-upgrade-handler)
      (p/then #(reset! tx-log-conn %))
      (p/then read-transactions+)))

(defn load-bitemporal-db+ [id schema]
  (let [db (empty-db id schema)]
    (-> (open-tx-log+ id)
        (p/then #(rebuild db %)))))

;; SHARED API
;; Functions applicable to simple and temporal dbs

(defn bitemporal? [db]
  (not (nil? (:tx-log db))))

(defn transact [{:keys [data] :as domain-db} transaction]
  (let [{:keys [db-after tx-data]} (d/with data transaction)
        new-transaction (augment-transaction tx-data)]
    (-> domain-db
        (assoc-in [:data] db-after)
        ;;TODO: Update this to allow operation without a transaction log -- state persistence only....?
        ;;      Or maybe keep that simple with a listen/watch
        (update-in [:tx-log] conj new-transaction)
        (update-in [:tx-times] conj (:tx-time new-transaction))
        (update-in [:valid-times] conj (:valid-time new-transaction)))))

(defn transact!
  "Apply a datascript transaction and persist it to the transaction log.
  Returns the new db state after applying the transaction."
  [db transaction]
  (let [new-db (transact db transaction)
        tx-data (last (:tx-log new-db))]
    (add-tx+ tx-data)
    new-db))

;; (defn reload-db! [db-atom]
;;   (if (bitemporal? @db-atom)
;;     (reload-bitemporal-db! db-atom)
;;     (reload-simple-db! db-atom)))

;; (defn reset-db! [db-atom]
;;   (let [{:keys [id data]} @db-atom
;;         schema (:schema data)]
;;     (reset! db-atom (empty-db id schema)))
;;   (when (bitemporal? @db-atom)
;;     (swap! db-atom assoc-in [:tx-log] [])))

(defn q [db query]
  (d/q query (:data db)))
