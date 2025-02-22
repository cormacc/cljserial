goog.provide('cljserial.schema.version');
cljserial.schema.version.Version = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"major","major",-27376078),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minor","minor",-608536071),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
cljserial.schema.version.__GT_string = (function cljserial$schema$version$__GT_string(version){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.schema.version.Version,version))){
} else {
throw (new Error("Assert failed: (m/validate Version version)"));
}

return ["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"major","major",-27376078).cljs$core$IFn$_invoke$arity$1(version)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"minor","minor",-608536071).cljs$core$IFn$_invoke$arity$1(version)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"patch","patch",380775109).cljs$core$IFn$_invoke$arity$1(version))].join('');
});

//# sourceMappingURL=cljserial.schema.version.js.map
