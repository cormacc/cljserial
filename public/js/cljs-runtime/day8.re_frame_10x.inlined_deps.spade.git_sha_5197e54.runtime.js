goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_css_compile_flags_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_css_compile_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),goog.DEBUG,new cljs.core.Keyword(null,"always-compile-css?","always-compile-css?",-1232863702),goog.DEBUG], null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_style_container_STAR_ !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_style_container_STAR_ = day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.defaults.create_container();
}
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.__GT_css_var = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$runtime$__GT_css_var(n){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSFunction("var",n);
});
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compile_css = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$runtime$compile_css(elements){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_css_compile_flags_STAR_,elements], 0));
});
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compose_names = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$runtime$compose_names(p__62816){
var map__62817 = p__62816;
var map__62817__$1 = cljs.core.__destructure_map(map__62817);
var style_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var composed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62817__$1,new cljs.core.Keyword(null,"composes","composes",-378837833));
if(cljs.core.not(composed)){
return style_name;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
if(typeof item === 'string'){
return item;
} else {
if(((cljs.core.map_QMARK_(item)) && (typeof new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item) === 'string'))){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(item);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid argument to :composes key:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style-name","style-name",977914017),style_name,new cljs.core.Keyword(null,"value","value",305978217),item], null));

}
}
}),((cljs.core.sequential_QMARK_(composed))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(composed,style_name):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [composed,style_name], null))));
}
});
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.ensure_style_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$runtime$ensure_style_BANG_(mode,metadata,name_factory,style_factory,params){
var style_name = (name_factory.cljs$core$IFn$_invoke$arity$1 ? name_factory.cljs$core$IFn$_invoke$arity$1(params) : name_factory.call(null, params));
var always_compile_QMARK_ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"always-compile-css","always-compile-css",-1171693669).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"always-compile-css?","always-compile-css?",-1232863702).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_css_compile_flags_STAR_);
}
})();
var mounted_info = (cljs.core.truth_(always_compile_QMARK_)?null:day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mounted_info(day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_style_container_STAR_,style_name));
var map__62820 = (function (){var or__5002__auto__ = mounted_info;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (style_factory.cljs$core$IFn$_invoke$arity$2 ? style_factory.cljs$core$IFn$_invoke$arity$2(style_name,params) : style_factory.call(null, style_name,params));
}
})();
var map__62820__$1 = cljs.core.__destructure_map(map__62820);
var info = map__62820__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
if(cljs.core.truth_(mounted_info)){
} else {
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mount_style_BANG_(day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime._STAR_style_container_STAR_,style_name,css,info);
}

var G__62825 = mode;
var G__62825__$1 = (((G__62825 instanceof cljs.core.Keyword))?G__62825.fqn:null);
switch (G__62825__$1) {
case "attrs":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compose_names(info)], null);

break;
case "class":
case "keyframes":
return day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compose_names(info);

break;
case "global":
return css;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62825__$1)].join('')));

}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.js.map
