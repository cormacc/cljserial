(ns stack.components.plotly
  (:require [replicant.alias :refer [defalias]]))

(defalias plot
  "Creates a Plotly.js plot.

   Use in hiccup as follows:

   ```clojure
   [::plotly/plot#my-arbitrary-plot-id
     {::plotly/data [{ :x [1 2 3 4 5] :y [1 2 4 8 16] }]
      ::plotly/layout { :margin { t: 0 } }}]
   ```

   Notes:
   1. This assumes your dispatch function includes a simple handler -- see this repo for an example.
   2. You MUST give your hiccup element an ID -- the plotly API replaces the content of an existing div given its ID

   See [plotly.js API documentation](https://plotly.com/javascript/plotlyjs-function-reference/#plotlynewplot)
   for more info."
  [{::keys [data layout] :as attrs}]
  [:div (merge attrs {:replicant/on-mount [[:plotly/plot [data layout]]]})])
