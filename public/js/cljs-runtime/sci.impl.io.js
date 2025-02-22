goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__74348 = arguments.length;
switch (G__74348) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__74349 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74350 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74350);

try{var G__74351 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__74351);

return G__74351;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74349);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__74353 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74354 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74354);

try{var G__74358 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__74358);

return G__74358;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74353);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__74359 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74360 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74360);

try{var G__74361 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__74361);

return G__74361;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74359);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__74362 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74363 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74363);

try{var G__74366 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__74366);

return G__74366;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74362);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__74367 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__74368 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__74368);

try{var G__74369 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__74369);

return G__74369;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__74367);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__74379 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__74380 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74380);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74379);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74613 = arguments.length;
var i__5727__auto___74614 = (0);
while(true){
if((i__5727__auto___74614 < len__5726__auto___74613)){
args__5732__auto__.push((arguments[i__5727__auto___74614]));

var G__74615 = (i__5727__auto___74614 + (1));
i__5727__auto___74614 = G__74615;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__74384 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__74385 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74386 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74387 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74388 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74389 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74390 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74391 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__74392 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__74393 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74394 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74395 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74396 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74397 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74398 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74399 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74392);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74393);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74394);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74395);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74396);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74397);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74398);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74399);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74391);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74390);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74389);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74388);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74387);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74386);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74385);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74384);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq74382){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74382));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__74405 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__74406 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74406);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74405);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74624 = arguments.length;
var i__5727__auto___74625 = (0);
while(true){
if((i__5727__auto___74625 < len__5726__auto___74624)){
args__5732__auto__.push((arguments[i__5727__auto___74625]));

var G__74626 = (i__5727__auto___74625 + (1));
i__5727__auto___74625 = G__74626;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__74413 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74414 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74415 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74416 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74417 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74418 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74419 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__74420 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74421 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74422 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74423 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74424 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74425 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74426 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74420);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74421);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74422);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74423);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74424);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74425);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74426);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74419);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74418);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74417);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74416);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74415);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74414);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74413);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq74410){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74410));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74629 = arguments.length;
var i__5727__auto___74630 = (0);
while(true){
if((i__5727__auto___74630 < len__5726__auto___74629)){
args__5732__auto__.push((arguments[i__5727__auto___74630]));

var G__74631 = (i__5727__auto___74630 + (1));
i__5727__auto___74630 = G__74631;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__74432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__74433 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74434 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74435 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74436 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74437 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74438 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74439 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__74440 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__74441 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74442 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74443 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74444 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74445 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74446 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74447 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74440);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74441);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74442);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74443);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74444);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74445);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74446);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74447);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74439);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74438);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74437);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74436);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74435);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74434);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74433);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74432);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq74427){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74427));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74632 = arguments.length;
var i__5727__auto___74633 = (0);
while(true){
if((i__5727__auto___74633 < len__5726__auto___74632)){
args__5732__auto__.push((arguments[i__5727__auto___74633]));

var G__74634 = (i__5727__auto___74633 + (1));
i__5727__auto___74633 = G__74634;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__74455 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74456 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74457 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74458 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74459 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74461 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__74462 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74463 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74464 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74465 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74466 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74467 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74468 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74462);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74463);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74464);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74465);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74466);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74467);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74468);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74461);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74460);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74459);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74458);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74457);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74456);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74455);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq74452){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74452));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74637 = arguments.length;
var i__5727__auto___74639 = (0);
while(true){
if((i__5727__auto___74639 < len__5726__auto___74637)){
args__5732__auto__.push((arguments[i__5727__auto___74639]));

var G__74641 = (i__5727__auto___74639 + (1));
i__5727__auto___74639 = G__74641;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__74480 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__74481 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74482 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74483 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74484 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74485 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74486 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__74487 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__74488 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74489 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__74490 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74491 = null;
var _STAR_print_newline_STAR__temp_val__74492 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74493 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74487);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74488);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74489);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74490);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74491);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74492);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74493);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74486);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74485);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74484);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74483);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74482);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74481);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74480);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq74471){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74471));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74648 = arguments.length;
var i__5727__auto___74649 = (0);
while(true){
if((i__5727__auto___74649 < len__5726__auto___74648)){
args__5732__auto__.push((arguments[i__5727__auto___74649]));

var G__74651 = (i__5727__auto___74649 + (1));
i__5727__auto___74649 = G__74651;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__74508 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74509 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74510 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74511 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74512 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74513 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74514 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__74515 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74516 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74517 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74518 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74519 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74520 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74521 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74515);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74516);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74517);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74518);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74519);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74520);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74521);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74514);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74513);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74512);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74511);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74510);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74509);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74508);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq74503){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74503));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74652 = arguments.length;
var i__5727__auto___74653 = (0);
while(true){
if((i__5727__auto___74653 < len__5726__auto___74652)){
args__5732__auto__.push((arguments[i__5727__auto___74653]));

var G__74654 = (i__5727__auto___74653 + (1));
i__5727__auto___74653 = G__74654;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__74536 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__74537 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__74538 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__74539 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__74540 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__74541 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__74542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__74543 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__74544 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__74545 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__74546 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__74547 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__74548 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__74549 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__74550 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__74551 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74544);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__74545);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__74546);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__74547);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__74548);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__74549);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74550);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__74551);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__74543);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74542);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__74541);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__74540);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__74539);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__74538);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__74537);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74536);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq74530){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74530));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74661 = arguments.length;
var i__5727__auto___74662 = (0);
while(true){
if((i__5727__auto___74662 < len__5726__auto___74661)){
args__5732__auto__.push((arguments[i__5727__auto___74662]));

var G__74663 = (i__5727__auto___74662 + (1));
i__5727__auto___74662 = G__74663;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__74570__auto__","s__74570__auto__",-1132571192,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__74571__auto__","x__74571__auto__",1034279718,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__74570__auto__","s__74570__auto__",-1132571192,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__74571__auto__","x__74571__auto__",1034279718,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__74570__auto__","s__74570__auto__",-1132571192,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq74574){
var G__74575 = cljs.core.first(seq74574);
var seq74574__$1 = cljs.core.next(seq74574);
var G__74576 = cljs.core.first(seq74574__$1);
var seq74574__$2 = cljs.core.next(seq74574__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74575,G__74576,seq74574__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
