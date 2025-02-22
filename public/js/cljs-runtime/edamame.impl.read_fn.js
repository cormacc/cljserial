goog.provide('edamame.impl.read_fn');
/**
 * Preserves metadata, unlike clojure.walk/walk.
 */
edamame.impl.read_fn.walk_STAR_ = (function edamame$impl$read_fn$walk_STAR_(inner,outer,form){
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta((function (){var G__66667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__66667) : outer.call(null, G__66667));
})(),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
var G__66671 = (new cljs.core.MapEntry((function (){var G__66672 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__66672) : inner.call(null, G__66672));
})(),(function (){var G__66673 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__66673) : inner.call(null, G__66673));
})(),null));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__66671) : outer.call(null, G__66671));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta((function (){var G__66676 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__66676) : outer.call(null, G__66676));
})(),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
var G__66679 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null, x)));
}),form,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__66679) : outer.call(null, G__66679));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__66681 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__66681) : outer.call(null, G__66681));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null, form));

}
}
}
}
}
});
/**
 * Preserves metadata, unlike clojure.walk/postwalk.
 */
edamame.impl.read_fn.postwalk_STAR_ = (function edamame$impl$read_fn$postwalk_STAR_(f,form){
return edamame.impl.read_fn.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(edamame.impl.read_fn.postwalk_STAR_,f),f,form);
});
edamame.impl.read_fn.read_fn = (function edamame$impl$read_fn$read_fn(expr){
var state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(0),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),false], null));
var expr__$1 = edamame.impl.read_fn.postwalk_STAR_((function (elt){
if((elt instanceof cljs.core.Symbol)){
var temp__5821__auto__ = cljs.core.re_matches(/^%(.*)/,cljs.core.name(elt));
if(cljs.core.truth_(temp__5821__auto__)){
var vec__66690 = temp__5821__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66690,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66690,(1),null);
if(cljs.core.empty_QMARK_(m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,(1)));

return new cljs.core.Symbol(null,"%1","%1",1309450150,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),true));

return elt;
} else {
var n_66711 = parseInt(m);
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,n_66711));

return elt;

}
}
} else {
return elt;
}
} else {
return elt;
}
}),expr);
var map__66687 = cljs.core.deref(state);
var map__66687__$1 = cljs.core.__destructure_map(map__66687);
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66687__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var var_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66687__$1,new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710));
var fixed_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66685_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66685_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(max_fixed + (1))));
var var_args_sym = new cljs.core.Symbol(null,"%&","%&",-728707069,null);
var arg_list = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fixed_names,(cljs.core.truth_(var_args_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),var_args_sym], null):null)));
var form = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,arg_list,(new cljs.core.List(null,expr__$1,null,(1),null)),(2),null)),(3),null));
return form;
});

//# sourceMappingURL=edamame.impl.read_fn.js.map
