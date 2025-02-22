goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__64687 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__64688 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__64688);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___64881 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___64881)){
var new_db_64882 = temp__5823__auto___64881;
var fexpr__64695_64885 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__64695_64885.cljs$core$IFn$_invoke$arity$1 ? fexpr__64695_64885.cljs$core$IFn$_invoke$arity$1(new_db_64882) : fexpr__64695_64885.call(null, new_db_64882));
} else {
}

var seq__64696 = cljs.core.seq(effects_without_db);
var chunk__64697 = null;
var count__64698 = (0);
var i__64699 = (0);
while(true){
if((i__64699 < count__64698)){
var vec__64724 = chunk__64697.cljs$core$IIndexed$_nth$arity$2(null, i__64699);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64724,(1),null);
var temp__5821__auto___64894 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___64894)){
var effect_fn_64895 = temp__5821__auto___64894;
(effect_fn_64895.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64895.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64895.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__64897 = seq__64696;
var G__64898 = chunk__64697;
var G__64899 = count__64698;
var G__64900 = (i__64699 + (1));
seq__64696 = G__64897;
chunk__64697 = G__64898;
count__64698 = G__64899;
i__64699 = G__64900;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64696);
if(temp__5823__auto__){
var seq__64696__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64696__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64696__$1);
var G__64901 = cljs.core.chunk_rest(seq__64696__$1);
var G__64902 = c__5525__auto__;
var G__64903 = cljs.core.count(c__5525__auto__);
var G__64904 = (0);
seq__64696 = G__64901;
chunk__64697 = G__64902;
count__64698 = G__64903;
i__64699 = G__64904;
continue;
} else {
var vec__64731 = cljs.core.first(seq__64696__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64731,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64731,(1),null);
var temp__5821__auto___64905 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___64905)){
var effect_fn_64906 = temp__5821__auto___64905;
(effect_fn_64906.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64906.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64906.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__64907 = cljs.core.next(seq__64696__$1);
var G__64908 = null;
var G__64909 = (0);
var G__64910 = (0);
seq__64696 = G__64907;
chunk__64697 = G__64908;
count__64698 = G__64909;
i__64699 = G__64910;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44041__auto___64911 = re_frame.interop.now();
var duration__44042__auto___64912 = (end__44041__auto___64911 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44042__auto___64912,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44041__auto___64911);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__64687);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___64913 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___64913)){
var new_db_64914 = temp__5823__auto___64913;
var fexpr__64745_64915 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__64745_64915.cljs$core$IFn$_invoke$arity$1 ? fexpr__64745_64915.cljs$core$IFn$_invoke$arity$1(new_db_64914) : fexpr__64745_64915.call(null, new_db_64914));
} else {
}

var seq__64750 = cljs.core.seq(effects_without_db);
var chunk__64751 = null;
var count__64752 = (0);
var i__64753 = (0);
while(true){
if((i__64753 < count__64752)){
var vec__64771 = chunk__64751.cljs$core$IIndexed$_nth$arity$2(null, i__64753);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64771,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64771,(1),null);
var temp__5821__auto___64917 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___64917)){
var effect_fn_64918 = temp__5821__auto___64917;
(effect_fn_64918.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64918.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64918.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__64919 = seq__64750;
var G__64920 = chunk__64751;
var G__64921 = count__64752;
var G__64922 = (i__64753 + (1));
seq__64750 = G__64919;
chunk__64751 = G__64920;
count__64752 = G__64921;
i__64753 = G__64922;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64750);
if(temp__5823__auto__){
var seq__64750__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64750__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64750__$1);
var G__64923 = cljs.core.chunk_rest(seq__64750__$1);
var G__64924 = c__5525__auto__;
var G__64925 = cljs.core.count(c__5525__auto__);
var G__64926 = (0);
seq__64750 = G__64923;
chunk__64751 = G__64924;
count__64752 = G__64925;
i__64753 = G__64926;
continue;
} else {
var vec__64784 = cljs.core.first(seq__64750__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64784,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64784,(1),null);
var temp__5821__auto___64927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___64927)){
var effect_fn_64928 = temp__5821__auto___64927;
(effect_fn_64928.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64928.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64928.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__64929 = cljs.core.next(seq__64750__$1);
var G__64930 = null;
var G__64931 = (0);
var G__64932 = (0);
seq__64750 = G__64929;
chunk__64751 = G__64930;
count__64752 = G__64931;
i__64753 = G__64932;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__64790){
var map__64791 = p__64790;
var map__64791__$1 = cljs.core.__destructure_map(map__64791);
var effect = map__64791__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64791__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64791__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__64792 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64793 = null;
var count__64794 = (0);
var i__64795 = (0);
while(true){
if((i__64795 < count__64794)){
var effect = chunk__64793.cljs$core$IIndexed$_nth$arity$2(null, i__64795);
re_frame.fx.dispatch_later(effect);


var G__64933 = seq__64792;
var G__64934 = chunk__64793;
var G__64935 = count__64794;
var G__64936 = (i__64795 + (1));
seq__64792 = G__64933;
chunk__64793 = G__64934;
count__64794 = G__64935;
i__64795 = G__64936;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64792);
if(temp__5823__auto__){
var seq__64792__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64792__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64792__$1);
var G__64937 = cljs.core.chunk_rest(seq__64792__$1);
var G__64938 = c__5525__auto__;
var G__64939 = cljs.core.count(c__5525__auto__);
var G__64940 = (0);
seq__64792 = G__64937;
chunk__64793 = G__64938;
count__64794 = G__64939;
i__64795 = G__64940;
continue;
} else {
var effect = cljs.core.first(seq__64792__$1);
re_frame.fx.dispatch_later(effect);


var G__64941 = cljs.core.next(seq__64792__$1);
var G__64942 = null;
var G__64943 = (0);
var G__64944 = (0);
seq__64792 = G__64941;
chunk__64793 = G__64942;
count__64794 = G__64943;
i__64795 = G__64944;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__64803 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__64804 = null;
var count__64805 = (0);
var i__64806 = (0);
while(true){
if((i__64806 < count__64805)){
var vec__64818 = chunk__64804.cljs$core$IIndexed$_nth$arity$2(null, i__64806);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64818,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64818,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___64946 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___64946)){
var effect_fn_64947 = temp__5821__auto___64946;
(effect_fn_64947.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64947.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64947.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__64949 = seq__64803;
var G__64950 = chunk__64804;
var G__64951 = count__64805;
var G__64952 = (i__64806 + (1));
seq__64803 = G__64949;
chunk__64804 = G__64950;
count__64805 = G__64951;
i__64806 = G__64952;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64803);
if(temp__5823__auto__){
var seq__64803__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64803__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64803__$1);
var G__64954 = cljs.core.chunk_rest(seq__64803__$1);
var G__64955 = c__5525__auto__;
var G__64956 = cljs.core.count(c__5525__auto__);
var G__64957 = (0);
seq__64803 = G__64954;
chunk__64804 = G__64955;
count__64805 = G__64956;
i__64806 = G__64957;
continue;
} else {
var vec__64825 = cljs.core.first(seq__64803__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64825,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64825,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___64959 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___64959)){
var effect_fn_64960 = temp__5821__auto___64959;
(effect_fn_64960.cljs$core$IFn$_invoke$arity$1 ? effect_fn_64960.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_64960.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__64961 = cljs.core.next(seq__64803__$1);
var G__64962 = null;
var G__64963 = (0);
var G__64964 = (0);
seq__64803 = G__64961;
chunk__64804 = G__64962;
count__64805 = G__64963;
i__64806 = G__64964;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__64841 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__64842 = null;
var count__64843 = (0);
var i__64844 = (0);
while(true){
if((i__64844 < count__64843)){
var event = chunk__64842.cljs$core$IIndexed$_nth$arity$2(null, i__64844);
re_frame.router.dispatch(event);


var G__64966 = seq__64841;
var G__64967 = chunk__64842;
var G__64968 = count__64843;
var G__64969 = (i__64844 + (1));
seq__64841 = G__64966;
chunk__64842 = G__64967;
count__64843 = G__64968;
i__64844 = G__64969;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64841);
if(temp__5823__auto__){
var seq__64841__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64841__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64841__$1);
var G__64970 = cljs.core.chunk_rest(seq__64841__$1);
var G__64971 = c__5525__auto__;
var G__64972 = cljs.core.count(c__5525__auto__);
var G__64973 = (0);
seq__64841 = G__64970;
chunk__64842 = G__64971;
count__64843 = G__64972;
i__64844 = G__64973;
continue;
} else {
var event = cljs.core.first(seq__64841__$1);
re_frame.router.dispatch(event);


var G__64975 = cljs.core.next(seq__64841__$1);
var G__64976 = null;
var G__64977 = (0);
var G__64978 = (0);
seq__64841 = G__64975;
chunk__64842 = G__64976;
count__64843 = G__64977;
i__64844 = G__64978;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__64851 = cljs.core.seq(value);
var chunk__64852 = null;
var count__64853 = (0);
var i__64854 = (0);
while(true){
if((i__64854 < count__64853)){
var event = chunk__64852.cljs$core$IIndexed$_nth$arity$2(null, i__64854);
clear_event(event);


var G__64979 = seq__64851;
var G__64980 = chunk__64852;
var G__64981 = count__64853;
var G__64982 = (i__64854 + (1));
seq__64851 = G__64979;
chunk__64852 = G__64980;
count__64853 = G__64981;
i__64854 = G__64982;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64851);
if(temp__5823__auto__){
var seq__64851__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64851__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64851__$1);
var G__64984 = cljs.core.chunk_rest(seq__64851__$1);
var G__64985 = c__5525__auto__;
var G__64986 = cljs.core.count(c__5525__auto__);
var G__64987 = (0);
seq__64851 = G__64984;
chunk__64852 = G__64985;
count__64853 = G__64986;
i__64854 = G__64987;
continue;
} else {
var event = cljs.core.first(seq__64851__$1);
clear_event(event);


var G__64988 = cljs.core.next(seq__64851__$1);
var G__64989 = null;
var G__64990 = (0);
var G__64991 = (0);
seq__64851 = G__64988;
chunk__64852 = G__64989;
count__64853 = G__64990;
i__64854 = G__64991;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__64871 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__64872 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__64872);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44041__auto___64993 = re_frame.interop.now();
var duration__44042__auto___64994 = (end__44041__auto___64993 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44042__auto___64994,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44041__auto___64993);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__64871);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
