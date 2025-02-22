goog.provide('taoensso.telemere.utils');
/**
 * `:info` -> "INFO",
 *     `5` -> "LEVEL:5", etc.
 */
taoensso.telemere.utils.format_level = taoensso.encore.signals.format_level;

/**
 * `:foo.bar/baz` -> "::baz", etc.
 */
taoensso.telemere.utils.format_id = taoensso.encore.signals.format_id;

/**
 * Returns "<ns/file>(<line>,<column>)", etc.
 */
taoensso.telemere.utils.format_location = taoensso.encore.signals.format_location;
/**
 * Experimental, subject to change.
 *   Returns a (fn nano-uid [root?]) that returns a random nano-style uid string like:
 *  "r76-B8LoIPs5lBG1_Uhdy" - 126 bit (21 char)     root         uid
 *  "tMEYoZH0K-"            - 60  bit (10 char) non-root (child) uid
 */
taoensso.telemere.utils.nano_uid_fn = (function taoensso$telemere$utils$nano_uid_fn(var_args){
var G__62272 = arguments.length;
switch (G__62272) {
case 0:
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62273){
var map__62274 = p__62273;
var map__62274__$1 = cljs.core.__destructure_map(map__62274);
var secure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62274__$1,new cljs.core.Keyword(null,"secure?","secure?",-368029718));
var root_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62274__$1,new cljs.core.Keyword(null,"root-len","root-len",-204417175),(21));
var child_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62274__$1,new cljs.core.Keyword(null,"child-len","child-len",1548141543),(10));
var root_len__$1 = cljs.core.long$(root_len);
var child_len__$1 = cljs.core.long$(child_len);
return (function taoensso$telemere$utils$nano_uid(root_QMARK_){
if(cljs.core.truth_(root_QMARK_)){
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2(secure_QMARK_,root_len__$1);
} else {
return taoensso.encore.nanoid.cljs$core$IFn$_invoke$arity$2(secure_QMARK_,child_len__$1);
}
});
}));

(taoensso.telemere.utils.nano_uid_fn.cljs$lang$maxFixedArity = 1);

/**
 * Experimental, subject to change.
 *   Returns a (fn hex-uid [root?]) that returns a random hex-style uid string like:
 *  "05039666eb9dc3206475f44ab9f3d843" - 128 bit (32 char)     root         uid
 *  "721fcef639a51513"                 - 64  bit (16 char) non-root (child) uid
 */
taoensso.telemere.utils.hex_uid_fn = (function taoensso$telemere$utils$hex_uid_fn(var_args){
var G__62281 = arguments.length;
switch (G__62281) {
case 0:
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62282){
var map__62283 = p__62282;
var map__62283__$1 = cljs.core.__destructure_map(map__62283);
var secure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62283__$1,new cljs.core.Keyword(null,"secure?","secure?",-368029718));
var root_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62283__$1,new cljs.core.Keyword(null,"root-len","root-len",-204417175),(32));
var child_len = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62283__$1,new cljs.core.Keyword(null,"child-len","child-len",1548141543),(16));
var root_len__$1 = cljs.core.long$(root_len);
var child_len__$1 = cljs.core.long$(child_len);
var rand_bytes_fn = (cljs.core.truth_(secure_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.rand_bytes,true):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.rand_bytes,false));
var hex_uid_root = taoensso.encore.rand_id_fn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.Keyword(null,"hex-lowercase","hex-lowercase",1090135664),new cljs.core.Keyword(null,"len","len",1423657078),root_len__$1,new cljs.core.Keyword(null,"rand-bytes-fn","rand-bytes-fn",501267911),rand_bytes_fn], null));
var hex_uid_child = taoensso.encore.rand_id_fn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.Keyword(null,"hex-lowercase","hex-lowercase",1090135664),new cljs.core.Keyword(null,"len","len",1423657078),child_len__$1,new cljs.core.Keyword(null,"rand-bytes-fn","rand-bytes-fn",501267911),rand_bytes_fn], null));
return (function taoensso$telemere$utils$hex_uid(root_QMARK_){
if(cljs.core.truth_(root_QMARK_)){
return hex_uid_root();
} else {
return hex_uid_child();
}
});
}));

(taoensso.telemere.utils.hex_uid_fn.cljs$lang$maxFixedArity = 1);

/**
 * Private, don't use.
 *   Returns (fn uid [root?]) for given uid kind.
 */
taoensso.telemere.utils.parse_uid_fn = (function taoensso$telemere$utils$parse_uid_fn(kind){
var G__62298 = kind;
var G__62298__$1 = (((G__62298 instanceof cljs.core.Keyword))?G__62298.fqn:null);
switch (G__62298__$1) {
case "uuid":
return (function (_root_QMARK_){
return taoensso.encore.uuid();
});

break;
case "uuid-str":
return (function (_root_QMARK_){
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
});

break;
case "default":
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),false], null));

break;
case "nano/insecure":
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),false], null));

break;
case "nano/secure":
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),true], null));

break;
case "hex/insecure":
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),false], null));

break;
case "hex/secure":
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),true], null));

break;
default:
var or__5002__auto__ = ((cljs.core.vector_QMARK_(kind))?(function (){var vec__62300 = kind;
var kind__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62300,(0),null);
var root_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62300,(1),null);
var child_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62300,(2),null);
var G__62303 = kind__$1;
var G__62303__$1 = (((G__62303 instanceof cljs.core.Keyword))?G__62303.fqn:null);
switch (G__62303__$1) {
case "nano/insecure":
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),false,new cljs.core.Keyword(null,"root-len","root-len",-204417175),root_len,new cljs.core.Keyword(null,"child-len","child-len",1548141543),child_len], null));

break;
case "nano/secure":
return taoensso.telemere.utils.nano_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),true,new cljs.core.Keyword(null,"root-len","root-len",-204417175),root_len,new cljs.core.Keyword(null,"child-len","child-len",1548141543),child_len], null));

break;
case "hex/insecure":
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),false,new cljs.core.Keyword(null,"root-len","root-len",-204417175),root_len,new cljs.core.Keyword(null,"child-len","child-len",1548141543),child_len], null));

break;
case "hex/secure":
return taoensso.telemere.utils.hex_uid_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secure?","secure?",-368029718),true,new cljs.core.Keyword(null,"root-len","root-len",-204417175),root_len,new cljs.core.Keyword(null,"child-len","child-len",1548141543),child_len], null));

break;
default:
return null;

}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.telemere.utils","uid-fn","taoensso.telemere.utils/uid-fn",790130699,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"default","default",-1987822328),"null",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nano","insecure","nano/insecure",-1399463185),new cljs.core.Symbol(null,"<root-len>","<root-len>",-540063912,null),new cljs.core.Symbol(null,"<child-len>","<child-len>",-1454733286,null)], null),"null",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nano","secure","nano/secure",174489112),new cljs.core.Symbol(null,"<root-len>","<root-len>",-540063912,null),new cljs.core.Symbol(null,"<child-len>","<child-len>",-1454733286,null)], null),"null",new cljs.core.Keyword("nano","insecure","nano/insecure",-1399463185),"null",new cljs.core.Keyword(null,"uuid-str","uuid-str",358395442),"null",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hex","insecure","hex/insecure",-1411913130),new cljs.core.Symbol(null,"<root-len>","<root-len>",-540063912,null),new cljs.core.Symbol(null,"<child-len>","<child-len>",-1454733286,null)], null),"null",new cljs.core.Keyword("hex","insecure","hex/insecure",-1411913130),"null",new cljs.core.Keyword("nano","secure","nano/secure",174489112),"null",new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"null",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hex","secure","hex/secure",177509789),new cljs.core.Symbol(null,"<root-len>","<root-len>",-540063912,null),new cljs.core.Symbol(null,"<child-len>","<child-len>",-1454733286,null)], null),"null",new cljs.core.Keyword("hex","secure","hex/secure",177509789),"null"], null), null)], null));
}

}
});
/**
 * Single system newline
 */
taoensso.telemere.utils.newline = "\n";

/**
 * Prints given arg to an edn string readable with `read-edn`.
 */
taoensso.telemere.utils.pr_edn = taoensso.encore.pr_edn;

/**
 * Returns a random UUID string of given length (max 36).
 *   Uses strong randomness when possible. See also `uuid`, `nanoid`, `rand-id-fn`.
 */
taoensso.telemere.utils.uuid_str = taoensso.encore.uuid_str;

/**
 * Returns given Cljs argument as JSON string.
 */
taoensso.telemere.utils.pr_json = taoensso.encore.pr_json;
/**
 * Returns JavaScript console logger to match given signal level:
 *     `:trace` -> `js/console.trace`,
 *     `:error` -> `js/console.error`, etc.
 * 
 *   Defaults to `js.console.log` for unmatched signal levels.
 *   NB: assumes that `js/console` exists, handler constructors should check first!
 */
taoensso.telemere.utils.js_console_logger = (function taoensso$telemere$utils$js_console_logger(level){
var G__62319 = level;
var G__62319__$1 = (((G__62319 instanceof cljs.core.Keyword))?G__62319.fqn:null);
switch (G__62319__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
return console.log;

}
});
/**
 * Experimental, subject to change.
 *   Returns true iff given signal has an `:error` value, or a `:kind` or `:level`
 *   that indicates that it's an error.
 */
taoensso.telemere.utils.error_signal_QMARK_ = (function taoensso$telemere$utils$error_signal_QMARK_(signal){
var and__5000__auto__ = signal;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.boolean$((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.keyword_identical_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"kind","kind",-717265803)),new cljs.core.Keyword(null,"error","error",-978969032));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = (function (){var G__62330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"level","level",1290497552));
var G__62330__$1 = (((G__62330 instanceof cljs.core.Keyword))?G__62330.fqn:null);
switch (G__62330__$1) {
case "error":
case "fatal":
return true;

break;
default:
return false;

}
})();
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"error?","error?",-460689159));
}
}
}
})());
} else {
return and__5000__auto__;
}
});
/**
 * Private, don't use.
 *   Returns given signal without app-level kvs or `:kvs` key.
 */
taoensso.telemere.utils.remove_signal_kvs = (function taoensso$telemere$utils$remove_signal_kvs(signal){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"kvs","kvs",958455492));
if(cljs.core.truth_(temp__5821__auto__)){
var kvs = temp__5821__auto__;
return cljs.core.reduce_kv((function (m,k,_v){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"kvs","kvs",958455492)),kvs);
} else {
return signal;
}
});
/**
 * Private, don't use.
 *   Returns given signal with nil-valued keys removed.
 */
taoensso.telemere.utils.remove_signal_nils = (function taoensso$telemere$utils$remove_signal_nils(signal){
if(taoensso.encore.editable_QMARK_(signal)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
if((v == null)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return m;
}
}),cljs.core.transient$(signal),signal));
} else {
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),signal));
}
});
/**
 * Private, don't use.
 *   Returns given signal with possible `:msg_` value forced (realized when a delay).
 */
taoensso.telemere.utils.force_signal_msg = (function taoensso$telemere$utils$force_signal_msg(signal){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
if(cljs.core.truth_(temp__5821__auto__)){
var msg_ = temp__5821__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(signal,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),cljs.core.force(msg_));
} else {
return signal;
}
});
/**
 * Private, don't use.
 *   Returns given signal with possible `:error` replaced by
 *   [{:keys [type msg data]} ...] cause chain.
 */
taoensso.telemere.utils.expand_signal_error = (function taoensso$telemere$utils$expand_signal_error(signal){
var b2__38440__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(b2__38440__auto__)){
var error = b2__38440__auto__;
var b2__38440__auto____$1 = taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as-map","as-map",633645847),error);
if(cljs.core.truth_(b2__38440__auto____$1)){
var chain = b2__38440__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(signal,new cljs.core.Keyword(null,"error","error",-978969032),chain);
} else {
return signal;
}
} else {
return signal;
}
});
/**
 * Experimental, subject to change.
 *   Returns a (fn format [nanosecs]) that:
 *  - Takes a long nanoseconds (e.g. runtime).
 *  - Returns a human-readable string like:
 *    "1.00m", "4.20s", "340ms", "822μs", etc.
 */
taoensso.telemere.utils.format_nsecs_fn = (function taoensso$telemere$utils$format_nsecs_fn(var_args){
var G__62415 = arguments.length;
switch (G__62415) {
case 0:
return taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62421){
var map__62423 = p__62421;
var map__62423__$1 = cljs.core.__destructure_map(map__62423);
var _opts = map__62423__$1;
return (function taoensso$telemere$utils$format_nsecs(nanosecs){
return taoensso.encore.format_nsecs(nanosecs);
});
}));

(taoensso.telemere.utils.format_nsecs_fn.cljs$lang$maxFixedArity = 1);

/**
 * Experimental, subject to change without notice.
 * 
 *   Returns a (fn format [instant]) that:
 *  - Takes a platform instant (`java.time.Instant` or `js/Date`).
 *  - Returns a formatted human-readable instant string.
 * 
 *   Options:
 *  `:formatter`
 *    Clj:  `java.time.format.DateTimeFormatter`
 *    Cljs: `goog.i18n.DateTimeFormat`
 * 
 *    Defaults to `ISO8601` formatter (`YYYY-MM-DDTHH:mm:ss.sssZ`),
 *    e.g.: "2011-12-03T10:15:130Z".
 * 
 *  `:zone` (Clj only) `java.time.ZoneOffset` (defaults to UTC).
 *   Note that zone may be ignored by some `DateTimeFormatter`s,
 *   including the default (`DateTimeFormatter/ISO_INSTANT`)!
 */
taoensso.telemere.utils.format_inst_fn = taoensso.encore.format_inst_fn;
/**
 * Experimental, subject to change.
 *   Returns a (fn format [error]) that:
 *  - Takes a platform error (`Throwable` or `js/Error`).
 *  - Returns a human-readable error string.
 */
taoensso.telemere.utils.format_error_fn = (function taoensso$telemere$utils$format_error_fn(var_args){
var G__62431 = arguments.length;
switch (G__62431) {
case 0:
return taoensso.telemere.utils.format_error_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.format_error_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.format_error_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.format_error_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.format_error_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62433){
var map__62434 = p__62433;
var map__62434__$1 = cljs.core.__destructure_map(map__62434);
var _opts = map__62434__$1;
var nl = "\n";
var nls = taoensso.encore.newlines;
return (function taoensso$telemere$utils$format_error(error){
var temp__5823__auto__ = taoensso.encore.ex_map(error);
if(cljs.core.truth_(temp__5823__auto__)){
var em = temp__5823__auto__;
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var s_PLUS_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.sb_append,sb);
var map__62435 = em;
var map__62435__$1 = cljs.core.__destructure_map(map__62435);
var chain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"chain","chain",15631029));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62435__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var s_PLUS_cause_62660 = taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(sb,[nls,"Caused: "].join(''));
s_PLUS_("  Root: ");

var seq__62439_62661 = cljs.core.seq(cljs.core.rseq(chain));
var chunk__62440_62662 = null;
var count__62441_62663 = (0);
var i__62442_62664 = (0);
while(true){
if((i__62442_62664 < count__62441_62663)){
var map__62452_62665 = chunk__62440_62662.cljs$core$IIndexed$_nth$arity$2(null, i__62442_62664);
var map__62452_62666__$1 = cljs.core.__destructure_map(map__62452_62665);
var type_62667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452_62666__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var msg_62668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452_62666__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var data_62669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62452_62666__$1,new cljs.core.Keyword(null,"data","data",-232669377));
s_PLUS_cause_62660(type_62667," - ",msg_62668);

if(cljs.core.truth_(data_62669)){
s_PLUS_(nl,"  data: ",taoensso.encore.pr_edn_STAR_(data_62669));
} else {
}


var G__62672 = seq__62439_62661;
var G__62673 = chunk__62440_62662;
var G__62674 = count__62441_62663;
var G__62675 = (i__62442_62664 + (1));
seq__62439_62661 = G__62672;
chunk__62440_62662 = G__62673;
count__62441_62663 = G__62674;
i__62442_62664 = G__62675;
continue;
} else {
var temp__5823__auto___62676__$1 = cljs.core.seq(seq__62439_62661);
if(temp__5823__auto___62676__$1){
var seq__62439_62678__$1 = temp__5823__auto___62676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62439_62678__$1)){
var c__5525__auto___62679 = cljs.core.chunk_first(seq__62439_62678__$1);
var G__62681 = cljs.core.chunk_rest(seq__62439_62678__$1);
var G__62682 = c__5525__auto___62679;
var G__62683 = cljs.core.count(c__5525__auto___62679);
var G__62684 = (0);
seq__62439_62661 = G__62681;
chunk__62440_62662 = G__62682;
count__62441_62663 = G__62683;
i__62442_62664 = G__62684;
continue;
} else {
var map__62455_62686 = cljs.core.first(seq__62439_62678__$1);
var map__62455_62687__$1 = cljs.core.__destructure_map(map__62455_62686);
var type_62688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62455_62687__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var msg_62689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62455_62687__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var data_62690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62455_62687__$1,new cljs.core.Keyword(null,"data","data",-232669377));
s_PLUS_cause_62660(type_62688," - ",msg_62689);

if(cljs.core.truth_(data_62690)){
s_PLUS_(nl,"  data: ",taoensso.encore.pr_edn_STAR_(data_62690));
} else {
}


var G__62695 = cljs.core.next(seq__62439_62678__$1);
var G__62696 = null;
var G__62697 = (0);
var G__62698 = (0);
seq__62439_62661 = G__62695;
chunk__62440_62662 = G__62696;
count__62441_62663 = G__62697;
i__62442_62664 = G__62698;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(trace)){
s_PLUS_(nl,nl,"Root stack trace:",nl);

s_PLUS_(trace);
} else {
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
});
}));

(taoensso.telemere.utils.format_error_fn.cljs$lang$maxFixedArity = 1);

/**
 * Experimental, subject to change.
 *   Returns a (fn preamble [signal]) that:
 *  - Takes a Telemere signal (map).
 *  - Returns a signal preamble ?string like:
 *    "2024-03-26T11:14:51.806Z INFO EVENT Hostname taoensso.telemere(2,21) ::ev-id msg"
 * 
 *   Options:
 *  `:format-inst-fn` - (fn format [instant]) => string.
 *  `:format-id-fn`   - (fn format [ns id])   => string.
 *  `:format-msg-fn`  - (fn format [msg])     => string.
 */
taoensso.telemere.utils.signal_preamble_fn = (function taoensso$telemere$utils$signal_preamble_fn(var_args){
var G__62457 = arguments.length;
switch (G__62457) {
case 0:
return taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62462){
var map__62463 = p__62462;
var map__62463__$1 = cljs.core.__destructure_map(map__62463);
var format_inst_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62463__$1,new cljs.core.Keyword(null,"format-inst-fn","format-inst-fn",518148350),(taoensso.telemere.utils.format_inst_fn.cljs$core$IFn$_invoke$arity$0 ? taoensso.telemere.utils.format_inst_fn.cljs$core$IFn$_invoke$arity$0() : taoensso.telemere.utils.format_inst_fn.call(null, )));
var format_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62463__$1,new cljs.core.Keyword(null,"format-id-fn","format-id-fn",513589829),taoensso.telemere.utils.format_id);
var format_msg_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62463__$1,new cljs.core.Keyword(null,"format-msg-fn","format-msg-fn",-1387049398),cljs.core.identity);
return (function taoensso$telemere$utils$signal_preamble(signal){
var map__62465 = signal;
var map__62465__$1 = cljs.core.__destructure_map(map__62465);
var inst = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62465__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var s_PLUS_spc = taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(sb," ");
if(cljs.core.truth_(inst)){
var temp__5823__auto___62706 = format_inst_fn;
if(cljs.core.truth_(temp__5823__auto___62706)){
var ff_62710 = temp__5823__auto___62706;
s_PLUS_spc((ff_62710.cljs$core$IFn$_invoke$arity$1 ? ff_62710.cljs$core$IFn$_invoke$arity$1(inst) : ff_62710.call(null, inst)));
} else {
}
} else {
}

if(cljs.core.truth_(level)){
s_PLUS_spc((taoensso.telemere.utils.format_level.cljs$core$IFn$_invoke$arity$1 ? taoensso.telemere.utils.format_level.cljs$core$IFn$_invoke$arity$1(level) : taoensso.telemere.utils.format_level.call(null, level)));
} else {
}

if(cljs.core.truth_(kind)){
s_PLUS_spc((taoensso.encore.signals.upper_qn.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.signals.upper_qn.cljs$core$IFn$_invoke$arity$1(kind) : taoensso.encore.signals.upper_qn.call(null, kind)));
} else {
s_PLUS_spc("DEFAULT");
}

var temp__5823__auto___62713 = (function (){var or__5002__auto__ = ns;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"file","file",-1269645878));
}
})();
if(cljs.core.truth_(temp__5823__auto___62713)){
var base_62715 = temp__5823__auto___62713;
var s_PLUS__62716 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.encore.sb_append,sb);
s_PLUS__62716(" ",base_62715);

var temp__5823__auto___62717__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"line","line",212345235));
if(cljs.core.truth_(temp__5823__auto___62717__$1)){
var l_62718 = temp__5823__auto___62717__$1;
s_PLUS__62716("(",l_62718);

var temp__5823__auto___62719__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(temp__5823__auto___62719__$2)){
var c_62720 = temp__5823__auto___62719__$2;
s_PLUS__62716(",",c_62720);
} else {
}

s_PLUS__62716(")");
} else {
}
} else {
}

if(cljs.core.truth_(id)){
var temp__5823__auto___62721 = format_id_fn;
if(cljs.core.truth_(temp__5823__auto___62721)){
var ff_62722 = temp__5823__auto___62721;
s_PLUS_spc((ff_62722.cljs$core$IFn$_invoke$arity$2 ? ff_62722.cljs$core$IFn$_invoke$arity$2(ns,id) : ff_62722.call(null, ns,id)));
} else {
}
} else {
}

var b2__38440__auto___62723 = format_msg_fn;
if(cljs.core.truth_(b2__38440__auto___62723)){
var ff_62724 = b2__38440__auto___62723;
var b2__38440__auto___62725__$1 = cljs.core.force(msg_);
if(cljs.core.truth_(b2__38440__auto___62725__$1)){
var msg_62726 = b2__38440__auto___62725__$1;
s_PLUS_spc((ff_62724.cljs$core$IFn$_invoke$arity$1 ? ff_62724.cljs$core$IFn$_invoke$arity$1(msg_62726) : ff_62724.call(null, msg_62726)));
} else {
}
} else {
}

if((taoensso.encore.sb_length(sb) === (0))){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}
});
}));

(taoensso.telemere.utils.signal_preamble_fn.cljs$lang$maxFixedArity = 1);

taoensso.telemere.utils.format_parent = (function taoensso$telemere$utils$format_parent(ns,p__62481){
var map__62483 = p__62481;
var map__62483__$1 = cljs.core.__destructure_map(map__62483);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62483__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((taoensso.telemere.utils.format_id.cljs$core$IFn$_invoke$arity$2 ? taoensso.telemere.utils.format_id.cljs$core$IFn$_invoke$arity$2(ns,id) : taoensso.telemere.utils.format_id.call(null, ns,id))),new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null);
});
/**
 * Experimental, subject to change.
 *   Returns a (fn content [signal]) that:
 *  - Takes a Telemere signal (map).
 *  - Returns a human-readable signal content ?string (incl. data, ctx, etc.).
 * 
 *   Options:
 *  `:raw-error?`      - Retain unformatted error? (default false)
 *  `:incl-keys`       - Subset of signal keys to retain from those
 *                       otherwise excluded by default: #{:kvs :host :thread}
 *  `:format-nsecs-fn` - (fn [nanosecs]) => string.
 *  `:format-error-fn` - (fn [error])    => string.
 */
taoensso.telemere.utils.signal_content_fn = (function taoensso$telemere$utils$signal_content_fn(var_args){
var G__62491 = arguments.length;
switch (G__62491) {
case 0:
return taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62494){
var map__62498 = p__62494;
var map__62498__$1 = cljs.core.__destructure_map(map__62498);
var raw_error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62498__$1,new cljs.core.Keyword(null,"raw-error?","raw-error?",-39485940));
var incl_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62498__$1,new cljs.core.Keyword(null,"incl-keys","incl-keys",625658308));
var format_nsecs_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62498__$1,new cljs.core.Keyword(null,"format-nsecs-fn","format-nsecs-fn",-1487810716),taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$0());
var format_error_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62498__$1,new cljs.core.Keyword(null,"format-error-fn","format-error-fn",-560488578),taoensso.telemere.utils.format_error_fn.cljs$core$IFn$_invoke$arity$0());
var nl = taoensso.telemere.utils.newline;
var err_start = [nl,"<<< error <<<",nl].join('');
var err_stop = [nl,">>> error >>>"].join('');
var incl_kvs_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var incl_host_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"host","host",-1558485167));
var incl_thread_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"thread","thread",947001524));
return (function() {
var taoensso$telemere$utils$signal_content = null;
var taoensso$telemere$utils$signal_content__1 = (function (signal){
var sb = taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
var s_PLUS__PLUS_ = taoensso.encore.sb_appender.cljs$core$IFn$_invoke$arity$2(sb,nl);
taoensso$telemere$utils$signal_content.cljs$core$IFn$_invoke$arity$3(signal,s_PLUS__PLUS_,taoensso.encore.pr_edn_STAR_);

if((taoensso.encore.sb_length(sb) === (0))){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}
});
var taoensso$telemere$utils$signal_content__3 = (function (signal,append_fn,val_fn){
var af = append_fn;
var vf = val_fn;
var map__62508_62734 = signal;
var map__62508_62736__$1 = cljs.core.__destructure_map(map__62508_62734);
var ns_62737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var uid_62738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var parent_62739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var root_62740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"root","root",-448657453));
var data_62741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var kvs_62742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var ctx_62743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var sample_rate_62744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62508_62736__$1,new cljs.core.Keyword(null,"sample-rate","sample-rate",-603246554));
if(cljs.core.truth_(sample_rate_62744)){
var G__62516_62745 = " sample: ";
var G__62517_62746 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(sample_rate_62744) : vf.call(null, sample_rate_62744));
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62516_62745,G__62517_62746) : af.call(null, G__62516_62745,G__62517_62746));
} else {
}

if(cljs.core.truth_(uid_62738)){
var G__62518_62747 = "    uid: ";
var G__62519_62748 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(uid_62738) : vf.call(null, uid_62738));
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62518_62747,G__62519_62748) : af.call(null, G__62518_62747,G__62519_62748));
} else {
}

if(cljs.core.truth_(parent_62739)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_62739,root_62740)){
var G__62520_62749 = " parent: ";
var G__62521_62750 = (function (){var G__62523 = taoensso.telemere.utils.format_parent(ns_62737,parent_62739);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__62523) : vf.call(null, G__62523));
})();
var G__62522_62751 = " (also root)";
(af.cljs$core$IFn$_invoke$arity$3 ? af.cljs$core$IFn$_invoke$arity$3(G__62520_62749,G__62521_62750,G__62522_62751) : af.call(null, G__62520_62749,G__62521_62750,G__62522_62751));
} else {
var G__62528_62753 = " parent: ";
var G__62529_62754 = (function (){var G__62531 = taoensso.telemere.utils.format_parent(ns_62737,parent_62739);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__62531) : vf.call(null, G__62531));
})();
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62528_62753,G__62529_62754) : af.call(null, G__62528_62753,G__62529_62754));

if(cljs.core.truth_(root_62740)){
var G__62532_62755 = "   root: ";
var G__62533_62756 = (function (){var G__62534 = taoensso.telemere.utils.format_parent(ns_62737,root_62740);
return (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(G__62534) : vf.call(null, G__62534));
})();
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62532_62755,G__62533_62756) : af.call(null, G__62532_62755,G__62533_62756));
} else {
}
}
} else {
}

if(cljs.core.truth_(taoensso.encore.not_empty_coll(data_62741))){
var G__62535_62757 = "   data: ";
var G__62536_62758 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(data_62741) : vf.call(null, data_62741));
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62535_62757,G__62536_62758) : af.call(null, G__62535_62757,G__62536_62758));
} else {
}

if(cljs.core.truth_(taoensso.encore.not_empty_coll(ctx_62743))){
var G__62537_62759 = "    ctx: ";
var G__62538_62760 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(ctx_62743) : vf.call(null, ctx_62743));
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62537_62759,G__62538_62760) : af.call(null, G__62537_62759,G__62538_62760));
} else {
}

if((cljs.core.truth_(kvs_62742)?incl_kvs_QMARK_:false)){
var G__62540_62761 = "    kvs: ";
var G__62541_62762 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(kvs_62742) : vf.call(null, kvs_62742));
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62540_62761,G__62541_62762) : af.call(null, G__62540_62761,G__62541_62762));
} else {
}

var map__62542 = signal;
var map__62542__$1 = cljs.core.__destructure_map(map__62542);
var run_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62542__$1,new cljs.core.Keyword(null,"run-form","run-form",405647397));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62542__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(run_form)){
var map__62543_62763 = signal;
var map__62543_62764__$1 = cljs.core.__destructure_map(map__62543_62763);
var run_val_62765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543_62764__$1,new cljs.core.Keyword(null,"run-val","run-val",-304326520));
var run_nsecs_62766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543_62764__$1,new cljs.core.Keyword(null,"run-nsecs","run-nsecs",32621724));
var run_time_62767 = (cljs.core.truth_(run_nsecs_62766)?(function (){var temp__5823__auto__ = format_nsecs_fn;
if(cljs.core.truth_(temp__5823__auto__)){
var ff = temp__5823__auto__;
return (ff.cljs$core$IFn$_invoke$arity$1 ? ff.cljs$core$IFn$_invoke$arity$1(run_nsecs_62766) : ff.call(null, run_nsecs_62766));
} else {
return null;
}
})():null);
var run_info_62768 = (cljs.core.truth_(error)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),run_form,new cljs.core.Keyword(null,"time","time",1385887882),run_time_62767,new cljs.core.Keyword(null,"nsecs","nsecs",1510077757),run_nsecs_62766], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form","form",-1624062471),run_form,new cljs.core.Keyword(null,"time","time",1385887882),run_time_62767,new cljs.core.Keyword(null,"nsecs","nsecs",1510077757),run_nsecs_62766,new cljs.core.Keyword(null,"val","val",128701612),run_val_62765], null));
var G__62544_62771 = "    run: ";
var G__62545_62772 = (vf.cljs$core$IFn$_invoke$arity$1 ? vf.cljs$core$IFn$_invoke$arity$1(run_info_62768) : vf.call(null, run_info_62768));
(af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2(G__62544_62771,G__62545_62772) : af.call(null, G__62544_62771,G__62545_62772));
} else {
}

if(cljs.core.truth_(error)){
if(cljs.core.truth_(raw_error_QMARK_)){
return (af.cljs$core$IFn$_invoke$arity$2 ? af.cljs$core$IFn$_invoke$arity$2("  error: ",error) : af.call(null, "  error: ",error));
} else {
var temp__5823__auto__ = format_error_fn;
if(cljs.core.truth_(temp__5823__auto__)){
var ff = temp__5823__auto__;
var G__62550 = err_start;
var G__62551 = (ff.cljs$core$IFn$_invoke$arity$1 ? ff.cljs$core$IFn$_invoke$arity$1(error) : ff.call(null, error));
var G__62552 = err_stop;
return (af.cljs$core$IFn$_invoke$arity$3 ? af.cljs$core$IFn$_invoke$arity$3(G__62550,G__62551,G__62552) : af.call(null, G__62550,G__62551,G__62552));
} else {
return null;
}
}
} else {
return null;
}
});
taoensso$telemere$utils$signal_content = function(signal,append_fn,val_fn){
switch(arguments.length){
case 1:
return taoensso$telemere$utils$signal_content__1.call(this,signal);
case 3:
return taoensso$telemere$utils$signal_content__3.call(this,signal,append_fn,val_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$telemere$utils$signal_content.cljs$core$IFn$_invoke$arity$1 = taoensso$telemere$utils$signal_content__1;
taoensso$telemere$utils$signal_content.cljs$core$IFn$_invoke$arity$3 = taoensso$telemere$utils$signal_content__3;
return taoensso$telemere$utils$signal_content;
})()
}));

(taoensso.telemere.utils.signal_content_fn.cljs$lang$maxFixedArity = 1);

/**
 * Experimental, subject to change.
 *   Returns a (fn clean [signal]) that:
 *  - Takes a Telemere  signal (map).
 *  - Returns a minimal signal (map) ready for printing, etc.
 * 
 *   Signals are optimized for cheap creation and easy handling, so tend to be
 *   verbose and may contain things like nil values and duplicated content.
 * 
 *   This util efficiently cleans signals of such noise, helping reduce
 *   storage/transmission size, and making key info easier to see.
 * 
 *   Options:
 *  `:incl-nils?` - Include signal's keys with nil values? (default false)
 *  `:incl-kvs?`  - Include signal's app-level root kvs?   (default false)
 *  `:incl-keys`  - Subset of signal keys to retain from those otherwise
 *                  excluded by default: #{:location :kvs :file :host :thread}
 */
taoensso.telemere.utils.clean_signal_fn = (function taoensso$telemere$utils$clean_signal_fn(var_args){
var G__62555 = arguments.length;
switch (G__62555) {
case 0:
return taoensso.telemere.utils.clean_signal_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.clean_signal_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.clean_signal_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.clean_signal_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.clean_signal_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62559){
var map__62560 = p__62559;
var map__62560__$1 = cljs.core.__destructure_map(map__62560);
var opts = map__62560__$1;
var incl_kvs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62560__$1,new cljs.core.Keyword(null,"incl-kvs?","incl-kvs?",1936239040));
var incl_nils_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62560__$1,new cljs.core.Keyword(null,"incl-nils?","incl-nils?",-1704506526));
var incl_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62560__$1,new cljs.core.Keyword(null,"incl-keys","incl-keys",625658308));
var assoc_BANG__STAR_ = ((cljs.core.not(incl_nils_QMARK_))?(function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}):cljs.core.assoc_BANG_);
var incl_location_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"location","location",1815599388));
var incl_kvs_key_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"kvs","kvs",958455492));
var incl_file_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"file","file",-1269645878));
var incl_host_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"host","host",-1558485167));
var incl_thread_QMARK_ = cljs.core.contains_QMARK_(incl_keys,new cljs.core.Keyword(null,"thread","thread",947001524));
return (function taoensso$telemere$utils$clean_signal(signal){
if(cljs.core.map_QMARK_(signal)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var G__62579 = k;
var G__62579__$1 = (((G__62579 instanceof cljs.core.Keyword))?G__62579.fqn:null);
switch (G__62579__$1) {
case "data":
case "run-nsecs":
case "ctx":
case "kind":
case "id":
case "root":
case "line":
case "level":
case "column":
case "ns":
case "uid":
case "run-val":
case "sample-rate":
case "parent":
case "inst":
case "run-form":
case "end-inst":
case "schema":
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));

break;
case "error":
var temp__5821__auto__ = taoensso.encore.ex_chain.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as-map","as-map",633645847),v);
if(cljs.core.truth_(temp__5821__auto__)){
var chain = temp__5821__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,chain);
} else {
return m;
}

break;
case "msg_":
var G__62584 = m;
var G__62585 = k;
var G__62586 = cljs.core.force(v);
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(G__62584,G__62585,G__62586) : assoc_BANG__STAR_.call(null, G__62584,G__62585,G__62586));

break;
case "_otel-context":
return m;

break;
case "location":
if(incl_location_QMARK_){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
return m;
}

break;
case "kvs":
if(incl_kvs_key_QMARK_){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
return m;
}

break;
case "file":
if(incl_file_QMARK_){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
return m;
}

break;
case "thread":
if(incl_thread_QMARK_){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
return m;
}

break;
case "host":
if(incl_host_QMARK_){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
return m;
}

break;
default:
if(cljs.core.truth_(incl_kvs_QMARK_)){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
if(cljs.core.contains_QMARK_(incl_keys,k)){
return (assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? assoc_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(m,k,v) : assoc_BANG__STAR_.call(null, m,k,v));
} else {
return m;
}
}

}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),signal));
} else {
return null;
}
});
}));

(taoensso.telemere.utils.clean_signal_fn.cljs$lang$maxFixedArity = 1);

/**
 * Experimental, subject to change.
 *   Returns a (fn pr [signal]) that:
 *  - Takes a Telemere signal (map).
 *  - Returns a machine-readable signal string.
 * 
 *   Options:
 *  `:pr-fn`         - ∈ #{<unary-fn> :edn (default) :json (Cljs only)}
 *  `:clean-fn`      - (fn [signal]) => clean signal map, see [1]
 *  `:incl-newline?` - Include terminating system newline? (default true)
 * 
 *   Examples:
 * 
 *  ;; To print as edn:
 *  (pr-signal-fn {:pr-fn :edn})
 * 
 *  ;; To print as JSON:
 *  ;; Ref.  <https://github.com/metosin/jsonista> (or any alt JSON lib)
 *  #?(:clj (require '[jsonista.core :as jsonista]))
 *  (pr-signal-fn
 *    {:pr-fn
 *      #?(:cljs :json ; Use js/JSON.stringify
 *         :clj  jsonista/write-value-as-string)})
 * 
 *   [1] `taoensso.telemere.utils/clean-signal-fn`, etc.
 * 
 *   See also `format-signal-fn` for an alternative to `pr-signal-fn`
 *   that produces human-readable output.
 */
taoensso.telemere.utils.pr_signal_fn = (function taoensso$telemere$utils$pr_signal_fn(var_args){
var G__62595 = arguments.length;
switch (G__62595) {
case 0:
return taoensso.telemere.utils.pr_signal_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.pr_signal_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.pr_signal_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.pr_signal_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.pr_signal_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62600){
var map__62601 = p__62600;
var map__62601__$1 = cljs.core.__destructure_map(map__62601);
var opts = map__62601__$1;
var pr_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62601__$1,new cljs.core.Keyword(null,"pr-fn","pr-fn",2001500794),new cljs.core.Keyword(null,"edn","edn",1317840885));
var clean_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62601__$1,new cljs.core.Keyword(null,"clean-fn","clean-fn",-1262646726),taoensso.telemere.utils.clean_signal_fn.cljs$core$IFn$_invoke$arity$0());
var incl_newline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62601__$1,new cljs.core.Keyword(null,"incl-newline?","incl-newline?",1384416974),true);
var nl = taoensso.telemere.utils.newline;
var pr_fn__$1 = (function (){var G__62602 = pr_fn;
var G__62602__$1 = (((G__62602 instanceof cljs.core.Keyword))?G__62602.fqn:null);
switch (G__62602__$1) {
case "edn":
return taoensso.telemere.utils.pr_edn;

break;
case "json":
return taoensso.telemere.utils.pr_json;

break;
default:
if(cljs.core.fn_QMARK_(pr_fn)){
return pr_fn;
} else {
return taoensso.encore.unexpected_arg_BANG_.cljs$core$IFn$_invoke$arity$2(pr_fn,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Symbol("taoensso.telemere.utils","pr-signal-fn","taoensso.telemere.utils/pr-signal-fn",-829484633,null),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Symbol(null,"pr-fn","pr-fn",-652934975,null),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"unary-fn","unary-fn",1332940686,null),"null",new cljs.core.Keyword(null,"edn","edn",1317840885),"null",new cljs.core.Keyword(null,"json","json",1279968570),"null"], null), null)], null));
}

}
})();
return (function taoensso$telemere$utils$pr_signal(signal){
if(cljs.core.map_QMARK_(signal)){
if(cljs.core.truth_(incl_newline_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__62604 = (clean_fn.cljs$core$IFn$_invoke$arity$1 ? clean_fn.cljs$core$IFn$_invoke$arity$1(signal) : clean_fn.call(null, signal));
return (pr_fn__$1.cljs$core$IFn$_invoke$arity$1 ? pr_fn__$1.cljs$core$IFn$_invoke$arity$1(G__62604) : pr_fn__$1.call(null, G__62604));
})()),nl].join('');
} else {
var G__62605 = (clean_fn.cljs$core$IFn$_invoke$arity$1 ? clean_fn.cljs$core$IFn$_invoke$arity$1(signal) : clean_fn.call(null, signal));
return (pr_fn__$1.cljs$core$IFn$_invoke$arity$1 ? pr_fn__$1.cljs$core$IFn$_invoke$arity$1(G__62605) : pr_fn__$1.call(null, G__62605));
}
} else {
return null;
}
});
}));

(taoensso.telemere.utils.pr_signal_fn.cljs$lang$maxFixedArity = 1);

/**
 * Experimental, subject to change.
 *   Returns a (fn format [signal]) that:
 *  - Takes a Telemere signal (map).
 *  - Returns a human-readable signal string.
 * 
 *   Options:
 *  `:incl-newline?` - Include terminating system newline? (default true)
 *  `:preamble-fn`   - (fn [signal]) => signal preamble string, see [1]
 *  `:content-fn`    - (fn [signal]) => signal content  string, see [2]
 * 
 *   [1] `taoensso.telemere.utils/signal-preamble-fn`, etc.
 *   [2] `taoensso.telemere.utils/signal-content-fn`,  etc.
 * 
 *   See also `pr-signal-fn` for an alternative to `format-signal-fn`
 *   that produces machine-readable output (edn, JSON, etc.).
 */
taoensso.telemere.utils.format_signal_fn = (function taoensso$telemere$utils$format_signal_fn(var_args){
var G__62610 = arguments.length;
switch (G__62610) {
case 0:
return taoensso.telemere.utils.format_signal_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.utils.format_signal_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.utils.format_signal_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.utils.format_signal_fn.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.utils.format_signal_fn.cljs$core$IFn$_invoke$arity$1 = (function (p__62611){
var map__62612 = p__62611;
var map__62612__$1 = cljs.core.__destructure_map(map__62612);
var incl_newline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62612__$1,new cljs.core.Keyword(null,"incl-newline?","incl-newline?",1384416974),true);
var preamble_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62612__$1,new cljs.core.Keyword(null,"preamble-fn","preamble-fn",-900320209),taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$0());
var content_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62612__$1,new cljs.core.Keyword(null,"content-fn","content-fn",-1280686114),taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$0());
var nl = taoensso.telemere.utils.newline;
return (function taoensso$telemere$utils$format_signal(signal){
var preamble = (cljs.core.truth_(preamble_fn)?(preamble_fn.cljs$core$IFn$_invoke$arity$1 ? preamble_fn.cljs$core$IFn$_invoke$arity$1(signal) : preamble_fn.call(null, signal)):null);
var content = (cljs.core.truth_(content_fn)?(content_fn.cljs$core$IFn$_invoke$arity$1 ? content_fn.cljs$core$IFn$_invoke$arity$1(signal) : content_fn.call(null, signal)):null);
if(cljs.core.truth_((function (){var and__5000__auto__ = preamble;
if(cljs.core.truth_(and__5000__auto__)){
return content;
} else {
return and__5000__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),nl,cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),(cljs.core.truth_(incl_newline_QMARK_)?nl:null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(preamble),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),(cljs.core.truth_(incl_newline_QMARK_)?nl:null)].join('');
}
});
}));

(taoensso.telemere.utils.format_signal_fn.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=taoensso.telemere.utils.js.map
