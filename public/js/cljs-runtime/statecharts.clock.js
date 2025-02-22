goog.provide('statecharts.clock');

/**
 * @interface
 */
statecharts.clock.Clock = function(){};

var statecharts$clock$Clock$getTimeMillis$dyn_92276 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.clock.getTimeMillis[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (statecharts.clock.getTimeMillis["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Clock.getTimeMillis",this$);
}
}
});
/**
 * Return the current time in milliseconds
 */
statecharts.clock.getTimeMillis = (function statecharts$clock$getTimeMillis(this$){
if((((!((this$ == null)))) && ((!((this$.statecharts$clock$Clock$getTimeMillis$arity$1 == null)))))){
return this$.statecharts$clock$Clock$getTimeMillis$arity$1(this$);
} else {
return statecharts$clock$Clock$getTimeMillis$dyn_92276(this$);
}
});

var statecharts$clock$Clock$setTimeout$dyn_92277 = (function (this$,f,delay){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.clock.setTimeout[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,f,delay) : m__5351__auto__.call(null, this$,f,delay));
} else {
var m__5349__auto__ = (statecharts.clock.setTimeout["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,f,delay) : m__5349__auto__.call(null, this$,f,delay));
} else {
throw cljs.core.missing_protocol("Clock.setTimeout",this$);
}
}
});
statecharts.clock.setTimeout = (function statecharts$clock$setTimeout(this$,f,delay){
if((((!((this$ == null)))) && ((!((this$.statecharts$clock$Clock$setTimeout$arity$3 == null)))))){
return this$.statecharts$clock$Clock$setTimeout$arity$3(this$,f,delay);
} else {
return statecharts$clock$Clock$setTimeout$dyn_92277(this$,f,delay);
}
});

var statecharts$clock$Clock$clearTimeout$dyn_92278 = (function (this$,id){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.clock.clearTimeout[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5351__auto__.call(null, this$,id));
} else {
var m__5349__auto__ = (statecharts.clock.clearTimeout["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5349__auto__.call(null, this$,id));
} else {
throw cljs.core.missing_protocol("Clock.clearTimeout",this$);
}
}
});
statecharts.clock.clearTimeout = (function statecharts$clock$clearTimeout(this$,id){
if((((!((this$ == null)))) && ((!((this$.statecharts$clock$Clock$clearTimeout$arity$2 == null)))))){
return this$.statecharts$clock$Clock$clearTimeout$arity$2(this$,id);
} else {
return statecharts$clock$Clock$clearTimeout$dyn_92278(this$,id);
}
});


/**
* @constructor
 * @implements {statecharts.clock.Clock}
*/
statecharts.clock.WallClock = (function (){
});
(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$getTimeMillis$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return Date.now();
}));

(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$setTimeout$arity$3 = (function (this$,f,delay){
var self__ = this;
var this$__$1 = this;
return setTimeout(f,delay);
}));

(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$clearTimeout$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return clearTimeout(id);
}));

(statecharts.clock.WallClock.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(statecharts.clock.WallClock.cljs$lang$type = true);

(statecharts.clock.WallClock.cljs$lang$ctorStr = "statecharts.clock/WallClock");

(statecharts.clock.WallClock.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"statecharts.clock/WallClock");
}));

/**
 * Positional factory function for statecharts.clock/WallClock.
 */
statecharts.clock.__GT_WallClock = (function statecharts$clock$__GT_WallClock(){
return (new statecharts.clock.WallClock());
});

statecharts.clock.wall_clock = (function statecharts$clock$wall_clock(){
return (new statecharts.clock.WallClock());
});
/**
 * The scheduler clock for the current fsm
 */
statecharts.clock._STAR_clock_STAR_ = null;
/**
 * 
 */
statecharts.clock.now = (function statecharts$clock$now(){
if(cljs.core.truth_(statecharts.clock._STAR_clock_STAR_)){
} else {
throw (new Error("Assert failed: *clock*"));
}

return statecharts.clock.getTimeMillis(statecharts.clock._STAR_clock_STAR_);
});

//# sourceMappingURL=statecharts.clock.js.map
