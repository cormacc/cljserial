goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__84465){
var map__84467 = p__84465;
var map__84467__$1 = cljs.core.__destructure_map(map__84467);
var runtime = map__84467__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84467__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_84905 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_84905)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__84482 = runtime;
var G__84483 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_84905);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__84482,G__84483) : shadow.remote.runtime.shared.process.call(null, G__84482,G__84483));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__84491,res){
var map__84493 = p__84491;
var map__84493__$1 = cljs.core.__destructure_map(map__84493);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84493__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84493__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__84494 = res;
var G__84494__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__84494,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__84494);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__84494__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__84494__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__84513 = arguments.length;
switch (G__84513) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__84523,msg,handlers,timeout_after_ms){
var map__84524 = p__84523;
var map__84524__$1 = cljs.core.__destructure_map(map__84524);
var runtime = map__84524__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84524__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84927 = arguments.length;
var i__5727__auto___84928 = (0);
while(true){
if((i__5727__auto___84928 < len__5726__auto___84927)){
args__5732__auto__.push((arguments[i__5727__auto___84928]));

var G__84929 = (i__5727__auto___84928 + (1));
i__5727__auto___84928 = G__84929;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__84560,ev,args){
var map__84562 = p__84560;
var map__84562__$1 = cljs.core.__destructure_map(map__84562);
var runtime = map__84562__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__84564 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__84567 = null;
var count__84568 = (0);
var i__84569 = (0);
while(true){
if((i__84569 < count__84568)){
var ext = chunk__84567.cljs$core$IIndexed$_nth$arity$2(null, i__84569);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__84934 = seq__84564;
var G__84935 = chunk__84567;
var G__84936 = count__84568;
var G__84937 = (i__84569 + (1));
seq__84564 = G__84934;
chunk__84567 = G__84935;
count__84568 = G__84936;
i__84569 = G__84937;
continue;
} else {
var G__84939 = seq__84564;
var G__84940 = chunk__84567;
var G__84941 = count__84568;
var G__84942 = (i__84569 + (1));
seq__84564 = G__84939;
chunk__84567 = G__84940;
count__84568 = G__84941;
i__84569 = G__84942;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__84564);
if(temp__5823__auto__){
var seq__84564__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84564__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__84564__$1);
var G__84951 = cljs.core.chunk_rest(seq__84564__$1);
var G__84952 = c__5525__auto__;
var G__84953 = cljs.core.count(c__5525__auto__);
var G__84954 = (0);
seq__84564 = G__84951;
chunk__84567 = G__84952;
count__84568 = G__84953;
i__84569 = G__84954;
continue;
} else {
var ext = cljs.core.first(seq__84564__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__84955 = cljs.core.next(seq__84564__$1);
var G__84956 = null;
var G__84957 = (0);
var G__84958 = (0);
seq__84564 = G__84955;
chunk__84567 = G__84956;
count__84568 = G__84957;
i__84569 = G__84958;
continue;
} else {
var G__84959 = cljs.core.next(seq__84564__$1);
var G__84960 = null;
var G__84961 = (0);
var G__84962 = (0);
seq__84564 = G__84959;
chunk__84567 = G__84960;
count__84568 = G__84961;
i__84569 = G__84962;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq84540){
var G__84543 = cljs.core.first(seq84540);
var seq84540__$1 = cljs.core.next(seq84540);
var G__84546 = cljs.core.first(seq84540__$1);
var seq84540__$2 = cljs.core.next(seq84540__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84543,G__84546,seq84540__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__84608,p__84609){
var map__84610 = p__84608;
var map__84610__$1 = cljs.core.__destructure_map(map__84610);
var runtime = map__84610__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84610__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__84611 = p__84609;
var map__84611__$1 = cljs.core.__destructure_map(map__84611);
var msg = map__84611__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84611__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__84615 = cljs.core.deref(state_ref);
var map__84615__$1 = cljs.core.__destructure_map(map__84615);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84615__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84615__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__84644,msg){
var map__84648 = p__84644;
var map__84648__$1 = cljs.core.__destructure_map(map__84648);
var runtime = map__84648__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84648__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__84694,key,p__84695){
var map__84697 = p__84694;
var map__84697__$1 = cljs.core.__destructure_map(map__84697);
var state = map__84697__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84697__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__84698 = p__84695;
var map__84698__$1 = cljs.core.__destructure_map(map__84698);
var spec = map__84698__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84698__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84698__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__84749,key,spec){
var map__84752 = p__84749;
var map__84752__$1 = cljs.core.__destructure_map(map__84752);
var runtime = map__84752__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84752__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___85006 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___85006 == null)){
} else {
var on_welcome_85007 = temp__5827__auto___85006;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_85007.cljs$core$IFn$_invoke$arity$0 ? on_welcome_85007.cljs$core$IFn$_invoke$arity$0() : on_welcome_85007.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__84761_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__84761_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__84762_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__84762_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__84763_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__84763_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__84764_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__84764_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__84765_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__84765_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__84791,key){
var map__84797 = p__84791;
var map__84797__$1 = cljs.core.__destructure_map(map__84797);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84797__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__84808,msg){
var map__84814 = p__84808;
var map__84814__$1 = cljs.core.__destructure_map(map__84814);
var runtime = map__84814__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84814__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__84824,p__84825){
var map__84826 = p__84824;
var map__84826__$1 = cljs.core.__destructure_map(map__84826);
var runtime = map__84826__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84826__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__84827 = p__84825;
var map__84827__$1 = cljs.core.__destructure_map(map__84827);
var msg = map__84827__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84827__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84827__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__84840 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__84843 = null;
var count__84844 = (0);
var i__84845 = (0);
while(true){
if((i__84845 < count__84844)){
var map__84868 = chunk__84843.cljs$core$IIndexed$_nth$arity$2(null, i__84845);
var map__84868__$1 = cljs.core.__destructure_map(map__84868);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84868__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__85058 = seq__84840;
var G__85059 = chunk__84843;
var G__85060 = count__84844;
var G__85061 = (i__84845 + (1));
seq__84840 = G__85058;
chunk__84843 = G__85059;
count__84844 = G__85060;
i__84845 = G__85061;
continue;
} else {
var G__85062 = seq__84840;
var G__85063 = chunk__84843;
var G__85064 = count__84844;
var G__85065 = (i__84845 + (1));
seq__84840 = G__85062;
chunk__84843 = G__85063;
count__84844 = G__85064;
i__84845 = G__85065;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__84840);
if(temp__5823__auto__){
var seq__84840__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84840__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__84840__$1);
var G__85066 = cljs.core.chunk_rest(seq__84840__$1);
var G__85067 = c__5525__auto__;
var G__85068 = cljs.core.count(c__5525__auto__);
var G__85069 = (0);
seq__84840 = G__85066;
chunk__84843 = G__85067;
count__84844 = G__85068;
i__84845 = G__85069;
continue;
} else {
var map__84887 = cljs.core.first(seq__84840__$1);
var map__84887__$1 = cljs.core.__destructure_map(map__84887);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84887__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__85070 = cljs.core.next(seq__84840__$1);
var G__85071 = null;
var G__85072 = (0);
var G__85073 = (0);
seq__84840 = G__85070;
chunk__84843 = G__85071;
count__84844 = G__85072;
i__84845 = G__85073;
continue;
} else {
var G__85074 = cljs.core.next(seq__84840__$1);
var G__85075 = null;
var G__85076 = (0);
var G__85077 = (0);
seq__84840 = G__85074;
chunk__84843 = G__85075;
count__84844 = G__85076;
i__84845 = G__85077;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
