goog.provide('re_frame.subs.alpha');
re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),(function (_,k,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.register.alpha.lifecycle__GT_method,cljs.core.assoc,k,(function (q){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__86944 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__86945 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),q], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__86945);

try{try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(q) : f.call(null, q));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44041__auto___87077 = re_frame.interop.now();
var duration__44042__auto___87078 = (end__44041__auto___87077 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44042__auto___87078,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44041__auto___87077);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__86944);
}} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(q) : f.call(null, q));
}
}));
}));
re_frame.subs.alpha.sub = (function re_frame$subs$alpha$sub(var_args){
var G__86957 = arguments.length;
switch (G__86957) {
case 1:
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
if((q instanceof cljs.core.Keyword)){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2(q,cljs.core.PersistentArrayMap.EMPTY);
} else {
var md = re_frame.query.alpha.method(q);
if(cljs.core.map_QMARK_(q)){
return (md.cljs$core$IFn$_invoke$arity$1 ? md.cljs$core$IFn$_invoke$arity$1(q) : md.call(null, q));
} else {
if(cljs.core.vector_QMARK_(q)){
var G__86960 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212),re_frame.query.alpha.id(q),new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q),new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792),q], null);
return (md.cljs$core$IFn$_invoke$arity$1 ? md.cljs$core$IFn$_invoke$arity$1(G__86960) : md.call(null, G__86960));
} else {
return null;
}
}
}
}));

(re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2 = (function (id,q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212),id));
}));

(re_frame.subs.alpha.sub.cljs$lang$maxFixedArity = 2);

re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"sub","sub",-2093760025),(function() { 
var G__87099__delegate = function (kind,id,args){
var vec__86968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,id,re_frame.subs.alpha.sub,re_frame.query.alpha.query_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86968,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86968,(1),null);
return re_frame.registrar.register_handler(kind,id,(function re_frame$subs$alpha$subs_handler_fn(_,q){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(q,null) : inputs_fn.call(null, q,null));
var rid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var r = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__86977 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__86978 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),q,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(rid)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__86978);

try{try{var subscription = (function (){var G__86979 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__86980 = q;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__86979,G__86980) : computation_fn.call(null, G__86979,G__86980));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__44043__auto___87110 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__44043__auto___87110);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44041__auto___87115 = re_frame.interop.now();
var duration__44042__auto___87116 = (end__44041__auto___87115 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44042__auto___87116,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44041__auto___87115);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__86977);
}} else {
var subscription = (function (){var G__86982 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__86983 = q;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__86982,G__86983) : computation_fn.call(null, G__86982,G__86983));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__44043__auto___87127 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__44043__auto___87127);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(rid,re_frame.interop.reagent_id(r));

return r;
}));
};
var G__87099 = function (kind,id,var_args){
var args = null;
if (arguments.length > 2) {
var G__87131__i = 0, G__87131__a = new Array(arguments.length -  2);
while (G__87131__i < G__87131__a.length) {G__87131__a[G__87131__i] = arguments[G__87131__i + 2]; ++G__87131__i;}
  args = new cljs.core.IndexedSeq(G__87131__a,0,null);
} 
return G__87099__delegate.call(this,kind,id,args);};
G__87099.cljs$lang$maxFixedArity = 2;
G__87099.cljs$lang$applyTo = (function (arglist__87132){
var kind = cljs.core.first(arglist__87132);
arglist__87132 = cljs.core.next(arglist__87132);
var id = cljs.core.first(arglist__87132);
var args = cljs.core.rest(arglist__87132);
return G__87099__delegate(kind,id,args);
});
G__87099.cljs$core$IFn$_invoke$arity$variadic = G__87099__delegate;
return G__87099;
})()
);
re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"legacy-sub","legacy-sub",207431632),(function() { 
var G__87133__delegate = function (_,id,args){
var vec__87004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,id,re_frame.subs.alpha.sub,re_frame.query.alpha.query_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87004,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87004,(1),null);
return re_frame.registrar.register_handler(new cljs.core.Keyword(null,"sub","sub",-2093760025),id,(function re_frame$subs$alpha$subs_handler_fn(___$1,q){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(q,null) : inputs_fn.call(null, q,null));
var rid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var r = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__87012 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__87013 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),q,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(rid)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__87013);

try{try{var q__$1 = ((cljs.core.map_QMARK_(q))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var or__5002__auto__ = new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.id(q)], null);
}
})(),cljs.core.assoc,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q)):q);
var subscription = (function (){var G__87024 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__87025 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__87024,G__87025) : computation_fn.call(null, G__87024,G__87025));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__44043__auto___87145 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__44043__auto___87145);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44041__auto___87148 = re_frame.interop.now();
var duration__44042__auto___87149 = (end__44041__auto___87148 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44042__auto___87149,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44041__auto___87148);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__87012);
}} else {
var q__$1 = ((cljs.core.map_QMARK_(q))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var or__5002__auto__ = new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.id(q)], null);
}
})(),cljs.core.assoc,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q)):q);
var subscription = (function (){var G__87031 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__87032 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__87031,G__87032) : computation_fn.call(null, G__87031,G__87032));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__44043__auto___87156 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__44043__auto___87156);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(rid,re_frame.interop.reagent_id(r));

return r;
}));
};
var G__87133 = function (_,id,var_args){
var args = null;
if (arguments.length > 2) {
var G__87157__i = 0, G__87157__a = new Array(arguments.length -  2);
while (G__87157__i < G__87157__a.length) {G__87157__a[G__87157__i] = arguments[G__87157__i + 2]; ++G__87157__i;}
  args = new cljs.core.IndexedSeq(G__87157__a,0,null);
} 
return G__87133__delegate.call(this,_,id,args);};
G__87133.cljs$lang$maxFixedArity = 2;
G__87133.cljs$lang$applyTo = (function (arglist__87158){
var _ = cljs.core.first(arglist__87158);
arglist__87158 = cljs.core.next(arglist__87158);
var id = cljs.core.first(arglist__87158);
var args = cljs.core.rest(arglist__87158);
return G__87133__delegate(_,id,args);
});
G__87133.cljs$core$IFn$_invoke$arity$variadic = G__87133__delegate;
return G__87133;
})()
);
re_frame.subs.alpha.sub_reactive = (function re_frame$subs$alpha$sub_reactive(q){
re_frame.subs.warn_when_not_reactive();

var or__5002__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var md = re_frame.query.alpha.lifecycle(q);
var r = re_frame.query.alpha.handle(q);
re_frame.interop.add_on_dispose_BANG_(r,(function (){
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$2(q,md);
}));

return re_frame.query.alpha.cache_BANG_(q,r);
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"reactive","reactive",717758366),re_frame.subs.alpha.sub_reactive);
re_frame.subs.alpha.sub_safe = (function re_frame$subs$alpha$sub_safe(q){
if(re_frame.interop.reactive_QMARK_()){
return re_frame.subs.alpha.sub_reactive(q);
} else {
var or__5002__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_frame.query.alpha.handle(q);
}
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"safe","safe",-125058214),re_frame.subs.alpha.sub_safe);
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"default","default",-1987822328),re_frame.subs.alpha.sub_safe);
re_frame.subs.alpha.sub_forever = (function re_frame$subs$alpha$sub_forever(q){
var or__5002__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_frame.query.alpha.cache_BANG_(q,re_frame.query.alpha.handle(q));
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"forever","forever",2103455015),re_frame.subs.alpha.sub_forever);
re_frame.subs.alpha.nil_ref = re_frame.interop.ratom(null);
re_frame.subs.alpha.sub_flow = (function re_frame$subs$alpha$sub_flow(q){
var or__5002__auto__ = (function (){var G__87057 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = cljs.core.second(new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return q;
}
})());
var G__87057__$1 = (((G__87057 == null))?null:re_frame.flow.alpha.lookup(G__87057));
var G__87057__$2 = (((G__87057__$1 == null))?null:cljs.core.meta(G__87057__$1));
if((G__87057__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("re-frame.flow.alpha","ref","re-frame.flow.alpha/ref",854314016).cljs$core$IFn$_invoke$arity$1(G__87057__$2);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return re_frame.subs.alpha.nil_ref;
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"flow","flow",590489032),re_frame.subs.alpha.sub_flow);

//# sourceMappingURL=re_frame.subs.alpha.js.map
