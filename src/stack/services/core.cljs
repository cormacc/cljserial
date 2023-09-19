(ns stack.services.core
  (:require
   [taoensso.telemere :as t]
   [stack.utils.dbfx :as dbfx]))

(def root-path-interceptor (dbfx/path :services))

(defn path-interceptor [service-path] (dbfx/path [:services] service-path))


(defn init-reframe-integration []
;; Parent (layer 2) sub for services
  (dbfx/reg-sub
   :services
   (fn [db _query-v]
     (:services db)))

;; TODO: Could register the root service state subscription here using a new registered effect?
;;       Though maybe tidier to keep it in the service itself...
  (dbfx/reg-event-db
   :init-service
   [root-path-interceptor dbfx/unwrap]
   (fn [db {:keys [id data]}]
     (t/event! :service-init-ok {:data {:id id :data data}})
     (assoc-in db [id] data))))

;;-- .... layer 2.5 subscriptions
;;   .... these used to be layer 2 before adding the intermediate :services key in app-db
;;   .... they still don't transform data, leaving them outside the standard definition of level 3...
(defn register
  "Define a subscription for the state of a given service"
  [service-id]
  (t/event! ::service-register-ok {:data {:id service-id}})
  (dbfx/reg-sub
   service-id
   :<- [:services]
   (fn [service-data _]
     (get service-data service-id))))
