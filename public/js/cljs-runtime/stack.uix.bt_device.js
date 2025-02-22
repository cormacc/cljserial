goog.provide('stack.uix.bt_device');
stack.uix.bt_device.settings = (function stack$uix$bt_device$settings(props__46991__auto__){
var props98053 = uix.core.glue_args(props__46991__auto__);
var vec__98059 = [props98053];
var map__98062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98059,(0),null);
var map__98062__$1 = cljs.core.__destructure_map(map__98062);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98062__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_device_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98062__$1,new cljs.core.Keyword(null,"on-device-request","on-device-request",-766074927));
var on_device_forget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98062__$1,new cljs.core.Keyword(null,"on-device-forget","on-device-forget",485162705));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98135 = stack.uix.bt_device.settings.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98135)){
var f__46909__auto___98136 = temp__5823__auto___98135;
(f__46909__auto___98136.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98136.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98136.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bluetooth settings",new cljs.core.Keyword(null,"action","action",-811238024),(((!((device == null))))?uix.compiler.alpha.component_element(stack.uix.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_device_forget], null)],["Disconnect device"]):uix.compiler.alpha.component_element(stack.uix.buttons.button,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_device_request], null)],["Connect device"]))], null)],[uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs((((!((device == null))))?uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Device",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.apis.webbluetooth.describe_device(device),["td",null,null,false],false),[])]):uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Device",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Disconnected",["td",null,null,false],false),[])])),["tbody",null,null,false],false),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98109 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98110 = stack.uix.bt_device.settings;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98110);

try{if(((cljs.core.map_QMARK_(props98053)) || ((props98053 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98053)].join(''),"\n","(clojure.core/or (clojure.core/map? props98053) (clojure.core/nil? props98053))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98109);
}} else {
return f__46992__auto__();
}
});

(stack.uix.bt_device.settings.uix_component_QMARK_ = true);

(stack.uix.bt_device.settings.displayName = "stack.uix.bt-device/settings");

Object.defineProperty(stack.uix.bt_device.settings,"name",(function (){var obj98123 = ({"value":"stack.uix.bt-device/settings"});
return obj98123;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98142 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98142.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98142.cljs$core$IFn$_invoke$arity$4(stack.uix.bt_device.settings,"",null,null) : sig__46918__auto___98142.call(null, stack.uix.bt_device.settings,"",null,null));

window.uix.dev.register_BANG_(stack.uix.bt_device.settings,stack.uix.bt_device.settings.displayName);

(stack.uix.bt_device.settings.fast_refresh_signature = sig__46918__auto___98142);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.bt_device.js.map
