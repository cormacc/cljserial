goog.provide('cljserial.components.term');
cljserial.components.term.cmd_input = (function cljserial$components$term$cmd_input(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56654 = [clj_props__39918__auto__];
var map__56657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56654,(0),null);
var map__56657__$1 = cljs.core.__destructure_map(map__56657);
var on_add_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56657__$1,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56795 = cljserial.components.term.cmd_input.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56795)){
var f__39838__auto___56796 = temp__5804__auto___56795;
(f__39838__auto___56796.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56796.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56796.call(null, ));
} else {
}
} else {
}

var vec__56666 = uix.core.use_state("");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56666,(1),null);
return uix.compiler.aot._GT_el("pre",[{'data-prefix':">"}],[uix.compiler.aot._GT_el("code",[null],[uix.compiler.aot.create_uix_input("input",[{'className':uix.compiler.attributes.class_names.cljs$core$IFn$_invoke$arity$2(null,"w-11/12 bg-inherit"),'value':uix.compiler.attributes.keyword__GT_string(value),'placeholder':"Enter a command and hit Enter to send",'onChange':(function (e){
var G__56733 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__56733) : set_value_BANG_.call(null, G__56733));
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
var _STAR_current_component_STAR__orig_val__56734 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56735 = cljserial.components.term.cmd_input;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56735);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56734);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.term.cmd_input.uix_component_QMARK_ = true);

(cljserial.components.term.cmd_input.displayName = "cljserial.components.term/cmd-input");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56798 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56798.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56798.cljs$core$IFn$_invoke$arity$4(cljserial.components.term.cmd_input,"(uix/use-state \"\")",null,null) : sig__39847__auto___56798.call(null, cljserial.components.term.cmd_input,"(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(cljserial.components.term.cmd_input,cljserial.components.term.cmd_input.displayName);

(cljserial.components.term.cmd_input.fast_refresh_signature = sig__39847__auto___56798);
} else {
}
} else {
}
cljserial.components.term.term_event = (function cljserial$components$term$term_event(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56751 = [clj_props__39918__auto__];
var map__56754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56751,(0),null);
var map__56754__$1 = cljs.core.__destructure_map(map__56754);
var props = map__56754__$1;
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56754__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56754__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var event_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56754__$1,new cljs.core.Keyword(null,"event-data","event-data",-1726012139));
var f__39919__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.utils.term.Event,props))){
} else {
throw (new Error("Assert failed: (m/validate term/Event props)"));
}

if(goog.DEBUG){
var temp__5804__auto___56800 = cljserial.components.term.term_event.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56800)){
var f__39838__auto___56801 = temp__5804__auto___56800;
(f__39838__auto___56801.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56801.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56801.call(null, ));
} else {
}
} else {
}

var data_indented = clojure.string.replace(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(event_data),/\r\n|\r|\n/,"\n     ");
return uix.compiler.aot._GT_el("pre",[{'key':uix.compiler.attributes.keyword__GT_string(cljs.core.key),'data-prefix':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event_type,new cljs.core.Keyword(null,"tx","tx",466630418)))?">":" ")}],[uix.compiler.aot._GT_el("code",uix.compiler.attributes.interpret_attrs(data_indented,["code",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56762 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56763 = cljserial.components.term.term_event;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56763);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56762);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.term.term_event.uix_component_QMARK_ = true);

(cljserial.components.term.term_event.displayName = "cljserial.components.term/term-event");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56803 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56803.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56803.cljs$core$IFn$_invoke$arity$4(cljserial.components.term.term_event,"",null,null) : sig__39847__auto___56803.call(null, cljserial.components.term.term_event,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.term.term_event,cljserial.components.term.term_event.displayName);

(cljserial.components.term.term_event.fast_refresh_signature = sig__39847__auto___56803);
} else {
}
} else {
}
cljserial.components.term.term_widget = (function cljserial$components$term$term_widget(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56773 = [clj_props__39918__auto__];
var map__56776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56773,(0),null);
var map__56776__$1 = cljs.core.__destructure_map(map__56776);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56776__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var on_add_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56776__$1,new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56808 = cljserial.components.term.term_widget.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56808)){
var f__39838__auto___56809 = temp__5804__auto___56808;
(f__39838__auto___56809.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56809.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56809.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"block w-full"}],[uix.compiler.aot._GT_el("div",[{'className':"mockup-code"}],[(function (){var iter__5523__auto__ = (function cljserial$components$term$term_widget_$_iter__56779(s__56780){
return (new cljs.core.LazySeq(null,(function (){
var s__56780__$1 = s__56780;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56780__$1);
if(temp__5804__auto__){
var s__56780__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56780__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56780__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56782 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56781 = (0);
while(true){
if((i__56781 < size__5522__auto__)){
var vec__56784 = cljs.core._nth(c__5521__auto__,i__56781);
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56784,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56784,(1),null);
cljs.core.chunk_append(b__56782,uix.compiler.alpha.component_element(cljserial.components.term.term_event,uix.compiler.attributes.interpret_props(event),[]));

var G__56810 = (i__56781 + (1));
i__56781 = G__56810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56782),cljserial$components$term$term_widget_$_iter__56779(cljs.core.chunk_rest(s__56780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56782),null);
}
} else {
var vec__56787 = cljs.core.first(s__56780__$2);
var _timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56787,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56787,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(cljserial.components.term.term_event,uix.compiler.attributes.interpret_props(event),[]),cljserial$components$term$term_widget_$_iter__56779(cljs.core.rest(s__56780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(events);
})(),uix.compiler.alpha.component_element(cljserial.components.term.cmd_input,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-add-event","on-add-event",1563419182),on_add_event], null)],[])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56792 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56793 = cljserial.components.term.term_widget;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56793);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56792);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.term.term_widget.uix_component_QMARK_ = true);

(cljserial.components.term.term_widget.displayName = "cljserial.components.term/term-widget");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56811 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56811.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56811.cljs$core$IFn$_invoke$arity$4(cljserial.components.term.term_widget,"",null,null) : sig__39847__auto___56811.call(null, cljserial.components.term.term_widget,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.term.term_widget,cljserial.components.term.term_widget.displayName);

(cljserial.components.term.term_widget.fast_refresh_signature = sig__39847__auto___56811);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.term.js.map
