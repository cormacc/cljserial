goog.provide('stack.pages.filestore');
stack.pages.filestore.render = (function stack$pages$filestore$render(p__64204){
var map__64205 = p__64204;
var map__64205__$1 = cljs.core.__destructure_map(map__64205);
var _state = map__64205__$1;
var filestore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64205__$1,new cljs.core.Keyword(null,"filestore","filestore",1449104233));
var user_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64205__$1,new cljs.core.Keyword(null,"user-input","user-input",-504242422));
var map__64211 = user_input;
var map__64211__$1 = cljs.core.__destructure_map(map__64211);
var create_file_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64211__$1,new cljs.core.Keyword(null,"create-file-path","create-file-path",353207413));
var create_file_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64211__$1,new cljs.core.Keyword(null,"create-file-content","create-file-content",-1313327236));
var selected_file_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64211__$1,new cljs.core.Keyword(null,"selected-file-path","selected-file-path",-1192355145));
var selected_file = ((cljs.core.empty_QMARK_(selected_file_path))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"",new cljs.core.Keyword(null,"data","data",-232669377),""], null):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(filestore),selected_file_path));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.pages.filestore";
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.pages.filestore",new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/stack/pages/filestore.cljc"], null),__ns,11,5,"file:/home/cormacc/dev/clj/cljserial/src/stack/pages/filestore.cljc",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,selected_file,null,"Rendering filestore",null,null,null,null,null,null,null,null));
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

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2","div.grid.grid-cols-2",-1453018001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.files","file-card","stack.components.files/file-card",1346467979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stack.components.files","file","stack.components.files/file",1403927077),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),create_file_path,new cljs.core.Keyword(null,"data","data",-232669377),create_file_content], null)], null),"Create file"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.files","file-card","stack.components.files/file-card",1346467979),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stack.components.files","file","stack.components.files/file",1403927077),selected_file,new cljs.core.Keyword("stack.components.files","readonly","stack.components.files/readonly",565477571),true], null),"View file"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.files","file-table.col-span-2","stack.components.files/file-table.col-span-2",-1551608672),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stack.components.files","filestore","stack.components.files/filestore",-1514856506),filestore], null),"Files (local)"], null)], null);
});

//# sourceMappingURL=stack.pages.filestore.js.map
