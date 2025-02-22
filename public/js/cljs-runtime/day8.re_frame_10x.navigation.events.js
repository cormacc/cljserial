goog.provide('day8.re_frame_10x.navigation.events');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.events","launch-external","day8.re-frame-10x.navigation.events/launch-external",857703616),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (p__66359,p__66360){
var map__66365 = p__66359;
var map__66365__$1 = cljs.core.__destructure_map(map__66365);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66365__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__66369 = p__66360;
var view_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66369,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.window","open-debugger-window","day8.re-frame-10x.fx.window/open-debugger-window",-30863444),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window-dimensions","external-window-dimensions",-1264257454)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-load","on-load",1415151594),(function (p1__66355_SHARP_,p2__66356_SHARP_){
return (view_fn.cljs$core$IFn$_invoke$arity$2 ? view_fn.cljs$core$IFn$_invoke$arity$2(p1__66355_SHARP_,p2__66356_SHARP_) : view_fn.call(null, p1__66355_SHARP_,p2__66356_SHARP_));
}),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.events","launch-external-success","day8.re-frame-10x.navigation.events/launch-external-success",-1773329438)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.events","launch-external-failure","day8.re-frame-10x.navigation.events/launch-external-failure",-446396350)], null)], null)], 0))], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.events","launch-external-success","day8.re-frame-10x.navigation.events/launch-external-success",-1773329438),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$variadic("external-window?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null)], 0))], null),(function (p__66372,_){
var map__66373 = p__66372;
var map__66373__$1 = cljs.core.__destructure_map(map__66373);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66373__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame_10x.tools.coll.dissoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-panel?","day8.re-frame-10x.panels.settings.events/show-panel?",1007877818),false], null)], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("day8.re-frame-10x.navigation.events","launch-external-failure","day8.re-frame-10x.navigation.events/launch-external-failure",-446396350),(function (p__66375,_){
var map__66377 = p__66375;
var map__66377__$1 = cljs.core.__destructure_map(map__66377);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66377__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682)], null),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.events","external-closed","day8.re-frame-10x.navigation.events/external-closed",1799392076)], null)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.events","external-closed","day8.re-frame-10x.navigation.events/external-closed",1799392076),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null)], 0)),day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("external-window?")], null),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),false,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","show-panel?","day8.re-frame-10x.panels.settings.events/show-panel?",1007877818),true], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.fx.window","close-debugger-window","day8.re-frame-10x.fx.window/close-debugger-window",-815811173)], null)], null)], null);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.navigation.events","dismiss-popup-failed","day8.re-frame-10x.navigation.events/dismiss-popup-failed",-241045790),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null)], 0))], null),(function (errors,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682));
}));

//# sourceMappingURL=day8.re_frame_10x.navigation.events.js.map
