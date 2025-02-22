goog.provide('datascript.conn');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {extend_clj.core.IAtom3}
 * @implements {cljs.core.ILookup}
*/
datascript.conn.Conn = (function (atom,validator,watches,meta){
this.atom = atom;
this.validator = validator;
this.watches = watches;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 6455552;
});
(datascript.conn.Conn.prototype.equiv = (function (other__48936__auto__){
var self__ = this;
var this__48935__auto__ = this;
return this__48935__auto__.cljs$core$IEquiv$_equiv$arity$2(null, other__48936__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this__48935__auto__,oldv__48943__auto__,newv__48938__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
var seq__91610 = cljs.core.seq(self__.watches);
var chunk__91611 = null;
var count__91612 = (0);
var i__91613 = (0);
while(true){
if((i__91613 < count__91612)){
var vec__91646 = chunk__91611.cljs$core$IIndexed$_nth$arity$2(null, i__91613);
var k__48944__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91646,(0),null);
var f__48939__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91646,(1),null);
(f__48939__auto__.cljs$core$IFn$_invoke$arity$4 ? f__48939__auto__.cljs$core$IFn$_invoke$arity$4(k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__) : f__48939__auto__.call(null, k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__));


var G__92249 = seq__91610;
var G__92250 = chunk__91611;
var G__92251 = count__91612;
var G__92252 = (i__91613 + (1));
seq__91610 = G__92249;
chunk__91611 = G__92250;
count__91612 = G__92251;
i__91613 = G__92252;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__91610);
if(temp__5823__auto__){
var seq__91610__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91610__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__91610__$1);
var G__92253 = cljs.core.chunk_rest(seq__91610__$1);
var G__92254 = c__5525__auto__;
var G__92255 = cljs.core.count(c__5525__auto__);
var G__92256 = (0);
seq__91610 = G__92253;
chunk__91611 = G__92254;
count__91612 = G__92255;
i__91613 = G__92256;
continue;
} else {
var vec__91659 = cljs.core.first(seq__91610__$1);
var k__48944__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91659,(0),null);
var f__48939__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91659,(1),null);
(f__48939__auto__.cljs$core$IFn$_invoke$arity$4 ? f__48939__auto__.cljs$core$IFn$_invoke$arity$4(k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__) : f__48939__auto__.call(null, k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__));


var G__92257 = cljs.core.next(seq__91610__$1);
var G__92258 = null;
var G__92259 = (0);
var G__92260 = (0);
seq__91610 = G__92257;
chunk__91611 = G__92258;
count__91612 = G__92259;
i__91613 = G__92260;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this__48935__auto__,key__48945__auto__,f__48939__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
(this__48935__auto____$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__48945__auto__,f__48939__auto__));

return this__48935__auto____$1;
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this__48935__auto__,key__48945__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return (this__48935__auto____$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__48945__auto__));
}));

(datascript.conn.Conn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o__48937__auto__,other__48936__auto__){
var self__ = this;
var o__48937__auto____$1 = this;
return (o__48937__auto____$1 === other__48936__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__48935__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return goog.getUid(this__48935__auto____$1);
}));

(datascript.conn.Conn.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this__48935__auto__,newv__48938__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__48935__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, cljs.core.constantly(newv__48938__auto__),cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this__48935__auto__,f__48939__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__48935__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__48939__auto__,cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this__48935__auto__,f__48939__auto__,a__48940__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__48935__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__48939__auto__,(new cljs.core.List(null,a__48940__auto__,null,(1),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this__48935__auto__,f__48939__auto__,a__48940__auto__,b__48941__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__48935__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__48939__auto__,(new cljs.core.List(null,a__48940__auto__,(new cljs.core.List(null,b__48941__auto__,null,(1),null)),(2),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this__48935__auto__,f__48939__auto__,a__48940__auto__,b__48941__auto__,xs__48942__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__48935__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null, f__48939__auto__,cljs.core.cons(a__48940__auto__,cljs.core.cons(b__48941__auto__,xs__48942__auto__))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__48935__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return self__.meta;
}));

(datascript.conn.Conn.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this__48935__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return this__48935__auto____$1.extend_clj$core$IAtom3$deref_impl$arity$1(null, );
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$validate$arity$3 = (function (this__48935__auto__,validator__48947__auto__,value__48948__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
if((!((validator__48947__auto__ == null)))){
if(cljs.core.truth_((validator__48947__auto__.cljs$core$IFn$_invoke$arity$1 ? validator__48947__auto__.cljs$core$IFn$_invoke$arity$1(value__48948__auto__) : validator__48947__auto__.call(null, value__48948__auto__)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid reference state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__48948__auto__], null));
}
} else {
return null;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$notify_watches$arity$3 = (function (this__48935__auto__,oldv__48943__auto__,newv__48938__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
var seq__91744 = cljs.core.seq(self__.watches);
var chunk__91745 = null;
var count__91746 = (0);
var i__91747 = (0);
while(true){
if((i__91747 < count__91746)){
var vec__91786 = chunk__91745.cljs$core$IIndexed$_nth$arity$2(null, i__91747);
var k__48944__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91786,(0),null);
var w__48949__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91786,(1),null);
(w__48949__auto__.cljs$core$IFn$_invoke$arity$4 ? w__48949__auto__.cljs$core$IFn$_invoke$arity$4(k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__) : w__48949__auto__.call(null, k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__));


var G__92279 = seq__91744;
var G__92280 = chunk__91745;
var G__92281 = count__91746;
var G__92282 = (i__91747 + (1));
seq__91744 = G__92279;
chunk__91745 = G__92280;
count__91746 = G__92281;
i__91747 = G__92282;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__91744);
if(temp__5823__auto__){
var seq__91744__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__91744__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__91744__$1);
var G__92284 = cljs.core.chunk_rest(seq__91744__$1);
var G__92285 = c__5525__auto__;
var G__92286 = cljs.core.count(c__5525__auto__);
var G__92287 = (0);
seq__91744 = G__92284;
chunk__91745 = G__92285;
count__91746 = G__92286;
i__91747 = G__92287;
continue;
} else {
var vec__91821 = cljs.core.first(seq__91744__$1);
var k__48944__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91821,(0),null);
var w__48949__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91821,(1),null);
(w__48949__auto__.cljs$core$IFn$_invoke$arity$4 ? w__48949__auto__.cljs$core$IFn$_invoke$arity$4(k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__) : w__48949__auto__.call(null, k__48944__auto__,this__48935__auto____$1,oldv__48943__auto__,newv__48938__auto__));


var G__92292 = cljs.core.next(seq__91744__$1);
var G__92293 = null;
var G__92294 = (0);
var G__92295 = (0);
seq__91744 = G__92292;
chunk__91745 = G__92293;
count__91746 = G__92294;
i__91747 = G__92295;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$swap_STAR_$arity$3 = (function (this__48935__auto__,f__48939__auto__,args__48950__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
var oldv__48943__auto__ = cljs.core.deref(this__48935__auto____$1);
var newv__48938__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__48939__auto__,oldv__48943__auto__,args__48950__auto__);
this__48935__auto____$1.extend_clj$core$IAtom3$validate$arity$3(null, self__.validator,newv__48938__auto__);

this__48935__auto____$1.extend_clj$core$IAtom3$compare_and_set_impl$arity$3(null, oldv__48943__auto__,newv__48938__auto__);

this__48935__auto____$1.extend_clj$core$IAtom3$notify_watches$arity$3(null, oldv__48943__auto__,newv__48938__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldv__48943__auto__,newv__48938__auto__], null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$deref_impl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atom));
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$compare_and_set_impl$arity$3 = (function (this$,oldv,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_and_set_BANG_(self__.atom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),oldv),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),newv));
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__48935__auto__,k__48944__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
return this__48935__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__48944__auto__,null);
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__48935__auto__,k__48944__auto__,not_found__48946__auto__){
var self__ = this;
var this__48935__auto____$1 = this;
var G__91873 = k__48944__auto__;
var G__91873__$1 = (((G__91873 instanceof cljs.core.Keyword))?G__91873.fqn:null);
switch (G__91873__$1) {
case "atom":
return self__.atom;

break;
default:
return not_found__48946__auto__;

}
}));

(datascript.conn.Conn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(datascript.conn.Conn.cljs$lang$type = true);

(datascript.conn.Conn.cljs$lang$ctorStr = "datascript.conn/Conn");

(datascript.conn.Conn.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"datascript.conn/Conn");
}));

/**
 * Positional factory function for datascript.conn/Conn.
 */
datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(atom,validator,watches,meta){
return (new datascript.conn.Conn(atom,validator,watches,meta));
});


datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(var_args){
var G__91898 = arguments.length;
switch (G__91898) {
case 1:
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___92321 = arguments.length;
var i__5727__auto___92322 = (0);
while(true){
if((i__5727__auto___92322 < len__5726__auto___92321)){
args_arr__5751__auto__.push((arguments[i__5727__auto___92322]));

var G__92325 = (i__5727__auto___92322 + (1));
i__5727__auto___92322 = G__92325;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic = (function (atom,rest__48951__auto__){
var opts__48952__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,rest__48951__auto__);
var ref__48953__auto__ = (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
var temp__5827__auto___92333 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(opts__48952__auto__);
if((temp__5827__auto___92333 == null)){
} else {
var validator__48947__auto___92334 = temp__5827__auto___92333;
ref__48953__auto__.extend_clj$core$IAtom3$validate$arity$3(null, validator__48947__auto___92334,cljs.core.deref(ref__48953__auto__));

(ref__48953__auto__.validator = validator__48947__auto___92334);
}

var temp__5827__auto___92337 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts__48952__auto__);
if((temp__5827__auto___92337 == null)){
} else {
var meta__48954__auto___92338 = temp__5827__auto___92337;
cljs.core.reset_meta_BANG_(ref__48953__auto__,meta__48954__auto___92338);
}

return ref__48953__auto__;
}));

/** @this {Function} */
(datascript.conn.__GT_Conn.cljs$lang$applyTo = (function (seq91895){
var G__91896 = cljs.core.first(seq91895);
var seq91895__$1 = cljs.core.next(seq91895);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__91896,seq91895__$1);
}));

(datascript.conn.__GT_Conn.cljs$lang$maxFixedArity = (1));


datascript.conn.make_conn = (function datascript$conn$make_conn(opts){
var G__91914 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(opts);
return (datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 ? datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1(G__91914) : datascript.conn.__GT_Conn.call(null, G__91914));
});
datascript.conn.with$ = (function datascript$conn$with(var_args){
var G__91919 = arguments.length;
switch (G__91919) {
case 2:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
}));

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if((db instanceof datascript.db.FilteredDB)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data(datascript.db.__GT_TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tx_meta),tx_data);
}
}));

(datascript.conn.with$.cljs$lang$maxFixedArity = 3);

/**
 * Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.
 */
datascript.conn.db_with = (function datascript$conn$db_with(db,tx_data){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.conn.conn_QMARK_ = (function datascript$conn$conn_QMARK_(conn){
var and__5000__auto__ = (((!((conn == null))))?(((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$))))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__5000__auto__){
var temp__5825__auto__ = cljs.core.deref(conn);
if((temp__5825__auto__ == null)){
return true;
} else {
var db = temp__5825__auto__;
return datascript.db.db_QMARK_(db);
}
} else {
return and__5000__auto__;
}
});
datascript.conn.conn_from_db = (function datascript$conn$conn_from_db(db){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5825__auto__ = datascript.storage.storage(db);
if((temp__5825__auto__ == null)){
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var storage = temp__5825__auto__;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
datascript.conn.conn_from_datoms = (function datascript$conn$conn_from_datoms(var_args){
var G__91986 = arguments.length;
switch (G__91986) {
case 1:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3 = (function (datoms,schema,opts){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.conn_from_datoms.cljs$lang$maxFixedArity = 3);

datascript.conn.create_conn = (function datascript$conn$create_conn(var_args){
var G__92044 = arguments.length;
switch (G__92044) {
case 0:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.conn.conn_from_db(datascript.db.empty_db(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2 = (function (schema,opts){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.create_conn.cljs$lang$maxFixedArity = 2);

datascript.conn._transact_BANG_ = (function datascript$conn$_transact_BANG_(conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var _STAR_report = cljs.core.volatile_BANG_(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (db){
var r = datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
cljs.core.vreset_BANG_(_STAR_report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
}));

return cljs.core.deref(_STAR_report);
});
datascript.conn.transact_BANG_ = (function datascript$conn$transact_BANG_(var_args){
var G__92102 = arguments.length;
switch (G__92102) {
case 2:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
}));

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.conn._transact_BANG_(conn,tx_data,tx_meta);
var seq__92112_92403 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__92113_92404 = null;
var count__92114_92405 = (0);
var i__92115_92406 = (0);
while(true){
if((i__92115_92406 < count__92114_92405)){
var vec__92132_92407 = chunk__92113_92404.cljs$core$IIndexed$_nth$arity$2(null, i__92115_92406);
var __92408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92132_92407,(0),null);
var callback_92409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92132_92407,(1),null);
(callback_92409.cljs$core$IFn$_invoke$arity$1 ? callback_92409.cljs$core$IFn$_invoke$arity$1(report) : callback_92409.call(null, report));


var G__92411 = seq__92112_92403;
var G__92412 = chunk__92113_92404;
var G__92413 = count__92114_92405;
var G__92414 = (i__92115_92406 + (1));
seq__92112_92403 = G__92411;
chunk__92113_92404 = G__92412;
count__92114_92405 = G__92413;
i__92115_92406 = G__92414;
continue;
} else {
var temp__5823__auto___92415 = cljs.core.seq(seq__92112_92403);
if(temp__5823__auto___92415){
var seq__92112_92416__$1 = temp__5823__auto___92415;
if(cljs.core.chunked_seq_QMARK_(seq__92112_92416__$1)){
var c__5525__auto___92417 = cljs.core.chunk_first(seq__92112_92416__$1);
var G__92418 = cljs.core.chunk_rest(seq__92112_92416__$1);
var G__92419 = c__5525__auto___92417;
var G__92420 = cljs.core.count(c__5525__auto___92417);
var G__92421 = (0);
seq__92112_92403 = G__92418;
chunk__92113_92404 = G__92419;
count__92114_92405 = G__92420;
i__92115_92406 = G__92421;
continue;
} else {
var vec__92142_92422 = cljs.core.first(seq__92112_92416__$1);
var __92423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92142_92422,(0),null);
var callback_92424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92142_92422,(1),null);
(callback_92424.cljs$core$IFn$_invoke$arity$1 ? callback_92424.cljs$core$IFn$_invoke$arity$1(report) : callback_92424.call(null, report));


var G__92427 = cljs.core.next(seq__92112_92416__$1);
var G__92428 = null;
var G__92429 = (0);
var G__92430 = (0);
seq__92112_92403 = G__92427;
chunk__92113_92404 = G__92428;
count__92114_92405 = G__92429;
i__92115_92406 = G__92430;
continue;
}
} else {
}
}
break;
}

return report;
}));

(datascript.conn.transact_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_conn_BANG_ = (function datascript$conn$reset_conn_BANG_(var_args){
var G__92152 = arguments.length;
switch (G__92152) {
case 2:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
}));

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var db_before = cljs.core.deref(conn);
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(db_before)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__92148_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__92148_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.db._datoms(db_before,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)):null),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
var temp__5825__auto___92449 = datascript.storage.storage(db_before);
if((temp__5825__auto___92449 == null)){
cljs.core.reset_BANG_(conn,db);
} else {
var storage_92451 = temp__5825__auto___92449;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
}

var seq__92163_92456 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__92164_92457 = null;
var count__92165_92458 = (0);
var i__92166_92459 = (0);
while(true){
if((i__92166_92459 < count__92165_92458)){
var vec__92189_92467 = chunk__92164_92457.cljs$core$IIndexed$_nth$arity$2(null, i__92166_92459);
var __92468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92189_92467,(0),null);
var callback_92469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92189_92467,(1),null);
(callback_92469.cljs$core$IFn$_invoke$arity$1 ? callback_92469.cljs$core$IFn$_invoke$arity$1(report) : callback_92469.call(null, report));


var G__92472 = seq__92163_92456;
var G__92473 = chunk__92164_92457;
var G__92474 = count__92165_92458;
var G__92475 = (i__92166_92459 + (1));
seq__92163_92456 = G__92472;
chunk__92164_92457 = G__92473;
count__92165_92458 = G__92474;
i__92166_92459 = G__92475;
continue;
} else {
var temp__5823__auto___92480 = cljs.core.seq(seq__92163_92456);
if(temp__5823__auto___92480){
var seq__92163_92483__$1 = temp__5823__auto___92480;
if(cljs.core.chunked_seq_QMARK_(seq__92163_92483__$1)){
var c__5525__auto___92486 = cljs.core.chunk_first(seq__92163_92483__$1);
var G__92487 = cljs.core.chunk_rest(seq__92163_92483__$1);
var G__92488 = c__5525__auto___92486;
var G__92489 = cljs.core.count(c__5525__auto___92486);
var G__92490 = (0);
seq__92163_92456 = G__92487;
chunk__92164_92457 = G__92488;
count__92165_92458 = G__92489;
i__92166_92459 = G__92490;
continue;
} else {
var vec__92195_92492 = cljs.core.first(seq__92163_92483__$1);
var __92493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92195_92492,(0),null);
var callback_92494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92195_92492,(1),null);
(callback_92494.cljs$core$IFn$_invoke$arity$1 ? callback_92494.cljs$core$IFn$_invoke$arity$1(report) : callback_92494.call(null, report));


var G__92501 = cljs.core.next(seq__92163_92483__$1);
var G__92502 = null;
var G__92503 = (0);
var G__92504 = (0);
seq__92163_92456 = G__92501;
chunk__92164_92457 = G__92502;
count__92165_92458 = G__92503;
i__92166_92459 = G__92504;
continue;
}
} else {
}
}
break;
}

return db;
}));

(datascript.conn.reset_conn_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_schema_BANG_ = (function datascript$conn$reset_schema_BANG_(conn,schema){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var db = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,datascript.db.with_schema,schema);
return db;
});
datascript.conn.listen_BANG_ = (function datascript$conn$listen_BANG_(var_args){
var G__92218 = arguments.length;
switch (G__92218) {
case 2:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
}));

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,callback], 0));

return key;
}));

(datascript.conn.listen_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.unlisten_BANG_ = (function datascript$conn$unlisten_BANG_(conn,key){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});

//# sourceMappingURL=datascript.conn.js.map
