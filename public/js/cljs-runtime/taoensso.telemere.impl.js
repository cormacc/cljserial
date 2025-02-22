goog.provide('taoensso.telemere.impl');
/**
 * Documented at `taoensso.telemere/*uid-fn*`.
 */
taoensso.telemere.impl.uid_kind = new cljs.core.Keyword(null,"default","default",-1987822328);
var base_61914 = null;
var kind_filter_61915 = null;
var ns_filter_61916 = null;
var id_filter_61917 = null;
var min_level_61918 = new cljs.core.Keyword(null,"info","info",-317069002);
if((typeof taoensso !== 'undefined') && (typeof taoensso.telemere !== 'undefined') && (typeof taoensso.telemere.impl !== 'undefined') && (typeof taoensso.telemere.impl._STAR_rt_sig_filter_STAR_ !== 'undefined')){
} else {
/**
 * `SigFilter` used for runtime filtering, or nil.
 */
taoensso.telemere.impl._STAR_rt_sig_filter_STAR_ = taoensso.encore.signals.sig_filter(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915),(function (){var or__5002__auto__ = kind_filter_61915;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_61914,new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915));
}
})(),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),(function (){var or__5002__auto__ = ns_filter_61916;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_61914,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
}
})(),new cljs.core.Keyword(null,"id-filter","id-filter",-572281277),(function (){var or__5002__auto__ = id_filter_61917;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_61914,new cljs.core.Keyword(null,"id-filter","id-filter",-572281277));
}
})(),new cljs.core.Keyword(null,"min-level","min-level",1634684919),(function (){var or__5002__auto__ = min_level_61918;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(base_61914,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
}
})()], null));
}

/**
* @constructor
*/
taoensso.telemere.impl.MsgSkip = (function (){
});

(taoensso.telemere.impl.MsgSkip.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.telemere.impl.MsgSkip.cljs$lang$type = true);

(taoensso.telemere.impl.MsgSkip.cljs$lang$ctorStr = "taoensso.telemere.impl/MsgSkip");

(taoensso.telemere.impl.MsgSkip.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.telemere.impl/MsgSkip");
}));

/**
 * Positional factory function for taoensso.telemere.impl/MsgSkip.
 */
taoensso.telemere.impl.__GT_MsgSkip = (function taoensso$telemere$impl$__GT_MsgSkip(){
return (new taoensso.telemere.impl.MsgSkip());
});


/**
* @constructor
*/
taoensso.telemere.impl.MsgSplice = (function (args){
this.args = args;
});

(taoensso.telemere.impl.MsgSplice.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(taoensso.telemere.impl.MsgSplice.cljs$lang$type = true);

(taoensso.telemere.impl.MsgSplice.cljs$lang$ctorStr = "taoensso.telemere.impl/MsgSplice");

(taoensso.telemere.impl.MsgSplice.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.telemere.impl/MsgSplice");
}));

/**
 * Positional factory function for taoensso.telemere.impl/MsgSplice.
 */
taoensso.telemere.impl.__GT_MsgSplice = (function taoensso$telemere$impl$__GT_MsgSplice(args){
return (new taoensso.telemere.impl.MsgSplice(args));
});

/**
 * For use within signal message vectors.
 *   Special value that will be ignored (noop) when creating message.
 *   Useful for conditionally skipping parts of message content, etc.:
 * 
 *  (signal! {:msg ["Hello" (if <cond> <then> msg-skip) "world"] <...>}) or
 *  (log!          ["Hello" (if <cond> <then> msg-skip) "world"]), etc.
 * 
 *    %> {:msg_ "Hello world" <...>}
 */
taoensso.telemere.impl.msg_skip = (new taoensso.telemere.impl.MsgSkip());
/**
 * For use within signal message vectors.
 *   Wraps given arguments so that they're spliced when creating message.
 *   Useful for conditionally splicing in extra message content, etc.:
 * 
 *  (signal! {:msg [(when <cond> (msg-splice ["Username:" "Steve"])) <...>]}) or
 *  (log!          [(when <cond> (msg-splice ["Username:" "Steve"]))])
 * 
 *    %> {:msg_ "Username: Steve"}
 */
taoensso.telemere.impl.msg_splice = (function taoensso$telemere$impl$msg_splice(args){
return (new taoensso.telemere.impl.MsgSplice(args));
});
var xform_61925 = (function (rf){
var rf_STAR_ = (function taoensso$telemere$impl$rf_STAR_(acc,in$){
if((in$ instanceof taoensso.telemere.impl.MsgSplice)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$telemere$impl$rf_STAR_,acc,in$.args);
} else {
if((in$ instanceof taoensso.telemere.impl.MsgSkip)){
return acc;
} else {
if((in$ == null)){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,"nil") : rf.call(null, acc,"nil"));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null, acc,in$));
}
}
}
});
return (function() {
var G__61928 = null;
var G__61928__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null, ));
});
var G__61928__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null, acc));
});
var G__61928__2 = (function (acc,in$){
return rf_STAR_(acc,in$);
});
G__61928 = function(acc,in$){
switch(arguments.length){
case 0:
return G__61928__0.call(this);
case 1:
return G__61928__1.call(this,acc);
case 2:
return G__61928__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61928.cljs$core$IFn$_invoke$arity$0 = G__61928__0;
G__61928.cljs$core$IFn$_invoke$arity$1 = G__61928__1;
G__61928.cljs$core$IFn$_invoke$arity$2 = G__61928__2;
return G__61928;
})()
});
/**
 * Returns string formed by joining all args with " " separator,
 *  rendering nils as "nil". Supports `msg-skip`, `msg-splice`.
 * 
 *  API intended to be usefully different to `str`:
 *    -        `str`: no   spacers, skip nils, no     splicing
 *    - `signal-msg`: auto spacers, show nils, opt-in splicing
 */
taoensso.telemere.impl.signal_msg = (function taoensso$telemere$impl$signal_msg(args){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",xform_61925,args);
});
taoensso.telemere.impl.default_trace_msg = (function taoensso$telemere$impl$default_trace_msg(form,value,error,nsecs){
if(cljs.core.truth_(error)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)," !> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.ex_type(error))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)," => ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}
});
/**
 * ?{:keys [id uid]}
 */
taoensso.telemere.impl._STAR_trace_root_STAR_ = null;
/**
 * ?{:keys [id uid]}
 */
taoensso.telemere.impl._STAR_trace_parent_STAR_ = null;

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
taoensso.telemere.impl.Signal = (function (schema,inst,uid,location,ns,line,column,file,sample_rate,kind,id,level,ctx,parent,root,data,kvs,msg_,error,run_form,run_val,end_inst,run_nsecs,__meta,__extmap,__hash){
this.schema = schema;
this.inst = inst;
this.uid = uid;
this.location = location;
this.ns = ns;
this.line = line;
this.column = column;
this.file = file;
this.sample_rate = sample_rate;
this.kind = kind;
this.id = id;
this.level = level;
this.ctx = ctx;
this.parent = parent;
this.root = root;
this.data = data;
this.kvs = kvs;
this.msg_ = msg_;
this.error = error;
this.run_form = run_form;
this.run_val = run_val;
this.end_inst = end_inst;
this.run_nsecs = run_nsecs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.telemere.impl.Signal.prototype.toString = (function (){
var self__ = this;
var sig = this;
return ["taoensso.telemere.Signal",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,sig))].join('');
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k61568,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__61601 = k61568;
var G__61601__$1 = (((G__61601 instanceof cljs.core.Keyword))?G__61601.fqn:null);
switch (G__61601__$1) {
case "schema":
return self__.schema;

break;
case "inst":
return self__.inst;

break;
case "uid":
return self__.uid;

break;
case "location":
return self__.location;

break;
case "ns":
return self__.ns;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
case "file":
return self__.file;

break;
case "sample-rate":
return self__.sample_rate;

break;
case "kind":
return self__.kind;

break;
case "id":
return self__.id;

break;
case "level":
return self__.level;

break;
case "ctx":
return self__.ctx;

break;
case "parent":
return self__.parent;

break;
case "root":
return self__.root;

break;
case "data":
return self__.data;

break;
case "kvs":
return self__.kvs;

break;
case "msg_":
return self__.msg_;

break;
case "error":
return self__.error;

break;
case "run-form":
return self__.run_form;

break;
case "run-val":
return self__.run_val;

break;
case "end-inst":
return self__.end_inst;

break;
case "run-nsecs":
return self__.run_nsecs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61568,else__5303__auto__);

}
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__61610){
var vec__61611 = p__61610;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61611,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61611,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.telemere.impl.Signal{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"inst","inst",645962501),self__.inst],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"uid","uid",-1447769400),self__.uid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location","location",1815599388),self__.location],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"line","line",212345235),self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"column","column",2078222095),self__.column],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"file","file",-1269645878),self__.file],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),self__.sample_rate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctx","ctx",-493610118),self__.ctx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"root","root",-448657453),self__.root],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kvs","kvs",958455492),self__.kvs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg_","msg_",-1925147000),self__.msg_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-form","run-form",405647397),self__.run_form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-val","run-val",-304326520),self__.run_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-inst","end-inst",496357156),self__.end_inst],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724),self__.run_nsecs],null))], null),self__.__extmap));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61567){
var self__ = this;
var G__61567__$1 = this;
return (new cljs.core.RecordIter((0),G__61567__$1,23,new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"kvs","kvs",958455492),new cljs.core.Keyword(null,"msg_","msg_",-1925147000),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"run-form","run-form",405647397),new cljs.core.Keyword(null,"run-val","run-val",-304326520),new cljs.core.Keyword(null,"end-inst","end-inst",496357156),new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (23 + cljs.core.count(self__.__extmap));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-2071815066 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61569,other61570){
var self__ = this;
var this61569__$1 = this;
return (((!((other61570 == null)))) && ((((this61569__$1.constructor === other61570.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.schema,other61570.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.inst,other61570.inst)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.uid,other61570.uid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.location,other61570.location)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.ns,other61570.ns)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.line,other61570.line)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.column,other61570.column)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.file,other61570.file)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.sample_rate,other61570.sample_rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.kind,other61570.kind)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.id,other61570.id)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.level,other61570.level)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.ctx,other61570.ctx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.parent,other61570.parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.root,other61570.root)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.data,other61570.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.kvs,other61570.kvs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.msg_,other61570.msg_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.error,other61570.error)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.run_form,other61570.run_form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.run_val,other61570.run_val)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.end_inst,other61570.end_inst)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.run_nsecs,other61570.run_nsecs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61569__$1.__extmap,other61570.__extmap)))))))))))))))))))))))))))))))))))))))))))))))))));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 23, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"kvs","kvs",958455492),null,new cljs.core.Keyword(null,"end-inst","end-inst",496357156),null,new cljs.core.Keyword(null,"run-form","run-form",405647397),null,new cljs.core.Keyword(null,"inst","inst",645962501),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),null,new cljs.core.Keyword(null,"run-val","run-val",-304326520),null,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"root","root",-448657453),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"ctx","ctx",-493610118),null,new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724),null,new cljs.core.Keyword(null,"location","location",1815599388),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k61568){
var self__ = this;
var this__5307__auto____$1 = this;
var G__61662 = k61568;
var G__61662__$1 = (((G__61662 instanceof cljs.core.Keyword))?G__61662.fqn:null);
switch (G__61662__$1) {
case "schema":
case "inst":
case "uid":
case "location":
case "ns":
case "line":
case "column":
case "file":
case "sample-rate":
case "kind":
case "id":
case "level":
case "ctx":
case "parent":
case "root":
case "data":
case "kvs":
case "msg_":
case "error":
case "run-form":
case "run-val":
case "end-inst":
case "run-nsecs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61568);

}
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__61567){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__61663 = cljs.core.keyword_identical_QMARK_;
var expr__61664 = k__5309__auto__;
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__61664)))){
return (new taoensso.telemere.impl.Signal(G__61567,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inst","inst",645962501),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"inst","inst",645962501),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,G__61567,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uid","uid",-1447769400),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"uid","uid",-1447769400),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,G__61567,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"location","location",1815599388),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"location","location",1815599388),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,G__61567,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ns","ns",441598760),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"ns","ns",441598760),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,G__61567,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"line","line",212345235),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"line","line",212345235),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,G__61567,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"column","column",2078222095),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,G__61567,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"file","file",-1269645878),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,G__61567,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,G__61567,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"kind","kind",-717265803),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,G__61567,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"id","id",-1388402092),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,G__61567,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"level","level",1290497552),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"level","level",1290497552),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,G__61567,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctx","ctx",-493610118),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"ctx","ctx",-493610118),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,G__61567,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"parent","parent",-878878779),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,G__61567,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"root","root",-448657453),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,G__61567,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"data","data",-232669377),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,G__61567,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kvs","kvs",958455492),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"kvs","kvs",958455492),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,G__61567,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"msg_","msg_",-1925147000),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"msg_","msg_",-1925147000),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,G__61567,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"error","error",-978969032),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,G__61567,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"run-form","run-form",405647397),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"run-form","run-form",405647397),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,G__61567,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"run-val","run-val",-304326520),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"run-val","run-val",-304326520),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,G__61567,self__.end_inst,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-inst","end-inst",496357156),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"end-inst","end-inst",496357156),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,G__61567,self__.run_nsecs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61663.cljs$core$IFn$_invoke$arity$2 ? pred__61663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724),expr__61664) : pred__61663.call(null, new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724),expr__61664)))){
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,G__61567,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__61567),null));
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
}
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"inst","inst",645962501),self__.inst,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"uid","uid",-1447769400),self__.uid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"location","location",1815599388),self__.location,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"line","line",212345235),self__.line,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"column","column",2078222095),self__.column,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"file","file",-1269645878),self__.file,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),self__.sample_rate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"level","level",1290497552),self__.level,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ctx","ctx",-493610118),self__.ctx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"root","root",-448657453),self__.root,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kvs","kvs",958455492),self__.kvs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"msg_","msg_",-1925147000),self__.msg_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"run-form","run-form",405647397),self__.run_form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"run-val","run-val",-304326520),self__.run_val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-inst","end-inst",496357156),self__.end_inst,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724),self__.run_nsecs,null))], null),self__.__extmap));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__61567){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.telemere.impl.Signal(self__.schema,self__.inst,self__.uid,self__.location,self__.ns,self__.line,self__.column,self__.file,self__.sample_rate,self__.kind,self__.id,self__.level,self__.ctx,self__.parent,self__.root,self__.data,self__.kvs,self__.msg_,self__.error,self__.run_form,self__.run_val,self__.end_inst,self__.run_nsecs,G__61567,self__.__extmap,self__.__hash));
}));

(taoensso.telemere.impl.Signal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.telemere.impl.Signal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"inst","inst",-2008473268,null),new cljs.core.Symbol(null,"uid","uid",192762127,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.Symbol(null,"file","file",370885649,null),new cljs.core.Symbol(null,"sample-rate","sample-rate",1037284973,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null),new cljs.core.Symbol(null,"msg_","msg_",-284615473,null),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol(null,"run-form","run-form",2046178924,null),new cljs.core.Symbol(null,"run-val","run-val",1336205007,null),new cljs.core.Symbol(null,"end-inst","end-inst",2136888683,null),new cljs.core.Symbol(null,"run-nsecs","run-nsecs",1673153251,null)], null);
}));

(taoensso.telemere.impl.Signal.cljs$lang$type = true);

(taoensso.telemere.impl.Signal.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.telemere.impl/Signal",null,(1),null));
}));

(taoensso.telemere.impl.Signal.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.telemere.impl/Signal");
}));

/**
 * Positional factory function for taoensso.telemere.impl/Signal.
 */
taoensso.telemere.impl.__GT_Signal = (function taoensso$telemere$impl$__GT_Signal(schema,inst,uid,location,ns,line,column,file,sample_rate,kind,id,level,ctx,parent,root,data,kvs,msg_,error,run_form,run_val,end_inst,run_nsecs){
return (new taoensso.telemere.impl.Signal(schema,inst,uid,location,ns,line,column,file,sample_rate,kind,id,level,ctx,parent,root,data,kvs,msg_,error,run_form,run_val,end_inst,run_nsecs,null,null,null));
});

/**
 * Factory function for taoensso.telemere.impl/Signal, taking a map of keywords to field values.
 */
taoensso.telemere.impl.map__GT_Signal = (function taoensso$telemere$impl$map__GT_Signal(G__61577){
var extmap__5342__auto__ = (function (){var G__61686 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61577,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Keyword(null,"uid","uid",-1447769400),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"ctx","ctx",-493610118),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"kvs","kvs",958455492),new cljs.core.Keyword(null,"msg_","msg_",-1925147000),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"run-form","run-form",405647397),new cljs.core.Keyword(null,"run-val","run-val",-304326520),new cljs.core.Keyword(null,"end-inst","end-inst",496357156),new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724)], 0));
if(cljs.core.record_QMARK_(G__61577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61686);
} else {
return G__61686;
}
})();
return (new taoensso.telemere.impl.Signal(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"kvs","kvs",958455492).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"msg_","msg_",-1925147000).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"run-form","run-form",405647397).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"run-val","run-val",-304326520).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"end-inst","end-inst",496357156).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724).cljs$core$IFn$_invoke$arity$1(G__61577),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

(taoensso.telemere.impl.Signal.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.telemere.impl.Signal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sig,__w,_){
var sig__$1 = this;
return cljs.core._write(__w,["#taoensso.telemere.Signal",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,sig__$1)], 0))].join(''));
}));
taoensso.telemere.impl.impl_signal_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_otel-context","_otel-context",-1187753645),null], null), null);
taoensso.telemere.impl.standard_signal_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(taoensso.telemere.impl.map__GT_Signal(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),(0)], null)))),taoensso.telemere.impl.impl_signal_keys);

/**
* @constructor
 * @implements {taoensso.encore.signals.IFilterableSignal}
*/
taoensso.telemere.impl.WrappedSignal = (function (kind,ns,id,level,signal_value_){
this.kind = kind;
this.ns = ns;
this.id = id;
this.level = level;
this.signal_value_ = signal_value_;
});
(taoensso.telemere.impl.WrappedSignal.prototype.taoensso$encore$signals$IFilterableSignal$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.telemere.impl.WrappedSignal.prototype.taoensso$encore$signals$IFilterableSignal$allow_signal_QMARK_$arity$2 = (function (_,sig_filter){
var self__ = this;
var ___$1 = this;
return (sig_filter.cljs$core$IFn$_invoke$arity$4 ? sig_filter.cljs$core$IFn$_invoke$arity$4(self__.kind,self__.ns,self__.id,self__.level) : sig_filter.call(null, self__.kind,self__.ns,self__.id,self__.level));
}));

(taoensso.telemere.impl.WrappedSignal.prototype.taoensso$encore$signals$IFilterableSignal$signal_debug$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),self__.kind,new cljs.core.Keyword(null,"ns","ns",441598760),self__.ns,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"level","level",1290497552),self__.level], null);
}));

(taoensso.telemere.impl.WrappedSignal.prototype.taoensso$encore$signals$IFilterableSignal$signal_value$arity$2 = (function (_,handler_sample_rate){
var self__ = this;
var ___$1 = this;
return taoensso.encore.signals.signal_with_combined_sample_rate(handler_sample_rate,cljs.core.force(self__.signal_value_));
}));

(taoensso.telemere.impl.WrappedSignal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"signal-value_","signal-value_",1525225232,null)], null);
}));

(taoensso.telemere.impl.WrappedSignal.cljs$lang$type = true);

(taoensso.telemere.impl.WrappedSignal.cljs$lang$ctorStr = "taoensso.telemere.impl/WrappedSignal");

(taoensso.telemere.impl.WrappedSignal.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.telemere.impl/WrappedSignal");
}));

/**
 * Positional factory function for taoensso.telemere.impl/WrappedSignal.
 */
taoensso.telemere.impl.__GT_WrappedSignal = (function taoensso$telemere$impl$__GT_WrappedSignal(kind,ns,id,level,signal_value_){
return (new taoensso.telemere.impl.WrappedSignal(kind,ns,id,level,signal_value_));
});

/**
 * Used by `taoensso.telemere/dispatch-signal!`.
 */
taoensso.telemere.impl.wrap_signal = (function taoensso$telemere$impl$wrap_signal(signal){
if(cljs.core.map_QMARK_(signal)){
var map__61709 = signal;
var map__61709__$1 = cljs.core.__destructure_map(map__61709);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61709__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return (new taoensso.telemere.impl.WrappedSignal(kind,ns,id,level,signal));
} else {
return null;
}
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.telemere !== 'undefined') && (typeof taoensso.telemere.impl !== 'undefined') && (typeof taoensso.telemere.impl._STAR_sig_handlers_STAR_ !== 'undefined')){
} else {
/**
 * ?[<wrapped-handler-fn>]
 */
taoensso.telemere.impl._STAR_sig_handlers_STAR_ = null;
}

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
taoensso.telemere.impl.SpyOpts = (function (vol_,last_only_QMARK_,trap_QMARK_,__meta,__extmap,__hash){
this.vol_ = vol_;
this.last_only_QMARK_ = last_only_QMARK_;
this.trap_QMARK_ = trap_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k61715,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__61720 = k61715;
var G__61720__$1 = (((G__61720 instanceof cljs.core.Keyword))?G__61720.fqn:null);
switch (G__61720__$1) {
case "vol_":
return self__.vol_;

break;
case "last-only?":
return self__.last_only_QMARK_;

break;
case "trap?":
return self__.trap_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61715,else__5303__auto__);

}
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__61722){
var vec__61723 = p__61722;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61723,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#taoensso.telemere.impl.SpyOpts{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vol_","vol_",-461594303),self__.vol_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-only?","last-only?",159474618),self__.last_only_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trap?","trap?",-752190948),self__.trap_QMARK_],null))], null),self__.__extmap));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61714){
var self__ = this;
var G__61714__$1 = this;
return (new cljs.core.RecordIter((0),G__61714__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vol_","vol_",-461594303),new cljs.core.Keyword(null,"last-only?","last-only?",159474618),new cljs.core.Keyword(null,"trap?","trap?",-752190948)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new taoensso.telemere.impl.SpyOpts(self__.vol_,self__.last_only_QMARK_,self__.trap_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-98713752 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61716,other61717){
var self__ = this;
var this61716__$1 = this;
return (((!((other61717 == null)))) && ((((this61716__$1.constructor === other61717.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61716__$1.vol_,other61717.vol_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61716__$1.last_only_QMARK_,other61717.last_only_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61716__$1.trap_QMARK_,other61717.trap_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61716__$1.__extmap,other61717.__extmap)))))))))));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vol_","vol_",-461594303),null,new cljs.core.Keyword(null,"last-only?","last-only?",159474618),null,new cljs.core.Keyword(null,"trap?","trap?",-752190948),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new taoensso.telemere.impl.SpyOpts(self__.vol_,self__.last_only_QMARK_,self__.trap_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k61715){
var self__ = this;
var this__5307__auto____$1 = this;
var G__61745 = k61715;
var G__61745__$1 = (((G__61745 instanceof cljs.core.Keyword))?G__61745.fqn:null);
switch (G__61745__$1) {
case "vol_":
case "last-only?":
case "trap?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61715);

}
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__61714){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__61748 = cljs.core.keyword_identical_QMARK_;
var expr__61749 = k__5309__auto__;
if(cljs.core.truth_((pred__61748.cljs$core$IFn$_invoke$arity$2 ? pred__61748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vol_","vol_",-461594303),expr__61749) : pred__61748.call(null, new cljs.core.Keyword(null,"vol_","vol_",-461594303),expr__61749)))){
return (new taoensso.telemere.impl.SpyOpts(G__61714,self__.last_only_QMARK_,self__.trap_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61748.cljs$core$IFn$_invoke$arity$2 ? pred__61748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-only?","last-only?",159474618),expr__61749) : pred__61748.call(null, new cljs.core.Keyword(null,"last-only?","last-only?",159474618),expr__61749)))){
return (new taoensso.telemere.impl.SpyOpts(self__.vol_,G__61714,self__.trap_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61748.cljs$core$IFn$_invoke$arity$2 ? pred__61748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trap?","trap?",-752190948),expr__61749) : pred__61748.call(null, new cljs.core.Keyword(null,"trap?","trap?",-752190948),expr__61749)))){
return (new taoensso.telemere.impl.SpyOpts(self__.vol_,self__.last_only_QMARK_,G__61714,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.telemere.impl.SpyOpts(self__.vol_,self__.last_only_QMARK_,self__.trap_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__61714),null));
}
}
}
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vol_","vol_",-461594303),self__.vol_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-only?","last-only?",159474618),self__.last_only_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trap?","trap?",-752190948),self__.trap_QMARK_,null))], null),self__.__extmap));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__61714){
var self__ = this;
var this__5299__auto____$1 = this;
return (new taoensso.telemere.impl.SpyOpts(self__.vol_,self__.last_only_QMARK_,self__.trap_QMARK_,G__61714,self__.__extmap,self__.__hash));
}));

(taoensso.telemere.impl.SpyOpts.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(taoensso.telemere.impl.SpyOpts.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vol_","vol_",1178937224,null),new cljs.core.Symbol(null,"last-only?","last-only?",1800006145,null),new cljs.core.Symbol(null,"trap?","trap?",888340579,null)], null);
}));

(taoensso.telemere.impl.SpyOpts.cljs$lang$type = true);

(taoensso.telemere.impl.SpyOpts.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"taoensso.telemere.impl/SpyOpts",null,(1),null));
}));

(taoensso.telemere.impl.SpyOpts.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"taoensso.telemere.impl/SpyOpts");
}));

/**
 * Positional factory function for taoensso.telemere.impl/SpyOpts.
 */
taoensso.telemere.impl.__GT_SpyOpts = (function taoensso$telemere$impl$__GT_SpyOpts(vol_,last_only_QMARK_,trap_QMARK_){
return (new taoensso.telemere.impl.SpyOpts(vol_,last_only_QMARK_,trap_QMARK_,null,null,null));
});

/**
 * Factory function for taoensso.telemere.impl/SpyOpts, taking a map of keywords to field values.
 */
taoensso.telemere.impl.map__GT_SpyOpts = (function taoensso$telemere$impl$map__GT_SpyOpts(G__61718){
var extmap__5342__auto__ = (function (){var G__61776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61718,new cljs.core.Keyword(null,"vol_","vol_",-461594303),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-only?","last-only?",159474618),new cljs.core.Keyword(null,"trap?","trap?",-752190948)], 0));
if(cljs.core.record_QMARK_(G__61718)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61776);
} else {
return G__61776;
}
})();
return (new taoensso.telemere.impl.SpyOpts(new cljs.core.Keyword(null,"vol_","vol_",-461594303).cljs$core$IFn$_invoke$arity$1(G__61718),new cljs.core.Keyword(null,"last-only?","last-only?",159474618).cljs$core$IFn$_invoke$arity$1(G__61718),new cljs.core.Keyword(null,"trap?","trap?",-752190948).cljs$core$IFn$_invoke$arity$1(G__61718),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * ?SpyOpts
 */
taoensso.telemere.impl._STAR_sig_spy_STAR_ = null;
taoensso.telemere.impl.force_msg_in_sig = (function taoensso$telemere$impl$force_msg_in_sig(sig){
if((!(cljs.core.map_QMARK_(sig)))){
return sig;
} else {
var temp__5821__auto__ = cljs.core.find(sig,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
if(cljs.core.truth_(temp__5821__auto__)){
var e = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sig,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),cljs.core.force(cljs.core.val(e)));
} else {
return sig;
}
}
});
/**
 * Dispatches given signal to registered handlers, supports `with-signal/s`.
 */
taoensso.telemere.impl.dispatch_signal_BANG_ = (function taoensso$telemere$impl$dispatch_signal_BANG_(signal){
var or__5002__auto__ = (function (){var temp__5823__auto__ = taoensso.telemere.impl._STAR_sig_spy_STAR_;
if(cljs.core.truth_(temp__5823__auto__)){
var map__61799 = temp__5823__auto__;
var map__61799__$1 = cljs.core.__destructure_map(map__61799);
var vol_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61799__$1,new cljs.core.Keyword(null,"vol_","vol_",-461594303));
var last_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61799__$1,new cljs.core.Keyword(null,"last-only?","last-only?",159474618));
var trap_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61799__$1,new cljs.core.Keyword(null,"trap?","trap?",-752190948));
var sv_62089 = taoensso.encore.signals.signal_value(signal,null);
if(cljs.core.truth_(last_only_QMARK_)){
cljs.core.vreset_BANG_(vol_,sv_62089);
} else {
cljs.core._vreset_BANG_(vol_,(function (p1__61795_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = p1__61795_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),sv_62089);
})(cljs.core._deref(vol_)));
}

if(cljs.core.truth_(trap_QMARK_)){
return new cljs.core.Keyword(null,"trapped","trapped",-1135045162);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = taoensso.encore.signals.call_handlers_BANG_(taoensso.telemere.impl._STAR_sig_handlers_STAR_,signal);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"dispatched","dispatched",-305136936);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
taoensso.telemere.impl.RunResult = (function (value,error,run_nsecs){
this.value = value;
this.error = error;
this.run_nsecs = run_nsecs;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(taoensso.telemere.impl.RunResult.prototype.call = (function (unused__11220__auto__){
var self__ = this;
var self__ = this;
var G__61820 = (arguments.length - (1));
switch (G__61820) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(taoensso.telemere.impl.RunResult.prototype.apply = (function (self__,args61818){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args61818)));
}));

(taoensso.telemere.impl.RunResult.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.error)){
throw self__.error;
} else {
return self__.value;
}
}));

(taoensso.telemere.impl.RunResult.prototype.cljs$core$IFn$_invoke$arity$1 = (function (signal_){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.error)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Signal `:run` form error",(function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("taoensso.telemere","signal","taoensso.telemere/signal",1391011740),cljs.core.force(signal_)], null);
}catch (e61831){var t = e61831;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("taoensso.telemere","signal-error","taoensso.telemere/signal-error",366067440),t], null);
}})(),self__.error);
} else {
return self__.value;
}
}));

(taoensso.telemere.impl.RunResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"error","error",661562495,null),cljs.core.with_meta(new cljs.core.Symbol(null,"run-nsecs","run-nsecs",1673153251,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
}));

(taoensso.telemere.impl.RunResult.cljs$lang$type = true);

(taoensso.telemere.impl.RunResult.cljs$lang$ctorStr = "taoensso.telemere.impl/RunResult");

(taoensso.telemere.impl.RunResult.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"taoensso.telemere.impl/RunResult");
}));

/**
 * Positional factory function for taoensso.telemere.impl/RunResult.
 */
taoensso.telemere.impl.__GT_RunResult = (function taoensso$telemere$impl$__GT_RunResult(value,error,run_nsecs){
return (new taoensso.telemere.impl.RunResult(value,error,run_nsecs));
});

/**
 * Returns given platform instant plus given number of nanosecs.
 */
taoensso.telemere.impl.inst_PLUS_nsecs = (function taoensso$telemere$impl$inst_PLUS_nsecs(inst,run_nsecs){
return (new Date((inst.getTime() + (run_nsecs / 1000000.0))));
});

//# sourceMappingURL=taoensso.telemere.impl.js.map
