goog.provide('stack.pages.converter');
stack.pages.converter.layout = (function stack$pages$converter$layout(){
var f__38767__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84372 = stack.pages.converter.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84372)){
var f__38700__auto___84373 = temp__5823__auto___84372;
(f__38700__auto___84373.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84373.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84373.call(null, ));
} else {
}
} else {
}

var vec__84332 = uix.core.use_state("");
var output = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84332,(0),null);
var set_output_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84332,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("label",[{'htmlFor':"converter-input"}],["HTML  input"]),uix.compiler.aot.create_uix_input("textarea",[{'className':"min-h-60",'id':"converter-input",'placeholder':"Enter HTML markup in this box ...",'onChange':(function (event){
var input = event.target.value;
var G__84345 = stack.utils.uix.html__GT_uix(input);
return (set_output_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_output_BANG_.cljs$core$IFn$_invoke$arity$1(G__84345) : set_output_BANG_.call(null, G__84345));
})}],[]),uix.compiler.aot._GT_el("label",[{'htmlFor':"converter-output"}],["UIx markup output"]),uix.compiler.aot.create_uix_input("textarea",[{'className':"min-h-60",'id':"converter-output",'placeholder':"... and the corresponding UIx markup will appear here.",'readOnly':true,'value':uix.compiler.attributes.keyword__GT_string(output)}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84365 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84366 = stack.pages.converter.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84366);

try{return f__38767__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84365);
}} else {
return f__38767__auto__();
}
});

(stack.pages.converter.layout.uix_component_QMARK_ = true);

(stack.pages.converter.layout.displayName = "stack.pages.converter/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84377 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84377.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84377.cljs$core$IFn$_invoke$arity$4(stack.pages.converter.layout,"(uix.core/use-state \"\")",null,null) : sig__38709__auto___84377.call(null, stack.pages.converter.layout,"(uix.core/use-state \"\")",null,null));

window.uix.dev.register_BANG_(stack.pages.converter.layout,stack.pages.converter.layout.displayName);

(stack.pages.converter.layout.fast_refresh_signature = sig__38709__auto___84377);
} else {
}
} else {
}

//# sourceMappingURL=stack.pages.converter.js.map
