goog.provide('stack.services.webserial');
stack.services.webserial.serial_event_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__95016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-term","serial-term",-1183493149),new cljs.core.Keyword(null,"events","events",1792552201)], null);
return (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__95016) : stack.utils.dbfx.path.call(null, G__95016));
})(),(stack.utils.dbfx.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timestamp","timestamp",579478971)) : stack.utils.dbfx.inject_cofx.call(null, new cljs.core.Keyword(null,"timestamp","timestamp",579478971)))], null);
stack.services.webserial.append_event = (function stack$services$webserial$append_event(events,p__95024){
var map__95028 = p__95024;
var map__95028__$1 = cljs.core.__destructure_map(map__95028);
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95028__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95028__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var bytes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95028__$1,new cljs.core.Keyword(null,"bytes","bytes",1175866680));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(events,timestamp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"byte-encoding","byte-encoding",790125729),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null)], null));
});
var G__95034_95321 = new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833);
var G__95035_95322 = stack.services.webserial.serial_event_interceptors;
var G__95036_95323 = (function (p__95037,p__95038){
var map__95041 = p__95037;
var map__95041__$1 = cljs.core.__destructure_map(map__95041);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95041__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__95042 = p__95038;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95042,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95042,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),stack.services.webserial.append_event(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-tx","webserial-tx",1964533739),bytes], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__95034_95321,G__95035_95322,G__95036_95323) : stack.utils.dbfx.reg_event_fx.call(null, G__95034_95321,G__95035_95322,G__95036_95323));
var G__95050_95329 = new cljs.core.Keyword(null,"serial-rx","serial-rx",1773580858);
var G__95051_95330 = stack.services.webserial.serial_event_interceptors;
var G__95052_95331 = (function (p__95055,p__95056){
var map__95058 = p__95055;
var map__95058__$1 = cljs.core.__destructure_map(map__95058);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95058__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95058__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__95059 = p__95056;
var _event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95059,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95059,(1),null);
var prev_event = cljs.core.last(cljs.core.vals(db));
var ongoing = (((!((prev_event == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$2(prev_event,prev_event),new cljs.core.Keyword(null,"rx","rx",1627208482))));
var ts = ((ongoing)?new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(prev_event):timestamp);
var data = ((ongoing)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(prev_event))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bytes)].join(''):bytes);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),stack.services.webserial.append_event(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),ts,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"bytes","bytes",1175866680),data], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-rx","webserial-rx",1169545588),null], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__95050_95329,G__95051_95330,G__95052_95331) : stack.utils.dbfx.reg_event_fx.call(null, G__95050_95329,G__95051_95330,G__95052_95331));
var G__95063_95335 = new cljs.core.Keyword(null,"serial-data","serial-data",-1018828038);
var G__95064_95336 = (function (db,_){
return new cljs.core.Keyword(null,"serial-term","serial-term",-1183493149).cljs$core$IFn$_invoke$arity$1(db);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__95063_95335,G__95064_95336) : stack.utils.dbfx.reg_sub.call(null, G__95063_95335,G__95064_95336));
var G__95065_95339 = new cljs.core.Keyword(null,"serial-events","serial-events",-1561306104);
var G__95066_95340 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__95067_95341 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-data","serial-data",-1018828038)], null);
var G__95068_95342 = (function (serial_state,_){
return new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(serial_state);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__95065_95339,G__95066_95340,G__95067_95341,G__95068_95342) : stack.utils.dbfx.reg_sub.call(null, G__95065_95339,G__95066_95340,G__95067_95341,G__95068_95342));
stack.services.webserial.default_context = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"serial-options","serial-options",914523235),stack.utils.webserial.DEFAULTS,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675),"\r"], null);
stack.services.webserial.controller = (function (){var G__95081 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"webserial-service","webserial-service",-1485028593),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.Keyword(null,"context","context",-830191113),stack.services.webserial.default_context,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"webserial_pending","webserial_pending",-523030494),new cljs.core.Keyword(null,"entry","entry",505168823),(function (){var G__95085 = (function (ctx,e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),105,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,105,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Resetting port assignment",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var G__95100_95360 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-disconnected","webserial-disconnected",997293008)], null);
(stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95100_95360) : stack.utils.dbfx.dispatch.call(null, G__95100_95360));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"port","port",1534937262),null);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__95085) : statecharts.core.assign.call(null, G__95085));
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"webserial-option","webserial-option",-599976901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__95104 = (function (ctx,p__95106){
var map__95107 = p__95106;
var map__95107__$1 = cljs.core.__destructure_map(map__95107);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95107__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var key = cljs.core.first(data);
var value_text = cljs.core.second(data);
var value = (cljs.core.truth_(cljs.core.re_matches(/\d+/,value_text))?(value_text | (0)):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value_text));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),117,new cljs.core.Keyword(null,"column","column",2078222095),36,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,117,36,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-options","serial-options",914523235),key], null),value);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__95104) : statecharts.core.assign.call(null, G__95104));
})()], null),new cljs.core.Keyword(null,"webserial-disconnected","webserial-disconnected",997293008),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (_ctx,_e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),120,new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,120,48,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Ignoring initial disconnection",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();
})], null),new cljs.core.Keyword(null,"webserial-port-opened","webserial-port-opened",-961627067),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webserial_pending","webserial_pending",-523030494),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var G__95153 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((stack.utils.webserial.is_supported_QMARK_())?new cljs.core.Keyword(null,"webserial-check-passed","webserial-check-passed",2073632322):new cljs.core.Keyword(null,"webserial-check-failed","webserial-check-failed",1161198495))], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95153) : stack.utils.dbfx.dispatch.call(null, G__95153));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"webserial-check-passed","webserial-check-passed",2073632322),new cljs.core.Keyword(null,"port-pending","port-pending",-1314913267),new cljs.core.Keyword(null,"webserial-check-failed","webserial-check-failed",1161198495),new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408)], null)], null),new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"port-pending","port-pending",-1314913267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),144,new cljs.core.Keyword(null,"column","column",2078222095),18,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,144,18,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["PORT PENDING",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-has-port","webserial-has-port",-299202090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__95168 = (function (ctx,e){
var port = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
port.addEventListener("disconnect",(function (){
var G__95172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-disconnected","webserial-disconnected",997293008),port], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95172) : stack.utils.dbfx.dispatch.call(null, G__95172));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"port","port",1534937262),port);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__95168) : statecharts.core.assign.call(null, G__95168));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"opening_port","opening_port",-1837220942)], null)], null)], null),new cljs.core.Keyword(null,"opening_port","opening_port",-1837220942),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),158,new cljs.core.Keyword(null,"column","column",2078222095),18,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,158,18,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["WAITING TO OPEN PORT",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx)].join(''),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return stack.utils.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"serial-options","serial-options",914523235).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
var G__95204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-opened","webserial-port-opened",-961627067)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95204) : stack.utils.dbfx.dispatch.call(null, G__95204));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__95206 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-open-failure","webserial-port-open-failure",882438944)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95206) : stack.utils.dbfx.dispatch.call(null, G__95206));
})], 0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-port-open-failure","webserial-port-open-failure",882438944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (ctx,e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.services.webserial";
var __id = new cljs.core.Keyword("stack.services.webserial","port-open-failure","stack.services.webserial/port-open-failure",-360750231);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),163,new cljs.core.Keyword(null,"column","column",2078222095),65,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,163,65,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),ctx,new cljs.core.Keyword(null,"error","error",-978969032),e], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();
})], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"connected","connected",-169833045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx);
var port_id = stack.utils.webserial.describe_port(port);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),173,new cljs.core.Keyword(null,"column","column",2078222095),18,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,173,18,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port-id","port-id",-869443091),port_id], null),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return stack.utils.webserial.go_read_text(port,(function (p1__95074_SHARP_){
var G__95238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-rx","serial-rx",1773580858),p1__95074_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95238) : stack.utils.dbfx.dispatch.call(null, G__95238));
}));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"webserial-tx","webserial-tx",1964533739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (context,p__95253){
var map__95254 = p__95253;
var map__95254__$1 = cljs.core.__destructure_map(map__95254);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95254__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__95261 = context;
var map__95261__$1 = cljs.core.__destructure_map(map__95261);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95261__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var line_terminator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95261__$1,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675));
var cmd = cljs.core.first(data);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),180,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,180,26,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,cmd,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return stack.utils.webserial.write(port,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_terminator)].join(''));
})], null),new cljs.core.Keyword(null,"webserial-forget-port","webserial-forget-port",-1172893861),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.Keyword(null,"webserial-disconnected","webserial-disconnected",997293008),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.webserial";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),188,new cljs.core.Keyword(null,"column","column",2078222095),16,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,188,16,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"TODO: Forget request received - IMPLEMENT ME",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx);
var port_info = stack.utils.webserial.describe_port(port);
return stack.utils.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic(port,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
var G__95298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-forgotten","webserial-port-forgotten",-1426439407)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95298) : stack.utils.dbfx.dispatch.call(null, G__95298));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.services.webserial";
var __id = new cljs.core.Keyword("stack.services.webserial","forget-port-failure","stack.services.webserial/forget-port-failure",-1813166123);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (function (){var signal__42279__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.webserial",new cljs.core.Keyword(null,"line","line",212345235),192,new cljs.core.Keyword(null,"column","column",2078222095),54,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs"], null),__ns,192,54,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),port_info], null),null,null,null,null,null,null,null,null,null));
return cljs.core.reduce_kv(cljs.core.assoc,signal__42279__auto__,signal__42279__auto__.kvs);
})();
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();
})], null)], 0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-port-forgotten","webserial-port-forgotten",-1426439407),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__95081) : statecharts.core.machine.call(null, G__95081));
})();
stack.services.webserial.init = (function stack$services$webserial$init(){
return stack.utils.hsm.register(stack.services.webserial.controller);
});

//# sourceMappingURL=stack.services.webserial.js.map
