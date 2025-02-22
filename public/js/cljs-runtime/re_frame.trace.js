goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__63694){
var map__63695 = p__63694;
var map__63695__$1 = cljs.core.__destructure_map(map__63695);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63695__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63695__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63695__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63695__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__63714_63791 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__63715_63792 = null;
var count__63716_63793 = (0);
var i__63717_63794 = (0);
while(true){
if((i__63717_63794 < count__63716_63793)){
var vec__63749_63795 = chunk__63715_63792.cljs$core$IIndexed$_nth$arity$2(null, i__63717_63794);
var k_63796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63749_63795,(0),null);
var cb_63797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63749_63795,(1),null);
try{var G__63755_63798 = cljs.core.deref(re_frame.trace.traces);
(cb_63797.cljs$core$IFn$_invoke$arity$1 ? cb_63797.cljs$core$IFn$_invoke$arity$1(G__63755_63798) : cb_63797.call(null, G__63755_63798));
}catch (e63754){var e_63799 = e63754;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_63796,"while storing",cljs.core.deref(re_frame.trace.traces),e_63799], 0));
}

var G__63802 = seq__63714_63791;
var G__63803 = chunk__63715_63792;
var G__63804 = count__63716_63793;
var G__63805 = (i__63717_63794 + (1));
seq__63714_63791 = G__63802;
chunk__63715_63792 = G__63803;
count__63716_63793 = G__63804;
i__63717_63794 = G__63805;
continue;
} else {
var temp__5823__auto___63806 = cljs.core.seq(seq__63714_63791);
if(temp__5823__auto___63806){
var seq__63714_63809__$1 = temp__5823__auto___63806;
if(cljs.core.chunked_seq_QMARK_(seq__63714_63809__$1)){
var c__5525__auto___63810 = cljs.core.chunk_first(seq__63714_63809__$1);
var G__63812 = cljs.core.chunk_rest(seq__63714_63809__$1);
var G__63813 = c__5525__auto___63810;
var G__63814 = cljs.core.count(c__5525__auto___63810);
var G__63815 = (0);
seq__63714_63791 = G__63812;
chunk__63715_63792 = G__63813;
count__63716_63793 = G__63814;
i__63717_63794 = G__63815;
continue;
} else {
var vec__63760_63817 = cljs.core.first(seq__63714_63809__$1);
var k_63818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63760_63817,(0),null);
var cb_63819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63760_63817,(1),null);
try{var G__63764_63822 = cljs.core.deref(re_frame.trace.traces);
(cb_63819.cljs$core$IFn$_invoke$arity$1 ? cb_63819.cljs$core$IFn$_invoke$arity$1(G__63764_63822) : cb_63819.call(null, G__63764_63822));
}catch (e63763){var e_63824 = e63763;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_63818,"while storing",cljs.core.deref(re_frame.trace.traces),e_63824], 0));
}

var G__63825 = cljs.core.next(seq__63714_63809__$1);
var G__63826 = null;
var G__63827 = (0);
var G__63828 = (0);
seq__63714_63791 = G__63825;
chunk__63715_63792 = G__63826;
count__63716_63793 = G__63827;
i__63717_63794 = G__63828;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
