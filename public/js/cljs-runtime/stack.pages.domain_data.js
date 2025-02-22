goog.provide('stack.pages.domain_data');
stack.pages.domain_data.layout = (function stack$pages$domain_data$layout(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__88752 = [clj_props__38770__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88752,(0),null);
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___88757 = stack.pages.domain_data.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___88757)){
var f__38700__auto___88758 = temp__5823__auto___88757;
(f__38700__auto___88758.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___88758.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___88758.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Devices (local storage)"], null)],[uix.compiler.alpha.component_element(stack.components.hardware.device_table,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"devices","devices",1929380599),cljs.core.PersistentVector.EMPTY], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__88755 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__88756 = stack.pages.domain_data.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__88756);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__88755);
}} else {
return f__38771__auto__();
}
});

(stack.pages.domain_data.layout.uix_component_QMARK_ = true);

(stack.pages.domain_data.layout.displayName = "stack.pages.domain-data/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___88759 = window.uix.dev.signature_BANG_();
(sig__38709__auto___88759.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___88759.cljs$core$IFn$_invoke$arity$4(stack.pages.domain_data.layout,"",null,null) : sig__38709__auto___88759.call(null, stack.pages.domain_data.layout,"",null,null));

window.uix.dev.register_BANG_(stack.pages.domain_data.layout,stack.pages.domain_data.layout.displayName);

(stack.pages.domain_data.layout.fast_refresh_signature = sig__38709__auto___88759);
} else {
}
} else {
}

//# sourceMappingURL=stack.pages.domain_data.js.map
