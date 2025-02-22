goog.provide('cljserial.pages.converter');
cljserial.pages.converter.layout = (function cljserial$pages$converter$layout(){
var f__79553__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___118200 = cljserial.pages.converter.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___118200)){
var f__79486__auto___118201 = temp__5804__auto___118200;
(f__79486__auto___118201.cljs$core$IFn$_invoke$arity$0 ? f__79486__auto___118201.cljs$core$IFn$_invoke$arity$0() : f__79486__auto___118201.call(null, ));
} else {
}
} else {
}

var vec__118166 = uix.core.use_state("");
var output = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118166,(0),null);
var set_output_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118166,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"flex flex-col"}],[uix.compiler.aot._GT_el("label",[{'htmlFor':"converter-input"}],["HTML  input"]),uix.compiler.aot.create_uix_input("textarea",[{'className':"min-h-60",'id':"converter-input",'placeholder':"Enter HTML markup in this box ...",'onChange':(function (event){
var input = event.target.value;
var G__118181 = cljserial.utils.uix.html__GT_uix(input);
return (set_output_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_output_BANG_.cljs$core$IFn$_invoke$arity$1(G__118181) : set_output_BANG_.call(null, G__118181));
})}],[]),uix.compiler.aot._GT_el("label",[{'htmlFor':"converter-output"}],["UIx markup output"]),uix.compiler.aot.create_uix_input("textarea",[{'className':"min-h-60",'id':"converter-output",'placeholder':"... and the corresponding UIx markup will appear here.",'readOnly':true,'value':uix.compiler.attributes.keyword__GT_string(output)}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__118192 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__118193 = cljserial.pages.converter.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__118193);

try{return f__79553__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__118192);
}} else {
return f__79553__auto__();
}
});

(cljserial.pages.converter.layout.uix_component_QMARK_ = true);

(cljserial.pages.converter.layout.displayName = "cljserial.pages.converter/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__79495__auto___118207 = window.uix.dev.signature_BANG_();
(sig__79495__auto___118207.cljs$core$IFn$_invoke$arity$4 ? sig__79495__auto___118207.cljs$core$IFn$_invoke$arity$4(cljserial.pages.converter.layout,"(uix.core/use-state \"\")",null,null) : sig__79495__auto___118207.call(null, cljserial.pages.converter.layout,"(uix.core/use-state \"\")",null,null));

window.uix.dev.register_BANG_(cljserial.pages.converter.layout,cljserial.pages.converter.layout.displayName);

(cljserial.pages.converter.layout.fast_refresh_signature = sig__79495__auto___118207);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.pages.converter.js.map
