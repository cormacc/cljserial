goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__72931 = arguments.length;
switch (G__72931) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__72941 = fixed_arity;
switch (G__72941) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__72942){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__72942);

while(true){
var ret__71841__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71841__auto__)){
continue;
} else {
return ret__71841__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__72942 = null;
if (arguments.length > 0) {
var G__74063__i = 0, G__74063__a = new Array(arguments.length -  0);
while (G__74063__i < G__74063__a.length) {G__74063__a[G__74063__i] = arguments[G__74063__i + 0]; ++G__74063__i;}
  G__72942 = new cljs.core.IndexedSeq(G__74063__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__72942);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__74064){
var G__72942 = cljs.core.seq(arglist__74064);
return sci$impl$fns$arity_0__delegate(G__72942);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__72943,G__72944){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72943);

(invoc_array[vararg_idx] = G__72944);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__72943,var_args){
var G__72944 = null;
if (arguments.length > 1) {
var G__74065__i = 0, G__74065__a = new Array(arguments.length -  1);
while (G__74065__i < G__74065__a.length) {G__74065__a[G__74065__i] = arguments[G__74065__i + 1]; ++G__74065__i;}
  G__72944 = new cljs.core.IndexedSeq(G__74065__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__72943,G__72944);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__74066){
var G__72943 = cljs.core.first(arglist__74066);
var G__72944 = cljs.core.rest(arglist__74066);
return sci$impl$fns$arity_1__delegate(G__72943,G__72944);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__72945,G__72946,G__72947){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72945);

(invoc_array[(1)] = G__72946);

(invoc_array[vararg_idx] = G__72947);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__72945,G__72946,var_args){
var G__72947 = null;
if (arguments.length > 2) {
var G__74067__i = 0, G__74067__a = new Array(arguments.length -  2);
while (G__74067__i < G__74067__a.length) {G__74067__a[G__74067__i] = arguments[G__74067__i + 2]; ++G__74067__i;}
  G__72947 = new cljs.core.IndexedSeq(G__74067__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__72945,G__72946,G__72947);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__74068){
var G__72945 = cljs.core.first(arglist__74068);
arglist__74068 = cljs.core.next(arglist__74068);
var G__72946 = cljs.core.first(arglist__74068);
var G__72947 = cljs.core.rest(arglist__74068);
return sci$impl$fns$arity_2__delegate(G__72945,G__72946,G__72947);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__72948,G__72949,G__72950,G__72951){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72948);

(invoc_array[(1)] = G__72949);

(invoc_array[(2)] = G__72950);

(invoc_array[vararg_idx] = G__72951);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__72948,G__72949,G__72950,var_args){
var G__72951 = null;
if (arguments.length > 3) {
var G__74070__i = 0, G__74070__a = new Array(arguments.length -  3);
while (G__74070__i < G__74070__a.length) {G__74070__a[G__74070__i] = arguments[G__74070__i + 3]; ++G__74070__i;}
  G__72951 = new cljs.core.IndexedSeq(G__74070__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__72948,G__72949,G__72950,G__72951);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__74071){
var G__72948 = cljs.core.first(arglist__74071);
arglist__74071 = cljs.core.next(arglist__74071);
var G__72949 = cljs.core.first(arglist__74071);
arglist__74071 = cljs.core.next(arglist__74071);
var G__72950 = cljs.core.first(arglist__74071);
var G__72951 = cljs.core.rest(arglist__74071);
return sci$impl$fns$arity_3__delegate(G__72948,G__72949,G__72950,G__72951);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__72958,G__72959,G__72960,G__72961,G__72962){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72958);

(invoc_array[(1)] = G__72959);

(invoc_array[(2)] = G__72960);

(invoc_array[(3)] = G__72961);

(invoc_array[vararg_idx] = G__72962);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__72958,G__72959,G__72960,G__72961,var_args){
var G__72962 = null;
if (arguments.length > 4) {
var G__74077__i = 0, G__74077__a = new Array(arguments.length -  4);
while (G__74077__i < G__74077__a.length) {G__74077__a[G__74077__i] = arguments[G__74077__i + 4]; ++G__74077__i;}
  G__72962 = new cljs.core.IndexedSeq(G__74077__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__72958,G__72959,G__72960,G__72961,G__72962);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__74078){
var G__72958 = cljs.core.first(arglist__74078);
arglist__74078 = cljs.core.next(arglist__74078);
var G__72959 = cljs.core.first(arglist__74078);
arglist__74078 = cljs.core.next(arglist__74078);
var G__72960 = cljs.core.first(arglist__74078);
arglist__74078 = cljs.core.next(arglist__74078);
var G__72961 = cljs.core.first(arglist__74078);
var G__72962 = cljs.core.rest(arglist__74078);
return sci$impl$fns$arity_4__delegate(G__72958,G__72959,G__72960,G__72961,G__72962);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__72963,G__72964,G__72965,G__72966,G__72967,G__72968){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72963);

(invoc_array[(1)] = G__72964);

(invoc_array[(2)] = G__72965);

(invoc_array[(3)] = G__72966);

(invoc_array[(4)] = G__72967);

(invoc_array[vararg_idx] = G__72968);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__72963,G__72964,G__72965,G__72966,G__72967,var_args){
var G__72968 = null;
if (arguments.length > 5) {
var G__74083__i = 0, G__74083__a = new Array(arguments.length -  5);
while (G__74083__i < G__74083__a.length) {G__74083__a[G__74083__i] = arguments[G__74083__i + 5]; ++G__74083__i;}
  G__72968 = new cljs.core.IndexedSeq(G__74083__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__72963,G__72964,G__72965,G__72966,G__72967,G__72968);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__74084){
var G__72963 = cljs.core.first(arglist__74084);
arglist__74084 = cljs.core.next(arglist__74084);
var G__72964 = cljs.core.first(arglist__74084);
arglist__74084 = cljs.core.next(arglist__74084);
var G__72965 = cljs.core.first(arglist__74084);
arglist__74084 = cljs.core.next(arglist__74084);
var G__72966 = cljs.core.first(arglist__74084);
arglist__74084 = cljs.core.next(arglist__74084);
var G__72967 = cljs.core.first(arglist__74084);
var G__72968 = cljs.core.rest(arglist__74084);
return sci$impl$fns$arity_5__delegate(G__72963,G__72964,G__72965,G__72966,G__72967,G__72968);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__72975,G__72976,G__72977,G__72978,G__72979,G__72980,G__72981){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72975);

(invoc_array[(1)] = G__72976);

(invoc_array[(2)] = G__72977);

(invoc_array[(3)] = G__72978);

(invoc_array[(4)] = G__72979);

(invoc_array[(5)] = G__72980);

(invoc_array[vararg_idx] = G__72981);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__72975,G__72976,G__72977,G__72978,G__72979,G__72980,var_args){
var G__72981 = null;
if (arguments.length > 6) {
var G__74089__i = 0, G__74089__a = new Array(arguments.length -  6);
while (G__74089__i < G__74089__a.length) {G__74089__a[G__74089__i] = arguments[G__74089__i + 6]; ++G__74089__i;}
  G__72981 = new cljs.core.IndexedSeq(G__74089__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__72975,G__72976,G__72977,G__72978,G__72979,G__72980,G__72981);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__74090){
var G__72975 = cljs.core.first(arglist__74090);
arglist__74090 = cljs.core.next(arglist__74090);
var G__72976 = cljs.core.first(arglist__74090);
arglist__74090 = cljs.core.next(arglist__74090);
var G__72977 = cljs.core.first(arglist__74090);
arglist__74090 = cljs.core.next(arglist__74090);
var G__72978 = cljs.core.first(arglist__74090);
arglist__74090 = cljs.core.next(arglist__74090);
var G__72979 = cljs.core.first(arglist__74090);
arglist__74090 = cljs.core.next(arglist__74090);
var G__72980 = cljs.core.first(arglist__74090);
var G__72981 = cljs.core.rest(arglist__74090);
return sci$impl$fns$arity_6__delegate(G__72975,G__72976,G__72977,G__72978,G__72979,G__72980,G__72981);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__72995);

(invoc_array[(1)] = G__72996);

(invoc_array[(2)] = G__72997);

(invoc_array[(3)] = G__72998);

(invoc_array[(4)] = G__72999);

(invoc_array[(5)] = G__73000);

(invoc_array[(6)] = G__73001);

(invoc_array[vararg_idx] = G__73002);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,var_args){
var G__73002 = null;
if (arguments.length > 7) {
var G__74091__i = 0, G__74091__a = new Array(arguments.length -  7);
while (G__74091__i < G__74091__a.length) {G__74091__a[G__74091__i] = arguments[G__74091__i + 7]; ++G__74091__i;}
  G__73002 = new cljs.core.IndexedSeq(G__74091__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__74092){
var G__72995 = cljs.core.first(arglist__74092);
arglist__74092 = cljs.core.next(arglist__74092);
var G__72996 = cljs.core.first(arglist__74092);
arglist__74092 = cljs.core.next(arglist__74092);
var G__72997 = cljs.core.first(arglist__74092);
arglist__74092 = cljs.core.next(arglist__74092);
var G__72998 = cljs.core.first(arglist__74092);
arglist__74092 = cljs.core.next(arglist__74092);
var G__72999 = cljs.core.first(arglist__74092);
arglist__74092 = cljs.core.next(arglist__74092);
var G__73000 = cljs.core.first(arglist__74092);
arglist__74092 = cljs.core.next(arglist__74092);
var G__73001 = cljs.core.first(arglist__74092);
var G__73002 = cljs.core.rest(arglist__74092);
return sci$impl$fns$arity_7__delegate(G__72995,G__72996,G__72997,G__72998,G__72999,G__73000,G__73001,G__73002);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__73034,G__73035,G__73036,G__73037,G__73038,G__73039,G__73040,G__73041,G__73042){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73034);

(invoc_array[(1)] = G__73035);

(invoc_array[(2)] = G__73036);

(invoc_array[(3)] = G__73037);

(invoc_array[(4)] = G__73038);

(invoc_array[(5)] = G__73039);

(invoc_array[(6)] = G__73040);

(invoc_array[(7)] = G__73041);

(invoc_array[vararg_idx] = G__73042);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__73034,G__73035,G__73036,G__73037,G__73038,G__73039,G__73040,G__73041,var_args){
var G__73042 = null;
if (arguments.length > 8) {
var G__74099__i = 0, G__74099__a = new Array(arguments.length -  8);
while (G__74099__i < G__74099__a.length) {G__74099__a[G__74099__i] = arguments[G__74099__i + 8]; ++G__74099__i;}
  G__73042 = new cljs.core.IndexedSeq(G__74099__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__73034,G__73035,G__73036,G__73037,G__73038,G__73039,G__73040,G__73041,G__73042);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__74100){
var G__73034 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73035 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73036 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73037 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73038 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73039 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73040 = cljs.core.first(arglist__74100);
arglist__74100 = cljs.core.next(arglist__74100);
var G__73041 = cljs.core.first(arglist__74100);
var G__73042 = cljs.core.rest(arglist__74100);
return sci$impl$fns$arity_8__delegate(G__73034,G__73035,G__73036,G__73037,G__73038,G__73039,G__73040,G__73041,G__73042);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__73061,G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068,G__73069,G__73070){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73061);

(invoc_array[(1)] = G__73062);

(invoc_array[(2)] = G__73063);

(invoc_array[(3)] = G__73064);

(invoc_array[(4)] = G__73065);

(invoc_array[(5)] = G__73066);

(invoc_array[(6)] = G__73067);

(invoc_array[(7)] = G__73068);

(invoc_array[(8)] = G__73069);

(invoc_array[vararg_idx] = G__73070);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__73061,G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068,G__73069,var_args){
var G__73070 = null;
if (arguments.length > 9) {
var G__74105__i = 0, G__74105__a = new Array(arguments.length -  9);
while (G__74105__i < G__74105__a.length) {G__74105__a[G__74105__i] = arguments[G__74105__i + 9]; ++G__74105__i;}
  G__73070 = new cljs.core.IndexedSeq(G__74105__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__73061,G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068,G__73069,G__73070);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__74110){
var G__73061 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73062 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73063 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73064 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73065 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73066 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73067 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73068 = cljs.core.first(arglist__74110);
arglist__74110 = cljs.core.next(arglist__74110);
var G__73069 = cljs.core.first(arglist__74110);
var G__73070 = cljs.core.rest(arglist__74110);
return sci$impl$fns$arity_9__delegate(G__73061,G__73062,G__73063,G__73064,G__73065,G__73066,G__73067,G__73068,G__73069,G__73070);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086,G__73087,G__73088,G__73089){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73079);

(invoc_array[(1)] = G__73080);

(invoc_array[(2)] = G__73081);

(invoc_array[(3)] = G__73082);

(invoc_array[(4)] = G__73083);

(invoc_array[(5)] = G__73084);

(invoc_array[(6)] = G__73085);

(invoc_array[(7)] = G__73086);

(invoc_array[(8)] = G__73087);

(invoc_array[(9)] = G__73088);

(invoc_array[vararg_idx] = G__73089);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086,G__73087,G__73088,var_args){
var G__73089 = null;
if (arguments.length > 10) {
var G__74111__i = 0, G__74111__a = new Array(arguments.length -  10);
while (G__74111__i < G__74111__a.length) {G__74111__a[G__74111__i] = arguments[G__74111__i + 10]; ++G__74111__i;}
  G__73089 = new cljs.core.IndexedSeq(G__74111__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086,G__73087,G__73088,G__73089);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__74112){
var G__73079 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73080 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73081 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73082 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73083 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73084 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73085 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73086 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73087 = cljs.core.first(arglist__74112);
arglist__74112 = cljs.core.next(arglist__74112);
var G__73088 = cljs.core.first(arglist__74112);
var G__73089 = cljs.core.rest(arglist__74112);
return sci$impl$fns$arity_10__delegate(G__73079,G__73080,G__73081,G__73082,G__73083,G__73084,G__73085,G__73086,G__73087,G__73088,G__73089);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__73095,G__73096,G__73097,G__73098,G__73099,G__73100,G__73101,G__73102,G__73103,G__73104,G__73105,G__73106){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73095);

(invoc_array[(1)] = G__73096);

(invoc_array[(2)] = G__73097);

(invoc_array[(3)] = G__73098);

(invoc_array[(4)] = G__73099);

(invoc_array[(5)] = G__73100);

(invoc_array[(6)] = G__73101);

(invoc_array[(7)] = G__73102);

(invoc_array[(8)] = G__73103);

(invoc_array[(9)] = G__73104);

(invoc_array[(10)] = G__73105);

(invoc_array[vararg_idx] = G__73106);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__73095,G__73096,G__73097,G__73098,G__73099,G__73100,G__73101,G__73102,G__73103,G__73104,G__73105,var_args){
var G__73106 = null;
if (arguments.length > 11) {
var G__74114__i = 0, G__74114__a = new Array(arguments.length -  11);
while (G__74114__i < G__74114__a.length) {G__74114__a[G__74114__i] = arguments[G__74114__i + 11]; ++G__74114__i;}
  G__73106 = new cljs.core.IndexedSeq(G__74114__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__73095,G__73096,G__73097,G__73098,G__73099,G__73100,G__73101,G__73102,G__73103,G__73104,G__73105,G__73106);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__74115){
var G__73095 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73096 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73097 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73098 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73099 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73100 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73101 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73102 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73103 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73104 = cljs.core.first(arglist__74115);
arglist__74115 = cljs.core.next(arglist__74115);
var G__73105 = cljs.core.first(arglist__74115);
var G__73106 = cljs.core.rest(arglist__74115);
return sci$impl$fns$arity_11__delegate(G__73095,G__73096,G__73097,G__73098,G__73099,G__73100,G__73101,G__73102,G__73103,G__73104,G__73105,G__73106);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__73115,G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124,G__73125,G__73126,G__73127){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73115);

(invoc_array[(1)] = G__73116);

(invoc_array[(2)] = G__73117);

(invoc_array[(3)] = G__73118);

(invoc_array[(4)] = G__73119);

(invoc_array[(5)] = G__73120);

(invoc_array[(6)] = G__73121);

(invoc_array[(7)] = G__73122);

(invoc_array[(8)] = G__73123);

(invoc_array[(9)] = G__73124);

(invoc_array[(10)] = G__73125);

(invoc_array[(11)] = G__73126);

(invoc_array[vararg_idx] = G__73127);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__73115,G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124,G__73125,G__73126,var_args){
var G__73127 = null;
if (arguments.length > 12) {
var G__74120__i = 0, G__74120__a = new Array(arguments.length -  12);
while (G__74120__i < G__74120__a.length) {G__74120__a[G__74120__i] = arguments[G__74120__i + 12]; ++G__74120__i;}
  G__73127 = new cljs.core.IndexedSeq(G__74120__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__73115,G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124,G__73125,G__73126,G__73127);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__74122){
var G__73115 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73116 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73117 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73118 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73119 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73120 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73121 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73122 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73123 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73124 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73125 = cljs.core.first(arglist__74122);
arglist__74122 = cljs.core.next(arglist__74122);
var G__73126 = cljs.core.first(arglist__74122);
var G__73127 = cljs.core.rest(arglist__74122);
return sci$impl$fns$arity_12__delegate(G__73115,G__73116,G__73117,G__73118,G__73119,G__73120,G__73121,G__73122,G__73123,G__73124,G__73125,G__73126,G__73127);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139,G__73140,G__73141,G__73142,G__73143,G__73144,G__73145){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73132);

(invoc_array[(1)] = G__73133);

(invoc_array[(2)] = G__73134);

(invoc_array[(3)] = G__73135);

(invoc_array[(4)] = G__73136);

(invoc_array[(5)] = G__73137);

(invoc_array[(6)] = G__73138);

(invoc_array[(7)] = G__73139);

(invoc_array[(8)] = G__73140);

(invoc_array[(9)] = G__73141);

(invoc_array[(10)] = G__73142);

(invoc_array[(11)] = G__73143);

(invoc_array[(12)] = G__73144);

(invoc_array[vararg_idx] = G__73145);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139,G__73140,G__73141,G__73142,G__73143,G__73144,var_args){
var G__73145 = null;
if (arguments.length > 13) {
var G__74125__i = 0, G__74125__a = new Array(arguments.length -  13);
while (G__74125__i < G__74125__a.length) {G__74125__a[G__74125__i] = arguments[G__74125__i + 13]; ++G__74125__i;}
  G__73145 = new cljs.core.IndexedSeq(G__74125__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139,G__73140,G__73141,G__73142,G__73143,G__73144,G__73145);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__74127){
var G__73132 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73133 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73134 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73135 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73136 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73137 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73138 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73139 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73140 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73141 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73142 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73143 = cljs.core.first(arglist__74127);
arglist__74127 = cljs.core.next(arglist__74127);
var G__73144 = cljs.core.first(arglist__74127);
var G__73145 = cljs.core.rest(arglist__74127);
return sci$impl$fns$arity_13__delegate(G__73132,G__73133,G__73134,G__73135,G__73136,G__73137,G__73138,G__73139,G__73140,G__73141,G__73142,G__73143,G__73144,G__73145);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__73160,G__73161,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172,G__73173,G__73174){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73160);

(invoc_array[(1)] = G__73161);

(invoc_array[(2)] = G__73162);

(invoc_array[(3)] = G__73163);

(invoc_array[(4)] = G__73164);

(invoc_array[(5)] = G__73165);

(invoc_array[(6)] = G__73166);

(invoc_array[(7)] = G__73167);

(invoc_array[(8)] = G__73168);

(invoc_array[(9)] = G__73169);

(invoc_array[(10)] = G__73170);

(invoc_array[(11)] = G__73171);

(invoc_array[(12)] = G__73172);

(invoc_array[(13)] = G__73173);

(invoc_array[vararg_idx] = G__73174);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__73160,G__73161,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172,G__73173,var_args){
var G__73174 = null;
if (arguments.length > 14) {
var G__74129__i = 0, G__74129__a = new Array(arguments.length -  14);
while (G__74129__i < G__74129__a.length) {G__74129__a[G__74129__i] = arguments[G__74129__i + 14]; ++G__74129__i;}
  G__73174 = new cljs.core.IndexedSeq(G__74129__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__73160,G__73161,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172,G__73173,G__73174);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__74130){
var G__73160 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73161 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73162 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73163 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73164 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73165 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73166 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73167 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73168 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73169 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73170 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73171 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73172 = cljs.core.first(arglist__74130);
arglist__74130 = cljs.core.next(arglist__74130);
var G__73173 = cljs.core.first(arglist__74130);
var G__73174 = cljs.core.rest(arglist__74130);
return sci$impl$fns$arity_14__delegate(G__73160,G__73161,G__73162,G__73163,G__73164,G__73165,G__73166,G__73167,G__73168,G__73169,G__73170,G__73171,G__73172,G__73173,G__73174);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__73176,G__73177,G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73176);

(invoc_array[(1)] = G__73177);

(invoc_array[(2)] = G__73178);

(invoc_array[(3)] = G__73179);

(invoc_array[(4)] = G__73180);

(invoc_array[(5)] = G__73181);

(invoc_array[(6)] = G__73182);

(invoc_array[(7)] = G__73183);

(invoc_array[(8)] = G__73184);

(invoc_array[(9)] = G__73185);

(invoc_array[(10)] = G__73186);

(invoc_array[(11)] = G__73187);

(invoc_array[(12)] = G__73188);

(invoc_array[(13)] = G__73189);

(invoc_array[(14)] = G__73190);

(invoc_array[vararg_idx] = G__73191);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__73176,G__73177,G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,var_args){
var G__73191 = null;
if (arguments.length > 15) {
var G__74131__i = 0, G__74131__a = new Array(arguments.length -  15);
while (G__74131__i < G__74131__a.length) {G__74131__a[G__74131__i] = arguments[G__74131__i + 15]; ++G__74131__i;}
  G__73191 = new cljs.core.IndexedSeq(G__74131__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__73176,G__73177,G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__74132){
var G__73176 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73177 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73178 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73179 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73180 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73181 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73182 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73183 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73184 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73185 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73186 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73187 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73188 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73189 = cljs.core.first(arglist__74132);
arglist__74132 = cljs.core.next(arglist__74132);
var G__73190 = cljs.core.first(arglist__74132);
var G__73191 = cljs.core.rest(arglist__74132);
return sci$impl$fns$arity_15__delegate(G__73176,G__73177,G__73178,G__73179,G__73180,G__73181,G__73182,G__73183,G__73184,G__73185,G__73186,G__73187,G__73188,G__73189,G__73190,G__73191);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210,G__73211,G__73212,G__73213,G__73214){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73198);

(invoc_array[(1)] = G__73199);

(invoc_array[(2)] = G__73200);

(invoc_array[(3)] = G__73201);

(invoc_array[(4)] = G__73202);

(invoc_array[(5)] = G__73203);

(invoc_array[(6)] = G__73204);

(invoc_array[(7)] = G__73205);

(invoc_array[(8)] = G__73206);

(invoc_array[(9)] = G__73207);

(invoc_array[(10)] = G__73208);

(invoc_array[(11)] = G__73209);

(invoc_array[(12)] = G__73210);

(invoc_array[(13)] = G__73211);

(invoc_array[(14)] = G__73212);

(invoc_array[(15)] = G__73213);

(invoc_array[vararg_idx] = G__73214);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210,G__73211,G__73212,G__73213,var_args){
var G__73214 = null;
if (arguments.length > 16) {
var G__74136__i = 0, G__74136__a = new Array(arguments.length -  16);
while (G__74136__i < G__74136__a.length) {G__74136__a[G__74136__i] = arguments[G__74136__i + 16]; ++G__74136__i;}
  G__73214 = new cljs.core.IndexedSeq(G__74136__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210,G__73211,G__73212,G__73213,G__73214);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__74137){
var G__73198 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73199 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73200 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73201 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73202 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73203 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73204 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73205 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73206 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73207 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73208 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73209 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73210 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73211 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73212 = cljs.core.first(arglist__74137);
arglist__74137 = cljs.core.next(arglist__74137);
var G__73213 = cljs.core.first(arglist__74137);
var G__73214 = cljs.core.rest(arglist__74137);
return sci$impl$fns$arity_16__delegate(G__73198,G__73199,G__73200,G__73201,G__73202,G__73203,G__73204,G__73205,G__73206,G__73207,G__73208,G__73209,G__73210,G__73211,G__73212,G__73213,G__73214);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227,G__73228,G__73229,G__73230,G__73231,G__73232,G__73233,G__73234){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73217);

(invoc_array[(1)] = G__73218);

(invoc_array[(2)] = G__73219);

(invoc_array[(3)] = G__73220);

(invoc_array[(4)] = G__73221);

(invoc_array[(5)] = G__73222);

(invoc_array[(6)] = G__73223);

(invoc_array[(7)] = G__73224);

(invoc_array[(8)] = G__73225);

(invoc_array[(9)] = G__73226);

(invoc_array[(10)] = G__73227);

(invoc_array[(11)] = G__73228);

(invoc_array[(12)] = G__73229);

(invoc_array[(13)] = G__73230);

(invoc_array[(14)] = G__73231);

(invoc_array[(15)] = G__73232);

(invoc_array[(16)] = G__73233);

(invoc_array[vararg_idx] = G__73234);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227,G__73228,G__73229,G__73230,G__73231,G__73232,G__73233,var_args){
var G__73234 = null;
if (arguments.length > 17) {
var G__74138__i = 0, G__74138__a = new Array(arguments.length -  17);
while (G__74138__i < G__74138__a.length) {G__74138__a[G__74138__i] = arguments[G__74138__i + 17]; ++G__74138__i;}
  G__73234 = new cljs.core.IndexedSeq(G__74138__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227,G__73228,G__73229,G__73230,G__73231,G__73232,G__73233,G__73234);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__74139){
var G__73217 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73218 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73219 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73220 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73221 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73222 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73223 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73224 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73225 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73226 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73227 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73228 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73229 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73230 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73231 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73232 = cljs.core.first(arglist__74139);
arglist__74139 = cljs.core.next(arglist__74139);
var G__73233 = cljs.core.first(arglist__74139);
var G__73234 = cljs.core.rest(arglist__74139);
return sci$impl$fns$arity_17__delegate(G__73217,G__73218,G__73219,G__73220,G__73221,G__73222,G__73223,G__73224,G__73225,G__73226,G__73227,G__73228,G__73229,G__73230,G__73231,G__73232,G__73233,G__73234);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__73246,G__73247,G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262,G__73263,G__73264){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73246);

(invoc_array[(1)] = G__73247);

(invoc_array[(2)] = G__73248);

(invoc_array[(3)] = G__73249);

(invoc_array[(4)] = G__73250);

(invoc_array[(5)] = G__73251);

(invoc_array[(6)] = G__73252);

(invoc_array[(7)] = G__73253);

(invoc_array[(8)] = G__73254);

(invoc_array[(9)] = G__73255);

(invoc_array[(10)] = G__73256);

(invoc_array[(11)] = G__73257);

(invoc_array[(12)] = G__73258);

(invoc_array[(13)] = G__73259);

(invoc_array[(14)] = G__73260);

(invoc_array[(15)] = G__73261);

(invoc_array[(16)] = G__73262);

(invoc_array[(17)] = G__73263);

(invoc_array[vararg_idx] = G__73264);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__73246,G__73247,G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262,G__73263,var_args){
var G__73264 = null;
if (arguments.length > 18) {
var G__74140__i = 0, G__74140__a = new Array(arguments.length -  18);
while (G__74140__i < G__74140__a.length) {G__74140__a[G__74140__i] = arguments[G__74140__i + 18]; ++G__74140__i;}
  G__73264 = new cljs.core.IndexedSeq(G__74140__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__73246,G__73247,G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262,G__73263,G__73264);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__74141){
var G__73246 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73247 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73248 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73249 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73250 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73251 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73252 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73253 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73254 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73255 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73256 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73257 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73258 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73259 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73260 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73261 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73262 = cljs.core.first(arglist__74141);
arglist__74141 = cljs.core.next(arglist__74141);
var G__73263 = cljs.core.first(arglist__74141);
var G__73264 = cljs.core.rest(arglist__74141);
return sci$impl$fns$arity_18__delegate(G__73246,G__73247,G__73248,G__73249,G__73250,G__73251,G__73252,G__73253,G__73254,G__73255,G__73256,G__73257,G__73258,G__73259,G__73260,G__73261,G__73262,G__73263,G__73264);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__73273,G__73274,G__73275,G__73276,G__73277,G__73278,G__73279,G__73280,G__73281,G__73282,G__73283,G__73284,G__73285,G__73286,G__73287,G__73288,G__73289,G__73290,G__73291,G__73292){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73273);

(invoc_array[(1)] = G__73274);

(invoc_array[(2)] = G__73275);

(invoc_array[(3)] = G__73276);

(invoc_array[(4)] = G__73277);

(invoc_array[(5)] = G__73278);

(invoc_array[(6)] = G__73279);

(invoc_array[(7)] = G__73280);

(invoc_array[(8)] = G__73281);

(invoc_array[(9)] = G__73282);

(invoc_array[(10)] = G__73283);

(invoc_array[(11)] = G__73284);

(invoc_array[(12)] = G__73285);

(invoc_array[(13)] = G__73286);

(invoc_array[(14)] = G__73287);

(invoc_array[(15)] = G__73288);

(invoc_array[(16)] = G__73289);

(invoc_array[(17)] = G__73290);

(invoc_array[(18)] = G__73291);

(invoc_array[vararg_idx] = G__73292);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__73273,G__73274,G__73275,G__73276,G__73277,G__73278,G__73279,G__73280,G__73281,G__73282,G__73283,G__73284,G__73285,G__73286,G__73287,G__73288,G__73289,G__73290,G__73291,var_args){
var G__73292 = null;
if (arguments.length > 19) {
var G__74143__i = 0, G__74143__a = new Array(arguments.length -  19);
while (G__74143__i < G__74143__a.length) {G__74143__a[G__74143__i] = arguments[G__74143__i + 19]; ++G__74143__i;}
  G__73292 = new cljs.core.IndexedSeq(G__74143__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__73273,G__73274,G__73275,G__73276,G__73277,G__73278,G__73279,G__73280,G__73281,G__73282,G__73283,G__73284,G__73285,G__73286,G__73287,G__73288,G__73289,G__73290,G__73291,G__73292);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__74144){
var G__73273 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73274 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73275 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73276 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73277 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73278 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73279 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73280 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73281 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73282 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73283 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73284 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73285 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73286 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73287 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73288 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73289 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73290 = cljs.core.first(arglist__74144);
arglist__74144 = cljs.core.next(arglist__74144);
var G__73291 = cljs.core.first(arglist__74144);
var G__73292 = cljs.core.rest(arglist__74144);
return sci$impl$fns$arity_19__delegate(G__73273,G__73274,G__73275,G__73276,G__73277,G__73278,G__73279,G__73280,G__73281,G__73282,G__73283,G__73284,G__73285,G__73286,G__73287,G__73288,G__73289,G__73290,G__73291,G__73292);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__73298,G__73299,G__73300,G__73301,G__73302,G__73303,G__73304,G__73305,G__73306,G__73307,G__73308,G__73309,G__73310,G__73311,G__73312,G__73313,G__73314,G__73315,G__73316,G__73317,G__73318){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73298);

(invoc_array[(1)] = G__73299);

(invoc_array[(2)] = G__73300);

(invoc_array[(3)] = G__73301);

(invoc_array[(4)] = G__73302);

(invoc_array[(5)] = G__73303);

(invoc_array[(6)] = G__73304);

(invoc_array[(7)] = G__73305);

(invoc_array[(8)] = G__73306);

(invoc_array[(9)] = G__73307);

(invoc_array[(10)] = G__73308);

(invoc_array[(11)] = G__73309);

(invoc_array[(12)] = G__73310);

(invoc_array[(13)] = G__73311);

(invoc_array[(14)] = G__73312);

(invoc_array[(15)] = G__73313);

(invoc_array[(16)] = G__73314);

(invoc_array[(17)] = G__73315);

(invoc_array[(18)] = G__73316);

(invoc_array[(19)] = G__73317);

(invoc_array[vararg_idx] = G__73318);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__73298,G__73299,G__73300,G__73301,G__73302,G__73303,G__73304,G__73305,G__73306,G__73307,G__73308,G__73309,G__73310,G__73311,G__73312,G__73313,G__73314,G__73315,G__73316,G__73317,var_args){
var G__73318 = null;
if (arguments.length > 20) {
var G__74149__i = 0, G__74149__a = new Array(arguments.length -  20);
while (G__74149__i < G__74149__a.length) {G__74149__a[G__74149__i] = arguments[G__74149__i + 20]; ++G__74149__i;}
  G__73318 = new cljs.core.IndexedSeq(G__74149__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__73298,G__73299,G__73300,G__73301,G__73302,G__73303,G__73304,G__73305,G__73306,G__73307,G__73308,G__73309,G__73310,G__73311,G__73312,G__73313,G__73314,G__73315,G__73316,G__73317,G__73318);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__74154){
var G__73298 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73299 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73300 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73301 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73302 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73303 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73304 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73305 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73306 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73307 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73308 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73309 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73310 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73311 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73312 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73313 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73314 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73315 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73316 = cljs.core.first(arglist__74154);
arglist__74154 = cljs.core.next(arglist__74154);
var G__73317 = cljs.core.first(arglist__74154);
var G__73318 = cljs.core.rest(arglist__74154);
return sci$impl$fns$arity_20__delegate(G__73298,G__73299,G__73300,G__73301,G__73302,G__73303,G__73304,G__73305,G__73306,G__73307,G__73308,G__73309,G__73310,G__73311,G__73312,G__73313,G__73314,G__73315,G__73316,G__73317,G__73318);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72941)].join('')));

}
})():(function (){var G__73327 = fixed_arity;
switch (G__73327) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

while(true){
var ret__71841__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71841__auto__)){
continue;
} else {
return ret__71841__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__73340){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73340);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__73341,G__73342){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73341);

(invoc_array[(1)] = G__73342);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__73347,G__73348,G__73349){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73347);

(invoc_array[(1)] = G__73348);

(invoc_array[(2)] = G__73349);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__73357,G__73358,G__73359,G__73360){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73357);

(invoc_array[(1)] = G__73358);

(invoc_array[(2)] = G__73359);

(invoc_array[(3)] = G__73360);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__73362,G__73363,G__73364,G__73365,G__73366){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73362);

(invoc_array[(1)] = G__73363);

(invoc_array[(2)] = G__73364);

(invoc_array[(3)] = G__73365);

(invoc_array[(4)] = G__73366);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__73375,G__73376,G__73377,G__73378,G__73379,G__73380){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73375);

(invoc_array[(1)] = G__73376);

(invoc_array[(2)] = G__73377);

(invoc_array[(3)] = G__73378);

(invoc_array[(4)] = G__73379);

(invoc_array[(5)] = G__73380);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__73383,G__73384,G__73385,G__73386,G__73387,G__73388,G__73389){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73383);

(invoc_array[(1)] = G__73384);

(invoc_array[(2)] = G__73385);

(invoc_array[(3)] = G__73386);

(invoc_array[(4)] = G__73387);

(invoc_array[(5)] = G__73388);

(invoc_array[(6)] = G__73389);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__73398,G__73399,G__73400,G__73401,G__73402,G__73403,G__73404,G__73405){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73398);

(invoc_array[(1)] = G__73399);

(invoc_array[(2)] = G__73400);

(invoc_array[(3)] = G__73401);

(invoc_array[(4)] = G__73402);

(invoc_array[(5)] = G__73403);

(invoc_array[(6)] = G__73404);

(invoc_array[(7)] = G__73405);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__73413,G__73414,G__73415,G__73416,G__73417,G__73418,G__73419,G__73420,G__73421){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73413);

(invoc_array[(1)] = G__73414);

(invoc_array[(2)] = G__73415);

(invoc_array[(3)] = G__73416);

(invoc_array[(4)] = G__73417);

(invoc_array[(5)] = G__73418);

(invoc_array[(6)] = G__73419);

(invoc_array[(7)] = G__73420);

(invoc_array[(8)] = G__73421);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__73434,G__73435,G__73436,G__73437,G__73438,G__73439,G__73440,G__73441,G__73442,G__73443){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73434);

(invoc_array[(1)] = G__73435);

(invoc_array[(2)] = G__73436);

(invoc_array[(3)] = G__73437);

(invoc_array[(4)] = G__73438);

(invoc_array[(5)] = G__73439);

(invoc_array[(6)] = G__73440);

(invoc_array[(7)] = G__73441);

(invoc_array[(8)] = G__73442);

(invoc_array[(9)] = G__73443);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__73456,G__73457,G__73458,G__73459,G__73460,G__73461,G__73462,G__73463,G__73464,G__73465,G__73466){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73456);

(invoc_array[(1)] = G__73457);

(invoc_array[(2)] = G__73458);

(invoc_array[(3)] = G__73459);

(invoc_array[(4)] = G__73460);

(invoc_array[(5)] = G__73461);

(invoc_array[(6)] = G__73462);

(invoc_array[(7)] = G__73463);

(invoc_array[(8)] = G__73464);

(invoc_array[(9)] = G__73465);

(invoc_array[(10)] = G__73466);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__73478,G__73479,G__73480,G__73481,G__73482,G__73483,G__73484,G__73485,G__73486,G__73487,G__73488,G__73489){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73478);

(invoc_array[(1)] = G__73479);

(invoc_array[(2)] = G__73480);

(invoc_array[(3)] = G__73481);

(invoc_array[(4)] = G__73482);

(invoc_array[(5)] = G__73483);

(invoc_array[(6)] = G__73484);

(invoc_array[(7)] = G__73485);

(invoc_array[(8)] = G__73486);

(invoc_array[(9)] = G__73487);

(invoc_array[(10)] = G__73488);

(invoc_array[(11)] = G__73489);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__73496,G__73497,G__73498,G__73499,G__73500,G__73501,G__73502,G__73503,G__73504,G__73505,G__73506,G__73507,G__73508){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73496);

(invoc_array[(1)] = G__73497);

(invoc_array[(2)] = G__73498);

(invoc_array[(3)] = G__73499);

(invoc_array[(4)] = G__73500);

(invoc_array[(5)] = G__73501);

(invoc_array[(6)] = G__73502);

(invoc_array[(7)] = G__73503);

(invoc_array[(8)] = G__73504);

(invoc_array[(9)] = G__73505);

(invoc_array[(10)] = G__73506);

(invoc_array[(11)] = G__73507);

(invoc_array[(12)] = G__73508);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__73513,G__73514,G__73515,G__73516,G__73517,G__73518,G__73519,G__73520,G__73521,G__73522,G__73523,G__73524,G__73525,G__73526){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73513);

(invoc_array[(1)] = G__73514);

(invoc_array[(2)] = G__73515);

(invoc_array[(3)] = G__73516);

(invoc_array[(4)] = G__73517);

(invoc_array[(5)] = G__73518);

(invoc_array[(6)] = G__73519);

(invoc_array[(7)] = G__73520);

(invoc_array[(8)] = G__73521);

(invoc_array[(9)] = G__73522);

(invoc_array[(10)] = G__73523);

(invoc_array[(11)] = G__73524);

(invoc_array[(12)] = G__73525);

(invoc_array[(13)] = G__73526);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__73527,G__73528,G__73529,G__73530,G__73531,G__73532,G__73533,G__73534,G__73535,G__73536,G__73537,G__73538,G__73539,G__73540,G__73541){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73527);

(invoc_array[(1)] = G__73528);

(invoc_array[(2)] = G__73529);

(invoc_array[(3)] = G__73530);

(invoc_array[(4)] = G__73531);

(invoc_array[(5)] = G__73532);

(invoc_array[(6)] = G__73533);

(invoc_array[(7)] = G__73534);

(invoc_array[(8)] = G__73535);

(invoc_array[(9)] = G__73536);

(invoc_array[(10)] = G__73537);

(invoc_array[(11)] = G__73538);

(invoc_array[(12)] = G__73539);

(invoc_array[(13)] = G__73540);

(invoc_array[(14)] = G__73541);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__73546,G__73547,G__73548,G__73549,G__73550,G__73551,G__73552,G__73553,G__73554,G__73555,G__73556,G__73557,G__73558,G__73559,G__73560,G__73561){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73546);

(invoc_array[(1)] = G__73547);

(invoc_array[(2)] = G__73548);

(invoc_array[(3)] = G__73549);

(invoc_array[(4)] = G__73550);

(invoc_array[(5)] = G__73551);

(invoc_array[(6)] = G__73552);

(invoc_array[(7)] = G__73553);

(invoc_array[(8)] = G__73554);

(invoc_array[(9)] = G__73555);

(invoc_array[(10)] = G__73556);

(invoc_array[(11)] = G__73557);

(invoc_array[(12)] = G__73558);

(invoc_array[(13)] = G__73559);

(invoc_array[(14)] = G__73560);

(invoc_array[(15)] = G__73561);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__73562,G__73563,G__73564,G__73565,G__73566,G__73567,G__73568,G__73569,G__73570,G__73571,G__73572,G__73573,G__73574,G__73575,G__73576,G__73577,G__73578){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73562);

(invoc_array[(1)] = G__73563);

(invoc_array[(2)] = G__73564);

(invoc_array[(3)] = G__73565);

(invoc_array[(4)] = G__73566);

(invoc_array[(5)] = G__73567);

(invoc_array[(6)] = G__73568);

(invoc_array[(7)] = G__73569);

(invoc_array[(8)] = G__73570);

(invoc_array[(9)] = G__73571);

(invoc_array[(10)] = G__73572);

(invoc_array[(11)] = G__73573);

(invoc_array[(12)] = G__73574);

(invoc_array[(13)] = G__73575);

(invoc_array[(14)] = G__73576);

(invoc_array[(15)] = G__73577);

(invoc_array[(16)] = G__73578);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__73579,G__73580,G__73581,G__73582,G__73583,G__73584,G__73585,G__73586,G__73587,G__73588,G__73589,G__73590,G__73591,G__73592,G__73593,G__73594,G__73595,G__73596){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73579);

(invoc_array[(1)] = G__73580);

(invoc_array[(2)] = G__73581);

(invoc_array[(3)] = G__73582);

(invoc_array[(4)] = G__73583);

(invoc_array[(5)] = G__73584);

(invoc_array[(6)] = G__73585);

(invoc_array[(7)] = G__73586);

(invoc_array[(8)] = G__73587);

(invoc_array[(9)] = G__73588);

(invoc_array[(10)] = G__73589);

(invoc_array[(11)] = G__73590);

(invoc_array[(12)] = G__73591);

(invoc_array[(13)] = G__73592);

(invoc_array[(14)] = G__73593);

(invoc_array[(15)] = G__73594);

(invoc_array[(16)] = G__73595);

(invoc_array[(17)] = G__73596);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__73601,G__73602,G__73603,G__73604,G__73605,G__73606,G__73607,G__73608,G__73609,G__73610,G__73611,G__73612,G__73613,G__73614,G__73615,G__73616,G__73617,G__73618,G__73619){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73601);

(invoc_array[(1)] = G__73602);

(invoc_array[(2)] = G__73603);

(invoc_array[(3)] = G__73604);

(invoc_array[(4)] = G__73605);

(invoc_array[(5)] = G__73606);

(invoc_array[(6)] = G__73607);

(invoc_array[(7)] = G__73608);

(invoc_array[(8)] = G__73609);

(invoc_array[(9)] = G__73610);

(invoc_array[(10)] = G__73611);

(invoc_array[(11)] = G__73612);

(invoc_array[(12)] = G__73613);

(invoc_array[(13)] = G__73614);

(invoc_array[(14)] = G__73615);

(invoc_array[(15)] = G__73616);

(invoc_array[(16)] = G__73617);

(invoc_array[(17)] = G__73618);

(invoc_array[(18)] = G__73619);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__73645,G__73646,G__73647,G__73648,G__73649,G__73650,G__73651,G__73652,G__73653,G__73654,G__73655,G__73656,G__73657,G__73658,G__73659,G__73660,G__73661,G__73662,G__73663,G__73664){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null, enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73645);

(invoc_array[(1)] = G__73646);

(invoc_array[(2)] = G__73647);

(invoc_array[(3)] = G__73648);

(invoc_array[(4)] = G__73649);

(invoc_array[(5)] = G__73650);

(invoc_array[(6)] = G__73651);

(invoc_array[(7)] = G__73652);

(invoc_array[(8)] = G__73653);

(invoc_array[(9)] = G__73654);

(invoc_array[(10)] = G__73655);

(invoc_array[(11)] = G__73656);

(invoc_array[(12)] = G__73657);

(invoc_array[(13)] = G__73658);

(invoc_array[(14)] = G__73659);

(invoc_array[(15)] = G__73660);

(invoc_array[(16)] = G__73661);

(invoc_array[(17)] = G__73662);

(invoc_array[(18)] = G__73663);

(invoc_array[(19)] = G__73664);

while(true){
var ret__71842__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__71842__auto__)){
continue;
} else {
return ret__71842__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73327)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__74295 = cljs.core.next(params__$1);
var G__74296 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__74297 = lets;
params__$1 = G__74295;
new_params = G__74296;
lets = G__74297;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__74298 = cljs.core.next(params__$1);
var G__74299 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__74300 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__74298;
new_params = G__74299;
lets = G__74300;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74309 = arguments.length;
var i__5727__auto___74310 = (0);
while(true){
if((i__5727__auto___74310 < len__5726__auto___74309)){
args__5732__auto__.push((arguments[i__5727__auto___74310]));

var G__74311 = (i__5727__auto___74310 + (1));
i__5727__auto___74310 = G__74311;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__73934 = sig;
var seq__73935 = cljs.core.seq(vec__73934);
var first__73936 = cljs.core.first(seq__73935);
var seq__73935__$1 = cljs.core.next(seq__73935);
var params = first__73936;
var body = seq__73935__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5002__auto__ = conds;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq73791){
var G__73792 = cljs.core.first(seq73791);
var seq73791__$1 = cljs.core.next(seq73791);
var G__73793 = cljs.core.first(seq73791__$1);
var seq73791__$2 = cljs.core.next(seq73791__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73792,G__73793,seq73791__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__74322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__74323 = cljs.core.next(fdecls);
ret = G__74322;
fdecls = G__74323;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74324 = arguments.length;
var i__5727__auto___74325 = (0);
while(true){
if((i__5727__auto___74325 < len__5726__auto___74324)){
args__5732__auto__.push((arguments[i__5727__auto___74325]));

var G__74326 = (i__5727__auto___74325 + (1));
i__5727__auto___74325 = G__74326;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5002__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq73959){
var G__73960 = cljs.core.first(seq73959);
var seq73959__$1 = cljs.core.next(seq73959);
var G__73961 = cljs.core.first(seq73959__$1);
var seq73959__$2 = cljs.core.next(seq73959__$1);
var G__73962 = cljs.core.first(seq73959__$2);
var seq73959__$3 = cljs.core.next(seq73959__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73960,G__73961,G__73962,seq73959__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74329 = arguments.length;
var i__5727__auto___74330 = (0);
while(true){
if((i__5727__auto___74330 < len__5726__auto___74329)){
args__5732__auto__.push((arguments[i__5727__auto___74330]));

var G__74331 = (i__5727__auto___74330 + (1));
i__5727__auto___74330 = G__74331;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__74332 = cljs.core.cons(f,p);
var G__74333 = cljs.core.next(args__$1);
p = G__74332;
args__$1 = G__74333;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__74334 = cljs.core.cons(f,p);
var G__74335 = cljs.core.next(args__$1);
p = G__74334;
args__$1 = G__74335;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__74336 = cljs.core.next(fd);
fd = G__74336;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__74337 = cljs.core.next(fd);
fd = G__74337;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__74338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__74339 = cljs.core.next(ds);
acc = G__74338;
ds = G__74339;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__74340 = cljs.core.next(p);
var G__74341 = cljs.core.cons(cljs.core.first(p),d);
p = G__74340;
d = G__74341;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq73993){
var G__73994 = cljs.core.first(seq73993);
var seq73993__$1 = cljs.core.next(seq73993);
var G__73995 = cljs.core.first(seq73993__$1);
var seq73993__$2 = cljs.core.next(seq73993__$1);
var G__73996 = cljs.core.first(seq73993__$2);
var seq73993__$3 = cljs.core.next(seq73993__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73994,G__73995,G__73996,seq73993__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
