goog.provide('refx.log');
refx.log.debug = (function refx$log$debug(var_args){
var args__5732__auto__ = [];
var len__5726__auto___85936 = arguments.length;
var i__5727__auto___85937 = (0);
while(true){
if((i__5727__auto___85937 < len__5726__auto___85936)){
args__5732__auto__.push((arguments[i__5727__auto___85937]));

var G__85938 = (i__5727__auto___85937 + (1));
i__5727__auto___85937 = G__85938;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.log.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.log.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.cons("refx:",args));
}));

(refx.log.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.debug.cljs$lang$applyTo = (function (seq85844){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85844));
}));

refx.log.info = (function refx$log$info(var_args){
var args__5732__auto__ = [];
var len__5726__auto___85941 = arguments.length;
var i__5727__auto___85942 = (0);
while(true){
if((i__5727__auto___85942 < len__5726__auto___85941)){
args__5732__auto__.push((arguments[i__5727__auto___85942]));

var G__85944 = (i__5727__auto___85942 + (1));
i__5727__auto___85942 = G__85944;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.log.info.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.log.info.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.cons("refx:",args));
}));

(refx.log.info.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.info.cljs$lang$applyTo = (function (seq85874){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85874));
}));

refx.log.warn = (function refx$log$warn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___85945 = arguments.length;
var i__5727__auto___85946 = (0);
while(true){
if((i__5727__auto___85946 < len__5726__auto___85945)){
args__5732__auto__.push((arguments[i__5727__auto___85946]));

var G__85948 = (i__5727__auto___85946 + (1));
i__5727__auto___85946 = G__85948;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.log.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.cons("refx:",args));
}));

(refx.log.warn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.warn.cljs$lang$applyTo = (function (seq85906){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85906));
}));

refx.log.error = (function refx$log$error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___85952 = arguments.length;
var i__5727__auto___85953 = (0);
while(true){
if((i__5727__auto___85953 < len__5726__auto___85952)){
args__5732__auto__.push((arguments[i__5727__auto___85953]));

var G__85954 = (i__5727__auto___85953 + (1));
i__5727__auto___85953 = G__85954;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.log.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return refx.interop.log(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.cons("refx:",args));
}));

(refx.log.error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.log.error.cljs$lang$applyTo = (function (seq85926){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq85926));
}));


//# sourceMappingURL=refx.log.js.map
