(ns stack.components.webserial
  (:require [replicant.alias :refer [defalias]]
            [phosphor.icons :as phosphor]
            [stack.components.icons :as icons]
            [stack.components.layout :as layout]
            [stack.components.forms :as forms]
            [stack.schema.webserial :as webserial]))

(defalias unsupported-message [attrs]
  [:div attrs "The Web Serial API is not currently available. Make sure you're running Chrome, Edge or Safari and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on " [:a {:href "https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"} "browser support"] ", and " [:a {:href "https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"} "secure contexts"] "."])

(def CONFIG-OPTIONS {:vendorIdFilter webserial/PORT-FILTERS
                     :baudRate webserial/BAUD-RATES
                     :dataBits webserial/DATA-BITS
                     :stopBits webserial/STOP-BITS
                     :parity webserial/PARITY
                     :flowControl webserial/FLOW-CONTROL})


(def usb-icon (phosphor/icon :phosphor.regular/usb))

(defalias connection-button [{::keys [connected?] :as _attrs}]
  [::icons/round-icon.opacity-50
   (if connected?
     {:class [:bg-success]
      :title "Click to disconnect"
      :on {:click [[:webserial :forget-port]]}}
     {:class [:bg-warning]
      :title "Click to connect"
      ;;TODO: Add vendorIdFilter as key on attrs instead of hard-coding
      :on {:click [[:webserial :request-port webserial/FTDI-USB-VENDOR-ID]]}})
   (phosphor/render usb-icon {:size icons/default-size})])


(defalias connection-status [{::keys [connected?] :as attrs} _children]
  (let [status-class (if connected? :status-success :status-warning)
        ;;TODO: Inject this as children instead
        connection-text (if connected? "Controller connected" "Please connect your Controller")]
    [:div
     attrs
     [:div.px-4.inline-grid {:class ["*:[grid-area:1/1]"]}
      [:div.status.status-lg.animate-ping {:class [status-class]}]
      [:div.status.status-lg {:class [status-class]}]] connection-text]))

(defalias port-option-select [{:keys [option-id config has-port interpolator] :as _attrs} _children]
  (let [current-value (option-id config)]
    [::forms/select.select-xs.w-full.py-0
     {::forms/selected current-value
      ::forms/options (map (fn [b] {:key b :value b :content (str b)}) (get CONFIG-OPTIONS option-id))
      :disabled has-port
      :on {:change [[:view/assoc-in [:webserial :port-config option-id] interpolator]]}}]))

(defalias port-config [{:keys [port port-description port-config] :as _attrs} _children]
  (let [has-port (not (nil? port))]
    [::layout/card
     [::layout/header
      [:div.flex.flex-wrap.justify-between
       [:h3.font-semibold "Port settings"]
       (if has-port
         [:button.btn.btn-outline.btn-secondary.btn-xs
          {:on {:click [[:webserial :forget-port]]}}
          "Close port"]
         [:button.btn.btn-outline.btn-primary.btn-xs
          {:on {:click [[:webserial :request-port (:vendorIdFilter port-config)]]}}
          "Request port"])]]
     [::layout/content
      [:table.table
       [:tbody
        (if has-port
          [:tr [:td "Port"] [:td port-description]]
          [:tr
           [:td "Port filter"]
           [:td [::forms/select.select-xs.w-full.py-0
                 {::forms/selected (:vendorIdFilter port-config)
                  ::forms/options (map (fn [{:keys [usbVendorId] :as f}]
                                         {:key usbVendorId :value usbVendorId :content (webserial/describe-port-filter f)}) webserial/PORT-FILTERS)
                  :disabled has-port
                  :on {:change [[:view/assoc-in [:webserial :port-config :vendorIdFilter] :event/target.value-as-int]]}}]]])
        [:tr
         [:td "Baud rate"]
         [:td [::port-option-select {:option-id :baudRate :config port-config :has-port has-port :interpolator :event/target.value-as-int}]]]
        [:tr
         [:td "Data bits"]
         [:td [::port-option-select {:option-id :dataBits :config port-config :has-port has-port :interpolator :event/target.value-as-int}]]]
        [:tr
         [:td "Stop bits"]
         [:td [::port-option-select {:option-id :stopBits :config port-config :has-port has-port :interpolator :event/target.value-as-int}]]]
        [:tr
         [:td "Parity"]
         [:td [::port-option-select {:option-id :parity :config port-config :has-port has-port :interpolator :event/target.value-as-keyword}]]]
        [:tr
         [:td "Flow control"]
         [:td [::port-option-select {:option-id :flowControl :config port-config :has-port has-port :interpolator :event/target.value-as-keyword}]]]

;;;
        ]]]]))
