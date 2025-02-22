goog.provide('stack.components.serial_port');
stack.components.serial_port.settings = (function stack$components$serial_port$settings(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95488 = [clj_props__45318__auto__];
var map__95491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95488,(0),null);
var map__95491__$1 = cljs.core.__destructure_map(map__95491);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95491__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95491__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_port_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95491__$1,new cljs.core.Keyword(null,"on-port-request","on-port-request",-37574153));
var on_port_forget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95491__$1,new cljs.core.Keyword(null,"on-port-forget","on-port-forget",477264167));
var on_option_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95491__$1,new cljs.core.Keyword(null,"on-option-update","on-option-update",-296671716));
var f__45319__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(stack.utils.webserial.SerialOptions,options))){
} else {
throw (new Error("Assert failed: (m/validate webserial/SerialOptions options)"));
}

if(goog.DEBUG){
var temp__5823__auto___95593 = stack.components.serial_port.settings.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95593)){
var f__45248__auto___95594 = temp__5823__auto___95593;
(f__45248__auto___95594.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95594.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95594.call(null, ));
} else {
}
} else {
}

var has_port = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,null)));
return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Port settings",new cljs.core.Keyword(null,"action","action",-811238024),((has_port)?uix.compiler.alpha.component_element(stack.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_port_forget], null)],["Close port"]):uix.compiler.alpha.component_element(stack.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_port_request], null)],["Request port"]))], null)],[uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(((has_port)?uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Port",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(port,["td",null,null,false],false),[])]):uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Port filter",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.components.forms.select,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),stack.utils.webserial.describe_port_filter,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__95456_SHARP_){
return new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417).cljs$core$IFn$_invoke$arity$1(p1__95456_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__95457_SHARP_){
var G__95527 = new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511);
var G__95528 = p1__95457_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__95527,G__95528) : on_option_update.call(null, G__95527,G__95528));
})], null)],[])])])),["tbody",null,null,false],false),[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Baud rate",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.components.forms.select,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000000),(2000000),(1000000),(512000),(256000),(128000),(115200),(57600),(38400),(19200),(9600)], null),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__95461_SHARP_){
var G__95535 = new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298);
var G__95536 = p1__95461_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__95535,G__95536) : on_option_update.call(null, G__95535,G__95536));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Data bits",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.int_range(stack.utils.webserial.DataBits),new cljs.core.Keyword(null,"format","format",-1306924766),(function (p1__95463_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__95463_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"dataBits","dataBits",-455071493).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__95465_SHARP_){
var G__95537 = new cljs.core.Keyword(null,"dataBits","dataBits",-455071493);
var G__95538 = p1__95465_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__95537,G__95538) : on_option_update.call(null, G__95537,G__95538));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Stop bits",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.int_range(stack.utils.webserial.StopBits),new cljs.core.Keyword(null,"format","format",-1306924766),(function (p1__95466_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__95466_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"stopBits","stopBits",341236831).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__95467_SHARP_){
var G__95549 = new cljs.core.Keyword(null,"stopBits","stopBits",341236831);
var G__95550 = p1__95467_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__95549,G__95550) : on_option_update.call(null, G__95549,G__95550));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Parity",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.enum_values(stack.utils.webserial.Parity),new cljs.core.Keyword(null,"format","format",-1306924766),(function (i){
return cljs.core.name(i);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"parity","parity",-1130304573).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__95468_SHARP_){
var G__95556 = new cljs.core.Keyword(null,"parity","parity",-1130304573);
var G__95557 = p1__95468_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__95556,G__95557) : on_option_update.call(null, G__95556,G__95557));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Flow control",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.enum_values(stack.utils.webserial.FlowControl),new cljs.core.Keyword(null,"format","format",-1306924766),(function (i){
return cljs.core.name(i);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__95469_SHARP_){
var G__95561 = new cljs.core.Keyword(null,"flowControl","flowControl",-846811302);
var G__95562 = p1__95469_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__95561,G__95562) : on_option_update.call(null, G__95561,G__95562));
})], null)],[])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95570 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95571 = stack.components.serial_port.settings;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95571);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95570);
}} else {
return f__45319__auto__();
}
});

(stack.components.serial_port.settings.uix_component_QMARK_ = true);

(stack.components.serial_port.settings.displayName = "stack.components.serial-port/settings");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95607 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95607.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95607.cljs$core$IFn$_invoke$arity$4(stack.components.serial_port.settings,"",null,null) : sig__45257__auto___95607.call(null, stack.components.serial_port.settings,"",null,null));

window.uix.dev.register_BANG_(stack.components.serial_port.settings,stack.components.serial_port.settings.displayName);

(stack.components.serial_port.settings.fast_refresh_signature = sig__45257__auto___95607);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.serial_port.js.map
