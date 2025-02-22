goog.provide('stack.components.statusbar');
stack.components.statusbar.statusbar = (function stack$components$statusbar$statusbar(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__94904 = [clj_props__45318__auto__];
var map__94907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94904,(0),null);
var map__94907__$1 = cljs.core.__destructure_map(map__94907);
var copyright = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94907__$1,new cljs.core.Keyword(null,"copyright","copyright",-1829660853));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___94973 = stack.components.statusbar.statusbar.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___94973)){
var f__45248__auto___94974 = temp__5823__auto___94973;
(f__45248__auto___94974.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___94974.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___94974.call(null, ));
} else {
}
} else {
}

var notice = cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("Copyright (c) %s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(copyright),new cljs.core.Keyword(null,"holder","holder",1786017528).cljs$core$IFn$_invoke$arity$1(copyright)], 0));
return uix.compiler.aot._GT_el("footer",[{'className':"footer footer-center"}],[uix.compiler.aot._GT_el("aside",[null],[uix.compiler.aot._GT_el("p",uix.compiler.attributes.interpret_attrs(notice,["p",null,null,false],false),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__94942 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__94943 = stack.components.statusbar.statusbar;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__94943);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__94942);
}} else {
return f__45319__auto__();
}
});

(stack.components.statusbar.statusbar.uix_component_QMARK_ = true);

(stack.components.statusbar.statusbar.displayName = "stack.components.statusbar/statusbar");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___94987 = window.uix.dev.signature_BANG_();
(sig__45257__auto___94987.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___94987.cljs$core$IFn$_invoke$arity$4(stack.components.statusbar.statusbar,"",null,null) : sig__45257__auto___94987.call(null, stack.components.statusbar.statusbar,"",null,null));

window.uix.dev.register_BANG_(stack.components.statusbar.statusbar,stack.components.statusbar.statusbar.displayName);

(stack.components.statusbar.statusbar.fast_refresh_signature = sig__45257__auto___94987);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.statusbar.js.map
