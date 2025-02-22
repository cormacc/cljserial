goog.provide('cljserial.services.mbt_cd');
cljserial.services.mbt_cd.CdState = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial","serial",-860213615),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hardware-revision","hardware-revision",-2035331340),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firmware-revision","firmware-revision",1297059481),cljserial.schema.version.Version], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"build-configuration","build-configuration",-1060153034),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bluetooth-firmware","bluetooth-firmware",1050333049),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sd-card","sd-card",-220705254),cljserial.schema.filestore.FileStore], null)], null);
cljserial.services.mbt_cd.initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"serial","serial",-860213615),(0),new cljs.core.Keyword(null,"hardware-revision","hardware-revision",-2035331340),(0),new cljs.core.Keyword(null,"firmware-revision","firmware-revision",1297059481),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"major","major",-27376078),(0),new cljs.core.Keyword(null,"minor","minor",-608536071),(0),new cljs.core.Keyword(null,"patch","patch",380775109),(0)], null),new cljs.core.Keyword(null,"build-configuration","build-configuration",-1060153034),"",new cljs.core.Keyword(null,"bluetooth-firmware","bluetooth-firmware",1050333049),"",new cljs.core.Keyword(null,"track","track",195787487),(0),new cljs.core.Keyword(null,"sd-card","sd-card",-220705254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity-mb","capacity-mb",-2024008306),(0),new cljs.core.Keyword(null,"used-mb","used-mb",-1074652995),(0)], null),new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.sorted_map()], null)], null);
cljserial.services.mbt_cd.line_terminator = "\r\n";
cljserial.services.mbt_cd.response_terminator = [cljserial.services.mbt_cd.line_terminator,"OK",cljserial.services.mbt_cd.line_terminator].join('');
cljserial.services.mbt_cd.command_complete_QMARK_ = (function cljserial$services$mbt_cd$command_complete_QMARK_(cmd,resp){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.utils.term.EventData,cmd))){
} else {
throw (new Error("Assert failed: (m/validate term/EventData cmd)"));
}

if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.utils.term.EventData,resp))){
} else {
throw (new Error("Assert failed: (m/validate term/EventData resp)"));
}

return clojure.string.ends_with_QMARK_(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(resp),cljserial.services.mbt_cd.response_terminator);
});
cljserial.services.mbt_cd.command_handlers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"getid","getid",1199587098),new cljs.core.Keyword(null,"matcher","matcher",-452768995),/getid/,new cljs.core.Keyword(null,"db-subpath","db-subpath",1812484693),null,new cljs.core.Keyword(null,"response-parser","response-parser",-1487926905),(function (db,resp){
var temp__5804__auto__ = cljs.core.re_find(/MBT (\S+) #(\d+) \/ HW v(\d+) \/ FW v(\d+)\.(\d+)\.(\d+)/,resp);
if(cljs.core.truth_(temp__5804__auto__)){
var match = temp__5804__auto__;
var G__56797_56817 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mbt-cd-identified","mbt-cd-identified",954863050)], null);
(cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56797_56817) : cljserial.utils.dbfx.dispatch.call(null, G__56797_56817));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"build-configuration","build-configuration",-1060153034),cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serial","serial",-860213615),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(2)) | (0)),new cljs.core.Keyword(null,"hardware-revision","hardware-revision",-2035331340),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(3)) | (0)),new cljs.core.Keyword(null,"firmware-revision","firmware-revision",1297059481),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"major","major",-27376078),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(4)) | (0)),new cljs.core.Keyword(null,"minor","minor",-608536071),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(5)) | (0)),new cljs.core.Keyword(null,"patch","patch",380775109),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(6)) | (0))], null)], 0));
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"clin-track","clin-track",1408639668),new cljs.core.Keyword(null,"matcher","matcher",-452768995),/clin track/,new cljs.core.Keyword(null,"db-subpath","db-subpath",1812484693),null,new cljs.core.Keyword(null,"response-parser","response-parser",-1487926905),(function (db,resp){
var temp__5804__auto__ = cljs.core.re_find(/Selected TRACK(\d+)/,resp);
if(cljs.core.truth_(temp__5804__auto__)){
var match = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"track","track",195787487),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,(1)) | (0)));
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-ls","file-ls",-1071614352),new cljs.core.Keyword(null,"matcher","matcher",-452768995),/file ls/,new cljs.core.Keyword(null,"db-subpath","db-subpath",1812484693),null,new cljs.core.Keyword(null,"response-parser","response-parser",-1487926905),(function (db,resp){
var temp__5804__auto__ = cljs.core.re_find(/Used (\d+) of (\d+) MB/,resp);
if(cljs.core.truth_(temp__5804__auto__)){
var du_match = temp__5804__auto__;
var G__56802_56818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mbt-cd-files-listed","mbt-cd-files-listed",-1410120729)], null);
(cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56802_56818) : cljserial.utils.dbfx.dispatch.call(null, G__56802_56818));

var lines = clojure.string.split_lines(resp);
var file_lines = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56794_SHARP_){
return clojure.string.includes_QMARK_(p1__56794_SHARP_," :: ");
}),lines);
var files = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__5523__auto__ = (function cljserial$services$mbt_cd$iter__56804(s__56805){
return (new cljs.core.LazySeq(null,(function (){
var s__56805__$1 = s__56805;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__56805__$1);
if(temp__5804__auto____$1){
var s__56805__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56805__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56805__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56807 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56806 = (0);
while(true){
if((i__56806 < size__5522__auto__)){
var f = cljs.core._nth(c__5521__auto__,i__56806);
cljs.core.chunk_append(b__56807,(function (){var f_match = cljs.core.re_find(/(\S+)\s+::\s+(\S+)\s+::\s+(\d+)\s+::\s+(.+)/,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(1)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(1)),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(2)),new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(3)) | (0)),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(4))], null)], null);
})());

var G__56819 = (i__56806 + (1));
i__56806 = G__56819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56807),cljserial$services$mbt_cd$iter__56804(cljs.core.chunk_rest(s__56805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56807),null);
}
} else {
var f = cljs.core.first(s__56805__$2);
return cljs.core.cons((function (){var f_match = cljs.core.re_find(/(\S+)\s+::\s+(\S+)\s+::\s+(\d+)\s+::\s+(.+)/,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(1)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(1)),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(2)),new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(3)) | (0)),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs.core.get.cljs$core$IFn$_invoke$arity$2(f_match,(4))], null)], null);
})(),cljserial$services$mbt_cd$iter__56804(cljs.core.rest(s__56805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(file_lines);
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sd-card","sd-card",-220705254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"files","files",-472457450),files,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"capacity-mb","capacity-mb",-2024008306),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(du_match,(2)) | (0)),new cljs.core.Keyword(null,"used-mb","used-mb",-1074652995),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(du_match,(1)) | (0))], null)], null));
} else {
return null;
}
})], null)], null);
cljserial.services.mbt_cd.controller = (function (){var G__56812 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"mbt-cd","mbt-cd",-544841977),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-connected","webserial-connected",-1452266208),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)], null),new cljs.core.Keyword(null,"connected","connected",-169833045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"identifying","identifying",1600868478),new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.mbt-cd",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cd-hsm","connected","cd-hsm/connected",-2096263403),"Yay we can run multiple state machines...",new cljs.core.Keyword(null,"line","line",212345235),136], null)),null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-disconnected","webserial-disconnected",997293008),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"identifying","identifying",1600868478),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var G__56813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833),"getid"], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56813) : cljserial.utils.dbfx.dispatch.call(null, G__56813));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mbt-cd-identified","mbt-cd-identified",954863050),new cljs.core.Keyword(null,"listing-files","listing-files",-1116609006)], null)], null),new cljs.core.Keyword(null,"listing-files","listing-files",-1116609006),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var G__56814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833),"file ls"], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56814) : cljserial.utils.dbfx.dispatch.call(null, G__56814));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mbt-cd-files-listed","mbt-cd-files-listed",-1410120729),new cljs.core.Keyword(null,"ready","ready",1086465795)], null)], null),new cljs.core.Keyword(null,"ready","ready",1086465795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.mbt-cd",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cd-hsm","ready","cd-hsm/ready",-1707399211),"MBT ready for action!",new cljs.core.Keyword(null,"line","line",212345235),144], null)),null);
} else {
return null;
}
})], null)], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__56812) : statecharts.core.machine.call(null, G__56812));
})();
cljserial.services.mbt_cd.init = (function cljserial$services$mbt_cd$init(){
cljserial.services.command_parser.set_exchange_tokeniser(cljserial.services.mbt_cd.command_complete_QMARK_);

cljserial.services.command_parser.set_handlers(cljserial.services.mbt_cd.command_handlers,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cd-info","cd-info",1722919170)], null));

cljserial.utils.hsm.register(cljserial.services.mbt_cd.controller);

var G__56815 = new cljs.core.Keyword(null,"cd-info","cd-info",1722919170);
var G__56816 = (function (db,_query_vector){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cd-info","cd-info",1722919170)], null));
});
return (cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56815,G__56816) : cljserial.utils.dbfx.reg_sub.call(null, G__56815,G__56816));
});

//# sourceMappingURL=cljserial.services.mbt_cd.js.map
