goog.provide('refx.cofx');
refx.cofx.kind = new cljs.core.Keyword(null,"cofx","cofx",2013202907);
refx.cofx.register = (function refx$cofx$register(id,handler){
return refx.registry.add_BANG_(refx.cofx.kind,id,handler);
});
refx.cofx.inject_cofx = (function refx$cofx$inject_cofx(var_args){
var G__86462 = arguments.length;
switch (G__86462) {
case 1:
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$cofx$coeffects_before(context){
var temp__5821__auto__ = refx.registry.lookup.cljs$core$IFn$_invoke$arity$2(refx.cofx.kind,id);
if(cljs.core.truth_(temp__5821__auto__)){
var handler = temp__5821__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler);
} else {
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for",id], 0));
}
})], 0));
}));

(refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$cofx$coeffects_before(context){
var temp__5821__auto__ = refx.registry.lookup.cljs$core$IFn$_invoke$arity$2(refx.cofx.kind,id);
if(cljs.core.truth_(temp__5821__auto__)){
var handler = temp__5821__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler,value);
} else {
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for",id], 0));
}
})], 0));
}));

(refx.cofx.inject_cofx.cljs$lang$maxFixedArity = 2);

refx.cofx.register(new cljs.core.Keyword(null,"db","db",993250759),(function refx$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref(refx.db.app_db));
}));
refx.cofx.inject_db = refx.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759));

//# sourceMappingURL=refx.cofx.js.map
