goog.provide('connect.components.cd_info');
connect.components.cd_info.card = (function connect$components$cd_info$card(props__46991__auto__){
var props97830 = uix.core.glue_args(props__46991__auto__);
var vec__97844 = [props97830];
var cd_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97844,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97949 = connect.components.cd_info.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97949)){
var f__46909__auto___97950 = temp__5823__auto___97949;
(f__46909__auto___97950.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97950.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97950.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Controller Info"], null)],[uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Serial #",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(cd_info),["td",null,null,false],false),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Hardware Revision",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"hardware_rev","hardware_rev",-2097287105).cljs$core$IFn$_invoke$arity$1(cd_info),["td",null,null,false],false),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Firmware Revision",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.schema.version.__GT_string(new cljs.core.Keyword(null,"firmware_rev","firmware_rev",-938304104).cljs$core$IFn$_invoke$arity$1(cd_info)),["td",null,null,false],false),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Build Configuration",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"build_configuration","build_configuration",-1566660232).cljs$core$IFn$_invoke$arity$1(cd_info),["td",null,null,false],false),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Track",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(cd_info),["td",null,null,false],false),[])]),(function (){var sd_info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sd_card","sd_card",-297846608).cljs$core$IFn$_invoke$arity$1(cd_info));
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sd_card","sd_card",-297846608).cljs$core$IFn$_invoke$arity$1(cd_info));
uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Storage",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s MB",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used_mb","used_mb",-6399057).cljs$core$IFn$_invoke$arity$1(sd_info),new cljs.core.Keyword(null,"capacity_mb","capacity_mb",1942224107).cljs$core$IFn$_invoke$arity$1(sd_info)], 0)),["td",null,null,false],false),[])]);

return uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Files",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.count(files),["td",null,null,false],false),[])]);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97919 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97920 = connect.components.cd_info.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97920);

try{if(((cljs.core.map_QMARK_(props97830)) || ((props97830 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97830)].join(''),"\n","(clojure.core/or (clojure.core/map? props97830) (clojure.core/nil? props97830))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97919);
}} else {
return f__46992__auto__();
}
});

(connect.components.cd_info.card.uix_component_QMARK_ = true);

(connect.components.cd_info.card.displayName = "connect.components.cd-info/card");

Object.defineProperty(connect.components.cd_info.card,"name",(function (){var obj97938 = ({"value":"connect.components.cd-info/card"});
return obj97938;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97984 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97984.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97984.cljs$core$IFn$_invoke$arity$4(connect.components.cd_info.card,"",null,null) : sig__46918__auto___97984.call(null, connect.components.cd_info.card,"",null,null));

window.uix.dev.register_BANG_(connect.components.cd_info.card,connect.components.cd_info.card.displayName);

(connect.components.cd_info.card.fast_refresh_signature = sig__46918__auto___97984);
} else {
}
} else {
}


//# sourceMappingURL=connect.components.cd_info.js.map
