goog.provide('stack.utils.collections');
stack.utils.collections.find_first = (function stack$utils$collections$find_first(m,k){
return cljs.core.some(k,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,cljs.core.vals,m)));
});
stack.utils.collections.find_all = (function stack$utils$collections$find_all(m,k){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(k,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,cljs.core.vals,m)));
});

//# sourceMappingURL=stack.utils.collections.js.map
