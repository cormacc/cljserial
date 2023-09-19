(ns stack.examples.re-frame.pages.local-filestore
  (:require
   [taoensso.telemere :as t]
   [stack.uix.file-card :as file-card]
   [stack.utils.dbfx :as dbfx]
   [uix.core :refer [$ defui]]))

(defui layout [_props]
  (let [filestore (dbfx/use-sub [:filestore])]
    ($ file-card/card {:title "Local files (OPFS)" :filestore filestore :on-file-click #(t/event! ::file-clicked {:data %})})))
