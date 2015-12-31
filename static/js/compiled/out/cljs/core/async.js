// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20417 = [];
var len__17884__auto___20423 = arguments.length;
var i__17885__auto___20424 = (0);
while(true){
if((i__17885__auto___20424 < len__17884__auto___20423)){
args20417.push((arguments[i__17885__auto___20424]));

var G__20425 = (i__17885__auto___20424 + (1));
i__17885__auto___20424 = G__20425;
continue;
} else {
}
break;
}

var G__20419 = args20417.length;
switch (G__20419) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20417.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20420 = (function (f,blockable,meta20421){
this.f = f;
this.blockable = blockable;
this.meta20421 = meta20421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20422,meta20421__$1){
var self__ = this;
var _20422__$1 = this;
return (new cljs.core.async.t_cljs$core$async20420(self__.f,self__.blockable,meta20421__$1));
});

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20422){
var self__ = this;
var _20422__$1 = this;
return self__.meta20421;
});

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20421","meta20421",-1415838513,null)], null);
});

cljs.core.async.t_cljs$core$async20420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20420";

cljs.core.async.t_cljs$core$async20420.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20420");
});

cljs.core.async.__GT_t_cljs$core$async20420 = (function cljs$core$async$__GT_t_cljs$core$async20420(f__$1,blockable__$1,meta20421){
return (new cljs.core.async.t_cljs$core$async20420(f__$1,blockable__$1,meta20421));
});

}

return (new cljs.core.async.t_cljs$core$async20420(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20429 = [];
var len__17884__auto___20432 = arguments.length;
var i__17885__auto___20433 = (0);
while(true){
if((i__17885__auto___20433 < len__17884__auto___20432)){
args20429.push((arguments[i__17885__auto___20433]));

var G__20434 = (i__17885__auto___20433 + (1));
i__17885__auto___20433 = G__20434;
continue;
} else {
}
break;
}

var G__20431 = args20429.length;
switch (G__20431) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20429.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20436 = [];
var len__17884__auto___20439 = arguments.length;
var i__17885__auto___20440 = (0);
while(true){
if((i__17885__auto___20440 < len__17884__auto___20439)){
args20436.push((arguments[i__17885__auto___20440]));

var G__20441 = (i__17885__auto___20440 + (1));
i__17885__auto___20440 = G__20441;
continue;
} else {
}
break;
}

var G__20438 = args20436.length;
switch (G__20438) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20436.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20443 = [];
var len__17884__auto___20446 = arguments.length;
var i__17885__auto___20447 = (0);
while(true){
if((i__17885__auto___20447 < len__17884__auto___20446)){
args20443.push((arguments[i__17885__auto___20447]));

var G__20448 = (i__17885__auto___20447 + (1));
i__17885__auto___20447 = G__20448;
continue;
} else {
}
break;
}

var G__20445 = args20443.length;
switch (G__20445) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20443.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20450 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20450);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20450,ret){
return (function (){
return fn1.call(null,val_20450);
});})(val_20450,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20451 = [];
var len__17884__auto___20454 = arguments.length;
var i__17885__auto___20455 = (0);
while(true){
if((i__17885__auto___20455 < len__17884__auto___20454)){
args20451.push((arguments[i__17885__auto___20455]));

var G__20456 = (i__17885__auto___20455 + (1));
i__17885__auto___20455 = G__20456;
continue;
} else {
}
break;
}

var G__20453 = args20451.length;
switch (G__20453) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20451.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___20458 = n;
var x_20459 = (0);
while(true){
if((x_20459 < n__17729__auto___20458)){
(a[x_20459] = (0));

var G__20460 = (x_20459 + (1));
x_20459 = G__20460;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20461 = (i + (1));
i = G__20461;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20465 = (function (alt_flag,flag,meta20466){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20466 = meta20466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20467,meta20466__$1){
var self__ = this;
var _20467__$1 = this;
return (new cljs.core.async.t_cljs$core$async20465(self__.alt_flag,self__.flag,meta20466__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20467){
var self__ = this;
var _20467__$1 = this;
return self__.meta20466;
});})(flag))
;

cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20465.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20466","meta20466",1773169358,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20465";

cljs.core.async.t_cljs$core$async20465.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20465");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20465 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20465(alt_flag__$1,flag__$1,meta20466){
return (new cljs.core.async.t_cljs$core$async20465(alt_flag__$1,flag__$1,meta20466));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20465(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20471 = (function (alt_handler,flag,cb,meta20472){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20472 = meta20472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20473,meta20472__$1){
var self__ = this;
var _20473__$1 = this;
return (new cljs.core.async.t_cljs$core$async20471(self__.alt_handler,self__.flag,self__.cb,meta20472__$1));
});

cljs.core.async.t_cljs$core$async20471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20473){
var self__ = this;
var _20473__$1 = this;
return self__.meta20472;
});

cljs.core.async.t_cljs$core$async20471.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20472","meta20472",59145984,null)], null);
});

cljs.core.async.t_cljs$core$async20471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20471";

cljs.core.async.t_cljs$core$async20471.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20471");
});

cljs.core.async.__GT_t_cljs$core$async20471 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20471(alt_handler__$1,flag__$1,cb__$1,meta20472){
return (new cljs.core.async.t_cljs$core$async20471(alt_handler__$1,flag__$1,cb__$1,meta20472));
});

}

return (new cljs.core.async.t_cljs$core$async20471(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20474_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20474_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20475_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20475_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20476 = (i + (1));
i = G__20476;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20482 = arguments.length;
var i__17885__auto___20483 = (0);
while(true){
if((i__17885__auto___20483 < len__17884__auto___20482)){
args__17891__auto__.push((arguments[i__17885__auto___20483]));

var G__20484 = (i__17885__auto___20483 + (1));
i__17885__auto___20483 = G__20484;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20479){
var map__20480 = p__20479;
var map__20480__$1 = ((((!((map__20480 == null)))?((((map__20480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20480):map__20480);
var opts = map__20480__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20477){
var G__20478 = cljs.core.first.call(null,seq20477);
var seq20477__$1 = cljs.core.next.call(null,seq20477);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20478,seq20477__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20485 = [];
var len__17884__auto___20535 = arguments.length;
var i__17885__auto___20536 = (0);
while(true){
if((i__17885__auto___20536 < len__17884__auto___20535)){
args20485.push((arguments[i__17885__auto___20536]));

var G__20537 = (i__17885__auto___20536 + (1));
i__17885__auto___20536 = G__20537;
continue;
} else {
}
break;
}

var G__20487 = args20485.length;
switch (G__20487) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20485.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20372__auto___20539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___20539){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___20539){
return (function (state_20511){
var state_val_20512 = (state_20511[(1)]);
if((state_val_20512 === (7))){
var inst_20507 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
var statearr_20513_20540 = state_20511__$1;
(statearr_20513_20540[(2)] = inst_20507);

(statearr_20513_20540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (1))){
var state_20511__$1 = state_20511;
var statearr_20514_20541 = state_20511__$1;
(statearr_20514_20541[(2)] = null);

(statearr_20514_20541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (4))){
var inst_20490 = (state_20511[(7)]);
var inst_20490__$1 = (state_20511[(2)]);
var inst_20491 = (inst_20490__$1 == null);
var state_20511__$1 = (function (){var statearr_20515 = state_20511;
(statearr_20515[(7)] = inst_20490__$1);

return statearr_20515;
})();
if(cljs.core.truth_(inst_20491)){
var statearr_20516_20542 = state_20511__$1;
(statearr_20516_20542[(1)] = (5));

} else {
var statearr_20517_20543 = state_20511__$1;
(statearr_20517_20543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (13))){
var state_20511__$1 = state_20511;
var statearr_20518_20544 = state_20511__$1;
(statearr_20518_20544[(2)] = null);

(statearr_20518_20544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (6))){
var inst_20490 = (state_20511[(7)]);
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20511__$1,(11),to,inst_20490);
} else {
if((state_val_20512 === (3))){
var inst_20509 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20511__$1,inst_20509);
} else {
if((state_val_20512 === (12))){
var state_20511__$1 = state_20511;
var statearr_20519_20545 = state_20511__$1;
(statearr_20519_20545[(2)] = null);

(statearr_20519_20545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (2))){
var state_20511__$1 = state_20511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20511__$1,(4),from);
} else {
if((state_val_20512 === (11))){
var inst_20500 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
if(cljs.core.truth_(inst_20500)){
var statearr_20520_20546 = state_20511__$1;
(statearr_20520_20546[(1)] = (12));

} else {
var statearr_20521_20547 = state_20511__$1;
(statearr_20521_20547[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (9))){
var state_20511__$1 = state_20511;
var statearr_20522_20548 = state_20511__$1;
(statearr_20522_20548[(2)] = null);

(statearr_20522_20548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (5))){
var state_20511__$1 = state_20511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20523_20549 = state_20511__$1;
(statearr_20523_20549[(1)] = (8));

} else {
var statearr_20524_20550 = state_20511__$1;
(statearr_20524_20550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (14))){
var inst_20505 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
var statearr_20525_20551 = state_20511__$1;
(statearr_20525_20551[(2)] = inst_20505);

(statearr_20525_20551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (10))){
var inst_20497 = (state_20511[(2)]);
var state_20511__$1 = state_20511;
var statearr_20526_20552 = state_20511__$1;
(statearr_20526_20552[(2)] = inst_20497);

(statearr_20526_20552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20512 === (8))){
var inst_20494 = cljs.core.async.close_BANG_.call(null,to);
var state_20511__$1 = state_20511;
var statearr_20527_20553 = state_20511__$1;
(statearr_20527_20553[(2)] = inst_20494);

(statearr_20527_20553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___20539))
;
return ((function (switch__20260__auto__,c__20372__auto___20539){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_20531 = [null,null,null,null,null,null,null,null];
(statearr_20531[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_20531[(1)] = (1));

return statearr_20531;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_20511){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_20511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e20532){if((e20532 instanceof Object)){
var ex__20264__auto__ = e20532;
var statearr_20533_20554 = state_20511;
(statearr_20533_20554[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20555 = state_20511;
state_20511 = G__20555;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_20511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_20511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___20539))
})();
var state__20374__auto__ = (function (){var statearr_20534 = f__20373__auto__.call(null);
(statearr_20534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___20539);

return statearr_20534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___20539))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20739){
var vec__20740 = p__20739;
var v = cljs.core.nth.call(null,vec__20740,(0),null);
var p = cljs.core.nth.call(null,vec__20740,(1),null);
var job = vec__20740;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20372__auto___20922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___20922,res,vec__20740,v,p,job,jobs,results){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___20922,res,vec__20740,v,p,job,jobs,results){
return (function (state_20745){
var state_val_20746 = (state_20745[(1)]);
if((state_val_20746 === (1))){
var state_20745__$1 = state_20745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20745__$1,(2),res,v);
} else {
if((state_val_20746 === (2))){
var inst_20742 = (state_20745[(2)]);
var inst_20743 = cljs.core.async.close_BANG_.call(null,res);
var state_20745__$1 = (function (){var statearr_20747 = state_20745;
(statearr_20747[(7)] = inst_20742);

return statearr_20747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20745__$1,inst_20743);
} else {
return null;
}
}
});})(c__20372__auto___20922,res,vec__20740,v,p,job,jobs,results))
;
return ((function (switch__20260__auto__,c__20372__auto___20922,res,vec__20740,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0 = (function (){
var statearr_20751 = [null,null,null,null,null,null,null,null];
(statearr_20751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__);

(statearr_20751[(1)] = (1));

return statearr_20751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1 = (function (state_20745){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_20745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e20752){if((e20752 instanceof Object)){
var ex__20264__auto__ = e20752;
var statearr_20753_20923 = state_20745;
(statearr_20753_20923[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20924 = state_20745;
state_20745 = G__20924;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = function(state_20745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1.call(this,state_20745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___20922,res,vec__20740,v,p,job,jobs,results))
})();
var state__20374__auto__ = (function (){var statearr_20754 = f__20373__auto__.call(null);
(statearr_20754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___20922);

return statearr_20754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___20922,res,vec__20740,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20755){
var vec__20756 = p__20755;
var v = cljs.core.nth.call(null,vec__20756,(0),null);
var p = cljs.core.nth.call(null,vec__20756,(1),null);
var job = vec__20756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___20925 = n;
var __20926 = (0);
while(true){
if((__20926 < n__17729__auto___20925)){
var G__20757_20927 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20757_20927) {
case "compute":
var c__20372__auto___20929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20926,c__20372__auto___20929,G__20757_20927,n__17729__auto___20925,jobs,results,process,async){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (__20926,c__20372__auto___20929,G__20757_20927,n__17729__auto___20925,jobs,results,process,async){
return (function (state_20770){
var state_val_20771 = (state_20770[(1)]);
if((state_val_20771 === (1))){
var state_20770__$1 = state_20770;
var statearr_20772_20930 = state_20770__$1;
(statearr_20772_20930[(2)] = null);

(statearr_20772_20930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (2))){
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20770__$1,(4),jobs);
} else {
if((state_val_20771 === (3))){
var inst_20768 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20770__$1,inst_20768);
} else {
if((state_val_20771 === (4))){
var inst_20760 = (state_20770[(2)]);
var inst_20761 = process.call(null,inst_20760);
var state_20770__$1 = state_20770;
if(cljs.core.truth_(inst_20761)){
var statearr_20773_20931 = state_20770__$1;
(statearr_20773_20931[(1)] = (5));

} else {
var statearr_20774_20932 = state_20770__$1;
(statearr_20774_20932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (5))){
var state_20770__$1 = state_20770;
var statearr_20775_20933 = state_20770__$1;
(statearr_20775_20933[(2)] = null);

(statearr_20775_20933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (6))){
var state_20770__$1 = state_20770;
var statearr_20776_20934 = state_20770__$1;
(statearr_20776_20934[(2)] = null);

(statearr_20776_20934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20771 === (7))){
var inst_20766 = (state_20770[(2)]);
var state_20770__$1 = state_20770;
var statearr_20777_20935 = state_20770__$1;
(statearr_20777_20935[(2)] = inst_20766);

(statearr_20777_20935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20926,c__20372__auto___20929,G__20757_20927,n__17729__auto___20925,jobs,results,process,async))
;
return ((function (__20926,switch__20260__auto__,c__20372__auto___20929,G__20757_20927,n__17729__auto___20925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0 = (function (){
var statearr_20781 = [null,null,null,null,null,null,null];
(statearr_20781[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__);

(statearr_20781[(1)] = (1));

return statearr_20781;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1 = (function (state_20770){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_20770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e20782){if((e20782 instanceof Object)){
var ex__20264__auto__ = e20782;
var statearr_20783_20936 = state_20770;
(statearr_20783_20936[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20937 = state_20770;
state_20770 = G__20937;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = function(state_20770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1.call(this,state_20770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__;
})()
;})(__20926,switch__20260__auto__,c__20372__auto___20929,G__20757_20927,n__17729__auto___20925,jobs,results,process,async))
})();
var state__20374__auto__ = (function (){var statearr_20784 = f__20373__auto__.call(null);
(statearr_20784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___20929);

return statearr_20784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(__20926,c__20372__auto___20929,G__20757_20927,n__17729__auto___20925,jobs,results,process,async))
);


break;
case "async":
var c__20372__auto___20938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20926,c__20372__auto___20938,G__20757_20927,n__17729__auto___20925,jobs,results,process,async){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (__20926,c__20372__auto___20938,G__20757_20927,n__17729__auto___20925,jobs,results,process,async){
return (function (state_20797){
var state_val_20798 = (state_20797[(1)]);
if((state_val_20798 === (1))){
var state_20797__$1 = state_20797;
var statearr_20799_20939 = state_20797__$1;
(statearr_20799_20939[(2)] = null);

(statearr_20799_20939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20798 === (2))){
var state_20797__$1 = state_20797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20797__$1,(4),jobs);
} else {
if((state_val_20798 === (3))){
var inst_20795 = (state_20797[(2)]);
var state_20797__$1 = state_20797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20797__$1,inst_20795);
} else {
if((state_val_20798 === (4))){
var inst_20787 = (state_20797[(2)]);
var inst_20788 = async.call(null,inst_20787);
var state_20797__$1 = state_20797;
if(cljs.core.truth_(inst_20788)){
var statearr_20800_20940 = state_20797__$1;
(statearr_20800_20940[(1)] = (5));

} else {
var statearr_20801_20941 = state_20797__$1;
(statearr_20801_20941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20798 === (5))){
var state_20797__$1 = state_20797;
var statearr_20802_20942 = state_20797__$1;
(statearr_20802_20942[(2)] = null);

(statearr_20802_20942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20798 === (6))){
var state_20797__$1 = state_20797;
var statearr_20803_20943 = state_20797__$1;
(statearr_20803_20943[(2)] = null);

(statearr_20803_20943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20798 === (7))){
var inst_20793 = (state_20797[(2)]);
var state_20797__$1 = state_20797;
var statearr_20804_20944 = state_20797__$1;
(statearr_20804_20944[(2)] = inst_20793);

(statearr_20804_20944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20926,c__20372__auto___20938,G__20757_20927,n__17729__auto___20925,jobs,results,process,async))
;
return ((function (__20926,switch__20260__auto__,c__20372__auto___20938,G__20757_20927,n__17729__auto___20925,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0 = (function (){
var statearr_20808 = [null,null,null,null,null,null,null];
(statearr_20808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__);

(statearr_20808[(1)] = (1));

return statearr_20808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1 = (function (state_20797){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_20797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e20809){if((e20809 instanceof Object)){
var ex__20264__auto__ = e20809;
var statearr_20810_20945 = state_20797;
(statearr_20810_20945[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20946 = state_20797;
state_20797 = G__20946;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = function(state_20797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1.call(this,state_20797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__;
})()
;})(__20926,switch__20260__auto__,c__20372__auto___20938,G__20757_20927,n__17729__auto___20925,jobs,results,process,async))
})();
var state__20374__auto__ = (function (){var statearr_20811 = f__20373__auto__.call(null);
(statearr_20811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___20938);

return statearr_20811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(__20926,c__20372__auto___20938,G__20757_20927,n__17729__auto___20925,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20947 = (__20926 + (1));
__20926 = G__20947;
continue;
} else {
}
break;
}

var c__20372__auto___20948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___20948,jobs,results,process,async){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___20948,jobs,results,process,async){
return (function (state_20833){
var state_val_20834 = (state_20833[(1)]);
if((state_val_20834 === (1))){
var state_20833__$1 = state_20833;
var statearr_20835_20949 = state_20833__$1;
(statearr_20835_20949[(2)] = null);

(statearr_20835_20949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (2))){
var state_20833__$1 = state_20833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20833__$1,(4),from);
} else {
if((state_val_20834 === (3))){
var inst_20831 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20833__$1,inst_20831);
} else {
if((state_val_20834 === (4))){
var inst_20814 = (state_20833[(7)]);
var inst_20814__$1 = (state_20833[(2)]);
var inst_20815 = (inst_20814__$1 == null);
var state_20833__$1 = (function (){var statearr_20836 = state_20833;
(statearr_20836[(7)] = inst_20814__$1);

return statearr_20836;
})();
if(cljs.core.truth_(inst_20815)){
var statearr_20837_20950 = state_20833__$1;
(statearr_20837_20950[(1)] = (5));

} else {
var statearr_20838_20951 = state_20833__$1;
(statearr_20838_20951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (5))){
var inst_20817 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20833__$1 = state_20833;
var statearr_20839_20952 = state_20833__$1;
(statearr_20839_20952[(2)] = inst_20817);

(statearr_20839_20952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (6))){
var inst_20819 = (state_20833[(8)]);
var inst_20814 = (state_20833[(7)]);
var inst_20819__$1 = cljs.core.async.chan.call(null,(1));
var inst_20820 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20821 = [inst_20814,inst_20819__$1];
var inst_20822 = (new cljs.core.PersistentVector(null,2,(5),inst_20820,inst_20821,null));
var state_20833__$1 = (function (){var statearr_20840 = state_20833;
(statearr_20840[(8)] = inst_20819__$1);

return statearr_20840;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20833__$1,(8),jobs,inst_20822);
} else {
if((state_val_20834 === (7))){
var inst_20829 = (state_20833[(2)]);
var state_20833__$1 = state_20833;
var statearr_20841_20953 = state_20833__$1;
(statearr_20841_20953[(2)] = inst_20829);

(statearr_20841_20953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20834 === (8))){
var inst_20819 = (state_20833[(8)]);
var inst_20824 = (state_20833[(2)]);
var state_20833__$1 = (function (){var statearr_20842 = state_20833;
(statearr_20842[(9)] = inst_20824);

return statearr_20842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20833__$1,(9),results,inst_20819);
} else {
if((state_val_20834 === (9))){
var inst_20826 = (state_20833[(2)]);
var state_20833__$1 = (function (){var statearr_20843 = state_20833;
(statearr_20843[(10)] = inst_20826);

return statearr_20843;
})();
var statearr_20844_20954 = state_20833__$1;
(statearr_20844_20954[(2)] = null);

(statearr_20844_20954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___20948,jobs,results,process,async))
;
return ((function (switch__20260__auto__,c__20372__auto___20948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0 = (function (){
var statearr_20848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__);

(statearr_20848[(1)] = (1));

return statearr_20848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1 = (function (state_20833){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_20833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e20849){if((e20849 instanceof Object)){
var ex__20264__auto__ = e20849;
var statearr_20850_20955 = state_20833;
(statearr_20850_20955[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20956 = state_20833;
state_20833 = G__20956;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = function(state_20833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1.call(this,state_20833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___20948,jobs,results,process,async))
})();
var state__20374__auto__ = (function (){var statearr_20851 = f__20373__auto__.call(null);
(statearr_20851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___20948);

return statearr_20851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___20948,jobs,results,process,async))
);


var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__,jobs,results,process,async){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto__,jobs,results,process,async){
return (function (state_20889){
var state_val_20890 = (state_20889[(1)]);
if((state_val_20890 === (7))){
var inst_20885 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
var statearr_20891_20957 = state_20889__$1;
(statearr_20891_20957[(2)] = inst_20885);

(statearr_20891_20957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (20))){
var state_20889__$1 = state_20889;
var statearr_20892_20958 = state_20889__$1;
(statearr_20892_20958[(2)] = null);

(statearr_20892_20958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (1))){
var state_20889__$1 = state_20889;
var statearr_20893_20959 = state_20889__$1;
(statearr_20893_20959[(2)] = null);

(statearr_20893_20959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (4))){
var inst_20854 = (state_20889[(7)]);
var inst_20854__$1 = (state_20889[(2)]);
var inst_20855 = (inst_20854__$1 == null);
var state_20889__$1 = (function (){var statearr_20894 = state_20889;
(statearr_20894[(7)] = inst_20854__$1);

return statearr_20894;
})();
if(cljs.core.truth_(inst_20855)){
var statearr_20895_20960 = state_20889__$1;
(statearr_20895_20960[(1)] = (5));

} else {
var statearr_20896_20961 = state_20889__$1;
(statearr_20896_20961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (15))){
var inst_20867 = (state_20889[(8)]);
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20889__$1,(18),to,inst_20867);
} else {
if((state_val_20890 === (21))){
var inst_20880 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
var statearr_20897_20962 = state_20889__$1;
(statearr_20897_20962[(2)] = inst_20880);

(statearr_20897_20962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (13))){
var inst_20882 = (state_20889[(2)]);
var state_20889__$1 = (function (){var statearr_20898 = state_20889;
(statearr_20898[(9)] = inst_20882);

return statearr_20898;
})();
var statearr_20899_20963 = state_20889__$1;
(statearr_20899_20963[(2)] = null);

(statearr_20899_20963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (6))){
var inst_20854 = (state_20889[(7)]);
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20889__$1,(11),inst_20854);
} else {
if((state_val_20890 === (17))){
var inst_20875 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
if(cljs.core.truth_(inst_20875)){
var statearr_20900_20964 = state_20889__$1;
(statearr_20900_20964[(1)] = (19));

} else {
var statearr_20901_20965 = state_20889__$1;
(statearr_20901_20965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (3))){
var inst_20887 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20889__$1,inst_20887);
} else {
if((state_val_20890 === (12))){
var inst_20864 = (state_20889[(10)]);
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20889__$1,(14),inst_20864);
} else {
if((state_val_20890 === (2))){
var state_20889__$1 = state_20889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20889__$1,(4),results);
} else {
if((state_val_20890 === (19))){
var state_20889__$1 = state_20889;
var statearr_20902_20966 = state_20889__$1;
(statearr_20902_20966[(2)] = null);

(statearr_20902_20966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (11))){
var inst_20864 = (state_20889[(2)]);
var state_20889__$1 = (function (){var statearr_20903 = state_20889;
(statearr_20903[(10)] = inst_20864);

return statearr_20903;
})();
var statearr_20904_20967 = state_20889__$1;
(statearr_20904_20967[(2)] = null);

(statearr_20904_20967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (9))){
var state_20889__$1 = state_20889;
var statearr_20905_20968 = state_20889__$1;
(statearr_20905_20968[(2)] = null);

(statearr_20905_20968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (5))){
var state_20889__$1 = state_20889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20906_20969 = state_20889__$1;
(statearr_20906_20969[(1)] = (8));

} else {
var statearr_20907_20970 = state_20889__$1;
(statearr_20907_20970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (14))){
var inst_20867 = (state_20889[(8)]);
var inst_20869 = (state_20889[(11)]);
var inst_20867__$1 = (state_20889[(2)]);
var inst_20868 = (inst_20867__$1 == null);
var inst_20869__$1 = cljs.core.not.call(null,inst_20868);
var state_20889__$1 = (function (){var statearr_20908 = state_20889;
(statearr_20908[(8)] = inst_20867__$1);

(statearr_20908[(11)] = inst_20869__$1);

return statearr_20908;
})();
if(inst_20869__$1){
var statearr_20909_20971 = state_20889__$1;
(statearr_20909_20971[(1)] = (15));

} else {
var statearr_20910_20972 = state_20889__$1;
(statearr_20910_20972[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (16))){
var inst_20869 = (state_20889[(11)]);
var state_20889__$1 = state_20889;
var statearr_20911_20973 = state_20889__$1;
(statearr_20911_20973[(2)] = inst_20869);

(statearr_20911_20973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (10))){
var inst_20861 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
var statearr_20912_20974 = state_20889__$1;
(statearr_20912_20974[(2)] = inst_20861);

(statearr_20912_20974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (18))){
var inst_20872 = (state_20889[(2)]);
var state_20889__$1 = state_20889;
var statearr_20913_20975 = state_20889__$1;
(statearr_20913_20975[(2)] = inst_20872);

(statearr_20913_20975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20890 === (8))){
var inst_20858 = cljs.core.async.close_BANG_.call(null,to);
var state_20889__$1 = state_20889;
var statearr_20914_20976 = state_20889__$1;
(statearr_20914_20976[(2)] = inst_20858);

(statearr_20914_20976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto__,jobs,results,process,async))
;
return ((function (switch__20260__auto__,c__20372__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0 = (function (){
var statearr_20918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__);

(statearr_20918[(1)] = (1));

return statearr_20918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1 = (function (state_20889){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_20889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e20919){if((e20919 instanceof Object)){
var ex__20264__auto__ = e20919;
var statearr_20920_20977 = state_20889;
(statearr_20920_20977[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20978 = state_20889;
state_20889 = G__20978;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__ = function(state_20889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1.call(this,state_20889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto__,jobs,results,process,async))
})();
var state__20374__auto__ = (function (){var statearr_20921 = f__20373__auto__.call(null);
(statearr_20921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_20921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__,jobs,results,process,async))
);

return c__20372__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20979 = [];
var len__17884__auto___20982 = arguments.length;
var i__17885__auto___20983 = (0);
while(true){
if((i__17885__auto___20983 < len__17884__auto___20982)){
args20979.push((arguments[i__17885__auto___20983]));

var G__20984 = (i__17885__auto___20983 + (1));
i__17885__auto___20983 = G__20984;
continue;
} else {
}
break;
}

var G__20981 = args20979.length;
switch (G__20981) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20979.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20986 = [];
var len__17884__auto___20989 = arguments.length;
var i__17885__auto___20990 = (0);
while(true){
if((i__17885__auto___20990 < len__17884__auto___20989)){
args20986.push((arguments[i__17885__auto___20990]));

var G__20991 = (i__17885__auto___20990 + (1));
i__17885__auto___20990 = G__20991;
continue;
} else {
}
break;
}

var G__20988 = args20986.length;
switch (G__20988) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20986.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20993 = [];
var len__17884__auto___21046 = arguments.length;
var i__17885__auto___21047 = (0);
while(true){
if((i__17885__auto___21047 < len__17884__auto___21046)){
args20993.push((arguments[i__17885__auto___21047]));

var G__21048 = (i__17885__auto___21047 + (1));
i__17885__auto___21047 = G__21048;
continue;
} else {
}
break;
}

var G__20995 = args20993.length;
switch (G__20995) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20993.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20372__auto___21050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___21050,tc,fc){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___21050,tc,fc){
return (function (state_21021){
var state_val_21022 = (state_21021[(1)]);
if((state_val_21022 === (7))){
var inst_21017 = (state_21021[(2)]);
var state_21021__$1 = state_21021;
var statearr_21023_21051 = state_21021__$1;
(statearr_21023_21051[(2)] = inst_21017);

(statearr_21023_21051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (1))){
var state_21021__$1 = state_21021;
var statearr_21024_21052 = state_21021__$1;
(statearr_21024_21052[(2)] = null);

(statearr_21024_21052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (4))){
var inst_20998 = (state_21021[(7)]);
var inst_20998__$1 = (state_21021[(2)]);
var inst_20999 = (inst_20998__$1 == null);
var state_21021__$1 = (function (){var statearr_21025 = state_21021;
(statearr_21025[(7)] = inst_20998__$1);

return statearr_21025;
})();
if(cljs.core.truth_(inst_20999)){
var statearr_21026_21053 = state_21021__$1;
(statearr_21026_21053[(1)] = (5));

} else {
var statearr_21027_21054 = state_21021__$1;
(statearr_21027_21054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (13))){
var state_21021__$1 = state_21021;
var statearr_21028_21055 = state_21021__$1;
(statearr_21028_21055[(2)] = null);

(statearr_21028_21055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (6))){
var inst_20998 = (state_21021[(7)]);
var inst_21004 = p.call(null,inst_20998);
var state_21021__$1 = state_21021;
if(cljs.core.truth_(inst_21004)){
var statearr_21029_21056 = state_21021__$1;
(statearr_21029_21056[(1)] = (9));

} else {
var statearr_21030_21057 = state_21021__$1;
(statearr_21030_21057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (3))){
var inst_21019 = (state_21021[(2)]);
var state_21021__$1 = state_21021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21021__$1,inst_21019);
} else {
if((state_val_21022 === (12))){
var state_21021__$1 = state_21021;
var statearr_21031_21058 = state_21021__$1;
(statearr_21031_21058[(2)] = null);

(statearr_21031_21058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (2))){
var state_21021__$1 = state_21021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21021__$1,(4),ch);
} else {
if((state_val_21022 === (11))){
var inst_20998 = (state_21021[(7)]);
var inst_21008 = (state_21021[(2)]);
var state_21021__$1 = state_21021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21021__$1,(8),inst_21008,inst_20998);
} else {
if((state_val_21022 === (9))){
var state_21021__$1 = state_21021;
var statearr_21032_21059 = state_21021__$1;
(statearr_21032_21059[(2)] = tc);

(statearr_21032_21059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (5))){
var inst_21001 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21002 = cljs.core.async.close_BANG_.call(null,fc);
var state_21021__$1 = (function (){var statearr_21033 = state_21021;
(statearr_21033[(8)] = inst_21001);

return statearr_21033;
})();
var statearr_21034_21060 = state_21021__$1;
(statearr_21034_21060[(2)] = inst_21002);

(statearr_21034_21060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (14))){
var inst_21015 = (state_21021[(2)]);
var state_21021__$1 = state_21021;
var statearr_21035_21061 = state_21021__$1;
(statearr_21035_21061[(2)] = inst_21015);

(statearr_21035_21061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (10))){
var state_21021__$1 = state_21021;
var statearr_21036_21062 = state_21021__$1;
(statearr_21036_21062[(2)] = fc);

(statearr_21036_21062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21022 === (8))){
var inst_21010 = (state_21021[(2)]);
var state_21021__$1 = state_21021;
if(cljs.core.truth_(inst_21010)){
var statearr_21037_21063 = state_21021__$1;
(statearr_21037_21063[(1)] = (12));

} else {
var statearr_21038_21064 = state_21021__$1;
(statearr_21038_21064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___21050,tc,fc))
;
return ((function (switch__20260__auto__,c__20372__auto___21050,tc,fc){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_21042 = [null,null,null,null,null,null,null,null,null];
(statearr_21042[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_21042[(1)] = (1));

return statearr_21042;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_21021){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_21021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e21043){if((e21043 instanceof Object)){
var ex__20264__auto__ = e21043;
var statearr_21044_21065 = state_21021;
(statearr_21044_21065[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21066 = state_21021;
state_21021 = G__21066;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_21021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_21021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___21050,tc,fc))
})();
var state__20374__auto__ = (function (){var statearr_21045 = f__20373__auto__.call(null);
(statearr_21045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___21050);

return statearr_21045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___21050,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto__){
return (function (state_21130){
var state_val_21131 = (state_21130[(1)]);
if((state_val_21131 === (7))){
var inst_21126 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21132_21153 = state_21130__$1;
(statearr_21132_21153[(2)] = inst_21126);

(statearr_21132_21153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (1))){
var inst_21110 = init;
var state_21130__$1 = (function (){var statearr_21133 = state_21130;
(statearr_21133[(7)] = inst_21110);

return statearr_21133;
})();
var statearr_21134_21154 = state_21130__$1;
(statearr_21134_21154[(2)] = null);

(statearr_21134_21154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (4))){
var inst_21113 = (state_21130[(8)]);
var inst_21113__$1 = (state_21130[(2)]);
var inst_21114 = (inst_21113__$1 == null);
var state_21130__$1 = (function (){var statearr_21135 = state_21130;
(statearr_21135[(8)] = inst_21113__$1);

return statearr_21135;
})();
if(cljs.core.truth_(inst_21114)){
var statearr_21136_21155 = state_21130__$1;
(statearr_21136_21155[(1)] = (5));

} else {
var statearr_21137_21156 = state_21130__$1;
(statearr_21137_21156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (6))){
var inst_21113 = (state_21130[(8)]);
var inst_21110 = (state_21130[(7)]);
var inst_21117 = (state_21130[(9)]);
var inst_21117__$1 = f.call(null,inst_21110,inst_21113);
var inst_21118 = cljs.core.reduced_QMARK_.call(null,inst_21117__$1);
var state_21130__$1 = (function (){var statearr_21138 = state_21130;
(statearr_21138[(9)] = inst_21117__$1);

return statearr_21138;
})();
if(inst_21118){
var statearr_21139_21157 = state_21130__$1;
(statearr_21139_21157[(1)] = (8));

} else {
var statearr_21140_21158 = state_21130__$1;
(statearr_21140_21158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (3))){
var inst_21128 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21130__$1,inst_21128);
} else {
if((state_val_21131 === (2))){
var state_21130__$1 = state_21130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21130__$1,(4),ch);
} else {
if((state_val_21131 === (9))){
var inst_21117 = (state_21130[(9)]);
var inst_21110 = inst_21117;
var state_21130__$1 = (function (){var statearr_21141 = state_21130;
(statearr_21141[(7)] = inst_21110);

return statearr_21141;
})();
var statearr_21142_21159 = state_21130__$1;
(statearr_21142_21159[(2)] = null);

(statearr_21142_21159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (5))){
var inst_21110 = (state_21130[(7)]);
var state_21130__$1 = state_21130;
var statearr_21143_21160 = state_21130__$1;
(statearr_21143_21160[(2)] = inst_21110);

(statearr_21143_21160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (10))){
var inst_21124 = (state_21130[(2)]);
var state_21130__$1 = state_21130;
var statearr_21144_21161 = state_21130__$1;
(statearr_21144_21161[(2)] = inst_21124);

(statearr_21144_21161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21131 === (8))){
var inst_21117 = (state_21130[(9)]);
var inst_21120 = cljs.core.deref.call(null,inst_21117);
var state_21130__$1 = state_21130;
var statearr_21145_21162 = state_21130__$1;
(statearr_21145_21162[(2)] = inst_21120);

(statearr_21145_21162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto__))
;
return ((function (switch__20260__auto__,c__20372__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20261__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20261__auto____0 = (function (){
var statearr_21149 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21149[(0)] = cljs$core$async$reduce_$_state_machine__20261__auto__);

(statearr_21149[(1)] = (1));

return statearr_21149;
});
var cljs$core$async$reduce_$_state_machine__20261__auto____1 = (function (state_21130){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_21130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e21150){if((e21150 instanceof Object)){
var ex__20264__auto__ = e21150;
var statearr_21151_21163 = state_21130;
(statearr_21151_21163[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21164 = state_21130;
state_21130 = G__21164;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20261__auto__ = function(state_21130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20261__auto____1.call(this,state_21130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20261__auto____0;
cljs$core$async$reduce_$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20261__auto____1;
return cljs$core$async$reduce_$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto__))
})();
var state__20374__auto__ = (function (){var statearr_21152 = f__20373__auto__.call(null);
(statearr_21152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_21152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__))
);

return c__20372__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21165 = [];
var len__17884__auto___21217 = arguments.length;
var i__17885__auto___21218 = (0);
while(true){
if((i__17885__auto___21218 < len__17884__auto___21217)){
args21165.push((arguments[i__17885__auto___21218]));

var G__21219 = (i__17885__auto___21218 + (1));
i__17885__auto___21218 = G__21219;
continue;
} else {
}
break;
}

var G__21167 = args21165.length;
switch (G__21167) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21165.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto__){
return (function (state_21192){
var state_val_21193 = (state_21192[(1)]);
if((state_val_21193 === (7))){
var inst_21174 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
var statearr_21194_21221 = state_21192__$1;
(statearr_21194_21221[(2)] = inst_21174);

(statearr_21194_21221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (1))){
var inst_21168 = cljs.core.seq.call(null,coll);
var inst_21169 = inst_21168;
var state_21192__$1 = (function (){var statearr_21195 = state_21192;
(statearr_21195[(7)] = inst_21169);

return statearr_21195;
})();
var statearr_21196_21222 = state_21192__$1;
(statearr_21196_21222[(2)] = null);

(statearr_21196_21222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (4))){
var inst_21169 = (state_21192[(7)]);
var inst_21172 = cljs.core.first.call(null,inst_21169);
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21192__$1,(7),ch,inst_21172);
} else {
if((state_val_21193 === (13))){
var inst_21186 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
var statearr_21197_21223 = state_21192__$1;
(statearr_21197_21223[(2)] = inst_21186);

(statearr_21197_21223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (6))){
var inst_21177 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
if(cljs.core.truth_(inst_21177)){
var statearr_21198_21224 = state_21192__$1;
(statearr_21198_21224[(1)] = (8));

} else {
var statearr_21199_21225 = state_21192__$1;
(statearr_21199_21225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (3))){
var inst_21190 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21192__$1,inst_21190);
} else {
if((state_val_21193 === (12))){
var state_21192__$1 = state_21192;
var statearr_21200_21226 = state_21192__$1;
(statearr_21200_21226[(2)] = null);

(statearr_21200_21226[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (2))){
var inst_21169 = (state_21192[(7)]);
var state_21192__$1 = state_21192;
if(cljs.core.truth_(inst_21169)){
var statearr_21201_21227 = state_21192__$1;
(statearr_21201_21227[(1)] = (4));

} else {
var statearr_21202_21228 = state_21192__$1;
(statearr_21202_21228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (11))){
var inst_21183 = cljs.core.async.close_BANG_.call(null,ch);
var state_21192__$1 = state_21192;
var statearr_21203_21229 = state_21192__$1;
(statearr_21203_21229[(2)] = inst_21183);

(statearr_21203_21229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (9))){
var state_21192__$1 = state_21192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21204_21230 = state_21192__$1;
(statearr_21204_21230[(1)] = (11));

} else {
var statearr_21205_21231 = state_21192__$1;
(statearr_21205_21231[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (5))){
var inst_21169 = (state_21192[(7)]);
var state_21192__$1 = state_21192;
var statearr_21206_21232 = state_21192__$1;
(statearr_21206_21232[(2)] = inst_21169);

(statearr_21206_21232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (10))){
var inst_21188 = (state_21192[(2)]);
var state_21192__$1 = state_21192;
var statearr_21207_21233 = state_21192__$1;
(statearr_21207_21233[(2)] = inst_21188);

(statearr_21207_21233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21193 === (8))){
var inst_21169 = (state_21192[(7)]);
var inst_21179 = cljs.core.next.call(null,inst_21169);
var inst_21169__$1 = inst_21179;
var state_21192__$1 = (function (){var statearr_21208 = state_21192;
(statearr_21208[(7)] = inst_21169__$1);

return statearr_21208;
})();
var statearr_21209_21234 = state_21192__$1;
(statearr_21209_21234[(2)] = null);

(statearr_21209_21234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto__))
;
return ((function (switch__20260__auto__,c__20372__auto__){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_21213 = [null,null,null,null,null,null,null,null];
(statearr_21213[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_21213[(1)] = (1));

return statearr_21213;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_21192){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_21192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e21214){if((e21214 instanceof Object)){
var ex__20264__auto__ = e21214;
var statearr_21215_21235 = state_21192;
(statearr_21215_21235[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21236 = state_21192;
state_21192 = G__21236;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_21192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_21192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto__))
})();
var state__20374__auto__ = (function (){var statearr_21216 = f__20373__auto__.call(null);
(statearr_21216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_21216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__))
);

return c__20372__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21458 = (function (mult,ch,cs,meta21459){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21459 = meta21459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21460,meta21459__$1){
var self__ = this;
var _21460__$1 = this;
return (new cljs.core.async.t_cljs$core$async21458(self__.mult,self__.ch,self__.cs,meta21459__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21460){
var self__ = this;
var _21460__$1 = this;
return self__.meta21459;
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21459","meta21459",-470991054,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21458";

cljs.core.async.t_cljs$core$async21458.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21458");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21458 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21458(mult__$1,ch__$1,cs__$1,meta21459){
return (new cljs.core.async.t_cljs$core$async21458(mult__$1,ch__$1,cs__$1,meta21459));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21458(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20372__auto___21679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___21679,cs,m,dchan,dctr,done){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___21679,cs,m,dchan,dctr,done){
return (function (state_21591){
var state_val_21592 = (state_21591[(1)]);
if((state_val_21592 === (7))){
var inst_21587 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21593_21680 = state_21591__$1;
(statearr_21593_21680[(2)] = inst_21587);

(statearr_21593_21680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (20))){
var inst_21492 = (state_21591[(7)]);
var inst_21502 = cljs.core.first.call(null,inst_21492);
var inst_21503 = cljs.core.nth.call(null,inst_21502,(0),null);
var inst_21504 = cljs.core.nth.call(null,inst_21502,(1),null);
var state_21591__$1 = (function (){var statearr_21594 = state_21591;
(statearr_21594[(8)] = inst_21503);

return statearr_21594;
})();
if(cljs.core.truth_(inst_21504)){
var statearr_21595_21681 = state_21591__$1;
(statearr_21595_21681[(1)] = (22));

} else {
var statearr_21596_21682 = state_21591__$1;
(statearr_21596_21682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (27))){
var inst_21532 = (state_21591[(9)]);
var inst_21539 = (state_21591[(10)]);
var inst_21463 = (state_21591[(11)]);
var inst_21534 = (state_21591[(12)]);
var inst_21539__$1 = cljs.core._nth.call(null,inst_21532,inst_21534);
var inst_21540 = cljs.core.async.put_BANG_.call(null,inst_21539__$1,inst_21463,done);
var state_21591__$1 = (function (){var statearr_21597 = state_21591;
(statearr_21597[(10)] = inst_21539__$1);

return statearr_21597;
})();
if(cljs.core.truth_(inst_21540)){
var statearr_21598_21683 = state_21591__$1;
(statearr_21598_21683[(1)] = (30));

} else {
var statearr_21599_21684 = state_21591__$1;
(statearr_21599_21684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (1))){
var state_21591__$1 = state_21591;
var statearr_21600_21685 = state_21591__$1;
(statearr_21600_21685[(2)] = null);

(statearr_21600_21685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (24))){
var inst_21492 = (state_21591[(7)]);
var inst_21509 = (state_21591[(2)]);
var inst_21510 = cljs.core.next.call(null,inst_21492);
var inst_21472 = inst_21510;
var inst_21473 = null;
var inst_21474 = (0);
var inst_21475 = (0);
var state_21591__$1 = (function (){var statearr_21601 = state_21591;
(statearr_21601[(13)] = inst_21475);

(statearr_21601[(14)] = inst_21473);

(statearr_21601[(15)] = inst_21509);

(statearr_21601[(16)] = inst_21474);

(statearr_21601[(17)] = inst_21472);

return statearr_21601;
})();
var statearr_21602_21686 = state_21591__$1;
(statearr_21602_21686[(2)] = null);

(statearr_21602_21686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (39))){
var state_21591__$1 = state_21591;
var statearr_21606_21687 = state_21591__$1;
(statearr_21606_21687[(2)] = null);

(statearr_21606_21687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (4))){
var inst_21463 = (state_21591[(11)]);
var inst_21463__$1 = (state_21591[(2)]);
var inst_21464 = (inst_21463__$1 == null);
var state_21591__$1 = (function (){var statearr_21607 = state_21591;
(statearr_21607[(11)] = inst_21463__$1);

return statearr_21607;
})();
if(cljs.core.truth_(inst_21464)){
var statearr_21608_21688 = state_21591__$1;
(statearr_21608_21688[(1)] = (5));

} else {
var statearr_21609_21689 = state_21591__$1;
(statearr_21609_21689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (15))){
var inst_21475 = (state_21591[(13)]);
var inst_21473 = (state_21591[(14)]);
var inst_21474 = (state_21591[(16)]);
var inst_21472 = (state_21591[(17)]);
var inst_21488 = (state_21591[(2)]);
var inst_21489 = (inst_21475 + (1));
var tmp21603 = inst_21473;
var tmp21604 = inst_21474;
var tmp21605 = inst_21472;
var inst_21472__$1 = tmp21605;
var inst_21473__$1 = tmp21603;
var inst_21474__$1 = tmp21604;
var inst_21475__$1 = inst_21489;
var state_21591__$1 = (function (){var statearr_21610 = state_21591;
(statearr_21610[(13)] = inst_21475__$1);

(statearr_21610[(18)] = inst_21488);

(statearr_21610[(14)] = inst_21473__$1);

(statearr_21610[(16)] = inst_21474__$1);

(statearr_21610[(17)] = inst_21472__$1);

return statearr_21610;
})();
var statearr_21611_21690 = state_21591__$1;
(statearr_21611_21690[(2)] = null);

(statearr_21611_21690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (21))){
var inst_21513 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21615_21691 = state_21591__$1;
(statearr_21615_21691[(2)] = inst_21513);

(statearr_21615_21691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (31))){
var inst_21539 = (state_21591[(10)]);
var inst_21543 = done.call(null,null);
var inst_21544 = cljs.core.async.untap_STAR_.call(null,m,inst_21539);
var state_21591__$1 = (function (){var statearr_21616 = state_21591;
(statearr_21616[(19)] = inst_21543);

return statearr_21616;
})();
var statearr_21617_21692 = state_21591__$1;
(statearr_21617_21692[(2)] = inst_21544);

(statearr_21617_21692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (32))){
var inst_21532 = (state_21591[(9)]);
var inst_21531 = (state_21591[(20)]);
var inst_21533 = (state_21591[(21)]);
var inst_21534 = (state_21591[(12)]);
var inst_21546 = (state_21591[(2)]);
var inst_21547 = (inst_21534 + (1));
var tmp21612 = inst_21532;
var tmp21613 = inst_21531;
var tmp21614 = inst_21533;
var inst_21531__$1 = tmp21613;
var inst_21532__$1 = tmp21612;
var inst_21533__$1 = tmp21614;
var inst_21534__$1 = inst_21547;
var state_21591__$1 = (function (){var statearr_21618 = state_21591;
(statearr_21618[(9)] = inst_21532__$1);

(statearr_21618[(20)] = inst_21531__$1);

(statearr_21618[(21)] = inst_21533__$1);

(statearr_21618[(22)] = inst_21546);

(statearr_21618[(12)] = inst_21534__$1);

return statearr_21618;
})();
var statearr_21619_21693 = state_21591__$1;
(statearr_21619_21693[(2)] = null);

(statearr_21619_21693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (40))){
var inst_21559 = (state_21591[(23)]);
var inst_21563 = done.call(null,null);
var inst_21564 = cljs.core.async.untap_STAR_.call(null,m,inst_21559);
var state_21591__$1 = (function (){var statearr_21620 = state_21591;
(statearr_21620[(24)] = inst_21563);

return statearr_21620;
})();
var statearr_21621_21694 = state_21591__$1;
(statearr_21621_21694[(2)] = inst_21564);

(statearr_21621_21694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (33))){
var inst_21550 = (state_21591[(25)]);
var inst_21552 = cljs.core.chunked_seq_QMARK_.call(null,inst_21550);
var state_21591__$1 = state_21591;
if(inst_21552){
var statearr_21622_21695 = state_21591__$1;
(statearr_21622_21695[(1)] = (36));

} else {
var statearr_21623_21696 = state_21591__$1;
(statearr_21623_21696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (13))){
var inst_21482 = (state_21591[(26)]);
var inst_21485 = cljs.core.async.close_BANG_.call(null,inst_21482);
var state_21591__$1 = state_21591;
var statearr_21624_21697 = state_21591__$1;
(statearr_21624_21697[(2)] = inst_21485);

(statearr_21624_21697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (22))){
var inst_21503 = (state_21591[(8)]);
var inst_21506 = cljs.core.async.close_BANG_.call(null,inst_21503);
var state_21591__$1 = state_21591;
var statearr_21625_21698 = state_21591__$1;
(statearr_21625_21698[(2)] = inst_21506);

(statearr_21625_21698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (36))){
var inst_21550 = (state_21591[(25)]);
var inst_21554 = cljs.core.chunk_first.call(null,inst_21550);
var inst_21555 = cljs.core.chunk_rest.call(null,inst_21550);
var inst_21556 = cljs.core.count.call(null,inst_21554);
var inst_21531 = inst_21555;
var inst_21532 = inst_21554;
var inst_21533 = inst_21556;
var inst_21534 = (0);
var state_21591__$1 = (function (){var statearr_21626 = state_21591;
(statearr_21626[(9)] = inst_21532);

(statearr_21626[(20)] = inst_21531);

(statearr_21626[(21)] = inst_21533);

(statearr_21626[(12)] = inst_21534);

return statearr_21626;
})();
var statearr_21627_21699 = state_21591__$1;
(statearr_21627_21699[(2)] = null);

(statearr_21627_21699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (41))){
var inst_21550 = (state_21591[(25)]);
var inst_21566 = (state_21591[(2)]);
var inst_21567 = cljs.core.next.call(null,inst_21550);
var inst_21531 = inst_21567;
var inst_21532 = null;
var inst_21533 = (0);
var inst_21534 = (0);
var state_21591__$1 = (function (){var statearr_21628 = state_21591;
(statearr_21628[(9)] = inst_21532);

(statearr_21628[(20)] = inst_21531);

(statearr_21628[(21)] = inst_21533);

(statearr_21628[(27)] = inst_21566);

(statearr_21628[(12)] = inst_21534);

return statearr_21628;
})();
var statearr_21629_21700 = state_21591__$1;
(statearr_21629_21700[(2)] = null);

(statearr_21629_21700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (43))){
var state_21591__$1 = state_21591;
var statearr_21630_21701 = state_21591__$1;
(statearr_21630_21701[(2)] = null);

(statearr_21630_21701[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (29))){
var inst_21575 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21631_21702 = state_21591__$1;
(statearr_21631_21702[(2)] = inst_21575);

(statearr_21631_21702[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (44))){
var inst_21584 = (state_21591[(2)]);
var state_21591__$1 = (function (){var statearr_21632 = state_21591;
(statearr_21632[(28)] = inst_21584);

return statearr_21632;
})();
var statearr_21633_21703 = state_21591__$1;
(statearr_21633_21703[(2)] = null);

(statearr_21633_21703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (6))){
var inst_21523 = (state_21591[(29)]);
var inst_21522 = cljs.core.deref.call(null,cs);
var inst_21523__$1 = cljs.core.keys.call(null,inst_21522);
var inst_21524 = cljs.core.count.call(null,inst_21523__$1);
var inst_21525 = cljs.core.reset_BANG_.call(null,dctr,inst_21524);
var inst_21530 = cljs.core.seq.call(null,inst_21523__$1);
var inst_21531 = inst_21530;
var inst_21532 = null;
var inst_21533 = (0);
var inst_21534 = (0);
var state_21591__$1 = (function (){var statearr_21634 = state_21591;
(statearr_21634[(9)] = inst_21532);

(statearr_21634[(20)] = inst_21531);

(statearr_21634[(21)] = inst_21533);

(statearr_21634[(30)] = inst_21525);

(statearr_21634[(29)] = inst_21523__$1);

(statearr_21634[(12)] = inst_21534);

return statearr_21634;
})();
var statearr_21635_21704 = state_21591__$1;
(statearr_21635_21704[(2)] = null);

(statearr_21635_21704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (28))){
var inst_21531 = (state_21591[(20)]);
var inst_21550 = (state_21591[(25)]);
var inst_21550__$1 = cljs.core.seq.call(null,inst_21531);
var state_21591__$1 = (function (){var statearr_21636 = state_21591;
(statearr_21636[(25)] = inst_21550__$1);

return statearr_21636;
})();
if(inst_21550__$1){
var statearr_21637_21705 = state_21591__$1;
(statearr_21637_21705[(1)] = (33));

} else {
var statearr_21638_21706 = state_21591__$1;
(statearr_21638_21706[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (25))){
var inst_21533 = (state_21591[(21)]);
var inst_21534 = (state_21591[(12)]);
var inst_21536 = (inst_21534 < inst_21533);
var inst_21537 = inst_21536;
var state_21591__$1 = state_21591;
if(cljs.core.truth_(inst_21537)){
var statearr_21639_21707 = state_21591__$1;
(statearr_21639_21707[(1)] = (27));

} else {
var statearr_21640_21708 = state_21591__$1;
(statearr_21640_21708[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (34))){
var state_21591__$1 = state_21591;
var statearr_21641_21709 = state_21591__$1;
(statearr_21641_21709[(2)] = null);

(statearr_21641_21709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (17))){
var state_21591__$1 = state_21591;
var statearr_21642_21710 = state_21591__$1;
(statearr_21642_21710[(2)] = null);

(statearr_21642_21710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (3))){
var inst_21589 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21591__$1,inst_21589);
} else {
if((state_val_21592 === (12))){
var inst_21518 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21643_21711 = state_21591__$1;
(statearr_21643_21711[(2)] = inst_21518);

(statearr_21643_21711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (2))){
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21591__$1,(4),ch);
} else {
if((state_val_21592 === (23))){
var state_21591__$1 = state_21591;
var statearr_21644_21712 = state_21591__$1;
(statearr_21644_21712[(2)] = null);

(statearr_21644_21712[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (35))){
var inst_21573 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21645_21713 = state_21591__$1;
(statearr_21645_21713[(2)] = inst_21573);

(statearr_21645_21713[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (19))){
var inst_21492 = (state_21591[(7)]);
var inst_21496 = cljs.core.chunk_first.call(null,inst_21492);
var inst_21497 = cljs.core.chunk_rest.call(null,inst_21492);
var inst_21498 = cljs.core.count.call(null,inst_21496);
var inst_21472 = inst_21497;
var inst_21473 = inst_21496;
var inst_21474 = inst_21498;
var inst_21475 = (0);
var state_21591__$1 = (function (){var statearr_21646 = state_21591;
(statearr_21646[(13)] = inst_21475);

(statearr_21646[(14)] = inst_21473);

(statearr_21646[(16)] = inst_21474);

(statearr_21646[(17)] = inst_21472);

return statearr_21646;
})();
var statearr_21647_21714 = state_21591__$1;
(statearr_21647_21714[(2)] = null);

(statearr_21647_21714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (11))){
var inst_21492 = (state_21591[(7)]);
var inst_21472 = (state_21591[(17)]);
var inst_21492__$1 = cljs.core.seq.call(null,inst_21472);
var state_21591__$1 = (function (){var statearr_21648 = state_21591;
(statearr_21648[(7)] = inst_21492__$1);

return statearr_21648;
})();
if(inst_21492__$1){
var statearr_21649_21715 = state_21591__$1;
(statearr_21649_21715[(1)] = (16));

} else {
var statearr_21650_21716 = state_21591__$1;
(statearr_21650_21716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (9))){
var inst_21520 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21651_21717 = state_21591__$1;
(statearr_21651_21717[(2)] = inst_21520);

(statearr_21651_21717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (5))){
var inst_21470 = cljs.core.deref.call(null,cs);
var inst_21471 = cljs.core.seq.call(null,inst_21470);
var inst_21472 = inst_21471;
var inst_21473 = null;
var inst_21474 = (0);
var inst_21475 = (0);
var state_21591__$1 = (function (){var statearr_21652 = state_21591;
(statearr_21652[(13)] = inst_21475);

(statearr_21652[(14)] = inst_21473);

(statearr_21652[(16)] = inst_21474);

(statearr_21652[(17)] = inst_21472);

return statearr_21652;
})();
var statearr_21653_21718 = state_21591__$1;
(statearr_21653_21718[(2)] = null);

(statearr_21653_21718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (14))){
var state_21591__$1 = state_21591;
var statearr_21654_21719 = state_21591__$1;
(statearr_21654_21719[(2)] = null);

(statearr_21654_21719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (45))){
var inst_21581 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21655_21720 = state_21591__$1;
(statearr_21655_21720[(2)] = inst_21581);

(statearr_21655_21720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (26))){
var inst_21523 = (state_21591[(29)]);
var inst_21577 = (state_21591[(2)]);
var inst_21578 = cljs.core.seq.call(null,inst_21523);
var state_21591__$1 = (function (){var statearr_21656 = state_21591;
(statearr_21656[(31)] = inst_21577);

return statearr_21656;
})();
if(inst_21578){
var statearr_21657_21721 = state_21591__$1;
(statearr_21657_21721[(1)] = (42));

} else {
var statearr_21658_21722 = state_21591__$1;
(statearr_21658_21722[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (16))){
var inst_21492 = (state_21591[(7)]);
var inst_21494 = cljs.core.chunked_seq_QMARK_.call(null,inst_21492);
var state_21591__$1 = state_21591;
if(inst_21494){
var statearr_21659_21723 = state_21591__$1;
(statearr_21659_21723[(1)] = (19));

} else {
var statearr_21660_21724 = state_21591__$1;
(statearr_21660_21724[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (38))){
var inst_21570 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21661_21725 = state_21591__$1;
(statearr_21661_21725[(2)] = inst_21570);

(statearr_21661_21725[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (30))){
var state_21591__$1 = state_21591;
var statearr_21662_21726 = state_21591__$1;
(statearr_21662_21726[(2)] = null);

(statearr_21662_21726[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (10))){
var inst_21475 = (state_21591[(13)]);
var inst_21473 = (state_21591[(14)]);
var inst_21481 = cljs.core._nth.call(null,inst_21473,inst_21475);
var inst_21482 = cljs.core.nth.call(null,inst_21481,(0),null);
var inst_21483 = cljs.core.nth.call(null,inst_21481,(1),null);
var state_21591__$1 = (function (){var statearr_21663 = state_21591;
(statearr_21663[(26)] = inst_21482);

return statearr_21663;
})();
if(cljs.core.truth_(inst_21483)){
var statearr_21664_21727 = state_21591__$1;
(statearr_21664_21727[(1)] = (13));

} else {
var statearr_21665_21728 = state_21591__$1;
(statearr_21665_21728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (18))){
var inst_21516 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21666_21729 = state_21591__$1;
(statearr_21666_21729[(2)] = inst_21516);

(statearr_21666_21729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (42))){
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21591__$1,(45),dchan);
} else {
if((state_val_21592 === (37))){
var inst_21559 = (state_21591[(23)]);
var inst_21550 = (state_21591[(25)]);
var inst_21463 = (state_21591[(11)]);
var inst_21559__$1 = cljs.core.first.call(null,inst_21550);
var inst_21560 = cljs.core.async.put_BANG_.call(null,inst_21559__$1,inst_21463,done);
var state_21591__$1 = (function (){var statearr_21667 = state_21591;
(statearr_21667[(23)] = inst_21559__$1);

return statearr_21667;
})();
if(cljs.core.truth_(inst_21560)){
var statearr_21668_21730 = state_21591__$1;
(statearr_21668_21730[(1)] = (39));

} else {
var statearr_21669_21731 = state_21591__$1;
(statearr_21669_21731[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (8))){
var inst_21475 = (state_21591[(13)]);
var inst_21474 = (state_21591[(16)]);
var inst_21477 = (inst_21475 < inst_21474);
var inst_21478 = inst_21477;
var state_21591__$1 = state_21591;
if(cljs.core.truth_(inst_21478)){
var statearr_21670_21732 = state_21591__$1;
(statearr_21670_21732[(1)] = (10));

} else {
var statearr_21671_21733 = state_21591__$1;
(statearr_21671_21733[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___21679,cs,m,dchan,dctr,done))
;
return ((function (switch__20260__auto__,c__20372__auto___21679,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20261__auto__ = null;
var cljs$core$async$mult_$_state_machine__20261__auto____0 = (function (){
var statearr_21675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21675[(0)] = cljs$core$async$mult_$_state_machine__20261__auto__);

(statearr_21675[(1)] = (1));

return statearr_21675;
});
var cljs$core$async$mult_$_state_machine__20261__auto____1 = (function (state_21591){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_21591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e21676){if((e21676 instanceof Object)){
var ex__20264__auto__ = e21676;
var statearr_21677_21734 = state_21591;
(statearr_21677_21734[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21735 = state_21591;
state_21591 = G__21735;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20261__auto__ = function(state_21591){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20261__auto____1.call(this,state_21591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20261__auto____0;
cljs$core$async$mult_$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20261__auto____1;
return cljs$core$async$mult_$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___21679,cs,m,dchan,dctr,done))
})();
var state__20374__auto__ = (function (){var statearr_21678 = f__20373__auto__.call(null);
(statearr_21678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___21679);

return statearr_21678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___21679,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21736 = [];
var len__17884__auto___21739 = arguments.length;
var i__17885__auto___21740 = (0);
while(true){
if((i__17885__auto___21740 < len__17884__auto___21739)){
args21736.push((arguments[i__17885__auto___21740]));

var G__21741 = (i__17885__auto___21740 + (1));
i__17885__auto___21740 = G__21741;
continue;
} else {
}
break;
}

var G__21738 = args21736.length;
switch (G__21738) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21736.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21753 = arguments.length;
var i__17885__auto___21754 = (0);
while(true){
if((i__17885__auto___21754 < len__17884__auto___21753)){
args__17891__auto__.push((arguments[i__17885__auto___21754]));

var G__21755 = (i__17885__auto___21754 + (1));
i__17885__auto___21754 = G__21755;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21747){
var map__21748 = p__21747;
var map__21748__$1 = ((((!((map__21748 == null)))?((((map__21748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21748):map__21748);
var opts = map__21748__$1;
var statearr_21750_21756 = state;
(statearr_21750_21756[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21748,map__21748__$1,opts){
return (function (val){
var statearr_21751_21757 = state;
(statearr_21751_21757[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21748,map__21748__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21752_21758 = state;
(statearr_21752_21758[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21743){
var G__21744 = cljs.core.first.call(null,seq21743);
var seq21743__$1 = cljs.core.next.call(null,seq21743);
var G__21745 = cljs.core.first.call(null,seq21743__$1);
var seq21743__$2 = cljs.core.next.call(null,seq21743__$1);
var G__21746 = cljs.core.first.call(null,seq21743__$2);
var seq21743__$3 = cljs.core.next.call(null,seq21743__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21744,G__21745,G__21746,seq21743__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21922 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21923){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21923 = meta21923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21924,meta21923__$1){
var self__ = this;
var _21924__$1 = this;
return (new cljs.core.async.t_cljs$core$async21922(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21923__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21924){
var self__ = this;
var _21924__$1 = this;
return self__.meta21923;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21923","meta21923",-1703739189,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21922";

cljs.core.async.t_cljs$core$async21922.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21922");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21922 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21922(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21923){
return (new cljs.core.async.t_cljs$core$async21922(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21923));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21922(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20372__auto___22085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22022){
var state_val_22023 = (state_22022[(1)]);
if((state_val_22023 === (7))){
var inst_21940 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22024_22086 = state_22022__$1;
(statearr_22024_22086[(2)] = inst_21940);

(statearr_22024_22086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (20))){
var inst_21952 = (state_22022[(7)]);
var state_22022__$1 = state_22022;
var statearr_22025_22087 = state_22022__$1;
(statearr_22025_22087[(2)] = inst_21952);

(statearr_22025_22087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (27))){
var state_22022__$1 = state_22022;
var statearr_22026_22088 = state_22022__$1;
(statearr_22026_22088[(2)] = null);

(statearr_22026_22088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (1))){
var inst_21928 = (state_22022[(8)]);
var inst_21928__$1 = calc_state.call(null);
var inst_21930 = (inst_21928__$1 == null);
var inst_21931 = cljs.core.not.call(null,inst_21930);
var state_22022__$1 = (function (){var statearr_22027 = state_22022;
(statearr_22027[(8)] = inst_21928__$1);

return statearr_22027;
})();
if(inst_21931){
var statearr_22028_22089 = state_22022__$1;
(statearr_22028_22089[(1)] = (2));

} else {
var statearr_22029_22090 = state_22022__$1;
(statearr_22029_22090[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (24))){
var inst_21996 = (state_22022[(9)]);
var inst_21982 = (state_22022[(10)]);
var inst_21975 = (state_22022[(11)]);
var inst_21996__$1 = inst_21975.call(null,inst_21982);
var state_22022__$1 = (function (){var statearr_22030 = state_22022;
(statearr_22030[(9)] = inst_21996__$1);

return statearr_22030;
})();
if(cljs.core.truth_(inst_21996__$1)){
var statearr_22031_22091 = state_22022__$1;
(statearr_22031_22091[(1)] = (29));

} else {
var statearr_22032_22092 = state_22022__$1;
(statearr_22032_22092[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (4))){
var inst_21943 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_21943)){
var statearr_22033_22093 = state_22022__$1;
(statearr_22033_22093[(1)] = (8));

} else {
var statearr_22034_22094 = state_22022__$1;
(statearr_22034_22094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (15))){
var inst_21969 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_21969)){
var statearr_22035_22095 = state_22022__$1;
(statearr_22035_22095[(1)] = (19));

} else {
var statearr_22036_22096 = state_22022__$1;
(statearr_22036_22096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (21))){
var inst_21974 = (state_22022[(12)]);
var inst_21974__$1 = (state_22022[(2)]);
var inst_21975 = cljs.core.get.call(null,inst_21974__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21976 = cljs.core.get.call(null,inst_21974__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21977 = cljs.core.get.call(null,inst_21974__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22022__$1 = (function (){var statearr_22037 = state_22022;
(statearr_22037[(13)] = inst_21976);

(statearr_22037[(11)] = inst_21975);

(statearr_22037[(12)] = inst_21974__$1);

return statearr_22037;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22022__$1,(22),inst_21977);
} else {
if((state_val_22023 === (31))){
var inst_22004 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_22004)){
var statearr_22038_22097 = state_22022__$1;
(statearr_22038_22097[(1)] = (32));

} else {
var statearr_22039_22098 = state_22022__$1;
(statearr_22039_22098[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (32))){
var inst_21981 = (state_22022[(14)]);
var state_22022__$1 = state_22022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22022__$1,(35),out,inst_21981);
} else {
if((state_val_22023 === (33))){
var inst_21974 = (state_22022[(12)]);
var inst_21952 = inst_21974;
var state_22022__$1 = (function (){var statearr_22040 = state_22022;
(statearr_22040[(7)] = inst_21952);

return statearr_22040;
})();
var statearr_22041_22099 = state_22022__$1;
(statearr_22041_22099[(2)] = null);

(statearr_22041_22099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (13))){
var inst_21952 = (state_22022[(7)]);
var inst_21959 = inst_21952.cljs$lang$protocol_mask$partition0$;
var inst_21960 = (inst_21959 & (64));
var inst_21961 = inst_21952.cljs$core$ISeq$;
var inst_21962 = (inst_21960) || (inst_21961);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_21962)){
var statearr_22042_22100 = state_22022__$1;
(statearr_22042_22100[(1)] = (16));

} else {
var statearr_22043_22101 = state_22022__$1;
(statearr_22043_22101[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (22))){
var inst_21981 = (state_22022[(14)]);
var inst_21982 = (state_22022[(10)]);
var inst_21980 = (state_22022[(2)]);
var inst_21981__$1 = cljs.core.nth.call(null,inst_21980,(0),null);
var inst_21982__$1 = cljs.core.nth.call(null,inst_21980,(1),null);
var inst_21983 = (inst_21981__$1 == null);
var inst_21984 = cljs.core._EQ_.call(null,inst_21982__$1,change);
var inst_21985 = (inst_21983) || (inst_21984);
var state_22022__$1 = (function (){var statearr_22044 = state_22022;
(statearr_22044[(14)] = inst_21981__$1);

(statearr_22044[(10)] = inst_21982__$1);

return statearr_22044;
})();
if(cljs.core.truth_(inst_21985)){
var statearr_22045_22102 = state_22022__$1;
(statearr_22045_22102[(1)] = (23));

} else {
var statearr_22046_22103 = state_22022__$1;
(statearr_22046_22103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (36))){
var inst_21974 = (state_22022[(12)]);
var inst_21952 = inst_21974;
var state_22022__$1 = (function (){var statearr_22047 = state_22022;
(statearr_22047[(7)] = inst_21952);

return statearr_22047;
})();
var statearr_22048_22104 = state_22022__$1;
(statearr_22048_22104[(2)] = null);

(statearr_22048_22104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (29))){
var inst_21996 = (state_22022[(9)]);
var state_22022__$1 = state_22022;
var statearr_22049_22105 = state_22022__$1;
(statearr_22049_22105[(2)] = inst_21996);

(statearr_22049_22105[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (6))){
var state_22022__$1 = state_22022;
var statearr_22050_22106 = state_22022__$1;
(statearr_22050_22106[(2)] = false);

(statearr_22050_22106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (28))){
var inst_21992 = (state_22022[(2)]);
var inst_21993 = calc_state.call(null);
var inst_21952 = inst_21993;
var state_22022__$1 = (function (){var statearr_22051 = state_22022;
(statearr_22051[(7)] = inst_21952);

(statearr_22051[(15)] = inst_21992);

return statearr_22051;
})();
var statearr_22052_22107 = state_22022__$1;
(statearr_22052_22107[(2)] = null);

(statearr_22052_22107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (25))){
var inst_22018 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22053_22108 = state_22022__$1;
(statearr_22053_22108[(2)] = inst_22018);

(statearr_22053_22108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (34))){
var inst_22016 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22054_22109 = state_22022__$1;
(statearr_22054_22109[(2)] = inst_22016);

(statearr_22054_22109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (17))){
var state_22022__$1 = state_22022;
var statearr_22055_22110 = state_22022__$1;
(statearr_22055_22110[(2)] = false);

(statearr_22055_22110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (3))){
var state_22022__$1 = state_22022;
var statearr_22056_22111 = state_22022__$1;
(statearr_22056_22111[(2)] = false);

(statearr_22056_22111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (12))){
var inst_22020 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22022__$1,inst_22020);
} else {
if((state_val_22023 === (2))){
var inst_21928 = (state_22022[(8)]);
var inst_21933 = inst_21928.cljs$lang$protocol_mask$partition0$;
var inst_21934 = (inst_21933 & (64));
var inst_21935 = inst_21928.cljs$core$ISeq$;
var inst_21936 = (inst_21934) || (inst_21935);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_21936)){
var statearr_22057_22112 = state_22022__$1;
(statearr_22057_22112[(1)] = (5));

} else {
var statearr_22058_22113 = state_22022__$1;
(statearr_22058_22113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (23))){
var inst_21981 = (state_22022[(14)]);
var inst_21987 = (inst_21981 == null);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_21987)){
var statearr_22059_22114 = state_22022__$1;
(statearr_22059_22114[(1)] = (26));

} else {
var statearr_22060_22115 = state_22022__$1;
(statearr_22060_22115[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (35))){
var inst_22007 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
if(cljs.core.truth_(inst_22007)){
var statearr_22061_22116 = state_22022__$1;
(statearr_22061_22116[(1)] = (36));

} else {
var statearr_22062_22117 = state_22022__$1;
(statearr_22062_22117[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (19))){
var inst_21952 = (state_22022[(7)]);
var inst_21971 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21952);
var state_22022__$1 = state_22022;
var statearr_22063_22118 = state_22022__$1;
(statearr_22063_22118[(2)] = inst_21971);

(statearr_22063_22118[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (11))){
var inst_21952 = (state_22022[(7)]);
var inst_21956 = (inst_21952 == null);
var inst_21957 = cljs.core.not.call(null,inst_21956);
var state_22022__$1 = state_22022;
if(inst_21957){
var statearr_22064_22119 = state_22022__$1;
(statearr_22064_22119[(1)] = (13));

} else {
var statearr_22065_22120 = state_22022__$1;
(statearr_22065_22120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (9))){
var inst_21928 = (state_22022[(8)]);
var state_22022__$1 = state_22022;
var statearr_22066_22121 = state_22022__$1;
(statearr_22066_22121[(2)] = inst_21928);

(statearr_22066_22121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (5))){
var state_22022__$1 = state_22022;
var statearr_22067_22122 = state_22022__$1;
(statearr_22067_22122[(2)] = true);

(statearr_22067_22122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (14))){
var state_22022__$1 = state_22022;
var statearr_22068_22123 = state_22022__$1;
(statearr_22068_22123[(2)] = false);

(statearr_22068_22123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (26))){
var inst_21982 = (state_22022[(10)]);
var inst_21989 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21982);
var state_22022__$1 = state_22022;
var statearr_22069_22124 = state_22022__$1;
(statearr_22069_22124[(2)] = inst_21989);

(statearr_22069_22124[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (16))){
var state_22022__$1 = state_22022;
var statearr_22070_22125 = state_22022__$1;
(statearr_22070_22125[(2)] = true);

(statearr_22070_22125[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (38))){
var inst_22012 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22071_22126 = state_22022__$1;
(statearr_22071_22126[(2)] = inst_22012);

(statearr_22071_22126[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (30))){
var inst_21976 = (state_22022[(13)]);
var inst_21982 = (state_22022[(10)]);
var inst_21975 = (state_22022[(11)]);
var inst_21999 = cljs.core.empty_QMARK_.call(null,inst_21975);
var inst_22000 = inst_21976.call(null,inst_21982);
var inst_22001 = cljs.core.not.call(null,inst_22000);
var inst_22002 = (inst_21999) && (inst_22001);
var state_22022__$1 = state_22022;
var statearr_22072_22127 = state_22022__$1;
(statearr_22072_22127[(2)] = inst_22002);

(statearr_22072_22127[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (10))){
var inst_21928 = (state_22022[(8)]);
var inst_21948 = (state_22022[(2)]);
var inst_21949 = cljs.core.get.call(null,inst_21948,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21950 = cljs.core.get.call(null,inst_21948,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21951 = cljs.core.get.call(null,inst_21948,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21952 = inst_21928;
var state_22022__$1 = (function (){var statearr_22073 = state_22022;
(statearr_22073[(7)] = inst_21952);

(statearr_22073[(16)] = inst_21951);

(statearr_22073[(17)] = inst_21949);

(statearr_22073[(18)] = inst_21950);

return statearr_22073;
})();
var statearr_22074_22128 = state_22022__$1;
(statearr_22074_22128[(2)] = null);

(statearr_22074_22128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (18))){
var inst_21966 = (state_22022[(2)]);
var state_22022__$1 = state_22022;
var statearr_22075_22129 = state_22022__$1;
(statearr_22075_22129[(2)] = inst_21966);

(statearr_22075_22129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (37))){
var state_22022__$1 = state_22022;
var statearr_22076_22130 = state_22022__$1;
(statearr_22076_22130[(2)] = null);

(statearr_22076_22130[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22023 === (8))){
var inst_21928 = (state_22022[(8)]);
var inst_21945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21928);
var state_22022__$1 = state_22022;
var statearr_22077_22131 = state_22022__$1;
(statearr_22077_22131[(2)] = inst_21945);

(statearr_22077_22131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___22085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20260__auto__,c__20372__auto___22085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20261__auto__ = null;
var cljs$core$async$mix_$_state_machine__20261__auto____0 = (function (){
var statearr_22081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22081[(0)] = cljs$core$async$mix_$_state_machine__20261__auto__);

(statearr_22081[(1)] = (1));

return statearr_22081;
});
var cljs$core$async$mix_$_state_machine__20261__auto____1 = (function (state_22022){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22082){if((e22082 instanceof Object)){
var ex__20264__auto__ = e22082;
var statearr_22083_22132 = state_22022;
(statearr_22083_22132[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22133 = state_22022;
state_22022 = G__22133;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20261__auto__ = function(state_22022){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20261__auto____1.call(this,state_22022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20261__auto____0;
cljs$core$async$mix_$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20261__auto____1;
return cljs$core$async$mix_$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___22085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20374__auto__ = (function (){var statearr_22084 = f__20373__auto__.call(null);
(statearr_22084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___22085);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___22085,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22134 = [];
var len__17884__auto___22137 = arguments.length;
var i__17885__auto___22138 = (0);
while(true){
if((i__17885__auto___22138 < len__17884__auto___22137)){
args22134.push((arguments[i__17885__auto___22138]));

var G__22139 = (i__17885__auto___22138 + (1));
i__17885__auto___22138 = G__22139;
continue;
} else {
}
break;
}

var G__22136 = args22134.length;
switch (G__22136) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22134.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22142 = [];
var len__17884__auto___22267 = arguments.length;
var i__17885__auto___22268 = (0);
while(true){
if((i__17885__auto___22268 < len__17884__auto___22267)){
args22142.push((arguments[i__17885__auto___22268]));

var G__22269 = (i__17885__auto___22268 + (1));
i__17885__auto___22268 = G__22269;
continue;
} else {
}
break;
}

var G__22144 = args22142.length;
switch (G__22144) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22142.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__22141_SHARP_){
if(cljs.core.truth_(p1__22141_SHARP_.call(null,topic))){
return p1__22141_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22141_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22145 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22146){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22146 = meta22146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22147,meta22146__$1){
var self__ = this;
var _22147__$1 = this;
return (new cljs.core.async.t_cljs$core$async22145(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22146__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22147){
var self__ = this;
var _22147__$1 = this;
return self__.meta22146;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22146","meta22146",769667059,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22145";

cljs.core.async.t_cljs$core$async22145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22145");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22145 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22145(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22146){
return (new cljs.core.async.t_cljs$core$async22145(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22146));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22145(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20372__auto___22271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22271,mults,ensure_mult,p){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22271,mults,ensure_mult,p){
return (function (state_22219){
var state_val_22220 = (state_22219[(1)]);
if((state_val_22220 === (7))){
var inst_22215 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22221_22272 = state_22219__$1;
(statearr_22221_22272[(2)] = inst_22215);

(statearr_22221_22272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (20))){
var state_22219__$1 = state_22219;
var statearr_22222_22273 = state_22219__$1;
(statearr_22222_22273[(2)] = null);

(statearr_22222_22273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (1))){
var state_22219__$1 = state_22219;
var statearr_22223_22274 = state_22219__$1;
(statearr_22223_22274[(2)] = null);

(statearr_22223_22274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (24))){
var inst_22198 = (state_22219[(7)]);
var inst_22207 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22198);
var state_22219__$1 = state_22219;
var statearr_22224_22275 = state_22219__$1;
(statearr_22224_22275[(2)] = inst_22207);

(statearr_22224_22275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (4))){
var inst_22150 = (state_22219[(8)]);
var inst_22150__$1 = (state_22219[(2)]);
var inst_22151 = (inst_22150__$1 == null);
var state_22219__$1 = (function (){var statearr_22225 = state_22219;
(statearr_22225[(8)] = inst_22150__$1);

return statearr_22225;
})();
if(cljs.core.truth_(inst_22151)){
var statearr_22226_22276 = state_22219__$1;
(statearr_22226_22276[(1)] = (5));

} else {
var statearr_22227_22277 = state_22219__$1;
(statearr_22227_22277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (15))){
var inst_22192 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22228_22278 = state_22219__$1;
(statearr_22228_22278[(2)] = inst_22192);

(statearr_22228_22278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (21))){
var inst_22212 = (state_22219[(2)]);
var state_22219__$1 = (function (){var statearr_22229 = state_22219;
(statearr_22229[(9)] = inst_22212);

return statearr_22229;
})();
var statearr_22230_22279 = state_22219__$1;
(statearr_22230_22279[(2)] = null);

(statearr_22230_22279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (13))){
var inst_22174 = (state_22219[(10)]);
var inst_22176 = cljs.core.chunked_seq_QMARK_.call(null,inst_22174);
var state_22219__$1 = state_22219;
if(inst_22176){
var statearr_22231_22280 = state_22219__$1;
(statearr_22231_22280[(1)] = (16));

} else {
var statearr_22232_22281 = state_22219__$1;
(statearr_22232_22281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (22))){
var inst_22204 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
if(cljs.core.truth_(inst_22204)){
var statearr_22233_22282 = state_22219__$1;
(statearr_22233_22282[(1)] = (23));

} else {
var statearr_22234_22283 = state_22219__$1;
(statearr_22234_22283[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (6))){
var inst_22150 = (state_22219[(8)]);
var inst_22200 = (state_22219[(11)]);
var inst_22198 = (state_22219[(7)]);
var inst_22198__$1 = topic_fn.call(null,inst_22150);
var inst_22199 = cljs.core.deref.call(null,mults);
var inst_22200__$1 = cljs.core.get.call(null,inst_22199,inst_22198__$1);
var state_22219__$1 = (function (){var statearr_22235 = state_22219;
(statearr_22235[(11)] = inst_22200__$1);

(statearr_22235[(7)] = inst_22198__$1);

return statearr_22235;
})();
if(cljs.core.truth_(inst_22200__$1)){
var statearr_22236_22284 = state_22219__$1;
(statearr_22236_22284[(1)] = (19));

} else {
var statearr_22237_22285 = state_22219__$1;
(statearr_22237_22285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (25))){
var inst_22209 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22238_22286 = state_22219__$1;
(statearr_22238_22286[(2)] = inst_22209);

(statearr_22238_22286[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (17))){
var inst_22174 = (state_22219[(10)]);
var inst_22183 = cljs.core.first.call(null,inst_22174);
var inst_22184 = cljs.core.async.muxch_STAR_.call(null,inst_22183);
var inst_22185 = cljs.core.async.close_BANG_.call(null,inst_22184);
var inst_22186 = cljs.core.next.call(null,inst_22174);
var inst_22160 = inst_22186;
var inst_22161 = null;
var inst_22162 = (0);
var inst_22163 = (0);
var state_22219__$1 = (function (){var statearr_22239 = state_22219;
(statearr_22239[(12)] = inst_22160);

(statearr_22239[(13)] = inst_22185);

(statearr_22239[(14)] = inst_22163);

(statearr_22239[(15)] = inst_22161);

(statearr_22239[(16)] = inst_22162);

return statearr_22239;
})();
var statearr_22240_22287 = state_22219__$1;
(statearr_22240_22287[(2)] = null);

(statearr_22240_22287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (3))){
var inst_22217 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22219__$1,inst_22217);
} else {
if((state_val_22220 === (12))){
var inst_22194 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22241_22288 = state_22219__$1;
(statearr_22241_22288[(2)] = inst_22194);

(statearr_22241_22288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (2))){
var state_22219__$1 = state_22219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22219__$1,(4),ch);
} else {
if((state_val_22220 === (23))){
var state_22219__$1 = state_22219;
var statearr_22242_22289 = state_22219__$1;
(statearr_22242_22289[(2)] = null);

(statearr_22242_22289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (19))){
var inst_22150 = (state_22219[(8)]);
var inst_22200 = (state_22219[(11)]);
var inst_22202 = cljs.core.async.muxch_STAR_.call(null,inst_22200);
var state_22219__$1 = state_22219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22219__$1,(22),inst_22202,inst_22150);
} else {
if((state_val_22220 === (11))){
var inst_22160 = (state_22219[(12)]);
var inst_22174 = (state_22219[(10)]);
var inst_22174__$1 = cljs.core.seq.call(null,inst_22160);
var state_22219__$1 = (function (){var statearr_22243 = state_22219;
(statearr_22243[(10)] = inst_22174__$1);

return statearr_22243;
})();
if(inst_22174__$1){
var statearr_22244_22290 = state_22219__$1;
(statearr_22244_22290[(1)] = (13));

} else {
var statearr_22245_22291 = state_22219__$1;
(statearr_22245_22291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (9))){
var inst_22196 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22246_22292 = state_22219__$1;
(statearr_22246_22292[(2)] = inst_22196);

(statearr_22246_22292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (5))){
var inst_22157 = cljs.core.deref.call(null,mults);
var inst_22158 = cljs.core.vals.call(null,inst_22157);
var inst_22159 = cljs.core.seq.call(null,inst_22158);
var inst_22160 = inst_22159;
var inst_22161 = null;
var inst_22162 = (0);
var inst_22163 = (0);
var state_22219__$1 = (function (){var statearr_22247 = state_22219;
(statearr_22247[(12)] = inst_22160);

(statearr_22247[(14)] = inst_22163);

(statearr_22247[(15)] = inst_22161);

(statearr_22247[(16)] = inst_22162);

return statearr_22247;
})();
var statearr_22248_22293 = state_22219__$1;
(statearr_22248_22293[(2)] = null);

(statearr_22248_22293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (14))){
var state_22219__$1 = state_22219;
var statearr_22252_22294 = state_22219__$1;
(statearr_22252_22294[(2)] = null);

(statearr_22252_22294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (16))){
var inst_22174 = (state_22219[(10)]);
var inst_22178 = cljs.core.chunk_first.call(null,inst_22174);
var inst_22179 = cljs.core.chunk_rest.call(null,inst_22174);
var inst_22180 = cljs.core.count.call(null,inst_22178);
var inst_22160 = inst_22179;
var inst_22161 = inst_22178;
var inst_22162 = inst_22180;
var inst_22163 = (0);
var state_22219__$1 = (function (){var statearr_22253 = state_22219;
(statearr_22253[(12)] = inst_22160);

(statearr_22253[(14)] = inst_22163);

(statearr_22253[(15)] = inst_22161);

(statearr_22253[(16)] = inst_22162);

return statearr_22253;
})();
var statearr_22254_22295 = state_22219__$1;
(statearr_22254_22295[(2)] = null);

(statearr_22254_22295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (10))){
var inst_22160 = (state_22219[(12)]);
var inst_22163 = (state_22219[(14)]);
var inst_22161 = (state_22219[(15)]);
var inst_22162 = (state_22219[(16)]);
var inst_22168 = cljs.core._nth.call(null,inst_22161,inst_22163);
var inst_22169 = cljs.core.async.muxch_STAR_.call(null,inst_22168);
var inst_22170 = cljs.core.async.close_BANG_.call(null,inst_22169);
var inst_22171 = (inst_22163 + (1));
var tmp22249 = inst_22160;
var tmp22250 = inst_22161;
var tmp22251 = inst_22162;
var inst_22160__$1 = tmp22249;
var inst_22161__$1 = tmp22250;
var inst_22162__$1 = tmp22251;
var inst_22163__$1 = inst_22171;
var state_22219__$1 = (function (){var statearr_22255 = state_22219;
(statearr_22255[(12)] = inst_22160__$1);

(statearr_22255[(14)] = inst_22163__$1);

(statearr_22255[(15)] = inst_22161__$1);

(statearr_22255[(16)] = inst_22162__$1);

(statearr_22255[(17)] = inst_22170);

return statearr_22255;
})();
var statearr_22256_22296 = state_22219__$1;
(statearr_22256_22296[(2)] = null);

(statearr_22256_22296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (18))){
var inst_22189 = (state_22219[(2)]);
var state_22219__$1 = state_22219;
var statearr_22257_22297 = state_22219__$1;
(statearr_22257_22297[(2)] = inst_22189);

(statearr_22257_22297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22220 === (8))){
var inst_22163 = (state_22219[(14)]);
var inst_22162 = (state_22219[(16)]);
var inst_22165 = (inst_22163 < inst_22162);
var inst_22166 = inst_22165;
var state_22219__$1 = state_22219;
if(cljs.core.truth_(inst_22166)){
var statearr_22258_22298 = state_22219__$1;
(statearr_22258_22298[(1)] = (10));

} else {
var statearr_22259_22299 = state_22219__$1;
(statearr_22259_22299[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___22271,mults,ensure_mult,p))
;
return ((function (switch__20260__auto__,c__20372__auto___22271,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_22263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22263[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_22263[(1)] = (1));

return statearr_22263;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_22219){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22264){if((e22264 instanceof Object)){
var ex__20264__auto__ = e22264;
var statearr_22265_22300 = state_22219;
(statearr_22265_22300[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22301 = state_22219;
state_22219 = G__22301;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_22219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_22219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___22271,mults,ensure_mult,p))
})();
var state__20374__auto__ = (function (){var statearr_22266 = f__20373__auto__.call(null);
(statearr_22266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___22271);

return statearr_22266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___22271,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22302 = [];
var len__17884__auto___22305 = arguments.length;
var i__17885__auto___22306 = (0);
while(true){
if((i__17885__auto___22306 < len__17884__auto___22305)){
args22302.push((arguments[i__17885__auto___22306]));

var G__22307 = (i__17885__auto___22306 + (1));
i__17885__auto___22306 = G__22307;
continue;
} else {
}
break;
}

var G__22304 = args22302.length;
switch (G__22304) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22302.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22309 = [];
var len__17884__auto___22312 = arguments.length;
var i__17885__auto___22313 = (0);
while(true){
if((i__17885__auto___22313 < len__17884__auto___22312)){
args22309.push((arguments[i__17885__auto___22313]));

var G__22314 = (i__17885__auto___22313 + (1));
i__17885__auto___22313 = G__22314;
continue;
} else {
}
break;
}

var G__22311 = args22309.length;
switch (G__22311) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22309.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22316 = [];
var len__17884__auto___22387 = arguments.length;
var i__17885__auto___22388 = (0);
while(true){
if((i__17885__auto___22388 < len__17884__auto___22387)){
args22316.push((arguments[i__17885__auto___22388]));

var G__22389 = (i__17885__auto___22388 + (1));
i__17885__auto___22388 = G__22389;
continue;
} else {
}
break;
}

var G__22318 = args22316.length;
switch (G__22318) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22316.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20372__auto___22391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22357){
var state_val_22358 = (state_22357[(1)]);
if((state_val_22358 === (7))){
var state_22357__$1 = state_22357;
var statearr_22359_22392 = state_22357__$1;
(statearr_22359_22392[(2)] = null);

(statearr_22359_22392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (1))){
var state_22357__$1 = state_22357;
var statearr_22360_22393 = state_22357__$1;
(statearr_22360_22393[(2)] = null);

(statearr_22360_22393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (4))){
var inst_22321 = (state_22357[(7)]);
var inst_22323 = (inst_22321 < cnt);
var state_22357__$1 = state_22357;
if(cljs.core.truth_(inst_22323)){
var statearr_22361_22394 = state_22357__$1;
(statearr_22361_22394[(1)] = (6));

} else {
var statearr_22362_22395 = state_22357__$1;
(statearr_22362_22395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (15))){
var inst_22353 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22363_22396 = state_22357__$1;
(statearr_22363_22396[(2)] = inst_22353);

(statearr_22363_22396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (13))){
var inst_22346 = cljs.core.async.close_BANG_.call(null,out);
var state_22357__$1 = state_22357;
var statearr_22364_22397 = state_22357__$1;
(statearr_22364_22397[(2)] = inst_22346);

(statearr_22364_22397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (6))){
var state_22357__$1 = state_22357;
var statearr_22365_22398 = state_22357__$1;
(statearr_22365_22398[(2)] = null);

(statearr_22365_22398[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (3))){
var inst_22355 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22357__$1,inst_22355);
} else {
if((state_val_22358 === (12))){
var inst_22343 = (state_22357[(8)]);
var inst_22343__$1 = (state_22357[(2)]);
var inst_22344 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22343__$1);
var state_22357__$1 = (function (){var statearr_22366 = state_22357;
(statearr_22366[(8)] = inst_22343__$1);

return statearr_22366;
})();
if(cljs.core.truth_(inst_22344)){
var statearr_22367_22399 = state_22357__$1;
(statearr_22367_22399[(1)] = (13));

} else {
var statearr_22368_22400 = state_22357__$1;
(statearr_22368_22400[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (2))){
var inst_22320 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22321 = (0);
var state_22357__$1 = (function (){var statearr_22369 = state_22357;
(statearr_22369[(9)] = inst_22320);

(statearr_22369[(7)] = inst_22321);

return statearr_22369;
})();
var statearr_22370_22401 = state_22357__$1;
(statearr_22370_22401[(2)] = null);

(statearr_22370_22401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (11))){
var inst_22321 = (state_22357[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22357,(10),Object,null,(9));
var inst_22330 = chs__$1.call(null,inst_22321);
var inst_22331 = done.call(null,inst_22321);
var inst_22332 = cljs.core.async.take_BANG_.call(null,inst_22330,inst_22331);
var state_22357__$1 = state_22357;
var statearr_22371_22402 = state_22357__$1;
(statearr_22371_22402[(2)] = inst_22332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22357__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (9))){
var inst_22321 = (state_22357[(7)]);
var inst_22334 = (state_22357[(2)]);
var inst_22335 = (inst_22321 + (1));
var inst_22321__$1 = inst_22335;
var state_22357__$1 = (function (){var statearr_22372 = state_22357;
(statearr_22372[(10)] = inst_22334);

(statearr_22372[(7)] = inst_22321__$1);

return statearr_22372;
})();
var statearr_22373_22403 = state_22357__$1;
(statearr_22373_22403[(2)] = null);

(statearr_22373_22403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (5))){
var inst_22341 = (state_22357[(2)]);
var state_22357__$1 = (function (){var statearr_22374 = state_22357;
(statearr_22374[(11)] = inst_22341);

return statearr_22374;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22357__$1,(12),dchan);
} else {
if((state_val_22358 === (14))){
var inst_22343 = (state_22357[(8)]);
var inst_22348 = cljs.core.apply.call(null,f,inst_22343);
var state_22357__$1 = state_22357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22357__$1,(16),out,inst_22348);
} else {
if((state_val_22358 === (16))){
var inst_22350 = (state_22357[(2)]);
var state_22357__$1 = (function (){var statearr_22375 = state_22357;
(statearr_22375[(12)] = inst_22350);

return statearr_22375;
})();
var statearr_22376_22404 = state_22357__$1;
(statearr_22376_22404[(2)] = null);

(statearr_22376_22404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (10))){
var inst_22325 = (state_22357[(2)]);
var inst_22326 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22357__$1 = (function (){var statearr_22377 = state_22357;
(statearr_22377[(13)] = inst_22325);

return statearr_22377;
})();
var statearr_22378_22405 = state_22357__$1;
(statearr_22378_22405[(2)] = inst_22326);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22357__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22358 === (8))){
var inst_22339 = (state_22357[(2)]);
var state_22357__$1 = state_22357;
var statearr_22379_22406 = state_22357__$1;
(statearr_22379_22406[(2)] = inst_22339);

(statearr_22379_22406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___22391,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20260__auto__,c__20372__auto___22391,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_22383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22383[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_22383[(1)] = (1));

return statearr_22383;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_22357){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22384){if((e22384 instanceof Object)){
var ex__20264__auto__ = e22384;
var statearr_22385_22407 = state_22357;
(statearr_22385_22407[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22408 = state_22357;
state_22357 = G__22408;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_22357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_22357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___22391,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20374__auto__ = (function (){var statearr_22386 = f__20373__auto__.call(null);
(statearr_22386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___22391);

return statearr_22386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___22391,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22410 = [];
var len__17884__auto___22466 = arguments.length;
var i__17885__auto___22467 = (0);
while(true){
if((i__17885__auto___22467 < len__17884__auto___22466)){
args22410.push((arguments[i__17885__auto___22467]));

var G__22468 = (i__17885__auto___22467 + (1));
i__17885__auto___22467 = G__22468;
continue;
} else {
}
break;
}

var G__22412 = args22410.length;
switch (G__22412) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22410.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20372__auto___22470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22470,out){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22470,out){
return (function (state_22442){
var state_val_22443 = (state_22442[(1)]);
if((state_val_22443 === (7))){
var inst_22422 = (state_22442[(7)]);
var inst_22421 = (state_22442[(8)]);
var inst_22421__$1 = (state_22442[(2)]);
var inst_22422__$1 = cljs.core.nth.call(null,inst_22421__$1,(0),null);
var inst_22423 = cljs.core.nth.call(null,inst_22421__$1,(1),null);
var inst_22424 = (inst_22422__$1 == null);
var state_22442__$1 = (function (){var statearr_22444 = state_22442;
(statearr_22444[(7)] = inst_22422__$1);

(statearr_22444[(9)] = inst_22423);

(statearr_22444[(8)] = inst_22421__$1);

return statearr_22444;
})();
if(cljs.core.truth_(inst_22424)){
var statearr_22445_22471 = state_22442__$1;
(statearr_22445_22471[(1)] = (8));

} else {
var statearr_22446_22472 = state_22442__$1;
(statearr_22446_22472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (1))){
var inst_22413 = cljs.core.vec.call(null,chs);
var inst_22414 = inst_22413;
var state_22442__$1 = (function (){var statearr_22447 = state_22442;
(statearr_22447[(10)] = inst_22414);

return statearr_22447;
})();
var statearr_22448_22473 = state_22442__$1;
(statearr_22448_22473[(2)] = null);

(statearr_22448_22473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (4))){
var inst_22414 = (state_22442[(10)]);
var state_22442__$1 = state_22442;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22442__$1,(7),inst_22414);
} else {
if((state_val_22443 === (6))){
var inst_22438 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22449_22474 = state_22442__$1;
(statearr_22449_22474[(2)] = inst_22438);

(statearr_22449_22474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (3))){
var inst_22440 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22442__$1,inst_22440);
} else {
if((state_val_22443 === (2))){
var inst_22414 = (state_22442[(10)]);
var inst_22416 = cljs.core.count.call(null,inst_22414);
var inst_22417 = (inst_22416 > (0));
var state_22442__$1 = state_22442;
if(cljs.core.truth_(inst_22417)){
var statearr_22451_22475 = state_22442__$1;
(statearr_22451_22475[(1)] = (4));

} else {
var statearr_22452_22476 = state_22442__$1;
(statearr_22452_22476[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (11))){
var inst_22414 = (state_22442[(10)]);
var inst_22431 = (state_22442[(2)]);
var tmp22450 = inst_22414;
var inst_22414__$1 = tmp22450;
var state_22442__$1 = (function (){var statearr_22453 = state_22442;
(statearr_22453[(10)] = inst_22414__$1);

(statearr_22453[(11)] = inst_22431);

return statearr_22453;
})();
var statearr_22454_22477 = state_22442__$1;
(statearr_22454_22477[(2)] = null);

(statearr_22454_22477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (9))){
var inst_22422 = (state_22442[(7)]);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22442__$1,(11),out,inst_22422);
} else {
if((state_val_22443 === (5))){
var inst_22436 = cljs.core.async.close_BANG_.call(null,out);
var state_22442__$1 = state_22442;
var statearr_22455_22478 = state_22442__$1;
(statearr_22455_22478[(2)] = inst_22436);

(statearr_22455_22478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (10))){
var inst_22434 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22456_22479 = state_22442__$1;
(statearr_22456_22479[(2)] = inst_22434);

(statearr_22456_22479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (8))){
var inst_22422 = (state_22442[(7)]);
var inst_22423 = (state_22442[(9)]);
var inst_22421 = (state_22442[(8)]);
var inst_22414 = (state_22442[(10)]);
var inst_22426 = (function (){var cs = inst_22414;
var vec__22419 = inst_22421;
var v = inst_22422;
var c = inst_22423;
return ((function (cs,vec__22419,v,c,inst_22422,inst_22423,inst_22421,inst_22414,state_val_22443,c__20372__auto___22470,out){
return (function (p1__22409_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22409_SHARP_);
});
;})(cs,vec__22419,v,c,inst_22422,inst_22423,inst_22421,inst_22414,state_val_22443,c__20372__auto___22470,out))
})();
var inst_22427 = cljs.core.filterv.call(null,inst_22426,inst_22414);
var inst_22414__$1 = inst_22427;
var state_22442__$1 = (function (){var statearr_22457 = state_22442;
(statearr_22457[(10)] = inst_22414__$1);

return statearr_22457;
})();
var statearr_22458_22480 = state_22442__$1;
(statearr_22458_22480[(2)] = null);

(statearr_22458_22480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___22470,out))
;
return ((function (switch__20260__auto__,c__20372__auto___22470,out){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_22462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22462[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_22462[(1)] = (1));

return statearr_22462;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_22442){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22463){if((e22463 instanceof Object)){
var ex__20264__auto__ = e22463;
var statearr_22464_22481 = state_22442;
(statearr_22464_22481[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22482 = state_22442;
state_22442 = G__22482;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_22442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_22442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___22470,out))
})();
var state__20374__auto__ = (function (){var statearr_22465 = f__20373__auto__.call(null);
(statearr_22465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___22470);

return statearr_22465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___22470,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22483 = [];
var len__17884__auto___22532 = arguments.length;
var i__17885__auto___22533 = (0);
while(true){
if((i__17885__auto___22533 < len__17884__auto___22532)){
args22483.push((arguments[i__17885__auto___22533]));

var G__22534 = (i__17885__auto___22533 + (1));
i__17885__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var G__22485 = args22483.length;
switch (G__22485) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22483.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20372__auto___22536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22536,out){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22536,out){
return (function (state_22509){
var state_val_22510 = (state_22509[(1)]);
if((state_val_22510 === (7))){
var inst_22491 = (state_22509[(7)]);
var inst_22491__$1 = (state_22509[(2)]);
var inst_22492 = (inst_22491__$1 == null);
var inst_22493 = cljs.core.not.call(null,inst_22492);
var state_22509__$1 = (function (){var statearr_22511 = state_22509;
(statearr_22511[(7)] = inst_22491__$1);

return statearr_22511;
})();
if(inst_22493){
var statearr_22512_22537 = state_22509__$1;
(statearr_22512_22537[(1)] = (8));

} else {
var statearr_22513_22538 = state_22509__$1;
(statearr_22513_22538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (1))){
var inst_22486 = (0);
var state_22509__$1 = (function (){var statearr_22514 = state_22509;
(statearr_22514[(8)] = inst_22486);

return statearr_22514;
})();
var statearr_22515_22539 = state_22509__$1;
(statearr_22515_22539[(2)] = null);

(statearr_22515_22539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (4))){
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22509__$1,(7),ch);
} else {
if((state_val_22510 === (6))){
var inst_22504 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22516_22540 = state_22509__$1;
(statearr_22516_22540[(2)] = inst_22504);

(statearr_22516_22540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (3))){
var inst_22506 = (state_22509[(2)]);
var inst_22507 = cljs.core.async.close_BANG_.call(null,out);
var state_22509__$1 = (function (){var statearr_22517 = state_22509;
(statearr_22517[(9)] = inst_22506);

return statearr_22517;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22509__$1,inst_22507);
} else {
if((state_val_22510 === (2))){
var inst_22486 = (state_22509[(8)]);
var inst_22488 = (inst_22486 < n);
var state_22509__$1 = state_22509;
if(cljs.core.truth_(inst_22488)){
var statearr_22518_22541 = state_22509__$1;
(statearr_22518_22541[(1)] = (4));

} else {
var statearr_22519_22542 = state_22509__$1;
(statearr_22519_22542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (11))){
var inst_22486 = (state_22509[(8)]);
var inst_22496 = (state_22509[(2)]);
var inst_22497 = (inst_22486 + (1));
var inst_22486__$1 = inst_22497;
var state_22509__$1 = (function (){var statearr_22520 = state_22509;
(statearr_22520[(10)] = inst_22496);

(statearr_22520[(8)] = inst_22486__$1);

return statearr_22520;
})();
var statearr_22521_22543 = state_22509__$1;
(statearr_22521_22543[(2)] = null);

(statearr_22521_22543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (9))){
var state_22509__$1 = state_22509;
var statearr_22522_22544 = state_22509__$1;
(statearr_22522_22544[(2)] = null);

(statearr_22522_22544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (5))){
var state_22509__$1 = state_22509;
var statearr_22523_22545 = state_22509__$1;
(statearr_22523_22545[(2)] = null);

(statearr_22523_22545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (10))){
var inst_22501 = (state_22509[(2)]);
var state_22509__$1 = state_22509;
var statearr_22524_22546 = state_22509__$1;
(statearr_22524_22546[(2)] = inst_22501);

(statearr_22524_22546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22510 === (8))){
var inst_22491 = (state_22509[(7)]);
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22509__$1,(11),out,inst_22491);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___22536,out))
;
return ((function (switch__20260__auto__,c__20372__auto___22536,out){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_22528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22528[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_22528[(1)] = (1));

return statearr_22528;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_22509){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22529){if((e22529 instanceof Object)){
var ex__20264__auto__ = e22529;
var statearr_22530_22547 = state_22509;
(statearr_22530_22547[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22548 = state_22509;
state_22509 = G__22548;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_22509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_22509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___22536,out))
})();
var state__20374__auto__ = (function (){var statearr_22531 = f__20373__auto__.call(null);
(statearr_22531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___22536);

return statearr_22531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___22536,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22556 = (function (map_LT_,f,ch,meta22557){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22557 = meta22557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22558,meta22557__$1){
var self__ = this;
var _22558__$1 = this;
return (new cljs.core.async.t_cljs$core$async22556(self__.map_LT_,self__.f,self__.ch,meta22557__$1));
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22558){
var self__ = this;
var _22558__$1 = this;
return self__.meta22557;
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22559 = (function (map_LT_,f,ch,meta22557,_,fn1,meta22560){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22557 = meta22557;
this._ = _;
this.fn1 = fn1;
this.meta22560 = meta22560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22561,meta22560__$1){
var self__ = this;
var _22561__$1 = this;
return (new cljs.core.async.t_cljs$core$async22559(self__.map_LT_,self__.f,self__.ch,self__.meta22557,self__._,self__.fn1,meta22560__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22561){
var self__ = this;
var _22561__$1 = this;
return self__.meta22560;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22559.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22549_SHARP_){
return f1.call(null,(((p1__22549_SHARP_ == null))?null:self__.f.call(null,p1__22549_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22559.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22557","meta22557",-510878828,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22556","cljs.core.async/t_cljs$core$async22556",1405706441,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22560","meta22560",939630965,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22559";

cljs.core.async.t_cljs$core$async22559.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22559");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22559 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22559(map_LT___$1,f__$1,ch__$1,meta22557__$1,___$2,fn1__$1,meta22560){
return (new cljs.core.async.t_cljs$core$async22559(map_LT___$1,f__$1,ch__$1,meta22557__$1,___$2,fn1__$1,meta22560));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22559(self__.map_LT_,self__.f,self__.ch,self__.meta22557,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22557","meta22557",-510878828,null)], null);
});

cljs.core.async.t_cljs$core$async22556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22556";

cljs.core.async.t_cljs$core$async22556.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22556");
});

cljs.core.async.__GT_t_cljs$core$async22556 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22556(map_LT___$1,f__$1,ch__$1,meta22557){
return (new cljs.core.async.t_cljs$core$async22556(map_LT___$1,f__$1,ch__$1,meta22557));
});

}

return (new cljs.core.async.t_cljs$core$async22556(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22565 = (function (map_GT_,f,ch,meta22566){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22566 = meta22566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22567,meta22566__$1){
var self__ = this;
var _22567__$1 = this;
return (new cljs.core.async.t_cljs$core$async22565(self__.map_GT_,self__.f,self__.ch,meta22566__$1));
});

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22567){
var self__ = this;
var _22567__$1 = this;
return self__.meta22566;
});

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22565.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22566","meta22566",508362148,null)], null);
});

cljs.core.async.t_cljs$core$async22565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22565";

cljs.core.async.t_cljs$core$async22565.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22565");
});

cljs.core.async.__GT_t_cljs$core$async22565 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22565(map_GT___$1,f__$1,ch__$1,meta22566){
return (new cljs.core.async.t_cljs$core$async22565(map_GT___$1,f__$1,ch__$1,meta22566));
});

}

return (new cljs.core.async.t_cljs$core$async22565(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22571 = (function (filter_GT_,p,ch,meta22572){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22572 = meta22572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22573,meta22572__$1){
var self__ = this;
var _22573__$1 = this;
return (new cljs.core.async.t_cljs$core$async22571(self__.filter_GT_,self__.p,self__.ch,meta22572__$1));
});

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22573){
var self__ = this;
var _22573__$1 = this;
return self__.meta22572;
});

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22572","meta22572",-14944548,null)], null);
});

cljs.core.async.t_cljs$core$async22571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22571";

cljs.core.async.t_cljs$core$async22571.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22571");
});

cljs.core.async.__GT_t_cljs$core$async22571 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22571(filter_GT___$1,p__$1,ch__$1,meta22572){
return (new cljs.core.async.t_cljs$core$async22571(filter_GT___$1,p__$1,ch__$1,meta22572));
});

}

return (new cljs.core.async.t_cljs$core$async22571(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22574 = [];
var len__17884__auto___22618 = arguments.length;
var i__17885__auto___22619 = (0);
while(true){
if((i__17885__auto___22619 < len__17884__auto___22618)){
args22574.push((arguments[i__17885__auto___22619]));

var G__22620 = (i__17885__auto___22619 + (1));
i__17885__auto___22619 = G__22620;
continue;
} else {
}
break;
}

var G__22576 = args22574.length;
switch (G__22576) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22574.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20372__auto___22622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22622,out){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22622,out){
return (function (state_22597){
var state_val_22598 = (state_22597[(1)]);
if((state_val_22598 === (7))){
var inst_22593 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
var statearr_22599_22623 = state_22597__$1;
(statearr_22599_22623[(2)] = inst_22593);

(statearr_22599_22623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (1))){
var state_22597__$1 = state_22597;
var statearr_22600_22624 = state_22597__$1;
(statearr_22600_22624[(2)] = null);

(statearr_22600_22624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (4))){
var inst_22579 = (state_22597[(7)]);
var inst_22579__$1 = (state_22597[(2)]);
var inst_22580 = (inst_22579__$1 == null);
var state_22597__$1 = (function (){var statearr_22601 = state_22597;
(statearr_22601[(7)] = inst_22579__$1);

return statearr_22601;
})();
if(cljs.core.truth_(inst_22580)){
var statearr_22602_22625 = state_22597__$1;
(statearr_22602_22625[(1)] = (5));

} else {
var statearr_22603_22626 = state_22597__$1;
(statearr_22603_22626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (6))){
var inst_22579 = (state_22597[(7)]);
var inst_22584 = p.call(null,inst_22579);
var state_22597__$1 = state_22597;
if(cljs.core.truth_(inst_22584)){
var statearr_22604_22627 = state_22597__$1;
(statearr_22604_22627[(1)] = (8));

} else {
var statearr_22605_22628 = state_22597__$1;
(statearr_22605_22628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (3))){
var inst_22595 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22597__$1,inst_22595);
} else {
if((state_val_22598 === (2))){
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22597__$1,(4),ch);
} else {
if((state_val_22598 === (11))){
var inst_22587 = (state_22597[(2)]);
var state_22597__$1 = state_22597;
var statearr_22606_22629 = state_22597__$1;
(statearr_22606_22629[(2)] = inst_22587);

(statearr_22606_22629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (9))){
var state_22597__$1 = state_22597;
var statearr_22607_22630 = state_22597__$1;
(statearr_22607_22630[(2)] = null);

(statearr_22607_22630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (5))){
var inst_22582 = cljs.core.async.close_BANG_.call(null,out);
var state_22597__$1 = state_22597;
var statearr_22608_22631 = state_22597__$1;
(statearr_22608_22631[(2)] = inst_22582);

(statearr_22608_22631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (10))){
var inst_22590 = (state_22597[(2)]);
var state_22597__$1 = (function (){var statearr_22609 = state_22597;
(statearr_22609[(8)] = inst_22590);

return statearr_22609;
})();
var statearr_22610_22632 = state_22597__$1;
(statearr_22610_22632[(2)] = null);

(statearr_22610_22632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22598 === (8))){
var inst_22579 = (state_22597[(7)]);
var state_22597__$1 = state_22597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22597__$1,(11),out,inst_22579);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto___22622,out))
;
return ((function (switch__20260__auto__,c__20372__auto___22622,out){
return (function() {
var cljs$core$async$state_machine__20261__auto__ = null;
var cljs$core$async$state_machine__20261__auto____0 = (function (){
var statearr_22614 = [null,null,null,null,null,null,null,null,null];
(statearr_22614[(0)] = cljs$core$async$state_machine__20261__auto__);

(statearr_22614[(1)] = (1));

return statearr_22614;
});
var cljs$core$async$state_machine__20261__auto____1 = (function (state_22597){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22615){if((e22615 instanceof Object)){
var ex__20264__auto__ = e22615;
var statearr_22616_22633 = state_22597;
(statearr_22616_22633[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22634 = state_22597;
state_22597 = G__22634;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$state_machine__20261__auto__ = function(state_22597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20261__auto____1.call(this,state_22597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20261__auto____0;
cljs$core$async$state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20261__auto____1;
return cljs$core$async$state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto___22622,out))
})();
var state__20374__auto__ = (function (){var statearr_22617 = f__20373__auto__.call(null);
(statearr_22617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto___22622);

return statearr_22617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto___22622,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22635 = [];
var len__17884__auto___22638 = arguments.length;
var i__17885__auto___22639 = (0);
while(true){
if((i__17885__auto___22639 < len__17884__auto___22638)){
args22635.push((arguments[i__17885__auto___22639]));

var G__22640 = (i__17885__auto___22639 + (1));
i__17885__auto___22639 = G__22640;
continue;
} else {
}
break;
}

var G__22637 = args22635.length;
switch (G__22637) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22635.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20372__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto__){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto__){
return (function (state_22807){
var state_val_22808 = (state_22807[(1)]);
if((state_val_22808 === (7))){
var inst_22803 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
var statearr_22809_22850 = state_22807__$1;
(statearr_22809_22850[(2)] = inst_22803);

(statearr_22809_22850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (20))){
var inst_22773 = (state_22807[(7)]);
var inst_22784 = (state_22807[(2)]);
var inst_22785 = cljs.core.next.call(null,inst_22773);
var inst_22759 = inst_22785;
var inst_22760 = null;
var inst_22761 = (0);
var inst_22762 = (0);
var state_22807__$1 = (function (){var statearr_22810 = state_22807;
(statearr_22810[(8)] = inst_22760);

(statearr_22810[(9)] = inst_22761);

(statearr_22810[(10)] = inst_22784);

(statearr_22810[(11)] = inst_22759);

(statearr_22810[(12)] = inst_22762);

return statearr_22810;
})();
var statearr_22811_22851 = state_22807__$1;
(statearr_22811_22851[(2)] = null);

(statearr_22811_22851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (1))){
var state_22807__$1 = state_22807;
var statearr_22812_22852 = state_22807__$1;
(statearr_22812_22852[(2)] = null);

(statearr_22812_22852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (4))){
var inst_22748 = (state_22807[(13)]);
var inst_22748__$1 = (state_22807[(2)]);
var inst_22749 = (inst_22748__$1 == null);
var state_22807__$1 = (function (){var statearr_22813 = state_22807;
(statearr_22813[(13)] = inst_22748__$1);

return statearr_22813;
})();
if(cljs.core.truth_(inst_22749)){
var statearr_22814_22853 = state_22807__$1;
(statearr_22814_22853[(1)] = (5));

} else {
var statearr_22815_22854 = state_22807__$1;
(statearr_22815_22854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (15))){
var state_22807__$1 = state_22807;
var statearr_22819_22855 = state_22807__$1;
(statearr_22819_22855[(2)] = null);

(statearr_22819_22855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (21))){
var state_22807__$1 = state_22807;
var statearr_22820_22856 = state_22807__$1;
(statearr_22820_22856[(2)] = null);

(statearr_22820_22856[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (13))){
var inst_22760 = (state_22807[(8)]);
var inst_22761 = (state_22807[(9)]);
var inst_22759 = (state_22807[(11)]);
var inst_22762 = (state_22807[(12)]);
var inst_22769 = (state_22807[(2)]);
var inst_22770 = (inst_22762 + (1));
var tmp22816 = inst_22760;
var tmp22817 = inst_22761;
var tmp22818 = inst_22759;
var inst_22759__$1 = tmp22818;
var inst_22760__$1 = tmp22816;
var inst_22761__$1 = tmp22817;
var inst_22762__$1 = inst_22770;
var state_22807__$1 = (function (){var statearr_22821 = state_22807;
(statearr_22821[(8)] = inst_22760__$1);

(statearr_22821[(9)] = inst_22761__$1);

(statearr_22821[(11)] = inst_22759__$1);

(statearr_22821[(12)] = inst_22762__$1);

(statearr_22821[(14)] = inst_22769);

return statearr_22821;
})();
var statearr_22822_22857 = state_22807__$1;
(statearr_22822_22857[(2)] = null);

(statearr_22822_22857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (22))){
var state_22807__$1 = state_22807;
var statearr_22823_22858 = state_22807__$1;
(statearr_22823_22858[(2)] = null);

(statearr_22823_22858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (6))){
var inst_22748 = (state_22807[(13)]);
var inst_22757 = f.call(null,inst_22748);
var inst_22758 = cljs.core.seq.call(null,inst_22757);
var inst_22759 = inst_22758;
var inst_22760 = null;
var inst_22761 = (0);
var inst_22762 = (0);
var state_22807__$1 = (function (){var statearr_22824 = state_22807;
(statearr_22824[(8)] = inst_22760);

(statearr_22824[(9)] = inst_22761);

(statearr_22824[(11)] = inst_22759);

(statearr_22824[(12)] = inst_22762);

return statearr_22824;
})();
var statearr_22825_22859 = state_22807__$1;
(statearr_22825_22859[(2)] = null);

(statearr_22825_22859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (17))){
var inst_22773 = (state_22807[(7)]);
var inst_22777 = cljs.core.chunk_first.call(null,inst_22773);
var inst_22778 = cljs.core.chunk_rest.call(null,inst_22773);
var inst_22779 = cljs.core.count.call(null,inst_22777);
var inst_22759 = inst_22778;
var inst_22760 = inst_22777;
var inst_22761 = inst_22779;
var inst_22762 = (0);
var state_22807__$1 = (function (){var statearr_22826 = state_22807;
(statearr_22826[(8)] = inst_22760);

(statearr_22826[(9)] = inst_22761);

(statearr_22826[(11)] = inst_22759);

(statearr_22826[(12)] = inst_22762);

return statearr_22826;
})();
var statearr_22827_22860 = state_22807__$1;
(statearr_22827_22860[(2)] = null);

(statearr_22827_22860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (3))){
var inst_22805 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22807__$1,inst_22805);
} else {
if((state_val_22808 === (12))){
var inst_22793 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
var statearr_22828_22861 = state_22807__$1;
(statearr_22828_22861[(2)] = inst_22793);

(statearr_22828_22861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (2))){
var state_22807__$1 = state_22807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22807__$1,(4),in$);
} else {
if((state_val_22808 === (23))){
var inst_22801 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
var statearr_22829_22862 = state_22807__$1;
(statearr_22829_22862[(2)] = inst_22801);

(statearr_22829_22862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (19))){
var inst_22788 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
var statearr_22830_22863 = state_22807__$1;
(statearr_22830_22863[(2)] = inst_22788);

(statearr_22830_22863[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (11))){
var inst_22773 = (state_22807[(7)]);
var inst_22759 = (state_22807[(11)]);
var inst_22773__$1 = cljs.core.seq.call(null,inst_22759);
var state_22807__$1 = (function (){var statearr_22831 = state_22807;
(statearr_22831[(7)] = inst_22773__$1);

return statearr_22831;
})();
if(inst_22773__$1){
var statearr_22832_22864 = state_22807__$1;
(statearr_22832_22864[(1)] = (14));

} else {
var statearr_22833_22865 = state_22807__$1;
(statearr_22833_22865[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (9))){
var inst_22795 = (state_22807[(2)]);
var inst_22796 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22807__$1 = (function (){var statearr_22834 = state_22807;
(statearr_22834[(15)] = inst_22795);

return statearr_22834;
})();
if(cljs.core.truth_(inst_22796)){
var statearr_22835_22866 = state_22807__$1;
(statearr_22835_22866[(1)] = (21));

} else {
var statearr_22836_22867 = state_22807__$1;
(statearr_22836_22867[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (5))){
var inst_22751 = cljs.core.async.close_BANG_.call(null,out);
var state_22807__$1 = state_22807;
var statearr_22837_22868 = state_22807__$1;
(statearr_22837_22868[(2)] = inst_22751);

(statearr_22837_22868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (14))){
var inst_22773 = (state_22807[(7)]);
var inst_22775 = cljs.core.chunked_seq_QMARK_.call(null,inst_22773);
var state_22807__$1 = state_22807;
if(inst_22775){
var statearr_22838_22869 = state_22807__$1;
(statearr_22838_22869[(1)] = (17));

} else {
var statearr_22839_22870 = state_22807__$1;
(statearr_22839_22870[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (16))){
var inst_22791 = (state_22807[(2)]);
var state_22807__$1 = state_22807;
var statearr_22840_22871 = state_22807__$1;
(statearr_22840_22871[(2)] = inst_22791);

(statearr_22840_22871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22808 === (10))){
var inst_22760 = (state_22807[(8)]);
var inst_22762 = (state_22807[(12)]);
var inst_22767 = cljs.core._nth.call(null,inst_22760,inst_22762);
var state_22807__$1 = state_22807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22807__$1,(13),out,inst_22767);
} else {
if((state_val_22808 === (18))){
var inst_22773 = (state_22807[(7)]);
var inst_22782 = cljs.core.first.call(null,inst_22773);
var state_22807__$1 = state_22807;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22807__$1,(20),out,inst_22782);
} else {
if((state_val_22808 === (8))){
var inst_22761 = (state_22807[(9)]);
var inst_22762 = (state_22807[(12)]);
var inst_22764 = (inst_22762 < inst_22761);
var inst_22765 = inst_22764;
var state_22807__$1 = state_22807;
if(cljs.core.truth_(inst_22765)){
var statearr_22841_22872 = state_22807__$1;
(statearr_22841_22872[(1)] = (10));

} else {
var statearr_22842_22873 = state_22807__$1;
(statearr_22842_22873[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20372__auto__))
;
return ((function (switch__20260__auto__,c__20372__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20261__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20261__auto____0 = (function (){
var statearr_22846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22846[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20261__auto__);

(statearr_22846[(1)] = (1));

return statearr_22846;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20261__auto____1 = (function (state_22807){
while(true){
var ret_value__20262__auto__ = (function (){try{while(true){
var result__20263__auto__ = switch__20260__auto__.call(null,state_22807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20263__auto__;
}
break;
}
}catch (e22847){if((e22847 instanceof Object)){
var ex__20264__auto__ = e22847;
var statearr_22848_22874 = state_22807;
(statearr_22848_22874[(5)] = ex__20264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22875 = state_22807;
state_22807 = G__22875;
continue;
} else {
return ret_value__20262__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20261__auto__ = function(state_22807){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20261__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20261__auto____1.call(this,state_22807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20261__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20261__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20261__auto__;
})()
;})(switch__20260__auto__,c__20372__auto__))
})();
var state__20374__auto__ = (function (){var statearr_22849 = f__20373__auto__.call(null);
(statearr_22849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20372__auto__);

return statearr_22849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20374__auto__);
});})(c__20372__auto__))
);

return c__20372__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22876 = [];
var len__17884__auto___22879 = arguments.length;
var i__17885__auto___22880 = (0);
while(true){
if((i__17885__auto___22880 < len__17884__auto___22879)){
args22876.push((arguments[i__17885__auto___22880]));

var G__22881 = (i__17885__auto___22880 + (1));
i__17885__auto___22880 = G__22881;
continue;
} else {
}
break;
}

var G__22878 = args22876.length;
switch (G__22878) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22876.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22883 = [];
var len__17884__auto___22886 = arguments.length;
var i__17885__auto___22887 = (0);
while(true){
if((i__17885__auto___22887 < len__17884__auto___22886)){
args22883.push((arguments[i__17885__auto___22887]));

var G__22888 = (i__17885__auto___22887 + (1));
i__17885__auto___22887 = G__22888;
continue;
} else {
}
break;
}

var G__22885 = args22883.length;
switch (G__22885) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22883.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22890 = [];
var len__17884__auto___22941 = arguments.length;
var i__17885__auto___22942 = (0);
while(true){
if((i__17885__auto___22942 < len__17884__auto___22941)){
args22890.push((arguments[i__17885__auto___22942]));

var G__22943 = (i__17885__auto___22942 + (1));
i__17885__auto___22942 = G__22943;
continue;
} else {
}
break;
}

var G__22892 = args22890.length;
switch (G__22892) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22890.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20372__auto___22945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20372__auto___22945,out){
return (function (){
var f__20373__auto__ = (function (){var switch__20260__auto__ = ((function (c__20372__auto___22945,out){
return (function (state_22916){
var state_val_22917 = (state_22916[(1)]);
if((state_val_22917 === (7))){
var inst_22911 = (state_22916[(2)]);
var state_22916__$1 = state_22916;
var statearr_22918_22946 = state_22916__$1;
(statearr_22918_22946[(2)] = inst_22911);

(statearr_22918_22946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22917 === (1))){
var inst_22893 = null;
var state_22916__$1 = (function (){var statearr_22919 = state_22916;
(statearr_22919[(7)] = inst_22893);

return statearr_22919;
})();
var statearr_22920_22947 = state_22916__$1;
(statearr_22920_22947[(2)] = null);

(statearr_22920_22947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22917 === (4))){
var inst_22896 = (state_22916[(8)]);
var inst_22896__$1 = (state_22916[(2)]);
var inst_22897 = (inst_22896__$1 == null);
var inst_22898 = cljs.core.not.call(null,inst_22897);
var state_22916__$1 = (function (){var statearr_22921 = state_22916;
(statearr_22921[(8)] = inst_22896__$1);

return statearr_22921;
})();
if(inst_22898){
var statearr_22922_22948 = state_22916__$1;
(statearr_22922_22948[(1)] = (5));

} else {
var statearr_22923_22949 = state_22916__$1;
(statearr_22923_22949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22917 === (6))){
var state_22916__$1 = state_22916;
var statearr_22924_22950 = state_22916__$1;
(statearr_22924_22950[(2)] = null);

(statearr_22924_22950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22917 === (3))){
var inst_22913 = (state_22916[(2)]);
var inst_22914 = cljs.core.async.close_BANG_.call(null,out);
var state_22916__$1 = (function (){var statearr_22925 = state_22916;
(statearr_22925[(9)] = inst_22913);

return statearr_22925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22916__$1,inst_22914);
} else {
if((state_val_22917 === (2))){
var state_22916__$1 = state_22916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22916__$1,(4),ch);
} else {
if((state_val_22917 === (11))){
var inst_22896 = (state_22916[(8)]);
var inst_22905 = (state_22916[(2)]);
var inst_22893 = inst_22896;
var state_22916__$1 = (function (){var statearr_22926 = state_22916;
(statearr_22926[(10)] = inst_22905);

(statearr_22926[(7)] = inst_22893);

return statearr_22926;
})();
var statearr_22927_22951 = state_22916__$1;
(statearr_22927_22951[(2)] = null);

(statearr_22927_22951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
