goog.provide('zprint.optionfn');
/**
 * Given a structure which starts with defn or fn format it using the
 *   'rules of defn'.
 */
zprint.optionfn.rodfn = (function zprint$optionfn$rodfn(var_args){
var G__73197 = arguments.length;
switch (G__73197) {
case 0:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return "rodfn";
}));

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$1 = (function (rod_options){
return "rodfn";
}));

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$3 = (function (options,len,sexpr){
return zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,options,len,sexpr);
}));

(zprint.optionfn.rodfn.cljs$core$IFn$_invoke$arity$4 = (function (rod_options,options,len,sexpr){
var multi_arity_nl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(rod_options,new cljs.core.Keyword(null,"multi-arity-nl?","multi-arity-nl?",-1175171752),true);
var one_line_ok_QMARK_ = new cljs.core.Keyword(null,"one-line-ok?","one-line-ok?",209337667).cljs$core$IFn$_invoke$arity$1(rod_options);
var fn_name = (((cljs.core.second(sexpr) instanceof cljs.core.Symbol))?(1):(0));
var fn_name_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,(1));
var docstring = ((typeof cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(fn_name + (1))) === 'string')?(1):(0));
var docstring_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(docstring,(1));
var attr_map = ((cljs.core.map_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,((fn_name + docstring) + (1)))))?(1):(0));
var attr_map_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_map,(1));
var multi_arity_QMARK_ = (!(cljs.core.vector_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sexpr,(((fn_name + docstring) + attr_map) + (1))))));
var nl_count = (cljs.core.truth_((function (){var and__5000__auto__ = multi_arity_QMARK_;
if(and__5000__auto__){
var and__5000__auto____$1 = multi_arity_nl_QMARK_;
if(cljs.core.truth_(and__5000__auto____$1)){
return docstring_QMARK_;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null):(cljs.core.truth_((function (){var and__5000__auto__ = multi_arity_QMARK_;
if(and__5000__auto__){
return multi_arity_nl_QMARK_;
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)
));
var option_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043),nl_count], null),new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"nl-count","nl-count",-2027014043)], null)], null)], null);
var option_map__$1 = (cljs.core.truth_(one_line_ok_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map,new cljs.core.Keyword(null,"one-line-ok?","one-line-ok?",209337667),true):option_map);
var option_map__$2 = ((((fn_name_QMARK_) && ((((!(multi_arity_QMARK_))) && ((((!(attr_map_QMARK_))) && ((!(docstring_QMARK_)))))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg2-force-nl-body","arg2-force-nl-body",-2131843122)):((fn_name_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845)):(((!(multi_arity_QMARK_)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"arg1-force-nl-body","arg1-force-nl-body",1109597845)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map__$1,new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),new cljs.core.Keyword(null,"flow-body","flow-body",1355242804))
)));
if(multi_arity_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(option_map__$2,new cljs.core.Keyword(null,"next-inner","next-inner",608504966),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826)], null),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"vector","vector",1902966158)], null)], null)], null));
} else {
return option_map__$2;
}
}));

(zprint.optionfn.rodfn.cljs$lang$maxFixedArity = 4);

/**
 * Look at a list, and if it has metadata, then based on the kind of
 *   metadata, try to do it differently than the normal metadata output.
 */
zprint.optionfn.meta_base_fn = (function zprint$optionfn$meta_base_fn(var_args){
var G__73240 = arguments.length;
switch (G__73240) {
case 0:
return zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return "meta-base-fn";
}));

(zprint.optionfn.meta_base_fn.cljs$core$IFn$_invoke$arity$3 = (function (opts,n,exprs){
if(cljs.core.truth_(cljs.core.meta(cljs.core.second(exprs)))){
var zfn_map = new cljs.core.Keyword(null,"zfn-map","zfn-map",1068295789).cljs$core$IFn$_invoke$arity$1(opts);
var zloc_seq_nc = (function (){var G__73243 = cljs.core.identity;
var G__73244 = new cljs.core.Keyword(null,"zloc","zloc",-2123059767).cljs$core$IFn$_invoke$arity$1(opts);
var fexpr__73242 = new cljs.core.Keyword(null,"zmap-no-comment","zmap-no-comment",1484161325).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__73242.cljs$core$IFn$_invoke$arity$2 ? fexpr__73242.cljs$core$IFn$_invoke$arity$2(G__73243,G__73244) : fexpr__73242.call(null, G__73243,G__73244));
})();
var meta_zloc = cljs.core.second(zloc_seq_nc);
var meta_seq = (function (){var fexpr__73245 = new cljs.core.Keyword(null,"zmap-no-comment","zmap-no-comment",1484161325).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__73245.cljs$core$IFn$_invoke$arity$2 ? fexpr__73245.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,meta_zloc) : fexpr__73245.call(null, cljs.core.identity,meta_zloc));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var G__73266 = cljs.core.second(meta_seq);
var fexpr__73265 = new cljs.core.Keyword(null,"ztag","ztag",125694964).cljs$core$IFn$_invoke$arity$1(zfn_map);
return (fexpr__73265.cljs$core$IFn$_invoke$arity$1 ? fexpr__73265.cljs$core$IFn$_invoke$arity$1(G__73266) : fexpr__73265.call(null, G__73266));
})())){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"split?","split?",-1633274741),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(0)], null),new cljs.core.Keyword(null,"fn-style","fn-style",1330516917),((((cljs.core.map_QMARK_(cljs.core.meta(cljs.core.second(exprs)))) && ((cljs.core.count(cljs.core.keys(cljs.core.meta(cljs.core.second(exprs)))) > (1)))))?new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564):new cljs.core.Keyword(null,"arg2","arg2",1729550917)),new cljs.core.Keyword(null,"next-inner-restore","next-inner-restore",876759733),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559)], null)], null)], null);
}
} else {
return null;
}
}));

(zprint.optionfn.meta_base_fn.cljs$lang$maxFixedArity = 3);

/**
 * Given a structure starting with fn*, turn it back into a #(...) anon fn.
 */
zprint.optionfn.fn_STAR___GT__PERCENT_ = (function zprint$optionfn$fn_STAR___GT__PERCENT_(var_args){
var G__73268 = arguments.length;
switch (G__73268) {
case 0:
return zprint.optionfn.fn_STAR___GT__PERCENT_.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.optionfn.fn_STAR___GT__PERCENT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.fn_STAR___GT__PERCENT_.cljs$core$IFn$_invoke$arity$0 = (function (){
return "fn*->%";
}));

(zprint.optionfn.fn_STAR___GT__PERCENT_.cljs$core$IFn$_invoke$arity$3 = (function (options,n,exprs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"sexpr","sexpr",-783344087))){
var caller = new cljs.core.Keyword(null,"caller","caller",-1275362879).cljs$core$IFn$_invoke$arity$1(options);
var zloc = new cljs.core.Keyword(null,"zloc","zloc",-2123059767).cljs$core$IFn$_invoke$arity$1(options);
var l_str = new cljs.core.Keyword(null,"l-str","l-str",-560066708).cljs$core$IFn$_invoke$arity$1(options);
var arg_vec = cljs.core.second(zloc);
var arg_count = cljs.core.count(arg_vec);
var vec__73293 = (((((arg_count >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_vec,(arg_count - (2))),new cljs.core.Symbol(null,"&","&",-2144855648,null)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((arg_count - (2)),arg_vec)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arg_vec,(arg_count - (1)))),"&"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_vec,null], null));
var arg_vec__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73293,(0),null);
var final_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73293,(1),null);
var arg_count__$1 = cljs.core.count(arg_vec__$1);
var replace_map = cljs.core.zipmap(arg_vec__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"%")),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg_count__$1,(1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null):(cljs.core.truth_(final_value)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1((arg_count__$1 - (1)))),final_value):cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(arg_count__$1))))));
var new_zloc = clojure.walk.prewalk_replace(replace_map,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(zloc,(2)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null),new cljs.core.Keyword(null,"new-zloc","new-zloc",-1166607007),new_zloc,new cljs.core.Keyword(null,"new-l-str","new-l-str",-1564907437),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l_str)].join('')], null);
} else {
return null;
}
}));

(zprint.optionfn.fn_STAR___GT__PERCENT_.cljs$lang$maxFixedArity = 3);

/**
 * option-fn interface to sort-dependencies
 */
zprint.optionfn.sort_deps = (function zprint$optionfn$sort_deps(var_args){
var G__73297 = arguments.length;
switch (G__73297) {
case 0:
return zprint.optionfn.sort_deps.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return zprint.optionfn.sort_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.sort_deps.cljs$core$IFn$_invoke$arity$0 = (function (){
return "sort-deps";
}));

(zprint.optionfn.sort_deps.cljs$core$IFn$_invoke$arity$3 = (function (options,n,exprs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ztype","ztype",-562179020).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"zipper","zipper",1500694438))){
var caller = new cljs.core.Keyword(null,"caller","caller",-1275362879).cljs$core$IFn$_invoke$arity$1(options);
var zloc = new cljs.core.Keyword(null,"zloc","zloc",-2123059767).cljs$core$IFn$_invoke$arity$1(options);
var new_zloc = zprint.rewrite.sort_dependencies(caller,options,zloc);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-zloc","new-zloc",-1166607007),new_zloc,new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn","option-fn",-959705456),null], null)], null);
} else {
return null;
}
}));

(zprint.optionfn.sort_deps.cljs$lang$maxFixedArity = 3);

/**
 * Match functions that are not found in the :fn-map against a
 *   series of regular expression rules.  These rules are supplied as
 *   a set of pairs in a vector as the first argument.  Each pair
 *   should be a regular expression paired with an options map.  If
 *   the regex matches, will return the associated options map. 
 *   Process the pairs in the order they appear in the vector.  If
 *   none of the regex expressions match, return nil.
 */
zprint.optionfn.regexfn = (function zprint$optionfn$regexfn(var_args){
var G__73322 = arguments.length;
switch (G__73322) {
case 1:
return zprint.optionfn.regexfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return zprint.optionfn.regexfn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.regexfn.cljs$core$IFn$_invoke$arity$1 = (function (rules_vec){
return "regexfn";
}));

(zprint.optionfn.regexfn.cljs$core$IFn$_invoke$arity$4 = (function (rules_vec,options,len,sexpr){
var fn_name = cljs.core.first(sexpr);
var fn_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name);
var rule_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null),rules_vec);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73320_SHARP_,p2__73319_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(cljs.core.first(p2__73319_SHARP_),fn_str))){
return cljs.core.reduced(cljs.core.second(p2__73319_SHARP_));
} else {
return null;
}
}),null,rule_pairs);
return result;
}));

(zprint.optionfn.regexfn.cljs$lang$maxFixedArity = 4);

/**
 * Match functions that are not found in the :fn-map against a
 *   series of rules.  These rules are supplied as a set of pairs in
 *   a vector as the first argument to rulesfn.  Each pair could be a
 *   regular expression paired with an options map or a function paired
 *   with an options map.  If the left-hand-side of the pair is a
 *   regex, and the regex matches the string representation of the
 *   first element in the list, return the associated options map.  If
 *   the left-hand-side of the pair is a function, supply the string
 *   representation of the first element of the list as the single
 *   argument to the function.  If the function returns a non-nil
 *   result, return the options map from that pair.  Process the pairs
 *   in the order they appear in the vector. If none of the regex
 *   expressions match or functions return non-nil, return nil.
 */
zprint.optionfn.rulesfn = (function zprint$optionfn$rulesfn(var_args){
var G__73339 = arguments.length;
switch (G__73339) {
case 1:
return zprint.optionfn.rulesfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return zprint.optionfn.rulesfn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.optionfn.rulesfn.cljs$core$IFn$_invoke$arity$1 = (function (rules_vec){
return "rulesfn";
}));

(zprint.optionfn.rulesfn.cljs$core$IFn$_invoke$arity$4 = (function (rules_vec,options,len,sexpr){
var fn_name = cljs.core.first(sexpr);
var fn_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name);
var rule_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(2),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null),rules_vec);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__73329_SHARP_,p2__73328_SHARP_){
var lhs = cljs.core.first(p2__73328_SHARP_);
if(cljs.core.fn_QMARK_(lhs)){
if(cljs.core.truth_((lhs.cljs$core$IFn$_invoke$arity$1 ? lhs.cljs$core$IFn$_invoke$arity$1(fn_str) : lhs.call(null, fn_str)))){
return cljs.core.reduced(cljs.core.second(p2__73328_SHARP_));
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(cljs.core.first(p2__73328_SHARP_),fn_str))){
return cljs.core.reduced(cljs.core.second(p2__73328_SHARP_));
} else {
return null;
}

}
}),null,rule_pairs);
return result;
}));

(zprint.optionfn.rulesfn.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=zprint.optionfn.js.map
