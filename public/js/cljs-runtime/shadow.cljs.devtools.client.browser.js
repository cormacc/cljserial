goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___87927 = arguments.length;
var i__5727__auto___87928 = (0);
while(true){
if((i__5727__auto___87928 < len__5726__auto___87927)){
args__5732__auto__.push((arguments[i__5727__auto___87928]));

var G__87929 = (i__5727__auto___87928 + (1));
i__5727__auto___87928 = G__87929;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq86922){
var G__86923 = cljs.core.first(seq86922);
var seq86922__$1 = cljs.core.next(seq86922);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86923,seq86922__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__86940 = cljs.core.seq(sources);
var chunk__86941 = null;
var count__86942 = (0);
var i__86943 = (0);
while(true){
if((i__86943 < count__86942)){
var map__86967 = chunk__86941.cljs$core$IIndexed$_nth$arity$2(null, i__86943);
var map__86967__$1 = cljs.core.__destructure_map(map__86967);
var src = map__86967__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86967__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86967__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86967__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e86975){var e_87935 = e86975;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_87935);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_87935.message)].join('')));
}

var G__87938 = seq__86940;
var G__87939 = chunk__86941;
var G__87940 = count__86942;
var G__87941 = (i__86943 + (1));
seq__86940 = G__87938;
chunk__86941 = G__87939;
count__86942 = G__87940;
i__86943 = G__87941;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86940);
if(temp__5823__auto__){
var seq__86940__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86940__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86940__$1);
var G__87943 = cljs.core.chunk_rest(seq__86940__$1);
var G__87944 = c__5525__auto__;
var G__87945 = cljs.core.count(c__5525__auto__);
var G__87946 = (0);
seq__86940 = G__87943;
chunk__86941 = G__87944;
count__86942 = G__87945;
i__86943 = G__87946;
continue;
} else {
var map__86981 = cljs.core.first(seq__86940__$1);
var map__86981__$1 = cljs.core.__destructure_map(map__86981);
var src = map__86981__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86981__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86981__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86981__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e86984){var e_87950 = e86984;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_87950);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_87950.message)].join('')));
}

var G__87951 = cljs.core.next(seq__86940__$1);
var G__87952 = null;
var G__87953 = (0);
var G__87954 = (0);
seq__86940 = G__87951;
chunk__86941 = G__87952;
count__86942 = G__87953;
i__86943 = G__87954;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__87019 = cljs.core.seq(js_requires);
var chunk__87020 = null;
var count__87021 = (0);
var i__87022 = (0);
while(true){
if((i__87022 < count__87021)){
var js_ns = chunk__87020.cljs$core$IIndexed$_nth$arity$2(null, i__87022);
var require_str_87959 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_87959);


var G__87960 = seq__87019;
var G__87961 = chunk__87020;
var G__87962 = count__87021;
var G__87963 = (i__87022 + (1));
seq__87019 = G__87960;
chunk__87020 = G__87961;
count__87021 = G__87962;
i__87022 = G__87963;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__87019);
if(temp__5823__auto__){
var seq__87019__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87019__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__87019__$1);
var G__87967 = cljs.core.chunk_rest(seq__87019__$1);
var G__87968 = c__5525__auto__;
var G__87969 = cljs.core.count(c__5525__auto__);
var G__87970 = (0);
seq__87019 = G__87967;
chunk__87020 = G__87968;
count__87021 = G__87969;
i__87022 = G__87970;
continue;
} else {
var js_ns = cljs.core.first(seq__87019__$1);
var require_str_87971 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_87971);


var G__87972 = cljs.core.next(seq__87019__$1);
var G__87973 = null;
var G__87974 = (0);
var G__87975 = (0);
seq__87019 = G__87972;
chunk__87020 = G__87973;
count__87021 = G__87974;
i__87022 = G__87975;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__87040){
var map__87041 = p__87040;
var map__87041__$1 = cljs.core.__destructure_map(map__87041);
var msg = map__87041__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87041__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87041__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__87046(s__87047){
return (new cljs.core.LazySeq(null,(function (){
var s__87047__$1 = s__87047;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__87047__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__87056 = cljs.core.first(xs__6383__auto__);
var map__87056__$1 = cljs.core.__destructure_map(map__87056);
var src = map__87056__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87056__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87056__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__87047__$1,map__87056,map__87056__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__87041,map__87041__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__87046_$_iter__87048(s__87049){
return (new cljs.core.LazySeq(null,((function (s__87047__$1,map__87056,map__87056__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__87041,map__87041__$1,msg,info,reload_info){
return (function (){
var s__87049__$1 = s__87049;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__87049__$1);
if(temp__5823__auto____$1){
var s__87049__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__87049__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__87049__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__87051 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__87050 = (0);
while(true){
if((i__87050 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__87050);
cljs.core.chunk_append(b__87051,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__87985 = (i__87050 + (1));
i__87050 = G__87985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__87051),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__87046_$_iter__87048(cljs.core.chunk_rest(s__87049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__87051),null);
}
} else {
var warning = cljs.core.first(s__87049__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__87046_$_iter__87048(cljs.core.rest(s__87049__$2)));
}
} else {
return null;
}
break;
}
});})(s__87047__$1,map__87056,map__87056__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__87041,map__87041__$1,msg,info,reload_info))
,null,null));
});})(s__87047__$1,map__87056,map__87056__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__87041,map__87041__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__87046(cljs.core.rest(s__87047__$1)));
} else {
var G__87987 = cljs.core.rest(s__87047__$1);
s__87047__$1 = G__87987;
continue;
}
} else {
var G__87988 = cljs.core.rest(s__87047__$1);
s__87047__$1 = G__87988;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__87085_87989 = cljs.core.seq(warnings);
var chunk__87086_87990 = null;
var count__87087_87991 = (0);
var i__87088_87992 = (0);
while(true){
if((i__87088_87992 < count__87087_87991)){
var map__87122_87993 = chunk__87086_87990.cljs$core$IIndexed$_nth$arity$2(null, i__87088_87992);
var map__87122_87994__$1 = cljs.core.__destructure_map(map__87122_87993);
var w_87995 = map__87122_87994__$1;
var msg_87996__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87122_87994__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_87997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87122_87994__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_87998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87122_87994__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_87999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87122_87994__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_87999)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_87997),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_87998),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_87996__$1)].join(''));


var G__88002 = seq__87085_87989;
var G__88003 = chunk__87086_87990;
var G__88004 = count__87087_87991;
var G__88005 = (i__87088_87992 + (1));
seq__87085_87989 = G__88002;
chunk__87086_87990 = G__88003;
count__87087_87991 = G__88004;
i__87088_87992 = G__88005;
continue;
} else {
var temp__5823__auto___88007 = cljs.core.seq(seq__87085_87989);
if(temp__5823__auto___88007){
var seq__87085_88008__$1 = temp__5823__auto___88007;
if(cljs.core.chunked_seq_QMARK_(seq__87085_88008__$1)){
var c__5525__auto___88009 = cljs.core.chunk_first(seq__87085_88008__$1);
var G__88010 = cljs.core.chunk_rest(seq__87085_88008__$1);
var G__88011 = c__5525__auto___88009;
var G__88012 = cljs.core.count(c__5525__auto___88009);
var G__88013 = (0);
seq__87085_87989 = G__88010;
chunk__87086_87990 = G__88011;
count__87087_87991 = G__88012;
i__87088_87992 = G__88013;
continue;
} else {
var map__87137_88014 = cljs.core.first(seq__87085_88008__$1);
var map__87137_88015__$1 = cljs.core.__destructure_map(map__87137_88014);
var w_88016 = map__87137_88015__$1;
var msg_88017__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87137_88015__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_88018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87137_88015__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_88019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87137_88015__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_88020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87137_88015__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_88020)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_88018),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_88019),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_88017__$1)].join(''));


var G__88021 = cljs.core.next(seq__87085_88008__$1);
var G__88022 = null;
var G__88023 = (0);
var G__88024 = (0);
seq__87085_87989 = G__88021;
chunk__87086_87990 = G__88022;
count__87087_87991 = G__88023;
i__87088_87992 = G__88024;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__87039_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__87039_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__87192 = node_uri;
G__87192.setQuery(null);

G__87192.setPath(new$);

return G__87192;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__87198){
var map__87200 = p__87198;
var map__87200__$1 = cljs.core.__destructure_map(map__87200);
var msg = map__87200__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87200__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87200__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__87201 = cljs.core.seq(updates);
var chunk__87203 = null;
var count__87204 = (0);
var i__87205 = (0);
while(true){
if((i__87205 < count__87204)){
var path = chunk__87203.cljs$core$IIndexed$_nth$arity$2(null, i__87205);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__87564_88046 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__87568_88047 = null;
var count__87569_88048 = (0);
var i__87570_88049 = (0);
while(true){
if((i__87570_88049 < count__87569_88048)){
var node_88057 = chunk__87568_88047.cljs$core$IIndexed$_nth$arity$2(null, i__87570_88049);
if(cljs.core.not(node_88057.shadow$old)){
var path_match_88058 = shadow.cljs.devtools.client.browser.match_paths(node_88057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_88058)){
var new_link_88060 = (function (){var G__87634 = node_88057.cloneNode(true);
G__87634.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_88058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__87634;
})();
(node_88057.shadow$old = true);

(new_link_88060.onload = ((function (seq__87564_88046,chunk__87568_88047,count__87569_88048,i__87570_88049,seq__87201,chunk__87203,count__87204,i__87205,new_link_88060,path_match_88058,node_88057,path,map__87200,map__87200__$1,msg,updates,reload_info){
return (function (e){
var seq__87636_88065 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__87638_88066 = null;
var count__87639_88067 = (0);
var i__87640_88068 = (0);
while(true){
if((i__87640_88068 < count__87639_88067)){
var map__87664_88069 = chunk__87638_88066.cljs$core$IIndexed$_nth$arity$2(null, i__87640_88068);
var map__87664_88070__$1 = cljs.core.__destructure_map(map__87664_88069);
var task_88071 = map__87664_88070__$1;
var fn_str_88072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87664_88070__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87664_88070__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88074 = goog.getObjectByName(fn_str_88072,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88073)].join(''));

(fn_obj_88074.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88074.cljs$core$IFn$_invoke$arity$2(path,new_link_88060) : fn_obj_88074.call(null, path,new_link_88060));


var G__88076 = seq__87636_88065;
var G__88077 = chunk__87638_88066;
var G__88078 = count__87639_88067;
var G__88079 = (i__87640_88068 + (1));
seq__87636_88065 = G__88076;
chunk__87638_88066 = G__88077;
count__87639_88067 = G__88078;
i__87640_88068 = G__88079;
continue;
} else {
var temp__5823__auto___88080 = cljs.core.seq(seq__87636_88065);
if(temp__5823__auto___88080){
var seq__87636_88081__$1 = temp__5823__auto___88080;
if(cljs.core.chunked_seq_QMARK_(seq__87636_88081__$1)){
var c__5525__auto___88082 = cljs.core.chunk_first(seq__87636_88081__$1);
var G__88083 = cljs.core.chunk_rest(seq__87636_88081__$1);
var G__88084 = c__5525__auto___88082;
var G__88085 = cljs.core.count(c__5525__auto___88082);
var G__88086 = (0);
seq__87636_88065 = G__88083;
chunk__87638_88066 = G__88084;
count__87639_88067 = G__88085;
i__87640_88068 = G__88086;
continue;
} else {
var map__87670_88087 = cljs.core.first(seq__87636_88081__$1);
var map__87670_88088__$1 = cljs.core.__destructure_map(map__87670_88087);
var task_88089 = map__87670_88088__$1;
var fn_str_88090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87670_88088__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87670_88088__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88092 = goog.getObjectByName(fn_str_88090,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88091)].join(''));

(fn_obj_88092.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88092.cljs$core$IFn$_invoke$arity$2(path,new_link_88060) : fn_obj_88092.call(null, path,new_link_88060));


var G__88093 = cljs.core.next(seq__87636_88081__$1);
var G__88094 = null;
var G__88095 = (0);
var G__88096 = (0);
seq__87636_88065 = G__88093;
chunk__87638_88066 = G__88094;
count__87639_88067 = G__88095;
i__87640_88068 = G__88096;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_88057);
});})(seq__87564_88046,chunk__87568_88047,count__87569_88048,i__87570_88049,seq__87201,chunk__87203,count__87204,i__87205,new_link_88060,path_match_88058,node_88057,path,map__87200,map__87200__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_88058], 0));

goog.dom.insertSiblingAfter(new_link_88060,node_88057);


var G__88097 = seq__87564_88046;
var G__88098 = chunk__87568_88047;
var G__88099 = count__87569_88048;
var G__88100 = (i__87570_88049 + (1));
seq__87564_88046 = G__88097;
chunk__87568_88047 = G__88098;
count__87569_88048 = G__88099;
i__87570_88049 = G__88100;
continue;
} else {
var G__88101 = seq__87564_88046;
var G__88102 = chunk__87568_88047;
var G__88103 = count__87569_88048;
var G__88104 = (i__87570_88049 + (1));
seq__87564_88046 = G__88101;
chunk__87568_88047 = G__88102;
count__87569_88048 = G__88103;
i__87570_88049 = G__88104;
continue;
}
} else {
var G__88110 = seq__87564_88046;
var G__88111 = chunk__87568_88047;
var G__88112 = count__87569_88048;
var G__88113 = (i__87570_88049 + (1));
seq__87564_88046 = G__88110;
chunk__87568_88047 = G__88111;
count__87569_88048 = G__88112;
i__87570_88049 = G__88113;
continue;
}
} else {
var temp__5823__auto___88115 = cljs.core.seq(seq__87564_88046);
if(temp__5823__auto___88115){
var seq__87564_88117__$1 = temp__5823__auto___88115;
if(cljs.core.chunked_seq_QMARK_(seq__87564_88117__$1)){
var c__5525__auto___88118 = cljs.core.chunk_first(seq__87564_88117__$1);
var G__88119 = cljs.core.chunk_rest(seq__87564_88117__$1);
var G__88120 = c__5525__auto___88118;
var G__88121 = cljs.core.count(c__5525__auto___88118);
var G__88122 = (0);
seq__87564_88046 = G__88119;
chunk__87568_88047 = G__88120;
count__87569_88048 = G__88121;
i__87570_88049 = G__88122;
continue;
} else {
var node_88123 = cljs.core.first(seq__87564_88117__$1);
if(cljs.core.not(node_88123.shadow$old)){
var path_match_88124 = shadow.cljs.devtools.client.browser.match_paths(node_88123.getAttribute("href"),path);
if(cljs.core.truth_(path_match_88124)){
var new_link_88125 = (function (){var G__87684 = node_88123.cloneNode(true);
G__87684.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_88124),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__87684;
})();
(node_88123.shadow$old = true);

(new_link_88125.onload = ((function (seq__87564_88046,chunk__87568_88047,count__87569_88048,i__87570_88049,seq__87201,chunk__87203,count__87204,i__87205,new_link_88125,path_match_88124,node_88123,seq__87564_88117__$1,temp__5823__auto___88115,path,map__87200,map__87200__$1,msg,updates,reload_info){
return (function (e){
var seq__87687_88131 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__87689_88132 = null;
var count__87690_88133 = (0);
var i__87691_88134 = (0);
while(true){
if((i__87691_88134 < count__87690_88133)){
var map__87697_88135 = chunk__87689_88132.cljs$core$IIndexed$_nth$arity$2(null, i__87691_88134);
var map__87697_88136__$1 = cljs.core.__destructure_map(map__87697_88135);
var task_88137 = map__87697_88136__$1;
var fn_str_88138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87697_88136__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87697_88136__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88141 = goog.getObjectByName(fn_str_88138,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88139)].join(''));

(fn_obj_88141.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88141.cljs$core$IFn$_invoke$arity$2(path,new_link_88125) : fn_obj_88141.call(null, path,new_link_88125));


var G__88142 = seq__87687_88131;
var G__88143 = chunk__87689_88132;
var G__88144 = count__87690_88133;
var G__88145 = (i__87691_88134 + (1));
seq__87687_88131 = G__88142;
chunk__87689_88132 = G__88143;
count__87690_88133 = G__88144;
i__87691_88134 = G__88145;
continue;
} else {
var temp__5823__auto___88146__$1 = cljs.core.seq(seq__87687_88131);
if(temp__5823__auto___88146__$1){
var seq__87687_88147__$1 = temp__5823__auto___88146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__87687_88147__$1)){
var c__5525__auto___88148 = cljs.core.chunk_first(seq__87687_88147__$1);
var G__88149 = cljs.core.chunk_rest(seq__87687_88147__$1);
var G__88150 = c__5525__auto___88148;
var G__88151 = cljs.core.count(c__5525__auto___88148);
var G__88152 = (0);
seq__87687_88131 = G__88149;
chunk__87689_88132 = G__88150;
count__87690_88133 = G__88151;
i__87691_88134 = G__88152;
continue;
} else {
var map__87702_88153 = cljs.core.first(seq__87687_88147__$1);
var map__87702_88154__$1 = cljs.core.__destructure_map(map__87702_88153);
var task_88155 = map__87702_88154__$1;
var fn_str_88156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87702_88154__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87702_88154__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88158 = goog.getObjectByName(fn_str_88156,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88157)].join(''));

(fn_obj_88158.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88158.cljs$core$IFn$_invoke$arity$2(path,new_link_88125) : fn_obj_88158.call(null, path,new_link_88125));


var G__88159 = cljs.core.next(seq__87687_88147__$1);
var G__88160 = null;
var G__88161 = (0);
var G__88162 = (0);
seq__87687_88131 = G__88159;
chunk__87689_88132 = G__88160;
count__87690_88133 = G__88161;
i__87691_88134 = G__88162;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_88123);
});})(seq__87564_88046,chunk__87568_88047,count__87569_88048,i__87570_88049,seq__87201,chunk__87203,count__87204,i__87205,new_link_88125,path_match_88124,node_88123,seq__87564_88117__$1,temp__5823__auto___88115,path,map__87200,map__87200__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_88124], 0));

goog.dom.insertSiblingAfter(new_link_88125,node_88123);


var G__88163 = cljs.core.next(seq__87564_88117__$1);
var G__88164 = null;
var G__88165 = (0);
var G__88166 = (0);
seq__87564_88046 = G__88163;
chunk__87568_88047 = G__88164;
count__87569_88048 = G__88165;
i__87570_88049 = G__88166;
continue;
} else {
var G__88167 = cljs.core.next(seq__87564_88117__$1);
var G__88168 = null;
var G__88169 = (0);
var G__88170 = (0);
seq__87564_88046 = G__88167;
chunk__87568_88047 = G__88168;
count__87569_88048 = G__88169;
i__87570_88049 = G__88170;
continue;
}
} else {
var G__88171 = cljs.core.next(seq__87564_88117__$1);
var G__88172 = null;
var G__88173 = (0);
var G__88174 = (0);
seq__87564_88046 = G__88171;
chunk__87568_88047 = G__88172;
count__87569_88048 = G__88173;
i__87570_88049 = G__88174;
continue;
}
}
} else {
}
}
break;
}


var G__88175 = seq__87201;
var G__88176 = chunk__87203;
var G__88177 = count__87204;
var G__88178 = (i__87205 + (1));
seq__87201 = G__88175;
chunk__87203 = G__88176;
count__87204 = G__88177;
i__87205 = G__88178;
continue;
} else {
var G__88180 = seq__87201;
var G__88181 = chunk__87203;
var G__88182 = count__87204;
var G__88183 = (i__87205 + (1));
seq__87201 = G__88180;
chunk__87203 = G__88181;
count__87204 = G__88182;
i__87205 = G__88183;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__87201);
if(temp__5823__auto__){
var seq__87201__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__87201__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__87201__$1);
var G__88186 = cljs.core.chunk_rest(seq__87201__$1);
var G__88187 = c__5525__auto__;
var G__88188 = cljs.core.count(c__5525__auto__);
var G__88189 = (0);
seq__87201 = G__88186;
chunk__87203 = G__88187;
count__87204 = G__88188;
i__87205 = G__88189;
continue;
} else {
var path = cljs.core.first(seq__87201__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__87711_88190 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__87715_88191 = null;
var count__87716_88192 = (0);
var i__87717_88193 = (0);
while(true){
if((i__87717_88193 < count__87716_88192)){
var node_88196 = chunk__87715_88191.cljs$core$IIndexed$_nth$arity$2(null, i__87717_88193);
if(cljs.core.not(node_88196.shadow$old)){
var path_match_88198 = shadow.cljs.devtools.client.browser.match_paths(node_88196.getAttribute("href"),path);
if(cljs.core.truth_(path_match_88198)){
var new_link_88199 = (function (){var G__87794 = node_88196.cloneNode(true);
G__87794.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_88198),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__87794;
})();
(node_88196.shadow$old = true);

(new_link_88199.onload = ((function (seq__87711_88190,chunk__87715_88191,count__87716_88192,i__87717_88193,seq__87201,chunk__87203,count__87204,i__87205,new_link_88199,path_match_88198,node_88196,path,seq__87201__$1,temp__5823__auto__,map__87200,map__87200__$1,msg,updates,reload_info){
return (function (e){
var seq__87795_88202 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__87797_88203 = null;
var count__87798_88204 = (0);
var i__87799_88205 = (0);
while(true){
if((i__87799_88205 < count__87798_88204)){
var map__87810_88207 = chunk__87797_88203.cljs$core$IIndexed$_nth$arity$2(null, i__87799_88205);
var map__87810_88208__$1 = cljs.core.__destructure_map(map__87810_88207);
var task_88209 = map__87810_88208__$1;
var fn_str_88210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87810_88208__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87810_88208__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88213 = goog.getObjectByName(fn_str_88210,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88211)].join(''));

(fn_obj_88213.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88213.cljs$core$IFn$_invoke$arity$2(path,new_link_88199) : fn_obj_88213.call(null, path,new_link_88199));


var G__88214 = seq__87795_88202;
var G__88215 = chunk__87797_88203;
var G__88216 = count__87798_88204;
var G__88217 = (i__87799_88205 + (1));
seq__87795_88202 = G__88214;
chunk__87797_88203 = G__88215;
count__87798_88204 = G__88216;
i__87799_88205 = G__88217;
continue;
} else {
var temp__5823__auto___88218__$1 = cljs.core.seq(seq__87795_88202);
if(temp__5823__auto___88218__$1){
var seq__87795_88219__$1 = temp__5823__auto___88218__$1;
if(cljs.core.chunked_seq_QMARK_(seq__87795_88219__$1)){
var c__5525__auto___88220 = cljs.core.chunk_first(seq__87795_88219__$1);
var G__88224 = cljs.core.chunk_rest(seq__87795_88219__$1);
var G__88225 = c__5525__auto___88220;
var G__88226 = cljs.core.count(c__5525__auto___88220);
var G__88227 = (0);
seq__87795_88202 = G__88224;
chunk__87797_88203 = G__88225;
count__87798_88204 = G__88226;
i__87799_88205 = G__88227;
continue;
} else {
var map__87818_88228 = cljs.core.first(seq__87795_88219__$1);
var map__87818_88229__$1 = cljs.core.__destructure_map(map__87818_88228);
var task_88230 = map__87818_88229__$1;
var fn_str_88231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87818_88229__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87818_88229__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88235 = goog.getObjectByName(fn_str_88231,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88232)].join(''));

(fn_obj_88235.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88235.cljs$core$IFn$_invoke$arity$2(path,new_link_88199) : fn_obj_88235.call(null, path,new_link_88199));


var G__88237 = cljs.core.next(seq__87795_88219__$1);
var G__88238 = null;
var G__88239 = (0);
var G__88240 = (0);
seq__87795_88202 = G__88237;
chunk__87797_88203 = G__88238;
count__87798_88204 = G__88239;
i__87799_88205 = G__88240;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_88196);
});})(seq__87711_88190,chunk__87715_88191,count__87716_88192,i__87717_88193,seq__87201,chunk__87203,count__87204,i__87205,new_link_88199,path_match_88198,node_88196,path,seq__87201__$1,temp__5823__auto__,map__87200,map__87200__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_88198], 0));

goog.dom.insertSiblingAfter(new_link_88199,node_88196);


var G__88241 = seq__87711_88190;
var G__88242 = chunk__87715_88191;
var G__88243 = count__87716_88192;
var G__88244 = (i__87717_88193 + (1));
seq__87711_88190 = G__88241;
chunk__87715_88191 = G__88242;
count__87716_88192 = G__88243;
i__87717_88193 = G__88244;
continue;
} else {
var G__88245 = seq__87711_88190;
var G__88246 = chunk__87715_88191;
var G__88247 = count__87716_88192;
var G__88248 = (i__87717_88193 + (1));
seq__87711_88190 = G__88245;
chunk__87715_88191 = G__88246;
count__87716_88192 = G__88247;
i__87717_88193 = G__88248;
continue;
}
} else {
var G__88249 = seq__87711_88190;
var G__88250 = chunk__87715_88191;
var G__88251 = count__87716_88192;
var G__88252 = (i__87717_88193 + (1));
seq__87711_88190 = G__88249;
chunk__87715_88191 = G__88250;
count__87716_88192 = G__88251;
i__87717_88193 = G__88252;
continue;
}
} else {
var temp__5823__auto___88253__$1 = cljs.core.seq(seq__87711_88190);
if(temp__5823__auto___88253__$1){
var seq__87711_88254__$1 = temp__5823__auto___88253__$1;
if(cljs.core.chunked_seq_QMARK_(seq__87711_88254__$1)){
var c__5525__auto___88255 = cljs.core.chunk_first(seq__87711_88254__$1);
var G__88256 = cljs.core.chunk_rest(seq__87711_88254__$1);
var G__88257 = c__5525__auto___88255;
var G__88258 = cljs.core.count(c__5525__auto___88255);
var G__88259 = (0);
seq__87711_88190 = G__88256;
chunk__87715_88191 = G__88257;
count__87716_88192 = G__88258;
i__87717_88193 = G__88259;
continue;
} else {
var node_88260 = cljs.core.first(seq__87711_88254__$1);
if(cljs.core.not(node_88260.shadow$old)){
var path_match_88261 = shadow.cljs.devtools.client.browser.match_paths(node_88260.getAttribute("href"),path);
if(cljs.core.truth_(path_match_88261)){
var new_link_88262 = (function (){var G__87823 = node_88260.cloneNode(true);
G__87823.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_88261),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__87823;
})();
(node_88260.shadow$old = true);

(new_link_88262.onload = ((function (seq__87711_88190,chunk__87715_88191,count__87716_88192,i__87717_88193,seq__87201,chunk__87203,count__87204,i__87205,new_link_88262,path_match_88261,node_88260,seq__87711_88254__$1,temp__5823__auto___88253__$1,path,seq__87201__$1,temp__5823__auto__,map__87200,map__87200__$1,msg,updates,reload_info){
return (function (e){
var seq__87826_88263 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__87828_88264 = null;
var count__87829_88265 = (0);
var i__87830_88266 = (0);
while(true){
if((i__87830_88266 < count__87829_88265)){
var map__87841_88273 = chunk__87828_88264.cljs$core$IIndexed$_nth$arity$2(null, i__87830_88266);
var map__87841_88274__$1 = cljs.core.__destructure_map(map__87841_88273);
var task_88275 = map__87841_88274__$1;
var fn_str_88276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87841_88274__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87841_88274__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88278 = goog.getObjectByName(fn_str_88276,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88277)].join(''));

(fn_obj_88278.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88278.cljs$core$IFn$_invoke$arity$2(path,new_link_88262) : fn_obj_88278.call(null, path,new_link_88262));


var G__88281 = seq__87826_88263;
var G__88282 = chunk__87828_88264;
var G__88283 = count__87829_88265;
var G__88284 = (i__87830_88266 + (1));
seq__87826_88263 = G__88281;
chunk__87828_88264 = G__88282;
count__87829_88265 = G__88283;
i__87830_88266 = G__88284;
continue;
} else {
var temp__5823__auto___88285__$2 = cljs.core.seq(seq__87826_88263);
if(temp__5823__auto___88285__$2){
var seq__87826_88287__$1 = temp__5823__auto___88285__$2;
if(cljs.core.chunked_seq_QMARK_(seq__87826_88287__$1)){
var c__5525__auto___88289 = cljs.core.chunk_first(seq__87826_88287__$1);
var G__88290 = cljs.core.chunk_rest(seq__87826_88287__$1);
var G__88291 = c__5525__auto___88289;
var G__88292 = cljs.core.count(c__5525__auto___88289);
var G__88293 = (0);
seq__87826_88263 = G__88290;
chunk__87828_88264 = G__88291;
count__87829_88265 = G__88292;
i__87830_88266 = G__88293;
continue;
} else {
var map__87842_88294 = cljs.core.first(seq__87826_88287__$1);
var map__87842_88295__$1 = cljs.core.__destructure_map(map__87842_88294);
var task_88296 = map__87842_88295__$1;
var fn_str_88297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87842_88295__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_88298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87842_88295__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_88300 = goog.getObjectByName(fn_str_88297,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_88298)].join(''));

(fn_obj_88300.cljs$core$IFn$_invoke$arity$2 ? fn_obj_88300.cljs$core$IFn$_invoke$arity$2(path,new_link_88262) : fn_obj_88300.call(null, path,new_link_88262));


var G__88301 = cljs.core.next(seq__87826_88287__$1);
var G__88302 = null;
var G__88303 = (0);
var G__88304 = (0);
seq__87826_88263 = G__88301;
chunk__87828_88264 = G__88302;
count__87829_88265 = G__88303;
i__87830_88266 = G__88304;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_88260);
});})(seq__87711_88190,chunk__87715_88191,count__87716_88192,i__87717_88193,seq__87201,chunk__87203,count__87204,i__87205,new_link_88262,path_match_88261,node_88260,seq__87711_88254__$1,temp__5823__auto___88253__$1,path,seq__87201__$1,temp__5823__auto__,map__87200,map__87200__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_88261], 0));

goog.dom.insertSiblingAfter(new_link_88262,node_88260);


var G__88307 = cljs.core.next(seq__87711_88254__$1);
var G__88308 = null;
var G__88309 = (0);
var G__88310 = (0);
seq__87711_88190 = G__88307;
chunk__87715_88191 = G__88308;
count__87716_88192 = G__88309;
i__87717_88193 = G__88310;
continue;
} else {
var G__88311 = cljs.core.next(seq__87711_88254__$1);
var G__88312 = null;
var G__88313 = (0);
var G__88314 = (0);
seq__87711_88190 = G__88311;
chunk__87715_88191 = G__88312;
count__87716_88192 = G__88313;
i__87717_88193 = G__88314;
continue;
}
} else {
var G__88315 = cljs.core.next(seq__87711_88254__$1);
var G__88316 = null;
var G__88317 = (0);
var G__88318 = (0);
seq__87711_88190 = G__88315;
chunk__87715_88191 = G__88316;
count__87716_88192 = G__88317;
i__87717_88193 = G__88318;
continue;
}
}
} else {
}
}
break;
}


var G__88319 = cljs.core.next(seq__87201__$1);
var G__88320 = null;
var G__88321 = (0);
var G__88322 = (0);
seq__87201 = G__88319;
chunk__87203 = G__88320;
count__87204 = G__88321;
i__87205 = G__88322;
continue;
} else {
var G__88323 = cljs.core.next(seq__87201__$1);
var G__88324 = null;
var G__88325 = (0);
var G__88326 = (0);
seq__87201 = G__88323;
chunk__87203 = G__88324;
count__87204 = G__88325;
i__87205 = G__88326;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__87859){
var map__87860 = p__87859;
var map__87860__$1 = cljs.core.__destructure_map(map__87860);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87860__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__87863,done,error){
var map__87864 = p__87863;
var map__87864__$1 = cljs.core.__destructure_map(map__87864);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87864__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__87869,done,error){
var map__87870 = p__87869;
var map__87870__$1 = cljs.core.__destructure_map(map__87870);
var msg = map__87870__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87870__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87870__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87870__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__87878){
var map__87880 = p__87878;
var map__87880__$1 = cljs.core.__destructure_map(map__87880);
var src = map__87880__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87880__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__87884 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__87884) : done.call(null, G__87884));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__87886){
var map__87887 = p__87886;
var map__87887__$1 = cljs.core.__destructure_map(map__87887);
var msg__$1 = map__87887__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87887__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e87888){var ex = e87888;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__87889){
var map__87890 = p__87889;
var map__87890__$1 = cljs.core.__destructure_map(map__87890);
var env = map__87890__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__87902){
var map__87906 = p__87902;
var map__87906__$1 = cljs.core.__destructure_map(map__87906);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87906__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87906__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__87911){
var map__87912 = p__87911;
var map__87912__$1 = cljs.core.__destructure_map(map__87912);
var svc = map__87912__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87912__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
