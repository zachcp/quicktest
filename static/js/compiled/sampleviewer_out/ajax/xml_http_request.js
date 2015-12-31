// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6076,handler){
var map__6077 = p__6076;
var map__6077__$1 = ((((!((map__6077 == null)))?((((map__6077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6077):map__6077);
var uri = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__6077__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6077,map__6077__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6075_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__6075_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__6077,map__6077__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___6085 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___6085)){
var response_type_6086 = temp__4425__auto___6085;
this$__$1.responseType = cljs.core.name.call(null,response_type_6086);
} else {
}

var seq__6079_6087 = cljs.core.seq.call(null,headers);
var chunk__6080_6088 = null;
var count__6081_6089 = (0);
var i__6082_6090 = (0);
while(true){
if((i__6082_6090 < count__6081_6089)){
var vec__6083_6091 = cljs.core._nth.call(null,chunk__6080_6088,i__6082_6090);
var k_6092 = cljs.core.nth.call(null,vec__6083_6091,(0),null);
var v_6093 = cljs.core.nth.call(null,vec__6083_6091,(1),null);
this$__$1.setRequestHeader(k_6092,v_6093);

var G__6094 = seq__6079_6087;
var G__6095 = chunk__6080_6088;
var G__6096 = count__6081_6089;
var G__6097 = (i__6082_6090 + (1));
seq__6079_6087 = G__6094;
chunk__6080_6088 = G__6095;
count__6081_6089 = G__6096;
i__6082_6090 = G__6097;
continue;
} else {
var temp__4425__auto___6098 = cljs.core.seq.call(null,seq__6079_6087);
if(temp__4425__auto___6098){
var seq__6079_6099__$1 = temp__4425__auto___6098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6079_6099__$1)){
var c__5471__auto___6100 = cljs.core.chunk_first.call(null,seq__6079_6099__$1);
var G__6101 = cljs.core.chunk_rest.call(null,seq__6079_6099__$1);
var G__6102 = c__5471__auto___6100;
var G__6103 = cljs.core.count.call(null,c__5471__auto___6100);
var G__6104 = (0);
seq__6079_6087 = G__6101;
chunk__6080_6088 = G__6102;
count__6081_6089 = G__6103;
i__6082_6090 = G__6104;
continue;
} else {
var vec__6084_6105 = cljs.core.first.call(null,seq__6079_6099__$1);
var k_6106 = cljs.core.nth.call(null,vec__6084_6105,(0),null);
var v_6107 = cljs.core.nth.call(null,vec__6084_6105,(1),null);
this$__$1.setRequestHeader(k_6106,v_6107);

var G__6108 = cljs.core.next.call(null,seq__6079_6099__$1);
var G__6109 = null;
var G__6110 = (0);
var G__6111 = (0);
seq__6079_6087 = G__6108;
chunk__6080_6088 = G__6109;
count__6081_6089 = G__6110;
i__6082_6090 = G__6111;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1451600274237