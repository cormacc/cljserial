goog.provide('day8.re_frame_10x.fx.local_storage');
goog.scope(function(){
  day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism = goog.module.get('goog.testing.storage.FakeMechanism');
});
/**
 * LocalStorage is not available in sandboxed iframes, so check
 *   window.localStorage and use the fake storage mechanism if it's not available.
 *   re-frame-10x settings will not persist, but it will work.
 */
day8.re_frame_10x.fx.local_storage.storage_mechanism = (function (){try{if(cljs.core.truth_(localStorage)){
return (new goog.storage.mechanism.HTML5LocalStorage());
} else {
return null;
}
}catch (e63255){if((e63255 instanceof Error)){
var _ = e63255;
return (new day8.re_frame_10x.fx.local_storage.goog$module$goog$testing$storage$FakeMechanism());
} else {
throw e63255;

}
}})();
day8.re_frame_10x.fx.local_storage.storage = (new goog.storage.Storage(day8.re_frame_10x.fx.local_storage.storage_mechanism));
day8.re_frame_10x.fx.local_storage.safe_prefix = "day8.re-frame-10x.";
/**
 * Adds a unique prefix to local storage keys to ensure they don't collide with the host application
 */
day8.re_frame_10x.fx.local_storage.safe_key = (function day8$re_frame_10x$fx$local_storage$safe_key(key){
return [day8.re_frame_10x.fx.local_storage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Loads a re-frame-10x value from local storage.
 */
day8.re_frame_10x.fx.local_storage.load = (function day8$re_frame_10x$fx$local_storage$load(key){
var value = day8.re_frame_10x.fx.local_storage.storage.get(day8.re_frame_10x.fx.local_storage.safe_key(key));
if((void 0 === value)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
});
day8.re_frame_10x.fx.local_storage.all_keys = (function day8$re_frame_10x$fx$local_storage$all_keys(){
try{return Object.keys(localStorage);
}catch (e63264){if((e63264 instanceof Error)){
var _ = e63264;
return cljs.core.PersistentVector.EMPTY;
} else {
throw e63264;

}
}});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.fx.local_storage.delete_all_keys_BANG_ = (function day8$re_frame_10x$fx$local_storage$delete_all_keys_BANG_(){
var seq__63265 = cljs.core.seq(day8.re_frame_10x.fx.local_storage.all_keys());
var chunk__63266 = null;
var count__63267 = (0);
var i__63268 = (0);
while(true){
if((i__63268 < count__63267)){
var k = chunk__63266.cljs$core$IIndexed$_nth$arity$2(null, i__63268);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__63286 = seq__63265;
var G__63287 = chunk__63266;
var G__63288 = count__63267;
var G__63289 = (i__63268 + (1));
seq__63265 = G__63286;
chunk__63266 = G__63287;
count__63267 = G__63288;
i__63268 = G__63289;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__63265);
if(temp__5823__auto__){
var seq__63265__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63265__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__63265__$1);
var G__63290 = cljs.core.chunk_rest(seq__63265__$1);
var G__63291 = c__5525__auto__;
var G__63292 = cljs.core.count(c__5525__auto__);
var G__63293 = (0);
seq__63265 = G__63290;
chunk__63266 = G__63291;
count__63267 = G__63292;
i__63268 = G__63293;
continue;
} else {
var k = cljs.core.first(seq__63265__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.fx.local_storage.safe_prefix)){
day8.re_frame_10x.fx.local_storage.storage.remove(k);
} else {
}


var G__63294 = cljs.core.next(seq__63265__$1);
var G__63295 = null;
var G__63296 = (0);
var G__63297 = (0);
seq__63265 = G__63294;
chunk__63266 = G__63295;
count__63267 = G__63296;
i__63268 = G__63297;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.fx.local_storage.save = (function day8$re_frame_10x$fx$local_storage$save(var_args){
var G__63274 = arguments.length;
switch (G__63274) {
case 1:
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___63301 = arguments.length;
var i__5727__auto___63302 = (0);
while(true){
if((i__5727__auto___63302 < len__5726__auto___63301)){
args_arr__5751__auto__.push((arguments[i__5727__auto___63302]));

var G__63303 = (i__5727__auto___63302 + (1));
i__5727__auto___63302 = G__63303;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(db));
}));
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic = (function (key,ks){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.after((function (db){
return cljs.core.run_BANG_((function (k){
var v = ((cljs.core.vector_QMARK_(k))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,k):cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,k));
return day8.re_frame_10x.fx.local_storage.storage.set(day8.re_frame_10x.fx.local_storage.safe_key(key),day8.re_frame_10x.tools.datafy.pr_str_safe(v));
}),ks);
}));
}));

/** @this {Function} */
(day8.re_frame_10x.fx.local_storage.save.cljs$lang$applyTo = (function (seq63272){
var G__63273 = cljs.core.first(seq63272);
var seq63272__$1 = cljs.core.next(seq63272);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63273,seq63272__$1);
}));

(day8.re_frame_10x.fx.local_storage.save.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_cofx(new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","load","day8.re-frame-10x.fx.local-storage/load",1482432658),(function (coeffects,p__63275){
var map__63276 = p__63275;
var map__63276__$1 = cljs.core.__destructure_map(map__63276);
var storage_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63276__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63276__$1,new cljs.core.Keyword(null,"or","or",235744169));
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(storage_key);
var v = day8.re_frame_10x.fx.local_storage.load(storage_key);
var G__63277 = coeffects;
var G__63277__$1 = (((!((fallback == null))))?cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63277,k,fallback),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","fallback","day8.re-frame-10x.fx.local-storage/fallback",-294997201),k], null),fallback):G__63277);
if((!((v == null)))){
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63277__$1,k,v),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.local-storage","stored","day8.re-frame-10x.fx.local-storage/stored",1674400390),k], null),v);
} else {
return G__63277__$1;
}
}));

//# sourceMappingURL=day8.re_frame_10x.fx.local_storage.js.map
