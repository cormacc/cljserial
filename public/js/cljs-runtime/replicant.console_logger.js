goog.provide('replicant.console_logger');
replicant.console_logger.log = (function replicant$console_logger$log(x){
return console.log(x);
});
replicant.console_logger.print_heading = (function replicant$console_logger$print_heading(x){
return console.group(x);
});
replicant.console_logger.close_group = (function replicant$console_logger$close_group(){
return console.groupEnd();
});
replicant.console_logger.pprstr = (function replicant$console_logger$pprstr(x){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
});
replicant.console_logger.scrub_sexp = (function replicant$console_logger$scrub_sexp(sexp){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61324_SHARP_){
return new cljs.core.Keyword("replicant","internal","replicant/internal",-1504696787).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.val(p1__61324_SHARP_)));
}),x));
} else {
return x;
}
}),sexp);
});
replicant.console_logger.abbreviate_sexp = (function replicant$console_logger$abbreviate_sexp(hiccup){
var scrubbed = replicant.console_logger.scrub_sexp(hiccup);
var len = ((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([scrubbed], 0))).length);
if((len < (100))){
return scrubbed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),scrubbed)),new cljs.core.Symbol(null,"...","...",-1926939749,null));
}
});
replicant.console_logger.report = (function replicant$console_logger$report(p__61345){
var map__61346 = p__61345;
var map__61346__$1 = cljs.core.__destructure_map(map__61346);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"title","title",636505583));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
var fname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"fname","fname",1500291491));
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61346__$1,new cljs.core.Keyword(null,"data","data",-232669377));
replicant.console_logger.print_heading(["Replicant warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''));

replicant.console_logger.log(message);

if(cljs.core.truth_(fname)){
replicant.console_logger.log(["Function: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''));
} else {
}

if(cljs.core.truth_(alias)){
replicant.console_logger.log(["Alias: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''));
} else {
}

if(cljs.core.truth_(data)){
var formatted_61352 = replicant.console_logger.pprstr(data);
if((((formatted_61352).length) < (80))){
replicant.console_logger.log(["Input data: ",formatted_61352].join(''));
} else {
replicant.console_logger.log("Input data:");

replicant.console_logger.log(formatted_61352);
}
} else {
}

replicant.console_logger.log("Offending hiccup: ");

replicant.console_logger.log(replicant.console_logger.pprstr(replicant.console_logger.abbreviate_sexp(hiccup)));

return replicant.console_logger.close_group();
});

//# sourceMappingURL=replicant.console_logger.js.map
