goog.provide('stack.pages.backend');
stack.pages.backend.folder_list = (function stack$pages$backend$folder_list(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84521 = [clj_props__38770__auto__];
var map__84524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84521,(0),null);
var map__84524__$1 = cljs.core.__destructure_map(map__84524);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84524__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84524__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84773 = stack.pages.backend.folder_list.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84773)){
var f__38700__auto___84774 = temp__5823__auto___84773;
(f__38700__auto___84774.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84774.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84774.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs("Buckets",["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Public",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$pages$backend$folder_list_$_iter__84532(s__84533){
return (new cljs.core.LazySeq(null,(function (){
var s__84533__$1 = s__84533;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__84533__$1);
if(temp__5823__auto__){
var s__84533__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84533__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__84533__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__84535 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__84534 = (0);
while(true){
if((i__84534 < size__5479__auto__)){
var b = cljs.core._nth(c__5478__auto__,i__84534);
cljs.core.chunk_append(b__84535,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':((function (i__84534,id,public$,b,c__5478__auto__,size__5479__auto__,b__84535,s__84533__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84521,map__84524,map__84524__$1,folders,on_folder_click){
return (function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
});})(i__84534,id,public$,b,c__5478__auto__,size__5479__auto__,b__84535,s__84533__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84521,map__84524,map__84524__$1,folders,on_folder_click))
}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
})());

var G__84792 = (i__84534 + (1));
i__84534 = G__84792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84535),stack$pages$backend$folder_list_$_iter__84532(cljs.core.chunk_rest(s__84533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84535),null);
}
} else {
var b = cljs.core.first(s__84533__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(b);
var public$ = (cljs.core.truth_(new cljs.core.Keyword(null,"public","public",1566243851).cljs$core$IFn$_invoke$arity$1(b))?"Y":"N");
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("td",[{'onClick':((function (id,public$,b,s__84533__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84521,map__84524,map__84524__$1,folders,on_folder_click){
return (function (_){
return (on_folder_click.cljs$core$IFn$_invoke$arity$1 ? on_folder_click.cljs$core$IFn$_invoke$arity$1(id) : on_folder_click.call(null, id));
});})(id,public$,b,s__84533__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84521,map__84524,map__84524__$1,folders,on_folder_click))
}],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(b)]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(public$,["td",null,null,false],false),[])]);
})(),stack$pages$backend$folder_list_$_iter__84532(cljs.core.rest(s__84533__$2)));
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
var _STAR_current_component_STAR__orig_val__84545 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84546 = stack.pages.backend.folder_list;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84546);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84545);
}} else {
return f__38771__auto__();
}
});

(stack.pages.backend.folder_list.uix_component_QMARK_ = true);

(stack.pages.backend.folder_list.displayName = "stack.pages.backend/folder-list");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84807 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84807.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84807.cljs$core$IFn$_invoke$arity$4(stack.pages.backend.folder_list,"",null,null) : sig__38709__auto___84807.call(null, stack.pages.backend.folder_list,"",null,null));

window.uix.dev.register_BANG_(stack.pages.backend.folder_list,stack.pages.backend.folder_list.displayName);

(stack.pages.backend.folder_list.fast_refresh_signature = sig__38709__auto___84807);
} else {
}
} else {
}
stack.pages.backend.folder_contents_panel = (function stack$pages$backend$folder_contents_panel(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84551 = [clj_props__38770__auto__];
var map__84554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84551,(0),null);
var map__84554__$1 = cljs.core.__destructure_map(map__84554);
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84554__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84554__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84554__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84813 = stack.pages.backend.folder_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84813)){
var f__38700__auto___84814 = temp__5823__auto___84813;
(f__38700__auto___84814.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84814.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84814.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("caption",uix.compiler.attributes.interpret_attrs(["Bucket contents (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder),")"].join(''),["caption",null,null,false],false),[]),uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Created",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Modified",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$pages$backend$folder_contents_panel_$_iter__84570(s__84571){
return (new cljs.core.LazySeq(null,(function (){
var s__84571__$1 = s__84571;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__84571__$1);
if(temp__5823__auto__){
var s__84571__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84571__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__84571__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__84573 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__84572 = (0);
while(true){
if((i__84572 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__84572);
cljs.core.chunk_append(b__84573,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (i__84572,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__84573,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click){
return (function (_){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.pages.backend",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name,new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
return null;
}
});})(i__84572,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__84573,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click))
:((function (i__84572,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__84573,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click){
return (function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
});})(i__84572,name,folder_QMARK_,i,c__5478__auto__,size__5479__auto__,b__84573,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})());

var G__84834 = (i__84572 + (1));
i__84572 = G__84834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84573),stack$pages$backend$folder_contents_panel_$_iter__84570(cljs.core.chunk_rest(s__84571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84573),null);
}
} else {
var i = cljs.core.first(s__84571__$2);
return cljs.core.cons((function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (name,folder_QMARK_,i,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click){
return (function (_){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.pages.backend",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name,new cljs.core.Keyword(null,"line","line",212345235),49], null)),null);
} else {
return null;
}
});})(name,folder_QMARK_,i,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click))
:((function (name,folder_QMARK_,i,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click){
return (function (_){
return (on_item_click.cljs$core$IFn$_invoke$arity$1 ? on_item_click.cljs$core$IFn$_invoke$arity$1(name) : on_item_click.call(null, name));
});})(name,folder_QMARK_,i,s__84571__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84551,map__84554,map__84554__$1,folder,items,on_item_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})(),stack$pages$backend$folder_contents_panel_$_iter__84570(cljs.core.rest(s__84571__$2)));
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
var _STAR_current_component_STAR__orig_val__84605 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84606 = stack.pages.backend.folder_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84606);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84605);
}} else {
return f__38771__auto__();
}
});

(stack.pages.backend.folder_contents_panel.uix_component_QMARK_ = true);

(stack.pages.backend.folder_contents_panel.displayName = "stack.pages.backend/folder-contents-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84846 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84846.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84846.cljs$core$IFn$_invoke$arity$4(stack.pages.backend.folder_contents_panel,"",null,null) : sig__38709__auto___84846.call(null, stack.pages.backend.folder_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.pages.backend.folder_contents_panel,stack.pages.backend.folder_contents_panel.displayName);

(stack.pages.backend.folder_contents_panel.fast_refresh_signature = sig__38709__auto___84846);
} else {
}
} else {
}
stack.pages.backend.file_contents_panel = (function stack$pages$backend$file_contents_panel(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84613 = [clj_props__38770__auto__];
var map__84616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84613,(0),null);
var map__84616__$1 = cljs.core.__destructure_map(map__84616);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84616__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84616__$1,new cljs.core.Keyword(null,"content","content",15833224));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84854 = stack.pages.backend.file_contents_panel.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84854)){
var f__38700__auto___84855 = temp__5823__auto___84854;
(f__38700__auto___84855.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84855.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84855.call(null, ));
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
var _STAR_current_component_STAR__orig_val__84619 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84620 = stack.pages.backend.file_contents_panel;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84620);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84619);
}} else {
return f__38771__auto__();
}
});

(stack.pages.backend.file_contents_panel.uix_component_QMARK_ = true);

(stack.pages.backend.file_contents_panel.displayName = "stack.pages.backend/file-contents-panel");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84856 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84856.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84856.cljs$core$IFn$_invoke$arity$4(stack.pages.backend.file_contents_panel,"",null,null) : sig__38709__auto___84856.call(null, stack.pages.backend.file_contents_panel,"",null,null));

window.uix.dev.register_BANG_(stack.pages.backend.file_contents_panel,stack.pages.backend.file_contents_panel.displayName);

(stack.pages.backend.file_contents_panel.fast_refresh_signature = sig__38709__auto___84856);
} else {
}
} else {
}
stack.pages.backend.file_explorer = (function stack$pages$backend$file_explorer(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84622 = [clj_props__38770__auto__];
var map__84625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84622,(0),null);
var map__84625__$1 = cljs.core.__destructure_map(map__84625);
var folders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84625__$1,new cljs.core.Keyword(null,"folders","folders",44248772));
var on_folder_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84625__$1,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223));
var folder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84625__$1,new cljs.core.Keyword(null,"folder","folder",1515881736));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84625__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_item_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84625__$1,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84625__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84862 = stack.pages.backend.file_explorer.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84862)){
var f__38700__auto___84863 = temp__5823__auto___84862;
(f__38700__auto___84863.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84863.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84863.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"File explorer"], null)],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("div",[{'className':"flex flex-row"}],[uix.compiler.aot._GT_el("div",[{'className':"flex-none"}],[uix.compiler.alpha.component_element(stack.pages.backend.folder_list,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"folders","folders",44248772),folders,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),on_folder_click], null)],[])]),uix.compiler.aot._GT_el("div",[{'className':"grow"}],[uix.compiler.alpha.component_element(stack.pages.backend.folder_contents_panel,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),folder,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),on_item_click], null)],[])])]),uix.compiler.alpha.component_element(stack.pages.backend.file_contents_panel,uix.compiler.attributes.interpret_props(file),[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84638 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84639 = stack.pages.backend.file_explorer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84639);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84638);
}} else {
return f__38771__auto__();
}
});

(stack.pages.backend.file_explorer.uix_component_QMARK_ = true);

(stack.pages.backend.file_explorer.displayName = "stack.pages.backend/file-explorer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84881 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84881.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84881.cljs$core$IFn$_invoke$arity$4(stack.pages.backend.file_explorer,"",null,null) : sig__38709__auto___84881.call(null, stack.pages.backend.file_explorer,"",null,null));

window.uix.dev.register_BANG_(stack.pages.backend.file_explorer,stack.pages.backend.file_explorer.displayName);

(stack.pages.backend.file_explorer.fast_refresh_signature = sig__38709__auto___84881);
} else {
}
} else {
}
stack.pages.backend.test_bucket_id = "test";
stack.pages.backend.layout = (function stack$pages$backend$layout(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84646 = [clj_props__38770__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84646,(0),null);
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84882 = stack.pages.backend.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84882)){
var f__38700__auto___84883 = temp__5823__auto___84882;
(f__38700__auto___84883.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84883.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84883.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var vec__84649 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var devices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84649,(0),null);
var set_devices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84649,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic("devices",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),set_devices_BANG_], 0));
}),uix.core.jsfy_deps([]));

return uix.compiler.alpha.component_element(stack.components.hardware.device_table,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"devices","devices",1929380599),devices], null)],[]);
})(),["div",null,"flex flex-col",false],false),[(function (){var vec__84656 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84656,(0),null);
var set_buckets_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84656,(1),null);
var vec__84659 = uix.core.use_state(stack.pages.backend.test_bucket_id);
var bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84659,(0),null);
var set_bucket_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84659,(1),null);
var vec__84662 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84662,(0),null);
var set_files_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84662,(1),null);
var vec__84665 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84665,(0),null);
var set_file_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84665,(1),null);
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

return uix.compiler.alpha.component_element(stack.pages.backend.file_explorer,[new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"folders","folders",44248772),buckets,new cljs.core.Keyword(null,"on-folder-click","on-folder-click",-113514223),show_bucket_callback,new cljs.core.Keyword(null,"folder","folder",1515881736),bucket,new cljs.core.Keyword(null,"items","items",1031954938),files,new cljs.core.Keyword(null,"on-item-click","on-item-click",-1809586363),show_file_callback,new cljs.core.Keyword(null,"file","file",-1269645878),file], null)],[]);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84690 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84691 = stack.pages.backend.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84691);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84690);
}} else {
return f__38771__auto__();
}
});

(stack.pages.backend.layout.uix_component_QMARK_ = true);

(stack.pages.backend.layout.displayName = "stack.pages.backend/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84903 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84903.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84903.cljs$core$IFn$_invoke$arity$4(stack.pages.backend.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null) : sig__38709__auto___84903.call(null, stack.pages.backend.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])(uix.core/use-state [])(uix.core/use-state test-bucket-id)(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!})) [])(uix.core/use-effect (fn [] (supabase/list-files bucket {:then set-files!})) [bucket])",null,null));

window.uix.dev.register_BANG_(stack.pages.backend.layout,stack.pages.backend.layout.displayName);

(stack.pages.backend.layout.fast_refresh_signature = sig__38709__auto___84903);
} else {
}
} else {
}
stack.pages.backend.layout_with_auth = (function stack$pages$backend$layout_with_auth(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84708 = [clj_props__38770__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84708,(0),null);
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84904 = stack.pages.backend.layout_with_auth.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84904)){
var f__38700__auto___84905 = temp__5823__auto___84904;
(f__38700__auto___84905.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84905.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84905.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.services.auth.wrap_layout,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),stack.pages.backend.layout], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84718 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84719 = stack.pages.backend.layout_with_auth;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84719);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84718);
}} else {
return f__38771__auto__();
}
});

(stack.pages.backend.layout_with_auth.uix_component_QMARK_ = true);

(stack.pages.backend.layout_with_auth.displayName = "stack.pages.backend/layout-with-auth");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84908 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84908.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84908.cljs$core$IFn$_invoke$arity$4(stack.pages.backend.layout_with_auth,"",null,null) : sig__38709__auto___84908.call(null, stack.pages.backend.layout_with_auth,"",null,null));

window.uix.dev.register_BANG_(stack.pages.backend.layout_with_auth,stack.pages.backend.layout_with_auth.displayName);

(stack.pages.backend.layout_with_auth.fast_refresh_signature = sig__38709__auto___84908);
} else {
}
} else {
}

//# sourceMappingURL=stack.pages.backend.js.map
