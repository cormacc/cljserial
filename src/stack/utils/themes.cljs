(ns stack.utils.themes
  "Frontend theme - currently using daisyUI. See https://daisyui.com/docs/themes/"
  (:require
   [clojure.string :as str]))

; These can be overridden via deps.edn or using --config-merge on launch
; See https://shadow-cljs.github.io/docs/UsersGuide.html#closure-defines
(goog-define THEMES "nord")
;; (goog-define THEMES "light dark wireframe cupcake nord")

;; N.B. This must match the list of themes in tailwind.config.js
;; e.g.
;;   daisyui: { themes: ["wireframe", "cupcake", "nord", "dark"]}
;; We can also define custom themes -- see daisyUI docs for further instructions.
;; N.B. appear to need to include light and dark here, otherwise font-family config gets messed up
;;      and we display a serif font...
(def all (str/split THEMES " "))

(def default (first all))

(defn select [theme]
  (-> js/document
      .-documentElement
      (.setAttribute "data-theme" theme)))
