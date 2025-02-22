goog.provide('stack.statecharts.webserial');
stack.statecharts.webserial.receive_bytes = (function stack$statecharts$webserial$receive_bytes(events,bytes){
var prev_event = cljs.core.last(cljs.core.vals(events));
var ongoing = (((!((prev_event == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$2(prev_event,prev_event),new cljs.core.Keyword(null,"rx","rx",1627208482))));
var ts = ((ongoing)?new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(prev_event):Date.now());
var data = ((ongoing)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(prev_event))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bytes)].join(''):bytes);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(events,ts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),ts,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"byte-encoding","byte-encoding",790125729),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bytes","bytes",1175866680),data], null)], null));
});
stack.statecharts.webserial.default_context = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"port-description","port-description",-253080342),"NONE",new cljs.core.Keyword(null,"port-config","port-config",654923145),stack.schema.webserial.DEFAULTS,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675),"\r",new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.sorted_map()], null);
stack.statecharts.webserial.controller = (function (){var G__96231 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.Keyword(null,"context","context",-830191113),stack.statecharts.webserial.default_context,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"webserial_pending","webserial_pending",-523030494),new cljs.core.Keyword(null,"entry","entry",505168823),(function (){var G__96239 = (function (ctx,_e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),59,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,59,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Resetting port assignment",null,null,null,null,null,null,null,null));
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

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"port","port",1534937262),null),new cljs.core.Keyword(null,"port-description","port-description",-253080342),"NONE");
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__96239) : statecharts.core.assign.call(null, G__96239));
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port-disconnected","port-disconnected",-805709288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (_ctx,_e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
var __id = null;
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),64,new cljs.core.Keyword(null,"column","column",2078222095),43,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,64,43,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Ignoring initial disconnection",null,null,null,null,null,null,null,null));
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
})], null),new cljs.core.Keyword(null,"port-opened","port-opened",-510347024),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webserial_pending","webserial_pending",-523030494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),stack.apis.webserial.is_supported_QMARK_,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"port-pending","port-pending",-1314913267)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),(function (){
return (!(stack.apis.webserial.is_supported_QMARK_()));
}),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408)], null)], null)], null),new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"port-pending","port-pending",-1314913267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
var __id = null;
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),77,new cljs.core.Keyword(null,"column","column",2078222095),18,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,77,18,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["PORT PENDING",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),null,null,null,null,null,null,null,null));
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
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-port","request-port",278673489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (_ctx,p__96279){
var map__96281 = p__96279;
var map__96281__$1 = cljs.core.__destructure_map(map__96281);
var _evt = map__96281__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96281__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var vendor_id = (cljs.core.first(data) | (0));
return stack.apis.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vendor-id","vendor-id",904935999),vendor_id,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__96227_SHARP_){
return stack.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"has-port","has-port",-211221493),p1__96227_SHARP_], null));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
var __id = null;
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),85,new cljs.core.Keyword(null,"column","column",2078222095),56,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,85,56,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"No port access granted",null,null,null,null,null,null,null,null));
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
})], 0));
})], null),new cljs.core.Keyword(null,"has-port","has-port",-211221493),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__96294 = (function (ctx,p__96295){
var map__96297 = p__96295;
var map__96297__$1 = cljs.core.__destructure_map(map__96297);
var _evt = map__96297__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96297__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var port = cljs.core.first(data);
port.addEventListener("disconnect",(function (){
return stack.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"port-disconnected","port-disconnected",-805709288)], null));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"port","port",1534937262),port),new cljs.core.Keyword(null,"port-description","port-description",-253080342),stack.apis.webserial.describe_port(port));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__96294) : statecharts.core.assign.call(null, G__96294));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"opening_port","opening_port",-1837220942)], null)], null)], null),new cljs.core.Keyword(null,"opening_port","opening_port",-1837220942),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
var __id = null;
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),97,new cljs.core.Keyword(null,"column","column",2078222095),18,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,97,18,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["WAITING TO OPEN PORT",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),null,null,null,null,null,null,null,null));
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

return stack.apis.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"port-config","port-config",654923145).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return stack.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"port-opened","port-opened",-510347024)], null));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return stack.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"port-open-failure","port-open-failure",-262604469)], null));
})], 0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port-open-failure","port-open-failure",-262604469),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (ctx,e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.statecharts.webserial";
var __id = new cljs.core.Keyword("stack.statecharts.webserial","port-open-failure","stack.statecharts.webserial/port-open-failure",1854566957);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),102,new cljs.core.Keyword(null,"column","column",2078222095),55,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,102,55,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),ctx,new cljs.core.Keyword(null,"error","error",-978969032),e], null),null,null,null,null,null,null,null,null,null,null));
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
})], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"connected","connected",-169833045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,_e){
var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx);
var port_id = stack.apis.webserial.describe_port(port);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),109,new cljs.core.Keyword(null,"column","column",2078222095),18,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,109,18,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port-id","port-id",-869443091),port_id], null),null,null,null,null,null,null,null,null));
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

return stack.apis.webserial.go_read_text(port,(function (p1__96229_SHARP_){
return stack.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"read","read",1140058661),p1__96229_SHARP_], null));
}));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"write","write",-1857649168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__96342 = (function (context,p__96344){
var map__96346 = p__96344;
var map__96346__$1 = cljs.core.__destructure_map(map__96346);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96346__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__96351 = context;
var map__96351__$1 = cljs.core.__destructure_map(map__96351);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96351__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var line_terminator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96351__$1,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675));
var cmd = cljs.core.first(data);
var timestamp = Date.now();
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),117,new cljs.core.Keyword(null,"column","column",2078222095),38,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,117,38,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,cmd,null,null,null,null,null,null,null,null));
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

stack.apis.webserial.write(port,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_terminator)].join(''));

return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),timestamp], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"byte-encoding","byte-encoding",790125729),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bytes","bytes",1175866680),cmd], null)], null));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__96342) : statecharts.core.assign.call(null, G__96342));
})()], null),new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__96356 = (function (p__96357,p__96358){
var map__96360 = p__96357;
var map__96360__$1 = cljs.core.__destructure_map(map__96360);
var context = map__96360__$1;
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96360__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var map__96361 = p__96358;
var map__96361__$1 = cljs.core.__destructure_map(map__96361);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96361__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var bytes = cljs.core.first(data);
var updated_events = stack.statecharts.webserial.receive_bytes(events,bytes);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"events","events",1792552201),updated_events);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__96356) : statecharts.core.assign.call(null, G__96356));
})()], null),new cljs.core.Keyword(null,"forget-port","forget-port",-1597064846),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.Keyword(null,"port-disconnected","port-disconnected",-805709288),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,_event){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.statecharts.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),136,new cljs.core.Keyword(null,"column","column",2078222095),16,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,136,16,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"TODO: Forget request received - IMPLEMENT ME",null,null,null,null,null,null,null,null));
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

var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx);
var port_info = stack.apis.webserial.describe_port(port);
return stack.apis.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic(port,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return stack.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"port-forgotten","port-forgotten",1813661525)], null));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.statecharts.webserial";
var __id = new cljs.core.Keyword("stack.statecharts.webserial","forget-port-failure","stack.statecharts.webserial/forget-port-failure",-2467447);
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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

var signal__42401__auto__ = (function (){var signal__42400__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.statecharts.webserial",new cljs.core.Keyword(null,"line","line",212345235),140,new cljs.core.Keyword(null,"column","column",2078222095),54,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs"], null),__ns,140,54,"file:/home/cormacc/nmd/products/connect/portal/src/stack/statecharts/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),port_info], null),null,null,null,null,null,null,null,null,null));
return cljs.core.reduce_kv(cljs.core.assoc,signal__42400__auto__,signal__42400__auto__.kvs);
})();
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
})], null)], 0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port-forgotten","port-forgotten",1813661525),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__96231) : statecharts.core.machine.call(null, G__96231));
})();
stack.statecharts.webserial.init = (function stack$statecharts$webserial$init(){
return (statecharts.core.initialize.cljs$core$IFn$_invoke$arity$2 ? statecharts.core.initialize.cljs$core$IFn$_invoke$arity$2(stack.statecharts.webserial.controller,stack.statecharts.webserial.default_context) : statecharts.core.initialize.call(null, stack.statecharts.webserial.controller,stack.statecharts.webserial.default_context));
});

//# sourceMappingURL=stack.statecharts.webserial.js.map
