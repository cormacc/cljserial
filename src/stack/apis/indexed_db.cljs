(ns stack.apis.indexed-db
  (:require
   [promesa.core :as p]
   [taoensso.telemere :as t]
   [stack.utils.events :as events]))

;; See https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
;; This wraps indexed-db in a promise-based API - may be helpful? https://github.com/jakearchibald/idb

(defn open+ [id & {:keys [schema-version on-upgrade] :or {schema-version 1}}]
  (t/event! ::open-connection {:data {:id id :schema-version schema-version}})
  (let [result (p/deferred)]
    (-> js/window
        (.-indexedDB)
        (.open id (clj->js schema-version))
        (events/add-listener "error"
                             (fn [error]
                               (t/event! ::idb-open-error {:data {:id id :error error}})
                               (p/reject! result error)))
        (events/add-listener "blocked"
                             (fn [idb-version-change-event]
                               (t/event! ::idb-open-blocked {:data {:id id :event idb-version-change-event}})
                               (p/reject! result idb-version-change-event)))
        (events/add-listener "upgradeneeded"
                             (fn [evt]
                               (t/event! ::idb-create-or-upgrade {:level :warn :data {:id id :schema-version schema-version}})
                               (on-upgrade (events/extract-result evt))))
        (events/add-listener "success"
                             (fn [evt]
                               (t/event! ::idb-open-ok {:data {:id id :schema-version schema-version}})
                               ;;Resolve to the idb connection
                               (p/resolve! result (events/extract-result evt)))))
    result))

(comment
  (def conn (atom nil))
  (-> (open+ "cljstack" :on-upgrade #(t/log! {:data %} "Wahey"))
      (p/then #(reset! conn %)))

  ,)

(defn- records=>sorted-map [records key-path]
  (into (sorted-map) (for [r records] [(key-path r) r])))

(defn get-all+
  "Get all records as either a sorted map (default) or vector."
  [idb-conn store-id & {:keys [as] :or {as :map}}]
  (let [conn-id (.-name idb-conn)
        result (p/deferred)]
    (p/let [object-store (-> (.transaction idb-conn [store-id] "readonly")
                             (.objectStore store-id))
            key-path (keyword (.-keyPath object-store))]
      (-> object-store
          (.getAll)
          (events/add-listener
           "success"
           (fn [e]
             (t/event! ::idb-get-all-ok {:data {:id conn-id :store store-id}})
             (let [records (-> (events/extract-result e)
                               (js->clj :keywordize-keys true))]
               (p/resolve! result (if (= as :map)
                                    (records=>sorted-map records key-path)
                                    records)))))))
    result))

;; (defn load-store+ [idb-conn store-id]
;;   (p/->
;;    ;;TODO: Open and get-all is a common use-case... add sugar in indexed-db namespace?
;;    (indexed-db/open+ index-connection index-store-id
;;                      :schema-version index-schema-version
;;                      :on-upgrade index-schema-upgrade-handler)
;;    (p/then #(indexed-db/get-all+ % index-store-id))
;;     ;;     ...
;;    (p/then #(into (sorted-map) (for [e %] [(:path e) e])))))

(defn- define-error-callback [label context result+]
  (fn [error]
    (t/event! label {:level :error
                     :data (assoc-in context [:error] error)})
    (p/reject! result+ error)))

(defn- define-success-callback [label context result+]
  (fn [result]
    (t/event! label {:level :info :data context})
    (p/resolve! result+ result)))

;; This errors if an entry already exists under the given key...
(defn add+ [idb-conn store-id data]
  (let [conn-id (.-name idb-conn)
        log-context {:id conn-id :store-id store-id}
        result (p/deferred)]
    (t/event! ::add {:level :debug :data {:id conn-id :store store-id :data data}})
    (-> (.transaction idb-conn [store-id] "readwrite")
        (.objectStore store-id)
        (.add (clj->js data))
        (events/add-listener "error" (fn [error]
                                       (t/event! ::idb-add-error {:data {:id conn-id
                                                                         :store store-id
                                                                         :error error}})
                                       (p/reject! result error)))
        (events/add-listener "success" (fn [_result]
                                         (t/event! ::idb-add-ok {:level :debug :data {:id conn-id
                                                                                      :store store-id}})
                                         (p/resolve! result data))))
    result))

;; This does a create-or-update
(defn put+ [idb-conn store-id data]
  (let [conn-id (.-name idb-conn)
        log-context {:id conn-id :store-id store-id}
        result (p/deferred)]
    (t/event! ::add {:level :debug :data {:id conn-id :store store-id :data data}})
    (-> (.transaction idb-conn [store-id] "readwrite")
        (.objectStore store-id)
        (.put (clj->js data))
        (events/add-listener "error" (fn [error]
                                       (t/event! ::idb-add-error {:data {:id conn-id
                                                                         :store store-id
                                                                         :error error}})
                                       (p/reject! result error)))
        (events/add-listener "success" (fn [_result]
                                         (t/event! ::idb-add-ok {:level :debug :data {:id conn-id
                                                                                      :store store-id}})
                                         (p/resolve! result data))))
    result))


(defn delete+ [idb-conn store-id key]
  (let [conn-id (.-name idb-conn)
        log-context {:id conn-id :store-id store-id}
        result (p/deferred)]
    (t/event! ::idb-delete {:level :debug :data log-context})
    (-> (.transaction idb-conn [store-id] "readwrite")
        (.objectStore store-id)
        (.delete key)
        (events/add-listener "error" (define-error-callback ::idb-delete-error log-context result))
        (events/add-listener "success" (define-success-callback ::idb-delete-ok log-context result)))))
