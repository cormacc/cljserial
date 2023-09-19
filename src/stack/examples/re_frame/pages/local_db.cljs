(ns stack.examples.re-frame.pages.local-db
  (:require
   [uix.core :as uix :refer [defui $]]
   [stack.utils.dbfx :as dbfx]
   [stack.examples.models.domain]
   [stack.uix.cards :as cards]
   [stack.uix.tables :as tables]))

;; This version is for when I implement a proper derived view for the transaction/datoms
;; (defui datom-table [{:keys [datoms] :as _props}]
;;   ($ tables/table
;;      ($ :thead ($ :tr ($ :th "e") ($ :th "a") ($ :th "v") ($ :th "added")))
;;      ($ :tbody
;;         (for [[idx [{:keys [e a v added]}]] (map-indexed #(vector %1 %2) datoms)]
;;           ($ :tr {:key idx} ($ :td (str e)) ($ :td (str a)) ($ :td (str v)) ($ :td (str added)))))))

(defui datom-table [{:keys [datoms] :as _props}]
  ($ tables/table
     ($ :thead ($ :tr ($ :th "e") ($ :th "a") ($ :th "v") ($ :th "added")))
     ($ :tbody
        (for [[idx datom] (map-indexed #(vector %1 %2) datoms)]
          ($ :tr {:key idx} ($ :td (str (:e datom))) ($ :td (str (:a datom))) ($ :td (str (:v datom))) ($ :td (str (:added datom))))))))

(defui datom-row [{:keys [key datom] :as _props}]
  ($ :tr {:key key} ($ :td {:col-span 3}) ($ :td (str (:e datom))) ($ :td (str (:a datom))) ($ :td (str (:v datom))) ($ :td (str (:added datom)))))

(defn inst->ISOString [inst]
  (.toISOString (js/Date. inst)))

(defui layout [_props]
  ($ cards/card {:title "Local transaction log (IndexedDB)"}
     (let [tasks (dbfx/use-sub [:domain-tx-log])]
       ($ tables/table
          ($ :thead ($ :tr
                       ;; tx props
                       ($ :th "id") ($ :th "tx-time") ($ :th "valid-time")
                       ;; datom props
                       ($ :th "e") ($ :th "a") ($ :th "v") ($ :th "added")))
             ;; ($ :tr ($ :td (str tasks)))
          (for [{:keys [id tx-time valid-time datoms]} tasks]

            ($ :tbody {:key id}
               ($ :tr
                  ($ :td (str id))
                  ;;TODO: This data transformation should be happening in view.cljs
                  ($ :td (inst->ISOString tx-time)) ($ :td (inst->ISOString valid-time))
                  ;; Blank the datom columns in this row
                  ($ :td {:col-span 4}))
               (for [[idx datom] (map-indexed #(vector %1 %2) datoms)]
                 ($ datom-row {:key (str id "-" idx) :datom datom}))))))))
