goog.provide('refx.events');
refx.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
refx.events.flatten_and_remove_nils = (function refx$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__86454_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__86454_SHARP_));
});
if((!(refx.interop.debug_enabled_QMARK_))){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["when registering",id,", expected a collection of interceptors, got:",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["when registering",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__5823__auto___86518 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(refx.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5823__auto___86518)){
var not_i_86520 = temp__5823__auto___86518;
refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["when registering",id,", expected interceptors, but got:",not_i_86520], 0));
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
refx.events.register = (function refx$events$register(id,interceptors){
return refx.registry.add_BANG_(refx.events.kind,id,refx.events.flatten_and_remove_nils(id,interceptors));
});
refx.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain,
 * and execute it.
 */
refx.events.handle = (function refx$events$handle(event_v){
var event_id = refx.utils.first_in_vector(event_v);
var temp__5823__auto__ = refx.registry.lookup.cljs$core$IFn$_invoke$arity$2(refx.events.kind,event_id);
if(cljs.core.truth_(temp__5823__auto__)){
var interceptors = temp__5823__auto__;
if(cljs.core.truth_(refx.events._STAR_handling_STAR_)){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["while handling",refx.events._STAR_handling_STAR_,", dispatch-sync was called for",event_v,". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR__orig_val__86487 = refx.events._STAR_handling_STAR_;
var _STAR_handling_STAR__temp_val__86488 = event_v;
(refx.events._STAR_handling_STAR_ = _STAR_handling_STAR__temp_val__86488);

try{return refx.interceptor.execute(event_v,interceptors);
}finally {(refx.events._STAR_handling_STAR_ = _STAR_handling_STAR__orig_val__86487);
}}
} else {
return null;
}
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
refx.events.db_handler__GT_interceptor = (function refx$events$db_handler__GT_interceptor(handler_fn){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$events$db_handler__GT_interceptor_$_db_handler_before(context){
var map__86503 = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__86503__$1 = cljs.core.__destructure_map(map__86503);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86503__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86503__$1,new cljs.core.Keyword(null,"event","event",301435442));
return refx.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null, db,event)));
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :fx ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
refx.events.fx_handler__GT_interceptor = (function refx$events$fx_handler__GT_interceptor(handler_fn){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$events$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__86507 = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__86507__$1 = cljs.core.__destructure_map(map__86507);
var coeffects = map__86507__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86507__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null, coeffects,event)));
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
refx.events.ctx_handler__GT_interceptor = (function refx$events$ctx_handler__GT_interceptor(handler_fn){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$events$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null, context));
})], 0));
});

//# sourceMappingURL=refx.events.js.map
