goog.provide('reitit.frontend.history');

/**
 * @interface
 */
reitit.frontend.history.History = function(){};

var reitit$frontend$history$History$_init$dyn_98684 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.frontend.history._init[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.frontend.history._init["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("History.-init",this$);
}
}
});
/**
 * Create event listeners
 */
reitit.frontend.history._init = (function reitit$frontend$history$_init(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_init$arity$1 == null)))))){
return this$.reitit$frontend$history$History$_init$arity$1(this$);
} else {
return reitit$frontend$history$History$_init$dyn_98684(this$);
}
});

var reitit$frontend$history$History$_stop$dyn_98686 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.frontend.history._stop[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.frontend.history._stop["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("History.-stop",this$);
}
}
});
/**
 * Remove event listeners
 */
reitit.frontend.history._stop = (function reitit$frontend$history$_stop(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_stop$arity$1 == null)))))){
return this$.reitit$frontend$history$History$_stop$arity$1(this$);
} else {
return reitit$frontend$history$History$_stop$dyn_98686(this$);
}
});

var reitit$frontend$history$History$_on_navigate$dyn_98687 = (function (this$,path){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.frontend.history._on_navigate[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5351__auto__.call(null, this$,path));
} else {
var m__5349__auto__ = (reitit.frontend.history._on_navigate["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5349__auto__.call(null, this$,path));
} else {
throw cljs.core.missing_protocol("History.-on-navigate",this$);
}
}
});
/**
 * Find a match for current routing path and call on-navigate callback
 */
reitit.frontend.history._on_navigate = (function reitit$frontend$history$_on_navigate(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_on_navigate$arity$2 == null)))))){
return this$.reitit$frontend$history$History$_on_navigate$arity$2(this$,path);
} else {
return reitit$frontend$history$History$_on_navigate$dyn_98687(this$,path);
}
});

var reitit$frontend$history$History$_get_path$dyn_98688 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.frontend.history._get_path[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.frontend.history._get_path["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("History.-get-path",this$);
}
}
});
/**
 * Get the current routing path, including query string and fragment
 */
reitit.frontend.history._get_path = (function reitit$frontend$history$_get_path(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_get_path$arity$1 == null)))))){
return this$.reitit$frontend$history$History$_get_path$arity$1(this$);
} else {
return reitit$frontend$history$History$_get_path$dyn_98688(this$);
}
});

var reitit$frontend$history$History$_href$dyn_98689 = (function (this$,path){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.frontend.history._href[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5351__auto__.call(null, this$,path));
} else {
var m__5349__auto__ = (reitit.frontend.history._href["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__5349__auto__.call(null, this$,path));
} else {
throw cljs.core.missing_protocol("History.-href",this$);
}
}
});
/**
 * Converts given routing path to browser location
 */
reitit.frontend.history._href = (function reitit$frontend$history$_href(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_href$arity$2 == null)))))){
return this$.reitit$frontend$history$History$_href$arity$2(this$,path);
} else {
return reitit$frontend$history$History$_href$dyn_98689(this$,path);
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
 * @implements {reitit.frontend.history.History}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.frontend.history.FragmentHistory = (function (on_navigate,router,popstate_listener,hashchange_listener,last_fragment,__meta,__extmap,__hash){
this.on_navigate = on_navigate;
this.router = router;
this.popstate_listener = popstate_listener;
this.hashchange_listener = hashchange_listener;
this.last_fragment = last_fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k98227,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__98243 = k98227;
var G__98243__$1 = (((G__98243 instanceof cljs.core.Keyword))?G__98243.fqn:null);
switch (G__98243__$1) {
case "on-navigate":
return self__.on_navigate;

break;
case "router":
return self__.router;

break;
case "popstate-listener":
return self__.popstate_listener;

break;
case "hashchange-listener":
return self__.hashchange_listener;

break;
case "last-fragment":
return self__.last_fragment;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k98227,else__5303__auto__);

}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__98265){
var vec__98271 = p__98265;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98271,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98271,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.frontend.history.FragmentHistory{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),self__.popstate_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),self__.last_fragment],null))], null),self__.__extmap));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__98226){
var self__ = this;
var G__98226__$1 = this;
return (new cljs.core.RecordIter((0),G__98226__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (354327177 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this98229,other98230){
var self__ = this;
var this98229__$1 = this;
return (((!((other98230 == null)))) && ((((this98229__$1.constructor === other98230.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98229__$1.on_navigate,other98230.on_navigate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98229__$1.router,other98230.router)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98229__$1.popstate_listener,other98230.popstate_listener)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98229__$1.hashchange_listener,other98230.hashchange_listener)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98229__$1.last_fragment,other98230.last_fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98229__$1.__extmap,other98230.__extmap)))))))))))))));
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var last_fragment__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var this$__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),last_fragment__$1);
var handler = (function (e){
var path = reitit.frontend.history._get_path(this$__$2);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.events.EventType.POPSTATE,e.type)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_fragment__$1),path)))){
return reitit.frontend.history._on_navigate(this$__$2,path);
} else {
return null;
}
});
var this$__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$2,new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),goog.events.listen(window,goog.events.EventType.POPSTATE,handler,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),goog.events.listen(window,goog.events.EventType.HASHCHANGE,handler,false)], 0));
reitit.frontend.history._on_navigate(this$__$3,reitit.frontend.history._get_path(this$__$3));

return this$__$3;
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.unlistenByKey(self__.popstate_listener);

goog.events.unlistenByKey(self__.hashchange_listener);

return null;
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_on_navigate$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(self__.last_fragment,path);

var G__98400 = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3(self__.router,path,this$__$1);
var G__98401 = this$__$1;
return (self__.on_navigate.cljs$core$IFn$_invoke$arity$2 ? self__.on_navigate.cljs$core$IFn$_invoke$arity$2(G__98400,G__98401) : self__.on_navigate.call(null, G__98400,G__98401));
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_get_path$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var fragment = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.hash,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",fragment)){
return "/";
} else {
return fragment;
}
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_href$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(path)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return null;
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),null,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k98227){
var self__ = this;
var this__5307__auto____$1 = this;
var G__98424 = k98227;
var G__98424__$1 = (((G__98424 instanceof cljs.core.Keyword))?G__98424.fqn:null);
switch (G__98424__$1) {
case "on-navigate":
case "router":
case "popstate-listener":
case "hashchange-listener":
case "last-fragment":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k98227);

}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__98226){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__98431 = cljs.core.keyword_identical_QMARK_;
var expr__98432 = k__5309__auto__;
if(cljs.core.truth_((pred__98431.cljs$core$IFn$_invoke$arity$2 ? pred__98431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),expr__98432) : pred__98431.call(null, new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),expr__98432)))){
return (new reitit.frontend.history.FragmentHistory(G__98226,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98431.cljs$core$IFn$_invoke$arity$2 ? pred__98431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"router","router",1091916230),expr__98432) : pred__98431.call(null, new cljs.core.Keyword(null,"router","router",1091916230),expr__98432)))){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,G__98226,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98431.cljs$core$IFn$_invoke$arity$2 ? pred__98431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),expr__98432) : pred__98431.call(null, new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),expr__98432)))){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,G__98226,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98431.cljs$core$IFn$_invoke$arity$2 ? pred__98431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),expr__98432) : pred__98431.call(null, new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),expr__98432)))){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,G__98226,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98431.cljs$core$IFn$_invoke$arity$2 ? pred__98431.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),expr__98432) : pred__98431.call(null, new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),expr__98432)))){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,G__98226,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__98226),null));
}
}
}
}
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),self__.popstate_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),self__.last_fragment,null))], null),self__.__extmap));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__98226){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,G__98226,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.frontend.history.FragmentHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"popstate-listener","popstate-listener",-1847491297,null),new cljs.core.Symbol(null,"hashchange-listener","hashchange-listener",405542726,null),new cljs.core.Symbol(null,"last-fragment","last-fragment",720701354,null)], null);
}));

(reitit.frontend.history.FragmentHistory.cljs$lang$type = true);

(reitit.frontend.history.FragmentHistory.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.frontend.history/FragmentHistory",null,(1),null));
}));

(reitit.frontend.history.FragmentHistory.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.frontend.history/FragmentHistory");
}));

/**
 * Positional factory function for reitit.frontend.history/FragmentHistory.
 */
reitit.frontend.history.__GT_FragmentHistory = (function reitit$frontend$history$__GT_FragmentHistory(on_navigate,router,popstate_listener,hashchange_listener,last_fragment){
return (new reitit.frontend.history.FragmentHistory(on_navigate,router,popstate_listener,hashchange_listener,last_fragment,null,null,null));
});

/**
 * Factory function for reitit.frontend.history/FragmentHistory, taking a map of keywords to field values.
 */
reitit.frontend.history.map__GT_FragmentHistory = (function reitit$frontend$history$map__GT_FragmentHistory(G__98235){
var extmap__5342__auto__ = (function (){var G__98476 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__98235,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173)], 0));
if(cljs.core.record_QMARK_(G__98235)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__98476);
} else {
return G__98476;
}
})();
return (new reitit.frontend.history.FragmentHistory(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908).cljs$core$IFn$_invoke$arity$1(G__98235),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__98235),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472).cljs$core$IFn$_invoke$arity$1(G__98235),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(G__98235),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173).cljs$core$IFn$_invoke$arity$1(G__98235),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

reitit.frontend.history.closest_by_tag = (function reitit$frontend$history$closest_by_tag(el,tag){
var tag__$1 = tag.toUpperCase();
var el__$1 = el;
while(true){
if(cljs.core.truth_(el__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag__$1,el__$1.nodeName)){
return el__$1;
} else {
var G__98701 = el__$1.parentNode;
el__$1 = G__98701;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Read event's target from composed path to get shadow dom working,
 *   fallback to target property if not available
 */
reitit.frontend.history.event_target = (function reitit$frontend$history$event_target(event){
var original_event = event.getBrowserEvent();
if((!((original_event.composedPath == null)))){
return (original_event.composedPath()[(0)]);
} else {
return event.target;
}
});
/**
 * Precicate to check if the anchor click event default action
 *   should be ignored. This logic will ignore the event
 *   if anchor href matches the route tree, and in this case
 *   the page location is updated using History API.
 */
reitit.frontend.history.ignore_anchor_click_QMARK_ = (function reitit$frontend$history$ignore_anchor_click_QMARK_(router,e,el,uri){
var current_domain = (((typeof location !== 'undefined'))?goog.Uri.parse(location).getDomain():null);
var and__5000__auto__ = ((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_domain,uri.getDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not(e.altKey);
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core.not(e.ctrlKey);
if(and__5000__auto____$2){
var and__5000__auto____$3 = cljs.core.not(e.metaKey);
if(and__5000__auto____$3){
var and__5000__auto____$4 = cljs.core.not(e.shiftKey);
if(and__5000__auto____$4){
var and__5000__auto____$5 = ((cljs.core.not(el.hasAttribute("target"))) || (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null),el.getAttribute("target"))));
if(and__5000__auto____$5){
var and__5000__auto____$6 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button);
if(and__5000__auto____$6){
var and__5000__auto____$7 = cljs.core.not(el.isContentEditable);
if(and__5000__auto____$7){
return reitit.core.match_by_path(router,uri.getPath());
} else {
return and__5000__auto____$7;
}
} else {
return and__5000__auto____$6;
}
} else {
return and__5000__auto____$5;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
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
 * @implements {reitit.frontend.history.History}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.frontend.history.Html5History = (function (on_navigate,router,listen_key,click_listen_key,__meta,__extmap,__hash){
this.on_navigate = on_navigate;
this.router = router;
this.listen_key = listen_key;
this.click_listen_key = click_listen_key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.frontend.history.Html5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k98526,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__98536 = k98526;
var G__98536__$1 = (((G__98536 instanceof cljs.core.Keyword))?G__98536.fqn:null);
switch (G__98536__$1) {
case "on-navigate":
return self__.on_navigate;

break;
case "router":
return self__.router;

break;
case "listen-key":
return self__.listen_key;

break;
case "click-listen-key":
return self__.click_listen_key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k98526,else__5303__auto__);

}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__98540){
var vec__98541 = p__98540;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98541,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98541,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.frontend.history.Html5History{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listen-key","listen-key",51973686),self__.listen_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),self__.click_listen_key],null))], null),self__.__extmap));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__98525){
var self__ = this;
var G__98525__$1 = this;
return (new cljs.core.RecordIter((0),G__98525__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"listen-key","listen-key",51973686),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1654764186 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this98527,other98528){
var self__ = this;
var this98527__$1 = this;
return (((!((other98528 == null)))) && ((((this98527__$1.constructor === other98528.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98527__$1.on_navigate,other98528.on_navigate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98527__$1.router,other98528.router)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98527__$1.listen_key,other98528.listen_key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98527__$1.click_listen_key,other98528.click_listen_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this98527__$1.__extmap,other98528.__extmap)))))))))))));
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = (function (e){
return this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null, this$__$1.reitit$frontend$history$History$_get_path$arity$1(null, ));
});
var ignore_anchor_click_predicate = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"ignore-anchor-click?","ignore-anchor-click?",-186007337).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reitit.frontend.history.ignore_anchor_click_QMARK_;
}
})();
var ignore_anchor_click = (function (e){
var temp__5823__auto__ = reitit.frontend.history.closest_by_tag(reitit.frontend.history.event_target(e),"a");
if(cljs.core.truth_(temp__5823__auto__)){
var el = temp__5823__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((ignore_anchor_click_predicate.cljs$core$IFn$_invoke$arity$4 ? ignore_anchor_click_predicate.cljs$core$IFn$_invoke$arity$4(self__.router,e,el,uri) : ignore_anchor_click_predicate.call(null, self__.router,e,el,uri)))){
e.preventDefault();

var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(cljs.core.truth_(uri.hasQuery())?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getQuery())].join(''):null),(cljs.core.truth_(uri.hasFragment())?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getFragment())].join(''):null)].join('');
window.history.pushState(null,"",path);

return this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null, path);
} else {
return null;
}
} else {
return null;
}
});
var this$__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"listen-key","listen-key",51973686),goog.events.listen(window,goog.events.EventType.POPSTATE,handler,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),goog.events.listen(document,goog.events.EventType.CLICK,ignore_anchor_click)], 0));
reitit.frontend.history._on_navigate(this$__$2,reitit.frontend.history._get_path(this$__$2));

return this$__$2;
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_on_navigate$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var G__98567 = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$3(self__.router,path,this$__$1);
var G__98568 = this$__$1;
return (self__.on_navigate.cljs$core$IFn$_invoke$arity$2 ? self__.on_navigate.cljs$core$IFn$_invoke$arity$2(G__98567,G__98568) : self__.on_navigate.call(null, G__98567,G__98568));
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.unlistenByKey(self__.listen_key);

goog.events.unlistenByKey(self__.click_listen_key);

return null;
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_get_path$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.hash)].join('');
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_href$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return path;
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"listen-key","listen-key",51973686),null,new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),null,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k98526){
var self__ = this;
var this__5307__auto____$1 = this;
var G__98575 = k98526;
var G__98575__$1 = (((G__98575 instanceof cljs.core.Keyword))?G__98575.fqn:null);
switch (G__98575__$1) {
case "on-navigate":
case "router":
case "listen-key":
case "click-listen-key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k98526);

}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__98525){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__98588 = cljs.core.keyword_identical_QMARK_;
var expr__98589 = k__5309__auto__;
if(cljs.core.truth_((pred__98588.cljs$core$IFn$_invoke$arity$2 ? pred__98588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),expr__98589) : pred__98588.call(null, new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),expr__98589)))){
return (new reitit.frontend.history.Html5History(G__98525,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98588.cljs$core$IFn$_invoke$arity$2 ? pred__98588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"router","router",1091916230),expr__98589) : pred__98588.call(null, new cljs.core.Keyword(null,"router","router",1091916230),expr__98589)))){
return (new reitit.frontend.history.Html5History(self__.on_navigate,G__98525,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98588.cljs$core$IFn$_invoke$arity$2 ? pred__98588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"listen-key","listen-key",51973686),expr__98589) : pred__98588.call(null, new cljs.core.Keyword(null,"listen-key","listen-key",51973686),expr__98589)))){
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,G__98525,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__98588.cljs$core$IFn$_invoke$arity$2 ? pred__98588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),expr__98589) : pred__98588.call(null, new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),expr__98589)))){
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,G__98525,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__98525),null));
}
}
}
}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listen-key","listen-key",51973686),self__.listen_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),self__.click_listen_key,null))], null),self__.__extmap));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__98525){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,G__98525,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.frontend.history.Html5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"listen-key","listen-key",1692505213,null),new cljs.core.Symbol(null,"click-listen-key","click-listen-key",-2012194814,null)], null);
}));

(reitit.frontend.history.Html5History.cljs$lang$type = true);

(reitit.frontend.history.Html5History.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.frontend.history/Html5History",null,(1),null));
}));

(reitit.frontend.history.Html5History.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.frontend.history/Html5History");
}));

/**
 * Positional factory function for reitit.frontend.history/Html5History.
 */
reitit.frontend.history.__GT_Html5History = (function reitit$frontend$history$__GT_Html5History(on_navigate,router,listen_key,click_listen_key){
return (new reitit.frontend.history.Html5History(on_navigate,router,listen_key,click_listen_key,null,null,null));
});

/**
 * Factory function for reitit.frontend.history/Html5History, taking a map of keywords to field values.
 */
reitit.frontend.history.map__GT_Html5History = (function reitit$frontend$history$map__GT_Html5History(G__98529){
var extmap__5342__auto__ = (function (){var G__98611 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__98529,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"listen-key","listen-key",51973686),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955)], 0));
if(cljs.core.record_QMARK_(G__98529)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__98611);
} else {
return G__98611;
}
})();
return (new reitit.frontend.history.Html5History(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908).cljs$core$IFn$_invoke$arity$1(G__98529),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__98529),new cljs.core.Keyword(null,"listen-key","listen-key",51973686).cljs$core$IFn$_invoke$arity$1(G__98529),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955).cljs$core$IFn$_invoke$arity$1(G__98529),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * This registers event listeners on HTML5 history and hashchange events.
 * 
 *   Returns History object.
 * 
 *   When using with development workflow like Figwheel, remember to
 *   remove listeners using stop! call before calling start! again.
 * 
 *   Parameters:
 *   - router         The Reitit router.
 *   - on-navigate    Function to be called when route changes. Takes two parameters, ´match´ and ´history´ object.
 * 
 *   Options:
 *   - :use-fragment  (default true) If true, onhashchange and location hash are used to store current route.
 * 
 *   Options (Html5History):
 *   - :ignore-anchor-click?  Function (router, event, anchor element, uri) which will be called to
 *                         check if the anchor click event should be ignored.
 *                         To extend built-in check, you can call `reitit.frontend.history/ignore-anchor-click?`
 *                         function, which will ignore clicks if the href matches route tree.
 */
reitit.frontend.history.start_BANG_ = (function reitit$frontend$history$start_BANG_(var_args){
var G__98618 = arguments.length;
switch (G__98618) {
case 2:
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,on_navigate){
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3(router,on_navigate,null);
}));

(reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,on_navigate,p__98624){
var map__98625 = p__98624;
var map__98625__$1 = cljs.core.__destructure_map(map__98625);
var opts = map__98625__$1;
var use_fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__98625__$1,new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154)),new cljs.core.Keyword(null,"router","router",1091916230),router,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),on_navigate], 0));
return reitit.frontend.history._init((cljs.core.truth_(use_fragment)?reitit.frontend.history.map__GT_FragmentHistory(opts__$1):reitit.frontend.history.map__GT_Html5History(opts__$1)));
}));

(reitit.frontend.history.start_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Stops the given history handler, removing the event handlers.
 */
reitit.frontend.history.stop_BANG_ = (function reitit$frontend$history$stop_BANG_(history){
if(cljs.core.truth_(history)){
return reitit.frontend.history._stop(history);
} else {
return null;
}
});
/**
 * Generate a URL for a route defined by name, with given path-params and query-params.
 * 
 *   The URL is formatted using Reitit frontend history handler, so using it with
 *   anchor element href will correctly trigger route change event.
 * 
 *   Note: currently collections in query parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 */
reitit.frontend.history.href = (function reitit$frontend$history$href(var_args){
var G__98631 = arguments.length;
switch (G__98631) {
case 2:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$2 = (function (history,name){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3(history,name,null);
}));

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3 = (function (history,name,path_params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4(history,name,path_params,null);
}));

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4 = (function (history,name,path_params,query_params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5(history,name,path_params,query_params,null);
}));

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5 = (function (history,name,path_params,query_params,fragment){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),name,path_params);
return reitit.frontend.history._href(history,reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3(match,query_params,fragment));
}));

(reitit.frontend.history.href.cljs$lang$maxFixedArity = 5);

/**
 * Updates the browser URL and pushes new entry to the history stack using
 *   a route defined by name, with given path-params and query-params.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
 */
reitit.frontend.history.push_state = (function reitit$frontend$history$push_state(var_args){
var G__98644 = arguments.length;
switch (G__98644) {
case 2:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$2 = (function (history,name){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(history,name,null,null,null);
}));

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$3 = (function (history,name,path_params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(history,name,path_params,null,null);
}));

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4 = (function (history,name,path_params,query_params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(history,name,path_params,query_params,null);
}));

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5 = (function (history,name,path_params,query_params,fragment){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),name,path_params);
var path = reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3(match,query_params,fragment);
window.history.pushState(null,"",reitit.frontend.history._href(history,path));

return reitit.frontend.history._on_navigate(history,path);
}));

(reitit.frontend.history.push_state.cljs$lang$maxFixedArity = 5);

/**
 * Updates the browser location and replaces latest entry in the history stack
 *   using URL built from a route defined by name, with given path-params and
 *   query-params.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
 */
reitit.frontend.history.replace_state = (function reitit$frontend$history$replace_state(var_args){
var G__98663 = arguments.length;
switch (G__98663) {
case 2:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$2 = (function (history,name){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(history,name,null,null,null);
}));

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$3 = (function (history,name,path_params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(history,name,path_params,null,null);
}));

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4 = (function (history,name,path_params,query_params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(history,name,path_params,query_params,null);
}));

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5 = (function (history,name,path_params,query_params,fragment){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),name,path_params);
var path = reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3(match,query_params,fragment);
window.history.replaceState(null,"",reitit.frontend.history._href(history,path));

return reitit.frontend.history._on_navigate(history,path);
}));

(reitit.frontend.history.replace_state.cljs$lang$maxFixedArity = 5);

/**
 * Updates the browser location and either pushes new entry to the history stack
 *   or replaces the latest entry in the the history stack (controlled by
 *   `replace` option) using URL built from a route defined by name given
 *   parameters.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
 */
reitit.frontend.history.navigate = (function reitit$frontend$history$navigate(var_args){
var G__98669 = arguments.length;
switch (G__98669) {
case 2:
return reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$2 = (function (history,name){
return reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$3(history,name,null);
}));

(reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$3 = (function (history,name,p__98670){
var map__98671 = p__98670;
var map__98671__$1 = cljs.core.__destructure_map(map__98671);
var opts = map__98671__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98671__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98671__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98671__$1,new cljs.core.Keyword(null,"fragment","fragment",826775688));
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98671__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),name,path_params);
var path = reitit.frontend.match__GT_path.cljs$core$IFn$_invoke$arity$3(match,query_params,fragment);
if(cljs.core.truth_(replace)){
window.history.replaceState(null,"",reitit.frontend.history._href(history,path));
} else {
window.history.pushState(null,"",reitit.frontend.history._href(history,path));
}

return reitit.frontend.history._on_navigate(history,path);
}));

(reitit.frontend.history.navigate.cljs$lang$maxFixedArity = 3);

/**
 * Update query parameters for the current route.
 * 
 *   New query params can be given as a map, or a function taking
 *   the old params and returning the new modified params.
 * 
 *   Note: The query parameter values aren't coereced, so the
 *   update fn will see string values for all query params.
 */
reitit.frontend.history.set_query = (function reitit$frontend$history$set_query(var_args){
var G__98679 = arguments.length;
switch (G__98679) {
case 2:
return reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$2 = (function (history,new_query_or_update_fn){
return reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$3(history,new_query_or_update_fn,null);
}));

(reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$3 = (function (history,new_query_or_update_fn,p__98680){
var map__98681 = p__98680;
var map__98681__$1 = cljs.core.__destructure_map(map__98681);
var opts = map__98681__$1;
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98681__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
var current_path = reitit.frontend.history._get_path(history);
var new_path = reitit.frontend.set_query_params(current_path,new_query_or_update_fn);
if(cljs.core.truth_(replace)){
window.history.replaceState(null,"",reitit.frontend.history._href(history,new_path));
} else {
window.history.pushState(null,"",reitit.frontend.history._href(history,new_path));
}

return reitit.frontend.history._on_navigate(history,new_path);
}));

(reitit.frontend.history.set_query.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=reitit.frontend.history.js.map
