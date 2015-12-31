(ns drugsfromdirt.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :as re-frame]))

;;;----Subscription Handlers -----------
(re-frame/register-sub
  :activemap
  (fn
    [db _]
    (reaction (:activemap @db))))

(re-frame/register-sub
  :activemolecule
  (fn
    [db _]
    (reaction (:activemolecule @db))))

(re-frame/register-sub
  :activesample
  (fn
    [db _]
    (reaction (:activesample @db))))

(re-frame/register-sub
  :top-level-navigation
  (fn
    [db _]
    (reaction (:top-level-navigation @db))))

(re-frame/register-sub
  :countdata
  (fn
    [db _]
    (reaction (-> @db :countdata))))

;(defn- countmols []
;  (let [countdata (reaction (-> @db :countdata ))
;        moleculenames (reaction (-> @countdata first :countdata keys))
;        reducingfn (fn [mol]
;                     (reduce (fn [a b] (+ a (-> % :countdata mol))) @countdata 0))
;        molcounts (map reducingfn moleculenames)]
;    molcounts))
;

(re-frame/register-sub
  :molecules
  (fn
    [db _]
    (let [countdata     (reaction (-> @db :countdata ))
          moleculenames (reaction (-> @countdata first :countdata keys))
          reducingfn    (fn [mol] {mol (reduce (fn [a b] (+ a (-> b :countdata mol))) 0 @countdata)})
          molcounts     (reaction  (reduce merge (map reducingfn @moleculenames)))
          sorted_filtered (reaction (->> @molcounts
                                         (filter #(and (number? (val %)) (> (val %) 0)))
                                         (into {})
                                         (keys)
                                         (sort)))]
      (println (str "molcounts: " @molcounts))
      (println (str "Sorted-filtered: "  @sorted_filtered))
      sorted_filtered )))

(re-frame/register-sub
  :samples
  (fn
    [db _]
    (let [countdata     (reaction (-> @db :countdata ))
          samplenames (reaction (map #(:samplename %) @countdata))]
      samplenames
      )))
