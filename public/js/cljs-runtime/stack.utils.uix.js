goog.provide('stack.utils.uix');
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.uix !== 'undefined') && (typeof stack.utils.uix.uix_root !== 'undefined')){
} else {
stack.utils.uix.uix_root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app-root"));
}
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.uix";
var __id = null;
var __level = new cljs.core.Keyword(null,"info","info",-317069002);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.uix",new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/uix.cljs"], null),__ns,17,1,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/uix.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Initialising cljs-react-devtools",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();
cljs_react_devtools.core.init_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),document.getElementById("app-root"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),"Control-Shift-Meta-R"], null));
stack.utils.uix.render = (function stack$utils$uix$render(layout){
return uix.dom.render_root(layout,stack.utils.uix.uix_root);
});
/**
 * Loads initial state from local storage and persists every updated state value
 *   Returns a tuple of the current state value and an updater function
 */
stack.utils.uix.use_persistent_state = (function stack$utils$uix$use_persistent_state(store_key,initial_value){
var vec__98735 = uix.core.use_state(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98735,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98735,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var value__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(store_key));
var G__98740 = (function (p1__98734_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__98734_SHARP_,value__$1);
});
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__98740) : set_value_BANG_.call(null, G__98740));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_key], null))]);

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}),[uix.hooks.alpha.use_clj_deps(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,store_key], null))]);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,set_value_BANG_], null);
});
stack.utils.uix.from_hiccup = (function stack$utils$uix$from_hiccup(form){
if(cljs.core.seq_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stack.utils.uix.from_hiccup,form);
} else {
if(cljs.core.vector_QMARK_(form)){
var form__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.first(form)))?cljs.core.rest(form):form
);
var vec__98741 = form__$1;
var seq__98742 = cljs.core.seq(vec__98741);
var first__98743 = cljs.core.first(seq__98742);
var seq__98742__$1 = cljs.core.next(seq__98742);
var tag = first__98743;
var first__98743__$1 = cljs.core.first(seq__98742__$1);
var seq__98742__$2 = cljs.core.next(seq__98742__$1);
var attrs = first__98743__$1;
var children = seq__98742__$2;
var vec__98744 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,children], null):(((cljs.core.count(form__$1) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null)
));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98744,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98744,(1),null);
var attrs__$2 = (function (){var G__98749 = attrs__$1;
if(cljs.core.contains_QMARK_(cljs.core.meta(form__$1),new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__98749,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form__$1)));
} else {
return G__98749;
}
})();
var children__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(stack.utils.uix.from_hiccup,children__$1);
if(cljs.core.truth_(attrs__$2)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"$","$",-1580747756,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,attrs__$2,null,(1),null)),children__$2], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"$","$",-1580747756,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children__$2], 0))));
}
} else {
return form;

}
}
});
/**
 * Converts a HTML string to a clojure form in UIx syntax.
 */
stack.utils.uix.from_html = (function stack$utils$uix$from_html(html_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(stack.utils.uix.from_hiccup,hickory.core.as_hiccup),hickory.core.parse_fragment(html_str));
});
/**
 * Replaces last occurrence of pattern with replacement in s.
 *   Will probably break given a regex pattern.
 */
stack.utils.uix.replace_last_ = (function stack$utils$uix$replace_last_(s,pattern,replacement){
var temp__5821__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5821__auto__)){
var match_pos = temp__5821__auto__;
var prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),match_pos);
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(match_pos + cljs.core.count(pattern)),cljs.core.count(s));
return [prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement),suffix].join('');
} else {
return s;
}
});
/**
 * If the opening and closing parentheses are doubled, undouble them.
 *   i.e. '(($ :div))' -> '($ :div).
 *   The html->uix conversion below gives doubled opening and closing parentheses - I'm not
 *   clever enough to solve this at source, hence clunky workaround.
 *   
 */
stack.utils.uix.dedup_parens_ = (function stack$utils$uix$dedup_parens_(str){
if(clojure.string.starts_with_QMARK_(str,"((")){
return stack.utils.uix.replace_last_(clojure.string.replace_first(str,"((","("),"((","(");
} else {
return str;
}
});
/**
 * Converts a HTML string to a string representation of a clojure form in UIx syntax.
 */
stack.utils.uix.html__GT_uix = (function stack$utils$uix$html__GT_uix(html_str){
return stack.utils.uix.dedup_parens_(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(stack.utils.uix.from_html(html_str)),/\"(\\n\s*)*\"/,"\n"));
});

//# sourceMappingURL=stack.utils.uix.js.map
