goog.provide('gadget.actions');
gadget.actions.to_clipboard = (function gadget$actions$to_clipboard(text){
var text_area = document.createElement("textarea");
(text_area.textContent = text);

document.body.appendChild(text_area);

text_area.select();

document.execCommand("copy");

text_area.blur();

return document.body.removeChild(text_area);
});
if((typeof gadget !== 'undefined') && (typeof gadget.actions !== 'undefined') && (typeof gadget.actions.exec_action !== 'undefined')){
} else {
gadget.actions.exec_action = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61399 = cljs.core.get_global_hierarchy;
return (fexpr__61399.cljs$core$IFn$_invoke$arity$0 ? fexpr__61399.cljs$core$IFn$_invoke$arity$0() : fexpr__61399.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("gadget.actions","exec-action"),(function (store,action,args){
return action;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
gadget.actions.exec_action.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"assoc-state","assoc-state",99948333),(function (store,_,p__61402){
var vec__61403 = p__61402;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61403,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc_in,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),k),v);
}));
gadget.actions.exec_action.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),(function (store,_,p__61412){
var vec__61413 = p__61412;
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61413,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61413,(1),null);
return gadget.actions.to_clipboard(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gadget.datafy.nav_in(gadget.std.state_data(cljs.core.deref(store),label),path)], 0)));
}));
gadget.actions.exec_action.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"set-window-size","set-window-size",1488251643),(function (store,_,p__61416){
var vec__61417 = p__61416;
var map__61420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61417,(0),null);
var map__61420__$1 = cljs.core.__destructure_map(map__61420);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61420__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(store,cljs.core.assoc,new cljs.core.Keyword(null,"window","window",724519534),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
}));
gadget.actions.exec_action.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (store,action,args){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported action",action], 0));
}));

//# sourceMappingURL=gadget.actions.js.map
