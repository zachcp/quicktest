// Compiled by ClojureScript 1.7.170 {}
goog.provide('drugsfromdirt.handlers');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('drugsfromdirt.db');
drugsfromdirt.handlers.calculate_countdata = (function drugsfromdirt$handlers$calculate_countdata(sample,molecule){

var molnum = cljs.core.get_in.call(null,sample,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdata","countdata",-1636188967),molecule], null));
var sampletotal = new cljs.core.Keyword(null,"totalreads","totalreads",-1931531925).cljs$core$IFn$_invoke$arity$1(sample);
return cljs.core.assoc.call(null,sample,new cljs.core.Keyword(null,"size","size",1098693007),(molnum / sampletotal));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (db,_){
return drugsfromdirt.db.dbstart;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-countdata","initialize-countdata",1439013195),(function (db,_){
ajax.core.GET.call(null,"/static/jsondata/counts.json",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__8331_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-countdata","process-countdata",858854128),p1__8331_SHARP_], null));
})], null));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"process-countdata","process-countdata",858854128),(function (db,p__8333){
var vec__8334 = p__8333;
var _ = cljs.core.nth.call(null,vec__8334,(0),null);
var resp = cljs.core.nth.call(null,vec__8334,(1),null);
var counts = cljs.core.js__GT_clj.call(null,resp,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var counts_with_size = cljs.core.map.call(null,((function (counts,vec__8334,_,resp){
return (function (p1__8332_SHARP_){
return cljs.core.assoc.call(null,p1__8332_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007),(5));
});})(counts,vec__8334,_,resp))
,counts);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"countdata","countdata",-1636188967),counts_with_size);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-active","update-active",1918193808),(function (db,p__8336){
var vec__8337 = p__8336;
var _ = cljs.core.nth.call(null,vec__8337,(0),null);
var molvalue = cljs.core.nth.call(null,vec__8337,(1),null);
var molkey = cljs.core.keyword.call(null,molvalue);
var countdata = new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(db);
var newvalues = cljs.core.map.call(null,((function (molkey,countdata,vec__8337,_,molvalue){
return (function (p1__8335_SHARP_){
return drugsfromdirt.handlers.calculate_countdata.call(null,p1__8335_SHARP_,molkey);
});})(molkey,countdata,vec__8337,_,molvalue))
,countdata);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"activemolecule","activemolecule",-891089571),molvalue),new cljs.core.Keyword(null,"countdata","countdata",-1636188967),newvalues);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-active-sample","update-active-sample",-234603047),(function (db,p__8338){
var vec__8339 = p__8338;
var _ = cljs.core.nth.call(null,vec__8339,(0),null);
var samplevalue = cljs.core.nth.call(null,vec__8339,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"activesample","activesample",1084341898),samplevalue);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-map","update-map",1098138072),(function (db,p__8340){
var vec__8341 = p__8340;
var _ = cljs.core.nth.call(null,vec__8341,(0),null);
var newvalue = cljs.core.nth.call(null,vec__8341,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"activemap","activemap",-1367216195),newvalue);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-top-level-navigation","update-top-level-navigation",2003329278),(function (db,p__8342){
var vec__8343 = p__8342;
var _ = cljs.core.nth.call(null,vec__8343,(0),null);
var value = cljs.core.nth.call(null,vec__8343,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"top-level-navigation","top-level-navigation",596842274),value);
}));

//# sourceMappingURL=handlers.js.map?rel=1451600278677