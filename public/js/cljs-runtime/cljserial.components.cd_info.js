goog.provide('cljserial.components.cd_info');
cljserial.components.cd_info.card = (function cljserial$components$cd_info$card(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56886 = [clj_props__39918__auto__];
var cd_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56886,(0),null);
var f__39919__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(cljserial.services.mbt_cd.CdState)){
} else {
throw (new Error("Assert failed: mbt-cd/CdState"));
}

if(cljs.core.truth_(cd_info)){
} else {
throw (new Error("Assert failed: cd-info"));
}

if(goog.DEBUG){
var temp__5804__auto___56926 = cljserial.components.cd_info.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56926)){
var f__39838__auto___56927 = temp__5804__auto___56926;
(f__39838__auto___56927.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56927.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56927.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Controller Info"], null)],[uix.compiler.alpha.component_element(cljserial.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("tbody",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Serial #"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(cd_info)),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Hardware Revision"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(new cljs.core.Keyword(null,"hardware-revision","hardware-revision",-2035331340).cljs$core$IFn$_invoke$arity$1(cd_info)),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Firmware Revision"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(cljserial.schema.version.__GT_string(new cljs.core.Keyword(null,"firmware-revision","firmware-revision",1297059481).cljs$core$IFn$_invoke$arity$1(cd_info))),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Build Configuration"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(new cljs.core.Keyword(null,"build-configuration","build-configuration",-1060153034).cljs$core$IFn$_invoke$arity$1(cd_info)),[])]),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Track"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(cd_info)),[])]),(function (){var sd_info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sd-card","sd-card",-220705254).cljs$core$IFn$_invoke$arity$1(cd_info));
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sd-card","sd-card",-220705254).cljs$core$IFn$_invoke$arity$1(cd_info));
uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Storage"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s MB",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used-mb","used-mb",-1074652995).cljs$core$IFn$_invoke$arity$1(sd_info),new cljs.core.Keyword(null,"capacity-mb","capacity-mb",-2024008306).cljs$core$IFn$_invoke$arity$1(sd_info)], 0))),[])]);

return uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Files"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(cljs.core.count(files)),[])]);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56906 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56907 = cljserial.components.cd_info.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56907);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56906);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.cd_info.card.uix_component_QMARK_ = true);

(cljserial.components.cd_info.card.displayName = "cljserial.components.cd-info/card");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56934 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56934.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56934.cljs$core$IFn$_invoke$arity$4(cljserial.components.cd_info.card,"",null,null) : sig__39847__auto___56934.call(null, cljserial.components.cd_info.card,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.cd_info.card,cljserial.components.cd_info.card.displayName);

(cljserial.components.cd_info.card.fast_refresh_signature = sig__39847__auto___56934);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.cd_info.js.map
