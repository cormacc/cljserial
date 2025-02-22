goog.provide('stack.uix.select');
stack.uix.select.select = (function stack$uix$select$select(props__46991__auto__){
var props97195 = uix.core.glue_args(props__46991__auto__);
var vec__97215 = [props97195];
var map__97218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97215,(0),null);
var map__97218__$1 = cljs.core.__destructure_map(map__97218);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97218__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97218__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97218__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97327 = stack.uix.select.select.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97327)){
var f__46909__auto___97329 = temp__5823__auto___97327;
(f__46909__auto___97329.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97329.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97329.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("select",[{'className':"select",'onChange':(function (event){
var selected__$1 = event.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(selected__$1) : on_change.call(null, selected__$1));
}),'value':uix.compiler.attributes.keyword__GT_string(selected)}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item);
return uix.compiler.aot._GT_el("option",[{'key':uix.compiler.attributes.keyword__GT_string(id),'value':uix.compiler.attributes.keyword__GT_string(id)}],[text]);
}),items)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97307 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97308 = stack.uix.select.select;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97308);

try{if(((cljs.core.map_QMARK_(props97195)) || ((props97195 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97195)].join(''),"\n","(clojure.core/or (clojure.core/map? props97195) (clojure.core/nil? props97195))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97307);
}} else {
return f__46992__auto__();
}
});

(stack.uix.select.select.uix_component_QMARK_ = true);

(stack.uix.select.select.displayName = "stack.uix.select/select");

Object.defineProperty(stack.uix.select.select,"name",(function (){var obj97319 = ({"value":"stack.uix.select/select"});
return obj97319;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97338 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97338.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97338.cljs$core$IFn$_invoke$arity$4(stack.uix.select.select,"",null,null) : sig__46918__auto___97338.call(null, stack.uix.select.select,"",null,null));

window.uix.dev.register_BANG_(stack.uix.select.select,stack.uix.select.select.displayName);

(stack.uix.select.select.fast_refresh_signature = sig__46918__auto___97338);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.select.js.map
