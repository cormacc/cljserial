goog.provide('stack.examples.pages.domain_data');
stack.examples.pages.domain_data.layout = (function stack$examples$pages$domain_data$layout(props__40570__auto__){
var clj_props__40571__auto__ = uix.core.glue_args(props__40570__auto__);
var vec__61174 = [clj_props__40571__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61174,(0),null);
var f__40572__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___61241 = stack.examples.pages.domain_data.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___61241)){
var f__40501__auto___61246 = temp__5823__auto___61241;
(f__40501__auto___61246.cljs$core$IFn$_invoke$arity$0 ? f__40501__auto___61246.cljs$core$IFn$_invoke$arity$0() : f__40501__auto___61246.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Tasks (local storage)"], null)],[(function (){var tasks = (function (){var G__61190 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__61190) : stack.utils.dbfx.use_sub.call(null, G__61190));
})();
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.examples.pages.domain-data",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),tasks,new cljs.core.Keyword(null,"line","line",212345235),13], null)),null);
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("ID",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Task",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Status",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$domain_data$layout_$_iter__61201(s__61202){
return (new cljs.core.LazySeq(null,(function (){
var s__61202__$1 = s__61202;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__61202__$1);
if(temp__5823__auto__){
var s__61202__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61202__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__61202__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__61204 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__61203 = (0);
while(true){
if((i__61203 < size__5479__auto__)){
var map__61209 = cljs.core._nth(c__5478__auto__,i__61203);
var map__61209__$1 = cljs.core.__destructure_map(map__61209);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61209__$1,new cljs.core.Keyword(null,"done","done",-889844188));
cljs.core.chunk_append(b__61204,uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(description,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs((cljs.core.truth_(done)?"DONE":"TODO"),["td",null,null,false],false),[])]));

var G__61248 = (i__61203 + (1));
i__61203 = G__61248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61204),stack$examples$pages$domain_data$layout_$_iter__61201(cljs.core.chunk_rest(s__61202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61204),null);
}
} else {
var map__61218 = cljs.core.first(s__61202__$2);
var map__61218__$1 = cljs.core.__destructure_map(map__61218);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61218__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61218__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61218__$1,new cljs.core.Keyword(null,"done","done",-889844188));
return cljs.core.cons(uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(description,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs((cljs.core.truth_(done)?"DONE":"TODO"),["td",null,null,false],false),[])]),stack$examples$pages$domain_data$layout_$_iter__61201(cljs.core.rest(s__61202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tasks);
})()])]);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__61223 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__61224 = stack.examples.pages.domain_data.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__61224);

try{if(((cljs.core.map_QMARK_(clj_props__40571__auto__)) || ((clj_props__40571__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__40571__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__40571__auto__) (clojure.core/nil? clj-props__40571__auto__))"].join('')));
}

return f__40572__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__61223);
}} else {
return f__40572__auto__();
}
});

(stack.examples.pages.domain_data.layout.uix_component_QMARK_ = true);

(stack.examples.pages.domain_data.layout.displayName = "stack.examples.pages.domain-data/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__40510__auto___61256 = window.uix.dev.signature_BANG_();
(sig__40510__auto___61256.cljs$core$IFn$_invoke$arity$4 ? sig__40510__auto___61256.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.domain_data.layout,"(dbfx/use-sub [:tasks])",null,null) : sig__40510__auto___61256.call(null, stack.examples.pages.domain_data.layout,"(dbfx/use-sub [:tasks])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.domain_data.layout,stack.examples.pages.domain_data.layout.displayName);

(stack.examples.pages.domain_data.layout.fast_refresh_signature = sig__40510__auto___61256);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.domain_data.js.map
