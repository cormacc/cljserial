goog.provide('stack.uix.file_card');
stack.uix.file_card.card_with_footer = (function stack$uix$file_card$card_with_footer(props__46991__auto__){
var props97694 = uix.core.glue_args(props__46991__auto__);
var vec__97697 = [props97694];
var map__97700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97697,(0),null);
var map__97700__$1 = cljs.core.__destructure_map(map__97700);
var filestore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97700__$1,new cljs.core.Keyword(null,"filestore","filestore",1449104233));
var on_file_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97700__$1,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97965 = stack.uix.file_card.card_with_footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97965)){
var f__46909__auto___97967 = temp__5823__auto___97965;
(f__46909__auto___97967.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97967.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97967.call(null, ));
} else {
}
} else {
}

var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(filestore);
var entries = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(filestore);
return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Files"], null)],[uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("type",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__97726){
var map__97727 = p__97726;
var map__97727__$1 = cljs.core.__destructure_map(map__97727);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97727__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97727__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97727__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name),'onClick':(function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(name) : on_file_click.call(null, name));
})}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(name,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(size,["td",null,null,false],false),[])]);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__97691_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__97691_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__97691_SHARP_))].join('');
}),cljs.core.vals(entries))),["tbody",null,null,false],false),[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Storage",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s MB",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used_mb","used_mb",-6399057).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"capacity_mb","capacity_mb",1942224107).cljs$core$IFn$_invoke$arity$1(info)], 0)),["td",null,null,false],false),[])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97768 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97772 = stack.uix.file_card.card_with_footer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97772);

try{if(((cljs.core.map_QMARK_(props97694)) || ((props97694 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97694)].join(''),"\n","(clojure.core/or (clojure.core/map? props97694) (clojure.core/nil? props97694))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97768);
}} else {
return f__46992__auto__();
}
});

(stack.uix.file_card.card_with_footer.uix_component_QMARK_ = true);

(stack.uix.file_card.card_with_footer.displayName = "stack.uix.file-card/card-with-footer");

Object.defineProperty(stack.uix.file_card.card_with_footer,"name",(function (){var obj97789 = ({"value":"stack.uix.file-card/card-with-footer"});
return obj97789;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98017 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98017.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98017.cljs$core$IFn$_invoke$arity$4(stack.uix.file_card.card_with_footer,"",null,null) : sig__46918__auto___98017.call(null, stack.uix.file_card.card_with_footer,"",null,null));

window.uix.dev.register_BANG_(stack.uix.file_card.card_with_footer,stack.uix.file_card.card_with_footer.displayName);

(stack.uix.file_card.card_with_footer.fast_refresh_signature = sig__46918__auto___98017);
} else {
}
} else {
}

stack.uix.file_card.card = (function stack$uix$file_card$card(props__46991__auto__){
var props97811 = uix.core.glue_args(props__46991__auto__);
var vec__97824 = [props97811];
var map__97827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97824,(0),null);
var map__97827__$1 = cljs.core.__destructure_map(map__97827);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97827__$1,new cljs.core.Keyword(null,"title","title",636505583));
var filestore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97827__$1,new cljs.core.Keyword(null,"filestore","filestore",1449104233));
var on_file_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97827__$1,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98033 = stack.uix.file_card.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98033)){
var f__46909__auto___98034 = temp__5823__auto___98033;
(f__46909__auto___98034.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98034.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98034.call(null, ));
} else {
}
} else {
}

var map__97852 = filestore;
var map__97852__$1 = cljs.core.__destructure_map(map__97852);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97852__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97852__$1,new cljs.core.Keyword(null,"info","info",-317069002));
return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null)],[uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("path",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("size",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("created",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("modified",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("synced",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__97877){
var map__97880 = p__97877;
var map__97880__$1 = cljs.core.__destructure_map(map__97880);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97880__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97880__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97880__$1,new cljs.core.Keyword(null,"created","created",-704993748));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97880__$1,new cljs.core.Keyword(null,"modified","modified",-2134587826));
var synced = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97880__$1,new cljs.core.Keyword(null,"synced","synced",-1518561120));
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(path),'onClick':(function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(path) : on_file_click.call(null, path));
})}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(path,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(size,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(created,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(modified,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(synced,["td",null,null,false],false),[])]);
}),cljs.core.vals(entries)),["tbody",null,null,false],false),[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Storage",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s bytes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(info)], 0)),["td",null,null,false],false),[])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97928 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97929 = stack.uix.file_card.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97929);

try{if(((cljs.core.map_QMARK_(props97811)) || ((props97811 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97811)].join(''),"\n","(clojure.core/or (clojure.core/map? props97811) (clojure.core/nil? props97811))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97928);
}} else {
return f__46992__auto__();
}
});

(stack.uix.file_card.card.uix_component_QMARK_ = true);

(stack.uix.file_card.card.displayName = "stack.uix.file-card/card");

Object.defineProperty(stack.uix.file_card.card,"name",(function (){var obj97946 = ({"value":"stack.uix.file-card/card"});
return obj97946;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98071 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98071.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98071.cljs$core$IFn$_invoke$arity$4(stack.uix.file_card.card,"",null,null) : sig__46918__auto___98071.call(null, stack.uix.file_card.card,"",null,null));

window.uix.dev.register_BANG_(stack.uix.file_card.card,stack.uix.file_card.card.displayName);

(stack.uix.file_card.card.fast_refresh_signature = sig__46918__auto___98071);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.file_card.js.map
