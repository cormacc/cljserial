goog.provide('uix.hooks.alpha');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.hooks.alpha.choose_value = (function uix$hooks$alpha$choose_value(nv,cv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv,cv)){
return cv;
} else {
return nv;
}
});
/**
 * Replicates React's behaviour when updating state with identical JS value,
 *   but using Clojure's value equality here
 */
uix.hooks.alpha.use_clojure_aware_updater = (function uix$hooks$alpha$use_clojure_aware_updater(updater){
return module$node_modules$react$index.useCallback((function() { 
var G__87101__delegate = function (v,args){
var G__86827 = (function (cv){
if(cljs.core.fn_QMARK_(v)){
return uix.hooks.alpha.choose_value(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(v,cv,args),cv);
} else {
return uix.hooks.alpha.choose_value(v,cv);
}
});
return (updater.cljs$core$IFn$_invoke$arity$1 ? updater.cljs$core$IFn$_invoke$arity$1(G__86827) : updater.call(null, G__86827));
};
var G__87101 = function (v,var_args){
var args = null;
if (arguments.length > 1) {
var G__87108__i = 0, G__87108__a = new Array(arguments.length -  1);
while (G__87108__i < G__87108__a.length) {G__87108__a[G__87108__i] = arguments[G__87108__i + 1]; ++G__87108__i;}
  args = new cljs.core.IndexedSeq(G__87108__a,0,null);
} 
return G__87101__delegate.call(this,v,args);};
G__87101.cljs$lang$maxFixedArity = 1;
G__87101.cljs$lang$applyTo = (function (arglist__87109){
var v = cljs.core.first(arglist__87109);
var args = cljs.core.rest(arglist__87109);
return G__87101__delegate(v,args);
});
G__87101.cljs$core$IFn$_invoke$arity$variadic = G__87101__delegate;
return G__87101;
})()
,[updater]);
});
uix.hooks.alpha.use_state = (function uix$hooks$alpha$use_state(value){
var vec__86832 = module$node_modules$react$index.useState(value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86832,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86832,(1),null);
var set_state__$1 = uix.hooks.alpha.use_clojure_aware_updater(set_state);
return [state,set_state__$1];
});
/**
 * Same as `use-clojure-primitive-aware-updater` but for `use-reducer`
 */
uix.hooks.alpha.clojure_aware_reducer_updater = (function uix$hooks$alpha$clojure_aware_reducer_updater(f){
return (function (state,action){
return uix.hooks.alpha.choose_value((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(state,action) : f.call(null, state,action)),state);
});
});
uix.hooks.alpha.use_reducer = (function uix$hooks$alpha$use_reducer(var_args){
var G__86851 = arguments.length;
switch (G__86851) {
case 2:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
var updater = uix.hooks.alpha.clojure_aware_reducer_updater(f);
return module$node_modules$react$index.useReducer(updater,value);
}));

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
var updater = uix.hooks.alpha.clojure_aware_reducer_updater(f);
return module$node_modules$react$index.useReducer(updater,value,init_state);
}));

(uix.hooks.alpha.use_reducer.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_ref = (function uix$hooks$alpha$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
uix.hooks.alpha.with_return_value_check = (function uix$hooks$alpha$with_return_value_check(f){
return (function (){
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
if(cljs.core.fn_QMARK_(ret)){
return ret;
} else {
return undefined;
}
});
});
uix.hooks.alpha.use_clj_deps = (function uix$hooks$alpha$use_clj_deps(deps){
var ref = module$node_modules$react$index.useRef(deps);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref.current,deps)){
(ref.current = deps);
} else {
}

return ref.current;
});
uix.hooks.alpha.use_effect = (function uix$hooks$alpha$use_effect(var_args){
var G__86887 = arguments.length;
switch (G__86887) {
case 1:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return module$node_modules$react$index.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return module$node_modules$react$index.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_layout_effect = (function uix$hooks$alpha$use_layout_effect(var_args){
var G__86916 = arguments.length;
switch (G__86916) {
case 1:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return module$node_modules$react$index.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return module$node_modules$react$index.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_layout_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_insertion_effect = (function uix$hooks$alpha$use_insertion_effect(var_args){
var G__86928 = arguments.length;
switch (G__86928) {
case 1:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f));
}));

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f),deps);
}));

(uix.hooks.alpha.use_insertion_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_callback = (function uix$hooks$alpha$use_callback(f,deps){
return module$node_modules$react$index.useCallback(f,deps);
});
uix.hooks.alpha.use_memo = (function uix$hooks$alpha$use_memo(f,deps){
return module$node_modules$react$index.useMemo(f,deps);
});
uix.hooks.alpha.use_context = (function uix$hooks$alpha$use_context(v){
return module$node_modules$react$index.useContext(v);
});
uix.hooks.alpha.use_imperative_handle = (function uix$hooks$alpha$use_imperative_handle(var_args){
var G__86958 = arguments.length;
switch (G__86958) {
case 2:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle,deps);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_debug = (function uix$hooks$alpha$use_debug(var_args){
var G__86976 = arguments.length;
switch (G__86976) {
case 1:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1 = (function (v){
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2 = (function (v,fmt){
return module$node_modules$react$index.useDebugValue(v,fmt);
}));

(uix.hooks.alpha.use_debug.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_deferred_value = (function uix$hooks$alpha$use_deferred_value(var_args){
var G__86997 = arguments.length;
switch (G__86997) {
case 1:
return uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$1 = (function (v){
return module$node_modules$react$index.useDeferredValue(v);
}));

(uix.hooks.alpha.use_deferred_value.cljs$core$IFn$_invoke$arity$2 = (function (v,initial){
return module$node_modules$react$index.useDeferredValue(v,initial);
}));

(uix.hooks.alpha.use_deferred_value.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_transition = (function uix$hooks$alpha$use_transition(){
return module$node_modules$react$index.useTransition();
});
uix.hooks.alpha.use_id = (function uix$hooks$alpha$use_id(){
return module$node_modules$react$index.useId();
});
uix.hooks.alpha.use_sync_external_store = (function uix$hooks$alpha$use_sync_external_store(var_args){
var G__87038 = arguments.length;
switch (G__87038) {
case 2:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_snapshot){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_server_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_optimistic = (function uix$hooks$alpha$use_optimistic(state,update_fn){
return module$node_modules$react$index.useOptimistic(state,update_fn);
});
uix.hooks.alpha.use_action_state = (function uix$hooks$alpha$use_action_state(var_args){
var G__87055 = arguments.length;
switch (G__87055) {
case 2:
return uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$2 = (function (f,state){
return module$node_modules$react$index.useActionState(f,state);
}));

(uix.hooks.alpha.use_action_state.cljs$core$IFn$_invoke$arity$3 = (function (f,state,permalink){
return module$node_modules$react$index.useActionState(f,state,permalink);
}));

(uix.hooks.alpha.use_action_state.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use = (function uix$hooks$alpha$use(resource){
return module$node_modules$react$index.use(resource);
});

//# sourceMappingURL=uix.hooks.alpha.js.map
