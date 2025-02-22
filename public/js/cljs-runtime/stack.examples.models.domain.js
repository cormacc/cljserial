goog.provide('stack.examples.models.domain');
stack.examples.models.domain.storage_id = "cljstack";
stack.examples.models.domain.TaskId = new cljs.core.Keyword(null,"int","int",-1741416922);
stack.examples.models.domain.Task = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),stack.examples.models.domain.TaskId], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
stack.examples.models.domain.TaskFilter = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"done","done",-889844188)], null);
stack.examples.models.domain.task_filters = cljs.core.rest(stack.examples.models.domain.TaskFilter);
stack.examples.models.domain.TaskView = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),stack.examples.models.domain.Task], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),stack.examples.models.domain.TaskFilter], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null);
stack.examples.models.domain.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
stack.examples.models.domain.get_task_counts = (function stack$examples$models$domain$get_task_counts(tasks){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count(tasks),new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),tasks))], null);
});
stack.examples.models.domain.filter_by = (function stack$examples$models$domain$filter_by(task_filter,tasks){
var filter_fn = (function (){var G__98202 = task_filter;
var G__98202__$1 = (((G__98202 instanceof cljs.core.Keyword))?G__98202.fqn:null);
switch (G__98202__$1) {
case "pending":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__98202__$1)].join('')));

}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,tasks);
});
stack.examples.models.domain.extract_tasks = (function stack$examples$models$domain$extract_tasks(db){
var G__98205 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?desc","?desc",-185037134,null),new cljs.core.Symbol(null,"?done","?done",-2025334257,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("task","description","task/description",-1431594219),new cljs.core.Symbol(null,"?desc","?desc",-185037134,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("task","done","task/done",-886317915),new cljs.core.Symbol(null,"?done","?done",-2025334257,null)], null)], null);
var G__98206 = db;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__98205,G__98206) : datascript.core.q.call(null, G__98205,G__98206));
});
stack.examples.models.domain.add_task = (function stack$examples$models$domain$add_task(description){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("task","description","task/description",-1431594219),description,new cljs.core.Keyword("task","done","task/done",-886317915),false], null)], null);
});
stack.examples.models.domain.set_task_completed = (function stack$examples$models$domain$set_task_completed(task_id,done){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),task_id,new cljs.core.Keyword("task","done","task/done",-886317915),done], null)], null);
});
stack.examples.models.domain.set_task_description = (function stack$examples$models$domain$set_task_description(task_id,description){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),task_id,new cljs.core.Keyword("task","description","task/description",-1431594219),description], null)], null);
});
stack.examples.models.domain.delete_task = (function stack$examples$models$domain$delete_task(task_id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),task_id], null)], null);
});

//# sourceMappingURL=stack.examples.models.domain.js.map
