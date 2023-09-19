(ns stack.utils.hsm-test
  (:require
   [cljs.test :refer [deftest testing is]]
   [statecharts.core :as hsm]
   [stack.utils.hsm :as hsm-utils]))


;; (def tested-context-default {:bla "bleh"})

(def tested
  (hsm/machine
   {:id :tested
    :initial :top-state-standalone
    ;; :context tested-context-default

    :states
    {:top-state-standalone
     {:on {:goto-next :top-state-with-substates}}
     :top-state-with-substates
     {:initial :a-substate
      :on {:goto-prev :top-state-standalone}
      :states {:a-substate
               {:on {:goto-next :another-substate}}
               :another-substate
               {:initial :a-deep-substate
                :states {:a-deep-substate
                         {:on {:tinfoil-hat-on :a-terminal-substate}}
                         :a-terminal-substate
                         {:on {:tinfoil-hat-off :a-deep-substate}}}}}}}}))


;; TODO: CLJS browser test runner doesn't surface the strings passed to "testing" -- investigate alternatives
(deftest handled-events-extraction
  (testing "should extract single handled event given top level state without substates"
    (is (= #{ :goto-next } (hsm-utils/handled-events tested [:top-state-standalone]))))
  (testing "should extract events handled by parents and grandparents given nested state"
    (is (= #{ :goto-prev :tinfoil-hat-on } (hsm-utils/handled-events tested [:top-state-with-substates :another-substate :a-deep-substate])))))

(deftest handled-events-should-return-all-handled-events-given-no-state-vector
  (is (= #{:goto-next :goto-prev :tinfoil-hat-on :tinfoil-hat-off} (hsm-utils/handled-events tested))))


(deftest can-handle-should-return-false-given-event-not-handled-by-current-state
  (is (= false (hsm-utils/can-handle tested [:top-state-with-substates :another-substate :a-deep-substate] :goto-next))))

(deftest can-handle-should-return-true-given-event-not-handled-by-current-state
  (is (= false (hsm-utils/can-handle tested [:top-state-with-substates :another-substate :a-deep-substate] :goto-next))))
