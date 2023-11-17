(ns cljserial.webserial
  (:require
   [lambdaisland.glogi :as log]
   [statecharts.core :as hsm]
   [refx.alpha :as refx]
   [cljserial.utils.hsm :as hsm-refx]
   [cljserial.webserial.interface :as wsi]))

; See https://lucywang000.github.io/clj-statecharts/



;;Initial context...
;; TODO Write a spec. Probably in cljserial.webserial.interface?
;;   ...also consider including event store in context here rather than separately in the refx db

(def default-context {:port nil
                      :line-terminator "\r"})

(def controller
  (hsm/machine
   {:id :serial
    :initial :disconnected
    :context default-context

    :states

    {;; TOP-LEVEL STATE
     :disconnected
     {:initial :webserial_pending
      :on {:webserial-port-opened :connected}
      :states
      {:webserial_pending
       {:entry (fn [state e]
                 (log/debug :state/entry (str "HSM INIT" state e))
                 (hsm-refx/dispatch (if (wsi/is-supported?)
                                      :webserial-check-passed
                                      :webserial-check-failed)))
        :on {:webserial-check-passed :port-pending
             :webserial-check-failed :no-webserial}}
       :no-webserial {}
       :port-pending
       {:entry (fn [state e]
                  ;; Ideally we'd do this, however webserial port request must be initiated via ui element click
                  ;; (wsi/await-port
                  ;;  :on-success #(refx/dispatch [:ui/event :webserial-has-port %1])
                  ;;  :on-failure #(refx/dispatch [:ui/event :webserial-no-port]))
                 (log/debug :state/entry (str "PORT PENDING" state e)))
        :on {:webserial-has-port {:actions (hsm/assign (fn [s e]
                                                         ;;The ports get passed through as a sequence...
                                                         (assoc s :port (first (:data e)))))
                                  :target :awaiting_connection}}}
       :awaiting_connection
       {:entry (fn [state e]
                 (log/debug :state/entry (str "WAITING TO OPEN PORT" state))
                 (wsi/open-port (:port state)
                                :on-success #(hsm-refx/dispatch :webserial-port-opened)
                                :on-failure #(hsm-refx/dispatch :webserial-port-open-failure)))
        :on {:webserial-port-open-failure {:actions (fn [state e] (log/error :port/open e))}}}}}

     ;; TOP-LEVEL STATE
     :connected
     {:entry (fn [state e]
               (let [port (:port state)
                     port-id (wsi/describe-port port)]
                 (log/info :read/spawn-loop {:port-id port-id})
                 (wsi/go-read-text port #(refx/dispatch [:serial-rx %]))))
      :on {:webserial-tx {:actions (fn [context {:keys [data]}]
                                     (let [{:keys [port line-terminator]} context
                                           ;; The event parameters are wrapped in a vector - get first element
                                           cmd (first data)]
                                       (log/info :write/text cmd)
                                       (wsi/write port (str cmd line-terminator))))}}}

;; END TOP-LEVEL STATES
     }}))
