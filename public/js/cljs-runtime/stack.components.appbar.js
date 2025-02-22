goog.provide('stack.components.appbar');
stack.components.appbar.brand_icon_size = "2rem";
stack.components.appbar.appbar_icon = stack.utils.icons.hiccup__GT_react(phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic((function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","usb","phosphor.regular/usb",-1622136818),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cx","cx",1272694324),"136",new cljs.core.Keyword(null,"cy","cy",755331060),"64",new cljs.core.Keyword(null,"r","r",-471384190),"24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","128","round","16","8","128","200"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"200 96 200 160 248 128 200 96",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],["168","8","currentColor","none","round","48","round","16","112","48"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M112,64H72a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h40",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","usb","phosphor.regular/usb",-1622136818);
})()
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),stack.components.appbar.brand_icon_size], null)], 0)));
stack.components.appbar.route_links = (function stack$components$appbar$route_links(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__94948 = [clj_props__45318__auto__];
var map__94951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94948,(0),null);
var map__94951__$1 = cljs.core.__destructure_map(map__94951);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94951__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95083 = stack.components.appbar.route_links.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95083)){
var f__45248__auto___95084 = temp__5823__auto___95083;
(f__45248__auto___95084.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95084.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95084.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"tabs tabs-boxed",'role':"tablist"}],[(function (){var iter__5480__auto__ = (function stack$components$appbar$route_links_$_iter__94955(s__94956){
return (new cljs.core.LazySeq(null,(function (){
var s__94956__$1 = s__94956;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__94956__$1);
if(temp__5823__auto__){
var s__94956__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__94956__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__94956__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__94958 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__94957 = (0);
while(true){
if((i__94957 < size__5479__auto__)){
var vec__94975 = cljs.core._nth(c__5478__auto__,i__94957);
var _route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94975,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94975,(1),null);
cljs.core.chunk_append(b__94958,uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(route_props))?"tab tab-active":"tab")),'key':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route_props),'role':"tab",'href':new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(route_props)}],[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(route_props)]));

var G__95094 = (i__94957 + (1));
i__94957 = G__95094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__94958),stack$components$appbar$route_links_$_iter__94955(cljs.core.chunk_rest(s__94956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__94958),null);
}
} else {
var vec__94988 = cljs.core.first(s__94956__$2);
var _route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94988,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94988,(1),null);
return cljs.core.cons(uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(route_props))?"tab tab-active":"tab")),'key':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route_props),'role':"tab",'href':new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(route_props)}],[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(route_props)]),stack$components$appbar$route_links_$_iter__94955(cljs.core.rest(s__94956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__94996 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__94997 = stack.components.appbar.route_links;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__94997);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__94996);
}} else {
return f__45319__auto__();
}
});

(stack.components.appbar.route_links.uix_component_QMARK_ = true);

(stack.components.appbar.route_links.displayName = "stack.components.appbar/route-links");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95105 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95105.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95105.cljs$core$IFn$_invoke$arity$4(stack.components.appbar.route_links,"",null,null) : sig__45257__auto___95105.call(null, stack.components.appbar.route_links,"",null,null));

window.uix.dev.register_BANG_(stack.components.appbar.route_links,stack.components.appbar.route_links.displayName);

(stack.components.appbar.route_links.fast_refresh_signature = sig__45257__auto___95105);
} else {
}
} else {
}
stack.components.appbar.appbar = (function stack$components$appbar$appbar(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95002 = [clj_props__45318__auto__];
var map__95005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95002,(0),null);
var map__95005__$1 = cljs.core.__destructure_map(map__95005);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95005__$1,new cljs.core.Keyword(null,"title","title",636505583));
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95005__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var menus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95005__$1,new cljs.core.Keyword(null,"menus","menus",-1377611675));
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95111 = stack.components.appbar.appbar.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95111)){
var f__45248__auto___95112 = temp__5823__auto___95111;
(f__45248__auto___95112.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95112.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95112.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("header",[{'className':"navbar"}],[uix.compiler.aot._GT_el("div",[{'className':"navbar-start"}],[uix.compiler.alpha.component_element(stack.utils.icons.round_icon,uix.compiler.attributes.interpret_props(stack.components.appbar.appbar_icon),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(title,["div",null,"text-xl",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':"navbar-center"}],[uix.compiler.alpha.component_element(stack.components.appbar.route_links,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),routes], null)],[])]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(menus,["div",null,"navbar-end",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95032 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95033 = stack.components.appbar.appbar;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95033);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95032);
}} else {
return f__45319__auto__();
}
});

(stack.components.appbar.appbar.uix_component_QMARK_ = true);

(stack.components.appbar.appbar.displayName = "stack.components.appbar/appbar");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95119 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95119.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95119.cljs$core$IFn$_invoke$arity$4(stack.components.appbar.appbar,"",null,null) : sig__45257__auto___95119.call(null, stack.components.appbar.appbar,"",null,null));

window.uix.dev.register_BANG_(stack.components.appbar.appbar,stack.components.appbar.appbar.displayName);

(stack.components.appbar.appbar.fast_refresh_signature = sig__45257__auto___95119);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.appbar.js.map
