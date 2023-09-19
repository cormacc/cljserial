(ns stack.utils.i18n)

;; This is a placeholder definition
(def supported-languages
  [{:code "en_IE" :name "English (Ireland)"} ;; None of this US or UK nonsense...
   {:code "it_IT" :name "Italiano"}
   {:code "pt_BR" :name "Portuguese (BR)"}])

(def default-language (first supported-languages))

(def default-language-code (:code default-language))
