goog.provide('statecharts.service');
statecharts.service.attach_fsm_scheduler = (function statecharts$service$attach_fsm_scheduler(fsm,store,clock){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fsm,new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208),statecharts.scheduler.make_store_scheduler(store,clock));
});

/**
 * @interface
 */
statecharts.service.IService = function(){};

var statecharts$service$IService$start$dyn_96048 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.service.start[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (statecharts.service.start["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IService.start",this$);
}
}
});
statecharts.service.start = (function statecharts$service$start(this$){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$start$arity$1 == null)))))){
return this$.statecharts$service$IService$start$arity$1(this$);
} else {
return statecharts$service$IService$start$dyn_96048(this$);
}
});

var statecharts$service$IService$send$dyn_96051 = (function (this$,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.service.send[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5351__auto__.call(null, this$,event));
} else {
var m__5349__auto__ = (statecharts.service.send["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__5349__auto__.call(null, this$,event));
} else {
throw cljs.core.missing_protocol("IService.send",this$);
}
}
});
statecharts.service.send = (function statecharts$service$send(this$,event){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$send$arity$2 == null)))))){
return this$.statecharts$service$IService$send$arity$2(this$,event);
} else {
return statecharts$service$IService$send$dyn_96051(this$,event);
}
});

var statecharts$service$IService$state$dyn_96053 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.service.state[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (statecharts.service.state["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IService.state",this$);
}
}
});
statecharts.service.state = (function statecharts$service$state(this$){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$state$arity$1 == null)))))){
return this$.statecharts$service$IService$state$arity$1(this$);
} else {
return statecharts$service$IService$state$dyn_96053(this$);
}
});

var statecharts$service$IService$add_listener$dyn_96054 = (function (this$,id,listener){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.service.add_listener[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,listener) : m__5351__auto__.call(null, this$,id,listener));
} else {
var m__5349__auto__ = (statecharts.service.add_listener["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,listener) : m__5349__auto__.call(null, this$,id,listener));
} else {
throw cljs.core.missing_protocol("IService.add-listener",this$);
}
}
});
statecharts.service.add_listener = (function statecharts$service$add_listener(this$,id,listener){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$add_listener$arity$3 == null)))))){
return this$.statecharts$service$IService$add_listener$arity$3(this$,id,listener);
} else {
return statecharts$service$IService$add_listener$dyn_96054(this$,id,listener);
}
});

var statecharts$service$IService$reload$dyn_96057 = (function (this$,fsm){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.service.reload[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,fsm) : m__5351__auto__.call(null, this$,fsm));
} else {
var m__5349__auto__ = (statecharts.service.reload["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,fsm) : m__5349__auto__.call(null, this$,fsm));
} else {
throw cljs.core.missing_protocol("IService.reload",this$);
}
}
});
statecharts.service.reload = (function statecharts$service$reload(this$,fsm){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$reload$arity$2 == null)))))){
return this$.statecharts$service$IService$reload$arity$2(this$,fsm);
} else {
return statecharts$service$IService$reload$dyn_96057(this$,fsm);
}
});

statecharts.service.wrap_listener = (function statecharts$service$wrap_listener(f){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null, old,new$));
});
});

/**
* @constructor
 * @implements {statecharts.service.IService}
*/
statecharts.service.Service = (function (fsm,store,running,clock,transition_opts){
this.fsm = fsm;
this.store = store;
this.running = running;
this.clock = clock;
this.transition_opts = transition_opts;
});
(statecharts.service.Service.prototype.statecharts$service$IService$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.service.Service.prototype.statecharts$service$IService$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.running)){
return null;
} else {
(self__.running = true);

return statecharts.store.initialize(self__.store,self__.fsm,null);
}
}));

(statecharts.service.Service.prototype.statecharts$service$IService$state$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return statecharts.store.get_state(self__.store,null);
}));

(statecharts.service.Service.prototype.statecharts$service$IService$send$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
var old_state_96060 = statecharts.store.get_state(self__.store,null);
statecharts.store.transition(self__.store,self__.fsm,old_state_96060,event,self__.transition_opts);

return statecharts.store.get_state(self__.store,null);
}));

(statecharts.service.Service.prototype.statecharts$service$IService$add_listener$arity$3 = (function (_,id,listener){
var self__ = this;
var ___$1 = this;
return cljs.core.add_watch(new cljs.core.Keyword(null,"state*","state*",1360534231).cljs$core$IFn$_invoke$arity$1(self__.store),id,statecharts.service.wrap_listener(listener));
}));

(statecharts.service.Service.prototype.statecharts$service$IService$reload$arity$2 = (function (this$,fsm_){
var self__ = this;
var this$__$1 = this;
return (self__.fsm = statecharts.service.attach_fsm_scheduler(fsm_,self__.store,self__.clock));
}));

(statecharts.service.Service.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm","fsm",-1716512779,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),new cljs.core.Symbol(null,"store","store",-1142205747,null),cljs.core.with_meta(new cljs.core.Symbol(null,"running","running",-1099466666,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Symbol(null,"transition-opts","transition-opts",-1380672275,null)], null);
}));

(statecharts.service.Service.cljs$lang$type = true);

(statecharts.service.Service.cljs$lang$ctorStr = "statecharts.service/Service");

(statecharts.service.Service.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"statecharts.service/Service");
}));

/**
 * Positional factory function for statecharts.service/Service.
 */
statecharts.service.__GT_Service = (function statecharts$service$__GT_Service(fsm,store,running,clock,transition_opts){
return (new statecharts.service.Service(fsm,store,running,clock,transition_opts));
});

statecharts.service.default_opts = (function statecharts$service$default_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clock","clock",-894301127),statecharts.clock.wall_clock()], null);
});
statecharts.service.service = (function statecharts$service$service(var_args){
var G__96035 = arguments.length;
switch (G__96035) {
case 1:
return statecharts.service.service.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.service.service.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.service.service.cljs$core$IFn$_invoke$arity$1 = (function (fsm){
return statecharts.service.service.cljs$core$IFn$_invoke$arity$2(fsm,null);
}));

(statecharts.service.service.cljs$core$IFn$_invoke$arity$2 = (function (fsm,opts){
var map__96046 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([statecharts.service.default_opts(),opts], 0));
var map__96046__$1 = cljs.core.__destructure_map(map__96046);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96046__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var transition_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96046__$1,new cljs.core.Keyword(null,"transition-opts","transition-opts",1273763494));
var store = statecharts.store.single_store();
return (new statecharts.service.Service(statecharts.service.attach_fsm_scheduler(fsm,store,clock),store,false,clock,transition_opts));
}));

(statecharts.service.service.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=statecharts.service.js.map
