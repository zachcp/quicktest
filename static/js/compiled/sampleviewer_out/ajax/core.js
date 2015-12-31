// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k6328,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__6330 = (((k6328 instanceof cljs.core.Keyword))?k6328.fqn:null);
switch (G__6330) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6328,else__5285__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__6331,opts){
var self__ = this;
var map__6332 = p__6331;
var map__6332__$1 = ((((!((map__6332 == null)))?((((map__6332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6332):map__6332);
var request__$1 = cljs.core.get.call(null,map__6332__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__6334 = this;
var map__6334__$1 = ((((!((map__6334 == null)))?((((map__6334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6334):map__6334);
var request__$2 = cljs.core.get.call(null,map__6334__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__6336,xhrio){
var self__ = this;
var map__6337 = p__6336;
var map__6337__$1 = ((((!((map__6337 == null)))?((((map__6337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6337):map__6337);
var response__$1 = cljs.core.get.call(null,map__6337__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__6339 = this;
var map__6339__$1 = ((((!((map__6339 == null)))?((((map__6339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6339):map__6339);
var response__$2 = cljs.core.get.call(null,map__6339__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6327){
var self__ = this;
var G__6327__$1 = this;
return (new cljs.core.RecordIter((0),G__6327__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap.call(null,this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map.call(null,this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__6327){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__6341 = cljs.core.keyword_identical_QMARK_;
var expr__6342 = k__5290__auto__;
if(cljs.core.truth_(pred__6341.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__6342))){
return (new ajax.core.StandardInterceptor(G__6327,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6341.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__6342))){
return (new ajax.core.StandardInterceptor(self__.name,G__6327,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6341.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__6342))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__6327,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__6327),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__6327){
var self__ = this;
var this__5281__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__6327,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5288__auto__)){
return cljs.core._assoc.call(null,this__5287__auto____$1,cljs.core._nth.call(null,entry__5288__auto__,(0)),cljs.core._nth.call(null,entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__6329){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__6329),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__6329),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__6329),null,cljs.core.dissoc.call(null,G__6329,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__4668__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__6345,xhrio){
var map__6348 = p__6345;
var map__6348__$1 = ((((!((map__6348 == null)))?((((map__6348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6348):map__6348);
var description = cljs.core.get.call(null,map__6348__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6354 = arguments.length;
var i__5727__auto___6355 = (0);
while(true){
if((i__5727__auto___6355 < len__5726__auto___6354)){
args__5733__auto__.push((arguments[i__5727__auto___6355]));

var G__6356 = (i__5727__auto___6355 + (1));
i__5727__auto___6355 = G__6356;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq6350){
var G__6351 = cljs.core.first.call(null,seq6350);
var seq6350__$1 = cljs.core.next.call(null,seq6350);
var G__6352 = cljs.core.first.call(null,seq6350__$1);
var seq6350__$2 = cljs.core.next.call(null,seq6350__$1);
var G__6353 = cljs.core.first.call(null,seq6350__$2);
var seq6350__$3 = cljs.core.next.call(null,seq6350__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__6351,G__6352,G__6353,seq6350__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__6357_SHARP_){
return [cljs.core.str(p1__6357_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k6360,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__6362 = (((k6360 instanceof cljs.core.Keyword))?k6360.fqn:null);
switch (G__6362) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k6360,else__5285__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__6363,request){
var self__ = this;
var map__6364 = p__6363;
var map__6364__$1 = ((((!((map__6364 == null)))?((((map__6364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6364):map__6364);
var content_type__$1 = cljs.core.get.call(null,map__6364__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__6366 = this;
var map__6366__$1 = ((((!((map__6366 == null)))?((((map__6366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6366):map__6366);
var content_type__$2 = cljs.core.get.call(null,map__6366__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__6366,map__6366__$1,content_type__$2,map__6364,map__6364__$1,content_type__$1){
return (function (p1__6358_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__4668__auto__ = p1__6358_SHARP_;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__6366,map__6366__$1,content_type__$2,map__6364,map__6364__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__6368,xhrio){
var self__ = this;
var map__6369 = p__6368;
var map__6369__$1 = ((((!((map__6369 == null)))?((((map__6369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6369):map__6369);
var format = map__6369__$1;
var read__$1 = cljs.core.get.call(null,map__6369__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__6371 = this;
var map__6371__$1 = ((((!((map__6371 == null)))?((((map__6371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6371):map__6371);
var format__$1 = map__6371__$1;
var read__$2 = cljs.core.get.call(null,map__6371__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__6374 = status;
switch (G__6374) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e6375){if((e6375 instanceof Object)){
var e = e6375;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e6375;

}
}
}
}catch (e6373){if((e6373 instanceof Object)){
var e = e6373;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e6373;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6359){
var self__ = this;
var G__6359__$1 = this;
return (new cljs.core.RecordIter((0),G__6359__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap.call(null,this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map.call(null,this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__6359){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__6376 = cljs.core.keyword_identical_QMARK_;
var expr__6377 = k__5290__auto__;
if(cljs.core.truth_(pred__6376.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__6377))){
return (new ajax.core.ResponseFormat(G__6359,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6376.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__6377))){
return (new ajax.core.ResponseFormat(self__.read,G__6359,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6376.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__6377))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__6359,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__6359),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__6359){
var self__ = this;
var this__5281__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__6359,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5288__auto__)){
return cljs.core._assoc.call(null,this__5287__auto____$1,cljs.core._nth.call(null,entry__5288__auto__,(0)),cljs.core._nth.call(null,entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__6361){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__6361),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__6361),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__6361),null,cljs.core.dissoc.call(null,G__6361,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_old = (function ajax$core$params_to_str_old(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.param_to_str;
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args6381 = [];
var len__5726__auto___6384 = arguments.length;
var i__5727__auto___6385 = (0);
while(true){
if((i__5727__auto___6385 < len__5726__auto___6384)){
args6381.push((arguments[i__5727__auto___6385]));

var G__6386 = (i__5727__auto___6385 + (1));
i__5727__auto___6385 = G__6386;
continue;
} else {
}
break;
}

var G__6383 = args6381.length;
switch (G__6383) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6381.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args6388 = [];
var len__5726__auto___6395 = arguments.length;
var i__5727__auto___6396 = (0);
while(true){
if((i__5727__auto___6396 < len__5726__auto___6395)){
args6388.push((arguments[i__5727__auto___6396]));

var G__6397 = (i__5727__auto___6396 + (1));
i__5727__auto___6396 = G__6397;
continue;
} else {
}
break;
}

var G__6390 = args6388.length;
switch (G__6390) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6388.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__6391){
var vec__6392 = p__6391;
var key = cljs.core.nth.call(null,vec__6392,(0),null);
var value = cljs.core.nth.call(null,vec__6392,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__6393){
var vec__6394 = p__6393;
var key = cljs.core.nth.call(null,vec__6394,(0),null);
var value = cljs.core.nth.call(null,vec__6394,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__6401){
var vec__6402 = p__6401;
var k = cljs.core.nth.call(null,vec__6402,(0),null);
var v = cljs.core.nth.call(null,vec__6402,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k6405,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__6407 = k6405;
switch (G__6407) {
default:
return cljs.core.get.call(null,self__.__extmap,k6405,else__5285__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6408){
var self__ = this;
var map__6409 = p__6408;
var map__6409__$1 = ((((!((map__6409 == null)))?((((map__6409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6409):map__6409);
var request = map__6409__$1;
var method = cljs.core.get.call(null,map__6409__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),((function (___$1,map__6409,map__6409__$1,request,method){
return (function (p1__6403_SHARP_){
return ajax.core.uri_with_params.call(null,p1__6403_SHARP_,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request));
});})(___$1,map__6409,map__6409__$1,request,method))
));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#ajax.core.ProcessGet{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6404){
var self__ = this;
var G__6404__$1 = this;
return (new cljs.core.RecordIter((0),G__6404__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap.call(null,this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map.call(null,this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__6404){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__6411 = cljs.core.keyword_identical_QMARK_;
var expr__6412 = k__5290__auto__;
return (new ajax.core.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__6404),null));
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__6404){
var self__ = this;
var this__5281__auto____$1 = this;
return (new ajax.core.ProcessGet(G__6404,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5288__auto__)){
return cljs.core._assoc.call(null,this__5287__auto____$1,cljs.core._nth.call(null,entry__5288__auto__,(0)),cljs.core._nth.call(null,entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(){
return (new ajax.core.ProcessGet(null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__6406){
return (new ajax.core.ProcessGet(null,cljs.core.dissoc.call(null,G__6406),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k6416,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__6418 = k6416;
switch (G__6418) {
default:
return cljs.core.get.call(null,self__.__extmap,k6416,else__5285__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6419){
var self__ = this;
var map__6420 = p__6419;
var map__6420__$1 = ((((!((map__6420 == null)))?((((map__6420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6420):map__6420);
var request = map__6420__$1;
var body = cljs.core.get.call(null,map__6420__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__6420__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6415){
var self__ = this;
var G__6415__$1 = this;
return (new cljs.core.RecordIter((0),G__6415__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap.call(null,this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map.call(null,this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__6415){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__6422 = cljs.core.keyword_identical_QMARK_;
var expr__6423 = k__5290__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__6415),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__6415){
var self__ = this;
var this__5281__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__6415,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5288__auto__)){
return cljs.core._assoc.call(null,this__5287__auto____$1,cljs.core._nth.call(null,entry__5288__auto__,(0)),cljs.core._nth.call(null,entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__6417){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__6417),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k6427,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__6429 = k6427;
switch (G__6429) {
default:
return cljs.core.get.call(null,self__.__extmap,k6427,else__5285__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6430){
var self__ = this;
var map__6431 = p__6430;
var map__6431__$1 = ((((!((map__6431 == null)))?((((map__6431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6431):map__6431);
var request = map__6431__$1;
var uri = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__6433 = ajax.core.get_request_format.call(null,format);
var map__6433__$1 = ((((!((map__6433 == null)))?((((map__6433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6433):map__6433);
var write = cljs.core.get.call(null,map__6433__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__6433__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4668__auto__ = headers;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6426){
var self__ = this;
var G__6426__$1 = this;
return (new cljs.core.RecordIter((0),G__6426__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap.call(null,this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map.call(null,this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__6426){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__6435 = cljs.core.keyword_identical_QMARK_;
var expr__6436 = k__5290__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__6426),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__6426){
var self__ = this;
var this__5281__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__6426,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5288__auto__)){
return cljs.core._assoc.call(null,this__5287__auto____$1,cljs.core._nth.call(null,entry__5288__auto__,(0)),cljs.core._nth.call(null,entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__6428){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__6428),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__6439){
var map__6442 = p__6439;
var map__6442__$1 = ((((!((map__6442 == null)))?((((map__6442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6442):map__6442);
var type = cljs.core.get.call(null,map__6442__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__4668__auto__ = type;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__4668__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args6444 = [];
var len__5726__auto___6447 = arguments.length;
var i__5727__auto___6448 = (0);
while(true){
if((i__5727__auto___6448 < len__5726__auto___6447)){
args6444.push((arguments[i__5727__auto___6448]));

var G__6449 = (i__5727__auto___6448 + (1));
i__5727__auto___6448 = G__6449;
continue;
} else {
}
break;
}

var G__6446 = args6444.length;
switch (G__6446) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6444.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__4668__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args6451 = [];
var len__5726__auto___6454 = arguments.length;
var i__5727__auto___6455 = (0);
while(true){
if((i__5727__auto___6455 < len__5726__auto___6454)){
args6451.push((arguments[i__5727__auto___6455]));

var G__6456 = (i__5727__auto___6455 + (1));
i__5727__auto___6455 = G__6456;
continue;
} else {
}
break;
}

var G__6453 = args6451.length;
switch (G__6453) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6451.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args6458 = [];
var len__5726__auto___6461 = arguments.length;
var i__5727__auto___6462 = (0);
while(true){
if((i__5727__auto___6462 < len__5726__auto___6461)){
args6458.push((arguments[i__5727__auto___6462]));

var G__6463 = (i__5727__auto___6462 + (1));
i__5727__auto___6462 = G__6463;
continue;
} else {
}
break;
}

var G__6460 = args6458.length;
switch (G__6460) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6458.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__4656__auto__ = prefix;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__4656__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args6465 = [];
var len__5726__auto___6468 = arguments.length;
var i__5727__auto___6469 = (0);
while(true){
if((i__5727__auto___6469 < len__5726__auto___6468)){
args6465.push((arguments[i__5727__auto___6469]));

var G__6470 = (i__5727__auto___6469 + (1));
i__5727__auto___6469 = G__6470;
continue;
} else {
}
break;
}

var G__6467 = args6465.length;
switch (G__6467) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6465.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args6472 = [];
var len__5726__auto___6478 = arguments.length;
var i__5727__auto___6479 = (0);
while(true){
if((i__5727__auto___6479 < len__5726__auto___6478)){
args6472.push((arguments[i__5727__auto___6479]));

var G__6480 = (i__5727__auto___6479 + (1));
i__5727__auto___6479 = G__6480;
continue;
} else {
}
break;
}

var G__6474 = args6472.length;
switch (G__6474) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6472.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__6475){
var map__6476 = p__6475;
var map__6476__$1 = ((((!((map__6476 == null)))?((((map__6476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6476):map__6476);
var prefix = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__6476__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args6482 = [];
var len__5726__auto___6485 = arguments.length;
var i__5727__auto___6486 = (0);
while(true){
if((i__5727__auto___6486 < len__5726__auto___6485)){
args6482.push((arguments[i__5727__auto___6486]));

var G__6487 = (i__5727__auto___6486 + (1));
i__5727__auto___6486 = G__6487;
continue;
} else {
}
break;
}

var G__6484 = args6482.length;
switch (G__6484) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6482.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args6489 = [];
var len__5726__auto___6492 = arguments.length;
var i__5727__auto___6493 = (0);
while(true){
if((i__5727__auto___6493 < len__5726__auto___6492)){
args6489.push((arguments[i__5727__auto___6493]));

var G__6494 = (i__5727__auto___6493 + (1));
i__5727__auto___6493 = G__6494;
continue;
} else {
}
break;
}

var G__6491 = args6489.length;
switch (G__6491) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6489.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args6496 = [];
var len__5726__auto___6499 = arguments.length;
var i__5727__auto___6500 = (0);
while(true){
if((i__5727__auto___6500 < len__5726__auto___6499)){
args6496.push((arguments[i__5727__auto___6500]));

var G__6501 = (i__5727__auto___6500 + (1));
i__5727__auto___6500 = G__6501;
continue;
} else {
}
break;
}

var G__6498 = args6496.length;
switch (G__6498) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6496.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args6503 = [];
var len__5726__auto___6506 = arguments.length;
var i__5727__auto___6507 = (0);
while(true){
if((i__5727__auto___6507 < len__5726__auto___6506)){
args6503.push((arguments[i__5727__auto___6507]));

var G__6508 = (i__5727__auto___6507 + (1));
i__5727__auto___6507 = G__6508;
continue;
} else {
}
break;
}

var G__6505 = args6503.length;
switch (G__6505) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6503.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__6510){
var map__6513 = p__6510;
var map__6513__$1 = ((((!((map__6513 == null)))?((((map__6513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6513):map__6513);
var request = map__6513__$1;
var response_format = cljs.core.get.call(null,map__6513__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args6515 = [];
var len__5726__auto___6518 = arguments.length;
var i__5727__auto___6519 = (0);
while(true){
if((i__5727__auto___6519 < len__5726__auto___6518)){
args6515.push((arguments[i__5727__auto___6519]));

var G__6520 = (i__5727__auto___6519 + (1));
i__5727__auto___6519 = G__6520;
continue;
} else {
}
break;
}

var G__6517 = args6515.length;
switch (G__6517) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6515.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__6522){
var map__6525 = p__6522;
var map__6525__$1 = ((((!((map__6525 == null)))?((((map__6525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6525):map__6525);
var request = map__6525__$1;
var response_format = cljs.core.get.call(null,map__6525__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args6527 = [];
var len__5726__auto___6530 = arguments.length;
var i__5727__auto___6531 = (0);
while(true){
if((i__5727__auto___6531 < len__5726__auto___6530)){
args6527.push((arguments[i__5727__auto___6531]));

var G__6532 = (i__5727__auto___6531 + (1));
i__5727__auto___6531 = G__6532;
continue;
} else {
}
break;
}

var G__6529 = args6527.length;
switch (G__6529) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6527.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__6534){
var map__6537 = p__6534;
var map__6537__$1 = ((((!((map__6537 == null)))?((((map__6537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6537):map__6537);
var opts = map__6537__$1;
var response_format = cljs.core.get.call(null,map__6537__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args6539 = [];
var len__5726__auto___6542 = arguments.length;
var i__5727__auto___6543 = (0);
while(true){
if((i__5727__auto___6543 < len__5726__auto___6542)){
args6539.push((arguments[i__5727__auto___6543]));

var G__6544 = (i__5727__auto___6543 + (1));
i__5727__auto___6543 = G__6544;
continue;
} else {
}
break;
}

var G__6541 = args6539.length;
switch (G__6541) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6539.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__6546){
var map__6549 = p__6546;
var map__6549__$1 = ((((!((map__6549 == null)))?((((map__6549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6549):map__6549);
var handler = cljs.core.get.call(null,map__6549__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__6551_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__4668__auto__ = p1__6551_SHARP_;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__6552){
var map__6555 = p__6552;
var map__6555__$1 = ((((!((map__6555 == null)))?((((map__6555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6555):map__6555);
var request = map__6555__$1;
var interceptors = cljs.core.get.call(null,map__6555__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__4668__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__6558 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__6558) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__6561 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__6561) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__6563_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__6563_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args6564 = [];
var len__5726__auto___6577 = arguments.length;
var i__5727__auto___6578 = (0);
while(true){
if((i__5727__auto___6578 < len__5726__auto___6577)){
args6564.push((arguments[i__5727__auto___6578]));

var G__6579 = (i__5727__auto___6578 + (1));
i__5727__auto___6578 = G__6579;
continue;
} else {
}
break;
}

var G__6566 = args6564.length;
switch (G__6566) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6564.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__6567,p__6568){
var map__6569 = p__6567;
var map__6569__$1 = ((((!((map__6569 == null)))?((((map__6569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6569):map__6569);
var handler = cljs.core.get.call(null,map__6569__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__6569__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__6569__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__6570 = p__6568;
var ok = cljs.core.nth.call(null,vec__6570,(0),null);
var result = cljs.core.nth.call(null,vec__6570,(1),null);
var temp__4423__auto___6581 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___6581)){
var h_6582 = temp__4423__auto___6581;
h_6582.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__6572){
var map__6573 = p__6572;
var map__6573__$1 = ((((!((map__6573 == null)))?((((map__6573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6573):map__6573);
var handler = cljs.core.get.call(null,map__6573__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__6573__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__6573__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__6573,map__6573__$1,handler,error_handler,finally$){
return (function (p__6575){
var vec__6576 = p__6575;
var ok = cljs.core.nth.call(null,vec__6576,(0),null);
var result = cljs.core.nth.call(null,vec__6576,(1),null);
var temp__4423__auto___6583 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___6583)){
var h_6584 = temp__4423__auto___6583;
h_6584.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__6573,map__6573__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__6585){
var map__6588 = p__6585;
var map__6588__$1 = ((((!((map__6588 == null)))?((((map__6588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6588):map__6588);
var opts = map__6588__$1;
var method = cljs.core.get.call(null,map__6588__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__6588__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__6588__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__6588__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__6588__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__4668__auto__ = format;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6592 = arguments.length;
var i__5727__auto___6593 = (0);
while(true){
if((i__5727__auto___6593 < len__5726__auto___6592)){
args__5733__auto__.push((arguments[i__5727__auto___6593]));

var G__6594 = (i__5727__auto___6593 + (1));
i__5727__auto___6593 = G__6594;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq6590){
var G__6591 = cljs.core.first.call(null,seq6590);
var seq6590__$1 = cljs.core.next.call(null,seq6590);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__6591,seq6590__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6597 = arguments.length;
var i__5727__auto___6598 = (0);
while(true){
if((i__5727__auto___6598 < len__5726__auto___6597)){
args__5733__auto__.push((arguments[i__5727__auto___6598]));

var G__6599 = (i__5727__auto___6598 + (1));
i__5727__auto___6598 = G__6599;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq6595){
var G__6596 = cljs.core.first.call(null,seq6595);
var seq6595__$1 = cljs.core.next.call(null,seq6595);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__6596,seq6595__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6602 = arguments.length;
var i__5727__auto___6603 = (0);
while(true){
if((i__5727__auto___6603 < len__5726__auto___6602)){
args__5733__auto__.push((arguments[i__5727__auto___6603]));

var G__6604 = (i__5727__auto___6603 + (1));
i__5727__auto___6603 = G__6604;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq6600){
var G__6601 = cljs.core.first.call(null,seq6600);
var seq6600__$1 = cljs.core.next.call(null,seq6600);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__6601,seq6600__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6607 = arguments.length;
var i__5727__auto___6608 = (0);
while(true){
if((i__5727__auto___6608 < len__5726__auto___6607)){
args__5733__auto__.push((arguments[i__5727__auto___6608]));

var G__6609 = (i__5727__auto___6608 + (1));
i__5727__auto___6608 = G__6609;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq6605){
var G__6606 = cljs.core.first.call(null,seq6605);
var seq6605__$1 = cljs.core.next.call(null,seq6605);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__6606,seq6605__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6612 = arguments.length;
var i__5727__auto___6613 = (0);
while(true){
if((i__5727__auto___6613 < len__5726__auto___6612)){
args__5733__auto__.push((arguments[i__5727__auto___6613]));

var G__6614 = (i__5727__auto___6613 + (1));
i__5727__auto___6613 = G__6614;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq6610){
var G__6611 = cljs.core.first.call(null,seq6610);
var seq6610__$1 = cljs.core.next.call(null,seq6610);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__6611,seq6610__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6617 = arguments.length;
var i__5727__auto___6618 = (0);
while(true){
if((i__5727__auto___6618 < len__5726__auto___6617)){
args__5733__auto__.push((arguments[i__5727__auto___6618]));

var G__6619 = (i__5727__auto___6618 + (1));
i__5727__auto___6618 = G__6619;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq6615){
var G__6616 = cljs.core.first.call(null,seq6615);
var seq6615__$1 = cljs.core.next.call(null,seq6615);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__6616,seq6615__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6622 = arguments.length;
var i__5727__auto___6623 = (0);
while(true){
if((i__5727__auto___6623 < len__5726__auto___6622)){
args__5733__auto__.push((arguments[i__5727__auto___6623]));

var G__6624 = (i__5727__auto___6623 + (1));
i__5727__auto___6623 = G__6624;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq6620){
var G__6621 = cljs.core.first.call(null,seq6620);
var seq6620__$1 = cljs.core.next.call(null,seq6620);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__6621,seq6620__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6627 = arguments.length;
var i__5727__auto___6628 = (0);
while(true){
if((i__5727__auto___6628 < len__5726__auto___6627)){
args__5733__auto__.push((arguments[i__5727__auto___6628]));

var G__6629 = (i__5727__auto___6628 + (1));
i__5727__auto___6628 = G__6629;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__5786__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__5786__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__5786__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq6625){
var G__6626 = cljs.core.first.call(null,seq6625);
var seq6625__$1 = cljs.core.next.call(null,seq6625);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__6626,seq6625__$1);
});

//# sourceMappingURL=core.js.map?rel=1451600275420