goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__85817,p__85818){
var map__85820 = p__85817;
var map__85820__$1 = cljs.core.__destructure_map(map__85820);
var svc = map__85820__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85820__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85820__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85820__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__85821 = p__85818;
var map__85821__$1 = cljs.core.__destructure_map(map__85821);
var msg = map__85821__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85821__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85821__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85821__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85821__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__85825,p__85826){
var map__85827 = p__85825;
var map__85827__$1 = cljs.core.__destructure_map(map__85827);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85827__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__85828 = p__85826;
var map__85828__$1 = cljs.core.__destructure_map(map__85828);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85828__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__85833,p__85834){
var map__85838 = p__85833;
var map__85838__$1 = cljs.core.__destructure_map(map__85838);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85838__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85838__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__85839 = p__85834;
var map__85839__$1 = cljs.core.__destructure_map(map__85839);
var msg = map__85839__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__85839__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__85857,tid){
var map__85858 = p__85857;
var map__85858__$1 = cljs.core.__destructure_map(map__85858);
var svc = map__85858__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85858__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__85889 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__85891 = null;
var count__85894 = (0);
var i__85896 = (0);
while(true){
if((i__85896 < count__85894)){
var vec__85913 = chunk__85891.cljs$core$IIndexed$_nth$arity$2(null, i__85896);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85913,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85913,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__85972 = seq__85889;
var G__85973 = chunk__85891;
var G__85974 = count__85894;
var G__85975 = (i__85896 + (1));
seq__85889 = G__85972;
chunk__85891 = G__85973;
count__85894 = G__85974;
i__85896 = G__85975;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__85889);
if(temp__5823__auto__){
var seq__85889__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__85889__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__85889__$1);
var G__85978 = cljs.core.chunk_rest(seq__85889__$1);
var G__85979 = c__5525__auto__;
var G__85980 = cljs.core.count(c__5525__auto__);
var G__85981 = (0);
seq__85889 = G__85978;
chunk__85891 = G__85979;
count__85894 = G__85980;
i__85896 = G__85981;
continue;
} else {
var vec__85928 = cljs.core.first(seq__85889__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85928,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85928,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__85982 = cljs.core.next(seq__85889__$1);
var G__85983 = null;
var G__85984 = (0);
var G__85985 = (0);
seq__85889 = G__85982;
chunk__85891 = G__85983;
count__85894 = G__85984;
i__85896 = G__85985;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__85865_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__85865_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__85866_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__85866_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__85867_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__85867_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__85868_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__85868_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__85934){
var map__85935 = p__85934;
var map__85935__$1 = cljs.core.__destructure_map(map__85935);
var svc = map__85935__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85935__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85935__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
