// Compiled by ClojureScript 1.7.170 {}
goog.provide('drugsfromdirt.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljsjs.d3');
goog.require('cljsjs.d3geo');
goog.require('cljsjs.topojson');
drugsfromdirt.views.molecule_select_box = (function drugsfromdirt$views$molecule_select_box(){

var molecules = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"molecules","molecules",1746938238)], null));
return ((function (molecules){
return (function (){
cljs.core.println.call(null,[cljs.core.str("Molecules: "),cljs.core.str(cljs.core.deref.call(null,molecules))].join(''));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (molecules){
return (function (p1__8346_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active","update-active",1918193808),p1__8346_SHARP_.target.value], null));
});})(molecules))
], null),(function (){var iter__5440__auto__ = ((function (molecules){
return (function drugsfromdirt$views$molecule_select_box_$_iter__8351(s__8352){
return (new cljs.core.LazySeq(null,((function (molecules){
return (function (){
var s__8352__$1 = s__8352;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8352__$1);
if(temp__4425__auto__){
var s__8352__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8352__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__8352__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__8354 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__8353 = (0);
while(true){
if((i__8353 < size__5439__auto__)){
var m = cljs.core._nth.call(null,c__5438__auto__,i__8353);
cljs.core.chunk_append.call(null,b__8354,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,m)], null),cljs.core.name.call(null,m)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)));

var G__8355 = (i__8353 + (1));
i__8353 = G__8355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8354),drugsfromdirt$views$molecule_select_box_$_iter__8351.call(null,cljs.core.chunk_rest.call(null,s__8352__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8354),null);
}
} else {
var m = cljs.core.first.call(null,s__8352__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,m)], null),cljs.core.name.call(null,m)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m], null)),drugsfromdirt$views$molecule_select_box_$_iter__8351.call(null,cljs.core.rest.call(null,s__8352__$2)));
}
} else {
return null;
}
break;
}
});})(molecules))
,null,null));
});})(molecules))
;
return iter__5440__auto__.call(null,cljs.core.deref.call(null,molecules));
})()], null);
});
;})(molecules))
});
drugsfromdirt.views.NYCmap_inner = (function drugsfromdirt$views$NYCmap_inner(countdata){
var width = (750);
var height = (600);
var projection = d3.geo.mercator().center([-73.94,40.7]).scale((60000)).translate([(width / (2)),(height / (2))]);
var path = d3.geo.path().projection(projection);
var getlatlon = ((function (width,height,projection,path){
return (function (datamap){
var latitude = new cljs.core.Keyword(null,"Latitude","Latitude",-1084128459).cljs$core$IFn$_invoke$arity$1(datamap);
var longitude = new cljs.core.Keyword(null,"Longitude","Longitude",-190132846).cljs$core$IFn$_invoke$arity$1(datamap);
var vec__8360 = cljs.core.js__GT_clj.call(null,projection.call(null,[longitude,latitude]));
var lon = cljs.core.nth.call(null,vec__8360,(0),null);
var lat = cljs.core.nth.call(null,vec__8360,(1),null);
return cljs.core.merge.call(null,datamap,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d3lat","d3lat",-310705877),lon,new cljs.core.Keyword(null,"d3lon","d3lon",-1357422908),lat], null));
});})(width,height,projection,path))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (width,height,projection,path,getlatlon){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg#nycmap","svg#nycmap",1055029956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(height),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(width),cljs.core.str("px")].join('')], null)], null)], null);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (width,height,projection,path,getlatlon){
return (function (this$){
var vec__8361 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__8361,(0),null);
var countdata__$1 = cljs.core.nth.call(null,vec__8361,(1),null);
var countdata_updated = cljs.core.map.call(null,getlatlon,countdata__$1);
var pointdata = cljs.core.clj__GT_js.call(null,countdata_updated);
var radius = d3.scale.sqrt().domain([(0),(5)]).range([(0),(10)]);
var svg = d3.select("#nycmap");
console.log(pointdata);

d3.json("/static/jsondata/nyc.json",((function (vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (error,json){
return svg.append("g").attr("id","boroughs").selectAll(".state").data(json.features).enter().append("path").attr("class",((function (vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return [cljs.core.str("borough "),cljs.core.str(d.properties.borough)].join('');
});})(vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("d",path);
});})(vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
);

svg.append("g").attr("id","circle").selectAll("circle").data(pointdata).enter().append("circle").attr("cx",((function (vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return d.d3lat;
});})(vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("cy",((function (vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return d.d3lon;
});})(vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("r",((function (vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d.size);
});})(vec__8361,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("class","bubble");

return svg.append("g").attr("class","legend").attr("transform",[cljs.core.str("translate("),cljs.core.str((width - (50))),cljs.core.str(","),cljs.core.str((height - (20))),cljs.core.str(")")].join(''));
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (width,height,projection,path,getlatlon){
return (function (this$){
var vec__8362 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__8362,(0),null);
var countdata__$1 = cljs.core.nth.call(null,vec__8362,(1),null);
var pointdata = cljs.core.clj__GT_js.call(null,countdata__$1);
var maxradius = (function (){var maxrad = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (vec__8362,_,countdata__$1,pointdata,width,height,projection,path,getlatlon){
return (function (p1__8356_SHARP_){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__8356_SHARP_);
});})(vec__8362,_,countdata__$1,pointdata,width,height,projection,path,getlatlon))
,countdata__$1));
if(cljs.core.seq_QMARK_.call(null,maxrad)){
return cljs.core.first.call(null,maxrad);
} else {
return maxrad;
}
})();
var radius = d3.scale.sqrt().domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),maxradius], null))).range([(0),(20)]);
var legend_data = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(maxradius / (4)),maxradius], null));
var svg = d3.select("#nycmap");
d3.selectAll("circle").data(pointdata).attr("r",((function (vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d.size);
});})(vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon))
);

d3.selectAll(".legend").selectAll("text").remove();

d3.selectAll(".legend").selectAll("g").data(legend_data).enter().append("circle").attr("cy",((function (vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon){
return (function (d){
return (- radius.call(null,d));
});})(vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon))
).attr("r",((function (vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d);
});})(vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon))
);

return d3.selectAll(".legend").selectAll("g").data(legend_data).enter().append("text").attr("y",((function (vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon){
return (function (d){
return ((-2) * radius.call(null,d));
});})(vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon))
).attr("dy","1.3em").text(((function (vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon){
return (function (d){
return d3.format("0.01s").call(null,d);
});})(vec__8362,_,countdata__$1,pointdata,maxradius,radius,legend_data,svg,width,height,projection,path,getlatlon))
);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"nyc-d3map-inner"], null));
});
drugsfromdirt.views.USAmap_inner = (function drugsfromdirt$views$USAmap_inner(countdata){
var width = (750);
var height = (500);
var projection = d3.geo.albersUsa().scale((1000)).translate([(width / (2)),(height / (2))]);
var path = d3.geo.path().projection(projection);
var getlatlon = ((function (width,height,projection,path){
return (function (datamap){
var latitude = new cljs.core.Keyword(null,"Latitude","Latitude",-1084128459).cljs$core$IFn$_invoke$arity$1(datamap);
var longitude = new cljs.core.Keyword(null,"Longitude","Longitude",-190132846).cljs$core$IFn$_invoke$arity$1(datamap);
var vec__8367 = cljs.core.js__GT_clj.call(null,projection.call(null,[longitude,latitude]));
var lon = cljs.core.nth.call(null,vec__8367,(0),null);
var lat = cljs.core.nth.call(null,vec__8367,(1),null);
return cljs.core.merge.call(null,datamap,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d3lat","d3lat",-310705877),lon,new cljs.core.Keyword(null,"d3lon","d3lon",-1357422908),lat], null));
});})(width,height,projection,path))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (width,height,projection,path,getlatlon){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(height),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(width),cljs.core.str("px")].join('')], null)], null)], null);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (width,height,projection,path,getlatlon){
return (function (this$){
var vec__8368 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__8368,(0),null);
var countdata__$1 = cljs.core.nth.call(null,vec__8368,(1),null);
var countdata_updated = cljs.core.map.call(null,getlatlon,countdata__$1);
var pointdata = cljs.core.clj__GT_js.call(null,countdata_updated);
var radius = d3.scale.sqrt().domain([(0),(5)]).range([(0),(10)]);
var svg = d3.select("svg");
return d3.json("/static/jsondata/us-10m.json",((function (vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (error,json){
svg.insert("path",".graticule").datum(topojson.feature(json,json.objects.land)).attr("class","land").attr("d",path);

svg.insert("path",".graticule").datum(topojson.mesh(json,json.objects.land,((function (vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (a,b){
return cljs.core.not_EQ_.call(null,a,b);
});})(vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
)).attr("class","state-boundary").attr("d",path);

svg.append("g").attr("id","circle").selectAll("circle").data(pointdata).enter().append("circle").attr("cx",((function (vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return d.d3lat;
});})(vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("cy",((function (vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return d.d3lon;
});})(vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("r",((function (vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d.size);
});})(vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("class","bubble");

return svg.append("g").attr("class","legend").attr("transform",[cljs.core.str("translate("),cljs.core.str((width - (50))),cljs.core.str(","),cljs.core.str((height - (20))),cljs.core.str(")")].join(''));
});})(vec__8368,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (width,height,projection,path,getlatlon){
return (function (this$){
var vec__8369 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__8369,(0),null);
var countdata__$1 = cljs.core.nth.call(null,vec__8369,(1),null);
var pointdata = cljs.core.clj__GT_js.call(null,countdata__$1);
var maxradius = (function (){var maxrad = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (vec__8369,_,countdata__$1,pointdata,width,height,projection,path,getlatlon){
return (function (p1__8363_SHARP_){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__8363_SHARP_);
});})(vec__8369,_,countdata__$1,pointdata,width,height,projection,path,getlatlon))
,countdata__$1));
if(cljs.core.seq_QMARK_.call(null,maxrad)){
return cljs.core.first.call(null,maxrad);
} else {
return maxrad;
}
})();
var radius = d3.scale.sqrt().domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),maxradius], null))).range([(0),(20)]);
var legend_data = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(maxradius / (4)),maxradius], null));
console.log(pointdata);

d3.selectAll("circle").data(pointdata).attr("r",((function (vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d.size);
});})(vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
);

d3.selectAll(".legend").selectAll("text").remove();

d3.selectAll(".legend").selectAll("g").data(legend_data).enter().append("circle").attr("cy",((function (vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return (- radius.call(null,d));
});})(vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
).attr("r",((function (vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d);
});})(vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
);

return d3.selectAll(".legend").selectAll("g").data(legend_data).enter().append("text").attr("y",((function (vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return ((-2) * radius.call(null,d));
});})(vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
).attr("dy","1.3em").text(((function (vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return d3.format("0.01s").call(null,d);
});})(vec__8369,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"usa-d3map-inner"], null));
});
drugsfromdirt.views.Worldmap_inner = (function drugsfromdirt$views$Worldmap_inner(countdata){
var width = (760);
var height = (480);
var projection = d3.geo.aitoff().scale((120)).translate([(width / (2)),(height / (2))]).precision(0.1);
var path = d3.geo.path().projection(projection);
var getlatlon = ((function (width,height,projection,path){
return (function (datamap){
var latitude = new cljs.core.Keyword(null,"Latitude","Latitude",-1084128459).cljs$core$IFn$_invoke$arity$1(datamap);
var longitude = new cljs.core.Keyword(null,"Longitude","Longitude",-190132846).cljs$core$IFn$_invoke$arity$1(datamap);
var vec__8374 = cljs.core.js__GT_clj.call(null,projection.call(null,[longitude,latitude]));
var lon = cljs.core.nth.call(null,vec__8374,(0),null);
var lat = cljs.core.nth.call(null,vec__8374,(1),null);
return cljs.core.merge.call(null,datamap,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d3lat","d3lat",-310705877),lon,new cljs.core.Keyword(null,"d3lon","d3lon",-1357422908),lat], null));
});})(width,height,projection,path))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (width,height,projection,path,getlatlon){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(height),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(width),cljs.core.str("px")].join('')], null)], null)], null);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (width,height,projection,path,getlatlon){
return (function (this$){
var vec__8375 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__8375,(0),null);
var countdata__$1 = cljs.core.nth.call(null,vec__8375,(1),null);
var countdata_updated = cljs.core.map.call(null,getlatlon,countdata__$1);
var pointdata = cljs.core.clj__GT_js.call(null,countdata_updated);
var radius = d3.scale.sqrt().domain([(0),(5)]).range([(0),(10)]);
var svg = d3.select("svg");
return d3.json("/static/jsondata/world-50m.json",((function (vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (error,json){
svg.append("path").datum(d3.geo.graticule()).attr("class","graticule").attr("d",path);

svg.insert("path").datum(topojson.feature(json,json.objects.land)).attr("class","land").attr("d",path);

svg.append("defs").append("path").datum(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["type","Sphere"], null))).attr("id","sphere").attr("d",path);

svg.append("use").attr("class","stroke").attr("xlink:href","#sphere");

svg.append("g").attr("id","circle").selectAll("circle").data(pointdata).enter().append("svg:circle").attr("cx",((function (vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return d.d3lat;
});})(vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("cy",((function (vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return d.d3lon;
});})(vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("r",((function (vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d.size);
});})(vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
).attr("class","bubble");

return svg.append("g").attr("class","legend").attr("transform",[cljs.core.str("translate("),cljs.core.str((width - (50))),cljs.core.str(","),cljs.core.str((height - (20))),cljs.core.str(")")].join(''));
});})(vec__8375,_,countdata__$1,countdata_updated,pointdata,radius,svg,width,height,projection,path,getlatlon))
);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (width,height,projection,path,getlatlon){
return (function (this$){
var vec__8376 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__8376,(0),null);
var countdata__$1 = cljs.core.nth.call(null,vec__8376,(1),null);
var pointdata = cljs.core.clj__GT_js.call(null,countdata__$1);
var maxradius = (function (){var maxrad = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (vec__8376,_,countdata__$1,pointdata,width,height,projection,path,getlatlon){
return (function (p1__8370_SHARP_){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p1__8370_SHARP_);
});})(vec__8376,_,countdata__$1,pointdata,width,height,projection,path,getlatlon))
,countdata__$1));
if(cljs.core.seq_QMARK_.call(null,maxrad)){
return cljs.core.first.call(null,maxrad);
} else {
return maxrad;
}
})();
var radius = d3.scale.sqrt().domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),maxradius], null))).range([(0),(20)]);
var legend_data = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(maxradius / (4)),maxradius], null));
console.log(pointdata);

d3.selectAll("circle").data(pointdata).attr("r",((function (vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d.size);
});})(vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
);

d3.selectAll(".legend").selectAll("text").remove();

d3.selectAll(".legend").selectAll("g").data(legend_data).enter().append("circle").attr("cy",((function (vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return (- radius.call(null,d));
});})(vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
).attr("r",((function (vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return radius.call(null,d);
});})(vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
);

return d3.selectAll(".legend").selectAll("g").data(legend_data).enter().append("text").attr("y",((function (vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return ((-2) * radius.call(null,d));
});})(vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
).attr("dy","1.3em").text(((function (vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon){
return (function (d){
return d3.format("0.01s").call(null,d);
});})(vec__8376,_,countdata__$1,pointdata,maxradius,radius,legend_data,width,height,projection,path,getlatlon))
);
});})(width,height,projection,path,getlatlon))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"world-d3map-inner"], null));
});
drugsfromdirt.views.NYCmap_outer = (function drugsfromdirt$views$NYCmap_outer(){
var countdata = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdata","countdata",-1636188967)], null));
var activemol = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activemolecule","activemolecule",-891089571)], null));
return ((function (countdata,activemol){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary","div.panel.panel-primary",-1076833638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"NYC Map"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.molecule_select_box], null),(cljs.core.truth_(cljs.core.deref.call(null,activemol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str("Activemol: "),cljs.core.str(cljs.core.deref.call(null,activemol))].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Soil samples from ~300 parks were collected with the help of the\n             New York City Parks Department, the Natural Areas Conservancy and\n             the Rockefeller Summer Outreach Program."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"DNA was isolated from the soil and we used PCR to amplify\n             fragments conserved in the biosynthesis of small molecule compounds.\n             Use the box to explroe the relative abundance of each molecule type as\n              a fraction of the total reads observed for each sample. For more details see the\n              methods."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.NYCmap_inner,cljs.core.deref.call(null,countdata)], null)], null)], null)], null)], null);
});
;})(countdata,activemol))
});
drugsfromdirt.views.USAmap_outer = (function drugsfromdirt$views$USAmap_outer(){
var countdata = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdata","countdata",-1636188967)], null));
var activemol = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activemolecule","activemolecule",-891089571)], null));
return ((function (countdata,activemol){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary","div.panel.panel-primary",-1076833638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"USA Map"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.molecule_select_box], null),(cljs.core.truth_(cljs.core.deref.call(null,activemol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str("Activemol: "),cljs.core.str(cljs.core.deref.call(null,activemol))].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Soil samples from ~300 parks were collected with the help of the\n             New York City Parks Department, the Natural Areas Conservancy and\n             the Rockefeller Summer Outreach Program."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"DNA was isolated from the soil and we used PCR to amplify\n             fragments conserved in the biosynthesis of small molecule compounds.\n             Use the box to explroe the relative abundance of each molecule type as\n              a fraction of the total reads observed for each sample. For more details see the\n              methods."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.USAmap_inner,cljs.core.deref.call(null,countdata)], null)], null)], null)], null)], null);
});
;})(countdata,activemol))
});
drugsfromdirt.views.Worldmap_outer = (function drugsfromdirt$views$Worldmap_outer(){
var countdata = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdata","countdata",-1636188967)], null));
var activemol = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activemolecule","activemolecule",-891089571)], null));
return ((function (countdata,activemol){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-primary","div.panel.panel-primary",-1076833638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"World Map"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.molecule_select_box], null),(cljs.core.truth_(cljs.core.deref.call(null,activemol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str("Activemol: "),cljs.core.str(cljs.core.deref.call(null,activemol))].join('')], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Soil samples from ~300 parks were collected with the help of the\n             New York City Parks Department, the Natural Areas Conservancy and\n             the Rockefeller Summer Outreach Program."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"DNA was isolated from the soil and we used PCR to amplify\n             fragments conserved in the biosynthesis of small molecule compounds.\n             Use the box to explore the relative abundance of each molecule type as\n              a fraction of the total reads observed for each sample. For more details see the\n              methods."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.Worldmap_inner,cljs.core.deref.call(null,countdata)], null)], null)], null)], null)], null);
});
;})(countdata,activemol))
});
drugsfromdirt.views.map_chooser = (function drugsfromdirt$views$map_chooser(){
var activemap = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activemap","activemap",-1367216195)], null));
return ((function (activemap){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Explore A Map"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4.col-md-offset-4","div.col-md-4.col-md-offset-4",-1210252119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-warning","button.btn.btn-warning",1403209115),"Choose A Map"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (activemap){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-map","update-map",1098138072),"NYC"], null));
});})(activemap))
], null),"NYC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (activemap){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-map","update-map",1098138072),"USA"], null));
});})(activemap))
], null),"USA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (activemap){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-map","update-map",1098138072),"World"], null));
});})(activemap))
], null),"World"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),(function (){var pred__8380 = cljs.core._EQ_;
var expr__8381 = cljs.core.deref.call(null,activemap);
if(cljs.core.truth_(pred__8380.call(null,"NYC",expr__8381))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.NYCmap_outer], null);
} else {
if(cljs.core.truth_(pred__8380.call(null,"USA",expr__8381))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.USAmap_outer], null);
} else {
if(cljs.core.truth_(pred__8380.call(null,"World",expr__8381))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.Worldmap_outer], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.views.NYCmap_outer], null);
}
}
}
})()], null);
});
;})(activemap))
});

//# sourceMappingURL=views.js.map?rel=1451600278778