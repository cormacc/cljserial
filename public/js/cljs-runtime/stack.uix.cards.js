goog.provide('stack.uix.cards');
stack.uix.cards.title_simple_ = (function stack$uix$cards$title_simple_(props__46991__auto__){
var props97487 = uix.core.glue_args(props__46991__auto__);
var vec__97489 = [props97487];
var map__97492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97489,(0),null);
var map__97492__$1 = cljs.core.__destructure_map(map__97492);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97492__$1,new cljs.core.Keyword(null,"title","title",636505583));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97616 = stack.uix.cards.title_simple_.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97616)){
var f__46909__auto___97618 = temp__5823__auto___97616;
(f__46909__auto___97618.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97618.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97618.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"pb-2")}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold")}],[title])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97505 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97506 = stack.uix.cards.title_simple_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97506);

try{if(((cljs.core.map_QMARK_(props97487)) || ((props97487 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97487)].join(''),"\n","(clojure.core/or (clojure.core/map? props97487) (clojure.core/nil? props97487))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97505);
}} else {
return f__46992__auto__();
}
});

(stack.uix.cards.title_simple_.uix_component_QMARK_ = true);

(stack.uix.cards.title_simple_.displayName = "stack.uix.cards/title-simple-");

Object.defineProperty(stack.uix.cards.title_simple_,"name",(function (){var obj97519 = ({"value":"stack.uix.cards/title-simple-"});
return obj97519;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97623 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97623.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97623.cljs$core$IFn$_invoke$arity$4(stack.uix.cards.title_simple_,"",null,null) : sig__46918__auto___97623.call(null, stack.uix.cards.title_simple_,"",null,null));

window.uix.dev.register_BANG_(stack.uix.cards.title_simple_,stack.uix.cards.title_simple_.displayName);

(stack.uix.cards.title_simple_.fast_refresh_signature = sig__46918__auto___97623);
} else {
}
} else {
}

stack.uix.cards.title_with_action_ = (function stack$uix$cards$title_with_action_(props__46991__auto__){
var props97527 = uix.core.glue_args(props__46991__auto__);
var vec__97530 = [props97527];
var map__97533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97530,(0),null);
var map__97533__$1 = cljs.core.__destructure_map(map__97533);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97533__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97533__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97625 = stack.uix.cards.title_with_action_.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97625)){
var f__46909__auto___97626 = temp__5823__auto___97625;
(f__46909__auto___97626.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97626.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97626.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"pb-2")}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap")}],[uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 mt-2")}],[uix.compiler.aot._GT_el("h3",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"font-semibold")}],[title])]),uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"ml-4 mt-2 flex-shrink-0")}],[action])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97552 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97553 = stack.uix.cards.title_with_action_;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97553);

try{if(((cljs.core.map_QMARK_(props97527)) || ((props97527 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97527)].join(''),"\n","(clojure.core/or (clojure.core/map? props97527) (clojure.core/nil? props97527))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97552);
}} else {
return f__46992__auto__();
}
});

(stack.uix.cards.title_with_action_.uix_component_QMARK_ = true);

(stack.uix.cards.title_with_action_.displayName = "stack.uix.cards/title-with-action-");

Object.defineProperty(stack.uix.cards.title_with_action_,"name",(function (){var obj97560 = ({"value":"stack.uix.cards/title-with-action-"});
return obj97560;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97628 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97628.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97628.cljs$core$IFn$_invoke$arity$4(stack.uix.cards.title_with_action_,"",null,null) : sig__46918__auto___97628.call(null, stack.uix.cards.title_with_action_,"",null,null));

window.uix.dev.register_BANG_(stack.uix.cards.title_with_action_,stack.uix.cards.title_with_action_.displayName);

(stack.uix.cards.title_with_action_.fast_refresh_signature = sig__46918__auto___97628);
} else {
}
} else {
}

stack.uix.cards.card = (function stack$uix$cards$card(props__46991__auto__){
var props97571 = uix.core.glue_args(props__46991__auto__);
var vec__97576 = [props97571];
var map__97579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97576,(0),null);
var map__97579__$1 = cljs.core.__destructure_map(map__97579);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97579__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97579__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97634 = stack.uix.cards.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97634)){
var f__46909__auto___97635 = temp__5823__auto___97634;
(f__46909__auto___97635.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97635.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97635.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"overflow-hidden rounded-lg shadow-sm p-4")}],[(cljs.core.truth_(action)?uix.compiler.alpha.component_element(stack.uix.cards.title_with_action_,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"action","action",-811238024),action], null)],[]):uix.compiler.alpha.component_element(stack.uix.cards.title_simple_,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null)],[])),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(children,["div",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97592 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97593 = stack.uix.cards.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97593);

try{if(((cljs.core.map_QMARK_(props97571)) || ((props97571 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97571)].join(''),"\n","(clojure.core/or (clojure.core/map? props97571) (clojure.core/nil? props97571))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97592);
}} else {
return f__46992__auto__();
}
});

(stack.uix.cards.card.uix_component_QMARK_ = true);

(stack.uix.cards.card.displayName = "stack.uix.cards/card");

Object.defineProperty(stack.uix.cards.card,"name",(function (){var obj97606 = ({"value":"stack.uix.cards/card"});
return obj97606;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97643 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97643.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97643.cljs$core$IFn$_invoke$arity$4(stack.uix.cards.card,"",null,null) : sig__46918__auto___97643.call(null, stack.uix.cards.card,"",null,null));

window.uix.dev.register_BANG_(stack.uix.cards.card,stack.uix.cards.card.displayName);

(stack.uix.cards.card.fast_refresh_signature = sig__46918__auto___97643);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.cards.js.map
