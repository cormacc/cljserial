goog.provide('stack.uix.serial_port');
stack.uix.serial_port.format_keyword = (function stack$uix$serial_port$format_keyword(kw){
if((kw instanceof cljs.core.Keyword)){
return cljs.core.name(kw);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw);
}
});
stack.uix.serial_port.settings = (function stack$uix$serial_port$settings(props__46991__auto__){
var props97921 = uix.core.glue_args(props__46991__auto__);
var vec__97931 = [props97921];
var map__97934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97931,(0),null);
var map__97934__$1 = cljs.core.__destructure_map(map__97934);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97934__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97934__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_port_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97934__$1,new cljs.core.Keyword(null,"on-port-request","on-port-request",-37574153));
var on_port_forget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97934__$1,new cljs.core.Keyword(null,"on-port-forget","on-port-forget",477264167));
var on_option_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97934__$1,new cljs.core.Keyword(null,"on-option-update","on-option-update",-296671716));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98080 = stack.uix.serial_port.settings.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98080)){
var f__46909__auto___98082 = temp__5823__auto___98080;
(f__46909__auto___98082.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98082.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98082.call(null, ));
} else {
}
} else {
}

var has_port = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,null)));
return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Port settings",new cljs.core.Keyword(null,"action","action",-811238024),((has_port)?uix.compiler.alpha.component_element(stack.uix.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_port_forget], null)],["Close port"]):uix.compiler.alpha.component_element(stack.uix.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_port_request], null)],["Request port"]))], null)],[uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(((has_port)?uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Port",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(port,["td",null,null,false],false),[])]):uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Port filter",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.uix.forms.select,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),stack.schema.webserial.describe_port_filter,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__97889_SHARP_){
return new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417).cljs$core$IFn$_invoke$arity$1(p1__97889_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__97890_SHARP_){
var G__97961 = new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511);
var G__97962 = p1__97890_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__97961,G__97962) : on_option_update.call(null, G__97961,G__97962));
})], null)],[])])])),["tbody",null,null,false],false),[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Baud rate",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.uix.forms.select,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000000),(2000000),(1000000),(512000),(256000),(128000),(115200),(57600),(38400),(19200),(9600)], null),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__97891_SHARP_){
var G__97985 = new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298);
var G__97986 = p1__97891_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__97985,G__97986) : on_option_update.call(null, G__97985,G__97986));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Data bits",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.uix.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.int_range(stack.schema.webserial.DataBits),new cljs.core.Keyword(null,"format","format",-1306924766),(function (p1__97892_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__97892_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"dataBits","dataBits",-455071493).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__97893_SHARP_){
var G__98002 = new cljs.core.Keyword(null,"dataBits","dataBits",-455071493);
var G__98003 = p1__97893_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__98002,G__98003) : on_option_update.call(null, G__98002,G__98003));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Stop bits",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.uix.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.int_range(stack.schema.webserial.StopBits),new cljs.core.Keyword(null,"format","format",-1306924766),(function (p1__97894_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__97894_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"stopBits","stopBits",341236831).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__97895_SHARP_){
var G__98013 = new cljs.core.Keyword(null,"stopBits","stopBits",341236831);
var G__98014 = p1__97895_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__98013,G__98014) : on_option_update.call(null, G__98013,G__98014));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Parity",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.uix.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.enum_values(stack.schema.webserial.Parity),new cljs.core.Keyword(null,"format","format",-1306924766),stack.uix.serial_port.format_keyword,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"parity","parity",-1130304573).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__97896_SHARP_){
var G__98026 = new cljs.core.Keyword(null,"parity","parity",-1130304573);
var G__98027 = p1__97896_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__98026,G__98027) : on_option_update.call(null, G__98026,G__98027));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Flow control",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[null],[uix.compiler.alpha.component_element(stack.uix.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),stack.utils.schema.enum_values(stack.schema.webserial.FlowControl),new cljs.core.Keyword(null,"format","format",-1306924766),stack.uix.serial_port.format_keyword,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__97897_SHARP_){
var G__98038 = new cljs.core.Keyword(null,"flowControl","flowControl",-846811302);
var G__98039 = p1__97897_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__98038,G__98039) : on_option_update.call(null, G__98038,G__98039));
})], null)],[])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98041 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98042 = stack.uix.serial_port.settings;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98042);

try{if(((cljs.core.map_QMARK_(props97921)) || ((props97921 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97921)].join(''),"\n","(clojure.core/or (clojure.core/map? props97921) (clojure.core/nil? props97921))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98041);
}} else {
return f__46992__auto__();
}
});

(stack.uix.serial_port.settings.uix_component_QMARK_ = true);

(stack.uix.serial_port.settings.displayName = "stack.uix.serial-port/settings");

Object.defineProperty(stack.uix.serial_port.settings,"name",(function (){var obj98048 = ({"value":"stack.uix.serial-port/settings"});
return obj98048;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98104 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98104.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98104.cljs$core$IFn$_invoke$arity$4(stack.uix.serial_port.settings,"",null,null) : sig__46918__auto___98104.call(null, stack.uix.serial_port.settings,"",null,null));

window.uix.dev.register_BANG_(stack.uix.serial_port.settings,stack.uix.serial_port.settings.displayName);

(stack.uix.serial_port.settings.fast_refresh_signature = sig__46918__auto___98104);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.serial_port.js.map
