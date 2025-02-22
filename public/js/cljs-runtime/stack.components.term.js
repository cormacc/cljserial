goog.provide('stack.components.term');
var f__35372__auto___63908 = cljs.core.with_meta((function() { 
var G__63910__delegate = function (args__35358__auto__){
var vec__63786 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63786,(0),null);
var _children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63786,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.input.flex.w-auto.bg-inherit.p-0","label.input.flex.w-auto.bg-inherit.p-0",-621706275),"> ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.grow","input.grow",608597590),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type a command and press 'Enter'..."], null)], 0))], null)], null);
var G__63797 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63797,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.term","input","stack.components.term/input",256102999),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63797;
}
};
var G__63910 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__63912__i = 0, G__63912__a = new Array(arguments.length -  0);
while (G__63912__i < G__63912__a.length) {G__63912__a[G__63912__i] = arguments[G__63912__i + 0]; ++G__63912__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__63912__a,0,null);
} 
return G__63910__delegate.call(this,args__35358__auto__);};
G__63910.cljs$lang$maxFixedArity = 0;
G__63910.cljs$lang$applyTo = (function (arglist__63913){
var args__35358__auto__ = cljs.core.seq(arglist__63913);
return G__63910__delegate(args__35358__auto__);
});
G__63910.cljs$core$IFn$_invoke$arity$variadic = G__63910__delegate;
return G__63910;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.term","input","stack.components.term/input",256102999)], null));
var alias__35373__auto___63909 = new cljs.core.Keyword("stack.components.term","input","stack.components.term/input",256102999);
replicant.alias.register_BANG_(alias__35373__auto___63909,f__35372__auto___63908);

stack.components.term.input = alias__35373__auto___63909;
var f__35372__auto___63915 = cljs.core.with_meta((function() { 
var G__63917__delegate = function (args__35358__auto__){
var vec__63814 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63814,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63814,(1),null);
var res__35359__auto__ = (function (){var command_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stack.components.term","event-type","stack.components.term/event-type",-444229021).cljs$core$IFn$_invoke$arity$1(attrs),new cljs.core.Keyword(null,"command","command",-894540724));
var prefix = ((command_QMARK_)?"> ":"");
var suffix = ((command_QMARK_)?"":"\n");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),prefix,children,suffix], null);
})();
var G__63821 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63821,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.term","event","stack.components.term/event",-1410170284),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63821;
}
};
var G__63917 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__63921__i = 0, G__63921__a = new Array(arguments.length -  0);
while (G__63921__i < G__63921__a.length) {G__63921__a[G__63921__i] = arguments[G__63921__i + 0]; ++G__63921__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__63921__a,0,null);
} 
return G__63917__delegate.call(this,args__35358__auto__);};
G__63917.cljs$lang$maxFixedArity = 0;
G__63917.cljs$lang$applyTo = (function (arglist__63922){
var args__35358__auto__ = cljs.core.seq(arglist__63922);
return G__63917__delegate(args__35358__auto__);
});
G__63917.cljs$core$IFn$_invoke$arity$variadic = G__63917__delegate;
return G__63917;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.term","event","stack.components.term/event",-1410170284)], null));
var alias__35373__auto___63916 = new cljs.core.Keyword("stack.components.term","event","stack.components.term/event",-1410170284);
replicant.alias.register_BANG_(alias__35373__auto___63916,f__35372__auto___63915);

stack.components.term.event = alias__35373__auto___63916;
var f__35372__auto___63923 = cljs.core.with_meta((function() { 
var G__63925__delegate = function (args__35358__auto__){
var vec__63825 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63825,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63825,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.w-full.bg-black.text-white.rounded-md.p-4","pre.w-full.bg-black.text-white.rounded-md.p-4",1587206917),attrs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),children], null)], null);
var G__63831 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63831,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.term","container","stack.components.term/container",1778473975),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63831;
}
};
var G__63925 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__63931__i = 0, G__63931__a = new Array(arguments.length -  0);
while (G__63931__i < G__63931__a.length) {G__63931__a[G__63931__i] = arguments[G__63931__i + 0]; ++G__63931__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__63931__a,0,null);
} 
return G__63925__delegate.call(this,args__35358__auto__);};
G__63925.cljs$lang$maxFixedArity = 0;
G__63925.cljs$lang$applyTo = (function (arglist__63932){
var args__35358__auto__ = cljs.core.seq(arglist__63932);
return G__63925__delegate(args__35358__auto__);
});
G__63925.cljs$core$IFn$_invoke$arity$variadic = G__63925__delegate;
return G__63925;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.term","container","stack.components.term/container",1778473975)], null));
var alias__35373__auto___63924 = new cljs.core.Keyword("stack.components.term","container","stack.components.term/container",1778473975);
replicant.alias.register_BANG_(alias__35373__auto___63924,f__35372__auto___63923);

stack.components.term.container = alias__35373__auto___63924;
var f__35372__auto___63937 = cljs.core.with_meta((function() { 
var G__63939__delegate = function (args__35358__auto__){
var vec__63847 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63847,(0),null);
var _children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63847,(1),null);
var res__35359__auto__ = (function (){var events = new cljs.core.Keyword("stack.components.term","events","stack.components.term/events",-1337081301).cljs$core$IFn$_invoke$arity$1(attrs);
var dispatch_prefix = new cljs.core.Keyword("stack.components.term","dispatch-prefix","stack.components.term/dispatch-prefix",-154469406).cljs$core$IFn$_invoke$arity$1(attrs);
var input_id = new cljs.core.Keyword("stack.components.term","input-id","stack.components.term/input-id",911817371).cljs$core$IFn$_invoke$arity$1(attrs);
var input_value = new cljs.core.Keyword("stack.components.term","input-value","stack.components.term/input-value",-1492877983).cljs$core$IFn$_invoke$arity$1(attrs);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.term","container","stack.components.term/container",1778473975),attrs,(function (){var iter__5480__auto__ = (function stack$components$term$iter__63856(s__63857){
return (new cljs.core.LazySeq(null,(function (){
var s__63857__$1 = s__63857;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63857__$1);
if(temp__5823__auto__){
var s__63857__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63857__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63857__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63859 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63858 = (0);
while(true){
if((i__63858 < size__5479__auto__)){
var vec__63867 = cljs.core._nth(c__5478__auto__,i__63858);
var _ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63867,(0),null);
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63867,(1),null);
cljs.core.chunk_append(b__63859,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.term","event","stack.components.term/event",-1410170284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stack.components.term","event-type","stack.components.term/event-type",-444229021),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(evt)], null),new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(evt))], null));

var G__63973 = (i__63858 + (1));
i__63858 = G__63973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63859),stack$components$term$iter__63856(cljs.core.chunk_rest(s__63857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63859),null);
}
} else {
var vec__63883 = cljs.core.first(s__63857__$2);
var _ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63883,(0),null);
var evt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63883,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.term","event","stack.components.term/event",-1410170284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stack.components.term","event-type","stack.components.term/event-type",-444229021),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(evt)], null),new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(evt))], null),stack$components$term$iter__63856(cljs.core.rest(s__63857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(events);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.term","input","stack.components.term/input",256102999),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),input_value,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),input_id,new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","on-key","user/on-key",1300835483),"Enter",new cljs.core.Keyword("event","key","event/key",-1209821233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dispatch_prefix,new cljs.core.Keyword(null,"write","write",-1857649168),input_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","input","user/input",552154950),input_id,""], null)], null)], null)], null)], null)], null)], null)], null);
})();
var G__63899 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63899,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.term","terminal","stack.components.term/terminal",2049493150),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63899;
}
};
var G__63939 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64041__i = 0, G__64041__a = new Array(arguments.length -  0);
while (G__64041__i < G__64041__a.length) {G__64041__a[G__64041__i] = arguments[G__64041__i + 0]; ++G__64041__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64041__a,0,null);
} 
return G__63939__delegate.call(this,args__35358__auto__);};
G__63939.cljs$lang$maxFixedArity = 0;
G__63939.cljs$lang$applyTo = (function (arglist__64042){
var args__35358__auto__ = cljs.core.seq(arglist__64042);
return G__63939__delegate(args__35358__auto__);
});
G__63939.cljs$core$IFn$_invoke$arity$variadic = G__63939__delegate;
return G__63939;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.term","terminal","stack.components.term/terminal",2049493150)], null));
var alias__35373__auto___63938 = new cljs.core.Keyword("stack.components.term","terminal","stack.components.term/terminal",2049493150);
replicant.alias.register_BANG_(alias__35373__auto___63938,f__35372__auto___63937);

stack.components.term.terminal = alias__35373__auto___63938;

//# sourceMappingURL=stack.components.term.js.map
