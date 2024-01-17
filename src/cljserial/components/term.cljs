(ns cljserial.components.term
  (:require
   [malli.core :as m]
   [clojure.string :as str]
   [uix.core :as uix :refer [defui $]]
   [cljserial.services.webserial :as wss]))


(defui cmd-input [{:keys [on-add-event]}]
  (let [[value set-value!] (uix/use-state "")]
    ($ :pre {:data-prefix ">"}
       ($ :code
          ($ :input
             ;;N.B. setting class as string here because of the / in 'w-11/12'
             {:class "w-11/12 bg-inherit"
              :value value
              :placeholder "Enter a command and hit Enter to send"
              :on-change (fn [^js e]
                           (set-value! (.. e -target -value)))
              :on-key-down (fn [^js e]
                             (when (= "Enter" (.-key e))
                               (set-value! "")
                               (on-add-event value)))})))))

(defui term-event
  [{:keys [timestamp event-type event-data] :as props}]
  {:pre [(m/validate wss/Event props)]}
  ;;FIXME: Ugly indentation hack
  (let [data-indented (str/replace (:bytes event-data) "\n" "\n     ")]
    ($ :pre {:key key :data-prefix (if (= event-type :tx) ">" " ")}  ($ :code data-indented))))

(defui term-widget [{:keys [events on-add-event]}]
  ($ :.block.w-full
     ($ :.mockup-code
        (for [[_timestamp event] events]
          ($ term-event event))
        ($ cmd-input {:on-add-event on-add-event}))))
