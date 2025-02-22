goog.provide('stack.uix.term');
stack.uix.term.cmd_input = (function stack$uix$term$cmd_input(props__46991__auto__){
var props98011 = uix.core.glue_args(props__46991__auto__);
var vec__98019 = [props98011];
var map__98022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98019,(0),null);
var map__98022__$1 = cljs.core.__destructure_map(map__98022);
var on_add_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98022__$1,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98152 = stack.uix.term.cmd_input.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98152)){
var f__46909__auto___98153 = temp__5823__auto___98152;
(f__46909__auto___98153.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98153.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98153.call(null, ));
} else {
}
} else {
}

var vec__98035 = uix.core.use_state("");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98035,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98035,(1),null);
return uix.compiler.aot._GT_el("pre",[{'data-prefix':">"}],[uix.compiler.aot._GT_el("code",[null],[uix.compiler.aot.create_uix_input("input",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"w-11/12 bg-inherit"),'value':uix.compiler.attributes.keyword__GT_string(value),'placeholder':"Enter a command and hit Enter to send",'onChange':(function (e){
var G__98044 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__98044) : set_value_BANG_.call(null, G__98044));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_value_BANG_.call(null, ""));

return (on_add_event.cljs$core$IFn$_invoke$arity$1 ? on_add_event.cljs$core$IFn$_invoke$arity$1(value) : on_add_event.call(null, value));
} else {
return null;
}
})}],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98045 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98046 = stack.uix.term.cmd_input;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98046);

try{if(((cljs.core.map_QMARK_(props98011)) || ((props98011 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98011)].join(''),"\n","(clojure.core/or (clojure.core/map? props98011) (clojure.core/nil? props98011))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98045);
}} else {
return f__46992__auto__();
}
});

(stack.uix.term.cmd_input.uix_component_QMARK_ = true);

(stack.uix.term.cmd_input.displayName = "stack.uix.term/cmd-input");

Object.defineProperty(stack.uix.term.cmd_input,"name",(function (){var obj98056 = ({"value":"stack.uix.term/cmd-input"});
return obj98056;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98164 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98164.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98164.cljs$core$IFn$_invoke$arity$4(stack.uix.term.cmd_input,"(uix/use-state \"\")",null,null) : sig__46918__auto___98164.call(null, stack.uix.term.cmd_input,"(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(stack.uix.term.cmd_input,stack.uix.term.cmd_input.displayName);

(stack.uix.term.cmd_input.fast_refresh_signature = sig__46918__auto___98164);
} else {
}
} else {
}

stack.uix.term.term_event = (function stack$uix$term$term_event(props__46991__auto__){
var props98069 = uix.core.glue_args(props__46991__auto__);
var vec__98076 = [props98069];
var map__98079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98076,(0),null);
var map__98079__$1 = cljs.core.__destructure_map(map__98079);
var props = map__98079__$1;
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98079__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98079__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98079__$1,new cljs.core.Keyword(null,"event-data","event-data",-1726012139));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98166 = stack.uix.term.term_event.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98166)){
var f__46909__auto___98167 = temp__5823__auto___98166;
(f__46909__auto___98167.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98167.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98167.call(null, ));
} else {
}
} else {
}

var data_indented = clojure.string.replace(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(event_data),/\r\n|\r|\n/,"\n     ");
return uix.compiler.aot._GT_el("pre",[{'key':uix.compiler.attributes.keyword__GT_string(timestamp),'data-prefix':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_type,new cljs.core.Keyword(null,"tx","tx",466630418)))?">":" ")}],[uix.compiler.aot._GT_el("code",uix.compiler.attributes.interpret_attrs(data_indented,["code",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98095 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98096 = stack.uix.term.term_event;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98096);

try{if(((cljs.core.map_QMARK_(props98069)) || ((props98069 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98069)].join(''),"\n","(clojure.core/or (clojure.core/map? props98069) (clojure.core/nil? props98069))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98095);
}} else {
return f__46992__auto__();
}
});

(stack.uix.term.term_event.uix_component_QMARK_ = true);

(stack.uix.term.term_event.displayName = "stack.uix.term/term-event");

Object.defineProperty(stack.uix.term.term_event,"name",(function (){var obj98103 = ({"value":"stack.uix.term/term-event"});
return obj98103;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98168 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98168.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98168.cljs$core$IFn$_invoke$arity$4(stack.uix.term.term_event,"",null,null) : sig__46918__auto___98168.call(null, stack.uix.term.term_event,"",null,null));

window.uix.dev.register_BANG_(stack.uix.term.term_event,stack.uix.term.term_event.displayName);

(stack.uix.term.term_event.fast_refresh_signature = sig__46918__auto___98168);
} else {
}
} else {
}

stack.uix.term.term_widget = (function stack$uix$term$term_widget(props__46991__auto__){
var props98106 = uix.core.glue_args(props__46991__auto__);
var vec__98112 = [props98106];
var map__98115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98112,(0),null);
var map__98115__$1 = cljs.core.__destructure_map(map__98115);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98115__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var on_add_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98115__$1,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98169 = stack.uix.term.term_widget.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98169)){
var f__46909__auto___98170 = temp__5823__auto___98169;
(f__46909__auto___98170.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98170.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98170.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"block w-full"}],[uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__98131){
var vec__98132 = p__98131;
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98132,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98132,(1),null);
return uix.compiler.alpha.component_element(stack.uix.term.term_event,uix.compiler.attributes.interpret_props(event),[]);
}),events),["div",null,"mockup-code",false],false),[uix.compiler.alpha.component_element(stack.uix.term.cmd_input,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),on_add_event], null)],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98137 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98138 = stack.uix.term.term_widget;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98138);

try{if(((cljs.core.map_QMARK_(props98106)) || ((props98106 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98106)].join(''),"\n","(clojure.core/or (clojure.core/map? props98106) (clojure.core/nil? props98106))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98137);
}} else {
return f__46992__auto__();
}
});

(stack.uix.term.term_widget.uix_component_QMARK_ = true);

(stack.uix.term.term_widget.displayName = "stack.uix.term/term-widget");

Object.defineProperty(stack.uix.term.term_widget,"name",(function (){var obj98144 = ({"value":"stack.uix.term/term-widget"});
return obj98144;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98173 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98173.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98173.cljs$core$IFn$_invoke$arity$4(stack.uix.term.term_widget,"",null,null) : sig__46918__auto___98173.call(null, stack.uix.term.term_widget,"",null,null));

window.uix.dev.register_BANG_(stack.uix.term.term_widget,stack.uix.term.term_widget.displayName);

(stack.uix.term.term_widget.fast_refresh_signature = sig__46918__auto___98173);
} else {
}
} else {
}


//# sourceMappingURL=stack.uix.term.js.map
