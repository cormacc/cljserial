(ns stack.uix.buttons
  (:require
   [clojure.string :as str]
   [uix.core :as uix :refer [defui $]]))

;; See https://tailwindui.com/components/application-ui/elements/buttons

(def ^:const styles-common "font-semibold shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2")

(def ^:const styles-by-shape
  {:square "rounded-md"
   :rounded "rounded-full"})

(def ^:const styles-by-colour
  {:primary  "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white"
   :secondary "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"})

(def ^:const styles-by-size
  {:xs "text-xs px-2 py-1"
   :sm "text-sm px-2 py-1"
   :md "text-sm px-2.5 py-1.5"
   :lg "text-sm px-3 py-2"
   :xl "text-sm px-3.5 py-2.5"})

(def ^:const shapes (keys styles-by-shape))
(def ^:const sizes (keys styles-by-size))
(def ^:const colours (keys styles-by-colour))


(defn get-styles [shape colour size]
  (str/join " " [styles-common (shape styles-by-shape) (colour styles-by-colour) (size styles-by-size)]))

(defui button
  [{:keys [shape colour size on-click children] :or {shape :square size :md colour :primary}}]
  {:pre [(some #{shape} shapes)
         (some #{size} sizes)
         (some #{colour} colours)]}
  ($ :button {:type "button", :class (get-styles shape colour size) :on-click on-click} children))
