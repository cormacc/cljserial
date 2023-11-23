(ns cljserial.utils.router
  (:require
   [malli.core :as m]
   [malli.util :as mu]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   ;; [reitit.coercion.spec :as rss]
   [uix.core :refer [defui $]]
   [refx.alpha :refer [use-sub dispatch]]
   [cljserial.utils.uix :as uix-utils]))

;; -------------------------------------------------------------------
;; -- Specs --------------------------------------------------

;; TODO: Does reitit define specs for any of this?
(def RoutePath :string)

;; The route props required by reitit
(def RouteProps
  [:map
   [:name :keyword]
   [:title :string]
   ;;TODO: Return type of view function is a React element - replace :any below with something more accurate...
   [:view [:=> :cat :any]]])

;; ;; The route props augmented with the href for export/use in router-agnostic components
(def PureRouteProps
  (mu/merge
   RouteProps
   [:map [:href :string]]))

(def Route [:tuple RoutePath RouteProps])
(def PureRoute [:tuple RoutePath PureRouteProps])

;; -------------------------------------------------------------------
;; -- Helper functions -----------------------------------------------
(defn- augment-reitit-route-props
  "Augment reitit minimal route props with a href derived from the title.
  N.B. Calling this BEFORE starting the router will cause an error as depends on existing history."
  [route-props]
  {:pre [(m/validate RouteProps route-props)]
   :post [m/validate PureRouteProps %]}
  (assoc route-props :href (rfe/href (:name route-props))))

(defn- augment-reitit-routes
  "Augment each reitit route with a href derived from the title."
  [routes]
  {:pre [(m/validate [:sequential Route] routes)]
   :post [m/validate [:sequential PureRoute] %]}
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
  {:pre [(m/validate [:sequential Route] routes)]}
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


(defn render! [{:keys [routes layout]}]
  (start! routes)
  (uix-utils/render ($ inject-routes {:routes routes :layout layout})))
