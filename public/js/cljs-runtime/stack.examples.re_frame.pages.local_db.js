goog.provide('stack.examples.re_frame.pages.local_db');
stack.examples.re_frame.pages.local_db.datom_table = (function stack$examples$re_frame$pages$local_db$datom_table(props__46991__auto__){
var props98234 = uix.core.glue_args(props__46991__auto__);
var vec__98239 = [props98234];
var map__98242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98239,(0),null);
var map__98242__$1 = cljs.core.__destructure_map(map__98242);
var _props = map__98242__$1;
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98242__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98477 = stack.examples.re_frame.pages.local_db.datom_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98477)){
var f__46909__auto___98478 = temp__5823__auto___98477;
(f__46909__auto___98478.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98478.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98478.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("e",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("a",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("v",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("added",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__98257){
var vec__98262 = p__98257;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98262,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98262,(1),null);
return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(idx)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__98223_SHARP_,p2__98224_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__98223_SHARP_,p2__98224_SHARP_],null));
}),datoms)),["tbody",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98289 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98290 = stack.examples.re_frame.pages.local_db.datom_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98290);

try{if(((cljs.core.map_QMARK_(props98234)) || ((props98234 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98234)].join(''),"\n","(clojure.core/or (clojure.core/map? props98234) (clojure.core/nil? props98234))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98289);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.local_db.datom_table.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.local_db.datom_table.displayName = "stack.examples.re-frame.pages.local-db/datom-table");

Object.defineProperty(stack.examples.re_frame.pages.local_db.datom_table,"name",(function (){var obj98304 = ({"value":"stack.examples.re-frame.pages.local-db/datom-table"});
return obj98304;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98502 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98502.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98502.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.local_db.datom_table,"",null,null) : sig__46918__auto___98502.call(null, stack.examples.re_frame.pages.local_db.datom_table,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.local_db.datom_table,stack.examples.re_frame.pages.local_db.datom_table.displayName);

(stack.examples.re_frame.pages.local_db.datom_table.fast_refresh_signature = sig__46918__auto___98502);
} else {
}
} else {
}

stack.examples.re_frame.pages.local_db.datom_row = (function stack$examples$re_frame$pages$local_db$datom_row(props__46991__auto__){
var props98321 = uix.core.glue_args(props__46991__auto__);
var vec__98323 = [props98321];
var map__98327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98323,(0),null);
var map__98327__$1 = cljs.core.__destructure_map(map__98327);
var _props = map__98327__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98327__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var datom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98327__$1,new cljs.core.Keyword(null,"datom","datom",-371556090));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98508 = stack.examples.re_frame.pages.local_db.datom_row.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98508)){
var f__46909__auto___98509 = temp__5823__auto___98508;
(f__46909__auto___98509.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98509.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98509.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(key)}],[uix.compiler.aot._GT_el("td",[{'colSpan':(3)}],[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98355 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98356 = stack.examples.re_frame.pages.local_db.datom_row;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98356);

try{if(((cljs.core.map_QMARK_(props98321)) || ((props98321 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98321)].join(''),"\n","(clojure.core/or (clojure.core/map? props98321) (clojure.core/nil? props98321))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98355);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.local_db.datom_row.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.local_db.datom_row.displayName = "stack.examples.re-frame.pages.local-db/datom-row");

Object.defineProperty(stack.examples.re_frame.pages.local_db.datom_row,"name",(function (){var obj98374 = ({"value":"stack.examples.re-frame.pages.local-db/datom-row"});
return obj98374;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98517 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98517.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98517.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.local_db.datom_row,"",null,null) : sig__46918__auto___98517.call(null, stack.examples.re_frame.pages.local_db.datom_row,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.local_db.datom_row,stack.examples.re_frame.pages.local_db.datom_row.displayName);

(stack.examples.re_frame.pages.local_db.datom_row.fast_refresh_signature = sig__46918__auto___98517);
} else {
}
} else {
}

stack.examples.re_frame.pages.local_db.inst__GT_ISOString = (function stack$examples$re_frame$pages$local_db$inst__GT_ISOString(inst){
return (new Date(inst)).toISOString();
});
stack.examples.re_frame.pages.local_db.layout = (function stack$examples$re_frame$pages$local_db$layout(props__46991__auto__){
var props98403 = uix.core.glue_args(props__46991__auto__);
var vec__98408 = [props98403];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98408,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98518 = stack.examples.re_frame.pages.local_db.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98518)){
var f__46909__auto___98520 = temp__5823__auto___98518;
(f__46909__auto___98520.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98520.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98520.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.uix.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Local transaction log (IndexedDB)"], null)],[(function (){var tasks = (function (){var G__98423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-tx-log","domain-tx-log",1922643728)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__98423) : stack.utils.dbfx.use_sub.call(null, G__98423));
})();
return uix.compiler.alpha.component_element(stack.uix.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("id",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("tx-time",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("valid-time",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("e",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("a",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("v",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("added",["th",null,null,false],false),[])])]),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__98429){
var map__98433 = p__98429;
var map__98433__$1 = cljs.core.__destructure_map(map__98433);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98433__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98433__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071));
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98433__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98433__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return uix.compiler.aot._GT_el("tbody",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.re_frame.pages.local_db.inst__GT_ISOString(tx_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.re_frame.pages.local_db.inst__GT_ISOString(valid_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[{'colSpan':(4)}],[])]),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__98444){
var vec__98446 = p__98444;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98446,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98446,(1),null);
return uix.compiler.alpha.component_element(stack.examples.re_frame.pages.local_db.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__98397_SHARP_,p2__98398_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__98397_SHARP_,p2__98398_SHARP_],null));
}),datoms))]);
}),tasks)]);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98453 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98454 = stack.examples.re_frame.pages.local_db.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98454);

try{if(((cljs.core.map_QMARK_(props98403)) || ((props98403 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98403)].join(''),"\n","(clojure.core/or (clojure.core/map? props98403) (clojure.core/nil? props98403))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98453);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.local_db.layout.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.local_db.layout.displayName = "stack.examples.re-frame.pages.local-db/layout");

Object.defineProperty(stack.examples.re_frame.pages.local_db.layout,"name",(function (){var obj98460 = ({"value":"stack.examples.re-frame.pages.local-db/layout"});
return obj98460;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98531 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98531.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98531.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.local_db.layout,"(dbfx/use-sub [:domain-tx-log])",null,null) : sig__46918__auto___98531.call(null, stack.examples.re_frame.pages.local_db.layout,"(dbfx/use-sub [:domain-tx-log])",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.local_db.layout,stack.examples.re_frame.pages.local_db.layout.displayName);

(stack.examples.re_frame.pages.local_db.layout.fast_refresh_signature = sig__46918__auto___98531);
} else {
}
} else {
}


//# sourceMappingURL=stack.examples.re_frame.pages.local_db.js.map
