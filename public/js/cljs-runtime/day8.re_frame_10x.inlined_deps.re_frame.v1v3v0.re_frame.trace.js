goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$start_trace(p__59376){
var map__59377 = p__59376;
var map__59377__$1 = cljs.core.__destructure_map(map__59377);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59377__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$tracing_cb_debounced(){
var seq__59382_59418 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.trace_cbs));
var chunk__59383_59419 = null;
var count__59384_59420 = (0);
var i__59385_59421 = (0);
while(true){
if((i__59385_59421 < count__59384_59420)){
var vec__59398_59422 = chunk__59383_59419.cljs$core$IIndexed$_nth$arity$2(null, i__59385_59421);
var k_59423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59398_59422,(0),null);
var cb_59424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59398_59422,(1),null);
try{var G__59402_59425 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces);
(cb_59424.cljs$core$IFn$_invoke$arity$1 ? cb_59424.cljs$core$IFn$_invoke$arity$1(G__59402_59425) : cb_59424.call(null, G__59402_59425));
}catch (e59401){var e_59426 = e59401;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59423,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces),e_59426], 0));
}

var G__59427 = seq__59382_59418;
var G__59428 = chunk__59383_59419;
var G__59429 = count__59384_59420;
var G__59430 = (i__59385_59421 + (1));
seq__59382_59418 = G__59427;
chunk__59383_59419 = G__59428;
count__59384_59420 = G__59429;
i__59385_59421 = G__59430;
continue;
} else {
var temp__5823__auto___59431 = cljs.core.seq(seq__59382_59418);
if(temp__5823__auto___59431){
var seq__59382_59432__$1 = temp__5823__auto___59431;
if(cljs.core.chunked_seq_QMARK_(seq__59382_59432__$1)){
var c__5525__auto___59433 = cljs.core.chunk_first(seq__59382_59432__$1);
var G__59434 = cljs.core.chunk_rest(seq__59382_59432__$1);
var G__59435 = c__5525__auto___59433;
var G__59436 = cljs.core.count(c__5525__auto___59433);
var G__59437 = (0);
seq__59382_59418 = G__59434;
chunk__59383_59419 = G__59435;
count__59384_59420 = G__59436;
i__59385_59421 = G__59437;
continue;
} else {
var vec__59403_59438 = cljs.core.first(seq__59382_59432__$1);
var k_59439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403_59438,(0),null);
var cb_59440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59403_59438,(1),null);
try{var G__59407_59441 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces);
(cb_59440.cljs$core$IFn$_invoke$arity$1 ? cb_59440.cljs$core$IFn$_invoke$arity$1(G__59407_59441) : cb_59440.call(null, G__59407_59441));
}catch (e59406){var e_59442 = e59406;
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_59439,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces),e_59442], 0));
}

var G__59443 = cljs.core.next(seq__59382_59432__$1);
var G__59444 = null;
var G__59445 = (0);
var G__59446 = (0);
seq__59382_59418 = G__59443;
chunk__59383_59419 = G__59444;
count__59384_59420 = G__59445;
i__59385_59421 = G__59446;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.js.map
