goog.provide('cljserial.app');
if((typeof cljserial !== 'undefined') && (typeof cljserial.app !== 'undefined') && (typeof cljserial.app.el !== 'undefined')){
} else {
cljserial.app.el = document.getElementById("app-root");
}
taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("default","console","default/console",-1389954628),(taoensso.telemere.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$0 ? taoensso.telemere.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$0() : taoensso.telemere.handler_COLON_console_raw.call(null, )));
taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "cljserial.app";
var __id = null;
var __level = new cljs.core.Keyword(null,"info","info",-317069002);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__47502__auto__ = (new cljs.core.Delay((function (){

var signal__47493__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.app",new cljs.core.Keyword(null,"line","line",212345235),27,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/app.cljs"], null),__ns,27,1,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/app.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Logging initialised!",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__47494__auto__ = temp__5821__auto__;
return (sig_middleware__47494__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__47494__auto__.cljs$core$IFn$_invoke$arity$1(signal__47493__auto__) : sig_middleware__47494__auto__.call(null, signal__47493__auto__));
} else {
return signal__47493__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__47502__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__47502__auto__) : __run_result.call(null, signal__47502__auto__));
} else {
return true;
}
} else {
return null;
}
})();
cljserial.app.render_app = (function cljserial$app$render_app(state){
return replicant.dom.render(document.getElementById("app-root"),cljserial.layout.render(stack.utils.router._EQ__GT_links(cljserial.routes.all),state));
});
cljserial.app.main = (function cljserial$app$main(){
replicant.dom.set_dispatch_BANG_(cljserial.dispatch.handle_events);

stack.core.set_dispatch_BANG_((function (p1__62872_SHARP_){
return cljserial.dispatch.execute_actions(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62872_SHARP_], null));
}));

cljserial.model.init_BANG_(cljserial.routes.default$);

(gadget.inspector.inspect.cljs$core$IFn$_invoke$arity$2 ? gadget.inspector.inspect.cljs$core$IFn$_invoke$arity$2("model",cljserial.model._BANG_state) : gadget.inspector.inspect.call(null, "model",cljserial.model._BANG_state));

promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.filestore.init_PLUS_(),(function (p1__62873_SHARP_){
return cljserial.dispatch.handle_events(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","assoc","view/assoc",435578556),new cljs.core.Keyword(null,"filestore","filestore",1449104233),p1__62873_SHARP_], null)], null));
}));

stack.utils.router.start_BANG_(cljserial.routes.all,(function (p1__62874_SHARP_){
return cljserial.dispatch.handle_events(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","assoc","view/assoc",435578556),new cljs.core.Keyword(null,"route","route",329891309),p1__62874_SHARP_], null)], null));
}));

return cljserial.model.watch_BANG_(cljserial.app.render_app);
});

//# sourceMappingURL=cljserial.app.js.map
