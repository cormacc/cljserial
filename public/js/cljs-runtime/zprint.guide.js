goog.provide('zprint.guide');
/**
 * Given a structure which starts with defn, create a guide for the
 *   'rules of defn', an alternative approach to formatting a defn.
 */
zprint.guide.rodguide = (function zprint$guide$rodguide(var_args){
var G__66579 = arguments.length;
switch (G__66579) {
case 0:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rodguide";
}));

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$1 = (function (rod_options){
return "rodguide";
}));

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
return zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,options,len,sexpr);
}));

(zprint.guide.rodguide.cljs$core$IFn$_invoke$arity$4 = (function (rod_options,options,len,sexpr){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sexpr)),"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sexpr)),"defn-")))){
var multi_arity_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(rod_options,new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true);
var docstring_QMARK_ = typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2)) === 'string';
var rest = cljs.core.nthnext(sexpr,((docstring_QMARK_)?(3):(2)));
var multi_arity_QMARK_ = (!(cljs.core.vector_QMARK_(cljs.core.first(rest))));
var rest__$1 = ((multi_arity_QMARK_)?rest:cljs.core.next(rest));
var rest_guide = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(rest__$1) - (1)),new cljs.core.Keyword(null,"element","element",1974019749));
var rest_guide__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_((function (){var and__5000__auto__ = multi_arity_QMARK_;
if(and__5000__auto__){
return multi_arity_nl_QMARK_;
} else {
return and__5000__auto__;
}
})())?cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic(rest_guide,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"newline","newline",1790071323)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"newline","newline",1790071323))], 0)):cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(rest_guide,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"newline","newline",1790071323)))));
var rest_guide__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest_guide__$1,new cljs.core.Keyword(null,"element","element",1974019749));
var guide = (function (){var G__66599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749)], null);
var G__66599__$1 = ((docstring_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66599,new cljs.core.Keyword(null,"newline","newline",1790071323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], 0)):G__66599);
var G__66599__$2 = (((!(multi_arity_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66599__$1,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"newline","newline",1790071323)], 0)):G__66599__$1);
var G__66599__$3 = ((((multi_arity_QMARK_) && ((!(docstring_QMARK_)))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66599__$2,new cljs.core.Keyword(null,"newline","newline",1790071323)):G__66599__$2);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66599__$3,rest_guide__$2);

})();
var option_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
if(multi_arity_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"vector","vector",1902966158)], null)], null)], null));
} else {
return option_map;
}
} else {
return null;
}
}));

(zprint.guide.rodguide.cljs$lang$maxFixedArity = 4);

/**
 * Return true if a constant or vector.
 */
zprint.guide.constant_or_vector_QMARK_ = (function zprint$guide$constant_or_vector_QMARK_(element){
return ((typeof element === 'number') || (((typeof element === 'string') || (((cljs.core.vector_QMARK_(element)) || ((((element instanceof cljs.core.Keyword)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,true)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,false)))))))))));
});
zprint.guide.count_constants = (function zprint$guide$count_constants(p__66617,element){
var vec__66618 = p__66617;
var constant_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66618,(0),null);
var possible_constant_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66618,(1),null);
if(cljs.core.truth_(possible_constant_QMARK_)){
if(zprint.guide.constant_or_vector_QMARK_(element)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(constant_count + (1)),cljs.core.not(possible_constant_QMARK_)], null);
} else {
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [constant_count,possible_constant_QMARK_], null));
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [constant_count,cljs.core.not(possible_constant_QMARK_)], null);
}
});
/**
 * Reimplement :style :moustache with guides.
 */
zprint.guide.moustacheguide = (function zprint$guide$moustacheguide(var_args){
var G__66628 = arguments.length;
switch (G__66628) {
case 0:
return zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "moustacheguide";
}));

(zprint.guide.moustacheguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var rev_sexpr = cljs.core.reverse(sexpr);
var vec__66630 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.guide.count_constants,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),false], null),rev_sexpr);
var constant_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66630,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66630,(1),null);
var pair_count = (constant_count * (2));
var pair_guide = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pair_count,new cljs.core.Keyword(null,"element","element",1974019749)));
var pair_guide__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pair_guide,new cljs.core.Keyword(null,"group-end","group-end",-574931147));
var pair_guide__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pair_guide__$1,new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237));
var non_pair_count = (cljs.core.count(sexpr) - pair_count);
var non_pair_guide = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(non_pair_count,new cljs.core.Keyword(null,"element","element",1974019749));
var non_pair_guide__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"newline","newline",1790071323),non_pair_guide));
var guide = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(non_pair_guide__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], 0));
var guide__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guide,pair_guide__$2);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"moustacheguide: sexpr",sexpr,"pair-count:",pair_count,"output:",guide__$1], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),false], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}));

(zprint.guide.moustacheguide.cljs$lang$maxFixedArity = 3);

/**
 * Given two arguments, an s-expression and a string, if the s-expression
 *   is actually a string, add a double quote on to the beginning and end of
 *   the string.
 */
zprint.guide.add_double_quotes = (function zprint$guide$add_double_quotes(sexpr,s){
if(typeof sexpr === 'string'){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
} else {
return s;
}
});
/**
 * Format are test functions.  Call it with (partial {} areguide), where
 *   the map can be {:justify? true} to justify the various rows. It will
 *   use {:pair {:justify {:max-variance n}}} for the variance, but you can
 *   give it a variance to use with {:max-variance n} in the map which is
 *   its first argument.
 */
zprint.guide.areguide = (function zprint$guide$areguide(var_args){
var G__66643 = arguments.length;
switch (G__66643) {
case 0:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "areguide";
}));

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$1 = (function (are_options){
return "areguide";
}));

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
return zprint.guide.areguide.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,options,len,sexpr);
}));

(zprint.guide.areguide.cljs$core$IFn$_invoke$arity$4 = (function (are_options,options,len,sexpr){
var justify_QMARK_ = new cljs.core.Keyword(null,"justify?","justify?",294994148).cljs$core$IFn$_invoke$arity$1(are_options);
var max_variance = (cljs.core.truth_(justify_QMARK_)?(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(are_options);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options)));
}
})():null);
var caller_options = (function (){var fexpr__66648 = new cljs.core.Keyword(null,"caller","caller",-1275362879).cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__66648.cljs$core$IFn$_invoke$arity$1 ? fexpr__66648.cljs$core$IFn$_invoke$arity$1(options) : fexpr__66648.call(null, options));
})();
var current_indent = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874).cljs$core$IFn$_invoke$arity$1(caller_options);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(caller_options);
}
})();
var are_indent = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(are_options);
var table_indent = (current_indent + (function (){var or__5002__auto__ = are_indent;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return current_indent;
}
})());
var arg_vec_len = cljs.core.count(cljs.core.second(sexpr));
var test_len = (cljs.core.count(sexpr) - (3));
var rows = (test_len / arg_vec_len);
var excess_tests = (test_len - (rows * arg_vec_len));
var alignment_vec = (cljs.core.truth_(justify_QMARK_)?(function (){var zfn_map = new cljs.core.Keyword(null,"zfn-map","zfn-map",1068295789).cljs$core$IFn$_invoke$arity$1(options);
var zloc_seq_nc = (function (){var G__66653 = cljs.core.identity;
var G__66654 = new cljs.core.Keyword(null,"zloc","zloc",-2123059767).cljs$core$IFn$_invoke$arity$1(options);
var fexpr__66652 = new cljs.core.Keyword(null,"zmap-no-comment","zmap-no-comment",1484161325).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__66652.cljs$core$IFn$_invoke$arity$2 ? fexpr__66652.cljs$core$IFn$_invoke$arity$2(G__66653,G__66654) : fexpr__66652.call(null, G__66653,G__66654));
})();
var args = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),zloc_seq_nc);
var arg_strs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"zstring","zstring",-1532582237).cljs$core$IFn$_invoke$arity$1(zfn_map),args);
var seq_of_seqs = cljs.core.partition.cljs$core$IFn$_invoke$arity$4(arg_vec_len,arg_vec_len,cljs.core.PersistentVector.EMPTY,arg_strs);
var max_width_vec = zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$4(max_variance,seq_of_seqs,null,new cljs.core.Keyword(null,"no-string-adj?","no-string-adj?",-147285501));
var alignment_vec = zprint.util.cumulative_alignment(max_width_vec);
return alignment_vec;
})():null);
var mark_guide = cljs.core.vec(cljs.core.flatten(cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mark-at-indent","mark-at-indent",-126657684)),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),alignment_vec)));
var new_row_guide = (function (){var G__66657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"indent","indent",-148200125),table_indent], null);
var G__66657__$1 = (((!(cljs.core.empty_QMARK_(alignment_vec))))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66657,cljs.core.interleave.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"align","align",1964212802)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(alignment_vec)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"element","element",1974019749))], 0))):G__66657);
var G__66657__$2 = ((cljs.core.empty_QMARK_(alignment_vec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66657__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((arg_vec_len - (1)),new cljs.core.Keyword(null,"element","element",1974019749))):G__66657__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66657__$2,new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"newline","newline",1790071323)], 0));

})();
var multi_row_guide = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,new_row_guide));
var guide = (function (){var G__66658 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"newline","newline",1790071323)], null),mark_guide),multi_row_guide);
if((excess_tests > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66658,new cljs.core.Keyword(null,"element-*","element-*",-948937262));
} else {
return G__66658;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}));

(zprint.guide.areguide.cljs$lang$maxFixedArity = 4);

/**
 * Format are test functions, no justification.
 */
zprint.guide.areguide_basic = (function zprint$guide$areguide_basic(var_args){
var G__66662 = arguments.length;
switch (G__66662) {
case 0:
return zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$0 = (function (){
return "areguide";
}));

(zprint.guide.areguide_basic.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var arg_vec_len = cljs.core.count(cljs.core.second(sexpr));
var beginning = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),sexpr);
var test_len = (cljs.core.count(sexpr) - (3));
var rows = (test_len / arg_vec_len);
var excess_tests = (test_len - (rows * arg_vec_len));
var single_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(arg_vec_len,new cljs.core.Keyword(null,"element","element",1974019749)));
var row_guide = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,single_row));
var guide = (function (){var G__66665 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317)], null),row_guide);
if((excess_tests > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66665,new cljs.core.Keyword(null,"newline","newline",1790071323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element-*","element-*",-948937262)], 0));
} else {
return G__66665;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}));

(zprint.guide.areguide_basic.cljs$lang$maxFixedArity = 3);

/**
 * Justify the first things in a variety of settings.  The first argument
 *   is the things to recognize, and can be :require, :require-macros, or 
 *   :import. :require and :require-macros are handled the same, and :import
 *   is handled differently since it has the values all in the same expression.
 *   Handles sequences with lists or vectors. Note that it justifies the :as
 *   and :refer as pairs, so a simple :as doesn't justify with anything, and
 *   so looks out of place with the other vector's :refers.
 */
zprint.guide.jrequireguide = (function zprint$guide$jrequireguide(var_args){
var G__66680 = arguments.length;
switch (G__66680) {
case 0:
return zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "jrequireguide";
}));

(zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$1 = (function (keyword){
return "jrequireguide";
}));

(zprint.guide.jrequireguide.cljs$core$IFn$_invoke$arity$4 = (function (keyword,options,len,sexpr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sexpr),keyword)){
var vectors_PLUS_lists = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66668_SHARP_){
return ((cljs.core.vector_QMARK_(p1__66668_SHARP_)) || (cljs.core.list_QMARK_(p1__66668_SHARP_)));
}),sexpr);
if((!(cljs.core.empty_QMARK_(vectors_PLUS_lists)))){
var max_width_vec = zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options))),vectors_PLUS_lists,(1));
var _ = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"jrequireguide max-width-vec:",max_width_vec], 0)):null);
var max_first = cljs.core.first(max_width_vec);
var element_guide = new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227);
var vector_guide = (cljs.core.truth_(max_first)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sexpr),new cljs.core.Keyword(null,"import","import",-1399500709)))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498),(0),(max_first + (1)),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"align","align",1964212802),(0),new cljs.core.Keyword(null,"indent-here","indent-here",1856277408),new cljs.core.Keyword(null,"element-*","element-*",-948937262)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498),(0),(max_first + (1)),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"align","align",1964212802),(0),element_guide], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),element_guide], null));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function (___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),vector_guide], null);
}),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),(function (___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),vector_guide], null);
}),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"hang?","hang?",-579442854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"option-fn","option-fn",-959705456)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"hang?","hang?",-579442854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"justify?","justify?",294994148)], null)], null)], null)], null);
} else {
return null;
}
} else {
return null;
}
}));

(zprint.guide.jrequireguide.cljs$lang$maxFixedArity = 4);

/**
 * Assumes that this is rum/defcs or something similar. Implement :arg1-mixin
 *   with guides using :spaces.  For guide testing, do not use this as a model
 *   for how to write a guide.
 */
zprint.guide.rumguide = (function zprint$guide$rumguide(var_args){
var G__66699 = arguments.length;
switch (G__66699) {
case 0:
return zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rumguide";
}));

(zprint.guide.rumguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var docstring_QMARK_ = typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2)) === 'string';
var vec__66701 = cljs.core.split_with((function (p1__66693_SHARP_){
return (!(((cljs.core.vector_QMARK_(p1__66693_SHARP_)) || (((cljs.core.list_QMARK_(p1__66693_SHARP_)) && (cljs.core.vector_QMARK_(cljs.core.first(p1__66693_SHARP_))))))));
}),sexpr);
var up_to_arguments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66701,(0),null);
var args_and_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66701,(1),null);
if(cljs.core.empty_QMARK_(args_and_after)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
var lt = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,((docstring_QMARK_)?(3):(2)));
var lt_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt),"<");
var mixin_indent = ((lt_QMARK_)?(2):(1));
var beginning_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var beginning_guide__$1 = ((docstring_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(beginning_guide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):beginning_guide);
var middle_element_count = (((cljs.core.count(up_to_arguments) - (2)) - ((docstring_QMARK_)?(1):(0))) - ((lt_QMARK_)?(1):(0)));
var middle_guide = (((middle_element_count > (0)))?((lt_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):cljs.core.PersistentVector.EMPTY);
var middle_guide__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(middle_guide,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((middle_element_count - (1)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spaces","spaces",365984563),mixin_indent,new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)));
var end_element_count = cljs.core.count(args_and_after);
var end_guide = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((end_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)], null))], null);
var guide = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beginning_guide__$1,middle_guide__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end_guide], 0));
var guide__$1 = cljs.core.flatten(guide);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}
}));

(zprint.guide.rumguide.cljs$lang$maxFixedArity = 3);

/**
 * Assumes that this is rum/defcs or something similar. Implement :arg1-mixin
 *   with guides using :align.  For guide testing, do not use this as a model
 *   for how to write a guide.
 */
zprint.guide.rumguide_1 = (function zprint$guide$rumguide_1(var_args){
var G__66718 = arguments.length;
switch (G__66718) {
case 0:
return zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rumguide";
}));

(zprint.guide.rumguide_1.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var docstring_QMARK_ = typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2)) === 'string';
var vec__66721 = cljs.core.split_with((function (p1__66713_SHARP_){
return (!(((cljs.core.vector_QMARK_(p1__66713_SHARP_)) || (((cljs.core.list_QMARK_(p1__66713_SHARP_)) && (cljs.core.vector_QMARK_(cljs.core.first(p1__66713_SHARP_))))))));
}),sexpr);
var up_to_arguments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66721,(0),null);
var args_and_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66721,(1),null);
if(cljs.core.empty_QMARK_(args_and_after)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
var lt = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,((docstring_QMARK_)?(3):(2)));
var lt_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt),"<");
var beginning_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var beginning_guide__$1 = ((docstring_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(beginning_guide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):beginning_guide);
var middle_element_count = (((cljs.core.count(up_to_arguments) - (2)) - ((docstring_QMARK_)?(1):(0))) - ((lt_QMARK_)?(1):(0)));
var middle_guide = (((middle_element_count > (0)))?((lt_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"mark","mark",-373816345),(1),new cljs.core.Keyword(null,"align","align",1964212802),(1),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),(1),new cljs.core.Keyword(null,"align","align",1964212802),(1),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):cljs.core.PersistentVector.EMPTY);
var middle_guide__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(middle_guide,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((middle_element_count - (1)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(1),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)));
var end_element_count = cljs.core.count(args_and_after);
var end_guide = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((end_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)], null))], null);
var guide = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beginning_guide__$1,middle_guide__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end_guide], 0));
var guide__$1 = cljs.core.flatten(guide);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}
}));

(zprint.guide.rumguide_1.cljs$lang$maxFixedArity = 3);

/**
 * Assumes that this is rum/defcs or something similar. Implement :arg1-mixin
 *   with guides using :indent.  This is probably the simplest and therefore the
 *   best of them all.  For guide testing, do not use this as a model for how
 *   to write a guide.
 */
zprint.guide.rumguide_2 = (function zprint$guide$rumguide_2(var_args){
var G__66730 = arguments.length;
switch (G__66730) {
case 0:
return zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rumguide";
}));

(zprint.guide.rumguide_2.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var docstring_QMARK_ = typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(2)) === 'string';
var vec__66735 = cljs.core.split_with((function (p1__66727_SHARP_){
return (!(((cljs.core.vector_QMARK_(p1__66727_SHARP_)) || (((cljs.core.list_QMARK_(p1__66727_SHARP_)) && (cljs.core.vector_QMARK_(cljs.core.first(p1__66727_SHARP_))))))));
}),sexpr);
var up_to_arguments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66735,(0),null);
var args_and_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66735,(1),null);
if(cljs.core.empty_QMARK_(args_and_after)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
var lt = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,((docstring_QMARK_)?(3):(2)));
var lt_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(lt),"<");
var beginning_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var beginning_guide__$1 = ((docstring_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(beginning_guide,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):beginning_guide);
var middle_element_count = (((cljs.core.count(up_to_arguments) - (2)) - ((docstring_QMARK_)?(1):(0))) - ((lt_QMARK_)?(1):(0)));
var middle_guide = (((middle_element_count > (0)))?((lt_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"indent","indent",-148200125),(4),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),(4),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)):cljs.core.PersistentVector.EMPTY);
var middle_guide__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(middle_guide,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((middle_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], null)));
var end_element_count = cljs.core.count(args_and_after);
var end_guide = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610),new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((end_element_count - (1)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element","element",1974019749)], null))], null);
var guide = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beginning_guide__$1,middle_guide__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end_guide], 0));
var guide__$1 = cljs.core.flatten(guide);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$1,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
}
}));

(zprint.guide.rumguide_2.cljs$lang$maxFixedArity = 3);

/**
 * Justify O'Doyles Rules
 */
zprint.guide.odrguide = (function zprint$guide$odrguide(var_args){
var G__66755 = arguments.length;
switch (G__66755) {
case 0:
return zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "odrguide";
}));

(zprint.guide.odrguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sexpr),new cljs.core.Keyword(null,"what","what",987290269))){
var vec__66758 = cljs.core.split_with(cljs.core.vector_QMARK_,cljs.core.next(sexpr));
var vectors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66758,(0),null);
var beyond = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66758,(1),null);
var max_width_vec = zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-variance","max-variance",-899998186).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"justify","justify",-722524056).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(options))),vectors);
var alignment_vec = zprint.util.cumulative_alignment(max_width_vec);
var mark_guide = cljs.core.vec(cljs.core.flatten(cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498)),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),alignment_vec)));
var alignment_guide = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"align","align",1964212802)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(alignment_vec)));
var vector_guide = cljs.core.into.cljs$core$IFn$_invoke$arity$2(mark_guide,cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"element","element",1974019749)),alignment_guide),new cljs.core.Keyword(null,"element-*","element-*",-948937262)], null)));
var keyword_1 = cljs.core.first(beyond);
var vec__66761 = cljs.core.split_with(cljs.core.list_QMARK_,cljs.core.next(beyond));
var keyword_1_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66761,(0),null);
var beyond__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66761,(1),null);
var keyword_2 = cljs.core.first(beyond__$1);
var vec__66764 = cljs.core.split_with(cljs.core.list_QMARK_,cljs.core.next(beyond__$1));
var keyword_2_lists = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66764,(0),null);
var beyond__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66764,(1),null);
var _ = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"odrguide alignment-vec:",alignment_vec,"mark-guide:",mark_guide,"alignment-guide:",alignment_guide,"vector-guide:",vector_guide,"keyword-1:",keyword_1,"keyword-1-lists:",keyword_1_lists,"keyword-2:",keyword_2,"keyword-2-lists:",keyword_2_lists], 0)):null);
var guide = (function (){var G__66768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),vector_guide,new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors),new cljs.core.Keyword(null,"element","element",1974019749))),new cljs.core.Keyword(null,"group-end","group-end",-574931147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"options-reset","options-reset",610833739),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wrap-multi?","wrap-multi?",1447434774),true,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], 0));
var G__66768__$1 = (cljs.core.truth_(keyword_1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66768,new cljs.core.Keyword(null,"newline","newline",1790071323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element","element",1974019749)], 0)):G__66768);
var G__66768__$2 = (((!(cljs.core.empty_QMARK_(keyword_1_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66768__$1,new cljs.core.Keyword(null,"indent","indent",-148200125),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], 0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(keyword_1_lists),new cljs.core.Keyword(null,"element","element",1974019749))),new cljs.core.Keyword(null,"group-end","group-end",-574931147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], 0)):G__66768__$1);
var G__66768__$3 = (cljs.core.truth_(keyword_2)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66768__$2,new cljs.core.Keyword(null,"newline","newline",1790071323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element","element",1974019749)], 0)):G__66768__$2);
if((!(cljs.core.empty_QMARK_(keyword_2_lists)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66768__$3,new cljs.core.Keyword(null,"indent","indent",-148200125),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], 0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(keyword_2_lists),new cljs.core.Keyword(null,"element","element",1974019749))),new cljs.core.Keyword(null,"group-end","group-end",-574931147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328)], 0));
} else {
return G__66768__$3;
}
})();
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dbg-indent","dbg-indent",1534856778).cljs$core$IFn$_invoke$arity$1(options),"odrguide:",guide], 0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide], null);
} else {
return null;
}
}));

(zprint.guide.odrguide.cljs$lang$maxFixedArity = 3);

zprint.guide.guide_arg_count = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-binding-*","element-binding-*",2057085893),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"options-reset","options-reset",610833739),new cljs.core.Keyword(null,"group-begin","group-begin",447482475),new cljs.core.Keyword(null,"element-binding-vec","element-binding-vec",936510284),new cljs.core.Keyword(null,"mark-at-indent","mark-at-indent",-126657684),new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"element-guide","element-guide",384986063),new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000),new cljs.core.Keyword(null,"element-*","element-*",-948937262),new cljs.core.Keyword(null,"spaces","spaces",365984563),new cljs.core.Keyword(null,"element-pair-*","element-pair-*",281146227),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.Keyword(null,"mark-at","mark-at",-1321655498),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"element-best-*","element-best-*",-572827078),new cljs.core.Keyword(null,"indent-reset","indent-reset",900463610),new cljs.core.Keyword(null,"element-binding-group","element-binding-group",146550043),new cljs.core.Keyword(null,"newline","newline",1790071323)],[(0),(1),(1),(0),(0),(1),(0),(0),(0),(2),(0),(0),(1),(0),(0),(1),(0),(0),(2),(1),(0),(0),(0),(0)]);
zprint.guide.guide_insert = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group-begin","group-begin",447482475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),(3)], null)], null),new cljs.core.Keyword(null,"group-end","group-end",-574931147),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1)], null)], null)], null);
/**
 * Figure out the arg-count for a guide.
 */
zprint.guide.handle_args = (function zprint$guide$handle_args(p__66784,command){
var vec__66786 = p__66784;
var guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66786,(0),null);
var running_arg_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66786,(1),null);
if((running_arg_count === (0))){
var command_arg_count = (function (){var or__5002__auto__ = (zprint.guide.guide_arg_count.cljs$core$IFn$_invoke$arity$1 ? zprint.guide.guide_arg_count.cljs$core$IFn$_invoke$arity$1(command) : zprint.guide.guide_arg_count.call(null, command));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var before = new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1((zprint.guide.guide_insert.cljs$core$IFn$_invoke$arity$1 ? zprint.guide.guide_insert.cljs$core$IFn$_invoke$arity$1(command) : zprint.guide.guide_insert.call(null, command)));
var after = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1((zprint.guide.guide_insert.cljs$core$IFn$_invoke$arity$1 ? zprint.guide.guide_insert.cljs$core$IFn$_invoke$arity$1(command) : zprint.guide.guide_insert.call(null, command)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__66791 = guide;
var G__66791__$1 = (cljs.core.truth_(before)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66791,before):G__66791);
var G__66791__$2 = ((cljs.core.empty_QMARK_(guide))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66791__$1,new cljs.core.Keyword(null,"element","element",1974019749)):G__66791__$1);
var G__66791__$3 = (((!(cljs.core.empty_QMARK_(guide))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66791__$2,new cljs.core.Keyword(null,"newline","newline",1790071323),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element","element",1974019749)], 0)):G__66791__$2);
if(cljs.core.truth_(after)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66791__$3,after);
} else {
return G__66791__$3;
}
})(),command_arg_count], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(guide,new cljs.core.Keyword(null,"element","element",1974019749)),(running_arg_count - (1))], null);
}
});
/**
 * Print out a guide
 */
zprint.guide.guideguide = (function zprint$guide$guideguide(var_args){
var G__66795 = arguments.length;
switch (G__66795) {
case 0:
return zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "guideguide";
}));

(zprint.guide.guideguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core.truth_((function (){var G__66798 = cljs.core.first(sexpr);
return (zprint.guide.guide_arg_count.cljs$core$IFn$_invoke$arity$1 ? zprint.guide.guide_arg_count.cljs$core$IFn$_invoke$arity$1(G__66798) : zprint.guide.guide_arg_count.call(null, G__66798));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.guide.handle_args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,(0)], null),sexpr))], null);
} else {
return null;
}
}));

(zprint.guide.guideguide.cljs$lang$maxFixedArity = 3);

/**
 * Handle defprotocol with options.
 */
zprint.guide.defprotocolguide = (function zprint$guide$defprotocolguide(var_args){
var G__66806 = arguments.length;
switch (G__66806) {
case 0:
return zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$0 = (function (){
return "defprotocolguide";
}));

(zprint.guide.defprotocolguide.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sexpr),new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null))){
var third = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sexpr,(2),null);
var fourth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sexpr,(3),null);
var fifth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(sexpr,(4),null);
var vec__66809 = ((((typeof third === 'string') && ((fourth instanceof cljs.core.Keyword))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [third,fourth,fifth], null):((typeof third === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [third,null,null], null):(((third instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,third,fourth], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)
)));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66809,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66809,(1),null);
var option_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66809,(2),null);
var guide = (function (){var G__66813 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var G__66813__$1 = (cljs.core.truth_(docstring)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66813,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"newline","newline",1790071323)], 0)):G__66813);
var G__66813__$2 = (cljs.core.truth_(option)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66813__$1,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"newline","newline",1790071323)], 0)):G__66813__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66813__$2,new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000));

})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
} else {
return null;
}
}));

(zprint.guide.defprotocolguide.cljs$lang$maxFixedArity = 3);

/**
 * Handle defprotocol signatures with arities and doc string on their 
 *   own lines.
 */
zprint.guide.signatureguide1 = (function zprint$guide$signatureguide1(var_args){
var G__66817 = arguments.length;
switch (G__66817) {
case 0:
return zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$0 = (function (){
return "signatureguide1";
}));

(zprint.guide.signatureguide1.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
var vectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sexpr);
var guide = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"group-begin","group-begin",447482475)], null);
var guide__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,guide,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors),new cljs.core.Keyword(null,"element","element",1974019749)));
var guide__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(guide__$1,new cljs.core.Keyword(null,"group-end","group-end",-574931147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element-newline-best-group","element-newline-best-group",1028915328),new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element-*","element-*",-948937262)], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide__$2], null);
}));

(zprint.guide.signatureguide1.cljs$lang$maxFixedArity = 3);

/**
 * Handle defprotocol with options, uses extend.
 */
zprint.guide.defprotocolguide_s = (function zprint$guide$defprotocolguide_s(var_args){
var G__66824 = arguments.length;
switch (G__66824) {
case 0:
return zprint.guide.defprotocolguide_s.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.guide.defprotocolguide_s.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.guide.defprotocolguide_s.cljs$core$IFn$_invoke$arity$0 = (function (){
return "defprotocolguide";
}));

(zprint.guide.defprotocolguide_s.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sexpr),new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null))){
var remaining = cljs.core.nnext(sexpr);
var vec__66827 = ((typeof cljs.core.first(remaining) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(remaining),cljs.core.next(remaining)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,remaining], null));
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66827,(0),null);
var remaining__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66827,(1),null);
var pair_count = cljs.core.some(cljs.core.identity,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
if(cljs.core.list_QMARK_(item)){
return idx;
} else {
return null;
}
}),remaining__$1));
var pair_count__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pair_count,(0)))?null:pair_count);
var guide = (function (){var G__66834 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"newline","newline",1790071323)], null);
var G__66834__$1 = (cljs.core.truth_(docstring)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66834,new cljs.core.Keyword(null,"element","element",1974019749),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"newline","newline",1790071323)], 0)):G__66834);
var G__66834__$2 = (cljs.core.truth_(pair_count__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66834__$1,new cljs.core.Keyword(null,"group-begin","group-begin",447482475)):G__66834__$1);
var G__66834__$3 = (cljs.core.truth_(pair_count__$1)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66834__$2,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pair_count__$1,new cljs.core.Keyword(null,"element","element",1974019749))):G__66834__$2);
var G__66834__$4 = (cljs.core.truth_(pair_count__$1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__66834__$3,new cljs.core.Keyword(null,"group-end","group-end",-574931147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"element-pair-group","element-pair-group",2021364237),new cljs.core.Keyword(null,"newline","newline",1790071323)], 0)):G__66834__$3);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__66834__$4,new cljs.core.Keyword(null,"element-newline-extend-*","element-newline-extend-*",1707374329));

})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guide","guide",-935563924),guide,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null)], null);
} else {
return null;
}
}));

(zprint.guide.defprotocolguide_s.cljs$lang$maxFixedArity = 3);

zprint.guide.semantic3 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"s1.3","s1.3",-723598112),new cljs.core.Keyword(null,"s1.0","s1.0",-1458990399),new cljs.core.Keyword(null,"s1.9","s1.9",1080645187),new cljs.core.Keyword(null,"s1.1","s1.1",39348485),new cljs.core.Keyword(null,"s1.2","s1.2",1129074984),new cljs.core.Keyword(null,"sall","sall",-1542180599),new cljs.core.Keyword(null,"s1.7","s1.7",-1905777171),new cljs.core.Keyword(null,"s1.4","s1.4",-780364453),new cljs.core.Keyword(null,"s1.6","s1.6",-405440164),new cljs.core.Keyword(null,"s1.10","s1.10",1939099965),new cljs.core.Keyword(null,"s1.2-base","s1.2-base",320006238),new cljs.core.Keyword(null,"s1.5","s1.5",2089838526),new cljs.core.Keyword(null,"s1.8","s1.8",205493055)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"defmethod",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, ["defmethod",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guided-body","guided-body",-2023833739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"guide","guide",-935563924),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element-best","element-best",1084358317),new cljs.core.Keyword(null,"element-best-first","element-best-first",-332741267),new cljs.core.Keyword(null,"element-best-first","element-best-first",-332741267),new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"element-newline-best-*","element-newline-best-*",-1915830000)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Set up community indentation",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"other stuff",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, ["is",new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"defn and fn",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 3, ["defn",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rod-base","rod-base",-2127817501)], null)], null),"defn-","defn","fn","defn"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"defprotocol, defrecord, deftype, extend-type, extend-protocol",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 5, ["defprotocol",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-extend-body","arg1-extend-body",-4465604),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043),(2),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),zprint.guide.defprotocolguide_s], null),new cljs.core.Keyword(null,"fn-type-map","fn-type-map",608394799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804)], null)], null)], null),"defrecord",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg2-extend-body","arg2-extend-body",1108891857),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"s1.2-base","s1.2-base",320006238)], null)], null),"deftype","defrecord","extend-type",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg1-extend-body","arg1-extend-body",-4465604),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"s1.2-base","s1.2-base",320006238)], null)], null),"extend-protocol","extend-type"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"version 0.1.4",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s1.0","s1.0",-1458990399),new cljs.core.Keyword(null,"s1.1","s1.1",39348485),new cljs.core.Keyword(null,"s1.2","s1.2",1129074984),new cljs.core.Keyword(null,"s1.3","s1.3",-723598112),new cljs.core.Keyword(null,"s1.4","s1.4",-780364453),new cljs.core.Keyword(null,"s1.5","s1.5",2089838526),new cljs.core.Keyword(null,"s1.6","s1.6",-405440164),new cljs.core.Keyword(null,"s1.7","s1.7",-1905777171),new cljs.core.Keyword(null,"s1.8","s1.8",205493055),new cljs.core.Keyword(null,"s1.9","s1.9",1080645187),new cljs.core.Keyword(null,"s1.10","s1.10",1939099965)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"->, ->>",new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null], null), null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"if, if-not, handled now in s1.5"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"=, not=, or, and, <, >, <=, >=",new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang","hang",-1007256173),null], null), null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 4, ["<","=",">","=","<=","=",">=","="], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),"cond do delay future comment alt! alt!! go thread",new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 6, ["do",new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),"delay","do","future","do","comment","do","go","do","thread","do"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Common code for extend things",new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043),(2),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),new cljs.core.Keyword(null,"fn-type-map","fn-type-map",608394799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rod-base","rod-base",-2127817501)], null)], null)], null),new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-type-map","fn-type-map",608394799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Don't format on single line: case cond-> cond->> when \n            while when-not when-first locking let binding loop for doseq \n            dotimes when-let if-let when-some if-some testing go-loop",new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),true], null),new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null], null), null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 5, ["when",new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845),"when-not","when","while","when","locking","when","testing","when"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),"try, catch, finally",new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 3, ["try",new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),"catch",new cljs.core.Keyword(null,"arg2-force-nl-body","arg2-force-nl-body",-2131843122),"finally",new cljs.core.Keyword(null,"flow-body","flow-body",1355242804)], null)], null)])], null);

//# sourceMappingURL=zprint.guide.js.map
