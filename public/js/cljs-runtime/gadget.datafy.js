goog.provide('gadget.datafy');
gadget.datafy.type_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
gadget.datafy.add_type_inference = (function gadget$datafy$add_type_inference(f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(gadget.datafy.type_fns,cljs.core.conj,f);
});
gadget.datafy.symbolic_type = (function gadget$datafy$symbolic_type(v){
if(typeof v === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((v instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(typeof v === 'number'){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(cljs.core.boolean_QMARK_(v)){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
} else {
if(cljs.core.map_QMARK_(v)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(v)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.list_QMARK_(v)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if((v == null)){
return new cljs.core.Keyword(null,"nil","nil",99600501);
} else {
if(cljs.core.set_QMARK_(v)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((v instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(v)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if(cljs.core.uuid_QMARK_(v)){
return new cljs.core.Keyword(null,"uuid","uuid",-2145095719);
} else {
if(gadget.std.date_QMARK_(v)){
return new cljs.core.Keyword(null,"date","date",-1463434462);
} else {
return new cljs.core.Keyword(null,"object","object",1474613949);

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
}
}
}
});
gadget.datafy.synthetic_type = (function gadget$datafy$synthetic_type(value){
var G__61369 = cljs.core.deref(gadget.datafy.type_fns);
var vec__61370 = G__61369;
var seq__61371 = cljs.core.seq(vec__61370);
var first__61372 = cljs.core.first(seq__61371);
var seq__61371__$1 = cljs.core.next(seq__61371);
var f = first__61372;
var fs = seq__61371__$1;
var G__61369__$1 = G__61369;
while(true){
var vec__61373 = G__61369__$1;
var seq__61374 = cljs.core.seq(vec__61373);
var first__61375 = cljs.core.first(seq__61374);
var seq__61374__$1 = cljs.core.next(seq__61374);
var f__$1 = first__61375;
var fs__$1 = seq__61374__$1;
var or__5002__auto__ = (cljs.core.truth_(f__$1)?(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(value) : f__$1.call(null, value)):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5821__auto__ = cljs.core.seq(fs__$1);
if(temp__5821__auto__){
var fs__$2 = temp__5821__auto__;
var G__61396 = fs__$2;
G__61369__$1 = G__61396;
continue;
} else {
return gadget.datafy.symbolic_type(value);
}
}
break;
}
});
if((typeof gadget !== 'undefined') && (typeof gadget.datafy !== 'undefined') && (typeof gadget.datafy.datafy !== 'undefined')){
} else {
gadget.datafy.datafy = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61387 = cljs.core.get_global_hierarchy;
return (fexpr__61387.cljs$core$IFn$_invoke$arity$0 ? fexpr__61387.cljs$core$IFn$_invoke$arity$0() : fexpr__61387.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("gadget.datafy","datafy"),(function (data){
return gadget.datafy.synthetic_type(data);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
gadget.datafy.datafy.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (data){
return clojure.datafy.datafy(data);
}));
gadget.datafy.nav_in = (function gadget$datafy$nav_in(data,path){
while(true){
var temp__5821__auto__ = cljs.core.first(path);
if(cljs.core.truth_(temp__5821__auto__)){
var p = temp__5821__auto__;
var data__$1 = gadget.datafy.datafy.cljs$core$IFn$_invoke$arity$1(data);
var navigable = (((((!((data__$1 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === data__$1.gadget$browsable$Browsable$))))?true:(((!data__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(gadget.browsable.Browsable,data__$1):false)):cljs.core.native_satisfies_QMARK_(gadget.browsable.Browsable,data__$1)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,gadget.browsable.entries(data__$1)):data__$1);
var G__61400 = clojure.datafy.nav(data__$1,p,cljs.core.get.cljs$core$IFn$_invoke$arity$2(navigable,p));
var G__61401 = cljs.core.rest(path);
data = G__61400;
path = G__61401;
continue;
} else {
return data;
}
break;
}
});

//# sourceMappingURL=gadget.datafy.js.map
