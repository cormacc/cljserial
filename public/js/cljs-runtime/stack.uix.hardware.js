goog.provide('stack.uix.hardware');
stack.uix.hardware.device_table = (function stack$uix$hardware$device_table(props__46991__auto__){
var props98247 = uix.core.glue_args(props__46991__auto__);
var vec__98253 = [props98247];
var map__98256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98253,(0),null);
var map__98256__$1 = cljs.core.__destructure_map(map__98256);
var devices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98256__$1,new cljs.core.Keyword(null,"devices","devices",1929380599));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98318 = stack.uix.hardware.device_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98318)){
var f__46909__auto___98319 = temp__5823__auto___98318;
(f__46909__auto___98319.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98319.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98319.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Devices"], null)],[uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Serial",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Hardware revision",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Firmware",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Bootloader",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return uix.compiler.aot._GT_el("tr",[{'key':new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hardware_rev","hardware_rev",-2097287105).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"firmware_rev","firmware_rev",-938304104).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bootloader_rev","bootloader_rev",-1546586338).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[])]);
}),devices),["tbody",null,null,false],false),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98297 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98298 = stack.uix.hardware.device_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98298);

try{if(((cljs.core.map_QMARK_(props98247)) || ((props98247 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98247)].join(''),"\n","(clojure.core/or (clojure.core/map? props98247) (clojure.core/nil? props98247))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98297);
}} else {
return f__46992__auto__();
}
});

(stack.uix.hardware.device_table.uix_component_QMARK_ = true);

(stack.uix.hardware.device_table.displayName = "stack.uix.hardware/device-table");

Object.defineProperty(stack.uix.hardware.device_table,"name",(function (){var obj98301 = ({"value":"stack.uix.hardware/device-table"});
return obj98301;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98337 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98337.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98337.cljs$core$IFn$_invoke$arity$4(stack.uix.hardware.device_table,"",null,null) : sig__46918__auto___98337.call(null, stack.uix.hardware.device_table,"",null,null));

window.uix.dev.register_BANG_(stack.uix.hardware.device_table,stack.uix.hardware.device_table.displayName);

(stack.uix.hardware.device_table.fast_refresh_signature = sig__46918__auto___98337);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.hardware.js.map
