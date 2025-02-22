goog.provide('stack.components.tables');
stack.components.tables.table = (function stack$components$tables$table(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95017 = [clj_props__45318__auto__];
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95017,(0),null);
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95069 = stack.components.tables.table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95069)){
var f__45248__auto___95070 = temp__5823__auto___95069;
(f__45248__auto___95070.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95070.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95070.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("table",uix.compiler.attributes.interpret_attrs(props,["table",null,"table",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95048 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95049 = stack.components.tables.table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95049);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95048);
}} else {
return f__45319__auto__();
}
});

(stack.components.tables.table.uix_component_QMARK_ = true);

(stack.components.tables.table.displayName = "stack.components.tables/table");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95073 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95073.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95073.cljs$core$IFn$_invoke$arity$4(stack.components.tables.table,"",null,null) : sig__45257__auto___95073.call(null, stack.components.tables.table,"",null,null));

window.uix.dev.register_BANG_(stack.components.tables.table,stack.components.tables.table.displayName);

(stack.components.tables.table.fast_refresh_signature = sig__45257__auto___95073);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.tables.js.map
