goog.provide('stack.examples.pages.bt_terminal');
stack.examples.pages.bt_terminal.term_widget_dbfx = (function stack$examples$pages$bt_terminal$term_widget_dbfx(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95661 = [clj_props__45318__auto__];
var map__95664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95661,(0),null);
var map__95664__$1 = cljs.core.__destructure_map(map__95664);
var props = map__95664__$1;
var event_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95664__$1,new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206));
var tx_event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95664__$1,new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95790 = stack.examples.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95790)){
var f__45248__auto___95791 = temp__5823__auto___95790;
(f__45248__auto___95791.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95791.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95791.call(null, ));
} else {
}
} else {
}

var events = (function (){var G__95665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_sub], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__95665) : stack.utils.dbfx.use_sub.call(null, G__95665));
})();
return uix.compiler.alpha.component_element(stack.components.term.term_widget,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),(function (p1__95653_SHARP_){
if(cljs.core.seq(p1__95653_SHARP_)){
var G__95670 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_event_id,p1__95653_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95670) : stack.utils.dbfx.dispatch.call(null, G__95670));
} else {
return null;
}
})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95671 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95672 = stack.examples.pages.bt_terminal.term_widget_dbfx;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95672);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95671);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.bt_terminal.term_widget_dbfx.uix_component_QMARK_ = true);

(stack.examples.pages.bt_terminal.term_widget_dbfx.displayName = "stack.examples.pages.bt-terminal/term-widget-dbfx");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95795 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95795.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95795.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null) : sig__45257__auto___95795.call(null, stack.examples.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.bt_terminal.term_widget_dbfx,stack.examples.pages.bt_terminal.term_widget_dbfx.displayName);

(stack.examples.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature = sig__45257__auto___95795);
} else {
}
} else {
}
stack.examples.pages.bt_terminal.bluetooth_unsupported_message = (function stack$examples$pages$bt_terminal$bluetooth_unsupported_message(){
var f__45315__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95796 = stack.examples.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95796)){
var f__45248__auto___95797 = temp__5823__auto___95796;
(f__45248__auto___95797.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95797.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95797.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Web Bluetooth API is not currently available. Make sure you're running Chrome, Edge or Opera and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",["div",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth#browser_compatibility"}],["browser support"]),", and ",uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"}],["secure contexts"]),"."]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95708 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95709 = stack.examples.pages.bt_terminal.bluetooth_unsupported_message;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95709);

try{return f__45315__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95708);
}} else {
return f__45315__auto__();
}
});

(stack.examples.pages.bt_terminal.bluetooth_unsupported_message.uix_component_QMARK_ = true);

(stack.examples.pages.bt_terminal.bluetooth_unsupported_message.displayName = "stack.examples.pages.bt-terminal/bluetooth-unsupported-message");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95809 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95809.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95809.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.bt_terminal.bluetooth_unsupported_message,"",null,null) : sig__45257__auto___95809.call(null, stack.examples.pages.bt_terminal.bluetooth_unsupported_message,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.bt_terminal.bluetooth_unsupported_message,stack.examples.pages.bt_terminal.bluetooth_unsupported_message.displayName);

(stack.examples.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature = sig__45257__auto___95809);
} else {
}
} else {
}
stack.examples.pages.bt_terminal.side_panel = (function stack$examples$pages$bt_terminal$side_panel(){
var f__45315__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95810 = stack.examples.pages.bt_terminal.side_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95810)){
var f__45248__auto___95811 = temp__5823__auto___95810;
(f__45248__auto___95811.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95811.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95811.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_context = stack.utils.hsm.use_sub_context(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
var device = new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(bt_context);
return uix.compiler.alpha.component_element(stack.components.bt_device.settings,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"device","device",1817743352),device,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stack.services.bt.device_request_callback,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(bt_context)),new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705),(function (){
var G__95719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-disconnect","bt-disconnect",475700728)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__95719) : stack.utils.dbfx.dispatch.call(null, G__95719));
})], null)],[]);
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95724 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95725 = stack.examples.pages.bt_terminal.side_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95725);

try{return f__45315__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95724);
}} else {
return f__45315__auto__();
}
});

(stack.examples.pages.bt_terminal.side_panel.uix_component_QMARK_ = true);

(stack.examples.pages.bt_terminal.side_panel.displayName = "stack.examples.pages.bt-terminal/side-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95816 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95816.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95816.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.bt_terminal.side_panel,"(hsm-dbfx/use-sub-context :bt-serial)",null,null) : sig__45257__auto___95816.call(null, stack.examples.pages.bt_terminal.side_panel,"(hsm-dbfx/use-sub-context :bt-serial)",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.bt_terminal.side_panel,stack.examples.pages.bt_terminal.side_panel.displayName);

(stack.examples.pages.bt_terminal.side_panel.fast_refresh_signature = sig__45257__auto___95816);
} else {
}
} else {
}
stack.examples.pages.bt_terminal.terminal_pane = (function stack$examples$pages$bt_terminal$terminal_pane(){
var f__45315__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95817 = stack.examples.pages.bt_terminal.terminal_pane.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95817)){
var f__45248__auto___95818 = temp__5823__auto___95817;
(f__45248__auto___95818.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95818.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95818.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_state = stack.utils.hsm.use_sub_state(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
if(cljs.core.truth_(stack.utils.hsm.in_state(bt_state,new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)))){
return uix.compiler.alpha.component_element(stack.examples.pages.bt_terminal.bluetooth_unsupported_message,[null],[]);
} else {
return uix.compiler.alpha.component_element(stack.examples.pages.bt_terminal.term_widget_dbfx,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206),new cljs.core.Keyword(null,"bt-serial-events","bt-serial-events",50000387),new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816),new cljs.core.Keyword(null,"bt-serial-tx","bt-serial-tx",-1585542196)], null)],[]);
}
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95734 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95735 = stack.examples.pages.bt_terminal.terminal_pane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95735);

try{return f__45315__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95734);
}} else {
return f__45315__auto__();
}
});

(stack.examples.pages.bt_terminal.terminal_pane.uix_component_QMARK_ = true);

(stack.examples.pages.bt_terminal.terminal_pane.displayName = "stack.examples.pages.bt-terminal/terminal-pane");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95823 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95823.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95823.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null) : sig__45257__auto___95823.call(null, stack.examples.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.bt_terminal.terminal_pane,stack.examples.pages.bt_terminal.terminal_pane.displayName);

(stack.examples.pages.bt_terminal.terminal_pane.fast_refresh_signature = sig__45257__auto___95823);
} else {
}
} else {
}
stack.examples.pages.bt_terminal.layout = (function stack$examples$pages$bt_terminal$layout(){
var f__45315__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95829 = stack.examples.pages.bt_terminal.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95829)){
var f__45248__auto___95830 = temp__5823__auto___95829;
(f__45248__auto___95830.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95830.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95830.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-row gap-1"}],[uix.compiler.aot._GT_el("div",[{'className':"basis-80 grow-0"}],[uix.compiler.alpha.component_element(stack.examples.pages.bt_terminal.side_panel,[null],[])]),uix.compiler.aot._GT_el("div",[{'className':"basis-0 grow"}],[uix.compiler.alpha.component_element(stack.examples.pages.bt_terminal.terminal_pane,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95780 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95781 = stack.examples.pages.bt_terminal.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95781);

try{return f__45315__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95780);
}} else {
return f__45315__auto__();
}
});

(stack.examples.pages.bt_terminal.layout.uix_component_QMARK_ = true);

(stack.examples.pages.bt_terminal.layout.displayName = "stack.examples.pages.bt-terminal/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95831 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95831.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95831.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.bt_terminal.layout,"",null,null) : sig__45257__auto___95831.call(null, stack.examples.pages.bt_terminal.layout,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.bt_terminal.layout,stack.examples.pages.bt_terminal.layout.displayName);

(stack.examples.pages.bt_terminal.layout.fast_refresh_signature = sig__45257__auto___95831);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.bt_terminal.js.map
