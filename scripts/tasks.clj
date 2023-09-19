(ns tasks
  (:require
   [clojure.string :as str]
   [clojure.pprint :refer [pprint]]
   ;; [babashka.fs :as fs]
   [babashka.process :as p]))


(defn ^:export say-hello []
  (println "Hello"))

;;================================
;; BEGIN SUPABASE ENV EXTRACTION

(defn- keywordise [s]
  (-> s
      (str/replace " " "-")
      (str/lower-case)
      keyword))

(def sb-filename "env-local.edn")
(def sb-namespace "stack.utils.supabase")
(def sb-api-url-sym (str sb-namespace "/API-URL"))
(def sb-anon-key-sym (str sb-namespace "/ANON-KEY"))

(defn ^:export extract-supabase-env! []
  (println "Extracting local supabase environment info...")

  (let [{:keys [out]} (p/sh "supabase" "status")
        lines (map str/trim (str/split-lines out))
        tuples (map #(str/split % #": ") lines)
        env-info (into {} (map (fn [[k v]] [(keywordise k) v]) tuples))
      ;; I don't know how to use the stack.utils.supabase namespace without importing it
      ;; ... and keywordising with the ':' prefix doesn't give me what I want
      ;; closure-defines {:closure-defines {stack.utils.supabase/API-URL (:api-url env-info),
      ;;                                    stack.utils.supabase/ANON-KEY (:anon-key env-info)}}
 ;;
        closure-defines (format "{:closure-defines\n {%s \"%s\"\n  %s \"%s\"}}"
                                sb-api-url-sym (:api-url env-info)
                                sb-anon-key-sym (:anon-key env-info))]

    (pprint env-info)

    (println "\nWriting closure-defines overrides -> " sb-filename)
    (println closure-defines)

    (spit sb-filename closure-defines)))

;; END SUPABASE ENV EXTRACTION
;;================================

;;================================
;; BEGIN DAISYUI THEME EXTRACTION

(def tailwind-config-file "tailwind.config.js")
;; This only captures last match (inherent regex limitation)
;; (def themes-config-pattern #"daisyui:\s*\{\s*themes:\s*\[(?:\"(\S+)\"[^\"]*)+\]\}")
(def themes-config-pattern #"daisyui:\s*\{\s*themes:\s*\[(.+)\]\}")
(def themes-namespace "stack.utils.themes")
(def themes-sym (str themes-namespace "/THEMES"))
(def out-filename "ui-themes.edn")

(defn ^:export extract-daisyui-themes! []
  (println  "Extracting daisyui themes from " tailwind-config-file " ...")

;; The line we want to match looks something like:
;;   daisyui: { themes: ["light", "dark", "wireframe", "cupcake", "nord"]}
  (let [tailwind-config (slurp tailwind-config-file)
        themes-match (re-find themes-config-pattern tailwind-config)
        themes (-> (last themes-match)
                   (str/replace "\"" "")
                   (str/replace "," "")) ;;The comma doesn't matter, but still...
        closure-defines (format "{:closure-defines\n {%s \"%s\"}}"
                                themes-sym themes)]

    (println tailwind-config)
    (println "")
    (println  "Overriding closure-defines -> " out-filename)
    (println closure-defines)
    (spit out-filename closure-defines)))

;; END DAISYUI THEME EXTRACTION
;;================================
