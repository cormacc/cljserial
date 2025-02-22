goog.provide('promesa.exec');
goog.scope(function(){
  promesa.exec.goog$module$goog$object = goog.module.get('goog.object');
});
promesa.exec._STAR_default_scheduler_STAR_ = null;
promesa.exec._STAR_default_executor_STAR_ = null;
/**
 * Var that indicates the availability of virtual threads.
 */
promesa.exec.virtual_threads_available_QMARK_ = false;
/**
 * backward compatibility alias for `virtual-threads-available?`
 */
promesa.exec.vthread_supported_QMARK_ = promesa.exec.virtual_threads_available_QMARK_;
promesa.exec.noop = cljs.core.constantly(null);
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_scheduler !== 'undefined')){
} else {
/**
 * Default scheduled executor instance.
 */
promesa.exec.default_scheduler = (new cljs.core.Delay((function (){
return (promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.scheduled_executor.call(null, ));
}),null));
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_executor !== 'undefined')){
} else {
/**
 * Default executor instance, ForkJoinPool/commonPool in JVM, MicrotaskExecutor on JS.
 */
promesa.exec.default_executor = (new cljs.core.Delay((function (){
return (promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.microtask_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.microtask_executor.call(null, ));
}),null));
}
/**
 * Default Executor instance that runs the task in the same thread.
 */
promesa.exec.default_current_thread_executor = (new cljs.core.Delay((function (){
return (promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0 ? promesa.exec.current_thread_executor.cljs$core$IFn$_invoke$arity$0() : promesa.exec.current_thread_executor.call(null, ));
}),null));
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_cached_executor !== 'undefined')){
} else {
/**
 * A global, cached thread executor service.
 */
promesa.exec.default_cached_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_thread_executor !== 'undefined')){
} else {
/**
 * A global, thread per task executor service.
 */
promesa.exec.default_thread_executor = promesa.exec.default_executor;
}
if((typeof promesa !== 'undefined') && (typeof promesa.exec !== 'undefined') && (typeof promesa.exec.default_vthread_executor !== 'undefined')){
} else {
/**
 * A global, virtual thread per task executor service.
 */
promesa.exec.default_vthread_executor = promesa.exec.default_executor;
}
/**
 * Returns true if `o` is an instane of Executor or satisfies IExecutor protocol.
 */
promesa.exec.executor_QMARK_ = (function promesa$exec$executor_QMARK_(o){
if((!((o == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === o.promesa$protocols$IExecutor$)))){
return true;
} else {
if((!o.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(promesa.protocols.IExecutor,o);
}
});
promesa.exec.resolve_executor = (function promesa$exec$resolve_executor(var_args){
var G__88905 = arguments.length;
switch (G__88905) {
case 0:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1 = (function (executor){
if((executor == null)){
return cljs.core.deref(promesa.exec.default_executor);
} else {
if(promesa.exec.executor_QMARK_(executor)){
return executor;
} else {
if(cljs.core.delay_QMARK_(executor)){
return promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(executor));
} else {
var G__88908 = executor;
var G__88908__$1 = (((G__88908 instanceof cljs.core.Keyword))?G__88908.fqn:null);
switch (G__88908__$1) {
case "default":
return cljs.core.deref(promesa.exec.default_executor);

break;
case "cached":
return cljs.core.deref(promesa.exec.default_cached_executor);

break;
case "thread":
return cljs.core.deref(promesa.exec.default_thread_executor);

break;
case "vthread":
return cljs.core.deref(promesa.exec.default_vthread_executor);

break;
case "same-thread":
return cljs.core.deref(promesa.exec.default_current_thread_executor);

break;
case "current-thread":
return cljs.core.deref(promesa.exec.default_current_thread_executor);

break;
default:
throw (new TypeError("invalid executor"));

}

}
}
}
}));

(promesa.exec.resolve_executor.cljs$lang$maxFixedArity = 1);

promesa.exec.resolve_scheduler = (function promesa$exec$resolve_scheduler(var_args){
var G__88913 = arguments.length;
switch (G__88913) {
case 0:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0 = (function (){
return promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(null);
}));

(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1 = (function (scheduler){
if((((scheduler == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),scheduler)))){
return cljs.core.deref(promesa.exec.default_scheduler);
} else {
return promesa.util.maybe_deref(scheduler);
}
}));

(promesa.exec.resolve_scheduler.cljs$lang$maxFixedArity = 1);

promesa.exec.wrap_bindings = (function promesa$exec$wrap_bindings(f){
return f;
});
/**
 * Run the task in the provided executor, returns `nil`. Analogous to
 *   the `(.execute executor f)`. Fire and forget.
 */
promesa.exec.exec_BANG_ = (function promesa$exec$exec_BANG_(var_args){
var G__88923 = arguments.length;
switch (G__88923) {
case 1:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._exec_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._exec_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.exec_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Run the task in the provided executor.
 */
promesa.exec.run_BANG_ = (function promesa$exec$run_BANG_(var_args){
var G__88929 = arguments.length;
switch (G__88929) {
case 1:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._run_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.run_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Submit a task to be executed in a provided executor
 *   and return a promise that will be completed with
 *   the return value of a task.
 * 
 *   A task is a plain clojure function.
 */
promesa.exec.submit_BANG_ = (function promesa$exec$submit_BANG_(var_args){
var G__88937 = arguments.length;
switch (G__88937) {
case 1:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(promesa.exec._STAR_default_executor_STAR_),f);
}));

(promesa.exec.submit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executor,f){
return promesa.protocols._submit_BANG_(promesa.exec.resolve_executor.cljs$core$IFn$_invoke$arity$1(executor),f);
}));

(promesa.exec.submit_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.exec.schedule_BANG_ = (function promesa$exec$schedule_BANG_(var_args){
var G__88941 = arguments.length;
switch (G__88941) {
case 2:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$0(),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (scheduler,ms,f){
return promesa.protocols._schedule_BANG_(promesa.exec.resolve_scheduler.cljs$core$IFn$_invoke$arity$1(scheduler),ms,f);
}));

(promesa.exec.schedule_BANG_.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec88953 = (function (meta88954){
this.meta88954 = meta88954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec88953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88955,meta88954__$1){
var self__ = this;
var _88955__$1 = this;
return (new promesa.exec.t_promesa$exec88953(meta88954__$1));
}));

(promesa.exec.t_promesa$exec88953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88955){
var self__ = this;
var _88955__$1 = this;
return self__.meta88954;
}));

(promesa.exec.t_promesa$exec88953.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec88953.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

return null;
}catch (e88958){var _ = e88958;
return null;
}}));

(promesa.exec.t_promesa$exec88953.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(promesa.exec.noop,f));
}catch (e88961){var cause = e88961;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec88953.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
try{return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, )));
}catch (e88968){var cause = e88968;
return promesa.protocols._promise(cause);
}}));

(promesa.exec.t_promesa$exec88953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta88954","meta88954",-590420454,null)], null);
}));

(promesa.exec.t_promesa$exec88953.cljs$lang$type = true);

(promesa.exec.t_promesa$exec88953.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec88953");

(promesa.exec.t_promesa$exec88953.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/t_promesa$exec88953");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec88953.
 */
promesa.exec.__GT_t_promesa$exec88953 = (function promesa$exec$__GT_t_promesa$exec88953(meta88954){
return (new promesa.exec.t_promesa$exec88953(meta88954));
});


/**
 * Creates an executor instance that run tasks in the same thread.
 */
promesa.exec.current_thread_executor = (function promesa$exec$current_thread_executor(){
return (new promesa.exec.t_promesa$exec88953(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IExecutor}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.exec.t_promesa$exec88971 = (function (meta88972){
this.meta88972 = meta88972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.exec.t_promesa$exec88971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88973,meta88972__$1){
var self__ = this;
var _88973__$1 = this;
return (new promesa.exec.t_promesa$exec88971(meta88972__$1));
}));

(promesa.exec.t_promesa$exec88971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88973){
var self__ = this;
var _88973__$1 = this;
return self__.meta88972;
}));

(promesa.exec.t_promesa$exec88971.prototype.promesa$protocols$IExecutor$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.t_promesa$exec88971.prototype.promesa$protocols$IExecutor$_exec_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.impl.promise.nextTick(f);
}));

(promesa.exec.t_promesa$exec88971.prototype.promesa$protocols$IExecutor$_run_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap(promesa.protocols._fmap(promesa.protocols._promise(null),(function (_){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}catch (e88987){var ___$1 = e88987;
return null;
}})),promesa.exec.noop);
}));

(promesa.exec.t_promesa$exec88971.prototype.promesa$protocols$IExecutor$_submit_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return promesa.protocols._fmap(promesa.protocols._promise(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}));
}));

(promesa.exec.t_promesa$exec88971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta88972","meta88972",-363504223,null)], null);
}));

(promesa.exec.t_promesa$exec88971.cljs$lang$type = true);

(promesa.exec.t_promesa$exec88971.cljs$lang$ctorStr = "promesa.exec/t_promesa$exec88971");

(promesa.exec.t_promesa$exec88971.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/t_promesa$exec88971");
}));

/**
 * Positional factory function for promesa.exec/t_promesa$exec88971.
 */
promesa.exec.__GT_t_promesa$exec88971 = (function promesa$exec$__GT_t_promesa$exec88971(meta88972){
return (new promesa.exec.t_promesa$exec88971(meta88972));
});


/**
 * An IExecutor that schedules tasks to be executed in the MicrotasksQueue.
 */
promesa.exec.microtask_executor = (function promesa$exec$microtask_executor(){
return (new promesa.exec.t_promesa$exec88971(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
*/
promesa.exec.Scheduler = (function (){
});
(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.exec.Scheduler.prototype.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 = (function (_,ms,f){
var self__ = this;
var ___$1 = this;
var df = promesa.impl.promise.deferred();
var tid = setTimeout((function (){
try{return promesa.protocols._resolve_BANG_(df,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, )));
}catch (e88989){var cause = e88989;
return promesa.protocols._reject_BANG_(df,cause);
}}),ms);
promesa.protocols._fnly(df,(function (___$2,c){
if(cljs.core.truth_(promesa.impl.promise.isCancellationError(c))){
return clearTimeout(tid);
} else {
return null;
}
}));

return df;
}));

(promesa.exec.Scheduler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(promesa.exec.Scheduler.cljs$lang$type = true);

(promesa.exec.Scheduler.cljs$lang$ctorStr = "promesa.exec/Scheduler");

(promesa.exec.Scheduler.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"promesa.exec/Scheduler");
}));

/**
 * Positional factory function for promesa.exec/Scheduler.
 */
promesa.exec.__GT_Scheduler = (function promesa$exec$__GT_Scheduler(){
return (new promesa.exec.Scheduler());
});

/**
 * A scheduled thread pool constructor. A ScheduledExecutor (IScheduler
 *   in CLJS) instance allows execute asynchronous tasks some time later.
 */
promesa.exec.scheduled_executor = (function promesa$exec$scheduled_executor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___89035 = arguments.length;
var i__5727__auto___89036 = (0);
while(true){
if((i__5727__auto___89036 < len__5726__auto___89035)){
args__5732__auto__.push((arguments[i__5727__auto___89036]));

var G__89037 = (i__5727__auto___89036 + (1));
i__5727__auto___89036 = G__89037;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(promesa.exec.scheduled_executor.cljs$core$IFn$_invoke$arity$variadic = (function (p__89006){
var map__89007 = p__89006;
var map__89007__$1 = cljs.core.__destructure_map(map__89007);
var parallelism = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89007__$1,new cljs.core.Keyword(null,"parallelism","parallelism",-930922333),(1));
var factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89007__$1,new cljs.core.Keyword(null,"factory","factory",63933746));
return promesa.exec.__GT_Scheduler();
}));

(promesa.exec.scheduled_executor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(promesa.exec.scheduled_executor.cljs$lang$applyTo = (function (seq89005){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq89005));
}));


//# sourceMappingURL=promesa.exec.js.map
