goog.provide('stack.examples.re_frame.pages.bt_terminal');
stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx = (function stack$examples$re_frame$pages$bt_terminal$term_widget_dbfx(props__46991__auto__){
var props98942 = uix.core.glue_args(props__46991__auto__);
var vec__98943 = [props98942];
var map__98946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98943,(0),null);
var map__98946__$1 = cljs.core.__destructure_map(map__98946);
var props = map__98946__$1;
var event_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98946__$1,new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206));
var tx_event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98946__$1,new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98974 = stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98974)){
var f__46909__auto___98975 = temp__5823__auto___98974;
(f__46909__auto___98975.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98975.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98975.call(null, ));
} else {
}
} else {
}

var events = (function (){var G__98947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_sub], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__98947) : stack.utils.dbfx.use_sub.call(null, G__98947));
})();
return uix.compiler.alpha.component_element(stack.uix.term.term_widget,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),(function (p1__98940_SHARP_){
if(cljs.core.seq(p1__98940_SHARP_)){
var G__98948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_event_id,p1__98940_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__98948) : stack.utils.dbfx.dispatch.call(null, G__98948));
} else {
return null;
}
})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98949 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98950 = stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98950);

try{if(((cljs.core.map_QMARK_(props98942)) || ((props98942 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98942)].join(''),"\n","(clojure.core/or (clojure.core/map? props98942) (clojure.core/nil? props98942))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98949);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx.displayName = "stack.examples.re-frame.pages.bt-terminal/term-widget-dbfx");

Object.defineProperty(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx,"name",(function (){var obj98952 = ({"value":"stack.examples.re-frame.pages.bt-terminal/term-widget-dbfx"});
return obj98952;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98976 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98976.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98976.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null) : sig__46918__auto___98976.call(null, stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx,stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx.displayName);

(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature = sig__46918__auto___98976);
} else {
}
} else {
}

stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message = (function stack$examples$re_frame$pages$bt_terminal$bluetooth_unsupported_message(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___98977 = stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98977)){
var f__46909__auto___98978 = temp__5823__auto___98977;
(f__46909__auto___98978.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98978.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98978.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Web Bluetooth API is not currently available. Make sure you're running Chrome, Edge or Opera and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",["div",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth#browser_compatibility"}],["browser support"]),", and ",uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"}],["secure contexts"]),"."]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98954 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98955 = stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98955);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98954);
}} else {
return f__46985__auto__();
}
});

(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message.displayName = "stack.examples.re-frame.pages.bt-terminal/bluetooth-unsupported-message");

Object.defineProperty(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message,"name",(function (){var obj98957 = ({"value":"stack.examples.re-frame.pages.bt-terminal/bluetooth-unsupported-message"});
return obj98957;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98979 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98979.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98979.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message,"",null,null) : sig__46918__auto___98979.call(null, stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message,stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message.displayName);

(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature = sig__46918__auto___98979);
} else {
}
} else {
}

stack.examples.re_frame.pages.bt_terminal.side_panel = (function stack$examples$re_frame$pages$bt_terminal$side_panel(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___98980 = stack.examples.re_frame.pages.bt_terminal.side_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98980)){
var f__46909__auto___98981 = temp__5823__auto___98980;
(f__46909__auto___98981.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98981.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98981.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_context = (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354)) : stack.utils.dbfx.use_sub.call(null, new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354)));
var device = new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(bt_context);
return uix.compiler.alpha.component_element(stack.uix.bt_device.settings,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"device","device",1817743352),device,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stack.services.bt.device_request_callback,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(bt_context)),new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705),(function (){
var G__98959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-disconnect","bt-disconnect",475700728)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__98959) : stack.utils.dbfx.dispatch.call(null, G__98959));
})], null)],[]);
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98960 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98961 = stack.examples.re_frame.pages.bt_terminal.side_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98961);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98960);
}} else {
return f__46985__auto__();
}
});

(stack.examples.re_frame.pages.bt_terminal.side_panel.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.bt_terminal.side_panel.displayName = "stack.examples.re-frame.pages.bt-terminal/side-panel");

Object.defineProperty(stack.examples.re_frame.pages.bt_terminal.side_panel,"name",(function (){var obj98963 = ({"value":"stack.examples.re-frame.pages.bt-terminal/side-panel"});
return obj98963;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98982 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98982.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98982.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.bt_terminal.side_panel,"(dbfx/use-sub :bt-serial)",null,null) : sig__46918__auto___98982.call(null, stack.examples.re_frame.pages.bt_terminal.side_panel,"(dbfx/use-sub :bt-serial)",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.bt_terminal.side_panel,stack.examples.re_frame.pages.bt_terminal.side_panel.displayName);

(stack.examples.re_frame.pages.bt_terminal.side_panel.fast_refresh_signature = sig__46918__auto___98982);
} else {
}
} else {
}

stack.examples.re_frame.pages.bt_terminal.terminal_pane = (function stack$examples$re_frame$pages$bt_terminal$terminal_pane(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___98983 = stack.examples.re_frame.pages.bt_terminal.terminal_pane.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98983)){
var f__46909__auto___98984 = temp__5823__auto___98983;
(f__46909__auto___98984.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98984.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98984.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_state = stack.utils.hsm.use_sub_state(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
if(cljs.core.truth_(stack.utils.hsm.in_state(bt_state,new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)))){
return uix.compiler.alpha.component_element(stack.examples.re_frame.pages.bt_terminal.bluetooth_unsupported_message,[null],[]);
} else {
return uix.compiler.alpha.component_element(stack.examples.re_frame.pages.bt_terminal.term_widget_dbfx,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206),new cljs.core.Keyword(null,"bt-serial-events","bt-serial-events",50000387),new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816),new cljs.core.Keyword(null,"bt-serial-tx","bt-serial-tx",-1585542196)], null)],[]);
}
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98965 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98966 = stack.examples.re_frame.pages.bt_terminal.terminal_pane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98966);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98965);
}} else {
return f__46985__auto__();
}
});

(stack.examples.re_frame.pages.bt_terminal.terminal_pane.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.bt_terminal.terminal_pane.displayName = "stack.examples.re-frame.pages.bt-terminal/terminal-pane");

Object.defineProperty(stack.examples.re_frame.pages.bt_terminal.terminal_pane,"name",(function (){var obj98968 = ({"value":"stack.examples.re-frame.pages.bt-terminal/terminal-pane"});
return obj98968;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98985 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98985.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98985.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null) : sig__46918__auto___98985.call(null, stack.examples.re_frame.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.bt_terminal.terminal_pane,stack.examples.re_frame.pages.bt_terminal.terminal_pane.displayName);

(stack.examples.re_frame.pages.bt_terminal.terminal_pane.fast_refresh_signature = sig__46918__auto___98985);
} else {
}
} else {
}

stack.examples.re_frame.pages.bt_terminal.layout = (function stack$examples$re_frame$pages$bt_terminal$layout(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___98986 = stack.examples.re_frame.pages.bt_terminal.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98986)){
var f__46909__auto___98987 = temp__5823__auto___98986;
(f__46909__auto___98987.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98987.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98987.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-row gap-1"}],[uix.compiler.aot._GT_el("div",[{'className':"basis-80 grow-0"}],[uix.compiler.alpha.component_element(stack.examples.re_frame.pages.bt_terminal.side_panel,[null],[])]),uix.compiler.aot._GT_el("div",[{'className':"basis-0 grow"}],[uix.compiler.alpha.component_element(stack.examples.re_frame.pages.bt_terminal.terminal_pane,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98970 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98971 = stack.examples.re_frame.pages.bt_terminal.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98971);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98970);
}} else {
return f__46985__auto__();
}
});

(stack.examples.re_frame.pages.bt_terminal.layout.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.bt_terminal.layout.displayName = "stack.examples.re-frame.pages.bt-terminal/layout");

Object.defineProperty(stack.examples.re_frame.pages.bt_terminal.layout,"name",(function (){var obj98973 = ({"value":"stack.examples.re-frame.pages.bt-terminal/layout"});
return obj98973;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98988 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98988.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98988.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.bt_terminal.layout,"",null,null) : sig__46918__auto___98988.call(null, stack.examples.re_frame.pages.bt_terminal.layout,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.bt_terminal.layout,stack.examples.re_frame.pages.bt_terminal.layout.displayName);

(stack.examples.re_frame.pages.bt_terminal.layout.fast_refresh_signature = sig__46918__auto___98988);
} else {
}
} else {
}


//# sourceMappingURL=stack.examples.re_frame.pages.bt_terminal.js.map
