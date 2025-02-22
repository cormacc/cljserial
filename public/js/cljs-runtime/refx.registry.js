goog.provide('refx.registry');
refx.registry.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
refx.registry.lookup = (function refx$registry$lookup(var_args){
var G__86003 = arguments.length;
switch (G__86003) {
case 2:
return refx.registry.lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return refx.registry.lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.registry.lookup.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
var handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(refx.registry.registry),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null));
if(refx.interop.debug_enabled_QMARK_){
if((handler == null)){
refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"handler registered for:",id], 0));
} else {
}
} else {
}

return handler;
}));

(refx.registry.lookup.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,not_found){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(refx.registry.registry),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),not_found);
}));

(refx.registry.lookup.cljs$lang$maxFixedArity = 3);

refx.registry.add_BANG_ = (function refx$registry$add_BANG_(kind,id,handler){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refx.registry.registry,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler);

return handler;
});
refx.registry.remove_BANG_ = (function refx$registry$remove_BANG_(kind,id){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refx.registry.registry,cljs.core.update,kind,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));

return null;
});
refx.registry.clear_BANG_ = (function refx$registry$clear_BANG_(kind){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(refx.registry.registry,cljs.core.dissoc,kind);

return null;
});
refx.registry.clear_all_BANG_ = (function refx$registry$clear_all_BANG_(){
cljs.core.reset_BANG_(refx.registry.registry,cljs.core.PersistentArrayMap.EMPTY);

return null;
});

//# sourceMappingURL=refx.registry.js.map
