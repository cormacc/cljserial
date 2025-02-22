goog.provide('preload');
uix.dev.init_fast_refresh_BANG_();
preload.refresh = (function preload$refresh(){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "preload";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"preload",new cljs.core.Keyword(null,"line","line",212345235),8,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/dev/src/preload.cljs"], null),__ns,8,3,"file:/home/cormacc/nmd/products/connect/portal/dev/src/preload.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"fast refresh",null,null,null,null,null,null,null,null));
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

return uix.dev.refresh_BANG_();
});

//# sourceMappingURL=preload.js.map
