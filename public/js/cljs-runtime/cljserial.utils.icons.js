goog.provide('cljserial.utils.icons');
cljserial.utils.icons.hiccup__GT_react = (function cljserial$utils$icons$hiccup__GT_react(form){
if(cljs.core.seq_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljserial.utils.icons.hiccup__GT_react,form);
} else {
if(cljs.core.vector_QMARK_(form)){
var form__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.first(form)))?cljs.core.rest(form):form
);
var vec__117621 = form__$1;
var seq__117622 = cljs.core.seq(vec__117621);
var first__117623 = cljs.core.first(seq__117622);
var seq__117622__$1 = cljs.core.next(seq__117622);
var tag = first__117623;
var first__117623__$1 = cljs.core.first(seq__117622__$1);
var seq__117622__$2 = cljs.core.next(seq__117622__$1);
var attrs = first__117623__$1;
var children = seq__117622__$2;
var vec__117624 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,children], null):(((cljs.core.count(form__$1) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null)
));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117624,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117624,(1),null);
var attrs__$2 = (function (){var G__117629 = attrs__$1;
if(cljs.core.contains_QMARK_(cljs.core.meta(form__$1),new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__117629,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form__$1)));
} else {
return G__117629;
}
})();
var children__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljserial.utils.icons.hiccup__GT_react,children__$1);
if(cljs.core.truth_(attrs__$2)){
return uix.compiler.alpha.component_element(tag,uix.compiler.attributes.interpret_props(attrs__$2),[children__$2]);
} else {
return uix.compiler.alpha.component_element(tag,uix.compiler.attributes.interpret_props(children__$2),[]);
}
} else {
return form;

}
}
});

//# sourceMappingURL=cljserial.utils.icons.js.map
