goog.provide('zprint.hiccup');
zprint.hiccup.html_codes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"italic-off","italic-off",879408323),new cljs.core.Keyword(null,"blink","blink",-271985917),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"hidden-off","hidden-off",1291018855),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blink-off","blink-off",-1034590038),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"strike-off","strike-off",1305584716),new cljs.core.Keyword(null,"underline-off","underline-off",-1119988244),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"strike","strike",-1173815471),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"reverse-off","reverse-off",917935542),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"italic","italic",32599196),new cljs.core.Keyword(null,"faint","faint",636165182),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"reverse","reverse",-888455266),new cljs.core.Keyword(null,"black","black",1294279647)],["font-weight:bold","font-style:normal","","color:white","display: unset","color:yellow","color:green","","color:cyan","text-decoration: none","font-style:normal","text-decoration: none","text-decoration: underline","text-decoration: line-through","display: none","color:red","color:blue","","color:magenta","color:purple","font-style:italic","opacity:50%","color:black","","color:black"]);
/**
 * Wraps a string with hiccup expressions.
 */
zprint.hiccup.hiccup_color_str = (function zprint$hiccup$hiccup_color_str(var_args){
var G__64234 = arguments.length;
switch (G__64234) {
case 1:
return zprint.hiccup.hiccup_color_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___64279 = arguments.length;
var i__5727__auto___64280 = (0);
while(true){
if((i__5727__auto___64280 < len__5726__auto___64279)){
args_arr__5751__auto__.push((arguments[i__5727__auto___64280]));

var G__64281 = (i__5727__auto___64280 + (1));
i__5727__auto___64280 = G__64281;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return zprint.hiccup.hiccup_color_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(zprint.hiccup.hiccup_color_str.cljs$core$IFn$_invoke$arity$variadic = (function (s,ansi){
var style_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(zprint.hiccup.html_codes,ansi)));
var s__$1 = clojure.string.replace(s,"\n","<br>");
var s__$2 = clojure.string.replace(s__$1," ","&nbsp");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style_str], null),s__$2], null);
}));

/** @this {Function} */
(zprint.hiccup.hiccup_color_str.cljs$lang$applyTo = (function (seq64230){
var G__64231 = cljs.core.first(seq64230);
var seq64230__$1 = cljs.core.next(seq64230);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64231,seq64230__$1);
}));

(zprint.hiccup.hiccup_color_str.cljs$core$IFn$_invoke$arity$1 = (function (s){
return zprint.hiccup.hiccup_color_str.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zprint.hiccup.html_codes], 0));
}));

(zprint.hiccup.hiccup_color_str.cljs$lang$maxFixedArity = (1));

/**
 * Wrap a sequence of hiccup elements with a p.
 */
zprint.hiccup.wrap_w_p = (function zprint$hiccup$wrap_w_p(options,coll){
var default_style = "font-size:15px;font-family: Lucidia Concole, Courier, monospace";
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"paragraph","paragraph",296707709).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(options)));
var style__$1 = (((style == null))?default_style:style);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style__$1], null)], null),coll);
});
/**
 * A very specialized hiccup to html converter.  Only converts hiccup
 *   that is produced by this routine!
 */
zprint.hiccup.hiccup__GT_html = (function zprint$hiccup$hiccup__GT_html(coll){
if(cljs.core.vector_QMARK_(coll)){
var first_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll));
var map_second_QMARK_ = cljs.core.map_QMARK_(cljs.core.second(coll));
var rest_coll = ((map_second_QMARK_)?cljs.core.nnext(coll):cljs.core.next(coll));
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((map_second_QMARK_)?(function (){var G__64245 = cljs.core.second(coll);
return (zprint.hiccup.hiccup__GT_html.cljs$core$IFn$_invoke$arity$1 ? zprint.hiccup.hiccup__GT_html.cljs$core$IFn$_invoke$arity$1(G__64245) : zprint.hiccup.hiccup__GT_html.call(null, G__64245));
})():"")),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.hiccup.hiccup__GT_html,rest_coll))),"</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_sym),">"].join('');
} else {
if(cljs.core.map_QMARK_(coll)){
var pair = cljs.core.first(cljs.core.seq(coll));
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.first(pair))),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(pair)),"\""].join('');
} else {
return coll;

}
}
});

//# sourceMappingURL=zprint.hiccup.js.map
