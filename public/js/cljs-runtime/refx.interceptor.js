goog.provide('refx.interceptor');
refx.interceptor.mandatory_interceptor_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"after","after",594996914),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"before","before",-1633692388),null], null), null);
refx.interceptor.interceptor_QMARK_ = (function refx$interceptor$interceptor_QMARK_(m){
return ((cljs.core.map_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(refx.interceptor.mandatory_interceptor_keys,cljs.core.set(cljs.core.keys(m)))));
});
refx.interceptor.__GT_interceptor = (function refx$interceptor$__GT_interceptor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___86418 = arguments.length;
var i__5727__auto___86419 = (0);
while(true){
if((i__5727__auto___86419 < len__5726__auto___86418)){
args__5732__auto__.push((arguments[i__5727__auto___86419]));

var G__86420 = (i__5727__auto___86419 + (1));
i__5727__auto___86419 = G__86420;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__86263){
var map__86268 = p__86263;
var map__86268__$1 = cljs.core.__destructure_map(map__86268);
var m = map__86268__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86268__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86268__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86268__$1,new cljs.core.Keyword(null,"after","after",594996914));
if(refx.interop.debug_enabled_QMARK_){
var temp__5823__auto___86421 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),refx.interceptor.mandatory_interceptor_keys));
if(temp__5823__auto___86421){
var unknown_keys_86422 = temp__5823__auto___86421;
refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["->interceptor",m,"has unknown keys:",unknown_keys_86422], 0));
} else {
}
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5002__auto__ = id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"unnamed","unnamed",-26044928);
}
})(),new cljs.core.Keyword(null,"before","before",-1633692388),before,new cljs.core.Keyword(null,"after","after",594996914),after], null);
}));

(refx.interceptor.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.interceptor.__GT_interceptor.cljs$lang$applyTo = (function (seq86226){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86226));
}));

refx.interceptor.get_effect = (function refx$interceptor$get_effect(var_args){
var G__86284 = arguments.length;
switch (G__86284) {
case 1:
return refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
}));

(refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null));
}));

(refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),not_found);
}));

(refx.interceptor.get_effect.cljs$lang$maxFixedArity = 3);

refx.interceptor.assoc_effect = (function refx$interceptor$assoc_effect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),value);
});
refx.interceptor.update_effect = (function refx$interceptor$update_effect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___86430 = arguments.length;
var i__5727__auto___86431 = (0);
while(true){
if((i__5727__auto___86431 < len__5726__auto___86430)){
args__5732__auto__.push((arguments[i__5727__auto___86431]));

var G__86432 = (i__5727__auto___86431 + (1));
i__5727__auto___86431 = G__86432;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return refx.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(refx.interceptor.update_effect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),key], null),f,args);
}));

(refx.interceptor.update_effect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(refx.interceptor.update_effect.cljs$lang$applyTo = (function (seq86304){
var G__86305 = cljs.core.first(seq86304);
var seq86304__$1 = cljs.core.next(seq86304);
var G__86306 = cljs.core.first(seq86304__$1);
var seq86304__$2 = cljs.core.next(seq86304__$1);
var G__86307 = cljs.core.first(seq86304__$2);
var seq86304__$3 = cljs.core.next(seq86304__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86305,G__86306,G__86307,seq86304__$3);
}));

refx.interceptor.get_coeffect = (function refx$interceptor$get_coeffect(var_args){
var G__86329 = arguments.length;
switch (G__86329) {
case 1:
return refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context);
}));

(refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null));
}));

(refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),not_found);
}));

(refx.interceptor.get_coeffect.cljs$lang$maxFixedArity = 3);

refx.interceptor.assoc_coeffect = (function refx$interceptor$assoc_coeffect(context,key,value){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),value);
});
refx.interceptor.update_coeffect = (function refx$interceptor$update_coeffect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___86442 = arguments.length;
var i__5727__auto___86443 = (0);
while(true){
if((i__5727__auto___86443 < len__5726__auto___86442)){
args__5732__auto__.push((arguments[i__5727__auto___86443]));

var G__86444 = (i__5727__auto___86443 + (1));
i__5727__auto___86443 = G__86444;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return refx.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(refx.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic = (function (context,key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),key], null),f,args);
}));

(refx.interceptor.update_coeffect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(refx.interceptor.update_coeffect.cljs$lang$applyTo = (function (seq86339){
var G__86340 = cljs.core.first(seq86339);
var seq86339__$1 = cljs.core.next(seq86339);
var G__86341 = cljs.core.first(seq86339__$1);
var seq86339__$2 = cljs.core.next(seq86339__$1);
var G__86342 = cljs.core.first(seq86339__$2);
var seq86339__$3 = cljs.core.next(seq86339__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86340,G__86341,G__86342,seq86339__$3);
}));

refx.interceptor.invoke_interceptor_fn = (function refx$interceptor$invoke_interceptor_fn(context,interceptor,direction){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,direction);
if(cljs.core.truth_(temp__5821__auto__)){
var f = temp__5821__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context) : f.call(null, context));
} else {
return context;
}
});
/**
 * Loop over all interceptors, calling `direction` function on each,
 *   threading the value of `context` through every call.
 * 
 *   `direction` is one of `:before` or `:after`.
 * 
 *   Each iteration, the next interceptor to process is obtained from
 *   context's `:queue`. After they are processed, interceptors are popped
 *   from `:queue` and added to `:stack`.
 * 
 *   After sufficient iteration, `:queue` will be empty, and `:stack` will
 *   contain all interceptors processed.
 * 
 *   Returns updated `context`. Ie. the `context` which has been threaded
 *   through all interceptor functions.
 * 
 *   Generally speaking, an interceptor's `:before` function will (if present)
 *   add to a `context's` `:coeffects`, while its `:after` function
 *   will modify the `context`'s `:effects`.  Very approximately.
 * 
 *   But because all interceptor functions are given `context`, and can
 *   return a modified version of it, the way is clear for an interceptor
 *   to introspect the stack or queue, or even modify the queue
 *   (add new interceptors via `enqueue`?). This is a very fluid arrangement.
 */
refx.interceptor.invoke_interceptors = (function refx$interceptor$invoke_interceptors(context,direction){
var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.empty_QMARK_(queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek(queue);
var stack__$1 = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context__$1);
var G__86456 = refx.interceptor.invoke_interceptor_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context__$1,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop(queue),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,interceptor)], 0)),interceptor,direction);
context__$1 = G__86456;
continue;
}
break;
}
});
refx.interceptor.enqueue = (function refx$interceptor$enqueue(context,interceptors){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,refx.interop.empty_queue),interceptors);
});
/**
 * Create a fresh context
 */
refx.interceptor.context = (function refx$interceptor$context(event,interceptors){
return refx.interceptor.enqueue(refx.interceptor.assoc_coeffect(refx.interceptor.assoc_coeffect(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"event","event",301435442),event),new cljs.core.Keyword(null,"original-event","original-event",2121330403),event),interceptors);
});
/**
 * Called on completion of `:before` processing, this function prepares/modifies
 * `context` for the backwards sweep of processing in which an interceptor
 * chain's `:after` fns are called.
 * 
 * At this point in processing, the `:queue` is empty and `:stack` holds all
 * the previously run interceptors. So this function enables the backwards walk
 * by priming `:queue` with what's currently in `:stack`
 */
refx.interceptor.change_direction = (function refx$interceptor$change_direction(context){
return refx.interceptor.enqueue(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"queue","queue",1455835879)),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(context));
});
/**
 * Executes the given chain (coll) of interceptors.
 * 
 * Each interceptor has this form:
 *     {:before  (fn [context] ...)     ;; returns possibly modified context
 *      :after   (fn [context] ...)}    ;; `identity` would be a noop
 * 
 * Walks the queue of interceptors from beginning to end, calling the
 * `:before` fn on each, then reverse direction and walk backwards,
 * calling the `:after` fn on each.
 * 
 * The last interceptor in the chain presumably wraps an event
 * handler fn. So the overall goal of the process is to "handle
 * the given event".
 * 
 * Thread a `context` through all calls. `context` has this form:
 * 
 *   {:coeffects {:event [:a-query-id :some-param]
 *                :db    <original contents of app-db>}
 *    :effects   {:db    <new value for app-db>
 *                :fx  [:dispatch [:an-event-id :param1]]}
 *    :queue     <a collection of further interceptors>
 *    :stack     <a collection of interceptors already walked>}
 * 
 * `context` has `:coeffects` and `:effects` which, if this was a web
 * server, would be somewhat analogous to `request` and `response`
 * respectively.
 * 
 * `coeffects` will contain data like `event` and the initial
 * state of `db` -  the inputs required by the event handler
 * (sitting presumably on the end of the chain), while handler-returned
 * side effects are put into `:effects` including, but not limited to,
 * new values for `db`.
 * 
 * The first few interceptors in a chain will likely have `:before`
 * functions which "prime" the `context` by adding the event, and
 * the current state of app-db into `:coeffects`. But interceptors can
 * add whatever they want to `:coeffects` - perhaps the event handler needs
 * some information from localstore, or a random number, or access to
 * a DataScript connection.
 * 
 * Equally, some interceptors in the chain will have `:after` fn
 * which can process the side effects accumulated into `:effects`
 * including but, not limited to, updates to app-db.
 * 
 * Through both stages (before and after), `context` contains a `:queue`
 * of interceptors yet to be processed, and a `:stack` of interceptors
 * already done.  In advanced cases, these values can be modified by the
 * functions through which the context is threaded.
 */
refx.interceptor.execute = (function refx$interceptor$execute(event_v,interceptors){
return refx.interceptor.invoke_interceptors(refx.interceptor.change_direction(refx.interceptor.invoke_interceptors(refx.interceptor.context(event_v,interceptors),new cljs.core.Keyword(null,"before","before",-1633692388))),new cljs.core.Keyword(null,"after","after",594996914));
});

//# sourceMappingURL=refx.interceptor.js.map
