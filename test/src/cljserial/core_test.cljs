(ns cljserial.core-test
  (:require [cljs.test :refer (deftest is)]))

(deftest a-failing-test
  (is (= 1 2)))

(deftest a-passing-test
  (is (= 1 1)))
