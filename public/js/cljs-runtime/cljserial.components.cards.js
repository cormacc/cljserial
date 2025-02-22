goog.provide('cljserial.components.cards');
cljserial.components.cards.title_simple_ = (function cljserial$components$cards$title_simple_(props__79555__auto__){
var clj_props__79556__auto__ = uix.core.glue_args(props__79555__auto__);
var vec__117662 = [clj_props__79556__auto__];
var map__117665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117662,(0),null);
var map__117665__$1 = cljs.core.__destructure_map(map__117665);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117665__$1,new cljs.core.Keyword(null,"title","title",636505583));
var f__79557__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___117710 = cljserial.components.cards.title_simple_.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___117710)){
var f__79486__auto___117711 = temp__5804__auto___117710;
(f__79486__auto___117711.cljs$core$IFn$_invoke$arity$0 ? f__79486__auto___117711.cljs$core$IFn$_invoke$arity$0() : f__79486__auto___117711.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"pb-2")}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold")}],[title])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__117670 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__117671 = cljserial.components.cards.title_simple_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__117671);

try{if(((cljs.core.map_QMARK_(clj_props__79556__auto__)) || ((clj_props__79556__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__79556__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__79556__auto__) (clojure.core/nil? clj-props__79556__auto__))"].join('')));
}

return f__79557__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__117670);
}} else {
return f__79557__auto__();
}
});

(cljserial.components.cards.title_simple_.uix_component_QMARK_ = true);

(cljserial.components.cards.title_simple_.displayName = "cljserial.components.cards/title-simple-");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__79495__auto___117718 = window.uix.dev.signature_BANG_();
(sig__79495__auto___117718.cljs$core$IFn$_invoke$arity$4 ? sig__79495__auto___117718.cljs$core$IFn$_invoke$arity$4(cljserial.components.cards.title_simple_,"",null,null) : sig__79495__auto___117718.call(null, cljserial.components.cards.title_simple_,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.cards.title_simple_,cljserial.components.cards.title_simple_.displayName);

(cljserial.components.cards.title_simple_.fast_refresh_signature = sig__79495__auto___117718);
} else {
}
} else {
}
cljserial.components.cards.title_with_action_ = (function cljserial$components$cards$title_with_action_(props__79555__auto__){
var clj_props__79556__auto__ = uix.core.glue_args(props__79555__auto__);
var vec__117678 = [clj_props__79556__auto__];
var map__117681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117678,(0),null);
var map__117681__$1 = cljs.core.__destructure_map(map__117681);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117681__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117681__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var f__79557__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___117721 = cljserial.components.cards.title_with_action_.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___117721)){
var f__79486__auto___117722 = temp__5804__auto___117721;
(f__79486__auto___117722.cljs$core$IFn$_invoke$arity$0 ? f__79486__auto___117722.cljs$core$IFn$_invoke$arity$0() : f__79486__auto___117722.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"pb-2")}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap")}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 mt-2")}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold")}],[title])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 mt-2 flex-shrink-0")}],[action])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__117688 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__117689 = cljserial.components.cards.title_with_action_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__117689);

try{if(((cljs.core.map_QMARK_(clj_props__79556__auto__)) || ((clj_props__79556__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__79556__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__79556__auto__) (clojure.core/nil? clj-props__79556__auto__))"].join('')));
}

return f__79557__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__117688);
}} else {
return f__79557__auto__();
}
});

(cljserial.components.cards.title_with_action_.uix_component_QMARK_ = true);

(cljserial.components.cards.title_with_action_.displayName = "cljserial.components.cards/title-with-action-");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__79495__auto___117727 = window.uix.dev.signature_BANG_();
(sig__79495__auto___117727.cljs$core$IFn$_invoke$arity$4 ? sig__79495__auto___117727.cljs$core$IFn$_invoke$arity$4(cljserial.components.cards.title_with_action_,"",null,null) : sig__79495__auto___117727.call(null, cljserial.components.cards.title_with_action_,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.cards.title_with_action_,cljserial.components.cards.title_with_action_.displayName);

(cljserial.components.cards.title_with_action_.fast_refresh_signature = sig__79495__auto___117727);
} else {
}
} else {
}
cljserial.components.cards.card = (function cljserial$components$cards$card(props__79555__auto__){
var clj_props__79556__auto__ = uix.core.glue_args(props__79555__auto__);
var vec__117697 = [clj_props__79556__auto__];
var map__117700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117697,(0),null);
var map__117700__$1 = cljs.core.__destructure_map(map__117700);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117700__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117700__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__79557__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___117730 = cljserial.components.cards.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___117730)){
var f__79486__auto___117731 = temp__5804__auto___117730;
(f__79486__auto___117731.cljs$core$IFn$_invoke$arity$0 ? f__79486__auto___117731.cljs$core$IFn$_invoke$arity$0() : f__79486__auto___117731.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"overflow-hidden rounded-lg shadow p-4")}],[(cljs.core.truth_(action)?uix.compiler.alpha.component_element(cljserial.components.cards.title_with_action_,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"action","action",-811238024),action], null)],[]):uix.compiler.alpha.component_element(cljserial.components.cards.title_simple_,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null)],[])),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(children,["div",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__117701 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__117702 = cljserial.components.cards.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__117702);

try{if(((cljs.core.map_QMARK_(clj_props__79556__auto__)) || ((clj_props__79556__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__79556__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__79556__auto__) (clojure.core/nil? clj-props__79556__auto__))"].join('')));
}

return f__79557__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__117701);
}} else {
return f__79557__auto__();
}
});

(cljserial.components.cards.card.uix_component_QMARK_ = true);

(cljserial.components.cards.card.displayName = "cljserial.components.cards/card");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__79495__auto___117738 = window.uix.dev.signature_BANG_();
(sig__79495__auto___117738.cljs$core$IFn$_invoke$arity$4 ? sig__79495__auto___117738.cljs$core$IFn$_invoke$arity$4(cljserial.components.cards.card,"",null,null) : sig__79495__auto___117738.call(null, cljserial.components.cards.card,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.cards.card,cljserial.components.cards.card.displayName);

(cljserial.components.cards.card.fast_refresh_signature = sig__79495__auto___117738);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.cards.js.map
