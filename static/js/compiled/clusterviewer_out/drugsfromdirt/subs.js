// Compiled by ClojureScript 1.7.170 {}
goog.provide('drugsfromdirt.subs');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"activemap","activemap",-1367216195),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"activemap","activemap",-1367216195).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"activemolecule","activemolecule",-891089571),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"activemolecule","activemolecule",-891089571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"activesample","activesample",1084341898),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"activesample","activesample",1084341898).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"top-level-navigation","top-level-navigation",596842274),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"top-level-navigation","top-level-navigation",596842274).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"countdata","countdata",-1636188967),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"molecules","molecules",1746938238),(function (db,_){
var countdata = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
var moleculenames = reagent.ratom.make_reaction.call(null,((function (countdata){
return (function (){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.deref.call(null,countdata))));
});})(countdata))
);
var reducingfn = ((function (countdata,moleculenames){
return (function (mol){
return cljs.core.PersistentArrayMap.fromArray([mol,cljs.core.reduce.call(null,((function (countdata,moleculenames){
return (function (a,b){
return (a + mol.call(null,new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(b)));
});})(countdata,moleculenames))
,(0),cljs.core.deref.call(null,countdata))], true, false);
});})(countdata,moleculenames))
;
var molcounts = reagent.ratom.make_reaction.call(null,((function (countdata,moleculenames,reducingfn){
return (function (){
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,reducingfn,cljs.core.deref.call(null,moleculenames)));
});})(countdata,moleculenames,reducingfn))
);
var sorted_filtered = reagent.ratom.make_reaction.call(null,((function (countdata,moleculenames,reducingfn,molcounts){
return (function (){
return cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (countdata,moleculenames,reducingfn,molcounts){
return (function (p1__8385_SHARP_){
return (typeof cljs.core.val.call(null,p1__8385_SHARP_) === 'number') && ((cljs.core.val.call(null,p1__8385_SHARP_) > (0)));
});})(countdata,moleculenames,reducingfn,molcounts))
,cljs.core.deref.call(null,molcounts)))));
});})(countdata,moleculenames,reducingfn,molcounts))
);
cljs.core.println.call(null,[cljs.core.str("molcounts: "),cljs.core.str(cljs.core.deref.call(null,molcounts))].join(''));

cljs.core.println.call(null,[cljs.core.str("Sorted-filtered: "),cljs.core.str(cljs.core.deref.call(null,sorted_filtered))].join(''));

return sorted_filtered;
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"samples","samples",635504833),(function (db,_){
var countdata = reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"countdata","countdata",-1636188967).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
var samplenames = reagent.ratom.make_reaction.call(null,((function (countdata){
return (function (){
return cljs.core.map.call(null,((function (countdata){
return (function (p1__8386_SHARP_){
return new cljs.core.Keyword(null,"samplename","samplename",195670659).cljs$core$IFn$_invoke$arity$1(p1__8386_SHARP_);
});})(countdata))
,cljs.core.deref.call(null,countdata));
});})(countdata))
);
return samplenames;
}));

//# sourceMappingURL=subs.js.map?rel=1451600278801