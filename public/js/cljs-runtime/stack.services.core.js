goog.provide('stack.services.core');
stack.services.core.root_path_interceptor = (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"services","services",970478783)) : stack.utils.dbfx.path.call(null, new cljs.core.Keyword(null,"services","services",970478783)));
stack.services.core.path_interceptor = (function stack$services$core$path_interceptor(service_path){
var G__94038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"services","services",970478783)], null);
var G__94039 = service_path;
return (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$2(G__94038,G__94039) : stack.utils.dbfx.path.call(null, G__94038,G__94039));
});
stack.services.core.init_reframe_integration = (function stack$services$core$init_reframe_integration(){
var G__94041_94085 = new cljs.core.Keyword(null,"services","services",970478783);
var G__94042_94086 = (function (db,_query_v){
return new cljs.core.Keyword(null,"services","services",970478783).cljs$core$IFn$_invoke$arity$1(db);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__94041_94085,G__94042_94086) : stack.utils.dbfx.reg_sub.call(null, G__94041_94085,G__94042_94086));

var G__94043 = new cljs.core.Keyword(null,"init-service","init-service",-596616661);
var G__94044 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack.services.core.root_path_interceptor,stack.utils.dbfx.unwrap], null);
var G__94045 = (function (db,p__94050){
var map__94053 = p__94050;
var map__94053__$1 = cljs.core.__destructure_map(map__94053);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94053__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.services.core";
var __id = new cljs.core.Keyword(null,"service-init-ok","service-init-ok",794336503);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.core",new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/core.cljs"], null),__ns,24,6,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/core.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),data], null),null,null,null,null,null,null,null,null,null,null));
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

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),data);
});
return (stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__94043,G__94044,G__94045) : stack.utils.dbfx.reg_event_db.call(null, G__94043,G__94044,G__94045));
});
/**
 * Define a subscription for the state of a given service
 */
stack.services.core.register = (function stack$services$core$register(service_id){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.services.core";
var __id = new cljs.core.Keyword("stack.services.core","service-register-ok","stack.services.core/service-register-ok",1258382790);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.core",new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/core.cljs"], null),__ns,33,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/core.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),service_id], null),null,null,null,null,null,null,null,null,null,null));
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

var G__94067 = service_id;
var G__94068 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__94069 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"services","services",970478783)], null);
var G__94070 = (function (service_data,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(service_data,service_id);
});
return (stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__94067,G__94068,G__94069,G__94070) : stack.utils.dbfx.reg_sub.call(null, G__94067,G__94068,G__94069,G__94070));
});

//# sourceMappingURL=stack.services.core.js.map
