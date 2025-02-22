goog.provide('taoensso.truss.impl');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__5823__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$));
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.truss.impl.revery = (function taoensso$truss$impl$revery(pred,coll){
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null, in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll))){
return coll;
} else {
return null;
}
});
taoensso.truss.impl.ensure_set = (function taoensso$truss$impl$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
var ensure_set_55091 = taoensso.truss.impl.ensure_set;
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(ensure_set_55091.cljs$core$IFn$_invoke$arity$1 ? ensure_set_55091.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_55091.call(null, ks)));
});

taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(ensure_set_55091.cljs$core$IFn$_invoke$arity$1 ? ensure_set_55091.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_55091.call(null, ks)));
});

taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(ensure_set_55091.cljs$core$IFn$_invoke$arity$1 ? ensure_set_55091.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_55091.call(null, ks)));
});

taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_((function (p1__54962_SHARP_){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__54962_SHARP_) == null)));
}),ks);
});
taoensso.truss.impl.default_error_fn = (function taoensso$truss$impl$default_error_fn(data_){
var data = cljs.core.deref(data_);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"msg_","msg_",-1925147000).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"msg_","msg_",-1925147000)));
});
taoensso.truss.impl._STAR_data_STAR_ = null;
taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss.impl.default_error_fn;
taoensso.truss.impl.safe_pred_forms = (function (){var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 25, [new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),"null",new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"some?","some?",234752293,null),"null",new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),"null",new cljs.core.Symbol(null,"float?","float?",673884616,null),"null",new cljs.core.Symbol(null,"set?","set?",1636014792,null),"null",new cljs.core.Symbol(null,"reversible?","reversible?",314107817,null),"null",new cljs.core.Symbol(null,"identity","identity",-1007039734,null),"null",new cljs.core.Symbol(null,"string?","string?",-1129175764,null),"null",new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),"null",new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),"null",new cljs.core.Symbol(null,"counted?","counted?",1703071664,null),"null",new cljs.core.Symbol(null,"sorted?","sorted?",892797714,null),"null",new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),"null",new cljs.core.Symbol(null,"not","not",1044554643,null),"null",new cljs.core.Symbol(null,"true?","true?",-1600332395,null),"null",new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),"null",new cljs.core.Symbol(null,"delay?","delay?",-1528239209,null),"null",new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),"null",new cljs.core.Symbol(null,"false?","false?",-1522377573,null),"null",new cljs.core.Symbol(null,"list?","list?",-1494629,null),"null",new cljs.core.Symbol(null,"number?","number?",-1747282210,null),"null",new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),"null",new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"null"], null), null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54981_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",p1__54981_SHARP_);
}),names)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54982_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",p1__54982_SHARP_);
}),names));
})();
taoensso.truss.impl.safe_pred = (function taoensso$truss$impl$safe_pred(pred){
return (function (x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null, x));
}catch (e54984){if((e54984 instanceof Error)){
var _ = e54984;
return null;
} else {
throw e54984;

}
}});
});
taoensso.truss.impl.error_message = (function taoensso$truss$impl$error_message(x){
if((x instanceof Error)){
return x.message;
} else {
return null;
}
});

/**
* @constructor
*/
taoensso.truss.impl.WrappedError = (function (val){
this.val = val;
});

(taoensso.truss.impl.WrappedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(taoensso.truss.impl.WrappedError.cljs$lang$type = true);

(taoensso.truss.impl.WrappedError.cljs$lang$ctorStr = "taoensso.truss.impl/WrappedError");

(taoensso.truss.impl.WrappedError.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.truss.impl/WrappedError");
}));

/**
 * Positional factory function for taoensso.truss.impl/WrappedError.
 */
taoensso.truss.impl.__GT_WrappedError = (function taoensso$truss$impl$__GT_WrappedError(val){
return (new taoensso.truss.impl.WrappedError(val));
});

taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._dummy_error = ({});
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(elidable_QMARK_,ns_sym,_QMARK_line,_QMARK_column,_QMARK_file,pred_form,pred_rsym,arg_form,arg,_QMARK_err,_QMARK_data_fn){
var temp__5823__auto__ = taoensso.truss.impl._STAR_error_fn_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var error_fn = temp__5823__auto__;
var G__55007 = (new cljs.core.Delay((function (){
var instant = (new Date());
var undefn_arg_QMARK_ = (arg instanceof taoensso.truss.impl.WrappedError);
var arg_val = ((undefn_arg_QMARK_)?new cljs.core.Symbol("truss","undefined-arg","truss/undefined-arg",153544757,null):arg);
var arg_type = ((undefn_arg_QMARK_)?new cljs.core.Symbol("truss","undefined-arg","truss/undefined-arg",153544757,null):cljs.core.type(arg));
var _QMARK_err__$1 = (((taoensso.truss.impl._dummy_error === _QMARK_err))?null:(((_QMARK_err instanceof taoensso.truss.impl.WrappedError))?_QMARK_err.val:_QMARK_err
));
var msg_ = (new cljs.core.Delay((function (){
var msg = ["Invariant failed at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),(cljs.core.truth_(_QMARK_line)?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_line),(cljs.core.truth_(_QMARK_column)?[",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_column)].join(''):null),"]"].join(''):null),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,pred_form,(new cljs.core.List(null,arg_form,null,(1),null)),(2),null)))].join('');
var temp__5821__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__5821__auto__)){
var err = temp__5821__auto__;
var err_msg = taoensso.truss.impl.error_message(err);
if(undefn_arg_QMARK_){
return [msg,"\r\n\r\nError evaluating arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg)].join('');
} else {
return [msg,"\r\n\r\nError evaluating pred: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg)].join('');
}
} else {
return msg;
}
}),null));
var _QMARK_data = (function (){var dynamic = taoensso.truss.impl._STAR_data_STAR_;
var arg__$1 = (function (){var temp__5823__auto____$1 = _QMARK_data_fn;
if(cljs.core.truth_(temp__5823__auto____$1)){
var data_fn = temp__5823__auto____$1;
try{return (data_fn.cljs$core$IFn$_invoke$arity$0 ? data_fn.cljs$core$IFn$_invoke$arity$0() : data_fn.call(null, ));
}catch (e55029){if((e55029 instanceof Error)){
var e = e55029;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("truss","error","truss/error",-1137909873),e], null);
} else {
throw e55029;

}
}} else {
return null;
}
})();
if(cljs.core.truth_((function (){var or__5002__auto__ = dynamic;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return arg__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),dynamic,new cljs.core.Keyword(null,"arg","arg",-1747261837),arg__$1], null);
} else {
return null;
}
})();
var loc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym], null);
var loc__$1 = (function (){var temp__5821__auto__ = _QMARK_line;
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc,new cljs.core.Keyword(null,"line","line",212345235),v);
} else {
return loc;
}
})();
var loc__$2 = (function (){var temp__5821__auto__ = _QMARK_column;
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc__$1,new cljs.core.Keyword(null,"column","column",2078222095),v);
} else {
return loc__$1;
}
})();
var loc__$3 = (function (){var temp__5821__auto__ = _QMARK_file;
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loc__$2,new cljs.core.Keyword(null,"file","file",-1269645878),v);
} else {
return loc__$2;
}
})();
var output = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"msg_","msg_",-1925147000),msg_,new cljs.core.Keyword(null,"dt","dt",-368444759),instant,new cljs.core.Keyword(null,"pred","pred",1927423397),(function (){var or__5002__auto__ = pred_rsym;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return pred_form;
}
})(),new cljs.core.Keyword(null,"arg","arg",-1747261837),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),arg_form,new cljs.core.Keyword(null,"value","value",305978217),arg_val,new cljs.core.Keyword(null,"type","type",1174270348),arg_type], null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elidable?","elidable?",248362249),elidable_QMARK_,new cljs.core.Keyword(null,"*assert*","*assert*",-160895053),cljs.core._STAR_assert_STAR_], null),new cljs.core.Keyword(null,"loc","loc",-584284901),loc__$3], null);
var output__$1 = (function (){var temp__5821__auto__ = _QMARK_data;
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(output,new cljs.core.Keyword(null,"data","data",-232669377),v);
} else {
return output;
}
})();
var output__$2 = (function (){var temp__5821__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(output__$1,new cljs.core.Keyword(null,"err","err",-2089457205),v);
} else {
return output__$1;
}
})();
return output__$2;
}),null));
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__55007) : error_fn.call(null, G__55007));
} else {
return null;
}
});

//# sourceMappingURL=taoensso.truss.impl.js.map
