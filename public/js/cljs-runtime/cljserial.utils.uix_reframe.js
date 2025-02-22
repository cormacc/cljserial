goog.provide('cljserial.utils.uix_reframe');
var module$node_modules$use_sync_external_store$with_selector=shadow.js.require("module$node_modules$use_sync_external_store$with_selector", {});
var module$node_modules$scheduler$index=shadow.js.require("module$node_modules$scheduler$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
cljserial.utils.uix_reframe.cleanup_ref = (function cljserial$utils$uix_reframe$cleanup_ref(ref){
var temp__5804__auto__ = (ref["__rat"]);
if(cljs.core.truth_(temp__5804__auto__)){
var temp_ref = temp__5804__auto__;
cljs.core.remove_watch(ref,temp_ref);

var temp__5804__auto____$1 = temp_ref.watching;
if(cljs.core.truth_(temp__5804__auto____$1)){
var watching = temp__5804__auto____$1;
return (temp_ref.watching = watching.filter((function (p1__113045_SHARP_){
return (!((ref === p1__113045_SHARP_)));
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
cljserial.utils.uix_reframe.use_batched_subscribe = (function cljserial$utils$uix_reframe$use_batched_subscribe(ref){
return uix.hooks.alpha.use_callback((function (listener){
var listeners_113093 = (function (){var or__5045__auto__ = ref.react_listeners;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
})();
(ref.react_listeners = listeners_113093);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_113093,cljs.core.conj,listener);

return (function (){
var listeners = ref.react_listeners;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners,cljs.core.disj,listener);

if(cljs.core.empty_QMARK_(cljs.core.deref(listeners))){
cljserial.utils.uix_reframe.cleanup_ref(ref);

return (ref.react_listeners = null);
} else {
return null;
}
});
}),uix.core.jsfy_deps([ref]));
});
cljserial.utils.uix_reframe.use_sync_external_store = (function cljserial$utils$uix_reframe$use_sync_external_store(subscribe,get_snapshot){
return module$node_modules$use_sync_external_store$with_selector.useSyncExternalStoreWithSelector(subscribe,get_snapshot,null,cljs.core.identity,cljs.core._EQ_);
});
cljserial.utils.uix_reframe.run_reaction = (function cljserial$utils$uix_reframe$run_reaction(ref){
var key = "__rat";
var rat = (ref[key]);
var on_change = (function (_){
var temp__5804__auto__ = ref.react_listeners;
if(cljs.core.truth_(temp__5804__auto__)){
var listeners = temp__5804__auto__;
return module$node_modules$scheduler$index.unstable_scheduleCallback(module$node_modules$scheduler$index.unstable_ImmediatePriority,(function (){
var seq__113068 = cljs.core.seq(cljs.core.deref(listeners));
var chunk__113069 = null;
var count__113070 = (0);
var i__113071 = (0);
while(true){
if((i__113071 < count__113070)){
var listener = chunk__113069.cljs$core$IIndexed$_nth$arity$2(null, i__113071);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null, ));


var G__113094 = seq__113068;
var G__113095 = chunk__113069;
var G__113096 = count__113070;
var G__113097 = (i__113071 + (1));
seq__113068 = G__113094;
chunk__113069 = G__113095;
count__113070 = G__113096;
i__113071 = G__113097;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__113068);
if(temp__5804__auto____$1){
var seq__113068__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__113068__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__113068__$1);
var G__113098 = cljs.core.chunk_rest(seq__113068__$1);
var G__113099 = c__5568__auto__;
var G__113100 = cljs.core.count(c__5568__auto__);
var G__113101 = (0);
seq__113068 = G__113098;
chunk__113069 = G__113099;
count__113070 = G__113100;
i__113071 = G__113101;
continue;
} else {
var listener = cljs.core.first(seq__113068__$1);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null, ));


var G__113102 = cljs.core.next(seq__113068__$1);
var G__113103 = null;
var G__113104 = (0);
var G__113105 = (0);
seq__113068 = G__113102;
chunk__113069 = G__113103;
count__113070 = G__113104;
i__113071 = G__113105;
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
cljserial.utils.uix_reframe.use_reaction = (function cljserial$utils$uix_reframe$use_reaction(reaction){
if(cljs.core.truth_(reagent.impl.component._STAR_current_component_STAR_)){
return cljs.core.deref(reaction);
} else {
var subscribe = cljserial.utils.uix_reframe.use_batched_subscribe(reaction);
var get_snapshot = uix.hooks.alpha.use_callback((function (){
return cljserial.utils.uix_reframe.run_reaction(reaction);
}),uix.core.jsfy_deps([reaction]));
return cljserial.utils.uix_reframe.use_sync_external_store(subscribe,get_snapshot);
}
});
/**
 * Takes re-frame subscription query e.g. [:current-document/title],
 *   creates an instance of the subscription,
 *   subscribes UI component to changes in the subscription
 *   and returns current state value of the subscription
 */
cljserial.utils.uix_reframe.use_subscribe = (function cljserial$utils$uix_reframe$use_subscribe(query){
var sub = (function (){var _STAR_ratom_context_STAR__orig_val__113085 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__113086 = ({});
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__113086);

try{return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(query);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__113085);
}})();
var ref = (function (){var or__5045__auto__ = sub;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})();
return cljserial.utils.uix_reframe.use_reaction(ref);
});

//# sourceMappingURL=cljserial.utils.uix_reframe.js.map
