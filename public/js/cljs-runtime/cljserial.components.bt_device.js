goog.provide('cljserial.components.bt_device');
cljserial.components.bt_device.settings = (function cljserial$components$bt_device$settings(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56700 = [clj_props__39918__auto__];
var map__56703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56700,(0),null);
var map__56703__$1 = cljs.core.__destructure_map(map__56703);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_device_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927));
var on_device_forget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56746 = cljserial.components.bt_device.settings.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56746)){
var f__39838__auto___56747 = temp__5804__auto___56746;
(f__39838__auto___56747.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56747.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56747.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bluetooth settings",new cljs.core.Keyword(null,"action","action",-811238024),(((!((device == null))))?uix.compiler.alpha.component_element(cljserial.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_device_forget], null)],["Disconnect device"]):uix.compiler.alpha.component_element(cljserial.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_device_request], null)],["Connect device"]))], null)],[uix.compiler.alpha.component_element(cljserial.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs((((!((device == null))))?uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Device"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(cljserial.utils.webbluetooth.describe_device(device)),[])]):uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Device"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Disconnected"),[])])),["tbody",null,null,false],false),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56729 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56732 = cljserial.components.bt_device.settings;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56732);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56729);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.bt_device.settings.uix_component_QMARK_ = true);

(cljserial.components.bt_device.settings.displayName = "cljserial.components.bt-device/settings");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56757 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56757.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56757.cljs$core$IFn$_invoke$arity$4(cljserial.components.bt_device.settings,"",null,null) : sig__39847__auto___56757.call(null, cljserial.components.bt_device.settings,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.bt_device.settings,cljserial.components.bt_device.settings.displayName);

(cljserial.components.bt_device.settings.fast_refresh_signature = sig__39847__auto___56757);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.bt_device.js.map
