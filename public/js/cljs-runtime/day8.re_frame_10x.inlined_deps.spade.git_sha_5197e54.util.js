goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util');
/**
 * Given a style factory function, return an appropriate name for its
 * style. This function assumes it will be called *once* for any given
 * factory; subsequent calls for the same factory *may not* return the
 * same value (especially under :simple optimizations).
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.factory__GT_name = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$util$factory__GT_name(factory){
var given_name = factory.name;
if(cljs.core.empty_QMARK_(given_name)){
return cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("SPD"));
} else {
return clojure.string.replace(clojure.string.replace(clojure.string.replace(given_name,/[_-]factory\$/,""),/[_$]/,"-"),/^-/,"_");
}
});
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.sanitize = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$util$sanitize(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/[^A-Za-z0-9-_]/,"-");
});
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.params__GT_key = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$util$params__GT_key(p){
try{return cljs.core.hash(p);
}catch (e62581){var _ = e62581;
return null;
}});
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.build_style_name = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$util$build_style_name(base,style_key,params){
if(cljs.core.truth_(style_key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.sanitize(style_key)].join('');
} else {
if(cljs.core.seq(params)){
var temp__5821__auto__ = day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.params__GT_key(params);
if(cljs.core.truth_(temp__5821__auto__)){
var pkey = temp__5821__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkey)].join('');
} else {
var msg = ["WARNING: no key provided for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)].join('');
console.warn(msg);

return base;
}
} else {
return base;

}
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.js.map
