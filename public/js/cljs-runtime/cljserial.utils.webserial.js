goog.provide('cljserial.utils.webserial');
cljserial.utils.webserial.BAUD_RATES = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000000),(2000000),(1000000),(512000),(256000),(128000),(115200),(57600),(38400),(19200),(9600)], null);
cljserial.utils.webserial.DataBits = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(7),new cljs.core.Keyword(null,"max","max",61366548),(8)], null)], null);
cljserial.utils.webserial.StopBits = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null);
cljserial.utils.webserial.Parity = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"even","even",-275845692),new cljs.core.Keyword(null,"odd","odd",-1213409872)], null);
cljserial.utils.webserial.FlowControl = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"hardware","hardware",515915884)], null);
cljserial.utils.webserial.VendorId = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(65535)], null)], null);
cljserial.utils.webserial.PortFilter = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"default","default",-1987822328),"None"], null)], null),new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null)], null);
cljserial.utils.webserial.SerialOptions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),cljserial.utils.webserial.VendorId], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(115200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(10000000)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataBits","dataBits",-455071493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(8)], null),cljserial.utils.webserial.DataBits], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stopBits","stopBits",341236831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null),cljserial.utils.webserial.StopBits], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parity","parity",-1130304573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"none","none",1333468478)], null),cljserial.utils.webserial.Parity], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bufferSize","bufferSize",1012463826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(255)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),((1024) * (1024))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"none","none",1333468478)], null),cljserial.utils.webserial.FlowControl], null)], null);
cljserial.utils.webserial.DEFAULTS = malli.core.decode.cljs$core$IFn$_invoke$arity$3(cljserial.utils.webserial.SerialOptions,cljs.core.PersistentArrayMap.EMPTY,malli.transform.default_value_transformer);
cljserial.utils.webserial.PORT_FILTERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null);
cljserial.utils.webserial.describe_port_filter = (function cljserial$utils$webserial$describe_port_filter(pf){
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pf),new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417).cljs$core$IFn$_invoke$arity$1(pf)], 0));
});
cljserial.utils.webserial.FTDI_PORT_FILTER = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027),new cljs.core.Keyword(null,"name","name",1843675177),"FTDI"], null);
cljserial.utils.webserial.BAUD_RATE_DEFAULT = (115200);
cljserial.utils.webserial.FLOW_CONTROL_DEFAULT = "hardware";
cljserial.utils.webserial.get_webserial_entrypoint = (function cljserial$utils$webserial$get_webserial_entrypoint(){
return navigator.serial;
});
cljserial.utils.webserial.is_supported_QMARK_ = (function cljserial$utils$webserial$is_supported_QMARK_(){
return (!((cljserial.utils.webserial.get_webserial_entrypoint() == null)));
});
cljserial.utils.webserial.request_port_PLUS_ = (function cljserial$utils$webserial$request_port_PLUS_(vendor_id){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("port","request","port/request",1769438436),"Requesting port",new cljs.core.Keyword("port","filter","port/filter",-947790793),vendor_id,new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);
} else {
}

var filters = (cljs.core.truth_((function (){var and__5043__auto__ = vendor_id;
if(cljs.core.truth_(and__5043__auto__)){
return (vendor_id > (0));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),vendor_id], null)], null):cljs.core.PersistentVector.EMPTY);
return cljserial.utils.webserial.get_webserial_entrypoint().requestPort(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),filters], null)));
});
cljserial.utils.webserial.describe_port = (function cljserial$utils$webserial$describe_port(port){
var port_info = port.getInfo();
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s::%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([port_info.usbVendorId,port_info.usbProductId], 0));
});
cljserial.utils.webserial.await_port = (function cljserial$utils$webserial$await_port(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55787 = arguments.length;
var i__5770__auto___55788 = (0);
while(true){
if((i__5770__auto___55788 < len__5769__auto___55787)){
args__5775__auto__.push((arguments[i__5770__auto___55788]));

var G__55789 = (i__5770__auto___55788 + (1));
i__5770__auto___55788 = G__55789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic = (function (p__55307){
var map__55308 = p__55307;
var map__55308__$1 = cljs.core.__destructure_map(map__55308);
var vendor_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55308__$1,new cljs.core.Keyword(null,"vendor-id","vendor-id",904935999),null);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55308__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55308__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55325){
var state_val_55326 = (state_55325[(1)]);
if((state_val_55326 === (1))){
var inst_55316 = promesa.protocols._promise(null);
var inst_55317 = (function (){return (function (___43690__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljserial.utils.webserial.request_port_PLUS_(vendor_id)),(function (port){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(port)?(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(port) : on_success.call(null, port)):(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, )))),(function (___43658__auto__){
return promesa.protocols._promise(((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","acquired","port/acquired",-290102787),["Got port ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljserial.utils.webserial.describe_port(port))].join(''),new cljs.core.Keyword(null,"line","line",212345235),82], null)),null):null));
}));
}));
});
})();
var inst_55318 = promesa.protocols._mcat(inst_55316,inst_55317);
var state_55325__$1 = state_55325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55325__$1,inst_55318);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webserial$state_machine__33464__auto__ = null;
var cljserial$utils$webserial$state_machine__33464__auto____0 = (function (){
var statearr_55346 = [null,null,null,null,null,null,null];
(statearr_55346[(0)] = cljserial$utils$webserial$state_machine__33464__auto__);

(statearr_55346[(1)] = (1));

return statearr_55346;
});
var cljserial$utils$webserial$state_machine__33464__auto____1 = (function (state_55325){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55325);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55349){var ex__33467__auto__ = e55349;
var statearr_55351_55792 = state_55325;
(statearr_55351_55792[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55325[(4)]))){
var statearr_55353_55794 = state_55325;
(statearr_55353_55794[(1)] = cljs.core.first((state_55325[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55798 = state_55325;
state_55325 = G__55798;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webserial$state_machine__33464__auto__ = function(state_55325){
switch(arguments.length){
case 0:
return cljserial$utils$webserial$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webserial$state_machine__33464__auto____1.call(this,state_55325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webserial$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webserial$state_machine__33464__auto____0;
cljserial$utils$webserial$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webserial$state_machine__33464__auto____1;
return cljserial$utils$webserial$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55355 = f__33561__auto__();
(statearr_55355[(6)] = c__33560__auto__);

return statearr_55355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webserial.await_port.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webserial.await_port.cljs$lang$applyTo = (function (seq55306){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55306));
}));

cljserial.utils.webserial.open_port_PLUS_ = (function cljserial$utils$webserial$open_port_PLUS_(port){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","open-attempt","port/open-attempt",-234603808),cljserial.utils.webserial.describe_port(port),new cljs.core.Keyword(null,"line","line",212345235),85], null)),null);
} else {
}

try{return port.open(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),(115200),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),"hardware",new cljs.core.Keyword(null,"bufferSize","bufferSize",1012463826),(4096)], null)));
}catch (e55358){if((e55358 instanceof Error)){
var e = e55358;
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","open-failure","port/open-failure",2054577155),e,new cljs.core.Keyword(null,"line","line",212345235),92], null)),null);
} else {
}

return null;
} else {
throw e55358;

}
}});
cljserial.utils.webserial.open_port = (function cljserial$utils$webserial$open_port(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55805 = arguments.length;
var i__5770__auto___55806 = (0);
while(true){
if((i__5770__auto___55806 < len__5769__auto___55805)){
args__5775__auto__.push((arguments[i__5770__auto___55806]));

var G__55808 = (i__5770__auto___55806 + (1));
i__5770__auto___55806 = G__55808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljserial.utils.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljserial.utils.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic = (function (port,p__55365){
var map__55367 = p__55365;
var map__55367__$1 = cljs.core.__destructure_map(map__55367);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55367__$1,new cljs.core.Keyword(null,"options","options",99638489),cljserial.utils.webserial.DEFAULTS);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55367__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55367__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55396){
var state_val_55397 = (state_55396[(1)]);
if((state_val_55397 === (1))){
var state_55396__$1 = state_55396;
if(goog.debug.LOGGING_ENABLED){
var statearr_55411_55810 = state_55396__$1;
(statearr_55411_55810[(1)] = (2));

} else {
var statearr_55412_55811 = state_55396__$1;
(statearr_55412_55811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55397 === (2))){
var inst_55378 = [new cljs.core.Keyword("port","open-serial-options","port/open-serial-options",1774682420),new cljs.core.Keyword(null,"line","line",212345235)];
var inst_55379 = [options,98];
var inst_55380 = cljs.core.PersistentHashMap.fromArrays(inst_55378,inst_55379);
var inst_55381 = cljs.core.identity(inst_55380);
var inst_55383 = lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"info","info",-317069002),inst_55381,null);
var state_55396__$1 = state_55396;
var statearr_55420_55813 = state_55396__$1;
(statearr_55420_55813[(2)] = inst_55383);

(statearr_55420_55813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55397 === (3))){
var state_55396__$1 = state_55396;
var statearr_55422_55814 = state_55396__$1;
(statearr_55422_55814[(2)] = null);

(statearr_55422_55814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55397 === (4))){
var inst_55388 = (state_55396[(2)]);
var inst_55389 = cljserial.utils.webserial.open_port_PLUS_(port);
var inst_55390 = (function (){return (function (){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","open-success","port/open-success",717607129),port,new cljs.core.Keyword(null,"line","line",212345235),101], null)),null);
} else {
}

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(port) : on_success.call(null, port));
});
})();
var inst_55391 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55389,inst_55390);
var inst_55393 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","open-failure","port/open-failure",2054577155),e,new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);
} else {
}

(on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(port) : on_failure.call(null, port));

return null;
});
})();
var inst_55394 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55391,inst_55393);
var state_55396__$1 = (function (){var statearr_55434 = state_55396;
(statearr_55434[(7)] = inst_55388);

return statearr_55434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55396__$1,inst_55394);
} else {
return null;
}
}
}
}
});
return (function() {
var cljserial$utils$webserial$state_machine__33464__auto__ = null;
var cljserial$utils$webserial$state_machine__33464__auto____0 = (function (){
var statearr_55436 = [null,null,null,null,null,null,null,null];
(statearr_55436[(0)] = cljserial$utils$webserial$state_machine__33464__auto__);

(statearr_55436[(1)] = (1));

return statearr_55436;
});
var cljserial$utils$webserial$state_machine__33464__auto____1 = (function (state_55396){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55396);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55442){var ex__33467__auto__ = e55442;
var statearr_55443_55823 = state_55396;
(statearr_55443_55823[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55396[(4)]))){
var statearr_55446_55824 = state_55396;
(statearr_55446_55824[(1)] = cljs.core.first((state_55396[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55826 = state_55396;
state_55396 = G__55826;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webserial$state_machine__33464__auto__ = function(state_55396){
switch(arguments.length){
case 0:
return cljserial$utils$webserial$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webserial$state_machine__33464__auto____1.call(this,state_55396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webserial$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webserial$state_machine__33464__auto____0;
cljserial$utils$webserial$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webserial$state_machine__33464__auto____1;
return cljserial$utils$webserial$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55452 = f__33561__auto__();
(statearr_55452[(6)] = c__33560__auto__);

return statearr_55452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webserial.open_port.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljserial.utils.webserial.open_port.cljs$lang$applyTo = (function (seq55360){
var G__55361 = cljs.core.first(seq55360);
var seq55360__$1 = cljs.core.next(seq55360);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55361,seq55360__$1);
}));

/**
 * Close and 'forget' the port (i.e. relinquish the access permissions).
 *   See https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/forget
 */
cljserial.utils.webserial.forget_port = (function cljserial$utils$webserial$forget_port(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55829 = arguments.length;
var i__5770__auto___55830 = (0);
while(true){
if((i__5770__auto___55830 < len__5769__auto___55829)){
args__5775__auto__.push((arguments[i__5770__auto___55830]));

var G__55831 = (i__5770__auto___55830 + (1));
i__5770__auto___55830 = G__55831;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljserial.utils.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljserial.utils.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic = (function (port,p__55462){
var map__55463 = p__55462;
var map__55463__$1 = cljs.core.__destructure_map(map__55463);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55463__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55463__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55471){
var state_val_55472 = (state_55471[(1)]);
if((state_val_55472 === (1))){
var inst_55464 = port.forget();
var inst_55465 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55464,on_success);
var inst_55468 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","forget-failure","port/forget-failure",304689233),e,new cljs.core.Keyword(null,"line","line",212345235),118], null)),null);
} else {
}

return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(e) : on_failure.call(null, e));
});
})();
var inst_55469 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55465,inst_55468);
var state_55471__$1 = state_55471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55471__$1,inst_55469);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webserial$state_machine__33464__auto__ = null;
var cljserial$utils$webserial$state_machine__33464__auto____0 = (function (){
var statearr_55486 = [null,null,null,null,null,null,null];
(statearr_55486[(0)] = cljserial$utils$webserial$state_machine__33464__auto__);

(statearr_55486[(1)] = (1));

return statearr_55486;
});
var cljserial$utils$webserial$state_machine__33464__auto____1 = (function (state_55471){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55471);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55491){var ex__33467__auto__ = e55491;
var statearr_55492_55839 = state_55471;
(statearr_55492_55839[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55471[(4)]))){
var statearr_55493_55840 = state_55471;
(statearr_55493_55840[(1)] = cljs.core.first((state_55471[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55841 = state_55471;
state_55471 = G__55841;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webserial$state_machine__33464__auto__ = function(state_55471){
switch(arguments.length){
case 0:
return cljserial$utils$webserial$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webserial$state_machine__33464__auto____1.call(this,state_55471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webserial$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webserial$state_machine__33464__auto____0;
cljserial$utils$webserial$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webserial$state_machine__33464__auto____1;
return cljserial$utils$webserial$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55494 = f__33561__auto__();
(statearr_55494[(6)] = c__33560__auto__);

return statearr_55494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webserial.forget_port.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljserial.utils.webserial.forget_port.cljs$lang$applyTo = (function (seq55455){
var G__55456 = cljs.core.first(seq55455);
var seq55455__$1 = cljs.core.next(seq55455);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55456,seq55455__$1);
}));

cljserial.utils.webserial.go_read_as = (function cljserial$utils$webserial$go_read_as(p__55502){
var map__55503 = p__55502;
var map__55503__$1 = cljs.core.__destructure_map(map__55503);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55503__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var byte_stream_transformer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55503__$1,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55503__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55620){
var state_val_55621 = (state_55620[(1)]);
if((state_val_55621 === (7))){
var inst_55517 = (state_55620[(7)]);
var inst_55509 = (state_55620[(8)]);
var inst_55532 = (state_55620[(2)]);
var inst_55534 = inst_55509.releaseLock();
var _ = (function (){var temp__5804__auto__ = (state_55620[(5)]);
if(cljs.core.truth_(temp__5804__auto__)){
var e__32698__auto__ = temp__5804__auto__;
throw e__32698__auto__;
} else {
return null;
}
})();
var state_55620__$1 = (function (){var statearr_55641 = state_55620;
(statearr_55641[(9)] = inst_55532);

(statearr_55641[(10)] = inst_55534);

return statearr_55641;
})();
var statearr_55642_55847 = state_55620__$1;
(statearr_55642_55847[(2)] = inst_55517);

(statearr_55642_55847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (20))){
var inst_55582 = (state_55620[(11)]);
var state_55620__$1 = state_55620;
if(cljs.core.truth_(inst_55582)){
var statearr_55643_55848 = state_55620__$1;
(statearr_55643_55848[(1)] = (22));

} else {
var statearr_55644_55849 = state_55620__$1;
(statearr_55644_55849[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (27))){
var inst_55599 = (state_55620[(12)]);
var state_55620__$1 = state_55620;
var statearr_55652_55852 = state_55620__$1;
(statearr_55652_55852[(2)] = inst_55599);

(statearr_55652_55852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (1))){
var inst_55507 = port.readable;
var inst_55508 = (byte_stream_transformer.cljs$core$IFn$_invoke$arity$1 ? byte_stream_transformer.cljs$core$IFn$_invoke$arity$1(inst_55507) : byte_stream_transformer.call(null, inst_55507));
var inst_55509 = inst_55508.getReader();
var state_55620__$1 = (function (){var statearr_55657 = state_55620;
(statearr_55657[(8)] = inst_55509);

return statearr_55657;
})();
var statearr_55658_55853 = state_55620__$1;
(statearr_55658_55853[(2)] = null);

(statearr_55658_55853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (24))){
var inst_55509 = (state_55620[(8)]);
var inst_55594 = (state_55620[(2)]);
var inst_55595 = inst_55509.read();
var inst_55596 = cljs.core.async.interop.p__GT_c(inst_55595);
var state_55620__$1 = (function (){var statearr_55659 = state_55620;
(statearr_55659[(13)] = inst_55594);

return statearr_55659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55620__$1,(25),inst_55596);
} else {
if((state_val_55621 === (4))){
var _ = (function (){var statearr_55660 = state_55620;
(statearr_55660[(4)] = cljs.core.rest((state_55620[(4)])));

return statearr_55660;
})();
var inst_55517 = (state_55620[(2)]);
var state_55620__$1 = (function (){var statearr_55661 = state_55620;
(statearr_55661[(7)] = inst_55517);

return statearr_55661;
})();
if(goog.debug.LOGGING_ENABLED){
var statearr_55662_55859 = state_55620__$1;
(statearr_55662_55859[(1)] = (5));

} else {
var statearr_55664_55860 = state_55620__$1;
(statearr_55664_55860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (15))){
var inst_55567 = (state_55620[(14)]);
var state_55620__$1 = state_55620;
var statearr_55666_55862 = state_55620__$1;
(statearr_55666_55862[(2)] = inst_55567);

(statearr_55666_55862[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (21))){
var inst_55615 = (state_55620[(2)]);
var _ = (function (){var statearr_55668 = state_55620;
(statearr_55668[(4)] = cljs.core.rest((state_55620[(4)])));

return statearr_55668;
})();
var state_55620__$1 = state_55620;
var statearr_55670_55863 = state_55620__$1;
(statearr_55670_55863[(2)] = inst_55615);

(statearr_55670_55863[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (31))){
var inst_55612 = (state_55620[(2)]);
var inst_55582 = inst_55612;
var state_55620__$1 = (function (){var statearr_55672 = state_55620;
(statearr_55672[(11)] = inst_55582);

return statearr_55672;
})();
var statearr_55673_55865 = state_55620__$1;
(statearr_55673_55865[(2)] = null);

(statearr_55673_55865[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (13))){
var inst_55564 = (state_55620[(15)]);
var inst_55567 = (state_55620[(14)]);
var inst_55564__$1 = (state_55620[(2)]);
var inst_55567__$1 = (inst_55564__$1 instanceof cljs.core.ExceptionInfo);
var state_55620__$1 = (function (){var statearr_55674 = state_55620;
(statearr_55674[(15)] = inst_55564__$1);

(statearr_55674[(14)] = inst_55567__$1);

return statearr_55674;
})();
if(cljs.core.truth_(inst_55567__$1)){
var statearr_55677_55866 = state_55620__$1;
(statearr_55677_55866[(1)] = (14));

} else {
var statearr_55678_55867 = state_55620__$1;
(statearr_55678_55867[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (22))){
var inst_55582 = (state_55620[(11)]);
var inst_55586 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_55582);
var inst_55587 = cljs.core.__destructure_map(inst_55586);
var inst_55589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55587,"value");
var inst_55590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55587,"_done");
var inst_55591 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_55589) : handler.call(null, inst_55589));
var state_55620__$1 = (function (){var statearr_55683 = state_55620;
(statearr_55683[(16)] = inst_55590);

return statearr_55683;
})();
var statearr_55684_55869 = state_55620__$1;
(statearr_55684_55869[(2)] = inst_55591);

(statearr_55684_55869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (29))){
var inst_55598 = (state_55620[(17)]);
var inst_55609 = (function(){throw inst_55598})();
var state_55620__$1 = state_55620;
var statearr_55686_55870 = state_55620__$1;
(statearr_55686_55870[(2)] = inst_55609);

(statearr_55686_55870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (6))){
var state_55620__$1 = state_55620;
var statearr_55688_55871 = state_55620__$1;
(statearr_55688_55871[(2)] = null);

(statearr_55688_55871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (28))){
var inst_55607 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
if(cljs.core.truth_(inst_55607)){
var statearr_55690_55873 = state_55620__$1;
(statearr_55690_55873[(1)] = (29));

} else {
var statearr_55691_55874 = state_55620__$1;
(statearr_55691_55874[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (25))){
var inst_55598 = (state_55620[(17)]);
var inst_55599 = (state_55620[(12)]);
var inst_55598__$1 = (state_55620[(2)]);
var inst_55599__$1 = (inst_55598__$1 instanceof cljs.core.ExceptionInfo);
var state_55620__$1 = (function (){var statearr_55695 = state_55620;
(statearr_55695[(17)] = inst_55598__$1);

(statearr_55695[(12)] = inst_55599__$1);

return statearr_55695;
})();
if(cljs.core.truth_(inst_55599__$1)){
var statearr_55697_55875 = state_55620__$1;
(statearr_55697_55875[(1)] = (26));

} else {
var statearr_55699_55876 = state_55620__$1;
(statearr_55699_55876[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (17))){
var inst_55564 = (state_55620[(15)]);
var inst_55577 = (function(){throw inst_55564})();
var state_55620__$1 = state_55620;
var statearr_55704_55878 = state_55620__$1;
(statearr_55704_55878[(2)] = inst_55577);

(statearr_55704_55878[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (3))){
var inst_55618 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55620__$1,inst_55618);
} else {
if((state_val_55621 === (12))){
var _ = (function (){var statearr_55713 = state_55620;
(statearr_55713[(4)] = cljs.core.rest((state_55620[(4)])));

return statearr_55713;
})();
var state_55620__$1 = state_55620;
var ex55703 = (state_55620__$1[(2)]);
var statearr_55715_55879 = state_55620__$1;
(statearr_55715_55879[(5)] = ex55703);


if((ex55703 instanceof Error)){
var statearr_55719_55880 = state_55620__$1;
(statearr_55719_55880[(1)] = (8));

(statearr_55719_55880[(5)] = null);

} else {
throw ex55703;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (2))){
var inst_55509 = (state_55620[(8)]);
var _ = (function (){var statearr_55722 = state_55620;
(statearr_55722[(4)] = cljs.core.cons((4),(state_55620[(4)])));

return statearr_55722;
})();
var ___$1 = (function (){var statearr_55724 = state_55620;
(statearr_55724[(4)] = cljs.core.cons((12),(state_55620[(4)])));

return statearr_55724;
})();
var inst_55559 = inst_55509.read();
var inst_55560 = cljs.core.async.interop.p__GT_c(inst_55559);
var state_55620__$1 = state_55620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55620__$1,(13),inst_55560);
} else {
if((state_val_55621 === (23))){
var state_55620__$1 = state_55620;
var statearr_55725_55881 = state_55620__$1;
(statearr_55725_55881[(2)] = null);

(statearr_55725_55881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (19))){
var inst_55580 = (state_55620[(2)]);
var inst_55582 = inst_55580;
var state_55620__$1 = (function (){var statearr_55729 = state_55620;
(statearr_55729[(11)] = inst_55582);

return statearr_55729;
})();
var statearr_55732_55882 = state_55620__$1;
(statearr_55732_55882[(2)] = null);

(statearr_55732_55882[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (11))){
var inst_55546 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
var statearr_55733_55883 = state_55620__$1;
(statearr_55733_55883[(2)] = inst_55546);

(statearr_55733_55883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (9))){
var inst_55537 = (state_55620[(18)]);
var inst_55539 = [new cljs.core.Keyword("port","read-failure","port/read-failure",-631319542),new cljs.core.Keyword(null,"line","line",212345235)];
var inst_55540 = [inst_55537,142];
var inst_55541 = cljs.core.PersistentHashMap.fromArrays(inst_55539,inst_55540);
var inst_55542 = cljs.core.identity(inst_55541);
var inst_55543 = lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"error","error",-978969032),inst_55542,null);
var state_55620__$1 = state_55620;
var statearr_55739_55884 = state_55620__$1;
(statearr_55739_55884[(2)] = inst_55543);

(statearr_55739_55884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (5))){
var inst_55525 = [new cljs.core.Keyword("port","release-read-lock","port/release-read-lock",1662315669),new cljs.core.Keyword(null,"line","line",212345235)];
var inst_55526 = [port,144];
var inst_55527 = cljs.core.PersistentHashMap.fromArrays(inst_55525,inst_55526);
var inst_55528 = cljs.core.identity(inst_55527);
var inst_55529 = lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"debug","debug",-1608172596),inst_55528,null);
var state_55620__$1 = state_55620;
var statearr_55745_55886 = state_55620__$1;
(statearr_55745_55886[(2)] = inst_55529);

(statearr_55745_55886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (14))){
var inst_55564 = (state_55620[(15)]);
var inst_55570 = cljs.core.ex_data(inst_55564);
var inst_55571 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_55570);
var inst_55572 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55571,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_55620__$1 = state_55620;
var statearr_55747_55887 = state_55620__$1;
(statearr_55747_55887[(2)] = inst_55572);

(statearr_55747_55887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (26))){
var inst_55598 = (state_55620[(17)]);
var inst_55601 = cljs.core.ex_data(inst_55598);
var inst_55602 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_55601);
var inst_55603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55602,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_55620__$1 = state_55620;
var statearr_55752_55889 = state_55620__$1;
(statearr_55752_55889[(2)] = inst_55603);

(statearr_55752_55889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (16))){
var inst_55575 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
if(cljs.core.truth_(inst_55575)){
var statearr_55754_55890 = state_55620__$1;
(statearr_55754_55890[(1)] = (17));

} else {
var statearr_55755_55891 = state_55620__$1;
(statearr_55755_55891[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (30))){
var inst_55598 = (state_55620[(17)]);
var state_55620__$1 = state_55620;
var statearr_55759_55892 = state_55620__$1;
(statearr_55759_55892[(2)] = inst_55598);

(statearr_55759_55892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (10))){
var state_55620__$1 = state_55620;
var statearr_55762_55896 = state_55620__$1;
(statearr_55762_55896[(2)] = null);

(statearr_55762_55896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (18))){
var inst_55564 = (state_55620[(15)]);
var state_55620__$1 = state_55620;
var statearr_55764_55897 = state_55620__$1;
(statearr_55764_55897[(2)] = inst_55564);

(statearr_55764_55897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (8))){
var inst_55537 = (state_55620[(2)]);
var state_55620__$1 = (function (){var statearr_55765 = state_55620;
(statearr_55765[(18)] = inst_55537);

return statearr_55765;
})();
if(goog.debug.LOGGING_ENABLED){
var statearr_55766_55899 = state_55620__$1;
(statearr_55766_55899[(1)] = (9));

} else {
var statearr_55767_55900 = state_55620__$1;
(statearr_55767_55900[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto__ = null;
var cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto____0 = (function (){
var statearr_55770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55770[(0)] = cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto__);

(statearr_55770[(1)] = (1));

return statearr_55770;
});
var cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto____1 = (function (state_55620){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55620);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55772){var ex__33467__auto__ = e55772;
var statearr_55773_55902 = state_55620;
(statearr_55773_55902[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55620[(4)]))){
var statearr_55774_55903 = state_55620;
(statearr_55774_55903[(1)] = cljs.core.first((state_55620[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55904 = state_55620;
state_55620 = G__55904;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto__ = function(state_55620){
switch(arguments.length){
case 0:
return cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto____1.call(this,state_55620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto____0;
cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto____1;
return cljserial$utils$webserial$go_read_as_$_state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55778 = f__33561__auto__();
(statearr_55778[(6)] = c__33560__auto__);

return statearr_55778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
});
cljserial.utils.webserial.as_byte_readable = (function cljserial$utils$webserial$as_byte_readable(readable){
return readable;
});
cljserial.utils.webserial.as_text_readable = (function cljserial$utils$webserial$as_text_readable(readable){
return readable.pipeThrough((new TextDecoderStream()));
});
cljserial.utils.webserial.go_read_text = (function cljserial$utils$webserial$go_read_text(port,handler){
return cljserial.utils.webserial.go_read_as(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310),cljserial.utils.webserial.as_text_readable], null));
});
cljserial.utils.webserial.go_read_bytes = (function cljserial$utils$webserial$go_read_bytes(port,handler){
return cljserial.utils.webserial.go_read_as(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310),cljserial.utils.webserial.as_byte_readable], null));
});
cljserial.utils.webserial.get_read_channel = (function cljserial$utils$webserial$get_read_channel(port){
var byte_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var byte_handler = (function (new_bytes){
return cljs.core.async._GT__BANG_(byte_channel,new_bytes);
});
cljserial.utils.webserial.go_read_bytes(port,byte_handler);

return byte_channel;
});
cljserial.utils.webserial.write = (function cljserial$utils$webserial$write(port,command){
var writer = port.writable.getWriter();
var encoder = (new TextEncoder());
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webserial",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("port","tx-line","port/tx-line",-417720343),command,new cljs.core.Keyword(null,"line","line",212345235),175], null)),null);
} else {
}

writer.write(encoder.encode(command));

return writer.releaseLock();
});

//# sourceMappingURL=cljserial.utils.webserial.js.map
