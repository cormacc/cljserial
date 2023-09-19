(ns stack.components.forms-scenes
  (:require [portfolio.replicant :refer-macros [defscene]]
            [stack.components.forms :as forms]))

(defscene select-one-option
  :title "Select - single option"
  [::forms/select {::forms/options [{:key 1 :value 1 :content "One"}]}])

(defscene select-multiple
  :title "Select - multiple options"
  [::forms/select {::forms/options [{:key 1 :value 1 :content "One"}
                                    {:key 2 :value 2 :content "Tooooooo"}
                                    {:key 3 :value 3 :content "Treeeeeeeeeeeeeee"}]}])

(defscene select-preselected
  :title "Select - preselected option"
  [::forms/select {::forms/selected 2
                   ::forms/options [{:key 1 :value 1 :content "One"}
                                    {:key 2 :value 2 :content "Tooooooo"}
                                    {:key 3 :value 3 :content "Treeeeeeeeeeeeeee"}]}])
