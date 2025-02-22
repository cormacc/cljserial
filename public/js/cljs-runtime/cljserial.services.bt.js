goog.provide('cljserial.services.bt');
cljserial.services.bt.device_request_callback = (function cljserial$services$bt$device_request_callback(options,_e){
return cljserial.utils.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filter-options","filter-options",-80791297),options,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__56518_SHARP_){
var G__56521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-has-device","bt-has-device",-1046030523),p1__56518_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56521) : cljserial.utils.dbfx.dispatch.call(null, G__56521));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-no-device","bt-no-device",-1694403792)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56522) : cljserial.utils.dbfx.dispatch.call(null, G__56522));
})], 0));
});
cljserial.services.bt.device_connect_callback = (function cljserial$services$bt$device_connect_callback(device){
return cljserial.utils.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"device","device",1817743352),device,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__56526_SHARP_){
var G__56533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-has-gatt","bt-has-gatt",536605566),p1__56526_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56533) : cljserial.utils.dbfx.dispatch.call(null, G__56533));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-no-gatt","bt-no-gatt",761745622)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56534) : cljserial.utils.dbfx.dispatch.call(null, G__56534));
})], 0));
});
cljserial.services.bt.gatt_get_service_callback = (function cljserial$services$bt$gatt_get_service_callback(gatt){
return cljserial.utils.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gatt","gatt",1833563448),gatt,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__56538_SHARP_){
var G__56545 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-has-service","bt-has-service",317364822),p1__56538_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56545) : cljserial.utils.dbfx.dispatch.call(null, G__56545));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-no-service","bt-no-service",1687984040)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56546) : cljserial.utils.dbfx.dispatch.call(null, G__56546));
})], 0));
});
cljserial.services.bt.service_get_tx_char_callback = (function cljserial$services$bt$service_get_tx_char_callback(service){
return cljserial.utils.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"service","service",-1963054559),service,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__56547_SHARP_){
var G__56548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-has-tx-char","bt-has-tx-char",-1167989155),p1__56547_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56548) : cljserial.utils.dbfx.dispatch.call(null, G__56548));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-no-tx-char","bt-no-tx-char",619523911)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56549) : cljserial.utils.dbfx.dispatch.call(null, G__56549));
})], 0));
});
cljserial.services.bt.service_get_rx_char_callback = (function cljserial$services$bt$service_get_rx_char_callback(service){
return cljserial.utils.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"service","service",-1963054559),service,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__56552_SHARP_){
var G__56557 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-has-rx-char","bt-has-rx-char",245779629),p1__56552_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56557) : cljserial.utils.dbfx.dispatch.call(null, G__56557));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
var G__56558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-no-rx-char","bt-no-rx-char",-347031689)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56558) : cljserial.utils.dbfx.dispatch.call(null, G__56558));
})], 0));
});
cljserial.services.bt.serial_event_interceptors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-serial-term","bt-serial-term",383177813),new cljs.core.Keyword(null,"events","events",1792552201)], null);
return (cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__56559) : cljserial.utils.dbfx.path.call(null, G__56559));
})(),(cljserial.utils.dbfx.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timestamp","timestamp",579478971)) : cljserial.utils.dbfx.inject_cofx.call(null, new cljs.core.Keyword(null,"timestamp","timestamp",579478971)))], null);
cljserial.services.bt.append_event = (function cljserial$services$bt$append_event(events,p__56560){
var map__56561 = p__56560;
var map__56561__$1 = cljs.core.__destructure_map(map__56561);
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var event_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561__$1,new cljs.core.Keyword(null,"event-type","event-type",319722813));
var bytes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56561__$1,new cljs.core.Keyword(null,"bytes","bytes",1175866680));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(events,timestamp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"byte-encoding","byte-encoding",790125729),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null)], null));
});
var G__56564_56672 = new cljs.core.Keyword(null,"bt-serial-tx","bt-serial-tx",-1585542196);
var G__56565_56673 = cljserial.services.bt.serial_event_interceptors;
var G__56566_56674 = (function (p__56568,p__56569){
var map__56572 = p__56568;
var map__56572__$1 = cljs.core.__destructure_map(map__56572);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56572__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__56573 = p__56569;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56573,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56573,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljserial.services.bt.append_event(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"bytes","bytes",1175866680),bytes], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-tx","bt-tx",-306748298),bytes], null)], null)], null)], null);
});
(cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__56564_56672,G__56565_56673,G__56566_56674) : cljserial.utils.dbfx.reg_event_fx.call(null, G__56564_56672,G__56565_56673,G__56566_56674));
var G__56583_56678 = new cljs.core.Keyword(null,"bt-serial-rx","bt-serial-rx",-1810036917);
var G__56584_56679 = cljserial.services.bt.serial_event_interceptors;
var G__56585_56680 = (function (p__56587,p__56588){
var map__56589 = p__56587;
var map__56589__$1 = cljs.core.__destructure_map(map__56589);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56589__$1,new cljs.core.Keyword(null,"db","db",993250759));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56589__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var vec__56590 = p__56588;
var _event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56590,(0),null);
var bytes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56590,(1),null);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("weble","serial-rx","weble/serial-rx",1894999691),bytes,new cljs.core.Keyword(null,"line","line",212345235),87], null)),null);
} else {
}

var prev_event = cljs.core.last(cljs.core.vals(db));
var ongoing = (((!((prev_event == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$2(prev_event,prev_event),new cljs.core.Keyword(null,"rx","rx",1627208482))));
var ts = ((ongoing)?new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(prev_event):timestamp);
var data = ((ongoing)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bytes","bytes",1175866680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"event-data","event-data",-1726012139).cljs$core$IFn$_invoke$arity$1(prev_event))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bytes)].join(''):bytes);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljserial.services.bt.append_event(db,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),ts,new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"bytes","bytes",1175866680),data], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weble-rx","weble-rx",-291800287),null], null)], null)], null)], null);
});
(cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__56583_56678,G__56584_56679,G__56585_56680) : cljserial.utils.dbfx.reg_event_fx.call(null, G__56583_56678,G__56584_56679,G__56585_56680));
var G__56598_56690 = new cljs.core.Keyword(null,"bt-serial-data","bt-serial-data",-497540862);
var G__56599_56691 = (function (db,_){
return new cljs.core.Keyword(null,"bt-serial-term","bt-serial-term",383177813).cljs$core$IFn$_invoke$arity$1(db);
});
(cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56598_56690,G__56599_56691) : cljserial.utils.dbfx.reg_sub.call(null, G__56598_56690,G__56599_56691));
var G__56601_56696 = new cljs.core.Keyword(null,"bt-serial-events","bt-serial-events",50000387);
var G__56602_56697 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__56603_56698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-serial-data","bt-serial-data",-497540862)], null);
var G__56604_56699 = (function (bt_serial_state,_){
return new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(bt_serial_state);
});
(cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__56601_56696,G__56602_56697,G__56603_56698,G__56604_56699) : cljserial.utils.dbfx.reg_sub.call(null, G__56601_56696,G__56602_56697,G__56603_56698,G__56604_56699));
cljserial.services.bt.extract_rx_payload = (function cljserial$services$bt$extract_rx_payload(response){
return cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response)).target.value;
});
cljserial.services.bt.default_context = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"device","device",1817743352),null,new cljs.core.Keyword(null,"gatt","gatt",1833563448),null,new cljs.core.Keyword(null,"service","service",-1963054559),null,new cljs.core.Keyword(null,"tx-char","tx-char",-2055765914),null,new cljs.core.Keyword(null,"rx-char","rx-char",216615647),null,new cljs.core.Keyword(null,"options","options",99638489),cljserial.utils.webbluetooth.DEFAULT_OPTIONS,new cljs.core.Keyword(null,"line-terminator","line-terminator",1461409675),"\r"], null);
cljserial.services.bt.controller = (function (){var G__56621 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bt-serial","bt-serial",1449594354),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"check","check",1226308904),new cljs.core.Keyword(null,"context","context",-830191113),cljserial.services.bt.default_context,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"check","check",1226308904),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["Check web bluetooth",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),155], null)),null);
} else {
}

var G__56624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljserial.utils.webbluetooth.is_supported_QMARK_())?new cljs.core.Keyword(null,"bt-disconnected","bt-disconnected",965851072):new cljs.core.Keyword(null,"bt-unsupported","bt-unsupported",-137180720))], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56624) : cljserial.utils.dbfx.dispatch.call(null, G__56624));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-disconnected","bt-disconnected",965851072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null),new cljs.core.Keyword(null,"bt-unsupported","bt-unsupported",-137180720),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016)], null)], null),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-disconnected","bt-disconnected",965851072),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null),new cljs.core.Keyword(null,"bt-disconnect","bt-disconnect",475700728),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225)], null)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"connected","connected",-169833045),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var rx_char = new cljs.core.Keyword(null,"rx-char","rx-char",216615647).cljs$core$IFn$_invoke$arity$1(ctx);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-rx","bt-rx",2130723195),"Start Notifications",new cljs.core.Keyword(null,"line","line",212345235),167], null)),null);
} else {
}

return rx_char.startNotifications();
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-rx","bt-rx",2130723195),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-rx","bt-rx",2130723195),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),170], null)),null);
} else {
}

var bytes = cljserial.services.bt.extract_rx_payload(e);
var decoder = (new TextDecoder("utf-8"));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-rx","bt-rx",2130723195),bytes,new cljs.core.Keyword(null,"line","line",212345235),173], null)),null);
} else {
}

var G__56626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-serial-rx","bt-serial-rx",-1810036917),decoder.decode(bytes)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56626) : cljserial.utils.dbfx.dispatch.call(null, G__56626));
})], null),new cljs.core.Keyword(null,"bt-tx","bt-tx",-306748298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (ctx,e){
var text = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
var tx_char = new cljs.core.Keyword(null,"tx-char","tx-char",-2055765914).cljs$core$IFn$_invoke$arity$1(ctx);
var encoder = (new TextEncoder("utf-8"));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-tx","bt-tx",-306748298),text,new cljs.core.Keyword(null,"line","line",212345235),178], null)),null);
} else {
}

return cljserial.utils.webbluetooth.service_write_value_without_response(tx_char,encoder.encode(text));
})], null)], null)], null),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
var device = new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(ctx);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","forget","device/forget",-999667651),"Disconnecting device",new cljs.core.Keyword(null,"line","line",212345235),182], null)),null);
} else {
}

return cljserial.utils.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"device","device",1817743352),device,new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
var G__56635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-disconnected","bt-disconnected",965851072)], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56635) : cljserial.utils.dbfx.dispatch.call(null, G__56635));
}),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),(function (){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","forget","device/forget",-999667651),["Failed to forget ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(device)].join(''),new cljs.core.Keyword(null,"line","line",212345235),185], null)),null);
} else {
return null;
}
})], null)], 0));
})], null),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"device-pending","device-pending",-1643033298),new cljs.core.Keyword(null,"entry","entry",505168823),(function (){var G__56641 = (function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),"Resetting device assignment",new cljs.core.Keyword(null,"line","line",212345235),189], null)),null);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"device","device",1817743352),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gatt","gatt",1833563448),null,new cljs.core.Keyword(null,"service","service",-1963054559),null,new cljs.core.Keyword(null,"tx-char","tx-char",-2055765914),null,new cljs.core.Keyword(null,"rx-char","rx-char",216615647),null], 0));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56641) : statecharts.core.assign.call(null, G__56641));
})(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bt-connected","bt-connected",745939764),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"device-pending","device-pending",-1643033298),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["DEVICE PENDING",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),200], null)),null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-has-device","bt-has-device",-1046030523),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56642 = (function (ctx,e){
var device = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
device.addEventListener("gattserverdisconnected",(function (event){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-disconnected","bt-disconnected",965851072),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"line","line",212345235),206], null)),null);
} else {
}

var G__56644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-disconnected","bt-disconnected",965851072),device], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56644) : cljserial.utils.dbfx.dispatch.call(null, G__56644));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"device","device",1817743352),device);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56642) : statecharts.core.assign.call(null, G__56642));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"bluetooth-connecting","bluetooth-connecting",778141750)], null),new cljs.core.Keyword(null,"bt-no-device","bt-no-device",-1694403792),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)], null)], null)], null),new cljs.core.Keyword(null,"bluetooth-connecting","bluetooth-connecting",778141750),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["CONNECTING",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),212], null)),null);
} else {
}

return cljserial.services.bt.device_connect_callback(new cljs.core.Keyword(null,"device","device",1817743352).cljs$core$IFn$_invoke$arity$1(ctx));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-has-gatt","bt-has-gatt",536605566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56645 = (function (ctx,e){
var gatt = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"gatt","gatt",1833563448),gatt);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56645) : statecharts.core.assign.call(null, G__56645));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"bluetooth-getting-service","bluetooth-getting-service",841166477)], null),new cljs.core.Keyword(null,"bt-no-gatt","bt-no-gatt",761745622),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225)], null)], null)], null),new cljs.core.Keyword(null,"bluetooth-getting-service","bluetooth-getting-service",841166477),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["GETTING SERVICE",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),221], null)),null);
} else {
}

return cljserial.services.bt.gatt_get_service_callback(new cljs.core.Keyword(null,"gatt","gatt",1833563448).cljs$core$IFn$_invoke$arity$1(ctx));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-has-service","bt-has-service",317364822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56646 = (function (ctx,e){
var service = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"service","service",-1963054559),service);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56646) : statecharts.core.assign.call(null, G__56646));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"bluetooth-getting-tx-char","bluetooth-getting-tx-char",-1530559908)], null),new cljs.core.Keyword(null,"bt-no-service","bt-no-service",1687984040),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225)], null)], null)], null),new cljs.core.Keyword(null,"bluetooth-getting-tx-char","bluetooth-getting-tx-char",-1530559908),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["GETTING TX CHARACTERISTIC",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),230], null)),null);
} else {
}

return cljserial.services.bt.service_get_tx_char_callback(new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(ctx));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-has-tx-char","bt-has-tx-char",-1167989155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56647 = (function (ctx,e){
var tx_char = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"tx-char","tx-char",-2055765914),tx_char);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56647) : statecharts.core.assign.call(null, G__56647));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"bluetooth-getting-rx-char","bluetooth-getting-rx-char",550509879)], null),new cljs.core.Keyword(null,"bt-no-tx-char","bt-no-tx-char",619523911),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225)], null)], null)], null),new cljs.core.Keyword(null,"bluetooth-getting-rx-char","bluetooth-getting-rx-char",550509879),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("state","entry","state/entry",248546842),["GETTING RX CHARACTERISTIC",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),new cljs.core.Keyword(null,"line","line",212345235),240], null)),null);
} else {
}

return cljserial.services.bt.service_get_rx_char_callback(new cljs.core.Keyword(null,"service","service",-1963054559).cljs$core$IFn$_invoke$arity$1(ctx));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-has-rx-char","bt-has-rx-char",245779629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__56648 = (function (ctx,e){
var rx_char = cljs.core.first(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bt-has-rx-char","bt-has-rx-char",245779629),"add event listener",new cljs.core.Keyword(null,"line","line",212345235),246], null)),null);
} else {
}

rx_char.addEventListener("characteristicvaluechanged",(function (event){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.services.bt",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx-event","rx-event",-229383795),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"line","line",212345235),249], null)),null);
} else {
}

var G__56649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bt-rx","bt-rx",2130723195),event], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56649) : cljserial.utils.dbfx.dispatch.call(null, G__56649));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"rx-char","rx-char",216615647),rx_char);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__56648) : statecharts.core.assign.call(null, G__56648));
})(),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"connected","connected",-169833045)], null)], null),new cljs.core.Keyword(null,"bt-no-rx-char","bt-no-rx-char",-347031689),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"supported","supported",495067239),new cljs.core.Keyword(null,"disconnecting","disconnecting",-1808914225)], null)], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"unsupported","unsupported",-1045607016),cljs.core.PersistentArrayMap.EMPTY], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__56621) : statecharts.core.machine.call(null, G__56621));
})();
cljserial.services.bt.init = (function cljserial$services$bt$init(){
return cljserial.utils.hsm.register(cljserial.services.bt.controller);
});

//# sourceMappingURL=cljserial.services.bt.js.map
