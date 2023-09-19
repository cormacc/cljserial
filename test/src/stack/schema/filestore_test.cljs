(ns stack.schema.filestore-test
  (:require
   [cljs.test :refer [deftest testing is]]
   [stack.schema.filestore :as filestore]))

(deftest filename-extraction
  (testing "should extract filename given root path"
    (is (= "blah.txt" (filestore/get-filename "/blah.txt"))))
  (testing "should extract filename without leading '/'"
    (is (= "bleh.txt" (filestore/get-filename "bleh.txt"))))
  (testing "should extract filename given nested path"
    (is (= "blih.txt" (filestore/get-filename "/bloo/blee/blih.txt")))))

(deftest folder-vector-extraction
  (testing "should return empty vector given empty path"
    (is (empty? (filestore/get-dir-vector ""))))
  (testing "should return empty vector given root path"
    (is (empty? (filestore/get-dir-vector "/bla.txt"))))
  (testing "should extract single folder"
    (is (= ["bleh"] (filestore/get-dir-vector "/bleh/blih.txt"))))
  (testing "should extract nested folders"
    (is (= ["bleh" "blih" "bluh"] (filestore/get-dir-vector "/bleh/blih/bluh/blaa.txt"))))
  (testing "should extract nested folders without leading '/'"
    (is (= ["bleh" "blih" "bluh"] (filestore/get-dir-vector "/bleh/blih/bluh/blaa.txt")))))
