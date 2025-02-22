goog.provide('re_frame.register.alpha');
if((typeof re_frame !== 'undefined') && (typeof re_frame.register !== 'undefined') && (typeof re_frame.register.alpha !== 'undefined') && (typeof re_frame.register.alpha.reg !== 'undefined')){
} else {
re_frame.register.alpha.reg = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__86628 = cljs.core.get_global_hierarchy;
return (fexpr__86628.cljs$core$IFn$_invoke$arity$0 ? fexpr__86628.cljs$core$IFn$_invoke$arity$0() : fexpr__86628.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-frame.register.alpha","reg"),(function() { 
var G__86638__delegate = function (kind,_){
return kind;
};
var G__86638 = function (kind,var_args){
var _ = null;
if (arguments.length > 1) {
var G__86640__i = 0, G__86640__a = new Array(arguments.length -  1);
while (G__86640__i < G__86640__a.length) {G__86640__a[G__86640__i] = arguments[G__86640__i + 1]; ++G__86640__i;}
  _ = new cljs.core.IndexedSeq(G__86640__a,0,null);
} 
return G__86638__delegate.call(this,kind,_);};
G__86638.cljs$lang$maxFixedArity = 1;
G__86638.cljs$lang$applyTo = (function (arglist__86643){
var kind = cljs.core.first(arglist__86643);
var _ = cljs.core.rest(arglist__86643);
return G__86638__delegate(kind,_);
});
G__86638.cljs$core$IFn$_invoke$arity$variadic = G__86638__delegate;
return G__86638;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
re_frame.register.alpha.lifecycle__GT_method = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);

//# sourceMappingURL=re_frame.register.alpha.js.map
