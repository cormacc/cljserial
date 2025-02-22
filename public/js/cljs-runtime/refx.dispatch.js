goog.provide('refx.dispatch');
refx.dispatch.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
var G__86560 = (function (){
return (refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : refx.interop.next_tick.call(null, f));
});
return (refx.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? refx.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__86560) : refx.interop.after_render.call(null, G__86560));
}),new cljs.core.Keyword(null,"yield","yield",177875009),refx.interop.next_tick], null);

/**
 * @interface
 */
refx.dispatch.IEventQueue = function(){};

var refx$dispatch$IEventQueue$push$dyn_86784 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch.push[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (refx.dispatch.push["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
});
refx.dispatch.push = (function refx$dispatch$push(this$,event){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$push$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$push$arity$2(this$,event);
} else {
return refx$dispatch$IEventQueue$push$dyn_86784(this$,event);
}
});

var refx$dispatch$IEventQueue$add_post_event_callback$dyn_86786 = (function (this$,id,callback_fn){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch.add_post_event_callback[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5351__auto__.call(null, this$,id,callback_fn));
} else {
var m__5349__auto__ = (refx.dispatch.add_post_event_callback["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callback_fn) : m__5349__auto__.call(null, this$,id,callback_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
});
refx.dispatch.add_post_event_callback = (function refx$dispatch$add_post_event_callback(this$,id,callback_fn){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$add_post_event_callback$arity$3 == null)))))){
return this$.refx$dispatch$IEventQueue$add_post_event_callback$arity$3(this$,id,callback_fn);
} else {
return refx$dispatch$IEventQueue$add_post_event_callback$dyn_86786(this$,id,callback_fn);
}
});

var refx$dispatch$IEventQueue$remove_post_event_callback$dyn_86789 = (function (this$,id){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch.remove_post_event_callback[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5351__auto__.call(null, this$,id));
} else {
var m__5349__auto__ = (refx.dispatch.remove_post_event_callback["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5349__auto__.call(null, this$,id));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
});
refx.dispatch.remove_post_event_callback = (function refx$dispatch$remove_post_event_callback(this$,id){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$remove_post_event_callback$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$remove_post_event_callback$arity$2(this$,id);
} else {
return refx$dispatch$IEventQueue$remove_post_event_callback$dyn_86789(this$,id);
}
});

var refx$dispatch$IEventQueue$purge$dyn_86791 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch.purge[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (refx.dispatch.purge["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.purge",this$);
}
}
});
refx.dispatch.purge = (function refx$dispatch$purge(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$purge$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$purge$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$purge$dyn_86791(this$);
}
});

var refx$dispatch$IEventQueue$_fsm_trigger$dyn_86795 = (function (this$,trigger,arg){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._fsm_trigger[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5351__auto__.call(null, this$,trigger,arg));
} else {
var m__5349__auto__ = (refx.dispatch._fsm_trigger["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__5349__auto__.call(null, this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
});
refx.dispatch._fsm_trigger = (function refx$dispatch$_fsm_trigger(this$,trigger,arg){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_fsm_trigger$arity$3 == null)))))){
return this$.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
return refx$dispatch$IEventQueue$_fsm_trigger$dyn_86795(this$,trigger,arg);
}
});

var refx$dispatch$IEventQueue$_add_event$dyn_86803 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._add_event[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (refx.dispatch._add_event["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
});
refx.dispatch._add_event = (function refx$dispatch$_add_event(this$,event){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_add_event$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_add_event$arity$2(this$,event);
} else {
return refx$dispatch$IEventQueue$_add_event$dyn_86803(this$,event);
}
});

var refx$dispatch$IEventQueue$_process_1st_event_in_queue$dyn_86806 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._process_1st_event_in_queue[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (refx.dispatch._process_1st_event_in_queue["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
});
refx.dispatch._process_1st_event_in_queue = (function refx$dispatch$_process_1st_event_in_queue(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_process_1st_event_in_queue$dyn_86806(this$);
}
});

var refx$dispatch$IEventQueue$_run_next_tick$dyn_86809 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._run_next_tick[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (refx.dispatch._run_next_tick["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
});
refx.dispatch._run_next_tick = (function refx$dispatch$_run_next_tick(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_run_next_tick$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_run_next_tick$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_run_next_tick$dyn_86809(this$);
}
});

var refx$dispatch$IEventQueue$_run_queue$dyn_86811 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._run_queue[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (refx.dispatch._run_queue["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
});
refx.dispatch._run_queue = (function refx$dispatch$_run_queue(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_run_queue$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_run_queue$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_run_queue$dyn_86811(this$);
}
});

var refx$dispatch$IEventQueue$_exception$dyn_86819 = (function (this$,ex){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._exception[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5351__auto__.call(null, this$,ex));
} else {
var m__5349__auto__ = (refx.dispatch._exception["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__5349__auto__.call(null, this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
});
refx.dispatch._exception = (function refx$dispatch$_exception(this$,ex){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_exception$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_exception$arity$2(this$,ex);
} else {
return refx$dispatch$IEventQueue$_exception$dyn_86819(this$,ex);
}
});

var refx$dispatch$IEventQueue$_pause$dyn_86824 = (function (this$,later_fn){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._pause[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5351__auto__.call(null, this$,later_fn));
} else {
var m__5349__auto__ = (refx.dispatch._pause["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__5349__auto__.call(null, this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
});
refx.dispatch._pause = (function refx$dispatch$_pause(this$,later_fn){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_pause$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
return refx$dispatch$IEventQueue$_pause$dyn_86824(this$,later_fn);
}
});

var refx$dispatch$IEventQueue$_resume$dyn_86825 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._resume[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (refx.dispatch._resume["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
});
refx.dispatch._resume = (function refx$dispatch$_resume(this$){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_resume$arity$1 == null)))))){
return this$.refx$dispatch$IEventQueue$_resume$arity$1(this$);
} else {
return refx$dispatch$IEventQueue$_resume$dyn_86825(this$);
}
});

var refx$dispatch$IEventQueue$_call_post_event_callbacks$dyn_86828 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (refx.dispatch._call_post_event_callbacks[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (refx.dispatch._call_post_event_callbacks["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
});
refx.dispatch._call_post_event_callbacks = (function refx$dispatch$_call_post_event_callbacks(this$,event){
if((((!((this$ == null)))) && ((!((this$.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2 == null)))))){
return this$.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
return refx$dispatch$IEventQueue$_call_post_event_callbacks$dyn_86828(this$,event);
}
});


/**
* @constructor
 * @implements {refx.dispatch.IEventQueue}
*/
refx.dispatch.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL);

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5821__auto__ = cljs.core.some(refx.dispatch.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5821__auto__)){
var later_fn = temp__5821__auto__;
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
this$__$1.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1(null, );

var G__86831 = (n - (1));
n = G__86831;
continue;
}
}
break;
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)))){
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["could not remove post event call back with id:",id], 0));
} else {
return (self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id));
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return (self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1(null, );

return this$__$1.refx$dispatch$IEventQueue$_run_queue$arity$1(null, );
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__86702 = (function (){
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});
return (refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? refx.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__86702) : refx.interop.next_tick.call(null, G__86702));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
var vec__86703 = (function (){var G__86706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null, arg);

return this$__$1.refx$dispatch$IEventQueue$_run_next_tick$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),(function (){
return this$__$1.refx$dispatch$IEventQueue$_exception$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__86706)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.refx$dispatch$IEventQueue$_run_next_tick$arity$1(null, );
})], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.refx$dispatch$IEventQueue$_pause$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.refx$dispatch$IEventQueue$_resume$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.refx$dispatch$IEventQueue$_run_queue$arity$1(null, );
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),(function (){
return this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),(function (){
return this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__86706)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),(function (){
return this$__$1.refx$dispatch$IEventQueue$_add_event$arity$2(null, arg);
})], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86703,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86703,(1),null);
(self__.fsm_state = new_fsm_state);

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null, ));
} else {
return null;
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__86718 = (function (){
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__86718) : later_fn.call(null, G__86718));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["overwriting existing post event call back with id:",id], 0));
} else {
}

return (self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn));
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{refx.events.handle(event_v);

(self__.queue = cljs.core.pop(self__.queue));

return this$__$1.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2(null, event_v);
}catch (e86726){var ex = e86726;
return this$__$1.refx$dispatch$IEventQueue$_fsm_trigger$arity$3(null, new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__86738 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__86739 = null;
var count__86740 = (0);
var i__86741 = (0);
while(true){
if((i__86741 < count__86740)){
var callback = chunk__86739.cljs$core$IIndexed$_nth$arity$2(null, i__86741);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null, event_v,self__.queue));


var G__86859 = seq__86738;
var G__86860 = chunk__86739;
var G__86861 = count__86740;
var G__86862 = (i__86741 + (1));
seq__86738 = G__86859;
chunk__86739 = G__86860;
count__86740 = G__86861;
i__86741 = G__86862;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86738);
if(temp__5823__auto__){
var seq__86738__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86738__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86738__$1);
var G__86865 = cljs.core.chunk_rest(seq__86738__$1);
var G__86866 = c__5525__auto__;
var G__86867 = cljs.core.count(c__5525__auto__);
var G__86868 = (0);
seq__86738 = G__86865;
chunk__86739 = G__86866;
count__86740 = G__86867;
i__86741 = G__86868;
continue;
} else {
var callback = cljs.core.first(seq__86738__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null, event_v,self__.queue));


var G__86873 = cljs.core.next(seq__86738__$1);
var G__86874 = null;
var G__86875 = (0);
var G__86876 = (0);
seq__86738 = G__86873;
chunk__86739 = G__86874;
count__86740 = G__86875;
i__86741 = G__86876;
continue;
}
} else {
return null;
}
}
break;
}
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$purge$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.queue = refx.interop.empty_queue);
}));

(refx.dispatch.EventQueue.prototype.refx$dispatch$IEventQueue$_exception$arity$2 = (function (this$,ex){
var self__ = this;
var this$__$1 = this;
this$__$1.refx$dispatch$IEventQueue$purge$arity$1(null, );

throw ex;
}));

(refx.dispatch.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(refx.dispatch.EventQueue.cljs$lang$type = true);

(refx.dispatch.EventQueue.cljs$lang$ctorStr = "refx.dispatch/EventQueue");

(refx.dispatch.EventQueue.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"refx.dispatch/EventQueue");
}));

/**
 * Positional factory function for refx.dispatch/EventQueue.
 */
refx.dispatch.__GT_EventQueue = (function refx$dispatch$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new refx.dispatch.EventQueue(fsm_state,queue,post_event_callback_fns));
});

refx.dispatch.event_queue = refx.dispatch.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),refx.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
refx.dispatch.dispatch = (function refx$dispatch$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
refx.dispatch.event_queue.refx$dispatch$IEventQueue$push$arity$2(null, event);
}

return null;
});
refx.dispatch.dispatch_sync = (function refx$dispatch$dispatch_sync(event_v){
refx.events.handle(event_v);

refx.dispatch.event_queue.refx$dispatch$IEventQueue$_call_post_event_callbacks$arity$2(null, event_v);

return null;
});

//# sourceMappingURL=refx.dispatch.js.map
