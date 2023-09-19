(ns stack.utils.dbfx
  "Facade to allow switching between refx and re-frame for app state management.
  Probably don't want to do this long term, but keeping options open for now.
  Re-frame is more actively maintained and has some nice dev tooling (re-frame 10x etc).
  refx is an adaptation to use more recent react conventions.
  Might want to do comparative performance evaluation at some point (though likely a non-issue for our level of complexity). "
  (:require [refx.alpha :as refx]
            [refx.interceptor]
            [refx.interceptors]
            [re-frame.core :as rf]
            [re-frame.alpha :as ra]
            [uix.re-frame :as urf]
            [stack.utils.schema :as schema-utils]))

(defonce impl :re-frame)


(if (= impl :refx)
  (do ;; refx aliases
    (def reg-sub refx/reg-sub)
    (def use-sub refx/use-sub)
    (def dispatch refx/dispatch)
    (def dispatch-sync refx/dispatch-sync)
    (def reg-fx refx/reg-fx)
    (def reg-cofx refx/reg-cofx)
    (def reg-event-fx refx/reg-event-fx)
    (def reg-event-db refx/reg-event-db)
    (def inject-cofx refx/inject-cofx)

    (def path refx.interceptors/path)
    (def after refx.interceptors/after)
    (def unwrap refx.interceptors/unwrap)

    ;; The global interceptor -- instrument all published events
    (def ->interceptor refx.interceptor/->interceptor)
    ;;FIXME: Do these exist for refx?
    (def reg-global-interceptor nil)
    (def reg-flow nil))

  (do ;; re-frame aliases
    (def reg-sub rf/reg-sub)
    ;; (def use-sub rf-utils/use-subscribe)
    (def use-sub urf/use-subscribe)
    (def dispatch rf/dispatch)
    (def dispatch-sync rf/dispatch-sync)
    (def reg-fx rf/reg-fx)
    (def reg-cofx rf/reg-cofx)
    (def reg-event-fx rf/reg-event-fx)
    (def reg-event-db rf/reg-event-db)
    (def inject-cofx rf/inject-cofx)

    (def path rf/path)
    (def after rf/after)
    (def unwrap rf/unwrap)

    ;; The global interceptor -- instrument all published events
    (def ->interceptor rf/->interceptor)
    (def reg-global-interceptor re-frame.core/reg-global-interceptor)
    (def reg-flow ra/reg-flow)))

;; -- cofx Registrations  -----------------------------------------------------

;; now / timestamp coeffects
;; this allows timestamp to be injected (or stubbed for testing), keeping event handler functions pure
;; Should this be optional? I.e. wrapped in a (defn reg-timestamp-cofx ...) and
;; called from the view model init?
(reg-cofx
 :timestamp
 (fn [cofx _]
   (assoc cofx :timestamp (.now js/Date))))

(defn schema-check-interceptor
  "Defines a refx interceptor that validates updated db content against a given (malli) `schema`"
  [schema]
  (after (partial schema-utils/check-and-throw schema)))
