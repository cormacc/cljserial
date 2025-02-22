goog.provide('day8.re_frame_10x.panels.traces.events');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-draft-query-type","day8.re-frame-10x.panels.traces.events/set-draft-query-type",-996302456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__77627){
var vec__77628 = p__77627;
var draft_query_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77628,(0),null);
return draft_query_type;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-draft-query","day8.re-frame-10x.panels.traces.events/set-draft-query",1714953965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"draft-query","draft-query",2104267934)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (_,p__77631,___$1){
var vec__77633 = p__77631;
var draft_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77633,(0),null);
return draft_query;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","save-draft-query","day8.re-frame-10x.panels.traces.events/save-draft-query",1729629791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004)], null)], 0))], null),(function (p__77636,_){
var map__77637 = p__77636;
var map__77637__$1 = cljs.core.__destructure_map(map__77637);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__77638 = db;
var map__77638__$1 = cljs.core.__destructure_map(map__77638);
var draft_query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77638__$1,new cljs.core.Keyword(null,"draft-query-type","draft-query-type",704274790),new cljs.core.Keyword(null,"contains","contains",676899812));
var draft_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77638__$1,new cljs.core.Keyword(null,"draft-query","draft-query",2104267934));
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(draft_query_type,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__5000__auto__){
return isNaN(parseFloat(draft_query));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078),true)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"draft-query-error","draft-query-error",2065783078),false),new cljs.core.Keyword(null,"draft-query","draft-query",2104267934),""),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","add-query","day8.re-frame-10x.panels.traces.events/add-query",2139116227),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),draft_query_type,new cljs.core.Keyword(null,"query","query",-1288509510),draft_query], null)], null)], null);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-queries","day8.re-frame-10x.panels.traces.events/set-queries",1424273266),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (_,p__77639){
var vec__77640 = p__77639;
var filters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77640,(0),null);
return filters;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","add-query","day8.re-frame-10x.panels.traces.events/add-query",2139116227),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (filters,p__77645){
var map__77646 = p__77645;
var map__77646__$1 = cljs.core.__destructure_map(map__77646);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77646__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77646__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(cljs.core.some((function (p1__77643_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__77643_SHARP_));
}),filters))){
return filters;
} else {
var filters__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),type))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__77644_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__77644_SHARP_));
}),filters):filters);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filters__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"query","query",-1288509510),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"contains","contains",676899812))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"contains-not","contains-not",-698322082)))))?clojure.string.lower_case(query):parseFloat(query)),new cljs.core.Keyword(null,"type","type",1174270348),type], null));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","remove-query","day8.re-frame-10x.panels.traces.events/remove-query",1784719956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.unwrap,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (filters,p__77652){
var map__77654 = p__77652;
var map__77654__$1 = cljs.core.__destructure_map(map__77654);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__77651_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77651_SHARP_),id);
}),filters);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","reset-queries","day8.re-frame-10x.panels.traces.events/reset-queries",823354457),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], 0)),day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("filter-items")], null),(function (_,___$1){
return cljs.core.PersistentVector.EMPTY;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-categories","day8.re-frame-10x.panels.traces.events/toggle-categories",-389788445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("categories")], null),(function (old,p__77655){
var vec__77656 = p__77655;
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77656,(0),null);
if(clojure.set.superset_QMARK_(old,new$)){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$);
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(old,new$);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-categories","day8.re-frame-10x.panels.traces.events/set-categories",-494993249),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("categories")], null),(function (_,p__77663){
var vec__77664 = p__77663;
var categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77664,(0),null);
return categories;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","set-filter-by-selected-epoch?","day8.re-frame-10x.panels.traces.events/set-filter-by-selected-epoch?",34289483),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-by-selected-epoch?","filter-by-selected-epoch?",1580686425)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("show-epoch-traces?")], null),(function (_,p__77667){
var vec__77668 = p__77667;
var filter_by_selected_epoch_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77668,(0),null);
return filter_by_selected_epoch_QMARK_;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-expansions","day8.re-frame-10x.panels.traces.events/toggle-expansions",505682376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null)], 0))], null),(function (expansions,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.traces.events","toggle-expansion","day8.re-frame-10x.panels.traces.events/toggle-expansion",-1981422943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.trim_v], null),(function (expansions,p__77678){
var vec__77679 = p__77678;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77679,(0),null);
var showing_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(expansions));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(expansions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),(function (p1__77671_SHARP_){
if(cljs.core.truth_(showing_QMARK_)){
return false;
} else {
return cljs.core.not(p1__77671_SHARP_);
}
}));
}));

//# sourceMappingURL=day8.re_frame_10x.panels.traces.events.js.map
