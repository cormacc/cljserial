goog.provide('stack.components.select');
stack.components.select.select = (function stack$components$select$select(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__94816 = [clj_props__45318__auto__];
var map__94819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94816,(0),null);
var map__94819__$1 = cljs.core.__destructure_map(map__94819);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94819__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94819__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94819__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___94860 = stack.components.select.select.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___94860)){
var f__45248__auto___94861 = temp__5823__auto___94860;
(f__45248__auto___94861.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___94861.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___94861.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("select",[{'className':"select",'onChange':(function (event){
var selected__$1 = event.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(selected__$1) : on_change.call(null, selected__$1));
}),'value':uix.compiler.attributes.keyword__GT_string(selected)}],[(function (){var iter__5480__auto__ = (function stack$components$select$select_$_iter__94831(s__94832){
return (new cljs.core.LazySeq(null,(function (){
var s__94832__$1 = s__94832;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__94832__$1);
if(temp__5823__auto__){
var s__94832__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94832__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__94832__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__94834 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__94833 = (0);
while(true){
if((i__94833 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__94833);
cljs.core.chunk_append(b__94834,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item);
return uix.compiler.aot._GT_el("option",[{'key':uix.compiler.attributes.keyword__GT_string(id),'value':uix.compiler.attributes.keyword__GT_string(id)}],[text]);
})());

var G__94864 = (i__94833 + (1));
i__94833 = G__94864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94834),stack$components$select$select_$_iter__94831(cljs.core.chunk_rest(s__94832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94834),null);
}
} else {
var item = cljs.core.first(s__94832__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item);
return uix.compiler.aot._GT_el("option",[{'key':uix.compiler.attributes.keyword__GT_string(id),'value':uix.compiler.attributes.keyword__GT_string(id)}],[text]);
})(),stack$components$select$select_$_iter__94831(cljs.core.rest(s__94832__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(items);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__94847 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__94848 = stack.components.select.select;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__94848);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__94847);
}} else {
return f__45319__auto__();
}
});

(stack.components.select.select.uix_component_QMARK_ = true);

(stack.components.select.select.displayName = "stack.components.select/select");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___94869 = window.uix.dev.signature_BANG_();
(sig__45257__auto___94869.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___94869.cljs$core$IFn$_invoke$arity$4(stack.components.select.select,"",null,null) : sig__45257__auto___94869.call(null, stack.components.select.select,"",null,null));

window.uix.dev.register_BANG_(stack.components.select.select,stack.components.select.select.displayName);

(stack.components.select.select.fast_refresh_signature = sig__45257__auto___94869);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.select.js.map
