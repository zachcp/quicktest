(ns drugsfromdirt.sampleviewer
  "Top level namespace for creating the sample choosing page"
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]
            [re-frame.core :as re-frame ]
            [cljsjs.d3]
            [drugsfromdirt.handlers]
            [drugsfromdirt.subs]
            [drugsfromdirt.views :refer [map-chooser]]))


;(def app-state (atom {}))
(enable-console-print!)
(println "Edits to this text should show up in your developer console.")
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;(swap! app-state update-in [:__figwheel_counter] inc)
  )

(defn sample-select-box []
  "the select box to choose the active sample"
  (let [samples (re-frame/subscribe [:samples])]
    (fn []
      [:select {:on-change #(re-frame/dispatch [:update-active-sample (-> % .-target .-value)])}
       (for [s @samples]
         ^{:key s} [:option {:value (name s)} (name s)])])))

(defn topN [activedata n]
  (let [width 800
        height 300
        bar-chart-height 200
        countdata (:countdata activedata)
        tops (take n (sort (fn [[_ v1] [_ v2]] (> v1 v2)) countdata))
        maxval (apply max (vals tops))
        scale (.. js/d3.scale linear
                  (domain #js [0 maxval])
                  (range #js [0 bar-chart-height]))]
    (println (str "maxval: "maxval))
    (println (str "scaled maxval: " (-> maxval (clj->js) (scale) (js->clj))))

    [:div
     [:h3 "Top Cluster Families Observed in This Sample"]
     [:svg {:width width :height height}
      ;; add rectangles
      (for [[idx [k v]] (map-indexed vector tops)]
        (let [xval (* 21 idx)
              scaled-val (-> v (clj->js) (scale) (js->clj))
              yval (- bar-chart-height scaled-val)]
        ^{:key k}
          [:g [:rect
                  {:x  xval :y yval :width 20 :height scaled-val}
                  (str v)]
               [:text
                  {:transform  (str "translate(" xval "," 220 ") rotate(55)")}
                  (name k)]
               (when (> scaled-val 50)
                  [:text
                   {:fill "white" :transform (str "translate(" (+ xval 7) "," 170") rotate(90)")}
                   v])  ]))]]))

(defn basic-stats []
  (let [activesample (re-frame/subscribe [:activesample])
        countdata (re-frame/subscribe [:countdata])
        activedata (first (filter #(= @activesample (:samplename %)) @countdata))
        ]
    [:div
     [:h3 @activesample]
     [:h4 "Total Reads: " (:totalreads activedata)]
     [:h4 "Latitude: " (:Latitude activedata)]
     [:h4 "Longitude: " (:Longitude activedata)]
     [:hr]
     [topN activedata 20] ]))

(defn sampleviewer []
  (let [activesample (re-frame/subscribe [:activesample])]
    [:div.container
     [:div.row
      [:div.col-md-4
       [:h2 "Choose a Sample"]
       [sample-select-box]]
      [:div.col-md-8
       (when @activesample [basic-stats])]]]))

(let []
  (re-frame/dispatch-sync [:initialize-countdata])
  (reagent/render-component [sampleviewer] (. js/document (getElementById "app"))))
