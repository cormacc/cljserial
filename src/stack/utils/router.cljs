(ns stack.utils.router
  (:require
   [taoensso.telemere :as t]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]))



(defn start! [routes dispatch-callback]
  (rfe/start!
   (rf/router routes)
   ;; reitit supports dynamic routes using tokens -- "/:company/users/:user-id" for example
   ;; If using this, we'd want to enable coercion (we're just using simple routes currently)...
   ;; See https://cljdoc.org/d/metosin/reitit/0.7.0-alpha7/doc/coercion/coercion-explained
   ;; (rf/router reitit-routes {:data {:coercion rss/coercion}})
   (fn [match]
     (t/event! ::route-match {:data match})
     (dispatch-callback match))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))

(defn =>link [[path {:keys [id title description] :as _attrs}]]
  {:id id
   :path path
   :href (str "#" path)
   :title title
   :description description})

(defn =>links [routes]
  (into [] (map =>link routes)))

(defn get-default [routes]
  (let [[path data] (first routes)]
    {:path path
     :data data}))
