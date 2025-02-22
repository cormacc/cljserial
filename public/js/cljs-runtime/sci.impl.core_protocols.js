goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__71590 = cljs.core.get_global_hierarchy;
return (fexpr__71590.cljs$core$IFn$_invoke$arity$0 ? fexpr__71590.cljs$core$IFn$_invoke$arity$0() : fexpr__71590.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__71597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__71597.cljs$core$IFn$_invoke$arity$1 ? fexpr__71597.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__71597.call(null, ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__71633 = cljs.core.get_global_hierarchy;
return (fexpr__71633.cljs$core$IFn$_invoke$arity$0 ? fexpr__71633.cljs$core$IFn$_invoke$arity$0() : fexpr__71633.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__71651 = cljs.core.get_global_hierarchy;
return (fexpr__71651.cljs$core$IFn$_invoke$arity$0 ? fexpr__71651.cljs$core$IFn$_invoke$arity$0() : fexpr__71651.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__71757 = null;
var G__71757__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__71666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__71666.cljs$core$IFn$_invoke$arity$2 ? fexpr__71666.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__71666.call(null, ref,f));
});
var G__71757__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__71669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__71669.cljs$core$IFn$_invoke$arity$3 ? fexpr__71669.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__71669.call(null, ref,f,a1));
});
var G__71757__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__71671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__71671.cljs$core$IFn$_invoke$arity$4 ? fexpr__71671.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__71671.call(null, ref,f,a1,a2));
});
var G__71757__5 = (function() { 
var G__71762__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__71762 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__71766__i = 0, G__71766__a = new Array(arguments.length -  4);
while (G__71766__i < G__71766__a.length) {G__71766__a[G__71766__i] = arguments[G__71766__i + 4]; ++G__71766__i;}
  args = new cljs.core.IndexedSeq(G__71766__a,0,null);
} 
return G__71762__delegate.call(this,ref,f,a1,a2,args);};
G__71762.cljs$lang$maxFixedArity = 4;
G__71762.cljs$lang$applyTo = (function (arglist__71767){
var ref = cljs.core.first(arglist__71767);
arglist__71767 = cljs.core.next(arglist__71767);
var f = cljs.core.first(arglist__71767);
arglist__71767 = cljs.core.next(arglist__71767);
var a1 = cljs.core.first(arglist__71767);
arglist__71767 = cljs.core.next(arglist__71767);
var a2 = cljs.core.first(arglist__71767);
var args = cljs.core.rest(arglist__71767);
return G__71762__delegate(ref,f,a1,a2,args);
});
G__71762.cljs$core$IFn$_invoke$arity$variadic = G__71762__delegate;
return G__71762;
})()
;
G__71757 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__71757__2.call(this,ref,f);
case 3:
return G__71757__3.call(this,ref,f,a1);
case 4:
return G__71757__4.call(this,ref,f,a1,a2);
default:
var G__71768 = null;
if (arguments.length > 4) {
var G__71769__i = 0, G__71769__a = new Array(arguments.length -  4);
while (G__71769__i < G__71769__a.length) {G__71769__a[G__71769__i] = arguments[G__71769__i + 4]; ++G__71769__i;}
G__71768 = new cljs.core.IndexedSeq(G__71769__a,0,null);
}
return G__71757__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__71768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71757.cljs$lang$maxFixedArity = 4;
G__71757.cljs$lang$applyTo = G__71757__5.cljs$lang$applyTo;
G__71757.cljs$core$IFn$_invoke$arity$2 = G__71757__2;
G__71757.cljs$core$IFn$_invoke$arity$3 = G__71757__3;
G__71757.cljs$core$IFn$_invoke$arity$4 = G__71757__4;
G__71757.cljs$core$IFn$_invoke$arity$variadic = G__71757__5.cljs$core$IFn$_invoke$arity$variadic;
return G__71757;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__71680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__71680.cljs$core$IFn$_invoke$arity$2 ? fexpr__71680.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__71680.call(null, ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__71773__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__71773 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__71775__i = 0, G__71775__a = new Array(arguments.length -  2);
while (G__71775__i < G__71775__a.length) {G__71775__a[G__71775__i] = arguments[G__71775__i + 2]; ++G__71775__i;}
  args = new cljs.core.IndexedSeq(G__71775__a,0,null);
} 
return G__71773__delegate.call(this,ref,f,args);};
G__71773.cljs$lang$maxFixedArity = 2;
G__71773.cljs$lang$applyTo = (function (arglist__71776){
var ref = cljs.core.first(arglist__71776);
arglist__71776 = cljs.core.next(arglist__71776);
var f = cljs.core.first(arglist__71776);
var args = cljs.core.rest(arglist__71776);
return G__71773__delegate(ref,f,args);
});
G__71773.cljs$core$IFn$_invoke$arity$variadic = G__71773__delegate;
return G__71773;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___71779 = arguments.length;
var i__5727__auto___71780 = (0);
while(true){
if((i__5727__auto___71780 < len__5726__auto___71779)){
args__5732__auto__.push((arguments[i__5727__auto___71780]));

var G__71781 = (i__5727__auto___71780 + (1));
i__5727__auto___71780 = G__71781;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq71698){
var G__71699 = cljs.core.first(seq71698);
var seq71698__$1 = cljs.core.next(seq71698);
var G__71700 = cljs.core.first(seq71698__$1);
var seq71698__$2 = cljs.core.next(seq71698__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71699,G__71700,seq71698__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
