// Compiled by ClojureScript 1.7.170 {}
goog.provide('drugsfromdirt.sampleviewer');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('cljsjs.d3');
goog.require('drugsfromdirt.handlers');
goog.require('drugsfromdirt.subs');
goog.require('drugsfromdirt.views');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
drugsfromdirt.sampleviewer.on_js_reload = (function drugsfromdirt$sampleviewer$on_js_reload(){
return null;
});
drugsfromdirt.sampleviewer.sample_select_box = (function drugsfromdirt$sampleviewer$sample_select_box(){

var samples = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"samples","samples",635504833)], null));
return ((function (samples){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (samples){
return (function (p1__7204_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-sample","update-active-sample",-234603047),p1__7204_SHARP_.target.value], null));
});})(samples))
], null),(function (){var iter__5440__auto__ = ((function (samples){
return (function drugsfromdirt$sampleviewer$sample_select_box_$_iter__7209(s__7210){
return (new cljs.core.LazySeq(null,((function (samples){
return (function (){
var s__7210__$1 = s__7210;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7210__$1);
if(temp__4425__auto__){
var s__7210__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7210__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__7210__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__7212 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__7211 = (0);
while(true){
if((i__7211 < size__5439__auto__)){
var s = cljs.core._nth.call(null,c__5438__auto__,i__7211);
cljs.core.chunk_append.call(null,b__7212,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,s)], null),cljs.core.name.call(null,s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)));

var G__7213 = (i__7211 + (1));
i__7211 = G__7213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7212),drugsfromdirt$sampleviewer$sample_select_box_$_iter__7209.call(null,cljs.core.chunk_rest.call(null,s__7210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7212),null);
}
} else {
var s = cljs.core.first.call(null,s__7210__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,s)], null),cljs.core.name.call(null,s)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null)),drugsfromdirt$sampleviewer$sample_select_box_$_iter__7209.call(null,cljs.core.rest.call(null,s__7210__$2)));
}
} else {
return null;
}
break;
}
});})(samples))
,null,null));
});})(samples))
;
return iter__5440__auto__.call(null,cljs.core.deref.call(null,samples));
})()], null);
});
;})(samples))
});
drugsfromdirt.sampleviewer.topN = (function drugsfromdirt$sampleviewer$topN(activedata,n){
var width = (800);
var height = (300);
var bar_chart_height = (200);
var countdata = new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(activedata);
var tops = cljs.core.take.call(null,n,cljs.core.sort.call(null,((function (width,height,bar_chart_height,countdata){
return (function (p__7230,p__7231){
var vec__7232 = p__7230;
var _ = cljs.core.nth.call(null,vec__7232,(0),null);
var v1 = cljs.core.nth.call(null,vec__7232,(1),null);
var vec__7233 = p__7231;
var ___$1 = cljs.core.nth.call(null,vec__7233,(0),null);
var v2 = cljs.core.nth.call(null,vec__7233,(1),null);
return (v1 > v2);
});})(width,height,bar_chart_height,countdata))
,countdata));
var maxval = cljs.core.apply.call(null,cljs.core.max,cljs.core.vals.call(null,tops));
var scale = d3.scale.linear().domain([(0),maxval]).range([(0),bar_chart_height]);
cljs.core.println.call(null,[cljs.core.str("maxval: "),cljs.core.str(maxval)].join(''));

cljs.core.println.call(null,[cljs.core.str("scaled maxval: "),cljs.core.str(cljs.core.js__GT_clj.call(null,scale.call(null,cljs.core.clj__GT_js.call(null,maxval))))].join(''));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Top Cluster Families Observed in This Sample"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),(function (){var iter__5440__auto__ = ((function (width,height,bar_chart_height,countdata,tops,maxval,scale){
return (function drugsfromdirt$sampleviewer$topN_$_iter__7234(s__7235){
return (new cljs.core.LazySeq(null,((function (width,height,bar_chart_height,countdata,tops,maxval,scale){
return (function (){
var s__7235__$1 = s__7235;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7235__$1);
if(temp__4425__auto__){
var s__7235__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7235__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__7235__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__7237 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__7236 = (0);
while(true){
if((i__7236 < size__5439__auto__)){
var vec__7242 = cljs.core._nth.call(null,c__5438__auto__,i__7236);
var idx = cljs.core.nth.call(null,vec__7242,(0),null);
var vec__7243 = cljs.core.nth.call(null,vec__7242,(1),null);
var k = cljs.core.nth.call(null,vec__7243,(0),null);
var v = cljs.core.nth.call(null,vec__7243,(1),null);
cljs.core.chunk_append.call(null,b__7237,(function (){var xval = ((21) * idx);
var scaled_val = cljs.core.js__GT_clj.call(null,scale.call(null,cljs.core.clj__GT_js.call(null,v)));
var yval = (bar_chart_height - scaled_val);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),xval,new cljs.core.Keyword(null,"y","y",-1757859776),yval,new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),scaled_val], null),[cljs.core.str(v)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(xval),cljs.core.str(","),cljs.core.str((220)),cljs.core.str(") rotate(55)")].join('')], null),cljs.core.name.call(null,k)], null),(((scaled_val > (50)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((xval + (7))),cljs.core.str(","),cljs.core.str((170)),cljs.core.str(") rotate(90)")].join('')], null),v], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})());

var G__7246 = (i__7236 + (1));
i__7236 = G__7246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7237),drugsfromdirt$sampleviewer$topN_$_iter__7234.call(null,cljs.core.chunk_rest.call(null,s__7235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7237),null);
}
} else {
var vec__7244 = cljs.core.first.call(null,s__7235__$2);
var idx = cljs.core.nth.call(null,vec__7244,(0),null);
var vec__7245 = cljs.core.nth.call(null,vec__7244,(1),null);
var k = cljs.core.nth.call(null,vec__7245,(0),null);
var v = cljs.core.nth.call(null,vec__7245,(1),null);
return cljs.core.cons.call(null,(function (){var xval = ((21) * idx);
var scaled_val = cljs.core.js__GT_clj.call(null,scale.call(null,cljs.core.clj__GT_js.call(null,v)));
var yval = (bar_chart_height - scaled_val);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),xval,new cljs.core.Keyword(null,"y","y",-1757859776),yval,new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),scaled_val], null),[cljs.core.str(v)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(xval),cljs.core.str(","),cljs.core.str((220)),cljs.core.str(") rotate(55)")].join('')], null),cljs.core.name.call(null,k)], null),(((scaled_val > (50)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((xval + (7))),cljs.core.str(","),cljs.core.str((170)),cljs.core.str(") rotate(90)")].join('')], null),v], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null));
})(),drugsfromdirt$sampleviewer$topN_$_iter__7234.call(null,cljs.core.rest.call(null,s__7235__$2)));
}
} else {
return null;
}
break;
}
});})(width,height,bar_chart_height,countdata,tops,maxval,scale))
,null,null));
});})(width,height,bar_chart_height,countdata,tops,maxval,scale))
;
return iter__5440__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,tops));
})()], null)], null);
});
drugsfromdirt.sampleviewer.basic_stats = (function drugsfromdirt$sampleviewer$basic_stats(){
var activesample = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activesample","activesample",1084341898)], null));
var countdata = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdata","countdata",-1636188967)], null));
var activedata = cljs.core.first.call(null,cljs.core.filter.call(null,((function (activesample,countdata){
return (function (p1__7247_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,activesample),new cljs.core.Keyword(null,"samplename","samplename",195670659).cljs$core$IFn$_invoke$arity$1(p1__7247_SHARP_));
});})(activesample,countdata))
,cljs.core.deref.call(null,countdata)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.deref.call(null,activesample)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Total Reads: ",new cljs.core.Keyword(null,"totalreads","totalreads",-1931531925).cljs$core$IFn$_invoke$arity$1(activedata)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Latitude: ",new cljs.core.Keyword(null,"Latitude","Latitude",-1084128459).cljs$core$IFn$_invoke$arity$1(activedata)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Longitude: ",new cljs.core.Keyword(null,"Longitude","Longitude",-190132846).cljs$core$IFn$_invoke$arity$1(activedata)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.sampleviewer.topN,activedata,(20)], null)], null);
});
drugsfromdirt.sampleviewer.sampleviewer = (function drugsfromdirt$sampleviewer$sampleviewer(){
var activesample = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activesample","activesample",1084341898)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Choose a Sample"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.sampleviewer.sample_select_box], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),(cljs.core.truth_(cljs.core.deref.call(null,activesample))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.sampleviewer.basic_stats], null):null)], null)], null)], null);
});
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-countdata","initialize-countdata",1439013195)], null));

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drugsfromdirt.sampleviewer.sampleviewer], null),document.getElementById("app"));

//# sourceMappingURL=sampleviewer.js.map?rel=1451600276836