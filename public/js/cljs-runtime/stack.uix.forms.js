goog.provide('stack.uix.forms');
stack.uix.forms.select = (function stack$uix$forms$select(props__46991__auto__){
var props97760 = uix.core.glue_args(props__46991__auto__);
var vec__97765 = [props97760];
var map__97769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97765,(0),null);
var map__97769__$1 = cljs.core.__destructure_map(map__97769);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97769__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97769__$1,new cljs.core.Keyword(null,"selected","selected",574897764),null);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97769__$1,new cljs.core.Keyword(null,"format","format",-1306924766),(function (item){
return item;
}));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97769__$1,new cljs.core.Keyword(null,"value","value",305978217),format);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97769__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97769__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___97821 = stack.uix.forms.select.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___97821)){
var f__46909__auto___97822 = temp__5823__auto___97821;
(f__46909__auto___97822.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___97822.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___97822.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("select",[{'className':"rounded-md w-full h-6 py-0 text-xs",'defaultValue':(value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(selected) : value.call(null, selected)),'disabled':uix.compiler.attributes.keyword__GT_string(disabled),'onChange':on_change}],[cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return uix.compiler.aot._GT_el("option",[{'key':uix.compiler.attributes.keyword__GT_string(idx),'value':(value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(item) : value.call(null, item))}],[(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(item) : format.call(null, item))]);
}),items)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97791 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97792 = stack.uix.forms.select;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97792);

try{if(((cljs.core.map_QMARK_(props97760)) || ((props97760 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props97760)].join(''),"\n","(clojure.core/or (clojure.core/map? props97760) (clojure.core/nil? props97760))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97791);
}} else {
return f__46992__auto__();
}
});

(stack.uix.forms.select.uix_component_QMARK_ = true);

(stack.uix.forms.select.displayName = "stack.uix.forms/select");

Object.defineProperty(stack.uix.forms.select,"name",(function (){var obj97805 = ({"value":"stack.uix.forms/select"});
return obj97805;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___97836 = window.uix.dev.signature_BANG_();
(sig__46918__auto___97836.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___97836.cljs$core$IFn$_invoke$arity$4(stack.uix.forms.select,"",null,null) : sig__46918__auto___97836.call(null, stack.uix.forms.select,"",null,null));

window.uix.dev.register_BANG_(stack.uix.forms.select,stack.uix.forms.select.displayName);

(stack.uix.forms.select.fast_refresh_signature = sig__46918__auto___97836);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.forms.js.map
