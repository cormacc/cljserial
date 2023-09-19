(ns cljserial.components.term
  (:require
   [cljs.spec.alpha :as s]
   [uix.core :as uix :refer [defui $]]
   [uix.dom]))


(s/def :term-event-payload/type #{:text :binary})
(s/def :term-event-payload/data string?)

(s/def :term-event/payload
  (s/keys :req-un [:term-event-payload/type :term-event-payload/data]))

(s/def :term-event/type #{:tx :rx})

(s/def ::term-event
  (s/keys :req-un [:term-event/type :term-event/payload]))


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
                               (on-add-event #(assoc % (js/Date.now) {:type :tx :payload {:data value
                                                                                          :type :text}}))))})))))

(defui editable-text [{:keys [text text-style on-done-editing]}]
  (let [[editing? set-editing!] (uix/use-state false)
        [editing-value set-editing-value!] (uix/use-state "")]
    (if editing?
      ($ :input.term-event-text
        {:value editing-value
         :auto-focus true
         :on-change (fn [^js e]
                      (set-editing-value! (.. e -target -value)))
         :on-key-down (fn [^js e]
                        (when (= "Enter" (.-key e))
                          (set-editing-value! "")
                          (set-editing! false)
                          (on-done-editing editing-value)))})
      ($ :span.term-event-text
        {:style text-style
         :on-click (fn [_]
                     (set-editing! true)
                     (set-editing-value! text))}
        text))))


;; (defui term-event
;;   [{:keys [created-at text type on-update-events] :as props}]
;;   {:pre [(s/valid? ::term-event props)]}
;;   ($ :.term-event
;;      {:key created-at}
;;      ($ :input.term-event-control
;;         {:type :checkbox
;;          :checked (= type :binary)
;;          :on-change (fn [_]
;;                       (on-update-events #(update-in % [created-at :type] {:text :binary
;;                                                                           :binary :text})))})
;;      ($ editable-text
;;         {:text text
;;          :text-style {:text-decoration (when (= :binary type) :line-through)}
;;          :on-done-editing (fn [value]
;;                             (on-update-events #(assoc-in % [created-at :text] value)))})
;;      ($ :button.term-event-delete-button
;;         {:on-click (fn [_]
;;                      (on-update-events #(dissoc % created-at)))}
;;         "×")))

;; (defui term-widget [{:keys [events set-events!] :as props}]
;;   ($ :.block.p-6.w-full.mx-auto.bg-white.rounded-xl.shadow-lg
;;      ($ header)
;;      (for [[created-at event] events]
;;        ($ term-event
;;           (assoc event :created-at created-at
;;                  :key created-at
;;                  :on-update-events set-events!)))
;;      ($ cmd-input {:on-add-event set-events!})
;;      ($ footer)))

(defui term-event
  [{:keys [created-at type payload on-update-events] :as props}]
  {:pre [(s/valid? ::term-event props)]}
  ($ :pre {:data-prefix (if (= type :tx) ">" " ")}  ($ :code (:data payload))))

(defui term-widget [{:keys [events set-events!] :as props}]
  ($ :.block.p-6.w-full.mx-auto.bg-white.rounded-xl.shadow-lg
     ($ :.mockup-code
        (for [[created-at event] events]
          ($ term-event
             (assoc event :created-at created-at
                    :key created-at
                    :on-update-events set-events!)))
        ($ cmd-input {:on-add-event set-events!}))))
