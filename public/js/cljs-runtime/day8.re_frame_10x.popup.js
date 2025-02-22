goog.provide('day8.re_frame_10x.popup');
day8.re_frame_10x.popup.overlay = (function day8$re_frame_10x$popup$overlay(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0,0,0,0.25)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","close-popup-menu","day8.re-frame-10x.panels.app-db.events/close-popup-menu",-479964858)], null));
})], null)], null);
});
day8.re_frame_10x.popup.menu = (function day8$re_frame_10x$popup$menu(){
var map__83911 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","popup-menu","day8.re-frame-10x.panels.app-db.subs/popup-menu",-100095659)], null)));
var map__83911__$1 = cljs.core.__destructure_map(map__83911);
var vec__83912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83911__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83912,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83912,(1),null);
var showing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83911__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83911__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83911__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var data_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83911__$1,new cljs.core.Keyword(null,"data-path","data-path",674802181));
if(cljs.core.truth_(showing_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.popup.overlay], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.data_array], null),new cljs.core.Keyword(null,"label","label",1718410804),"Copy Path",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__83921_83972 = data_path;
if((G__83921_83972 == null)){
} else {
day8.re_frame_10x.fx.clipboard.copy_BANG_(G__83921_83972);
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","close-popup-menu","day8.re-frame-10x.panels.app-db.events/close-popup-menu",-479964858)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.data_object], null),new cljs.core.Keyword(null,"label","label",1718410804),"Copy Subtree",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__83923_83973 = data;
var G__83923_83974__$1 = (((G__83923_83973 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__83923_83973,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),cljs.core.pop(data_path))));
if((G__83923_83974__$1 == null)){
} else {
day8.re_frame_10x.fx.clipboard.copy_BANG_(G__83923_83974__$1);
}

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","close-popup-menu","day8.re-frame-10x.panels.app-db.events/close-popup-menu",-479964858)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.clojure], null),new cljs.core.Keyword(null,"label","label",1718410804),"Copy REPL Cmd",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.fx.clipboard.copy_BANG_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x.components.cljs-devtools","simple-render-with-path-annotations","day8.re-frame-10x.components.cljs-devtools/simple-render-with-path-annotations",1514919350,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"data","data",-232669377),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-frame.db","app-db","re-frame.db/app-db",1918166498,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"path","path",-188191168),null,(1),null)),(new cljs.core.List(null,path,null,(1),null))], 0))))),null,(1),null)))))));

return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","close-popup-menu","day8.re-frame-10x.panels.app-db.events/close-popup-menu",-479964858)], null));
})], null)], null)], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.popup.js.map
