goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_80995 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_80995(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_80996 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_80996(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__80429 = coll;
var G__80430 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__80429,G__80430) : shadow.dom.lazy_native_coll_seq.call(null, G__80429,G__80430));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__80447 = arguments.length;
switch (G__80447) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__80450 = arguments.length;
switch (G__80450) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__80455 = arguments.length;
switch (G__80455) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__80461 = arguments.length;
switch (G__80461) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__80471 = arguments.length;
switch (G__80471) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__80475 = arguments.length;
switch (G__80475) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e80486){if((e80486 instanceof Object)){
var e = e80486;
return console.log("didnt support attachEvent",el,e);
} else {
throw e80486;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__80487 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__80488 = null;
var count__80489 = (0);
var i__80490 = (0);
while(true){
if((i__80490 < count__80489)){
var el = chunk__80488.cljs$core$IIndexed$_nth$arity$2(null, i__80490);
var handler_81024__$1 = ((function (seq__80487,chunk__80488,count__80489,i__80490,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__80487,chunk__80488,count__80489,i__80490,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_81024__$1);


var G__81025 = seq__80487;
var G__81026 = chunk__80488;
var G__81027 = count__80489;
var G__81028 = (i__80490 + (1));
seq__80487 = G__81025;
chunk__80488 = G__81026;
count__80489 = G__81027;
i__80490 = G__81028;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__80487);
if(temp__5823__auto__){
var seq__80487__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80487__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__80487__$1);
var G__81029 = cljs.core.chunk_rest(seq__80487__$1);
var G__81030 = c__5525__auto__;
var G__81031 = cljs.core.count(c__5525__auto__);
var G__81032 = (0);
seq__80487 = G__81029;
chunk__80488 = G__81030;
count__80489 = G__81031;
i__80490 = G__81032;
continue;
} else {
var el = cljs.core.first(seq__80487__$1);
var handler_81033__$1 = ((function (seq__80487,chunk__80488,count__80489,i__80490,el,seq__80487__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__80487,chunk__80488,count__80489,i__80490,el,seq__80487__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_81033__$1);


var G__81034 = cljs.core.next(seq__80487__$1);
var G__81035 = null;
var G__81036 = (0);
var G__81037 = (0);
seq__80487 = G__81034;
chunk__80488 = G__81035;
count__80489 = G__81036;
i__80490 = G__81037;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__80508 = arguments.length;
switch (G__80508) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__80515 = cljs.core.seq(events);
var chunk__80516 = null;
var count__80517 = (0);
var i__80518 = (0);
while(true){
if((i__80518 < count__80517)){
var vec__80528 = chunk__80516.cljs$core$IIndexed$_nth$arity$2(null, i__80518);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80528,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81042 = seq__80515;
var G__81043 = chunk__80516;
var G__81044 = count__80517;
var G__81045 = (i__80518 + (1));
seq__80515 = G__81042;
chunk__80516 = G__81043;
count__80517 = G__81044;
i__80518 = G__81045;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__80515);
if(temp__5823__auto__){
var seq__80515__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80515__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__80515__$1);
var G__81046 = cljs.core.chunk_rest(seq__80515__$1);
var G__81047 = c__5525__auto__;
var G__81048 = cljs.core.count(c__5525__auto__);
var G__81049 = (0);
seq__80515 = G__81046;
chunk__80516 = G__81047;
count__80517 = G__81048;
i__80518 = G__81049;
continue;
} else {
var vec__80539 = cljs.core.first(seq__80515__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80539,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81050 = cljs.core.next(seq__80515__$1);
var G__81051 = null;
var G__81052 = (0);
var G__81053 = (0);
seq__80515 = G__81050;
chunk__80516 = G__81051;
count__80517 = G__81052;
i__80518 = G__81053;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__80544 = cljs.core.seq(styles);
var chunk__80545 = null;
var count__80546 = (0);
var i__80547 = (0);
while(true){
if((i__80547 < count__80546)){
var vec__80561 = chunk__80545.cljs$core$IIndexed$_nth$arity$2(null, i__80547);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80561,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__81057 = seq__80544;
var G__81058 = chunk__80545;
var G__81059 = count__80546;
var G__81062 = (i__80547 + (1));
seq__80544 = G__81057;
chunk__80545 = G__81058;
count__80546 = G__81059;
i__80547 = G__81062;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__80544);
if(temp__5823__auto__){
var seq__80544__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80544__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__80544__$1);
var G__81064 = cljs.core.chunk_rest(seq__80544__$1);
var G__81065 = c__5525__auto__;
var G__81066 = cljs.core.count(c__5525__auto__);
var G__81067 = (0);
seq__80544 = G__81064;
chunk__80545 = G__81065;
count__80546 = G__81066;
i__80547 = G__81067;
continue;
} else {
var vec__80566 = cljs.core.first(seq__80544__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80566,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__81068 = cljs.core.next(seq__80544__$1);
var G__81069 = null;
var G__81070 = (0);
var G__81071 = (0);
seq__80544 = G__81068;
chunk__80545 = G__81069;
count__80546 = G__81070;
i__80547 = G__81071;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__80572_81072 = key;
var G__80572_81073__$1 = (((G__80572_81072 instanceof cljs.core.Keyword))?G__80572_81072.fqn:null);
switch (G__80572_81073__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_81076 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_81076,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_81076,"aria-");
}
})())){
el.setAttribute(ks_81076,value);
} else {
(el[ks_81076] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__80586){
var map__80587 = p__80586;
var map__80587__$1 = cljs.core.__destructure_map(map__80587);
var props = map__80587__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80587__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__80588 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80588,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80588,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80588,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__80591 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__80591,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__80591;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__80596 = arguments.length;
switch (G__80596) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__80601){
var vec__80602 = p__80601;
var seq__80603 = cljs.core.seq(vec__80602);
var first__80604 = cljs.core.first(seq__80603);
var seq__80603__$1 = cljs.core.next(seq__80603);
var nn = first__80604;
var first__80604__$1 = cljs.core.first(seq__80603__$1);
var seq__80603__$2 = cljs.core.next(seq__80603__$1);
var np = first__80604__$1;
var nc = seq__80603__$2;
var node = vec__80602;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80605 = nn;
var G__80606 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__80605,G__80606) : create_fn.call(null, G__80605,G__80606));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80607 = nn;
var G__80608 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__80607,G__80608) : create_fn.call(null, G__80607,G__80608));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__80609 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80609,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80609,(1),null);
var seq__80612_81096 = cljs.core.seq(node_children);
var chunk__80613_81097 = null;
var count__80614_81098 = (0);
var i__80615_81099 = (0);
while(true){
if((i__80615_81099 < count__80614_81098)){
var child_struct_81100 = chunk__80613_81097.cljs$core$IIndexed$_nth$arity$2(null, i__80615_81099);
var children_81101 = shadow.dom.dom_node(child_struct_81100);
if(cljs.core.seq_QMARK_(children_81101)){
var seq__80636_81102 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81101));
var chunk__80638_81103 = null;
var count__80639_81104 = (0);
var i__80640_81105 = (0);
while(true){
if((i__80640_81105 < count__80639_81104)){
var child_81106 = chunk__80638_81103.cljs$core$IIndexed$_nth$arity$2(null, i__80640_81105);
if(cljs.core.truth_(child_81106)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81106);


var G__81107 = seq__80636_81102;
var G__81108 = chunk__80638_81103;
var G__81109 = count__80639_81104;
var G__81110 = (i__80640_81105 + (1));
seq__80636_81102 = G__81107;
chunk__80638_81103 = G__81108;
count__80639_81104 = G__81109;
i__80640_81105 = G__81110;
continue;
} else {
var G__81111 = seq__80636_81102;
var G__81112 = chunk__80638_81103;
var G__81113 = count__80639_81104;
var G__81114 = (i__80640_81105 + (1));
seq__80636_81102 = G__81111;
chunk__80638_81103 = G__81112;
count__80639_81104 = G__81113;
i__80640_81105 = G__81114;
continue;
}
} else {
var temp__5823__auto___81115 = cljs.core.seq(seq__80636_81102);
if(temp__5823__auto___81115){
var seq__80636_81116__$1 = temp__5823__auto___81115;
if(cljs.core.chunked_seq_QMARK_(seq__80636_81116__$1)){
var c__5525__auto___81117 = cljs.core.chunk_first(seq__80636_81116__$1);
var G__81118 = cljs.core.chunk_rest(seq__80636_81116__$1);
var G__81119 = c__5525__auto___81117;
var G__81120 = cljs.core.count(c__5525__auto___81117);
var G__81121 = (0);
seq__80636_81102 = G__81118;
chunk__80638_81103 = G__81119;
count__80639_81104 = G__81120;
i__80640_81105 = G__81121;
continue;
} else {
var child_81122 = cljs.core.first(seq__80636_81116__$1);
if(cljs.core.truth_(child_81122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81122);


var G__81123 = cljs.core.next(seq__80636_81116__$1);
var G__81124 = null;
var G__81125 = (0);
var G__81126 = (0);
seq__80636_81102 = G__81123;
chunk__80638_81103 = G__81124;
count__80639_81104 = G__81125;
i__80640_81105 = G__81126;
continue;
} else {
var G__81127 = cljs.core.next(seq__80636_81116__$1);
var G__81128 = null;
var G__81129 = (0);
var G__81130 = (0);
seq__80636_81102 = G__81127;
chunk__80638_81103 = G__81128;
count__80639_81104 = G__81129;
i__80640_81105 = G__81130;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81101);
}


var G__81131 = seq__80612_81096;
var G__81132 = chunk__80613_81097;
var G__81133 = count__80614_81098;
var G__81134 = (i__80615_81099 + (1));
seq__80612_81096 = G__81131;
chunk__80613_81097 = G__81132;
count__80614_81098 = G__81133;
i__80615_81099 = G__81134;
continue;
} else {
var temp__5823__auto___81135 = cljs.core.seq(seq__80612_81096);
if(temp__5823__auto___81135){
var seq__80612_81136__$1 = temp__5823__auto___81135;
if(cljs.core.chunked_seq_QMARK_(seq__80612_81136__$1)){
var c__5525__auto___81142 = cljs.core.chunk_first(seq__80612_81136__$1);
var G__81143 = cljs.core.chunk_rest(seq__80612_81136__$1);
var G__81144 = c__5525__auto___81142;
var G__81145 = cljs.core.count(c__5525__auto___81142);
var G__81146 = (0);
seq__80612_81096 = G__81143;
chunk__80613_81097 = G__81144;
count__80614_81098 = G__81145;
i__80615_81099 = G__81146;
continue;
} else {
var child_struct_81147 = cljs.core.first(seq__80612_81136__$1);
var children_81148 = shadow.dom.dom_node(child_struct_81147);
if(cljs.core.seq_QMARK_(children_81148)){
var seq__80642_81149 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81148));
var chunk__80644_81150 = null;
var count__80645_81151 = (0);
var i__80646_81152 = (0);
while(true){
if((i__80646_81152 < count__80645_81151)){
var child_81153 = chunk__80644_81150.cljs$core$IIndexed$_nth$arity$2(null, i__80646_81152);
if(cljs.core.truth_(child_81153)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81153);


var G__81154 = seq__80642_81149;
var G__81155 = chunk__80644_81150;
var G__81156 = count__80645_81151;
var G__81157 = (i__80646_81152 + (1));
seq__80642_81149 = G__81154;
chunk__80644_81150 = G__81155;
count__80645_81151 = G__81156;
i__80646_81152 = G__81157;
continue;
} else {
var G__81163 = seq__80642_81149;
var G__81164 = chunk__80644_81150;
var G__81165 = count__80645_81151;
var G__81166 = (i__80646_81152 + (1));
seq__80642_81149 = G__81163;
chunk__80644_81150 = G__81164;
count__80645_81151 = G__81165;
i__80646_81152 = G__81166;
continue;
}
} else {
var temp__5823__auto___81167__$1 = cljs.core.seq(seq__80642_81149);
if(temp__5823__auto___81167__$1){
var seq__80642_81168__$1 = temp__5823__auto___81167__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80642_81168__$1)){
var c__5525__auto___81169 = cljs.core.chunk_first(seq__80642_81168__$1);
var G__81170 = cljs.core.chunk_rest(seq__80642_81168__$1);
var G__81171 = c__5525__auto___81169;
var G__81172 = cljs.core.count(c__5525__auto___81169);
var G__81173 = (0);
seq__80642_81149 = G__81170;
chunk__80644_81150 = G__81171;
count__80645_81151 = G__81172;
i__80646_81152 = G__81173;
continue;
} else {
var child_81174 = cljs.core.first(seq__80642_81168__$1);
if(cljs.core.truth_(child_81174)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81174);


var G__81175 = cljs.core.next(seq__80642_81168__$1);
var G__81176 = null;
var G__81177 = (0);
var G__81178 = (0);
seq__80642_81149 = G__81175;
chunk__80644_81150 = G__81176;
count__80645_81151 = G__81177;
i__80646_81152 = G__81178;
continue;
} else {
var G__81179 = cljs.core.next(seq__80642_81168__$1);
var G__81180 = null;
var G__81181 = (0);
var G__81182 = (0);
seq__80642_81149 = G__81179;
chunk__80644_81150 = G__81180;
count__80645_81151 = G__81181;
i__80646_81152 = G__81182;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81148);
}


var G__81183 = cljs.core.next(seq__80612_81136__$1);
var G__81184 = null;
var G__81185 = (0);
var G__81186 = (0);
seq__80612_81096 = G__81183;
chunk__80613_81097 = G__81184;
count__80614_81098 = G__81185;
i__80615_81099 = G__81186;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__80668 = cljs.core.seq(node);
var chunk__80669 = null;
var count__80670 = (0);
var i__80671 = (0);
while(true){
if((i__80671 < count__80670)){
var n = chunk__80669.cljs$core$IIndexed$_nth$arity$2(null, i__80671);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__81192 = seq__80668;
var G__81193 = chunk__80669;
var G__81194 = count__80670;
var G__81195 = (i__80671 + (1));
seq__80668 = G__81192;
chunk__80669 = G__81193;
count__80670 = G__81194;
i__80671 = G__81195;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__80668);
if(temp__5823__auto__){
var seq__80668__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80668__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__80668__$1);
var G__81196 = cljs.core.chunk_rest(seq__80668__$1);
var G__81197 = c__5525__auto__;
var G__81198 = cljs.core.count(c__5525__auto__);
var G__81199 = (0);
seq__80668 = G__81196;
chunk__80669 = G__81197;
count__80670 = G__81198;
i__80671 = G__81199;
continue;
} else {
var n = cljs.core.first(seq__80668__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__81203 = cljs.core.next(seq__80668__$1);
var G__81204 = null;
var G__81205 = (0);
var G__81206 = (0);
seq__80668 = G__81203;
chunk__80669 = G__81204;
count__80670 = G__81205;
i__80671 = G__81206;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__80673 = arguments.length;
switch (G__80673) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__80675 = arguments.length;
switch (G__80675) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__80683 = arguments.length;
switch (G__80683) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___81210 = arguments.length;
var i__5727__auto___81211 = (0);
while(true){
if((i__5727__auto___81211 < len__5726__auto___81210)){
args__5732__auto__.push((arguments[i__5727__auto___81211]));

var G__81212 = (i__5727__auto___81211 + (1));
i__5727__auto___81211 = G__81212;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__80688_81213 = cljs.core.seq(nodes);
var chunk__80689_81214 = null;
var count__80690_81215 = (0);
var i__80691_81216 = (0);
while(true){
if((i__80691_81216 < count__80690_81215)){
var node_81217 = chunk__80689_81214.cljs$core$IIndexed$_nth$arity$2(null, i__80691_81216);
fragment.appendChild(shadow.dom._to_dom(node_81217));


var G__81218 = seq__80688_81213;
var G__81219 = chunk__80689_81214;
var G__81220 = count__80690_81215;
var G__81221 = (i__80691_81216 + (1));
seq__80688_81213 = G__81218;
chunk__80689_81214 = G__81219;
count__80690_81215 = G__81220;
i__80691_81216 = G__81221;
continue;
} else {
var temp__5823__auto___81222 = cljs.core.seq(seq__80688_81213);
if(temp__5823__auto___81222){
var seq__80688_81223__$1 = temp__5823__auto___81222;
if(cljs.core.chunked_seq_QMARK_(seq__80688_81223__$1)){
var c__5525__auto___81224 = cljs.core.chunk_first(seq__80688_81223__$1);
var G__81227 = cljs.core.chunk_rest(seq__80688_81223__$1);
var G__81228 = c__5525__auto___81224;
var G__81229 = cljs.core.count(c__5525__auto___81224);
var G__81230 = (0);
seq__80688_81213 = G__81227;
chunk__80689_81214 = G__81228;
count__80690_81215 = G__81229;
i__80691_81216 = G__81230;
continue;
} else {
var node_81231 = cljs.core.first(seq__80688_81223__$1);
fragment.appendChild(shadow.dom._to_dom(node_81231));


var G__81232 = cljs.core.next(seq__80688_81223__$1);
var G__81233 = null;
var G__81234 = (0);
var G__81235 = (0);
seq__80688_81213 = G__81232;
chunk__80689_81214 = G__81233;
count__80690_81215 = G__81234;
i__80691_81216 = G__81235;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq80687){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80687));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__80693_81236 = cljs.core.seq(scripts);
var chunk__80694_81237 = null;
var count__80695_81238 = (0);
var i__80696_81239 = (0);
while(true){
if((i__80696_81239 < count__80695_81238)){
var vec__80709_81240 = chunk__80694_81237.cljs$core$IIndexed$_nth$arity$2(null, i__80696_81239);
var script_tag_81241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80709_81240,(0),null);
var script_body_81242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80709_81240,(1),null);
eval(script_body_81242);


var G__81244 = seq__80693_81236;
var G__81245 = chunk__80694_81237;
var G__81246 = count__80695_81238;
var G__81247 = (i__80696_81239 + (1));
seq__80693_81236 = G__81244;
chunk__80694_81237 = G__81245;
count__80695_81238 = G__81246;
i__80696_81239 = G__81247;
continue;
} else {
var temp__5823__auto___81248 = cljs.core.seq(seq__80693_81236);
if(temp__5823__auto___81248){
var seq__80693_81249__$1 = temp__5823__auto___81248;
if(cljs.core.chunked_seq_QMARK_(seq__80693_81249__$1)){
var c__5525__auto___81250 = cljs.core.chunk_first(seq__80693_81249__$1);
var G__81252 = cljs.core.chunk_rest(seq__80693_81249__$1);
var G__81253 = c__5525__auto___81250;
var G__81254 = cljs.core.count(c__5525__auto___81250);
var G__81255 = (0);
seq__80693_81236 = G__81252;
chunk__80694_81237 = G__81253;
count__80695_81238 = G__81254;
i__80696_81239 = G__81255;
continue;
} else {
var vec__80712_81256 = cljs.core.first(seq__80693_81249__$1);
var script_tag_81257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80712_81256,(0),null);
var script_body_81258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80712_81256,(1),null);
eval(script_body_81258);


var G__81259 = cljs.core.next(seq__80693_81249__$1);
var G__81260 = null;
var G__81261 = (0);
var G__81262 = (0);
seq__80693_81236 = G__81259;
chunk__80694_81237 = G__81260;
count__80695_81238 = G__81261;
i__80696_81239 = G__81262;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__80715){
var vec__80716 = p__80715;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80716,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80716,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__80724 = arguments.length;
switch (G__80724) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__80728 = cljs.core.seq(style_keys);
var chunk__80729 = null;
var count__80730 = (0);
var i__80731 = (0);
while(true){
if((i__80731 < count__80730)){
var it = chunk__80729.cljs$core$IIndexed$_nth$arity$2(null, i__80731);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81267 = seq__80728;
var G__81268 = chunk__80729;
var G__81269 = count__80730;
var G__81270 = (i__80731 + (1));
seq__80728 = G__81267;
chunk__80729 = G__81268;
count__80730 = G__81269;
i__80731 = G__81270;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__80728);
if(temp__5823__auto__){
var seq__80728__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80728__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__80728__$1);
var G__81271 = cljs.core.chunk_rest(seq__80728__$1);
var G__81272 = c__5525__auto__;
var G__81273 = cljs.core.count(c__5525__auto__);
var G__81274 = (0);
seq__80728 = G__81271;
chunk__80729 = G__81272;
count__80730 = G__81273;
i__80731 = G__81274;
continue;
} else {
var it = cljs.core.first(seq__80728__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81275 = cljs.core.next(seq__80728__$1);
var G__81276 = null;
var G__81277 = (0);
var G__81278 = (0);
seq__80728 = G__81275;
chunk__80729 = G__81276;
count__80730 = G__81277;
i__80731 = G__81278;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k80736,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__80743 = k80736;
var G__80743__$1 = (((G__80743 instanceof cljs.core.Keyword))?G__80743.fqn:null);
switch (G__80743__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k80736,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__80750){
var vec__80751 = p__80750;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80751,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80751,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80735){
var self__ = this;
var G__80735__$1 = this;
return (new cljs.core.RecordIter((0),G__80735__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this80737,other80738){
var self__ = this;
var this80737__$1 = this;
return (((!((other80738 == null)))) && ((((this80737__$1.constructor === other80738.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80737__$1.x,other80738.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80737__$1.y,other80738.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80737__$1.__extmap,other80738.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k80736){
var self__ = this;
var this__5307__auto____$1 = this;
var G__80759 = k80736;
var G__80759__$1 = (((G__80759 instanceof cljs.core.Keyword))?G__80759.fqn:null);
switch (G__80759__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k80736);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__80735){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__80763 = cljs.core.keyword_identical_QMARK_;
var expr__80764 = k__5309__auto__;
if(cljs.core.truth_((pred__80763.cljs$core$IFn$_invoke$arity$2 ? pred__80763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__80764) : pred__80763.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__80764)))){
return (new shadow.dom.Coordinate(G__80735,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80763.cljs$core$IFn$_invoke$arity$2 ? pred__80763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__80764) : pred__80763.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__80764)))){
return (new shadow.dom.Coordinate(self__.x,G__80735,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__80735),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__80735){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__80735,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__80742){
var extmap__5342__auto__ = (function (){var G__80769 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80742,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__80742)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__80769);
} else {
return G__80769;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__80742),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__80742),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k80774,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__80781 = k80774;
var G__80781__$1 = (((G__80781 instanceof cljs.core.Keyword))?G__80781.fqn:null);
switch (G__80781__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k80774,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__80784){
var vec__80785 = p__80784;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80785,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80785,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80773){
var self__ = this;
var G__80773__$1 = this;
return (new cljs.core.RecordIter((0),G__80773__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this80775,other80776){
var self__ = this;
var this80775__$1 = this;
return (((!((other80776 == null)))) && ((((this80775__$1.constructor === other80776.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80775__$1.w,other80776.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80775__$1.h,other80776.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80775__$1.__extmap,other80776.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k80774){
var self__ = this;
var this__5307__auto____$1 = this;
var G__80789 = k80774;
var G__80789__$1 = (((G__80789 instanceof cljs.core.Keyword))?G__80789.fqn:null);
switch (G__80789__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k80774);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__80773){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__80793 = cljs.core.keyword_identical_QMARK_;
var expr__80794 = k__5309__auto__;
if(cljs.core.truth_((pred__80793.cljs$core$IFn$_invoke$arity$2 ? pred__80793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__80794) : pred__80793.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__80794)))){
return (new shadow.dom.Size(G__80773,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80793.cljs$core$IFn$_invoke$arity$2 ? pred__80793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__80794) : pred__80793.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__80794)))){
return (new shadow.dom.Size(self__.w,G__80773,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__80773),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__80773){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__80773,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__80777){
var extmap__5342__auto__ = (function (){var G__80798 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80777,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__80777)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__80798);
} else {
return G__80798;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__80777),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__80777),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__81307 = (i + (1));
var G__81308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__81307;
ret = G__81308;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__80810){
var vec__80811 = p__80810;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80811,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__80815 = arguments.length;
switch (G__80815) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__81310 = ps;
var G__81311 = (i + (1));
el__$1 = G__81310;
i = G__81311;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__80837 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80837,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80837,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80837,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__80844_81312 = cljs.core.seq(props);
var chunk__80845_81313 = null;
var count__80846_81314 = (0);
var i__80847_81315 = (0);
while(true){
if((i__80847_81315 < count__80846_81314)){
var vec__80868_81316 = chunk__80845_81313.cljs$core$IIndexed$_nth$arity$2(null, i__80847_81315);
var k_81317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80868_81316,(0),null);
var v_81318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80868_81316,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_81317);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81317),v_81318);


var G__81319 = seq__80844_81312;
var G__81320 = chunk__80845_81313;
var G__81321 = count__80846_81314;
var G__81322 = (i__80847_81315 + (1));
seq__80844_81312 = G__81319;
chunk__80845_81313 = G__81320;
count__80846_81314 = G__81321;
i__80847_81315 = G__81322;
continue;
} else {
var temp__5823__auto___81323 = cljs.core.seq(seq__80844_81312);
if(temp__5823__auto___81323){
var seq__80844_81324__$1 = temp__5823__auto___81323;
if(cljs.core.chunked_seq_QMARK_(seq__80844_81324__$1)){
var c__5525__auto___81325 = cljs.core.chunk_first(seq__80844_81324__$1);
var G__81326 = cljs.core.chunk_rest(seq__80844_81324__$1);
var G__81327 = c__5525__auto___81325;
var G__81328 = cljs.core.count(c__5525__auto___81325);
var G__81329 = (0);
seq__80844_81312 = G__81326;
chunk__80845_81313 = G__81327;
count__80846_81314 = G__81328;
i__80847_81315 = G__81329;
continue;
} else {
var vec__80871_81330 = cljs.core.first(seq__80844_81324__$1);
var k_81331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80871_81330,(0),null);
var v_81332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80871_81330,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_81331);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81331),v_81332);


var G__81333 = cljs.core.next(seq__80844_81324__$1);
var G__81334 = null;
var G__81335 = (0);
var G__81336 = (0);
seq__80844_81312 = G__81333;
chunk__80845_81313 = G__81334;
count__80846_81314 = G__81335;
i__80847_81315 = G__81336;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__80875 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80875,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80875,(1),null);
var seq__80878_81337 = cljs.core.seq(node_children);
var chunk__80880_81338 = null;
var count__80881_81339 = (0);
var i__80882_81340 = (0);
while(true){
if((i__80882_81340 < count__80881_81339)){
var child_struct_81341 = chunk__80880_81338.cljs$core$IIndexed$_nth$arity$2(null, i__80882_81340);
if((!((child_struct_81341 == null)))){
if(typeof child_struct_81341 === 'string'){
var text_81342 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81342),child_struct_81341].join(''));
} else {
var children_81343 = shadow.dom.svg_node(child_struct_81341);
if(cljs.core.seq_QMARK_(children_81343)){
var seq__80902_81344 = cljs.core.seq(children_81343);
var chunk__80904_81345 = null;
var count__80905_81346 = (0);
var i__80906_81347 = (0);
while(true){
if((i__80906_81347 < count__80905_81346)){
var child_81348 = chunk__80904_81345.cljs$core$IIndexed$_nth$arity$2(null, i__80906_81347);
if(cljs.core.truth_(child_81348)){
node.appendChild(child_81348);


var G__81350 = seq__80902_81344;
var G__81351 = chunk__80904_81345;
var G__81352 = count__80905_81346;
var G__81353 = (i__80906_81347 + (1));
seq__80902_81344 = G__81350;
chunk__80904_81345 = G__81351;
count__80905_81346 = G__81352;
i__80906_81347 = G__81353;
continue;
} else {
var G__81354 = seq__80902_81344;
var G__81355 = chunk__80904_81345;
var G__81356 = count__80905_81346;
var G__81357 = (i__80906_81347 + (1));
seq__80902_81344 = G__81354;
chunk__80904_81345 = G__81355;
count__80905_81346 = G__81356;
i__80906_81347 = G__81357;
continue;
}
} else {
var temp__5823__auto___81358 = cljs.core.seq(seq__80902_81344);
if(temp__5823__auto___81358){
var seq__80902_81359__$1 = temp__5823__auto___81358;
if(cljs.core.chunked_seq_QMARK_(seq__80902_81359__$1)){
var c__5525__auto___81360 = cljs.core.chunk_first(seq__80902_81359__$1);
var G__81361 = cljs.core.chunk_rest(seq__80902_81359__$1);
var G__81362 = c__5525__auto___81360;
var G__81363 = cljs.core.count(c__5525__auto___81360);
var G__81364 = (0);
seq__80902_81344 = G__81361;
chunk__80904_81345 = G__81362;
count__80905_81346 = G__81363;
i__80906_81347 = G__81364;
continue;
} else {
var child_81365 = cljs.core.first(seq__80902_81359__$1);
if(cljs.core.truth_(child_81365)){
node.appendChild(child_81365);


var G__81366 = cljs.core.next(seq__80902_81359__$1);
var G__81367 = null;
var G__81368 = (0);
var G__81369 = (0);
seq__80902_81344 = G__81366;
chunk__80904_81345 = G__81367;
count__80905_81346 = G__81368;
i__80906_81347 = G__81369;
continue;
} else {
var G__81370 = cljs.core.next(seq__80902_81359__$1);
var G__81371 = null;
var G__81372 = (0);
var G__81373 = (0);
seq__80902_81344 = G__81370;
chunk__80904_81345 = G__81371;
count__80905_81346 = G__81372;
i__80906_81347 = G__81373;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81343);
}
}


var G__81374 = seq__80878_81337;
var G__81375 = chunk__80880_81338;
var G__81376 = count__80881_81339;
var G__81377 = (i__80882_81340 + (1));
seq__80878_81337 = G__81374;
chunk__80880_81338 = G__81375;
count__80881_81339 = G__81376;
i__80882_81340 = G__81377;
continue;
} else {
var G__81378 = seq__80878_81337;
var G__81379 = chunk__80880_81338;
var G__81380 = count__80881_81339;
var G__81381 = (i__80882_81340 + (1));
seq__80878_81337 = G__81378;
chunk__80880_81338 = G__81379;
count__80881_81339 = G__81380;
i__80882_81340 = G__81381;
continue;
}
} else {
var temp__5823__auto___81382 = cljs.core.seq(seq__80878_81337);
if(temp__5823__auto___81382){
var seq__80878_81383__$1 = temp__5823__auto___81382;
if(cljs.core.chunked_seq_QMARK_(seq__80878_81383__$1)){
var c__5525__auto___81384 = cljs.core.chunk_first(seq__80878_81383__$1);
var G__81385 = cljs.core.chunk_rest(seq__80878_81383__$1);
var G__81386 = c__5525__auto___81384;
var G__81387 = cljs.core.count(c__5525__auto___81384);
var G__81388 = (0);
seq__80878_81337 = G__81385;
chunk__80880_81338 = G__81386;
count__80881_81339 = G__81387;
i__80882_81340 = G__81388;
continue;
} else {
var child_struct_81389 = cljs.core.first(seq__80878_81383__$1);
if((!((child_struct_81389 == null)))){
if(typeof child_struct_81389 === 'string'){
var text_81390 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81390),child_struct_81389].join(''));
} else {
var children_81391 = shadow.dom.svg_node(child_struct_81389);
if(cljs.core.seq_QMARK_(children_81391)){
var seq__80915_81392 = cljs.core.seq(children_81391);
var chunk__80917_81393 = null;
var count__80918_81394 = (0);
var i__80919_81395 = (0);
while(true){
if((i__80919_81395 < count__80918_81394)){
var child_81399 = chunk__80917_81393.cljs$core$IIndexed$_nth$arity$2(null, i__80919_81395);
if(cljs.core.truth_(child_81399)){
node.appendChild(child_81399);


var G__81400 = seq__80915_81392;
var G__81401 = chunk__80917_81393;
var G__81402 = count__80918_81394;
var G__81403 = (i__80919_81395 + (1));
seq__80915_81392 = G__81400;
chunk__80917_81393 = G__81401;
count__80918_81394 = G__81402;
i__80919_81395 = G__81403;
continue;
} else {
var G__81404 = seq__80915_81392;
var G__81405 = chunk__80917_81393;
var G__81406 = count__80918_81394;
var G__81407 = (i__80919_81395 + (1));
seq__80915_81392 = G__81404;
chunk__80917_81393 = G__81405;
count__80918_81394 = G__81406;
i__80919_81395 = G__81407;
continue;
}
} else {
var temp__5823__auto___81408__$1 = cljs.core.seq(seq__80915_81392);
if(temp__5823__auto___81408__$1){
var seq__80915_81409__$1 = temp__5823__auto___81408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80915_81409__$1)){
var c__5525__auto___81410 = cljs.core.chunk_first(seq__80915_81409__$1);
var G__81411 = cljs.core.chunk_rest(seq__80915_81409__$1);
var G__81412 = c__5525__auto___81410;
var G__81413 = cljs.core.count(c__5525__auto___81410);
var G__81414 = (0);
seq__80915_81392 = G__81411;
chunk__80917_81393 = G__81412;
count__80918_81394 = G__81413;
i__80919_81395 = G__81414;
continue;
} else {
var child_81415 = cljs.core.first(seq__80915_81409__$1);
if(cljs.core.truth_(child_81415)){
node.appendChild(child_81415);


var G__81416 = cljs.core.next(seq__80915_81409__$1);
var G__81417 = null;
var G__81418 = (0);
var G__81419 = (0);
seq__80915_81392 = G__81416;
chunk__80917_81393 = G__81417;
count__80918_81394 = G__81418;
i__80919_81395 = G__81419;
continue;
} else {
var G__81420 = cljs.core.next(seq__80915_81409__$1);
var G__81421 = null;
var G__81422 = (0);
var G__81423 = (0);
seq__80915_81392 = G__81420;
chunk__80917_81393 = G__81421;
count__80918_81394 = G__81422;
i__80919_81395 = G__81423;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81391);
}
}


var G__81424 = cljs.core.next(seq__80878_81383__$1);
var G__81425 = null;
var G__81426 = (0);
var G__81427 = (0);
seq__80878_81337 = G__81424;
chunk__80880_81338 = G__81425;
count__80881_81339 = G__81426;
i__80882_81340 = G__81427;
continue;
} else {
var G__81428 = cljs.core.next(seq__80878_81383__$1);
var G__81429 = null;
var G__81430 = (0);
var G__81431 = (0);
seq__80878_81337 = G__81428;
chunk__80880_81338 = G__81429;
count__80881_81339 = G__81430;
i__80882_81340 = G__81431;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___81432 = arguments.length;
var i__5727__auto___81433 = (0);
while(true){
if((i__5727__auto___81433 < len__5726__auto___81432)){
args__5732__auto__.push((arguments[i__5727__auto___81433]));

var G__81434 = (i__5727__auto___81433 + (1));
i__5727__auto___81433 = G__81434;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq80987){
var G__80988 = cljs.core.first(seq80987);
var seq80987__$1 = cljs.core.next(seq80987);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80988,seq80987__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
