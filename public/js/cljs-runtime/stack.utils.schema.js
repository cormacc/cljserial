goog.provide('stack.utils.schema');
/**
 * Throws an exception if `db` doesn't match the Spec `a-spec`.
 */
stack.utils.schema.check_and_throw = (function stack$utils$schema$check_and_throw(type,inst){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(type,inst))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["schema check failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(type,inst))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
stack.utils.schema.enum_values = (function stack$utils$schema$enum_values(enum$){
return cljs.core.rest(enum$);
});
/**
 * Apply map to elements of a malli schema enum.
 */
stack.utils.schema.enum_map = (function stack$utils$schema$enum_map(f,enum$){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,stack.utils.schema.enum_values(enum$));
});
/**
 * Apply map-indexed to elements of a malli schema enum.
 */
stack.utils.schema.enum_map_indexed = (function stack$utils$schema$enum_map_indexed(f,enum$){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,stack.utils.schema.enum_values(enum$));
});
stack.utils.schema.int_range = (function stack$utils$schema$int_range(int_schema){
var bounds = cljs.core.second(int_schema);
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(bounds),(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(bounds) + (1)));
});

//# sourceMappingURL=stack.utils.schema.js.map
