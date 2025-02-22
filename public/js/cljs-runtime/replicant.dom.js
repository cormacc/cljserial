goog.provide('replicant.dom');
replicant.dom.remove_listener = (function replicant$dom$remove_listener(el,event){
var temp__5823__auto__ = (function (){var G__63782 = el;
var G__63782__$1 = (((G__63782 == null))?null:G__63782.replicantHandlers);
if((G__63782__$1 == null)){
return null;
} else {
return (G__63782__$1[event]);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var old_handler = temp__5823__auto__;
return el.removeEventListener(event,old_handler);
} else {
return null;
}
});
replicant.dom.on_next_frame = (function replicant$dom$on_next_frame(f){
return requestAnimationFrame((function (){
return requestAnimationFrame(f);
}));
});
replicant.dom._on_transition_end = (function replicant$dom$_on_transition_end(el,f){
var vec__63809 = replicant.transition.get_transition_stats(window.getComputedStyle(el).getPropertyValue("transition-duration"));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63809,(0),null);
var dur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63809,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
var complete = cljs.core.volatile_BANG_((0));
var timer = cljs.core.volatile_BANG_(null);
var started = (new Date());
var callback = (function() { 
var replicant$dom$_on_transition_end_$_listener__delegate = function (_args){
var cn = complete.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (complete.cljs$core$IDeref$_deref$arity$1(null, ) + (1)));
if((((n <= cn)) || ((dur < ((new Date()) - started))))){
el.removeEventListener("transitionend",replicant$dom$_on_transition_end_$_listener);

clearTimeout(cljs.core.deref(timer));

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return null;
}
};
var replicant$dom$_on_transition_end_$_listener = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__64247__i = 0, G__64247__a = new Array(arguments.length -  0);
while (G__64247__i < G__64247__a.length) {G__64247__a[G__64247__i] = arguments[G__64247__i + 0]; ++G__64247__i;}
  _args = new cljs.core.IndexedSeq(G__64247__a,0,null);
} 
return replicant$dom$_on_transition_end_$_listener__delegate.call(this,_args);};
replicant$dom$_on_transition_end_$_listener.cljs$lang$maxFixedArity = 0;
replicant$dom$_on_transition_end_$_listener.cljs$lang$applyTo = (function (arglist__64248){
var _args = cljs.core.seq(arglist__64248);
return replicant$dom$_on_transition_end_$_listener__delegate(_args);
});
replicant$dom$_on_transition_end_$_listener.cljs$core$IFn$_invoke$arity$variadic = replicant$dom$_on_transition_end_$_listener__delegate;
return replicant$dom$_on_transition_end_$_listener;
})()
;
el.addEventListener("transitionend",callback);

return cljs.core.vreset_BANG_(timer,setTimeout(callback,(dur + (200))));
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {replicant.protocols.IRender}
 * @implements {cljs.core.IWithMeta}
*/
replicant.dom.t_replicant$dom63862 = (function (meta63863){
this.meta63863 = meta63863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(replicant.dom.t_replicant$dom63862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63864,meta63863__$1){
var self__ = this;
var _63864__$1 = this;
return (new replicant.dom.t_replicant$dom63862(meta63863__$1));
}));

(replicant.dom.t_replicant$dom63862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63864){
var self__ = this;
var _63864__$1 = this;
return self__.meta63863;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$ = cljs.core.PROTOCOL_SENTINEL);

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$remove_attribute$arity$3 = (function (this$,el,attr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML",attr)){
(el.innerHTML = "");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value",attr)){
(el.value = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-value",attr)){
el.removeAttribute("value");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("selected",attr)){
(el.selected = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-selected",attr)){
el.removeAttribute("selected");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked",attr)){
(el.checked = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-checked",attr)){
el.removeAttribute("checked");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("disabled",attr)){
(el.disabled = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("readonly",attr)){
(el.readonly = null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("required",attr)){
(el.required = null);
} else {
el.removeAttribute(attr);

}
}
}
}
}
}
}
}
}
}

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$remove_all_children$arity$2 = (function (this$,el){
var self__ = this;
var this$__$1 = this;
(el.textContent = "");

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$remove_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.removeChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$insert_before$arity$4 = (function (this$,el,child_node,reference_node){
var self__ = this;
var this$__$1 = this;
el.insertBefore(child_node,reference_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$append_child$arity$3 = (function (this$,el,child_node){
var self__ = this;
var this$__$1 = this;
el.appendChild(child_node);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$remove_event_handler$arity$3 = (function (this$,el,event){
var self__ = this;
var this$__$1 = this;
var event_64249__$1 = cljs.core.name(event);
replicant.dom.remove_listener(el,event_64249__$1);

(el.replicantHandlers[event_64249__$1] = null);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$remove_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.remove(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$set_event_handler$arity$4 = (function (this$,el,event,handler){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(el.replicantHandlers)){
} else {
(el.replicantHandlers = ({}));
}

var event_64250__$1 = cljs.core.name(event);
replicant.dom.remove_listener(el,event_64250__$1);

(el.replicantHandlers[event_64250__$1] = handler);

el.addEventListener(event_64250__$1,handler);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$replace_child$arity$4 = (function (this$,el,insert_child,replace_child){
var self__ = this;
var this$__$1 = this;
el.replaceChild(insert_child,replace_child);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$on_transition_end$arity$3 = (function (this$,el,f){
var self__ = this;
var this$__$1 = this;
replicant.dom._on_transition_end(el,f);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$remove_style$arity$3 = (function (this$,el,style){
var self__ = this;
var this$__$1 = this;
el.style.removeProperty(cljs.core.name(style));

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$set_attribute$arity$5 = (function (this$,el,attr,v,opt){
var self__ = this;
var this$__$1 = this;
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("innerHTML",attr)){
(el.innerHTML = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("value",attr)){
(el.value = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-value",attr)){
el.setAttribute("value",v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("selected",attr)){
(el.selected = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-selected",attr)){
el.setAttribute("selected",v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checked",attr)){
(el.checked = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default-checked",attr)){
el.setAttribute("checked",v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("disabled",attr)){
(el.disabled = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("readonly",attr)){
(el.readonly = v);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("required",attr)){
(el.required = v);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt))){
el.setAttributeNS(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opt),attr,v);
} else {
el.setAttribute(attr,v);

}
}
}
}
}
}
}
}
}
}
}
}catch (e64090){var e_64251 = e64090;
}
return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$create_text_node$arity$2 = (function (_this,text){
var self__ = this;
var _this__$1 = this;
return document.createTextNode(text);
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$set_style$arity$4 = (function (this$,el,style,v){
var self__ = this;
var this$__$1 = this;
el.style.setProperty(cljs.core.name(style),v);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$next_frame$arity$2 = (function (_this,f){
var self__ = this;
var _this__$1 = this;
return replicant.dom.on_next_frame(f);
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$add_class$arity$3 = (function (this$,el,cn){
var self__ = this;
var this$__$1 = this;
el.classList.add(cn);

return this$__$1;
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$get_child$arity$3 = (function (_this,el,idx){
var self__ = this;
var _this__$1 = this;
return (el.childNodes[idx]);
}));

(replicant.dom.t_replicant$dom63862.prototype.replicant$protocols$IRender$create_element$arity$3 = (function (_this,tag_name,options){
var self__ = this;
var _this__$1 = this;
var temp__5821__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5821__auto__)){
var ns = temp__5821__auto__;
return document.createElementNS(ns,tag_name);
} else {
return document.createElement(tag_name);
}
}));

(replicant.dom.t_replicant$dom63862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63863","meta63863",-1898665734,null)], null);
}));

(replicant.dom.t_replicant$dom63862.cljs$lang$type = true);

(replicant.dom.t_replicant$dom63862.cljs$lang$ctorStr = "replicant.dom/t_replicant$dom63862");

(replicant.dom.t_replicant$dom63862.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"replicant.dom/t_replicant$dom63862");
}));

/**
 * Positional factory function for replicant.dom/t_replicant$dom63862.
 */
replicant.dom.__GT_t_replicant$dom63862 = (function replicant$dom$__GT_t_replicant$dom63862(meta63863){
return (new replicant.dom.t_replicant$dom63862(meta63863));
});


replicant.dom.create_renderer = (function replicant$dom$create_renderer(){
return (new replicant.dom.t_replicant$dom63862(cljs.core.PersistentArrayMap.EMPTY));
});
if((typeof replicant !== 'undefined') && (typeof replicant.dom !== 'undefined') && (typeof replicant.dom.state !== 'undefined')){
} else {
replicant.dom.state = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Render `hiccup` in DOM element `el`. Replaces any pre-existing content not
 *   created by this function. Subsequent calls with the same `el` will update the
 *   rendered DOM by comparing `hiccup` to the previous `hiccup`.
 */
replicant.dom.render = (function replicant$dom$render(var_args){
var args__5732__auto__ = [];
var len__5726__auto___64255 = arguments.length;
var i__5727__auto___64256 = (0);
while(true){
if((i__5727__auto___64256 < len__5726__auto___64255)){
args__5732__auto__.push((arguments[i__5727__auto___64256]));

var G__64257 = (i__5727__auto___64256 + (1));
i__5727__auto___64256 = G__64257;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});
goog.exportSymbol('replicant.dom.render', replicant.dom.render);

(replicant.dom.render.cljs$core$IFn$_invoke$arity$variadic = (function (el,hiccup,p__64238){
var vec__64239 = p__64238;
var map__64242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64239,(0),null);
var map__64242__$1 = cljs.core.__destructure_map(map__64242);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64242__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64242__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var rendering_QMARK__64258 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null));
if(cljs.core.contains_QMARK_(cljs.core.deref(replicant.dom.state),el)){
} else {
(el.innerHTML = "");

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),el,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",336841071),replicant.dom.create_renderer(),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),true,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY], null)));
}

if(cljs.core.truth_(rendering_QMARK__64258)){
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__64224_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__64224_SHARP_,hiccup);
})));
} else {
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.assoc_in(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null),true));

var map__64245_64259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),el);
var map__64245_64260__$1 = cljs.core.__destructure_map(map__64245_64259);
var renderer_64261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64245_64260__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var current_64262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64245_64260__$1,new cljs.core.Keyword(null,"current","current",-1088038603));
var unmounts_64263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64245_64260__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases_64264__$1 = (function (){var or__5002__auto__ = aliases;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return replicant.alias.get_registered_aliases();
}
})();
var hiccup_64265__$1 = (function (){var hiccup__34160__auto__ = hiccup;
if(cljs.core.vector_QMARK_(hiccup__34160__auto__)){
if(cljs.core.map_QMARK_(cljs.core.second(hiccup__34160__auto__))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(hiccup__34160__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("replicant","key","replicant/key",-670108117)], null),(function (k__34161__auto__){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__34161__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aliases_64264__$1,alias_data], null)], null);
}));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(hiccup__34160__auto__),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aliases_64264__$1,alias_data], null)], null)], null),cljs.core.rest(hiccup__34160__auto__));
}
} else {
return hiccup__34160__auto__;
}
})();
var map__64246_64266 = replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic(renderer_64261,el,hiccup_64265__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_64262,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"unmounts","unmounts",173366521),unmounts_64263,new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases_64264__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null)], 0));
var map__64246_64267__$1 = cljs.core.__destructure_map(map__64246_64266);
var vdom_64268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64246_64267__$1,new cljs.core.Keyword(null,"vdom","vdom",953162958));
replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update.cljs$core$IFn$_invoke$arity$4(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),el,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),vdom_64268,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844),false], null)));

var temp__5823__auto___64269 = cljs.core.first(new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),el)));
if(cljs.core.truth_(temp__5823__auto___64269)){
var pending_64270 = temp__5823__auto___64269;
requestAnimationFrame((function (){
return replicant.dom.render(el,pending_64270);
}));

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__64225_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__64225_SHARP_));
})));
} else {
}
}

return el;
}));

(replicant.dom.render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(replicant.dom.render.cljs$lang$applyTo = (function (seq64227){
var G__64228 = cljs.core.first(seq64227);
var seq64227__$1 = cljs.core.next(seq64227);
var G__64229 = cljs.core.first(seq64227__$1);
var seq64227__$2 = cljs.core.next(seq64227__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64228,G__64229,seq64227__$2);
}));

/**
 * Unmounts elements in `el`, and clears internal state.
 */
replicant.dom.unmount = (function replicant$dom$unmount(el){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(replicant.dom.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.Keyword(null,"rendering?","rendering?",-1124117844)], null)))){
return requestAnimationFrame((function (){
return (replicant.dom.unmount.cljs$core$IFn$_invoke$arity$1 ? replicant.dom.unmount.cljs$core$IFn$_invoke$arity$1(el) : replicant.dom.unmount.call(null, el));
}));
} else {
replicant.dom.render(el,null);

replicant.dom.state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(replicant.dom.state.cljs$core$IDeref$_deref$arity$1(null, ),el));

return null;
}
});
goog.exportSymbol('replicant.dom.unmount', replicant.dom.unmount);
/**
 * Register a global dispatch function for event handlers and life-cycle hooks
 *   that are not functions. See data-driven event handlers and life-cycle hooks in
 *   the user guide for details.
 */
replicant.dom.set_dispatch_BANG_ = (function replicant$dom$set_dispatch_BANG_(f){
return (replicant.core._STAR_dispatch_STAR_ = f);
});
goog.exportSymbol('replicant.dom.set_dispatch_BANG_', replicant.dom.set_dispatch_BANG_);

//# sourceMappingURL=replicant.dom.js.map
