goog.provide('taoensso.encore.signals');
/**
 * Map of {<level-keyword> <level-integer>} aliases.
 */
taoensso.encore.signals.level_aliases = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"report","report",1394055010),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"high++","high++",2122734286),new cljs.core.Keyword(null,"low-","low-",1453123823),new cljs.core.Keyword(null,"low--","low--",-1484729873),new cljs.core.Keyword(null,"high","high",2027297808),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"high+","high+",1276710996),new cljs.core.Keyword(null,"med","med",-1154404524),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"low---","low---",346223190),new cljs.core.Keyword(null,"low","low",-1601362409),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"high+++","high+++",2048295289)],[(90),(60),(10),(20),(80),(20),(10),(60),(80),(70),(50),(50),(0),(30),(70),(90)]),null);
var expected_61479 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(taoensso.encore.signals.level_aliases)),new cljs.core.Symbol(null,"integer","integer",1035809817,null));
/**
 * Throws an `ex-info` for given invalid level.
 */
taoensso.encore.signals.bad_level_BANG_ = (function taoensso$encore$signals$bad_level_BANG_(x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/signals] Invalid level",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null),new cljs.core.Keyword(null,"expected","expected",1583670997),expected_61479], null));
});
taoensso.encore.signals._valid_level_int = (function taoensso$encore$signals$_valid_level_int(x){
if((x instanceof cljs.core.Keyword)){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(taoensso.encore.signals.level_aliases,x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.signals.bad_level_BANG_(x);
}
} else {
if(cljs.core.integer_QMARK_(x)){
return cljs.core.long$(x);
} else {
return taoensso.encore.signals.bad_level_BANG_(x);
}
}
});
taoensso.encore.signals._valid_level = (function taoensso$encore$signals$_valid_level(x){
if((x instanceof cljs.core.Keyword)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(taoensso.encore.signals.level_aliases,x))){
return x;
} else {
return taoensso.encore.signals.bad_level_BANG_(x);
}
} else {
if(cljs.core.integer_QMARK_(x)){
return x;
} else {
return taoensso.encore.signals.bad_level_BANG_(x);
}
}
});
var nf_compile_61482 = (function (nf_spec){
return taoensso.encore.name_filter((function (){var or__5002__auto__ = nf_spec;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"any","any",1705907423);
}
})());
});
var nf_match_QMARK__61483 = (function (nf_spec,n){
return nf_compile_61482(nf_spec)(n);
});
var nf__GT_min_level_61484 = (function (ml_spec,nf_arg){
if(cljs.core.vector_QMARK_(ml_spec)){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__60995){
var vec__61000 = p__60995;
var nf_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61000,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61000,(1),null);
if(cljs.core.truth_(nf_match_QMARK__61483(nf_spec,nf_arg))){
return min_level;
} else {
return null;
}
}),ml_spec);
} else {
return ml_spec;
}
});
/**
 * Returns valid `encore/name-filter` spec, or throws.
 */
taoensso.encore.signals.valid_nf_spec = (function taoensso$encore$signals$valid_nf_spec(x){
var temp__5821__auto__ = (function (){try{nf_compile_61482(x);

return null;
}catch (e61005){var t = e61005;
return t;
}})();
if(cljs.core.truth_(temp__5821__auto__)){
var t = temp__5821__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(((cljs.core.fn_QMARK_(x))?"[encore/signals] Invalid name filter (fn filters no longer supported)":"[encore/signals] Invalid name filter"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name-filter","name-filter",-205720878),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null)], null),t);
} else {
return x;
}
});

/**
 * Low-level name filter.
 */
taoensso.encore.signals.allow_name_QMARK_ = (function taoensso$encore$signals$allow_name_QMARK_(nf_spec,nf_arg){
if(nf_match_QMARK__61483(nf_spec,nf_arg)){
return true;
} else {
return false;
}
});

/**
 * Returns simple unvalidated ?min-level from {<kind> [[<nf-spec> <min-level>] ...]}, etc.
 */
taoensso.encore.signals.parse_min_level = (function taoensso$encore$signals$parse_min_level(ml_spec,kind,nf_arg){
if(cljs.core.map_QMARK_(ml_spec)){
var or__5002__auto__ = (cljs.core.truth_(kind)?(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ml_spec,kind);
if(cljs.core.truth_(temp__5823__auto__)){
var ml_spec_STAR_ = temp__5823__auto__;
return nf__GT_min_level_61484(ml_spec_STAR_,nf_arg);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ml_spec,new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5823__auto__)){
var ml_spec_STAR_ = temp__5823__auto__;
return nf__GT_min_level_61484(ml_spec_STAR_,nf_arg);
} else {
return null;
}
}
} else {
return nf__GT_min_level_61484(ml_spec,nf_arg);
}
});

var parse_min_level_61489 = taoensso.encore.signals.parse_min_level;
/**
 * Low-level level filter.
 */
taoensso.encore.signals.allow_level_QMARK_ = (function taoensso$encore$signals$allow_level_QMARK_(var_args){
var G__61026 = arguments.length;
switch (G__61026) {
case 2:
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (min_level,level){
if((taoensso.encore.signals._valid_level_int(level) >= taoensso.encore.signals._valid_level_int(min_level))){
return true;
} else {
return false;
}
}));

(taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (ml_spec,nf_arg,level){
var min_level = nf__GT_min_level_61484(ml_spec,nf_arg);
if((taoensso.encore.signals._valid_level_int(level) >= taoensso.encore.signals._valid_level_int(min_level))){
return true;
} else {
return false;
}
}));

(taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (ml_spec,kind,nf_arg,level){
if(cljs.core.truth_(ml_spec)){
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$2((parse_min_level_61489.cljs$core$IFn$_invoke$arity$3 ? parse_min_level_61489.cljs$core$IFn$_invoke$arity$3(ml_spec,kind,nf_arg) : parse_min_level_61489.call(null, ml_spec,kind,nf_arg)),level);
} else {
return true;
}
}));

(taoensso.encore.signals.allow_level_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Returns valid min level, or throws.
 */
taoensso.encore.signals.valid_min_level = (function taoensso$encore$signals$valid_min_level(x){
if(cljs.core.vector_QMARK_(x)){
taoensso.encore.run_BANG_((function (p__61040){
var vec__61041 = p__61040;
var nf_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61041,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61041,(1),null);
taoensso.encore.signals.valid_nf_spec(nf_spec);

return taoensso.encore.signals._valid_level(min_level);
}),x);

return x;
} else {
return taoensso.encore.signals._valid_level(x);
}
});
/**
 * Low-level util to update given min level.
 */
taoensso.encore.signals.update_min_level = (function taoensso$encore$signals$update_min_level(old,kind,nf_spec,new$){
var b2__38440__auto__ = ((cljs.core.map_QMARK_(old))?old:null);
if(cljs.core.truth_(b2__38440__auto__)){
var old_map = b2__38440__auto__;
var kind__$1 = (function (){var or__5002__auto__ = kind;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
var old_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_map,kind__$1);
var new_val = (taoensso.encore.signals.update_min_level.cljs$core$IFn$_invoke$arity$4 ? taoensso.encore.signals.update_min_level.cljs$core$IFn$_invoke$arity$4(old_val,null,nf_spec,new$) : taoensso.encore.signals.update_min_level.call(null, old_val,null,nf_spec,new$));
var new_map = (((new_val == null))?cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(old_map,kind__$1)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(old_map,kind__$1,new_val));
var temp__5821__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new_map),(1)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_map,new cljs.core.Keyword(null,"default","default",-1987822328)):null);
if(cljs.core.truth_(temp__5821__auto__)){
var simplified = temp__5821__auto__;
return simplified;
} else {
return new_map;
}
} else {
if(cljs.core.truth_(kind)){
var old_map = (cljs.core.truth_(old)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),old], null):cljs.core.PersistentArrayMap.EMPTY);
return (taoensso.encore.signals.update_min_level.cljs$core$IFn$_invoke$arity$4 ? taoensso.encore.signals.update_min_level.cljs$core$IFn$_invoke$arity$4(old_map,kind,nf_spec,new$) : taoensso.encore.signals.update_min_level.call(null, old_map,kind,nf_spec,new$));
} else {
if((nf_spec == null)){
if(cljs.core.truth_(new$)){
return taoensso.encore.signals.valid_min_level(new$);
} else {
return null;
}
} else {
var new$__$1 = (cljs.core.truth_(new$)?taoensso.encore.signals._valid_level(new$):null);
var nf_spec__$1 = taoensso.encore.signals.valid_nf_spec(nf_spec);
var old_vec = ((cljs.core.vector_QMARK_(old))?old:(cljs.core.truth_(old)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",taoensso.encore.signals._valid_level(old)], null)], null):cljs.core.PersistentVector.EMPTY));
var new_vec = cljs.core.not_empty((function (){var exact_match_QMARK_ = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashSet.createAsIfByAssoc([nf_spec__$1])], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nf_spec__$1], 0))]);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__61068){
var vec__61076 = p__61068;
var nf_spec_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61076,(0),null);
var _min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61076,(1),null);
var entry = vec__61076;
if(cljs.core.truth_((function (){var G__61079 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nf_spec_STAR_], 0));
return (exact_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? exact_match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__61079) : exact_match_QMARK_.call(null, G__61079));
})())){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,entry);
}
}),(cljs.core.truth_(new$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nf_spec__$1,new$__$1], null)], null):cljs.core.PersistentVector.EMPTY),old_vec);
})());
var temp__5821__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new_vec),(1)))?(function (){var vec__61082 = new_vec;
var vec__61085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61082,(0),null);
var nf_spec__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61085,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61085,(1),null);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,new cljs.core.Keyword(null,"any","any",1705907423),null], null), null),nf_spec__$2)){
return min_level;
} else {
return null;
}
})():null);
if(cljs.core.truth_(temp__5821__auto__)){
var simplified = temp__5821__auto__;
return simplified;
} else {
return new_vec;
}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.signals.SigFilter = (function (kind_filter,ns_filter,id_filter,min_level,filter_fn){
this.kind_filter = kind_filter;
this.ns_filter = ns_filter;
this.id_filter = id_filter;
this.min_level = min_level;
this.filter_fn = filter_fn;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.signals.SigFilter.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915),self__.kind_filter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),self__.ns_filter,new cljs.core.Keyword(null,"id-filter","id-filter",-572281277),self__.id_filter,new cljs.core.Keyword(null,"min-level","min-level",1634684919),self__.min_level], 0));
}));

(taoensso.encore.signals.SigFilter.prototype.call = (function (unused__11220__auto__){
var self__ = this;
var self__ = this;
var G__61105 = (arguments.length - (1));
switch (G__61105) {
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.signals.SigFilter.prototype.apply = (function (self__,args61104){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61104)));
}));

(taoensso.encore.signals.SigFilter.prototype.cljs$core$IFn$_invoke$arity$4 = (function (kind,ns,id,level){
var self__ = this;
var _ = this;
return (self__.filter_fn.cljs$core$IFn$_invoke$arity$4 ? self__.filter_fn.cljs$core$IFn$_invoke$arity$4(kind,ns,id,level) : self__.filter_fn.call(null, kind,ns,id,level));
}));

(taoensso.encore.signals.SigFilter.prototype.cljs$core$IFn$_invoke$arity$3 = (function (ns,id,level){
var self__ = this;
var _ = this;
return (self__.filter_fn.cljs$core$IFn$_invoke$arity$3 ? self__.filter_fn.cljs$core$IFn$_invoke$arity$3(ns,id,level) : self__.filter_fn.call(null, ns,id,level));
}));

(taoensso.encore.signals.SigFilter.prototype.cljs$core$IFn$_invoke$arity$2 = (function (ns,level){
var self__ = this;
var _ = this;
return (self__.filter_fn.cljs$core$IFn$_invoke$arity$2 ? self__.filter_fn.cljs$core$IFn$_invoke$arity$2(ns,level) : self__.filter_fn.call(null, ns,level));
}));

(taoensso.encore.signals.SigFilter.prototype.cljs$core$IFn$_invoke$arity$1 = (function (ct_map){
var self__ = this;
var _ = this;
return (self__.filter_fn.cljs$core$IFn$_invoke$arity$1 ? self__.filter_fn.cljs$core$IFn$_invoke$arity$1(ct_map) : self__.filter_fn.call(null, ct_map));
}));

(taoensso.encore.signals.SigFilter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind-filter","kind-filter",-623624854,null),new cljs.core.Symbol(null,"ns-filter","ns-filter",1749129975,null),new cljs.core.Symbol(null,"id-filter","id-filter",1068250250,null),new cljs.core.Symbol(null,"min-level","min-level",-1019750850,null),new cljs.core.Symbol(null,"filter-fn","filter-fn",-964960094,null)], null);
}));

(taoensso.encore.signals.SigFilter.cljs$lang$type = true);

(taoensso.encore.signals.SigFilter.cljs$lang$ctorStr = "taoensso.encore.signals/SigFilter");

(taoensso.encore.signals.SigFilter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore.signals/SigFilter");
}));

/**
 * Positional factory function for taoensso.encore.signals/SigFilter.
 */
taoensso.encore.signals.__GT_SigFilter = (function taoensso$encore$signals$__GT_SigFilter(kind_filter,ns_filter,id_filter,min_level,filter_fn){
return (new taoensso.encore.signals.SigFilter(kind_filter,ns_filter,id_filter,min_level,filter_fn));
});

/**
 * Returns true iff given a `SigFilter`.
 */
taoensso.encore.signals.sig_filter_QMARK_ = (function taoensso$encore$signals$sig_filter_QMARK_(x){
return (x instanceof taoensso.encore.signals.SigFilter);
});
/**
 * Returns nil, or a stateful (caching) `SigFilter` with the given specs.
 */
taoensso.encore.signals.sig_filter = (function (){var get_cached = taoensso.encore.fmemoize((function taoensso$encore$signals$sig_filter(kind_filter,ns_filter,id_filter,min_level){
if(cljs.core.truth_((function (){var or__5002__auto__ = kind_filter;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ns_filter;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = id_filter;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return min_level;
}
}
}
})())){
if(cljs.core.truth_(kind_filter)){
taoensso.encore.signals.valid_nf_spec(kind_filter);
} else {
}

if(cljs.core.truth_(ns_filter)){
taoensso.encore.signals.valid_nf_spec(ns_filter);
} else {
}

if(cljs.core.truth_(id_filter)){
taoensso.encore.signals.valid_nf_spec(id_filter);
} else {
}

if(cljs.core.truth_(min_level)){
if(cljs.core.map_QMARK_(min_level)){
taoensso.encore.run_kv_BANG_((function (kind,min_level__$1){
return taoensso.encore.signals.valid_min_level(min_level__$1);
}),min_level);
} else {
taoensso.encore.signals.valid_min_level(min_level);
}
} else {
}

return (new taoensso.encore.signals.SigFilter(kind_filter,ns_filter,id_filter,min_level,taoensso.encore.fmemoize((function() {
var taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_ = null;
var taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___1 = (function (p__61151){
var map__61152 = p__61151;
var map__61152__$1 = cljs.core.__destructure_map(map__61152);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61152__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var and__5000__auto__ = (cljs.core.truth_((function (){var and__5000__auto__ = kind_filter;
if(cljs.core.truth_(and__5000__auto__)){
return kind;
} else {
return and__5000__auto__;
}
})())?taoensso.encore.signals.allow_name_QMARK_(kind_filter,kind):true);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = (cljs.core.truth_((function (){var and__5000__auto____$1 = ns_filter;
if(cljs.core.truth_(and__5000__auto____$1)){
return ns;
} else {
return and__5000__auto____$1;
}
})())?taoensso.encore.signals.allow_name_QMARK_(ns_filter,ns):true);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = (cljs.core.truth_((function (){var and__5000__auto____$2 = id_filter;
if(cljs.core.truth_(and__5000__auto____$2)){
return id;
} else {
return and__5000__auto____$2;
}
})())?taoensso.encore.signals.allow_name_QMARK_(id_filter,id):true);
if(cljs.core.truth_(and__5000__auto____$2)){
if(cljs.core.truth_((function (){var and__5000__auto____$3 = min_level;
if(cljs.core.truth_(and__5000__auto____$3)){
return level;
} else {
return and__5000__auto____$3;
}
})())){
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$4(min_level,kind,ns,level);
} else {
return true;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
var taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___2 = (function (ns,level){
var and__5000__auto__ = (cljs.core.truth_(ns_filter)?taoensso.encore.signals.allow_name_QMARK_(ns_filter,ns):true);
if(cljs.core.truth_(and__5000__auto__)){
if(cljs.core.truth_(min_level)){
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$3(min_level,ns,level);
} else {
return true;
}
} else {
return and__5000__auto__;
}
});
var taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___3 = (function (ns,id,level){
var and__5000__auto__ = (cljs.core.truth_(ns_filter)?taoensso.encore.signals.allow_name_QMARK_(ns_filter,ns):true);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = (cljs.core.truth_(id_filter)?taoensso.encore.signals.allow_name_QMARK_(id_filter,id):true);
if(cljs.core.truth_(and__5000__auto____$1)){
if(cljs.core.truth_(min_level)){
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$3(min_level,ns,level);
} else {
return true;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
var taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___4 = (function (kind,ns,id,level){
var and__5000__auto__ = (cljs.core.truth_(kind_filter)?taoensso.encore.signals.allow_name_QMARK_(kind_filter,kind):true);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = (cljs.core.truth_(ns_filter)?taoensso.encore.signals.allow_name_QMARK_(ns_filter,ns):true);
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = (cljs.core.truth_(id_filter)?taoensso.encore.signals.allow_name_QMARK_(id_filter,id):true);
if(cljs.core.truth_(and__5000__auto____$2)){
if(cljs.core.truth_(min_level)){
return taoensso.encore.signals.allow_level_QMARK_.cljs$core$IFn$_invoke$arity$4(min_level,kind,ns,level);
} else {
return true;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_ = function(kind,ns,id,level){
switch(arguments.length){
case 1:
return taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___1.call(this,kind);
case 2:
return taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___2.call(this,kind,ns);
case 3:
return taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___3.call(this,kind,ns,id);
case 4:
return taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___4.call(this,kind,ns,id,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___1;
taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___2;
taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_.cljs$core$IFn$_invoke$arity$3 = taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___3;
taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_.cljs$core$IFn$_invoke$arity$4 = taoensso$encore$signals$sig_filter_$_allow_signal_QMARK___4;
return taoensso$encore$signals$sig_filter_$_allow_signal_QMARK_;
})()
)));
} else {
return null;
}
}));
return (function() {
var taoensso$encore$signals$sig_filter = null;
var taoensso$encore$signals$sig_filter__1 = (function (p__61162){
var map__61165 = p__61162;
var map__61165__$1 = cljs.core.__destructure_map(map__61165);
var kind_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915));
var ns_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
var id_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"id-filter","id-filter",-572281277));
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword(null,"specs","specs",1426570741));
return get_cached(kind_filter,ns_filter,id_filter,min_level);
});
var taoensso$encore$signals$sig_filter__4 = (function (kind_filter,ns_filter,id_filter,min_level){
return get_cached(kind_filter,ns_filter,id_filter,min_level);
});
taoensso$encore$signals$sig_filter = function(kind_filter,ns_filter,id_filter,min_level){
switch(arguments.length){
case 1:
return taoensso$encore$signals$sig_filter__1.call(this,kind_filter);
case 4:
return taoensso$encore$signals$sig_filter__4.call(this,kind_filter,ns_filter,id_filter,min_level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$signals$sig_filter.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$signals$sig_filter__1;
taoensso$encore$signals$sig_filter.cljs$core$IFn$_invoke$arity$4 = taoensso$encore$signals$sig_filter__4;
return taoensso$encore$signals$sig_filter;
})()
})();

/**
 * Protocol that app/library signal-like types must implement to support signal API.
 * @interface
 */
taoensso.encore.signals.IFilterableSignal = function(){};

var taoensso$encore$signals$IFilterableSignal$allow_signal_QMARK_$dyn_61520 = (function (_,sig_filter){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.signals.allow_signal_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,sig_filter) : m__5351__auto__.call(null, _,sig_filter));
} else {
var m__5349__auto__ = (taoensso.encore.signals.allow_signal_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,sig_filter) : m__5349__auto__.call(null, _,sig_filter));
} else {
throw cljs.core.missing_protocol("IFilterableSignal.allow-signal?",_);
}
}
});
/**
 * Returns true iff given signal is allowed by given `SigFilter`.
 */
taoensso.encore.signals.allow_signal_QMARK_ = (function taoensso$encore$signals$allow_signal_QMARK_(_,sig_filter){
if((((!((_ == null)))) && ((!((_.taoensso$encore$signals$IFilterableSignal$allow_signal_QMARK_$arity$2 == null)))))){
return _.taoensso$encore$signals$IFilterableSignal$allow_signal_QMARK_$arity$2(_,sig_filter);
} else {
return taoensso$encore$signals$IFilterableSignal$allow_signal_QMARK_$dyn_61520(_,sig_filter);
}
});

var taoensso$encore$signals$IFilterableSignal$signal_value$dyn_61522 = (function (_,handler_sample_rate){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.signals.signal_value[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,handler_sample_rate) : m__5351__auto__.call(null, _,handler_sample_rate));
} else {
var m__5349__auto__ = (taoensso.encore.signals.signal_value["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,handler_sample_rate) : m__5349__auto__.call(null, _,handler_sample_rate));
} else {
throw cljs.core.missing_protocol("IFilterableSignal.signal-value",_);
}
}
});
/**
 * Returns public signal value as given to handlers, etc.
 */
taoensso.encore.signals.signal_value = (function taoensso$encore$signals$signal_value(_,handler_sample_rate){
if((((!((_ == null)))) && ((!((_.taoensso$encore$signals$IFilterableSignal$signal_value$arity$2 == null)))))){
return _.taoensso$encore$signals$IFilterableSignal$signal_value$arity$2(_,handler_sample_rate);
} else {
return taoensso$encore$signals$IFilterableSignal$signal_value$dyn_61522(_,handler_sample_rate);
}
});

var taoensso$encore$signals$IFilterableSignal$signal_debug$dyn_61527 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.signals.signal_debug[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.signals.signal_debug["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("IFilterableSignal.signal-debug",_);
}
}
});
/**
 * Returns minimal signal representation for debug purposes
 */
taoensso.encore.signals.signal_debug = (function taoensso$encore$signals$signal_debug(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$signals$IFilterableSignal$signal_debug$arity$1 == null)))))){
return _.taoensso$encore$signals$IFilterableSignal$signal_debug$arity$1(_);
} else {
return taoensso$encore$signals$IFilterableSignal$signal_debug$dyn_61527(_);
}
});

var nil_sf_61529 = (new taoensso.encore.signals.SigFilter(null,null,null,null,null));
/**
 * Returns nil, or updated stateful (caching) `SigFilter`.
 */
taoensso.encore.signals.update_sig_filter = (function taoensso$encore$signals$update_sig_filter(old,specs){
var base = (function (){var or__5002__auto__ = old;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return nil_sf_61529;
}
})();
if(cljs.core.empty_QMARK_(specs)){
return old;
} else {
return taoensso.encore.signals.sig_filter(cljs.core.get.cljs$core$IFn$_invoke$arity$3(specs,new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915),base.kind_filter),cljs.core.get.cljs$core$IFn$_invoke$arity$3(specs,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),base.ns_filter),cljs.core.get.cljs$core$IFn$_invoke$arity$3(specs,new cljs.core.Keyword(null,"id-filter","id-filter",-572281277),base.id_filter),(function (){var old_min_level = base.min_level;
var b2__38440__auto__ = cljs.core.find(specs,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(b2__38440__auto__)){
var e = b2__38440__auto__;
return taoensso.encore.signals.update_min_level(old_min_level,null,null,cljs.core.val(e));
} else {
var b2__38440__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs,new cljs.core.Keyword(null,"min-level-fn","min-level-fn",-1014940803));
if(cljs.core.truth_(b2__38440__auto____$1)){
var f = b2__38440__auto____$1;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_min_level) : f.call(null, old_min_level));
} else {
return old_min_level;
}
}
})());
}
});
var basic_rate_limiters__61537 = taoensso.encore.latom(cljs.core.PersistentArrayMap.EMPTY);
var full_rate_limiters__61538 = taoensso.encore.latom(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Calls the identified stateful rate-limiter and returns true iff limited.
 */
taoensso.encore.signals.expansion_limited_BANG__QMARK_ = (function taoensso$encore$signals$expansion_limited_BANG__QMARK_(var_args){
var G__61219 = arguments.length;
switch (G__61219) {
case 2:
return taoensso.encore.signals.expansion_limited_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.signals.expansion_limited_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.signals.expansion_limited_BANG__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (exp_id,spec){
var rl = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((basic_rate_limiters__61537.cljs$core$IFn$_invoke$arity$0 ? basic_rate_limiters__61537.cljs$core$IFn$_invoke$arity$0() : basic_rate_limiters__61537.call(null, )),exp_id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__61224 = exp_id;
var G__61225 = (function (p1__61210_SHARP_){
var or__5002__auto____$1 = p1__61210_SHARP_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-basic?","allow-basic?",-810481502),true], null),spec);
}
});
return (basic_rate_limiters__61537.cljs$core$IFn$_invoke$arity$2 ? basic_rate_limiters__61537.cljs$core$IFn$_invoke$arity$2(G__61224,G__61225) : basic_rate_limiters__61537.call(null, G__61224,G__61225));
}
})();
if(cljs.core.truth_((rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null, )))){
return true;
} else {
return false;
}
}));

(taoensso.encore.signals.expansion_limited_BANG__QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (exp_id,spec,req_id){
var rl = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((full_rate_limiters__61538.cljs$core$IFn$_invoke$arity$0 ? full_rate_limiters__61538.cljs$core$IFn$_invoke$arity$0() : full_rate_limiters__61538.call(null, )),exp_id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__61226 = exp_id;
var G__61227 = (function (p1__61212_SHARP_){
var or__5002__auto____$1 = p1__61212_SHARP_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-basic?","allow-basic?",-810481502),false], null),spec);
}
});
return (full_rate_limiters__61538.cljs$core$IFn$_invoke$arity$2 ? full_rate_limiters__61538.cljs$core$IFn$_invoke$arity$2(G__61226,G__61227) : full_rate_limiters__61538.call(null, G__61226,G__61227));
}
})();
if(cljs.core.truth_((rl.cljs$core$IFn$_invoke$arity$1 ? rl.cljs$core$IFn$_invoke$arity$1(req_id) : rl.call(null, req_id)))){
return true;
} else {
return false;
}
}));

(taoensso.encore.signals.expansion_limited_BANG__QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Returns non-empty ?{<handler-id> {:keys [dispatch-opts handler-fn ...]}}.
 */
taoensso.encore.signals.get_handlers_map = (function taoensso$encore$signals$get_handlers_map(var_args){
var G__61239 = arguments.length;
switch (G__61239) {
case 1:
return taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$1 = (function (handlers_vec){
return taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$2(handlers_vec,false);
}));

(taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$2 = (function (handlers_vec,raw_QMARK_){
if(cljs.core.truth_(handlers_vec)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,wrapped_handler_fn){
var whm = cljs.core.meta(wrapped_handler_fn);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.get.cljs$core$IFn$_invoke$arity$2(whm,new cljs.core.Keyword(null,"handler-id","handler-id",1160395333)),(cljs.core.truth_(raw_QMARK_)?whm:(function (){var info = cljs.core.select_keys(whm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-opts","dispatch-opts",-1246785291),new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730)], null));
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(whm,new cljs.core.Keyword(null,"stats-fn","stats-fn",745608177));
if(cljs.core.truth_(temp__5821__auto__)){
var stats_fn = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info,new cljs.core.Keyword(null,"handler-stats_","handler-stats_",-831095881),(new cljs.core.Delay((function (){
return (stats_fn.cljs$core$IFn$_invoke$arity$0 ? stats_fn.cljs$core$IFn$_invoke$arity$0() : stats_fn.call(null, ));
}),null)));
} else {
return info;
}
})()));
}),null,handlers_vec);
} else {
return null;
}
}));

(taoensso.encore.signals.get_handlers_map.cljs$lang$maxFixedArity = 2);

/**
 * Returns non-empty ?{<handler-id> ?{:keys [handling-nsecs counts]}}.
 */
taoensso.encore.signals.get_handlers_stats = (function taoensso$encore$signals$get_handlers_stats(handlers_vec){
var temp__5823__auto__ = taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$2(handlers_vec,new cljs.core.Keyword(null,"raw","raw",1604651272));
if(cljs.core.truth_(temp__5823__auto__)){
var handlers_map = temp__5823__auto__;
return cljs.core.reduce_kv((function (m,handler_id,p__61245){
var map__61246 = p__61245;
var map__61246__$1 = cljs.core.__destructure_map(map__61246);
var stats_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61246__$1,new cljs.core.Keyword(null,"stats-fn","stats-fn",745608177));
if(cljs.core.truth_(stats_fn)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,handler_id,(stats_fn.cljs$core$IFn$_invoke$arity$0 ? stats_fn.cljs$core$IFn$_invoke$arity$0() : stats_fn.call(null, )));
} else {
return m;
}
}),null,handlers_map);
} else {
return null;
}
});
/**
 * Calls given handlers with the given signal.
 *   Signal's type must implement `IFilterableSignal`.
 */
taoensso.encore.signals.call_handlers_BANG_ = (function taoensso$encore$signals$call_handlers_BANG_(handlers_vec,signal){
return cljs.core.run_BANG_((function (wrapped_handler_fn){
return (wrapped_handler_fn.cljs$core$IFn$_invoke$arity$1 ? wrapped_handler_fn.cljs$core$IFn$_invoke$arity$1(signal) : wrapped_handler_fn.call(null, signal));
}),handlers_vec);
});
/**
 * Stops handlers in parallel and returns
 *   {<handler-id> {:keys [okay error drained?]}}.
 */
taoensso.encore.signals.stop_handlers_BANG_ = (function taoensso$encore$signals$stop_handlers_BANG_(handlers_vec){
var temp__5823__auto__ = taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$2(handlers_vec,new cljs.core.Keyword(null,"raw","raw",1604651272));
if(cljs.core.truth_(temp__5823__auto__)){
var handlers_map = temp__5823__auto__;
var results = cljs.core.reduce_kv((function (m,handler_id,p__61264){
var map__61265 = p__61264;
var map__61265__$1 = cljs.core.__destructure_map(map__61265);
var wrapped_handler_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61265__$1,new cljs.core.Keyword(null,"wrapped-handler-fn","wrapped-handler-fn",-1449520424));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,handler_id,(wrapped_handler_fn.cljs$core$IFn$_invoke$arity$0 ? wrapped_handler_fn.cljs$core$IFn$_invoke$arity$0() : wrapped_handler_fn.call(null, )));
}),null,handlers_map);
return results;
} else {
return null;
}
});
/**
 * Returns wrapped-handler-fn with given handler-id, or nil.
 */
taoensso.encore.signals.get_wrapped_handler_fn = (function taoensso$encore$signals$get_wrapped_handler_fn(handlers_vec,handler_id){
return taoensso.encore.rfirst.cljs$core$IFn$_invoke$arity$2((function (p1__61269_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(p1__61269_SHARP_),new cljs.core.Keyword(null,"handler-id","handler-id",1160395333)),handler_id);
}),handlers_vec);
});
/**
 * Returns updated, non-empty handlers vec.
 */
taoensso.encore.signals.remove_handler = (function taoensso$encore$signals$remove_handler(handlers_vec,handler_id){
return cljs.core.not_empty(cljs.core.filterv((function (p1__61275_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(p1__61275_SHARP_),new cljs.core.Keyword(null,"handler-id","handler-id",1160395333)),handler_id);
}),handlers_vec));
});

/**
 * Returns updated, non-empty handlers vec.
 */
taoensso.encore.signals.add_handler = (function taoensso$encore$signals$add_handler(var_args){
var G__61295 = arguments.length;
switch (G__61295) {
case 3:
return taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$3 = (function (handlers_vec,handler_id,pre_wrapped_handler_fn){
if(cljs.core.not(pre_wrapped_handler_fn)){
return handlers_vec;
} else {
return taoensso.encore.sortv.cljs$core$IFn$_invoke$arity$3((function (p1__61285_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(p1__61285_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-opts","dispatch-opts",-1246785291),new cljs.core.Keyword(null,"priority","priority",1431093715)], null),taoensso.encore.signals.default_handler_priority);
}),taoensso.encore.rcompare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = taoensso.encore.signals.remove_handler(handlers_vec,handler_id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),pre_wrapped_handler_fn));
}
}));

(taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$5 = (function (handlers_vec,handler_id,unwrapped_handler_fn,lib_dispatch_opts,dispatch_opts){
if(cljs.core.not(unwrapped_handler_fn)){
return handlers_vec;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dispatch_opts,new cljs.core.Keyword(null,"no-wrap?","no-wrap?",2080720814)))){
return taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$3(handlers_vec,handler_id,unwrapped_handler_fn);
} else {
return taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$3(handlers_vec,handler_id,(taoensso.encore.signals.wrap_handler.cljs$core$IFn$_invoke$arity$4 ? taoensso.encore.signals.wrap_handler.cljs$core$IFn$_invoke$arity$4(handler_id,unwrapped_handler_fn,lib_dispatch_opts,dispatch_opts) : taoensso.encore.signals.wrap_handler.call(null, handler_id,unwrapped_handler_fn,lib_dispatch_opts,dispatch_opts)));
}
}
}));

(taoensso.encore.signals.add_handler.cljs$lang$maxFixedArity = 5);

if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.signals !== 'undefined') && (typeof taoensso.encore.signals._STAR_default_handler_error_fn_STAR_ !== 'undefined')){
} else {
taoensso.encore.signals._STAR_default_handler_error_fn_STAR_ = null;
}
if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.signals !== 'undefined') && (typeof taoensso.encore.signals._STAR_default_handler_backp_fn_STAR_ !== 'undefined')){
} else {
taoensso.encore.signals._STAR_default_handler_backp_fn_STAR_ = null;
}
/**
 * Returns (composed) unary middleware fn, or nil.
 */
taoensso.encore.signals.as_middleware_fn = (function taoensso$encore$signals$as_middleware_fn(fn_or_fns){
if(cljs.core.truth_(fn_or_fns)){
if(cljs.core.vector_QMARK_(fn_or_fns)){
return taoensso.encore.comp_middleware.cljs$core$IFn$_invoke$arity$1(fn_or_fns);
} else {
if(cljs.core.fn_QMARK_(fn_or_fns)){
return fn_or_fns;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("[encore/signals] Unexpected middleware value",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),fn_or_fns,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(fn_or_fns)], null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,"null",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f1","f1",-939903380,null),new cljs.core.Symbol(null,"f2","f2",2036700123,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null"], null), null)], null));
}
}
} else {
return null;
}
});
taoensso.encore.signals.default_handler_priority = (100);
/**
 * Default handler dispatch options, see
 *   `help:handler-dispatch-options` for details.
 */
taoensso.encore.signals.default_handler_dispatch_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"priority","priority",1431093715),taoensso.encore.signals.default_handler_priority,new cljs.core.Keyword(null,"track-stats?","track-stats?",-713524039),false], null);
/**
 * Wraps given handler-fn to add common handler-level functionality.
 */
taoensso.encore.signals.wrap_handler = (function taoensso$encore$signals$wrap_handler(handler_id,handler_fn,lib_dispatch_opts,user_dispatch_opts){
var dispatch_opts = taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(taoensso.encore.signals.default_handler_dispatch_opts,lib_dispatch_opts,(function (){var temp__5823__auto__ = cljs.core.meta(handler_fn);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"dispatch-opts","dispatch-opts",-1246785291));
} else {
return null;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user_dispatch_opts], 0));
var map__61319 = dispatch_opts;
var map__61319__$1 = cljs.core.__destructure_map(map__61319);
var rl_backp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"rl-backp","rl-backp",-226781703));
var track_stats_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"track-stats?","track-stats?",-713524039));
var id_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"id-filter","id-filter",-572281277));
var kind_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915));
var sample_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
var rate_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022));
var rl_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"rl-error","rl-error",1545982960));
var ns_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
var middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"middleware","middleware",1462115504));
var error_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var backp_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"backp-fn","backp-fn",1835678931));
var when_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"when-fn","when-fn",-57616971));
var min_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61319__$1,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
var vec__61320 = (cljs.core.truth_(sample_rate)?((cljs.core.fn_QMARK_(sample_rate))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,sample_rate], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as_pnum_BANG_(sample_rate),null], null)):null);
var sample_rate__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320,(0),null);
var sample_rate_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61320,(1),null);
var rl_handler = (function (){var temp__5823__auto__ = rate_limit;
if(cljs.core.truth_(temp__5823__auto__)){
var spec = temp__5823__auto__;
return taoensso.encore.rate_limiter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-basic?","allow-basic?",-810481502),true], null),spec);
} else {
return null;
}
})();
var sig_filter_STAR_ = taoensso.encore.signals.sig_filter(kind_filter,ns_filter,id_filter,min_level);
var middleware__$1 = taoensso.encore.signals.as_middleware_fn(middleware);
var rl_error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dispatch_opts,new cljs.core.Keyword(null,"rl-error","rl-error",1545982960),taoensso.encore.rate_limiter_once_per(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mins","mins",467369676),(1))));
var rl_backp__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dispatch_opts,new cljs.core.Keyword(null,"rl-backp","rl-backp",-226781703),taoensso.encore.rate_limiter_once_per(taoensso.encore.ms.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mins","mins",467369676),(1))));
var backp_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dispatch_opts,new cljs.core.Keyword(null,"backp-fn","backp-fn",1835678931),new cljs.core.Keyword("taoensso.encore.signals","default","taoensso.encore.signals/default",-1402161769));
var error_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dispatch_opts,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),new cljs.core.Keyword("taoensso.encore.signals","default","taoensso.encore.signals/default",-1402161769));
var error_fn_STAR_ = (cljs.core.truth_(error_fn__$1)?(function (signal,error){
try{if(cljs.core.truth_((function (){var and__5000__auto__ = rl_error__$1;
if(cljs.core.truth_(and__5000__auto__)){
return (rl_error__$1.cljs$core$IFn$_invoke$arity$0 ? rl_error__$1.cljs$core$IFn$_invoke$arity$0() : rl_error__$1.call(null, ));
} else {
return and__5000__auto__;
}
})())){
return null;
} else {
var temp__5823__auto__ = ((cljs.core.keyword_identical_QMARK_(error_fn__$1,new cljs.core.Keyword("taoensso.encore.signals","default","taoensso.encore.signals/default",-1402161769)))?taoensso.encore.signals._STAR_default_handler_error_fn_STAR_:error_fn__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var error_fn__$2 = temp__5823__auto__;
if(cljs.core.truth_(signal)){
var G__61337 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),handler_id,new cljs.core.Keyword(null,"signal","signal",-1984951589),signal,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return (error_fn__$2.cljs$core$IFn$_invoke$arity$1 ? error_fn__$2.cljs$core$IFn$_invoke$arity$1(G__61337) : error_fn__$2.call(null, G__61337));
} else {
var G__61338 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),handler_id,new cljs.core.Keyword(null,"error","error",-978969032),error], null);
return (error_fn__$2.cljs$core$IFn$_invoke$arity$1 ? error_fn__$2.cljs$core$IFn$_invoke$arity$1(G__61338) : error_fn__$2.call(null, G__61338));
}
} else {
return null;
}
}
}catch (e61336){var _ = e61336;
return null;
}}):null);
var runner = null;
var stopped_QMARK__ = taoensso.encore.latom(false);
var stop_fn = (function (){
if((!(cljs.core.compare_and_set_BANG_(stopped_QMARK__,false,true)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"okay","okay",675029136),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null);
} else {
var drained_QMARK_ = null;
var handler_result = (function (){try{(handler_fn.cljs$core$IFn$_invoke$arity$0 ? handler_fn.cljs$core$IFn$_invoke$arity$0() : handler_fn.call(null, ));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"okay","okay",675029136),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null);
}catch (e61347){var t = e61347;
if(cljs.core.truth_(error_fn_STAR_)){
error_fn_STAR_(null,t);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),t], null);
}finally {if(cljs.core.truth_(runner)){
(runner.cljs$core$IFn$_invoke$arity$0 ? runner.cljs$core$IFn$_invoke$arity$0() : runner.call(null, ));
} else {
}
}})();
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(handler_result,new cljs.core.Keyword(null,"drained?","drained?",-1635967677),drained_QMARK_);
}
});
var ssb = (cljs.core.truth_(track_stats_QMARK_)?taoensso.encore.stats.summary_stats_buffered_fast(100000.0,null):null);
var vec__61323 = (cljs.core.truth_(track_stats_QMARK_)?cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((10),taoensso.encore.counter):null);
var cnt_allowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(0),null);
var cnt_disallowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(1),null);
var cnt_handled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(2),null);
var cnt_errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(3),null);
var cnt_backp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(4),null);
var cnt_sampled = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(5),null);
var cnt_filtered = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(6),null);
var cnt_rate_limited = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(7),null);
var cnt_suppressed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(8),null);
var cnt_dropped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61323,(9),null);
var handle_signal_BANG_ = (function (sig_raw){
var ns0 = (cljs.core.truth_(track_stats_QMARK_)?taoensso.encore.now_nano():null);
var result = (function (){var or__5002__auto__ = (function (){try{var sample_rate__$2 = (function (){var or__5002__auto__ = sample_rate__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5823__auto__ = sample_rate_fn;
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return null;
}
}
})();
var allow_QMARK_ = (cljs.core.truth_(track_stats_QMARK_)?(((cljs.core.truth_(sample_rate__$2)?(((Math.random() < sample_rate__$2))?true:(function (){
(cnt_sampled.cljs$core$IFn$_invoke$arity$0 ? cnt_sampled.cljs$core$IFn$_invoke$arity$0() : cnt_sampled.call(null, ));

return false;
})()
):true))?(((cljs.core.truth_(sig_filter_STAR_)?(cljs.core.truth_(taoensso.encore.signals.allow_signal_QMARK_(sig_raw,sig_filter_STAR_))?true:(function (){
(cnt_filtered.cljs$core$IFn$_invoke$arity$0 ? cnt_filtered.cljs$core$IFn$_invoke$arity$0() : cnt_filtered.call(null, ));

return false;
})()
):true))?(((cljs.core.truth_(when_fn)?(cljs.core.truth_((when_fn.cljs$core$IFn$_invoke$arity$0 ? when_fn.cljs$core$IFn$_invoke$arity$0() : when_fn.call(null, )))?true:(function (){
(cnt_filtered.cljs$core$IFn$_invoke$arity$0 ? cnt_filtered.cljs$core$IFn$_invoke$arity$0() : cnt_filtered.call(null, ));

return false;
})()
):true))?(cljs.core.truth_(rl_handler)?(cljs.core.truth_((rl_handler.cljs$core$IFn$_invoke$arity$0 ? rl_handler.cljs$core$IFn$_invoke$arity$0() : rl_handler.call(null, )))?(function (){
(cnt_rate_limited.cljs$core$IFn$_invoke$arity$0 ? cnt_rate_limited.cljs$core$IFn$_invoke$arity$0() : cnt_rate_limited.call(null, ));

return false;
})()
:true):true):false):false):false):(((cljs.core.truth_(sample_rate__$2)?(Math.random() < sample_rate__$2):true))?(cljs.core.truth_((cljs.core.truth_(sig_filter_STAR_)?taoensso.encore.signals.allow_signal_QMARK_(sig_raw,sig_filter_STAR_):true))?(cljs.core.truth_((cljs.core.truth_(when_fn)?(when_fn.cljs$core$IFn$_invoke$arity$0 ? when_fn.cljs$core$IFn$_invoke$arity$0() : when_fn.call(null, )):true))?(cljs.core.truth_(rl_handler)?(cljs.core.truth_((rl_handler.cljs$core$IFn$_invoke$arity$0 ? rl_handler.cljs$core$IFn$_invoke$arity$0() : rl_handler.call(null, )))?false:true):true):false):false):false));
if(cljs.core.truth_(track_stats_QMARK_)){
if(allow_QMARK_){
(cnt_allowed.cljs$core$IFn$_invoke$arity$0 ? cnt_allowed.cljs$core$IFn$_invoke$arity$0() : cnt_allowed.call(null, ));
} else {
(cnt_disallowed.cljs$core$IFn$_invoke$arity$0 ? cnt_disallowed.cljs$core$IFn$_invoke$arity$0() : cnt_disallowed.call(null, ));
}
} else {
}

if(allow_QMARK_){
var temp__5823__auto__ = taoensso.encore.signals.signal_value(sig_raw,sample_rate__$2);
if(cljs.core.truth_(temp__5823__auto__)){
var sig_val = temp__5823__auto__;
try{var b2__38440__auto__ = (cljs.core.truth_(middleware__$1)?(middleware__$1.cljs$core$IFn$_invoke$arity$1 ? middleware__$1.cljs$core$IFn$_invoke$arity$1(sig_val) : middleware__$1.call(null, sig_val)):sig_val);
if(cljs.core.truth_(b2__38440__auto__)){
var sig_val_STAR_ = b2__38440__auto__;
try{(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(sig_val_STAR_) : handler_fn.call(null, sig_val_STAR_));

if(cljs.core.truth_(track_stats_QMARK_)){
(cnt_handled.cljs$core$IFn$_invoke$arity$0 ? cnt_handled.cljs$core$IFn$_invoke$arity$0() : cnt_handled.call(null, ));
} else {
}

return true;
}catch (e61372){var t = e61372;
if(cljs.core.truth_(track_stats_QMARK_)){
(cnt_errors.cljs$core$IFn$_invoke$arity$0 ? cnt_errors.cljs$core$IFn$_invoke$arity$0() : cnt_errors.call(null, ));
} else {
}

if(cljs.core.truth_(error_fn_STAR_)){
return error_fn_STAR_(sig_val_STAR_,t);
} else {
return null;
}
}} else {
if(cljs.core.truth_(track_stats_QMARK_)){
(cnt_suppressed.cljs$core$IFn$_invoke$arity$0 ? cnt_suppressed.cljs$core$IFn$_invoke$arity$0() : cnt_suppressed.call(null, ));
} else {
}

return null;
}
}catch (e61371){var t = e61371;
if(cljs.core.truth_(track_stats_QMARK_)){
(cnt_errors.cljs$core$IFn$_invoke$arity$0 ? cnt_errors.cljs$core$IFn$_invoke$arity$0() : cnt_errors.call(null, ));
} else {
}

if(cljs.core.truth_(error_fn_STAR_)){
return error_fn_STAR_(sig_val,t);
} else {
return null;
}
}} else {
return null;
}
} else {
return null;
}
}catch (e61358){var t = e61358;
if(cljs.core.truth_(track_stats_QMARK_)){
(cnt_errors.cljs$core$IFn$_invoke$arity$0 ? cnt_errors.cljs$core$IFn$_invoke$arity$0() : cnt_errors.call(null, ));
} else {
}

if(cljs.core.truth_(error_fn_STAR_)){
var sig_dbg = (function (){var or__5002__auto__ = (function (){try{return taoensso.encore.signals.signal_debug(sig_raw);
}catch (e61361){var _ = e61361;
return null;
}})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sig_raw;
}
})();
return error_fn_STAR_(sig_dbg,t);
} else {
return null;
}
}})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return false;
}
})();
if(cljs.core.truth_(track_stats_QMARK_)){
var G__61375_61597 = (taoensso.encore.now_nano() - ns0);
(ssb.cljs$core$IFn$_invoke$arity$1 ? ssb.cljs$core$IFn$_invoke$arity$1(G__61375_61597) : ssb.call(null, G__61375_61597));
} else {
}

return result;
});
var wrapped_handler_fn = (function() {
var taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn = null;
var taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn__0 = (function (){
return stop_fn();
});
var taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn__1 = (function (sig_raw){
if(cljs.core.truth_((stopped_QMARK__.cljs$core$IFn$_invoke$arity$0 ? stopped_QMARK__.cljs$core$IFn$_invoke$arity$0() : stopped_QMARK__.call(null, )))){
if(cljs.core.truth_(track_stats_QMARK_)){
(cnt_dropped.cljs$core$IFn$_invoke$arity$0 ? cnt_dropped.cljs$core$IFn$_invoke$arity$0() : cnt_dropped.call(null, ));
} else {
}

return null;
} else {
return handle_signal_BANG_(sig_raw);
}
});
taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn = function(sig_raw){
switch(arguments.length){
case 0:
return taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn__0.call(this);
case 1:
return taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn__1.call(this,sig_raw);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn__0;
taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn__1;
return taoensso$encore$signals$wrap_handler_$_sync_wrapped_handler_fn;
})()
;
var stats_fn = (cljs.core.truth_(track_stats_QMARK_)?(function() {
var G__61598 = null;
var G__61598__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handling-nsecs","handling-nsecs",1811247246),(function (){var temp__5823__auto__ = cljs.core.deref(ssb);
if(cljs.core.truth_(temp__5823__auto__)){
var sstats = temp__5823__auto__;
return cljs.core.deref(sstats);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"counts","counts",234305892),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"dropped","dropped",-1651285782),new cljs.core.Keyword(null,"filtered","filtered",-437499761),new cljs.core.Keyword(null,"handled","handled",1889700151),new cljs.core.Keyword(null,"back-pressure","back-pressure",-1355705609),new cljs.core.Keyword(null,"disallowed","disallowed",544208344),new cljs.core.Keyword(null,"suppressed","suppressed",-5041288),new cljs.core.Keyword(null,"rate-limited","rate-limited",1069945372),new cljs.core.Keyword(null,"allowed","allowed",1436019743),new cljs.core.Keyword(null,"sampled","sampled",-1590460609)],[cljs.core.deref(cnt_errors),cljs.core.deref(cnt_dropped),cljs.core.deref(cnt_filtered),cljs.core.deref(cnt_handled),cljs.core.deref(cnt_backp),cljs.core.deref(cnt_disallowed),cljs.core.deref(cnt_suppressed),cljs.core.deref(cnt_rate_limited),cljs.core.deref(cnt_allowed),cljs.core.deref(cnt_sampled)])], null);
});
var G__61598__1 = (function (action){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not currently implemented",cljs.core.PersistentArrayMap.EMPTY);
});
G__61598 = function(action){
switch(arguments.length){
case 0:
return G__61598__0.call(this);
case 1:
return G__61598__1.call(this,action);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61598.cljs$core$IFn$_invoke$arity$0 = G__61598__0;
G__61598.cljs$core$IFn$_invoke$arity$1 = G__61598__1;
return G__61598;
})()
:null);
return cljs.core.with_meta(wrapped_handler_fn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handler-id","handler-id",1160395333),handler_id,new cljs.core.Keyword(null,"handler-fn","handler-fn",-799387730),handler_fn,new cljs.core.Keyword(null,"dispatch-opts","dispatch-opts",-1246785291),dispatch_opts,new cljs.core.Keyword(null,"wrapped-handler-fn","wrapped-handler-fn",-1449520424),wrapped_handler_fn,new cljs.core.Keyword(null,"stats-fn","stats-fn",745608177),stats_fn], null));
});
/**
 * Returns `new-ctx` given `old-ctx` and an update map or fn.
 */
taoensso.encore.signals.update_ctx = (function taoensso$encore$signals$update_ctx(old_ctx,update_map_or_fn){
if((update_map_or_fn == null)){
return old_ctx;
} else {
if(cljs.core.map_QMARK_(update_map_or_fn)){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(old_ctx,update_map_or_fn);
} else {
if(cljs.core.ifn_QMARK_(update_map_or_fn)){
return (update_map_or_fn.cljs$core$IFn$_invoke$arity$1 ? update_map_or_fn.cljs$core$IFn$_invoke$arity$1(old_ctx) : update_map_or_fn.call(null, old_ctx));
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(update_map_or_fn,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.encore.signals","update-ctx","taoensso.encore.signals/update-ctx",-270251357,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"update-map-or-fn","update-map-or-fn",1067081399,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,"null",new cljs.core.Symbol(null,"map","map",-1282745308,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null"], null), null)], null));
}
}
}
});
/**
 * `:foo/bar` -> "FOO/BAR", etc.
 */
taoensso.encore.signals.upper_qn = taoensso.encore.fmemoize((function (x){
return clojure.string.upper_case(taoensso.encore.as_qname(x));
}));
/**
 * `:info` -> "INFO",
 *     `5` -> "LEVEL:5", etc.
 */
taoensso.encore.signals.format_level = taoensso.encore.fmemoize((function (x){
if((x instanceof cljs.core.Keyword)){
return (taoensso.encore.signals.upper_qn.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.signals.upper_qn.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.signals.upper_qn.call(null, x));
} else {
return ["LEVEL:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}
}));
/**
 * `:foo.bar/baz` -> "::baz", etc.
 */
taoensso.encore.signals.format_id = taoensso.encore.fmemoize((function (ns,x){
if((x instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(x),ns)){
return ["::",cljs.core.name(x)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
}));
var cached_61620 = taoensso.encore.fmemoize((function (base,line,column){
if(cljs.core.truth_(line)){
if(cljs.core.truth_(column)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),")"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),")"].join('');
}
} else {
return base;
}
}));
/**
 * Returns "<ns/file>(<line>,<column>)", etc.
 */
taoensso.encore.signals.format_location = (function() {
var taoensso$encore$signals$format_location = null;
var taoensso$encore$signals$format_location__1 = (function (location){
var temp__5823__auto__ = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(location,new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(location,new cljs.core.Keyword(null,"file","file",-1269645878));
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var base = temp__5823__auto__;
var map__61470 = location;
var map__61470__$1 = cljs.core.__destructure_map(map__61470);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61470__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61470__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return cached_61620(base,line,column);
} else {
return null;
}
});
var taoensso$encore$signals$format_location__4 = (function (ns,line,column,file){
var temp__5823__auto__ = (function (){var or__5002__auto__ = ns;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return file;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var base = temp__5823__auto__;
return cached_61620(base,line,column);
} else {
return null;
}
});
taoensso$encore$signals$format_location = function(ns,line,column,file){
switch(arguments.length){
case 1:
return taoensso$encore$signals$format_location__1.call(this,ns);
case 4:
return taoensso$encore$signals$format_location__4.call(this,ns,line,column,file);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$signals$format_location.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$signals$format_location__1;
taoensso$encore$signals$format_location.cljs$core$IFn$_invoke$arity$4 = taoensso$encore$signals$format_location__4;
return taoensso$encore$signals$format_location;
})()
;
taoensso.encore.signals.signal_with_combined_sample_rate = (function taoensso$encore$signals$signal_with_combined_sample_rate(handler_sample_rate,sig_val){
var or__5002__auto__ = (cljs.core.truth_(handler_sample_rate)?((cljs.core.map_QMARK_(sig_val))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sig_val,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),(handler_sample_rate * (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sig_val,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 1.0;
}
})())):null):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sig_val;
}
});

//# sourceMappingURL=taoensso.encore.signals.js.map
