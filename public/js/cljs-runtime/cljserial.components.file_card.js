goog.provide('cljserial.components.file_card');
cljserial.components.file_card.card = (function cljserial$components$file_card$card(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56658 = [clj_props__39918__auto__];
var map__56661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56658,(0),null);
var map__56661__$1 = cljs.core.__destructure_map(map__56661);
var filestore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56661__$1,new cljs.core.Keyword(null,"filestore","filestore",1449104233));
var on_file_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56661__$1,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590));
var f__39919__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(cljserial.schema.filestore.FileStore)){
} else {
throw (new Error("Assert failed: FileStore"));
}

if(cljs.core.truth_(filestore)){
} else {
throw (new Error("Assert failed: filestore"));
}

if(goog.DEBUG){
var temp__5804__auto___56758 = cljserial.components.file_card.card.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56758)){
var f__39838__auto___56760 = temp__5804__auto___56758;
(f__39838__auto___56760.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56760.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56760.call(null, ));
} else {
}
} else {
}

var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(filestore);
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(filestore);
return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Files"], null)],[uix.compiler.alpha.component_element(cljserial.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5523__auto__ = (function cljserial$components$file_card$card_$_iter__56692(s__56693){
return (new cljs.core.LazySeq(null,(function (){
var s__56693__$1 = s__56693;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56693__$1);
if(temp__5804__auto__){
var s__56693__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56693__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56693__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56695 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56694 = (0);
while(true){
if((i__56694 < size__5522__auto__)){
var f = cljs.core._nth(c__5521__auto__,i__56694);
cljs.core.chunk_append(b__56695,(function (){var filename = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(filename),'onClick':((function (i__56694,filename,f,c__5521__auto__,size__5522__auto__,b__56695,s__56693__$2,temp__5804__auto__,info,files,clj_props__39918__auto__,vec__56658,map__56661,map__56661__$1,filestore,on_file_click){
return (function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(filename) : on_file_click.call(null, filename));
});})(i__56694,filename,f,c__5521__auto__,size__5522__auto__,b__56695,s__56693__$2,temp__5804__auto__,info,files,clj_props__39918__auto__,vec__56658,map__56661,map__56661__$1,filestore,on_file_click))
}],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(filename),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(f)),[])]);
})());

var G__56764 = (i__56694 + (1));
i__56694 = G__56764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56695),cljserial$components$file_card$card_$_iter__56692(cljs.core.chunk_rest(s__56693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56695),null);
}
} else {
var f = cljs.core.first(s__56693__$2);
return cljs.core.cons((function (){var filename = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(filename),'onClick':((function (filename,f,s__56693__$2,temp__5804__auto__,info,files,clj_props__39918__auto__,vec__56658,map__56661,map__56661__$1,filestore,on_file_click){
return (function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(filename) : on_file_click.call(null, filename));
});})(filename,f,s__56693__$2,temp__5804__auto__,info,files,clj_props__39918__auto__,vec__56658,map__56661,map__56661__$1,filestore,on_file_click))
}],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(filename),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(f)),[])]);
})(),cljserial$components$file_card$card_$_iter__56692(cljs.core.rest(s__56693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.vals(files));
})(),uix.compiler.aot._GT_el("tr",[null],[uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props("Storage"),[]),uix.compiler.alpha.component_element(cljserial.components.tables.td,uix.compiler.attributes.interpret_props(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s MB",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used-mb","used-mb",-1074652995).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"capacity-mb","capacity-mb",-2024008306).cljs$core$IFn$_invoke$arity$1(info)], 0))),[])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56740 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56741 = cljserial.components.file_card.card;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56741);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56740);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.file_card.card.uix_component_QMARK_ = true);

(cljserial.components.file_card.card.displayName = "cljserial.components.file-card/card");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56768 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56768.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56768.cljs$core$IFn$_invoke$arity$4(cljserial.components.file_card.card,"",null,null) : sig__39847__auto___56768.call(null, cljserial.components.file_card.card,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.file_card.card,cljserial.components.file_card.card.displayName);

(cljserial.components.file_card.card.fast_refresh_signature = sig__39847__auto___56768);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.file_card.js.map
