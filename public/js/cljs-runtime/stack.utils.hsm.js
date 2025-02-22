goog.provide('stack.utils.hsm');
stack.utils.hsm.get_state = (function stack$utils$hsm$get_state(context){
return new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(context);
});
stack.utils.hsm.in_state = (function stack$utils$hsm$in_state(current_state,match_state){
return cljs.core.some((function (p1__96316_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match_state,p1__96316_SHARP_);
}),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state], null)));
});
stack.utils.hsm.get_state_events = (function stack$utils$hsm$get_state_events(state){
if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"on","on",173873944))){
return cljs.core.keys(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(state));
} else {
return null;
}
});
stack.utils.hsm.find_machine_events = (function stack$utils$hsm$find_machine_events(top_state){
return cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,stack.utils.collections.find_all(top_state,new cljs.core.Keyword(null,"on","on",173873944)))));
});
stack.utils.hsm.recurse_state_events = (function stack$utils$hsm$recurse_state_events(var_args){
var G__96335 = arguments.length;
switch (G__96335) {
case 2:
return stack.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stack.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stack.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$2 = (function (parent_state,state_v){
return stack.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$3(parent_state,cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_v], null)),cljs.core.PersistentVector.EMPTY);
}));

(stack.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$3 = (function (parent_state,state_v,event_v){
while(true){
if(cljs.core.empty_QMARK_(state_v)){
return cljs.core.set(event_v);
} else {
var vec__96347 = state_v;
var seq__96348 = cljs.core.seq(vec__96347);
var first__96349 = cljs.core.first(seq__96348);
var seq__96348__$1 = cljs.core.next(seq__96348);
var state_v_first = first__96349;
var state_v_rest = seq__96348__$1;
var next_state = (function (){var G__96352 = new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(parent_state);
return (state_v_first.cljs$core$IFn$_invoke$arity$1 ? state_v_first.cljs$core$IFn$_invoke$arity$1(G__96352) : state_v_first.call(null, G__96352));
})();
var event_v_new = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,event_v,stack.utils.hsm.get_state_events(next_state));
var G__96469 = next_state;
var G__96470 = state_v_rest;
var G__96471 = event_v_new;
parent_state = G__96469;
state_v = G__96470;
event_v = G__96471;
continue;
}
break;
}
}));

(stack.utils.hsm.recurse_state_events.cljs$lang$maxFixedArity = 3);

stack.utils.hsm.handled_events = (function stack$utils$hsm$handled_events(var_args){
var G__96354 = arguments.length;
switch (G__96354) {
case 1:
return stack.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stack.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stack.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$1 = (function (machine){
return stack.utils.hsm.find_machine_events(machine);
}));

(stack.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$2 = (function (machine,state_v){
return stack.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$2(machine,state_v);
}));

(stack.utils.hsm.handled_events.cljs$lang$maxFixedArity = 2);

stack.utils.hsm.can_handle = (function stack$utils$hsm$can_handle(machine,state_v,event_id){
return cljs.core.contains_QMARK_(stack.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$2(machine,state_v),event_id);
});
stack.utils.hsm.sub_name = (function stack$utils$hsm$sub_name(hsm_id,sub_tag){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(hsm_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_tag)].join(''));
});
stack.utils.hsm.sub_state_name = (function stack$utils$hsm$sub_state_name(hsm_id){
return stack.utils.hsm.sub_name(hsm_id,"state");
});
/**
 * Define a subscription for the state of a given statemachine ID
 */
stack.utils.hsm.reg_sub_state = (function stack$utils$hsm$reg_sub_state(hsm_id){
var sub_name = stack.utils.hsm.sub_state_name(hsm_id);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.hsm";
var __id = new cljs.core.Keyword("stack.utils.hsm","reg-sub-state","stack.utils.hsm/reg-sub-state",-1637703420);
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.hsm",new cljs.core.Keyword(null,"line","line",212345235),65,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/hsm.cljs"], null),__ns,65,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/hsm.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hsm-id","hsm-id",-446499690),hsm_id], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var G__96386 = sub_name;
var G__96387 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__96388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsm_id], null);
var G__96389 = (function (hsm_context,_){
return stack.utils.hsm.get_state(hsm_context);
});
return (stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__96386,G__96387,G__96388,G__96389) : stack.utils.dbfx.reg_sub.call(null, G__96386,G__96387,G__96388,G__96389));
});
stack.utils.hsm.register_handler = (function stack$utils$hsm$register_handler(p__96394){
var map__96395 = p__96394;
var map__96395__$1 = cljs.core.__destructure_map(map__96395);
var machine = map__96395__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96395__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.hsm";
var __id = null;
var __level = new cljs.core.Keyword(null,"info","info",-317069002);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.hsm",new cljs.core.Keyword(null,"line","line",212345235),74,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/hsm.cljs"], null),__ns,74,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/hsm.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),null,"Registering handler...",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var G__96429 = id;
var G__96430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack.services.core.path_interceptor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null))], null);
var G__96431 = (function (db,p__96432){
var vec__96434 = p__96432;
var seq__96435 = cljs.core.seq(vec__96434);
var first__96436 = cljs.core.first(seq__96435);
var seq__96435__$1 = cljs.core.next(seq__96435);
var _dispatch_id = first__96436;
var first__96436__$1 = cljs.core.first(seq__96435__$1);
var seq__96435__$2 = cljs.core.next(seq__96435__$1);
var event_type = first__96436__$1;
var event_params = seq__96435__$2;
var G__96439 = machine;
var G__96440 = db;
var G__96441 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),event_type,new cljs.core.Keyword(null,"data","data",-232669377),event_params], null);
return (statecharts.core.transition.cljs$core$IFn$_invoke$arity$3 ? statecharts.core.transition.cljs$core$IFn$_invoke$arity$3(G__96439,G__96440,G__96441) : statecharts.core.transition.call(null, G__96439,G__96440,G__96441));
});
return (stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__96429,G__96430,G__96431) : stack.utils.dbfx.reg_event_db.call(null, G__96429,G__96430,G__96431));
});
stack.utils.hsm.register = (function stack$utils$hsm$register(machine){
var hsm_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(machine);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.hsm";
var __id = new cljs.core.Keyword("stack.utils.hsm","register","stack.utils.hsm/register",-551031051);
var __level = new cljs.core.Keyword(null,"info","info",-317069002);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.hsm",new cljs.core.Keyword(null,"line","line",212345235),85,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/hsm.cljs"], null),__ns,85,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/hsm.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hsm-id","hsm-id",-446499690),hsm_id], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

stack.services.core.register(hsm_id);

stack.utils.hsm.reg_sub_state(hsm_id);

stack.utils.hsm.register_handler(machine);

var G__96452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-service","init-service",-596616661),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),hsm_id,new cljs.core.Keyword(null,"data","data",-232669377),(statecharts.core.initialize.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.initialize.cljs$core$IFn$_invoke$arity$1(machine) : statecharts.core.initialize.call(null, machine))], null)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__96452) : stack.utils.dbfx.dispatch.call(null, G__96452));
});
stack.utils.hsm.use_sub_state = (function stack$utils$hsm$use_sub_state(hsm_id){
var G__96457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack.utils.hsm.sub_state_name(hsm_id)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__96457) : stack.utils.dbfx.use_sub.call(null, G__96457));
});

//# sourceMappingURL=stack.utils.hsm.js.map
