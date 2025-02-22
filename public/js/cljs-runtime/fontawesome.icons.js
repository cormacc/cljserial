goog.provide('fontawesome.icons');
fontawesome.icons.icons = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
fontawesome.icons.load_icon_BANG_ = (function fontawesome$icons$load_icon_BANG_(id,hiccup){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fontawesome.icons.icons,cljs.core.assoc,id,hiccup);
});
fontawesome.icons.get_loaded_icons = (function fontawesome$icons$get_loaded_icons(){
return cljs.core.keys(cljs.core.deref(fontawesome.icons.icons));
});
fontawesome.icons.render = (function fontawesome$icons$render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97293 = arguments.length;
var i__5727__auto___97294 = (0);
while(true){
if((i__5727__auto___97294 < len__5726__auto___97293)){
args__5732__auto__.push((arguments[i__5727__auto___97294]));

var G__97295 = (i__5727__auto___97294 + (1));
i__5727__auto___97294 = G__97295;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return fontawesome.icons.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(fontawesome.icons.render.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__97199){
var vec__97202 = p__97199;
var map__97205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97202,(0),null);
var map__97205__$1 = cljs.core.__destructure_map(map__97205);
var attrs = map__97205__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97205__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97205__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97205__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fontawesome.icons.icons),id);
if(cljs.core.truth_(temp__5821__auto__)){
var svg = temp__5821__auto__;
var color__$1 = (function (){var or__5002__auto__ = color;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "currentColor";
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(svg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"style","style",-496642736)], null),(function (){var G__97227 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1",new cljs.core.Keyword(null,"color","color",1011675173),color__$1,new cljs.core.Keyword(null,"fill","fill",883462889),color__$1], null);
var G__97227__$1 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97227,new cljs.core.Keyword(null,"height","height",1025178622),size):G__97227);
var G__97227__$2 = (cljs.core.truth_(size)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__97227__$1,new cljs.core.Keyword(null,"width","width",-384071477),size):G__97227__$1);
if(cljs.core.truth_(style)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__97227__$2,style);
} else {
return G__97227__$2;
}
})()),(1),cljs.core.merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"style","style",-496642736)], 0)));
} else {
throw (new Error(["Icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," is not loaded. Try loading it with `load-icon!`, or check that it exists."].join('')));
}
}));

(fontawesome.icons.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(fontawesome.icons.render.cljs$lang$applyTo = (function (seq97184){
var G__97185 = cljs.core.first(seq97184);
var seq97184__$1 = cljs.core.next(seq97184);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__97185,seq97184__$1);
}));


//# sourceMappingURL=fontawesome.icons.js.map
