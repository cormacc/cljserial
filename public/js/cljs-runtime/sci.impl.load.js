goog.provide('sci.impl.load');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__72923){
var vec__72924 = p__72923;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72924,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = (k instanceof cljs.core.Symbol);
if(and__5000__auto__){
var and__5000__auto____$1 = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null, k));
if(cljs.core.truth_(and__5000__auto____$1)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null, k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
});
sci.impl.load.handle_js_lib = (function sci$impl$load$handle_js_lib(env,opts,lib,cnn,the_lib){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts);
var the_lib__$1 = (cljs.core.truth_(path)?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (the_lib__$1,path__$1){
return Reflect.get(the_lib__$1,path__$1);
}),the_lib,path.split(".")):the_lib);
var clazz = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.munge([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),(cljs.core.truth_(path)?"$":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')));
var env__$1 = cljs.core.assoc_in(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),clazz,new cljs.core.Keyword(null,"class","class",-2030961996)], null),the_lib__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),clazz], null),the_lib__$1);
var env__$2 = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5821__auto__)){
var alias = temp__5821__auto__;
return cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),alias], null),clazz);
} else {
return env__$1;
}
})();
var env__$3 = (function (){var temp__5821__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5821__auto__)){
var refers = temp__5821__auto__;
var rename = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$3,refer){
var sub_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"$$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(refer)].join(''));
var the_sublib = Reflect.get(the_lib__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(refer));
var refer__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(rename,refer,refer);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(env__$3,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),refer__$1], null),sub_sym),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->opts","class->opts",2061906477),sub_sym,new cljs.core.Keyword(null,"class","class",-2030961996)], null),the_sublib),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"raw-classes","raw-classes",1669916511),sub_sym], null),the_sublib);
}),env__$2,refers);
} else {
return env__$2;
}
})();
return env__$3;
});
sci.impl.load.lib_PLUS_path = (function sci$impl$load$lib_PLUS_path(lib){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(lib,cljs.core.re_pattern("\\$"),(2));
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(_ctx,env,current_ns,the_loaded_ns,lib_name,p__72986){
var map__72987 = p__72986;
var map__72987__$1 = cljs.core.__destructure_map(map__72987);
var opts = map__72987__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72987__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72987__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72987__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72987__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72987__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72987__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var or__5002__auto__ = ((typeof lib_name === 'string')?(function (){var vec__73031 = sci.impl.load.lib_PLUS_path(lib_name);
var lib_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73031,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73031,(1),null);
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-libs","js-libs",-502933721).cljs$core$IFn$_invoke$arity$1(env),lib_name__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var the_lib = temp__5821__auto__;
return sci.impl.load.handle_js_lib(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),path),lib_name__$1,current_ns,the_lib);
} else {
return env;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__5002__auto____$1 = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null, sym));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__5002__auto____$1 = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"all","all",892129742),refer);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null, sym)),(function (){var temp__5821__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__73090 = temp__5821__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73090,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
var temp__5823__auto___73597 = (function (){var G__73094 = the_loaded_ns;
var G__73094__$1 = (((G__73094 == null))?null:new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__73094));
var G__73094__$2 = (((G__73094__$1 == null))?null:cljs.core.meta(G__73094__$1));
if((G__73094__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","required-fn","sci.impl/required-fn",2082701278).cljs$core$IFn$_invoke$arity$1(G__73094__$2);
}
})();
if(cljs.core.truth_(temp__5823__auto___73597)){
var on_loaded_73598 = temp__5823__auto___73597;
var G__73108_73599 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_73598.cljs$core$IFn$_invoke$arity$1 ? on_loaded_73598.cljs$core$IFn$_invoke$arity$1(G__73108_73599) : on_loaded_73598.call(null, G__73108_73599));
} else {
}

return env__$1;
}
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
var loaded_libs = new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env__$1);
if(cljs.core.contains_QMARK_(loaded_libs,lib)){
return env__$1;
} else {
var loaded_libs_var_73600 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.Symbol(null,"*loaded-libs*","*loaded-libs*",1951428860,null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(loaded_libs_var_73600),cljs.core.conj,lib);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652),(function (loaded_libs__$1){
if((loaded_libs__$1 == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs__$1,lib);
}
}));
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.utils.current_ns_name();
var lib__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ns-aliases","ns-aliases",1290254821).cljs$core$IFn$_invoke$arity$1(env),lib,lib);
var js_lib_QMARK_ = typeof lib__$1 === 'string';
var or__5002__auto__ = ((js_lib_QMARK_)?(function (){var vec__73157 = sci.impl.load.lib_PLUS_path(lib__$1);
var lib__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73157,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73157,(1),null);
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"js-libs","js-libs",-502933721).cljs$core$IFn$_invoke$arity$1(env),lib__$2);
if(cljs.core.truth_(temp__5823__auto__)){
var the_lib = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
return sci.impl.load.handle_js_lib(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),path),lib__$2,cnn,the_lib);
}));

return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5821__auto__ = new cljs.core.Keyword(null,"as-alias","as-alias",82482467).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5821__auto__)){
var as_alias = temp__5821__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,null,lib__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),as_alias], null)));
} else {
var map__73175 = opts;
var map__73175__$1 = cljs.core.__destructure_map(map__73175);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73175__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73175__$1,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var reload_STAR_ = (function (){var or__5002__auto____$1 = reload;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = reload_all;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(ctx);
}
}
})();
var temp__5821__auto___73620__$1 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1));
if(cljs.core.truth_(temp__5821__auto___73620__$1)){
var the_loaded_ns_73621 = temp__5821__auto___73620__$1;
var loading_73622 = new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5000__auto__ = loading_73622;
if(cljs.core.truth_(and__5000__auto__)){
return (((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"loaded-libs","loaded-libs",-1156389652).cljs$core$IFn$_invoke$arity$1(env),lib__$1)))) && (cljs.core.nat_int_QMARK_(loading_73622.indexOf(lib__$1))));
} else {
return and__5000__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_73622,lib__$1);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib__$1,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib__$1);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_73621,lib__$1,opts));
}
} else {
var temp__5821__auto___73623__$2 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5821__auto___73623__$2)){
var load_fn_73624 = temp__5821__auto___73623__$2;
var curr_ns_73625 = cljs.core.deref(sci.impl.utils.current_ns);
var temp__5821__auto___73626__$3 = (function (){var G__73215 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib__$1,new cljs.core.Keyword(null,"libname","libname",135992497),lib__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.types.getName(curr_ns_73625),new cljs.core.Keyword(null,"reload","reload",863702807),(function (){var or__5002__auto____$1 = reload;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return reload_all;
}
})()], null);
return (load_fn_73624.cljs$core$IFn$_invoke$arity$1 ? load_fn_73624.cljs$core$IFn$_invoke$arity$1(G__73215) : load_fn_73624.call(null, G__73215));
})();
if(cljs.core.truth_(temp__5821__auto___73626__$3)){
var map__73216_73630 = temp__5821__auto___73626__$3;
var map__73216_73631__$1 = cljs.core.__destructure_map(map__73216_73630);
var file_73632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73216_73631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source_73633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73216_73631__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var handled_73634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73216_73631__$1,new cljs.core.Keyword(null,"handled","handled",1889700151));
var ctx_73635__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload_all),new cljs.core.Keyword(null,"loading","loading",-737050189),(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib__$1], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib__$1);
}
}));
if(cljs.core.truth_(source_73633)){
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_ns,curr_ns_73625,sci.impl.utils.current_file,file_73632]));

try{var fexpr__73241_73636 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__73241_73636.cljs$core$IFn$_invoke$arity$2 ? fexpr__73241_73636.cljs$core$IFn$_invoke$arity$2(ctx_73635__$1,source_73633) : fexpr__73241_73636.call(null, ctx_73635__$1,source_73633));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e73235){if((e73235 instanceof Error)){
var e_73637 = e73235;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib__$1], 0));

throw e_73637;
} else {
throw e73235;

}
}} else {
}

if(cljs.core.truth_(handled_73634)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib__$1);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib__$1,opts);
}));
}
} else {
var or__5002__auto___73644__$1 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var the_loaded_ns = temp__5823__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib__$1,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto___73644__$1)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib__$1),"."].join('')));
}
}

if(js_lib_QMARK_){
} else {
sci.impl.load.add_loaded_lib(env_STAR_,lib__$1);
}

return null;
}
}
});
sci.impl.load.load_lib_STAR_ = (function sci$impl$load$load_lib_STAR_(ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__5000__auto__ = prefix;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__5000__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__5732__auto__ = [];
var len__5726__auto___73672 = arguments.length;
var i__5727__auto___73676 = (0);
while(true){
if((i__5727__auto___73676 < len__5726__auto___73672)){
args__5732__auto__.push((arguments[i__5727__auto___73676]));

var G__73677 = (i__5727__auto___73676 + (1));
i__5727__auto___73676 = G__73677;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
return sci.impl.load.load_lib_STAR_(ctx,prefix,lib,options);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq73269){
var G__73270 = cljs.core.first(seq73269);
var seq73269__$1 = cljs.core.next(seq73269);
var G__73271 = cljs.core.first(seq73269__$1);
var seq73269__$2 = cljs.core.next(seq73269__$1);
var G__73272 = cljs.core.first(seq73269__$2);
var seq73269__$3 = cljs.core.next(seq73269__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73270,G__73271,G__73272,seq73269__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_73678 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"verbose","verbose",1694226060),null,new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null);
var unsupported_73679 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_73678,flags));
if(unsupported_73679){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_73679)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__73323 = cljs.core.seq(args_STAR___$1);
var chunk__73324 = null;
var count__73325 = (0);
var i__73326 = (0);
while(true){
if((i__73326 < count__73325)){
var arg = chunk__73324.cljs$core$IIndexed$_nth$arity$2(null, i__73326);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__73367_73683 = arg;
var seq__73368_73684 = cljs.core.seq(vec__73367_73683);
var first__73369_73685 = cljs.core.first(seq__73368_73684);
var seq__73368_73686__$1 = cljs.core.next(seq__73368_73684);
var prefix_73687 = first__73369_73685;
var args_STAR__73688__$2 = seq__73368_73686__$1;
if((prefix_73687 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__73370_73690 = cljs.core.seq(args_STAR__73688__$2);
var chunk__73371_73691 = null;
var count__73372_73692 = (0);
var i__73373_73693 = (0);
while(true){
if((i__73373_73693 < count__73372_73692)){
var arg_73695__$1 = chunk__73371_73691.cljs$core$IIndexed$_nth$arity$2(null, i__73373_73693);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73687,sci.impl.load.prependss(arg_73695__$1,opts));


var G__73696 = seq__73370_73690;
var G__73697 = chunk__73371_73691;
var G__73698 = count__73372_73692;
var G__73699 = (i__73373_73693 + (1));
seq__73370_73690 = G__73696;
chunk__73371_73691 = G__73697;
count__73372_73692 = G__73698;
i__73373_73693 = G__73699;
continue;
} else {
var temp__5823__auto___73700 = cljs.core.seq(seq__73370_73690);
if(temp__5823__auto___73700){
var seq__73370_73701__$1 = temp__5823__auto___73700;
if(cljs.core.chunked_seq_QMARK_(seq__73370_73701__$1)){
var c__5525__auto___73702 = cljs.core.chunk_first(seq__73370_73701__$1);
var G__73703 = cljs.core.chunk_rest(seq__73370_73701__$1);
var G__73704 = c__5525__auto___73702;
var G__73705 = cljs.core.count(c__5525__auto___73702);
var G__73706 = (0);
seq__73370_73690 = G__73703;
chunk__73371_73691 = G__73704;
count__73372_73692 = G__73705;
i__73373_73693 = G__73706;
continue;
} else {
var arg_73707__$1 = cljs.core.first(seq__73370_73701__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73687,sci.impl.load.prependss(arg_73707__$1,opts));


var G__73708 = cljs.core.next(seq__73370_73701__$1);
var G__73709 = null;
var G__73710 = (0);
var G__73711 = (0);
seq__73370_73690 = G__73708;
chunk__73371_73691 = G__73709;
count__73372_73692 = G__73710;
i__73373_73693 = G__73711;
continue;
}
} else {
}
}
break;
}
}


var G__73712 = seq__73323;
var G__73713 = chunk__73324;
var G__73714 = count__73325;
var G__73715 = (i__73326 + (1));
seq__73323 = G__73712;
chunk__73324 = G__73713;
count__73325 = G__73714;
i__73326 = G__73715;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__73323);
if(temp__5823__auto__){
var seq__73323__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73323__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__73323__$1);
var G__73716 = cljs.core.chunk_rest(seq__73323__$1);
var G__73717 = c__5525__auto__;
var G__73718 = cljs.core.count(c__5525__auto__);
var G__73719 = (0);
seq__73323 = G__73716;
chunk__73324 = G__73717;
count__73325 = G__73718;
i__73326 = G__73719;
continue;
} else {
var arg = cljs.core.first(seq__73323__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__73390_73720 = arg;
var seq__73391_73721 = cljs.core.seq(vec__73390_73720);
var first__73392_73722 = cljs.core.first(seq__73391_73721);
var seq__73391_73723__$1 = cljs.core.next(seq__73391_73721);
var prefix_73724 = first__73392_73722;
var args_STAR__73725__$2 = seq__73391_73723__$1;
if((prefix_73724 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__73393_73726 = cljs.core.seq(args_STAR__73725__$2);
var chunk__73394_73727 = null;
var count__73395_73728 = (0);
var i__73396_73729 = (0);
while(true){
if((i__73396_73729 < count__73395_73728)){
var arg_73733__$1 = chunk__73394_73727.cljs$core$IIndexed$_nth$arity$2(null, i__73396_73729);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73724,sci.impl.load.prependss(arg_73733__$1,opts));


var G__73734 = seq__73393_73726;
var G__73735 = chunk__73394_73727;
var G__73736 = count__73395_73728;
var G__73737 = (i__73396_73729 + (1));
seq__73393_73726 = G__73734;
chunk__73394_73727 = G__73735;
count__73395_73728 = G__73736;
i__73396_73729 = G__73737;
continue;
} else {
var temp__5823__auto___73738__$1 = cljs.core.seq(seq__73393_73726);
if(temp__5823__auto___73738__$1){
var seq__73393_73739__$1 = temp__5823__auto___73738__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73393_73739__$1)){
var c__5525__auto___73740 = cljs.core.chunk_first(seq__73393_73739__$1);
var G__73741 = cljs.core.chunk_rest(seq__73393_73739__$1);
var G__73742 = c__5525__auto___73740;
var G__73743 = cljs.core.count(c__5525__auto___73740);
var G__73744 = (0);
seq__73393_73726 = G__73741;
chunk__73394_73727 = G__73742;
count__73395_73728 = G__73743;
i__73396_73729 = G__73744;
continue;
} else {
var arg_73745__$1 = cljs.core.first(seq__73393_73739__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_73724,sci.impl.load.prependss(arg_73745__$1,opts));


var G__73746 = cljs.core.next(seq__73393_73739__$1);
var G__73747 = null;
var G__73748 = (0);
var G__73749 = (0);
seq__73393_73726 = G__73746;
chunk__73394_73727 = G__73747;
count__73395_73728 = G__73748;
i__73396_73729 = G__73749;
continue;
}
} else {
}
}
break;
}
}


var G__73750 = cljs.core.next(seq__73323__$1);
var G__73751 = null;
var G__73752 = (0);
var G__73753 = (0);
seq__73323 = G__73750;
chunk__73324 = G__73751;
count__73325 = G__73752;
i__73326 = G__73753;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__5732__auto__ = [];
var len__5726__auto___73754 = arguments.length;
var i__5727__auto___73755 = (0);
while(true){
if((i__5727__auto___73755 < len__5726__auto___73754)){
args__5732__auto__.push((arguments[i__5727__auto___73755]));

var G__73756 = (i__5727__auto___73755 + (1));
i__5727__auto___73755 = G__73756;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"require","require",-468001333),args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq73422){
var G__73423 = cljs.core.first(seq73422);
var seq73422__$1 = cljs.core.next(seq73422);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73423,seq73422__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__5732__auto__ = [];
var len__5726__auto___73757 = arguments.length;
var i__5727__auto___73758 = (0);
while(true){
if((i__5727__auto___73758 < len__5726__auto___73757)){
args__5732__auto__.push((arguments[i__5727__auto___73758]));

var G__73759 = (i__5727__auto___73758 + (1));
i__5727__auto___73758 = G__73759;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,new cljs.core.Keyword(null,"use","use",-1846382424),args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq73448){
var G__73450 = cljs.core.first(seq73448);
var seq73448__$1 = cljs.core.next(seq73448);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73450,seq73448__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null);
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__73467 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73467,(1),null);
var G__73471_73763 = k;
var G__73471_73764__$1 = (((G__73471_73763 instanceof cljs.core.Keyword))?G__73471_73763.fqn:null);
switch (G__73471_73764__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym){
return (function (acc,p__73491){
var vec__73492 = p__73491;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73492,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73492,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refers","refers",158076809),new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});})(exprs__$1,G__73471_73763,G__73471_73764__$1,vec__73467,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73471_73764__$1)].join('')));

}

var G__73766 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__73766;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){
var cnn = sci.impl.utils.current_ns_name();
var namespaces = new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"rename","rename",1508157613).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(new cljs.core.Keyword(null,"exclude","exclude",-1230250334).cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"refer","refer",-964295553).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__5000__auto__ = to_do;
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__5000__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null, sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__5002__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null, sym));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,new cljs.core.Keyword(null,"refers","refers",158076809),referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__5732__auto__ = [];
var len__5726__auto___73779 = arguments.length;
var i__5727__auto___73780 = (0);
while(true){
if((i__5727__auto___73780 < len__5726__auto___73779)){
args__5732__auto__.push((arguments[i__5727__auto___73780]));

var G__73784 = (i__5727__auto___73780 + (1));
i__5727__auto___73780 = G__73784;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq73542){
var G__73543 = cljs.core.first(seq73542);
var seq73542__$1 = cljs.core.next(seq73542);
var G__73544 = cljs.core.first(seq73542__$1);
var seq73542__$2 = cljs.core.next(seq73542__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73543,G__73544,seq73542__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);

//# sourceMappingURL=sci.impl.load.js.map
