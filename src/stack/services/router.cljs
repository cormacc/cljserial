(ns stack.services.router
  (:require [uix.core :refer [defui $]]
            [malli.core :as m]
            [malli.util :as mu]
            [reitit.frontend.easy :as rfe-easy]
            [stack.utils.router :as router]
            [stack.utils.dbfx :as dbfx]
            [stack.utils.uix :as uix-utils]))

;; -------------------------------------------------------------------
;; -- Specs ----------------------------------------------------------

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
   [:map
    [:href :string]
    [:active :boolean]]))

(def Route [:tuple RoutePath RouteProps])
(def PureRoute [:tuple RoutePath PureRouteProps])

;; -------------------------------------------------------------------
;; -- Events and subs ------------------------------------------------

(dbfx/reg-event-db
 :route-matched
 ;;Interceptors
 [(dbfx/path [:route-match])]
 (fn [_current-match [_ new-match]]
   new-match)) ;;Overwrite old with new

(dbfx/reg-sub
 :route-match
 (fn [db _]
   (:route-match db)))


;; -------------------------------------------------------------------
;; -- Helper functions -----------------------------------------------
(defn- augment-reitit-route-props
  "Augment reitit minimal route props with a href derived from the title.
  N.B. Calling this BEFORE starting the router will cause an error as depends on existing history."
  [route-props match-name]
  {:pre [(m/validate RouteProps route-props)]
   :post [m/validate PureRouteProps %]}
  (let [name (:name route-props)
        active (= name match-name)]
    (assoc route-props :href (rfe-easy/href name) :active active)))

(defn- augment-routes
  "Augment each reitit route with a href derived from the title."
  [routes match-name]
  {:pre [(m/validate [:sequential Route] routes)]
   :post [m/validate [:sequential PureRoute] %]}
  (for [[route route-props] routes]
    [route (augment-reitit-route-props route-props match-name)]))

(defn- extract-valid-route [routes route-match]
  (let [default-route (second (first routes))]
    (if route-match
      (:data route-match)
      default-route)))

(defui inject-routes [{:keys [routes layout wrapper]}]
  (let [route-match (dbfx/use-sub [:route-match])
        route (extract-valid-route routes route-match)
        route-name (:name route)
        layout (uix.core/fn [_props]
                 ($ layout {:routes (augment-routes routes route-name)
                            :view (:view route)}))]
    (if wrapper
      ($ wrapper {:layout layout})
      ($ layout))))


(defn start! [routes]
  {:pre [(m/validate [:sequential Route] routes)]}
  (router/start! routes #(dbfx/dispatch [:route-matched %])))

(defn render! [{:keys [routes layout wrapper] :or {wrapper nil} :as props}]
  (start! routes)
  (uix-utils/render ($ inject-routes props)))
