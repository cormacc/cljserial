goog.provide('stack.uix.statusbar');
stack.uix.statusbar.statusbar = (function stack$uix$statusbar$statusbar(props__46991__auto__){
var props97403 = uix.core.glue_args(props__46991__auto__);
var vec__97421 = [props97403];
var map__97425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97421,(0),null);
var map__97425__$1 = cljs.core.__destructure_map(map__97425);
var copyright = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97425__$1,new cljs.core.Keyword(null,"copyright","copyright",-1829660853));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97478 = stack.uix.statusbar.statusbar.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97478)){
var f__46909__auto___97479 = temp__5823__auto___97478;
(f__46909__auto___97479.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97479.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97479.call(null, ));
} else {
}
} else {
}

var notice = cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("Copyright (c) %s %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(copyright),new cljs.core.Keyword(null,"holder","holder",1786017528).cljs$core$IFn$_invoke$arity$1(copyright)], 0));
return uix.compiler.aot._GT_el("footer",[{'className':"footer footer-center"}],[uix.compiler.aot._GT_el("aside",[null],[uix.compiler.aot._GT_el("p",uix.compiler.attributes.interpret_attrs(notice,["p",null,null,false],false),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97448 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97449 = stack.uix.statusbar.statusbar;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97449);

try{if(((cljs.core.map_QMARK_(props97403)) || ((props97403 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97403)].join(''),"\n","(clojure.core/or (clojure.core/map? props97403) (clojure.core/nil? props97403))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97448);
}} else {
return f__46992__auto__();
}
});

(stack.uix.statusbar.statusbar.uix_component_QMARK_ = true);

(stack.uix.statusbar.statusbar.displayName = "stack.uix.statusbar/statusbar");

Object.defineProperty(stack.uix.statusbar.statusbar,"name",(function (){var obj97465 = ({"value":"stack.uix.statusbar/statusbar"});
return obj97465;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97485 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97485.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97485.cljs$core$IFn$_invoke$arity$4(stack.uix.statusbar.statusbar,"",null,null) : sig__46918__auto___97485.call(null, stack.uix.statusbar.statusbar,"",null,null));

window.uix.dev.register_BANG_(stack.uix.statusbar.statusbar,stack.uix.statusbar.statusbar.displayName);

(stack.uix.statusbar.statusbar.fast_refresh_signature = sig__46918__auto___97485);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.statusbar.js.map
