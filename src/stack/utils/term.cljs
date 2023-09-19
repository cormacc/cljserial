(ns stack.utils.term
  "Serial/terminal communications schema and utilities")

;; == Schema =====================================================================
(def Timestamp :int)
(def ByteEncoding [:enum :text :binary])

;; TODO: Replace Direction with EventType
(def EventType [:enum :command :response])
;; (def Direction [:enum :tx :rx])
(def EventData [:map
                [:byte-encoding ByteEncoding]
                [:bytes :string]])

(def Event [:map
            [:timestamp Timestamp]
            [:event-type EventType]
            [:event-data EventData]])

(def Events [:map-of Timestamp Event])


;; (def Exchange [:map
;;                [:command EventData]
;;                [:response EventData]])

(def Terminal [:map
               [:connection :string]
               [:events Events]])

;; TODO: This should probably done using defaults and a malli generator?
(defn new-terminal-store [] {:connection "none"
                             :events (sorted-map)})

;; ;; TODO: These and the command history at app db level are probably redundant. Eliminate?
;; (def ExchangeHistory
;;   [:map-of Timestamp Exchange])

;; (defn new-history-store [] (sorted-map))
