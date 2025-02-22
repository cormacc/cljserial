goog.provide('connect.layout');
connect.layout.app_layout = (function connect$layout$app_layout(props__46991__auto__){
var props98188 = uix.core.glue_args(props__46991__auto__);
var vec__98189 = [props98188];
var map__98192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98189,(0),null);
var map__98192__$1 = cljs.core.__destructure_map(map__98192);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98192__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98192__$1,new cljs.core.Keyword(null,"view","view",1247994814));
var on_sign_out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98192__$1,new cljs.core.Keyword(null,"on-sign-out","on-sign-out",-1169646444));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98212 = connect.layout.app_layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98212)){
var f__46909__auto___98213 = temp__5823__auto___98212;
(f__46909__auto___98213.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98213.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98213.call(null, ));
} else {
}
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uix.compiler.alpha.component_element(stack.uix.appbar.appbar,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Lenire Connect",new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [uix.compiler.alpha.component_element(stack.uix.menus.theme_menu,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"themes","themes",-702786642),stack.utils.themes.all,new cljs.core.Keyword(null,"selected","selected",574897764),stack.utils.themes.default$,new cljs.core.Keyword(null,"on-change","on-change",-732046149),stack.utils.themes.select], null)],[]),uix.compiler.alpha.component_element(stack.uix.menus.language_menu,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"languages","languages",1471910331),stack.utils.i18n.supported_languages,new cljs.core.Keyword(null,"selected","selected",574897764),stack.utils.i18n.default_language_code,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "connect.layout";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"connect.layout",new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"column","column",2078222095),59,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/connect/layout.cljs"], null),__ns,26,59,"file:/home/cormacc/nmd/products/connect/portal/src/connect/layout.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,new cljs.core.Keyword(null,"info%","info%",-1542118920),null,null,null,null,null,null,null,null));
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
})], null)],[]),uix.compiler.alpha.component_element(stack.uix.menus.settings_menu,[null],[]),uix.compiler.alpha.component_element(stack.uix.menus.profile_menu,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-sign-out","on-sign-out",-1169646444),stack.services.auth.sign_out], null)],[])], null)], null)],[]),uix.compiler.aot._GT_el("main",[{'className':"flex-grow"}],[uix.compiler.alpha.component_element(view,[null],[])]),uix.compiler.alpha.component_element(stack.uix.statusbar.statusbar,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copyright","copyright",-1829660853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),(2024),new cljs.core.Keyword(null,"holder","holder",1786017528),"Neuromod Devices Ltd."], null)], null)],[])], null);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98198 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98199 = connect.layout.app_layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98199);

try{if(((cljs.core.map_QMARK_(props98188)) || ((props98188 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98188)].join(''),"\n","(clojure.core/or (clojure.core/map? props98188) (clojure.core/nil? props98188))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98198);
}} else {
return f__46992__auto__();
}
});

(connect.layout.app_layout.uix_component_QMARK_ = true);

(connect.layout.app_layout.displayName = "connect.layout/app-layout");

Object.defineProperty(connect.layout.app_layout,"name",(function (){var obj98204 = ({"value":"connect.layout/app-layout"});
return obj98204;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98225 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98225.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98225.cljs$core$IFn$_invoke$arity$4(connect.layout.app_layout,"",null,null) : sig__46918__auto___98225.call(null, connect.layout.app_layout,"",null,null));

window.uix.dev.register_BANG_(connect.layout.app_layout,connect.layout.app_layout.displayName);

(connect.layout.app_layout.fast_refresh_signature = sig__46918__auto___98225);
} else {
}
} else {
}


//# sourceMappingURL=connect.layout.js.map
