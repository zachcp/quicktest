// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__17947,handler){
var map__17948 = p__17947;
var map__17948__$1 = ((((!((map__17948 == null)))?((((map__17948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17948):map__17948);
var uri = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__17948__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__17948,map__17948__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__17946_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__17946_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__17948,map__17948__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___17956 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___17956)){
var response_type_17957 = temp__4425__auto___17956;
this$__$1.responseType = cljs.core.name.call(null,response_type_17957);
} else {
}

var seq__17950_17958 = cljs.core.seq.call(null,headers);
var chunk__17951_17959 = null;
var count__17952_17960 = (0);
var i__17953_17961 = (0);
while(true){
if((i__17953_17961 < count__17952_17960)){
var vec__17954_17962 = cljs.core._nth.call(null,chunk__17951_17959,i__17953_17961);
var k_17963 = cljs.core.nth.call(null,vec__17954_17962,(0),null);
var v_17964 = cljs.core.nth.call(null,vec__17954_17962,(1),null);
this$__$1.setRequestHeader(k_17963,v_17964);

var G__17965 = seq__17950_17958;
var G__17966 = chunk__17951_17959;
var G__17967 = count__17952_17960;
var G__17968 = (i__17953_17961 + (1));
seq__17950_17958 = G__17965;
chunk__17951_17959 = G__17966;
count__17952_17960 = G__17967;
i__17953_17961 = G__17968;
continue;
} else {
var temp__4425__auto___17969 = cljs.core.seq.call(null,seq__17950_17958);
if(temp__4425__auto___17969){
var seq__17950_17970__$1 = temp__4425__auto___17969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17950_17970__$1)){
var c__17629__auto___17971 = cljs.core.chunk_first.call(null,seq__17950_17970__$1);
var G__17972 = cljs.core.chunk_rest.call(null,seq__17950_17970__$1);
var G__17973 = c__17629__auto___17971;
var G__17974 = cljs.core.count.call(null,c__17629__auto___17971);
var G__17975 = (0);
seq__17950_17958 = G__17972;
chunk__17951_17959 = G__17973;
count__17952_17960 = G__17974;
i__17953_17961 = G__17975;
continue;
} else {
var vec__17955_17976 = cljs.core.first.call(null,seq__17950_17970__$1);
var k_17977 = cljs.core.nth.call(null,vec__17955_17976,(0),null);
var v_17978 = cljs.core.nth.call(null,vec__17955_17976,(1),null);
this$__$1.setRequestHeader(k_17977,v_17978);

var G__17979 = cljs.core.next.call(null,seq__17950_17970__$1);
var G__17980 = null;
var G__17981 = (0);
var G__17982 = (0);
seq__17950_17958 = G__17979;
chunk__17951_17959 = G__17980;
count__17952_17960 = G__17981;
i__17953_17961 = G__17982;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16826__auto__ = body;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1451600244451