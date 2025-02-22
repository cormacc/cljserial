goog.provide('stack.components.hardware');
stack.components.hardware.device_table = (function stack$components$hardware$device_table(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95581 = [clj_props__45318__auto__];
var map__95584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95581,(0),null);
var map__95584__$1 = cljs.core.__destructure_map(map__95584);
var devices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95584__$1,new cljs.core.Keyword(null,"devices","devices",1929380599));
var f__45319__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seqable","seqable",-1305253818),stack.schema.hardware.EmbeddedDevice], null))){
} else {
throw (new Error("Assert failed: [:seqable EmbeddedDevice]"));
}

if(cljs.core.truth_(devices)){
} else {
throw (new Error("Assert failed: devices"));
}

if(goog.DEBUG){
var temp__5823__auto___95614 = stack.components.hardware.device_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95614)){
var f__45248__auto___95615 = temp__5823__auto___95614;
(f__45248__auto___95615.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95615.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95615.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Devices"], null)],[uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Serial",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Hardware revision",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Firmware",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Bootloader",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$components$hardware$device_table_$_iter__95597(s__95598){
return (new cljs.core.LazySeq(null,(function (){
var s__95598__$1 = s__95598;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__95598__$1);
if(temp__5823__auto__){
var s__95598__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95598__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95598__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95600 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95599 = (0);
while(true){
if((i__95599 < size__5479__auto__)){
var d = cljs.core._nth(c__5478__auto__,i__95599);
cljs.core.chunk_append(b__95600,uix.compiler.aot._GT_el("tr",[{'key':new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hardware_rev","hardware_rev",-2097287105).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"firmware_rev","firmware_rev",-938304104).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bootloader_rev","bootloader_rev",-1546586338).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[])]));

var G__95616 = (i__95599 + (1));
i__95599 = G__95616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95600),stack$components$hardware$device_table_$_iter__95597(cljs.core.chunk_rest(s__95598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95600),null);
}
} else {
var d = cljs.core.first(s__95598__$2);
return cljs.core.cons(uix.compiler.aot._GT_el("tr",[{'key':new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hardware_rev","hardware_rev",-2097287105).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"firmware_rev","firmware_rev",-938304104).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bootloader_rev","bootloader_rev",-1546586338).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[])]),stack$components$hardware$device_table_$_iter__95597(cljs.core.rest(s__95598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(devices);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95605 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95606 = stack.components.hardware.device_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95606);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95605);
}} else {
return f__45319__auto__();
}
});

(stack.components.hardware.device_table.uix_component_QMARK_ = true);

(stack.components.hardware.device_table.displayName = "stack.components.hardware/device-table");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95623 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95623.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95623.cljs$core$IFn$_invoke$arity$4(stack.components.hardware.device_table,"",null,null) : sig__45257__auto___95623.call(null, stack.components.hardware.device_table,"",null,null));

window.uix.dev.register_BANG_(stack.components.hardware.device_table,stack.components.hardware.device_table.displayName);

(stack.components.hardware.device_table.fast_refresh_signature = sig__45257__auto___95623);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.hardware.js.map
