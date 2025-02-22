goog.provide('stack.pages.todos');
stack.pages.todos.render_task_view = (function stack$pages$todos$render_task_view(p__64175){
var map__64177 = p__64175;
var map__64177__$1 = cljs.core.__destructure_map(map__64177);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64177__$1,new cljs.core.Keyword(null,"title","title",636505583));
var immutable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64177__$1,new cljs.core.Keyword(null,"immutable","immutable",-474144970));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64177__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64177__$1,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919));
var new_task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64177__$1,new cljs.core.Keyword(null,"new-task","new-task",-939876740));
var tasks = stack.examples.models.domain.extract_tasks(data);
var task_counts = stack.examples.models.domain.get_task_counts(tasks);
var visible_tasks = stack.examples.models.domain.filter_by(task_filter,tasks);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.tasks","task-view","stack.components.tasks/task-view",-1480729154),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("stack.components.tasks","title","stack.components.tasks/title",-1000731773),title,new cljs.core.Keyword("stack.components.tasks","immutable","stack.components.tasks/immutable",-1015944814),immutable,new cljs.core.Keyword("stack.components.tasks","task-filter","stack.components.tasks/task-filter",-1513342605),task_filter,new cljs.core.Keyword("stack.components.tasks","new-task","stack.components.tasks/new-task",663542120),new_task,new cljs.core.Keyword("stack.components.tasks","tasks","stack.components.tasks/tasks",952545572),visible_tasks,new cljs.core.Keyword("stack.components.tasks","task-counts","stack.components.tasks/task-counts",-738059324),task_counts], null)], null);
});
stack.pages.todos.render = (function stack$pages$todos$render(p__64217){
var map__64219 = p__64217;
var map__64219__$1 = cljs.core.__destructure_map(map__64219);
var _state = map__64219__$1;
var domain_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64219__$1,new cljs.core.Keyword(null,"domain-db","domain-db",143141236));
var user_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64219__$1,new cljs.core.Keyword(null,"user-input","user-input",-504242422));
var map__64222 = domain_db;
var map__64222__$1 = cljs.core.__destructure_map(map__64222);
var tx_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64222__$1,new cljs.core.Keyword(null,"tx-times","tx-times",-690029852));
var valid_times = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64222__$1,new cljs.core.Keyword(null,"valid-times","valid-times",-1544145409));
var map__64223 = user_input;
var map__64223__$1 = cljs.core.__destructure_map(map__64223);
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64223__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071));
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64223__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538));
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64223__$1,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919));
var new_task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64223__$1,new cljs.core.Keyword(null,"new-task","new-task",-939876740));
var data_now = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(domain_db);
var data_then = stack.utils.datascript.as_of.cljs$core$IFn$_invoke$arity$variadic(domain_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),tx_time,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),valid_time], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","card","stack.components.layout/card",548279820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","header","stack.components.layout/header",-2119626286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-base.font-semibold","h2.text-base.font-semibold",49152579),"Time-travelling TodoMVC"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","content","stack.components.layout/content",1986211172),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","range-slider.range-sm.range-info","stack.components.forms/range-slider.range-sm.range-info",-212755237),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("stack.components.forms","input-id","stack.components.forms/input-id",-1448408772),new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),new cljs.core.Keyword("stack.components.forms","values","stack.components.forms/values",861990071),tx_times,new cljs.core.Keyword(null,"value","value",305978217),tx_time], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","range-slider.range-sm.range-accent","stack.components.forms/range-slider.range-sm.range-accent",395970964),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("stack.components.forms","input-id","stack.components.forms/input-id",-1448408772),new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),new cljs.core.Keyword("stack.components.forms","values","stack.components.forms/values",861990071),valid_times,new cljs.core.Keyword(null,"value","value",305978217),valid_time], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-2","div.grid.grid-cols-2",-1453018001),stack.pages.todos.render_task_view(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Now",new cljs.core.Keyword(null,"immutable","immutable",-474144970),false,new cljs.core.Keyword(null,"data","data",-232669377),data_now,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),task_filter,new cljs.core.Keyword(null,"new-task","new-task",-939876740),new_task], null)),stack.pages.todos.render_task_view(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Then",new cljs.core.Keyword(null,"immutable","immutable",-474144970),true,new cljs.core.Keyword(null,"data","data",-232669377),data_then,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),task_filter,new cljs.core.Keyword(null,"new-task","new-task",-939876740),new_task], null))], null)], null)], null);
});

//# sourceMappingURL=stack.pages.todos.js.map
