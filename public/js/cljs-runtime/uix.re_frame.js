goog.provide('uix.re_frame');
var module$node_modules$use_sync_external_store$with_selector=shadow.js.require("module$node_modules$use_sync_external_store$with_selector", {});
var module$node_modules$scheduler$index=shadow.js.require("module$node_modules$scheduler$index", {});
uix.re_frame.rat_key = "__rat";
uix.re_frame.cleanup_ref = (function uix$re_frame$cleanup_ref(ref){
var temp__5823__auto__ = (ref[uix.re_frame.rat_key]);
if(cljs.core.truth_(temp__5823__auto__)){
var temp_ref = temp__5823__auto__;
temp_ref.reagent$ratom$IDisposable$dispose_BANG_$arity$1(null, );

return (ref[uix.re_frame.rat_key] = null);
} else {
return null;
}
});
/**
 * Takes an atom-like ref type and returns a function
 *   that adds change listeners to the ref
 */
uix.re_frame.use_batched_subscribe = (function uix$re_frame$use_batched_subscribe(ref){
return uix.hooks.alpha.use_callback((function (listener){
var listeners_91790 = (function (){var or__5002__auto__ = ref.react_listeners;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
})();
(ref.react_listeners = listeners_91790);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_91790,cljs.core.conj,listener);

return (function (){
var listeners = ref.react_listeners;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.disj,listener);

if(cljs.core.empty_QMARK_(cljs.core.deref(listeners))){
uix.re_frame.cleanup_ref(ref);

return (ref.react_listeners = null);
} else {
return null;
}
});
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref], null))]);
});
uix.re_frame.use_sync_external_store = (function uix$re_frame$use_sync_external_store(subscribe,get_snapshot){
return module$node_modules$use_sync_external_store$with_selector.useSyncExternalStoreWithSelector(subscribe,get_snapshot,null,cljs.core.identity,cljs.core._EQ_);
});
uix.re_frame.run_reaction = (function uix$re_frame$run_reaction(ref){
var rat = (ref[uix.re_frame.rat_key]);
var on_change = (function (_){
var temp__5823__auto__ = ref.react_listeners;
if(cljs.core.truth_(temp__5823__auto__)){
var listeners = temp__5823__auto__;
return module$node_modules$scheduler$index.unstable_scheduleCallback(module$node_modules$scheduler$index.unstable_ImmediatePriority,(function (){
var seq__91697 = cljs.core.seq(cljs.core.deref(listeners));
var chunk__91698 = null;
var count__91699 = (0);
var i__91700 = (0);
while(true){
if((i__91700 < count__91699)){
var listener = chunk__91698.cljs$core$IIndexed$_nth$arity$2(null, i__91700);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null, ));


var G__91835 = seq__91697;
var G__91836 = chunk__91698;
var G__91837 = count__91699;
var G__91838 = (i__91700 + (1));
seq__91697 = G__91835;
chunk__91698 = G__91836;
count__91699 = G__91837;
i__91700 = G__91838;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__91697);
if(temp__5823__auto____$1){
var seq__91697__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__91697__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__91697__$1);
var G__91842 = cljs.core.chunk_rest(seq__91697__$1);
var G__91843 = c__5525__auto__;
var G__91844 = cljs.core.count(c__5525__auto__);
var G__91845 = (0);
seq__91697 = G__91842;
chunk__91698 = G__91843;
count__91699 = G__91844;
i__91700 = G__91845;
continue;
} else {
var listener = cljs.core.first(seq__91697__$1);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null, ));


var G__91848 = cljs.core.next(seq__91697__$1);
var G__91849 = null;
var G__91850 = (0);
var G__91851 = (0);
seq__91697 = G__91848;
chunk__91698 = G__91849;
count__91699 = G__91850;
i__91700 = G__91851;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
});
if((rat == null)){
return reagent.ratom.run_in_reaction((function (){
return cljs.core._deref(ref);
}),ref,uix.re_frame.rat_key,on_change,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null));
} else {
return rat._run(false);
}
});
/**
 * Takes Reagent's Reaction, Track or Cursor type,
 *   subscribes UI component to changes in the reaction
 *   and returns current state value of the reaction
 */
uix.re_frame.use_reaction = (function uix$re_frame$use_reaction(reaction){
if(cljs.core.truth_(reagent.impl.component._STAR_current_component_STAR_)){
return cljs.core.deref(reaction);
} else {
var subscribe = uix.re_frame.use_batched_subscribe(reaction);
var get_snapshot = uix.hooks.alpha.use_callback((function (){
return uix.re_frame.run_reaction(reaction);
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reaction], null))]);
return uix.re_frame.use_sync_external_store(subscribe,get_snapshot);
}
});
/**
 * Takes re-frame subscription query e.g. [:current-document/title],
 *   creates an instance of the subscription,
 *   subscribes UI component to changes in the subscription
 *   and returns current state value of the subscription
 */
uix.re_frame.use_subscribe = (function uix$re_frame$use_subscribe(query){
var sub = (function (){var _STAR_ratom_context_STAR__orig_val__91754 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__91755 = ({});
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__91755);

try{return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(query);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__91754);
}})();
var ref = (function (){var or__5002__auto__ = sub;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})();
return uix.re_frame.use_reaction(ref);
});

//# sourceMappingURL=uix.re_frame.js.map
