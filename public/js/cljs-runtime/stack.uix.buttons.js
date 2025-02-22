goog.provide('stack.uix.buttons');
stack.uix.buttons.styles_common = "font-semibold shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
stack.uix.buttons.styles_by_shape = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null);
stack.uix.buttons.styles_by_colour = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null);
stack.uix.buttons.styles_by_size = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null);
stack.uix.buttons.shapes = cljs.core.keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null));
stack.uix.buttons.sizes = cljs.core.keys(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null));
stack.uix.buttons.colours = cljs.core.keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null));
stack.uix.buttons.get_styles = (function stack$uix$buttons$get_styles(shape,colour,size){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-semibold shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",(shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null)) : shape.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null))),(colour.cljs$core$IFn$_invoke$arity$1 ? colour.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null)) : colour.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null))),(size.cljs$core$IFn$_invoke$arity$1 ? size.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null)) : size.call(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null)))], null));
});
stack.uix.buttons.button = (function stack$uix$buttons$button(props__46991__auto__){
var props97737 = uix.core.glue_args(props__46991__auto__);
var vec__97739 = [props97737];
var map__97742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97739,(0),null);
var map__97742__$1 = cljs.core.__destructure_map(map__97742);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97742__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"square","square",812434677));
var colour = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97742__$1,new cljs.core.Keyword(null,"colour","colour",2137094554),new cljs.core.Keyword(null,"primary","primary",817773892));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97742__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97742__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97794 = stack.uix.buttons.button.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97794)){
var f__46909__auto___97796 = temp__5823__auto___97794;
(f__46909__auto___97796.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97796.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97796.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,stack.uix.buttons.get_styles(shape,colour,size)),'type':"button",'onClick':on_click}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97752 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97753 = stack.uix.buttons.button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97753);

try{if(((cljs.core.map_QMARK_(props97737)) || ((props97737 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97737)].join(''),"\n","(clojure.core/or (clojure.core/map? props97737) (clojure.core/nil? props97737))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97752);
}} else {
return f__46992__auto__();
}
});

(stack.uix.buttons.button.uix_component_QMARK_ = true);

(stack.uix.buttons.button.displayName = "stack.uix.buttons/button");

Object.defineProperty(stack.uix.buttons.button,"name",(function (){var obj97771 = ({"value":"stack.uix.buttons/button"});
return obj97771;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97801 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97801.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97801.cljs$core$IFn$_invoke$arity$4(stack.uix.buttons.button,"",null,null) : sig__46918__auto___97801.call(null, stack.uix.buttons.button,"",null,null));

window.uix.dev.register_BANG_(stack.uix.buttons.button,stack.uix.buttons.button.displayName);

(stack.uix.buttons.button.fast_refresh_signature = sig__46918__auto___97801);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.buttons.js.map
