goog.provide('stack.pages.bt_terminal');
stack.pages.bt_terminal.term_widget_dbfx = (function stack$pages$bt_terminal$term_widget_dbfx(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84341 = [clj_props__38770__auto__];
var map__84344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84341,(0),null);
var map__84344__$1 = cljs.core.__destructure_map(map__84344);
var props = map__84344__$1;
var event_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84344__$1,new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206));
var tx_event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84344__$1,new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84417 = stack.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84417)){
var f__38700__auto___84418 = temp__5823__auto___84417;
(f__38700__auto___84418.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84418.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84418.call(null, ));
} else {
}
} else {
}

var events = (function (){var G__84358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_sub], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__84358) : stack.utils.dbfx.use_sub.call(null, G__84358));
})();
return uix.compiler.alpha.component_element(stack.components.term.term_widget,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),(function (p1__84335_SHARP_){
if(cljs.core.seq(p1__84335_SHARP_)){
var G__84361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_event_id,p1__84335_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84361) : stack.utils.dbfx.dispatch.call(null, G__84361));
} else {
return null;
}
})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84367 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84368 = stack.pages.bt_terminal.term_widget_dbfx;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84368);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84367);
}} else {
return f__38771__auto__();
}
});

(stack.pages.bt_terminal.term_widget_dbfx.uix_component_QMARK_ = true);

(stack.pages.bt_terminal.term_widget_dbfx.displayName = "stack.pages.bt-terminal/term-widget-dbfx");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84420 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84420.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84420.cljs$core$IFn$_invoke$arity$4(stack.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null) : sig__38709__auto___84420.call(null, stack.pages.bt_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null));

window.uix.dev.register_BANG_(stack.pages.bt_terminal.term_widget_dbfx,stack.pages.bt_terminal.term_widget_dbfx.displayName);

(stack.pages.bt_terminal.term_widget_dbfx.fast_refresh_signature = sig__38709__auto___84420);
} else {
}
} else {
}
stack.pages.bt_terminal.bluetooth_unsupported_message = (function stack$pages$bt_terminal$bluetooth_unsupported_message(){
var f__38767__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84423 = stack.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84423)){
var f__38700__auto___84424 = temp__5823__auto___84423;
(f__38700__auto___84424.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84424.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84424.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Web Bluetooth API is not currently available. Make sure you're running Chrome, Edge or Opera and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",["div",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth#browser_compatibility"}],["browser support"]),", and ",uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"}],["secure contexts"]),"."]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84378 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84379 = stack.pages.bt_terminal.bluetooth_unsupported_message;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84379);

try{return f__38767__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84378);
}} else {
return f__38767__auto__();
}
});

(stack.pages.bt_terminal.bluetooth_unsupported_message.uix_component_QMARK_ = true);

(stack.pages.bt_terminal.bluetooth_unsupported_message.displayName = "stack.pages.bt-terminal/bluetooth-unsupported-message");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84427 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84427.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84427.cljs$core$IFn$_invoke$arity$4(stack.pages.bt_terminal.bluetooth_unsupported_message,"",null,null) : sig__38709__auto___84427.call(null, stack.pages.bt_terminal.bluetooth_unsupported_message,"",null,null));

window.uix.dev.register_BANG_(stack.pages.bt_terminal.bluetooth_unsupported_message,stack.pages.bt_terminal.bluetooth_unsupported_message.displayName);

(stack.pages.bt_terminal.bluetooth_unsupported_message.fast_refresh_signature = sig__38709__auto___84427);
} else {
}
} else {
}
stack.pages.bt_terminal.side_panel = (function stack$pages$bt_terminal$side_panel(){
var f__38767__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84428 = stack.pages.bt_terminal.side_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84428)){
var f__38700__auto___84429 = temp__5823__auto___84428;
(f__38700__auto___84429.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84429.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84429.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_context = stack.utils.hsm.use_sub_context(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
var device = new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(bt_context);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.pages.bt-terminal",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("bt-terminal","options","bt-terminal/options",-2139286782),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(bt_context),new cljs.core.Keyword(null,"line","line",212345235),25], null)),null);
} else {
}

return uix.compiler.alpha.component_element(stack.components.bt_device.settings,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"device","device",1817743352),device,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stack.services.bt.device_request_callback,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(bt_context)),new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705),(function (){
var G__84388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-disconnect","bt-disconnect",475700728)], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84388) : stack.utils.dbfx.dispatch.call(null, G__84388));
})], null)],[]);
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84392 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84393 = stack.pages.bt_terminal.side_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84393);

try{return f__38767__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84392);
}} else {
return f__38767__auto__();
}
});

(stack.pages.bt_terminal.side_panel.uix_component_QMARK_ = true);

(stack.pages.bt_terminal.side_panel.displayName = "stack.pages.bt-terminal/side-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84433 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84433.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84433.cljs$core$IFn$_invoke$arity$4(stack.pages.bt_terminal.side_panel,"(hsm-dbfx/use-sub-context :bt-serial)",null,null) : sig__38709__auto___84433.call(null, stack.pages.bt_terminal.side_panel,"(hsm-dbfx/use-sub-context :bt-serial)",null,null));

window.uix.dev.register_BANG_(stack.pages.bt_terminal.side_panel,stack.pages.bt_terminal.side_panel.displayName);

(stack.pages.bt_terminal.side_panel.fast_refresh_signature = sig__38709__auto___84433);
} else {
}
} else {
}
stack.pages.bt_terminal.terminal_pane = (function stack$pages$bt_terminal$terminal_pane(){
var f__38767__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84435 = stack.pages.bt_terminal.terminal_pane.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84435)){
var f__38700__auto___84436 = temp__5823__auto___84435;
(f__38700__auto___84436.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84436.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84436.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var bt_state = stack.utils.hsm.use_sub_state(new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.pages.bt-terminal",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("terminal","layout","terminal/layout",-922971133),["Rendering webbluetooth hsm state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bt_state)].join(''),new cljs.core.Keyword(null,"line","line",212345235),34], null)),null);
} else {
}

if(cljs.core.truth_(stack.utils.hsm.in_state(bt_state,new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)))){
return uix.compiler.alpha.component_element(stack.pages.bt_terminal.bluetooth_unsupported_message,[null],[]);
} else {
return uix.compiler.alpha.component_element(stack.pages.bt_terminal.term_widget_dbfx,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206),new cljs.core.Keyword(null,"bt-serial-events","bt-serial-events",50000387),new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816),new cljs.core.Keyword(null,"bt-serial-tx","bt-serial-tx",-1585542196)], null)],[]);
}
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84402 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84403 = stack.pages.bt_terminal.terminal_pane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84403);

try{return f__38767__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84402);
}} else {
return f__38767__auto__();
}
});

(stack.pages.bt_terminal.terminal_pane.uix_component_QMARK_ = true);

(stack.pages.bt_terminal.terminal_pane.displayName = "stack.pages.bt-terminal/terminal-pane");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84444 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84444.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84444.cljs$core$IFn$_invoke$arity$4(stack.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null) : sig__38709__auto___84444.call(null, stack.pages.bt_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :bt-serial)",null,null));

window.uix.dev.register_BANG_(stack.pages.bt_terminal.terminal_pane,stack.pages.bt_terminal.terminal_pane.displayName);

(stack.pages.bt_terminal.terminal_pane.fast_refresh_signature = sig__38709__auto___84444);
} else {
}
} else {
}
stack.pages.bt_terminal.layout = (function stack$pages$bt_terminal$layout(){
var f__38767__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84445 = stack.pages.bt_terminal.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84445)){
var f__38700__auto___84446 = temp__5823__auto___84445;
(f__38700__auto___84446.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84446.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84446.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-row gap-1"}],[uix.compiler.aot._GT_el("div",[{'className':"basis-80 grow-0"}],[uix.compiler.alpha.component_element(stack.pages.bt_terminal.side_panel,[null],[])]),uix.compiler.aot._GT_el("div",[{'className':"basis-0 grow"}],[uix.compiler.alpha.component_element(stack.pages.bt_terminal.terminal_pane,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84406 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84407 = stack.pages.bt_terminal.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84407);

try{return f__38767__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84406);
}} else {
return f__38767__auto__();
}
});

(stack.pages.bt_terminal.layout.uix_component_QMARK_ = true);

(stack.pages.bt_terminal.layout.displayName = "stack.pages.bt-terminal/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84448 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84448.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84448.cljs$core$IFn$_invoke$arity$4(stack.pages.bt_terminal.layout,"",null,null) : sig__38709__auto___84448.call(null, stack.pages.bt_terminal.layout,"",null,null));

window.uix.dev.register_BANG_(stack.pages.bt_terminal.layout,stack.pages.bt_terminal.layout.displayName);

(stack.pages.bt_terminal.layout.fast_refresh_signature = sig__38709__auto___84448);
} else {
}
} else {
}

//# sourceMappingURL=stack.pages.bt_terminal.js.map
