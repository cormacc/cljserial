goog.provide('replicant.alias');
replicant.alias.aliases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Register an alias. Associates the alias key `k` with the function `f`:
 * 
 * ```clj
 * (replicant.alias/register! :ui/a custom-link)
 * ```
 */
replicant.alias.register_BANG_ = (function replicant$alias$register_BANG_(k,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(replicant.alias.aliases,cljs.core.assoc,k,f);
});
/**
 * Returns globally registered aliases
 */
replicant.alias.get_registered_aliases = (function replicant$alias$get_registered_aliases(){
return cljs.core.deref(replicant.alias.aliases);
});
replicant.alias.__GT_hiccup = (function replicant$alias$__GT_hiccup(headers){
if(cljs.core.truth_(headers)){
var or__5002__auto__ = (headers[(8)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((headers[(0)])),(function (){var attrs = replicant.core.get_attrs(headers);
var G__63726 = (headers[(4)]);
var G__63726__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63726,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(attrs)):G__63726);
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63726__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.set(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(attrs)));
} else {
return G__63726__$1;
}
})()], null),replicant.core.flatten_seqs((headers[(5)])));
}
} else {
return null;
}
});
replicant.alias.alias_hiccup_QMARK_ = (function replicant$alias$alias_hiccup_QMARK_(x){
return ((replicant.hiccup.hiccup_QMARK_(x)) && (cljs.core.qualified_keyword_QMARK_(cljs.core.first(x))));
});
replicant.alias.expand_aliased_hiccup = (function replicant$alias$expand_aliased_hiccup(x,opt){
if(replicant.alias.alias_hiccup_QMARK_(x)){
var headers = replicant.core.get_hiccup_headers(null,x);
var defined_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)]));
if(((cljs.core.not(defined_QMARK_)) && (cljs.core.get.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"ignore-missing-alias?","ignore-missing-alias?",1175846938),true) === false))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tried to expand undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((headers[(0)]))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alias","alias",-2039751630),(headers[(0)])], null));
} else {
}

var G__63740 = headers;
var G__63740__$1 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(opt),(headers[(0)])))?replicant.core.get_alias_headers(opt,G__63740):G__63740);
return replicant.alias.__GT_hiccup(G__63740__$1);

} else {
return x;
}
});
replicant.alias.get_opts = (function replicant$alias$get_opts(opt){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(opt,new cljs.core.Keyword(null,"aliases","aliases",1346874714),(function (p1__63745_SHARP_){
var or__5002__auto__ = p1__63745_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return replicant.alias.get_registered_aliases();
}
}));
});
/**
 * Expand the first level of aliases in `hiccup`. The result may contain aliases
 *   if returned by the top-level aliases. If using aliases that are not in the
 *   global registry, pass `:aliases` in `opt`.
 */
replicant.alias.expand_1 = (function replicant$alias$expand_1(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63774 = arguments.length;
var i__5727__auto___63775 = (0);
while(true){
if((i__5727__auto___63775 < len__5726__auto___63774)){
args__5732__auto__.push((arguments[i__5727__auto___63775]));

var G__63776 = (i__5727__auto___63775 + (1));
i__5727__auto___63775 = G__63776;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(replicant.alias.expand_1.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__63757){
var vec__63758 = p__63757;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63758,(0),null);
var opt__$1 = replicant.alias.get_opts(opt);
return clojure.walk.postwalk((function (p1__63752_SHARP_){
return replicant.alias.expand_aliased_hiccup(p1__63752_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand_1.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand_1.cljs$lang$applyTo = (function (seq63753){
var G__63754 = cljs.core.first(seq63753);
var seq63753__$1 = cljs.core.next(seq63753);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63754,seq63753__$1);
}));

/**
 * Recursively expand all aliases in `hiccup`. The result will not contain
 *   aliases. If using aliases that are not in the global registry, pass `:aliases`
 *   in `opt`.
 */
replicant.alias.expand = (function replicant$alias$expand(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63779 = arguments.length;
var i__5727__auto___63780 = (0);
while(true){
if((i__5727__auto___63780 < len__5726__auto___63779)){
args__5732__auto__.push((arguments[i__5727__auto___63780]));

var G__63781 = (i__5727__auto___63780 + (1));
i__5727__auto___63780 = G__63781;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(replicant.alias.expand.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,p__63767){
var vec__63768 = p__63767;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63768,(0),null);
var opt__$1 = replicant.alias.get_opts(opt);
return clojure.walk.prewalk((function (p1__63761_SHARP_){
return replicant.alias.expand_aliased_hiccup(p1__63761_SHARP_,opt__$1);
}),hiccup);
}));

(replicant.alias.expand.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(replicant.alias.expand.cljs$lang$applyTo = (function (seq63762){
var G__63763 = cljs.core.first(seq63762);
var seq63762__$1 = cljs.core.next(seq63762);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63763,seq63762__$1);
}));


//# sourceMappingURL=replicant.alias.js.map
