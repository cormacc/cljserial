goog.provide('stack.utils.icons');
stack.utils.icons.default_size = "2rem";
stack.utils.icons.hiccup__GT_react = (function stack$utils$icons$hiccup__GT_react(form){
if(cljs.core.seq_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stack.utils.icons.hiccup__GT_react,form);
} else {
if(cljs.core.vector_QMARK_(form)){
var form__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.first(form)))?cljs.core.rest(form):form
);
var vec__97414 = form__$1;
var seq__97415 = cljs.core.seq(vec__97414);
var first__97416 = cljs.core.first(seq__97415);
var seq__97415__$1 = cljs.core.next(seq__97415);
var tag = first__97416;
var first__97416__$1 = cljs.core.first(seq__97415__$1);
var seq__97415__$2 = cljs.core.next(seq__97415__$1);
var attrs = first__97416__$1;
var children = seq__97415__$2;
var vec__97417 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,children], null):(((cljs.core.count(form__$1) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null)
));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97417,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97417,(1),null);
var attrs__$2 = (function (){var G__97434 = attrs__$1;
if(cljs.core.contains_QMARK_(cljs.core.meta(form__$1),new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97434,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form__$1)));
} else {
return G__97434;
}
})();
var children__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(stack.utils.icons.hiccup__GT_react,children__$1);
if(cljs.core.truth_(attrs__$2)){
return uix.compiler.alpha.component_element(tag,uix.compiler.attributes.interpret_props(attrs__$2),[children__$2]);
} else {
return uix.compiler.alpha.component_element(tag,uix.compiler.attributes.interpret_props(children__$2),[]);
}
} else {
return form;

}
}
});
stack.utils.icons.round_icon = (function stack$utils$icons$round_icon(props__46991__auto__){
var props97442 = uix.core.glue_args(props__46991__auto__);
var vec__97443 = [props97442];
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97443,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97476 = stack.utils.icons.round_icon.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97476)){
var f__46909__auto___97477 = temp__5823__auto___97476;
(f__46909__auto___97477.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97477.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97477.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(props,["div",null,"btn btn-ghost btn-circle",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97451 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97452 = stack.utils.icons.round_icon;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97452);

try{if(((cljs.core.map_QMARK_(props97442)) || ((props97442 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97442)].join(''),"\n","(clojure.core/or (clojure.core/map? props97442) (clojure.core/nil? props97442))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97451);
}} else {
return f__46992__auto__();
}
});

(stack.utils.icons.round_icon.uix_component_QMARK_ = true);

(stack.utils.icons.round_icon.displayName = "stack.utils.icons/round-icon");

Object.defineProperty(stack.utils.icons.round_icon,"name",(function (){var obj97458 = ({"value":"stack.utils.icons/round-icon"});
return obj97458;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97480 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97480.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97480.cljs$core$IFn$_invoke$arity$4(stack.utils.icons.round_icon,"",null,null) : sig__46918__auto___97480.call(null, stack.utils.icons.round_icon,"",null,null));

window.uix.dev.register_BANG_(stack.utils.icons.round_icon,stack.utils.icons.round_icon.displayName);

(stack.utils.icons.round_icon.fast_refresh_signature = sig__46918__auto___97480);
} else {
}
} else {
}


//# sourceMappingURL=stack.utils.icons.js.map
