goog.provide('stack.examples.pages.backend');
stack.examples.pages.backend.folder_list = (function stack$examples$pages$backend$folder_list(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71231 = [clj_props__44360__auto__];
var map__71234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71231,(0),null);
var map__71234__$1 = cljs.core.__destructure_map(map__71234);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71234__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71234__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71533 = stack.examples.pages.backend.folder_list.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71533)){
var f__44290__auto___71534 = temp__5823__auto___71533;
(f__44290__auto___71534.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71534.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71534.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs("Buckets",["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Public",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$backend$folder_list_$_iter__71261(s__71262){
return (new cljs.core.LazySeq(null,(function (){
var s__71262__$1 = s__71262;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__71262__$1);
if(temp__5823__auto__){
var s__71262__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71262__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__71262__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__71264 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__71263 = (0);
while(true){
if((i__71263 < size__5479__auto__)){
var b = cljs.core._nth(c__5478__auto__,i__71263);
cljs.core.chunk_append(b__71264,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':((function (i__71263,id,public$,b,c__5478__auto__,size__5479__auto__,b__71264,s__71262__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71231,map__71234,map__71234__$1,folders,on_folder_click){
return (function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
});})(i__71263,id,public$,b,c__5478__auto__,size__5479__auto__,b__71264,s__71262__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71231,map__71234,map__71234__$1,folders,on_folder_click))
}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
})());

var G__71536 = (i__71263 + (1));
i__71263 = G__71536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71264),stack$examples$pages$backend$folder_list_$_iter__71261(cljs.core.chunk_rest(s__71262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71264),null);
}
} else {
var b = cljs.core.first(s__71262__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':((function (id,public$,b,s__71262__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71231,map__71234,map__71234__$1,folders,on_folder_click){
return (function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
});})(id,public$,b,s__71262__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71231,map__71234,map__71234__$1,folders,on_folder_click))
}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
})(),stack$examples$pages$backend$folder_list_$_iter__71261(cljs.core.rest(s__71262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(folders);
})()])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71297 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71298 = stack.examples.pages.backend.folder_list;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71298);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71297);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.backend.folder_list.uix_component_QMARK_ = true);

(stack.examples.pages.backend.folder_list.displayName = "stack.examples.pages.backend/folder-list");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71541 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71541.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71541.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.backend.folder_list,"",null,null) : sig__44299__auto___71541.call(null, stack.examples.pages.backend.folder_list,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.backend.folder_list,stack.examples.pages.backend.folder_list.displayName);

(stack.examples.pages.backend.folder_list.fast_refresh_signature = sig__44299__auto___71541);
} else {
}
} else {
}
stack.examples.pages.backend.folder_contents_panel = (function stack$examples$pages$backend$folder_contents_panel(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71320 = [clj_props__44360__auto__];
var map__71323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71320,(0),null);
var map__71323__$1 = cljs.core.__destructure_map(map__71323);
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71323__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71323__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71323__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71542 = stack.examples.pages.backend.folder_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71542)){
var f__44290__auto___71543 = temp__5823__auto___71542;
(f__44290__auto___71543.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71543.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71543.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs(["Bucket contents (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),")"].join(''),["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Created",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Modified",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$backend$folder_contents_panel_$_iter__71334(s__71335){
return (new cljs.core.LazySeq(null,(function (){
var s__71335__$1 = s__71335;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__71335__$1);
if(temp__5823__auto__){
var s__71335__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71335__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__71335__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__71337 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__71336 = (0);
while(true){
if((i__71336 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__71336);
cljs.core.chunk_append(b__71337,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (i__71336,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click){
return (function (_){
return ((function (i__71336,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.examples.pages.backend";
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
var signal__41746__auto__ = (new cljs.core.Delay(((function (i__71336,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click){
return (function (){

var signal__41737__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.examples.pages.backend",new cljs.core.Keyword(null,"line","line",212345235),49,new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/backend.cljs"], null),__ns,49,48,"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/backend.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name], null),null,"TODO: Folder selected",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__41738__auto__ = temp__5821__auto__;
return (sig_middleware__41738__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__41738__auto__.cljs$core$IFn$_invoke$arity$1(signal__41737__auto__) : sig_middleware__41738__auto__.call(null, signal__41737__auto__));
} else {
return signal__41737__auto__;
}
});})(i__71336,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__41746__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__41746__auto__) : __run_result.call(null, signal__41746__auto__));
} else {
return true;
}
} else {
return null;
}
});})(i__71336,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click))
();
});})(i__71336,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click))
:((function (i__71336,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click){
return (function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
});})(i__71336,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__71337,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})());

var G__71551 = (i__71336 + (1));
i__71336 = G__71551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71337),stack$examples$pages$backend$folder_contents_panel_$_iter__71334(cljs.core.chunk_rest(s__71335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71337),null);
}
} else {
var i = cljs.core.first(s__71335__$2);
return cljs.core.cons((function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (name,folder_QMARK_,i,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click){
return (function (_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.examples.pages.backend";
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
var signal__41746__auto__ = (new cljs.core.Delay((function (){

var signal__41737__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.examples.pages.backend",new cljs.core.Keyword(null,"line","line",212345235),49,new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/backend.cljs"], null),__ns,49,48,"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/backend.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name], null),null,"TODO: Folder selected",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__41738__auto__ = temp__5821__auto__;
return (sig_middleware__41738__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__41738__auto__.cljs$core$IFn$_invoke$arity$1(signal__41737__auto__) : sig_middleware__41738__auto__.call(null, signal__41737__auto__));
} else {
return signal__41737__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__41746__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__41746__auto__) : __run_result.call(null, signal__41746__auto__));
} else {
return true;
}
} else {
return null;
}
})();
});})(name,folder_QMARK_,i,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click))
:((function (name,folder_QMARK_,i,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click){
return (function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
});})(name,folder_QMARK_,i,s__71335__$2,temp__5823__auto__,clj_props__44360__auto__,vec__71320,map__71323,map__71323__$1,folder,items,on_item_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})(),stack$examples$pages$backend$folder_contents_panel_$_iter__71334(cljs.core.rest(s__71335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(items);
})()])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71390 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71391 = stack.examples.pages.backend.folder_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71391);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71390);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.backend.folder_contents_panel.uix_component_QMARK_ = true);

(stack.examples.pages.backend.folder_contents_panel.displayName = "stack.examples.pages.backend/folder-contents-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71559 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71559.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71559.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.backend.folder_contents_panel,"",null,null) : sig__44299__auto___71559.call(null, stack.examples.pages.backend.folder_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.backend.folder_contents_panel,stack.examples.pages.backend.folder_contents_panel.displayName);

(stack.examples.pages.backend.folder_contents_panel.fast_refresh_signature = sig__44299__auto___71559);
} else {
}
} else {
}
stack.examples.pages.backend.file_contents_panel = (function stack$examples$pages$backend$file_contents_panel(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71392 = [clj_props__44360__auto__];
var map__71395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71392,(0),null);
var map__71395__$1 = cljs.core.__destructure_map(map__71395);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71395__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71395__$1,new cljs.core.Keyword(null,"content","content",15833224));
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71563 = stack.examples.pages.backend.file_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71563)){
var f__44290__auto___71564 = temp__5823__auto___71563;
(f__44290__auto___71564.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71564.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71564.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("pre",uix.compiler.attributes.interpret_attrs((function (){var or__5002__auto__ = content;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<Select a file to view its contents>";
}
})(),["pre",null,null,false],false),[]),uix.compiler.aot._GT_el("label",uix.compiler.attributes.interpret_attrs((function (){var or__5002__auto__ = path;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<No file selected>";
}
})(),["label",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71403 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71404 = stack.examples.pages.backend.file_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71404);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71403);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.backend.file_contents_panel.uix_component_QMARK_ = true);

(stack.examples.pages.backend.file_contents_panel.displayName = "stack.examples.pages.backend/file-contents-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71565 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71565.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71565.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.backend.file_contents_panel,"",null,null) : sig__44299__auto___71565.call(null, stack.examples.pages.backend.file_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.backend.file_contents_panel,stack.examples.pages.backend.file_contents_panel.displayName);

(stack.examples.pages.backend.file_contents_panel.fast_refresh_signature = sig__44299__auto___71565);
} else {
}
} else {
}
stack.examples.pages.backend.file_explorer = (function stack$examples$pages$backend$file_explorer(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71418 = [clj_props__44360__auto__];
var map__71421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71418,(0),null);
var map__71421__$1 = cljs.core.__destructure_map(map__71421);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71421__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71421__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71421__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71421__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71421__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71568 = stack.examples.pages.backend.file_explorer.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71568)){
var f__44290__auto___71569 = temp__5823__auto___71568;
(f__44290__auto___71569.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71569.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71569.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"File explorer"], null)],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-row"}],[uix.compiler.aot._GT_el("div",[{'className':"flex-none"}],[uix.compiler.alpha.component_element(stack.examples.pages.backend.folder_list,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folders","folders",44248772),folders,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),on_folder_click], null)],[])]),uix.compiler.aot._GT_el("div",[{'className':"grow"}],[uix.compiler.alpha.component_element(stack.examples.pages.backend.folder_contents_panel,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),on_item_click], null)],[])])]),uix.compiler.alpha.component_element(stack.examples.pages.backend.file_contents_panel,uix.compiler.attributes.interpret_props(file),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71438 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71439 = stack.examples.pages.backend.file_explorer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71439);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71438);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.backend.file_explorer.uix_component_QMARK_ = true);

(stack.examples.pages.backend.file_explorer.displayName = "stack.examples.pages.backend/file-explorer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71574 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71574.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71574.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.backend.file_explorer,"",null,null) : sig__44299__auto___71574.call(null, stack.examples.pages.backend.file_explorer,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.backend.file_explorer,stack.examples.pages.backend.file_explorer.displayName);

(stack.examples.pages.backend.file_explorer.fast_refresh_signature = sig__44299__auto___71574);
} else {
}
} else {
}
stack.examples.pages.backend.test_bucket_id = "test";
stack.examples.pages.backend.layout = (function stack$examples$pages$backend$layout(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71450 = [clj_props__44360__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71450,(0),null);
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71577 = stack.examples.pages.backend.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71577)){
var f__44290__auto___71578 = temp__5823__auto___71577;
(f__44290__auto___71578.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71578.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71578.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var vec__71453 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var devices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71453,(0),null);
var set_devices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71453,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic("devices",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),set_devices_BANG_], 0));
}),uix.core.jsfy_deps([]));

return uix.compiler.alpha.component_element(stack.components.hardware.device_table,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"devices","devices",1929380599),devices], null)],[]);
})(),["div",null,"flex flex-col",false],false),[(function (){var vec__71460 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71460,(0),null);
var set_buckets_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71460,(1),null);
var vec__71463 = uix.core.use_state(stack.examples.pages.backend.test_bucket_id);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71463,(0),null);
var set_bucket_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71463,(1),null);
var vec__71466 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71466,(0),null);
var set_files_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71466,(1),null);
var vec__71469 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71469,(0),null);
var set_file_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71469,(1),null);
var show_bucket_callback = (function (bucket__$1){
return (set_bucket_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_bucket_BANG_.cljs$core$IFn$_invoke$arity$1(bucket__$1) : set_bucket_BANG_.call(null, bucket__$1));
});
var show_file_callback = (function (path){
return stack.utils.supabase.get_file(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bucket","bucket",1126218366),bucket,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"then","then",460598070),set_file_BANG_], null));
});
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.list_buckets(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),set_buckets_BANG_], null));
}),uix.core.jsfy_deps([]));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.list_files(bucket,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),set_files_BANG_], null));
}),uix.core.jsfy_deps([bucket]));

return uix.compiler.alpha.component_element(stack.examples.pages.backend.file_explorer,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"folders","folders",44248772),buckets,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),show_bucket_callback,new cljs.core.Keyword(null,"folder","folder",1515881736),bucket,new cljs.core.Keyword(null,"items","items",1031954938),files,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),show_file_callback,new cljs.core.Keyword(null,"file","file",-1269645878),file], null)],[]);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71476 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71477 = stack.examples.pages.backend.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71477);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71476);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.backend.layout.uix_component_QMARK_ = true);

(stack.examples.pages.backend.layout.displayName = "stack.examples.pages.backend/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71585 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71585.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71585.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.backend.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null) : sig__44299__auto___71585.call(null, stack.examples.pages.backend.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.backend.layout,stack.examples.pages.backend.layout.displayName);

(stack.examples.pages.backend.layout.fast_refresh_signature = sig__44299__auto___71585);
} else {
}
} else {
}
stack.examples.pages.backend.layout_with_auth = (function stack$examples$pages$backend$layout_with_auth(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71480 = [clj_props__44360__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71480,(0),null);
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71587 = stack.examples.pages.backend.layout_with_auth.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71587)){
var f__44290__auto___71588 = temp__5823__auto___71587;
(f__44290__auto___71588.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71588.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71588.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.services.auth.wrap_layout,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),stack.examples.pages.backend.layout], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71488 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71489 = stack.examples.pages.backend.layout_with_auth;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71489);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71488);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.backend.layout_with_auth.uix_component_QMARK_ = true);

(stack.examples.pages.backend.layout_with_auth.displayName = "stack.examples.pages.backend/layout-with-auth");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71589 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71589.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71589.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.backend.layout_with_auth,"",null,null) : sig__44299__auto___71589.call(null, stack.examples.pages.backend.layout_with_auth,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.backend.layout_with_auth,stack.examples.pages.backend.layout_with_auth.displayName);

(stack.examples.pages.backend.layout_with_auth.fast_refresh_signature = sig__44299__auto___71589);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.backend.js.map
