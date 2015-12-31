// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7263,handler){
var map__7264 = p__7263;
var map__7264__$1 = ((((!((map__7264 == null)))?((((map__7264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7264):map__7264);
var uri = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7264__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7264,map__7264__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7262_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7262_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7264,map__7264__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___7272 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___7272)){
var response_type_7273 = temp__4425__auto___7272;
this$__$1.responseType = cljs.core.name.call(null,response_type_7273);
} else {
}

var seq__7266_7274 = cljs.core.seq.call(null,headers);
var chunk__7267_7275 = null;
var count__7268_7276 = (0);
var i__7269_7277 = (0);
while(true){
if((i__7269_7277 < count__7268_7276)){
var vec__7270_7278 = cljs.core._nth.call(null,chunk__7267_7275,i__7269_7277);
var k_7279 = cljs.core.nth.call(null,vec__7270_7278,(0),null);
var v_7280 = cljs.core.nth.call(null,vec__7270_7278,(1),null);
this$__$1.setRequestHeader(k_7279,v_7280);

var G__7281 = seq__7266_7274;
var G__7282 = chunk__7267_7275;
var G__7283 = count__7268_7276;
var G__7284 = (i__7269_7277 + (1));
seq__7266_7274 = G__7281;
chunk__7267_7275 = G__7282;
count__7268_7276 = G__7283;
i__7269_7277 = G__7284;
continue;
} else {
var temp__4425__auto___7285 = cljs.core.seq.call(null,seq__7266_7274);
if(temp__4425__auto___7285){
var seq__7266_7286__$1 = temp__4425__auto___7285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7266_7286__$1)){
var c__5471__auto___7287 = cljs.core.chunk_first.call(null,seq__7266_7286__$1);
var G__7288 = cljs.core.chunk_rest.call(null,seq__7266_7286__$1);
var G__7289 = c__5471__auto___7287;
var G__7290 = cljs.core.count.call(null,c__5471__auto___7287);
var G__7291 = (0);
seq__7266_7274 = G__7288;
chunk__7267_7275 = G__7289;
count__7268_7276 = G__7290;
i__7269_7277 = G__7291;
continue;
} else {
var vec__7271_7292 = cljs.core.first.call(null,seq__7266_7286__$1);
var k_7293 = cljs.core.nth.call(null,vec__7271_7292,(0),null);
var v_7294 = cljs.core.nth.call(null,vec__7271_7292,(1),null);
this$__$1.setRequestHeader(k_7293,v_7294);

var G__7295 = cljs.core.next.call(null,seq__7266_7286__$1);
var G__7296 = null;
var G__7297 = (0);
var G__7298 = (0);
seq__7266_7274 = G__7295;
chunk__7267_7275 = G__7296;
count__7268_7276 = G__7297;
i__7269_7277 = G__7298;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4668__auto__ = body;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1451600277291