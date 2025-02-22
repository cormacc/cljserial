goog.provide('refx.effects');
refx.effects.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
refx.effects.register = (function refx$effects$register(id,handler){
return refx.registry.add_BANG_(refx.effects.kind,id,handler);
});
refx.effects.db_effect = (function refx$effects$db_effect(db){
if((cljs.core.deref(refx.db.app_db) === db)){
return null;
} else {
return cljs.core.reset_BANG_(refx.db.app_db,db);
}
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
refx.effects.do_fx = refx.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function refx$effects$do_fx_after(context){
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___87060 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___87060)){
var new_db_87062 = temp__5823__auto___87060;
refx.effects.db_effect(new_db_87062);
} else {
}

var seq__86837 = cljs.core.seq(effects_without_db);
var chunk__86838 = null;
var count__86839 = (0);
var i__86840 = (0);
while(true){
if((i__86840 < count__86839)){
var vec__86869 = chunk__86838.cljs$core$IIndexed$_nth$arity$2(null, i__86840);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86869,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86869,(1),null);
var temp__5821__auto___87067 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5821__auto___87067)){
var effect_fn_87071 = temp__5821__auto___87067;
(effect_fn_87071.cljs$core$IFn$_invoke$arity$1 ? effect_fn_87071.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_87071.call(null, effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__87072 = seq__86837;
var G__87073 = chunk__86838;
var G__87074 = count__86839;
var G__87075 = (i__86840 + (1));
seq__86837 = G__87072;
chunk__86838 = G__87073;
count__86839 = G__87074;
i__86840 = G__87075;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86837);
if(temp__5823__auto__){
var seq__86837__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86837__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86837__$1);
var G__87080 = cljs.core.chunk_rest(seq__86837__$1);
var G__87081 = c__5525__auto__;
var G__87082 = cljs.core.count(c__5525__auto__);
var G__87083 = (0);
seq__86837 = G__87080;
chunk__86838 = G__87081;
count__86839 = G__87082;
i__86840 = G__87083;
continue;
} else {
var vec__86878 = cljs.core.first(seq__86837__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86878,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86878,(1),null);
var temp__5821__auto___87093 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5821__auto___87093)){
var effect_fn_87094 = temp__5821__auto___87093;
(effect_fn_87094.cljs$core$IFn$_invoke$arity$1 ? effect_fn_87094.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_87094.call(null, effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["no handler registered for effect:",fx_id,". Ignoring."], 0));
}


var G__87095 = cljs.core.next(seq__86837__$1);
var G__87096 = null;
var G__87097 = (0);
var G__87098 = (0);
seq__86837 = G__87095;
chunk__86838 = G__87096;
count__86839 = G__87097;
i__86840 = G__87098;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
refx.effects.dispatch_later = (function refx$effects$dispatch_later(p__86885){
var map__86886 = p__86885;
var map__86886__$1 = cljs.core.__destructure_map(map__86886);
var effect = map__86886__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86886__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-later value:",effect], 0));
} else {
return refx.interop.set_timeout_BANG_((function (){
return refx.dispatch.dispatch(dispatch);
}),ms);
}
});
refx.effects.register(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return refx.effects.dispatch_later(value);
} else {
var seq__86911 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__86912 = null;
var count__86913 = (0);
var i__86914 = (0);
while(true){
if((i__86914 < count__86913)){
var effect = chunk__86912.cljs$core$IIndexed$_nth$arity$2(null, i__86914);
refx.effects.dispatch_later(effect);


var G__87111 = seq__86911;
var G__87112 = chunk__86912;
var G__87113 = count__86913;
var G__87114 = (i__86914 + (1));
seq__86911 = G__87111;
chunk__86912 = G__87112;
count__86913 = G__87113;
i__86914 = G__87114;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86911);
if(temp__5823__auto__){
var seq__86911__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86911__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86911__$1);
var G__87117 = cljs.core.chunk_rest(seq__86911__$1);
var G__87118 = c__5525__auto__;
var G__87119 = cljs.core.count(c__5525__auto__);
var G__87120 = (0);
seq__86911 = G__87117;
chunk__86912 = G__87118;
count__86913 = G__87119;
i__86914 = G__87120;
continue;
} else {
var effect = cljs.core.first(seq__86911__$1);
refx.effects.dispatch_later(effect);


var G__87123 = cljs.core.next(seq__86911__$1);
var G__87124 = null;
var G__87125 = (0);
var G__87126 = (0);
seq__86911 = G__87123;
chunk__86912 = G__87124;
count__86913 = G__87125;
i__86914 = G__87126;
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
refx.effects.register(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__86930 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__86931 = null;
var count__86932 = (0);
var i__86933 = (0);
while(true){
if((i__86933 < count__86932)){
var vec__86953 = chunk__86931.cljs$core$IIndexed$_nth$arity$2(null, i__86933);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86953,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86953,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___87134 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5821__auto___87134)){
var effect_fn_87135 = temp__5821__auto___87134;
(effect_fn_87135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_87135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_87135.call(null, effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__87136 = seq__86930;
var G__87138 = chunk__86931;
var G__87139 = count__86932;
var G__87140 = (i__86933 + (1));
seq__86930 = G__87136;
chunk__86931 = G__87138;
count__86932 = G__87139;
i__86933 = G__87140;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86930);
if(temp__5823__auto__){
var seq__86930__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86930__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86930__$1);
var G__87141 = cljs.core.chunk_rest(seq__86930__$1);
var G__87142 = c__5525__auto__;
var G__87143 = cljs.core.count(c__5525__auto__);
var G__87144 = (0);
seq__86930 = G__87141;
chunk__86931 = G__87142;
count__86932 = G__87143;
i__86933 = G__87144;
continue;
} else {
var vec__86964 = cljs.core.first(seq__86930__$1);
var fx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86964,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86964,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),fx_id)){
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___87147 = refx.registry.lookup.cljs$core$IFn$_invoke$arity$3(refx.effects.kind,fx_id,false);
if(cljs.core.truth_(temp__5821__auto___87147)){
var effect_fn_87150 = temp__5821__auto___87147;
(effect_fn_87150.cljs$core$IFn$_invoke$arity$1 ? effect_fn_87150.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_87150.call(null, effect_value));
} else {
refx.log.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in \":fx\" effect found ",fx_id," which has no associated handler. Ignoring."], 0));
}


var G__87151 = cljs.core.next(seq__86930__$1);
var G__87152 = null;
var G__87153 = (0);
var G__87154 = (0);
seq__86930 = G__87151;
chunk__86931 = G__87152;
count__86932 = G__87153;
i__86933 = G__87154;
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
refx.effects.register(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return refx.dispatch.dispatch(value);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return refx.log.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__86986 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__86987 = null;
var count__86988 = (0);
var i__86989 = (0);
while(true){
if((i__86989 < count__86988)){
var event = chunk__86987.cljs$core$IIndexed$_nth$arity$2(null, i__86989);
refx.dispatch.dispatch(event);


var G__87159 = seq__86986;
var G__87160 = chunk__86987;
var G__87161 = count__86988;
var G__87162 = (i__86989 + (1));
seq__86986 = G__87159;
chunk__86987 = G__87160;
count__86988 = G__87161;
i__86989 = G__87162;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86986);
if(temp__5823__auto__){
var seq__86986__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86986__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86986__$1);
var G__87165 = cljs.core.chunk_rest(seq__86986__$1);
var G__87166 = c__5525__auto__;
var G__87167 = cljs.core.count(c__5525__auto__);
var G__87168 = (0);
seq__86986 = G__87165;
chunk__86987 = G__87166;
count__86988 = G__87167;
i__86989 = G__87168;
continue;
} else {
var event = cljs.core.first(seq__86986__$1);
refx.dispatch.dispatch(event);


var G__87169 = cljs.core.next(seq__86986__$1);
var G__87170 = null;
var G__87171 = (0);
var G__87172 = (0);
seq__86986 = G__87169;
chunk__86987 = G__87170;
count__86988 = G__87171;
i__86989 = G__87172;
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
refx.effects.register(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
if(cljs.core.sequential_QMARK_(value)){
var seq__87033 = cljs.core.seq(value);
var chunk__87034 = null;
var count__87035 = (0);
var i__87036 = (0);
while(true){
if((i__87036 < count__87035)){
var event_id = chunk__87034.cljs$core$IIndexed$_nth$arity$2(null, i__87036);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__87177 = seq__87033;
var G__87178 = chunk__87034;
var G__87179 = count__87035;
var G__87180 = (i__87036 + (1));
seq__87033 = G__87177;
chunk__87034 = G__87178;
count__87035 = G__87179;
i__87036 = G__87180;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__87033);
if(temp__5823__auto__){
var seq__87033__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87033__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__87033__$1);
var G__87181 = cljs.core.chunk_rest(seq__87033__$1);
var G__87182 = c__5525__auto__;
var G__87183 = cljs.core.count(c__5525__auto__);
var G__87184 = (0);
seq__87033 = G__87181;
chunk__87034 = G__87182;
count__87035 = G__87183;
i__87036 = G__87184;
continue;
} else {
var event_id = cljs.core.first(seq__87033__$1);
refx.registry.remove_BANG_(refx.events.kind,event_id);


var G__87185 = cljs.core.next(seq__87033__$1);
var G__87186 = null;
var G__87187 = (0);
var G__87188 = (0);
seq__87033 = G__87185;
chunk__87034 = G__87186;
count__87035 = G__87187;
i__87036 = G__87188;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return refx.registry.clear_BANG_(refx.events.kind);
}
}));
refx.effects.register(new cljs.core.Keyword(null,"db","db",993250759),refx.effects.db_effect);

//# sourceMappingURL=refx.effects.js.map
