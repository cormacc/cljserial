goog.provide('stack.apis.opfs');
/**
 * Get the root OPFS folder for this app.
 */
stack.apis.opfs.get_root_PLUS_ = (function stack$apis$opfs$get_root_PLUS_(){
return navigator.storage.getDirectory();
});
/**
 * Get a subdirectory relative to the provided root
 */
stack.apis.opfs.get_subdirectory_PLUS_ = (function stack$apis$opfs$get_subdirectory_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63364 = arguments.length;
var i__5727__auto___63365 = (0);
while(true){
if((i__5727__auto___63365 < len__5726__auto___63364)){
args__5732__auto__.push((arguments[i__5727__auto___63365]));

var G__63366 = (i__5727__auto___63365 + (1));
i__5727__auto___63365 = G__63366;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return stack.apis.opfs.get_subdirectory_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(stack.apis.opfs.get_subdirectory_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (root_PLUS_,dir_name,p__63192){
var map__63193 = p__63192;
var map__63193__$1 = cljs.core.__destructure_map(map__63193);
var create = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63193__$1,new cljs.core.Keyword(null,"create","create",-1301499256),false);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(root_PLUS_),(function (p__63071__auto__){
return p__63071__auto__.getDirectoryHandle(dir_name,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create","create",-1301499256),create], null)));
}));
}));

(stack.apis.opfs.get_subdirectory_PLUS_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(stack.apis.opfs.get_subdirectory_PLUS_.cljs$lang$applyTo = (function (seq63187){
var G__63188 = cljs.core.first(seq63187);
var seq63187__$1 = cljs.core.next(seq63187);
var G__63189 = cljs.core.first(seq63187__$1);
var seq63187__$2 = cljs.core.next(seq63187__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63188,G__63189,seq63187__$2);
}));

/**
 * Get a nested subdirectory given an absolute path.
 */
stack.apis.opfs.get_directory_PLUS_ = (function stack$apis$opfs$get_directory_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63367 = arguments.length;
var i__5727__auto___63368 = (0);
while(true){
if((i__5727__auto___63368 < len__5726__auto___63367)){
args__5732__auto__.push((arguments[i__5727__auto___63368]));

var G__63369 = (i__5727__auto___63368 + (1));
i__5727__auto___63368 = G__63369;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.apis.opfs.get_directory_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.apis.opfs.get_directory_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (dir_vector,p__63203){
var map__63204 = p__63203;
var map__63204__$1 = cljs.core.__destructure_map(map__63204);
var create = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63204__$1,new cljs.core.Keyword(null,"create","create",-1301499256),false);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__63195_SHARP_,p2__63196_SHARP_){
return stack.apis.opfs.get_subdirectory_PLUS_.cljs$core$IFn$_invoke$arity$variadic(p1__63195_SHARP_,p2__63196_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"create","create",-1301499256),create], 0));
}),stack.apis.opfs.get_root_PLUS_(),dir_vector);
}));

(stack.apis.opfs.get_directory_PLUS_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.apis.opfs.get_directory_PLUS_.cljs$lang$applyTo = (function (seq63197){
var G__63198 = cljs.core.first(seq63197);
var seq63197__$1 = cljs.core.next(seq63197);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63198,seq63197__$1);
}));

stack.apis.opfs.create_directory_PLUS_ = (function stack$apis$opfs$create_directory_PLUS_(dir_path){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.opfs.get_directory_PLUS_.cljs$core$IFn$_invoke$arity$variadic(stack.schema.filestore.get_path_vector(dir_path),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"create","create",-1301499256),true], 0)),(function (dir_handle){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-create-directory-ok","stack.apis.opfs/opfs-create-directory-ok",2055646091);
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

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,37,17,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"directory","directory",-58912409),dir_path], null),null,null,null,null,null,null,null,null,null,null));
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
})),(function (p1__63205_SHARP_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-create-directory-error","stack.apis.opfs/opfs-create-directory-error",-1044591068);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,39,17,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"directory","directory",-58912409),dir_path,new cljs.core.Keyword(null,"error","error",-978969032),p1__63205_SHARP_], null),null,null,null,null,null,null,null,null,null,null));
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
}));
});
/**
 * Delete a file or directory from OPFS.
 */
stack.apis.opfs.remove_entry_PLUS_ = (function stack$apis$opfs$remove_entry_PLUS_(entry_name){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(stack.apis.opfs.get_root_PLUS_()),(function (p__63071__auto__){
return p__63071__auto__.removeEntry(entry_name);
})),(function (){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-delete-ok","stack.apis.opfs/opfs-delete-ok",-1737997426);
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

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),47,new cljs.core.Keyword(null,"column","column",2078222095),13,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,47,13,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,entry_name,null,null,null,null,null,null,null,null,null,null));
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
})),(function (p1__63216_SHARP_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-delete-error","stack.apis.opfs/opfs-delete-error",1761546584);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,48,14,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry-name","entry-name",1946556995),entry_name,new cljs.core.Keyword(null,"error","error",-978969032),p1__63216_SHARP_], null),null,null,null,null,null,null,null,null,null,null));
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
}));
});
stack.apis.opfs.get_entries_PLUS_ = (function stack$apis$opfs$get_entries_PLUS_(){
var result = promesa.core.deferred();
promesa.protocols._mcat(promesa.protocols._promise(null),(function (___63008__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.opfs.get_root_PLUS_()),(function (folder){
return promesa.protocols._mcat(promesa.protocols._promise(folder.name),(function (folder_name){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(folder.entries()),(function (p__63071__auto__){
return stack.apis.async_iterator.get_iterator(p__63071__auto__);
}))),(function (entry_iter){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.async_iterator.to_chan(entry_iter)),(function (iter_chan){
return promesa.protocols._promise((function (){var c__33483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33484__auto__ = (function (){var switch__33346__auto__ = (function (state_63282){
var state_val_63283 = (state_63282[(1)]);
if((state_val_63283 === (1))){
var inst_63232 = cljs.core.PersistentHashMap.EMPTY;
var inst_63233 = inst_63232;
var state_63282__$1 = (function (){var statearr_63289 = state_63282;
(statearr_63289[(7)] = inst_63233);

return statearr_63289;
})();
var statearr_63290_63377 = state_63282__$1;
(statearr_63290_63377[(2)] = null);

(statearr_63290_63377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63283 === (2))){
var state_63282__$1 = state_63282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63282__$1,(4),iter_chan);
} else {
if((state_val_63283 === (3))){
var inst_63276 = (state_63282[(2)]);
var state_63282__$1 = state_63282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63282__$1,inst_63276);
} else {
if((state_val_63283 === (4))){
var inst_63236 = (state_63282[(8)]);
var inst_63236__$1 = (state_63282[(2)]);
var inst_63237 = (inst_63236__$1 == null);
var state_63282__$1 = (function (){var statearr_63295 = state_63282;
(statearr_63295[(8)] = inst_63236__$1);

return statearr_63295;
})();
if(cljs.core.truth_(inst_63237)){
var statearr_63296_63378 = state_63282__$1;
(statearr_63296_63378[(1)] = (5));

} else {
var statearr_63297_63379 = state_63282__$1;
(statearr_63297_63379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63283 === (5))){
var inst_63236 = (state_63282[(8)]);
var inst_63233 = (state_63282[(7)]);
var inst_63241 = (function (){var entry_map = inst_63233;
var entry = inst_63236;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-get-entries-ok","stack.apis.opfs/opfs-get-entries-ok",1686845627);
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

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),15,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,62,15,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,entry_map,null,null,null,null,null,null,null,null,null,null));
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
});
})();
var inst_63242 = inst_63241();
var inst_63243 = promesa.core.resolve_BANG_.cljs$core$IFn$_invoke$arity$2(result,inst_63233);
var state_63282__$1 = (function (){var statearr_63304 = state_63282;
(statearr_63304[(9)] = inst_63242);

return statearr_63304;
})();
var statearr_63305_63384 = state_63282__$1;
(statearr_63305_63384[(2)] = inst_63243);

(statearr_63305_63384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63283 === (6))){
var inst_63236 = (state_63282[(8)]);
var inst_63233 = (state_63282[(7)]);
var inst_63248 = (function (){var entry_map = inst_63233;
var entry = inst_63236;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-entry","stack.apis.opfs/opfs-entry",1361167761);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),65,new cljs.core.Keyword(null,"column","column",2078222095),15,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,65,15,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,entry,null,null,null,null,null,null,null,null,null,null));
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
});
})();
var inst_63249 = inst_63248();
var inst_63254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63236,(0),null);
var inst_63255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63236,(1),null);
var inst_63256 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder_name),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63254)].join('');
var inst_63261 = [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"bytes","bytes",1175866680)];
var inst_63263 = inst_63255.kind;
var inst_63264 = cljs.core.name(inst_63263);
var inst_63265 = [inst_63256,inst_63254,inst_63264,(0),(0),(0),""];
var inst_63266 = cljs.core.PersistentHashMap.fromArrays(inst_63261,inst_63265);
var inst_63268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63269 = [inst_63256];
var inst_63270 = (new cljs.core.PersistentVector(null,1,(5),inst_63268,inst_63269,null));
var inst_63271 = cljs.core.assoc_in(inst_63233,inst_63270,inst_63266);
var inst_63233__$1 = inst_63271;
var state_63282__$1 = (function (){var statearr_63313 = state_63282;
(statearr_63313[(10)] = inst_63249);

(statearr_63313[(7)] = inst_63233__$1);

return statearr_63313;
})();
var statearr_63315_63388 = state_63282__$1;
(statearr_63315_63388[(2)] = null);

(statearr_63315_63388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63283 === (7))){
var inst_63274 = (state_63282[(2)]);
var state_63282__$1 = state_63282;
var statearr_63319_63389 = state_63282__$1;
(statearr_63319_63389[(2)] = inst_63274);

(statearr_63319_63389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto__ = null;
var stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto____0 = (function (){
var statearr_63320 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63320[(0)] = stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto__);

(statearr_63320[(1)] = (1));

return statearr_63320;
});
var stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto____1 = (function (state_63282){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_63282);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e63321){var ex__33350__auto__ = e63321;
var statearr_63322_63391 = state_63282;
(statearr_63322_63391[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_63282[(4)]))){
var statearr_63323_63392 = state_63282;
(statearr_63323_63392[(1)] = cljs.core.first((state_63282[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63393 = state_63282;
state_63282 = G__63393;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto__ = function(state_63282){
switch(arguments.length){
case 0:
return stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto____0.call(this);
case 1:
return stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto____1.call(this,state_63282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto____0;
stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto____1;
return stack$apis$opfs$get_entries_PLUS__$_state_machine__33347__auto__;
})()
})();
var state__33485__auto__ = (function (){var statearr_63325 = f__33484__auto__();
(statearr_63325[(6)] = c__33483__auto__);

return statearr_63325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33485__auto__);
}));

return c__33483__auto__;
})());
}));
}));
}));
}));
}));

return result;
});
stack.apis.opfs.get_file_handle_PLUS_ = (function stack$apis$opfs$get_file_handle_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63394 = arguments.length;
var i__5727__auto___63395 = (0);
while(true){
if((i__5727__auto___63395 < len__5726__auto___63394)){
args__5732__auto__.push((arguments[i__5727__auto___63395]));

var G__63396 = (i__5727__auto___63395 + (1));
i__5727__auto___63395 = G__63396;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.apis.opfs.get_file_handle_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.apis.opfs.get_file_handle_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (filepath,p__63336){
var map__63337 = p__63336;
var map__63337__$1 = cljs.core.__destructure_map(map__63337);
var create = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63337__$1,new cljs.core.Keyword(null,"create","create",-1301499256),false);
var fname = stack.schema.filestore.get_filename(filepath);
var fdirs = stack.schema.filestore.get_dir_vector(filepath);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.opfs.get_directory_PLUS_.cljs$core$IFn$_invoke$arity$variadic(fdirs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"create","create",-1301499256),create], 0)),(function (p1__63328_SHARP_){
return p1__63328_SHARP_.getFileHandle(fname,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"create","create",-1301499256),create], null)));
}));
}));

(stack.apis.opfs.get_file_handle_PLUS_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.apis.opfs.get_file_handle_PLUS_.cljs$lang$applyTo = (function (seq63329){
var G__63330 = cljs.core.first(seq63329);
var seq63329__$1 = cljs.core.next(seq63329);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63330,seq63329__$1);
}));

/**
 * Get a File object from the OPFS.
 *   See the following API docs on the File and underlying Blob interfaces:
 *   - File :: https://developer.mozilla.org/en-US/docs/Web/API/File
 *   - Blob :: https://developer.mozilla.org/en-US/docs/Web/API/Blob
 */
stack.apis.opfs.get_file_PLUS_ = (function stack$apis$opfs$get_file_PLUS_(filepath){
return promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(stack.apis.opfs.get_file_handle_PLUS_(filepath)),(function (p__63071__auto__){
return p__63071__auto__.getFile();
}));
});
stack.apis.opfs.get_file_info = (function stack$apis$opfs$get_file_info(file){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"modified","modified",-2134587826),file.lastModified,new cljs.core.Keyword(null,"mime-type","mime-type",1058646439),file.type,new cljs.core.Keyword(null,"size","size",1098693007),file.size], null);
});
stack.apis.opfs.read_PLUS_ = (function stack$apis$opfs$read_PLUS_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63398 = arguments.length;
var i__5727__auto___63399 = (0);
while(true){
if((i__5727__auto___63399 < len__5726__auto___63398)){
args__5732__auto__.push((arguments[i__5727__auto___63399]));

var G__63400 = (i__5727__auto___63399 + (1));
i__5727__auto___63399 = G__63400;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.apis.opfs.read_PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.apis.opfs.read_PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (filepath,p__63352){
var map__63353 = p__63352;
var map__63353__$1 = cljs.core.__destructure_map(map__63353);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63353__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"text","text",-1790561697));
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___63008__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.opfs.get_file_PLUS_(filepath)),(function (file){
return promesa.protocols._mcat(promesa.protocols._promise(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),as))?file.text():file.arrayBuffer())),(function (content){
return promesa.protocols._promise((function (){var finfo = stack.apis.opfs.get_file_info(file);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-read-ok","stack.apis.opfs/opfs-read-ok",508385894);
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

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),103,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,103,7,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,finfo,null,null,null,null,null,null,null,null,null,null));
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

return cljs.core.assoc_in(cljs.core.assoc_in(finfo,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),filepath),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),content);
})());
}));
}));
}));
}));

(stack.apis.opfs.read_PLUS_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.apis.opfs.read_PLUS_.cljs$lang$applyTo = (function (seq63348){
var G__63349 = cljs.core.first(seq63348);
var seq63348__$1 = cljs.core.next(seq63348);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63349,seq63348__$1);
}));

stack.apis.opfs.write_PLUS_ = (function stack$apis$opfs$write_PLUS_(filepath,content){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___63008__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(stack.apis.opfs.get_file_handle_PLUS_.cljs$core$IFn$_invoke$arity$variadic(filepath,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"create","create",-1301499256),true], 0))),(function (p__63071__auto__){
return p__63071__auto__.createWritable();
}))),(function (writeable){
return promesa.protocols._mcat(promesa.protocols._promise(writeable.write(content)),(function (_written){
return promesa.protocols._mcat(promesa.protocols._promise(writeable.close()),(function (_closed){
return promesa.protocols._mcat(promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-write-ok","stack.apis.opfs/opfs-write-ok",-2084971720);
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

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),115,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,115,6,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,filepath,null,null,null,null,null,null,null,null,null,null));
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
})()),(function (___62976__auto__){
return promesa.protocols._promise(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),filepath,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.count(content)], null));
}));
}));
}));
}));
})),(function (p1__63356_SHARP_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-write-error","stack.apis.opfs/opfs-write-error",-9907498);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),117,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,117,14,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filepath","filepath",1097488485),filepath,new cljs.core.Keyword(null,"error","error",-978969032),p1__63356_SHARP_], null),null,null,null,null,null,null,null,null,null,null));
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
}));
});
stack.apis.opfs.delete_PLUS_ = (function stack$apis$opfs$delete_PLUS_(filepath){
var fdirs = stack.schema.filestore.get_dir_vector(filepath);
var fname = stack.schema.filestore.get_filename(filepath);
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___63008__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.chain.cljs$core$IFn$_invoke$arity$2(promesa.core.promise.cljs$core$IFn$_invoke$arity$1(stack.apis.opfs.get_directory_PLUS_(fdirs)),(function (p__63071__auto__){
return p__63071__auto__.removeEntry(fname);
}))),(function (_done){
return promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.opfs";
var __id = new cljs.core.Keyword("stack.apis.opfs","opfs-delete-ok","stack.apis.opfs/opfs-delete-ok",-1737997426);
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

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.opfs",new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs"], null),__ns,125,11,"file:/home/cormacc/dev/clj/cljserial/src/stack/apis/opfs.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,filepath,null,null,null,null,null,null,null,null,null,null));
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
})());
}));
}));
});

//# sourceMappingURL=stack.apis.opfs.js.map
