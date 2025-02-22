goog.provide('statecharts.store');

/**
 * @interface
 */
statecharts.store.IStore = function(){};

var statecharts$store$IStore$unique_id$dyn_95897 = (function (this$,state){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.store.unique_id[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5351__auto__.call(null, this$,state));
} else {
var m__5349__auto__ = (statecharts.store.unique_id["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5349__auto__.call(null, this$,state));
} else {
throw cljs.core.missing_protocol("IStore.unique-id",this$);
}
}
});
/**
 * Get the id that the store uses to identify this state.
 */
statecharts.store.unique_id = (function statecharts$store$unique_id(this$,state){
if((((!((this$ == null)))) && ((!((this$.statecharts$store$IStore$unique_id$arity$2 == null)))))){
return this$.statecharts$store$IStore$unique_id$arity$2(this$,state);
} else {
return statecharts$store$IStore$unique_id$dyn_95897(this$,state);
}
});

var statecharts$store$IStore$initialize$dyn_95898 = (function (this$,machine,opts){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.store.initialize[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,machine,opts) : m__5351__auto__.call(null, this$,machine,opts));
} else {
var m__5349__auto__ = (statecharts.store.initialize["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,machine,opts) : m__5349__auto__.call(null, this$,machine,opts));
} else {
throw cljs.core.missing_protocol("IStore.initialize",this$);
}
}
});
/**
 * Initialize a state, and save it in the store.
 */
statecharts.store.initialize = (function statecharts$store$initialize(this$,machine,opts){
if((((!((this$ == null)))) && ((!((this$.statecharts$store$IStore$initialize$arity$3 == null)))))){
return this$.statecharts$store$IStore$initialize$arity$3(this$,machine,opts);
} else {
return statecharts$store$IStore$initialize$dyn_95898(this$,machine,opts);
}
});

var statecharts$store$IStore$transition$dyn_95899 = (function (this$,machine,state,event,opts){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.store.transition[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$5(this$,machine,state,event,opts) : m__5351__auto__.call(null, this$,machine,state,event,opts));
} else {
var m__5349__auto__ = (statecharts.store.transition["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$5(this$,machine,state,event,opts) : m__5349__auto__.call(null, this$,machine,state,event,opts));
} else {
throw cljs.core.missing_protocol("IStore.transition",this$);
}
}
});
/**
 * Transition a state previously saved in the store. Save and return its new value.
 */
statecharts.store.transition = (function statecharts$store$transition(this$,machine,state,event,opts){
if((((!((this$ == null)))) && ((!((this$.statecharts$store$IStore$transition$arity$5 == null)))))){
return this$.statecharts$store$IStore$transition$arity$5(this$,machine,state,event,opts);
} else {
return statecharts$store$IStore$transition$dyn_95899(this$,machine,state,event,opts);
}
});

var statecharts$store$IStore$get_state$dyn_95900 = (function (this$,id){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (statecharts.store.get_state[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5351__auto__.call(null, this$,id));
} else {
var m__5349__auto__ = (statecharts.store.get_state["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5349__auto__.call(null, this$,id));
} else {
throw cljs.core.missing_protocol("IStore.get-state",this$);
}
}
});
/**
 * Get the current value of a state, by its id.
 */
statecharts.store.get_state = (function statecharts$store$get_state(this$,id){
if((((!((this$ == null)))) && ((!((this$.statecharts$store$IStore$get_state$arity$2 == null)))))){
return this$.statecharts$store$IStore$get_state$arity$2(this$,id);
} else {
return statecharts$store$IStore$get_state$dyn_95900(this$,id);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {statecharts.store.IStore}
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
statecharts.store.SingleStore = (function (state_STAR_,__meta,__extmap,__hash){
this.state_STAR_ = state_STAR_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(statecharts.store.SingleStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(statecharts.store.SingleStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k95643,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__95655 = k95643;
var G__95655__$1 = (((G__95655 instanceof cljs.core.Keyword))?G__95655.fqn:null);
switch (G__95655__$1) {
case "state*":
return self__.state_STAR_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k95643,else__5303__auto__);

}
}));

(statecharts.store.SingleStore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__95662){
var vec__95664 = p__95662;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95664,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95664,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(statecharts.store.SingleStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#statecharts.store.SingleStore{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state*","state*",1360534231),self__.state_STAR_],null))], null),self__.__extmap));
}));

(statecharts.store.SingleStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__95642){
var self__ = this;
var G__95642__$1 = this;
return (new cljs.core.RecordIter((0),G__95642__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state*","state*",1360534231)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(statecharts.store.SingleStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(statecharts.store.SingleStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new statecharts.store.SingleStore(self__.state_STAR_,self__.__meta,self__.__extmap,self__.__hash));
}));

(statecharts.store.SingleStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(statecharts.store.SingleStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1537591294 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(statecharts.store.SingleStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this95644,other95645){
var self__ = this;
var this95644__$1 = this;
return (((!((other95645 == null)))) && ((((this95644__$1.constructor === other95645.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this95644__$1.state_STAR_,other95645.state_STAR_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this95644__$1.__extmap,other95645.__extmap)))))));
}));

(statecharts.store.SingleStore.prototype.statecharts$store$IStore$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.store.SingleStore.prototype.statecharts$store$IStore$unique_id$arity$2 = (function (_,_state){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"context","context",-830191113);
}));

(statecharts.store.SingleStore.prototype.statecharts$store$IStore$initialize$arity$3 = (function (_,machine,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.state_STAR_,statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2(machine,opts));
}));

(statecharts.store.SingleStore.prototype.statecharts$store$IStore$transition$arity$5 = (function (_,machine,_state,event,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state_STAR_,(function (p1__95641_SHARP_){
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4(machine,p1__95641_SHARP_,event,opts);
}));
}));

(statecharts.store.SingleStore.prototype.statecharts$store$IStore$get_state$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.deref(self__.state_STAR_);
}));

(statecharts.store.SingleStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state*","state*",1360534231),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new statecharts.store.SingleStore(self__.state_STAR_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(statecharts.store.SingleStore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k95643){
var self__ = this;
var this__5307__auto____$1 = this;
var G__95702 = k95643;
var G__95702__$1 = (((G__95702 instanceof cljs.core.Keyword))?G__95702.fqn:null);
switch (G__95702__$1) {
case "state*":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k95643);

}
}));

(statecharts.store.SingleStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__95642){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__95703 = cljs.core.keyword_identical_QMARK_;
var expr__95704 = k__5309__auto__;
if(cljs.core.truth_((pred__95703.cljs$core$IFn$_invoke$arity$2 ? pred__95703.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state*","state*",1360534231),expr__95704) : pred__95703.call(null, new cljs.core.Keyword(null,"state*","state*",1360534231),expr__95704)))){
return (new statecharts.store.SingleStore(G__95642,self__.__meta,self__.__extmap,null));
} else {
return (new statecharts.store.SingleStore(self__.state_STAR_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__95642),null));
}
}));

(statecharts.store.SingleStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state*","state*",1360534231),self__.state_STAR_,null))], null),self__.__extmap));
}));

(statecharts.store.SingleStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__95642){
var self__ = this;
var this__5299__auto____$1 = this;
return (new statecharts.store.SingleStore(self__.state_STAR_,G__95642,self__.__extmap,self__.__hash));
}));

(statecharts.store.SingleStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(statecharts.store.SingleStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state*","state*",-1293901538,null)], null);
}));

(statecharts.store.SingleStore.cljs$lang$type = true);

(statecharts.store.SingleStore.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"statecharts.store/SingleStore",null,(1),null));
}));

(statecharts.store.SingleStore.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"statecharts.store/SingleStore");
}));

/**
 * Positional factory function for statecharts.store/SingleStore.
 */
statecharts.store.__GT_SingleStore = (function statecharts$store$__GT_SingleStore(state_STAR_){
return (new statecharts.store.SingleStore(state_STAR_,null,null,null));
});

/**
 * Factory function for statecharts.store/SingleStore, taking a map of keywords to field values.
 */
statecharts.store.map__GT_SingleStore = (function statecharts$store$map__GT_SingleStore(G__95651){
var extmap__5342__auto__ = (function (){var G__95722 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__95651,new cljs.core.Keyword(null,"state*","state*",1360534231));
if(cljs.core.record_QMARK_(G__95651)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__95722);
} else {
return G__95722;
}
})();
return (new statecharts.store.SingleStore(new cljs.core.Keyword(null,"state*","state*",1360534231).cljs$core$IFn$_invoke$arity$1(G__95651),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * A single-store stores the current value of a single state.
 */
statecharts.store.single_store = (function statecharts$store$single_store(){
return (new statecharts.store.SingleStore(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {statecharts.store.IStore}
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
statecharts.store.ManyStore = (function (states_STAR_,id,__meta,__extmap,__hash){
this.states_STAR_ = states_STAR_;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(statecharts.store.ManyStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(statecharts.store.ManyStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k95739,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__95756 = k95739;
var G__95756__$1 = (((G__95756 instanceof cljs.core.Keyword))?G__95756.fqn:null);
switch (G__95756__$1) {
case "states*":
return self__.states_STAR_;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k95739,else__5303__auto__);

}
}));

(statecharts.store.ManyStore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__95766){
var vec__95767 = p__95766;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95767,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95767,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(statecharts.store.ManyStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#statecharts.store.ManyStore{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"states*","states*",-197690740),self__.states_STAR_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(statecharts.store.ManyStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__95738){
var self__ = this;
var G__95738__$1 = this;
return (new cljs.core.RecordIter((0),G__95738__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states*","states*",-197690740),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(statecharts.store.ManyStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(statecharts.store.ManyStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new statecharts.store.ManyStore(self__.states_STAR_,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(statecharts.store.ManyStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(statecharts.store.ManyStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-979088140 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(statecharts.store.ManyStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this95740,other95741){
var self__ = this;
var this95740__$1 = this;
return (((!((other95741 == null)))) && ((((this95740__$1.constructor === other95741.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this95740__$1.states_STAR_,other95741.states_STAR_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this95740__$1.id,other95741.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this95740__$1.__extmap,other95741.__extmap)))))))));
}));

(statecharts.store.ManyStore.prototype.statecharts$store$IStore$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.store.ManyStore.prototype.statecharts$store$IStore$unique_id$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,self__.id);
}));

(statecharts.store.ManyStore.prototype.statecharts$store$IStore$initialize$arity$3 = (function (this$,machine,opts){
var self__ = this;
var this$__$1 = this;
var state = cljs.core.update.cljs$core$IFn$_invoke$arity$3(statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2(machine,opts),self__.id,(function (p1__95734_SHARP_){
var or__5002__auto__ = p1__95734_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.states_STAR_,cljs.core.assoc,this$__$1.statecharts$store$IStore$unique_id$arity$2(null, state),state);

return state;
}));

(statecharts.store.ManyStore.prototype.statecharts$store$IStore$transition$arity$5 = (function (this$,machine,state,event,opts){
var self__ = this;
var this$__$1 = this;
var state_id = this$__$1.statecharts$store$IStore$unique_id$arity$2(null, state);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.states_STAR_,cljs.core.update,state_id,(function (p1__95735_SHARP_){
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4(machine,p1__95735_SHARP_,event,opts);
}));

return this$__$1.statecharts$store$IStore$get_state$arity$2(null, state_id);
}));

(statecharts.store.ManyStore.prototype.statecharts$store$IStore$get_state$arity$2 = (function (_,id__$1){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.states_STAR_),id__$1);
}));

(statecharts.store.ManyStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"states*","states*",-197690740),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new statecharts.store.ManyStore(self__.states_STAR_,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(statecharts.store.ManyStore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k95739){
var self__ = this;
var this__5307__auto____$1 = this;
var G__95812 = k95739;
var G__95812__$1 = (((G__95812 instanceof cljs.core.Keyword))?G__95812.fqn:null);
switch (G__95812__$1) {
case "states*":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k95739);

}
}));

(statecharts.store.ManyStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__95738){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__95823 = cljs.core.keyword_identical_QMARK_;
var expr__95824 = k__5309__auto__;
if(cljs.core.truth_((pred__95823.cljs$core$IFn$_invoke$arity$2 ? pred__95823.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"states*","states*",-197690740),expr__95824) : pred__95823.call(null, new cljs.core.Keyword(null,"states*","states*",-197690740),expr__95824)))){
return (new statecharts.store.ManyStore(G__95738,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__95823.cljs$core$IFn$_invoke$arity$2 ? pred__95823.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__95824) : pred__95823.call(null, new cljs.core.Keyword(null,"id","id",-1388402092),expr__95824)))){
return (new statecharts.store.ManyStore(self__.states_STAR_,G__95738,self__.__meta,self__.__extmap,null));
} else {
return (new statecharts.store.ManyStore(self__.states_STAR_,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__95738),null));
}
}
}));

(statecharts.store.ManyStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"states*","states*",-197690740),self__.states_STAR_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(statecharts.store.ManyStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__95738){
var self__ = this;
var this__5299__auto____$1 = this;
return (new statecharts.store.ManyStore(self__.states_STAR_,self__.id,G__95738,self__.__extmap,self__.__hash));
}));

(statecharts.store.ManyStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(statecharts.store.ManyStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"states*","states*",1442840787,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(statecharts.store.ManyStore.cljs$lang$type = true);

(statecharts.store.ManyStore.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"statecharts.store/ManyStore",null,(1),null));
}));

(statecharts.store.ManyStore.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"statecharts.store/ManyStore");
}));

/**
 * Positional factory function for statecharts.store/ManyStore.
 */
statecharts.store.__GT_ManyStore = (function statecharts$store$__GT_ManyStore(states_STAR_,id){
return (new statecharts.store.ManyStore(states_STAR_,id,null,null,null));
});

/**
 * Factory function for statecharts.store/ManyStore, taking a map of keywords to field values.
 */
statecharts.store.map__GT_ManyStore = (function statecharts$store$map__GT_ManyStore(G__95747){
var extmap__5342__auto__ = (function (){var G__95882 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__95747,new cljs.core.Keyword(null,"states*","states*",-197690740),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__95747)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__95882);
} else {
return G__95882;
}
})();
return (new statecharts.store.ManyStore(new cljs.core.Keyword(null,"states*","states*",-197690740).cljs$core$IFn$_invoke$arity$1(G__95747),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__95747),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * A many-store stores the current values of many states.
 * 
 *   The `opts` provided to `init` should configure the state to have a unique id.
 *   This ensures that the state can be identified and transitioned later, by both
 *   external and scheduled events.
 * 
 *   By default, a many-store expects the id to be `:id`.
 *   ```clojure
 *   (let [store (store/many-store)]
 *  (store/initialize store fsm {:context {:id 1}})
 *  (store/get-state store 1))
 *   ```
 *   The id can be configured by providing an `:id` key in the many-store
 *   configuration options.
 *   ```clojure
 *   (let [store (store/many-store {:id :my-id})]
 *  (store/initialize store fsm {:context {:my-id 1}})
 *  (store/get-state store 1))
 *   ```
 *   
 */
statecharts.store.many_store = (function statecharts$store$many_store(var_args){
var G__95884 = arguments.length;
switch (G__95884) {
case 0:
return statecharts.store.many_store.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return statecharts.store.many_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.store.many_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return statecharts.store.many_store.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(statecharts.store.many_store.cljs$core$IFn$_invoke$arity$1 = (function (p__95888){
var map__95889 = p__95888;
var map__95889__$1 = cljs.core.__destructure_map(map__95889);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95889__$1,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092));
return (new statecharts.store.ManyStore(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),id,null,null,null));
}));

(statecharts.store.many_store.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=statecharts.store.js.map
