(ns stack.services.filestore
  ""
  (:require
   [taoensso.telemere :as t]
   [promesa.core :as p]
   [stack.utils.filestore :as fu]
   [stack.utils.dbfx :as dbfx]
   [stack.services.core :as services]))

(def service-id :filestore)

(def index-path-interceptor (services/path-interceptor [service-id :entries]))

;;Assumptions (for now):
;;- text content
;;- no overwrite
(defn register-write-effect []
  (dbfx/reg-fx
   :file-write
   (fn [{:keys [path data]}]
     (-> (fu/write+ path data)
         (p/then #(dbfx/dispatch [:file-write-ok %])))))
  (dbfx/reg-event-fx
   :file-write
   [dbfx/unwrap]
   (fn [_cofx {:keys [path data]}]
     ;;TODO: Should we also update the :data key in app-db here (optimistically),
     ;;      or in the file-write-ok handler
     {:fx [[:file-write {:path path :data data}]]}))
  (dbfx/reg-event-db
   :file-write-ok
   [index-path-interceptor]
   (fn [db [_e file-info]]
     (assoc-in db [(:path file-info)] file-info))))

(defn register-read-effect []
  (dbfx/reg-fx
   :file-read
   (fn [{:keys [path]}]
     (-> (fu/read+ path)
         (p/then #(dbfx/dispatch [:file-read-ok %])))))
  (dbfx/reg-event-fx
   :file-read
   [dbfx/unwrap]
   (fn [_cofx {:keys [path]}]
     {:fx [[:file-read {:path path}]]}))
  (dbfx/reg-event-db
   :file-read-ok
   [index-path-interceptor]
   (fn [db [_e file-info]]
     (assoc-in db [(:path file-info)] file-info))))

(defn register-delete-effect []
  (dbfx/reg-fx
   :file-delete
   (fn [{:keys [path]}]
     (-> (fu/delete+ path)
         (p/then #(dbfx/dispatch [:file-delete-ok %])))))
  (dbfx/reg-event-fx
   :file-delete
   [dbfx/unwrap]
   (fn [_cofx {:keys [path]}]
     {:fx [[:file-delete {:path path}]]}))
  (dbfx/reg-event-db
   :file-delete-ok
   [index-path-interceptor]
   (fn [db [_e file-info]]
     (dissoc db (:path file-info)))))

;;TODO: Should probably register some logic to update usage statistics after a write or delete...

(defn init []
  (services/register service-id)
  (register-write-effect)
  (register-read-effect)
  (register-delete-effect)
  (-> (fu/init+)
      (p/then #(dbfx/dispatch [:init-service {:id service-id :data %}]))))

(comment
  ;;TODO: Add link to chromium OPFS browser plugin....
  (dbfx/dispatch [:file-write {:path "/test2.txt" :data "blehblehbleh"}])
  (dbfx/dispatch [:file-delete {:path "/test2.txt"}])
  (dbfx/dispatch [:file-write {:path "/devices/test2.txt" :data "blehblehblih"}])
  (dbfx/dispatch [:file-read {:path "/test.txt"}])
  (dbfx/dispatch [:file-read {:path "/devices/test2.txt"}])
  ;;---
  )
