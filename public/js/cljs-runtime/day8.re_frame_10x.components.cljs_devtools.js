goog.provide('day8.re_frame_10x.components.cljs_devtools');
goog.scope(function(){
  day8.re_frame_10x.components.cljs_devtools.goog$module$goog$object = goog.module.get('goog.object');
});
day8.re_frame_10x.components.cljs_devtools.initial_config = cljs.core.deref(devtools.prefs.initial_config);
day8.re_frame_10x.components.cljs_devtools.base_config = (function day8$re_frame_10x$components$cljs_devtools$base_config(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index-tag","index-tag",693492486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"none-style","none-style",1613422814)], null),new cljs.core.Keyword(null,"none-style","none-style",1613422814),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"none","none",1333468478)], null)], 0)),new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807),false,new cljs.core.Keyword(null,"item-style","item-style",-188747722),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((2)),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"#000","#000",-1342202220)], null)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_5,(0),day8.re_frame_10x.styles.gs_5], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1),(0),(0),(0))], null)], null)], null)], 0))], null);
});
day8.re_frame_10x.components.cljs_devtools.body_style_base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.styles.gs_2,day8.re_frame_10x.styles.gs_12], null)], null),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),day8.re_frame_10x.styles.nord3], null)], null),new cljs.core.Keyword(null,"margin","margin",-995903681),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(0)], null);
day8.re_frame_10x.components.cljs_devtools.dark_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord6], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord0], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.bright_ambiance_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cljs-land-style","cljs-land-style",278325097),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord0], null)], 0)),new cljs.core.Keyword(null,"body-style","body-style",1462943820),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.body_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord6], null)], 0))], null);
day8.re_frame_10x.components.cljs_devtools.custom_config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.initial_config,day8.re_frame_10x.components.cljs_devtools.base_config()], 0));
day8.re_frame_10x.components.cljs_devtools.header = (function day8$re_frame_10x$components$cljs_devtools$header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84495 = arguments.length;
var i__5727__auto___84500 = (0);
while(true){
if((i__5727__auto___84500 < len__5726__auto___84495)){
args__5732__auto__.push((arguments[i__5727__auto___84500]));

var G__84502 = (i__5727__auto___84500 + (1));
i__5727__auto___84500 = G__84502;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__84020){
var vec__84021 = p__84020;
var map__84024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84021,(0),null);
var map__84024__$1 = cljs.core.__destructure_map(map__84024);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84024__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__83998__auto__ = devtools.prefs.get_prefs();
var prefs__83999__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__83999__auto__);

return devtools.formatters.core.header_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__83999__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__83999__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__83998__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.header.cljs$lang$applyTo = (function (seq84011){
var G__84012 = cljs.core.first(seq84011);
var seq84011__$1 = cljs.core.next(seq84011);
var G__84013 = cljs.core.first(seq84011__$1);
var seq84011__$2 = cljs.core.next(seq84011__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84012,G__84013,seq84011__$2);
}));

day8.re_frame_10x.components.cljs_devtools.body = (function day8$re_frame_10x$components$cljs_devtools$body(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84510 = arguments.length;
var i__5727__auto___84512 = (0);
while(true){
if((i__5727__auto___84512 < len__5726__auto___84510)){
args__5732__auto__.push((arguments[i__5727__auto___84512]));

var G__84514 = (i__5727__auto___84512 + (1));
i__5727__auto___84512 = G__84514;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic = (function (value,config,p__84056){
var vec__84057 = p__84056;
var map__84060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84057,(0),null);
var map__84060__$1 = cljs.core.__destructure_map(map__84060);
var render_paths_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84060__$1,new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398));
var previous_config__83998__auto__ = devtools.prefs.get_prefs();
var prefs__83999__auto__ = (cljs.core.truth_(render_paths_QMARK_)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.components.cljs_devtools.custom_config,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-path-annotations","render-path-annotations",-1890931512),true], null)], 0)):day8.re_frame_10x.components.cljs_devtools.custom_config);
try{devtools.prefs.set_prefs_BANG_(prefs__83999__auto__);

return devtools.formatters.core.body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__83999__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__83999__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__83998__auto__);
}}));

(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.body.cljs$lang$applyTo = (function (seq84045){
var G__84047 = cljs.core.first(seq84045);
var seq84045__$1 = cljs.core.next(seq84045);
var G__84048 = cljs.core.first(seq84045__$1);
var seq84045__$2 = cljs.core.next(seq84045__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84047,G__84048,seq84045__$2);
}));

day8.re_frame_10x.components.cljs_devtools.has_body = (function day8$re_frame_10x$components$cljs_devtools$has_body(value,config){
var previous_config__83998__auto__ = devtools.prefs.get_prefs();
var prefs__83999__auto__ = day8.re_frame_10x.components.cljs_devtools.custom_config;
try{devtools.prefs.set_prefs_BANG_(prefs__83999__auto__);

return devtools.formatters.core.has_body_api_call(value,config);
}finally {if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devtools.prefs.get_prefs(),prefs__83999__auto__)){
} else {
throw (new Error(["Assert failed: ","someone modified devtools.prefs behind our back!","\n","(clojure.core/= (devtools.prefs/get-prefs) prefs__83999__auto__)"].join('')));
}

devtools.prefs.set_prefs_BANG_(previous_config__83998__auto__);
}});
day8.re_frame_10x.components.cljs_devtools.get_object = (function day8$re_frame_10x$components$cljs_devtools$get_object(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).object;
});
day8.re_frame_10x.components.cljs_devtools.get_config = (function day8$re_frame_10x$components$cljs_devtools$get_config(jsonml){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(jsonml,(1)).config;
});
day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style_factory$(style_name84095,params84096){
var vec__84102 = params84096;
var style84098 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name84095)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["> span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"text-top","text-top",-582075565)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),(cljs.core.truth_(style_name84095)?day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compile_css(style84098):null),new cljs.core.Keyword(null,"name","name",1843675177),style_name84095], null);
});

var factory_name84097_84532 = day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$);
var jsonml_style_name$_84533 = cljs.core.constantly(factory_name84097_84532);
day8.re_frame_10x.components.cljs_devtools.jsonml_style = (function day8$re_frame_10x$components$cljs_devtools$jsonml_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.meta(new cljs.core.Var(function(){return day8.re_frame_10x.components.cljs_devtools.jsonml_style;},new cljs.core.Symbol("day8.re-frame-10x.components.cljs-devtools","jsonml-style","day8.re-frame-10x.components.cljs-devtools/jsonml-style",132274247,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"day8.re-frame-10x.components.cljs-devtools","day8.re-frame-10x.components.cljs-devtools",-652616886,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"day8/re_frame_10x/components/cljs_devtools.cljs",new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"jsonml-style","jsonml-style",841409097,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(day8.re_frame_10x.components.cljs_devtools.jsonml_style)?day8.re_frame_10x.components.cljs_devtools.jsonml_style.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))),jsonml_style_name$_84533,day8.re_frame_10x.components.cljs_devtools.jsonml_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$toggle_style_factory$(style_name84120,params84121){
var vec__84131 = params84121;
var ambiance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84131,(0),null);
var style84123 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name84120)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?day8.re_frame_10x.styles.nord0:day8.re_frame_10x.styles.nord5)], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),(cljs.core.truth_(style_name84120)?day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compile_css(style84123):null),new cljs.core.Keyword(null,"name","name",1843675177),style_name84120], null);
});

var factory_name84122_84547 = day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$);
var toggle_style_name$_84548 = cljs.core.memoize(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-5197e54.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-5197e54.util/build-style-name",1245592291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-5197e54.util","day8.re-frame-10x.inlined-deps.spade.git-sha-5197e54.util",-753541307,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_5197e54/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.build_style_name.cljs$lang$test:null)])),factory_name84122_84547,null));
day8.re_frame_10x.components.cljs_devtools.toggle_style = (function day8$re_frame_10x$components$cljs_devtools$toggle_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.meta(new cljs.core.Var(function(){return day8.re_frame_10x.components.cljs_devtools.toggle_style;},new cljs.core.Symbol("day8.re-frame-10x.components.cljs-devtools","toggle-style","day8.re-frame-10x.components.cljs-devtools/toggle-style",859698997,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"day8.re-frame-10x.components.cljs-devtools","day8.re-frame-10x.components.cljs-devtools",-652616886,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"day8/re_frame_10x/components/cljs_devtools.cljs",new cljs.core.Keyword(null,"line","line",212345235),106,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"toggle-style","toggle-style",1174310195,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(day8.re_frame_10x.components.cljs_devtools.toggle_style)?day8.re_frame_10x.components.cljs_devtools.toggle_style.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))),toggle_style_name$_84548,day8.re_frame_10x.components.cljs_devtools.toggle_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.components.cljs_devtools.data_structure = (function day8$re_frame_10x$components$cljs_devtools$data_structure(_,path){
var expanded_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),path], null));
return (function (jsonml,path__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),path__$1], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(expanded_QMARK_);
if(cljs.core.truth_(and__5000__auto__)){
return day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
} else {
return and__5000__auto__;
}
})())?(function (){var G__84171 = day8.re_frame_10x.components.cljs_devtools.body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__84172 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__84171,G__84172) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null, G__84171,G__84172));
})():(function (){var G__84176 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__84177 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,new cljs.core.Keyword(null,"header","header",119441134));
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__84176,G__84177) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null, G__84176,G__84177));
})())], null);
});
});
day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$data_structure_with_path_annotations(_,___$1,___$2,___$3){
var render_paths_QMARK_ = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null));
return (function (jsonml,indexed_path,devtools_path,p__84189){
var map__84190 = p__84189;
var map__84190__$1 = cljs.core.__destructure_map(map__84190);
var opts = map__84190__$1;
var expand_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84190__$1,new cljs.core.Keyword(null,"expand?","expand?",-1744295862));
var path_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84190__$1,new cljs.core.Keyword(null,"path-id","path-id",-73169688));
var node_expanded_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),indexed_path], null)));
var show_body_QMARK_ = (function (){var and__5000__auto__ = day8.re_frame_10x.components.cljs_devtools.has_body(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = (function (){var and__5000__auto____$1 = node_expanded_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return (!((expand_QMARK_ == null)));
} else {
return and__5000__auto____$1;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return expand_QMARK_;
}
} else {
return and__5000__auto__;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.toggle_style(new cljs.core.Keyword(null,"bright","bright",-1876684577)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),indexed_path], null));

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","expand","day8.re-frame-10x.panels.app-db.events/expand",-1429129798),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),path_id,new cljs.core.Keyword(null,"expand?","expand?",-1744295862),false], null)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(show_body_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null))], null)], null),(cljs.core.truth_(show_body_QMARK_)?(function (){var G__84198 = day8.re_frame_10x.components.cljs_devtools.body.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),cljs.core.deref(render_paths_QMARK_)], null)], 0));
var G__84199 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__84200 = devtools_path;
var G__84201 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__84198,G__84199,G__84200,G__84201) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null, G__84198,G__84199,G__84200,G__84201));
})():(function (){var G__84206 = day8.re_frame_10x.components.cljs_devtools.header(day8.re_frame_10x.components.cljs_devtools.get_object(jsonml),day8.re_frame_10x.components.cljs_devtools.get_config(jsonml));
var G__84207 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,new cljs.core.Keyword(null,"header","header",119441134));
var G__84208 = devtools_path;
var G__84209 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__84206,G__84207,G__84208,G__84209) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null, G__84206,G__84207,G__84208,G__84209));
})())], null);
});
});
/**
 * This function converts jsonml css-strings to valid css maps for hiccup.
 *   Example: 'margin-left:0px;min-height:14px;' converts to
 *         {:margin-left '0px', :min-height '14px'}
 */
day8.re_frame_10x.components.cljs_devtools.string__GT_css = (function day8$re_frame_10x$components$cljs_devtools$string__GT_css(css_string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__84225){
var vec__84227 = p__84225;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84227,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84227,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(property),value);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84217_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__84217_SHARP_,/:/);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(css_string,/;/)));
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can
 *   be found at https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 *   
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup(jsonml,path){
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__84237 = jsonml;
var seq__84238 = cljs.core.seq(vec__84237);
var first__84239 = cljs.core.first(seq__84238);
var seq__84238__$1 = cljs.core.next(seq__84238);
var tag_name = first__84239;
var first__84239__$1 = cljs.core.first(seq__84238__$1);
var seq__84238__$2 = cljs.core.next(seq__84238__$1);
var attributes = first__84239__$1;
var children = seq__84238__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__84242 = child;
var G__84243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__84242,G__84243) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null, G__84242,G__84243));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure,jsonml,path], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__84247 = child;
var G__84248 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.cljs$core$IFn$_invoke$arity$2(G__84247,G__84248) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup.call(null, G__84247,G__84248));
})),children);
} else {
return jsonml;

}
}
}
}
});
/**
 * JSONML is the format used by Chrome's Custom Object Formatters.
 *   The spec is at https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview.
 * 
 *   JSONML is pretty much Hiccup over JSON. Chrome's implementation of this can be found at
 *   https://cs.chromium.org/chromium/src/third_party/WebKit/Source/devtools/front_end/object_ui/CustomPreviewComponent.js
 */
day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$jsonml__GT_hiccup_with_path_annotations(jsonml,indexed_path,devtools_path,p__84264){
var map__84270 = p__84264;
var map__84270__$1 = cljs.core.__destructure_map(map__84270);
var opts = map__84270__$1;
var click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84270__$1,new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084));
var middle_click_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84270__$1,new cljs.core.Keyword(null,"middle-click-listener","middle-click-listener",-1619151179));
var menu_listener = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84270__$1,new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230));
if(typeof jsonml === 'number'){
return jsonml;
} else {
var vec__84275 = jsonml;
var seq__84276 = cljs.core.seq(vec__84275);
var first__84277 = cljs.core.first(seq__84276);
var seq__84276__$1 = cljs.core.next(seq__84276);
var tag_name = first__84277;
var first__84277__$1 = cljs.core.first(seq__84276__$1);
var seq__84276__$2 = cljs.core.next(seq__84276__$1);
var attributes = first__84277__$1;
var children = seq__84276__$2;
var tagnames = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["table",null,"td",null,"tr",null,"span",null,"ol",null,"div",null,"li",null], null), null);
if(cljs.core.contains_QMARK_(tagnames,tag_name)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_name),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.components.cljs_devtools.string__GT_css(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(attributes),"style"))], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,child){
var G__84284 = child;
var G__84285 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__84286 = devtools_path;
var G__84287 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__84284,G__84285,G__84286,G__84287) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null, G__84284,G__84285,G__84286,G__84287));
})),children);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"object")){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.data_structure_with_path_annotations,jsonml,indexed_path,devtools_path,opts], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"annotation")){
var jsonml_path_index = cljs.core.last(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
var absolute_devtools_path = (cljs.core.truth_(jsonml_path_index)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(devtools_path,jsonml_path_index):devtools_path);
var element_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var child_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var child_value = (((child_element instanceof Array))?cljs.core.nth.cljs$core$IFn$_invoke$arity$3(child_element,(2),null):null);
var child_component = (function (i,child){
var G__84299 = child;
var G__84300 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexed_path,i);
var G__84301 = absolute_devtools_path;
var G__84302 = opts;
return (day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.cljs$core$IFn$_invoke$arity$4(G__84299,G__84300,G__84301,G__84302) : day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations.call(null, G__84299,G__84300,G__84301,G__84302));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(((!(((typeof child_value === 'string') || (((typeof child_value === 'number') || ((child_value instanceof cljs.core.Keyword))))))))?cljs.core.PersistentArrayMap.EMPTY:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),element_id,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__84260_SHARP_){
if(cljs.core.truth_(p1__84260_SHARP_)){
var G__84313 = p1__84260_SHARP_;
goog.events.listen(G__84313,"contextmenu",menu_listener);

goog.events.listen(G__84313,"dblclick",click_listener);

goog.events.listen(G__84313,"mousedown",middle_click_listener);

return G__84313;
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),"path-annotation",new cljs.core.Keyword(null,"data-path","data-path",674802181),cljs.core.str.cljs$core$IFn$_invoke$arity$1(absolute_devtools_path)], null))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(child_component,children));
} else {
return jsonml;

}
}
}
}
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_QMARK_(data){
return ((typeof data === 'string') || ((((data instanceof RegExp)) || (((typeof data === 'number') || (((cljs.core.boolean_QMARK_(data)) || ((data == null)))))))));
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$ = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style_factory$(style_name84339,params84340){
var vec__84346 = params84340;
var style84342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name84339)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"signature-background","signature-background",-261963584)),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.syntax_color(new cljs.core.Keyword(null,"bright","bright",-1876684577),new cljs.core.Keyword(null,"cljs-devtools","cljs-devtools",2066279891),new cljs.core.Keyword(null,"bool","bool",1444635321))], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),(cljs.core.truth_(style_name84339)?day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compile_css(style84342):null),new cljs.core.Keyword(null,"name","name",1843675177),style_name84339], null);
});

var factory_name84341_84650 = day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.factory__GT_name(day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$);
var prn_str_render_style_name$_84651 = cljs.core.constantly(factory_name84341_84650);
day8.re_frame_10x.components.cljs_devtools.prn_str_render_style = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.meta(new cljs.core.Var(function(){return day8.re_frame_10x.components.cljs_devtools.prn_str_render_style;},new cljs.core.Symbol("day8.re-frame-10x.components.cljs-devtools","prn-str-render-style","day8.re-frame-10x.components.cljs-devtools/prn-str-render-style",1195985272,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"day8.re-frame-10x.components.cljs-devtools","day8.re-frame-10x.components.cljs-devtools",-652616886,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"day8/re_frame_10x/components/cljs_devtools.cljs",new cljs.core.Keyword(null,"line","line",212345235),284,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"prn-str-render-style","prn-str-render-style",286126946,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(day8.re_frame_10x.components.cljs_devtools.prn_str_render_style)?day8.re_frame_10x.components.cljs_devtools.prn_str_render_style.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))),prn_str_render_style_name$_84651,day8.re_frame_10x.components.cljs_devtools.prn_str_render_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.cljs_devtools.prn_str_render = (function day8$re_frame_10x$components$cljs_devtools$prn_str_render(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.prn_str_render_style()], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], null);
});
day8.re_frame_10x.components.cljs_devtools.simple_render = (function day8$re_frame_10x$components$cljs_devtools$simple_render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84660 = arguments.length;
var i__5727__auto___84664 = (0);
while(true){
if((i__5727__auto___84664 < len__5726__auto___84660)){
args__5732__auto__.push((arguments[i__5727__auto___84664]));

var G__84665 = (i__5727__auto___84664 + (1));
i__5727__auto___84664 = G__84665;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$core$IFn$_invoke$arity$variadic = (function (data,path,p__84372){
var vec__84373 = p__84372;
var map__84376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84373,(0),null);
var map__84376__$1 = cljs.core.__destructure_map(map__84376);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84376__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84376__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var ns__GT_alias = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns->alias","day8.re-frame-10x.panels.settings.subs/ns->alias",925252888)], null)));
var alias_QMARK_ = (function (){var and__5000__auto__ = cljs.core.seq(ns__GT_alias);
if(and__5000__auto__){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","alias-namespaces?","day8.re-frame-10x.panels.settings.subs/alias-namespaces?",507809565)], null)));
} else {
return and__5000__auto__;
}
})();
var data__$1 = (function (){var G__84380 = data;
var G__84380__$1 = (cljs.core.truth_(alias_QMARK_)?day8.re_frame_10x.tools.datafy.alias_namespaces(G__84380,ns__GT_alias):G__84380);
if(cljs.core.truth_(sort_QMARK_)){
return day8.re_frame_10x.tools.datafy.deep_sorted_map(G__84380__$1);
} else {
return G__84380__$1;
}
})();
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.components.cljs_devtools.jsonml_style())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data__$1))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data__$1):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup(day8.re_frame_10x.components.cljs_devtools.header(data__$1,null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(0))))], null);
}));

(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.components.cljs_devtools.simple_render.cljs$lang$applyTo = (function (seq84369){
var G__84370 = cljs.core.first(seq84369);
var seq84369__$1 = cljs.core.next(seq84369);
var G__84371 = cljs.core.first(seq84369__$1);
var seq84369__$2 = cljs.core.next(seq84369__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84370,G__84371,seq84369__$2);
}));

day8.re_frame_10x.components.cljs_devtools.simple_render_with_path_annotations = (function day8$re_frame_10x$components$cljs_devtools$simple_render_with_path_annotations(p__84408){
var map__84409 = p__84408;
var map__84409__$1 = cljs.core.__destructure_map(map__84409);
var opts = map__84409__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84409__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84409__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84409__$1,new cljs.core.Keyword(null,"path-id","path-id",-73169688));
var sort_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84409__$1,new cljs.core.Keyword(null,"sort?","sort?",-567661924));
var render_paths_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881)], null)));
var open_new_inspectors_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","open-new-inspectors?","day8.re-frame-10x.panels.settings.subs/open-new-inspectors?",965777560)], null)));
var ns__GT_alias = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ns->alias","day8.re-frame-10x.panels.settings.subs/ns->alias",925252888)], null)));
var alias_QMARK_ = (function (){var and__5000__auto__ = cljs.core.seq(ns__GT_alias);
if(and__5000__auto__){
return cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","alias-namespaces?","day8.re-frame-10x.panels.settings.subs/alias-namespaces?",507809565)], null)));
} else {
return and__5000__auto__;
}
})();
var data__$1 = (function (){var G__84427 = data;
var G__84427__$1 = (cljs.core.truth_(alias_QMARK_)?day8.re_frame_10x.tools.datafy.alias_namespaces(G__84427,ns__GT_alias):G__84427);
if(cljs.core.truth_(sort_QMARK_)){
return day8.re_frame_10x.tools.datafy.deep_sorted_map(G__84427__$1);
} else {
return G__84427__$1;
}
})();
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.cljs_devtools.jsonml_style(),new cljs.core.Keyword(null,"child","child",623967545),((day8.re_frame_10x.components.cljs_devtools.prn_str_render_QMARK_(data__$1))?day8.re_frame_10x.components.cljs_devtools.prn_str_render(data__$1):day8.re_frame_10x.components.cljs_devtools.jsonml__GT_hiccup_with_path_annotations(day8.re_frame_10x.components.cljs_devtools.header.cljs$core$IFn$_invoke$arity$variadic(data__$1,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-paths?","render-paths?",1342149398),render_paths_QMARK_], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app-db-path",path], null),(function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"click-listener","click-listener",-1896386084),(function (p1__84399_SHARP_){
var temp__5823__auto__ = (function (){var G__84433 = p1__84399_SHARP_;
var G__84433__$1 = (((G__84433 == null))?null:G__84433.target);
var G__84433__$2 = (((G__84433__$1 == null))?null:G__84433__$1.parentElement);
if((G__84433__$2 == null)){
return null;
} else {
return G__84433__$2.getAttribute("data-path");
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var path__$1 = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__84399_SHARP_.button,(0))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316),path__$1], null)], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"middle-click-listener","middle-click-listener",-1619151179),(function (p1__84401_SHARP_){
var temp__5823__auto__ = (function (){var G__84446 = p1__84401_SHARP_;
var G__84446__$1 = (((G__84446 == null))?null:G__84446.target);
if((G__84446__$1 == null)){
return null;
} else {
return G__84446__$1.parentElement;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var target = temp__5823__auto__;
var path__$1 = target.getAttribute("data-path");
var btn = p1__84401_SHARP_.button;
p1__84401_SHARP_.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(btn,(1))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path-and-skip-to","day8.re-frame-10x.panels.app-db.events/create-path-and-skip-to",-195622997),path__$1,open_new_inspectors_QMARK_], null));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"menu-listener","menu-listener",-1541878230),(function (p1__84402_SHARP_){
p1__84402_SHARP_.preventDefault();

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","open-popup-menu","day8.re-frame-10x.panels.app-db.events/open-popup-menu",-559965598),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__84402_SHARP_.clientX,p1__84402_SHARP_.clientY], null),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"data-path","data-path",674802181),(function (){var G__84454 = p1__84402_SHARP_;
var G__84454__$1 = (((G__84454 == null))?null:G__84454.target);
var G__84454__$2 = (((G__84454__$1 == null))?null:G__84454__$1.parentElement);
var G__84454__$3 = (((G__84454__$2 == null))?null:G__84454__$2.getAttribute("data-path"));
if((G__84454__$3 == null)){
return null;
} else {
return day8.re_frame_10x.tools.reader.edn.read_string_maybe(G__84454__$3);
}
})()], null)], null));
})], null)], 0))))], null);
});

//# sourceMappingURL=day8.re_frame_10x.components.cljs_devtools.js.map
