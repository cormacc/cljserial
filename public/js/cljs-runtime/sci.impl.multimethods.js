goog.provide('sci.impl.multimethods');
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
sci.impl.multimethods.check_valid_options = (function sci$impl$multimethods$check_valid_options(var_args){
var args__5732__auto__ = [];
var len__5726__auto___71545 = arguments.length;
var i__5727__auto___71546 = (0);
while(true){
if((i__5727__auto___71546 < len__5726__auto___71545)){
args__5732__auto__.push((arguments[i__5727__auto___71546]));

var G__71547 = (i__5727__auto___71546 + (1));
i__5727__auto___71546 = G__71547;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
var message = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71488_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__71488_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
throw (new Error(message));
} else {
return null;
}
}));

(sci.impl.multimethods.check_valid_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.multimethods.check_valid_options.cljs$lang$applyTo = (function (seq71490){
var G__71491 = cljs.core.first(seq71490);
var seq71490__$1 = cljs.core.next(seq71490);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71491,seq71490__$1);
}));

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attr-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 * 
 *   :default
 * 
 *   The default dispatch value, defaults to :default
 * 
 *   :hierarchy
 * 
 *   The value used for hierarchical dispatch (e.g. ::square is-a ::shape)
 * 
 *   Hierarchies are type-like relationships that do not depend upon type
 *   inheritance. By default Clojure's multimethods dispatch off of a
 *   global hierarchy map.  However, a hierarchy relationship can be
 *   created with the derive function used to augment the root ancestor
 *   created with make-hierarchy.
 * 
 *   Multimethods expect the value of the hierarchy option to be supplied as
 *   a reference type e.g. a var (i.e. via the Var-quote dispatch macro #'
 *   or the var special form).
 */
sci.impl.multimethods.defmulti = (function sci$impl$multimethods$defmulti(var_args){
var args__5732__auto__ = [];
var len__5726__auto___71550 = arguments.length;
var i__5727__auto___71551 = (0);
while(true){
if((i__5727__auto___71551 < len__5726__auto___71550)){
args__5732__auto__.push((arguments[i__5727__auto___71551]));

var G__71552 = (i__5727__auto___71551 + (1));
i__5727__auto___71551 = G__71552;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return sci.impl.multimethods.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(sci.impl.multimethods.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_name__$1 = cljs.core.with_meta(mm_name,m__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
var hierarchy = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),sci.impl.hierarchies.global_hierarchy(ctx));
sci.impl.multimethods.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defonce","cljs.core/defonce",-1291833100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(mm_name__$1,m__$2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__71500__auto__","method-table__71500__auto__",-1352624935,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__71501__auto__","prefer-table__71501__auto__",-1983831900,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__71502__auto__","method-cache__71502__auto__",-1546384171,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__71503__auto__","cached-hierarchy__71503__auto__",-523663763,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","multi-fn-impl","cljs.core/multi-fn-impl",1399453884,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(mm_name__$1)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,hierarchy,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__71500__auto__","method-table__71500__auto__",-1352624935,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__71501__auto__","prefer-table__71501__auto__",-1983831900,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__71502__auto__","method-cache__71502__auto__",-1546384171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__71503__auto__","cached-hierarchy__71503__auto__",-523663763,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.multimethods.defmulti.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.multimethods.defmulti.cljs$lang$applyTo = (function (seq71505){
var G__71506 = cljs.core.first(seq71505);
var seq71505__$1 = cljs.core.next(seq71505);
var G__71507 = cljs.core.first(seq71505__$1);
var seq71505__$2 = cljs.core.next(seq71505__$1);
var G__71508 = cljs.core.first(seq71505__$2);
var seq71505__$3 = cljs.core.next(seq71505__$2);
var G__71509 = cljs.core.first(seq71505__$3);
var seq71505__$4 = cljs.core.next(seq71505__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71506,G__71507,G__71508,G__71509,seq71505__$4);
}));

sci.impl.multimethods.multi_fn_QMARK__impl = (function sci$impl$multimethods$multi_fn_QMARK__impl(x){
return (x instanceof cljs.core.MultiFn);
});
sci.impl.multimethods.multi_fn_impl = (function sci$impl$multimethods$multi_fn_impl(name,dispatch_fn,default$,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
return (new cljs.core.MultiFn(name,dispatch_fn,default$,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy));
});
sci.impl.multimethods.multi_fn_add_method_impl = (function sci$impl$multimethods$multi_fn_add_method_impl(multifn,dispatch_val,f){
return cljs.core._add_method(multifn,dispatch_val,f);
});
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
sci.impl.multimethods.defmethod = (function sci$impl$multimethods$defmethod(var_args){
var args__5732__auto__ = [];
var len__5726__auto___71559 = arguments.length;
var i__5727__auto___71560 = (0);
while(true){
if((i__5727__auto___71560 < len__5726__auto___71559)){
args__5732__auto__.push((arguments[i__5727__auto___71560]));

var G__71561 = (i__5727__auto___71560 + (1));
i__5727__auto___71560 = G__71561;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((4) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((4)),(0),null)):null);
return sci.impl.multimethods.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5733__auto__);
});

(sci.impl.multimethods.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_x,_y,multifn,dispatch_val,fn_tail){
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","multi-fn-add-method-impl","clojure.core/multi-fn-add-method-impl",-1293834231,null),(new cljs.core.List(null,multifn,(new cljs.core.List(null,dispatch_val,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),fn_tail),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(sci.impl.multimethods.defmethod.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.multimethods.defmethod.cljs$lang$applyTo = (function (seq71525){
var G__71526 = cljs.core.first(seq71525);
var seq71525__$1 = cljs.core.next(seq71525);
var G__71527 = cljs.core.first(seq71525__$1);
var seq71525__$2 = cljs.core.next(seq71525__$1);
var G__71528 = cljs.core.first(seq71525__$2);
var seq71525__$3 = cljs.core.next(seq71525__$2);
var G__71529 = cljs.core.first(seq71525__$3);
var seq71525__$4 = cljs.core.next(seq71525__$3);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71526,G__71527,G__71528,G__71529,seq71525__$4);
}));


//# sourceMappingURL=sci.impl.multimethods.js.map
