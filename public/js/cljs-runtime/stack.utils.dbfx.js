goog.provide('stack.utils.dbfx');
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.dbfx !== 'undefined') && (typeof stack.utils.dbfx.impl !== 'undefined')){
} else {
stack.utils.dbfx.impl = new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stack.utils.dbfx.impl,new cljs.core.Keyword(null,"refx","refx",-1461025396))){
stack.utils.dbfx.reg_sub = refx.alpha.reg_sub;

stack.utils.dbfx.use_sub = refx.alpha.use_sub;

stack.utils.dbfx.dispatch = refx.alpha.dispatch;

stack.utils.dbfx.dispatch_sync = refx.alpha.dispatch_sync;

stack.utils.dbfx.reg_fx = refx.alpha.reg_fx;

stack.utils.dbfx.reg_cofx = refx.alpha.reg_cofx;

stack.utils.dbfx.reg_event_fx = refx.alpha.reg_event_fx;

stack.utils.dbfx.reg_event_db = refx.alpha.reg_event_db;

stack.utils.dbfx.inject_cofx = refx.alpha.inject_cofx;

stack.utils.dbfx.path = refx.interceptors.path;

stack.utils.dbfx.after = refx.interceptors.after;

stack.utils.dbfx.unwrap = refx.interceptors.unwrap;

stack.utils.dbfx.__GT_interceptor = refx.interceptor.__GT_interceptor;

stack.utils.dbfx.reg_global_interceptor = null;

stack.utils.dbfx.reg_flow = null;
} else {
stack.utils.dbfx.reg_sub = re_frame.core.reg_sub;

stack.utils.dbfx.use_sub = uix.re_frame.use_subscribe;

stack.utils.dbfx.dispatch = re_frame.core.dispatch;

stack.utils.dbfx.dispatch_sync = re_frame.core.dispatch_sync;

stack.utils.dbfx.reg_fx = re_frame.core.reg_fx;

stack.utils.dbfx.reg_cofx = re_frame.core.reg_cofx;

stack.utils.dbfx.reg_event_fx = re_frame.core.reg_event_fx;

stack.utils.dbfx.reg_event_db = re_frame.core.reg_event_db;

stack.utils.dbfx.inject_cofx = re_frame.core.inject_cofx;

stack.utils.dbfx.path = re_frame.core.path;

stack.utils.dbfx.after = re_frame.core.after;

stack.utils.dbfx.unwrap = re_frame.core.unwrap;

stack.utils.dbfx.__GT_interceptor = re_frame.core.__GT_interceptor;

stack.utils.dbfx.reg_global_interceptor = re_frame.core.reg_global_interceptor;

stack.utils.dbfx.reg_flow = re_frame.alpha.reg_flow;
}
var G__93983_94008 = new cljs.core.Keyword(null,"timestamp","timestamp",579478971);
var G__93984_94009 = (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now());
});
(stack.utils.dbfx.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__93983_94008,G__93984_94009) : stack.utils.dbfx.reg_cofx.call(null, G__93983_94008,G__93984_94009));
/**
 * Defines a refx interceptor that validates updated db content against a given (malli) `schema`
 */
stack.utils.dbfx.schema_check_interceptor = (function stack$utils$dbfx$schema_check_interceptor(schema){
var G__93995 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(stack.utils.schema.check_and_throw,schema);
return (stack.utils.dbfx.after.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.after.cljs$core$IFn$_invoke$arity$1(G__93995) : stack.utils.dbfx.after.call(null, G__93995));
});

//# sourceMappingURL=stack.utils.dbfx.js.map
