goog.provide('cljserial.services.webserial');
cljserial.services.webserial.serial_event_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-term","serial-term",-1183493149),new cljs.core.Keyword(null,"events","events",1792552201)], null);
return (cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__56517) : cljserial.utils.dbfx.path.call(null, G__56517));
})(),(cljserial.utils.dbfx.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timestamp","timestamp",579478971)) : cljserial.utils.dbfx.inject_cofx.call(null, new cljs.core.Keyword(null,"timestamp","timestamp",579478971)))], null);
cljserial.services.webserial.append_event = (function cljserial$services$webserial$append_event(events,p__56519){
var map__56520 = p__56519;
var map__56520__$1 = cljs.core.__destructure_map(map__56520);
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56520__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56520__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var bytes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56520__$1,new cljs.core.Keyword(null,"bytes","bytes",1175866680));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(events,timestamp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"byte-encoding","byte-encoding",790125729),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null)], null));
});
var G__56523_56627 = new cljs.core.Keyword(null,"serial-tx","serial-tx",243831833);
var G__56524_56628 = cljserial.services.webserial.serial_event_interceptors;
var G__56525_56629 = (function (p__56527,p__56528){
var map__56529 = p__56527;
var map__56529__$1 = cljs.core.__destructure_map(map__56529);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56529__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56529__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__56530 = p__56528;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56530,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56530,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljserial.services.webserial.append_event(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-tx","webserial-tx",1964533739),bytes], null)], null)], null)], null);
});
(cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__56523_56627,G__56524_56628,G__56525_56629) : cljserial.utils.dbfx.reg_event_fx.call(null, G__56523_56627,G__56524_56628,G__56525_56629));
var G__56535_56630 = new cljs.core.Keyword(null,"serial-rx","serial-rx",1773580858);
var G__56536_56631 = cljserial.services.webserial.serial_event_interceptors;
var G__56537_56632 = (function (p__56539,p__56540){
var map__56541 = p__56539;
var map__56541__$1 = cljs.core.__destructure_map(map__56541);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56541__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__56542 = p__56540;
var _event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56542,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56542,(1),null);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("wsm","serial-rx","wsm/serial-rx",1765338959),bytes,new cljs.core.Keyword(null,"line","line",212345235),58], null)),null);
} else {
}

var prev_event = cljs.core.last(cljs.core.vals(db));
var ongoing = (((!((prev_event == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$2(prev_event,prev_event),new cljs.core.Keyword(null,"rx","rx",1627208482))));
var ts = ((ongoing)?new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(prev_event):timestamp);
var data = ((ongoing)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(prev_event))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bytes)].join(''):bytes);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljserial.services.webserial.append_event(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),ts,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"bytes","bytes",1175866680),data], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-rx","webserial-rx",1169545588),null], null)], null)], null)], null);
});
(cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__56535_56630,G__56536_56631,G__56537_56632) : cljserial.utils.dbfx.reg_event_fx.call(null, G__56535_56630,G__56536_56631,G__56537_56632));
var G__56550_56633 = new cljs.core.Keyword(null,"serial-data","serial-data",-1018828038);
var G__56551_56634 = (function (db,_){
return new cljs.core.Keyword(null,"serial-term","serial-term",-1183493149).cljs$core$IFn$_invoke$arity$1(db);
});
(cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56550_56633,G__56551_56634) : cljserial.utils.dbfx.reg_sub.call(null, G__56550_56633,G__56551_56634));
var G__56553_56636 = new cljs.core.Keyword(null,"serial-events","serial-events",-1561306104);
var G__56554_56637 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__56555_56638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-data","serial-data",-1018828038)], null);
var G__56556_56639 = (function (serial_state,_){
return new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(serial_state);
});
(cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__56553_56636,G__56554_56637,G__56555_56638,G__56556_56639) : cljserial.utils.dbfx.reg_sub.call(null, G__56553_56636,G__56554_56637,G__56555_56638,G__56556_56639));
cljserial.services.webserial.default_context = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"serial-options","serial-options",914523235),cljserial.utils.webserial.DEFAULTS,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675),"\r"], null);
cljserial.services.webserial.controller = (function (){var G__56563 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"usb-serial","usb-serial",754250307),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.Keyword(null,"context","context",-830191113),cljserial.services.webserial.default_context,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"webserial_pending","webserial_pending",-523030494),new cljs.core.Keyword(null,"entry","entry",505168823),(function (){var G__56567 = (function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),"Resetting port assignment",new cljs.core.Keyword(null,"line","line",212345235),106], null)),null);
} else {
}

var G__56576_56640 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-disconnected","webserial-disconnected",997293008)], null);
(cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56576_56640) : cljserial.utils.dbfx.dispatch.call(null, G__56576_56640));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"port","port",1534937262),null);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56567) : statecharts.core.assign.call(null, G__56567));
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"webserial-option","webserial-option",-599976901),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56578 = (function (ctx,p__56580){
var map__56581 = p__56580;
var map__56581__$1 = cljs.core.__destructure_map(map__56581);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56581__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var key = cljs.core.first(data);
var value_text = cljs.core.second(data);
var value = (cljs.core.truth_(cljs.core.re_matches(/\d+/,value_text))?(value_text | (0)):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value_text));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("option","set","option/set",-715299261),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''),new cljs.core.Keyword(null,"line","line",212345235),118], null)),null);
} else {
}

return cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-options","serial-options",914523235),key], null),value);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56578) : statecharts.core.assign.call(null, G__56578));
})()], null),new cljs.core.Keyword(null,"webserial-port-opened","webserial-port-opened",-961627067),new cljs.core.Keyword(null,"connected","connected",-169833045)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"webserial_pending","webserial_pending",-523030494),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["HSM INIT",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),132], null)),null);
} else {
}

var G__56596 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljserial.utils.webserial.is_supported_QMARK_())?new cljs.core.Keyword(null,"webserial-check-passed","webserial-check-passed",2073632322):new cljs.core.Keyword(null,"webserial-check-failed","webserial-check-failed",1161198495))], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56596) : cljserial.utils.dbfx.dispatch.call(null, G__56596));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"webserial-check-passed","webserial-check-passed",2073632322),new cljs.core.Keyword(null,"port-pending","port-pending",-1314913267),new cljs.core.Keyword(null,"webserial-check-failed","webserial-check-failed",1161198495),new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408)], null)], null),new cljs.core.Keyword(null,"no-webserial","no-webserial",1589059408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"port-pending","port-pending",-1314913267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["PORT PENDING",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),145], null)),null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-has-port","webserial-has-port",-299202090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56600 = (function (ctx,e){
var port = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
port.addEventListener("disconnect",(function (){
var G__56606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-disconnected","webserial-port-disconnected",1545890309),port], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56606) : cljserial.utils.dbfx.dispatch.call(null, G__56606));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"port","port",1534937262),port);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56600) : statecharts.core.assign.call(null, G__56600));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"opening_port","opening_port",-1837220942)], null)], null)], null),new cljs.core.Keyword(null,"opening_port","opening_port",-1837220942),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["WAITING TO OPEN PORT",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx)].join(''),new cljs.core.Keyword(null,"line","line",212345235),159], null)),null);
} else {
}

return cljserial.utils.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"serial-options","serial-options",914523235).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
var G__56611 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-opened","webserial-port-opened",-961627067)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56611) : cljserial.utils.dbfx.dispatch.call(null, G__56611));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-open-failure","webserial-port-open-failure",882438944)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56612) : cljserial.utils.dbfx.dispatch.call(null, G__56612));
})], 0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-port-open-failure","webserial-port-open-failure",882438944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","open","port/open",-1759588897),e,new cljs.core.Keyword(null,"line","line",212345235),164], null)),null);
} else {
return null;
}
})], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"connected","connected",-169833045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var G__56616_56643 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-connected","webserial-connected",-1452266208)], null);
(cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56616_56643) : cljserial.utils.dbfx.dispatch.call(null, G__56616_56643));

var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx);
var port_id = cljserial.utils.webserial.describe_port(port);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("read","spawn-loop","read/spawn-loop",583265852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port-id","port-id",-869443091),port_id], null),new cljs.core.Keyword(null,"line","line",212345235),172], null)),null);
} else {
}

return cljserial.utils.webserial.go_read_text(port,(function (p1__56562_SHARP_){
var G__56619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"serial-rx","serial-rx",1773580858),p1__56562_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56619) : cljserial.utils.dbfx.dispatch.call(null, G__56619));
}));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"webserial-tx","webserial-tx",1964533739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (context,p__56620){
var map__56622 = p__56620;
var map__56622__$1 = cljs.core.__destructure_map(map__56622);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56622__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56623 = context;
var map__56623__$1 = cljs.core.__destructure_map(map__56623);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var line_terminator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56623__$1,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675));
var cmd = cljs.core.first(data);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("write","text","write/text",-1895511554),cmd,new cljs.core.Keyword(null,"line","line",212345235),179], null)),null);
} else {
}

return cljserial.utils.webserial.write(port,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_terminator)].join(''));
})], null),new cljs.core.Keyword(null,"webserial-forget-port","webserial-forget-port",-1172893861),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.Keyword(null,"webserial-port-disconnected","webserial-port-disconnected",1545890309),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","forget","port/forget",339919658),"TODO: Forget request received - IMPLEMENT ME",new cljs.core.Keyword(null,"line","line",212345235),187], null)),null);
} else {
}

var port = new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(ctx);
var port_info = cljserial.utils.webserial.describe_port(port);
return cljserial.utils.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic(port,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
var G__56625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial-port-forgotten","webserial-port-forgotten",-1426439407)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56625) : cljserial.utils.dbfx.dispatch.call(null, G__56625));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.webserial",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","forget","port/forget",339919658),["Failed to forget ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port_info)].join(''),new cljs.core.Keyword(null,"line","line",212345235),191], null)),null);
} else {
return null;
}
})], null)], 0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webserial-port-forgotten","webserial-port-forgotten",-1426439407),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__56563) : statecharts.core.machine.call(null, G__56563));
})();
cljserial.services.webserial.init = (function cljserial$services$webserial$init(){
return cljserial.utils.hsm.register(cljserial.services.webserial.controller);
});

//# sourceMappingURL=cljserial.services.webserial.js.map
