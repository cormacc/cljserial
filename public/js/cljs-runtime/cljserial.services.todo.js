goog.provide('cljserial.services.todo');
cljserial.services.todo.store_id = "todos-refx";
cljserial.services.todo.TaskId = new cljs.core.Keyword(null,"int","int",-1741416922);
cljserial.services.todo.Task = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljserial.services.todo.TaskId], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
cljserial.services.todo.TaskMap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljserial.services.todo.TaskId,cljserial.services.todo.Task], null);
cljserial.services.todo.TaskFilter = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"done","done",-889844188)], null);
cljserial.services.todo.TaskStore = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-id","store-id",-869340477),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljserial.services.todo.TaskMap], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),cljserial.services.todo.TaskFilter], null)], null);
/**
 * Generate a new empty TaskStore with the provided `store-id`
 */
cljserial.services.todo.new_task_store = (function cljserial$services$todo$new_task_store(store_id){
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.string_QMARK_){
} else {
throw (new Error("Assert failed: string?"));
}

if(cljs.core.truth_(store_id)){
} else {
throw (new Error("Assert failed: store-id"));
}

var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store-id","store-id",-869340477),store_id,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.sorted_map(),new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),new cljs.core.Keyword(null,"all","all",892129742)], null);
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(cljserial.services.todo.TaskStore)){
} else {
throw (new Error("Assert failed: TaskStore"));
}

if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
cljserial.services.todo.schema_check_interceptor = cljserial.utils.dbfx.schema_check_interceptor(cljserial.services.todo.TaskMap);
cljserial.services.todo.todo_browser_cache_interceptor = cljserial.utils.dbfx.browser_cache_interceptor(cljserial.services.todo.store_id);
cljserial.services.todo.todo_task_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-data","todo-data",715447299),new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null);
return (cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__56000) : cljserial.utils.dbfx.path.call(null, G__56000));
})(),cljserial.services.todo.schema_check_interceptor,cljserial.services.todo.todo_browser_cache_interceptor], null);
/**
 * Returns the next todo id.
 *   Assumes todos are sorted.
 *   Returns one more than the current largest id.
 */
cljserial.services.todo.allocate_next_id = (function cljserial$services$todo$allocate_next_id(todos){
return cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))(cljs.core.last(cljs.core.keys(todos)));
});
var G__56005_56059 = new cljs.core.Keyword(null,"apply-todo-filter","apply-todo-filter",805818581);
var G__56006_56060 = (function (db,p__56009){
var vec__56010 = p__56009;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56010,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-data","todo-data",715447299),new cljs.core.Keyword(null,"task-filter","task-filter",1152805919)], null),new_filter_kw);
});
(cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__56005_56059,G__56006_56060) : cljserial.utils.dbfx.reg_event_db.call(null, G__56005_56059,G__56006_56060));
var G__56014_56061 = new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401);
var G__56015_56062 = cljserial.services.todo.todo_task_interceptors;
var G__56016_56063 = (function (todos,p__56018){
var vec__56019 = p__56018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56019,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56019,(1),null);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.todo",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("todo","add","todo/add",222072209),text,new cljs.core.Keyword(null,"line","line",212345235),192], null)),null);
} else {
}

var id = cljserial.services.todo.allocate_next_id(todos);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todos,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"description","description",-1428560544),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
(cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__56014_56061,G__56015_56062,G__56016_56063) : cljserial.utils.dbfx.reg_event_db.call(null, G__56014_56061,G__56015_56062,G__56016_56063));
var G__56023_56065 = new cljs.core.Keyword(null,"toggle-todo","toggle-todo",1473079782);
var G__56024_56066 = cljserial.services.todo.todo_task_interceptors;
var G__56025_56067 = (function (todos,p__56026){
var vec__56027 = p__56026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56027,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56027,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
(cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__56023_56065,G__56024_56066,G__56025_56067) : cljserial.utils.dbfx.reg_event_db.call(null, G__56023_56065,G__56024_56066,G__56025_56067));
var G__56030_56068 = new cljs.core.Keyword(null,"save-todo","save-todo",-1159250078);
var G__56031_56069 = cljserial.services.todo.todo_task_interceptors;
var G__56032_56070 = (function (todos,p__56033){
var vec__56035 = p__56033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56035,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56035,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56035,(2),null);
return cljs.core.assoc_in(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"description","description",-1428560544)], null),title);
});
(cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__56030_56068,G__56031_56069,G__56032_56070) : cljserial.utils.dbfx.reg_event_db.call(null, G__56030_56068,G__56031_56069,G__56032_56070));
var G__56039_56071 = new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723);
var G__56040_56072 = cljserial.services.todo.todo_task_interceptors;
var G__56041_56073 = (function (todos,p__56042){
var vec__56043 = p__56042;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56043,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56043,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(todos,id);
});
(cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__56039_56071,G__56040_56072,G__56041_56073) : cljserial.utils.dbfx.reg_event_db.call(null, G__56039_56071,G__56040_56072,G__56041_56073));
var G__56046_56074 = new cljs.core.Keyword(null,"todo-data","todo-data",715447299);
var G__56047_56075 = (function (db,_){
return new cljs.core.Keyword(null,"todo-data","todo-data",715447299).cljs$core$IFn$_invoke$arity$1(db);
});
(cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56046_56074,G__56047_56075) : cljserial.utils.dbfx.reg_sub.call(null, G__56046_56074,G__56047_56075));
var G__56048_56076 = new cljs.core.Keyword(null,"task-filter","task-filter",1152805919);
var G__56049_56077 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__56050_56078 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-data","todo-data",715447299)], null);
var G__56051_56079 = (function (todo_data,_){
return new cljs.core.Keyword(null,"task-filter","task-filter",1152805919).cljs$core$IFn$_invoke$arity$1(todo_data);
});
(cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__56048_56076,G__56049_56077,G__56050_56078,G__56051_56079) : cljserial.utils.dbfx.reg_sub.call(null, G__56048_56076,G__56049_56077,G__56050_56078,G__56051_56079));

//# sourceMappingURL=cljserial.services.todo.js.map
