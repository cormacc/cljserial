goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81582 = (function (f,blockable,meta81583){
this.f = f;
this.blockable = blockable;
this.meta81583 = meta81583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81584,meta81583__$1){
var self__ = this;
var _81584__$1 = this;
return (new cljs.core.async.t_cljs$core$async81582(self__.f,self__.blockable,meta81583__$1));
}));

(cljs.core.async.t_cljs$core$async81582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81584){
var self__ = this;
var _81584__$1 = this;
return self__.meta81583;
}));

(cljs.core.async.t_cljs$core$async81582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async81582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async81582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async81582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta81583","meta81583",1062844253,null)], null);
}));

(cljs.core.async.t_cljs$core$async81582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81582");

(cljs.core.async.t_cljs$core$async81582.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async81582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81582.
 */
cljs.core.async.__GT_t_cljs$core$async81582 = (function cljs$core$async$__GT_t_cljs$core$async81582(f,blockable,meta81583){
return (new cljs.core.async.t_cljs$core$async81582(f,blockable,meta81583));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__81572 = arguments.length;
switch (G__81572) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async81582(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__81612 = arguments.length;
switch (G__81612) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__81617 = arguments.length;
switch (G__81617) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__81626 = arguments.length;
switch (G__81626) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_84015 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_84015) : fn1.call(null, val_84015));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_84015) : fn1.call(null, val_84015));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__81631 = arguments.length;
switch (G__81631) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___84017 = n;
var x_84018 = (0);
while(true){
if((x_84018 < n__5593__auto___84017)){
(a[x_84018] = x_84018);

var G__84019 = (x_84018 + (1));
x_84018 = G__84019;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81638 = (function (flag,meta81639){
this.flag = flag;
this.meta81639 = meta81639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81640,meta81639__$1){
var self__ = this;
var _81640__$1 = this;
return (new cljs.core.async.t_cljs$core$async81638(self__.flag,meta81639__$1));
}));

(cljs.core.async.t_cljs$core$async81638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81640){
var self__ = this;
var _81640__$1 = this;
return self__.meta81639;
}));

(cljs.core.async.t_cljs$core$async81638.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async81638.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async81638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async81638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta81639","meta81639",2133852757,null)], null);
}));

(cljs.core.async.t_cljs$core$async81638.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81638");

(cljs.core.async.t_cljs$core$async81638.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async81638");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81638.
 */
cljs.core.async.__GT_t_cljs$core$async81638 = (function cljs$core$async$__GT_t_cljs$core$async81638(flag,meta81639){
return (new cljs.core.async.t_cljs$core$async81638(flag,meta81639));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async81638(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async81644 = (function (flag,cb,meta81645){
this.flag = flag;
this.cb = cb;
this.meta81645 = meta81645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async81644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_81646,meta81645__$1){
var self__ = this;
var _81646__$1 = this;
return (new cljs.core.async.t_cljs$core$async81644(self__.flag,self__.cb,meta81645__$1));
}));

(cljs.core.async.t_cljs$core$async81644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_81646){
var self__ = this;
var _81646__$1 = this;
return self__.meta81645;
}));

(cljs.core.async.t_cljs$core$async81644.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async81644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async81644.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async81644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async81644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta81645","meta81645",1017261813,null)], null);
}));

(cljs.core.async.t_cljs$core$async81644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async81644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async81644");

(cljs.core.async.t_cljs$core$async81644.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async81644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async81644.
 */
cljs.core.async.__GT_t_cljs$core$async81644 = (function cljs$core$async$__GT_t_cljs$core$async81644(flag,cb,meta81645){
return (new cljs.core.async.t_cljs$core$async81644(flag,cb,meta81645));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async81644(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__81647_SHARP_){
var G__81655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81647_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__81655) : fret.call(null, G__81655));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__81648_SHARP_){
var G__81656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__81648_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__81656) : fret.call(null, G__81656));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__84027 = (i + (1));
i = G__84027;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___84028 = arguments.length;
var i__5727__auto___84029 = (0);
while(true){
if((i__5727__auto___84029 < len__5726__auto___84028)){
args__5732__auto__.push((arguments[i__5727__auto___84029]));

var G__84030 = (i__5727__auto___84029 + (1));
i__5727__auto___84029 = G__84030;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__81661){
var map__81662 = p__81661;
var map__81662__$1 = cljs.core.__destructure_map(map__81662);
var opts = map__81662__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq81659){
var G__81660 = cljs.core.first(seq81659);
var seq81659__$1 = cljs.core.next(seq81659);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81660,seq81659__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__81667 = arguments.length;
switch (G__81667) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33448__auto___84032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_81721){
var state_val_81722 = (state_81721[(1)]);
if((state_val_81722 === (7))){
var inst_81705 = (state_81721[(2)]);
var state_81721__$1 = state_81721;
var statearr_81729_84033 = state_81721__$1;
(statearr_81729_84033[(2)] = inst_81705);

(statearr_81729_84033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (1))){
var state_81721__$1 = state_81721;
var statearr_81730_84034 = state_81721__$1;
(statearr_81730_84034[(2)] = null);

(statearr_81730_84034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (4))){
var inst_81687 = (state_81721[(7)]);
var inst_81687__$1 = (state_81721[(2)]);
var inst_81689 = (inst_81687__$1 == null);
var state_81721__$1 = (function (){var statearr_81737 = state_81721;
(statearr_81737[(7)] = inst_81687__$1);

return statearr_81737;
})();
if(cljs.core.truth_(inst_81689)){
var statearr_81738_84035 = state_81721__$1;
(statearr_81738_84035[(1)] = (5));

} else {
var statearr_81739_84036 = state_81721__$1;
(statearr_81739_84036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (13))){
var state_81721__$1 = state_81721;
var statearr_81740_84037 = state_81721__$1;
(statearr_81740_84037[(2)] = null);

(statearr_81740_84037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (6))){
var inst_81687 = (state_81721[(7)]);
var state_81721__$1 = state_81721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81721__$1,(11),to,inst_81687);
} else {
if((state_val_81722 === (3))){
var inst_81707 = (state_81721[(2)]);
var state_81721__$1 = state_81721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81721__$1,inst_81707);
} else {
if((state_val_81722 === (12))){
var state_81721__$1 = state_81721;
var statearr_81742_84038 = state_81721__$1;
(statearr_81742_84038[(2)] = null);

(statearr_81742_84038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (2))){
var state_81721__$1 = state_81721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81721__$1,(4),from);
} else {
if((state_val_81722 === (11))){
var inst_81698 = (state_81721[(2)]);
var state_81721__$1 = state_81721;
if(cljs.core.truth_(inst_81698)){
var statearr_81743_84039 = state_81721__$1;
(statearr_81743_84039[(1)] = (12));

} else {
var statearr_81744_84040 = state_81721__$1;
(statearr_81744_84040[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (9))){
var state_81721__$1 = state_81721;
var statearr_81745_84041 = state_81721__$1;
(statearr_81745_84041[(2)] = null);

(statearr_81745_84041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (5))){
var state_81721__$1 = state_81721;
if(cljs.core.truth_(close_QMARK_)){
var statearr_81746_84042 = state_81721__$1;
(statearr_81746_84042[(1)] = (8));

} else {
var statearr_81747_84043 = state_81721__$1;
(statearr_81747_84043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (14))){
var inst_81703 = (state_81721[(2)]);
var state_81721__$1 = state_81721;
var statearr_81748_84044 = state_81721__$1;
(statearr_81748_84044[(2)] = inst_81703);

(statearr_81748_84044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (10))){
var inst_81695 = (state_81721[(2)]);
var state_81721__$1 = state_81721;
var statearr_81749_84046 = state_81721__$1;
(statearr_81749_84046[(2)] = inst_81695);

(statearr_81749_84046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81722 === (8))){
var inst_81692 = cljs.core.async.close_BANG_(to);
var state_81721__$1 = state_81721;
var statearr_81750_84049 = state_81721__$1;
(statearr_81750_84049[(2)] = inst_81692);

(statearr_81750_84049[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_81751 = [null,null,null,null,null,null,null,null];
(statearr_81751[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_81751[(1)] = (1));

return statearr_81751;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_81721){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_81721);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e81752){var ex__33327__auto__ = e81752;
var statearr_81753_84050 = state_81721;
(statearr_81753_84050[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_81721[(4)]))){
var statearr_81754_84051 = state_81721;
(statearr_81754_84051[(1)] = cljs.core.first((state_81721[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84052 = state_81721;
state_81721 = G__84052;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_81721){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_81721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_81758 = f__33449__auto__();
(statearr_81758[(6)] = c__33448__auto___84032);

return statearr_81758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__81763){
var vec__81764 = p__81763;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81764,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81764,(1),null);
var job = vec__81764;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33448__auto___84055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_81774){
var state_val_81775 = (state_81774[(1)]);
if((state_val_81775 === (1))){
var state_81774__$1 = state_81774;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81774__$1,(2),res,v);
} else {
if((state_val_81775 === (2))){
var inst_81771 = (state_81774[(2)]);
var inst_81772 = cljs.core.async.close_BANG_(res);
var state_81774__$1 = (function (){var statearr_81776 = state_81774;
(statearr_81776[(7)] = inst_81771);

return statearr_81776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_81774__$1,inst_81772);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0 = (function (){
var statearr_81783 = [null,null,null,null,null,null,null,null];
(statearr_81783[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__);

(statearr_81783[(1)] = (1));

return statearr_81783;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1 = (function (state_81774){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_81774);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e81784){var ex__33327__auto__ = e81784;
var statearr_81785_84061 = state_81774;
(statearr_81785_84061[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_81774[(4)]))){
var statearr_81786_84062 = state_81774;
(statearr_81786_84062[(1)] = cljs.core.first((state_81774[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84063 = state_81774;
state_81774 = G__84063;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = function(state_81774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1.call(this,state_81774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_81787 = f__33449__auto__();
(statearr_81787[(6)] = c__33448__auto___84055);

return statearr_81787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__81788){
var vec__81789 = p__81788;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81789,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81789,(1),null);
var job = vec__81789;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___84064 = n;
var __84065 = (0);
while(true){
if((__84065 < n__5593__auto___84064)){
var G__81794_84066 = type;
var G__81794_84067__$1 = (((G__81794_84066 instanceof cljs.core.Keyword))?G__81794_84066.fqn:null);
switch (G__81794_84067__$1) {
case "compute":
var c__33448__auto___84069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__84065,c__33448__auto___84069,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async){
return (function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = ((function (__84065,c__33448__auto___84069,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async){
return (function (state_81813){
var state_val_81814 = (state_81813[(1)]);
if((state_val_81814 === (1))){
var state_81813__$1 = state_81813;
var statearr_81818_84070 = state_81813__$1;
(statearr_81818_84070[(2)] = null);

(statearr_81818_84070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81814 === (2))){
var state_81813__$1 = state_81813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81813__$1,(4),jobs);
} else {
if((state_val_81814 === (3))){
var inst_81811 = (state_81813[(2)]);
var state_81813__$1 = state_81813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81813__$1,inst_81811);
} else {
if((state_val_81814 === (4))){
var inst_81797 = (state_81813[(2)]);
var inst_81804 = process__$1(inst_81797);
var state_81813__$1 = state_81813;
if(cljs.core.truth_(inst_81804)){
var statearr_81819_84071 = state_81813__$1;
(statearr_81819_84071[(1)] = (5));

} else {
var statearr_81820_84072 = state_81813__$1;
(statearr_81820_84072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81814 === (5))){
var state_81813__$1 = state_81813;
var statearr_81821_84073 = state_81813__$1;
(statearr_81821_84073[(2)] = null);

(statearr_81821_84073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81814 === (6))){
var state_81813__$1 = state_81813;
var statearr_81822_84074 = state_81813__$1;
(statearr_81822_84074[(2)] = null);

(statearr_81822_84074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81814 === (7))){
var inst_81809 = (state_81813[(2)]);
var state_81813__$1 = state_81813;
var statearr_81823_84075 = state_81813__$1;
(statearr_81823_84075[(2)] = inst_81809);

(statearr_81823_84075[(1)] = (3));


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
});})(__84065,c__33448__auto___84069,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async))
;
return ((function (__84065,switch__33323__auto__,c__33448__auto___84069,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0 = (function (){
var statearr_81830 = [null,null,null,null,null,null,null];
(statearr_81830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__);

(statearr_81830[(1)] = (1));

return statearr_81830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1 = (function (state_81813){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_81813);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e81831){var ex__33327__auto__ = e81831;
var statearr_81832_84076 = state_81813;
(statearr_81832_84076[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_81813[(4)]))){
var statearr_81836_84077 = state_81813;
(statearr_81836_84077[(1)] = cljs.core.first((state_81813[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84078 = state_81813;
state_81813 = G__84078;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = function(state_81813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1.call(this,state_81813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__;
})()
;})(__84065,switch__33323__auto__,c__33448__auto___84069,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async))
})();
var state__33450__auto__ = (function (){var statearr_81837 = f__33449__auto__();
(statearr_81837[(6)] = c__33448__auto___84069);

return statearr_81837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
});})(__84065,c__33448__auto___84069,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async))
);


break;
case "async":
var c__33448__auto___84079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__84065,c__33448__auto___84079,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async){
return (function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = ((function (__84065,c__33448__auto___84079,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async){
return (function (state_81850){
var state_val_81851 = (state_81850[(1)]);
if((state_val_81851 === (1))){
var state_81850__$1 = state_81850;
var statearr_81852_84080 = state_81850__$1;
(statearr_81852_84080[(2)] = null);

(statearr_81852_84080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81851 === (2))){
var state_81850__$1 = state_81850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81850__$1,(4),jobs);
} else {
if((state_val_81851 === (3))){
var inst_81848 = (state_81850[(2)]);
var state_81850__$1 = state_81850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81850__$1,inst_81848);
} else {
if((state_val_81851 === (4))){
var inst_81840 = (state_81850[(2)]);
var inst_81841 = async(inst_81840);
var state_81850__$1 = state_81850;
if(cljs.core.truth_(inst_81841)){
var statearr_81853_84081 = state_81850__$1;
(statearr_81853_84081[(1)] = (5));

} else {
var statearr_81854_84082 = state_81850__$1;
(statearr_81854_84082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81851 === (5))){
var state_81850__$1 = state_81850;
var statearr_81856_84083 = state_81850__$1;
(statearr_81856_84083[(2)] = null);

(statearr_81856_84083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81851 === (6))){
var state_81850__$1 = state_81850;
var statearr_81857_84084 = state_81850__$1;
(statearr_81857_84084[(2)] = null);

(statearr_81857_84084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81851 === (7))){
var inst_81846 = (state_81850[(2)]);
var state_81850__$1 = state_81850;
var statearr_81858_84085 = state_81850__$1;
(statearr_81858_84085[(2)] = inst_81846);

(statearr_81858_84085[(1)] = (3));


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
});})(__84065,c__33448__auto___84079,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async))
;
return ((function (__84065,switch__33323__auto__,c__33448__auto___84079,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0 = (function (){
var statearr_81859 = [null,null,null,null,null,null,null];
(statearr_81859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__);

(statearr_81859[(1)] = (1));

return statearr_81859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1 = (function (state_81850){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_81850);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e81860){var ex__33327__auto__ = e81860;
var statearr_81861_84086 = state_81850;
(statearr_81861_84086[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_81850[(4)]))){
var statearr_81863_84087 = state_81850;
(statearr_81863_84087[(1)] = cljs.core.first((state_81850[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84088 = state_81850;
state_81850 = G__84088;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = function(state_81850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1.call(this,state_81850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__;
})()
;})(__84065,switch__33323__auto__,c__33448__auto___84079,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async))
})();
var state__33450__auto__ = (function (){var statearr_81866 = f__33449__auto__();
(statearr_81866[(6)] = c__33448__auto___84079);

return statearr_81866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
});})(__84065,c__33448__auto___84079,G__81794_84066,G__81794_84067__$1,n__5593__auto___84064,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81794_84067__$1)].join('')));

}

var G__84089 = (__84065 + (1));
__84065 = G__84089;
continue;
} else {
}
break;
}

var c__33448__auto___84090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_81895){
var state_val_81896 = (state_81895[(1)]);
if((state_val_81896 === (7))){
var inst_81891 = (state_81895[(2)]);
var state_81895__$1 = state_81895;
var statearr_81903_84091 = state_81895__$1;
(statearr_81903_84091[(2)] = inst_81891);

(statearr_81903_84091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81896 === (1))){
var state_81895__$1 = state_81895;
var statearr_81904_84092 = state_81895__$1;
(statearr_81904_84092[(2)] = null);

(statearr_81904_84092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81896 === (4))){
var inst_81873 = (state_81895[(7)]);
var inst_81873__$1 = (state_81895[(2)]);
var inst_81874 = (inst_81873__$1 == null);
var state_81895__$1 = (function (){var statearr_81905 = state_81895;
(statearr_81905[(7)] = inst_81873__$1);

return statearr_81905;
})();
if(cljs.core.truth_(inst_81874)){
var statearr_81906_84093 = state_81895__$1;
(statearr_81906_84093[(1)] = (5));

} else {
var statearr_81907_84094 = state_81895__$1;
(statearr_81907_84094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81896 === (6))){
var inst_81881 = (state_81895[(8)]);
var inst_81873 = (state_81895[(7)]);
var inst_81881__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_81882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81883 = [inst_81873,inst_81881__$1];
var inst_81884 = (new cljs.core.PersistentVector(null,2,(5),inst_81882,inst_81883,null));
var state_81895__$1 = (function (){var statearr_81911 = state_81895;
(statearr_81911[(8)] = inst_81881__$1);

return statearr_81911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81895__$1,(8),jobs,inst_81884);
} else {
if((state_val_81896 === (3))){
var inst_81893 = (state_81895[(2)]);
var state_81895__$1 = state_81895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81895__$1,inst_81893);
} else {
if((state_val_81896 === (2))){
var state_81895__$1 = state_81895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81895__$1,(4),from);
} else {
if((state_val_81896 === (9))){
var inst_81888 = (state_81895[(2)]);
var state_81895__$1 = (function (){var statearr_81912 = state_81895;
(statearr_81912[(9)] = inst_81888);

return statearr_81912;
})();
var statearr_81913_84100 = state_81895__$1;
(statearr_81913_84100[(2)] = null);

(statearr_81913_84100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81896 === (5))){
var inst_81879 = cljs.core.async.close_BANG_(jobs);
var state_81895__$1 = state_81895;
var statearr_81914_84101 = state_81895__$1;
(statearr_81914_84101[(2)] = inst_81879);

(statearr_81914_84101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81896 === (8))){
var inst_81881 = (state_81895[(8)]);
var inst_81886 = (state_81895[(2)]);
var state_81895__$1 = (function (){var statearr_81915 = state_81895;
(statearr_81915[(10)] = inst_81886);

return statearr_81915;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81895__$1,(9),results,inst_81881);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0 = (function (){
var statearr_81916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_81916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__);

(statearr_81916[(1)] = (1));

return statearr_81916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1 = (function (state_81895){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_81895);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e81917){var ex__33327__auto__ = e81917;
var statearr_81918_84106 = state_81895;
(statearr_81918_84106[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_81895[(4)]))){
var statearr_81919_84107 = state_81895;
(statearr_81919_84107[(1)] = cljs.core.first((state_81895[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84108 = state_81895;
state_81895 = G__84108;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = function(state_81895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1.call(this,state_81895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_81923 = f__33449__auto__();
(statearr_81923[(6)] = c__33448__auto___84090);

return statearr_81923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_81961){
var state_val_81962 = (state_81961[(1)]);
if((state_val_81962 === (7))){
var inst_81957 = (state_81961[(2)]);
var state_81961__$1 = state_81961;
var statearr_81966_84110 = state_81961__$1;
(statearr_81966_84110[(2)] = inst_81957);

(statearr_81966_84110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (20))){
var state_81961__$1 = state_81961;
var statearr_81968_84111 = state_81961__$1;
(statearr_81968_84111[(2)] = null);

(statearr_81968_84111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (1))){
var state_81961__$1 = state_81961;
var statearr_81969_84112 = state_81961__$1;
(statearr_81969_84112[(2)] = null);

(statearr_81969_84112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (4))){
var inst_81926 = (state_81961[(7)]);
var inst_81926__$1 = (state_81961[(2)]);
var inst_81927 = (inst_81926__$1 == null);
var state_81961__$1 = (function (){var statearr_81970 = state_81961;
(statearr_81970[(7)] = inst_81926__$1);

return statearr_81970;
})();
if(cljs.core.truth_(inst_81927)){
var statearr_81971_84113 = state_81961__$1;
(statearr_81971_84113[(1)] = (5));

} else {
var statearr_81972_84114 = state_81961__$1;
(statearr_81972_84114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (15))){
var inst_81939 = (state_81961[(8)]);
var state_81961__$1 = state_81961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_81961__$1,(18),to,inst_81939);
} else {
if((state_val_81962 === (21))){
var inst_81952 = (state_81961[(2)]);
var state_81961__$1 = state_81961;
var statearr_81973_84115 = state_81961__$1;
(statearr_81973_84115[(2)] = inst_81952);

(statearr_81973_84115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (13))){
var inst_81954 = (state_81961[(2)]);
var state_81961__$1 = (function (){var statearr_81975 = state_81961;
(statearr_81975[(9)] = inst_81954);

return statearr_81975;
})();
var statearr_81977_84116 = state_81961__$1;
(statearr_81977_84116[(2)] = null);

(statearr_81977_84116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (6))){
var inst_81926 = (state_81961[(7)]);
var state_81961__$1 = state_81961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81961__$1,(11),inst_81926);
} else {
if((state_val_81962 === (17))){
var inst_81947 = (state_81961[(2)]);
var state_81961__$1 = state_81961;
if(cljs.core.truth_(inst_81947)){
var statearr_81978_84117 = state_81961__$1;
(statearr_81978_84117[(1)] = (19));

} else {
var statearr_81979_84118 = state_81961__$1;
(statearr_81979_84118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (3))){
var inst_81959 = (state_81961[(2)]);
var state_81961__$1 = state_81961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_81961__$1,inst_81959);
} else {
if((state_val_81962 === (12))){
var inst_81936 = (state_81961[(10)]);
var state_81961__$1 = state_81961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81961__$1,(14),inst_81936);
} else {
if((state_val_81962 === (2))){
var state_81961__$1 = state_81961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81961__$1,(4),results);
} else {
if((state_val_81962 === (19))){
var state_81961__$1 = state_81961;
var statearr_81980_84119 = state_81961__$1;
(statearr_81980_84119[(2)] = null);

(statearr_81980_84119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (11))){
var inst_81936 = (state_81961[(2)]);
var state_81961__$1 = (function (){var statearr_81981 = state_81961;
(statearr_81981[(10)] = inst_81936);

return statearr_81981;
})();
var statearr_81982_84124 = state_81961__$1;
(statearr_81982_84124[(2)] = null);

(statearr_81982_84124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (9))){
var state_81961__$1 = state_81961;
var statearr_81983_84126 = state_81961__$1;
(statearr_81983_84126[(2)] = null);

(statearr_81983_84126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (5))){
var state_81961__$1 = state_81961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_81984_84127 = state_81961__$1;
(statearr_81984_84127[(1)] = (8));

} else {
var statearr_81985_84128 = state_81961__$1;
(statearr_81985_84128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (14))){
var inst_81939 = (state_81961[(8)]);
var inst_81941 = (state_81961[(11)]);
var inst_81939__$1 = (state_81961[(2)]);
var inst_81940 = (inst_81939__$1 == null);
var inst_81941__$1 = cljs.core.not(inst_81940);
var state_81961__$1 = (function (){var statearr_81989 = state_81961;
(statearr_81989[(8)] = inst_81939__$1);

(statearr_81989[(11)] = inst_81941__$1);

return statearr_81989;
})();
if(inst_81941__$1){
var statearr_81990_84129 = state_81961__$1;
(statearr_81990_84129[(1)] = (15));

} else {
var statearr_81991_84130 = state_81961__$1;
(statearr_81991_84130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (16))){
var inst_81941 = (state_81961[(11)]);
var state_81961__$1 = state_81961;
var statearr_81992_84134 = state_81961__$1;
(statearr_81992_84134[(2)] = inst_81941);

(statearr_81992_84134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (10))){
var inst_81933 = (state_81961[(2)]);
var state_81961__$1 = state_81961;
var statearr_81993_84136 = state_81961__$1;
(statearr_81993_84136[(2)] = inst_81933);

(statearr_81993_84136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (18))){
var inst_81944 = (state_81961[(2)]);
var state_81961__$1 = state_81961;
var statearr_81994_84137 = state_81961__$1;
(statearr_81994_84137[(2)] = inst_81944);

(statearr_81994_84137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81962 === (8))){
var inst_81930 = cljs.core.async.close_BANG_(to);
var state_81961__$1 = state_81961;
var statearr_81995_84138 = state_81961__$1;
(statearr_81995_84138[(2)] = inst_81930);

(statearr_81995_84138[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0 = (function (){
var statearr_81996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__);

(statearr_81996[(1)] = (1));

return statearr_81996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1 = (function (state_81961){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_81961);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e81997){var ex__33327__auto__ = e81997;
var statearr_81998_84142 = state_81961;
(statearr_81998_84142[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_81961[(4)]))){
var statearr_81999_84143 = state_81961;
(statearr_81999_84143[(1)] = cljs.core.first((state_81961[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84144 = state_81961;
state_81961 = G__84144;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__ = function(state_81961){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1.call(this,state_81961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33324__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82000 = f__33449__auto__();
(statearr_82000[(6)] = c__33448__auto__);

return statearr_82000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__82003 = arguments.length;
switch (G__82003) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__82006 = arguments.length;
switch (G__82006) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__82011 = arguments.length;
switch (G__82011) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33448__auto___84153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82037){
var state_val_82038 = (state_82037[(1)]);
if((state_val_82038 === (7))){
var inst_82033 = (state_82037[(2)]);
var state_82037__$1 = state_82037;
var statearr_82039_84154 = state_82037__$1;
(statearr_82039_84154[(2)] = inst_82033);

(statearr_82039_84154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (1))){
var state_82037__$1 = state_82037;
var statearr_82043_84155 = state_82037__$1;
(statearr_82043_84155[(2)] = null);

(statearr_82043_84155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (4))){
var inst_82014 = (state_82037[(7)]);
var inst_82014__$1 = (state_82037[(2)]);
var inst_82015 = (inst_82014__$1 == null);
var state_82037__$1 = (function (){var statearr_82047 = state_82037;
(statearr_82047[(7)] = inst_82014__$1);

return statearr_82047;
})();
if(cljs.core.truth_(inst_82015)){
var statearr_82048_84157 = state_82037__$1;
(statearr_82048_84157[(1)] = (5));

} else {
var statearr_82049_84158 = state_82037__$1;
(statearr_82049_84158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (13))){
var state_82037__$1 = state_82037;
var statearr_82053_84159 = state_82037__$1;
(statearr_82053_84159[(2)] = null);

(statearr_82053_84159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (6))){
var inst_82014 = (state_82037[(7)]);
var inst_82020 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_82014) : p.call(null, inst_82014));
var state_82037__$1 = state_82037;
if(cljs.core.truth_(inst_82020)){
var statearr_82054_84160 = state_82037__$1;
(statearr_82054_84160[(1)] = (9));

} else {
var statearr_82055_84161 = state_82037__$1;
(statearr_82055_84161[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (3))){
var inst_82035 = (state_82037[(2)]);
var state_82037__$1 = state_82037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82037__$1,inst_82035);
} else {
if((state_val_82038 === (12))){
var state_82037__$1 = state_82037;
var statearr_82056_84162 = state_82037__$1;
(statearr_82056_84162[(2)] = null);

(statearr_82056_84162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (2))){
var state_82037__$1 = state_82037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82037__$1,(4),ch);
} else {
if((state_val_82038 === (11))){
var inst_82014 = (state_82037[(7)]);
var inst_82024 = (state_82037[(2)]);
var state_82037__$1 = state_82037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82037__$1,(8),inst_82024,inst_82014);
} else {
if((state_val_82038 === (9))){
var state_82037__$1 = state_82037;
var statearr_82057_84164 = state_82037__$1;
(statearr_82057_84164[(2)] = tc);

(statearr_82057_84164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (5))){
var inst_82017 = cljs.core.async.close_BANG_(tc);
var inst_82018 = cljs.core.async.close_BANG_(fc);
var state_82037__$1 = (function (){var statearr_82058 = state_82037;
(statearr_82058[(8)] = inst_82017);

return statearr_82058;
})();
var statearr_82059_84165 = state_82037__$1;
(statearr_82059_84165[(2)] = inst_82018);

(statearr_82059_84165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (14))){
var inst_82031 = (state_82037[(2)]);
var state_82037__$1 = state_82037;
var statearr_82060_84166 = state_82037__$1;
(statearr_82060_84166[(2)] = inst_82031);

(statearr_82060_84166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (10))){
var state_82037__$1 = state_82037;
var statearr_82061_84167 = state_82037__$1;
(statearr_82061_84167[(2)] = fc);

(statearr_82061_84167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82038 === (8))){
var inst_82026 = (state_82037[(2)]);
var state_82037__$1 = state_82037;
if(cljs.core.truth_(inst_82026)){
var statearr_82062_84168 = state_82037__$1;
(statearr_82062_84168[(1)] = (12));

} else {
var statearr_82063_84169 = state_82037__$1;
(statearr_82063_84169[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_82064 = [null,null,null,null,null,null,null,null,null];
(statearr_82064[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_82064[(1)] = (1));

return statearr_82064;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_82037){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82037);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82065){var ex__33327__auto__ = e82065;
var statearr_82066_84173 = state_82037;
(statearr_82066_84173[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82037[(4)]))){
var statearr_82067_84174 = state_82037;
(statearr_82067_84174[(1)] = cljs.core.first((state_82037[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84175 = state_82037;
state_82037 = G__84175;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_82037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_82037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82068 = f__33449__auto__();
(statearr_82068[(6)] = c__33448__auto___84153);

return statearr_82068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82094){
var state_val_82095 = (state_82094[(1)]);
if((state_val_82095 === (7))){
var inst_82090 = (state_82094[(2)]);
var state_82094__$1 = state_82094;
var statearr_82100_84179 = state_82094__$1;
(statearr_82100_84179[(2)] = inst_82090);

(statearr_82100_84179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (1))){
var inst_82069 = init;
var inst_82070 = inst_82069;
var state_82094__$1 = (function (){var statearr_82102 = state_82094;
(statearr_82102[(7)] = inst_82070);

return statearr_82102;
})();
var statearr_82103_84180 = state_82094__$1;
(statearr_82103_84180[(2)] = null);

(statearr_82103_84180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (4))){
var inst_82073 = (state_82094[(8)]);
var inst_82073__$1 = (state_82094[(2)]);
var inst_82074 = (inst_82073__$1 == null);
var state_82094__$1 = (function (){var statearr_82104 = state_82094;
(statearr_82104[(8)] = inst_82073__$1);

return statearr_82104;
})();
if(cljs.core.truth_(inst_82074)){
var statearr_82105_84181 = state_82094__$1;
(statearr_82105_84181[(1)] = (5));

} else {
var statearr_82106_84182 = state_82094__$1;
(statearr_82106_84182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (6))){
var inst_82077 = (state_82094[(9)]);
var inst_82070 = (state_82094[(7)]);
var inst_82073 = (state_82094[(8)]);
var inst_82077__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_82070,inst_82073) : f.call(null, inst_82070,inst_82073));
var inst_82078 = cljs.core.reduced_QMARK_(inst_82077__$1);
var state_82094__$1 = (function (){var statearr_82107 = state_82094;
(statearr_82107[(9)] = inst_82077__$1);

return statearr_82107;
})();
if(inst_82078){
var statearr_82111_84183 = state_82094__$1;
(statearr_82111_84183[(1)] = (8));

} else {
var statearr_82112_84184 = state_82094__$1;
(statearr_82112_84184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (3))){
var inst_82092 = (state_82094[(2)]);
var state_82094__$1 = state_82094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82094__$1,inst_82092);
} else {
if((state_val_82095 === (2))){
var state_82094__$1 = state_82094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82094__$1,(4),ch);
} else {
if((state_val_82095 === (9))){
var inst_82077 = (state_82094[(9)]);
var inst_82070 = inst_82077;
var state_82094__$1 = (function (){var statearr_82113 = state_82094;
(statearr_82113[(7)] = inst_82070);

return statearr_82113;
})();
var statearr_82114_84185 = state_82094__$1;
(statearr_82114_84185[(2)] = null);

(statearr_82114_84185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (5))){
var inst_82070 = (state_82094[(7)]);
var state_82094__$1 = state_82094;
var statearr_82116_84186 = state_82094__$1;
(statearr_82116_84186[(2)] = inst_82070);

(statearr_82116_84186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (10))){
var inst_82088 = (state_82094[(2)]);
var state_82094__$1 = state_82094;
var statearr_82117_84187 = state_82094__$1;
(statearr_82117_84187[(2)] = inst_82088);

(statearr_82117_84187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82095 === (8))){
var inst_82077 = (state_82094[(9)]);
var inst_82084 = cljs.core.deref(inst_82077);
var state_82094__$1 = state_82094;
var statearr_82120_84188 = state_82094__$1;
(statearr_82120_84188[(2)] = inst_82084);

(statearr_82120_84188[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33324__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33324__auto____0 = (function (){
var statearr_82121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_82121[(0)] = cljs$core$async$reduce_$_state_machine__33324__auto__);

(statearr_82121[(1)] = (1));

return statearr_82121;
});
var cljs$core$async$reduce_$_state_machine__33324__auto____1 = (function (state_82094){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82094);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82122){var ex__33327__auto__ = e82122;
var statearr_82123_84191 = state_82094;
(statearr_82123_84191[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82094[(4)]))){
var statearr_82124_84192 = state_82094;
(statearr_82124_84192[(1)] = cljs.core.first((state_82094[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84193 = state_82094;
state_82094 = G__84193;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33324__auto__ = function(state_82094){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33324__auto____1.call(this,state_82094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33324__auto____0;
cljs$core$async$reduce_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33324__auto____1;
return cljs$core$async$reduce_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82131 = f__33449__auto__();
(statearr_82131[(6)] = c__33448__auto__);

return statearr_82131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82143){
var state_val_82144 = (state_82143[(1)]);
if((state_val_82144 === (1))){
var inst_82138 = cljs.core.async.reduce(f__$1,init,ch);
var state_82143__$1 = state_82143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82143__$1,(2),inst_82138);
} else {
if((state_val_82144 === (2))){
var inst_82140 = (state_82143[(2)]);
var inst_82141 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_82140) : f__$1.call(null, inst_82140));
var state_82143__$1 = state_82143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82143__$1,inst_82141);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33324__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33324__auto____0 = (function (){
var statearr_82145 = [null,null,null,null,null,null,null];
(statearr_82145[(0)] = cljs$core$async$transduce_$_state_machine__33324__auto__);

(statearr_82145[(1)] = (1));

return statearr_82145;
});
var cljs$core$async$transduce_$_state_machine__33324__auto____1 = (function (state_82143){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82143);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82146){var ex__33327__auto__ = e82146;
var statearr_82149_84194 = state_82143;
(statearr_82149_84194[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82143[(4)]))){
var statearr_82150_84195 = state_82143;
(statearr_82150_84195[(1)] = cljs.core.first((state_82143[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84196 = state_82143;
state_82143 = G__84196;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33324__auto__ = function(state_82143){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33324__auto____1.call(this,state_82143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33324__auto____0;
cljs$core$async$transduce_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33324__auto____1;
return cljs$core$async$transduce_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82151 = f__33449__auto__();
(statearr_82151[(6)] = c__33448__auto__);

return statearr_82151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__82153 = arguments.length;
switch (G__82153) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82178){
var state_val_82179 = (state_82178[(1)]);
if((state_val_82179 === (7))){
var inst_82160 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
var statearr_82182_84202 = state_82178__$1;
(statearr_82182_84202[(2)] = inst_82160);

(statearr_82182_84202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (1))){
var inst_82154 = cljs.core.seq(coll);
var inst_82155 = inst_82154;
var state_82178__$1 = (function (){var statearr_82183 = state_82178;
(statearr_82183[(7)] = inst_82155);

return statearr_82183;
})();
var statearr_82184_84205 = state_82178__$1;
(statearr_82184_84205[(2)] = null);

(statearr_82184_84205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (4))){
var inst_82155 = (state_82178[(7)]);
var inst_82158 = cljs.core.first(inst_82155);
var state_82178__$1 = state_82178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82178__$1,(7),ch,inst_82158);
} else {
if((state_val_82179 === (13))){
var inst_82172 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
var statearr_82185_84211 = state_82178__$1;
(statearr_82185_84211[(2)] = inst_82172);

(statearr_82185_84211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (6))){
var inst_82163 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
if(cljs.core.truth_(inst_82163)){
var statearr_82186_84212 = state_82178__$1;
(statearr_82186_84212[(1)] = (8));

} else {
var statearr_82187_84213 = state_82178__$1;
(statearr_82187_84213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (3))){
var inst_82176 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82178__$1,inst_82176);
} else {
if((state_val_82179 === (12))){
var state_82178__$1 = state_82178;
var statearr_82188_84214 = state_82178__$1;
(statearr_82188_84214[(2)] = null);

(statearr_82188_84214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (2))){
var inst_82155 = (state_82178[(7)]);
var state_82178__$1 = state_82178;
if(cljs.core.truth_(inst_82155)){
var statearr_82189_84215 = state_82178__$1;
(statearr_82189_84215[(1)] = (4));

} else {
var statearr_82190_84216 = state_82178__$1;
(statearr_82190_84216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (11))){
var inst_82169 = cljs.core.async.close_BANG_(ch);
var state_82178__$1 = state_82178;
var statearr_82191_84218 = state_82178__$1;
(statearr_82191_84218[(2)] = inst_82169);

(statearr_82191_84218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (9))){
var state_82178__$1 = state_82178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_82192_84219 = state_82178__$1;
(statearr_82192_84219[(1)] = (11));

} else {
var statearr_82193_84220 = state_82178__$1;
(statearr_82193_84220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (5))){
var inst_82155 = (state_82178[(7)]);
var state_82178__$1 = state_82178;
var statearr_82194_84221 = state_82178__$1;
(statearr_82194_84221[(2)] = inst_82155);

(statearr_82194_84221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (10))){
var inst_82174 = (state_82178[(2)]);
var state_82178__$1 = state_82178;
var statearr_82195_84222 = state_82178__$1;
(statearr_82195_84222[(2)] = inst_82174);

(statearr_82195_84222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82179 === (8))){
var inst_82155 = (state_82178[(7)]);
var inst_82165 = cljs.core.next(inst_82155);
var inst_82155__$1 = inst_82165;
var state_82178__$1 = (function (){var statearr_82196 = state_82178;
(statearr_82196[(7)] = inst_82155__$1);

return statearr_82196;
})();
var statearr_82197_84224 = state_82178__$1;
(statearr_82197_84224[(2)] = null);

(statearr_82197_84224[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_82198 = [null,null,null,null,null,null,null,null];
(statearr_82198[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_82198[(1)] = (1));

return statearr_82198;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_82178){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82178);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82201){var ex__33327__auto__ = e82201;
var statearr_82202_84230 = state_82178;
(statearr_82202_84230[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82178[(4)]))){
var statearr_82203_84231 = state_82178;
(statearr_82203_84231[(1)] = cljs.core.first((state_82178[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84232 = state_82178;
state_82178 = G__84232;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_82178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_82178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82204 = f__33449__auto__();
(statearr_82204[(6)] = c__33448__auto__);

return statearr_82204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__82206 = arguments.length;
switch (G__82206) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_84234 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_84234(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_84235 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_84235(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_84240 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_84240(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_84241 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_84241(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82209 = (function (ch,cs,meta82210){
this.ch = ch;
this.cs = cs;
this.meta82210 = meta82210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82211,meta82210__$1){
var self__ = this;
var _82211__$1 = this;
return (new cljs.core.async.t_cljs$core$async82209(self__.ch,self__.cs,meta82210__$1));
}));

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82211){
var self__ = this;
var _82211__$1 = this;
return self__.meta82210;
}));

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async82209.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async82209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta82210","meta82210",537817448,null)], null);
}));

(cljs.core.async.t_cljs$core$async82209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async82209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82209");

(cljs.core.async.t_cljs$core$async82209.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async82209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async82209.
 */
cljs.core.async.__GT_t_cljs$core$async82209 = (function cljs$core$async$__GT_t_cljs$core$async82209(ch,cs,meta82210){
return (new cljs.core.async.t_cljs$core$async82209(ch,cs,meta82210));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async82209(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33448__auto___84246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82360){
var state_val_82361 = (state_82360[(1)]);
if((state_val_82361 === (7))){
var inst_82352 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82362_84249 = state_82360__$1;
(statearr_82362_84249[(2)] = inst_82352);

(statearr_82362_84249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (20))){
var inst_82257 = (state_82360[(7)]);
var inst_82269 = cljs.core.first(inst_82257);
var inst_82270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82269,(0),null);
var inst_82271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82269,(1),null);
var state_82360__$1 = (function (){var statearr_82363 = state_82360;
(statearr_82363[(8)] = inst_82270);

return statearr_82363;
})();
if(cljs.core.truth_(inst_82271)){
var statearr_82364_84250 = state_82360__$1;
(statearr_82364_84250[(1)] = (22));

} else {
var statearr_82365_84251 = state_82360__$1;
(statearr_82365_84251[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (27))){
var inst_82299 = (state_82360[(9)]);
var inst_82222 = (state_82360[(10)]);
var inst_82301 = (state_82360[(11)]);
var inst_82306 = (state_82360[(12)]);
var inst_82306__$1 = cljs.core._nth(inst_82299,inst_82301);
var inst_82307 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_82306__$1,inst_82222,done);
var state_82360__$1 = (function (){var statearr_82366 = state_82360;
(statearr_82366[(12)] = inst_82306__$1);

return statearr_82366;
})();
if(cljs.core.truth_(inst_82307)){
var statearr_82367_84253 = state_82360__$1;
(statearr_82367_84253[(1)] = (30));

} else {
var statearr_82369_84254 = state_82360__$1;
(statearr_82369_84254[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (1))){
var state_82360__$1 = state_82360;
var statearr_82370_84255 = state_82360__$1;
(statearr_82370_84255[(2)] = null);

(statearr_82370_84255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (24))){
var inst_82257 = (state_82360[(7)]);
var inst_82276 = (state_82360[(2)]);
var inst_82277 = cljs.core.next(inst_82257);
var inst_82231 = inst_82277;
var inst_82232 = null;
var inst_82233 = (0);
var inst_82234 = (0);
var state_82360__$1 = (function (){var statearr_82371 = state_82360;
(statearr_82371[(13)] = inst_82231);

(statearr_82371[(14)] = inst_82232);

(statearr_82371[(15)] = inst_82234);

(statearr_82371[(16)] = inst_82233);

(statearr_82371[(17)] = inst_82276);

return statearr_82371;
})();
var statearr_82372_84257 = state_82360__$1;
(statearr_82372_84257[(2)] = null);

(statearr_82372_84257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (39))){
var state_82360__$1 = state_82360;
var statearr_82376_84258 = state_82360__$1;
(statearr_82376_84258[(2)] = null);

(statearr_82376_84258[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (4))){
var inst_82222 = (state_82360[(10)]);
var inst_82222__$1 = (state_82360[(2)]);
var inst_82223 = (inst_82222__$1 == null);
var state_82360__$1 = (function (){var statearr_82377 = state_82360;
(statearr_82377[(10)] = inst_82222__$1);

return statearr_82377;
})();
if(cljs.core.truth_(inst_82223)){
var statearr_82378_84261 = state_82360__$1;
(statearr_82378_84261[(1)] = (5));

} else {
var statearr_82379_84262 = state_82360__$1;
(statearr_82379_84262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (15))){
var inst_82231 = (state_82360[(13)]);
var inst_82232 = (state_82360[(14)]);
var inst_82234 = (state_82360[(15)]);
var inst_82233 = (state_82360[(16)]);
var inst_82253 = (state_82360[(2)]);
var inst_82254 = (inst_82234 + (1));
var tmp82373 = inst_82231;
var tmp82374 = inst_82232;
var tmp82375 = inst_82233;
var inst_82231__$1 = tmp82373;
var inst_82232__$1 = tmp82374;
var inst_82233__$1 = tmp82375;
var inst_82234__$1 = inst_82254;
var state_82360__$1 = (function (){var statearr_82380 = state_82360;
(statearr_82380[(13)] = inst_82231__$1);

(statearr_82380[(14)] = inst_82232__$1);

(statearr_82380[(15)] = inst_82234__$1);

(statearr_82380[(18)] = inst_82253);

(statearr_82380[(16)] = inst_82233__$1);

return statearr_82380;
})();
var statearr_82381_84263 = state_82360__$1;
(statearr_82381_84263[(2)] = null);

(statearr_82381_84263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (21))){
var inst_82280 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82385_84265 = state_82360__$1;
(statearr_82385_84265[(2)] = inst_82280);

(statearr_82385_84265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (31))){
var inst_82306 = (state_82360[(12)]);
var inst_82310 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_82306);
var state_82360__$1 = state_82360;
var statearr_82386_84271 = state_82360__$1;
(statearr_82386_84271[(2)] = inst_82310);

(statearr_82386_84271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (32))){
var inst_82299 = (state_82360[(9)]);
var inst_82298 = (state_82360[(19)]);
var inst_82301 = (state_82360[(11)]);
var inst_82300 = (state_82360[(20)]);
var inst_82312 = (state_82360[(2)]);
var inst_82313 = (inst_82301 + (1));
var tmp82382 = inst_82299;
var tmp82383 = inst_82298;
var tmp82384 = inst_82300;
var inst_82298__$1 = tmp82383;
var inst_82299__$1 = tmp82382;
var inst_82300__$1 = tmp82384;
var inst_82301__$1 = inst_82313;
var state_82360__$1 = (function (){var statearr_82387 = state_82360;
(statearr_82387[(9)] = inst_82299__$1);

(statearr_82387[(21)] = inst_82312);

(statearr_82387[(19)] = inst_82298__$1);

(statearr_82387[(11)] = inst_82301__$1);

(statearr_82387[(20)] = inst_82300__$1);

return statearr_82387;
})();
var statearr_82388_84272 = state_82360__$1;
(statearr_82388_84272[(2)] = null);

(statearr_82388_84272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (40))){
var inst_82325 = (state_82360[(22)]);
var inst_82329 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_82325);
var state_82360__$1 = state_82360;
var statearr_82389_84273 = state_82360__$1;
(statearr_82389_84273[(2)] = inst_82329);

(statearr_82389_84273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (33))){
var inst_82316 = (state_82360[(23)]);
var inst_82318 = cljs.core.chunked_seq_QMARK_(inst_82316);
var state_82360__$1 = state_82360;
if(inst_82318){
var statearr_82390_84274 = state_82360__$1;
(statearr_82390_84274[(1)] = (36));

} else {
var statearr_82391_84278 = state_82360__$1;
(statearr_82391_84278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (13))){
var inst_82247 = (state_82360[(24)]);
var inst_82250 = cljs.core.async.close_BANG_(inst_82247);
var state_82360__$1 = state_82360;
var statearr_82392_84279 = state_82360__$1;
(statearr_82392_84279[(2)] = inst_82250);

(statearr_82392_84279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (22))){
var inst_82270 = (state_82360[(8)]);
var inst_82273 = cljs.core.async.close_BANG_(inst_82270);
var state_82360__$1 = state_82360;
var statearr_82393_84280 = state_82360__$1;
(statearr_82393_84280[(2)] = inst_82273);

(statearr_82393_84280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (36))){
var inst_82316 = (state_82360[(23)]);
var inst_82320 = cljs.core.chunk_first(inst_82316);
var inst_82321 = cljs.core.chunk_rest(inst_82316);
var inst_82322 = cljs.core.count(inst_82320);
var inst_82298 = inst_82321;
var inst_82299 = inst_82320;
var inst_82300 = inst_82322;
var inst_82301 = (0);
var state_82360__$1 = (function (){var statearr_82394 = state_82360;
(statearr_82394[(9)] = inst_82299);

(statearr_82394[(19)] = inst_82298);

(statearr_82394[(11)] = inst_82301);

(statearr_82394[(20)] = inst_82300);

return statearr_82394;
})();
var statearr_82395_84281 = state_82360__$1;
(statearr_82395_84281[(2)] = null);

(statearr_82395_84281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (41))){
var inst_82316 = (state_82360[(23)]);
var inst_82331 = (state_82360[(2)]);
var inst_82332 = cljs.core.next(inst_82316);
var inst_82298 = inst_82332;
var inst_82299 = null;
var inst_82300 = (0);
var inst_82301 = (0);
var state_82360__$1 = (function (){var statearr_82396 = state_82360;
(statearr_82396[(25)] = inst_82331);

(statearr_82396[(9)] = inst_82299);

(statearr_82396[(19)] = inst_82298);

(statearr_82396[(11)] = inst_82301);

(statearr_82396[(20)] = inst_82300);

return statearr_82396;
})();
var statearr_82397_84282 = state_82360__$1;
(statearr_82397_84282[(2)] = null);

(statearr_82397_84282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (43))){
var state_82360__$1 = state_82360;
var statearr_82398_84283 = state_82360__$1;
(statearr_82398_84283[(2)] = null);

(statearr_82398_84283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (29))){
var inst_82340 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82399_84288 = state_82360__$1;
(statearr_82399_84288[(2)] = inst_82340);

(statearr_82399_84288[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (44))){
var inst_82349 = (state_82360[(2)]);
var state_82360__$1 = (function (){var statearr_82400 = state_82360;
(statearr_82400[(26)] = inst_82349);

return statearr_82400;
})();
var statearr_82401_84289 = state_82360__$1;
(statearr_82401_84289[(2)] = null);

(statearr_82401_84289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (6))){
var inst_82290 = (state_82360[(27)]);
var inst_82289 = cljs.core.deref(cs);
var inst_82290__$1 = cljs.core.keys(inst_82289);
var inst_82291 = cljs.core.count(inst_82290__$1);
var inst_82292 = cljs.core.reset_BANG_(dctr,inst_82291);
var inst_82297 = cljs.core.seq(inst_82290__$1);
var inst_82298 = inst_82297;
var inst_82299 = null;
var inst_82300 = (0);
var inst_82301 = (0);
var state_82360__$1 = (function (){var statearr_82402 = state_82360;
(statearr_82402[(9)] = inst_82299);

(statearr_82402[(19)] = inst_82298);

(statearr_82402[(28)] = inst_82292);

(statearr_82402[(11)] = inst_82301);

(statearr_82402[(20)] = inst_82300);

(statearr_82402[(27)] = inst_82290__$1);

return statearr_82402;
})();
var statearr_82403_84290 = state_82360__$1;
(statearr_82403_84290[(2)] = null);

(statearr_82403_84290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (28))){
var inst_82298 = (state_82360[(19)]);
var inst_82316 = (state_82360[(23)]);
var inst_82316__$1 = cljs.core.seq(inst_82298);
var state_82360__$1 = (function (){var statearr_82404 = state_82360;
(statearr_82404[(23)] = inst_82316__$1);

return statearr_82404;
})();
if(inst_82316__$1){
var statearr_82405_84291 = state_82360__$1;
(statearr_82405_84291[(1)] = (33));

} else {
var statearr_82406_84292 = state_82360__$1;
(statearr_82406_84292[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (25))){
var inst_82301 = (state_82360[(11)]);
var inst_82300 = (state_82360[(20)]);
var inst_82303 = (inst_82301 < inst_82300);
var inst_82304 = inst_82303;
var state_82360__$1 = state_82360;
if(cljs.core.truth_(inst_82304)){
var statearr_82407_84293 = state_82360__$1;
(statearr_82407_84293[(1)] = (27));

} else {
var statearr_82408_84294 = state_82360__$1;
(statearr_82408_84294[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (34))){
var state_82360__$1 = state_82360;
var statearr_82409_84295 = state_82360__$1;
(statearr_82409_84295[(2)] = null);

(statearr_82409_84295[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (17))){
var state_82360__$1 = state_82360;
var statearr_82410_84296 = state_82360__$1;
(statearr_82410_84296[(2)] = null);

(statearr_82410_84296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (3))){
var inst_82354 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82360__$1,inst_82354);
} else {
if((state_val_82361 === (12))){
var inst_82285 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82411_84297 = state_82360__$1;
(statearr_82411_84297[(2)] = inst_82285);

(statearr_82411_84297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (2))){
var state_82360__$1 = state_82360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82360__$1,(4),ch);
} else {
if((state_val_82361 === (23))){
var state_82360__$1 = state_82360;
var statearr_82412_84298 = state_82360__$1;
(statearr_82412_84298[(2)] = null);

(statearr_82412_84298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (35))){
var inst_82338 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82413_84303 = state_82360__$1;
(statearr_82413_84303[(2)] = inst_82338);

(statearr_82413_84303[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (19))){
var inst_82257 = (state_82360[(7)]);
var inst_82261 = cljs.core.chunk_first(inst_82257);
var inst_82262 = cljs.core.chunk_rest(inst_82257);
var inst_82263 = cljs.core.count(inst_82261);
var inst_82231 = inst_82262;
var inst_82232 = inst_82261;
var inst_82233 = inst_82263;
var inst_82234 = (0);
var state_82360__$1 = (function (){var statearr_82414 = state_82360;
(statearr_82414[(13)] = inst_82231);

(statearr_82414[(14)] = inst_82232);

(statearr_82414[(15)] = inst_82234);

(statearr_82414[(16)] = inst_82233);

return statearr_82414;
})();
var statearr_82415_84307 = state_82360__$1;
(statearr_82415_84307[(2)] = null);

(statearr_82415_84307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (11))){
var inst_82231 = (state_82360[(13)]);
var inst_82257 = (state_82360[(7)]);
var inst_82257__$1 = cljs.core.seq(inst_82231);
var state_82360__$1 = (function (){var statearr_82416 = state_82360;
(statearr_82416[(7)] = inst_82257__$1);

return statearr_82416;
})();
if(inst_82257__$1){
var statearr_82417_84308 = state_82360__$1;
(statearr_82417_84308[(1)] = (16));

} else {
var statearr_82418_84309 = state_82360__$1;
(statearr_82418_84309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (9))){
var inst_82287 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82419_84310 = state_82360__$1;
(statearr_82419_84310[(2)] = inst_82287);

(statearr_82419_84310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (5))){
var inst_82229 = cljs.core.deref(cs);
var inst_82230 = cljs.core.seq(inst_82229);
var inst_82231 = inst_82230;
var inst_82232 = null;
var inst_82233 = (0);
var inst_82234 = (0);
var state_82360__$1 = (function (){var statearr_82420 = state_82360;
(statearr_82420[(13)] = inst_82231);

(statearr_82420[(14)] = inst_82232);

(statearr_82420[(15)] = inst_82234);

(statearr_82420[(16)] = inst_82233);

return statearr_82420;
})();
var statearr_82421_84311 = state_82360__$1;
(statearr_82421_84311[(2)] = null);

(statearr_82421_84311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (14))){
var state_82360__$1 = state_82360;
var statearr_82422_84312 = state_82360__$1;
(statearr_82422_84312[(2)] = null);

(statearr_82422_84312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (45))){
var inst_82346 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82423_84314 = state_82360__$1;
(statearr_82423_84314[(2)] = inst_82346);

(statearr_82423_84314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (26))){
var inst_82290 = (state_82360[(27)]);
var inst_82342 = (state_82360[(2)]);
var inst_82343 = cljs.core.seq(inst_82290);
var state_82360__$1 = (function (){var statearr_82424 = state_82360;
(statearr_82424[(29)] = inst_82342);

return statearr_82424;
})();
if(inst_82343){
var statearr_82427_84315 = state_82360__$1;
(statearr_82427_84315[(1)] = (42));

} else {
var statearr_82429_84316 = state_82360__$1;
(statearr_82429_84316[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (16))){
var inst_82257 = (state_82360[(7)]);
var inst_82259 = cljs.core.chunked_seq_QMARK_(inst_82257);
var state_82360__$1 = state_82360;
if(inst_82259){
var statearr_82430_84317 = state_82360__$1;
(statearr_82430_84317[(1)] = (19));

} else {
var statearr_82431_84322 = state_82360__$1;
(statearr_82431_84322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (38))){
var inst_82335 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82433_84323 = state_82360__$1;
(statearr_82433_84323[(2)] = inst_82335);

(statearr_82433_84323[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (30))){
var state_82360__$1 = state_82360;
var statearr_82434_84324 = state_82360__$1;
(statearr_82434_84324[(2)] = null);

(statearr_82434_84324[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (10))){
var inst_82232 = (state_82360[(14)]);
var inst_82234 = (state_82360[(15)]);
var inst_82246 = cljs.core._nth(inst_82232,inst_82234);
var inst_82247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82246,(0),null);
var inst_82248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82246,(1),null);
var state_82360__$1 = (function (){var statearr_82435 = state_82360;
(statearr_82435[(24)] = inst_82247);

return statearr_82435;
})();
if(cljs.core.truth_(inst_82248)){
var statearr_82436_84325 = state_82360__$1;
(statearr_82436_84325[(1)] = (13));

} else {
var statearr_82437_84326 = state_82360__$1;
(statearr_82437_84326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (18))){
var inst_82283 = (state_82360[(2)]);
var state_82360__$1 = state_82360;
var statearr_82438_84331 = state_82360__$1;
(statearr_82438_84331[(2)] = inst_82283);

(statearr_82438_84331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (42))){
var state_82360__$1 = state_82360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82360__$1,(45),dchan);
} else {
if((state_val_82361 === (37))){
var inst_82316 = (state_82360[(23)]);
var inst_82222 = (state_82360[(10)]);
var inst_82325 = (state_82360[(22)]);
var inst_82325__$1 = cljs.core.first(inst_82316);
var inst_82326 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_82325__$1,inst_82222,done);
var state_82360__$1 = (function (){var statearr_82439 = state_82360;
(statearr_82439[(22)] = inst_82325__$1);

return statearr_82439;
})();
if(cljs.core.truth_(inst_82326)){
var statearr_82440_84332 = state_82360__$1;
(statearr_82440_84332[(1)] = (39));

} else {
var statearr_82441_84333 = state_82360__$1;
(statearr_82441_84333[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82361 === (8))){
var inst_82234 = (state_82360[(15)]);
var inst_82233 = (state_82360[(16)]);
var inst_82236 = (inst_82234 < inst_82233);
var inst_82237 = inst_82236;
var state_82360__$1 = state_82360;
if(cljs.core.truth_(inst_82237)){
var statearr_82442_84334 = state_82360__$1;
(statearr_82442_84334[(1)] = (10));

} else {
var statearr_82443_84335 = state_82360__$1;
(statearr_82443_84335[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__33324__auto__ = null;
var cljs$core$async$mult_$_state_machine__33324__auto____0 = (function (){
var statearr_82444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82444[(0)] = cljs$core$async$mult_$_state_machine__33324__auto__);

(statearr_82444[(1)] = (1));

return statearr_82444;
});
var cljs$core$async$mult_$_state_machine__33324__auto____1 = (function (state_82360){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82360);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82445){var ex__33327__auto__ = e82445;
var statearr_82446_84336 = state_82360;
(statearr_82446_84336[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82360[(4)]))){
var statearr_82447_84337 = state_82360;
(statearr_82447_84337[(1)] = cljs.core.first((state_82360[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84338 = state_82360;
state_82360 = G__84338;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33324__auto__ = function(state_82360){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33324__auto____1.call(this,state_82360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33324__auto____0;
cljs$core$async$mult_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33324__auto____1;
return cljs$core$async$mult_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82448 = f__33449__auto__();
(statearr_82448[(6)] = c__33448__auto___84246);

return statearr_82448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__82450 = arguments.length;
switch (G__82450) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_84345 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_84345(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_84349 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_84349(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_84350 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_84350(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_84355 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_84355(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_84356 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_84356(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84357 = arguments.length;
var i__5727__auto___84358 = (0);
while(true){
if((i__5727__auto___84358 < len__5726__auto___84357)){
args__5732__auto__.push((arguments[i__5727__auto___84358]));

var G__84359 = (i__5727__auto___84358 + (1));
i__5727__auto___84358 = G__84359;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__82468){
var map__82469 = p__82468;
var map__82469__$1 = cljs.core.__destructure_map(map__82469);
var opts = map__82469__$1;
var statearr_82470_84360 = state;
(statearr_82470_84360[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_82472_84361 = state;
(statearr_82472_84361[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_82473_84362 = state;
(statearr_82473_84362[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq82463){
var G__82464 = cljs.core.first(seq82463);
var seq82463__$1 = cljs.core.next(seq82463);
var G__82465 = cljs.core.first(seq82463__$1);
var seq82463__$2 = cljs.core.next(seq82463__$1);
var G__82466 = cljs.core.first(seq82463__$2);
var seq82463__$3 = cljs.core.next(seq82463__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82464,G__82465,G__82466,seq82463__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82483 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta82484){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta82484 = meta82484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82485,meta82484__$1){
var self__ = this;
var _82485__$1 = this;
return (new cljs.core.async.t_cljs$core$async82483(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta82484__$1));
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82485){
var self__ = this;
var _82485__$1 = this;
return self__.meta82484;
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async82483.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async82483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta82484","meta82484",-436007204,null)], null);
}));

(cljs.core.async.t_cljs$core$async82483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async82483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82483");

(cljs.core.async.t_cljs$core$async82483.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async82483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async82483.
 */
cljs.core.async.__GT_t_cljs$core$async82483 = (function cljs$core$async$__GT_t_cljs$core$async82483(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta82484){
return (new cljs.core.async.t_cljs$core$async82483(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta82484));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async82483(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33448__auto___84377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82584){
var state_val_82585 = (state_82584[(1)]);
if((state_val_82585 === (7))){
var inst_82536 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
if(cljs.core.truth_(inst_82536)){
var statearr_82586_84378 = state_82584__$1;
(statearr_82586_84378[(1)] = (8));

} else {
var statearr_82587_84379 = state_82584__$1;
(statearr_82587_84379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (20))){
var inst_82529 = (state_82584[(7)]);
var state_82584__$1 = state_82584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82584__$1,(23),out,inst_82529);
} else {
if((state_val_82585 === (1))){
var inst_82512 = calc_state();
var inst_82513 = cljs.core.__destructure_map(inst_82512);
var inst_82514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82513,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_82515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82513,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_82516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82513,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_82517 = inst_82512;
var state_82584__$1 = (function (){var statearr_82591 = state_82584;
(statearr_82591[(8)] = inst_82514);

(statearr_82591[(9)] = inst_82516);

(statearr_82591[(10)] = inst_82517);

(statearr_82591[(11)] = inst_82515);

return statearr_82591;
})();
var statearr_82592_84382 = state_82584__$1;
(statearr_82592_84382[(2)] = null);

(statearr_82592_84382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (24))){
var inst_82520 = (state_82584[(12)]);
var inst_82517 = inst_82520;
var state_82584__$1 = (function (){var statearr_82593 = state_82584;
(statearr_82593[(10)] = inst_82517);

return statearr_82593;
})();
var statearr_82594_84383 = state_82584__$1;
(statearr_82594_84383[(2)] = null);

(statearr_82594_84383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (4))){
var inst_82531 = (state_82584[(13)]);
var inst_82529 = (state_82584[(7)]);
var inst_82528 = (state_82584[(2)]);
var inst_82529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82528,(0),null);
var inst_82530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_82528,(1),null);
var inst_82531__$1 = (inst_82529__$1 == null);
var state_82584__$1 = (function (){var statearr_82596 = state_82584;
(statearr_82596[(13)] = inst_82531__$1);

(statearr_82596[(7)] = inst_82529__$1);

(statearr_82596[(14)] = inst_82530);

return statearr_82596;
})();
if(cljs.core.truth_(inst_82531__$1)){
var statearr_82597_84387 = state_82584__$1;
(statearr_82597_84387[(1)] = (5));

} else {
var statearr_82598_84388 = state_82584__$1;
(statearr_82598_84388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (15))){
var inst_82521 = (state_82584[(15)]);
var inst_82554 = (state_82584[(16)]);
var inst_82554__$1 = cljs.core.empty_QMARK_(inst_82521);
var state_82584__$1 = (function (){var statearr_82599 = state_82584;
(statearr_82599[(16)] = inst_82554__$1);

return statearr_82599;
})();
if(inst_82554__$1){
var statearr_82600_84389 = state_82584__$1;
(statearr_82600_84389[(1)] = (17));

} else {
var statearr_82601_84391 = state_82584__$1;
(statearr_82601_84391[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (21))){
var inst_82520 = (state_82584[(12)]);
var inst_82517 = inst_82520;
var state_82584__$1 = (function (){var statearr_82602 = state_82584;
(statearr_82602[(10)] = inst_82517);

return statearr_82602;
})();
var statearr_82603_84392 = state_82584__$1;
(statearr_82603_84392[(2)] = null);

(statearr_82603_84392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (13))){
var inst_82544 = (state_82584[(2)]);
var inst_82545 = calc_state();
var inst_82517 = inst_82545;
var state_82584__$1 = (function (){var statearr_82604 = state_82584;
(statearr_82604[(17)] = inst_82544);

(statearr_82604[(10)] = inst_82517);

return statearr_82604;
})();
var statearr_82605_84393 = state_82584__$1;
(statearr_82605_84393[(2)] = null);

(statearr_82605_84393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (22))){
var inst_82578 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
var statearr_82606_84394 = state_82584__$1;
(statearr_82606_84394[(2)] = inst_82578);

(statearr_82606_84394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (6))){
var inst_82530 = (state_82584[(14)]);
var inst_82534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_82530,change);
var state_82584__$1 = state_82584;
var statearr_82607_84395 = state_82584__$1;
(statearr_82607_84395[(2)] = inst_82534);

(statearr_82607_84395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (25))){
var state_82584__$1 = state_82584;
var statearr_82612_84396 = state_82584__$1;
(statearr_82612_84396[(2)] = null);

(statearr_82612_84396[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (17))){
var inst_82522 = (state_82584[(18)]);
var inst_82530 = (state_82584[(14)]);
var inst_82556 = (inst_82522.cljs$core$IFn$_invoke$arity$1 ? inst_82522.cljs$core$IFn$_invoke$arity$1(inst_82530) : inst_82522.call(null, inst_82530));
var inst_82557 = cljs.core.not(inst_82556);
var state_82584__$1 = state_82584;
var statearr_82613_84398 = state_82584__$1;
(statearr_82613_84398[(2)] = inst_82557);

(statearr_82613_84398[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (3))){
var inst_82582 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82584__$1,inst_82582);
} else {
if((state_val_82585 === (12))){
var state_82584__$1 = state_82584;
var statearr_82617_84400 = state_82584__$1;
(statearr_82617_84400[(2)] = null);

(statearr_82617_84400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (2))){
var inst_82520 = (state_82584[(12)]);
var inst_82517 = (state_82584[(10)]);
var inst_82520__$1 = cljs.core.__destructure_map(inst_82517);
var inst_82521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82520__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_82522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82520__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_82523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82520__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_82584__$1 = (function (){var statearr_82618 = state_82584;
(statearr_82618[(15)] = inst_82521);

(statearr_82618[(12)] = inst_82520__$1);

(statearr_82618[(18)] = inst_82522);

return statearr_82618;
})();
return cljs.core.async.ioc_alts_BANG_(state_82584__$1,(4),inst_82523);
} else {
if((state_val_82585 === (23))){
var inst_82565 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
if(cljs.core.truth_(inst_82565)){
var statearr_82619_84403 = state_82584__$1;
(statearr_82619_84403[(1)] = (24));

} else {
var statearr_82620_84404 = state_82584__$1;
(statearr_82620_84404[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (19))){
var inst_82560 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
var statearr_82621_84406 = state_82584__$1;
(statearr_82621_84406[(2)] = inst_82560);

(statearr_82621_84406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (11))){
var inst_82530 = (state_82584[(14)]);
var inst_82541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_82530);
var state_82584__$1 = state_82584;
var statearr_82622_84407 = state_82584__$1;
(statearr_82622_84407[(2)] = inst_82541);

(statearr_82622_84407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (9))){
var inst_82521 = (state_82584[(15)]);
var inst_82551 = (state_82584[(19)]);
var inst_82530 = (state_82584[(14)]);
var inst_82551__$1 = (inst_82521.cljs$core$IFn$_invoke$arity$1 ? inst_82521.cljs$core$IFn$_invoke$arity$1(inst_82530) : inst_82521.call(null, inst_82530));
var state_82584__$1 = (function (){var statearr_82623 = state_82584;
(statearr_82623[(19)] = inst_82551__$1);

return statearr_82623;
})();
if(cljs.core.truth_(inst_82551__$1)){
var statearr_82624_84410 = state_82584__$1;
(statearr_82624_84410[(1)] = (14));

} else {
var statearr_82625_84411 = state_82584__$1;
(statearr_82625_84411[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (5))){
var inst_82531 = (state_82584[(13)]);
var state_82584__$1 = state_82584;
var statearr_82626_84413 = state_82584__$1;
(statearr_82626_84413[(2)] = inst_82531);

(statearr_82626_84413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (14))){
var inst_82551 = (state_82584[(19)]);
var state_82584__$1 = state_82584;
var statearr_82627_84415 = state_82584__$1;
(statearr_82627_84415[(2)] = inst_82551);

(statearr_82627_84415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (26))){
var inst_82573 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
var statearr_82628_84416 = state_82584__$1;
(statearr_82628_84416[(2)] = inst_82573);

(statearr_82628_84416[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (16))){
var inst_82562 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
if(cljs.core.truth_(inst_82562)){
var statearr_82629_84417 = state_82584__$1;
(statearr_82629_84417[(1)] = (20));

} else {
var statearr_82630_84418 = state_82584__$1;
(statearr_82630_84418[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (10))){
var inst_82580 = (state_82584[(2)]);
var state_82584__$1 = state_82584;
var statearr_82631_84419 = state_82584__$1;
(statearr_82631_84419[(2)] = inst_82580);

(statearr_82631_84419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (18))){
var inst_82554 = (state_82584[(16)]);
var state_82584__$1 = state_82584;
var statearr_82632_84422 = state_82584__$1;
(statearr_82632_84422[(2)] = inst_82554);

(statearr_82632_84422[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82585 === (8))){
var inst_82529 = (state_82584[(7)]);
var inst_82538 = (inst_82529 == null);
var state_82584__$1 = state_82584;
if(cljs.core.truth_(inst_82538)){
var statearr_82636_84425 = state_82584__$1;
(statearr_82636_84425[(1)] = (11));

} else {
var statearr_82637_84426 = state_82584__$1;
(statearr_82637_84426[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33324__auto__ = null;
var cljs$core$async$mix_$_state_machine__33324__auto____0 = (function (){
var statearr_82638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82638[(0)] = cljs$core$async$mix_$_state_machine__33324__auto__);

(statearr_82638[(1)] = (1));

return statearr_82638;
});
var cljs$core$async$mix_$_state_machine__33324__auto____1 = (function (state_82584){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82584);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82642){var ex__33327__auto__ = e82642;
var statearr_82643_84428 = state_82584;
(statearr_82643_84428[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82584[(4)]))){
var statearr_82644_84429 = state_82584;
(statearr_82644_84429[(1)] = cljs.core.first((state_82584[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84430 = state_82584;
state_82584 = G__84430;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33324__auto__ = function(state_82584){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33324__auto____1.call(this,state_82584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33324__auto____0;
cljs$core$async$mix_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33324__auto____1;
return cljs$core$async$mix_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82645 = f__33449__auto__();
(statearr_82645[(6)] = c__33448__auto___84377);

return statearr_82645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_84432 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_84432(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_84435 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_84435(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_84437 = (function() {
var G__84438 = null;
var G__84438__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__84438__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__84438 = function(p,v){
switch(arguments.length){
case 1:
return G__84438__1.call(this,p);
case 2:
return G__84438__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__84438.cljs$core$IFn$_invoke$arity$1 = G__84438__1;
G__84438.cljs$core$IFn$_invoke$arity$2 = G__84438__2;
return G__84438;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__82664 = arguments.length;
switch (G__82664) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_84437(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_84437(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async82677 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta82678){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta82678 = meta82678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82679,meta82678__$1){
var self__ = this;
var _82679__$1 = this;
return (new cljs.core.async.t_cljs$core$async82677(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta82678__$1));
}));

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82679){
var self__ = this;
var _82679__$1 = this;
return self__.meta82678;
}));

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async82677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async82677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta82678","meta82678",937646589,null)], null);
}));

(cljs.core.async.t_cljs$core$async82677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async82677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async82677");

(cljs.core.async.t_cljs$core$async82677.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async82677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async82677.
 */
cljs.core.async.__GT_t_cljs$core$async82677 = (function cljs$core$async$__GT_t_cljs$core$async82677(ch,topic_fn,buf_fn,mults,ensure_mult,meta82678){
return (new cljs.core.async.t_cljs$core$async82677(ch,topic_fn,buf_fn,mults,ensure_mult,meta82678));
});


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
var G__82676 = arguments.length;
switch (G__82676) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__82671_SHARP_){
if(cljs.core.truth_((p1__82671_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__82671_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__82671_SHARP_.call(null, topic)))){
return p1__82671_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__82671_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async82677(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33448__auto___84463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82755){
var state_val_82758 = (state_82755[(1)]);
if((state_val_82758 === (7))){
var inst_82751 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
var statearr_82759_84464 = state_82755__$1;
(statearr_82759_84464[(2)] = inst_82751);

(statearr_82759_84464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (20))){
var state_82755__$1 = state_82755;
var statearr_82760_84466 = state_82755__$1;
(statearr_82760_84466[(2)] = null);

(statearr_82760_84466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (1))){
var state_82755__$1 = state_82755;
var statearr_82761_84468 = state_82755__$1;
(statearr_82761_84468[(2)] = null);

(statearr_82761_84468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (24))){
var inst_82734 = (state_82755[(7)]);
var inst_82743 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_82734);
var state_82755__$1 = state_82755;
var statearr_82762_84470 = state_82755__$1;
(statearr_82762_84470[(2)] = inst_82743);

(statearr_82762_84470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (4))){
var inst_82684 = (state_82755[(8)]);
var inst_82684__$1 = (state_82755[(2)]);
var inst_82685 = (inst_82684__$1 == null);
var state_82755__$1 = (function (){var statearr_82765 = state_82755;
(statearr_82765[(8)] = inst_82684__$1);

return statearr_82765;
})();
if(cljs.core.truth_(inst_82685)){
var statearr_82766_84471 = state_82755__$1;
(statearr_82766_84471[(1)] = (5));

} else {
var statearr_82767_84472 = state_82755__$1;
(statearr_82767_84472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (15))){
var inst_82728 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
var statearr_82768_84473 = state_82755__$1;
(statearr_82768_84473[(2)] = inst_82728);

(statearr_82768_84473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (21))){
var inst_82748 = (state_82755[(2)]);
var state_82755__$1 = (function (){var statearr_82773 = state_82755;
(statearr_82773[(9)] = inst_82748);

return statearr_82773;
})();
var statearr_82774_84474 = state_82755__$1;
(statearr_82774_84474[(2)] = null);

(statearr_82774_84474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (13))){
var inst_82710 = (state_82755[(10)]);
var inst_82712 = cljs.core.chunked_seq_QMARK_(inst_82710);
var state_82755__$1 = state_82755;
if(inst_82712){
var statearr_82775_84475 = state_82755__$1;
(statearr_82775_84475[(1)] = (16));

} else {
var statearr_82776_84476 = state_82755__$1;
(statearr_82776_84476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (22))){
var inst_82740 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
if(cljs.core.truth_(inst_82740)){
var statearr_82777_84477 = state_82755__$1;
(statearr_82777_84477[(1)] = (23));

} else {
var statearr_82778_84478 = state_82755__$1;
(statearr_82778_84478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (6))){
var inst_82734 = (state_82755[(7)]);
var inst_82736 = (state_82755[(11)]);
var inst_82684 = (state_82755[(8)]);
var inst_82734__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_82684) : topic_fn.call(null, inst_82684));
var inst_82735 = cljs.core.deref(mults);
var inst_82736__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82735,inst_82734__$1);
var state_82755__$1 = (function (){var statearr_82779 = state_82755;
(statearr_82779[(7)] = inst_82734__$1);

(statearr_82779[(11)] = inst_82736__$1);

return statearr_82779;
})();
if(cljs.core.truth_(inst_82736__$1)){
var statearr_82780_84479 = state_82755__$1;
(statearr_82780_84479[(1)] = (19));

} else {
var statearr_82781_84480 = state_82755__$1;
(statearr_82781_84480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (25))){
var inst_82745 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
var statearr_82782_84481 = state_82755__$1;
(statearr_82782_84481[(2)] = inst_82745);

(statearr_82782_84481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (17))){
var inst_82710 = (state_82755[(10)]);
var inst_82719 = cljs.core.first(inst_82710);
var inst_82720 = cljs.core.async.muxch_STAR_(inst_82719);
var inst_82721 = cljs.core.async.close_BANG_(inst_82720);
var inst_82722 = cljs.core.next(inst_82710);
var inst_82694 = inst_82722;
var inst_82695 = null;
var inst_82696 = (0);
var inst_82697 = (0);
var state_82755__$1 = (function (){var statearr_82786 = state_82755;
(statearr_82786[(12)] = inst_82696);

(statearr_82786[(13)] = inst_82721);

(statearr_82786[(14)] = inst_82695);

(statearr_82786[(15)] = inst_82697);

(statearr_82786[(16)] = inst_82694);

return statearr_82786;
})();
var statearr_82787_84485 = state_82755__$1;
(statearr_82787_84485[(2)] = null);

(statearr_82787_84485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (3))){
var inst_82753 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82755__$1,inst_82753);
} else {
if((state_val_82758 === (12))){
var inst_82730 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
var statearr_82791_84487 = state_82755__$1;
(statearr_82791_84487[(2)] = inst_82730);

(statearr_82791_84487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (2))){
var state_82755__$1 = state_82755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82755__$1,(4),ch);
} else {
if((state_val_82758 === (23))){
var state_82755__$1 = state_82755;
var statearr_82795_84488 = state_82755__$1;
(statearr_82795_84488[(2)] = null);

(statearr_82795_84488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (19))){
var inst_82736 = (state_82755[(11)]);
var inst_82684 = (state_82755[(8)]);
var inst_82738 = cljs.core.async.muxch_STAR_(inst_82736);
var state_82755__$1 = state_82755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82755__$1,(22),inst_82738,inst_82684);
} else {
if((state_val_82758 === (11))){
var inst_82694 = (state_82755[(16)]);
var inst_82710 = (state_82755[(10)]);
var inst_82710__$1 = cljs.core.seq(inst_82694);
var state_82755__$1 = (function (){var statearr_82799 = state_82755;
(statearr_82799[(10)] = inst_82710__$1);

return statearr_82799;
})();
if(inst_82710__$1){
var statearr_82800_84489 = state_82755__$1;
(statearr_82800_84489[(1)] = (13));

} else {
var statearr_82801_84490 = state_82755__$1;
(statearr_82801_84490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (9))){
var inst_82732 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
var statearr_82802_84492 = state_82755__$1;
(statearr_82802_84492[(2)] = inst_82732);

(statearr_82802_84492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (5))){
var inst_82691 = cljs.core.deref(mults);
var inst_82692 = cljs.core.vals(inst_82691);
var inst_82693 = cljs.core.seq(inst_82692);
var inst_82694 = inst_82693;
var inst_82695 = null;
var inst_82696 = (0);
var inst_82697 = (0);
var state_82755__$1 = (function (){var statearr_82803 = state_82755;
(statearr_82803[(12)] = inst_82696);

(statearr_82803[(14)] = inst_82695);

(statearr_82803[(15)] = inst_82697);

(statearr_82803[(16)] = inst_82694);

return statearr_82803;
})();
var statearr_82804_84496 = state_82755__$1;
(statearr_82804_84496[(2)] = null);

(statearr_82804_84496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (14))){
var state_82755__$1 = state_82755;
var statearr_82808_84501 = state_82755__$1;
(statearr_82808_84501[(2)] = null);

(statearr_82808_84501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (16))){
var inst_82710 = (state_82755[(10)]);
var inst_82714 = cljs.core.chunk_first(inst_82710);
var inst_82715 = cljs.core.chunk_rest(inst_82710);
var inst_82716 = cljs.core.count(inst_82714);
var inst_82694 = inst_82715;
var inst_82695 = inst_82714;
var inst_82696 = inst_82716;
var inst_82697 = (0);
var state_82755__$1 = (function (){var statearr_82809 = state_82755;
(statearr_82809[(12)] = inst_82696);

(statearr_82809[(14)] = inst_82695);

(statearr_82809[(15)] = inst_82697);

(statearr_82809[(16)] = inst_82694);

return statearr_82809;
})();
var statearr_82810_84503 = state_82755__$1;
(statearr_82810_84503[(2)] = null);

(statearr_82810_84503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (10))){
var inst_82696 = (state_82755[(12)]);
var inst_82695 = (state_82755[(14)]);
var inst_82697 = (state_82755[(15)]);
var inst_82694 = (state_82755[(16)]);
var inst_82704 = cljs.core._nth(inst_82695,inst_82697);
var inst_82705 = cljs.core.async.muxch_STAR_(inst_82704);
var inst_82706 = cljs.core.async.close_BANG_(inst_82705);
var inst_82707 = (inst_82697 + (1));
var tmp82805 = inst_82696;
var tmp82806 = inst_82695;
var tmp82807 = inst_82694;
var inst_82694__$1 = tmp82807;
var inst_82695__$1 = tmp82806;
var inst_82696__$1 = tmp82805;
var inst_82697__$1 = inst_82707;
var state_82755__$1 = (function (){var statearr_82812 = state_82755;
(statearr_82812[(12)] = inst_82696__$1);

(statearr_82812[(14)] = inst_82695__$1);

(statearr_82812[(15)] = inst_82697__$1);

(statearr_82812[(16)] = inst_82694__$1);

(statearr_82812[(17)] = inst_82706);

return statearr_82812;
})();
var statearr_82813_84504 = state_82755__$1;
(statearr_82813_84504[(2)] = null);

(statearr_82813_84504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (18))){
var inst_82725 = (state_82755[(2)]);
var state_82755__$1 = state_82755;
var statearr_82814_84505 = state_82755__$1;
(statearr_82814_84505[(2)] = inst_82725);

(statearr_82814_84505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82758 === (8))){
var inst_82696 = (state_82755[(12)]);
var inst_82697 = (state_82755[(15)]);
var inst_82701 = (inst_82697 < inst_82696);
var inst_82702 = inst_82701;
var state_82755__$1 = state_82755;
if(cljs.core.truth_(inst_82702)){
var statearr_82819_84507 = state_82755__$1;
(statearr_82819_84507[(1)] = (10));

} else {
var statearr_82820_84508 = state_82755__$1;
(statearr_82820_84508[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_82822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82822[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_82822[(1)] = (1));

return statearr_82822;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_82755){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82755);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82824){var ex__33327__auto__ = e82824;
var statearr_82825_84515 = state_82755;
(statearr_82825_84515[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82755[(4)]))){
var statearr_82841_84516 = state_82755;
(statearr_82841_84516[(1)] = cljs.core.first((state_82755[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84517 = state_82755;
state_82755 = G__84517;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_82755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_82755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82842 = f__33449__auto__();
(statearr_82842[(6)] = c__33448__auto___84463);

return statearr_82842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__82850 = arguments.length;
switch (G__82850) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__82863 = arguments.length;
switch (G__82863) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__82866 = arguments.length;
switch (G__82866) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33448__auto___84525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_82926){
var state_val_82927 = (state_82926[(1)]);
if((state_val_82927 === (7))){
var state_82926__$1 = state_82926;
var statearr_82928_84526 = state_82926__$1;
(statearr_82928_84526[(2)] = null);

(statearr_82928_84526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (1))){
var state_82926__$1 = state_82926;
var statearr_82929_84527 = state_82926__$1;
(statearr_82929_84527[(2)] = null);

(statearr_82929_84527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (4))){
var inst_82884 = (state_82926[(7)]);
var inst_82885 = (state_82926[(8)]);
var inst_82887 = (inst_82885 < inst_82884);
var state_82926__$1 = state_82926;
if(cljs.core.truth_(inst_82887)){
var statearr_82930_84528 = state_82926__$1;
(statearr_82930_84528[(1)] = (6));

} else {
var statearr_82931_84529 = state_82926__$1;
(statearr_82931_84529[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (15))){
var inst_82912 = (state_82926[(9)]);
var inst_82917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_82912);
var state_82926__$1 = state_82926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_82926__$1,(17),out,inst_82917);
} else {
if((state_val_82927 === (13))){
var inst_82912 = (state_82926[(9)]);
var inst_82912__$1 = (state_82926[(2)]);
var inst_82913 = cljs.core.some(cljs.core.nil_QMARK_,inst_82912__$1);
var state_82926__$1 = (function (){var statearr_82932 = state_82926;
(statearr_82932[(9)] = inst_82912__$1);

return statearr_82932;
})();
if(cljs.core.truth_(inst_82913)){
var statearr_82933_84530 = state_82926__$1;
(statearr_82933_84530[(1)] = (14));

} else {
var statearr_82934_84531 = state_82926__$1;
(statearr_82934_84531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (6))){
var state_82926__$1 = state_82926;
var statearr_82935_84534 = state_82926__$1;
(statearr_82935_84534[(2)] = null);

(statearr_82935_84534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (17))){
var inst_82919 = (state_82926[(2)]);
var state_82926__$1 = (function (){var statearr_82938 = state_82926;
(statearr_82938[(10)] = inst_82919);

return statearr_82938;
})();
var statearr_82940_84535 = state_82926__$1;
(statearr_82940_84535[(2)] = null);

(statearr_82940_84535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (3))){
var inst_82924 = (state_82926[(2)]);
var state_82926__$1 = state_82926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82926__$1,inst_82924);
} else {
if((state_val_82927 === (12))){
var _ = (function (){var statearr_82941 = state_82926;
(statearr_82941[(4)] = cljs.core.rest((state_82926[(4)])));

return statearr_82941;
})();
var state_82926__$1 = state_82926;
var ex82936 = (state_82926__$1[(2)]);
var statearr_82942_84536 = state_82926__$1;
(statearr_82942_84536[(5)] = ex82936);


if((ex82936 instanceof Object)){
var statearr_82946_84537 = state_82926__$1;
(statearr_82946_84537[(1)] = (11));

(statearr_82946_84537[(5)] = null);

} else {
throw ex82936;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (2))){
var inst_82883 = cljs.core.reset_BANG_(dctr,cnt);
var inst_82884 = cnt;
var inst_82885 = (0);
var state_82926__$1 = (function (){var statearr_82950 = state_82926;
(statearr_82950[(11)] = inst_82883);

(statearr_82950[(7)] = inst_82884);

(statearr_82950[(8)] = inst_82885);

return statearr_82950;
})();
var statearr_82951_84538 = state_82926__$1;
(statearr_82951_84538[(2)] = null);

(statearr_82951_84538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (11))){
var inst_82890 = (state_82926[(2)]);
var inst_82891 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_82926__$1 = (function (){var statearr_82952 = state_82926;
(statearr_82952[(12)] = inst_82890);

return statearr_82952;
})();
var statearr_82959_84539 = state_82926__$1;
(statearr_82959_84539[(2)] = inst_82891);

(statearr_82959_84539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (9))){
var inst_82885 = (state_82926[(8)]);
var _ = (function (){var statearr_82972 = state_82926;
(statearr_82972[(4)] = cljs.core.cons((12),(state_82926[(4)])));

return statearr_82972;
})();
var inst_82897 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_82885) : chs__$1.call(null, inst_82885));
var inst_82898 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_82885) : done.call(null, inst_82885));
var inst_82899 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_82897,inst_82898);
var ___$1 = (function (){var statearr_82973 = state_82926;
(statearr_82973[(4)] = cljs.core.rest((state_82926[(4)])));

return statearr_82973;
})();
var state_82926__$1 = state_82926;
var statearr_82974_84549 = state_82926__$1;
(statearr_82974_84549[(2)] = inst_82899);

(statearr_82974_84549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (5))){
var inst_82909 = (state_82926[(2)]);
var state_82926__$1 = (function (){var statearr_82975 = state_82926;
(statearr_82975[(13)] = inst_82909);

return statearr_82975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82926__$1,(13),dchan);
} else {
if((state_val_82927 === (14))){
var inst_82915 = cljs.core.async.close_BANG_(out);
var state_82926__$1 = state_82926;
var statearr_82979_84553 = state_82926__$1;
(statearr_82979_84553[(2)] = inst_82915);

(statearr_82979_84553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (16))){
var inst_82922 = (state_82926[(2)]);
var state_82926__$1 = state_82926;
var statearr_82980_84554 = state_82926__$1;
(statearr_82980_84554[(2)] = inst_82922);

(statearr_82980_84554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (10))){
var inst_82885 = (state_82926[(8)]);
var inst_82902 = (state_82926[(2)]);
var inst_82903 = (inst_82885 + (1));
var inst_82885__$1 = inst_82903;
var state_82926__$1 = (function (){var statearr_82981 = state_82926;
(statearr_82981[(14)] = inst_82902);

(statearr_82981[(8)] = inst_82885__$1);

return statearr_82981;
})();
var statearr_82982_84555 = state_82926__$1;
(statearr_82982_84555[(2)] = null);

(statearr_82982_84555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82927 === (8))){
var inst_82907 = (state_82926[(2)]);
var state_82926__$1 = state_82926;
var statearr_82983_84556 = state_82926__$1;
(statearr_82983_84556[(2)] = inst_82907);

(statearr_82983_84556[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_82984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_82984[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_82984[(1)] = (1));

return statearr_82984;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_82926){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_82926);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e82985){var ex__33327__auto__ = e82985;
var statearr_82986_84557 = state_82926;
(statearr_82986_84557[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_82926[(4)]))){
var statearr_82990_84558 = state_82926;
(statearr_82990_84558[(1)] = cljs.core.first((state_82926[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84559 = state_82926;
state_82926 = G__84559;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_82926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_82926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_82992 = f__33449__auto__();
(statearr_82992[(6)] = c__33448__auto___84525);

return statearr_82992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__82995 = arguments.length;
switch (G__82995) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33448__auto___84563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83034){
var state_val_83035 = (state_83034[(1)]);
if((state_val_83035 === (7))){
var inst_83013 = (state_83034[(7)]);
var inst_83012 = (state_83034[(8)]);
var inst_83012__$1 = (state_83034[(2)]);
var inst_83013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83012__$1,(0),null);
var inst_83014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83012__$1,(1),null);
var inst_83015 = (inst_83013__$1 == null);
var state_83034__$1 = (function (){var statearr_83036 = state_83034;
(statearr_83036[(7)] = inst_83013__$1);

(statearr_83036[(9)] = inst_83014);

(statearr_83036[(8)] = inst_83012__$1);

return statearr_83036;
})();
if(cljs.core.truth_(inst_83015)){
var statearr_83037_84572 = state_83034__$1;
(statearr_83037_84572[(1)] = (8));

} else {
var statearr_83038_84573 = state_83034__$1;
(statearr_83038_84573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (1))){
var inst_82996 = cljs.core.vec(chs);
var inst_82997 = inst_82996;
var state_83034__$1 = (function (){var statearr_83039 = state_83034;
(statearr_83039[(10)] = inst_82997);

return statearr_83039;
})();
var statearr_83040_84574 = state_83034__$1;
(statearr_83040_84574[(2)] = null);

(statearr_83040_84574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (4))){
var inst_82997 = (state_83034[(10)]);
var state_83034__$1 = state_83034;
return cljs.core.async.ioc_alts_BANG_(state_83034__$1,(7),inst_82997);
} else {
if((state_val_83035 === (6))){
var inst_83030 = (state_83034[(2)]);
var state_83034__$1 = state_83034;
var statearr_83043_84575 = state_83034__$1;
(statearr_83043_84575[(2)] = inst_83030);

(statearr_83043_84575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (3))){
var inst_83032 = (state_83034[(2)]);
var state_83034__$1 = state_83034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83034__$1,inst_83032);
} else {
if((state_val_83035 === (2))){
var inst_82997 = (state_83034[(10)]);
var inst_82999 = cljs.core.count(inst_82997);
var inst_83000 = (inst_82999 > (0));
var state_83034__$1 = state_83034;
if(cljs.core.truth_(inst_83000)){
var statearr_83045_84576 = state_83034__$1;
(statearr_83045_84576[(1)] = (4));

} else {
var statearr_83046_84577 = state_83034__$1;
(statearr_83046_84577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (11))){
var inst_82997 = (state_83034[(10)]);
var inst_83022 = (state_83034[(2)]);
var tmp83044 = inst_82997;
var inst_82997__$1 = tmp83044;
var state_83034__$1 = (function (){var statearr_83047 = state_83034;
(statearr_83047[(10)] = inst_82997__$1);

(statearr_83047[(11)] = inst_83022);

return statearr_83047;
})();
var statearr_83048_84581 = state_83034__$1;
(statearr_83048_84581[(2)] = null);

(statearr_83048_84581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (9))){
var inst_83013 = (state_83034[(7)]);
var state_83034__$1 = state_83034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83034__$1,(11),out,inst_83013);
} else {
if((state_val_83035 === (5))){
var inst_83028 = cljs.core.async.close_BANG_(out);
var state_83034__$1 = state_83034;
var statearr_83049_84582 = state_83034__$1;
(statearr_83049_84582[(2)] = inst_83028);

(statearr_83049_84582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (10))){
var inst_83025 = (state_83034[(2)]);
var state_83034__$1 = state_83034;
var statearr_83050_84583 = state_83034__$1;
(statearr_83050_84583[(2)] = inst_83025);

(statearr_83050_84583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83035 === (8))){
var inst_83013 = (state_83034[(7)]);
var inst_82997 = (state_83034[(10)]);
var inst_83014 = (state_83034[(9)]);
var inst_83012 = (state_83034[(8)]);
var inst_83017 = (function (){var cs = inst_82997;
var vec__83008 = inst_83012;
var v = inst_83013;
var c = inst_83014;
return (function (p1__82993_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__82993_SHARP_);
});
})();
var inst_83018 = cljs.core.filterv(inst_83017,inst_82997);
var inst_82997__$1 = inst_83018;
var state_83034__$1 = (function (){var statearr_83051 = state_83034;
(statearr_83051[(10)] = inst_82997__$1);

return statearr_83051;
})();
var statearr_83052_84584 = state_83034__$1;
(statearr_83052_84584[(2)] = null);

(statearr_83052_84584[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_83053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83053[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_83053[(1)] = (1));

return statearr_83053;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_83034){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83034);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83055){var ex__33327__auto__ = e83055;
var statearr_83056_84585 = state_83034;
(statearr_83056_84585[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83034[(4)]))){
var statearr_83057_84586 = state_83034;
(statearr_83057_84586[(1)] = cljs.core.first((state_83034[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84587 = state_83034;
state_83034 = G__84587;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_83034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_83034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83059 = f__33449__auto__();
(statearr_83059[(6)] = c__33448__auto___84563);

return statearr_83059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__83064 = arguments.length;
switch (G__83064) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33448__auto___84590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83088){
var state_val_83089 = (state_83088[(1)]);
if((state_val_83089 === (7))){
var inst_83070 = (state_83088[(7)]);
var inst_83070__$1 = (state_83088[(2)]);
var inst_83071 = (inst_83070__$1 == null);
var inst_83072 = cljs.core.not(inst_83071);
var state_83088__$1 = (function (){var statearr_83091 = state_83088;
(statearr_83091[(7)] = inst_83070__$1);

return statearr_83091;
})();
if(inst_83072){
var statearr_83092_84591 = state_83088__$1;
(statearr_83092_84591[(1)] = (8));

} else {
var statearr_83093_84593 = state_83088__$1;
(statearr_83093_84593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (1))){
var inst_83065 = (0);
var state_83088__$1 = (function (){var statearr_83094 = state_83088;
(statearr_83094[(8)] = inst_83065);

return statearr_83094;
})();
var statearr_83095_84594 = state_83088__$1;
(statearr_83095_84594[(2)] = null);

(statearr_83095_84594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (4))){
var state_83088__$1 = state_83088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83088__$1,(7),ch);
} else {
if((state_val_83089 === (6))){
var inst_83083 = (state_83088[(2)]);
var state_83088__$1 = state_83088;
var statearr_83096_84598 = state_83088__$1;
(statearr_83096_84598[(2)] = inst_83083);

(statearr_83096_84598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (3))){
var inst_83085 = (state_83088[(2)]);
var inst_83086 = cljs.core.async.close_BANG_(out);
var state_83088__$1 = (function (){var statearr_83097 = state_83088;
(statearr_83097[(9)] = inst_83085);

return statearr_83097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_83088__$1,inst_83086);
} else {
if((state_val_83089 === (2))){
var inst_83065 = (state_83088[(8)]);
var inst_83067 = (inst_83065 < n);
var state_83088__$1 = state_83088;
if(cljs.core.truth_(inst_83067)){
var statearr_83098_84599 = state_83088__$1;
(statearr_83098_84599[(1)] = (4));

} else {
var statearr_83099_84600 = state_83088__$1;
(statearr_83099_84600[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (11))){
var inst_83065 = (state_83088[(8)]);
var inst_83075 = (state_83088[(2)]);
var inst_83076 = (inst_83065 + (1));
var inst_83065__$1 = inst_83076;
var state_83088__$1 = (function (){var statearr_83101 = state_83088;
(statearr_83101[(10)] = inst_83075);

(statearr_83101[(8)] = inst_83065__$1);

return statearr_83101;
})();
var statearr_83102_84601 = state_83088__$1;
(statearr_83102_84601[(2)] = null);

(statearr_83102_84601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (9))){
var state_83088__$1 = state_83088;
var statearr_83103_84602 = state_83088__$1;
(statearr_83103_84602[(2)] = null);

(statearr_83103_84602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (5))){
var state_83088__$1 = state_83088;
var statearr_83104_84603 = state_83088__$1;
(statearr_83104_84603[(2)] = null);

(statearr_83104_84603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (10))){
var inst_83080 = (state_83088[(2)]);
var state_83088__$1 = state_83088;
var statearr_83105_84604 = state_83088__$1;
(statearr_83105_84604[(2)] = inst_83080);

(statearr_83105_84604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83089 === (8))){
var inst_83070 = (state_83088[(7)]);
var state_83088__$1 = state_83088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83088__$1,(11),out,inst_83070);
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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_83106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_83106[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_83106[(1)] = (1));

return statearr_83106;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_83088){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83088);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83107){var ex__33327__auto__ = e83107;
var statearr_83108_84605 = state_83088;
(statearr_83108_84605[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83088[(4)]))){
var statearr_83109_84606 = state_83088;
(statearr_83109_84606[(1)] = cljs.core.first((state_83088[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84607 = state_83088;
state_83088 = G__84607;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_83088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_83088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83110 = f__33449__auto__();
(statearr_83110[(6)] = c__33448__auto___84590);

return statearr_83110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async83119 = (function (f,ch,meta83113,_,fn1,meta83120){
this.f = f;
this.ch = ch;
this.meta83113 = meta83113;
this._ = _;
this.fn1 = fn1;
this.meta83120 = meta83120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async83119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83121,meta83120__$1){
var self__ = this;
var _83121__$1 = this;
return (new cljs.core.async.t_cljs$core$async83119(self__.f,self__.ch,self__.meta83113,self__._,self__.fn1,meta83120__$1));
}));

(cljs.core.async.t_cljs$core$async83119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83121){
var self__ = this;
var _83121__$1 = this;
return self__.meta83120;
}));

(cljs.core.async.t_cljs$core$async83119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async83119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async83119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__83111_SHARP_){
var G__83125 = (((p1__83111_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__83111_SHARP_) : self__.f.call(null, p1__83111_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__83125) : f1.call(null, G__83125));
});
}));

(cljs.core.async.t_cljs$core$async83119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta83113","meta83113",-1509086488,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async83112","cljs.core.async/t_cljs$core$async83112",1434989460,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta83120","meta83120",-683959971,null)], null);
}));

(cljs.core.async.t_cljs$core$async83119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async83119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async83119");

(cljs.core.async.t_cljs$core$async83119.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async83119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async83119.
 */
cljs.core.async.__GT_t_cljs$core$async83119 = (function cljs$core$async$__GT_t_cljs$core$async83119(f,ch,meta83113,_,fn1,meta83120){
return (new cljs.core.async.t_cljs$core$async83119(f,ch,meta83113,_,fn1,meta83120));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async83112 = (function (f,ch,meta83113){
this.f = f;
this.ch = ch;
this.meta83113 = meta83113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83114,meta83113__$1){
var self__ = this;
var _83114__$1 = this;
return (new cljs.core.async.t_cljs$core$async83112(self__.f,self__.ch,meta83113__$1));
}));

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83114){
var self__ = this;
var _83114__$1 = this;
return self__.meta83113;
}));

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async83119(self__.f,self__.ch,self__.meta83113,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__83126 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__83126) : self__.f.call(null, G__83126));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async83112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta83113","meta83113",-1509086488,null)], null);
}));

(cljs.core.async.t_cljs$core$async83112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async83112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async83112");

(cljs.core.async.t_cljs$core$async83112.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async83112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async83112.
 */
cljs.core.async.__GT_t_cljs$core$async83112 = (function cljs$core$async$__GT_t_cljs$core$async83112(f,ch,meta83113){
return (new cljs.core.async.t_cljs$core$async83112(f,ch,meta83113));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async83112(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async83127 = (function (f,ch,meta83128){
this.f = f;
this.ch = ch;
this.meta83128 = meta83128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83129,meta83128__$1){
var self__ = this;
var _83129__$1 = this;
return (new cljs.core.async.t_cljs$core$async83127(self__.f,self__.ch,meta83128__$1));
}));

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83129){
var self__ = this;
var _83129__$1 = this;
return self__.meta83128;
}));

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async83127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta83128","meta83128",347851468,null)], null);
}));

(cljs.core.async.t_cljs$core$async83127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async83127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async83127");

(cljs.core.async.t_cljs$core$async83127.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async83127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async83127.
 */
cljs.core.async.__GT_t_cljs$core$async83127 = (function cljs$core$async$__GT_t_cljs$core$async83127(f,ch,meta83128){
return (new cljs.core.async.t_cljs$core$async83127(f,ch,meta83128));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async83127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async83142 = (function (p,ch,meta83143){
this.p = p;
this.ch = ch;
this.meta83143 = meta83143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83144,meta83143__$1){
var self__ = this;
var _83144__$1 = this;
return (new cljs.core.async.t_cljs$core$async83142(self__.p,self__.ch,meta83143__$1));
}));

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83144){
var self__ = this;
var _83144__$1 = this;
return self__.meta83143;
}));

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async83142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async83142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta83143","meta83143",1414908076,null)], null);
}));

(cljs.core.async.t_cljs$core$async83142.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async83142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async83142");

(cljs.core.async.t_cljs$core$async83142.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async83142");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async83142.
 */
cljs.core.async.__GT_t_cljs$core$async83142 = (function cljs$core$async$__GT_t_cljs$core$async83142(p,ch,meta83143){
return (new cljs.core.async.t_cljs$core$async83142(p,ch,meta83143));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async83142(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__83148 = arguments.length;
switch (G__83148) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33448__auto___84640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83178){
var state_val_83179 = (state_83178[(1)]);
if((state_val_83179 === (7))){
var inst_83174 = (state_83178[(2)]);
var state_83178__$1 = state_83178;
var statearr_83188_84642 = state_83178__$1;
(statearr_83188_84642[(2)] = inst_83174);

(statearr_83188_84642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (1))){
var state_83178__$1 = state_83178;
var statearr_83190_84643 = state_83178__$1;
(statearr_83190_84643[(2)] = null);

(statearr_83190_84643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (4))){
var inst_83156 = (state_83178[(7)]);
var inst_83156__$1 = (state_83178[(2)]);
var inst_83157 = (inst_83156__$1 == null);
var state_83178__$1 = (function (){var statearr_83197 = state_83178;
(statearr_83197[(7)] = inst_83156__$1);

return statearr_83197;
})();
if(cljs.core.truth_(inst_83157)){
var statearr_83202_84645 = state_83178__$1;
(statearr_83202_84645[(1)] = (5));

} else {
var statearr_83203_84647 = state_83178__$1;
(statearr_83203_84647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (6))){
var inst_83156 = (state_83178[(7)]);
var inst_83165 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_83156) : p.call(null, inst_83156));
var state_83178__$1 = state_83178;
if(cljs.core.truth_(inst_83165)){
var statearr_83205_84649 = state_83178__$1;
(statearr_83205_84649[(1)] = (8));

} else {
var statearr_83206_84652 = state_83178__$1;
(statearr_83206_84652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (3))){
var inst_83176 = (state_83178[(2)]);
var state_83178__$1 = state_83178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83178__$1,inst_83176);
} else {
if((state_val_83179 === (2))){
var state_83178__$1 = state_83178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83178__$1,(4),ch);
} else {
if((state_val_83179 === (11))){
var inst_83168 = (state_83178[(2)]);
var state_83178__$1 = state_83178;
var statearr_83214_84653 = state_83178__$1;
(statearr_83214_84653[(2)] = inst_83168);

(statearr_83214_84653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (9))){
var state_83178__$1 = state_83178;
var statearr_83218_84656 = state_83178__$1;
(statearr_83218_84656[(2)] = null);

(statearr_83218_84656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (5))){
var inst_83159 = cljs.core.async.close_BANG_(out);
var state_83178__$1 = state_83178;
var statearr_83219_84657 = state_83178__$1;
(statearr_83219_84657[(2)] = inst_83159);

(statearr_83219_84657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (10))){
var inst_83171 = (state_83178[(2)]);
var state_83178__$1 = (function (){var statearr_83221 = state_83178;
(statearr_83221[(8)] = inst_83171);

return statearr_83221;
})();
var statearr_83225_84658 = state_83178__$1;
(statearr_83225_84658[(2)] = null);

(statearr_83225_84658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83179 === (8))){
var inst_83156 = (state_83178[(7)]);
var state_83178__$1 = state_83178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83178__$1,(11),out,inst_83156);
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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_83232 = [null,null,null,null,null,null,null,null,null];
(statearr_83232[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_83232[(1)] = (1));

return statearr_83232;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_83178){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83178);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83233){var ex__33327__auto__ = e83233;
var statearr_83234_84666 = state_83178;
(statearr_83234_84666[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83178[(4)]))){
var statearr_83235_84667 = state_83178;
(statearr_83235_84667[(1)] = cljs.core.first((state_83178[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84668 = state_83178;
state_83178 = G__84668;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_83178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_83178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83240 = f__33449__auto__();
(statearr_83240[(6)] = c__33448__auto___84640);

return statearr_83240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__83250 = arguments.length;
switch (G__83250) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83353){
var state_val_83357 = (state_83353[(1)]);
if((state_val_83357 === (7))){
var inst_83346 = (state_83353[(2)]);
var state_83353__$1 = state_83353;
var statearr_83367_84679 = state_83353__$1;
(statearr_83367_84679[(2)] = inst_83346);

(statearr_83367_84679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (20))){
var inst_83310 = (state_83353[(7)]);
var inst_83326 = (state_83353[(2)]);
var inst_83328 = cljs.core.next(inst_83310);
var inst_83285 = inst_83328;
var inst_83286 = null;
var inst_83287 = (0);
var inst_83292 = (0);
var state_83353__$1 = (function (){var statearr_83374 = state_83353;
(statearr_83374[(8)] = inst_83287);

(statearr_83374[(9)] = inst_83292);

(statearr_83374[(10)] = inst_83326);

(statearr_83374[(11)] = inst_83285);

(statearr_83374[(12)] = inst_83286);

return statearr_83374;
})();
var statearr_83376_84692 = state_83353__$1;
(statearr_83376_84692[(2)] = null);

(statearr_83376_84692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (1))){
var state_83353__$1 = state_83353;
var statearr_83378_84693 = state_83353__$1;
(statearr_83378_84693[(2)] = null);

(statearr_83378_84693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (4))){
var inst_83274 = (state_83353[(13)]);
var inst_83274__$1 = (state_83353[(2)]);
var inst_83275 = (inst_83274__$1 == null);
var state_83353__$1 = (function (){var statearr_83383 = state_83353;
(statearr_83383[(13)] = inst_83274__$1);

return statearr_83383;
})();
if(cljs.core.truth_(inst_83275)){
var statearr_83387_84696 = state_83353__$1;
(statearr_83387_84696[(1)] = (5));

} else {
var statearr_83388_84699 = state_83353__$1;
(statearr_83388_84699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (15))){
var state_83353__$1 = state_83353;
var statearr_83395_84700 = state_83353__$1;
(statearr_83395_84700[(2)] = null);

(statearr_83395_84700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (21))){
var state_83353__$1 = state_83353;
var statearr_83399_84701 = state_83353__$1;
(statearr_83399_84701[(2)] = null);

(statearr_83399_84701[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (13))){
var inst_83287 = (state_83353[(8)]);
var inst_83292 = (state_83353[(9)]);
var inst_83285 = (state_83353[(11)]);
var inst_83286 = (state_83353[(12)]);
var inst_83303 = (state_83353[(2)]);
var inst_83307 = (inst_83292 + (1));
var tmp83389 = inst_83287;
var tmp83390 = inst_83285;
var tmp83391 = inst_83286;
var inst_83285__$1 = tmp83390;
var inst_83286__$1 = tmp83391;
var inst_83287__$1 = tmp83389;
var inst_83292__$1 = inst_83307;
var state_83353__$1 = (function (){var statearr_83414 = state_83353;
(statearr_83414[(8)] = inst_83287__$1);

(statearr_83414[(9)] = inst_83292__$1);

(statearr_83414[(11)] = inst_83285__$1);

(statearr_83414[(12)] = inst_83286__$1);

(statearr_83414[(14)] = inst_83303);

return statearr_83414;
})();
var statearr_83415_84712 = state_83353__$1;
(statearr_83415_84712[(2)] = null);

(statearr_83415_84712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (22))){
var state_83353__$1 = state_83353;
var statearr_83420_84715 = state_83353__$1;
(statearr_83420_84715[(2)] = null);

(statearr_83420_84715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (6))){
var inst_83274 = (state_83353[(13)]);
var inst_83283 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_83274) : f.call(null, inst_83274));
var inst_83284 = cljs.core.seq(inst_83283);
var inst_83285 = inst_83284;
var inst_83286 = null;
var inst_83287 = (0);
var inst_83292 = (0);
var state_83353__$1 = (function (){var statearr_83427 = state_83353;
(statearr_83427[(8)] = inst_83287);

(statearr_83427[(9)] = inst_83292);

(statearr_83427[(11)] = inst_83285);

(statearr_83427[(12)] = inst_83286);

return statearr_83427;
})();
var statearr_83428_84725 = state_83353__$1;
(statearr_83428_84725[(2)] = null);

(statearr_83428_84725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (17))){
var inst_83310 = (state_83353[(7)]);
var inst_83315 = cljs.core.chunk_first(inst_83310);
var inst_83320 = cljs.core.chunk_rest(inst_83310);
var inst_83321 = cljs.core.count(inst_83315);
var inst_83285 = inst_83320;
var inst_83286 = inst_83315;
var inst_83287 = inst_83321;
var inst_83292 = (0);
var state_83353__$1 = (function (){var statearr_83433 = state_83353;
(statearr_83433[(8)] = inst_83287);

(statearr_83433[(9)] = inst_83292);

(statearr_83433[(11)] = inst_83285);

(statearr_83433[(12)] = inst_83286);

return statearr_83433;
})();
var statearr_83434_84731 = state_83353__$1;
(statearr_83434_84731[(2)] = null);

(statearr_83434_84731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (3))){
var inst_83348 = (state_83353[(2)]);
var state_83353__$1 = state_83353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83353__$1,inst_83348);
} else {
if((state_val_83357 === (12))){
var inst_83336 = (state_83353[(2)]);
var state_83353__$1 = state_83353;
var statearr_83439_84743 = state_83353__$1;
(statearr_83439_84743[(2)] = inst_83336);

(statearr_83439_84743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (2))){
var state_83353__$1 = state_83353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83353__$1,(4),in$);
} else {
if((state_val_83357 === (23))){
var inst_83344 = (state_83353[(2)]);
var state_83353__$1 = state_83353;
var statearr_83445_84750 = state_83353__$1;
(statearr_83445_84750[(2)] = inst_83344);

(statearr_83445_84750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (19))){
var inst_83331 = (state_83353[(2)]);
var state_83353__$1 = state_83353;
var statearr_83446_84751 = state_83353__$1;
(statearr_83446_84751[(2)] = inst_83331);

(statearr_83446_84751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (11))){
var inst_83310 = (state_83353[(7)]);
var inst_83285 = (state_83353[(11)]);
var inst_83310__$1 = cljs.core.seq(inst_83285);
var state_83353__$1 = (function (){var statearr_83449 = state_83353;
(statearr_83449[(7)] = inst_83310__$1);

return statearr_83449;
})();
if(inst_83310__$1){
var statearr_83461_84753 = state_83353__$1;
(statearr_83461_84753[(1)] = (14));

} else {
var statearr_83462_84754 = state_83353__$1;
(statearr_83462_84754[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (9))){
var inst_83338 = (state_83353[(2)]);
var inst_83339 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_83353__$1 = (function (){var statearr_83464 = state_83353;
(statearr_83464[(15)] = inst_83338);

return statearr_83464;
})();
if(cljs.core.truth_(inst_83339)){
var statearr_83465_84755 = state_83353__$1;
(statearr_83465_84755[(1)] = (21));

} else {
var statearr_83466_84756 = state_83353__$1;
(statearr_83466_84756[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (5))){
var inst_83277 = cljs.core.async.close_BANG_(out);
var state_83353__$1 = state_83353;
var statearr_83467_84757 = state_83353__$1;
(statearr_83467_84757[(2)] = inst_83277);

(statearr_83467_84757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (14))){
var inst_83310 = (state_83353[(7)]);
var inst_83313 = cljs.core.chunked_seq_QMARK_(inst_83310);
var state_83353__$1 = state_83353;
if(inst_83313){
var statearr_83468_84758 = state_83353__$1;
(statearr_83468_84758[(1)] = (17));

} else {
var statearr_83472_84759 = state_83353__$1;
(statearr_83472_84759[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (16))){
var inst_83334 = (state_83353[(2)]);
var state_83353__$1 = state_83353;
var statearr_83476_84760 = state_83353__$1;
(statearr_83476_84760[(2)] = inst_83334);

(statearr_83476_84760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83357 === (10))){
var inst_83292 = (state_83353[(9)]);
var inst_83286 = (state_83353[(12)]);
var inst_83301 = cljs.core._nth(inst_83286,inst_83292);
var state_83353__$1 = state_83353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83353__$1,(13),out,inst_83301);
} else {
if((state_val_83357 === (18))){
var inst_83310 = (state_83353[(7)]);
var inst_83324 = cljs.core.first(inst_83310);
var state_83353__$1 = state_83353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83353__$1,(20),out,inst_83324);
} else {
if((state_val_83357 === (8))){
var inst_83287 = (state_83353[(8)]);
var inst_83292 = (state_83353[(9)]);
var inst_83294 = (inst_83292 < inst_83287);
var inst_83295 = inst_83294;
var state_83353__$1 = state_83353;
if(cljs.core.truth_(inst_83295)){
var statearr_83477_84766 = state_83353__$1;
(statearr_83477_84766[(1)] = (10));

} else {
var statearr_83478_84767 = state_83353__$1;
(statearr_83478_84767[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33324__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33324__auto____0 = (function (){
var statearr_83479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83479[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33324__auto__);

(statearr_83479[(1)] = (1));

return statearr_83479;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33324__auto____1 = (function (state_83353){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83353);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83480){var ex__33327__auto__ = e83480;
var statearr_83481_84769 = state_83353;
(statearr_83481_84769[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83353[(4)]))){
var statearr_83482_84772 = state_83353;
(statearr_83482_84772[(1)] = cljs.core.first((state_83353[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84773 = state_83353;
state_83353 = G__84773;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33324__auto__ = function(state_83353){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33324__auto____1.call(this,state_83353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33324__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33324__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83483 = f__33449__auto__();
(statearr_83483[(6)] = c__33448__auto__);

return statearr_83483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__83485 = arguments.length;
switch (G__83485) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__83487 = arguments.length;
switch (G__83487) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__83489 = arguments.length;
switch (G__83489) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33448__auto___84777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83513){
var state_val_83514 = (state_83513[(1)]);
if((state_val_83514 === (7))){
var inst_83508 = (state_83513[(2)]);
var state_83513__$1 = state_83513;
var statearr_83515_84778 = state_83513__$1;
(statearr_83515_84778[(2)] = inst_83508);

(statearr_83515_84778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (1))){
var inst_83490 = null;
var state_83513__$1 = (function (){var statearr_83516 = state_83513;
(statearr_83516[(7)] = inst_83490);

return statearr_83516;
})();
var statearr_83517_84779 = state_83513__$1;
(statearr_83517_84779[(2)] = null);

(statearr_83517_84779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (4))){
var inst_83493 = (state_83513[(8)]);
var inst_83493__$1 = (state_83513[(2)]);
var inst_83494 = (inst_83493__$1 == null);
var inst_83495 = cljs.core.not(inst_83494);
var state_83513__$1 = (function (){var statearr_83518 = state_83513;
(statearr_83518[(8)] = inst_83493__$1);

return statearr_83518;
})();
if(inst_83495){
var statearr_83519_84784 = state_83513__$1;
(statearr_83519_84784[(1)] = (5));

} else {
var statearr_83520_84785 = state_83513__$1;
(statearr_83520_84785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (6))){
var state_83513__$1 = state_83513;
var statearr_83521_84786 = state_83513__$1;
(statearr_83521_84786[(2)] = null);

(statearr_83521_84786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (3))){
var inst_83510 = (state_83513[(2)]);
var inst_83511 = cljs.core.async.close_BANG_(out);
var state_83513__$1 = (function (){var statearr_83522 = state_83513;
(statearr_83522[(9)] = inst_83510);

return statearr_83522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_83513__$1,inst_83511);
} else {
if((state_val_83514 === (2))){
var state_83513__$1 = state_83513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83513__$1,(4),ch);
} else {
if((state_val_83514 === (11))){
var inst_83493 = (state_83513[(8)]);
var inst_83502 = (state_83513[(2)]);
var inst_83490 = inst_83493;
var state_83513__$1 = (function (){var statearr_83523 = state_83513;
(statearr_83523[(10)] = inst_83502);

(statearr_83523[(7)] = inst_83490);

return statearr_83523;
})();
var statearr_83524_84792 = state_83513__$1;
(statearr_83524_84792[(2)] = null);

(statearr_83524_84792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (9))){
var inst_83493 = (state_83513[(8)]);
var state_83513__$1 = state_83513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83513__$1,(11),out,inst_83493);
} else {
if((state_val_83514 === (5))){
var inst_83493 = (state_83513[(8)]);
var inst_83490 = (state_83513[(7)]);
var inst_83497 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83493,inst_83490);
var state_83513__$1 = state_83513;
if(inst_83497){
var statearr_83536_84799 = state_83513__$1;
(statearr_83536_84799[(1)] = (8));

} else {
var statearr_83537_84800 = state_83513__$1;
(statearr_83537_84800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (10))){
var inst_83505 = (state_83513[(2)]);
var state_83513__$1 = state_83513;
var statearr_83538_84801 = state_83513__$1;
(statearr_83538_84801[(2)] = inst_83505);

(statearr_83538_84801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83514 === (8))){
var inst_83490 = (state_83513[(7)]);
var tmp83535 = inst_83490;
var inst_83490__$1 = tmp83535;
var state_83513__$1 = (function (){var statearr_83549 = state_83513;
(statearr_83549[(7)] = inst_83490__$1);

return statearr_83549;
})();
var statearr_83550_84803 = state_83513__$1;
(statearr_83550_84803[(2)] = null);

(statearr_83550_84803[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_83561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_83561[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_83561[(1)] = (1));

return statearr_83561;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_83513){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83513);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83572){var ex__33327__auto__ = e83572;
var statearr_83573_84804 = state_83513;
(statearr_83573_84804[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83513[(4)]))){
var statearr_83574_84805 = state_83513;
(statearr_83574_84805[(1)] = cljs.core.first((state_83513[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84806 = state_83513;
state_83513 = G__84806;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_83513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_83513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83585 = f__33449__auto__();
(statearr_83585[(6)] = c__33448__auto___84777);

return statearr_83585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__83607 = arguments.length;
switch (G__83607) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33448__auto___84815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83685){
var state_val_83686 = (state_83685[(1)]);
if((state_val_83686 === (7))){
var inst_83681 = (state_83685[(2)]);
var state_83685__$1 = state_83685;
var statearr_83707_84816 = state_83685__$1;
(statearr_83707_84816[(2)] = inst_83681);

(statearr_83707_84816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (1))){
var inst_83628 = (new Array(n));
var inst_83629 = inst_83628;
var inst_83630 = (0);
var state_83685__$1 = (function (){var statearr_83718 = state_83685;
(statearr_83718[(7)] = inst_83629);

(statearr_83718[(8)] = inst_83630);

return statearr_83718;
})();
var statearr_83719_84817 = state_83685__$1;
(statearr_83719_84817[(2)] = null);

(statearr_83719_84817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (4))){
var inst_83643 = (state_83685[(9)]);
var inst_83643__$1 = (state_83685[(2)]);
var inst_83644 = (inst_83643__$1 == null);
var inst_83645 = cljs.core.not(inst_83644);
var state_83685__$1 = (function (){var statearr_83730 = state_83685;
(statearr_83730[(9)] = inst_83643__$1);

return statearr_83730;
})();
if(inst_83645){
var statearr_83731_84818 = state_83685__$1;
(statearr_83731_84818[(1)] = (5));

} else {
var statearr_83732_84819 = state_83685__$1;
(statearr_83732_84819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (15))){
var inst_83675 = (state_83685[(2)]);
var state_83685__$1 = state_83685;
var statearr_83733_84820 = state_83685__$1;
(statearr_83733_84820[(2)] = inst_83675);

(statearr_83733_84820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (13))){
var state_83685__$1 = state_83685;
var statearr_83734_84821 = state_83685__$1;
(statearr_83734_84821[(2)] = null);

(statearr_83734_84821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (6))){
var inst_83630 = (state_83685[(8)]);
var inst_83671 = (inst_83630 > (0));
var state_83685__$1 = state_83685;
if(cljs.core.truth_(inst_83671)){
var statearr_83735_84822 = state_83685__$1;
(statearr_83735_84822[(1)] = (12));

} else {
var statearr_83736_84823 = state_83685__$1;
(statearr_83736_84823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (3))){
var inst_83683 = (state_83685[(2)]);
var state_83685__$1 = state_83685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83685__$1,inst_83683);
} else {
if((state_val_83686 === (12))){
var inst_83629 = (state_83685[(7)]);
var inst_83673 = cljs.core.vec(inst_83629);
var state_83685__$1 = state_83685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83685__$1,(15),out,inst_83673);
} else {
if((state_val_83686 === (2))){
var state_83685__$1 = state_83685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83685__$1,(4),ch);
} else {
if((state_val_83686 === (11))){
var inst_83655 = (state_83685[(2)]);
var inst_83656 = (new Array(n));
var inst_83629 = inst_83656;
var inst_83630 = (0);
var state_83685__$1 = (function (){var statearr_83757 = state_83685;
(statearr_83757[(10)] = inst_83655);

(statearr_83757[(7)] = inst_83629);

(statearr_83757[(8)] = inst_83630);

return statearr_83757;
})();
var statearr_83768_84828 = state_83685__$1;
(statearr_83768_84828[(2)] = null);

(statearr_83768_84828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (9))){
var inst_83629 = (state_83685[(7)]);
var inst_83653 = cljs.core.vec(inst_83629);
var state_83685__$1 = state_83685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83685__$1,(11),out,inst_83653);
} else {
if((state_val_83686 === (5))){
var inst_83648 = (state_83685[(11)]);
var inst_83629 = (state_83685[(7)]);
var inst_83643 = (state_83685[(9)]);
var inst_83630 = (state_83685[(8)]);
var inst_83647 = (inst_83629[inst_83630] = inst_83643);
var inst_83648__$1 = (inst_83630 + (1));
var inst_83649 = (inst_83648__$1 < n);
var state_83685__$1 = (function (){var statearr_83769 = state_83685;
(statearr_83769[(12)] = inst_83647);

(statearr_83769[(11)] = inst_83648__$1);

return statearr_83769;
})();
if(cljs.core.truth_(inst_83649)){
var statearr_83770_84829 = state_83685__$1;
(statearr_83770_84829[(1)] = (8));

} else {
var statearr_83771_84830 = state_83685__$1;
(statearr_83771_84830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (14))){
var inst_83678 = (state_83685[(2)]);
var inst_83679 = cljs.core.async.close_BANG_(out);
var state_83685__$1 = (function (){var statearr_83783 = state_83685;
(statearr_83783[(13)] = inst_83678);

return statearr_83783;
})();
var statearr_83784_84832 = state_83685__$1;
(statearr_83784_84832[(2)] = inst_83679);

(statearr_83784_84832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (10))){
var inst_83659 = (state_83685[(2)]);
var state_83685__$1 = state_83685;
var statearr_83795_84833 = state_83685__$1;
(statearr_83795_84833[(2)] = inst_83659);

(statearr_83795_84833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83686 === (8))){
var inst_83648 = (state_83685[(11)]);
var inst_83629 = (state_83685[(7)]);
var tmp83782 = inst_83629;
var inst_83629__$1 = tmp83782;
var inst_83630 = inst_83648;
var state_83685__$1 = (function (){var statearr_83806 = state_83685;
(statearr_83806[(7)] = inst_83629__$1);

(statearr_83806[(8)] = inst_83630);

return statearr_83806;
})();
var statearr_83807_84835 = state_83685__$1;
(statearr_83807_84835[(2)] = null);

(statearr_83807_84835[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_83818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83818[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_83818[(1)] = (1));

return statearr_83818;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_83685){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83685);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83819){var ex__33327__auto__ = e83819;
var statearr_83820_84836 = state_83685;
(statearr_83820_84836[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83685[(4)]))){
var statearr_83821_84837 = state_83685;
(statearr_83821_84837[(1)] = cljs.core.first((state_83685[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84838 = state_83685;
state_83685 = G__84838;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_83685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_83685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83822 = f__33449__auto__();
(statearr_83822[(6)] = c__33448__auto___84815);

return statearr_83822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__83844 = arguments.length;
switch (G__83844) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33448__auto___84841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_83894){
var state_val_83896 = (state_83894[(1)]);
if((state_val_83896 === (7))){
var inst_83890 = (state_83894[(2)]);
var state_83894__$1 = state_83894;
var statearr_83899_84847 = state_83894__$1;
(statearr_83899_84847[(2)] = inst_83890);

(statearr_83899_84847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (1))){
var inst_83848 = [];
var inst_83849 = inst_83848;
var inst_83850 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_83894__$1 = (function (){var statearr_83902 = state_83894;
(statearr_83902[(7)] = inst_83850);

(statearr_83902[(8)] = inst_83849);

return statearr_83902;
})();
var statearr_83903_84848 = state_83894__$1;
(statearr_83903_84848[(2)] = null);

(statearr_83903_84848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (4))){
var inst_83853 = (state_83894[(9)]);
var inst_83853__$1 = (state_83894[(2)]);
var inst_83854 = (inst_83853__$1 == null);
var inst_83855 = cljs.core.not(inst_83854);
var state_83894__$1 = (function (){var statearr_83906 = state_83894;
(statearr_83906[(9)] = inst_83853__$1);

return statearr_83906;
})();
if(inst_83855){
var statearr_83907_84850 = state_83894__$1;
(statearr_83907_84850[(1)] = (5));

} else {
var statearr_83908_84851 = state_83894__$1;
(statearr_83908_84851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (15))){
var inst_83849 = (state_83894[(8)]);
var inst_83882 = cljs.core.vec(inst_83849);
var state_83894__$1 = state_83894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83894__$1,(18),out,inst_83882);
} else {
if((state_val_83896 === (13))){
var inst_83877 = (state_83894[(2)]);
var state_83894__$1 = state_83894;
var statearr_83915_84852 = state_83894__$1;
(statearr_83915_84852[(2)] = inst_83877);

(statearr_83915_84852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (6))){
var inst_83849 = (state_83894[(8)]);
var inst_83879 = inst_83849.length;
var inst_83880 = (inst_83879 > (0));
var state_83894__$1 = state_83894;
if(cljs.core.truth_(inst_83880)){
var statearr_83916_84854 = state_83894__$1;
(statearr_83916_84854[(1)] = (15));

} else {
var statearr_83917_84855 = state_83894__$1;
(statearr_83917_84855[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (17))){
var inst_83887 = (state_83894[(2)]);
var inst_83888 = cljs.core.async.close_BANG_(out);
var state_83894__$1 = (function (){var statearr_83919 = state_83894;
(statearr_83919[(10)] = inst_83887);

return statearr_83919;
})();
var statearr_83920_84856 = state_83894__$1;
(statearr_83920_84856[(2)] = inst_83888);

(statearr_83920_84856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (3))){
var inst_83892 = (state_83894[(2)]);
var state_83894__$1 = state_83894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83894__$1,inst_83892);
} else {
if((state_val_83896 === (12))){
var inst_83849 = (state_83894[(8)]);
var inst_83870 = cljs.core.vec(inst_83849);
var state_83894__$1 = state_83894;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83894__$1,(14),out,inst_83870);
} else {
if((state_val_83896 === (2))){
var state_83894__$1 = state_83894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83894__$1,(4),ch);
} else {
if((state_val_83896 === (11))){
var inst_83857 = (state_83894[(11)]);
var inst_83849 = (state_83894[(8)]);
var inst_83853 = (state_83894[(9)]);
var inst_83867 = inst_83849.push(inst_83853);
var tmp83922 = inst_83849;
var inst_83849__$1 = tmp83922;
var inst_83850 = inst_83857;
var state_83894__$1 = (function (){var statearr_83929 = state_83894;
(statearr_83929[(12)] = inst_83867);

(statearr_83929[(7)] = inst_83850);

(statearr_83929[(8)] = inst_83849__$1);

return statearr_83929;
})();
var statearr_83932_84860 = state_83894__$1;
(statearr_83932_84860[(2)] = null);

(statearr_83932_84860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (9))){
var inst_83850 = (state_83894[(7)]);
var inst_83863 = cljs.core.keyword_identical_QMARK_(inst_83850,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_83894__$1 = state_83894;
var statearr_83933_84861 = state_83894__$1;
(statearr_83933_84861[(2)] = inst_83863);

(statearr_83933_84861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (5))){
var inst_83857 = (state_83894[(11)]);
var inst_83850 = (state_83894[(7)]);
var inst_83853 = (state_83894[(9)]);
var inst_83860 = (state_83894[(13)]);
var inst_83857__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_83853) : f.call(null, inst_83853));
var inst_83860__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83857__$1,inst_83850);
var state_83894__$1 = (function (){var statearr_83936 = state_83894;
(statearr_83936[(11)] = inst_83857__$1);

(statearr_83936[(13)] = inst_83860__$1);

return statearr_83936;
})();
if(inst_83860__$1){
var statearr_83937_84866 = state_83894__$1;
(statearr_83937_84866[(1)] = (8));

} else {
var statearr_83938_84867 = state_83894__$1;
(statearr_83938_84867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (14))){
var inst_83857 = (state_83894[(11)]);
var inst_83853 = (state_83894[(9)]);
var inst_83872 = (state_83894[(2)]);
var inst_83873 = [];
var inst_83874 = inst_83873.push(inst_83853);
var inst_83849 = inst_83873;
var inst_83850 = inst_83857;
var state_83894__$1 = (function (){var statearr_83947 = state_83894;
(statearr_83947[(14)] = inst_83872);

(statearr_83947[(7)] = inst_83850);

(statearr_83947[(8)] = inst_83849);

(statearr_83947[(15)] = inst_83874);

return statearr_83947;
})();
var statearr_83948_84872 = state_83894__$1;
(statearr_83948_84872[(2)] = null);

(statearr_83948_84872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (16))){
var state_83894__$1 = state_83894;
var statearr_83949_84875 = state_83894__$1;
(statearr_83949_84875[(2)] = null);

(statearr_83949_84875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (10))){
var inst_83865 = (state_83894[(2)]);
var state_83894__$1 = state_83894;
if(cljs.core.truth_(inst_83865)){
var statearr_83952_84877 = state_83894__$1;
(statearr_83952_84877[(1)] = (11));

} else {
var statearr_83953_84878 = state_83894__$1;
(statearr_83953_84878[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (18))){
var inst_83884 = (state_83894[(2)]);
var state_83894__$1 = state_83894;
var statearr_83954_84879 = state_83894__$1;
(statearr_83954_84879[(2)] = inst_83884);

(statearr_83954_84879[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83896 === (8))){
var inst_83860 = (state_83894[(13)]);
var state_83894__$1 = state_83894;
var statearr_83958_84883 = state_83894__$1;
(statearr_83958_84883[(2)] = inst_83860);

(statearr_83958_84883[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__33324__auto__ = null;
var cljs$core$async$state_machine__33324__auto____0 = (function (){
var statearr_83960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83960[(0)] = cljs$core$async$state_machine__33324__auto__);

(statearr_83960[(1)] = (1));

return statearr_83960;
});
var cljs$core$async$state_machine__33324__auto____1 = (function (state_83894){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_83894);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e83963){var ex__33327__auto__ = e83963;
var statearr_83964_84885 = state_83894;
(statearr_83964_84885[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_83894[(4)]))){
var statearr_83965_84886 = state_83894;
(statearr_83965_84886[(1)] = cljs.core.first((state_83894[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84888 = state_83894;
state_83894 = G__84888;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
cljs$core$async$state_machine__33324__auto__ = function(state_83894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33324__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33324__auto____1.call(this,state_83894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33324__auto____0;
cljs$core$async$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33324__auto____1;
return cljs$core$async$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_83968 = f__33449__auto__();
(statearr_83968[(6)] = c__33448__auto___84841);

return statearr_83968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
