goog.provide('day8.re_frame_10x.panels.app_db.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__73991,_){
var map__73992 = p__73991;
var map__73992__$1 = cljs.core.__destructure_map(map__73992);
var app_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73992__$1,new cljs.core.Keyword(null,"app-db","app-db",865606302));
return app_db;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-before","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-before",1079113245),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-event-trace","day8.re-frame-10x.navigation.epochs.subs/selected-event-trace",-430284654)], null),(function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","paths","day8.re-frame-10x.panels.app-db.subs/paths",564942769),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__73998,_){
var map__73999 = p__73998;
var map__73999__$1 = cljs.core.__destructure_map(map__73999);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73999__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__73997_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__73997_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__73997_SHARP_));
}),paths));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","current-epoch-app-db-after","day8.re-frame-10x.panels.app-db.subs/current-epoch-app-db-after",718633528)], null),(function (p__74007,p__74008){
var vec__74009 = p__74007;
var map__74012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74009,(0),null);
var map__74012__$1 = cljs.core.__destructure_map(map__74012);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74012__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74009,(1),null);
var vec__74013 = p__74008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74013,(0),null);
var map__74016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74013,(1),null);
var map__74016__$1 = cljs.core.__destructure_map(map__74016);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74016__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return day8.re_frame_10x.tools.coll.get_in_with_lists_and_sets(db_after,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,id)));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","small-data?","day8.re-frame-10x.panels.app-db.subs/small-data?",1741117145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__74021,_){
var vec__74022 = p__74021;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74022,(0),null);
var map__74025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74022,(1),null);
var map__74025__$1 = cljs.core.__destructure_map(map__74025);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74025__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","path-data","day8.re-frame-10x.panels.app-db.subs/path-data",554728844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","expansion-limit","day8.re-frame-10x.panels.settings.subs/expansion-limit",740463148)], null))], null);
}),(function (p__74026,_){
var vec__74027 = p__74026;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74027,(0),null);
var limit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74027,(1),null);
return day8.re_frame_10x.tools.coll.nodes_fewer_than_QMARK_(data,limit);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","search-string","day8.re-frame-10x.panels.app-db.subs/search-string",-1224926557),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__74030,_){
var map__74031 = p__74030;
var map__74031__$1 = cljs.core.__destructure_map(map__74031);
var search_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"search-string","search-string",68818394));
return search_string;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__74032,_){
var map__74033 = p__74032;
var map__74033__$1 = cljs.core.__destructure_map(map__74033);
var json_ml_expansions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74033__$1,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
return json_ml_expansions;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","node-expanded?","day8.re-frame-10x.panels.app-db.subs/node-expanded?",1165164653),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expansions","day8.re-frame-10x.panels.app-db.subs/expansions",349759264)], null),(function (expansions,p__74034){
var vec__74035 = p__74034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74035,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74035,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","reagent-id","day8.re-frame-10x.panels.app-db.subs/reagent-id",-1515896944),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__74038,_){
var map__74039 = p__74038;
var map__74039__$1 = cljs.core.__destructure_map(map__74039);
var reagent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74039__$1,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
return reagent_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","data-path-annotations?","day8.re-frame-10x.panels.app-db.subs/data-path-annotations?",73119881),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__74040,_){
var map__74041 = p__74040;
var map__74041__$1 = cljs.core.__destructure_map(map__74041);
var data_path_annotations_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74041__$1,new cljs.core.Keyword(null,"data-path-annotations?","data-path-annotations?",-381525058));
return data_path_annotations_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","expand-all?","day8.re-frame-10x.panels.app-db.subs/expand-all?",1843725491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","root","day8.re-frame-10x.panels.app-db.subs/root",409687952)], null),(function (p__74042,p__74043){
var map__74044 = p__74042;
var map__74044__$1 = cljs.core.__destructure_map(map__74044);
var expand_all_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74044__$1,new cljs.core.Keyword(null,"expand-all?","expand-all?",2129393886));
var vec__74045 = p__74043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74045,(0),null);
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74045,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(expand_all_QMARK_,path_id);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.subs","popup-menu","day8.re-frame-10x.panels.app-db.subs/popup-menu",-100095659),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"popup-menu","popup-menu",355955876)], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.subs.js.map
