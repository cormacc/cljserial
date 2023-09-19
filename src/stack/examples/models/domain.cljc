(ns stack.examples.models.domain
  (:require
   [datascript.core :as d]))

;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; SCHEMA

(def storage-id "cljstack")

;; .... malli

(def TaskId :int)

(def Task
  [:map
   [:id TaskId]
   [:description [:string {:min 1}]]
   [:done :boolean]])

(def TaskFilter [:enum :all :pending :done])

;;TODO: There's probably a more malli way to do this....
(def task-filters (rest TaskFilter))

(def TaskView
  [:map
   [:tasks [:sequential Task]]
   [:filter TaskFilter]
   [:counts [:map
             [:all :int]
             [:active :int]
             [:done :int]]]])

;; ... Datascript
;; Datascript schema only has to specify items that are unique or collections
;; See https://cjohansen.no/a-unified-specification/ for a handy intro, and model for a unified ds/malli spec
;; See https://github.com/kristianmandrup/datascript-tutorial/blob/master/create_schema.md

(def schema
  {:task/id {:db/unique :db.unique/identity}})

;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; Utilities
(defn get-task-counts [tasks]
  {:total (count tasks)
   :done (count (filter :done tasks))})

(defn filter-by [task-filter tasks]
  (let [filter-fn (case task-filter
                    :pending (complement :done)
                    :done :done
                    :all identity)]
    (filter filter-fn tasks)))

;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; Queries
(defn extract-tasks [db]
  (d/q '[:find ?id ?desc ?done
         :keys id description done
         :where
         [?id :task/description ?desc]
         [?id :task/done ?done]]
       db))

;; -------------------------------------------------------------------------------------
;; -------------------------------------------------------------------------------------
;; Transactions
(defn add-task [description]
  [{:task/description description :task/done false}])

(defn set-task-completed [task-id done]
  [{:db/id task-id :task/done done}])

(defn set-task-description [task-id description]
  [{:db/id task-id :task/description description}])

(defn delete-task [task-id]
  [[:db.fn/retractEntity task-id]])
