goog.provide('gadget.browsable');

/**
 * @interface
 */
gadget.browsable.Browsable = function(){};

var gadget$browsable$Browsable$entries$dyn_61329 = (function (data){
var x__5350__auto__ = (((data == null))?null:data);
var m__5351__auto__ = (gadget.browsable.entries[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(data) : m__5351__auto__.call(null, data));
} else {
var m__5349__auto__ = (gadget.browsable.entries["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(data) : m__5349__auto__.call(null, data));
} else {
throw cljs.core.missing_protocol("Browsable.entries",data);
}
}
});
/**
 * Return a sorted seq of key value pairs for browsing
 */
gadget.browsable.entries = (function gadget$browsable$entries(data){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(data),cljs.core.with_meta(new cljs.core.Symbol("gadget.browsable","entries","gadget.browsable/entries",2005100163,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5821__auto__){
var meta_impl__5352__auto__ = temp__5821__auto__;
return (meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__5352__auto__.cljs$core$IFn$_invoke$arity$1(data) : meta_impl__5352__auto__.call(null, data));
} else {
if((((!((data == null)))) && ((!((data.gadget$browsable$Browsable$entries$arity$1 == null)))))){
return data.gadget$browsable$Browsable$entries$arity$1(data);
} else {
return gadget$browsable$Browsable$entries$dyn_61329(data);
}
}
});

(cljs.core.PersistentVector.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,v__$1);
}));
(cljs.core.List.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (l){
var l__$1 = this;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,l__$1);
}));
(cljs.core.PersistentHashSet.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__61318_SHARP_){
return cljs.core.with_meta(p1__61318_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synthetic-key?","synthetic-key?",-1152633532),true], null));
}),cljs.core.vector),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,s__$1));
}));
gadget.browsable.lazy_sample = (1000);
(cljs.core.LazySeq.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.take.cljs$core$IFn$_invoke$arity$2(gadget.browsable.lazy_sample,s__$1));
}));
(cljs.core.IndexedSeq.prototype.gadget$browsable$Browsable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.gadget$browsable$Browsable$entries$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s__$1);
}));

//# sourceMappingURL=gadget.browsable.js.map
