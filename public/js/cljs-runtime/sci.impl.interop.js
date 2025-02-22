goog.provide('sci.impl.interop');
sci.impl.interop.invoke_instance_field = (function sci$impl$interop$invoke_instance_field(obj,_target_class,field_name){
return (obj[field_name]);
});
sci.impl.interop.invoke_instance_method = (function sci$impl$interop$invoke_instance_method(ctx,bindings,obj,_target_class,method_name,args,_arg_count){
var temp__5825__auto__ = (obj[method_name]);
if((temp__5825__auto__ == null)){
throw (new Error(["Could not find instance method: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)].join('')));
} else {
var method = temp__5825__auto__;
var args__$1 = args.map((function (p1__71591_SHARP_){
return sci.impl.types.eval(p1__71591_SHARP_,ctx,bindings);
}));
return Reflect.apply(method,obj,args__$1);
}
});
sci.impl.interop.get_static_field = (function sci$impl$interop$get_static_field(class$,field_name_sym){
return (class$[field_name_sym]);
});
sci.impl.interop.fn_eval_allowed_QMARK_ = (function (){try{(new Function("return 1"));

return true;
}catch (e71624){var _ = e71624;
return false;
}})();
sci.impl.interop.get_static_fields = (function sci$impl$interop$get_static_fields(cur,parts){
var cur__$1 = cur;
var i = (0);
while(true){
if((i < parts.length)){
var G__71714 = (cur__$1[(parts[i])]);
var G__71715 = (i + (1));
cur__$1 = G__71714;
i = G__71715;
continue;
} else {
return cur__$1;
}
break;
}
});

sci.impl.interop.accessor_fn = (function sci$impl$interop$accessor_fn(parts){
if(cljs.core.truth_(sci.impl.interop.fn_eval_allowed_QMARK_)){
return (new Function("obj",["return obj.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parts.join("."))].join('')));
} else {
return (function (obj){
return sci.impl.interop.get_static_fields(obj,parts);
});
}
});
sci.impl.interop.invoke_js_constructor_STAR_ = (function sci$impl$interop$invoke_js_constructor_STAR_(ctx,bindings,constructor$,args){
return Reflect.construct(constructor$,args.map((function (p1__71637_SHARP_){
return sci.impl.types.eval(p1__71637_SHARP_,ctx,bindings);
})));
});
sci.impl.interop.invoke_static_method = (function sci$impl$interop$invoke_static_method(ctx,bindings,class$,method,args){
return Reflect.apply(method,class$,args.map((function (p1__71652_SHARP_){
return sci.impl.types.eval(p1__71652_SHARP_,ctx,bindings);
})));
});
sci.impl.interop.fully_qualify_class = (function sci$impl$interop$fully_qualify_class(ctx,sym){
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(env);
var or__5002__auto__ = (function (){var temp__5821__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5821__auto__)){
var ns_STAR_ = temp__5821__auto__;
if(("js" === ns_STAR_)){
if(cljs.core.contains_QMARK_(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)))){
return sym;
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.contains_QMARK_(class__GT_opts,sym)){
return sym;
} else {
return null;
}
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(env),sym);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var cnn = sci.impl.utils.current_ns_name();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
}
}
});
sci.impl.interop.resolve_class_opts = (function sci$impl$interop$resolve_class_opts(ctx,sym){
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(env);
var class_opts = (function (){var or__5002__auto__ = (function (){var temp__5821__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5821__auto__)){
var ns_STAR_ = temp__5821__auto__;
if(("js" === ns_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,sym);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var cnn = sci.impl.utils.current_ns_name();
var imports = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null));
var temp__5821__auto__ = cljs.core.find(imports,sym);
if(cljs.core.truth_(temp__5821__auto__)){
var vec__71701 = temp__5821__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71701,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"imports","imports",-1249933394),sym], null));
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,v);
} else {
return null;
}
}
}
})();
return class_opts;
});
sci.impl.interop.resolve_class = (function sci$impl$interop$resolve_class(ctx,sym){
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(sci.impl.interop.resolve_class_opts(ctx,sym));
});

//# sourceMappingURL=sci.impl.interop.js.map
