(ns cljserial.data.router-events
  (:require [refx.alpha :refer [reg-event-db reg-sub]]
            [refx.interceptors :refer [path]]))

(reg-event-db
 :route-matched
 ;;Interceptors
 [(path [:route-match])]
 (fn [_current-match [_ new-match]]
   new-match)) ;;Overwrite old with new

(reg-sub
 :route-match
 (fn [db _]
   (:route-match db)))
