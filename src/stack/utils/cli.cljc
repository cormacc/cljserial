(ns stack.utils.cli
  (:require
   [taoensso.telemere :as t]))


;;---------------------------------------------------------------------------------------
;; Implementation

(defn- get-handler [handlers command]
  (first (filter #(re-matches (:command-matcher %) command) handlers)))

(defn parse-exchange
  [{:keys [handlers default-terminator]} {:keys [command response]} context]
  (let [cmd-text (:bytes command)
        resp-text (:bytes response)
        cmd-handler (get-handler handlers cmd-text)]
    (if cmd-handler
      (let [response-terminator (or (:response-terminator cmd-handler) default-terminator)]
        (if (re-find response-terminator resp-text)
          ((:response-parser cmd-handler) context resp-text)
          context))
      (do
        (t/event! ::cli-command-unrecognised {:level :warn :data cmd-text})
        context))))
