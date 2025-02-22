goog.provide('refx.interceptors');
refx.interceptors.debug = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$interceptors$debug_before(context){
refx.log.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling event:",refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], 0));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function refx$interceptors$debug_after(context){
var event = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("refx.interceptors","not-found","refx.interceptors/not-found",174991419));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("refx.interceptors","not-found","refx.interceptors/not-found",174991419))){
refx.log.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes in:",event], 0));
} else {
var vec__86579_86748 = clojure.data.diff(orig_db,new_db);
var only_before_86749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86579_86748,(0),null);
var only_after_86750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86579_86748,(1),null);
var db_changed_QMARK__86751 = (((!((only_before_86749 == null)))) || ((!((only_after_86750 == null)))));
if(db_changed_QMARK__86751){
refx.log.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_86749], 0));

refx.log.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_86750], 0));
} else {
refx.log.info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes resulted from:",event], 0));
}
}

return context;
})], 0));
refx.interceptors.unwrap = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$interceptors$unwrap_before(context){
var vec__86592 = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86592,(0),null);
var payload = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86592,(1),null);
var event = vec__86592;
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(event))) && (cljs.core.map_QMARK_(payload)))))){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"unwrap\" interceptor requires event to be a 2-vector of [event-id payload-map]. Got ",event], 0));

return context;
} else {
return refx.interceptor.assoc_coeffect(context,new cljs.core.Keyword(null,"event","event",301435442),payload);
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function refx$interceptors$unwrap_after(context){
return refx.interceptor.assoc_coeffect(context,new cljs.core.Keyword(null,"event","event",301435442),refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403)));
})], 0));
refx.interceptors.trim_v = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$interceptors$trim_v_before(context){
if((!(cljs.core.vector_QMARK_(refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)))))){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"trim-v\" interceptor expected event to be a vector. Got a ",cljs.core.type(refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)))], 0));

return context;
} else {
return refx.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.subvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0));
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function refx$interceptors$trim_v_after(context){
return refx.interceptor.assoc_coeffect(context,new cljs.core.Keyword(null,"event","event",301435442),refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403)));
})], 0));
refx.interceptors.path = (function refx$interceptors$path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___86760 = arguments.length;
var i__5727__auto___86761 = (0);
while(true){
if((i__5727__auto___86761 < len__5726__auto___86760)){
args__5732__auto__.push((arguments[i__5727__auto___86761]));

var G__86762 = (i__5727__auto___86761 + (1));
i__5727__auto___86761 = G__86762;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(refx.interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
if(cljs.core.empty_QMARK_(path)){
refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\"path\" interceptor given no params"], 0));
} else {
}

return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var original_db = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
return refx.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword("refx.interceptors","orig-db","refx.interceptors/orig-db",2074938380),cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db_store = new cljs.core.Keyword("refx.interceptors","orig-db","refx.interceptors/orig-db",2074938380).cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = refx.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword("refx.interceptors","orig-db","refx.interceptors/orig-db",2074938380),new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("refx.interceptors","not-found","refx.interceptors/not-found",174991419));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("refx.interceptors","not-found","refx.interceptors/not-found",174991419))){
return context_SINGLEQUOTE_;
} else {
return refx.interceptor.assoc_effect(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(original_db,path,db));
}
})], 0));
}));

(refx.interceptors.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(refx.interceptors.path.cljs$lang$applyTo = (function (seq86636){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86636));
}));

refx.interceptors.enrich = (function refx$interceptors$enrich(f){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function refx$interceptors$enrich_$_enrich_after(context){
var event = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var prev_db = ((cljs.core.contains_QMARK_(refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
var new_db = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(prev_db,event) : f.call(null, prev_db,event));
return refx.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(function (){var or__5002__auto__ = new_db;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return prev_db;
}
})());
})], 0));
});
refx.interceptors.after = (function refx$interceptors$after(f){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function refx$interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
var event = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null, db,event));

return context;
})], 0));
});
refx.interceptors.on_changes = (function refx$interceptors$on_changes(var_args){
var args__5732__auto__ = [];
var len__5726__auto___86775 = arguments.length;
var i__5727__auto___86776 = (0);
while(true){
if((i__5727__auto___86776 < len__5726__auto___86775)){
args__5732__auto__.push((arguments[i__5727__auto___86776]));

var G__86777 = (i__5727__auto___86776 + (1));
i__5727__auto___86776 = G__86777;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return refx.interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(refx.interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function refx$interceptors$on_change_after(context){
var new_db = refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = refx.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86695_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__86695_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__86696_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__86696_SHARP_);
}),in_paths);
var changed_ins_QMARK_ = (function (){var and__5000__auto__ = cljs.core.contains_QMARK_(refx.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(and__5000__auto__){
return cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(changed_ins_QMARK_)){
return refx.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
}));

(refx.interceptors.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(refx.interceptors.on_changes.cljs$lang$applyTo = (function (seq86699){
var G__86700 = cljs.core.first(seq86699);
var seq86699__$1 = cljs.core.next(seq86699);
var G__86701 = cljs.core.first(seq86699__$1);
var seq86699__$2 = cljs.core.next(seq86699__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86700,G__86701,seq86699__$2);
}));

if((typeof refx !== 'undefined') && (typeof refx.interceptors !== 'undefined') && (typeof refx.interceptors.global_interceptors !== 'undefined')){
} else {
refx.interceptors.global_interceptors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(refx.interop.empty_queue);
}
/**
 * An interceptor which adds registered global interceptors to the context's queue.
 * 
 * NOTE: :queue is a Clojure.lang.PersistentQueue and not a vector.
 */
refx.interceptors.inject_global_interceptors = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inject-global-interceptors","inject-global-interceptors",-2144129737),new cljs.core.Keyword(null,"before","before",-1633692388),(function refx$interceptors$inject_global_interceptors_before(context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__86725_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(refx.interceptors.global_interceptors),p1__86725_SHARP_);
}));
})], 0));

//# sourceMappingURL=refx.interceptors.js.map
