goog.provide('stack.examples.re_frame.pages.cloud_filestore');
stack.examples.re_frame.pages.cloud_filestore.folder_list = (function stack$examples$re_frame$pages$cloud_filestore$folder_list(props__46991__auto__){
var props98354 = uix.core.glue_args(props__46991__auto__);
var vec__98357 = [props98354];
var map__98360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98357,(0),null);
var map__98360__$1 = cljs.core.__destructure_map(map__98360);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98360__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98360__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98626 = stack.examples.re_frame.pages.cloud_filestore.folder_list.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98626)){
var f__46909__auto___98627 = temp__5823__auto___98626;
(f__46909__auto___98627.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98627.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98627.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs("Buckets",["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Public",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':(function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
})}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
}),folders),["tbody",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98385 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98386 = stack.examples.re_frame.pages.cloud_filestore.folder_list;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98386);

try{if(((cljs.core.map_QMARK_(props98354)) || ((props98354 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98354)].join(''),"\n","(clojure.core/or (clojure.core/map? props98354) (clojure.core/nil? props98354))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98385);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_filestore.folder_list.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_filestore.folder_list.displayName = "stack.examples.re-frame.pages.cloud-filestore/folder-list");

Object.defineProperty(stack.examples.re_frame.pages.cloud_filestore.folder_list,"name",(function (){var obj98396 = ({"value":"stack.examples.re-frame.pages.cloud-filestore/folder-list"});
return obj98396;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98632 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98632.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98632.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_filestore.folder_list,"",null,null) : sig__46918__auto___98632.call(null, stack.examples.re_frame.pages.cloud_filestore.folder_list,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_filestore.folder_list,stack.examples.re_frame.pages.cloud_filestore.folder_list.displayName);

(stack.examples.re_frame.pages.cloud_filestore.folder_list.fast_refresh_signature = sig__46918__auto___98632);
} else {
}
} else {
}

stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel = (function stack$examples$re_frame$pages$cloud_filestore$folder_contents_panel(props__46991__auto__){
var props98407 = uix.core.glue_args(props__46991__auto__);
var vec__98413 = [props98407];
var map__98416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98413,(0),null);
var map__98416__$1 = cljs.core.__destructure_map(map__98416);
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98416__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98416__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98416__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98633 = stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98633)){
var f__46909__auto___98634 = temp__5823__auto___98633;
(f__46909__auto___98634.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98634.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98634.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs(["Bucket contents (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),")"].join(''),["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Created",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Modified",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?(function (_){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.examples.re-frame.pages.cloud-filestore";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.examples.re-frame.pages.cloud-filestore",new cljs.core.Keyword(null,"line","line",212345235),49,new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/re_frame/pages/cloud_filestore.cljs"], null),__ns,49,48,"file:/home/cormacc/nmd/products/connect/portal/src/stack/examples/re_frame/pages/cloud_filestore.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name], null),null,"TODO: Folder selected",null,null,null,null,null,null,null,null));
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
}):(function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
}))}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
}),items),["tbody",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98470 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98471 = stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98471);

try{if(((cljs.core.map_QMARK_(props98407)) || ((props98407 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98407)].join(''),"\n","(clojure.core/or (clojure.core/map? props98407) (clojure.core/nil? props98407))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98470);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel.displayName = "stack.examples.re-frame.pages.cloud-filestore/folder-contents-panel");

Object.defineProperty(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel,"name",(function (){var obj98498 = ({"value":"stack.examples.re-frame.pages.cloud-filestore/folder-contents-panel"});
return obj98498;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98637 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98637.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98637.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel,"",null,null) : sig__46918__auto___98637.call(null, stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel,stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel.displayName);

(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel.fast_refresh_signature = sig__46918__auto___98637);
} else {
}
} else {
}

stack.examples.re_frame.pages.cloud_filestore.file_contents_panel = (function stack$examples$re_frame$pages$cloud_filestore$file_contents_panel(props__46991__auto__){
var props98506 = uix.core.glue_args(props__46991__auto__);
var vec__98511 = [props98506];
var map__98514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98511,(0),null);
var map__98514__$1 = cljs.core.__destructure_map(map__98514);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98514__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98514__$1,new cljs.core.Keyword(null,"content","content",15833224));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98638 = stack.examples.re_frame.pages.cloud_filestore.file_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98638)){
var f__46909__auto___98639 = temp__5823__auto___98638;
(f__46909__auto___98639.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98639.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98639.call(null, ));
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
var _STAR_current_component_STAR__orig_val__98532 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98533 = stack.examples.re_frame.pages.cloud_filestore.file_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98533);

try{if(((cljs.core.map_QMARK_(props98506)) || ((props98506 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98506)].join(''),"\n","(clojure.core/or (clojure.core/map? props98506) (clojure.core/nil? props98506))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98532);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel.displayName = "stack.examples.re-frame.pages.cloud-filestore/file-contents-panel");

Object.defineProperty(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel,"name",(function (){var obj98539 = ({"value":"stack.examples.re-frame.pages.cloud-filestore/file-contents-panel"});
return obj98539;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98640 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98640.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98640.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel,"",null,null) : sig__46918__auto___98640.call(null, stack.examples.re_frame.pages.cloud_filestore.file_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel,stack.examples.re_frame.pages.cloud_filestore.file_contents_panel.displayName);

(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel.fast_refresh_signature = sig__46918__auto___98640);
} else {
}
} else {
}

stack.examples.re_frame.pages.cloud_filestore.file_explorer = (function stack$examples$re_frame$pages$cloud_filestore$file_explorer(props__46991__auto__){
var props98547 = uix.core.glue_args(props__46991__auto__);
var vec__98549 = [props98547];
var map__98552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98549,(0),null);
var map__98552__$1 = cljs.core.__destructure_map(map__98552);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98552__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98552__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98552__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98552__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98552__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98552__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98642 = stack.examples.re_frame.pages.cloud_filestore.file_explorer.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98642)){
var f__46909__auto___98643 = temp__5823__auto___98642;
(f__46909__auto___98643.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98643.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98643.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"File explorer"], null)],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-row"}],[uix.compiler.aot._GT_el("div",[{'className':"flex-none"}],[uix.compiler.alpha.component_element(stack.examples.re_frame.pages.cloud_filestore.folder_list,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folders","folders",44248772),folders,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),on_folder_click], null)],[])]),uix.compiler.aot._GT_el("div",[{'className':"grow"}],[uix.compiler.alpha.component_element(stack.examples.re_frame.pages.cloud_filestore.folder_contents_panel,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),on_item_click], null)],[])])]),uix.compiler.alpha.component_element(stack.examples.re_frame.pages.cloud_filestore.file_contents_panel,uix.compiler.attributes.interpret_props(file),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98560 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98561 = stack.examples.re_frame.pages.cloud_filestore.file_explorer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98561);

try{if(((cljs.core.map_QMARK_(props98547)) || ((props98547 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98547)].join(''),"\n","(clojure.core/or (clojure.core/map? props98547) (clojure.core/nil? props98547))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98560);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_filestore.file_explorer.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_filestore.file_explorer.displayName = "stack.examples.re-frame.pages.cloud-filestore/file-explorer");

Object.defineProperty(stack.examples.re_frame.pages.cloud_filestore.file_explorer,"name",(function (){var obj98565 = ({"value":"stack.examples.re-frame.pages.cloud-filestore/file-explorer"});
return obj98565;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98647 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98647.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98647.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_filestore.file_explorer,"",null,null) : sig__46918__auto___98647.call(null, stack.examples.re_frame.pages.cloud_filestore.file_explorer,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_filestore.file_explorer,stack.examples.re_frame.pages.cloud_filestore.file_explorer.displayName);

(stack.examples.re_frame.pages.cloud_filestore.file_explorer.fast_refresh_signature = sig__46918__auto___98647);
} else {
}
} else {
}

stack.examples.re_frame.pages.cloud_filestore.test_bucket_id = "test";
stack.examples.re_frame.pages.cloud_filestore.layout = (function stack$examples$re_frame$pages$cloud_filestore$layout(props__46991__auto__){
var props98574 = uix.core.glue_args(props__46991__auto__);
var vec__98583 = [props98574];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98583,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98652 = stack.examples.re_frame.pages.cloud_filestore.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98652)){
var f__46909__auto___98653 = temp__5823__auto___98652;
(f__46909__auto___98653.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98653.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98653.call(null, ));
} else {
}
} else {
}

var vec__98592 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98592,(0),null);
var set_buckets_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98592,(1),null);
var vec__98596 = uix.core.use_state(stack.examples.re_frame.pages.cloud_filestore.test_bucket_id);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98596,(0),null);
var set_bucket_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98596,(1),null);
var vec__98599 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98599,(0),null);
var set_files_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98599,(1),null);
var vec__98602 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98602,(0),null);
var set_file_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98602,(1),null);
var show_bucket_callback = (function (bucket__$1){
return (set_bucket_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_bucket_BANG_.cljs$core$IFn$_invoke$arity$1(bucket__$1) : set_bucket_BANG_.call(null, bucket__$1));
});
var show_file_callback = (function (path){
return stack.utils.supabase.get_file(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bucket","bucket",1126218366),bucket,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"then","then",460598070),set_file_BANG_], null));
});
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.list_buckets(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),set_buckets_BANG_], null));
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.list_files(bucket,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),set_files_BANG_], null));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bucket], null))]);

return uix.compiler.alpha.component_element(stack.examples.re_frame.pages.cloud_filestore.file_explorer,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"folders","folders",44248772),buckets,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),show_bucket_callback,new cljs.core.Keyword(null,"folder","folder",1515881736),bucket,new cljs.core.Keyword(null,"items","items",1031954938),files,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),show_file_callback,new cljs.core.Keyword(null,"file","file",-1269645878),file], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98606 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98607 = stack.examples.re_frame.pages.cloud_filestore.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98607);

try{if(((cljs.core.map_QMARK_(props98574)) || ((props98574 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98574)].join(''),"\n","(clojure.core/or (clojure.core/map? props98574) (clojure.core/nil? props98574))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98606);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_filestore.layout.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_filestore.layout.displayName = "stack.examples.re-frame.pages.cloud-filestore/layout");

Object.defineProperty(stack.examples.re_frame.pages.cloud_filestore.layout,"name",(function (){var obj98610 = ({"value":"stack.examples.re-frame.pages.cloud-filestore/layout"});
return obj98610;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98654 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98654.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98654.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_filestore.layout,"(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null) : sig__46918__auto___98654.call(null, stack.examples.re_frame.pages.cloud_filestore.layout,"(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_filestore.layout,stack.examples.re_frame.pages.cloud_filestore.layout.displayName);

(stack.examples.re_frame.pages.cloud_filestore.layout.fast_refresh_signature = sig__46918__auto___98654);
} else {
}
} else {
}

stack.examples.re_frame.pages.cloud_filestore.layout_with_auth = (function stack$examples$re_frame$pages$cloud_filestore$layout_with_auth(props__46991__auto__){
var props98613 = uix.core.glue_args(props__46991__auto__);
var vec__98614 = [props98613];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98614,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98655 = stack.examples.re_frame.pages.cloud_filestore.layout_with_auth.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98655)){
var f__46909__auto___98656 = temp__5823__auto___98655;
(f__46909__auto___98656.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98656.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98656.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.services.auth.wrap_layout,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),stack.examples.re_frame.pages.cloud_filestore.layout], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98619 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98620 = stack.examples.re_frame.pages.cloud_filestore.layout_with_auth;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98620);

try{if(((cljs.core.map_QMARK_(props98613)) || ((props98613 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98613)].join(''),"\n","(clojure.core/or (clojure.core/map? props98613) (clojure.core/nil? props98613))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98619);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_filestore.layout_with_auth.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_filestore.layout_with_auth.displayName = "stack.examples.re-frame.pages.cloud-filestore/layout-with-auth");

Object.defineProperty(stack.examples.re_frame.pages.cloud_filestore.layout_with_auth,"name",(function (){var obj98623 = ({"value":"stack.examples.re-frame.pages.cloud-filestore/layout-with-auth"});
return obj98623;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98659 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98659.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98659.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_filestore.layout_with_auth,"",null,null) : sig__46918__auto___98659.call(null, stack.examples.re_frame.pages.cloud_filestore.layout_with_auth,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_filestore.layout_with_auth,stack.examples.re_frame.pages.cloud_filestore.layout_with_auth.displayName);

(stack.examples.re_frame.pages.cloud_filestore.layout_with_auth.fast_refresh_signature = sig__46918__auto___98659);
} else {
}
} else {
}


//# sourceMappingURL=stack.examples.re_frame.pages.cloud_filestore.js.map
