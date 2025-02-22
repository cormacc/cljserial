goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_87918 = (function (this$,type){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schema[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5351__auto__.call(null, this$,type));
} else {
var m__5349__auto__ = (malli.registry._schema["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5349__auto__.call(null, this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_87918(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_87926 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schemas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (malli.registry._schemas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_87926(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87578 = (function (m,fm,meta87579){
this.m = m;
this.fm = fm;
this.meta87579 = meta87579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87580,meta87579__$1){
var self__ = this;
var _87580__$1 = this;
return (new malli.registry.t_malli$registry87578(self__.m,self__.fm,meta87579__$1));
}));

(malli.registry.t_malli$registry87578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87580){
var self__ = this;
var _87580__$1 = this;
return self__.meta87579;
}));

(malli.registry.t_malli$registry87578.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87578.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry87578.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry87578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta87579","meta87579",47563795,null)], null);
}));

(malli.registry.t_malli$registry87578.cljs$lang$type = true);

(malli.registry.t_malli$registry87578.cljs$lang$ctorStr = "malli.registry/t_malli$registry87578");

(malli.registry.t_malli$registry87578.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87578");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87578.
 */
malli.registry.__GT_t_malli$registry87578 = (function malli$registry$__GT_t_malli$registry87578(m,fm,meta87579){
return (new malli.registry.t_malli$registry87578(m,fm,meta87579));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry87578(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87607 = (function (m,meta87608){
this.m = m;
this.meta87608 = meta87608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87609,meta87608__$1){
var self__ = this;
var _87609__$1 = this;
return (new malli.registry.t_malli$registry87607(self__.m,meta87608__$1));
}));

(malli.registry.t_malli$registry87607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87609){
var self__ = this;
var _87609__$1 = this;
return self__.meta87608;
}));

(malli.registry.t_malli$registry87607.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87607.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null, type));
}));

(malli.registry.t_malli$registry87607.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry87607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta87608","meta87608",-863902464,null)], null);
}));

(malli.registry.t_malli$registry87607.cljs$lang$type = true);

(malli.registry.t_malli$registry87607.cljs$lang$ctorStr = "malli.registry/t_malli$registry87607");

(malli.registry.t_malli$registry87607.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87607");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87607.
 */
malli.registry.__GT_t_malli$registry87607 = (function malli$registry$__GT_t_malli$registry87607(m,meta87608){
return (new malli.registry.t_malli$registry87607(m,meta87608));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry87607(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87672 = (function (meta87673){
this.meta87673 = meta87673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87674,meta87673__$1){
var self__ = this;
var _87674__$1 = this;
return (new malli.registry.t_malli$registry87672(meta87673__$1));
}));

(malli.registry.t_malli$registry87672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87674){
var self__ = this;
var _87674__$1 = this;
return self__.meta87673;
}));

(malli.registry.t_malli$registry87672.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87672.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry87672.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry87672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta87673","meta87673",-1224036959,null)], null);
}));

(malli.registry.t_malli$registry87672.cljs$lang$type = true);

(malli.registry.t_malli$registry87672.cljs$lang$ctorStr = "malli.registry/t_malli$registry87672");

(malli.registry.t_malli$registry87672.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87672");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87672.
 */
malli.registry.__GT_t_malli$registry87672 = (function malli$registry$__GT_t_malli$registry87672(meta87673){
return (new malli.registry.t_malli$registry87672(meta87673));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry87672(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87725 = (function (_QMARK_registries,registries,meta87726){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta87726 = meta87726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87727,meta87726__$1){
var self__ = this;
var _87727__$1 = this;
return (new malli.registry.t_malli$registry87725(self__._QMARK_registries,self__.registries,meta87726__$1));
}));

(malli.registry.t_malli$registry87725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87727){
var self__ = this;
var _87727__$1 = this;
return self__.meta87726;
}));

(malli.registry.t_malli$registry87725.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87725.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__87703_SHARP_){
return malli.registry._schema(p1__87703_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry87725.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry87725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta87726","meta87726",-330591177,null)], null);
}));

(malli.registry.t_malli$registry87725.cljs$lang$type = true);

(malli.registry.t_malli$registry87725.cljs$lang$ctorStr = "malli.registry/t_malli$registry87725");

(malli.registry.t_malli$registry87725.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87725");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87725.
 */
malli.registry.__GT_t_malli$registry87725 = (function malli$registry$__GT_t_malli$registry87725(_QMARK_registries,registries,meta87726){
return (new malli.registry.t_malli$registry87725(_QMARK_registries,registries,meta87726));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5732__auto__ = [];
var len__5726__auto___88025 = arguments.length;
var i__5727__auto___88026 = (0);
while(true){
if((i__5727__auto___88026 < len__5726__auto___88025)){
args__5732__auto__.push((arguments[i__5727__auto___88026]));

var G__88027 = (i__5727__auto___88026 + (1));
i__5727__auto___88026 = G__88027;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry87725(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq87705){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87705));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87780 = (function (db,meta87781){
this.db = db;
this.meta87781 = meta87781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87782,meta87781__$1){
var self__ = this;
var _87782__$1 = this;
return (new malli.registry.t_malli$registry87780(self__.db,meta87781__$1));
}));

(malli.registry.t_malli$registry87780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87782){
var self__ = this;
var _87782__$1 = this;
return self__.meta87781;
}));

(malli.registry.t_malli$registry87780.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87780.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry87780.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry87780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta87781","meta87781",432136463,null)], null);
}));

(malli.registry.t_malli$registry87780.cljs$lang$type = true);

(malli.registry.t_malli$registry87780.cljs$lang$ctorStr = "malli.registry/t_malli$registry87780");

(malli.registry.t_malli$registry87780.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87780");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87780.
 */
malli.registry.__GT_t_malli$registry87780 = (function malli$registry$__GT_t_malli$registry87780(db,meta87781){
return (new malli.registry.t_malli$registry87780(db,meta87781));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry87780(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87805 = (function (meta87806){
this.meta87806 = meta87806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87807,meta87806__$1){
var self__ = this;
var _87807__$1 = this;
return (new malli.registry.t_malli$registry87805(meta87806__$1));
}));

(malli.registry.t_malli$registry87805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87807){
var self__ = this;
var _87807__$1 = this;
return self__.meta87806;
}));

(malli.registry.t_malli$registry87805.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87805.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry87805.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry87805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta87806","meta87806",993093087,null)], null);
}));

(malli.registry.t_malli$registry87805.cljs$lang$type = true);

(malli.registry.t_malli$registry87805.cljs$lang$ctorStr = "malli.registry/t_malli$registry87805");

(malli.registry.t_malli$registry87805.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87805");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87805.
 */
malli.registry.__GT_t_malli$registry87805 = (function malli$registry$__GT_t_malli$registry87805(meta87806){
return (new malli.registry.t_malli$registry87805(meta87806));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry87805(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87836 = (function (meta87837){
this.meta87837 = meta87837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87838,meta87837__$1){
var self__ = this;
var _87838__$1 = this;
return (new malli.registry.t_malli$registry87836(meta87837__$1));
}));

(malli.registry.t_malli$registry87836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87838){
var self__ = this;
var _87838__$1 = this;
return self__.meta87837;
}));

(malli.registry.t_malli$registry87836.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87836.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry87836.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry87836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta87837","meta87837",1962649082,null)], null);
}));

(malli.registry.t_malli$registry87836.cljs$lang$type = true);

(malli.registry.t_malli$registry87836.cljs$lang$ctorStr = "malli.registry/t_malli$registry87836");

(malli.registry.t_malli$registry87836.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87836");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87836.
 */
malli.registry.__GT_t_malli$registry87836 = (function malli$registry$__GT_t_malli$registry87836(meta87837){
return (new malli.registry.t_malli$registry87836(meta87837));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry87836(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry87855 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta87856){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta87856 = meta87856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry87855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87857,meta87856__$1){
var self__ = this;
var _87857__$1 = this;
return (new malli.registry.t_malli$registry87855(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta87856__$1));
}));

(malli.registry.t_malli$registry87855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87857){
var self__ = this;
var _87857__$1 = this;
return self__.meta87856;
}));

(malli.registry.t_malli$registry87855.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry87855.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5002__auto__ = (function (){var fexpr__87871 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__87871.cljs$core$IFn$_invoke$arity$1 ? fexpr__87871.cljs$core$IFn$_invoke$arity$1(name) : fexpr__87871.call(null, name));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5823__auto__ = (function (){var G__87876 = name;
var G__87877 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__87876,G__87877) : self__.provider.call(null, G__87876,G__87877));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var schema = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry87855.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry87855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta87856","meta87856",-268977283,null)], null);
}));

(malli.registry.t_malli$registry87855.cljs$lang$type = true);

(malli.registry.t_malli$registry87855.cljs$lang$ctorStr = "malli.registry/t_malli$registry87855");

(malli.registry.t_malli$registry87855.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry87855");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry87855.
 */
malli.registry.__GT_t_malli$registry87855 = (function malli$registry$__GT_t_malli$registry87855(default_registry,provider,cache_STAR_,registry_STAR_,meta87856){
return (new malli.registry.t_malli$registry87855(default_registry,provider,cache_STAR_,registry_STAR_,meta87856));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry87855(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
