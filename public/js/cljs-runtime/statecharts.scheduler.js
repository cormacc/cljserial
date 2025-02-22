goog.provide('statecharts.scheduler');

/**
* @constructor
 * @implements {statecharts.delayed.IScheduler}
*/
statecharts.scheduler.Scheduler = (function (dispatch,timeout_ids,clock){
this.dispatch = dispatch;
this.timeout_ids = timeout_ids;
this.clock = clock;
});
(statecharts.scheduler.Scheduler.prototype.statecharts$delayed$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.scheduler.Scheduler.prototype.statecharts$delayed$IScheduler$schedule$arity$5 = (function (_,fsm,state,event,delay){
var self__ = this;
var ___$1 = this;
var timeout_id = statecharts.clock.setTimeout(self__.clock,(function (){
return (self__.dispatch.cljs$core$IFn$_invoke$arity$3 ? self__.dispatch.cljs$core$IFn$_invoke$arity$3(fsm,state,event) : self__.dispatch.call(null, fsm,state,event));
}),delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.timeout_ids,cljs.core.assoc,event,timeout_id);
}));

(statecharts.scheduler.Scheduler.prototype.statecharts$delayed$IScheduler$unschedule$arity$4 = (function (_,_fsm,_state,event){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.timeout_ids),event);
if(cljs.core.truth_(temp__5823__auto__)){
var timeout_id = temp__5823__auto__;
statecharts.clock.clearTimeout(self__.clock,timeout_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.timeout_ids,cljs.core.dissoc,event);
} else {
return null;
}
}));

(statecharts.scheduler.Scheduler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"timeout-ids","timeout-ids",1625251337,null),new cljs.core.Symbol(null,"clock","clock",746230400,null)], null);
}));

(statecharts.scheduler.Scheduler.cljs$lang$type = true);

(statecharts.scheduler.Scheduler.cljs$lang$ctorStr = "statecharts.scheduler/Scheduler");

(statecharts.scheduler.Scheduler.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"statecharts.scheduler/Scheduler");
}));

/**
 * Positional factory function for statecharts.scheduler/Scheduler.
 */
statecharts.scheduler.__GT_Scheduler = (function statecharts$scheduler$__GT_Scheduler(dispatch,timeout_ids,clock){
return (new statecharts.scheduler.Scheduler(dispatch,timeout_ids,clock));
});

/**
 * DEPRECATED: Use [[make-store-scheduler]] instead.
 * 
 *   If we are scheduling events, we must be saving them somewhere, implying that we
 *   have a store. make-store-scheduler is a neater combination of those
 *   responsibilities: transition and save.
 */
statecharts.scheduler.make_scheduler = (function statecharts$scheduler$make_scheduler(dispatch,clock){
return (new statecharts.scheduler.Scheduler(dispatch,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),clock));
});

/**
* @constructor
 * @implements {statecharts.delayed.IScheduler}
*/
statecharts.scheduler.StoreScheduler = (function (store,timeout_ids,clock){
this.store = store;
this.timeout_ids = timeout_ids;
this.clock = clock;
});
(statecharts.scheduler.StoreScheduler.prototype.statecharts$delayed$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.scheduler.StoreScheduler.prototype.statecharts$delayed$IScheduler$schedule$arity$5 = (function (_,fsm,state,event,delay){
var self__ = this;
var ___$1 = this;
var state_id = statecharts.store.unique_id(self__.store,state);
var timeout_id = statecharts.clock.setTimeout(self__.clock,(function (){
return statecharts.store.transition(self__.store,fsm,state,event,null);
}),delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.timeout_ids,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_id,event], null),timeout_id);
}));

(statecharts.scheduler.StoreScheduler.prototype.statecharts$delayed$IScheduler$unschedule$arity$4 = (function (_,_fsm,state,event){
var self__ = this;
var ___$1 = this;
var state_id = statecharts.store.unique_id(self__.store,state);
var timeout_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.timeout_ids),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_id,event], null));
if(cljs.core.truth_(timeout_id)){
statecharts.clock.clearTimeout(self__.clock,timeout_id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.timeout_ids,cljs.core.update,state_id,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));
} else {
return null;
}
}));

(statecharts.scheduler.StoreScheduler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol(null,"timeout-ids","timeout-ids",1625251337,null),new cljs.core.Symbol(null,"clock","clock",746230400,null)], null);
}));

(statecharts.scheduler.StoreScheduler.cljs$lang$type = true);

(statecharts.scheduler.StoreScheduler.cljs$lang$ctorStr = "statecharts.scheduler/StoreScheduler");

(statecharts.scheduler.StoreScheduler.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"statecharts.scheduler/StoreScheduler");
}));

/**
 * Positional factory function for statecharts.scheduler/StoreScheduler.
 */
statecharts.scheduler.__GT_StoreScheduler = (function statecharts$scheduler$__GT_StoreScheduler(store,timeout_ids,clock){
return (new statecharts.scheduler.StoreScheduler(store,timeout_ids,clock));
});

/**
 * Returns a scheduler that can be used to [[statecharts.delayed/schedule]] events
 *   afer some delay. The `store`, which is a `statecharts.store/IStore` contains the
 *   current values of the states, and will be updated as those states are
 *   transitioned by the scheduled events. The `clock` is part of the delay
 *   mechanism.
 */
statecharts.scheduler.make_store_scheduler = (function statecharts$scheduler$make_store_scheduler(store,clock){
return (new statecharts.scheduler.StoreScheduler(store,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),clock));
});

//# sourceMappingURL=statecharts.scheduler.js.map
