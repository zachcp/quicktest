(ns drugsfromdirt.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]
            [re-frame.core :as re-frame ]
            [cljsjs.d3]
            [cljsjs.d3geo]
            [cljsjs.topojson]
            [drugsfromdirt.handlers]
            [drugsfromdirt.subs]
            [drugsfromdirt.views :refer [map-chooser]]))

(enable-console-print!)
(println "Edits to this text should show up in your developer console.")
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


(let []
  ;(re-frame/dispatch-sync [:initialize-db])
  (re-frame/dispatch-sync [:initialize-countdata])
  (reagent/render-component [map-chooser] (. js/document (getElementById "app"))))
