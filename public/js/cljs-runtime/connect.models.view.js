goog.provide('connect.models.view');
connect.models.view.app_storage_id = "connect";
connect.models.view.default_db = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"session","session",1008279103),null,new cljs.core.Keyword(null,"route-match","route-match",-1450985937),null,new cljs.core.Keyword(null,"cd-info","cd-info",1722919170),connect.services.mbt_cd.initial_state,new cljs.core.Keyword(null,"serial-term","serial-term",-1183493149),stack.utils.term.new_terminal_store(),new cljs.core.Keyword(null,"domain-db","domain-db",143141236),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),new cljs.core.Keyword(null,"all","all",892129742)], null);
var G__97166_97298 = new cljs.core.Keyword(null,"init-domain-db","init-domain-db",-1432442318);
var G__97167_97299 = (function (_){
return stack.utils.model.embed_bitemporal_db(connect.models.view.app_storage_id,connect.models.domain.schema);
});
(stack.utils.dbfx.reg_fx.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_fx.cljs$core$IFn$_invoke$arity$2(G__97166_97298,G__97167_97299) : stack.utils.dbfx.reg_fx.call(null, G__97166_97298,G__97167_97299));
var G__97170_97303 = new cljs.core.Keyword(null,"serial-events","serial-events",-1561306104);
var G__97171_97304 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__97172_97305 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(stack.statecharts.webserial.controller)], null);
var G__97173_97306 = (function (webserial_state,_){
return new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(webserial_state);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__97170_97303,G__97171_97304,G__97172_97305,G__97173_97306) : stack.utils.dbfx.reg_sub.call(null, G__97170_97303,G__97171_97304,G__97172_97305,G__97173_97306));
var G__97182_97309 = new cljs.core.Keyword(null,"init-app","init-app",1160055408);
var G__97183_97310 = (function (_cofx,_e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "connect.models.view";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"connect.models.view",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),4,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/connect/models/view.cljs"], null),__ns,62,4,"file:/home/cormacc/nmd/products/connect/portal/src/connect/models/view.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Initialising",null,null,null,null,null,null,null,null));
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),connect.models.view.default_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-domain-db","init-domain-db",-1432442318)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__97182_97309,G__97183_97310) : stack.utils.dbfx.reg_event_fx.call(null, G__97182_97309,G__97183_97310));
var G__97284_97321 = new cljs.core.Keyword(null,"devices","devices",1929380599);
var G__97285_97322 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__97286_97323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-data","domain-data",-278275019)], null);
var G__97287_97324 = (function (ddb,_){
return connect.models.domain.get_devices(ddb);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__97284_97321,G__97285_97322,G__97286_97323,G__97287_97324) : stack.utils.dbfx.reg_sub.call(null, G__97284_97321,G__97285_97322,G__97286_97323,G__97287_97324));

//# sourceMappingURL=connect.models.view.js.map
