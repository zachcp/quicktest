(ns drugsfromdirt.handlers
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]
            [re-frame.core :as re-frame]
            [drugsfromdirt.db]))


;;;---- Helper Functions-----------
(defn calculate-countdata [sample molecule]
  "calculate the counts of given molecule as a percentage ofr total reads"
  (let [molnum (get-in sample [:countdata molecule])
        sampletotal (:totalreads sample)]
    (assoc sample :size (float (/ molnum sampletotal)))))


;;;---- Event handlers-----------
(re-frame/register-handler                 ;; setup initial state
  :initialize-db                     ;; usage:  (submit [:initialize])
  (fn
    [db _]
    drugsfromdirt.db/dbstart))

(re-frame/register-handler                 ;; setup initial state
  :initialize-countdata                     ;; usage:  (submit [:initialize])
  (fn
    [db _]
    (GET "/static/jsondata/counts.json" {:response-format :json
                           :keywords? true
                           :handler         #(re-frame/dispatch [:process-countdata %1])})
    db))

(re-frame/register-handler                 ;; setup initial state
  :process-countdata                ;; usage:  (submit [:initialize])
  (fn
    [db [_ resp]]
    (let [counts (js->clj resp :keywordize-keys true)
          counts-with-size (map #(assoc % :size 5) counts)]
      (assoc db :countdata counts-with-size))))    ;; what it returns becomes the new state

(re-frame/register-handler
  :update-active
  (fn
    [db [_ molvalue]]
    (let [molkey (keyword molvalue)
          countdata (-> db :countdata)
          newvalues (map #(calculate-countdata % molkey) countdata)]
      (-> db (assoc :activemolecule molvalue)
          (assoc :countdata newvalues)))))  ;; what it returns becomes the new state

(re-frame/register-handler
  :update-active-sample
  (fn
    [db [_ samplevalue]]
      (-> db (assoc :activesample samplevalue))))

(re-frame/register-handler
  :update-map
  (fn
    [db [_ newvalue]]
    (-> db (assoc :activemap newvalue))))

(re-frame/register-handler
  :update-top-level-navigation
  (fn
    [db [_ value]]
    (-> db (assoc :top-level-navigation value))))
