goog.provide('stack.utils.uix_reframe');
var module$node_modules$use_sync_external_store$with_selector=shadow.js.require("module$node_modules$use_sync_external_store$with_selector", {});
var module$node_modules$scheduler$index=shadow.js.require("module$node_modules$scheduler$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
stack.utils.uix_reframe.cleanup_ref = (function stack$utils$uix_reframe$cleanup_ref(ref){
var temp__5823__auto__ = (ref["__rat"]);
if(cljs.core.truth_(temp__5823__auto__)){
var temp_ref = temp__5823__auto__;
cljs.core.remove_watch(ref,temp_ref);

var temp__5823__auto____$1 = temp_ref.watching;
if(cljs.core.truth_(temp__5823__auto____$1)){
var watching = temp__5823__auto____$1;
return (temp_ref.watching = watching.filter((function (p1__88639_SHARP_){
return (!((ref === p1__88639_SHARP_)));
})));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Takes an atom-like ref type and returns a function
 *   that adds change listeners to the ref
 */
stack.utils.uix_reframe.use_batched_subscribe = (function stack$utils$uix_reframe$use_batched_subscribe(ref){
return uix.hooks.alpha.use_callback((function (listener){
var listeners_88738 = (function (){var or__5002__auto__ = ref.react_listeners;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
})();
(ref.react_listeners = listeners_88738);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_88738,cljs.core.conj,listener);

return (function (){
var listeners = ref.react_listeners;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.disj,listener);

if(cljs.core.empty_QMARK_(cljs.core.deref(listeners))){
stack.utils.uix_reframe.cleanup_ref(ref);

return (ref.react_listeners = null);
} else {
return null;
}
});
}),uix.core.jsfy_deps([ref]));
});
stack.utils.uix_reframe.use_sync_external_store = (function stack$utils$uix_reframe$use_sync_external_store(subscribe,get_snapshot){
return module$node_modules$use_sync_external_store$with_selector.useSyncExternalStoreWithSelector(subscribe,get_snapshot,null,cljs.core.identity,cljs.core._EQ_);
});
stack.utils.uix_reframe.run_reaction = (function stack$utils$uix_reframe$run_reaction(ref){
var key = "__rat";
var rat = (ref[key]);
var on_change = (function (_){
var temp__5823__auto__ = ref.react_listeners;
if(cljs.core.truth_(temp__5823__auto__)){
var listeners = temp__5823__auto__;
return module$node_modules$scheduler$index.unstable_scheduleCallback(module$node_modules$scheduler$index.unstable_ImmediatePriority,(function (){
var seq__88698 = cljs.core.seq(cljs.core.deref(listeners));
var chunk__88699 = null;
var count__88700 = (0);
var i__88701 = (0);
while(true){
if((i__88701 < count__88700)){
var listener = chunk__88699.cljs$core$IIndexed$_nth$arity$2(null, i__88701);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null, ));


var G__88743 = seq__88698;
var G__88744 = chunk__88699;
var G__88745 = count__88700;
var G__88746 = (i__88701 + (1));
seq__88698 = G__88743;
chunk__88699 = G__88744;
count__88700 = G__88745;
i__88701 = G__88746;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__88698);
if(temp__5823__auto____$1){
var seq__88698__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__88698__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__88698__$1);
var G__88747 = cljs.core.chunk_rest(seq__88698__$1);
var G__88748 = c__5525__auto__;
var G__88749 = cljs.core.count(c__5525__auto__);
var G__88750 = (0);
seq__88698 = G__88747;
chunk__88699 = G__88748;
count__88700 = G__88749;
i__88701 = G__88750;
continue;
} else {
var listener = cljs.core.first(seq__88698__$1);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null, ));


var G__88752 = cljs.core.next(seq__88698__$1);
var G__88753 = null;
var G__88754 = (0);
var G__88755 = (0);
seq__88698 = G__88752;
chunk__88699 = G__88753;
count__88700 = G__88754;
i__88701 = G__88755;
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
}),ref,key,on_change,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null));
} else {
return rat._run(false);
}
});
/**
 * Takes Reagent's Reaction,
 *   subscribes UI component to changes in the reaction
 *   and returns current state value of the reaction
 */
stack.utils.uix_reframe.use_reaction = (function stack$utils$uix_reframe$use_reaction(reaction){
if(cljs.core.truth_(reagent.impl.component._STAR_current_component_STAR_)){
return cljs.core.deref(reaction);
} else {
var subscribe = stack.utils.uix_reframe.use_batched_subscribe(reaction);
var get_snapshot = uix.hooks.alpha.use_callback((function (){
return stack.utils.uix_reframe.run_reaction(reaction);
}),uix.core.jsfy_deps([reaction]));
return stack.utils.uix_reframe.use_sync_external_store(subscribe,get_snapshot);
}
});
/**
 * Takes re-frame subscription query e.g. [:current-document/title],
 *   creates an instance of the subscription,
 *   subscribes UI component to changes in the subscription
 *   and returns current state value of the subscription
 */
stack.utils.uix_reframe.use_subscribe = (function stack$utils$uix_reframe$use_subscribe(query){
var sub = (function (){var _STAR_ratom_context_STAR__orig_val__88722 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__88723 = ({});
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__88723);

try{return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(query);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__88722);
}})();
var ref = (function (){var or__5002__auto__ = sub;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})();
return stack.utils.uix_reframe.use_reaction(ref);
});

//# sourceMappingURL=stack.utils.uix_reframe.js.map
