goog.provide('stack.components.forms');
var f__35372__auto___63918 = cljs.core.with_meta((function() { 
var G__63920__delegate = function (args__35358__auto__){
var vec__63789 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63789,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63789,(1),null);
var res__35359__auto__ = (function (){var selection = new cljs.core.Keyword("stack.components.forms","selected","stack.components.forms/selected",22714471).cljs$core$IFn$_invoke$arity$1(attrs);
var options = new cljs.core.Keyword("stack.components.forms","options","stack.components.forms/options",1696105180).cljs$core$IFn$_invoke$arity$1(attrs);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.rounded-md","select.rounded-md",2112191569),attrs,(function (){var iter__5480__auto__ = (function stack$components$forms$iter__63798(s__63799){
return (new cljs.core.LazySeq(null,(function (){
var s__63799__$1 = s__63799;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63799__$1);
if(temp__5823__auto__){
var s__63799__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63799__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63799__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63801 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63800 = (0);
while(true){
if((i__63800 < size__5479__auto__)){
var map__63817 = cljs.core._nth(c__5478__auto__,i__63800);
var map__63817__$1 = cljs.core.__destructure_map(map__63817);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"value","value",305978217));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63817__$1,new cljs.core.Keyword(null,"content","content",15833224));
cljs.core.chunk_append(b__63801,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,selection)], null),content], null));

var G__63929 = (i__63800 + (1));
i__63800 = G__63929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63801),stack$components$forms$iter__63798(cljs.core.chunk_rest(s__63799__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63801),null);
}
} else {
var map__63823 = cljs.core.first(s__63799__$2);
var map__63823__$1 = cljs.core.__destructure_map(map__63823);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63823__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63823__$1,new cljs.core.Keyword(null,"value","value",305978217));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63823__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,selection)], null),content], null),stack$components$forms$iter__63798(cljs.core.rest(s__63799__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(options);
})()], null);
})();
var G__63824 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63824,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.forms","select","stack.components.forms/select",-1560518060),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63824;
}
};
var G__63920 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__63952__i = 0, G__63952__a = new Array(arguments.length -  0);
while (G__63952__i < G__63952__a.length) {G__63952__a[G__63952__i] = arguments[G__63952__i + 0]; ++G__63952__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__63952__a,0,null);
} 
return G__63920__delegate.call(this,args__35358__auto__);};
G__63920.cljs$lang$maxFixedArity = 0;
G__63920.cljs$lang$applyTo = (function (arglist__63953){
var args__35358__auto__ = cljs.core.seq(arglist__63953);
return G__63920__delegate(args__35358__auto__);
});
G__63920.cljs$core$IFn$_invoke$arity$variadic = G__63920__delegate;
return G__63920;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.forms","select","stack.components.forms/select",-1560518060)], null));
var alias__35373__auto___63919 = new cljs.core.Keyword("stack.components.forms","select","stack.components.forms/select",-1560518060);
replicant.alias.register_BANG_(alias__35373__auto___63919,f__35372__auto___63918);

stack.components.forms.select = alias__35373__auto___63919;
var f__35372__auto___63954 = cljs.core.with_meta((function() { 
var G__63956__delegate = function (args__35358__auto__){
var vec__63833 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63833,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63833,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.input.input-bordered.flex.items-center.gap-2.w-auto","label.input.input-bordered.flex.items-center.gap-2.w-auto",1812502601),children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.grow","input.grow",608597590),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"type","type",1174270348),"text")], null)], null);
var G__63840 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63840,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.forms","labelled-input","stack.components.forms/labelled-input",315495662),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63840;
}
};
var G__63956 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__63970__i = 0, G__63970__a = new Array(arguments.length -  0);
while (G__63970__i < G__63970__a.length) {G__63970__a[G__63970__i] = arguments[G__63970__i + 0]; ++G__63970__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__63970__a,0,null);
} 
return G__63956__delegate.call(this,args__35358__auto__);};
G__63956.cljs$lang$maxFixedArity = 0;
G__63956.cljs$lang$applyTo = (function (arglist__63972){
var args__35358__auto__ = cljs.core.seq(arglist__63972);
return G__63956__delegate(args__35358__auto__);
});
G__63956.cljs$core$IFn$_invoke$arity$variadic = G__63956__delegate;
return G__63956;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.forms","labelled-input","stack.components.forms/labelled-input",315495662)], null));
var alias__35373__auto___63955 = new cljs.core.Keyword("stack.components.forms","labelled-input","stack.components.forms/labelled-input",315495662);
replicant.alias.register_BANG_(alias__35373__auto___63955,f__35372__auto___63954);

stack.components.forms.labelled_input = alias__35373__auto___63955;
var f__35372__auto___63974 = cljs.core.with_meta((function() { 
var G__63976__delegate = function (args__35358__auto__){
var vec__63851 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63851,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63851,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset","fieldset.fieldset",1614120280),attrs,children], null);
var G__63861 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63861,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.forms","fieldset","stack.components.forms/fieldset",-1426215495),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63861;
}
};
var G__63976 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__63998__i = 0, G__63998__a = new Array(arguments.length -  0);
while (G__63998__i < G__63998__a.length) {G__63998__a[G__63998__i] = arguments[G__63998__i + 0]; ++G__63998__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__63998__a,0,null);
} 
return G__63976__delegate.call(this,args__35358__auto__);};
G__63976.cljs$lang$maxFixedArity = 0;
G__63976.cljs$lang$applyTo = (function (arglist__63999){
var args__35358__auto__ = cljs.core.seq(arglist__63999);
return G__63976__delegate(args__35358__auto__);
});
G__63976.cljs$core$IFn$_invoke$arity$variadic = G__63976__delegate;
return G__63976;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.forms","fieldset","stack.components.forms/fieldset",-1426215495)], null));
var alias__35373__auto___63975 = new cljs.core.Keyword("stack.components.forms","fieldset","stack.components.forms/fieldset",-1426215495);
replicant.alias.register_BANG_(alias__35373__auto___63975,f__35372__auto___63974);

stack.components.forms.fieldset = alias__35373__auto___63975;
var f__35372__auto___64015 = cljs.core.with_meta((function() { 
var G__64021__delegate = function (args__35358__auto__){
var vec__63873 = args__35358__auto__;
var map__63876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63873,(0),null);
var map__63876__$1 = cljs.core.__destructure_map(map__63876);
var attrs = map__63876__$1;
var input_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876__$1,new cljs.core.Keyword("stack.components.forms","input-id","stack.components.forms/input-id",-1448408772));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63876__$1,new cljs.core.Keyword("stack.components.forms","values","stack.components.forms/values",861990071));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63873,(1),null);
var res__35359__auto__ = (function (){var list_id = [cljs.core.name(input_id),"-values"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex","div.flex",-396986231),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),list_id], null),(function (){var iter__5480__auto__ = (function stack$components$forms$iter__63893(s__63894){
return (new cljs.core.LazySeq(null,(function (){
var s__63894__$1 = s__63894;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63894__$1);
if(temp__5823__auto__){
var s__63894__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63894__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63894__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63896 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63895 = (0);
while(true){
if((i__63895 < size__5479__auto__)){
var v = cljs.core._nth(c__5478__auto__,i__63895);
cljs.core.chunk_append(b__63896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null)], null));

var G__64073 = (i__63895 + (1));
i__63895 = G__64073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63896),stack$components$forms$iter__63893(cljs.core.chunk_rest(s__63894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63896),null);
}
} else {
var v = cljs.core.first(s__63894__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null)], null),stack$components$forms$iter__63893(cljs.core.rest(s__63894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(values);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.basis-40","label.basis-40",-1255316224),cljs.core.name(input_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.range.grow","input.range.grow",-552537559),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),cljs.core.first(values),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.last(values),new cljs.core.Keyword(null,"list","list",765357683),list_id,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),input_id,new cljs.core.Keyword("event","target.value-as-int","event/target.value-as-int",599206608)], null)], null)], null)], null)], 0))], null)], null);
})();
var G__63911 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63911,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.forms","range-slider","stack.components.forms/range-slider",1098463726),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63911;
}
};
var G__64021 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64098__i = 0, G__64098__a = new Array(arguments.length -  0);
while (G__64098__i < G__64098__a.length) {G__64098__a[G__64098__i] = arguments[G__64098__i + 0]; ++G__64098__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64098__a,0,null);
} 
return G__64021__delegate.call(this,args__35358__auto__);};
G__64021.cljs$lang$maxFixedArity = 0;
G__64021.cljs$lang$applyTo = (function (arglist__64099){
var args__35358__auto__ = cljs.core.seq(arglist__64099);
return G__64021__delegate(args__35358__auto__);
});
G__64021.cljs$core$IFn$_invoke$arity$variadic = G__64021__delegate;
return G__64021;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.forms","range-slider","stack.components.forms/range-slider",1098463726)], null));
var alias__35373__auto___64016 = new cljs.core.Keyword("stack.components.forms","range-slider","stack.components.forms/range-slider",1098463726);
replicant.alias.register_BANG_(alias__35373__auto___64016,f__35372__auto___64015);

stack.components.forms.range_slider = alias__35373__auto___64016;

//# sourceMappingURL=stack.components.forms.js.map
