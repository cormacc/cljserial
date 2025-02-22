goog.provide('connect.core');
cljs.core.enable_console_print_BANG_();
taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("default","console","default/console",-1389954628),(function (){var G__99044 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.telemere.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$1 ? taoensso.telemere.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$1(G__99044) : taoensso.telemere.handler_COLON_console_raw.call(null, G__99044));
})());
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "connect.core";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"connect.core",new cljs.core.Keyword(null,"line","line",212345235),40,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/connect/core.cljs"], null),__ns,40,1,"file:/home/cormacc/nmd/products/connect/portal/src/connect/core.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Logging initialised!",null,null,null,null,null,null,null,null));
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
connect.core.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("connect.core","serial-terminal","connect.core/serial-terminal",-1870984204),new cljs.core.Keyword(null,"title","title",636505583),"WebSerial",new cljs.core.Keyword(null,"view","view",1247994814),connect.pages.mbt_terminal.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/bt",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("connect.core","bt-terminal","connect.core/bt-terminal",-1728756567),new cljs.core.Keyword(null,"title","title",636505583),"WebBluetooth",new cljs.core.Keyword(null,"view","view",1247994814),stack.examples.re_frame.pages.bt_terminal.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/local-db",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("connect.core","local-db","connect.core/local-db",-1526120854),new cljs.core.Keyword(null,"title","title",636505583),"Database (local)",new cljs.core.Keyword(null,"view","view",1247994814),stack.examples.re_frame.pages.local_db.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/cloud-db",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("connect.core","cloud-db","connect.core/cloud-db",1221952235),new cljs.core.Keyword(null,"title","title",636505583),"Database (cloud)",new cljs.core.Keyword(null,"view","view",1247994814),stack.examples.re_frame.pages.cloud_db.layout_with_auth], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/cloud-filestore",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("connect.core","cloud-filestore","connect.core/cloud-filestore",1863300512),new cljs.core.Keyword(null,"title","title",636505583),"Filestore (cloud)",new cljs.core.Keyword(null,"view","view",1247994814),stack.examples.re_frame.pages.cloud_filestore.layout_with_auth], null)], null)], null);
connect.core.init = (function connect$core$init(){
stack.core.set_dispatch_BANG_(stack.utils.dbfx.dispatch);

var G__99049_99050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-app","init-app",1160055408)], null);
(stack.utils.dbfx.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__99049_99050) : stack.utils.dbfx.dispatch_sync.call(null, G__99049_99050));

stack.services.auth.init(true);

stack.utils.hsm.register(stack.statecharts.webserial.controller);

(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "connect.core";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"connect.core",new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/connect/core.cljs"], null),__ns,99,3,"file:/home/cormacc/nmd/products/connect/portal/src/connect/core.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Rendering!",null,null,null,null,null,null,null,null));
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

return stack.services.router.render_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),connect.core.routes,new cljs.core.Keyword(null,"layout","layout",-2120940921),connect.layout.app_layout], null));
});
goog.exportSymbol('connect.core.init', connect.core.init);

//# sourceMappingURL=connect.core.js.map
