(ns cljserial.components.term
  (:require
   [cljs.spec.alpha :as s]
   [uix.core :as uix :refer [defui $]]
   [uix.dom]))


(s/def ::byte-encoding #{:text :binary})
(s/def ::bytes string?)

(s/def ::event-data
  (s/keys :req-un [::byte-encoding ::bytes]))

(s/def ::event-type #{:tx :rx})

(s/def ::timestamp int?)

(s/def ::event
  (s/keys :req-un [::timestamp ::event-type ::event-data]))


(s/def ::events (s/and
                 (s/map-of ::timestamp ::event)
                 #(instance? PersistentTreeMap %)))

(defn new-event-store []
  (sorted-map))

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
  [{:keys [event-type event-data] :as props}]
  {:pre [(s/valid? ::event props)]}
  ($ :pre {:data-prefix (if (= event-type :tx) ">" " ")}  ($ :code (:bytes event-data))))

(defui term-widget [{:keys [events on-add-event]}]
  ($ :.block.p-6.w-full.mx-auto.bg-white.rounded-xl.shadow-lg
     ($ :.mockup-code
        (for [[timestamp event] events]
          ($ term-event
             (assoc event :key timestamp)))
        ($ cmd-input {:on-add-event on-add-event}))))
