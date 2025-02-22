goog.provide('sci.impl.evaluator');
sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = sci.impl.types.eval(init,ctx,bindings);
var m__$1 = sci.impl.types.eval(m,ctx,bindings);
var cnn = sci.impl.types.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.utils.var_QMARK_(prev))))?(new sci.lang.Var(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false,false,null)):prev);
var v = (((sci.impl.utils.var_unbound === init__$1))?(function (){var G__75336 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__75336,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__75336;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__75345 = arguments.length;
switch (G__75345) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(case_map,v,new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426),found)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
} else {
return sci.impl.types.eval(found,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(case_map,v,new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426),found)){
return sci.impl.types.eval(case_default,ctx,bindings);
} else {
return sci.impl.types.eval(found,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$,sci_error){
try{var _STAR_in_try_STAR__orig_val__75371 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__75372 = (function (){var or__5002__auto__ = ((cljs.core.not(sci_error)) && (cljs.core.seq(catches)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return sci.impl.utils._STAR_in_try_STAR_;
}
})();
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__75372);

try{return sci.impl.types.eval(body,ctx,bindings);
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__75371);
}}catch (e75361){var e = e75361;
var temp__5821__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"default","default",-1987822328),clazz);
if(or__5002__auto__){
return or__5002__auto__;
} else {
if((clazz instanceof sci.impl.types.NodeR)){
var c__5035__auto__ = sci.impl.types.eval(clazz,ctx,bindings);
var x__5036__auto__ = e;
return (x__5036__auto__ instanceof c__5035__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){
(bindings[new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805).cljs$core$IFn$_invoke$arity$1(c)] = e);

return sci.impl.types.eval(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c),ctx,bindings);
})()
], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__75368 = temp__5821__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75368,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75368,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
}finally {sci.impl.types.eval(finally$,ctx,bindings);
}});
sci.impl.evaluator.allowed_instance_method_invocation = (function sci$impl$evaluator$allowed_instance_method_invocation(ctx,bindings,instance_expr,method_str,args,arg_count){
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
return sci.impl.interop.invoke_instance_method(ctx,bindings,instance_expr_STAR_,null,method_str,args,arg_count);
});
sci.impl.evaluator.allowed_instance_field_invocation = (function sci$impl$evaluator$allowed_instance_field_invocation(ctx,bindings,instance_expr,method_str){
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,null,method_str);
});
sci.impl.evaluator.none_sentinel = (new Object());
sci.impl.evaluator.get_from_type = (function sci$impl$evaluator$get_from_type(instance,method_str,args){
if((args.length === (0))){
if((instance instanceof sci.impl.records.SciRecord)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(instance,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str),sci.impl.evaluator.none_sentinel);
} else {
if((instance instanceof sci.impl.deftype.SciType)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(instance.sci$impl$types$IBox$getVal$arity$1(null, ),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(method_str),sci.impl.evaluator.none_sentinel);
} else {
return sci.impl.evaluator.none_sentinel;
}
}
} else {
return sci.impl.evaluator.none_sentinel;
}
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed,arg_count){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
var v = sci.impl.evaluator.get_from_type(instance_expr_STAR_,method_str,args);
if((!((sci.impl.evaluator.none_sentinel === v)))){
return v;
} else {
var instance_class = (function (){var or__5002__auto__ = tag_class;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(env);
var allowed_QMARK_ = (function (){var or__5002__auto__ = allowed;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null, instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
return sci.impl.interop.invoke_instance_method(ctx,bindings,instance_expr_STAR_,target_class,method_str,args,arg_count);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__75395 = arguments.length;
switch (G__75395) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = sci.impl.types.eval(sym,ctx,bindings);
var res = cljs.core.second((function (){var fexpr__75400 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__75400.cljs$core$IFn$_invoke$arity$3 ? fexpr__75400.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__75400.call(null, ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.NodeR)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75699 = arguments.length;
var i__5727__auto___75700 = (0);
while(true){
if((i__5727__auto___75700 < len__5726__auto___75699)){
args__5732__auto__.push((arguments[i__5727__auto___75700]));

var G__75701 = (i__5727__auto___75700 + (1));
i__5727__auto___75700 = G__75701;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75402_SHARP_){
if(((cljs.core.seq_QMARK_(p1__75402_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__75402_SHARP_))))){
return cljs.core.second(p1__75402_SHARP_);
} else {
return p1__75402_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__75412 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75412,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75412,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5821__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5821__auto__)){
var clazz = temp__5821__auto__;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5821__auto____$1 = (function (){var rec_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.demunge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)));
var rec_var = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),rec_ns,class$], null));
return rec_var;
})();
if(cljs.core.truth_(temp__5821__auto____$1)){
var rec_var = temp__5821__auto____$1;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refers","refers",158076809),class$], null),rec_var);

return cljs.core.deref(rec_var);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq75403){
var G__75404 = cljs.core.first(seq75403);
var seq75403__$1 = cljs.core.next(seq75403);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75404,seq75403__$1);
}));

sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__75615 = cljs.core.count(args);
switch (G__75615) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

break;
case (1):
var arg75422 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg75422) : f.call(null, arg75422));

break;
case (2):
var arg75423 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75424 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg75423,arg75424) : f.call(null, arg75423,arg75424));

break;
case (3):
var arg75425 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75426 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75427 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg75425,arg75426,arg75427) : f.call(null, arg75425,arg75426,arg75427));

break;
case (4):
var arg75428 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75429 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75430 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75431 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg75428,arg75429,arg75430,arg75431) : f.call(null, arg75428,arg75429,arg75430,arg75431));

break;
case (5):
var arg75432 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75433 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75434 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75435 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75436 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg75432,arg75433,arg75434,arg75435,arg75436) : f.call(null, arg75432,arg75433,arg75434,arg75435,arg75436));

break;
case (6):
var arg75437 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75438 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75439 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75440 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75441 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75442 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg75437,arg75438,arg75439,arg75440,arg75441,arg75442) : f.call(null, arg75437,arg75438,arg75439,arg75440,arg75441,arg75442));

break;
case (7):
var arg75443 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75444 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75445 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75446 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75447 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75448 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75449 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg75443,arg75444,arg75445,arg75446,arg75447,arg75448,arg75449) : f.call(null, arg75443,arg75444,arg75445,arg75446,arg75447,arg75448,arg75449));

break;
case (8):
var arg75450 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75451 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75452 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75453 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75454 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75455 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75456 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75457 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg75450,arg75451,arg75452,arg75453,arg75454,arg75455,arg75456,arg75457) : f.call(null, arg75450,arg75451,arg75452,arg75453,arg75454,arg75455,arg75456,arg75457));

break;
case (9):
var arg75458 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75459 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75460 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75461 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75462 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75463 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75464 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75465 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75466 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg75458,arg75459,arg75460,arg75461,arg75462,arg75463,arg75464,arg75465,arg75466) : f.call(null, arg75458,arg75459,arg75460,arg75461,arg75462,arg75463,arg75464,arg75465,arg75466));

break;
case (10):
var arg75467 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75468 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75469 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75470 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75471 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75472 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75473 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75474 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75475 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75476 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg75467,arg75468,arg75469,arg75470,arg75471,arg75472,arg75473,arg75474,arg75475,arg75476) : f.call(null, arg75467,arg75468,arg75469,arg75470,arg75471,arg75472,arg75473,arg75474,arg75475,arg75476));

break;
case (11):
var arg75477 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75478 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75479 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75480 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75481 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75482 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75483 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75484 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75485 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75486 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75487 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg75477,arg75478,arg75479,arg75480,arg75481,arg75482,arg75483,arg75484,arg75485,arg75486,arg75487) : f.call(null, arg75477,arg75478,arg75479,arg75480,arg75481,arg75482,arg75483,arg75484,arg75485,arg75486,arg75487));

break;
case (12):
var arg75488 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75489 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75490 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75491 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75492 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75493 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75494 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75495 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75496 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75497 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75498 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75499 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg75488,arg75489,arg75490,arg75491,arg75492,arg75493,arg75494,arg75495,arg75496,arg75497,arg75498,arg75499) : f.call(null, arg75488,arg75489,arg75490,arg75491,arg75492,arg75493,arg75494,arg75495,arg75496,arg75497,arg75498,arg75499));

break;
case (13):
var arg75500 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75501 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75502 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75503 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75504 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75505 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75506 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75507 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75508 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75509 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75510 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75511 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75512 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg75500,arg75501,arg75502,arg75503,arg75504,arg75505,arg75506,arg75507,arg75508,arg75509,arg75510,arg75511,arg75512) : f.call(null, arg75500,arg75501,arg75502,arg75503,arg75504,arg75505,arg75506,arg75507,arg75508,arg75509,arg75510,arg75511,arg75512));

break;
case (14):
var arg75513 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75514 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75515 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75516 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75517 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75518 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75519 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75520 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75521 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75522 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75523 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75524 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75525 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75526 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg75513,arg75514,arg75515,arg75516,arg75517,arg75518,arg75519,arg75520,arg75521,arg75522,arg75523,arg75524,arg75525,arg75526) : f.call(null, arg75513,arg75514,arg75515,arg75516,arg75517,arg75518,arg75519,arg75520,arg75521,arg75522,arg75523,arg75524,arg75525,arg75526));

break;
case (15):
var arg75527 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75528 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75529 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75530 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75531 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75532 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75533 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75534 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75535 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75536 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75537 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75538 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75539 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75540 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75541 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg75527,arg75528,arg75529,arg75530,arg75531,arg75532,arg75533,arg75534,arg75535,arg75536,arg75537,arg75538,arg75539,arg75540,arg75541) : f.call(null, arg75527,arg75528,arg75529,arg75530,arg75531,arg75532,arg75533,arg75534,arg75535,arg75536,arg75537,arg75538,arg75539,arg75540,arg75541));

break;
case (16):
var arg75542 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75543 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75544 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75545 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75546 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75547 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75548 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75549 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75550 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75551 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75552 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75553 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75554 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75555 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75556 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75557 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg75542,arg75543,arg75544,arg75545,arg75546,arg75547,arg75548,arg75549,arg75550,arg75551,arg75552,arg75553,arg75554,arg75555,arg75556,arg75557) : f.call(null, arg75542,arg75543,arg75544,arg75545,arg75546,arg75547,arg75548,arg75549,arg75550,arg75551,arg75552,arg75553,arg75554,arg75555,arg75556,arg75557));

break;
case (17):
var arg75558 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75559 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75560 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75561 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75562 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75563 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75564 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75565 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75566 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75567 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75568 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75569 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75570 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75571 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75572 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75573 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg75574 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg75558,arg75559,arg75560,arg75561,arg75562,arg75563,arg75564,arg75565,arg75566,arg75567,arg75568,arg75569,arg75570,arg75571,arg75572,arg75573,arg75574) : f.call(null, arg75558,arg75559,arg75560,arg75561,arg75562,arg75563,arg75564,arg75565,arg75566,arg75567,arg75568,arg75569,arg75570,arg75571,arg75572,arg75573,arg75574));

break;
case (18):
var arg75575 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75576 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75577 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75578 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75579 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75580 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75581 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75582 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75583 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75584 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75585 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75586 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75587 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75588 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75589 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75590 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg75591 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg75592 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg75575,arg75576,arg75577,arg75578,arg75579,arg75580,arg75581,arg75582,arg75583,arg75584,arg75585,arg75586,arg75587,arg75588,arg75589,arg75590,arg75591,arg75592) : f.call(null, arg75575,arg75576,arg75577,arg75578,arg75579,arg75580,arg75581,arg75582,arg75583,arg75584,arg75585,arg75586,arg75587,arg75588,arg75589,arg75590,arg75591,arg75592));

break;
case (19):
var arg75593 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg75594 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg75595 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg75596 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg75597 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg75598 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg75599 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg75600 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg75601 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg75602 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg75603 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg75604 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg75605 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg75606 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg75607 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg75608 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg75609 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg75610 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
var arg75611 = sci.impl.types.eval(cljs.core.first(args__$18),ctx,bindings);
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg75593,arg75594,arg75595,arg75596,arg75597,arg75598,arg75599,arg75600,arg75601,arg75602,arg75603,arg75604,arg75605,arg75606,arg75607,arg75608,arg75609,arg75610,arg75611) : f.call(null, arg75593,arg75594,arg75595,arg75596,arg75597,arg75598,arg75599,arg75600,arg75601,arg75602,arg75603,arg75604,arg75605,arg75606,arg75607,arg75608,arg75609,arg75610,arg75611));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__75090_SHARP_){
return sci.impl.types.eval(p1__75090_SHARP_,ctx,bindings);
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});

//# sourceMappingURL=sci.impl.evaluator.js.map
