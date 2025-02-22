goog.provide('cljserial.services.command_parser');
cljserial.services.command_parser.get_handler = (function cljserial$services$command_parser$get_handler(handlers,command){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56665_SHARP_){
return cljs.core.re_matches(new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(p1__56665_SHARP_),command);
}),handlers));
});
cljserial.services.command_parser.set_exchange_tokeniser = (function cljserial$services$command_parser$set_exchange_tokeniser(command_complete_QMARK_){
var G__56675 = new cljs.core.Keyword(null,"webserial-rx","webserial-rx",1169545588);
var G__56676 = cljserial.services.webserial.serial_event_interceptors;
var G__56677 = (function (p__56681,p__56682){
var map__56683 = p__56681;
var map__56683__$1 = cljs.core.__destructure_map(map__56683);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56683__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56683__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__56684 = p__56682;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56684,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56684,(1),null);
var vec__56687 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-data","event-data",-1726012139),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.take_last((2),db)));
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56687,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56687,(1),null);
var is_complete_QMARK_ = (command_complete_QMARK_.cljs$core$IFn$_invoke$arity$2 ? command_complete_QMARK_.cljs$core$IFn$_invoke$arity$2(command,response) : command_complete_QMARK_.call(null, command,response));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(is_complete_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command-response","command-response",1985534526),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"response","response",-1068424192),response], null)], null)], null):null)], null)], null);
});
return (cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__56675,G__56676,G__56677) : cljserial.utils.dbfx.reg_event_fx.call(null, G__56675,G__56676,G__56677));
});
cljserial.services.command_parser.set_handlers = (function cljserial$services$command_parser$set_handlers(handlers,db_path_base){
var G__56704 = new cljs.core.Keyword(null,"command-response","command-response",1985534526);
var G__56705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_path_base], null);
return (cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__56707) : cljserial.utils.dbfx.path.call(null, G__56707));
})()], null);
var G__56706 = (function (db,p__56712){
var vec__56715 = p__56712;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56715,(0),null);
var new_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56715,(1),null);
var map__56725 = new_entry;
var map__56725__$1 = cljs.core.__destructure_map(map__56725);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56725__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56725__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var cmd_text = new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(command);
var resp_text = new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(response);
var cmd_handler = cljserial.services.command_parser.get_handler(handlers,cmd_text);
var db_update = (cljs.core.truth_(cmd_handler)?(function (){var fexpr__56726 = new cljs.core.Keyword(null,"response-parser","response-parser",-1487926905).cljs$core$IFn$_invoke$arity$1(cmd_handler);
return (fexpr__56726.cljs$core$IFn$_invoke$arity$2 ? fexpr__56726.cljs$core$IFn$_invoke$arity$2(db,resp_text) : fexpr__56726.call(null, db,resp_text));
})():null);
var or__5045__auto__ = db_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return db;
}
});
return (cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__56704,G__56705,G__56706) : cljserial.utils.dbfx.reg_event_db.call(null, G__56704,G__56705,G__56706));
});

//# sourceMappingURL=cljserial.services.command_parser.js.map
