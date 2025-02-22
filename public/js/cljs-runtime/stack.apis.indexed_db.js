goog.provide('stack.apis.indexed_db');
stack.apis.indexed_db.open_PLUS_ = (function stack$apis$indexed_db$open_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___92775 = arguments.length;
var i__5727__auto___92776 = (0);
while(true){
if((i__5727__auto___92776 < len__5726__auto___92775)){
args__5732__auto__.push((arguments[i__5727__auto___92776]));

var G__92777 = (i__5727__auto___92776 + (1));
i__5727__auto___92776 = G__92777;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.apis.indexed_db.open_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.apis.indexed_db.open_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__92464){
var map__92470 = p__92464;
var map__92470__$1 = cljs.core.__destructure_map(map__92470);
var schema_version = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__92470__$1,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),(1));
var on_upgrade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92470__$1,new cljs.core.Keyword(null,"on-upgrade","on-upgrade",1146037332));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","open-connection","stack.apis.indexed-db/open-connection",2013033985);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,11,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),schema_version], null),null,null,null,null,null,null,null,null,null,null));
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

var result = promesa.core.deferred();
stack.utils.events.add_listener(stack.utils.events.add_listener(stack.utils.events.add_listener(stack.utils.events.add_listener(window.indexedDB.open(id,cljs.core.clj__GT_js(schema_version)),"error",(function (error){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-open-error","stack.apis.indexed-db/idb-open-error",1107404133);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"column","column",2078222095),32,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,18,32,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),error], null),null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.reject_BANG_(result,error);
})),"blocked",(function (idb_version_change_event){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-open-blocked","stack.apis.indexed-db/idb-open-blocked",-738417762);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),22,new cljs.core.Keyword(null,"column","column",2078222095),32,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,22,32,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"event","event",301435442),idb_version_change_event], null),null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.reject_BANG_(result,idb_version_change_event);
})),"upgradeneeded",(function (evt){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-create-or-upgrade","stack.apis.indexed-db/idb-create-or-upgrade",2022574636);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"column","column",2078222095),32,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,26,32,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),schema_version], null),null,null,null,null,null,null,null,null,null,null));
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

var G__92645 = stack.utils.events.extract_result(evt);
return (on_upgrade.cljs$core$IFn$_invoke$arity$1 ? on_upgrade.cljs$core$IFn$_invoke$arity$1(G__92645) : on_upgrade.call(null, G__92645));
})),"success",(function (evt){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-open-ok","stack.apis.indexed-db/idb-open-ok",-537509602);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"column","column",2078222095),32,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,30,32,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),schema_version], null),null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result,stack.utils.events.extract_result(evt));
}));

return result;
}));

(stack.apis.indexed_db.open_PLUS_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.apis.indexed_db.open_PLUS_.cljs$lang$applyTo = (function (seq92432){
var G__92434 = cljs.core.first(seq92432);
var seq92432__$1 = cljs.core.next(seq92432);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92434,seq92432__$1);
}));

stack.apis.indexed_db.records_EQ__GT_sorted_map = (function stack$apis$indexed_db$records_EQ__GT_sorted_map(records,key_path){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__5480__auto__ = (function stack$apis$indexed_db$records_EQ__GT_sorted_map_$_iter__92676(s__92677){
return (new cljs.core.LazySeq(null,(function (){
var s__92677__$1 = s__92677;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__92677__$1);
if(temp__5823__auto__){
var s__92677__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__92677__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__92677__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__92679 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__92678 = (0);
while(true){
if((i__92678 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__92678);
cljs.core.chunk_append(b__92679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_path.cljs$core$IFn$_invoke$arity$1 ? key_path.cljs$core$IFn$_invoke$arity$1(r) : key_path.call(null, r)),r], null));

var G__92802 = (i__92678 + (1));
i__92678 = G__92802;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__92679),stack$apis$indexed_db$records_EQ__GT_sorted_map_$_iter__92676(cljs.core.chunk_rest(s__92677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__92679),null);
}
} else {
var r = cljs.core.first(s__92677__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(key_path.cljs$core$IFn$_invoke$arity$1 ? key_path.cljs$core$IFn$_invoke$arity$1(r) : key_path.call(null, r)),r], null),stack$apis$indexed_db$records_EQ__GT_sorted_map_$_iter__92676(cljs.core.rest(s__92677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(records);
})());
});
/**
 * Get all records as either a sorted map (default) or vector.
 */
stack.apis.indexed_db.get_all_PLUS_ = (function stack$apis$indexed_db$get_all_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___92805 = arguments.length;
var i__5727__auto___92806 = (0);
while(true){
if((i__5727__auto___92806 < len__5726__auto___92805)){
args__5732__auto__.push((arguments[i__5727__auto___92806]));

var G__92807 = (i__5727__auto___92806 + (1));
i__5727__auto___92806 = G__92807;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return stack.apis.indexed_db.get_all_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(stack.apis.indexed_db.get_all_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (idb_conn,store_id,p__92689){
var map__92690 = p__92689;
var map__92690__$1 = cljs.core.__destructure_map(map__92690);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__92690__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"map","map",1371690461));
var conn_id = idb_conn.name;
var result = promesa.core.deferred();
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___91412__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(idb_conn.transaction(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_id], null),"readonly").objectStore(store_id)),(function (object_store){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(object_store.keyPath)),(function (key_path){
return promesa.protocols._promise(stack.utils.events.add_listener(object_store.getAll(),"success",(function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-get-all-ok","stack.apis.indexed-db/idb-get-all-ok",-1409237273);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),58,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,58,14,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),conn_id,new cljs.core.Keyword(null,"store","store",1512230022),store_id], null),null,null,null,null,null,null,null,null,null,null));
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

var records = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(stack.utils.events.extract_result(e),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(as,new cljs.core.Keyword(null,"map","map",1371690461)))?stack.apis.indexed_db.records_EQ__GT_sorted_map(records,key_path):records));
})));
}));
}));
}));

return result;
}));

(stack.apis.indexed_db.get_all_PLUS_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(stack.apis.indexed_db.get_all_PLUS_.cljs$lang$applyTo = (function (seq92685){
var G__92686 = cljs.core.first(seq92685);
var seq92685__$1 = cljs.core.next(seq92685);
var G__92687 = cljs.core.first(seq92685__$1);
var seq92685__$2 = cljs.core.next(seq92685__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__92686,G__92687,seq92685__$2);
}));

stack.apis.indexed_db.define_error_callback = (function stack$apis$indexed_db$define_error_callback(label,context,result_PLUS_){
return (function (error){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = label;
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),78,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,78,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),error),null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.reject_BANG_(result_PLUS_,error);
});
});
stack.apis.indexed_db.define_success_callback = (function stack$apis$indexed_db$define_success_callback(label,context,result_PLUS_){
return (function (result){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = label;
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),84,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,84,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,context,null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result_PLUS_,result);
});
});
stack.apis.indexed_db.add_PLUS_ = (function stack$apis$indexed_db$add_PLUS_(idb_conn,store_id,data){
var conn_id = idb_conn.name;
var log_context = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),conn_id,new cljs.core.Keyword(null,"store-id","store-id",-869340477),store_id], null);
var result = promesa.core.deferred();
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","add","stack.apis.indexed-db/add",287578678);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),91,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,91,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),conn_id,new cljs.core.Keyword(null,"store","store",1512230022),store_id,new cljs.core.Keyword(null,"data","data",-232669377),data], null),null,null,null,null,null,null,null,null,null,null));
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

stack.utils.events.add_listener(stack.utils.events.add_listener(idb_conn.transaction(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_id], null),"readwrite").objectStore(store_id).add(cljs.core.clj__GT_js(data)),"error",(function (error){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-add-error","stack.apis.indexed-db/idb-add-error",-1964323695);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),40,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,96,40,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),conn_id,new cljs.core.Keyword(null,"store","store",1512230022),store_id,new cljs.core.Keyword(null,"error","error",-978969032),error], null),null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.reject_BANG_(result,error);
})),"success",(function (_result){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-add-ok","stack.apis.indexed-db/idb-add-ok",1280221931);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),101,new cljs.core.Keyword(null,"column","column",2078222095),42,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,101,42,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),conn_id,new cljs.core.Keyword(null,"store","store",1512230022),store_id], null),null,null,null,null,null,null,null,null,null,null));
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

return promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result,data);
}));

return result;
});
stack.apis.indexed_db.delete_PLUS_ = (function stack$apis$indexed_db$delete_PLUS_(idb_conn,store_id,key){
var conn_id = idb_conn.name;
var log_context = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),conn_id,new cljs.core.Keyword(null,"store-id","store-id",-869340477),store_id], null);
var result = promesa.core.deferred();
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.indexed-db";
var __id = new cljs.core.Keyword("stack.apis.indexed-db","idb-delete","stack.apis.indexed-db/idb-delete",-860362842);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.indexed-db",new cljs.core.Keyword(null,"line","line",212345235),111,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs"], null),__ns,111,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/indexed_db.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,log_context,null,null,null,null,null,null,null,null,null,null));
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

return stack.utils.events.add_listener(stack.utils.events.add_listener(idb_conn.transaction(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_id], null),"readwrite").objectStore(store_id).delete(key),"error",stack.apis.indexed_db.define_error_callback(new cljs.core.Keyword("stack.apis.indexed-db","idb-delete-error","stack.apis.indexed-db/idb-delete-error",-1630996228),log_context,result)),"success",stack.apis.indexed_db.define_success_callback(new cljs.core.Keyword("stack.apis.indexed-db","idb-delete-ok","stack.apis.indexed-db/idb-delete-ok",-1555536046),log_context,result));
});

//# sourceMappingURL=stack.apis.indexed_db.js.map
