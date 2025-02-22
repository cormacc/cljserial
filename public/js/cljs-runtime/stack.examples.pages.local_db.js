goog.provide('stack.examples.pages.local_db');
stack.examples.pages.local_db.datom_table = (function stack$examples$pages$local_db$datom_table(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95552 = [clj_props__45318__auto__];
var map__95555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95552,(0),null);
var map__95555__$1 = cljs.core.__destructure_map(map__95555);
var _props = map__95555__$1;
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95555__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95783 = stack.examples.pages.local_db.datom_table.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95783)){
var f__45248__auto___95784 = temp__5823__auto___95783;
(f__45248__auto___95784.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95784.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95784.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("e",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("a",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("v",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("added",["th",null,null,false],false),[])])]),uix.compiler.aot._GT_el("tbody",[null],[(function (){var iter__5480__auto__ = (function stack$examples$pages$local_db$datom_table_$_iter__95563(s__95564){
return (new cljs.core.LazySeq(null,(function (){
var s__95564__$1 = s__95564;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__95564__$1);
if(temp__5823__auto__){
var s__95564__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95564__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95564__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95566 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95565 = (0);
while(true){
if((i__95565 < size__5479__auto__)){
var vec__95575 = cljs.core._nth(c__5478__auto__,i__95565);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95575,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95575,(1),null);
cljs.core.chunk_append(b__95566,uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(idx)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]));

var G__95787 = (i__95565 + (1));
i__95565 = G__95787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95566),stack$examples$pages$local_db$datom_table_$_iter__95563(cljs.core.chunk_rest(s__95564__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95566),null);
}
} else {
var vec__95585 = cljs.core.first(s__95564__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95585,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95585,(1),null);
return cljs.core.cons(uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(idx)}],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]),stack$examples$pages$local_db$datom_table_$_iter__95563(cljs.core.rest(s__95564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__95545_SHARP_,p2__95546_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__95545_SHARP_,p2__95546_SHARP_],null));
}),datoms));
})()])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95595 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95596 = stack.examples.pages.local_db.datom_table;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95596);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95595);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.local_db.datom_table.uix_component_QMARK_ = true);

(stack.examples.pages.local_db.datom_table.displayName = "stack.examples.pages.local-db/datom-table");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95792 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95792.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95792.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.local_db.datom_table,"",null,null) : sig__45257__auto___95792.call(null, stack.examples.pages.local_db.datom_table,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.local_db.datom_table,stack.examples.pages.local_db.datom_table.displayName);

(stack.examples.pages.local_db.datom_table.fast_refresh_signature = sig__45257__auto___95792);
} else {
}
} else {
}
stack.examples.pages.local_db.datom_row = (function stack$examples$pages$local_db$datom_row(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95601 = [clj_props__45318__auto__];
var map__95604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95601,(0),null);
var map__95604__$1 = cljs.core.__destructure_map(map__95604);
var _props = map__95604__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95604__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var datom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95604__$1,new cljs.core.Keyword(null,"datom","datom",-371556090));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95793 = stack.examples.pages.local_db.datom_row.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95793)){
var f__45248__auto___95794 = temp__5823__auto___95793;
(f__45248__auto___95794.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95794.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95794.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("tr",[{'key':uix.compiler.attributes.keyword__GT_string(key)}],[uix.compiler.aot._GT_el("td",[{'colSpan':(3)}],[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(datom)),["td",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95608 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95609 = stack.examples.pages.local_db.datom_row;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95609);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95608);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.local_db.datom_row.uix_component_QMARK_ = true);

(stack.examples.pages.local_db.datom_row.displayName = "stack.examples.pages.local-db/datom-row");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95798 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95798.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95798.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.local_db.datom_row,"",null,null) : sig__45257__auto___95798.call(null, stack.examples.pages.local_db.datom_row,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.local_db.datom_row,stack.examples.pages.local_db.datom_row.displayName);

(stack.examples.pages.local_db.datom_row.fast_refresh_signature = sig__45257__auto___95798);
} else {
}
} else {
}
stack.examples.pages.local_db.inst__GT_ISOString = (function stack$examples$pages$local_db$inst__GT_ISOString(inst){
return (new Date(inst)).toISOString();
});
stack.examples.pages.local_db.layout = (function stack$examples$pages$local_db$layout(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95654 = [clj_props__45318__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95654,(0),null);
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95803 = stack.examples.pages.local_db.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95803)){
var f__45248__auto___95804 = temp__5823__auto___95803;
(f__45248__auto___95804.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95804.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95804.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.cards.card,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Transaction log"], null)],[(function (){var tasks = (function (){var G__95669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-tx-log","domain-tx-log",1922643728)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__95669) : stack.utils.dbfx.use_sub.call(null, G__95669));
})();
return uix.compiler.alpha.component_element(stack.components.tables.table,[cljs.core.PersistentArrayMap.EMPTY],[uix.compiler.aot._GT_el("thead",[null],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("id",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("tx-time",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("valid-time",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("e",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("a",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("v",["th",null,null,false],false),[]),uix.compiler.aot._GT_el("th",uix.compiler.attributes.interpret_attrs("added",["th",null,null,false],false),[])])]),(function (){var iter__5480__auto__ = (function stack$examples$pages$local_db$layout_$_iter__95689(s__95690){
return (new cljs.core.LazySeq(null,(function (){
var s__95690__$1 = s__95690;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__95690__$1);
if(temp__5823__auto__){
var s__95690__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__95690__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95690__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95692 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95691 = (0);
while(true){
if((i__95691 < size__5479__auto__)){
var map__95712 = cljs.core._nth(c__5478__auto__,i__95691);
var map__95712__$1 = cljs.core.__destructure_map(map__95712);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95712__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95712__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071));
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95712__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95712__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
cljs.core.chunk_append(b__95692,uix.compiler.aot._GT_el("tbody",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_db.inst__GT_ISOString(tx_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_db.inst__GT_ISOString(valid_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[{'colSpan':(4)}],[])]),(function (){var iter__5480__auto__ = ((function (i__95691,map__95712,map__95712__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__95692,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props){
return (function stack$examples$pages$local_db$layout_$_iter__95689_$_iter__95720(s__95721){
return (new cljs.core.LazySeq(null,((function (i__95691,map__95712,map__95712__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__95692,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props){
return (function (){
var s__95721__$1 = s__95721;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__95721__$1);
if(temp__5823__auto____$1){
var s__95721__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95721__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__95721__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__95723 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__95722 = (0);
while(true){
if((i__95722 < size__5479__auto____$1)){
var vec__95728 = cljs.core._nth(c__5478__auto____$1,i__95722);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95728,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95728,(1),null);
cljs.core.chunk_append(b__95723,uix.compiler.alpha.component_element(stack.examples.pages.local_db.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]));

var G__95821 = (i__95722 + (1));
i__95722 = G__95821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95723),stack$examples$pages$local_db$layout_$_iter__95689_$_iter__95720(cljs.core.chunk_rest(s__95721__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95723),null);
}
} else {
var vec__95731 = cljs.core.first(s__95721__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95731,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95731,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(stack.examples.pages.local_db.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]),stack$examples$pages$local_db$layout_$_iter__95689_$_iter__95720(cljs.core.rest(s__95721__$2)));
}
} else {
return null;
}
break;
}
});})(i__95691,map__95712,map__95712__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__95692,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props))
,null,null));
});})(i__95691,map__95712,map__95712__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__95692,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props))
;
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (i__95691,iter__5480__auto__,map__95712,map__95712__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__95692,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props){
return (function (p1__95617_SHARP_,p2__95618_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__95617_SHARP_,p2__95618_SHARP_],null));
});})(i__95691,iter__5480__auto__,map__95712,map__95712__$1,id,tx_time,valid_time,datoms,c__5478__auto__,size__5479__auto__,b__95692,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props))
,datoms));
})()]));

var G__95828 = (i__95691 + (1));
i__95691 = G__95828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95692),stack$examples$pages$local_db$layout_$_iter__95689(cljs.core.chunk_rest(s__95690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95692),null);
}
} else {
var map__95736 = cljs.core.first(s__95690__$2);
var map__95736__$1 = cljs.core.__destructure_map(map__95736);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95736__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071));
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95736__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95736__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return cljs.core.cons(uix.compiler.aot._GT_el("tbody",[{'key':uix.compiler.attributes.keyword__GT_string(id)}],[uix.compiler.aot._GT_el("tr",[null],[uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_db.inst__GT_ISOString(tx_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",uix.compiler.attributes.interpret_attrs(stack.examples.pages.local_db.inst__GT_ISOString(valid_time),["td",null,null,false],false),[]),uix.compiler.aot._GT_el("td",[{'colSpan':(4)}],[])]),(function (){var iter__5480__auto__ = ((function (map__95736,map__95736__$1,id,tx_time,valid_time,datoms,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props){
return (function stack$examples$pages$local_db$layout_$_iter__95689_$_iter__95759(s__95760){
return (new cljs.core.LazySeq(null,(function (){
var s__95760__$1 = s__95760;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__95760__$1);
if(temp__5823__auto____$1){
var s__95760__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__95760__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__95760__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__95762 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__95761 = (0);
while(true){
if((i__95761 < size__5479__auto__)){
var vec__95765 = cljs.core._nth(c__5478__auto__,i__95761);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95765,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95765,(1),null);
cljs.core.chunk_append(b__95762,uix.compiler.alpha.component_element(stack.examples.pages.local_db.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]));

var G__95832 = (i__95761 + (1));
i__95761 = G__95832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95762),stack$examples$pages$local_db$layout_$_iter__95689_$_iter__95759(cljs.core.chunk_rest(s__95760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95762),null);
}
} else {
var vec__95770 = cljs.core.first(s__95760__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95770,(0),null);
var datom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95770,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(stack.examples.pages.local_db.datom_row,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null)],[]),stack$examples$pages$local_db$layout_$_iter__95689_$_iter__95759(cljs.core.rest(s__95760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__95736,map__95736__$1,id,tx_time,valid_time,datoms,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props))
;
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (iter__5480__auto__,map__95736,map__95736__$1,id,tx_time,valid_time,datoms,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props){
return (function (p1__95617_SHARP_,p2__95618_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__95617_SHARP_,p2__95618_SHARP_],null));
});})(iter__5480__auto__,map__95736,map__95736__$1,id,tx_time,valid_time,datoms,s__95690__$2,temp__5823__auto__,tasks,clj_props__45318__auto__,vec__95654,_props))
,datoms));
})()]),stack$examples$pages$local_db$layout_$_iter__95689(cljs.core.rest(s__95690__$2)));
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
var _STAR_current_component_STAR__orig_val__95773 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95774 = stack.examples.pages.local_db.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95774);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95773);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.local_db.layout.uix_component_QMARK_ = true);

(stack.examples.pages.local_db.layout.displayName = "stack.examples.pages.local-db/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95852 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95852.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95852.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.local_db.layout,"(dbfx/use-sub [:domain-tx-log])",null,null) : sig__45257__auto___95852.call(null, stack.examples.pages.local_db.layout,"(dbfx/use-sub [:domain-tx-log])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.local_db.layout,stack.examples.pages.local_db.layout.displayName);

(stack.examples.pages.local_db.layout.fast_refresh_signature = sig__45257__auto___95852);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.local_db.js.map
