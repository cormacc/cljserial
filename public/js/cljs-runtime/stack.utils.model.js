goog.provide('stack.utils.model');
stack.utils.model.reg_reframe_transactions = (function stack$utils$model$reg_reframe_transactions(schema){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.model";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.model",new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/model.cljs"], null),__ns,13,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/model.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Registering re-frame transactions...",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var G__96745_96877 = new cljs.core.Keyword(null,"tx-log-loaded","tx-log-loaded",-979847668);
var G__96746_96878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"domain-db","domain-db",143141236)) : stack.utils.dbfx.path.call(null, new cljs.core.Keyword(null,"domain-db","domain-db",143141236)))], null);
var G__96747_96879 = (function (domain_db,p__96755){
var vec__96759 = p__96755;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96759,(0),null);
var transactions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96759,(1),null);
return stack.utils.datascript.rebuild(domain_db,transactions);
});
(stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__96745_96877,G__96746_96878,G__96747_96879) : stack.utils.dbfx.reg_event_db.call(null, G__96745_96877,G__96746_96878,G__96747_96879));

var G__96773_96882 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__96774_96883 = (function (transaction){
var G__96781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),transaction], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__96781) : stack.utils.dbfx.dispatch.call(null, G__96781));
});
(stack.utils.dbfx.reg_fx.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_fx.cljs$core$IFn$_invoke$arity$2(G__96773_96882,G__96774_96883) : stack.utils.dbfx.reg_fx.call(null, G__96773_96882,G__96774_96883));

var G__96784_96884 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__96785_96885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"domain-db","domain-db",143141236)) : stack.utils.dbfx.path.call(null, new cljs.core.Keyword(null,"domain-db","domain-db",143141236)))], null);
var G__96786_96886 = (function (p__96799,p__96800){
var map__96802 = p__96799;
var map__96802__$1 = cljs.core.__destructure_map(map__96802);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96802__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__96803 = p__96800;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96803,(0),null);
var transaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96803,(1),null);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.model";
var __id = new cljs.core.Keyword("stack.utils.model","handling-transaction","stack.utils.model/handling-transaction",-1306242916);
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.model",new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/model.cljs"], null),__ns,30,6,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/model.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"trans","trans",-1318503851),transaction], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var new_db = stack.utils.datascript.transact(db,transaction);
var new_transaction = cljs.core.last(new cljs.core.Keyword(null,"tx-log","tx-log",1002405833).cljs$core$IFn$_invoke$arity$1(new_db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"persist-transaction","persist-transaction",673562660),new_transaction], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__96784_96884,G__96785_96885,G__96786_96886) : stack.utils.dbfx.reg_event_fx.call(null, G__96784_96884,G__96785_96885,G__96786_96886));

var G__96816 = new cljs.core.Keyword(null,"persist-transaction","persist-transaction",673562660);
var G__96817 = (function (transaction){
return stack.utils.datascript.add_tx_PLUS_(transaction);
});
return (stack.utils.dbfx.reg_fx.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_fx.cljs$core$IFn$_invoke$arity$2(G__96816,G__96817) : stack.utils.dbfx.reg_fx.call(null, G__96816,G__96817));
});
stack.utils.model.reg_reframe_subs = (function stack$utils$model$reg_reframe_subs(){
var G__96820_96895 = new cljs.core.Keyword(null,"domain-db","domain-db",143141236);
var G__96821_96896 = (function (db,_){
return new cljs.core.Keyword(null,"domain-db","domain-db",143141236).cljs$core$IFn$_invoke$arity$1(db);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__96820_96895,G__96821_96896) : stack.utils.dbfx.reg_sub.call(null, G__96820_96895,G__96821_96896));

var G__96822_96898 = new cljs.core.Keyword(null,"domain-data","domain-data",-278275019);
var G__96823_96899 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__96824_96900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-db","domain-db",143141236)], null);
var G__96825_96901 = (function (ddb,_){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(ddb);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__96822_96898,G__96823_96899,G__96824_96900,G__96825_96901) : stack.utils.dbfx.reg_sub.call(null, G__96822_96898,G__96823_96899,G__96824_96900,G__96825_96901));

var G__96827 = new cljs.core.Keyword(null,"domain-tx-log","domain-tx-log",1922643728);
var G__96828 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__96829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-db","domain-db",143141236)], null);
var G__96830 = (function (ddb,_){
return new cljs.core.Keyword(null,"tx-log","tx-log",1002405833).cljs$core$IFn$_invoke$arity$1(ddb);
});
return (stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__96827,G__96828,G__96829,G__96830) : stack.utils.dbfx.reg_sub.call(null, G__96827,G__96828,G__96829,G__96830));
});
stack.utils.model.embed_bitemporal_db = (function stack$utils$model$embed_bitemporal_db(id,schema){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.model";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.model",new cljs.core.Keyword(null,"line","line",212345235),61,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/model.cljs"], null),__ns,61,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/model.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,id,null,"Embedding bi-temporal DB ...",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var db = stack.utils.datascript.empty_db(id,schema);
stack.utils.model.reg_reframe_transactions(schema);

stack.utils.model.reg_reframe_subs();

promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(stack.utils.datascript.open_tx_log_PLUS_(id)),(function (p__91509__auto__){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p__91509__auto__,(function (p1__96835_SHARP_){
var G__96858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-log-loaded","tx-log-loaded",-979847668),p1__96835_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__96858) : stack.utils.dbfx.dispatch.call(null, G__96858));
}));
}));

return db;
});
/**
 * Retrieve the current state of the embedded db.
 */
stack.utils.model.get_embedded_db = (function stack$utils$model$get_embedded_db(){
return new cljs.core.Keyword(null,"domain-db","domain-db",143141236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db));
});
stack.utils.model.get_data = (function stack$utils$model$get_data(){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(stack.utils.model.get_embedded_db());
});
stack.utils.model.get_tx_log = (function stack$utils$model$get_tx_log(){
return new cljs.core.Keyword(null,"tx-log","tx-log",1002405833).cljs$core$IFn$_invoke$arity$1(stack.utils.model.get_embedded_db());
});
stack.utils.model.transact_BANG_ = (function stack$utils$model$transact_BANG_(transaction){
var G__96869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),transaction], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__96869) : stack.utils.dbfx.dispatch.call(null, G__96869));
});

//# sourceMappingURL=stack.utils.model.js.map
