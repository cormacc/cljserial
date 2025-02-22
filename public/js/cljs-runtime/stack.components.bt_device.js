goog.provide('stack.components.bt_device');
stack.components.bt_device.settings = (function stack$components$bt_device$settings(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95422 = [clj_props__45318__auto__];
var map__95425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95422,(0),null);
var map__95425__$1 = cljs.core.__destructure_map(map__95425);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95425__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_device_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95425__$1,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927));
var on_device_forget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95425__$1,new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95470 = stack.components.bt_device.settings.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95470)){
var f__45248__auto___95471 = temp__5823__auto___95470;
(f__45248__auto___95471.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95471.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95471.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bluetooth settings",new cljs.core.Keyword(null,"action","action",-811238024),(((!((device == null))))?uix.compiler.alpha.component_element(stack.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_device_forget], null)],["Disconnect device"]):uix.compiler.alpha.component_element(stack.components.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_device_request], null)],["Connect device"]))], null)],[uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs((((!((device == null))))?uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Device",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.utils.webbluetooth.describe_device(device),["td",null,null,false],false),[])]):uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Device",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Disconnected",["td",null,null,false],false),[])])),["tbody",null,null,false],false),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95445 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95446 = stack.components.bt_device.settings;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95446);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95445);
}} else {
return f__45319__auto__();
}
});

(stack.components.bt_device.settings.uix_component_QMARK_ = true);

(stack.components.bt_device.settings.displayName = "stack.components.bt-device/settings");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95482 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95482.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95482.cljs$core$IFn$_invoke$arity$4(stack.components.bt_device.settings,"",null,null) : sig__45257__auto___95482.call(null, stack.components.bt_device.settings,"",null,null));

window.uix.dev.register_BANG_(stack.components.bt_device.settings,stack.components.bt_device.settings.displayName);

(stack.components.bt_device.settings.fast_refresh_signature = sig__45257__auto___95482);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.bt_device.js.map
