goog.provide('refx.interop');
refx.interop.empty_queue = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
refx.interop.next_tick = goog.async.nextTick;
refx.interop.after_render = refx.interop.next_tick;
/**
 * @define {boolean}
 */
refx.interop.debug_enabled_QMARK_ = goog.DEBUG;
refx.interop.set_timeout_BANG_ = (function refx$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
refx.interop.loggers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"debug","debug",-1608172596),console.debug.bind(console),new cljs.core.Keyword(null,"info","info",-317069002),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console)], null);
refx.interop.log = (function refx$interop$log(level,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((refx.interop.loggers.cljs$core$IFn$_invoke$arity$1 ? refx.interop.loggers.cljs$core$IFn$_invoke$arity$1(level) : refx.interop.loggers.call(null, level)),args);
});

//# sourceMappingURL=refx.interop.js.map
