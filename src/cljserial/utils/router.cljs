(ns cljserial.utils.router
  (:require
   [cljs.spec.alpha :as s]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   ;; [reitit.coercion.spec :as rss]
   [uix.core :refer [defui $]]
   [refx.alpha :refer [use-sub dispatch]]))


;; -------------------------------------------------------------------
;; -- Specs --------------------------------------------------

;; TODO: Does reitit define specs for any of this?

(s/def :router/route-path string?)

(s/def :route-props/name keyword?)
(s/def :route-props/title string?)
(s/def :route-props/view any?) ;; I haven't figured out function pointer specs yet...
(s/def :route-props/href string?)
;; The route props required by reitit
(s/def :reitit/route-props (s/keys :req-un [:route-props/name :route-props/title :route-props/view]))
;; The route props augmented with the href for export/use in router-agnostic components
(s/def :router/route-props (s/keys :req-un [:route-props/name :route-props/title :route-props/view :route-props/href]))

(s/def :reitit/route (s/tuple :router/route-path :reitit/route-props))
(s/def :reitit/routes (s/coll-of :reitit/route))

(s/def :router/route (s/tuple :router/route-path :router/route-props))
(s/def :router/routes (s/coll-of :router/route))

;; -------------------------------------------------------------------
;; -- Helper functions -----------------------------------------------
(defn- augment-reitit-route-props
  "Augment reitit minimal route props with a href derived from the title.
  N.B. Calling this BEFORE starting the router will cause an error as depends on existing history."
  [route-props]
  {:pre [(s/valid? :reitit/route-props route-props)]
   :post [s/valid? :router/route-props %]}
  (assoc route-props :href (rfe/href (:name route-props))))

(defn- augment-reitit-routes
  "Augment each reitit route with a href derived from the title."
  [routes]
  {:pre [(s/valid? :reitit/routes routes)]
   :post [s/valid? :router/routes %]}
  (for [[route route-props] routes]
    [route (augment-reitit-route-props route-props)]))

(defn get-default-view [routes]
  (:view (second (first routes))))

(defn get-match-view [routes route-match]
  (let [default-view (get-default-view routes)]
    (if route-match
      (:view (:data route-match))
      default-view)))

(defui inject-routes [{:keys [routes, layout]}]
  (let [route-match (use-sub [:route-match])]
    ($ layout {:routes (augment-reitit-routes routes)
               :view (get-match-view routes route-match)})))

(defn start! [routes]
  {:pre [(s/valid? :reitit/routes routes)]}
  (rfe/start!
   (rf/router routes)
   ;; reitit supports dynamic routes using tokens -- "/:company/users/:user-id" for example
   ;; If using this, we'd want to enable coercion (we're just using simple routes currently)...
   ;; See https://cljdoc.org/d/metosin/reitit/0.7.0-alpha7/doc/coercion/coercion-explained
   ;; (rf/router reitit-routes {:data {:coercion rss/coercion}})
   (fn [m]
     (dispatch [:route-matched m]))
    ;; set to false to enable HistoryAPI
   {:use-fragment true}))


(defn render! [{:keys [routes renderer layout]}]
  (start! routes)
  (renderer ($ inject-routes {:routes routes :layout layout})))
