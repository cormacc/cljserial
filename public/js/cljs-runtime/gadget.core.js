goog.provide('gadget.core');
if((typeof gadget !== 'undefined') && (typeof gadget.core !== 'undefined') && (typeof gadget.core.render_data !== 'undefined')){
} else {
gadget.core.render_data = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61428 = cljs.core.get_global_hierarchy;
return (fexpr__61428.cljs$core$IFn$_invoke$arity$0 ? fexpr__61428.cljs$core$IFn$_invoke$arity$0() : fexpr__61428.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("gadget.core","render-data"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof gadget !== 'undefined') && (typeof gadget.core !== 'undefined') && (typeof gadget.core.enabled_QMARK_ !== 'undefined')){
} else {
gadget.core.enabled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
if((typeof gadget !== 'undefined') && (typeof gadget.core !== 'undefined') && (typeof gadget.core.store !== 'undefined')){
} else {
gadget.core.store = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
}
gadget.core.deserialize = (function gadget$core$deserialize(payload){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(payload);
});
/**
 * This atom is used to bypass the debounce on render when processing actions from
 *   the inspector UI. It should probably be removed in favor of `action` calling
 *   on render without debouncing in a more direct fashion.
 */
gadget.core.pending_action_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
gadget.core.action = (function gadget$core$action(payload){
var map__61433 = gadget.core.deserialize(payload);
var map__61433__$1 = cljs.core.__destructure_map(map__61433);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61433__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61433__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(gadget.core.pending_action_QMARK_,true);

return gadget.actions.exec_action.cljs$core$IFn$_invoke$arity$3(gadget.core.store,action,args);
});
gadget.core.type_pref = (function gadget$core$type_pref(v){
if((v instanceof cljs.core.Keyword)){
return (0);
} else {
if((v instanceof cljs.core.Symbol)){
return (1);
} else {
if(typeof v === 'string'){
return (2);
} else {
if(typeof v === 'number'){
return (3);
} else {
if(cljs.core.map_QMARK_(v)){
return (4);
} else {
if(cljs.core.vector_QMARK_(v)){
return (5);
} else {
if(cljs.core.list_QMARK_(v)){
return (6);
} else {
if(cljs.core.set_QMARK_(v)){
return (7);
} else {
if(cljs.core.seq_QMARK_(v)){
return (8);
} else {
if(cljs.core.boolean_QMARK_(v)){
return (9);
} else {
return (10);

}
}
}
}
}
}
}
}
}
}
});
gadget.core.sort_keys = (function gadget$core$sort_keys(m){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(gadget.core.type_pref,cljs.core.first),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,cljs.core.first),m));
});
gadget.core.sort_vals = (function gadget$core$sort_vals(xs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(gadget.core.type_pref,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,xs));
});
gadget.core.key_order = (function gadget$core$key_order(ks){
var ks__$1 = cljs.core.reverse(ks);
return (function (p__61437){
var vec__61438 = p__61437;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61438,(1),null);
return (- ks__$1.indexOf(k));
});
});
if((typeof gadget !== 'undefined') && (typeof gadget.core !== 'undefined') && (typeof gadget.core.render !== 'undefined')){
} else {
gadget.core.render = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61441 = cljs.core.get_global_hierarchy;
return (fexpr__61441.cljs$core$IFn$_invoke$arity$0 ? fexpr__61441.cljs$core$IFn$_invoke$arity$0() : fexpr__61441.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("gadget.core","render"),(function (view,data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
gadget.core.render_with_view = (function gadget$core$render_with_view(view,label,path,raw){
return gadget.core.render.cljs$core$IFn$_invoke$arity$2(view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"raw","raw",1604651272),raw,new cljs.core.Keyword(null,"type","type",1174270348),gadget.datafy.synthetic_type(raw),new cljs.core.Keyword(null,"data","data",-232669377),gadget.datafy.datafy.cljs$core$IFn$_invoke$arity$1(raw),new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
gadget.core.bespoke_labels = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gadget","value","gadget/value",-1449947707),new cljs.core.Symbol(null,"Value","Value",2029092958,null),new cljs.core.Keyword("gadget","type","gadget/type",-1966547736),new cljs.core.Symbol(null,"Type","Type",156897312,null)], null);
gadget.core.prep_browser_entries = (function gadget$core$prep_browser_entries(label,path,entries){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (entry){
var vec__61448 = entry;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61448,(1),null);
var target_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"k","k",-2146297393),(cljs.core.truth_(new cljs.core.Keyword(null,"synthetic-key?","synthetic-key?",-1152633532).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(entry)))?null:gadget.core.render_with_view(new cljs.core.Keyword(null,"inline","inline",1399884222),label,path,cljs.core.get.cljs$core$IFn$_invoke$arity$3(gadget.core.bespoke_labels,k,k))),new cljs.core.Keyword(null,"v","v",21465059),gadget.core.render_with_view(new cljs.core.Keyword(null,"inline","inline",1399884222),label,target_path,v),new cljs.core.Keyword(null,"actions","actions",-812656882),((cljs.core.contains_QMARK_(gadget.core.bespoke_labels,k))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"go","go",-146946655),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-state","assoc-state",99948333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,new cljs.core.Keyword(null,"path","path",-188191168)], null),target_path], null)], null),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),label,target_path], null)], null)], null))], null);
}),entries);
});
gadget.core.prepare_path = (function gadget$core$prepare_path(path_elems){
var G__61462 = path_elems;
var vec__61463 = G__61462;
var seq__61464 = cljs.core.seq(vec__61463);
var first__61465 = cljs.core.first(seq__61464);
var seq__61464__$1 = cljs.core.next(seq__61464);
var x = first__61465;
var xs = seq__61464__$1;
var path = cljs.core.PersistentVector.EMPTY;
var res = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY], null);
var G__61462__$1 = G__61462;
var path__$1 = path;
var res__$1 = res;
while(true){
var vec__61492 = G__61462__$1;
var seq__61493 = cljs.core.seq(vec__61492);
var first__61494 = cljs.core.first(seq__61493);
var seq__61493__$1 = cljs.core.next(seq__61493);
var x__$1 = first__61494;
var xs__$1 = seq__61493__$1;
var path__$2 = path__$1;
var res__$2 = res__$1;
if(cljs.core.seq(xs__$1)){
var path__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$2,x__$1);
var button = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-state","assoc-state",99948333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(path__$3),new cljs.core.Keyword(null,"path","path",-188191168)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.rest(path__$3))], null)], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)], null);
var G__62264 = cljs.core.vec(xs__$1);
var G__62265 = path__$3;
var G__62266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","button","gadget/button",-1384474669),button], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));
G__61462__$1 = G__62264;
path__$1 = G__62265;
res__$1 = G__62266;
continue;
} else {
if(cljs.core.truth_(x__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.PersistentArrayMap.EMPTY,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" "], 0));
} else {
return res__$2;
}
}
break;
}
});
gadget.core.browser_data = (function gadget$core$browser_data(label,path,metadata,data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","browser","gadget/browser",1989527635),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),"-browser"].join(''),new cljs.core.Keyword(null,"metadata","metadata",1799301597),gadget.core.prep_browser_entries(label,path,metadata),new cljs.core.Keyword(null,"data","data",-232669377),gadget.core.prep_browser_entries(label,path,data),new cljs.core.Keyword(null,"path","path",-188191168),gadget.core.prepare_path(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null),path)),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),label,path], null)], null)], null)], null)], null);
});
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),(function (_,p__61580){
var map__61581 = p__61580;
var map__61581__$1 = cljs.core.__destructure_map(map__61581);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61581__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","keyword","gadget/keyword",1806026439),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0))], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"number","number",1570378438)], null),(function (_,p__61590){
var map__61591 = p__61590;
var map__61591__$1 = cljs.core.__destructure_map(map__61591);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61591__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","number","gadget/number",-2108612742),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0))], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),(function (_,p__61624){
var map__61627 = p__61624;
var map__61627__$1 = cljs.core.__destructure_map(map__61627);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61627__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","boolean","gadget/boolean",954688552),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0))], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"string","string",-1989541586)], null),(function (_,p__61629){
var map__61630 = p__61629;
var map__61630__$1 = cljs.core.__destructure_map(map__61630);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","string","gadget/string",-192737950),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0))], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"nil","nil",99600501)], null),(function (_,p__61633){
var map__61634 = p__61633;
var map__61634__$1 = cljs.core.__destructure_map(map__61634);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61634__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,"nil"], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(function (_,p__61648){
var map__61649 = p__61648;
var map__61649__$1 = cljs.core.__destructure_map(map__61649);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61649__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw)], null);
}));
gadget.core.constructor$ = (function gadget$core$constructor(v){
return cljs.core.second(cljs.core.re_find(/function (.*)\(/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(v))));
});
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"object","object",1474613949)], null),(function (_,p__61654){
var map__61655 = p__61654;
var map__61655__$1 = cljs.core.__destructure_map(map__61655);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61655__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,"object[",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.PersistentArrayMap.EMPTY,gadget.core.constructor$(raw)], null),"]",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Object.prototype.toString,raw.toString))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"{",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","string","gadget/string",-192737950),["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw.toString()),"\""].join('')], null),"}"], null))], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"date","date",-1463434462)], null),(function (_,p__61663){
var map__61664 = p__61663;
var map__61664__$1 = cljs.core.__destructure_map(map__61664);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61664__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var vec__61668 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0)),/ /);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61668,(0),null);
var str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61668,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","literal","gadget/literal",244519265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"str","str",1089608819),str], null)], null);
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),(function (_,p__61678){
var map__61680 = p__61678;
var map__61680__$1 = cljs.core.__destructure_map(map__61680);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61680__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var vec__61684 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([raw], 0)),/ /);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61684,(0),null);
var str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61684,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","literal","gadget/literal",244519265),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"str","str",1089608819),str], null)], null);
}));
gadget.core.inline_length_limit = (120);
gadget.core.too_long_for_inline_QMARK_ = (function gadget$core$too_long_for_inline_QMARK_(v){
return (gadget.core.inline_length_limit < ((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))).length));
});
gadget.core.inflect = (function gadget$core$inflect(n,w){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
return w;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(w),"s"].join('');
}
});
gadget.core.summarize = (function gadget$core$summarize(var_args){
var args__5732__auto__ = [];
var len__5726__auto___62306 = arguments.length;
var i__5727__auto___62307 = (0);
while(true){
if((i__5727__auto___62307 < len__5726__auto___62306)){
args__5732__auto__.push((arguments[i__5727__auto___62307]));

var G__62310 = (i__5727__auto___62307 + (1));
i__5727__auto___62307 = G__62310;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return gadget.core.summarize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(gadget.core.summarize.cljs$core$IFn$_invoke$arity$variadic = (function (pre,c,post,p__61726){
var vec__61727 = p__61726;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61727,(0),null);
var num = cljs.core.count(c);
var types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gadget.datafy.synthetic_type,c));
var w__$1 = (function (){var or__5002__auto__ = w;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(types))){
return cljs.core.name(cljs.core.first(types));
} else {
return "item";
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gadget.core.inflect(num,w__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(post)].join('');
}));

(gadget.core.summarize.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(gadget.core.summarize.cljs$lang$applyTo = (function (seq61719){
var G__61721 = cljs.core.first(seq61719);
var seq61719__$1 = cljs.core.next(seq61719);
var G__61722 = cljs.core.first(seq61719__$1);
var seq61719__$2 = cljs.core.next(seq61719__$1);
var G__61723 = cljs.core.first(seq61719__$2);
var seq61719__$3 = cljs.core.next(seq61719__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61721,G__61722,G__61723,seq61719__$3);
}));

gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"set","set",304602554)], null),(function (_,p__61744){
var map__61746 = p__61744;
var map__61746__$1 = cljs.core.__destructure_map(map__61746);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61746__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(gadget.core.too_long_for_inline_QMARK_(raw)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","link","gadget/link",-506224440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,gadget.core.summarize("#{",raw,"}")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","inline-coll","gadget/inline-coll",-1214432250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61742_SHARP_){
return gadget.core.render_with_view(new cljs.core.Keyword(null,"summary","summary",380847952),label,path,p1__61742_SHARP_);
}),gadget.core.sort_vals(raw))], null)], null);
}
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"vector","vector",1902966158)], null),(function (_,p__61752){
var map__61754 = p__61752;
var map__61754__$1 = cljs.core.__destructure_map(map__61754);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61754__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61754__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61754__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(gadget.core.too_long_for_inline_QMARK_(raw)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","link","gadget/link",-506224440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,gadget.core.summarize("[",raw,"]")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","inline-coll","gadget/inline-coll",-1214432250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61750_SHARP_){
return gadget.core.render_with_view(new cljs.core.Keyword(null,"summary","summary",380847952),label,path,p1__61750_SHARP_);
}),raw)], null)], null);
}
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"list","list",765357683)], null),(function (_,p__61765){
var map__61769 = p__61765;
var map__61769__$1 = cljs.core.__destructure_map(map__61769);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61769__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61769__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61769__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(gadget.core.too_long_for_inline_QMARK_(raw)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","link","gadget/link",-506224440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,gadget.core.summarize("'(",raw,")")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","inline-coll","gadget/inline-coll",-1214432250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'(",")"], null),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61761_SHARP_){
return gadget.core.render_with_view(new cljs.core.Keyword(null,"summary","summary",380847952),label,path,p1__61761_SHARP_);
}),raw)], null)], null);
}
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"map","map",1371690461)], null),(function (_,p__61775){
var map__61776 = p__61775;
var map__61776__$1 = cljs.core.__destructure_map(map__61776);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(gadget.core.too_long_for_inline_QMARK_(raw)){
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,gadget.core.sort_keys(raw));
if(gadget.core.too_long_for_inline_QMARK_(ks)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","link","gadget/link",-506224440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,gadget.core.summarize.cljs$core$IFn$_invoke$arity$variadic("{",ks,"}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["key"], 0))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","inline-coll","gadget/inline-coll",-1214432250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61771_SHARP_){
return gadget.core.render_with_view(new cljs.core.Keyword(null,"inline","inline",1399884222),label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__61771_SHARP_),p1__61771_SHARP_);
}),ks)], null)], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","inline-coll","gadget/inline-coll",-1214432250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61787){
var vec__61788 = p__61787;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61788,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61788,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gadget.core.render_with_view(new cljs.core.Keyword(null,"inline","inline",1399884222),label,path,k)," ",gadget.core.render_with_view(new cljs.core.Keyword(null,"inline","inline",1399884222),label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),v)], null);
}),gadget.core.sort_keys(raw)))], 0))], null)], null);
}
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"seq","seq",-1817803783)], null),(function (_,p__61798){
var map__61800 = p__61798;
var map__61800__$1 = cljs.core.__destructure_map(map__61800);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61800__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var lazy_sample = gadget.browsable.lazy_sample;
var selection = cljs.core.take.cljs$core$IFn$_invoke$arity$2(lazy_sample,raw);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selection),lazy_sample)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","link","gadget/link",-506224440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lazy_sample),"+ items, click to load 0-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lazy_sample),")"].join('')], null)], null);
} else {
if(gadget.core.too_long_for_inline_QMARK_(raw)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","link","gadget/link",-506224440),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","code","gadget/code",-1462534950),cljs.core.PersistentArrayMap.EMPTY,gadget.core.summarize("(",raw,")")], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","inline-coll","gadget/inline-coll",-1214432250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"brackets","brackets",1720097338),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__61796_SHARP_,p2__61797_SHARP_){
return gadget.core.render_with_view(new cljs.core.Keyword(null,"summary","summary",380847952),label,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__61796_SHARP_),p2__61797_SHARP_);
}),gadget.core.sort_vals(raw))], null)], null);

}
}
}));
gadget.core.render.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (view,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"summary","summary",380847952),view)){
return gadget.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inline","inline",1399884222),v);
} else {
var t = gadget.datafy.symbolic_type(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(v))){
return gadget.core.render.cljs$core$IFn$_invoke$arity$2(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"type","type",1174270348),t));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),view)){
return gadget.core.browser_data(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(v),cljs.core.meta(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v)),(((function (){var G__61824 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v);
if((!((G__61824 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__61824.gadget$browsable$Browsable$)))){
return true;
} else {
if((!G__61824.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(gadget.browsable.Browsable,G__61824);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(gadget.browsable.Browsable,G__61824);
}
})())?gadget.browsable.entries(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v)):((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v)))?gadget.core.sort_keys(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","type","gadget/type",-1966547736),(function (){var t__$1 = gadget.datafy.symbolic_type(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"object","object",1474613949),t__$1)){
return gadget.core.constructor$(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v));
} else {
return t__$1;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","value","gadget/value",-1449947707),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(v)], null)], null)
)));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6px"], null)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(v)], 0))], null);

}
}
}
}));
gadget.core.rendered = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"meta","meta",1499536964),null], null));
gadget.core.browser_hiccup = (function gadget$core$browser_hiccup(label,path,raw,data){
var state = cljs.core.deref(gadget.core.rendered);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(data),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(state))))){
return new cljs.core.Keyword(null,"hiccup","hiccup",1218876238).cljs$core$IFn$_invoke$arity$1(state);
} else {
var hiccup = gadget.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"raw","raw",1604651272),raw,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"type","type",1174270348),gadget.datafy.synthetic_type(raw)], null));
cljs.core.reset_BANG_(gadget.core.rendered,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),hiccup,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(data)], null));

return hiccup;
}
});
gadget.core.tx_summary = (function gadget$core$tx_summary(tx){
var G__61857 = new cljs.core.Keyword("gadget.tx","data","gadget.tx/data",1391464921).cljs$core$IFn$_invoke$arity$1(tx);
if((G__61857 == null)){
return null;
} else {
return gadget.core.render_with_view(new cljs.core.Keyword(null,"inline","inline",1399884222),"tx",cljs.core.PersistentVector.EMPTY,G__61857);
}
});
gadget.core.same_date_QMARK_ = (function gadget$core$same_date_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getYear(),b.getYear())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getMonth(),b.getMonth())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a.getDate(),b.getDate())))));
});
gadget.core.tx_hiccup = (function gadget$core$tx_hiccup(txes){
var now = (new Date());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gadget","tx-list","gadget/tx-list",1760073768),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61897_SHARP_){
var map__61933 = p1__61897_SHARP_;
var map__61933__$1 = cljs.core.__destructure_map(map__61933);
var instant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61933__$1,new cljs.core.Keyword("gadget.tx","instant","gadget.tx/instant",-1285387420));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.PersistentArrayMap.EMPTY,((gadget.core.same_date_QMARK_(instant,now))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1900) + instant.getYear())),"-",gadget.std.pad((instant.getMonth() + (1))),"-",gadget.std.pad(instant.getDate())," "].join('')),[gadget.std.pad(instant.getHours()),":",gadget.std.pad(instant.getMinutes()),":",gadget.std.pad(instant.getSeconds())," "].join('')], null),gadget.core.tx_summary(p1__61897_SHARP_)], null);
}),txes)], null);
});
gadget.core.prepare_data = (function gadget$core$prepare_data(window,p__61976){
var map__61978 = p__61976;
var map__61978__$1 = cljs.core.__destructure_map(map__61978);
var state = map__61978__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var txes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61978__$1,new cljs.core.Keyword(null,"txes","txes",-2122282744));
var raw = gadget.datafy.nav_in((function (){var or__5002__auto__ = (function (){var G__61985 = ref;
if((G__61985 == null)){
return null;
} else {
return cljs.core.deref(G__61985);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return data;
}
})(),path);
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true);
var current_tab = (cljs.core.truth_(expanded_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),new cljs.core.Keyword(null,"browser","browser",828191719)):null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),label], null):label),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-state","assoc-state",99948333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not(expanded_QMARK_)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Browse",new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"browser","browser",828191719),current_tab),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-state","assoc-state",99948333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null),new cljs.core.Keyword(null,"browser","browser",828191719)], null)], null)], null)], null),(cljs.core.truth_(ref)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Transactions",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-state","assoc-state",99948333),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577)], null),new cljs.core.Keyword(null,"txes","txes",-2122282744)], null)], null),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_tab,new cljs.core.Keyword(null,"txes","txes",-2122282744))], null)], null):null)),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(cljs.core.truth_(expanded_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"txes","txes",-2122282744),current_tab))?gadget.core.tx_hiccup(txes):gadget.core.browser_hiccup(label,path,raw,gadget.datafy.datafy.cljs$core$IFn$_invoke$arity$1(raw))):null)], null);
});
gadget.core.prepare = (function gadget$core$prepare(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__62020_SHARP_){
return gadget.core.prepare_data(new cljs.core.Keyword(null,"window","window",724519534).cljs$core$IFn$_invoke$arity$1(state),p1__62020_SHARP_);
}),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
gadget.core.render_data_now = (function gadget$core$render_data_now(f){
return gadget.core.render_data.cljs$core$IFn$_invoke$arity$1(f);
});
gadget.core.render_data_debounced = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(gadget.std.debounce(gadget.core.render_data_now,(250)));
gadget.core.set_render_debounce_ms_BANG_ = (function gadget$core$set_render_debounce_ms_BANG_(ms){
return cljs.core.reset_BANG_(gadget.core.render_data_debounced,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms,(0)))?gadget.core.render_data_now:gadget.std.debounce(gadget.core.render_data_now,ms)));
});
gadget.core.render_inspector = (function gadget$core$render_inspector(){
if(cljs.core.truth_(cljs.core.deref(gadget.core.enabled_QMARK_))){
var render_fn = (cljs.core.truth_(cljs.core.deref(gadget.core.pending_action_QMARK_))?gadget.core.render_data_now:cljs.core.deref(gadget.core.render_data_debounced));
if(cljs.core.truth_(cljs.core.deref(gadget.core.pending_action_QMARK_))){
cljs.core.reset_BANG_(gadget.core.pending_action_QMARK_,false);
} else {
}

var G__62050 = (function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"data","data",-232669377),gadget.core.prepare(cljs.core.deref(gadget.core.store))], null)], 0));
});
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__62050) : render_fn.call(null, G__62050));
} else {
return null;
}
});
cljs.core.add_watch(gadget.core.store,new cljs.core.Keyword("gadget","inspector","gadget/inspector",143964476),(function (_,___$1,___$2,___$3){
return gadget.core.render_inspector();
}));
gadget.core.atom_QMARK_ = (function gadget$core$atom_QMARK_(ref){
if((!((ref == null)))){
if((((ref.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === ref.cljs$core$IAtom$)))){
return true;
} else {
if((!ref.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,ref);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,ref);
}
});
gadget.core.inspectable_QMARK_ = (function gadget$core$inspectable_QMARK_(ref,p__62075){
var map__62078 = p__62075;
var map__62078__$1 = cljs.core.__destructure_map(map__62078);
var inspectable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62078__$1,new cljs.core.Keyword(null,"inspectable?","inspectable?",-1551564374));
var or__5002__auto__ = (!(cljs.core.ifn_QMARK_(inspectable_QMARK_)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var G__62089 = ((gadget.core.atom_QMARK_(ref))?cljs.core.deref(ref):ref);
return (inspectable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? inspectable_QMARK_.cljs$core$IFn$_invoke$arity$1(G__62089) : inspectable_QMARK_.call(null, G__62089));
}
});
gadget.core.now = (function gadget$core$now(){
return (new Date());
});
gadget.core.create_tx = (function gadget$core$create_tx(label,old_state,new_state){
var prev_tx_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gadget.core.store),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),label,new cljs.core.Keyword("gadget.tx","data","gadget.tx/data",1391464921)], null));
var limit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(gadget.core.store),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),label,new cljs.core.Keyword(null,"tx-limit","tx-limit",-981882788)], null),(100));
var tx_data = new cljs.core.Keyword("gadget.tx","data","gadget.tx/data",1391464921).cljs$core$IFn$_invoke$arity$1(new_state);
var valid_tx_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_tx_data,tx_data);
var tx = (function (){var G__62100 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gadget.tx","instant","gadget.tx/instant",-1285387420),gadget.core.now(),new cljs.core.Keyword("gadget.tx","state","gadget.tx/state",-416766669),new_state], null);
if(valid_tx_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__62100,new cljs.core.Keyword("gadget.tx","data","gadget.tx/data",1391464921),tx_data);
} else {
return G__62100;
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gadget.core.store,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),label], null),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"txes","txes",-2122282744),(function (p1__62094_SHARP_){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__62094_SHARP_,tx));
})], 0));
});
gadget.core.inspect = (function gadget$core$inspect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___62442 = arguments.length;
var i__5727__auto___62443 = (0);
while(true){
if((i__5727__auto___62443 < len__5726__auto___62442)){
args__5732__auto__.push((arguments[i__5727__auto___62443]));

var G__62445 = (i__5727__auto___62443 + (1));
i__5727__auto___62443 = G__62445;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return gadget.core.inspect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(gadget.core.inspect.cljs$core$IFn$_invoke$arity$variadic = (function (label,ref,p__62127){
var vec__62130 = p__62127;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62130,(0),null);
if(gadget.core.atom_QMARK_(ref)){
cljs.core.add_watch(ref,new cljs.core.Keyword("gadget","inspector","gadget/inspector",143964476),(function (_,___$1,old_state,new_state){
gadget.core.create_tx(label,old_state,new_state);

if(cljs.core.truth_(gadget.core.inspectable_QMARK_(new_state,opts))){
return gadget.core.render_inspector();
} else {
return null;
}
}));
} else {
}

if(gadget.core.atom_QMARK_(ref)){
gadget.core.create_tx(label,null,cljs.core.deref(ref));
} else {
}

if(cljs.core.truth_(gadget.core.inspectable_QMARK_(ref,opts))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gadget.core.store,cljs.core.update,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),label], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gadget.core.store),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),label], null)),((gadget.core.atom_QMARK_(ref))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ref], null))], 0))], 0));
} else {
}

return null;
}));

(gadget.core.inspect.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(gadget.core.inspect.cljs$lang$applyTo = (function (seq62107){
var G__62108 = cljs.core.first(seq62107);
var seq62107__$1 = cljs.core.next(seq62107);
var G__62109 = cljs.core.first(seq62107__$1);
var seq62107__$2 = cljs.core.next(seq62107__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62108,G__62109,seq62107__$2);
}));

gadget.core.create_atom = (function gadget$core$create_atom(var_args){
var args__5732__auto__ = [];
var len__5726__auto___62447 = arguments.length;
var i__5727__auto___62448 = (0);
while(true){
if((i__5727__auto___62448 < len__5726__auto___62447)){
args__5732__auto__.push((arguments[i__5727__auto___62448]));

var G__62449 = (i__5727__auto___62448 + (1));
i__5727__auto___62448 = G__62449;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return gadget.core.create_atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(gadget.core.create_atom.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__62166){
var vec__62169 = p__62166;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62169,(0),null);
var ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(val);
gadget.core.inspect(label,ref);

return ref;
}));

(gadget.core.create_atom.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(gadget.core.create_atom.cljs$lang$applyTo = (function (seq62156){
var G__62157 = cljs.core.first(seq62156);
var seq62156__$1 = cljs.core.next(seq62156);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62157,seq62156__$1);
}));

gadget.core.pause_BANG_ = (function gadget$core$pause_BANG_(){
return cljs.core.reset_BANG_(gadget.core.enabled_QMARK_,false);
});
gadget.core.resume_BANG_ = (function gadget$core$resume_BANG_(){
cljs.core.reset_BANG_(gadget.core.enabled_QMARK_,true);

return gadget.core.render_inspector();
});
gadget.actions.exec_action.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (store,_,p__62189){
var vec__62190 = p__62189;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62190,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62190,(1),null);
return gadget.core.render_inspector();
}));

//# sourceMappingURL=gadget.core.js.map
