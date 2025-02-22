goog.provide('stack.services.todo');
stack.services.todo.store_id = "todos-dbfx";
stack.services.todo.local_storage_write_cofx_id = stack.utils.dbfx.reg_local_store_read_cofx(stack.services.todo.store_id);
stack.services.todo.todo_task_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain-data","domain-data",-278275019),new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null);
return (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__55088) : stack.utils.dbfx.path.call(null, G__55088));
})()], null);
var G__55089_55188 = new cljs.core.Keyword(null,"apply-task-filter","apply-task-filter",937697869);
var G__55090_55189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack.utils.dbfx.path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-filter","task-filter",1152805919)], null)], null);
var G__55091_55190 = (function (_db,p__55092){
var vec__55093 = p__55092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55093,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55093,(1),null);
return new_filter_kw;
});
(stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__55089_55188,G__55090_55189,G__55091_55190) : stack.utils.dbfx.reg_event_db.call(null, G__55089_55188,G__55090_55189,G__55091_55190));
var G__55096_55191 = new cljs.core.Keyword(null,"add-task","add-task",-913525549);
var G__55097_55192 = (function (_cofx,p__55098){
var vec__55099 = p__55098;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55099,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55099,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("task","description","task/description",-1431594219),text,new cljs.core.Keyword("task","done","task/done",-886317915),false], null)], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__55096_55191,G__55097_55192) : stack.utils.dbfx.reg_event_fx.call(null, G__55096_55191,G__55097_55192));
var G__55105_55193 = new cljs.core.Keyword(null,"toggle-task","toggle-task",576669128);
var G__55106_55194 = stack.services.todo.todo_task_interceptors;
var G__55107_55195 = (function (p__55111,p__55112){
var map__55113 = p__55111;
var map__55113__$1 = cljs.core.__destructure_map(map__55113);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55113__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__55118 = p__55112;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55118,(0),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55118,(1),null);
var task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,task_id);
var done_QMARK_ = new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(task);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),task_id,new cljs.core.Keyword("task","done","task/done",-886317915),cljs.core.not(done_QMARK_)], null)], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__55105_55193,G__55106_55194,G__55107_55195) : stack.utils.dbfx.reg_event_fx.call(null, G__55105_55193,G__55106_55194,G__55107_55195));
var G__55128_55196 = new cljs.core.Keyword(null,"save-task","save-task",1224731637);
var G__55129_55197 = stack.services.todo.todo_task_interceptors;
var G__55130_55198 = (function (_cofx,p__55134){
var vec__55135 = p__55134;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55135,(0),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55135,(1),null);
var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55135,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),task_id,new cljs.core.Keyword("task","description","task/description",-1431594219),description], null)], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__55128_55196,G__55129_55197,G__55130_55198) : stack.utils.dbfx.reg_event_fx.call(null, G__55128_55196,G__55129_55197,G__55130_55198));
var G__55139_55203 = new cljs.core.Keyword(null,"delete-task","delete-task",-1353277694);
var G__55140_55204 = stack.services.todo.todo_task_interceptors;
var G__55141_55205 = (function (_cofx,p__55143){
var vec__55144 = p__55143;
var _eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55144,(0),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55144,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),task_id], null)], null)], null)], null)], null);
});
(stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__55139_55203,G__55140_55204,G__55141_55205) : stack.utils.dbfx.reg_event_fx.call(null, G__55139_55203,G__55140_55204,G__55141_55205));

//# sourceMappingURL=stack.services.todo.js.map
