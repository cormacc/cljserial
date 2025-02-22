goog.provide('stack.examples.pages.cloud_filestore');
stack.examples.pages.cloud_filestore.folder_list = (function stack$examples$pages$cloud_filestore$folder_list(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95610 = [clj_props__45318__auto__];
var map__95613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95610,(0),null);
var map__95613__$1 = cljs.core.__destructure_map(map__95613);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95613__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95613__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95876 = stack.examples.pages.cloud_filestore.folder_list.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95876)){
var f__45248__auto___95877 = temp__5823__auto___95876;
(f__45248__auto___95877.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95877.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95877.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs("Buckets",["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Public",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$cloud_filestore$folder_list_$_iter__95619(s__95620){
return (new cljs.core.LazySeq(null,(function (){
var s__95620__$1 = s__95620;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__95620__$1);
if(temp__5823__auto__){
var s__95620__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95620__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95620__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95622 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95621 = (0);
while(true){
if((i__95621 < size__5479__auto__)){
var b = cljs.core._nth(c__5478__auto__,i__95621);
cljs.core.chunk_append(b__95622,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':((function (i__95621,id,public$,b,c__5478__auto__,size__5479__auto__,b__95622,s__95620__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95610,map__95613,map__95613__$1,folders,on_folder_click){
return (function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
});})(i__95621,id,public$,b,c__5478__auto__,size__5479__auto__,b__95622,s__95620__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95610,map__95613,map__95613__$1,folders,on_folder_click))
}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
})());

var G__95878 = (i__95621 + (1));
i__95621 = G__95878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95622),stack$examples$pages$cloud_filestore$folder_list_$_iter__95619(cljs.core.chunk_rest(s__95620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95622),null);
}
} else {
var b = cljs.core.first(s__95620__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':((function (id,public$,b,s__95620__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95610,map__95613,map__95613__$1,folders,on_folder_click){
return (function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
});})(id,public$,b,s__95620__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95610,map__95613,map__95613__$1,folders,on_folder_click))
}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
})(),stack$examples$pages$cloud_filestore$folder_list_$_iter__95619(cljs.core.rest(s__95620__$2)));
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
var _STAR_current_component_STAR__orig_val__95645 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95646 = stack.examples.pages.cloud_filestore.folder_list;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95646);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95645);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_filestore.folder_list.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_filestore.folder_list.displayName = "stack.examples.pages.cloud-filestore/folder-list");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95883 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95883.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95883.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_filestore.folder_list,"",null,null) : sig__45257__auto___95883.call(null, stack.examples.pages.cloud_filestore.folder_list,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_filestore.folder_list,stack.examples.pages.cloud_filestore.folder_list.displayName);

(stack.examples.pages.cloud_filestore.folder_list.fast_refresh_signature = sig__45257__auto___95883);
} else {
}
} else {
}
stack.examples.pages.cloud_filestore.folder_contents_panel = (function stack$examples$pages$cloud_filestore$folder_contents_panel(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95682 = [clj_props__45318__auto__];
var map__95685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95682,(0),null);
var map__95685__$1 = cljs.core.__destructure_map(map__95685);
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95685__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95685__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95685__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95884 = stack.examples.pages.cloud_filestore.folder_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95884)){
var f__45248__auto___95885 = temp__5823__auto___95884;
(f__45248__auto___95885.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95885.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95885.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs(["Bucket contents (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),")"].join(''),["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Created",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Modified",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$cloud_filestore$folder_contents_panel_$_iter__95714(s__95715){
return (new cljs.core.LazySeq(null,(function (){
var s__95715__$1 = s__95715;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__95715__$1);
if(temp__5823__auto__){
var s__95715__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95715__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95715__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95717 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95716 = (0);
while(true){
if((i__95716 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__95716);
cljs.core.chunk_append(b__95717,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (i__95716,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click){
return (function (_){
return ((function (i__95716,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.examples.pages.cloud-filestore";
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
var signal__42289__auto__ = (new cljs.core.Delay(((function (i__95716,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click){
return (function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.examples.pages.cloud-filestore",new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/cloud_filestore.cljs"], null),__ns,48,48,"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/cloud_filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name], null),null,"TODO: Folder selected",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
});})(i__95716,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
});})(i__95716,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click))
();
});})(i__95716,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click))
:((function (i__95716,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click){
return (function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
});})(i__95716,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__95717,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})());

var G__95886 = (i__95716 + (1));
i__95716 = G__95886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95717),stack$examples$pages$cloud_filestore$folder_contents_panel_$_iter__95714(cljs.core.chunk_rest(s__95715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95717),null);
}
} else {
var i = cljs.core.first(s__95715__$2);
return cljs.core.cons((function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (name,folder_QMARK_,i,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click){
return (function (_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.examples.pages.cloud-filestore";
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.examples.pages.cloud-filestore",new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/cloud_filestore.cljs"], null),__ns,48,48,"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/pages/cloud_filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name], null),null,"TODO: Folder selected",null,null,null,null,null,null,null,null));
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
});})(name,folder_QMARK_,i,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click))
:((function (name,folder_QMARK_,i,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click){
return (function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
});})(name,folder_QMARK_,i,s__95715__$2,temp__5823__auto__,clj_props__45318__auto__,vec__95682,map__95685,map__95685__$1,folder,items,on_item_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})(),stack$examples$pages$cloud_filestore$folder_contents_panel_$_iter__95714(cljs.core.rest(s__95715__$2)));
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
var _STAR_current_component_STAR__orig_val__95768 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95769 = stack.examples.pages.cloud_filestore.folder_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95769);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95768);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_filestore.folder_contents_panel.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_filestore.folder_contents_panel.displayName = "stack.examples.pages.cloud-filestore/folder-contents-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95889 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95889.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95889.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_filestore.folder_contents_panel,"",null,null) : sig__45257__auto___95889.call(null, stack.examples.pages.cloud_filestore.folder_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_filestore.folder_contents_panel,stack.examples.pages.cloud_filestore.folder_contents_panel.displayName);

(stack.examples.pages.cloud_filestore.folder_contents_panel.fast_refresh_signature = sig__45257__auto___95889);
} else {
}
} else {
}
stack.examples.pages.cloud_filestore.file_contents_panel = (function stack$examples$pages$cloud_filestore$file_contents_panel(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95776 = [clj_props__45318__auto__];
var map__95779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95776,(0),null);
var map__95779__$1 = cljs.core.__destructure_map(map__95779);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95779__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95779__$1,new cljs.core.Keyword(null,"content","content",15833224));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95890 = stack.examples.pages.cloud_filestore.file_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95890)){
var f__45248__auto___95891 = temp__5823__auto___95890;
(f__45248__auto___95891.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95891.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95891.call(null, ));
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
var _STAR_current_component_STAR__orig_val__95788 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95789 = stack.examples.pages.cloud_filestore.file_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95789);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95788);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_filestore.file_contents_panel.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_filestore.file_contents_panel.displayName = "stack.examples.pages.cloud-filestore/file-contents-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95892 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95892.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95892.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_filestore.file_contents_panel,"",null,null) : sig__45257__auto___95892.call(null, stack.examples.pages.cloud_filestore.file_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_filestore.file_contents_panel,stack.examples.pages.cloud_filestore.file_contents_panel.displayName);

(stack.examples.pages.cloud_filestore.file_contents_panel.fast_refresh_signature = sig__45257__auto___95892);
} else {
}
} else {
}
stack.examples.pages.cloud_filestore.file_explorer = (function stack$examples$pages$cloud_filestore$file_explorer(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95799 = [clj_props__45318__auto__];
var map__95802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95799,(0),null);
var map__95802__$1 = cljs.core.__destructure_map(map__95802);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95802__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95802__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95802__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95802__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95802__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95894 = stack.examples.pages.cloud_filestore.file_explorer.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95894)){
var f__45248__auto___95895 = temp__5823__auto___95894;
(f__45248__auto___95895.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95895.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95895.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"File explorer"], null)],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-row"}],[uix.compiler.aot._GT_el("div",[{'className':"flex-none"}],[uix.compiler.alpha.component_element(stack.examples.pages.cloud_filestore.folder_list,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folders","folders",44248772),folders,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),on_folder_click], null)],[])]),uix.compiler.aot._GT_el("div",[{'className':"grow"}],[uix.compiler.alpha.component_element(stack.examples.pages.cloud_filestore.folder_contents_panel,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),on_item_click], null)],[])])]),uix.compiler.alpha.component_element(stack.examples.pages.cloud_filestore.file_contents_panel,uix.compiler.attributes.interpret_props(file),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95819 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95820 = stack.examples.pages.cloud_filestore.file_explorer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95820);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95819);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_filestore.file_explorer.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_filestore.file_explorer.displayName = "stack.examples.pages.cloud-filestore/file-explorer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95896 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95896.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95896.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_filestore.file_explorer,"",null,null) : sig__45257__auto___95896.call(null, stack.examples.pages.cloud_filestore.file_explorer,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_filestore.file_explorer,stack.examples.pages.cloud_filestore.file_explorer.displayName);

(stack.examples.pages.cloud_filestore.file_explorer.fast_refresh_signature = sig__45257__auto___95896);
} else {
}
} else {
}
stack.examples.pages.cloud_filestore.test_bucket_id = "test";
stack.examples.pages.cloud_filestore.layout = (function stack$examples$pages$cloud_filestore$layout(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95833 = [clj_props__45318__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95833,(0),null);
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95897 = stack.examples.pages.cloud_filestore.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95897)){
var f__45248__auto___95898 = temp__5823__auto___95897;
(f__45248__auto___95898.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95898.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95898.call(null, ));
} else {
}
} else {
}

var vec__95840 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95840,(0),null);
var set_buckets_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95840,(1),null);
var vec__95843 = uix.core.use_state(stack.examples.pages.cloud_filestore.test_bucket_id);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95843,(0),null);
var set_bucket_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95843,(1),null);
var vec__95846 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95846,(0),null);
var set_files_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95846,(1),null);
var vec__95849 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95849,(0),null);
var set_file_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95849,(1),null);
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

return uix.compiler.alpha.component_element(stack.examples.pages.cloud_filestore.file_explorer,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"folders","folders",44248772),buckets,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),show_bucket_callback,new cljs.core.Keyword(null,"folder","folder",1515881736),bucket,new cljs.core.Keyword(null,"items","items",1031954938),files,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),show_file_callback,new cljs.core.Keyword(null,"file","file",-1269645878),file], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95857 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95858 = stack.examples.pages.cloud_filestore.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95858);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95857);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_filestore.layout.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_filestore.layout.displayName = "stack.examples.pages.cloud-filestore/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95901 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95901.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95901.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_filestore.layout,"(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null) : sig__45257__auto___95901.call(null, stack.examples.pages.cloud_filestore.layout,"(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_filestore.layout,stack.examples.pages.cloud_filestore.layout.displayName);

(stack.examples.pages.cloud_filestore.layout.fast_refresh_signature = sig__45257__auto___95901);
} else {
}
} else {
}
stack.examples.pages.cloud_filestore.layout_with_auth = (function stack$examples$pages$cloud_filestore$layout_with_auth(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95861 = [clj_props__45318__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95861,(0),null);
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95903 = stack.examples.pages.cloud_filestore.layout_with_auth.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95903)){
var f__45248__auto___95904 = temp__5823__auto___95903;
(f__45248__auto___95904.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95904.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95904.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.services.auth.wrap_layout,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),stack.examples.pages.cloud_filestore.layout], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95871 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95872 = stack.examples.pages.cloud_filestore.layout_with_auth;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95872);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95871);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_filestore.layout_with_auth.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_filestore.layout_with_auth.displayName = "stack.examples.pages.cloud-filestore/layout-with-auth");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95905 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95905.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95905.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_filestore.layout_with_auth,"",null,null) : sig__45257__auto___95905.call(null, stack.examples.pages.cloud_filestore.layout_with_auth,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_filestore.layout_with_auth,stack.examples.pages.cloud_filestore.layout_with_auth.displayName);

(stack.examples.pages.cloud_filestore.layout_with_auth.fast_refresh_signature = sig__45257__auto___95905);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.cloud_filestore.js.map
