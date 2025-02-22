goog.provide('stack.utils.filestore');
stack.utils.filestore.index_schema_version = (1);
stack.utils.filestore.index_store_id = "filestore-index";
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.filestore !== 'undefined') && (typeof stack.utils.filestore.index_connection !== 'undefined')){
} else {
stack.utils.filestore.index_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.filestore !== 'undefined') && (typeof stack.utils.filestore.index_cache !== 'undefined')){
} else {
stack.utils.filestore.index_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
}
stack.utils.filestore.index_schema_upgrade_handler = (function stack$utils$filestore$index_schema_upgrade_handler(idb_conn){
return idb_conn.createObjectStore(stack.utils.filestore.index_store_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyPath","keyPath",-1845944323),"path"], null)));
});
stack.utils.filestore.get_usage_estimates_PLUS_ = (function stack$utils$filestore$get_usage_estimates_PLUS_(){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(navigator.storage.estimate(),(function (raw_result){
var map__63372 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(raw_result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__63372__$1 = cljs.core.__destructure_map(map__63372);
var result = map__63372__$1;
var quota = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63372__$1,new cljs.core.Keyword(null,"quota","quota",752709486));
var usage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63372__$1,new cljs.core.Keyword(null,"usage","usage",-1583752910));
var usageDetails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63372__$1,new cljs.core.Keyword(null,"usageDetails","usageDetails",-408438447));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.filestore";
var __id = new cljs.core.Keyword("stack.utils.filestore","filestore-usage","stack.utils.filestore/filestore-usage",-1227022423);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.filestore",new cljs.core.Keyword(null,"line","line",212345235),55,new cljs.core.Keyword(null,"column","column",2078222095),19,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs"], null),__ns,55,19,"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,result,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"capacity","capacity",72689734),quota,new cljs.core.Keyword(null,"used","used",-1414786177),usage,new cljs.core.Keyword(null,"details","details",1956795411),usageDetails], null);
}));
});
stack.utils.filestore.reload_index_PLUS_ = (function stack$utils$filestore$reload_index_PLUS_(){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.indexed_db.open_PLUS_.cljs$core$IFn$_invoke$arity$variadic(stack.utils.filestore.index_store_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),stack.utils.filestore.index_schema_version,new cljs.core.Keyword(null,"on-upgrade","on-upgrade",1146037332),stack.utils.filestore.index_schema_upgrade_handler], 0)),(function (p1__63373_SHARP_){
return cljs.core.reset_BANG_(stack.utils.filestore.index_connection,p1__63373_SHARP_);
})),(function (p1__63374_SHARP_){
return stack.apis.indexed_db.get_all_PLUS_(p1__63374_SHARP_,stack.utils.filestore.index_store_id);
})),(function (p1__63375_SHARP_){
return cljs.core.reset_BANG_(stack.utils.filestore.index_cache,p1__63375_SHARP_);
}));
});
stack.utils.filestore.empty_filestore = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.sorted_map(),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity","capacity",72689734),(0),new cljs.core.Keyword(null,"used","used",-1414786177),(0)], null)], null);
stack.utils.filestore.init_PLUS_ = (function stack$utils$filestore$init_PLUS_(){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___63014__auto__){
return promesa.core.bind.cljs$core$IFn$_invoke$arity$2(promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack.utils.filestore.reload_index_PLUS_(),stack.utils.filestore.get_usage_estimates_PLUS_()], null)),(function (p__63380){
var vec__63381 = p__63380;
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63381,(0),null);
var usage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63381,(1),null);
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entries","entries",-86943161),entries,new cljs.core.Keyword(null,"info","info",-317069002),usage], null));
}));
}));
});
stack.utils.filestore.normalise_path = (function stack$utils$filestore$normalise_path(entry_path){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(entry_path))){
return entry_path;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_path)].join('');
}
});
stack.utils.filestore.create_index_entry_PLUS_ = (function stack$utils$filestore$create_index_entry_PLUS_(p__63386){
var map__63387 = p__63386;
var map__63387__$1 = cljs.core.__destructure_map(map__63387);
var opts = map__63387__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword(null,"size","size",1098693007));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.filestore";
var __id = new cljs.core.Keyword("stack.utils.filestore","create-index-entry","stack.utils.filestore/create-index-entry",597404248);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.filestore",new cljs.core.Keyword(null,"line","line",212345235),85,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs"], null),__ns,85,3,"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,opts,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var timestamp = Date.now();
var path_norm = stack.utils.filestore.normalise_path(path);
var entry = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path_norm,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"created","created",-704993748),timestamp,new cljs.core.Keyword(null,"modified","modified",-2134587826),timestamp,new cljs.core.Keyword(null,"synced","synced",-1518561120),(0),new cljs.core.Keyword(null,"local","local",-1497766724),true], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stack.utils.filestore.index_cache,cljs.core.assoc,path_norm,entry);

return stack.apis.indexed_db.add_PLUS_(cljs.core.deref(stack.utils.filestore.index_connection),stack.utils.filestore.index_store_id,entry);
});
stack.utils.filestore.create_directory_PLUS_ = (function stack$utils$filestore$create_directory_PLUS_(path){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.opfs.create_directory_PLUS_(path),(function (dir_handle){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.filestore";
var __id = new cljs.core.Keyword("stack.utils.filestore","filestore-create-directory-ok","stack.utils.filestore/filestore-create-directory-ok",-1397787640);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.filestore",new cljs.core.Keyword(null,"line","line",212345235),110,new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs"], null),__ns,110,17,"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,path,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return dir_handle;
}));
});
stack.utils.filestore.write__PLUS_ = (function stack$utils$filestore$write__PLUS_(filepath,content){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.opfs.write_PLUS_(filepath,content),(function (p1__63404_SHARP_){
return stack.utils.filestore.create_index_entry_PLUS_(p1__63404_SHARP_);
}));
});
stack.utils.filestore.write_PLUS_ = (function stack$utils$filestore$write_PLUS_(filepath,content){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.filestore.write__PLUS_(filepath,content),(function (entry){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.filestore";
var __id = new cljs.core.Keyword("stack.utils.filestore","filestore-write-ok","stack.utils.filestore/filestore-write-ok",1077367270);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.filestore",new cljs.core.Keyword(null,"line","line",212345235),129,new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs"], null),__ns,129,17,"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,entry,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return entry;
}));
});
stack.utils.filestore.read_PLUS_ = (function stack$utils$filestore$read_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63435 = arguments.length;
var i__5727__auto___63436 = (0);
while(true){
if((i__5727__auto___63436 < len__5726__auto___63435)){
args__5732__auto__.push((arguments[i__5727__auto___63436]));

var G__63437 = (i__5727__auto___63436 + (1));
i__5727__auto___63436 = G__63437;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.utils.filestore.read_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.utils.filestore.read_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (filepath,p__63412){
var map__63413 = p__63412;
var map__63413__$1 = cljs.core.__destructure_map(map__63413);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63413__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"text","text",-1790561697));
var path_norm = stack.utils.filestore.normalise_path(filepath);
var index_entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stack.utils.filestore.index_cache),path_norm);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.opfs.read_PLUS_.cljs$core$IFn$_invoke$arity$variadic(path_norm,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"as","as",1148689641),as], 0)),(function (file_data){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.filestore";
var __id = new cljs.core.Keyword("stack.utils.filestore","filestore-read-ok","stack.utils.filestore/filestore-read-ok",700016028);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.filestore",new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"column","column",2078222095),19,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs"], null),__ns,138,19,"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,file_data,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return cljs.core.assoc_in(index_entry,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file_data));
}));
}));

(stack.utils.filestore.read_PLUS_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.utils.filestore.read_PLUS_.cljs$lang$applyTo = (function (seq63409){
var G__63410 = cljs.core.first(seq63409);
var seq63409__$1 = cljs.core.next(seq63409);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63410,seq63409__$1);
}));

stack.utils.filestore.delete_PLUS_ = (function stack$utils$filestore$delete_PLUS_(filepath){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___63008__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.utils.filestore.normalise_path(filepath)),(function (path_norm){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.opfs.delete_PLUS_(path_norm)),(function (_opfs_deleted){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.indexed_db.delete_PLUS_(cljs.core.deref(stack.utils.filestore.index_connection),stack.utils.filestore.index_store_id,path_norm)),(function (_idb_deleted){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stack.utils.filestore.index_cache,cljs.core.dissoc,path_norm)),(function (___62976__auto__){
return promesa.protocols._mcat(promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.filestore";
var __id = new cljs.core.Keyword("stack.utils.filestore","filestore-delete-ok","stack.utils.filestore/filestore-delete-ok",1290923396);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.filestore",new cljs.core.Keyword(null,"line","line",212345235),147,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs"], null),__ns,147,5,"file:/home/cormacc/dev/clj/cljserial/src/stack/utils/filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,path_norm,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})()),(function (___62976__auto____$1){
return promesa.protocols._promise(filepath);
}));
}));
}));
}));
}));
}));
});

//# sourceMappingURL=stack.utils.filestore.js.map
