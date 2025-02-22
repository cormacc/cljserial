goog.provide('stack.utils.indexed_db');
stack.utils.indexed_db.create_upgrade_handler = (function stack$utils$indexed_db$create_upgrade_handler(id,schema_version,on_upgrade){
return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","create-or-upgrade","stack.utils.indexed-db/create-or-upgrade",-454721883);
var __level = new cljs.core.Keyword(null,"warn","warn",-436710552);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,11,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),schema_version], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var G__89503 = stack.utils.events.extract_result(e);
return (on_upgrade.cljs$core$IFn$_invoke$arity$1 ? on_upgrade.cljs$core$IFn$_invoke$arity$1(G__89503) : on_upgrade.call(null, G__89503));
});
});
stack.utils.indexed_db.create_blocked_handler = (function stack$utils$indexed_db$create_blocked_handler(idb_conn_atom,id){
return (function (_e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","connection-blocked","stack.utils.indexed-db/connection-blocked",-1683585085);
var __level = new cljs.core.Keyword(null,"warn","warn",-436710552);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,17,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,id,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return cljs.core.deref(idb_conn_atom).close();
});
});
stack.utils.indexed_db.create_open_handler = (function stack$utils$indexed_db$create_open_handler(idb_conn_atom,id,on_open){
return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","connection-opened","stack.utils.indexed-db/connection-opened",1613482470);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),22,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,22,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,id,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var idb_conn = stack.utils.events.extract_result(e);
cljs.core.reset_BANG_(idb_conn_atom,idb_conn);

if(cljs.core.truth_(on_open)){
return (on_open.cljs$core$IFn$_invoke$arity$1 ? on_open.cljs$core$IFn$_invoke$arity$1(idb_conn) : on_open.call(null, idb_conn));
} else {
return null;
}
});
});
stack.utils.indexed_db.open = (function stack$utils$indexed_db$open(var_args){
var args__5732__auto__ = [];
var len__5726__auto___89570 = arguments.length;
var i__5727__auto___89571 = (0);
while(true){
if((i__5727__auto___89571 < len__5726__auto___89570)){
args__5732__auto__.push((arguments[i__5727__auto___89571]));

var G__89572 = (i__5727__auto___89571 + (1));
i__5727__auto___89571 = G__89572;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return stack.utils.indexed_db.open.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(stack.utils.indexed_db.open.cljs$core$IFn$_invoke$arity$variadic = (function (idb_conn_atom,id,p__89525){
var map__89526 = p__89525;
var map__89526__$1 = cljs.core.__destructure_map(map__89526);
var schema_version = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89526__$1,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),(1));
var on_upgrade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89526__$1,new cljs.core.Keyword(null,"on-upgrade","on-upgrade",1146037332));
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89526__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163),null);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","open-connection","stack.utils.indexed-db/open-connection",297968181);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,29,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),schema_version], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return stack.utils.events.add_listener(stack.utils.events.add_listener(stack.utils.events.add_listener(stack.utils.events.add_listener(window.indexedDB.open(id,cljs.core.clj__GT_js(schema_version)),"error",(function (p1__89516_SHARP_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","open-error","stack.utils.indexed-db/open-error",244624549);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"column","column",2078222095),37,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,33,37,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),p1__89516_SHARP_], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();
})),"blocked",stack.utils.indexed_db.create_blocked_handler(idb_conn_atom,id)),"upgradeneeded",stack.utils.indexed_db.create_upgrade_handler(id,schema_version,on_upgrade)),"success",stack.utils.indexed_db.create_open_handler(idb_conn_atom,id,on_open));
}));

(stack.utils.indexed_db.open.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(stack.utils.indexed_db.open.cljs$lang$applyTo = (function (seq89517){
var G__89518 = cljs.core.first(seq89517);
var seq89517__$1 = cljs.core.next(seq89517);
var G__89519 = cljs.core.first(seq89517__$1);
var seq89517__$2 = cljs.core.next(seq89517__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89518,G__89519,seq89517__$2);
}));

stack.utils.indexed_db.add = (function stack$utils$indexed_db$add(idb_conn,store_id,data){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","add","stack.utils.indexed-db/add",978130458);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),40,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,40,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),idb_conn.name,new cljs.core.Keyword(null,"store","store",1512230022),store_id,new cljs.core.Keyword(null,"data","data",-232669377),data], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return stack.utils.events.add_listener(idb_conn.transaction(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_id], null),"readwrite").objectStore(store_id).add(cljs.core.clj__GT_js(data)),"success",(function (){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.indexed-db";
var __id = new cljs.core.Keyword("stack.utils.indexed-db","add-ok","stack.utils.indexed-db/add-ok",239525186);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"column","column",2078222095),39,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs"], null),__ns,44,39,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),idb_conn.name,new cljs.core.Keyword(null,"store","store",1512230022),store_id], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();
}));
});
stack.utils.indexed_db.get_all = (function stack$utils$indexed_db$get_all(var_args){
var args__5732__auto__ = [];
var len__5726__auto___89582 = arguments.length;
var i__5727__auto___89583 = (0);
while(true){
if((i__5727__auto___89583 < len__5726__auto___89582)){
args__5732__auto__.push((arguments[i__5727__auto___89583]));

var G__89584 = (i__5727__auto___89583 + (1));
i__5727__auto___89583 = G__89584;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return stack.utils.indexed_db.get_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(stack.utils.indexed_db.get_all.cljs$core$IFn$_invoke$arity$variadic = (function (idb_conn,store_id,p__89553){
var map__89554 = p__89553;
var map__89554__$1 = cljs.core.__destructure_map(map__89554);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89554__$1,new cljs.core.Keyword(null,"then","then",460598070));
return stack.utils.events.add_listener(idb_conn.transaction(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_id], null),"readonly").objectStore(store_id).getAll(),"success",(function (e){
var G__89556 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(stack.utils.events.extract_result(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(G__89556) : then.call(null, G__89556));
}));
}));

(stack.utils.indexed_db.get_all.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(stack.utils.indexed_db.get_all.cljs$lang$applyTo = (function (seq89550){
var G__89551 = cljs.core.first(seq89550);
var seq89550__$1 = cljs.core.next(seq89550);
var G__89552 = cljs.core.first(seq89550__$1);
var seq89550__$2 = cljs.core.next(seq89550__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89551,G__89552,seq89550__$2);
}));


//# sourceMappingURL=stack.utils.indexed_db.js.map
