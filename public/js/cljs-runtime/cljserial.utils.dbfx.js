goog.provide('cljserial.utils.dbfx');
if((typeof cljserial !== 'undefined') && (typeof cljserial.utils !== 'undefined') && (typeof cljserial.utils.dbfx !== 'undefined') && (typeof cljserial.utils.dbfx.impl !== 'undefined')){
} else {
cljserial.utils.dbfx.impl = new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljserial.utils.dbfx.impl,new cljs.core.Keyword(null,"refx","refx",-1461025396))){
cljserial.utils.dbfx.reg_sub = refx.alpha.reg_sub;

cljserial.utils.dbfx.use_sub = refx.alpha.use_sub;

cljserial.utils.dbfx.dispatch = refx.alpha.dispatch;

cljserial.utils.dbfx.dispatch_sync = refx.alpha.dispatch_sync;

cljserial.utils.dbfx.reg_fx = refx.alpha.reg_fx;

cljserial.utils.dbfx.reg_cofx = refx.alpha.reg_cofx;

cljserial.utils.dbfx.reg_event_fx = refx.alpha.reg_event_fx;

cljserial.utils.dbfx.reg_event_db = refx.alpha.reg_event_db;

cljserial.utils.dbfx.inject_cofx = refx.alpha.inject_cofx;

cljserial.utils.dbfx.__GT_interceptor = refx.interceptor.__GT_interceptor;

cljserial.utils.dbfx.reg_global_interceptor = null;

cljserial.utils.dbfx.path = refx.interceptors.path;

cljserial.utils.dbfx.after = refx.interceptors.after;
} else {
cljserial.utils.dbfx.reg_sub = re_frame.core.reg_sub;

cljserial.utils.dbfx.use_sub = cljserial.utils.uix_reframe.use_subscribe;

cljserial.utils.dbfx.dispatch = re_frame.core.dispatch;

cljserial.utils.dbfx.dispatch_sync = re_frame.core.dispatch_sync;

cljserial.utils.dbfx.reg_fx = re_frame.core.reg_fx;

cljserial.utils.dbfx.reg_cofx = re_frame.core.reg_cofx;

cljserial.utils.dbfx.reg_event_fx = re_frame.core.reg_event_fx;

cljserial.utils.dbfx.reg_event_db = re_frame.core.reg_event_db;

cljserial.utils.dbfx.inject_cofx = re_frame.core.inject_cofx;

cljserial.utils.dbfx.__GT_interceptor = re_frame.core.__GT_interceptor;

cljserial.utils.dbfx.reg_global_interceptor = re_frame.core.reg_global_interceptor;

cljserial.utils.dbfx.path = re_frame.core.path;

cljserial.utils.dbfx.after = re_frame.core.after;
}
/**
 * Defines a refx interceptor that validates updated db content against a given (malli) `schema`
 */
cljserial.utils.dbfx.schema_check_interceptor = (function cljserial$utils$dbfx$schema_check_interceptor(schema){
var G__54723 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljserial.utils.schema.check_and_throw,schema);
return (cljserial.utils.dbfx.after.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.after.cljs$core$IFn$_invoke$arity$1(G__54723) : cljserial.utils.dbfx.after.call(null, G__54723));
});
/**
 * Defines a refx interceptor that caches data to browser local storage under the specified `id`
 */
cljserial.utils.dbfx.browser_cache_interceptor = (function cljserial$utils$dbfx$browser_cache_interceptor(id){
var G__54731 = (function (p1__54725_SHARP_){
return cljserial.utils.browser.write(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),p1__54725_SHARP_], null));
});
return (cljserial.utils.dbfx.after.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.after.cljs$core$IFn$_invoke$arity$1(G__54731) : cljserial.utils.dbfx.after.call(null, G__54731));
});

//# sourceMappingURL=cljserial.utils.dbfx.js.map
