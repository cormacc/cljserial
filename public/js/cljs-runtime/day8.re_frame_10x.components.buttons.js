goog.provide('day8.re_frame_10x.components.buttons');
day8.re_frame_10x.components.buttons.icon = (function day8$re_frame_10x$components$buttons$icon(p__64409){
var map__64411 = p__64409;
var map__64411__$1 = cljs.core.__destructure_map(map__64411);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64411__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var disabled_QMARK___$1 = day8.re_frame_10x.components.re_com.deref_or_value(disabled_QMARK_);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),["icon "," ",(cljs.core.truth_(disabled_QMARK___$1)?"disabled":"enabled")," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon,(cljs.core.truth_(label)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null),label], null):null)], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null, ));
}
})], null);
});
day8.re_frame_10x.components.buttons.expansion_style_factory$ = (function day8$re_frame_10x$components$buttons$expansion_style_factory$(style_name64432,params64433){
var vec__64443 = params64433;
var style64435 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name64432)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),day8.re_frame_10x.styles.nord1], null)], null)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),(cljs.core.truth_(style_name64432)?day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.compile_css(style64435):null),new cljs.core.Keyword(null,"name","name",1843675177),style_name64432], null);
});

var factory_name64434_64477 = day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.util.factory__GT_name(day8.re_frame_10x.components.buttons.expansion_style_factory$);
var expansion_style_name$_64478 = cljs.core.constantly(factory_name64434_64477);
day8.re_frame_10x.components.buttons.expansion_style = (function day8$re_frame_10x$components$buttons$expansion_style(){
return day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.meta(new cljs.core.Var(function(){return day8.re_frame_10x.components.buttons.expansion_style;},new cljs.core.Symbol("day8.re-frame-10x.components.buttons","expansion-style","day8.re-frame-10x.components.buttons/expansion-style",-1378580533,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"day8.re-frame-10x.components.buttons","day8.re-frame-10x.components.buttons",1221175463,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"file","file",-1269645878),"day8/re_frame_10x/components/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),25,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"expansion-style","expansion-style",865105185,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(day8.re_frame_10x.components.buttons.expansion_style)?day8.re_frame_10x.components.buttons.expansion_style.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))),expansion_style_name$_64478,day8.re_frame_10x.components.buttons.expansion_style_factory$,cljs.core.PersistentVector.EMPTY);
});
day8.re_frame_10x.components.buttons.expansion = (function day8$re_frame_10x$components$buttons$expansion(p__64456){
var map__64457 = p__64456;
var map__64457__$1 = cljs.core.__destructure_map(map__64457);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64457__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64457__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.components.buttons.expansion_style(),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(open_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_drop_down,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null)], null))], null);
});

//# sourceMappingURL=day8.re_frame_10x.components.buttons.js.map
