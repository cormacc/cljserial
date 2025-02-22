goog.provide('stack.uix.tables');
stack.uix.tables.table = (function stack$uix$tables$table(props__46991__auto__){
var props97550 = uix.core.glue_args(props__46991__auto__);
var vec__97556 = [props97550];
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97556,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97615 = stack.uix.tables.table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97615)){
var f__46909__auto___97617 = temp__5823__auto___97615;
(f__46909__auto___97617.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97617.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97617.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("table",uix.compiler.attributes.interpret_attrs(props,["table",null,"table",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97589 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97590 = stack.uix.tables.table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97590);

try{if(((cljs.core.map_QMARK_(props97550)) || ((props97550 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97550)].join(''),"\n","(clojure.core/or (clojure.core/map? props97550) (clojure.core/nil? props97550))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97589);
}} else {
return f__46992__auto__();
}
});

(stack.uix.tables.table.uix_component_QMARK_ = true);

(stack.uix.tables.table.displayName = "stack.uix.tables/table");

Object.defineProperty(stack.uix.tables.table,"name",(function (){var obj97604 = ({"value":"stack.uix.tables/table"});
return obj97604;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97624 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97624.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97624.cljs$core$IFn$_invoke$arity$4(stack.uix.tables.table,"",null,null) : sig__46918__auto___97624.call(null, stack.uix.tables.table,"",null,null));

window.uix.dev.register_BANG_(stack.uix.tables.table,stack.uix.tables.table.displayName);

(stack.uix.tables.table.fast_refresh_signature = sig__46918__auto___97624);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.tables.js.map
