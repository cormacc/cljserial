goog.provide('connect.pages.mbt_terminal');
connect.pages.mbt_terminal.term_widget_dbfx = (function connect$pages$mbt_terminal$term_widget_dbfx(props__46991__auto__){
var props98994 = uix.core.glue_args(props__46991__auto__);
var vec__98995 = [props98994];
var map__98998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98995,(0),null);
var map__98998__$1 = cljs.core.__destructure_map(map__98998);
var props = map__98998__$1;
var event_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98998__$1,new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206));
var tx_event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98998__$1,new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___99033 = connect.pages.mbt_terminal.term_widget_dbfx.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___99033)){
var f__46909__auto___99034 = temp__5823__auto___99033;
(f__46909__auto___99034.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___99034.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___99034.call(null, ));
} else {
}
} else {
}

var events = (function (){var G__98999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_sub], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__98999) : stack.utils.dbfx.use_sub.call(null, G__98999));
})();
return uix.compiler.alpha.component_element(stack.uix.term.term_widget,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),(function (p1__98992_SHARP_){
if(cljs.core.seq(p1__98992_SHARP_)){
var G__99000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_event_id,p1__98992_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__99000) : stack.utils.dbfx.dispatch.call(null, G__99000));
} else {
return null;
}
})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__99001 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__99002 = connect.pages.mbt_terminal.term_widget_dbfx;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__99002);

try{if(((cljs.core.map_QMARK_(props98994)) || ((props98994 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98994)].join(''),"\n","(clojure.core/or (clojure.core/map? props98994) (clojure.core/nil? props98994))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__99001);
}} else {
return f__46992__auto__();
}
});

(connect.pages.mbt_terminal.term_widget_dbfx.uix_component_QMARK_ = true);

(connect.pages.mbt_terminal.term_widget_dbfx.displayName = "connect.pages.mbt-terminal/term-widget-dbfx");

Object.defineProperty(connect.pages.mbt_terminal.term_widget_dbfx,"name",(function (){var obj99004 = ({"value":"connect.pages.mbt-terminal/term-widget-dbfx"});
return obj99004;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___99035 = window.uix.dev.signature_BANG_();
(sig__46918__auto___99035.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___99035.cljs$core$IFn$_invoke$arity$4(connect.pages.mbt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null) : sig__46918__auto___99035.call(null, connect.pages.mbt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null));

window.uix.dev.register_BANG_(connect.pages.mbt_terminal.term_widget_dbfx,connect.pages.mbt_terminal.term_widget_dbfx.displayName);

(connect.pages.mbt_terminal.term_widget_dbfx.fast_refresh_signature = sig__46918__auto___99035);
} else {
}
} else {
}

connect.pages.mbt_terminal.port_request_callback = (function connect$pages$mbt_terminal$port_request_callback(vid,_e){
return stack.apis.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vendor-id","vendor-id",904935999),vid,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__99005_SHARP_){
var G__99006 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webserial","has-port","webserial/has-port",94109139),p1__99005_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__99006) : stack.utils.dbfx.dispatch.call(null, G__99006));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__99007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webserial","no-port","webserial/no-port",639775958)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__99007) : stack.utils.dbfx.dispatch.call(null, G__99007));
})], 0));
});
connect.pages.mbt_terminal.webserial_unsupported_message = (function connect$pages$mbt_terminal$webserial_unsupported_message(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___99036 = connect.pages.mbt_terminal.webserial_unsupported_message.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___99036)){
var f__46909__auto___99037 = temp__5823__auto___99036;
(f__46909__auto___99037.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___99037.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___99037.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Web Serial API is not currently available. Make sure you're running Chrome, Edge or Safari and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",["div",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"}],["browser support"]),", and ",uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"}],["secure contexts"]),"."]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__99009 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__99010 = connect.pages.mbt_terminal.webserial_unsupported_message;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__99010);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__99009);
}} else {
return f__46985__auto__();
}
});

(connect.pages.mbt_terminal.webserial_unsupported_message.uix_component_QMARK_ = true);

(connect.pages.mbt_terminal.webserial_unsupported_message.displayName = "connect.pages.mbt-terminal/webserial-unsupported-message");

Object.defineProperty(connect.pages.mbt_terminal.webserial_unsupported_message,"name",(function (){var obj99012 = ({"value":"connect.pages.mbt-terminal/webserial-unsupported-message"});
return obj99012;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___99038 = window.uix.dev.signature_BANG_();
(sig__46918__auto___99038.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___99038.cljs$core$IFn$_invoke$arity$4(connect.pages.mbt_terminal.webserial_unsupported_message,"",null,null) : sig__46918__auto___99038.call(null, connect.pages.mbt_terminal.webserial_unsupported_message,"",null,null));

window.uix.dev.register_BANG_(connect.pages.mbt_terminal.webserial_unsupported_message,connect.pages.mbt_terminal.webserial_unsupported_message.displayName);

(connect.pages.mbt_terminal.webserial_unsupported_message.fast_refresh_signature = sig__46918__auto___99038);
} else {
}
} else {
}

connect.pages.mbt_terminal.side_panel = (function connect$pages$mbt_terminal$side_panel(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___99039 = connect.pages.mbt_terminal.side_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___99039)){
var f__46909__auto___99040 = temp__5823__auto___99039;
(f__46909__auto___99040.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___99040.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___99040.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var port_context = (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"webserial","webserial",-1669376567)) : stack.utils.dbfx.use_sub.call(null, new cljs.core.Keyword(null,"webserial","webserial",-1669376567)));
var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(port_context);
var port_config = new cljs.core.Keyword(null,"port-config","port-config",654923145).cljs$core$IFn$_invoke$arity$1(port_context);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "connect.pages.mbt-terminal";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"connect.pages.mbt-terminal",new cljs.core.Keyword(null,"line","line",212345235),34,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/connect/pages/mbt_terminal.cljs"], null),__ns,34,8,"file:/home/cormacc/nmd/products/connect/portal/src/connect/pages/mbt_terminal.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,port_config,null,null,null,null,null,null,null,null));
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

return uix.compiler.alpha.component_element(stack.uix.serial_port.settings,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"port","port",1534937262),(cljs.core.truth_(port)?stack.apis.webserial.describe_port(port):null),new cljs.core.Keyword(null,"options","options",99638489),port_config,new cljs.core.Keyword(null,"on-port-request","on-port-request",-37574153),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(connect.pages.mbt_terminal.port_request_callback,new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(port_config)),new cljs.core.Keyword(null,"on-port-forget","on-port-forget",477264167),(function (){
var G__99015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webserial","forget-port","webserial/forget-port",-1155419206)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__99015) : stack.utils.dbfx.dispatch.call(null, G__99015));
}),new cljs.core.Keyword(null,"on-option-update","on-option-update",-296671716),(function (k,v){
var G__99016 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webserial","option","webserial/option",-107425352),k,v], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__99016) : stack.utils.dbfx.dispatch.call(null, G__99016));
})], null)],[]);
})(),["div",null,"flex flex-col",false],false),[(function (){var cd_info = (function (){var G__99017 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cd-info","cd-info",1722919170)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__99017) : stack.utils.dbfx.use_sub.call(null, G__99017));
})();
var sd_info = new cljs.core.Keyword(null,"sd_card","sd_card",-297846608).cljs$core$IFn$_invoke$arity$1(cd_info);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uix.compiler.alpha.component_element(connect.components.cd_info.card,uix.compiler.attributes.interpret_props(cd_info),[]),uix.compiler.alpha.component_element(stack.uix.file_card.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filestore","filestore",1449104233),sd_info,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590),(function (p1__99013_SHARP_){
var G__99018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833),["file get ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__99013_SHARP_)].join('')], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__99018) : stack.utils.dbfx.dispatch.call(null, G__99018));
})], null)],[])], null);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__99019 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__99020 = connect.pages.mbt_terminal.side_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__99020);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__99019);
}} else {
return f__46985__auto__();
}
});

(connect.pages.mbt_terminal.side_panel.uix_component_QMARK_ = true);

(connect.pages.mbt_terminal.side_panel.displayName = "connect.pages.mbt-terminal/side-panel");

Object.defineProperty(connect.pages.mbt_terminal.side_panel,"name",(function (){var obj99022 = ({"value":"connect.pages.mbt-terminal/side-panel"});
return obj99022;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___99041 = window.uix.dev.signature_BANG_();
(sig__46918__auto___99041.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___99041.cljs$core$IFn$_invoke$arity$4(connect.pages.mbt_terminal.side_panel,"(dbfx/use-sub :webserial)(dbfx/use-sub [:cd-info])",null,null) : sig__46918__auto___99041.call(null, connect.pages.mbt_terminal.side_panel,"(dbfx/use-sub :webserial)(dbfx/use-sub [:cd-info])",null,null));

window.uix.dev.register_BANG_(connect.pages.mbt_terminal.side_panel,connect.pages.mbt_terminal.side_panel.displayName);

(connect.pages.mbt_terminal.side_panel.fast_refresh_signature = sig__46918__auto___99041);
} else {
}
} else {
}

connect.pages.mbt_terminal.terminal_pane = (function connect$pages$mbt_terminal$terminal_pane(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___99042 = connect.pages.mbt_terminal.terminal_pane.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___99042)){
var f__46909__auto___99043 = temp__5823__auto___99042;
(f__46909__auto___99043.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___99043.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___99043.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var serial_state = stack.utils.hsm.use_sub_state(new cljs.core.Keyword(null,"webserial","webserial",-1669376567));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "connect.pages.mbt-terminal";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"connect.pages.mbt-terminal",new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),8,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/connect/pages/mbt_terminal.cljs"], null),__ns,52,8,"file:/home/cormacc/nmd/products/connect/portal/src/connect/pages/mbt_terminal.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["Rendering webserial hsm state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(serial_state)].join(''),null,null,null,null,null,null,null,null));
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

if(cljs.core.truth_(stack.utils.hsm.in_state(serial_state,new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408)))){
return uix.compiler.alpha.component_element(connect.pages.mbt_terminal.webserial_unsupported_message,[null],[]);
} else {
return uix.compiler.alpha.component_element(connect.pages.mbt_terminal.term_widget_dbfx,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206),new cljs.core.Keyword(null,"serial-events","serial-events",-1561306104),new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816),new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833)], null)],[]);
}
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__99024 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__99025 = connect.pages.mbt_terminal.terminal_pane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__99025);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__99024);
}} else {
return f__46985__auto__();
}
});

(connect.pages.mbt_terminal.terminal_pane.uix_component_QMARK_ = true);

(connect.pages.mbt_terminal.terminal_pane.displayName = "connect.pages.mbt-terminal/terminal-pane");

Object.defineProperty(connect.pages.mbt_terminal.terminal_pane,"name",(function (){var obj99027 = ({"value":"connect.pages.mbt-terminal/terminal-pane"});
return obj99027;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___99045 = window.uix.dev.signature_BANG_();
(sig__46918__auto___99045.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___99045.cljs$core$IFn$_invoke$arity$4(connect.pages.mbt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :webserial)",null,null) : sig__46918__auto___99045.call(null, connect.pages.mbt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :webserial)",null,null));

window.uix.dev.register_BANG_(connect.pages.mbt_terminal.terminal_pane,connect.pages.mbt_terminal.terminal_pane.displayName);

(connect.pages.mbt_terminal.terminal_pane.fast_refresh_signature = sig__46918__auto___99045);
} else {
}
} else {
}

connect.pages.mbt_terminal.layout = (function connect$pages$mbt_terminal$layout(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___99046 = connect.pages.mbt_terminal.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___99046)){
var f__46909__auto___99047 = temp__5823__auto___99046;
(f__46909__auto___99047.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___99047.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___99047.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-row gap-1"}],[uix.compiler.aot._GT_el("div",[{'className':"basis-80 grow-0"}],[uix.compiler.alpha.component_element(connect.pages.mbt_terminal.side_panel,[null],[])]),uix.compiler.aot._GT_el("div",[{'className':"basis-0 grow"}],[uix.compiler.alpha.component_element(connect.pages.mbt_terminal.terminal_pane,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__99029 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__99030 = connect.pages.mbt_terminal.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__99030);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__99029);
}} else {
return f__46985__auto__();
}
});

(connect.pages.mbt_terminal.layout.uix_component_QMARK_ = true);

(connect.pages.mbt_terminal.layout.displayName = "connect.pages.mbt-terminal/layout");

Object.defineProperty(connect.pages.mbt_terminal.layout,"name",(function (){var obj99032 = ({"value":"connect.pages.mbt-terminal/layout"});
return obj99032;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___99048 = window.uix.dev.signature_BANG_();
(sig__46918__auto___99048.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___99048.cljs$core$IFn$_invoke$arity$4(connect.pages.mbt_terminal.layout,"",null,null) : sig__46918__auto___99048.call(null, connect.pages.mbt_terminal.layout,"",null,null));

window.uix.dev.register_BANG_(connect.pages.mbt_terminal.layout,connect.pages.mbt_terminal.layout.displayName);

(connect.pages.mbt_terminal.layout.fast_refresh_signature = sig__46918__auto___99048);
} else {
}
} else {
}


//# sourceMappingURL=connect.pages.mbt_terminal.js.map
