goog.provide('stack.components.file_card');
stack.components.file_card.card = (function stack$components$file_card$card(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95277 = [clj_props__45318__auto__];
var map__95280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95277,(0),null);
var map__95280__$1 = cljs.core.__destructure_map(map__95280);
var filestore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95280__$1,new cljs.core.Keyword(null,"filestore","filestore",1449104233));
var on_file_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95280__$1,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590));
var f__45319__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(stack.schema.filestore.FileStore)){
} else {
throw (new Error("Assert failed: FileStore"));
}

if(cljs.core.truth_(filestore)){
} else {
throw (new Error("Assert failed: filestore"));
}

if(goog.DEBUG){
var temp__5823__auto___95338 = stack.components.file_card.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95338)){
var f__45248__auto___95344 = temp__5823__auto___95338;
(f__45248__auto___95344.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95344.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95344.call(null, ));
} else {
}
} else {
}

var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(filestore);
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(filestore);
return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Files"], null)],[uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$components$file_card$card_$_iter__95294(s__95295){
return (new cljs.core.LazySeq(null,(function (){
var s__95295__$1 = s__95295;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__95295__$1);
if(temp__5823__auto__){
var s__95295__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95295__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95295__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95297 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95296 = (0);
while(true){
if((i__95296 < size__5479__auto__)){
var f = cljs.core._nth(c__5478__auto__,i__95296);
cljs.core.chunk_append(b__95297,(function (){var filename = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(filename),'onClick':((function (i__95296,filename,f,c__5478__auto__,size__5479__auto__,b__95297,s__95295__$2,temp__5823__auto__,info,files,clj_props__45318__auto__,vec__95277,map__95280,map__95280__$1,filestore,on_file_click){
return (function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(filename) : on_file_click.call(null, filename));
});})(i__95296,filename,f,c__5478__auto__,size__5479__auto__,b__95297,s__95295__$2,temp__5823__auto__,info,files,clj_props__45318__auto__,vec__95277,map__95280,map__95280__$1,filestore,on_file_click))
}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(filename,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(f),["td",null,null,false],false),[])]);
})());

var G__95361 = (i__95296 + (1));
i__95296 = G__95361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95297),stack$components$file_card$card_$_iter__95294(cljs.core.chunk_rest(s__95295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95297),null);
}
} else {
var f = cljs.core.first(s__95295__$2);
return cljs.core.cons((function (){var filename = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(filename),'onClick':((function (filename,f,s__95295__$2,temp__5823__auto__,info,files,clj_props__45318__auto__,vec__95277,map__95280,map__95280__$1,filestore,on_file_click){
return (function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(filename) : on_file_click.call(null, filename));
});})(filename,f,s__95295__$2,temp__5823__auto__,info,files,clj_props__45318__auto__,vec__95277,map__95280,map__95280__$1,filestore,on_file_click))
}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(filename,["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(f),["td",null,null,false],false),[])]);
})(),stack$components$file_card$card_$_iter__95294(cljs.core.rest(s__95295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.vals(files));
})(),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs("Storage",["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s MB",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used_mb","used_mb",-6399057).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"capacity_mb","capacity_mb",1942224107).cljs$core$IFn$_invoke$arity$1(info)], 0)),["td",null,null,false],false),[])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95318 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95319 = stack.components.file_card.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95319);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95318);
}} else {
return f__45319__auto__();
}
});

(stack.components.file_card.card.uix_component_QMARK_ = true);

(stack.components.file_card.card.displayName = "stack.components.file-card/card");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95374 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95374.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95374.cljs$core$IFn$_invoke$arity$4(stack.components.file_card.card,"",null,null) : sig__45257__auto___95374.call(null, stack.components.file_card.card,"",null,null));

window.uix.dev.register_BANG_(stack.components.file_card.card,stack.components.file_card.card.displayName);

(stack.components.file_card.card.fast_refresh_signature = sig__45257__auto___95374);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.file_card.js.map
