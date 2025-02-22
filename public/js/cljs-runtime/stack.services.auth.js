goog.provide('stack.services.auth');
stack.services.auth.Session = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"map","map",1371690461)], null);
stack.services.auth.initial_state = null;
var G__97817_98028 = new cljs.core.Keyword(null,"auth-session","auth-session",208574324);
var G__97818_98029 = (function (db,_query_vector){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103)], null));
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__97817_98028,G__97818_98029) : stack.utils.dbfx.reg_sub.call(null, G__97817_98028,G__97818_98029));
var G__97831_98030 = new cljs.core.Keyword(null,"auth-set-session","auth-set-session",-1348786045);
var G__97832_98031 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__97834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103)], null);
return (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__97834) : stack.utils.dbfx.path.call(null, G__97834));
})()], null);
var G__97833_98032 = (function (p__97838,p__97839){
var map__97840 = p__97838;
var map__97840__$1 = cljs.core.__destructure_map(map__97840);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97840__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__97841 = p__97839;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97841,(0),null);
var session = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97841,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),session,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(session)?new cljs.core.Keyword(null,"auth-sign-in","auth-sign-in",913514741):new cljs.core.Keyword(null,"auth-sign-out","auth-sign-out",904626899))], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__97831_98030,G__97832_98031,G__97833_98032) : stack.utils.dbfx.reg_event_fx.call(null, G__97831_98030,G__97832_98031,G__97833_98032));
stack.services.auth.init = (function stack$services$auth$init(enable){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.auth";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.auth",new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/auth.cljs"], null),__ns,38,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/auth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,enable,null,null,null,null,null,null,null,null));
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

if(cljs.core.truth_(enable)){
return stack.utils.supabase.register_session_callback((function (p1__97850_SHARP_){
var G__97872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth-set-session","auth-set-session",-1348786045),p1__97850_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__97872) : stack.utils.dbfx.dispatch.call(null, G__97872));
}));
} else {
var G__97875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth-set-session","auth-set-session",-1348786045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-enabled","auth-enabled",-986025660),false], null)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__97875) : stack.utils.dbfx.dispatch.call(null, G__97875));
}
});
stack.services.auth.sign_out = (function stack$services$auth$sign_out(){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.services.auth";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.services.auth",new cljs.core.Keyword(null,"line","line",212345235),46,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/auth.cljs"], null),__ns,46,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/services/auth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"initiated",null,null,null,null,null,null,null,null));
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

return stack.utils.supabase.sign_out();
});
stack.services.auth.ui_component = stack.utils.supabase.auth_component;
stack.services.auth.wrap_layout = (function stack$services$auth$wrap_layout(props__46991__auto__){
var props97916 = uix.core.glue_args(props__46991__auto__);
var vec__97969 = [props97916];
var map__97972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97969,(0),null);
var map__97972__$1 = cljs.core.__destructure_map(map__97972);
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97972__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98063 = stack.services.auth.wrap_layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98063)){
var f__46909__auto___98065 = temp__5823__auto___98063;
(f__46909__auto___98065.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98065.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98065.call(null, ));
} else {
}
} else {
}

var session = (function (){var G__97982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth-session","auth-session",208574324)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__97982) : stack.utils.dbfx.use_sub.call(null, G__97982));
})();
if(cljs.core.truth_(session)){
return uix.compiler.alpha.component_element(layout,[null],[]);
} else {
return uix.compiler.alpha.component_element(stack.services.auth.ui_component,[null],[]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97991 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97992 = stack.services.auth.wrap_layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97992);

try{if(((cljs.core.map_QMARK_(props97916)) || ((props97916 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97916)].join(''),"\n","(clojure.core/or (clojure.core/map? props97916) (clojure.core/nil? props97916))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97991);
}} else {
return f__46992__auto__();
}
});

(stack.services.auth.wrap_layout.uix_component_QMARK_ = true);

(stack.services.auth.wrap_layout.displayName = "stack.services.auth/wrap-layout");

Object.defineProperty(stack.services.auth.wrap_layout,"name",(function (){var obj98007 = ({"value":"stack.services.auth/wrap-layout"});
return obj98007;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98083 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98083.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98083.cljs$core$IFn$_invoke$arity$4(stack.services.auth.wrap_layout,"(dbfx/use-sub [:auth-session])",null,null) : sig__46918__auto___98083.call(null, stack.services.auth.wrap_layout,"(dbfx/use-sub [:auth-session])",null,null));

window.uix.dev.register_BANG_(stack.services.auth.wrap_layout,stack.services.auth.wrap_layout.displayName);

(stack.services.auth.wrap_layout.fast_refresh_signature = sig__46918__auto___98083);
} else {
}
} else {
}


//# sourceMappingURL=stack.services.auth.js.map
