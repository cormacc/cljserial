goog.provide('stack.uix.appbar');
stack.uix.appbar.brand_icon_size = "2rem";
stack.uix.appbar.appbar_icon = stack.utils.icons.hiccup__GT_react(phosphor.icons.render.cljs$core$IFn$_invoke$arity$variadic((function (){
phosphor.icons.load_icon_BANG_(new cljs.core.Keyword("phosphor.regular","usb","phosphor.regular/usb",-1622136818),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 256 256"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"256",new cljs.core.Keyword(null,"height","height",1025178622),"256",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cx","cx",1272694324),"136",new cljs.core.Keyword(null,"cy","cy",755331060),"64",new cljs.core.Keyword(null,"r","r",-471384190),"24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y2","y2",-718691301),new cljs.core.Keyword(null,"x2","x2",-1362513475)],["currentColor","none","round","128","round","16","8","128","200"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"points","points",-1486596883),"200 96 200 160 248 128 200 96",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],["168","8","currentColor","none","round","48","round","16","112","48"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"d","d",1972142424),"M112,64H72a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h40",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16"], null)], null)], null));

return new cljs.core.Keyword("phosphor.regular","usb","phosphor.regular/usb",-1622136818);
})()
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),stack.uix.appbar.brand_icon_size], null)], 0)));
stack.uix.appbar.route_links = (function stack$uix$appbar$route_links(props__46991__auto__){
var props97494 = uix.core.glue_args(props__46991__auto__);
var vec__97498 = [props97494];
var map__97501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97498,(0),null);
var map__97501__$1 = cljs.core.__destructure_map(map__97501);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97501__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97644 = stack.uix.appbar.route_links.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97644)){
var f__46909__auto___97645 = temp__5823__auto___97644;
(f__46909__auto___97645.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97645.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97645.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"tabs tabs-box",'role':"tablist"}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__97522){
var vec__97523 = p__97522;
var _route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97523,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97523,(1),null);
return uix.compiler.aot._GT_el("a",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(route_props))?"tab tab-active":"tab")),'key':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route_props),'role':"tab",'href':new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(route_props)}],[new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(route_props)]);
}),routes)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97528 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97529 = stack.uix.appbar.route_links;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97529);

try{if(((cljs.core.map_QMARK_(props97494)) || ((props97494 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97494)].join(''),"\n","(clojure.core/or (clojure.core/map? props97494) (clojure.core/nil? props97494))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97528);
}} else {
return f__46992__auto__();
}
});

(stack.uix.appbar.route_links.uix_component_QMARK_ = true);

(stack.uix.appbar.route_links.displayName = "stack.uix.appbar/route-links");

Object.defineProperty(stack.uix.appbar.route_links,"name",(function (){var obj97547 = ({"value":"stack.uix.appbar/route-links"});
return obj97547;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97653 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97653.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97653.cljs$core$IFn$_invoke$arity$4(stack.uix.appbar.route_links,"",null,null) : sig__46918__auto___97653.call(null, stack.uix.appbar.route_links,"",null,null));

window.uix.dev.register_BANG_(stack.uix.appbar.route_links,stack.uix.appbar.route_links.displayName);

(stack.uix.appbar.route_links.fast_refresh_signature = sig__46918__auto___97653);
} else {
}
} else {
}

stack.uix.appbar.appbar = (function stack$uix$appbar$appbar(props__46991__auto__){
var props97562 = uix.core.glue_args(props__46991__auto__);
var vec__97566 = [props97562];
var map__97569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97566,(0),null);
var map__97569__$1 = cljs.core.__destructure_map(map__97569);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97569__$1,new cljs.core.Keyword(null,"title","title",636505583));
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97569__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var menus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97569__$1,new cljs.core.Keyword(null,"menus","menus",-1377611675));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97655 = stack.uix.appbar.appbar.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97655)){
var f__46909__auto___97656 = temp__5823__auto___97655;
(f__46909__auto___97656.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97656.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97656.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("header",[{'className':"navbar"}],[uix.compiler.aot._GT_el("div",[{'className':"navbar-start"}],[uix.compiler.alpha.component_element(stack.utils.icons.round_icon,uix.compiler.attributes.interpret_props(stack.uix.appbar.appbar_icon),[]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(title,["div",null,"text-xl",false],false),[])]),uix.compiler.aot._GT_el("div",[{'className':"navbar-center"}],[uix.compiler.alpha.component_element(stack.uix.appbar.route_links,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),routes], null)],[])]),uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(menus,["div",null,"navbar-end",false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97609 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97610 = stack.uix.appbar.appbar;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97610);

try{if(((cljs.core.map_QMARK_(props97562)) || ((props97562 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97562)].join(''),"\n","(clojure.core/or (clojure.core/map? props97562) (clojure.core/nil? props97562))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97609);
}} else {
return f__46992__auto__();
}
});

(stack.uix.appbar.appbar.uix_component_QMARK_ = true);

(stack.uix.appbar.appbar.displayName = "stack.uix.appbar/appbar");

Object.defineProperty(stack.uix.appbar.appbar,"name",(function (){var obj97620 = ({"value":"stack.uix.appbar/appbar"});
return obj97620;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97661 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97661.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97661.cljs$core$IFn$_invoke$arity$4(stack.uix.appbar.appbar,"",null,null) : sig__46918__auto___97661.call(null, stack.uix.appbar.appbar,"",null,null));

window.uix.dev.register_BANG_(stack.uix.appbar.appbar,stack.uix.appbar.appbar.displayName);

(stack.uix.appbar.appbar.fast_refresh_signature = sig__46918__auto___97661);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.appbar.js.map
