goog.provide('stack.services.command_parser');
stack.services.command_parser.get_handler = (function stack$services$command_parser$get_handler(handlers,command){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__94494_SHARP_){
return cljs.core.re_matches(new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(p1__94494_SHARP_),command);
}),handlers));
});
stack.services.command_parser.set_exchange_tokeniser = (function stack$services$command_parser$set_exchange_tokeniser(command_complete_QMARK_){
var G__94502 = new cljs.core.Keyword(null,"webserial-rx","webserial-rx",1169545588);
var G__94503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack.utils.dbfx.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"services","services",970478783),new cljs.core.Keyword(null,"webserial","webserial",-1669376567)], null)], null);
var G__94504 = (function (p__94506,p__94507){
var map__94508 = p__94506;
var map__94508__$1 = cljs.core.__destructure_map(map__94508);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94508__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94508__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__94509 = p__94507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94509,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94509,(1),null);
var vec__94513 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-data","event-data",-1726012139),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.take_last((2),db)));
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94513,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94513,(1),null);
var is_complete_QMARK_ = (command_complete_QMARK_.cljs$core$IFn$_invoke$arity$2 ? command_complete_QMARK_.cljs$core$IFn$_invoke$arity$2(command,response) : command_complete_QMARK_.call(null, command,response));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(is_complete_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command-response","command-response",1985534526),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"command","command",-894540724),command,new cljs.core.Keyword(null,"response","response",-1068424192),response], null)], null)], null):null)], null)], null);
});
return (stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__94502,G__94503,G__94504) : stack.utils.dbfx.reg_event_fx.call(null, G__94502,G__94503,G__94504));
});
stack.services.command_parser.set_handlers = (function stack$services$command_parser$set_handlers(handlers,db_path_base){
var G__94522 = new cljs.core.Keyword(null,"command-response","command-response",1985534526);
var G__94523 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__94525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_path_base], null);
return (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__94525) : stack.utils.dbfx.path.call(null, G__94525));
})()], null);
var G__94524 = (function (db,p__94530){
var vec__94532 = p__94530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94532,(0),null);
var new_entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94532,(1),null);
var map__94535 = new_entry;
var map__94535__$1 = cljs.core.__destructure_map(map__94535);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94535__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94535__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var cmd_text = new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(command);
var resp_text = new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(response);
var cmd_handler = stack.services.command_parser.get_handler(handlers,cmd_text);
var db_update = (cljs.core.truth_(cmd_handler)?(function (){var fexpr__94537 = new cljs.core.Keyword(null,"response-parser","response-parser",-1487926905).cljs$core$IFn$_invoke$arity$1(cmd_handler);
return (fexpr__94537.cljs$core$IFn$_invoke$arity$2 ? fexpr__94537.cljs$core$IFn$_invoke$arity$2(db,resp_text) : fexpr__94537.call(null, db,resp_text));
})():null);
var or__5002__auto__ = db_update;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return db;
}
});
return (stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__94522,G__94523,G__94524) : stack.utils.dbfx.reg_event_db.call(null, G__94522,G__94523,G__94524));
});

//# sourceMappingURL=stack.services.command_parser.js.map
