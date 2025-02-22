goog.provide('phosphor.icons');
phosphor.icons.icons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
phosphor.icons.load_icon_BANG_ = (function phosphor$icons$load_icon_BANG_(id,hiccup){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(phosphor.icons.icons,cljs.core.assoc,id,hiccup);
});
phosphor.icons.get_loaded_icons = (function phosphor$icons$get_loaded_icons(){
return cljs.core.keys(cljs.core.deref(phosphor.icons.icons));
});
phosphor.icons.render = (function phosphor$icons$render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97282 = arguments.length;
var i__5727__auto___97283 = (0);
while(true){
if((i__5727__auto___97283 < len__5726__auto___97282)){
args__5732__auto__.push((arguments[i__5727__auto___97283]));

var G__97288 = (i__5727__auto___97283 + (1));
i__5727__auto___97283 = G__97288;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__97189){
var vec__97191 = p__97189;
var map__97194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97191,(0),null);
var map__97194__$1 = cljs.core.__destructure_map(map__97194);
var attrs = map__97194__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97194__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97194__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97194__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(phosphor.icons.icons),id);
if(cljs.core.truth_(temp__5821__auto__)){
var svg = temp__5821__auto__;
var color__$1 = (function (){var or__5002__auto__ = color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "currentColor";
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"style","style",-496642736)], null),(function (){var G__97207 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1",new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null);
var G__97207__$1 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97207,new cljs.core.Keyword(null,"height","height",1025178622),size):G__97207);
var G__97207__$2 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97207__$1,new cljs.core.Keyword(null,"width","width",-384071477),size):G__97207__$1);
if(cljs.core.truth_(style)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__97207__$2,style);
} else {
return G__97207__$2;
}
})()),(1),cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"style","style",-496642736)], 0)));
} else {
throw (new Error(["Icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," is not loaded. Try loading it with `load-icon!`, or check that it exists."].join('')));
}
}));

(phosphor.icons.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(phosphor.icons.render.cljs$lang$applyTo = (function (seq97179){
var G__97180 = cljs.core.first(seq97179);
var seq97179__$1 = cljs.core.next(seq97179);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97180,seq97179__$1);
}));


//# sourceMappingURL=phosphor.icons.js.map
