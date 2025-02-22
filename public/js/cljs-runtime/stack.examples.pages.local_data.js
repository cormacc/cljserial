goog.provide('stack.examples.pages.local_data');
stack.examples.pages.local_data.datom_table = (function stack$examples$pages$local_data$datom_table(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71399 = [clj_props__44360__auto__];
var map__71402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71399,(0),null);
var map__71402__$1 = cljs.core.__destructure_map(map__71402);
var _props = map__71402__$1;
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71402__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71570 = stack.examples.pages.local_data.datom_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71570)){
var f__44290__auto___71571 = temp__5823__auto___71570;
(f__44290__auto___71571.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71571.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71571.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("e",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("a",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("v",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("added",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$local_data$datom_table_$_iter__71422(s__71423){
return (new cljs.core.LazySeq(null,(function (){
var s__71423__$1 = s__71423;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__71423__$1);
if(temp__5823__auto__){
var s__71423__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71423__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__71423__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__71425 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__71424 = (0);
while(true){
if((i__71424 < size__5479__auto__)){
var vec__71434 = cljs.core._nth(c__5478__auto__,i__71424);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71434,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71434,(1),null);
cljs.core.chunk_append(b__71425,uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(idx)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]));

var G__71572 = (i__71424 + (1));
i__71424 = G__71572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71425),stack$examples$pages$local_data$datom_table_$_iter__71422(cljs.core.chunk_rest(s__71423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71425),null);
}
} else {
var vec__71442 = cljs.core.first(s__71423__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71442,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71442,(1),null);
return cljs.core.cons(uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(idx)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]),stack$examples$pages$local_data$datom_table_$_iter__71422(cljs.core.rest(s__71423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__71397_SHARP_,p2__71398_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__71397_SHARP_,p2__71398_SHARP_],null));
}),datoms));
})()])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71445 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71446 = stack.examples.pages.local_data.datom_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71446);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71445);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.local_data.datom_table.uix_component_QMARK_ = true);

(stack.examples.pages.local_data.datom_table.displayName = "stack.examples.pages.local-data/datom-table");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71573 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71573.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71573.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.local_data.datom_table,"",null,null) : sig__44299__auto___71573.call(null, stack.examples.pages.local_data.datom_table,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.local_data.datom_table,stack.examples.pages.local_data.datom_table.displayName);

(stack.examples.pages.local_data.datom_table.fast_refresh_signature = sig__44299__auto___71573);
} else {
}
} else {
}
stack.examples.pages.local_data.datom_row = (function stack$examples$pages$local_data$datom_row(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71456 = [clj_props__44360__auto__];
var map__71459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71456,(0),null);
var map__71459__$1 = cljs.core.__destructure_map(map__71459);
var _props = map__71459__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71459__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var datom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71459__$1,new cljs.core.Keyword(null,"datom","datom",-371556090));
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71575 = stack.examples.pages.local_data.datom_row.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71575)){
var f__44290__auto___71576 = temp__5823__auto___71575;
(f__44290__auto___71576.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71576.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71576.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(key)}],[uix.compiler.aot._GT_el("td",[{'colSpan':(3)}],[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71474 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71475 = stack.examples.pages.local_data.datom_row;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71475);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71474);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.local_data.datom_row.uix_component_QMARK_ = true);

(stack.examples.pages.local_data.datom_row.displayName = "stack.examples.pages.local-data/datom-row");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71579 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71579.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71579.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.local_data.datom_row,"",null,null) : sig__44299__auto___71579.call(null, stack.examples.pages.local_data.datom_row,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.local_data.datom_row,stack.examples.pages.local_data.datom_row.displayName);

(stack.examples.pages.local_data.datom_row.fast_refresh_signature = sig__44299__auto___71579);
} else {
}
} else {
}
stack.examples.pages.local_data.inst__GT_ISOString = (function stack$examples$pages$local_data$inst__GT_ISOString(inst){
return (new Date(inst)).toISOString();
});
stack.examples.pages.local_data.layout = (function stack$examples$pages$local_data$layout(props__44359__auto__){
var clj_props__44360__auto__ = uix.core.glue_args(props__44359__auto__);
var vec__71491 = [clj_props__44360__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71491,(0),null);
var f__44361__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___71580 = stack.examples.pages.local_data.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___71580)){
var f__44290__auto___71581 = temp__5823__auto___71580;
(f__44290__auto___71581.cljs$core$IFn$_invoke$arity$0 ? f__44290__auto___71581.cljs$core$IFn$_invoke$arity$0() : f__44290__auto___71581.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Transaction log"], null)],[(function (){var tasks = (function (){var G__71508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-tx-log","domain-tx-log",1922643728)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__71508) : stack.utils.dbfx.use_sub.call(null, G__71508));
})();
return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("id",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("tx-time",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("valid-time",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("e",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("a",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("v",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("added",["th",null,null,false],false),[])])]),(function (){var iter__5480__auto__ = (function stack$examples$pages$local_data$layout_$_iter__71523(s__71524){
return (new cljs.core.LazySeq(null,(function (){
var s__71524__$1 = s__71524;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__71524__$1);
if(temp__5823__auto__){
var s__71524__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71524__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__71524__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__71526 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__71525 = (0);
while(true){
if((i__71525 < size__5479__auto__)){
var map__71535 = cljs.core._nth(c__5478__auto__,i__71525);
var map__71535__$1 = cljs.core.__destructure_map(map__71535);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71535__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71535__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071));
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71535__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71535__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
cljs.core.chunk_append(b__71526,uix.compiler.aot._GT_el("tbody",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_data.inst__GT_ISOString(tx_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_data.inst__GT_ISOString(valid_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[{'colSpan':(4)}],[])]),(function (){var iter__5480__auto__ = ((function (i__71525,map__71535,map__71535__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__71526,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props){
return (function stack$examples$pages$local_data$layout_$_iter__71523_$_iter__71537(s__71538){
return (new cljs.core.LazySeq(null,((function (i__71525,map__71535,map__71535__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__71526,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props){
return (function (){
var s__71538__$1 = s__71538;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__71538__$1);
if(temp__5823__auto____$1){
var s__71538__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__71538__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__71538__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__71540 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__71539 = (0);
while(true){
if((i__71539 < size__5479__auto____$1)){
var vec__71544 = cljs.core._nth(c__5478__auto____$1,i__71539);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71544,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71544,(1),null);
cljs.core.chunk_append(b__71540,uix.compiler.alpha.component_element(stack.examples.pages.local_data.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]));

var G__71582 = (i__71539 + (1));
i__71539 = G__71582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71540),stack$examples$pages$local_data$layout_$_iter__71523_$_iter__71537(cljs.core.chunk_rest(s__71538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71540),null);
}
} else {
var vec__71547 = cljs.core.first(s__71538__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71547,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71547,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(stack.examples.pages.local_data.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]),stack$examples$pages$local_data$layout_$_iter__71523_$_iter__71537(cljs.core.rest(s__71538__$2)));
}
} else {
return null;
}
break;
}
});})(i__71525,map__71535,map__71535__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__71526,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props))
,null,null));
});})(i__71525,map__71535,map__71535__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__71526,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props))
;
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__71525,iter__5480__auto__,map__71535,map__71535__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__71526,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props){
return (function (p1__71483_SHARP_,p2__71484_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__71483_SHARP_,p2__71484_SHARP_],null));
});})(i__71525,iter__5480__auto__,map__71535,map__71535__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__71526,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props))
,datoms));
})()]));

var G__71583 = (i__71525 + (1));
i__71525 = G__71583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71526),stack$examples$pages$local_data$layout_$_iter__71523(cljs.core.chunk_rest(s__71524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71526),null);
}
} else {
var map__71550 = cljs.core.first(s__71524__$2);
var map__71550__$1 = cljs.core.__destructure_map(map__71550);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71550__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71550__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071));
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71550__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71550__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return cljs.core.cons(uix.compiler.aot._GT_el("tbody",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_data.inst__GT_ISOString(tx_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_data.inst__GT_ISOString(valid_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[{'colSpan':(4)}],[])]),(function (){var iter__5480__auto__ = ((function (map__71550,map__71550__$1,id,tx_time,valid_time,datoms,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props){
return (function stack$examples$pages$local_data$layout_$_iter__71523_$_iter__71552(s__71553){
return (new cljs.core.LazySeq(null,(function (){
var s__71553__$1 = s__71553;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__71553__$1);
if(temp__5823__auto____$1){
var s__71553__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__71553__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__71553__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__71555 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__71554 = (0);
while(true){
if((i__71554 < size__5479__auto__)){
var vec__71556 = cljs.core._nth(c__5478__auto__,i__71554);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71556,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71556,(1),null);
cljs.core.chunk_append(b__71555,uix.compiler.alpha.component_element(stack.examples.pages.local_data.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]));

var G__71584 = (i__71554 + (1));
i__71554 = G__71584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71555),stack$examples$pages$local_data$layout_$_iter__71523_$_iter__71552(cljs.core.chunk_rest(s__71553__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71555),null);
}
} else {
var vec__71560 = cljs.core.first(s__71553__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71560,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71560,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(stack.examples.pages.local_data.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]),stack$examples$pages$local_data$layout_$_iter__71523_$_iter__71552(cljs.core.rest(s__71553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__71550,map__71550__$1,id,tx_time,valid_time,datoms,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props))
;
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (iter__5480__auto__,map__71550,map__71550__$1,id,tx_time,valid_time,datoms,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props){
return (function (p1__71483_SHARP_,p2__71484_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__71483_SHARP_,p2__71484_SHARP_],null));
});})(iter__5480__auto__,map__71550,map__71550__$1,id,tx_time,valid_time,datoms,s__71524__$2,temp__5823__auto__,tasks,clj_props__44360__auto__,vec__71491,_props))
,datoms));
})()]),stack$examples$pages$local_data$layout_$_iter__71523(cljs.core.rest(s__71524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tasks);
})()]);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__71566 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__71567 = stack.examples.pages.local_data.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__71567);

try{if(((cljs.core.map_QMARK_(clj_props__44360__auto__)) || ((clj_props__44360__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__44360__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__44360__auto__) (clojure.core/nil? clj-props__44360__auto__))"].join('')));
}

return f__44361__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__71566);
}} else {
return f__44361__auto__();
}
});

(stack.examples.pages.local_data.layout.uix_component_QMARK_ = true);

(stack.examples.pages.local_data.layout.displayName = "stack.examples.pages.local-data/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__44299__auto___71586 = window.uix.dev.signature_BANG_();
(sig__44299__auto___71586.cljs$core$IFn$_invoke$arity$4 ? sig__44299__auto___71586.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.local_data.layout,"(dbfx/use-sub [:domain-tx-log])",null,null) : sig__44299__auto___71586.call(null, stack.examples.pages.local_data.layout,"(dbfx/use-sub [:domain-tx-log])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.local_data.layout,stack.examples.pages.local_data.layout.displayName);

(stack.examples.pages.local_data.layout.fast_refresh_signature = sig__44299__auto___71586);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.local_data.js.map
