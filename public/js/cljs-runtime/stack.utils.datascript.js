goog.provide('stack.utils.datascript');
stack.utils.datascript.Datom = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"bool","bool",1444635321)], null)], null);
stack.utils.datascript.Transaction = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),stack.utils.datascript.Datom], null)], null)], null);
stack.utils.datascript.TransactionLog = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),stack.utils.datascript.Transaction], null);
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.datascript !== 'undefined') && (typeof stack.utils.datascript.tx_log_schema_version !== 'undefined')){
} else {
stack.utils.datascript.tx_log_schema_version = (1);
}
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.datascript !== 'undefined') && (typeof stack.utils.datascript.tx_log_store_id !== 'undefined')){
} else {
stack.utils.datascript.tx_log_store_id = "tx-log";
}
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.datascript !== 'undefined') && (typeof stack.utils.datascript.tx_log_conn !== 'undefined')){
} else {
stack.utils.datascript.tx_log_conn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
stack.utils.datascript.empty_db = (function stack$utils$datascript$empty_db(id,schema){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.Keyword(null,"tx-log","tx-log",1002405833),null], null);
});
stack.utils.datascript.load_db_value = (function stack$utils$datascript$load_db_value(id,schema){
var or__5002__auto__ = stack.apis.local_storage.deserialise(id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema);
}
});
stack.utils.datascript.save_db_value = (function stack$utils$datascript$save_db_value(id,data){
return setTimeout((function (){
return stack.apis.local_storage.serialise(id,data);
}));
});
stack.utils.datascript.reload_simple_db_BANG_ = (function stack$utils$datascript$reload_simple_db_BANG_(db_atom){
var map__96479 = cljs.core.deref(db_atom);
var map__96479__$1 = cljs.core.__destructure_map(map__96479);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96479__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96479__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.reset_BANG_(db_atom,cljs.core.assoc_in(cljs.core.deref(db_atom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),stack.utils.datascript.load_db_value(id,schema)));
});
/**
 * Create a DB with value persistence (i.e. no transaction log / temporal functionality)
 */
stack.utils.datascript.create_simple_db = (function stack$utils$datascript$create_simple_db(id,schema){
var db_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(stack.utils.datascript.empty_db(id,schema));
stack.utils.datascript.reload_simple_db_BANG_(db_atom);

cljs.core.add_watch(db_atom,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),(function (_key,_atom,_old_state,p__96481){
var map__96482 = p__96481;
var map__96482__$1 = cljs.core.__destructure_map(map__96482);
var _new_state = map__96482__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96482__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return stack.utils.datascript.save_db_value(id,data);
}));

return db_atom;
});
stack.utils.datascript.replay = (function stack$utils$datascript$replay(schema,transactions){
var data = datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema);
var datoms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),transactions);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.core.db_with,cljs.core.cons(data,datoms));
});
stack.utils.datascript.rebuild = (function stack$utils$datascript$rebuild(p__96483,transactions){
var map__96484 = p__96483;
var map__96484__$1 = cljs.core.__destructure_map(map__96484);
var db = map__96484__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96484__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var schema = new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"data","data",-232669377),stack.utils.datascript.replay(schema,transactions)),new cljs.core.Keyword(null,"tx-log","tx-log",1002405833),transactions),new cljs.core.Keyword(null,"tx-times","tx-times",-690029852),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),transactions)),new cljs.core.Keyword(null,"valid-times","valid-times",-1544145409),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),transactions));
});
stack.utils.datascript.rebuild_BANG_ = (function stack$utils$datascript$rebuild_BANG_(db_atom,transactions){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(db_atom,stack.utils.datascript.rebuild,transactions);
});
stack.utils.datascript.augment_transaction = (function stack$utils$datascript$augment_transaction(tx_data){
var tx_id = datascript.db.datom_tx(cljs.core.first(tx_data));
var timestamp = Date.now();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tx_id,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),timestamp,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),timestamp,new cljs.core.Keyword(null,"datoms","datoms",-290874434),tx_data], null);
});
stack.utils.datascript.as_of = (function stack$utils$datascript$as_of(var_args){
var args__5732__auto__ = [];
var len__5726__auto___96614 = arguments.length;
var i__5727__auto___96615 = (0);
while(true){
if((i__5727__auto___96615 < len__5726__auto___96614)){
args__5732__auto__.push((arguments[i__5727__auto___96615]));

var G__96618 = (i__5727__auto___96615 + (1));
i__5727__auto___96615 = G__96618;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.utils.datascript.as_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.utils.datascript.as_of.cljs$core$IFn$_invoke$arity$variadic = (function (db,p__96505){
var map__96506 = p__96505;
var map__96506__$1 = cljs.core.__destructure_map(map__96506);
var tx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96506__$1,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),Date.now());
var valid_time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96506__$1,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),Date.now());
var transactions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__96495_SHARP_){
return (((new cljs.core.Keyword(null,"tx-time","tx-time",1760515071).cljs$core$IFn$_invoke$arity$1(p1__96495_SHARP_) <= tx_time)) && ((new cljs.core.Keyword(null,"valid-time","valid-time",1635730538).cljs$core$IFn$_invoke$arity$1(p1__96495_SHARP_) <= valid_time)));
}),new cljs.core.Keyword(null,"tx-log","tx-log",1002405833).cljs$core$IFn$_invoke$arity$1(db));
return stack.utils.datascript.replay(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db),transactions);
}));

(stack.utils.datascript.as_of.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.utils.datascript.as_of.cljs$lang$applyTo = (function (seq96498){
var G__96499 = cljs.core.first(seq96498);
var seq96498__$1 = cljs.core.next(seq96498);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96499,seq96498__$1);
}));

stack.utils.datascript.as_serialisable_datom = (function stack$utils$datascript$as_serialisable_datom(da){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(da),new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(da)], 0)),new cljs.core.Keyword(null,"v","v",21465059),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(da)], 0)),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(da),new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(da)], null);
});
stack.utils.datascript.as_serialisable_transaction = (function stack$utils$datascript$as_serialisable_transaction(tx){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(function (p1__96519_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(stack.utils.datascript.as_serialisable_datom,p1__96519_SHARP_));
}));
});
stack.utils.datascript.from_serialisable_datom = (function stack$utils$datascript$from_serialisable_datom(da){
var G__96528 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(da);
var G__96529 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(da));
var G__96530 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(da));
var G__96531 = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(da);
var G__96532 = new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(da);
return (datascript.core.datom.cljs$core$IFn$_invoke$arity$5 ? datascript.core.datom.cljs$core$IFn$_invoke$arity$5(G__96528,G__96529,G__96530,G__96531,G__96532) : datascript.core.datom.call(null, G__96528,G__96529,G__96530,G__96531,G__96532));
});
stack.utils.datascript.from_serialisable_transaction = (function stack$utils$datascript$from_serialisable_transaction(tx){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(function (p1__96534_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(stack.utils.datascript.from_serialisable_datom,p1__96534_SHARP_));
}));
});
stack.utils.datascript.add_tx_PLUS_ = (function stack$utils$datascript$add_tx_PLUS_(tx){
return stack.apis.indexed_db.add_PLUS_(cljs.core.deref(stack.utils.datascript.tx_log_conn),stack.utils.datascript.tx_log_store_id,stack.utils.datascript.as_serialisable_transaction(tx));
});
stack.utils.datascript.read_transactions_PLUS_ = (function stack$utils$datascript$read_transactions_PLUS_(idb_conn){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.datascript";
var __id = new cljs.core.Keyword("stack.utils.datascript","read-transactions","stack.utils.datascript/read-transactions",1509948760);
var __level = new cljs.core.Keyword(null,"info","info",-317069002);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.datascript",new cljs.core.Keyword(null,"line","line",212345235),121,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/datascript.cljs"], null),__ns,121,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/datascript.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conn","conn",278309663),idb_conn,new cljs.core.Keyword(null,"id","id",-1388402092),idb_conn.name], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.indexed_db.get_all_PLUS_.cljs$core$IFn$_invoke$arity$variadic(idb_conn,stack.utils.datascript.tx_log_store_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"vector","vector",1902966158)], 0)),(function (p1__96544_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(stack.utils.datascript.from_serialisable_transaction,p1__96544_SHARP_));
}));
});
stack.utils.datascript.tx_log_schema_upgrade_handler = (function stack$utils$datascript$tx_log_schema_upgrade_handler(idb){
return idb.createObjectStore(stack.utils.datascript.tx_log_store_id,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyPath","keyPath",-1845944323),"id"], null)));
});
stack.utils.datascript.open_tx_log_PLUS_ = (function stack$utils$datascript$open_tx_log_PLUS_(id){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.apis.indexed_db.open_PLUS_.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema-version","schema-version",1117939594),stack.utils.datascript.tx_log_schema_version,new cljs.core.Keyword(null,"on-upgrade","on-upgrade",1146037332),stack.utils.datascript.tx_log_schema_upgrade_handler], 0)),(function (p1__96553_SHARP_){
return cljs.core.reset_BANG_(stack.utils.datascript.tx_log_conn,p1__96553_SHARP_);
})),stack.utils.datascript.read_transactions_PLUS_);
});
stack.utils.datascript.load_bitemporal_db_PLUS_ = (function stack$utils$datascript$load_bitemporal_db_PLUS_(id,schema){
var db = stack.utils.datascript.empty_db(id,schema);
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.datascript.open_tx_log_PLUS_(id),(function (p1__96563_SHARP_){
return stack.utils.datascript.rebuild(db,p1__96563_SHARP_);
}));
});
stack.utils.datascript.bitemporal_QMARK_ = (function stack$utils$datascript$bitemporal_QMARK_(db){
return (!((new cljs.core.Keyword(null,"tx-log","tx-log",1002405833).cljs$core$IFn$_invoke$arity$1(db) == null)));
});
stack.utils.datascript.transact = (function stack$utils$datascript$transact(p__96573,transaction){
var map__96574 = p__96573;
var map__96574__$1 = cljs.core.__destructure_map(map__96574);
var domain_db = map__96574__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96574__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__96575 = (datascript.core.with$.cljs$core$IFn$_invoke$arity$2 ? datascript.core.with$.cljs$core$IFn$_invoke$arity$2(data,transaction) : datascript.core.with$.call(null, data,transaction));
var map__96575__$1 = cljs.core.__destructure_map(map__96575);
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96575__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var tx_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96575__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));
var new_transaction = stack.utils.datascript.augment_transaction(tx_data);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(domain_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),db_after),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-log","tx-log",1002405833)], null),cljs.core.conj,new_transaction),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-times","tx-times",-690029852)], null),cljs.core.conj,new cljs.core.Keyword(null,"tx-time","tx-time",1760515071).cljs$core$IFn$_invoke$arity$1(new_transaction)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valid-times","valid-times",-1544145409)], null),cljs.core.conj,new cljs.core.Keyword(null,"valid-time","valid-time",1635730538).cljs$core$IFn$_invoke$arity$1(new_transaction));
});
/**
 * Apply a datascript transaction and persist it to the transaction log.
 *   Returns the new db state after applying the transaction.
 */
stack.utils.datascript.transact_BANG_ = (function stack$utils$datascript$transact_BANG_(db,transaction){
var new_db = stack.utils.datascript.transact(db,transaction);
var tx_data = cljs.core.last(new cljs.core.Keyword(null,"tx-log","tx-log",1002405833).cljs$core$IFn$_invoke$arity$1(new_db));
stack.utils.datascript.add_tx_PLUS_(tx_data);

return new_db;
});
stack.utils.datascript.q = (function stack$utils$datascript$q(db,query){
var G__96587 = query;
var G__96588 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(db);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__96587,G__96588) : datascript.core.q.call(null, G__96587,G__96588));
});

//# sourceMappingURL=stack.utils.datascript.js.map
