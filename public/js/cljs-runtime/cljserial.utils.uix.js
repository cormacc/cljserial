goog.provide('cljserial.utils.uix');
if((typeof cljserial !== 'undefined') && (typeof cljserial.utils !== 'undefined') && (typeof cljserial.utils.uix !== 'undefined') && (typeof cljserial.utils.uix.uix_root !== 'undefined')){
} else {
cljserial.utils.uix.uix_root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}
cljserial.utils.uix.render = (function cljserial$utils$uix$render(layout){
return uix.dom.render_root(layout,cljserial.utils.uix.uix_root);
});
/**
 * Loads initial state from local storage and persists every updated state value
 *   Returns a tuple of the current state value and an updater function
 */
cljserial.utils.uix.use_persistent_state = (function cljserial$utils$uix$use_persistent_state(store_key,initial_value){
var vec__117356 = uix.core.use_state(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117356,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117356,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var value__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(store_key));
var G__117362 = (function (p1__117354_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__117354_SHARP_,value__$1);
});
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__117362) : set_value_BANG_.call(null, G__117362));
}),uix.core.jsfy_deps([store_key]));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}),uix.core.jsfy_deps([value,store_key]));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,set_value_BANG_], null);
});
cljserial.utils.uix.from_hiccup = (function cljserial$utils$uix$from_hiccup(form){
if(cljs.core.seq_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljserial.utils.uix.from_hiccup,form);
} else {
if(cljs.core.vector_QMARK_(form)){
var form__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.first(form)))?cljs.core.rest(form):form
);
var vec__117364 = form__$1;
var seq__117365 = cljs.core.seq(vec__117364);
var first__117366 = cljs.core.first(seq__117365);
var seq__117365__$1 = cljs.core.next(seq__117365);
var tag = first__117366;
var first__117366__$1 = cljs.core.first(seq__117365__$1);
var seq__117365__$2 = cljs.core.next(seq__117365__$1);
var attrs = first__117366__$1;
var children = seq__117365__$2;
var vec__117367 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,children], null):(((cljs.core.count(form__$1) > (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null)
));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117367,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__117367,(1),null);
var attrs__$2 = (function (){var G__117370 = attrs__$1;
if(cljs.core.contains_QMARK_(cljs.core.meta(form__$1),new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__117370,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form__$1)));
} else {
return G__117370;
}
})();
var children__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljserial.utils.uix.from_hiccup,children__$1);
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
cljserial.utils.uix.from_html = (function cljserial$utils$uix$from_html(html_str){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljserial.utils.uix.from_hiccup,hickory.core.as_hiccup),hickory.core.parse_fragment(html_str));
});
/**
 * Replaces last occurrence of pattern with replacement in s.
 *   Will probably break given a regex pattern.
 */
cljserial.utils.uix.replace_last_ = (function cljserial$utils$uix$replace_last_(s,pattern,replacement){
var temp__5802__auto__ = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,pattern);
if(cljs.core.truth_(temp__5802__auto__)){
var match_pos = temp__5802__auto__;
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
cljserial.utils.uix.dedup_parens_ = (function cljserial$utils$uix$dedup_parens_(str){
if(clojure.string.starts_with_QMARK_(str,"((")){
return cljserial.utils.uix.replace_last_(clojure.string.replace_first(str,"((","("),"((","(");
} else {
return str;
}
});
/**
 * Converts a HTML string to a string representation of a clojure form in UIx syntax.
 */
cljserial.utils.uix.html__GT_uix = (function cljserial$utils$uix$html__GT_uix(html_str){
return cljserial.utils.uix.dedup_parens_(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljserial.utils.uix.from_html(html_str)),/\"(\\n\s*)*\"/,"\n"));
});

//# sourceMappingURL=cljserial.utils.uix.js.map
