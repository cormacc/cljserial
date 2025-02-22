goog.provide('stack.components.files');
stack.components.files.cols = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"modified","modified",-2134587826),new cljs.core.Keyword(null,"synced","synced",-1518561120)], null);
var f__35372__auto___64171 = cljs.core.with_meta((function() { 
var G__64173__delegate = function (args__35358__auto__){
var vec__63965 = args__35358__auto__;
var map__63968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63965,(0),null);
var map__63968__$1 = cljs.core.__destructure_map(map__63968);
var attrs = map__63968__$1;
var filestore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63968__$1,new cljs.core.Keyword("stack.components.files","filestore","stack.components.files/filestore",-1514856506));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63965,(1),null);
var res__35359__auto__ = (function (){var map__63969 = filestore;
var map__63969__$1 = cljs.core.__destructure_map(map__63969);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63969__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63969__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","card","stack.components.layout/card",548279820),attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","header","stack.components.layout/header",-2119626286),children], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","content","stack.components.layout/content",1986211172),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (heading){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.name(heading)], null);
}),stack.components.files.cols)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function stack$components$files$iter__64030(s__64031){
return (new cljs.core.LazySeq(null,(function (){
var s__64031__$1 = s__64031;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__64031__$1);
if(temp__5823__auto__){
var s__64031__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64031__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__64031__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__64033 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__64032 = (0);
while(true){
if((i__64032 < size__5479__auto__)){
var f = cljs.core._nth(c__5478__auto__,i__64032);
cljs.core.chunk_append(b__64033,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","read","file/read",1141096353),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),new cljs.core.Keyword(null,"selected-file-path","selected-file-path",-1192355145),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f)], null)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__64032,f,c__5478__auto__,size__5479__auto__,b__64033,s__64031__$2,temp__5823__auto__,map__63969,map__63969__$1,info,entries,vec__63965,map__63968,map__63968__$1,attrs,filestore,children){
return (function (col_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f,col_id)], null);
});})(i__64032,f,c__5478__auto__,size__5479__auto__,b__64033,s__64031__$2,temp__5823__auto__,map__63969,map__63969__$1,info,entries,vec__63965,map__63968,map__63968__$1,attrs,filestore,children))
,stack.components.files.cols)], null));

var G__64198 = (i__64032 + (1));
i__64032 = G__64198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64033),stack$components$files$iter__64030(cljs.core.chunk_rest(s__64031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64033),null);
}
} else {
var f = cljs.core.first(s__64031__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","read","file/read",1141096353),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),new cljs.core.Keyword(null,"selected-file-path","selected-file-path",-1192355145),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(f)], null)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,s__64031__$2,temp__5823__auto__,map__63969,map__63969__$1,info,entries,vec__63965,map__63968,map__63968__$1,attrs,filestore,children){
return (function (col_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f,col_id)], null);
});})(f,s__64031__$2,temp__5823__auto__,map__63969,map__63969__$1,info,entries,vec__63965,map__63968,map__63968__$1,attrs,filestore,children))
,stack.components.files.cols)], null),stack$components$files$iter__64030(cljs.core.rest(s__64031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.vals(entries));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Storage"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s / %s bytes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"used","used",-1414786177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(info)], 0))], null)], null)], null)], null)], null)], null);
})();
var G__64138 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64138,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.files","file-table","stack.components.files/file-table",-425804303),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64138;
}
};
var G__64173 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64212__i = 0, G__64212__a = new Array(arguments.length -  0);
while (G__64212__i < G__64212__a.length) {G__64212__a[G__64212__i] = arguments[G__64212__i + 0]; ++G__64212__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64212__a,0,null);
} 
return G__64173__delegate.call(this,args__35358__auto__);};
G__64173.cljs$lang$maxFixedArity = 0;
G__64173.cljs$lang$applyTo = (function (arglist__64213){
var args__35358__auto__ = cljs.core.seq(arglist__64213);
return G__64173__delegate(args__35358__auto__);
});
G__64173.cljs$core$IFn$_invoke$arity$variadic = G__64173__delegate;
return G__64173;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.files","file-table","stack.components.files/file-table",-425804303)], null));
var alias__35373__auto___64172 = new cljs.core.Keyword("stack.components.files","file-table","stack.components.files/file-table",-425804303);
replicant.alias.register_BANG_(alias__35373__auto___64172,f__35372__auto___64171);

stack.components.files.file_table = alias__35373__auto___64172;
var f__35372__auto___64214 = cljs.core.with_meta((function() { 
var G__64216__delegate = function (args__35358__auto__){
var vec__64153 = args__35358__auto__;
var map__64156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64153,(0),null);
var map__64156__$1 = cljs.core.__destructure_map(map__64156);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword("stack.components.files","file","stack.components.files/file",1403927077));
var readonly = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64156__$1,new cljs.core.Keyword("stack.components.files","readonly","stack.components.files/readonly",565477571));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64153,(1),null);
var res__35359__auto__ = (function (){var map__64158 = file;
var map__64158__$1 = cljs.core.__destructure_map(map__64158);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64158__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","card","stack.components.layout/card",548279820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","header","stack.components.layout/header",-2119626286),children], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","content","stack.components.layout/content",1986211172),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","fieldset","stack.components.forms/fieldset",-1426215495),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.input.w-full","label.input.w-full",548564955),"Path",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"/",new cljs.core.Keyword(null,"value","value",305978217),path,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),readonly,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),new cljs.core.Keyword(null,"create-file-path","create-file-path",353207413),new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textarea.w-full.h-24","textarea.textarea.w-full.h-24",1273442671),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter file content here...",new cljs.core.Keyword(null,"value","value",305978217),data,new cljs.core.Keyword(null,"readonly","readonly",-1101398934),readonly,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),new cljs.core.Keyword(null,"create-file-content","create-file-content",-1313327236),new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null)], null)], null)], null),(cljs.core.truth_(readonly)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-neutral.mt-4","button.btn.btn-neutral.mt-4",1737509738),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","write","file/write",1796637036),path,data], null)], null)], null)], null),"Save"], null))], null)], null)], null);
})();
var G__64166 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64166,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.files","file-card","stack.components.files/file-card",1346467979),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64166;
}
};
var G__64216 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64231__i = 0, G__64231__a = new Array(arguments.length -  0);
while (G__64231__i < G__64231__a.length) {G__64231__a[G__64231__i] = arguments[G__64231__i + 0]; ++G__64231__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64231__a,0,null);
} 
return G__64216__delegate.call(this,args__35358__auto__);};
G__64216.cljs$lang$maxFixedArity = 0;
G__64216.cljs$lang$applyTo = (function (arglist__64232){
var args__35358__auto__ = cljs.core.seq(arglist__64232);
return G__64216__delegate(args__35358__auto__);
});
G__64216.cljs$core$IFn$_invoke$arity$variadic = G__64216__delegate;
return G__64216;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.files","file-card","stack.components.files/file-card",1346467979)], null));
var alias__35373__auto___64215 = new cljs.core.Keyword("stack.components.files","file-card","stack.components.files/file-card",1346467979);
replicant.alias.register_BANG_(alias__35373__auto___64215,f__35372__auto___64214);

stack.components.files.file_card = alias__35373__auto___64215;

//# sourceMappingURL=stack.components.files.js.map
