goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null, day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__60202 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__60203 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__60203);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___60558 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___60558)){
var new_db_60561 = temp__5823__auto___60558;
var fexpr__60222_60562 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__60222_60562.cljs$core$IFn$_invoke$arity$1 ? fexpr__60222_60562.cljs$core$IFn$_invoke$arity$1(new_db_60561) : fexpr__60222_60562.call(null, new_db_60561));
} else {
}

var seq__60232 = cljs.core.seq(effects_without_db);
var chunk__60233 = null;
var count__60234 = (0);
var i__60235 = (0);
while(true){
if((i__60235 < count__60234)){
var vec__60266 = chunk__60233.cljs$core$IIndexed$_nth$arity$2(null, i__60235);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60266,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60266,(1),null);
var temp__5821__auto___60565 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___60565)){
var effect_fn_60566 = temp__5821__auto___60565;
(effect_fn_60566.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60566.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60566.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60568 = seq__60232;
var G__60569 = chunk__60233;
var G__60570 = count__60234;
var G__60571 = (i__60235 + (1));
seq__60232 = G__60568;
chunk__60233 = G__60569;
count__60234 = G__60570;
i__60235 = G__60571;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__60232);
if(temp__5823__auto__){
var seq__60232__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60232__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__60232__$1);
var G__60572 = cljs.core.chunk_rest(seq__60232__$1);
var G__60573 = c__5525__auto__;
var G__60574 = cljs.core.count(c__5525__auto__);
var G__60575 = (0);
seq__60232 = G__60572;
chunk__60233 = G__60573;
count__60234 = G__60574;
i__60235 = G__60575;
continue;
} else {
var vec__60279 = cljs.core.first(seq__60232__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60279,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60279,(1),null);
var temp__5821__auto___60577 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___60577)){
var effect_fn_60582 = temp__5821__auto___60577;
(effect_fn_60582.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60582.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60582.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60583 = cljs.core.next(seq__60232__$1);
var G__60584 = null;
var G__60585 = (0);
var G__60586 = (0);
seq__60232 = G__60583;
chunk__60233 = G__60584;
count__60234 = G__60585;
i__60235 = G__60586;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__59347__auto___60587 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__59348__auto___60588 = (end__59347__auto___60587 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__59348__auto___60588,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__59347__auto___60587);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__60202);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___60592 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___60592)){
var new_db_60593 = temp__5823__auto___60592;
var fexpr__60292_60594 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__60292_60594.cljs$core$IFn$_invoke$arity$1 ? fexpr__60292_60594.cljs$core$IFn$_invoke$arity$1(new_db_60593) : fexpr__60292_60594.call(null, new_db_60593));
} else {
}

var seq__60301 = cljs.core.seq(effects_without_db);
var chunk__60302 = null;
var count__60303 = (0);
var i__60304 = (0);
while(true){
if((i__60304 < count__60303)){
var vec__60333 = chunk__60302.cljs$core$IIndexed$_nth$arity$2(null, i__60304);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60333,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60333,(1),null);
var temp__5821__auto___60596 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___60596)){
var effect_fn_60598 = temp__5821__auto___60596;
(effect_fn_60598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60598.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60600 = seq__60301;
var G__60601 = chunk__60302;
var G__60602 = count__60303;
var G__60603 = (i__60304 + (1));
seq__60301 = G__60600;
chunk__60302 = G__60601;
count__60303 = G__60602;
i__60304 = G__60603;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__60301);
if(temp__5823__auto__){
var seq__60301__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60301__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__60301__$1);
var G__60604 = cljs.core.chunk_rest(seq__60301__$1);
var G__60605 = c__5525__auto__;
var G__60606 = cljs.core.count(c__5525__auto__);
var G__60607 = (0);
seq__60301 = G__60604;
chunk__60302 = G__60605;
count__60303 = G__60606;
i__60304 = G__60607;
continue;
} else {
var vec__60349 = cljs.core.first(seq__60301__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60349,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60349,(1),null);
var temp__5821__auto___60609 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___60609)){
var effect_fn_60610 = temp__5821__auto___60609;
(effect_fn_60610.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60610.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60610.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__60611 = cljs.core.next(seq__60301__$1);
var G__60612 = null;
var G__60613 = (0);
var G__60614 = (0);
seq__60301 = G__60611;
chunk__60302 = G__60612;
count__60303 = G__60613;
i__60304 = G__60614;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__60368){
var map__60369 = p__60368;
var map__60369__$1 = cljs.core.__destructure_map(map__60369);
var effect = map__60369__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60369__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__60380 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__60381 = null;
var count__60382 = (0);
var i__60383 = (0);
while(true){
if((i__60383 < count__60382)){
var effect = chunk__60381.cljs$core$IIndexed$_nth$arity$2(null, i__60383);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__60623 = seq__60380;
var G__60624 = chunk__60381;
var G__60625 = count__60382;
var G__60626 = (i__60383 + (1));
seq__60380 = G__60623;
chunk__60381 = G__60624;
count__60382 = G__60625;
i__60383 = G__60626;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__60380);
if(temp__5823__auto__){
var seq__60380__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60380__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__60380__$1);
var G__60629 = cljs.core.chunk_rest(seq__60380__$1);
var G__60630 = c__5525__auto__;
var G__60631 = cljs.core.count(c__5525__auto__);
var G__60632 = (0);
seq__60380 = G__60629;
chunk__60381 = G__60630;
count__60382 = G__60631;
i__60383 = G__60632;
continue;
} else {
var effect = cljs.core.first(seq__60380__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__60635 = cljs.core.next(seq__60380__$1);
var G__60636 = null;
var G__60637 = (0);
var G__60638 = (0);
seq__60380 = G__60635;
chunk__60381 = G__60636;
count__60382 = G__60637;
i__60383 = G__60638;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__60415 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__60416 = null;
var count__60417 = (0);
var i__60418 = (0);
while(true){
if((i__60418 < count__60417)){
var vec__60450 = chunk__60416.cljs$core$IIndexed$_nth$arity$2(null, i__60418);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60450,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60450,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___60643 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___60643)){
var effect_fn_60644 = temp__5821__auto___60643;
(effect_fn_60644.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60644.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60644.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__60647 = seq__60415;
var G__60648 = chunk__60416;
var G__60649 = count__60417;
var G__60650 = (i__60418 + (1));
seq__60415 = G__60647;
chunk__60416 = G__60648;
count__60417 = G__60649;
i__60418 = G__60650;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__60415);
if(temp__5823__auto__){
var seq__60415__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60415__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__60415__$1);
var G__60652 = cljs.core.chunk_rest(seq__60415__$1);
var G__60653 = c__5525__auto__;
var G__60654 = cljs.core.count(c__5525__auto__);
var G__60655 = (0);
seq__60415 = G__60652;
chunk__60416 = G__60653;
count__60417 = G__60654;
i__60418 = G__60655;
continue;
} else {
var vec__60464 = cljs.core.first(seq__60415__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60464,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60464,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___60656 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___60656)){
var effect_fn_60657 = temp__5821__auto___60656;
(effect_fn_60657.cljs$core$IFn$_invoke$arity$1 ? effect_fn_60657.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_60657.call(null, effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__60658 = cljs.core.next(seq__60415__$1);
var G__60659 = null;
var G__60660 = (0);
var G__60661 = (0);
seq__60415 = G__60658;
chunk__60416 = G__60659;
count__60417 = G__60660;
i__60418 = G__60661;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__60489 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__60490 = null;
var count__60491 = (0);
var i__60492 = (0);
while(true){
if((i__60492 < count__60491)){
var event = chunk__60490.cljs$core$IIndexed$_nth$arity$2(null, i__60492);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__60667 = seq__60489;
var G__60668 = chunk__60490;
var G__60669 = count__60491;
var G__60670 = (i__60492 + (1));
seq__60489 = G__60667;
chunk__60490 = G__60668;
count__60491 = G__60669;
i__60492 = G__60670;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__60489);
if(temp__5823__auto__){
var seq__60489__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60489__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__60489__$1);
var G__60672 = cljs.core.chunk_rest(seq__60489__$1);
var G__60673 = c__5525__auto__;
var G__60674 = cljs.core.count(c__5525__auto__);
var G__60675 = (0);
seq__60489 = G__60672;
chunk__60490 = G__60673;
count__60491 = G__60674;
i__60492 = G__60675;
continue;
} else {
var event = cljs.core.first(seq__60489__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__60677 = cljs.core.next(seq__60489__$1);
var G__60678 = null;
var G__60679 = (0);
var G__60680 = (0);
seq__60489 = G__60677;
chunk__60490 = G__60678;
count__60491 = G__60679;
i__60492 = G__60680;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__60517 = cljs.core.seq(value);
var chunk__60518 = null;
var count__60519 = (0);
var i__60520 = (0);
while(true){
if((i__60520 < count__60519)){
var event = chunk__60518.cljs$core$IIndexed$_nth$arity$2(null, i__60520);
clear_event(event);


var G__60685 = seq__60517;
var G__60686 = chunk__60518;
var G__60687 = count__60519;
var G__60688 = (i__60520 + (1));
seq__60517 = G__60685;
chunk__60518 = G__60686;
count__60519 = G__60687;
i__60520 = G__60688;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__60517);
if(temp__5823__auto__){
var seq__60517__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60517__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__60517__$1);
var G__60690 = cljs.core.chunk_rest(seq__60517__$1);
var G__60691 = c__5525__auto__;
var G__60692 = cljs.core.count(c__5525__auto__);
var G__60693 = (0);
seq__60517 = G__60690;
chunk__60518 = G__60691;
count__60519 = G__60692;
i__60520 = G__60693;
continue;
} else {
var event = cljs.core.first(seq__60517__$1);
clear_event(event);


var G__60694 = cljs.core.next(seq__60517__$1);
var G__60695 = null;
var G__60696 = (0);
var G__60697 = (0);
seq__60517 = G__60694;
chunk__60518 = G__60695;
count__60519 = G__60696;
i__60520 = G__60697;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
