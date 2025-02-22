goog.provide('day8.re_frame_10x.navigation.epochs.events');
day8.re_frame_10x.navigation.epochs.events.first_match_id = (function day8$re_frame_10x$navigation$epochs$events$first_match_id(m){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(m)));
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view-debounced","day8.re-frame-10x.navigation.epochs.events/scroll-into-view-debounced",-416908306),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__65927){
var vec__65928 = p__65927;
var js_dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65928,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.debounce","dispatch","day8.re-frame-10x.fx.debounce/dispatch",-293096343),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view","day8.re-frame-10x.navigation.epochs.events/scroll-into-view",-1183173127),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view","day8.re-frame-10x.navigation.epochs.events/scroll-into-view",-1183173127),js_dom], null),new cljs.core.Keyword(null,"delay","delay",-574225219),(128)], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","scroll-into-view","day8.re-frame-10x.navigation.epochs.events/scroll-into-view",-1183173127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__65937){
var vec__65938 = p__65937;
var js_dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65938,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.scroll","into-view","day8.re-frame-10x.fx.scroll/into-view",1866001434),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-dom","js-dom",-1971531703),js_dom], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","receive-new-traces","day8.re-frame-10x.navigation.epochs.events/receive-new-traces",542616228),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (p__65961,p__65962){
var map__65970 = p__65961;
var map__65970__$1 = cljs.core.__destructure_map(map__65970);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65970__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__65971 = p__65962;
var new_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65971,(0),null);
var temp__5821__auto__ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new_traces);
if(cljs.core.truth_(temp__5821__auto__)){
var sorted_traces = temp__5821__auto__;
var number_of_epochs_to_retain = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252)], null));
var events_to_ignore = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-id","event-id",2130210178),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589)], null)))));
var previous_traces = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null),cljs.core.PersistentVector.EMPTY);
var parse_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535)], null),day8.re_frame_10x.tools.metamorphic.initial_parse_state);
var map__65983 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092)], null));
var map__65983__$1 = cljs.core.__destructure_map(map__65983);
var drop_re_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033));
var drop_reagent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"reagent","reagent",2131627322));
var all_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$2(previous_traces,sorted_traces);
var parse_state__$1 = day8.re_frame_10x.tools.metamorphic.parse_traces(parse_state,sorted_traces);
var new_matches = new cljs.core.Keyword(null,"partitions","partitions",602979514).cljs$core$IFn$_invoke$arity$1(parse_state__$1);
var previous_matches = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"matches","matches",635497998)], null),cljs.core.PersistentVector.EMPTY);
var parse_state__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_state__$1,new cljs.core.Keyword(null,"partitions","partitions",602979514),cljs.core.PersistentVector.EMPTY);
var new_matches__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (match){
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.matched_event(match),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
return cljs.core.contains_QMARK_(events_to_ignore,cljs.core.first(event));
}),new_matches);
var subscription_info = day8.re_frame_10x.tools.metamorphic.subscription_info(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092)], null),cljs.core.PersistentArrayMap.EMPTY),sorted_traces,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)));
var sub_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981)], null),day8.re_frame_10x.tools.metamorphic.initial_sub_state);
var subscription_match_state = day8.re_frame_10x.tools.metamorphic.subscription_match_state(sub_state,all_traces,new_matches__$1);
var subscription_matches = cljs.core.rest(subscription_match_state);
var new_sub_state = cljs.core.last(subscription_match_state);
var timing = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (match){
var epoch_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.tools.coll.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match)))),all_traces);
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(epoch_traces,(0));
var event_handler_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.event_handler_QMARK_,epoch_traces));
var dofx_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.event_dofx_QMARK_,epoch_traces));
var event_trace = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.event_run_QMARK_,epoch_traces));
var finish_run = (function (){var or__5002__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.finish_run_QMARK_,epoch_traces));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return day8.re_frame_10x.tools.coll.last_in_vec(epoch_traces);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897),day8.re_frame_10x.tools.metamorphic.elapsed_time(start_of_epoch,finish_run),new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_trace),new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(event_handler_trace),new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(dofx_trace)], null);
}),new_matches__$1);
var new_matches__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (match,sub_match,t){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"match-info","match-info",666319879),match,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),sub_match,new cljs.core.Keyword(null,"timing","timing",-1849225195),t], null);
}),new_matches__$1,subscription_matches,timing);
var end_of_match_QMARK_ = (function (){var or__5002__auto__ = cljs.core.seq(new_matches__$2);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.tools.metamorphic.end_of_match_QMARK_,sorted_traces);
}
})();
var all_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(previous_matches,new_matches__$2);
var retained_matches = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last(number_of_epochs_to_retain,all_matches));
var first_id_to_retain = day8.re_frame_10x.navigation.epochs.events.first_match_id(cljs.core.first(retained_matches));
var retained_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1((function (p1__65949_SHARP_){
return (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__65949_SHARP_) < first_id_to_retain);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
var or__5002__auto__ = (cljs.core.truth_(drop_reagent)?day8.re_frame_10x.tools.metamorphic.low_level_reagent_trace_QMARK_(trace):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_(drop_re_frame)){
return day8.re_frame_10x.tools.metamorphic.low_level_re_frame_trace_QMARK_(trace);
} else {
return null;
}
}
}))),all_traces);
var match_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.navigation.epochs.events.first_match_id,retained_matches);
var select_latest_QMARK_ = (function (){var and__5000__auto__ = cljs.core.seq(new_matches__$2);
if(and__5000__auto__){
var or__5002__auto__ = cljs.core.empty_QMARK_(previous_matches);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var G__65992 = new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db));
var fexpr__65991 = cljs.core.PersistentHashSet.createAsIfByAssoc([day8.re_frame_10x.navigation.epochs.events.first_match_id(cljs.core.last(previous_matches))]);
return (fexpr__65991.cljs$core$IFn$_invoke$arity$1 ? fexpr__65991.cljs$core$IFn$_invoke$arity$1(G__65992) : fexpr__65991.call(null, G__65992));
}
} else {
return and__5000__auto__;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var G__65997 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null),retained_traces),new cljs.core.Keyword(null,"epochs","epochs",1796936425),cljs.core.assoc,new cljs.core.Keyword(null,"matches","matches",635497998),retained_matches,new cljs.core.Keyword(null,"match-ids","match-ids",752973161),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([match_ids,new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),cljs.core.zipmap(match_ids,retained_matches),new cljs.core.Keyword(null,"parse-state","parse-state",-1931312535),parse_state__$2,new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981),new_sub_state,new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092),subscription_info], 0));
if(cljs.core.truth_(select_latest_QMARK_)){
return cljs.core.assoc_in(G__65997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778)], null),cljs.core.last(match_ids));
} else {
return G__65997;
}
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(end_of_match_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","quiescent","day8.re-frame-10x.navigation.epochs.events/quiescent",-1389328171)], null):null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","previous","day8.re-frame-10x.navigation.epochs.events/previous",2061328788),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)], 0))], null),(function (p__65998,_){
var map__65999 = p__65998;
var map__65999__$1 = cljs.core.__destructure_map(map__65999);
var map__66000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__66000__$1 = cljs.core.__destructure_map(map__66000);
var db = map__66000__$1;
var match_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66000__$1,new cljs.core.Keyword(null,"match-ids","match-ids",752973161));
var selected_epoch_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66000__$1,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778));
var new_id = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([selected_epoch_id])),match_ids));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","next","day8.re-frame-10x.navigation.epochs.events/next",1388476595),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)], 0))], null),(function (p__66004,_){
var map__66005 = p__66004;
var map__66005__$1 = cljs.core.__destructure_map(map__66005);
var map__66006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__66006__$1 = cljs.core.__destructure_map(map__66006);
var db = map__66006__$1;
var match_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66006__$1,new cljs.core.Keyword(null,"match-ids","match-ids",752973161));
var selected_epoch_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66006__$1,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778));
var new_id = ((cljs.core.not(selected_epoch_id))?day8.re_frame_10x.tools.coll.last_in_vec(match_ids):cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([selected_epoch_id])),match_ids))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","most-recent","day8.re-frame-10x.navigation.epochs.events/most-recent",-1146993774),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)], 0))], null),(function (p__66013,_){
var map__66014 = p__66013;
var map__66014__$1 = cljs.core.__destructure_map(map__66014);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66014__$1,new cljs.core.Keyword(null,"db","db",993250759));
var new_id = day8.re_frame_10x.tools.coll.last_in_vec(new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","load","day8.re-frame-10x.navigation.epochs.events/load",1738587584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (p__66023,p__66024){
var map__66025 = p__66023;
var map__66025__$1 = cljs.core.__destructure_map(map__66025);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__66026 = p__66024;
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66026,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778),new_id),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new_id], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","replay","day8.re-frame-10x.navigation.epochs.events/replay",-1356562037),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)], 0))], null),(function (epochs,_){
var selected_epoch_id = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"selected-epoch-id","selected-epoch-id",70601778));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return day8.re_frame_10x.tools.coll.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var event_trace = day8.re_frame_10x.tools.metamorphic.matched_event(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),selected_epoch_id,new cljs.core.Keyword(null,"match-info","match-info",666319879)], null)));
var app_db_before = day8.re_frame_10x.tools.metamorphic.app_db_before(event_trace);
var event = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(event_trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
cljs.core.reset_BANG_(re_frame.db.app_db,app_db_before);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(epochs,new cljs.core.Keyword(null,"replay","replay",-681122389),event);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","quiescent","day8.re-frame-10x.navigation.epochs.events/quiescent",-1389328171),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425)], null)], 0))], null),(function (db,_){
var temp__5825__auto__ = new cljs.core.Keyword(null,"replay","replay",-681122389).cljs$core$IFn$_invoke$arity$1(db);
if((temp__5825__auto__ == null)){
return db;
} else {
var event_to_replay = temp__5825__auto__;
re_frame.core.dispatch(event_to_replay);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"replay","replay",-681122389));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset","day8.re-frame-10x.navigation.epochs.events/reset",-2105765050),(function (db){
re_frame.trace.reset_tracing_BANG_();

return day8.re_frame_10x.tools.coll.dissoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"epochs","epochs",1796936425)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all","all",892129742)], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","reset-current-epoch-app-db","day8.re-frame-10x.navigation.epochs.events/reset-current-epoch-app-db",1850636212),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (db,p__66039){
var vec__66042 = p__66039;
var new_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66042,(0),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462)], null)))){
var epochs_66089 = new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
var match_id_66090 = (function (){var or__5002__auto__ = new_id;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return day8.re_frame_10x.tools.coll.last_in_vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs_66089,new cljs.core.Keyword(null,"match-ids","match-ids",752973161)));
}
})();
var match_66091 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(epochs_66089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562),match_id_66090], null));
var event_66092 = day8.re_frame_10x.tools.metamorphic.matched_event(new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_66091));
var temp__5827__auto___66094 = day8.re_frame_10x.tools.metamorphic.app_db_after(event_66092);
if((temp__5827__auto___66094 == null)){
} else {
var new_db_66095 = temp__5827__auto___66094;
cljs.core.reset_BANG_(re_frame.db.app_db,new_db_66095);
}
} else {
}

return db;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","set-filter","day8.re-frame-10x.navigation.epochs.events/set-filter",1725152200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"epochs","epochs",1796936425),new cljs.core.Keyword(null,"filter-str","filter-str",1974484789)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__66058){
var vec__66059 = p__66058;
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66059,(0),null);
return filter_str;
}));

//# sourceMappingURL=day8.re_frame_10x.navigation.epochs.events.js.map
