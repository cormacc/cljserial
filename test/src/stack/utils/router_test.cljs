(ns stack.utils.router-test
  (:require
   [cljs.test :refer [deftest is]]
   [stack.utils.router :as router]))

(def test-routes
  [["/"
    {:name ::terminal
     :title "Terminal"
     :view "DEFAULT"}]

   ["/bleh"
    {:name ::bleh
     :title "Bleh"
     :view "Second"}]

   ["/todo"
    {:name ::todo
     :title "TodoMVC"
     :view "This can be any type as I don't know how to spec function pointers...."}]])

;; Refactored while evaluating replicant -- these functions were never used...
;; (deftest get-default-view-should-return-view-from-first-route
;;   (is (= "DEFAULT" (router/get-default-view test-routes))))

;; (deftest get-match-view-should-return-default-view-given-invalid-route
;;   (is (= "DEFAULT" (router/get-match-view test-routes nil))))
