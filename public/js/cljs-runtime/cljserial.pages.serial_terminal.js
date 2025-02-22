goog.provide('cljserial.pages.serial_terminal');
cljserial.pages.serial_terminal.term_widget_dbfx = (function cljserial$pages$serial_terminal$term_widget_dbfx(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56967 = [clj_props__39918__auto__];
var map__56970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56967,(0),null);
var map__56970__$1 = cljs.core.__destructure_map(map__56970);
var props = map__56970__$1;
var event_sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206));
var tx_event_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57022 = cljserial.pages.serial_terminal.term_widget_dbfx.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57022)){
var f__39838__auto___57023 = temp__5804__auto___57022;
(f__39838__auto___57023.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57023.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57023.call(null, ));
} else {
}
} else {
}

var events = (function (){var G__56973 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_sub], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__56973) : cljserial.utils.dbfx.use_sub.call(null, G__56973));
})();
return uix.compiler.alpha.component_element(cljserial.components.term.term_widget,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),(function (p1__56965_SHARP_){
if(cljs.core.seq(p1__56965_SHARP_)){
var G__56974 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx_event_id,p1__56965_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56974) : cljserial.utils.dbfx.dispatch.call(null, G__56974));
} else {
return null;
}
})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56975 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56976 = cljserial.pages.serial_terminal.term_widget_dbfx;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56976);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56975);
}} else {
return f__39919__auto__();
}
});

(cljserial.pages.serial_terminal.term_widget_dbfx.uix_component_QMARK_ = true);

(cljserial.pages.serial_terminal.term_widget_dbfx.displayName = "cljserial.pages.serial-terminal/term-widget-dbfx");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57024 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57024.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57024.cljs$core$IFn$_invoke$arity$4(cljserial.pages.serial_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null) : sig__39847__auto___57024.call(null, cljserial.pages.serial_terminal.term_widget_dbfx,"(dbfx/use-sub [event-sub])",null,null));

window.uix.dev.register_BANG_(cljserial.pages.serial_terminal.term_widget_dbfx,cljserial.pages.serial_terminal.term_widget_dbfx.displayName);

(cljserial.pages.serial_terminal.term_widget_dbfx.fast_refresh_signature = sig__39847__auto___57024);
} else {
}
} else {
}
cljserial.pages.serial_terminal.port_request_callback = (function cljserial$pages$serial_terminal$port_request_callback(vid,_e){
return cljserial.utils.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vendor-id","vendor-id",904935999),vid,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__56981_SHARP_){
var G__56983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-has-port","webserial-has-port",-299202090),p1__56981_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56983) : cljserial.utils.dbfx.dispatch.call(null, G__56983));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-no-port","webserial-no-port",2007041017)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56984) : cljserial.utils.dbfx.dispatch.call(null, G__56984));
})], 0));
});
cljserial.pages.serial_terminal.webserial_unsupported_message = (function cljserial$pages$serial_terminal$webserial_unsupported_message(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57025 = cljserial.pages.serial_terminal.webserial_unsupported_message.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57025)){
var f__39838__auto___57026 = temp__5804__auto___57025;
(f__39838__auto___57026.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57026.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57026.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs("The Web Serial API is not currently available. Make sure you're running Chrome, Edge or Safari and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",["div",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"}],["browser support"]),", and ",uix.compiler.aot._GT_el("a",[{'href':"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"}],["secure contexts"]),"."]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56988 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56989 = cljserial.pages.serial_terminal.webserial_unsupported_message;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56989);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56988);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.serial_terminal.webserial_unsupported_message.uix_component_QMARK_ = true);

(cljserial.pages.serial_terminal.webserial_unsupported_message.displayName = "cljserial.pages.serial-terminal/webserial-unsupported-message");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57027 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57027.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57027.cljs$core$IFn$_invoke$arity$4(cljserial.pages.serial_terminal.webserial_unsupported_message,"",null,null) : sig__39847__auto___57027.call(null, cljserial.pages.serial_terminal.webserial_unsupported_message,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.serial_terminal.webserial_unsupported_message,cljserial.pages.serial_terminal.webserial_unsupported_message.displayName);

(cljserial.pages.serial_terminal.webserial_unsupported_message.fast_refresh_signature = sig__39847__auto___57027);
} else {
}
} else {
}
cljserial.pages.serial_terminal.side_panel = (function cljserial$pages$serial_terminal$side_panel(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57028 = cljserial.pages.serial_terminal.side_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57028)){
var f__39838__auto___57029 = temp__5804__auto___57028;
(f__39838__auto___57029.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57029.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57029.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var port_context = cljserial.utils.hsm.use_sub_context(new cljs.core.Keyword(null,"usb-serial","usb-serial",754250307));
var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(port_context);
var serial_options = new cljs.core.Keyword(null,"serial-options","serial-options",914523235).cljs$core$IFn$_invoke$arity$1(port_context);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.pages.serial-terminal",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("terminal","options","terminal/options",1062784613),serial_options,new cljs.core.Keyword(null,"line","line",212345235),34], null)),null);
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.serial_port.settings,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"port","port",1534937262),(cljs.core.truth_(port)?cljserial.utils.webserial.describe_port(port):null),new cljs.core.Keyword(null,"options","options",99638489),serial_options,new cljs.core.Keyword(null,"on-port-request","on-port-request",-37574153),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljserial.pages.serial_terminal.port_request_callback,new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(serial_options)),new cljs.core.Keyword(null,"on-port-forget","on-port-forget",477264167),(function (){
var G__57001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-forget-port","webserial-forget-port",-1172893861)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__57001) : cljserial.utils.dbfx.dispatch.call(null, G__57001));
}),new cljs.core.Keyword(null,"on-option-update","on-option-update",-296671716),(function (k,v){
var G__57003 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-option","webserial-option",-599976901),k,v], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__57003) : cljserial.utils.dbfx.dispatch.call(null, G__57003));
})], null)],[]);
})(),["div",null,"flex flex-col",false],false),[(function (){var cd_info = (function (){var G__57005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cd-info","cd-info",1722919170)], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__57005) : cljserial.utils.dbfx.use_sub.call(null, G__57005));
})();
var sd_info = new cljs.core.Keyword(null,"sd-card","sd-card",-220705254).cljs$core$IFn$_invoke$arity$1(cd_info);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uix.compiler.alpha.component_element(cljserial.components.cd_info.card,uix.compiler.attributes.interpret_props(cd_info),[]),uix.compiler.alpha.component_element(cljserial.components.file_card.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filestore","filestore",1449104233),sd_info,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590),(function (p1__56994_SHARP_){
var G__57007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833),["file get ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56994_SHARP_)].join('')], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__57007) : cljserial.utils.dbfx.dispatch.call(null, G__57007));
})], null)],[])], null);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__57008 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__57009 = cljserial.pages.serial_terminal.side_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__57009);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__57008);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.serial_terminal.side_panel.uix_component_QMARK_ = true);

(cljserial.pages.serial_terminal.side_panel.displayName = "cljserial.pages.serial-terminal/side-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57030 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57030.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57030.cljs$core$IFn$_invoke$arity$4(cljserial.pages.serial_terminal.side_panel,"(hsm-dbfx/use-sub-context :usb-serial)(dbfx/use-sub [:cd-info])",null,null) : sig__39847__auto___57030.call(null, cljserial.pages.serial_terminal.side_panel,"(hsm-dbfx/use-sub-context :usb-serial)(dbfx/use-sub [:cd-info])",null,null));

window.uix.dev.register_BANG_(cljserial.pages.serial_terminal.side_panel,cljserial.pages.serial_terminal.side_panel.displayName);

(cljserial.pages.serial_terminal.side_panel.fast_refresh_signature = sig__39847__auto___57030);
} else {
}
} else {
}
cljserial.pages.serial_terminal.terminal_pane = (function cljserial$pages$serial_terminal$terminal_pane(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57031 = cljserial.pages.serial_terminal.terminal_pane.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57031)){
var f__39838__auto___57032 = temp__5804__auto___57031;
(f__39838__auto___57032.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57032.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57032.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var serial_state = cljserial.utils.hsm.use_sub_state(new cljs.core.Keyword(null,"usb-serial","usb-serial",754250307));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.pages.serial-terminal",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("terminal","layout","terminal/layout",-922971133),["Rendering webserial hsm state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(serial_state)].join(''),new cljs.core.Keyword(null,"line","line",212345235),52], null)),null);
} else {
}

if(cljs.core.truth_(cljserial.utils.hsm.in_state(serial_state,new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408)))){
return uix.compiler.alpha.component_element(cljserial.pages.serial_terminal.webserial_unsupported_message,[null],[]);
} else {
return uix.compiler.alpha.component_element(cljserial.pages.serial_terminal.term_widget_dbfx,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-sub","event-sub",-1751615206),new cljs.core.Keyword(null,"serial-events","serial-events",-1561306104),new cljs.core.Keyword(null,"tx-event-id","tx-event-id",72396816),new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833)], null)],[]);
}
})(),["div",null,"flex flex-col",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__57018 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__57019 = cljserial.pages.serial_terminal.terminal_pane;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__57019);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__57018);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.serial_terminal.terminal_pane.uix_component_QMARK_ = true);

(cljserial.pages.serial_terminal.terminal_pane.displayName = "cljserial.pages.serial-terminal/terminal-pane");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57033 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57033.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57033.cljs$core$IFn$_invoke$arity$4(cljserial.pages.serial_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :usb-serial)",null,null) : sig__39847__auto___57033.call(null, cljserial.pages.serial_terminal.terminal_pane,"(hsm-dbfx/use-sub-state :usb-serial)",null,null));

window.uix.dev.register_BANG_(cljserial.pages.serial_terminal.terminal_pane,cljserial.pages.serial_terminal.terminal_pane.displayName);

(cljserial.pages.serial_terminal.terminal_pane.fast_refresh_signature = sig__39847__auto___57033);
} else {
}
} else {
}
cljserial.pages.serial_terminal.layout = (function cljserial$pages$serial_terminal$layout(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57034 = cljserial.pages.serial_terminal.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57034)){
var f__39838__auto___57035 = temp__5804__auto___57034;
(f__39838__auto___57035.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57035.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57035.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-row gap-1"}],[uix.compiler.aot._GT_el("div",[{'className':"basis-80 grow-0"}],[uix.compiler.alpha.component_element(cljserial.pages.serial_terminal.side_panel,[null],[])]),uix.compiler.aot._GT_el("div",[{'className':"basis-0 grow"}],[uix.compiler.alpha.component_element(cljserial.pages.serial_terminal.terminal_pane,[null],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__57020 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__57021 = cljserial.pages.serial_terminal.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__57021);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__57020);
}} else {
return f__39915__auto__();
}
});

(cljserial.pages.serial_terminal.layout.uix_component_QMARK_ = true);

(cljserial.pages.serial_terminal.layout.displayName = "cljserial.pages.serial-terminal/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57036 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57036.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57036.cljs$core$IFn$_invoke$arity$4(cljserial.pages.serial_terminal.layout,"",null,null) : sig__39847__auto___57036.call(null, cljserial.pages.serial_terminal.layout,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.serial_terminal.layout,cljserial.pages.serial_terminal.layout.displayName);

(cljserial.pages.serial_terminal.layout.fast_refresh_signature = sig__39847__auto___57036);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.pages.serial_terminal.js.map
