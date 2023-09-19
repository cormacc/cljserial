(ns stack.utils.uix
  (:require
   [clojure.edn :as edn]
   [clojure.string :as s]
   [taoensso.telemere :as t]
   [uix.dom]
   [uix.core :as uix]
   [cljs-react-devtools.core]
   ;; FIXME: This import is failing as it's from dev.clj?
   ;;        Likely blindingly easy to fix if I knew what I was doing...
   ;; [uix.dev :refer [from-hiccup from-html]]
   [hickory.core :as h]))

(defonce uix-root
  (uix.dom/create-root (js/document.getElementById "app-root")))

(t/log! :info "Initialising cljs-react-devtools")
(cljs-react-devtools.core/init!
 {:root (js/document.getElementById "app-root")

  ;; :shortcut "Control-Shift-R"
  :shortcut "Control-Shift-Meta-R"
  })

(defn render [layout]
  (uix.dom/render-root layout uix-root))

(defn use-persistent-state
  "Loads initial state from local storage and persists every updated state value
  Returns a tuple of the current state value and an updater function"
  [store-key initial-value]
  (let [[value set-value!] (uix/use-state initial-value)]
    (uix/use-effect
      (fn []
        (let [value (edn/read-string (js/localStorage.getItem store-key))]
          (set-value! #(into % value))))
      [store-key])
    (uix/use-effect
      (fn []
        (js/localStorage.setItem store-key (str value)))
      [value store-key])
    [value set-value!]))

;;
;; These two functions are taken new in uix v1.1.0 I.e. written by roman liutikov
;; Duplicated here because I don't know to import from dev.clj
(defn from-hiccup [form]
  (cond
    (seq? form)
    (mapv from-hiccup form)

    (vector? form)
    (let [form (cond
                 (= :> (first form))
                 (rest form)

                 :else form)
          [tag attrs & children] form
          [attrs children] (cond
                             (map? attrs) [attrs children]
                             (> (count form) 1) [nil (into [attrs] children)]
                             :else [nil children])
          attrs (cond-> attrs
                  (contains? (meta form) :key)
                  (assoc :key (:key (meta form))))
          children (map from-hiccup children)]
      (if attrs
        `(~'$ ~tag ~attrs ~@children)
        `(~'$ ~tag ~@children)))

    :else form))

(comment
  (from-hiccup
   [:div
    [:div {:class "foo"} "bar"]
    [:> 'js-component]
    [:<> [:button "hello"] [:span "world"]]
    ^{:key "hello"} [:span "world"]]))

(defn from-html
  "Converts a HTML string to a clojure form in UIx syntax."
  [html-str]
  (map (comp from-hiccup h/as-hiccup)
       (h/parse-fragment html-str)))

(comment
  (from-html
   "<p class=\"c-fDhfVa c-fDhfVa-dkirSI-spaced-true c-fDhfVa-jFCKZD-family-default c-fDhfVa-grGuE-size-3 c-fDhfVa-hYBDYy-variant-default c-fDhfVa-kHnRXL-weight-2\">Finally, one last scene, just for fun! I ported to React Three Fiber a Three.js demo from <a href=\"http://barradeau.com/blog/?p=621\" class=\"c-iNkjEl c-iNkjEl-dNnDWN-underline-true c-iNkjEl-igJWTOZ-css\">an article</a> written by <a href=\"https://twitter.com/nicoptere\" class=\"c-iNkjEl c-iNkjEl-hGYKvZ-discreet-true c-iNkjEl-goIlEV-favicon-true c-iNkjEl-idwngVA-css\">@nicoptere</a> that does a pretty good job at deep diving into the FBO technique.</p>"))


;; TODO: Consider moving this to a stringutils module?
(defn replace-last-
  "Replaces last occurrence of pattern with replacement in s.
  Will probably break given a regex pattern."
  [s pattern replacement]
  (if-let [match-pos (s/last-index-of s pattern)]
    (let [prefix (subs s 0 match-pos)
          suffix (subs s (+ match-pos (count pattern)) (count s))]
      (str prefix replacement suffix))
    s))

(defn dedup-parens-
  "If the opening and closing parentheses are doubled, undouble them.
  i.e. '(($ :div))' -> '($ :div).
  The html->uix conversion below gives doubled opening and closing parentheses - I'm not
  clever enough to solve this at source, hence clunky workaround.
  "
  [str]
  (if (s/starts-with? str "((")
    (-> str
        (s/replace-first "((" "(")
        (replace-last- "((" "("))
    str))

(defn html->uix
  "Converts a HTML string to a string representation of a clojure form in UIx syntax."
  [html-str]
  (-> html-str
      (from-html)
      (str)
      (s/replace #"\"(\\n\s*)*\"" "\n")
      (dedup-parens-)
;
      ))
