(ns stack.examples.replicant.model
  (:require [promesa.core :as p]
            [stack.utils.datascript :as du]
            [stack.utils.i18n :as i18n]
            [stack.utils.themes :as themes]
            [stack.examples.models.domain :as domain]
            [stack.utils.filestore :as fu]
            [stack.statecharts.webserial :as webserial]))

(defonce !state (atom {}))

(defn init! [initial-route]
  ;; Apply initial state
  (reset! !state {:app-started-at (js/Date.)
                  :route initial-route
                  ;;TODO: Move language and theme under user-input? Maybe...
                  :language i18n/default-language-code
                  :theme themes/default
                  :domain-db (du/empty-db domain/storage-id domain/schema)
                  :filestore fu/empty-filestore
                  :webserial (webserial/init)
                  :user-input {:task-filter :all
                               :new-task ""
                               :create-file-path "/"
                               :create-file-content ""
                               :selected-file-path ""
                               :webserial-cmd ""
                               :tx-time 0
                               :valid-time 0}})

  ;;Reload the domain data from the indexedDB transaction log
  (->
   (du/load-bitemporal-db+ domain/storage-id domain/schema)
   (p/then (fn [domain-db]
             (swap! !state assoc :domain-db domain-db)
             ;; Initialise the historic domain data view to current domain db state....
             (swap! !state assoc-in [:user-input :tx-time] (last (:tx-times domain-db)))
             (swap! !state assoc-in [:user-input :valid-time] (last (:valid-times domain-db)))))))

(defn watch! [render-fn]
  (add-watch !state :on-change (fn [_ _ old-state new-state]
                                 (when (not= old-state new-state)
                                   (render-fn new-state))))
  ;;Do the initial render
  (render-fn @!state))
