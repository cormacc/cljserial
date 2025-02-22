goog.provide('cljserial.components.serial_port');
cljserial.components.serial_port.settings = (function cljserial$components$serial_port$settings(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56736 = [clj_props__39918__auto__];
var map__56739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56736,(0),null);
var map__56739__$1 = cljs.core.__destructure_map(map__56739);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_port_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"on-port-request","on-port-request",-37574153));
var on_port_forget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"on-port-forget","on-port-forget",477264167));
var on_option_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"on-option-update","on-option-update",-296671716));
var f__39919__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.utils.webserial.SerialOptions,options))){
} else {
throw (new Error("Assert failed: (m/validate webserial/SerialOptions options)"));
}

if(goog.DEBUG){
var temp__5804__auto___56790 = cljserial.components.serial_port.settings.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56790)){
var f__39838__auto___56791 = temp__5804__auto___56790;
(f__39838__auto___56791.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56791.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56791.call(null, ));
} else {
}
} else {
}

var has_port = (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,null)));
return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Port settings",new cljs.core.Keyword(null,"action","action",-811238024),((has_port)?uix.compiler.alpha.component_element(cljserial.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_port_forget], null)],["Close port"]):uix.compiler.alpha.component_element(cljserial.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_port_request], null)],["Request port"]))], null)],[uix.compiler.alpha.component_element(cljserial.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(((has_port)?uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Port"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(port),[])]):uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Port filter"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(cljserial.components.forms.select,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null),new cljs.core.Keyword(null,"format","format",-1306924766),cljserial.utils.webserial.describe_port_filter,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__56708_SHARP_){
return new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417).cljs$core$IFn$_invoke$arity$1(p1__56708_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56709_SHARP_){
var G__56742 = new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511);
var G__56743 = p1__56709_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__56742,G__56743) : on_option_update.call(null, G__56742,G__56743));
})], null)],[])])])),["tbody",null,null,false],false),[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Baud rate"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(cljserial.components.forms.select,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000000),(2000000),(1000000),(512000),(256000),(128000),(115200),(57600),(38400),(19200),(9600)], null),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56710_SHARP_){
var G__56744 = new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298);
var G__56745 = p1__56710_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__56744,G__56745) : on_option_update.call(null, G__56744,G__56745));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Data bits"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(cljserial.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),cljserial.utils.schema.int_range(cljserial.utils.webserial.DataBits),new cljs.core.Keyword(null,"format","format",-1306924766),(function (p1__56711_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56711_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"dataBits","dataBits",-455071493).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56713_SHARP_){
var G__56749 = new cljs.core.Keyword(null,"dataBits","dataBits",-455071493);
var G__56750 = p1__56713_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__56749,G__56750) : on_option_update.call(null, G__56749,G__56750));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Stop bits"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(cljserial.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),cljserial.utils.schema.int_range(cljserial.utils.webserial.StopBits),new cljs.core.Keyword(null,"format","format",-1306924766),(function (p1__56714_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56714_SHARP_);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"stopBits","stopBits",341236831).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56718_SHARP_){
var G__56759 = new cljs.core.Keyword(null,"stopBits","stopBits",341236831);
var G__56761 = p1__56718_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__56759,G__56761) : on_option_update.call(null, G__56759,G__56761));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Parity"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(cljserial.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),cljserial.utils.schema.enum_values(cljserial.utils.webserial.Parity),new cljs.core.Keyword(null,"format","format",-1306924766),(function (i){
return cljs.core.name(i);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"parity","parity",-1130304573).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56719_SHARP_){
var G__56765 = new cljs.core.Keyword(null,"parity","parity",-1130304573);
var G__56766 = p1__56719_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__56765,G__56766) : on_option_update.call(null, G__56765,G__56766));
})], null)],[])])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Flow control"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.alpha.component_element(cljserial.components.forms.select,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"items","items",1031954938),cljserial.utils.schema.enum_values(cljserial.utils.webserial.FlowControl),new cljs.core.Keyword(null,"format","format",-1306924766),(function (i){
return cljs.core.name(i);
}),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56724_SHARP_){
var G__56769 = new cljs.core.Keyword(null,"flowControl","flowControl",-846811302);
var G__56770 = p1__56724_SHARP_.target.value;
return (on_option_update.cljs$core$IFn$_invoke$arity$2 ? on_option_update.cljs$core$IFn$_invoke$arity$2(G__56769,G__56770) : on_option_update.call(null, G__56769,G__56770));
})], null)],[])])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56771 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56772 = cljserial.components.serial_port.settings;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56772);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56771);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.serial_port.settings.uix_component_QMARK_ = true);

(cljserial.components.serial_port.settings.displayName = "cljserial.components.serial-port/settings");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56799 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56799.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56799.cljs$core$IFn$_invoke$arity$4(cljserial.components.serial_port.settings,"",null,null) : sig__39847__auto___56799.call(null, cljserial.components.serial_port.settings,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.serial_port.settings,cljserial.components.serial_port.settings.displayName);

(cljserial.components.serial_port.settings.fast_refresh_signature = sig__39847__auto___56799);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.serial_port.js.map
