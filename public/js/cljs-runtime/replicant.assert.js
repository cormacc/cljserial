goog.provide('replicant.assert');
replicant.assert.current_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
replicant.assert.current_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
replicant.assert.error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
replicant.assert.assert_QMARK_ = (function replicant$assert$assert_QMARK_(){
return null;
});
replicant.assert.log_QMARK_ = (function replicant$assert$log_QMARK_(){
return null;
});
/**
 * Add assert error exporter. `k` is a keyword, `f` is a function that will be
 *   called with an assert error, a map of
 *   `{:title :message :hiccup :fname :alias :data}`.
 */
replicant.assert.add_reporter = (function replicant$assert$add_reporter(k,f){
cljs.core.remove_watch(replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266));

return cljs.core.add_watch(replicant.assert.error,k,(function (_,___$1,___$2,error){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null, error));
}));
});
goog.exportSymbol('replicant.assert.add_reporter', replicant.assert.add_reporter);
/**
 * Remove a previoulsy added reporter, using the same `k` that was used to
 *   register it. To remove the default reporter, use `:replicant.assert/default`
 *   as `k`.
 */
replicant.assert.remove_reporter = (function replicant$assert$remove_reporter(k){
return cljs.core.remove_watch(replicant.assert.error,k);
});
goog.exportSymbol('replicant.assert.remove_reporter', replicant.assert.remove_reporter);

//# sourceMappingURL=replicant.assert.js.map
