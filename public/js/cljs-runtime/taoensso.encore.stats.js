goog.provide('taoensso.encore.stats');
goog.scope(function(){
  taoensso.encore.stats.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IReduce}
*/
taoensso.encore.stats.SortedLongs = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.stats.SortedLongs.prototype.toString = (function (){
var self__ = this;
var x = this;
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3(x,"taoensso.encore.stats.SortedLongs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"length","length",588987862),self__.a.length], null));
}));

(taoensso.encore.stats.SortedLongs.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.encore.stats.SortedLongs.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
return (self__.a[idx]);
}));

(taoensso.encore.stats.SortedLongs.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,idx,not_found){
var self__ = this;
var ___$1 = this;
var max_idx = (self__.a.length - (1));
if((idx > max_idx)){
return not_found;
} else {
if((idx < max_idx)){
return not_found;
} else {
return (self__.a[idx]);
}
}
}));

(taoensso.encore.stats.SortedLongs.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,i){
var G__59982 = acc;
var G__59983 = (self__.a[i]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__59982,G__59983) : f.call(null, G__59982,G__59983));
}),init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(self__.a.length));
}));

(taoensso.encore.stats.SortedLongs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
}));

(taoensso.encore.stats.SortedLongs.cljs$lang$type = true);

(taoensso.encore.stats.SortedLongs.cljs$lang$ctorStr = "taoensso.encore.stats/SortedLongs");

(taoensso.encore.stats.SortedLongs.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore.stats/SortedLongs");
}));

/**
 * Positional factory function for taoensso.encore.stats/SortedLongs.
 */
taoensso.encore.stats.__GT_SortedLongs = (function taoensso$encore$stats$__GT_SortedLongs(a){
return (new taoensso.encore.stats.SortedLongs(a));
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IReduce}
*/
taoensso.encore.stats.SortedDoubles = (function (a){
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.stats.SortedDoubles.prototype.toString = (function (){
var self__ = this;
var x = this;
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3(x,"taoensso.encore.stats.SortedDoubles",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"length","length",588987862),self__.a.length], null));
}));

(taoensso.encore.stats.SortedDoubles.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a.length;
}));

(taoensso.encore.stats.SortedDoubles.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
return (self__.a[idx]);
}));

(taoensso.encore.stats.SortedDoubles.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,idx,not_found){
var self__ = this;
var ___$1 = this;
var max_idx = (self__.a.length - (1));
if((idx > max_idx)){
return not_found;
} else {
if((idx < max_idx)){
return not_found;
} else {
return (self__.a[idx]);
}
}
}));

(taoensso.encore.stats.SortedDoubles.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,i){
var G__60011 = acc;
var G__60012 = (self__.a[i]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__60011,G__60012) : f.call(null, G__60011,G__60012));
}),init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(self__.a.length));
}));

(taoensso.encore.stats.SortedDoubles.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null)], null))], null);
}));

(taoensso.encore.stats.SortedDoubles.cljs$lang$type = true);

(taoensso.encore.stats.SortedDoubles.cljs$lang$ctorStr = "taoensso.encore.stats/SortedDoubles");

(taoensso.encore.stats.SortedDoubles.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore.stats/SortedDoubles");
}));

/**
 * Positional factory function for taoensso.encore.stats/SortedDoubles.
 */
taoensso.encore.stats.__GT_SortedDoubles = (function taoensso$encore$stats$__GT_SortedDoubles(a){
return (new taoensso.encore.stats.SortedDoubles(a));
});

taoensso.encore.stats.sorted_longs_QMARK_ = (function taoensso$encore$stats$sorted_longs_QMARK_(x){
return (x instanceof taoensso.encore.stats.SortedLongs);
});
taoensso.encore.stats.sorted_doubles_QMARK_ = (function taoensso$encore$stats$sorted_doubles_QMARK_(x){
return (x instanceof taoensso.encore.stats.SortedDoubles);
});
taoensso.encore.stats.sorted_nums_QMARK_ = (function taoensso$encore$stats$sorted_nums_QMARK_(x){
return ((taoensso.encore.stats.sorted_longs_QMARK_(x)) || (taoensso.encore.stats.sorted_doubles_QMARK_(x)));
});
/**
 * Returns `SortedLongs` given `SortedLongs`, `SortedDoubles`, or num seq.
 */
taoensso.encore.stats.sorted_longs = (function taoensso$encore$stats$sorted_longs(var_args){
var G__60030 = arguments.length;
switch (G__60030) {
case 1:
return taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2(false,nums);
}));

(taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2 = (function (allow_mutation_QMARK_,nums){
if(taoensso.encore.stats.sorted_longs_QMARK_(nums)){
return nums;
} else {
if(taoensso.encore.stats.sorted_doubles_QMARK_(nums)){
return (new taoensso.encore.stats.SortedLongs(cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(nums.a)));
} else {
var a = ((cljs.core.array_QMARK_(nums))?(cljs.core.truth_(allow_mutation_QMARK_)?nums:cljs.core.aclone(nums)):cljs.core.to_array(nums));
taoensso.encore.stats.goog$module$goog$array.sort(a);

return (new taoensso.encore.stats.SortedLongs(a));
}
}
}));

(taoensso.encore.stats.sorted_longs.cljs$lang$maxFixedArity = 2);

/**
 * Returns `SortedDoubles` given `SortedDoubles`, `SortedLongs`, or num seq.
 */
taoensso.encore.stats.sorted_doubles = (function taoensso$encore$stats$sorted_doubles(var_args){
var G__60040 = arguments.length;
switch (G__60040) {
case 1:
return taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2(false,nums);
}));

(taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2 = (function (allow_mutation_QMARK_,nums){
if(taoensso.encore.stats.sorted_doubles_QMARK_(nums)){
return nums;
} else {
if(taoensso.encore.stats.sorted_longs_QMARK_(nums)){
return (new taoensso.encore.stats.SortedDoubles(cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(nums.a)));
} else {
var a = ((cljs.core.array_QMARK_(nums))?(cljs.core.truth_(allow_mutation_QMARK_)?nums:cljs.core.aclone(nums)):cljs.core.to_array(nums));
taoensso.encore.stats.goog$module$goog$array.sort(a);

return (new taoensso.encore.stats.SortedDoubles(a));
}
}
}));

(taoensso.encore.stats.sorted_doubles.cljs$lang$maxFixedArity = 2);

taoensso.encore.stats.fast_first = (function taoensso$encore$stats$fast_first(x){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null);
});
/**
 * Returns `SortedLongs` or `SortedDoubles`,
 *   given `SortedLongs`, `SortedDoubles`, or num seq.
 */
taoensso.encore.stats.sorted_nums = (function taoensso$encore$stats$sorted_nums(var_args){
var G__60043 = arguments.length;
switch (G__60043) {
case 1:
return taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1 = (function (nums){
return taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2(false,nums);
}));

(taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2 = (function (allow_mutation_QMARK_,nums){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nums], null);

if(taoensso.encore.stats.sorted_longs_QMARK_(nums)){
return nums;
} else {
if(taoensso.encore.stats.sorted_doubles_QMARK_(nums)){
return nums;
} else {
if(cljs.core.truth_((function (){var temp__5823__auto__ = taoensso.encore.stats.fast_first(nums);
if(cljs.core.truth_(temp__5823__auto__)){
var n1 = temp__5823__auto__;
return taoensso.encore.float_QMARK_(n1);
} else {
return null;
}
})())){
return taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2(allow_mutation_QMARK_,nums);
} else {
return taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2(allow_mutation_QMARK_,nums);
}
}
}
}));

(taoensso.encore.stats.sorted_nums.cljs$lang$maxFixedArity = 2);

/**
 * Returns interpolated nth numerical value.
 */
taoensso.encore.stats.weighted_nth = (function taoensso$encore$stats$weighted_nth(idx,nums){
var idx__$1 = idx;
var idx_floor = Math.floor(idx__$1);
var idx_ceil = Math.ceil(idx__$1);
if((idx_ceil === idx_floor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nums,(idx__$1 | (0)));
} else {
var weight_floor = (idx_ceil - idx__$1);
var weight_ceil = ((1) - weight_floor);
return ((weight_floor * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nums,(idx_floor | (0)))) + (weight_ceil * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nums,(idx_ceil | (0)))));
}
});
/**
 * Returns ?element.
 */
taoensso.encore.stats.percentile = (function taoensso$encore$stats$percentile(pnum,nums){
var snums = taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1(nums);
var max_idx = (cljs.core.count(snums) - (1));
if((max_idx >= (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * taoensso.encore.as_pnum_BANG_(pnum))));
} else {
return null;
}
});
/**
 * Returns ?[min p25 p50 p75 p90 p95 p99 max] elements in:
 *  - O(1) for Sorted types (SortedLongs, SortedDoubles),
 *  - O(n.log_n) otherwise.
 */
taoensso.encore.stats.percentiles = (function taoensso$encore$stats$percentiles(nums){
var snums = taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$1(nums);
var max_idx = (cljs.core.count(snums) - (1));
if((max_idx >= (0))){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.25))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.5))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.75))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.9))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.95))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,Math.round((max_idx * 0.99))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,max_idx)], null);
} else {
return null;
}
});
taoensso.encore.stats.bessel_correction = (function taoensso$encore$stats$bessel_correction(n,add){
return (n + add);
});
taoensso.encore.stats.rf_sum = (function taoensso$encore$stats$rf_sum(acc,in$){
return (acc + in$);
});
taoensso.encore.stats.rf_sum_variance = (function taoensso$encore$stats$rf_sum_variance(xbar,acc,x){
return (acc + Math.pow((x - xbar),2.0));
});
taoensso.encore.stats.rf_sum_abs_deviation = (function taoensso$encore$stats$rf_sum_abs_deviation(central_point,acc,x){
return (acc + Math.abs((x - central_point)));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.stats.SummaryStats = (function (xfloats_QMARK_,nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum){
this.xfloats_QMARK_ = xfloats_QMARK_;
this.nx = nx;
this.xsum = xsum;
this.xmin = xmin;
this.xmax = xmax;
this.xlast = xlast;
this.p25 = p25;
this.p50 = p50;
this.p75 = p75;
this.p90 = p90;
this.p95 = p95;
this.p99 = p99;
this.xvar_sum = xvar_sum;
this.xmad_sum = xmad_sum;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.stats.SummaryStats.prototype.toString = (function (){
var self__ = this;
var x = this;
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3(x,"taoensso.encore.stats.SummaryStats",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),self__.nx], null));
}));

(taoensso.encore.stats.SummaryStats.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (taoensso.encore.stats.deref_sstats.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.stats.deref_sstats.cljs$core$IFn$_invoke$arity$1(this$__$1) : taoensso.encore.stats.deref_sstats.call(null, this$__$1));
}));

(taoensso.encore.stats.SummaryStats.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"xfloats?","xfloats?",-1045666612,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nx","nx",-355904839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xsum","xsum",-1727262973,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xmin","xmin",-666991895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xmax","xmax",-955946008,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xlast","xlast",2044041055,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p25","p25",-746504108,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p50","p50",140405155,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p75","p75",1087889997,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p90","p90",1954450489,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p95","p95",561546053,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"p99","p99",-1061840369,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xvar-sum","xvar-sum",1779238530,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"xmad-sum","xmad-sum",-1123105350,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(taoensso.encore.stats.SummaryStats.cljs$lang$type = true);

(taoensso.encore.stats.SummaryStats.cljs$lang$ctorStr = "taoensso.encore.stats/SummaryStats");

(taoensso.encore.stats.SummaryStats.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore.stats/SummaryStats");
}));

/**
 * Positional factory function for taoensso.encore.stats/SummaryStats.
 */
taoensso.encore.stats.__GT_SummaryStats = (function taoensso$encore$stats$__GT_SummaryStats(xfloats_QMARK_,nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum){
return (new taoensso.encore.stats.SummaryStats(xfloats_QMARK_,nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum));
});

taoensso.encore.stats.deref_sstats = (function taoensso$encore$stats$deref_sstats(ss){
var fin = (cljs.core.truth_(ss.xfloats_QMARK_)?cljs.core.double$:(function (p1__60107_SHARP_){
return Math.round(p1__60107_SHARP_);
}));
var nx = ss.nx;
if((nx > (0))){
} else {
throw (new Error("Assert failed: (pos? nx)"));
}

return cljs.core.with_meta(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"mean","mean",-1359234715),new cljs.core.Keyword(null,"p75","p75",-552641530),new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937),new cljs.core.Keyword(null,"p99","p99",1592595400),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p25","p25",1907931661),new cljs.core.Keyword(null,"p90","p90",313918962),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"mad","mad",-1963165801),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"p50","p50",-1500126372),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"p95","p95",-1078985474),new cljs.core.Keyword(null,"var-sum","var-sum",-1026113793)],[(function (){var G__60120 = ss.xmin;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60120) : fin.call(null, G__60120));
})(),(ss.xsum / nx),(function (){var G__60126 = ss.p75;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60126) : fin.call(null, G__60126));
})(),ss.xmad_sum,(function (){var G__60127 = ss.p99;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60127) : fin.call(null, G__60127));
})(),nx,(function (){var G__60128 = ss.p25;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60128) : fin.call(null, G__60128));
})(),(function (){var G__60129 = ss.p90;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60129) : fin.call(null, G__60129));
})(),(ss.xvar_sum / nx),(function (){var G__60130 = ss.xmax;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60130) : fin.call(null, G__60130));
})(),(ss.xmad_sum / nx),(function (){var G__60131 = ss.xlast;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60131) : fin.call(null, G__60131));
})(),(function (){var G__60134 = ss.p50;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60134) : fin.call(null, G__60134));
})(),(function (){var G__60135 = ss.xsum;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60135) : fin.call(null, G__60135));
})(),(function (){var G__60136 = ss.p95;
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__60136) : fin.call(null, G__60136));
})(),ss.xvar_sum]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"floats?","floats?",1396567155),ss.xfloats_QMARK_], null));
});
/**
 * Returns true iff given a `SummaryStats` argument.
 */
taoensso.encore.stats.summary_stats_QMARK_ = (function taoensso$encore$stats$summary_stats_QMARK_(x){
return (x instanceof taoensso.encore.stats.SummaryStats);
});
/**
 * Given a coll of numbers or previously dereffed `SummaryStats` map,
 *   returns a new mergeable ?`SummaryStats` with:
 *  (deref ss) => {:keys [n sum min max p25 ... p99 mean var mad]}
 * 
 *   See also `summary-stats-merge`.
 */
taoensso.encore.stats.summary_stats = (function taoensso$encore$stats$summary_stats(var_args){
var G__60155 = arguments.length;
switch (G__60155) {
case 1:
return taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$2 = (function (opts,x){
if(cljs.core.truth_(x)){
if(taoensso.encore.stats.summary_stats_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
var map__60162 = x;
var map__60162__$1 = cljs.core.__destructure_map(map__60162);
var last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"last","last",1105735132));
var p50 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"p50","p50",-1500126372));
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
var p95 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"p95","p95",-1078985474));
var var_sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"var-sum","var-sum",-1026113793));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"min","min",444991522));
var p75 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"p75","p75",-552641530));
var mad_sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"mad-sum","mad-sum",-768606937));
var p99 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"p99","p99",1592595400));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p25 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"p25","p25",1907931661));
var p90 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"p90","p90",313918962));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60162__$1,new cljs.core.Keyword(null,"max","max",61366548));
var floats_QMARK_ = (function (){var b2__38440__auto__ = cljs.core.find(opts,new cljs.core.Keyword(null,"floats?","floats?",1396567155));
if(cljs.core.truth_(b2__38440__auto__)){
var e = b2__38440__auto__;
return cljs.core.val(e);
} else {
var b2__38440__auto____$1 = cljs.core.find(cljs.core.meta(x),new cljs.core.Keyword(null,"floats?","floats?",1396567155));
if(cljs.core.truth_(b2__38440__auto____$1)){
var e = b2__38440__auto____$1;
return cljs.core.val(e);
} else {
return taoensso.encore.float_QMARK_(sum);
}
}
})();
return (new taoensso.encore.stats.SummaryStats(floats_QMARK_,n,sum,min,max,last,p25,p50,p75,p90,p95,p99,var_sum,mad_sum));
} else {
var snums = (function (){var temp__5821__auto__ = cljs.core.find(opts,new cljs.core.Keyword(null,"floats?","floats?",1396567155));
if(cljs.core.truth_(temp__5821__auto__)){
var e = temp__5821__auto__;
if(cljs.core.truth_(cljs.core.val(e))){
return taoensso.encore.stats.sorted_doubles.cljs$core$IFn$_invoke$arity$2(true,x);
} else {
return taoensso.encore.stats.sorted_longs.cljs$core$IFn$_invoke$arity$2(true,x);
}
} else {
return taoensso.encore.stats.sorted_nums.cljs$core$IFn$_invoke$arity$2(true,x);
}
})();
var nx = cljs.core.count(snums);
if((nx > (0))){
var vec__60180 = taoensso.encore.stats.percentiles(snums);
var xmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(0),null);
var p25 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(1),null);
var p50 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(2),null);
var p75 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(3),null);
var p90 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(4),null);
var p95 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(5),null);
var p99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(6),null);
var xmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(7),null);
var xsum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.stats.rf_sum,0.0,snums);
var xbar = (xsum / nx);
var xlast = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(snums,(nx - (1)));
var vec__60183 = taoensso.encore.reduce_multi.cljs$core$IFn$_invoke$arity$5(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.stats.rf_sum_variance,xbar),0.0,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.stats.rf_sum_abs_deviation,xbar),0.0,snums);
var xvar_sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60183,(0),null);
var xmad_sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60183,(1),null);
return (new taoensso.encore.stats.SummaryStats(taoensso.encore.stats.sorted_doubles_QMARK_(snums),nx,xsum,xmin,xmax,xlast,p25,p50,p75,p90,p95,p99,xvar_sum,xmad_sum));
} else {
return null;
}
}
}
} else {
return null;
}
}));

(taoensso.encore.stats.summary_stats.cljs$lang$maxFixedArity = 2);

/**
 * Given one or more ?`SummaryStats`, returns a new ?`SummaryStats` with:
 *  (summary-stats-merge
 *     (summary-stats nums1)
 *     (summary-stats nums2))
 * 
 *  an approximatation of (summary-stats (merge nums1 nums2))
 * 
 *   Useful when you want summary stats for a large coll of numbers for which
 *   it would be infeasible/expensive to keep all numbers for accurate merging.
 */
taoensso.encore.stats.summary_stats_merge = (function taoensso$encore$stats$summary_stats_merge(var_args){
var G__60211 = arguments.length;
switch (G__60211) {
case 1:
return taoensso.encore.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$1 = (function (ss1){
return ss1;
}));

(taoensso.encore.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$2 = (function (ss1,ss2){
if(cljs.core.truth_(ss1)){
if(cljs.core.truth_(ss2)){
var ss1__$1 = ss1;
var ss2__$1 = ss2;
var nx1 = ss1__$1.nx;
var nx2 = ss2__$1.nx;
var _ = (((nx1 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? nx1)"))})());
var ___$1 = (((nx2 > (0)))?null:(function(){throw (new Error("Assert failed: (pos? nx2)"))})());
var xfloats1_QMARK_ = ss1__$1.xfloats_QMARK_;
var xsum1 = ss1__$1.xsum;
var xmin1 = ss1__$1.xmin;
var xmax1 = ss1__$1.xmax;
var p25_1 = ss1__$1.p25;
var p50_1 = ss1__$1.p50;
var p75_1 = ss1__$1.p75;
var p90_1 = ss1__$1.p90;
var p95_1 = ss1__$1.p95;
var p99_1 = ss1__$1.p99;
var xvar_sum1 = ss1__$1.xvar_sum;
var xmad_sum1 = ss1__$1.xmad_sum;
var xfloats2_QMARK_ = ss2__$1.xfloats_QMARK_;
var xsum2 = ss2__$1.xsum;
var xmin2 = ss2__$1.xmin;
var xmax2 = ss2__$1.xmax;
var xlast2 = ss2__$1.xlast;
var p25_2 = ss2__$1.p25;
var p50_2 = ss2__$1.p50;
var p75_2 = ss2__$1.p75;
var p90_2 = ss2__$1.p90;
var p95_2 = ss2__$1.p95;
var p99_2 = ss2__$1.p99;
var xvar_sum2 = ss2__$1.xvar_sum;
var xmad_sum2 = ss2__$1.xmad_sum;
var xfloats3_QMARK_ = (function (){var or__5002__auto__ = xfloats1_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return xfloats2_QMARK_;
}
})();
var nx3 = (nx1 + nx2);
var nx1_ratio = (nx1 / nx3);
var nx2_ratio = (nx2 / nx3);
var xsum3 = (xsum1 + xsum2);
var xmin3 = (((xmin1 < xmin2))?xmin1:xmin2);
var xmax3 = (((xmax1 > xmax2))?xmax1:xmax2);
var xvar_sum3 = (xvar_sum1 + xvar_sum2);
var xmad_sum3 = (xmad_sum1 + xmad_sum2);
var p25_3 = ((nx1_ratio * p25_1) + (nx2_ratio * p25_2));
var p50_3 = ((nx1_ratio * p50_1) + (nx2_ratio * p50_2));
var p75_3 = ((nx1_ratio * p75_1) + (nx2_ratio * p75_2));
var p90_3 = ((nx1_ratio * p90_1) + (nx2_ratio * p90_2));
var p95_3 = ((nx1_ratio * p95_1) + (nx2_ratio * p95_2));
var p99_3 = ((nx1_ratio * p99_1) + (nx2_ratio * p99_2));
return (new taoensso.encore.stats.SummaryStats(xfloats3_QMARK_,nx3,xsum3,xmin3,xmax3,xlast2,p25_3,p50_3,p75_3,p90_3,p95_3,p99_3,xvar_sum3,xmad_sum3));
} else {
return ss1;
}
} else {
return ss2;
}
}));

(taoensso.encore.stats.summary_stats_merge.cljs$lang$maxFixedArity = 2);

taoensso.encore.stats.buf_new = (function taoensso$encore$stats$buf_new(var_args){
var G__60275 = arguments.length;
switch (G__60275) {
case 0:
return taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
}));

(taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$1 = (function (init){
if(cljs.core.truth_(init)){
return [init];
} else {
return [];
}
}));

(taoensso.encore.stats.buf_new.cljs$lang$maxFixedArity = 1);

taoensso.encore.stats.buf_add = (function taoensso$encore$stats$buf_add(buf,x){
return buf.push(x);
});
taoensso.encore.stats.buf_len = (function taoensso$encore$stats$buf_len(buf){
return buf.length;
});

/**
 * @interface
 */
taoensso.encore.stats.ISummaryStatsBuffered = function(){};

var taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$dyn_60860 = (function() {
var G__60861 = null;
var G__60861__1 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.stats.ssb_deref[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.stats.ssb_deref["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-deref",_);
}
}
});
var G__60861__2 = (function (_,flush_QMARK_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.stats.ssb_deref[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,flush_QMARK_) : m__5351__auto__.call(null, _,flush_QMARK_));
} else {
var m__5349__auto__ = (taoensso.encore.stats.ssb_deref["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,flush_QMARK_) : m__5349__auto__.call(null, _,flush_QMARK_));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-deref",_);
}
}
});
G__60861 = function(_,flush_QMARK_){
switch(arguments.length){
case 1:
return G__60861__1.call(this,_);
case 2:
return G__60861__2.call(this,_,flush_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60861.cljs$core$IFn$_invoke$arity$1 = G__60861__1;
G__60861.cljs$core$IFn$_invoke$arity$2 = G__60861__2;
return G__60861;
})()
;
/**
 * Returns current ?sstats.
 */
taoensso.encore.stats.ssb_deref = (function taoensso$encore$stats$ssb_deref(var_args){
var G__60342 = arguments.length;
switch (G__60342) {
case 1:
return taoensso.encore.stats.ssb_deref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.stats.ssb_deref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.ssb_deref.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$1 == null)))))){
return _.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$1(_);
} else {
return taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$dyn_60860(_);
}
}));

(taoensso.encore.stats.ssb_deref.cljs$core$IFn$_invoke$arity$2 = (function (_,flush_QMARK_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$2 == null)))))){
return _.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$2(_,flush_QMARK_);
} else {
return taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$dyn_60860(_,flush_QMARK_);
}
}));

(taoensso.encore.stats.ssb_deref.cljs$lang$maxFixedArity = 2);


var taoensso$encore$stats$ISummaryStatsBuffered$ssb_clear$dyn_60877 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.stats.ssb_clear[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.stats.ssb_clear["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-clear",_);
}
}
});
/**
 * Clears all internal state and returns nil.
 */
taoensso.encore.stats.ssb_clear = (function taoensso$encore$stats$ssb_clear(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$stats$ISummaryStatsBuffered$ssb_clear$arity$1 == null)))))){
return _.taoensso$encore$stats$ISummaryStatsBuffered$ssb_clear$arity$1(_);
} else {
return taoensso$encore$stats$ISummaryStatsBuffered$ssb_clear$dyn_60877(_);
}
});

var taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$dyn_60881 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.stats.ssb_flush[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (taoensso.encore.stats.ssb_flush["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-flush",_);
}
}
});
/**
 * Flushes internal buffer and returns newly merged sstats or nil.
 */
taoensso.encore.stats.ssb_flush = (function taoensso$encore$stats$ssb_flush(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$arity$1 == null)))))){
return _.taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$arity$1(_);
} else {
return taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$dyn_60881(_);
}
});

var taoensso$encore$stats$ISummaryStatsBuffered$ssb_push$dyn_60883 = (function (_,n){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (taoensso.encore.stats.ssb_push[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5351__auto__.call(null, _,n));
} else {
var m__5349__auto__ = (taoensso.encore.stats.ssb_push["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__5349__auto__.call(null, _,n));
} else {
throw cljs.core.missing_protocol("ISummaryStatsBuffered.ssb-push",_);
}
}
});
/**
 * Adds given num to internal buffer.
 */
taoensso.encore.stats.ssb_push = (function taoensso$encore$stats$ssb_push(_,n){
if((((!((_ == null)))) && ((!((_.taoensso$encore$stats$ISummaryStatsBuffered$ssb_push$arity$2 == null)))))){
return _.taoensso$encore$stats$ISummaryStatsBuffered$ssb_push$arity$2(_,n);
} else {
return taoensso$encore$stats$ISummaryStatsBuffered$ssb_push$dyn_60883(_,n);
}
});

/**
 * Clears internal state (incl. stats and buffers, etc.) for given
 *   stateful `SummaryStats` instance and returns nil.
 */
taoensso.encore.stats.summary_stats_clear_BANG_ = (function taoensso$encore$stats$summary_stats_clear_BANG_(stateful_summary_stats){
return taoensso.encore.stats.ssb_clear(stateful_summary_stats);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {taoensso.encore.stats.ISummaryStatsBuffered}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.stats.SummaryStatsBuffered = (function (sstats_,buf_,buf_size,merge_counter,merge_cb){
this.sstats_ = sstats_;
this.buf_ = buf_;
this.buf_size = buf_size;
this.merge_counter = merge_counter;
this.merge_cb = merge_cb;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.encore.stats.SummaryStatsBuffered.prototype.toString = (function (){
var self__ = this;
var x = this;
return taoensso.encore.str_impl.cljs$core$IFn$_invoke$arity$3(x,"taoensso.encore.stats.SummaryStatsBuffered",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n","n",562130025),cljs.core.get.cljs$core$IFn$_invoke$arity$3((self__.sstats_.cljs$core$IFn$_invoke$arity$0 ? self__.sstats_.cljs$core$IFn$_invoke$arity$0() : self__.sstats_.call(null, )),new cljs.core.Keyword(null,"n","n",562130025),(0)),new cljs.core.Keyword(null,"pending","pending",-220036727),taoensso.encore.stats.buf_len((self__.buf_.cljs$core$IFn$_invoke$arity$0 ? self__.buf_.cljs$core$IFn$_invoke$arity$0() : self__.buf_.call(null, ))),new cljs.core.Keyword(null,"merged","merged",1648712643),(function (){var temp__5821__auto__ = self__.merge_counter;
if(cljs.core.truth_(temp__5821__auto__)){
var mc = temp__5821__auto__;
return cljs.core.deref(mc);
} else {
return (0);
}
})()], null));
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$1(null, );
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.call = (function (unused__11220__auto__){
var self__ = this;
var self__ = this;
var G__60458 = (arguments.length - (1));
switch (G__60458) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.apply = (function (self__,args60439){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args60439)));
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var this$ = this;
return this$.taoensso$encore$stats$ISummaryStatsBuffered$ssb_push$arity$2(null, n);
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.taoensso$encore$stats$ISummaryStatsBuffered$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.stats.SummaryStatsBuffered.prototype.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$2(null, true);
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.taoensso$encore$stats$ISummaryStatsBuffered$ssb_deref$arity$2 = (function (this$,flush_QMARK_){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (function (){var and__5000__auto__ = flush_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return this$__$1.taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (self__.sstats_.cljs$core$IFn$_invoke$arity$0 ? self__.sstats_.cljs$core$IFn$_invoke$arity$0() : self__.sstats_.call(null, ));
}
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.taoensso$encore$stats$ISummaryStatsBuffered$ssb_clear$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.buf_,taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$0());

cljs.core.reset_BANG_(self__.sstats_,null);

var temp__5823__auto___60900 = self__.merge_counter;
if(cljs.core.truth_(temp__5823__auto___60900)){
var mc_60901 = temp__5823__auto___60900;
(mc_60901.cljs$core$IFn$_invoke$arity$2 ? mc_60901.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set","set",304602554),(0)) : mc_60901.call(null, new cljs.core.Keyword(null,"set","set",304602554),(0)));
} else {
}

return null;
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__60501 = cljs.core.reset_vals_BANG_(self__.buf_,taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$1(null));
var drained = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60501,(0),null);
if((taoensso.encore.stats.buf_len(drained) === (0))){
return null;
} else {
var t0 = (cljs.core.truth_(self__.merge_cb)?taoensso.encore.now_nano():null);
var _ = (function (){var temp__5823__auto__ = self__.merge_counter;
if(cljs.core.truth_(temp__5823__auto__)){
var mc = temp__5823__auto__;
return (mc.cljs$core$IFn$_invoke$arity$0 ? mc.cljs$core$IFn$_invoke$arity$0() : mc.call(null, ));
} else {
return null;
}
})();
var sstats_drained = taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(drained);
var sstats_merged = (function (){var G__60509 = (function (old){
return taoensso.encore.stats.summary_stats_merge.cljs$core$IFn$_invoke$arity$2(old,sstats_drained);
});
return (self__.sstats_.cljs$core$IFn$_invoke$arity$1 ? self__.sstats_.cljs$core$IFn$_invoke$arity$1(G__60509) : self__.sstats_.call(null, G__60509));
})();
if(cljs.core.truth_(self__.merge_cb)){
var G__60513_60905 = this$__$1;
var G__60514_60906 = (taoensso.encore.now_nano() - t0);
(self__.merge_cb.cljs$core$IFn$_invoke$arity$2 ? self__.merge_cb.cljs$core$IFn$_invoke$arity$2(G__60513_60905,G__60514_60906) : self__.merge_cb.call(null, G__60513_60905,G__60514_60906));
} else {
}

return sstats_merged;
}
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.taoensso$encore$stats$ISummaryStatsBuffered$ssb_push$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
taoensso.encore.stats.buf_add((self__.buf_.cljs$core$IFn$_invoke$arity$0 ? self__.buf_.cljs$core$IFn$_invoke$arity$0() : self__.buf_.call(null, )),n);

var temp__5823__auto___60909 = self__.buf_size;
if(cljs.core.truth_(temp__5823__auto___60909)){
var nmax_60910 = temp__5823__auto___60909;
if((taoensso.encore.stats.buf_len((self__.buf_.cljs$core$IFn$_invoke$arity$0 ? self__.buf_.cljs$core$IFn$_invoke$arity$0() : self__.buf_.call(null, ))) > nmax_60910)){
this$__$1.taoensso$encore$stats$ISummaryStatsBuffered$ssb_flush$arity$1(null, );
} else {
}
} else {
}

return null;
}));

(taoensso.encore.stats.SummaryStatsBuffered.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sstats_","sstats_",-1678756230,null),new cljs.core.Symbol(null,"buf_","buf_",-495739085,null),new cljs.core.Symbol(null,"buf-size","buf-size",828478350,null),new cljs.core.Symbol(null,"merge-counter","merge-counter",-694937119,null),new cljs.core.Symbol(null,"merge-cb","merge-cb",692712502,null)], null);
}));

(taoensso.encore.stats.SummaryStatsBuffered.cljs$lang$type = true);

(taoensso.encore.stats.SummaryStatsBuffered.cljs$lang$ctorStr = "taoensso.encore.stats/SummaryStatsBuffered");

(taoensso.encore.stats.SummaryStatsBuffered.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.encore.stats/SummaryStatsBuffered");
}));

/**
 * Positional factory function for taoensso.encore.stats/SummaryStatsBuffered.
 */
taoensso.encore.stats.__GT_SummaryStatsBuffered = (function taoensso$encore$stats$__GT_SummaryStatsBuffered(sstats_,buf_,buf_size,merge_counter,merge_cb){
return (new taoensso.encore.stats.SummaryStatsBuffered(sstats_,buf_,buf_size,merge_counter,merge_cb));
});

/**
 * Returns a new stateful `SummaryStatsBuffered` with:
 *  (ssb <num>) => Adds given number to internal buffer.
 *  (deref ssb) => Flushes buffer if necessary, and returns a mergeable
 *                 `?SummaryStats`. Deref again to get a map of summary
 *                 stats for all numbers ever added to ssb:
 *                   {:keys [n sum min max p25 ... p99 mean var mad]}.
 * 
 *   Useful for summarizing a (possibly infinite) stream of numbers.
 * 
 *   Options:
 *  `:buffer-init` - Initial buffer content, useful for persistent ssb.
 *  `:sstats-init` - Initial summary stats,  useful for persistent ssb.
 *  `:buffer-size`
 *     The maximum number of numbers that may be buffered before next
 *     (ssb <num>) call will block to flush buffer and merge with any
 *     existing summary stats.
 * 
 *     Larger buffers mean better performance and more accurate stats,
 *     at the cost of more memory use while buffering.
 */
taoensso.encore.stats.summary_stats_buffered = (function taoensso$encore$stats$summary_stats_buffered(var_args){
var G__60567 = arguments.length;
switch (G__60567) {
case 0:
return taoensso.encore.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.encore.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.encore.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.encore.stats.summary_stats_buffered.cljs$core$IFn$_invoke$arity$1 = (function (p__60595){
var map__60599 = p__60595;
var map__60599__$1 = cljs.core.__destructure_map(map__60599);
var opts = map__60599__$1;
var buffer_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60599__$1,new cljs.core.Keyword(null,"buffer-size","buffer-size",1047120420),100000.0);
var buffer_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"buffer-init","buffer-init",-1144679333));
var sstats_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"sstats-init","sstats-init",689628975));
var merge_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60599__$1,new cljs.core.Keyword(null,"merge-cb","merge-cb",-947819025));
return (new taoensso.encore.stats.SummaryStatsBuffered(taoensso.encore.latom(taoensso.encore.stats.summary_stats.cljs$core$IFn$_invoke$arity$1(sstats_init)),taoensso.encore.latom(taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$1(buffer_init)),cljs.core.long$(buffer_size),taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0(),merge_cb));
}));

(taoensso.encore.stats.summary_stats_buffered.cljs$lang$maxFixedArity = 1);

/**
 * Returns fastest possible `SummaryStatsBuffered`.
 */
taoensso.encore.stats.summary_stats_buffered_fast = (function taoensso$encore$stats$summary_stats_buffered_fast(buffer_size,merge_cb){
return (new taoensso.encore.stats.SummaryStatsBuffered(taoensso.encore.latom(null),taoensso.encore.latom(taoensso.encore.stats.buf_new.cljs$core$IFn$_invoke$arity$0()),buffer_size,null,merge_cb));
});
/**
 * Returns true iff given a `SummaryStatsBuffered` instance.
 */
taoensso.encore.stats.summary_stats_buffered_QMARK_ = (function taoensso$encore$stats$summary_stats_buffered_QMARK_(x){
return (x instanceof taoensso.encore.stats.SummaryStatsBuffered);
});
/**
 * Returns true iff given a stateful `SummaryStats` instance.
 */
taoensso.encore.stats.summary_stats_stateful_QMARK_ = (function taoensso$encore$stats$summary_stats_stateful_QMARK_(x){
return taoensso.encore.stats.summary_stats_buffered_QMARK_(x);
});
(taoensso.encore.stats.SortedLongs.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.stats.SortedLongs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,__w,_){
var x__$1 = this;
return cljs.core._write(__w,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join(''));
}));

(taoensso.encore.stats.SortedDoubles.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.stats.SortedDoubles.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,__w,_){
var x__$1 = this;
return cljs.core._write(__w,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join(''));
}));

(taoensso.encore.stats.SummaryStats.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.stats.SummaryStats.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,__w,_){
var x__$1 = this;
return cljs.core._write(__w,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join(''));
}));

(taoensso.encore.stats.SummaryStatsBuffered.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.encore.stats.SummaryStatsBuffered.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,__w,_){
var x__$1 = this;
return cljs.core._write(__w,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1)].join(''));
}));

//# sourceMappingURL=taoensso.encore.stats.js.map
