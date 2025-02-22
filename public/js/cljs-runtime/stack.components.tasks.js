goog.provide('stack.components.tasks');
var f__35372__auto___64151 = cljs.core.with_meta((function() { 
var G__64157__delegate = function (args__35358__auto__){
var vec__63944 = args__35358__auto__;
var map__63947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63944,(0),null);
var map__63947__$1 = cljs.core.__destructure_map(map__63947);
var attrs = map__63947__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63947__$1,new cljs.core.Keyword("stack.components.tasks","id","stack.components.tasks/id",1256256760));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63947__$1,new cljs.core.Keyword("stack.components.tasks","description","stack.components.tasks/description",1263241916));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63947__$1,new cljs.core.Keyword("stack.components.tasks","done","stack.components.tasks/done",-347353984));
var read_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63947__$1,new cljs.core.Keyword("stack.components.tasks","read-only","stack.components.tasks/read-only",1428455254));
var _children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63944,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset.p-4.bg-base-100.border.border-base-300.rounded-box.w-auto","fieldset.fieldset.p-4.bg-base-100.border.border-base-300.rounded-box.w-auto",-1822569607),attrs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.fieldset-label.flex","label.fieldset-label.flex",-660865122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.checkbox","input.checkbox",383977155),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),read_only,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domain","transact","domain/transact",1058301174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),id,new cljs.core.Keyword("task","done","task/done",-886317915),cljs.core.not(done)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grow","div.grow",-1895960225),description], null),(cljs.core.truth_(read_only)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.border-0.text-red-600.cursor-pointer","button.border-0.text-red-600.cursor-pointer",-1530595066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domain","transact","domain/transact",1058301174),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),id], null)], null)], null)], null)], null),"x"], null))], null)], null);
var G__63964 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63964,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.tasks","task","stack.components.tasks/task",1206126299),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63964;
}
};
var G__64157 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64174__i = 0, G__64174__a = new Array(arguments.length -  0);
while (G__64174__i < G__64174__a.length) {G__64174__a[G__64174__i] = arguments[G__64174__i + 0]; ++G__64174__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64174__a,0,null);
} 
return G__64157__delegate.call(this,args__35358__auto__);};
G__64157.cljs$lang$maxFixedArity = 0;
G__64157.cljs$lang$applyTo = (function (arglist__64176){
var args__35358__auto__ = cljs.core.seq(arglist__64176);
return G__64157__delegate(args__35358__auto__);
});
G__64157.cljs$core$IFn$_invoke$arity$variadic = G__64157__delegate;
return G__64157;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.tasks","task","stack.components.tasks/task",1206126299)], null));
var alias__35373__auto___64152 = new cljs.core.Keyword("stack.components.tasks","task","stack.components.tasks/task",1206126299);
replicant.alias.register_BANG_(alias__35373__auto___64152,f__35372__auto___64151);

stack.components.tasks.task = alias__35373__auto___64152;
var f__35372__auto___64180 = cljs.core.with_meta((function() { 
var G__64183__delegate = function (args__35358__auto__){
var vec__63984 = args__35358__auto__;
var map__63987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63984,(0),null);
var map__63987__$1 = cljs.core.__destructure_map(map__63987);
var attrs = map__63987__$1;
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63987__$1,new cljs.core.Keyword("stack.components.tasks","task-filter","stack.components.tasks/task-filter",-1513342605));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63984,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grow","div.grow",-1895960225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-base.font-semibold","h2.text-base.font-semibold",49152579),children], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-none","div.flex-none",1767075149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","select","stack.components.forms/select",-1560518060),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),task_filter,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),new cljs.core.Keyword("event","target.value-as-keyword","event/target.value-as-keyword",-2012194010)], null)], null)], null),new cljs.core.Keyword("stack.components.forms","options","stack.components.forms/options",1696105180),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),kw,new cljs.core.Keyword(null,"value","value",305978217),kw,new cljs.core.Keyword(null,"content","content",15833224),clojure.string.capitalize(cljs.core.name(kw))], null);
}),stack.examples.models.domain.task_filters)], null)], null)], null)], null);
var G__64022 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64022,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.tasks","header","stack.components.tasks/header",-1481544686),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64022;
}
};
var G__64183 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64192__i = 0, G__64192__a = new Array(arguments.length -  0);
while (G__64192__i < G__64192__a.length) {G__64192__a[G__64192__i] = arguments[G__64192__i + 0]; ++G__64192__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64192__a,0,null);
} 
return G__64183__delegate.call(this,args__35358__auto__);};
G__64183.cljs$lang$maxFixedArity = 0;
G__64183.cljs$lang$applyTo = (function (arglist__64194){
var args__35358__auto__ = cljs.core.seq(arglist__64194);
return G__64183__delegate(args__35358__auto__);
});
G__64183.cljs$core$IFn$_invoke$arity$variadic = G__64183__delegate;
return G__64183;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.tasks","header","stack.components.tasks/header",-1481544686)], null));
var alias__35373__auto___64181 = new cljs.core.Keyword("stack.components.tasks","header","stack.components.tasks/header",-1481544686);
replicant.alias.register_BANG_(alias__35373__auto___64181,f__35372__auto___64180);

stack.components.tasks.header = alias__35373__auto___64181;
var f__35372__auto___64195 = cljs.core.with_meta((function() { 
var G__64199__delegate = function (args__35358__auto__){
var vec__64056 = args__35358__auto__;
var map__64063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64056,(0),null);
var map__64063__$1 = cljs.core.__destructure_map(map__64063);
var attrs = map__64063__$1;
var input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64063__$1,new cljs.core.Keyword("stack.components.tasks","input-id","stack.components.tasks/input-id",-1469310683));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64056,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","labelled-input","stack.components.forms/labelled-input",315495662),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter task description and press 'Enter' to save",new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),input_id,new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","on-key","user/on-key",1300835483),"Enter",new cljs.core.Keyword("event","key","event/key",-1209821233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domain","transact","domain/transact",1058301174),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("task","description","task/description",-1431594219),new cljs.core.Keyword("event","target.value","event/target.value",833322214),new cljs.core.Keyword("task","done","task/done",-886317915),false], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),input_id,""], null)], null)], null)], null)], null)], null)], 0)),children], null);
var G__64074 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64074,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.tasks","task-input","stack.components.tasks/task-input",-1538122390),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64074;
}
};
var G__64199 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64206__i = 0, G__64206__a = new Array(arguments.length -  0);
while (G__64206__i < G__64206__a.length) {G__64206__a[G__64206__i] = arguments[G__64206__i + 0]; ++G__64206__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64206__a,0,null);
} 
return G__64199__delegate.call(this,args__35358__auto__);};
G__64199.cljs$lang$maxFixedArity = 0;
G__64199.cljs$lang$applyTo = (function (arglist__64207){
var args__35358__auto__ = cljs.core.seq(arglist__64207);
return G__64199__delegate(args__35358__auto__);
});
G__64199.cljs$core$IFn$_invoke$arity$variadic = G__64199__delegate;
return G__64199;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.tasks","task-input","stack.components.tasks/task-input",-1538122390)], null));
var alias__35373__auto___64196 = new cljs.core.Keyword("stack.components.tasks","task-input","stack.components.tasks/task-input",-1538122390);
replicant.alias.register_BANG_(alias__35373__auto___64196,f__35372__auto___64195);

stack.components.tasks.task_input = alias__35373__auto___64196;
var f__35372__auto___64208 = cljs.core.with_meta((function() { 
var G__64210__delegate = function (args__35358__auto__){
var vec__64086 = args__35358__auto__;
var map__64089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64086,(0),null);
var map__64089__$1 = cljs.core.__destructure_map(map__64089);
var attrs = map__64089__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword("stack.components.tasks","title","stack.components.tasks/title",-1000731773));
var immutable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword("stack.components.tasks","immutable","stack.components.tasks/immutable",-1015944814));
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword("stack.components.tasks","task-filter","stack.components.tasks/task-filter",-1513342605));
var new_task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword("stack.components.tasks","new-task","stack.components.tasks/new-task",663542120));
var tasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword("stack.components.tasks","tasks","stack.components.tasks/tasks",952545572));
var task_counts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64089__$1,new cljs.core.Keyword("stack.components.tasks","task-counts","stack.components.tasks/task-counts",-738059324));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64086,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","card","stack.components.layout/card",548279820),attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","header","stack.components.layout/header",-2119626286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.tasks","header","stack.components.tasks/header",-1481544686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stack.components.tasks","task-filter","stack.components.tasks/task-filter",-1513342605),task_filter], null),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","content.grid-cols-1","stack.components.layout/content.grid-cols-1",-1376499842),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.tasks","task-input","stack.components.tasks/task-input",-1538122390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stack.components.tasks","input-id","stack.components.tasks/input-id",-1469310683),new cljs.core.Keyword(null,"new-task","new-task",-939876740),new cljs.core.Keyword(null,"value","value",305978217),new_task], null),"TODO"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list.bg-base-100.rounded-box.shadow-md","ul.list.bg-base-100.rounded-box.shadow-md",649841152),(function (){var iter__5480__auto__ = (function stack$components$tasks$iter__64100(s__64101){
return (new cljs.core.LazySeq(null,(function (){
var s__64101__$1 = s__64101;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__64101__$1);
if(temp__5823__auto__){
var s__64101__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64101__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__64101__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__64103 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__64102 = (0);
while(true){
if((i__64102 < size__5479__auto__)){
var map__64130 = cljs.core._nth(c__5478__auto__,i__64102);
var map__64130__$1 = cljs.core.__destructure_map(map__64130);
var task = map__64130__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64130__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64130__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64130__$1,new cljs.core.Keyword(null,"done","done",-889844188));
cljs.core.chunk_append(b__64103,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.tasks","task","stack.components.tasks/task",1206126299),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("stack.components.tasks","id","stack.components.tasks/id",1256256760),id,new cljs.core.Keyword("stack.components.tasks","description","stack.components.tasks/description",1263241916),description,new cljs.core.Keyword("stack.components.tasks","done","stack.components.tasks/done",-347353984),done,new cljs.core.Keyword("stack.components.tasks","read-only","stack.components.tasks/read-only",1428455254),immutable], null)], null)], null));

var G__64236 = (i__64102 + (1));
i__64102 = G__64236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64103),stack$components$tasks$iter__64100(cljs.core.chunk_rest(s__64101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64103),null);
}
} else {
var map__64139 = cljs.core.first(s__64101__$2);
var map__64139__$1 = cljs.core.__destructure_map(map__64139);
var task = map__64139__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64139__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64139__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64139__$1,new cljs.core.Keyword(null,"done","done",-889844188));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.tasks","task","stack.components.tasks/task",1206126299),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("stack.components.tasks","id","stack.components.tasks/id",1256256760),id,new cljs.core.Keyword("stack.components.tasks","description","stack.components.tasks/description",1263241916),description,new cljs.core.Keyword("stack.components.tasks","done","stack.components.tasks/done",-347353984),done,new cljs.core.Keyword("stack.components.tasks","read-only","stack.components.tasks/read-only",1428455254),immutable], null)], null)], null),stack$components$tasks$iter__64100(cljs.core.rest(s__64101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tasks);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","footer","stack.components.layout/footer",-361630542),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(task_counts)], null)," of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(task_counts)], null)," tasks completed"], null)], null)], null)], null);
var G__64147 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64147,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.tasks","task-view","stack.components.tasks/task-view",-1480729154),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64147;
}
};
var G__64210 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64243__i = 0, G__64243__a = new Array(arguments.length -  0);
while (G__64243__i < G__64243__a.length) {G__64243__a[G__64243__i] = arguments[G__64243__i + 0]; ++G__64243__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64243__a,0,null);
} 
return G__64210__delegate.call(this,args__35358__auto__);};
G__64210.cljs$lang$maxFixedArity = 0;
G__64210.cljs$lang$applyTo = (function (arglist__64244){
var args__35358__auto__ = cljs.core.seq(arglist__64244);
return G__64210__delegate(args__35358__auto__);
});
G__64210.cljs$core$IFn$_invoke$arity$variadic = G__64210__delegate;
return G__64210;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.tasks","task-view","stack.components.tasks/task-view",-1480729154)], null));
var alias__35373__auto___64209 = new cljs.core.Keyword("stack.components.tasks","task-view","stack.components.tasks/task-view",-1480729154);
replicant.alias.register_BANG_(alias__35373__auto___64209,f__35372__auto___64208);

stack.components.tasks.task_view = alias__35373__auto___64209;

//# sourceMappingURL=stack.components.tasks.js.map
