goog.provide('stack.utils.router');
stack.utils.router.start_BANG_ = (function stack$utils$router$start_BANG_(routes,dispatch_callback){
return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(routes),(function (match){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.router";
var __id = new cljs.core.Keyword("stack.utils.router","route-match","stack.utils.router/route-match",-1544309541);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.router",new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/router.cljs"], null),__ns,17,6,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/router.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,match,null,null,null,null,null,null,null,null,null,null));
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

return (dispatch_callback.cljs$core$IFn$_invoke$arity$1 ? dispatch_callback.cljs$core$IFn$_invoke$arity$1(match) : dispatch_callback.call(null, match));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
stack.utils.router._EQ__GT_link = (function stack$utils$router$_EQ__GT_link(p__98754){
var vec__98755 = p__98754;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98755,(0),null);
var map__98758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98755,(1),null);
var map__98758__$1 = cljs.core.__destructure_map(map__98758);
var _attrs = map__98758__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98758__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98758__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98758__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
});
stack.utils.router._EQ__GT_links = (function stack$utils$router$_EQ__GT_links(routes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(stack.utils.router._EQ__GT_link,routes));
});

//# sourceMappingURL=stack.utils.router.js.map
