goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__57585__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57586__i = 0, G__57586__a = new Array(arguments.length -  0);
while (G__57586__i < G__57586__a.length) {G__57586__a[G__57586__i] = arguments[G__57586__i + 0]; ++G__57586__i;}
  args = new cljs.core.IndexedSeq(G__57586__a,0,null);
} 
return G__57585__delegate.call(this,args);};
G__57585.cljs$lang$maxFixedArity = 0;
G__57585.cljs$lang$applyTo = (function (arglist__57587){
var args = cljs.core.seq(arglist__57587);
return G__57585__delegate(args);
});
G__57585.cljs$core$IFn$_invoke$arity$variadic = G__57585__delegate;
return G__57585;
})()
);

(o.error = (function() { 
var G__57588__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57588 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57591__i = 0, G__57591__a = new Array(arguments.length -  0);
while (G__57591__i < G__57591__a.length) {G__57591__a[G__57591__i] = arguments[G__57591__i + 0]; ++G__57591__i;}
  args = new cljs.core.IndexedSeq(G__57591__a,0,null);
} 
return G__57588__delegate.call(this,args);};
G__57588.cljs$lang$maxFixedArity = 0;
G__57588.cljs$lang$applyTo = (function (arglist__57592){
var args = cljs.core.seq(arglist__57592);
return G__57588__delegate(args);
});
G__57588.cljs$core$IFn$_invoke$arity$variadic = G__57588__delegate;
return G__57588;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.debug.js.map
