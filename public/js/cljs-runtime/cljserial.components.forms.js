goog.provide('cljserial.components.forms');
cljserial.components.forms.select = (function cljserial$components$forms$select(props__79555__auto__){
var clj_props__79556__auto__ = uix.core.glue_args(props__79555__auto__);
var vec__117839 = [clj_props__79556__auto__];
var map__117842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117839,(0),null);
var map__117842__$1 = cljs.core.__destructure_map(map__117842);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117842__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117842__$1,new cljs.core.Keyword(null,"selected","selected",574897764),null);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117842__$1,new cljs.core.Keyword(null,"format","format",-1306924766),(function (item){
return item;
}));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117842__$1,new cljs.core.Keyword(null,"value","value",305978217),format);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__117842__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__117842__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var f__79557__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___117861 = cljserial.components.forms.select.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___117861)){
var f__79486__auto___117862 = temp__5804__auto___117861;
(f__79486__auto___117862.cljs$core$IFn$_invoke$arity$0 ? f__79486__auto___117862.cljs$core$IFn$_invoke$arity$0() : f__79486__auto___117862.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("select",[{'className':"rounded-md w-full h-6 py-0 text-xs",'defaultValue':(value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(selected) : value.call(null, selected)),'disabled':uix.compiler.attributes.keyword__GT_string(disabled),'onChange':on_change}],[cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return uix.compiler.aot._GT_el("option",[{'key':uix.compiler.attributes.keyword__GT_string(idx),'value':(value.cljs$core$IFn$_invoke$arity$1 ? value.cljs$core$IFn$_invoke$arity$1(item) : value.call(null, item))}],[(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(item) : format.call(null, item))]);
}),items)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__117850 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__117851 = cljserial.components.forms.select;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__117851);

try{if(((cljs.core.map_QMARK_(clj_props__79556__auto__)) || ((clj_props__79556__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__79556__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__79556__auto__) (clojure.core/nil? clj-props__79556__auto__))"].join('')));
}

return f__79557__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__117850);
}} else {
return f__79557__auto__();
}
});

(cljserial.components.forms.select.uix_component_QMARK_ = true);

(cljserial.components.forms.select.displayName = "cljserial.components.forms/select");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__79495__auto___117863 = window.uix.dev.signature_BANG_();
(sig__79495__auto___117863.cljs$core$IFn$_invoke$arity$4 ? sig__79495__auto___117863.cljs$core$IFn$_invoke$arity$4(cljserial.components.forms.select,"",null,null) : sig__79495__auto___117863.call(null, cljserial.components.forms.select,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.forms.select,cljserial.components.forms.select.displayName);

(cljserial.components.forms.select.fast_refresh_signature = sig__79495__auto___117863);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.forms.js.map
