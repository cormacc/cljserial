goog.provide('statecharts.delayed');

/**
 * @interface
 */
statecharts.delayed.IScheduler = function(){};

var statecharts$delayed$IScheduler$schedule$dyn_92741 = (function (this$,fsm,state,event,delay){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.delayed.schedule[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$5(this$,fsm,state,event,delay) : m__5351__auto__.call(null, this$,fsm,state,event,delay));
} else {
var m__5349__auto__ = (statecharts.delayed.schedule["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$5(this$,fsm,state,event,delay) : m__5349__auto__.call(null, this$,fsm,state,event,delay));
} else {
throw cljs.core.missing_protocol("IScheduler.schedule",this$);
}
}
});
statecharts.delayed.schedule = (function statecharts$delayed$schedule(this$,fsm,state,event,delay){
if((((!((this$ == null)))) && ((!((this$.statecharts$delayed$IScheduler$schedule$arity$5 == null)))))){
return this$.statecharts$delayed$IScheduler$schedule$arity$5(this$,fsm,state,event,delay);
} else {
return statecharts$delayed$IScheduler$schedule$dyn_92741(this$,fsm,state,event,delay);
}
});

var statecharts$delayed$IScheduler$unschedule$dyn_92743 = (function (this$,fsm,state,event){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.delayed.unschedule[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,fsm,state,event) : m__5351__auto__.call(null, this$,fsm,state,event));
} else {
var m__5349__auto__ = (statecharts.delayed.unschedule["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,fsm,state,event) : m__5349__auto__.call(null, this$,fsm,state,event));
} else {
throw cljs.core.missing_protocol("IScheduler.unschedule",this$);
}
}
});
statecharts.delayed.unschedule = (function statecharts$delayed$unschedule(this$,fsm,state,event){
if((((!((this$ == null)))) && ((!((this$.statecharts$delayed$IScheduler$unschedule$arity$4 == null)))))){
return this$.statecharts$delayed$IScheduler$unschedule$arity$4(this$,fsm,state,event);
} else {
return statecharts$delayed$IScheduler$unschedule$dyn_92743(this$,fsm,state,event);
}
});

statecharts.delayed.scheduler_QMARK_ = (function statecharts$delayed$scheduler_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.statecharts$delayed$IScheduler$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(statecharts.delayed.IScheduler,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(statecharts.delayed.IScheduler,x);
}
});
statecharts.delayed.path_placeholder = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<path>","<path>",329527414)], null);
statecharts.delayed.delay_fn_id = (function statecharts$delayed$delay_fn_id(d){
if(cljs.core.int_QMARK_(d)){
return d;
} else {
return (d["name"]);
}
});
statecharts.delayed.generate_delayed_events = (function statecharts$delayed$generate_delayed_events(delay,txs){
var event = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsm","delay","fsm/delay",-574187523),statecharts.delayed.path_placeholder,statecharts.delayed.delay_fn_id(delay)], null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("fsm","schedule-event","fsm/schedule-event",1735252958),new cljs.core.Keyword(null,"event-delay","event-delay",-262476060),delay,new cljs.core.Keyword(null,"event","event",301435442),event], null),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("fsm","unschedule-event","fsm/unschedule-event",-1330804273),new cljs.core.Keyword(null,"event","event",301435442),event], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__92705_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__92705_SHARP_,new cljs.core.Keyword(null,"delay","delay",-574225219));
}),txs)], null)], null);
});
statecharts.delayed.derived_delay_info = (function statecharts$delayed$derived_delay_info(delayed_transitions){
var seq__92707_92752 = cljs.core.seq(delayed_transitions);
var chunk__92708_92753 = null;
var count__92709_92754 = (0);
var i__92710_92755 = (0);
while(true){
if((i__92710_92755 < count__92709_92754)){
var dt_92756 = chunk__92708_92753.cljs$core$IIndexed$_nth$arity$2(null, i__92710_92755);
if(cljs.core.contains_QMARK_(dt_92756,new cljs.core.Keyword(null,"delay","delay",-574225219))){
} else {
throw (new Error(["Assert failed: ",["no :delay key found in",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_92756)].join(''),"\n","(contains? dt :delay)"].join('')));
}


var G__92757 = seq__92707_92752;
var G__92758 = chunk__92708_92753;
var G__92759 = count__92709_92754;
var G__92760 = (i__92710_92755 + (1));
seq__92707_92752 = G__92757;
chunk__92708_92753 = G__92758;
count__92709_92754 = G__92759;
i__92710_92755 = G__92760;
continue;
} else {
var temp__5823__auto___92761 = cljs.core.seq(seq__92707_92752);
if(temp__5823__auto___92761){
var seq__92707_92762__$1 = temp__5823__auto___92761;
if(cljs.core.chunked_seq_QMARK_(seq__92707_92762__$1)){
var c__5525__auto___92763 = cljs.core.chunk_first(seq__92707_92762__$1);
var G__92764 = cljs.core.chunk_rest(seq__92707_92762__$1);
var G__92765 = c__5525__auto___92763;
var G__92766 = cljs.core.count(c__5525__auto___92763);
var G__92767 = (0);
seq__92707_92752 = G__92764;
chunk__92708_92753 = G__92765;
count__92709_92754 = G__92766;
i__92710_92755 = G__92767;
continue;
} else {
var dt_92768 = cljs.core.first(seq__92707_92762__$1);
if(cljs.core.contains_QMARK_(dt_92768,new cljs.core.Keyword(null,"delay","delay",-574225219))){
} else {
throw (new Error(["Assert failed: ",["no :delay key found in",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_92768)].join(''),"\n","(contains? dt :delay)"].join('')));
}


var G__92769 = cljs.core.next(seq__92707_92762__$1);
var G__92770 = null;
var G__92771 = (0);
var G__92772 = (0);
seq__92707_92752 = G__92769;
chunk__92708_92753 = G__92770;
count__92709_92754 = G__92771;
i__92710_92755 = G__92772;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accu,curr){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([accu,curr], 0));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"exit","exit",351849638),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__92719){
var vec__92720 = p__92719;
var delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92720,(0),null);
var txs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92720,(1),null);
return statecharts.delayed.generate_delayed_events(delay,txs);
}),cljs.core.group_by(new cljs.core.Keyword(null,"delay","delay",-574225219),delayed_transitions)));
});
/**
 * Translate delayed transitions into internal entry/exit actions and
 *   transitions.
 */
statecharts.delayed.insert_delayed_transitions = (function statecharts$delayed$insert_delayed_transitions(node){
var after = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.not(after)){
return node;
} else {
var map__92726 = statecharts.delayed.derived_delay_info(after);
var map__92726__$1 = cljs.core.__destructure_map(map__92726);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92726__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92726__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92726__$1,new cljs.core.Keyword(null,"on","on",173873944));
var on__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,on);
var vconcat = (function (xs,ys){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,ys));
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword(null,"entry","entry",505168823),vconcat,entry),new cljs.core.Keyword(null,"exit","exit",351849638),vconcat,exit),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge,on__$1);
}
});
statecharts.delayed.replace_path = (function statecharts$delayed$replace_path(path,form){
if((form == null)){
return form;
} else {
return clojure.walk.postwalk((function (x){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,statecharts.delayed.path_placeholder)){
return path;
} else {
return x;
}
}),form);
}
});
statecharts.delayed.replace_delayed_place_holder = (function statecharts$delayed$replace_delayed_place_holder(var_args){
var G__92734 = arguments.length;
switch (G__92734) {
case 1:
return statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$1 = (function (fsm){
return statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2(fsm,cljs.core.PersistentVector.EMPTY);
}));

(statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2 = (function (node,path){
var replace_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(statecharts.delayed.replace_path,path);
var G__92739 = node;
var G__92739__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__92739,new cljs.core.Keyword(null,"on","on",173873944),replace_path):G__92739);
var G__92739__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__92739__$1,new cljs.core.Keyword(null,"entry","entry",505168823),replace_path):G__92739__$1);
var G__92739__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"exit","exit",351849638).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__92739__$2,new cljs.core.Keyword(null,"exit","exit",351849638),replace_path):G__92739__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__92739__$3,new cljs.core.Keyword(null,"states","states",1389013542),(function (states){
return statecharts.utils.map_kv((function (id,node__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2(node__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,id))], null);
}),states);
}));
} else {
return G__92739__$3;
}
}));

(statecharts.delayed.replace_delayed_place_holder.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=statecharts.delayed.js.map
