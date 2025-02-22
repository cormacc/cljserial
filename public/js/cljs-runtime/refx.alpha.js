goog.provide('refx.alpha');
refx.alpha.dispatch = (function refx$alpha$dispatch(event){
return refx.dispatch.dispatch(event);
});
refx.alpha.dispatch_sync = (function refx$alpha$dispatch_sync(event){
return refx.dispatch.dispatch_sync(event);
});
refx.alpha.base_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [refx.cofx.inject_db,refx.effects.do_fx,refx.interceptors.inject_global_interceptors], null);
refx.alpha._reg_event = (function refx$alpha$_reg_event(id,interceptors,handler_interceptor){
return refx.events.register(id,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(refx.alpha.base_interceptors,interceptors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([handler_interceptor], 0)));
});
refx.alpha.reg_event_db = (function refx$alpha$reg_event_db(var_args){
var G__87197 = arguments.length;
switch (G__87197) {
case 2:
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.db_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_db.cljs$lang$maxFixedArity = 3);

refx.alpha.reg_event_fx = (function refx$alpha$reg_event_fx(var_args){
var G__87226 = arguments.length;
switch (G__87226) {
case 2:
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.fx_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_fx.cljs$lang$maxFixedArity = 3);

refx.alpha.reg_event_ctx = (function refx$alpha$reg_event_ctx(var_args){
var G__87240 = arguments.length;
switch (G__87240) {
case 2:
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(refx.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return refx.alpha._reg_event(id,interceptors,refx.events.ctx_handler__GT_interceptor(handler));
}));

(refx.alpha.reg_event_ctx.cljs$lang$maxFixedArity = 3);

refx.alpha.clear_event = (function refx$alpha$clear_event(var_args){
var G__87253 = arguments.length;
switch (G__87253) {
case 0:
return refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.events.kind);
}));

(refx.alpha.clear_event.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.events.kind,id);
}));

(refx.alpha.clear_event.cljs$lang$maxFixedArity = 1);

/**
 * Return a subscription signal to be used as an input in `reg-sub`.
 */
refx.alpha.sub = (function refx$alpha$sub(query_v){
return refx.subs.sub(query_v);
});
/**
 * Like re-frame's `:<-` sugar, returns an `input-fn` for `reg-sub` that
 * subscribes to one or more query vectors.
 */
refx.alpha._LT__ = (function refx$alpha$_LT__(var_args){
var G__87277 = arguments.length;
switch (G__87277) {
case 1:
return refx.alpha._LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___87537 = arguments.length;
var i__5727__auto___87539 = (0);
while(true){
if((i__5727__auto___87539 < len__5726__auto___87537)){
args_arr__5751__auto__.push((arguments[i__5727__auto___87539]));

var G__87540 = (i__5727__auto___87539 + (1));
i__5727__auto___87539 = G__87540;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return refx.alpha._LT__.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(refx.alpha._LT__.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return (function (_){
return refx.subs.sub(query_v);
});
}));

(refx.alpha._LT__.cljs$core$IFn$_invoke$arity$variadic = (function (query_v,qs){
var qs__$1 = cljs.core.cons(query_v,qs);
return (function (_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(refx.subs.sub,qs__$1);
});
}));

/** @this {Function} */
(refx.alpha._LT__.cljs$lang$applyTo = (function (seq87275){
var G__87276 = cljs.core.first(seq87275);
var seq87275__$1 = cljs.core.next(seq87275);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87276,seq87275__$1);
}));

(refx.alpha._LT__.cljs$lang$maxFixedArity = (1));

refx.alpha.parse_reg_sub_sugar = (function refx$alpha$parse_reg_sub_sugar(args){
var vec__87301 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__87305,p__87306){
var vec__87307 = p__87305;
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87307,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87307,(1),null);
var vec__87310 = p__87306;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87310,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87310,(1),null);
var G__87320 = op;
var G__87320__$1 = (((G__87320 instanceof cljs.core.Keyword))?G__87320.fqn:null);
switch (G__87320__$1) {
case "<-":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(qs,arg),f], null);

break;
case "->":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,(function (v){
return (arg.cljs$core$IFn$_invoke$arity$1 ? arg.cljs$core$IFn$_invoke$arity$1(v) : arg.call(null, v));
})], null);

break;
case "=>":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,(function (v,p__87326){
var vec__87328 = p__87326;
var seq__87330 = cljs.core.seq(vec__87328);
var first__87331 = cljs.core.first(seq__87330);
var seq__87330__$1 = cljs.core.next(seq__87330);
var _ = first__87331;
var vs = seq__87330__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(arg,v,vs);
})], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qs,op], null);

}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),args));
var qs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87301,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87301,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(qs))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(refx.alpha._LT__,qs):cljs.core.constantly(refx.db.app_db)),f], null);
});
refx.alpha.reg_sub = (function refx$alpha$reg_sub(var_args){
var G__87347 = arguments.length;
switch (G__87347) {
case 2:
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___87555 = arguments.length;
var i__5727__auto___87557 = (0);
while(true){
if((i__5727__auto___87557 < len__5726__auto___87555)){
args_arr__5751__auto__.push((arguments[i__5727__auto___87557]));

var G__87559 = (i__5727__auto___87557 + (1));
i__5727__auto___87557 = G__87559;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((4) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((4)),(0),null)):null);
return refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5752__auto__);

}
});

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$2 = (function (query_id,compute_fn){
return refx.subs.register(query_id,cljs.core.constantly(refx.db.app_db),compute_fn);
}));

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$3 = (function (query_id,input_fn,compute_fn){
if((input_fn instanceof cljs.core.Keyword)){
var vec__87357 = refx.alpha.parse_reg_sub_sugar(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_fn,compute_fn], null));
var input_fn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87357,(0),null);
var compute_fn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87357,(1),null);
return refx.subs.register(query_id,input_fn__$1,compute_fn__$1);
} else {
return refx.subs.register(query_id,input_fn,compute_fn);
}
}));

(refx.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,x,y,z,args){
var vec__87362 = refx.alpha.parse_reg_sub_sugar(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(x,y,z,args));
var input_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87362,(0),null);
var compute_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87362,(1),null);
return refx.subs.register(query_id,input_fn,compute_fn);
}));

/** @this {Function} */
(refx.alpha.reg_sub.cljs$lang$applyTo = (function (seq87340){
var G__87341 = cljs.core.first(seq87340);
var seq87340__$1 = cljs.core.next(seq87340);
var G__87342 = cljs.core.first(seq87340__$1);
var seq87340__$2 = cljs.core.next(seq87340__$1);
var G__87343 = cljs.core.first(seq87340__$2);
var seq87340__$3 = cljs.core.next(seq87340__$2);
var G__87344 = cljs.core.first(seq87340__$3);
var seq87340__$4 = cljs.core.next(seq87340__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87341,G__87342,G__87343,G__87344,seq87340__$4);
}));

(refx.alpha.reg_sub.cljs$lang$maxFixedArity = (4));

refx.alpha.use_sub = (function refx$alpha$use_sub(query_v){
return refx.hooks.use_sub(query_v);
});
refx.alpha.clear_sub = (function refx$alpha$clear_sub(var_args){
var G__87376 = arguments.length;
switch (G__87376) {
case 0:
return refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.subs.kind);
}));

(refx.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.subs.kind,id);
}));

(refx.alpha.clear_sub.cljs$lang$maxFixedArity = 1);

refx.alpha.clear_subscription_cache_BANG_ = (function refx$alpha$clear_subscription_cache_BANG_(){
return refx.subs.clear_subscription_cache_BANG_();
});
refx.alpha.reg_fx = (function refx$alpha$reg_fx(id,handler){
return refx.effects.register(id,handler);
});
refx.alpha.clear_fx = (function refx$alpha$clear_fx(var_args){
var G__87404 = arguments.length;
switch (G__87404) {
case 0:
return refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.effects.kind);
}));

(refx.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.effects.kind,id);
}));

(refx.alpha.clear_fx.cljs$lang$maxFixedArity = 1);

refx.alpha.reg_cofx = (function refx$alpha$reg_cofx(id,handler){
return refx.cofx.register(id,handler);
});
refx.alpha.clear_cofx = (function refx$alpha$clear_cofx(var_args){
var G__87425 = arguments.length;
switch (G__87425) {
case 0:
return refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0 = (function (){
return refx.registry.clear_BANG_(refx.cofx.kind);
}));

(refx.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.registry.remove_BANG_(refx.cofx.kind,id);
}));

(refx.alpha.clear_cofx.cljs$lang$maxFixedArity = 1);

refx.alpha.inject_cofx = (function refx$alpha$inject_cofx(var_args){
var G__87446 = arguments.length;
switch (G__87446) {
case 1:
return refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(id);
}));

(refx.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(id,value);
}));

(refx.alpha.inject_cofx.cljs$lang$maxFixedArity = 2);

refx.alpha.__GT_interceptor = (function refx$alpha$__GT_interceptor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___87602 = arguments.length;
var i__5727__auto___87603 = (0);
while(true){
if((i__5727__auto___87603 < len__5726__auto___87602)){
args__5732__auto__.push((arguments[i__5727__auto___87603]));

var G__87605 = (i__5727__auto___87603 + (1));
i__5727__auto___87603 = G__87605;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__87478){
var map__87479 = p__87478;
var map__87479__$1 = cljs.core.__destructure_map(map__87479);
var m = map__87479__$1;
return refx.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(refx.interceptor.__GT_interceptor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(refx.alpha.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.alpha.__GT_interceptor.cljs$lang$applyTo = (function (seq87473){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87473));
}));


//# sourceMappingURL=refx.alpha.js.map
