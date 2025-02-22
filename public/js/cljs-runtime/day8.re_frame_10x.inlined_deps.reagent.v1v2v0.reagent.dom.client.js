goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client');
goog.scope(function(){
  day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
/**
 * Create a React Root connected to given container DOM element.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.create_root = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$client$create_root(container){
return module$node_modules$react_dom$client.createRoot(container);
});
/**
 * Unmount the given React Root
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.unmount = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$client$unmount(root){
return root.unmount();
});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.reagent_root = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$client$reagent_root(js_props){
var el = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.goog$module$goog$object.get(js_props,"comp");
module$node_modules$react$index.useEffect((function (){
var _STAR_always_update_STAR__orig_val__79747 = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__79748 = false;
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__79748);

try{day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();

return undefined;
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__79747);
}}));

var _STAR_always_update_STAR__orig_val__79749 = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__79750 = true;
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__79750);

try{return (el.cljs$core$IFn$_invoke$arity$0 ? el.cljs$core$IFn$_invoke$arity$0() : el.call(null, ));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__79749);
}});
/**
 * Render the given Reagent element (i.e. Hiccup data)
 *   into a given React root.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$client$render(var_args){
var G__79754 = arguments.length;
switch (G__79754) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2 = (function (root,el){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3(root,el,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render.cljs$core$IFn$_invoke$arity$3 = (function (root,el,compiler){
var comp = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,el);
});
return root.render(module$node_modules$react$index.createElement(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.reagent_root,({"comp": comp})));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.render.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$dom$client$hydrate_root(var_args){
var G__79758 = arguments.length;
switch (G__79758) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,el){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3(container,el,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,el,p__79760){
var map__79761 = p__79760;
var map__79761__$1 = cljs.core.__destructure_map(map__79761);
var compiler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79761__$1,new cljs.core.Keyword(null,"compiler","compiler",-267926731),day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79761__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79761__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
var comp = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,el);
});
return module$node_modules$react_dom$client.hydrateRoot(container,module$node_modules$react$index.createElement(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.reagent_root,({"comp": comp})));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.hydrate_root.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.dom.client.js.map
