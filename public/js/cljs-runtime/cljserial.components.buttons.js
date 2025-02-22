goog.provide('cljserial.components.buttons');
cljserial.components.buttons.styles_common = "font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
cljserial.components.buttons.styles_by_shape = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null);
cljserial.components.buttons.styles_by_colour = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null);
cljserial.components.buttons.styles_by_size = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null);
cljserial.components.buttons.shapes = cljs.core.keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null));
cljserial.components.buttons.sizes = cljs.core.keys(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null));
cljserial.components.buttons.colours = cljs.core.keys(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null));
cljserial.components.buttons.get_styles = (function cljserial$components$buttons$get_styles(shape,colour,size){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",(shape.cljs$core$IFn$_invoke$arity$1 ? shape.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null)) : shape.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square","square",812434677),"rounded-md",new cljs.core.Keyword(null,"rounded","rounded",85415706),"rounded-full"], null))),(colour.cljs$core$IFn$_invoke$arity$1 ? colour.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null)) : colour.call(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),"bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"], null))),(size.cljs$core$IFn$_invoke$arity$1 ? size.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null)) : size.call(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"xs","xs",649443341),"text-xs px-2 py-1",new cljs.core.Keyword(null,"sm","sm",-1402575065),"text-sm px-2 py-1",new cljs.core.Keyword(null,"md","md",707286655),"text-sm px-2.5 py-1.5",new cljs.core.Keyword(null,"lg","lg",-80787836),"text-sm px-3 py-2",new cljs.core.Keyword(null,"xl","xl",-1689552936),"text-sm px-3.5 py-2.5"], null)))], null));
});
cljserial.components.buttons.button = (function cljserial$components$buttons$button(props__79555__auto__){
var clj_props__79556__auto__ = uix.core.glue_args(props__79555__auto__);
var vec__117802 = [clj_props__79556__auto__];
var map__117805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117802,(0),null);
var map__117805__$1 = cljs.core.__destructure_map(map__117805);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117805__$1,new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"square","square",812434677));
var colour = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117805__$1,new cljs.core.Keyword(null,"colour","colour",2137094554),new cljs.core.Keyword(null,"primary","primary",817773892));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117805__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117805__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var f__79557__auto__ = (function (){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([shape]),cljserial.components.buttons.shapes))){
} else {
throw (new Error("Assert failed: (some #{shape} shapes)"));
}

if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([size]),cljserial.components.buttons.sizes))){
} else {
throw (new Error("Assert failed: (some #{size} sizes)"));
}

if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([colour]),cljserial.components.buttons.colours))){
} else {
throw (new Error("Assert failed: (some #{colour} colours)"));
}

if(goog.DEBUG){
var temp__5804__auto___117832 = cljserial.components.buttons.button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___117832)){
var f__79486__auto___117833 = temp__5804__auto___117832;
(f__79486__auto___117833.cljs$core$IFn$_invoke$arity$0 ? f__79486__auto___117833.cljs$core$IFn$_invoke$arity$0() : f__79486__auto___117833.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,cljserial.components.buttons.get_styles(shape,colour,size)),'type':"button",'onClick':on_click}],[children]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__117815 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__117816 = cljserial.components.buttons.button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__117816);

try{if(((cljs.core.map_QMARK_(clj_props__79556__auto__)) || ((clj_props__79556__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__79556__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__79556__auto__) (clojure.core/nil? clj-props__79556__auto__))"].join('')));
}

return f__79557__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__117815);
}} else {
return f__79557__auto__();
}
});

(cljserial.components.buttons.button.uix_component_QMARK_ = true);

(cljserial.components.buttons.button.displayName = "cljserial.components.buttons/button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__79495__auto___117836 = window.uix.dev.signature_BANG_();
(sig__79495__auto___117836.cljs$core$IFn$_invoke$arity$4 ? sig__79495__auto___117836.cljs$core$IFn$_invoke$arity$4(cljserial.components.buttons.button,"",null,null) : sig__79495__auto___117836.call(null, cljserial.components.buttons.button,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.buttons.button,cljserial.components.buttons.button.displayName);

(cljserial.components.buttons.button.fast_refresh_signature = sig__79495__auto___117836);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.buttons.js.map
