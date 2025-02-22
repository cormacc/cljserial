goog.provide('stack.components.cards');
stack.components.cards.title_simple_ = (function stack$components$cards$title_simple_(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95020 = [clj_props__45318__auto__];
var map__95023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95020,(0),null);
var map__95023__$1 = cljs.core.__destructure_map(map__95023);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95023__$1,new cljs.core.Keyword(null,"title","title",636505583));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95164 = stack.components.cards.title_simple_.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95164)){
var f__45248__auto___95166 = temp__5823__auto___95164;
(f__45248__auto___95166.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95166.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95166.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"pb-2")}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold")}],[title])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95053 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95054 = stack.components.cards.title_simple_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95054);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95053);
}} else {
return f__45319__auto__();
}
});

(stack.components.cards.title_simple_.uix_component_QMARK_ = true);

(stack.components.cards.title_simple_.displayName = "stack.components.cards/title-simple-");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95171 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95171.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95171.cljs$core$IFn$_invoke$arity$4(stack.components.cards.title_simple_,"",null,null) : sig__45257__auto___95171.call(null, stack.components.cards.title_simple_,"",null,null));

window.uix.dev.register_BANG_(stack.components.cards.title_simple_,stack.components.cards.title_simple_.displayName);

(stack.components.cards.title_simple_.fast_refresh_signature = sig__45257__auto___95171);
} else {
}
} else {
}
stack.components.cards.title_with_action_ = (function stack$components$cards$title_with_action_(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95075 = [clj_props__45318__auto__];
var map__95078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95075,(0),null);
var map__95078__$1 = cljs.core.__destructure_map(map__95078);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95078__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95078__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95177 = stack.components.cards.title_with_action_.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95177)){
var f__45248__auto___95178 = temp__5823__auto___95177;
(f__45248__auto___95178.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95178.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95178.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"pb-2")}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap")}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 mt-2")}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold")}],[title])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 mt-2 flex-shrink-0")}],[action])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95101 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95102 = stack.components.cards.title_with_action_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95102);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95101);
}} else {
return f__45319__auto__();
}
});

(stack.components.cards.title_with_action_.uix_component_QMARK_ = true);

(stack.components.cards.title_with_action_.displayName = "stack.components.cards/title-with-action-");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95186 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95186.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95186.cljs$core$IFn$_invoke$arity$4(stack.components.cards.title_with_action_,"",null,null) : sig__45257__auto___95186.call(null, stack.components.cards.title_with_action_,"",null,null));

window.uix.dev.register_BANG_(stack.components.cards.title_with_action_,stack.components.cards.title_with_action_.displayName);

(stack.components.cards.title_with_action_.fast_refresh_signature = sig__45257__auto___95186);
} else {
}
} else {
}
stack.components.cards.card = (function stack$components$cards$card(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95126 = [clj_props__45318__auto__];
var map__95129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95126,(0),null);
var map__95129__$1 = cljs.core.__destructure_map(map__95129);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95129__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95129__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95190 = stack.components.cards.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95190)){
var f__45248__auto___95194 = temp__5823__auto___95190;
(f__45248__auto___95194.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95194.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95194.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"overflow-hidden rounded-lg shadow p-4")}],[(cljs.core.truth_(action)?uix.compiler.alpha.component_element(stack.components.cards.title_with_action_,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"action","action",-811238024),action], null)],[]):uix.compiler.alpha.component_element(stack.components.cards.title_simple_,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null)],[])),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(children,["div",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95151 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95152 = stack.components.cards.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95152);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95151);
}} else {
return f__45319__auto__();
}
});

(stack.components.cards.card.uix_component_QMARK_ = true);

(stack.components.cards.card.displayName = "stack.components.cards/card");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95210 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95210.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95210.cljs$core$IFn$_invoke$arity$4(stack.components.cards.card,"",null,null) : sig__45257__auto___95210.call(null, stack.components.cards.card,"",null,null));

window.uix.dev.register_BANG_(stack.components.cards.card,stack.components.cards.card.displayName);

(stack.components.cards.card.fast_refresh_signature = sig__45257__auto___95210);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.cards.js.map
