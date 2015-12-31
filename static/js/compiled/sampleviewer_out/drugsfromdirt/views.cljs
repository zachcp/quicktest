(ns drugsfromdirt.views
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :as re-frame ]
            [cljsjs.d3]
            [cljsjs.d3geo]
            [cljsjs.topojson]))

(defn molecule-select-box []
  "the select box to choose the active molecules"
  (let [molecules (re-frame/subscribe [:molecules])]
    (fn []
      (println (str "Molecules: " @molecules ))
      [:select {:on-change #(re-frame/dispatch [:update-active (-> % .-target .-value)])}
       (for [m @molecules]
         ^{:key m} [:option {:value (name m)} (name m)])]
       )))

(defn NYCmap-inner [countdata]
  (let [width 750
        height 600
        projection (.. js/d3.geo mercator
                       (center #js [-73.94 40.7])
                       (scale 60000)
                       (translate #js [(/ width 2) (/ height 2)]))

        path (.. js/d3.geo path (projection projection))

        getlatlon (fn [datamap] (let [latitude (:Latitude datamap)
                                      longitude (:Longitude datamap)
                                      [lon lat] (js->clj (projection #js [longitude latitude])) ]
                                  (merge datamap {:d3lat lon  :d3lon lat})))]
    (reagent/create-class
      {:reagent-render (fn [] [:svg#nycmap {:style {:height (str  height "px") :width (str width "px")}}])

       :component-did-mount
                       (fn [this]
                         (let [[_ countdata] (reagent/argv this)
                               countdata-updated (map getlatlon countdata)
                               pointdata (clj->js countdata-updated)
                               radius (.. js/d3.scale sqrt (domain #js [0 5]) (range #js [0 10]))
                               svg (.. js/d3 (select "#nycmap"))]

                           ;(println (str "countdata: " countdata))
                           (js/console.log pointdata)

                           ;; draw the map (only happens once)
                           ;; use d3.josn directly as AJAX calls were causing trouble
                           (.json js/d3
                                  "/static/jsondata/nyc.json"
                                  (fn [error json]
                                    (.. svg
                                        (append "g")
                                        (attr "id" "boroughs")
                                        (selectAll ".state")
                                        (data (.-features json))
                                        enter
                                        (append "path")
                                        (attr "class" (fn [d] (str "borough " (.. d -properties -borough))))
                                        (attr "d" path))))

                           ;; create and draw initial points
                           (.. svg
                               (append "g")
                               (attr "id" "circle")
                               (selectAll "circle")
                               (data pointdata)
                               enter
                               (append "circle")
                               (attr "cx" (fn [d] (.-d3lat d)))
                               (attr "cy" (fn [d] (.-d3lon d)))
                               (attr "r"  (fn [d] (radius (.-size d))))
                               (attr "class" "bubble"))

                           ;; create the legend
                           (.. svg
                               (append "g")
                               (attr "class" "legend")
                               (attr "transform" (str "translate(" (- width 50) "," (- height 20) ")")))))

       :component-did-update
                       (fn [this]
                         (let [[_ countdata] (reagent/argv this)
                               pointdata (clj->js countdata)
                               maxradius (let [maxrad (apply max (map #(:size %) countdata))]
                                           (if (seq? maxrad) (first maxrad) maxrad))
                               radius (.. js/d3.scale sqrt (domain (clj->js [0 maxradius])) (range #js [0 20]))
                               legend-data (clj->js [0 (/ maxradius 4) maxradius])
                               svg (.. js/d3 (select "#nycmap"))]


                            ;; redraw based on size
                           (.. js/d3
                               (selectAll "circle")
                               (data pointdata)
                               (attr "r"  (fn [d] (radius (.-size d)))))

                           ;; update the legend
                           ;; delete the old legend
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "text")
                               remove)
                           ;; update the circles
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "g")
                               (data legend-data)
                               enter
                               (append "circle")
                               (attr "cy" (fn [d] (- (radius d))))
                               (attr "r"  (fn [d] (radius d))))

                           ;; update the text
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "g")
                               (data legend-data)
                               enter
                               (append "text")
                               (attr "y"   (fn [d] (* -2 (radius d))))
                               (attr "dy"  "1.3em")
                               (text (fn [d] ((.format js/d3 "0.01s") d))))
                           ))

       :display-name "nyc-d3map-inner"})))


(defn USAmap-inner [countdata]
  (let [width 750
        height 500
        projection (.. js/d3.geo albersUsa
                       (scale 1000)
                       (translate #js [(/ width 2) (/ height 2)]))

        path (.. js/d3.geo path (projection projection))

        getlatlon (fn [datamap] (let [latitude (:Latitude datamap)
                                      longitude (:Longitude datamap)
                                      [lon lat] (js->clj (projection #js [longitude latitude])) ]
                                  (merge datamap {:d3lat lon  :d3lon lat})))]
    (reagent/create-class
      {:reagent-render (fn [] [:svg {:style {:height (str  height "px") :width (str width "px")}}])

       :component-did-mount
                       (fn [this]
                         (let [[_ countdata] (reagent/argv this)
                               countdata-updated (map getlatlon countdata)
                               pointdata (clj->js countdata-updated)
                               radius (.. js/d3.scale sqrt (domain #js [0 5]) (range #js [0 10]))
                               svg (.. js/d3 (select "svg"))]

                           ;; draw the map (only happens once)
                           ;; use d3.json directly as AJAX calls were causing trouble
                           (.json js/d3
                                  "/static/jsondata/us-10m.json"
                                  (fn [error json]

                                    (.. svg
                                        (insert "path" ".graticule")
                                        (datum (.feature js/topojson json (-> json .-objects .-land)))
                                        (attr "class" "land")
                                        (attr "d" path))

                                    (.. svg
                                        (insert "path" ".graticule")
                                        (datum (.mesh js/topojson json (-> json .-objects .-land) (fn [a b] (not= a b))))
                                        (attr "class" "state-boundary")
                                        (attr "d" path))

                                    ;; create and draw initial points
                                    (.. svg
                                        (append "g")
                                        (attr "id" "circle")
                                        (selectAll "circle")
                                        (data pointdata)
                                        enter
                                        (append "circle")
                                        (attr "cx" (fn [d] (.-d3lat d)))
                                        (attr "cy" (fn [d] (.-d3lon d)))
                                        (attr "r"  (fn [d] (radius (.-size d))))
                                        (attr "class" "bubble"))

                                    ;; create the legend
                                    (.. svg
                                        (append "g")
                                        (attr "class" "legend")
                                        (attr "transform" (str "translate(" (- width 50) "," (- height 20) ")")))))
                           ))


       :component-did-update
                       (fn [this]
                         (let [[_ countdata] (reagent/argv this)
                               pointdata (clj->js countdata)
                               maxradius (let [maxrad (apply max (map #(:size %) countdata))]
                                           (if (seq? maxrad) (first maxrad) maxrad))
                               radius (.. js/d3.scale sqrt (domain (clj->js [0 maxradius])) (range #js [0 20]))
                               legend-data (clj->js [0 (/ maxradius 4) maxradius])]

                           (js/console.log pointdata)

                           ;; redraw based on size
                           (.. js/d3
                               (selectAll "circle")
                               (data pointdata)
                               (attr "r"  (fn [d] (radius (.-size d)))))

                           ;; update the legend
                           ;; delete the old legend
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "text")
                               remove)
                           ;; update the circles
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "g")
                               (data legend-data)
                               enter
                               (append "circle")
                               (attr "cy" (fn [d] (- (radius d))))
                               (attr "r"  (fn [d] (radius d))))

                           ;; update the text
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "g")
                               (data legend-data)
                               enter
                               (append "text")
                               (attr "y"   (fn [d] (* -2 (radius d))))
                               (attr "dy"  "1.3em")
                               (text (fn [d] ((.format js/d3 "0.01s") d))))
                           ))

       :display-name "usa-d3map-inner"} )))

(defn Worldmap-inner [countdata]
  (let [width 760
        height 480
        projection (.. js/d3.geo aitoff
                       (scale 120)
                       (translate #js [(/ width 2) (/ height 2)])
                       (precision 0.1))

        path (.. js/d3.geo path (projection projection))

        getlatlon (fn [datamap] (let [latitude (:Latitude datamap)
                                      longitude (:Longitude datamap)
                                      [lon lat] (js->clj (projection #js [longitude latitude])) ]
                                  (merge datamap {:d3lat lon  :d3lon lat})))]
    (reagent/create-class
      {:reagent-render (fn [] [:svg {:style {:height (str  height "px") :width (str width "px")}}])

       :component-did-mount
                       (fn [this]
                         (let [[_ countdata] (reagent/argv this)
                               countdata-updated (map getlatlon countdata)
                               pointdata (clj->js countdata-updated)
                               radius (.. js/d3.scale sqrt (domain #js [0 5]) (range #js [0 10]))
                               svg (.. js/d3 (select "svg"))]

                           ;; draw the map (only happens once)
                           ;; use d3.json directly as AJAX calls were causing trouble
                           (.json js/d3
                                  "/static/jsondata/world-50m.json"
                                  (fn [error json]

                                    ;; draw graticule
                                    (.. svg
                                        (append "path")
                                        (datum (.graticule js/d3.geo))
                                        (attr "class" "graticule")
                                        (attr "d" path))

                                    ;; draw land
                                    (.. svg
                                        (insert "path")
                                        (datum (.feature js/topojson json (-> json .-objects .-land )))
                                        (attr "class" "land")
                                        (attr "d" path))

                                    ;; draw country boundaries
                                    ;(.. svg
                                    ;    (insert "path")
                                    ;    (datum (.feature js/topojson json json.objects.countries (fn [a b] (not= a b))))
                                    ;    (attr "class" "state-boundary")
                                    ;    (attr "d" path))

                                    ;; draw sphere
                                    (.. svg
                                        (append "defs")
                                        (append "path")
                                        (datum  (clj->js {"type" "Sphere"}))
                                        (attr "id" "sphere")
                                        (attr "d" path))

                                    (.. svg
                                        (append "use")
                                        (attr "class" "stroke")
                                        (attr "xlink:href" "#sphere"))


                                    ;; create and draw initial points
                                    (.. svg
                                        (append "g")
                                        (attr "id" "circle")
                                        (selectAll "circle")
                                        (data pointdata)
                                        enter
                                        (append "svg:circle")
                                        (attr "cx" (fn [d] (.-d3lat d)))
                                        (attr "cy" (fn [d] (.-d3lon d)))
                                        (attr "r"  (fn [d] (radius (.-size d))))
                                        (attr "class" "bubble"))

                                    ;; create the legend
                                    (.. svg
                                        (append "g")
                                        (attr "class" "legend")
                                        (attr "transform" (str "translate(" (- width 50) "," (- height 20) ")")))

                                    ))
                           ))

       :component-did-update
                       (fn [this]
                         (let [[_ countdata] (reagent/argv this)
                               pointdata (clj->js countdata)
                               maxradius (let [maxrad (apply max (map #(:size %) countdata))]
                                           (if (seq? maxrad) (first maxrad) maxrad))
                               radius (.. js/d3.scale sqrt (domain (clj->js [0 maxradius])) (range #js [0 20]))
                               legend-data (clj->js [0 (/ maxradius 4) maxradius])]

                           (js/console.log pointdata)

                           ;; redraw based on size
                           (.. js/d3
                               (selectAll "circle")
                               (data pointdata)
                               (attr "r"  (fn [d] (radius (.-size d)) )))

                           ;; update the legend
                           ;; delete the old legend
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "text")
                               remove)
                           ;; update the circles
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "g")
                               (data legend-data)
                               enter
                               (append "circle")
                               (attr "cy" (fn [d] (- (radius d))))
                               (attr "r"  (fn [d] (radius d))))

                           ;; update the text
                           (.. js/d3
                               (selectAll ".legend")
                               (selectAll "g")
                               (data legend-data)
                               enter
                               (append "text")
                               (attr "y"   (fn [d] (* -2 (radius d))))
                               (attr "dy"  "1.3em")
                               (text (fn [d] ((.format js/d3 "0.01s") d))))
                           ))

       :display-name "world-d3map-inner"})))

;(defmethod map-dispatcher (fn [mapscale] [mapscale]))
;
;(defmulti map-dispatcher ["NYC"]
;  {:maptitle "NYC Map"
;   :maptext [:div [:p "Soil samples from ~300 parks were collected with the help of the
;             New York City Parks Department, the Natural Areas Conservancy and
;             the Rockefeller Summer Outreach Program."]
;             [:p "DNA was isolated from the soil and we used PCR to amplify
;             fragments conserved in the biosynthesis of small molecule compounds.
;             Use the box to explroe the relative abundance of each molecule type as
;              a fraction of the total reads observed for each sample. For moter details see the
;              methods."]]})
;
;(defmulti map-dispatcher ["USA"]
;          {:maptitle "US Map"
;           :maptext [:div [:p "Soil samples from ~300 parks were collected with the help of the
;             New York City Parks Department, the Natural Areas Conservancy and
;             the Rockefeller Summer Outreach Program."]
;                     [:p "DNA was isolated from the soil and we used PCR to amplify
;             fragments conserved in the biosynthesis of small molecule compounds.
;             Use the box to explroe the relative abundance of each molecule type as
;              a fraction of the total reads observed for each sample. For moter details see the
;              methods."]]})
;
;(defmulti map-dispatcher ["World"]
;          {
;           :maptext [:div [:p "Soil samples from ~300 parks were collected with the help of the
;             New York City Parks Department, the Natural Areas Conservancy and
;             the Rockefeller Summer Outreach Program."]
;                     [:p "DNA was isolated from the soil and we used PCR to amplify
;             fragments conserved in the biosynthesis of small molecule compounds.
;             Use the box to explroe the relative abundance of each molecule type as
;              a fraction of the total reads observed for each sample. For moter details see the
;              methods."]]})


(defn NYCmap-outer []
  (let [countdata (re-frame/subscribe [:countdata])
        activemol (re-frame/subscribe [:activemolecule])]
    (fn []
      [:div
       [:div.container
        [:div.row
         [:div {:class "col-md-4"}
          [:div.panel.panel-primary
            [:div.panel-heading [:h2 "NYC Map"]]
            [:div.panel-body
             [molecule-select-box]
             (when @activemol [:h3 (str "Activemol: " @activemol)])
             [:p "Soil samples from ~300 parks were collected with the help of the
             New York City Parks Department, the Natural Areas Conservancy and
             the Rockefeller Summer Outreach Program."]
             [:p "DNA was isolated from the soil and we used PCR to amplify
             fragments conserved in the biosynthesis of small molecule compounds.
             Use the box to explroe the relative abundance of each molecule type as
              a fraction of the total reads observed for each sample. For more details see the
              methods."]]]]

         [:div {:class "col-md-8"}
          [NYCmap-inner @countdata]]
         ]]])))

(defn USAmap-outer []
  (let [countdata (re-frame/subscribe [:countdata])
        activemol (re-frame/subscribe [:activemolecule])]
    (fn []
      [:div
       [:div.container
        [:div.row
         [:div {:class "col-md-4"}
          [:div.panel.panel-primary
           [:div.panel-heading [:h2 "USA Map"]]
           [:div.panel-body
            [molecule-select-box]
            (when @activemol [:h3 (str "Activemol: " @activemol)])
            [:p "Soil samples from ~300 parks were collected with the help of the
             New York City Parks Department, the Natural Areas Conservancy and
             the Rockefeller Summer Outreach Program."]
            [:p "DNA was isolated from the soil and we used PCR to amplify
             fragments conserved in the biosynthesis of small molecule compounds.
             Use the box to explroe the relative abundance of each molecule type as
              a fraction of the total reads observed for each sample. For more details see the
              methods."]]]]

         [:div {:class "col-md-8"}
          [USAmap-inner @countdata]]
         ]]])))

(defn Worldmap-outer []
  (let [countdata (re-frame/subscribe [:countdata])
        activemol (re-frame/subscribe [:activemolecule])]
    (fn []
      [:div
       [:div.container
        [:div.row
         [:div {:class "col-md-4"}
          [:div.panel.panel-primary
           [:div.panel-heading [:h2 "World Map"]]
           [:div.panel-body
            [molecule-select-box]
            (when @activemol [:h3 (str "Activemol: " @activemol)])
            [:p "Soil samples from ~300 parks were collected with the help of the
             New York City Parks Department, the Natural Areas Conservancy and
             the Rockefeller Summer Outreach Program."]
            [:p "DNA was isolated from the soil and we used PCR to amplify
             fragments conserved in the biosynthesis of small molecule compounds.
             Use the box to explore the relative abundance of each molecule type as
              a fraction of the total reads observed for each sample. For more details see the
              methods."]]]]
         [:div {:class "col-md-8"}
          [Worldmap-inner @countdata]]
         ]]])))

(defn map-chooser []
  (let [activemap (re-frame/subscribe [:activemap])]
    (fn []
      [:div.container
        [:div.row [:div.text-center [:h2  "Explore A Map"]]]
        [:hr]
        [:div.row
         [:div.col-md-4.col-md-offset-4
          [:button.btn.btn-warning "Choose A Map"]
          [:button.btn.btn-primary {:on-click #(re-frame/dispatch [:update-map "NYC"])}   "NYC"]
          [:button.btn.btn-primary {:on-click #(re-frame/dispatch [:update-map "USA"])}  "USA"]
          [:button.btn.btn-primary {:on-click #(re-frame/dispatch [:update-map "World"])} "World"]]]
         [:hr]

       (condp = @activemap
         "NYC"  [NYCmap-outer]
         "USA"  [USAmap-outer]
         "World" [Worldmap-outer]
         [NYCmap-outer])])))

