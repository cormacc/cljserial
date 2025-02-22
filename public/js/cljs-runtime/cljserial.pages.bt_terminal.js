goog.provide('cljserial.pages.bt_terminal');
cljserial.pages.bt_terminal.term_widget_dbfx = (function cljserial$pages$bt_terminal$term_widget_dbfx(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56821 = [clj_props__39918__auto__];
var map__56824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56821,(0),null);
var map__56824__$1 = cljs.core.__destructure_map(map__56824);
var props = map__56824__$1;
var event_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206));
var tx_event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56824__$1,new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56901 = cljserial.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56901)){
var f__39838__auto___56902 = temp__5804__auto___56901;
(f__39838__auto___56902.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56902.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56902.call(null, ));
} else {
}
} else {
}

var events = (function (){var G__56825 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_sub], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__56825) : cljserial.utils.dbfx.use_sub.call(null, G__56825));
})();
return uix.compiler.alpha.component_element(cljserial.components.term.term_widget,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),(function (p1__56820_SHARP_){
if(cljs.core.seq(p1__56820_SHARP_)){
var G__56827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_event_id,p1__56820_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56827) : cljserial.utils.dbfx.dispatch.call(null, G__56827));
} else {
return null;
}
})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56828 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56829 = cljserial.pages.bt_terminal.term_widget_dbfx;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56829);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56828);
}} else {
return f__39919__auto__();
}
});

(cljserial.pages.bt_terminal.term_widget_dbfx.uix_component_QMARK_ = true);

(cljserial.pages.bt_terminal.term_widget_dbfx.displayName = "cljserial.pages.bt-terminal/term-widget-dbfx");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56903 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56903.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56903.cljs$core$IFn$_invoke$arity$4(cljserial.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null) : sig__39847__auto___56903.call(null, cljserial.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null));

window.uix.dev.register_BANG_(cljserial.pages.bt_terminal.term_widget_dbfx,cljserial.pages.bt_terminal.term_widget_dbfx.displayName);

(cljserial.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature = sig__39847__auto___56903);
} else {
}
} else {
}
cljserial.pages.bt_terminal.bluetooth_unsupported_message = (function cljserial$pages$bt_terminal$bluetooth_unsupported_message(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56904 = cljserial.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56904)){
var f__39838__auto___56905 = temp__5804__auto___56904;
(f__39838__auto___56905.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56905.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56905.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Web Bluetooth API is not currently available. Make sure you're running Chrome, Edge or Opera and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",["div",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth#browser_compatibility"}],["browser support"]),", and ",uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"}],["secure contexts"]),"."]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56838 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56839 = cljserial.pages.bt_terminal.bluetooth_unsupported_message;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56839);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56838);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.bt_terminal.bluetooth_unsupported_message.uix_component_QMARK_ = true);

(cljserial.pages.bt_terminal.bluetooth_unsupported_message.displayName = "cljserial.pages.bt-terminal/bluetooth-unsupported-message");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56912 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56912.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56912.cljs$core$IFn$_invoke$arity$4(cljserial.pages.bt_terminal.bluetooth_unsupported_message,"",null,null) : sig__39847__auto___56912.call(null, cljserial.pages.bt_terminal.bluetooth_unsupported_message,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.bt_terminal.bluetooth_unsupported_message,cljserial.pages.bt_terminal.bluetooth_unsupported_message.displayName);

(cljserial.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature = sig__39847__auto___56912);
} else {
}
} else {
}
cljserial.pages.bt_terminal.side_panel = (function cljserial$pages$bt_terminal$side_panel(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56913 = cljserial.pages.bt_terminal.side_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56913)){
var f__39838__auto___56914 = temp__5804__auto___56913;
(f__39838__auto___56914.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56914.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56914.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_context = cljserial.utils.hsm.use_sub_context(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
var device = new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(bt_context);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.pages.bt-terminal",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("bt-terminal","options","bt-terminal/options",-2139286782),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(bt_context),new cljs.core.Keyword(null,"line","line",212345235),25], null)),null);
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.bt_device.settings,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"device","device",1817743352),device,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljserial.services.bt.device_request_callback,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(bt_context)),new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705),(function (){
var G__56863 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-disconnect","bt-disconnect",475700728)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56863) : cljserial.utils.dbfx.dispatch.call(null, G__56863));
})], null)],[]);
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56864 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56865 = cljserial.pages.bt_terminal.side_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56865);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56864);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.bt_terminal.side_panel.uix_component_QMARK_ = true);

(cljserial.pages.bt_terminal.side_panel.displayName = "cljserial.pages.bt-terminal/side-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56921 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56921.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56921.cljs$core$IFn$_invoke$arity$4(cljserial.pages.bt_terminal.side_panel,"(hsm-dbfx/use-sub-context :bt-serial)",null,null) : sig__39847__auto___56921.call(null, cljserial.pages.bt_terminal.side_panel,"(hsm-dbfx/use-sub-context :bt-serial)",null,null));

window.uix.dev.register_BANG_(cljserial.pages.bt_terminal.side_panel,cljserial.pages.bt_terminal.side_panel.displayName);

(cljserial.pages.bt_terminal.side_panel.fast_refresh_signature = sig__39847__auto___56921);
} else {
}
} else {
}
cljserial.pages.bt_terminal.terminal_pane = (function cljserial$pages$bt_terminal$terminal_pane(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56922 = cljserial.pages.bt_terminal.terminal_pane.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56922)){
var f__39838__auto___56923 = temp__5804__auto___56922;
(f__39838__auto___56923.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56923.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56923.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_state = cljserial.utils.hsm.use_sub_state(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.pages.bt-terminal",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("terminal","layout","terminal/layout",-922971133),["Rendering webbluetooth hsm state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bt_state)].join(''),new cljs.core.Keyword(null,"line","line",212345235),38], null)),null);
} else {
}

if(cljs.core.truth_(cljserial.utils.hsm.in_state(bt_state,new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)))){
return uix.compiler.alpha.component_element(cljserial.pages.bt_terminal.bluetooth_unsupported_message,[null],[]);
} else {
return uix.compiler.alpha.component_element(cljserial.pages.bt_terminal.term_widget_dbfx,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206),new cljs.core.Keyword(null,"bt-serial-events","bt-serial-events",50000387),new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816),new cljs.core.Keyword(null,"bt-serial-tx","bt-serial-tx",-1585542196)], null)],[]);
}
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56884 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56885 = cljserial.pages.bt_terminal.terminal_pane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56885);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56884);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.bt_terminal.terminal_pane.uix_component_QMARK_ = true);

(cljserial.pages.bt_terminal.terminal_pane.displayName = "cljserial.pages.bt-terminal/terminal-pane");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56925 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56925.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56925.cljs$core$IFn$_invoke$arity$4(cljserial.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null) : sig__39847__auto___56925.call(null, cljserial.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null));

window.uix.dev.register_BANG_(cljserial.pages.bt_terminal.terminal_pane,cljserial.pages.bt_terminal.terminal_pane.displayName);

(cljserial.pages.bt_terminal.terminal_pane.fast_refresh_signature = sig__39847__auto___56925);
} else {
}
} else {
}
cljserial.pages.bt_terminal.layout = (function cljserial$pages$bt_terminal$layout(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56928 = cljserial.pages.bt_terminal.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56928)){
var f__39838__auto___56929 = temp__5804__auto___56928;
(f__39838__auto___56929.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56929.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56929.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-row gap-1"}],[uix.compiler.aot._GT_el("div",[{'className':"basis-80 grow-0"}],[uix.compiler.alpha.component_element(cljserial.pages.bt_terminal.side_panel,[null],[])]),uix.compiler.aot._GT_el("div",[{'className':"basis-0 grow"}],[uix.compiler.alpha.component_element(cljserial.pages.bt_terminal.terminal_pane,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56899 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56900 = cljserial.pages.bt_terminal.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56900);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56899);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.bt_terminal.layout.uix_component_QMARK_ = true);

(cljserial.pages.bt_terminal.layout.displayName = "cljserial.pages.bt-terminal/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56932 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56932.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56932.cljs$core$IFn$_invoke$arity$4(cljserial.pages.bt_terminal.layout,"",null,null) : sig__39847__auto___56932.call(null, cljserial.pages.bt_terminal.layout,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.bt_terminal.layout,cljserial.pages.bt_terminal.layout.displayName);

(cljserial.pages.bt_terminal.layout.fast_refresh_signature = sig__39847__auto___56932);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.pages.bt_terminal.js.map
