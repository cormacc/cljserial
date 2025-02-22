goog.provide('cljserial.pages.backend');
cljserial.pages.backend.device_table = (function cljserial$pages$backend$device_table(props__38176__auto__){
var clj_props__38177__auto__ = uix.core.glue_args(props__38176__auto__);
var vec__66040 = [clj_props__38177__auto__];
var map__66043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66040,(0),null);
var map__66043__$1 = cljs.core.__destructure_map(map__66043);
var devices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66043__$1,new cljs.core.Keyword(null,"devices","devices",1929380599));
var f__38178__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___66206 = cljserial.pages.backend.device_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___66206)){
var f__38107__auto___66208 = temp__5804__auto___66206;
(f__38107__auto___66208.cljs$core$IFn$_invoke$arity$0 ? f__38107__auto___66208.cljs$core$IFn$_invoke$arity$0() : f__38107__auto___66208.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Devices"], null)],[uix.compiler.alpha.component_element(cljserial.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Serial",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Hardware revision",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Firmware",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Bootloader",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5523__auto__ = (function cljserial$pages$backend$device_table_$_iter__66064(s__66065){
return (new cljs.core.LazySeq(null,(function (){
var s__66065__$1 = s__66065;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__66065__$1);
if(temp__5804__auto__){
var s__66065__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66065__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__66065__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__66067 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__66066 = (0);
while(true){
if((i__66066 < size__5522__auto__)){
var d = cljs.core._nth(c__5521__auto__,i__66066);
cljs.core.chunk_append(b__66067,uix.compiler.aot._GT_el("tr",[{'key':new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hardware_rev","hardware_rev",-2097287105).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"firmware_rev","firmware_rev",-938304104).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bootloader_rev","bootloader_rev",-1546586338).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[])]));

var G__66212 = (i__66066 + (1));
i__66066 = G__66212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66067),cljserial$pages$backend$device_table_$_iter__66064(cljs.core.chunk_rest(s__66065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66067),null);
}
} else {
var d = cljs.core.first(s__66065__$2);
return cljs.core.cons(uix.compiler.aot._GT_el("tr",[{'key':new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"serial","serial",-860213615).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hardware_rev","hardware_rev",-2097287105).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"firmware_rev","firmware_rev",-938304104).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bootloader_rev","bootloader_rev",-1546586338).cljs$core$IFn$_invoke$arity$1(d)),["td",null,null,false],false),[])]),cljserial$pages$backend$device_table_$_iter__66064(cljs.core.rest(s__66065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(devices);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__66088 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__66089 = cljserial.pages.backend.device_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__66089);

try{if(((cljs.core.map_QMARK_(clj_props__38177__auto__)) || ((clj_props__38177__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38177__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38177__auto__) (clojure.core/nil? clj-props__38177__auto__))"].join('')));
}

return f__38178__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__66088);
}} else {
return f__38178__auto__();
}
});

(cljserial.pages.backend.device_table.uix_component_QMARK_ = true);

(cljserial.pages.backend.device_table.displayName = "cljserial.pages.backend/device-table");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38116__auto___66215 = window.uix.dev.signature_BANG_();
(sig__38116__auto___66215.cljs$core$IFn$_invoke$arity$4 ? sig__38116__auto___66215.cljs$core$IFn$_invoke$arity$4(cljserial.pages.backend.device_table,"",null,null) : sig__38116__auto___66215.call(null, cljserial.pages.backend.device_table,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.backend.device_table,cljserial.pages.backend.device_table.displayName);

(cljserial.pages.backend.device_table.fast_refresh_signature = sig__38116__auto___66215);
} else {
}
} else {
}
cljserial.pages.backend.bucket_contents_table = (function cljserial$pages$backend$bucket_contents_table(props__38176__auto__){
var clj_props__38177__auto__ = uix.core.glue_args(props__38176__auto__);
var vec__66107 = [clj_props__38177__auto__];
var map__66110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66107,(0),null);
var map__66110__$1 = cljs.core.__destructure_map(map__66110);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66110__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66110__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_file_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66110__$1,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590));
var f__38178__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___66219 = cljserial.pages.backend.bucket_contents_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___66219)){
var f__38107__auto___66220 = temp__5804__auto___66219;
(f__38107__auto___66220.cljs$core$IFn$_invoke$arity$0 ? f__38107__auto___66220.cljs$core$IFn$_invoke$arity$0() : f__38107__auto___66220.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),["Files (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),")"].join('')], null)],[uix.compiler.alpha.component_element(cljserial.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Name",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Created",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Modified",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("Size",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5523__auto__ = (function cljserial$pages$backend$bucket_contents_table_$_iter__66116(s__66117){
return (new cljs.core.LazySeq(null,(function (){
var s__66117__$1 = s__66117;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__66117__$1);
if(temp__5804__auto__){
var s__66117__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66117__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__66117__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__66119 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__66118 = (0);
while(true){
if((i__66118 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__66118);
cljs.core.chunk_append(b__66119,(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (i__66118,name,folder_QMARK_,i,c__5521__auto__,size__5522__auto__,b__66119,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click){
return (function (_){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.pages.backend",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),path,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name,new cljs.core.Keyword(null,"line","line",212345235),46], null)),null);
} else {
return null;
}
});})(i__66118,name,folder_QMARK_,i,c__5521__auto__,size__5522__auto__,b__66119,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click))
:((function (i__66118,name,folder_QMARK_,i,c__5521__auto__,size__5522__auto__,b__66119,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click){
return (function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(name) : on_file_click.call(null, name));
});})(i__66118,name,folder_QMARK_,i,c__5521__auto__,size__5522__auto__,b__66119,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})());

var G__66224 = (i__66118 + (1));
i__66118 = G__66224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66119),cljserial$pages$backend$bucket_contents_table_$_iter__66116(cljs.core.chunk_rest(s__66117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66119),null);
}
} else {
var i = cljs.core.first(s__66117__$2);
return cljs.core.cons((function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i);
var folder_QMARK_ = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i) == null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(name)}],[uix.compiler.aot._GT_el("td",[{'onClick':((folder_QMARK_)?((function (name,folder_QMARK_,i,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click){
return (function (_){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.pages.backend",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"folder","folder",1515881736),path,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),name,new cljs.core.Keyword(null,"line","line",212345235),46], null)),null);
} else {
return null;
}
});})(name,folder_QMARK_,i,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click))
:((function (name,folder_QMARK_,i,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click){
return (function (_){
return (on_file_click.cljs$core$IFn$_invoke$arity$1 ? on_file_click.cljs$core$IFn$_invoke$arity$1(name) : on_file_click.call(null, name));
});})(name,folder_QMARK_,i,s__66117__$2,temp__5804__auto__,clj_props__38177__auto__,vec__66107,map__66110,map__66110__$1,path,items,on_file_click))
)}],[name]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"created_at","created_at",1484050750).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"updated_at","updated_at",-460224592).cljs$core$IFn$_invoke$arity$1(i)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(i))),["td",null,null,false],false),[])]);
})(),cljserial$pages$backend$bucket_contents_table_$_iter__66116(cljs.core.rest(s__66117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(items);
})()])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__66136 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__66137 = cljserial.pages.backend.bucket_contents_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__66137);

try{if(((cljs.core.map_QMARK_(clj_props__38177__auto__)) || ((clj_props__38177__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38177__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38177__auto__) (clojure.core/nil? clj-props__38177__auto__))"].join('')));
}

return f__38178__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__66136);
}} else {
return f__38178__auto__();
}
});

(cljserial.pages.backend.bucket_contents_table.uix_component_QMARK_ = true);

(cljserial.pages.backend.bucket_contents_table.displayName = "cljserial.pages.backend/bucket-contents-table");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38116__auto___66225 = window.uix.dev.signature_BANG_();
(sig__38116__auto___66225.cljs$core$IFn$_invoke$arity$4 ? sig__38116__auto___66225.cljs$core$IFn$_invoke$arity$4(cljserial.pages.backend.bucket_contents_table,"",null,null) : sig__38116__auto___66225.call(null, cljserial.pages.backend.bucket_contents_table,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.backend.bucket_contents_table,cljserial.pages.backend.bucket_contents_table.displayName);

(cljserial.pages.backend.bucket_contents_table.fast_refresh_signature = sig__38116__auto___66225);
} else {
}
} else {
}
cljserial.pages.backend.file_viewer = (function cljserial$pages$backend$file_viewer(props__38176__auto__){
var clj_props__38177__auto__ = uix.core.glue_args(props__38176__auto__);
var vec__66144 = [clj_props__38177__auto__];
var map__66147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66144,(0),null);
var map__66147__$1 = cljs.core.__destructure_map(map__66147);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66147__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66147__$1,new cljs.core.Keyword(null,"content","content",15833224));
var f__38178__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___66226 = cljserial.pages.backend.file_viewer.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___66226)){
var f__38107__auto___66227 = temp__5804__auto___66226;
(f__38107__auto___66227.cljs$core$IFn$_invoke$arity$0 ? f__38107__auto___66227.cljs$core$IFn$_invoke$arity$0() : f__38107__auto___66227.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.cards.card,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<NONE>";
}
})(),new cljs.core.Keyword(null,"children","children",-940561982),uix.compiler.aot._GT_el("p",uix.compiler.attributes.interpret_attrs((function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<NONE>";
}
})(),["p",null,null,false],false),[])], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__66155 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__66156 = cljserial.pages.backend.file_viewer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__66156);

try{if(((cljs.core.map_QMARK_(clj_props__38177__auto__)) || ((clj_props__38177__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38177__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38177__auto__) (clojure.core/nil? clj-props__38177__auto__))"].join('')));
}

return f__38178__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__66155);
}} else {
return f__38178__auto__();
}
});

(cljserial.pages.backend.file_viewer.uix_component_QMARK_ = true);

(cljserial.pages.backend.file_viewer.displayName = "cljserial.pages.backend/file-viewer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38116__auto___66228 = window.uix.dev.signature_BANG_();
(sig__38116__auto___66228.cljs$core$IFn$_invoke$arity$4 ? sig__38116__auto___66228.cljs$core$IFn$_invoke$arity$4(cljserial.pages.backend.file_viewer,"",null,null) : sig__38116__auto___66228.call(null, cljserial.pages.backend.file_viewer,"",null,null));

window.uix.dev.register_BANG_(cljserial.pages.backend.file_viewer,cljserial.pages.backend.file_viewer.displayName);

(cljserial.pages.backend.file_viewer.fast_refresh_signature = sig__38116__auto___66228);
} else {
}
} else {
}
cljserial.pages.backend.test_bucket_id = "test";
cljserial.pages.backend.layout = (function cljserial$pages$backend$layout(){
var f__38174__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___66229 = cljserial.pages.backend.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___66229)){
var f__38107__auto___66230 = temp__5804__auto___66229;
(f__38107__auto___66230.cljs$core$IFn$_invoke$arity$0 ? f__38107__auto___66230.cljs$core$IFn$_invoke$arity$0() : f__38107__auto___66230.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((function (){var vec__66175 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var devices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66175,(0),null);
var set_devices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66175,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic("devices",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),set_devices_BANG_], 0));
}),uix.core.jsfy_deps([]));

return uix.compiler.alpha.component_element(cljserial.pages.backend.device_table,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"devices","devices",1929380599),devices], null)],[]);
})(),["div",null,"flex flex-col",false],false),[(function (){var vec__66183 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var buckets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66183,(0),null);
var set_buckets_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66183,(1),null);
var vec__66186 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var files = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66186,(0),null);
var set_files_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66186,(1),null);
var vec__66189 = uix.core.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"content","content",15833224),null], null));
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66189,(0),null);
var set_file_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66189,(1),null);
var show_file_callback = (function (path){
return stack.utils.supabase.get_file(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bucket","bucket",1126218366),cljserial.pages.backend.test_bucket_id,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"then","then",460598070),set_file_BANG_], null));
});
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
stack.utils.supabase.list_buckets(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"then","then",460598070),set_buckets_BANG_], null));

return stack.utils.supabase.list_files.cljs$core$IFn$_invoke$arity$variadic(cljserial.pages.backend.test_bucket_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),set_files_BANG_], 0));
}),uix.core.jsfy_deps([]));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uix.compiler.alpha.component_element(cljserial.pages.backend.bucket_contents_table,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljserial.pages.backend.test_bucket_id,new cljs.core.Keyword(null,"items","items",1031954938),files,new cljs.core.Keyword(null,"on-file-click","on-file-click",887963590),show_file_callback], null)],[]),uix.compiler.alpha.component_element(cljserial.pages.backend.file_viewer,uix.compiler.attributes.interpret_props(file),[])], null);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__66199 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__66200 = cljserial.pages.backend.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__66200);

try{return f__38174__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__66199);
}} else {
return f__38174__auto__();
}
});

(cljserial.pages.backend.layout.uix_component_QMARK_ = true);

(cljserial.pages.backend.layout.displayName = "cljserial.pages.backend/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38116__auto___66231 = window.uix.dev.signature_BANG_();
(sig__38116__auto___66231.cljs$core$IFn$_invoke$arity$4 ? sig__38116__auto___66231.cljs$core$IFn$_invoke$arity$4(cljserial.pages.backend.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])(uix.core/use-state [])(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!}) (supabase/list-files test-bucket-id :then set-files!)) [])",null,null) : sig__38116__auto___66231.call(null, cljserial.pages.backend.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])(uix.core/use-state [])(uix.core/use-state [])(uix.core/use-state {:path nil, :content nil})(uix.core/use-effect (fn [] (supabase/list-buckets {:then set-buckets!}) (supabase/list-files test-bucket-id :then set-files!)) [])",null,null));

window.uix.dev.register_BANG_(cljserial.pages.backend.layout,cljserial.pages.backend.layout.displayName);

(cljserial.pages.backend.layout.fast_refresh_signature = sig__38116__auto___66231);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.pages.backend.js.map
