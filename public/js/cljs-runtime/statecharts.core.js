goog.provide('statecharts.core');
statecharts.core.machine = statecharts.impl.machine;
statecharts.core.initialize = statecharts.impl.initialize;
statecharts.core.transition = statecharts.impl.transition;
statecharts.core.assign = statecharts.impl.assign;
statecharts.core.service = statecharts.service.service;
statecharts.core.start = (function statecharts$core$start(service){
return statecharts.service.start(service);
});
statecharts.core.reload = (function statecharts$core$reload(service,fsm){
return statecharts.service.reload(service,fsm);
});
statecharts.core.send = (function statecharts$core$send(var_args){
var G__96090 = arguments.length;
switch (G__96090) {
case 2:
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return statecharts.core.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.core.send.cljs$core$IFn$_invoke$arity$2 = (function (service,event){
return statecharts.core.send.cljs$core$IFn$_invoke$arity$3(service,event,null);
}));

(statecharts.core.send.cljs$core$IFn$_invoke$arity$3 = (function (service,event,_){
return statecharts.service.send(service,event);
}));

(statecharts.core.send.cljs$lang$maxFixedArity = 3);

statecharts.core.state = (function statecharts$core$state(service){
return statecharts.service.state(service);
});
statecharts.core.value = (function statecharts$core$value(service){
return new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(statecharts.core.state(service));
});
statecharts.core.matches = (function statecharts$core$matches(state,value){
var v1 = statecharts.utils.ensure_vector(((cljs.core.map_QMARK_(state))?new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(state):state));
var v2 = statecharts.utils.ensure_vector(value);
return statecharts.impl.is_prefix_QMARK_(v2,v1);
});
/**
 * Provide a pathway to modify the state of a state machine directly
 *   without going through any event.
 * 
 *   Return the updated context.
 *   
 */
statecharts.core.update_state = (function statecharts$core$update_state(var_args){
var args__5732__auto__ = [];
var len__5726__auto___96171 = arguments.length;
var i__5727__auto___96172 = (0);
while(true){
if((i__5727__auto___96172 < len__5726__auto___96171)){
args__5732__auto__.push((arguments[i__5727__auto___96172]));

var G__96173 = (i__5727__auto___96172 + (1));
i__5727__auto___96172 = G__96173;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return statecharts.core.update_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(statecharts.core.update_state.cljs$core$IFn$_invoke$arity$variadic = (function (service,f,args){
var state = service.state;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__96130_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__96130_SHARP_,args);
}));
}));

(statecharts.core.update_state.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(statecharts.core.update_state.cljs$lang$applyTo = (function (seq96136){
var G__96137 = cljs.core.first(seq96136);
var seq96136__$1 = cljs.core.next(seq96136);
var G__96138 = cljs.core.first(seq96136__$1);
var seq96136__$2 = cljs.core.next(seq96136__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96137,G__96138,seq96136__$2);
}));


//# sourceMappingURL=statecharts.core.js.map
