(ns stack.example.pages.plotly
  (:require [stack.components.plotly :as plotly]))

(def plot-data [{
  :x [1999 2000 2001 2002]
  :y [10 15 13 17]
  :type "scatter"}])

(def plot-layout-alias {:title {:text "Plotly.js (via alias)"}
                         :xaxis {:title {:text "Year"}
                                 :showgrid false
                                 :zeroline false}
                         :yaxis {:title {:text "Percent"}
                                 :showline false}})

(def plot-layout-hook {:title {:text "Plotly.js (via lifecycle hook)"}
                       :xaxis {:title {:text "Year"}
                               :showgrid false
                               :zeroline false}
                       :yaxis {:title {:text "Percent"}
                               :showline false}})

(defn render [_state]
  [:div
   "Some plotly plots..."
   ;; Directly, via lifecycle hook
   [:div#plot-container
    {:replicant/on-mount [[:plotly/plot [plot-data plot-layout-hook]]]}]

   ;; ... or using the hiccup alias
   [::plotly/plot#alias-plot-container
    {::plotly/data plot-data
     ::plotly/layout plot-layout-alias}]])
