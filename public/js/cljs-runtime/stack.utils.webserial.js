goog.provide('stack.utils.webserial');
stack.utils.webserial.BAUD_RATES = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000000),(2000000),(1000000),(512000),(256000),(128000),(115200),(57600),(38400),(19200),(9600)], null);
stack.utils.webserial.DataBits = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(7),new cljs.core.Keyword(null,"max","max",61366548),(8)], null)], null);
stack.utils.webserial.StopBits = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1)], null)], null);
stack.utils.webserial.Parity = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"even","even",-275845692),new cljs.core.Keyword(null,"odd","odd",-1213409872)], null);
stack.utils.webserial.FlowControl = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"hardware","hardware",515915884)], null);
stack.utils.webserial.VendorId = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(65535)], null)], null);
stack.utils.webserial.PortFilter = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"default","default",-1987822328),"None"], null)], null),new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null)], null);
stack.utils.webserial.SerialOptions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(0)], null),stack.utils.webserial.VendorId], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(115200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(10000000)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataBits","dataBits",-455071493),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(8)], null),stack.utils.webserial.DataBits], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stopBits","stopBits",341236831),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(1)], null),stack.utils.webserial.StopBits], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parity","parity",-1130304573),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"none","none",1333468478)], null),stack.utils.webserial.Parity], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bufferSize","bufferSize",1012463826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),(255)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),((1024) * (1024))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"none","none",1333468478)], null),stack.utils.webserial.FlowControl], null)], null);
stack.utils.webserial.DEFAULTS = malli.core.decode.cljs$core$IFn$_invoke$arity$3(stack.utils.webserial.SerialOptions,cljs.core.PersistentArrayMap.EMPTY,malli.transform.default_value_transformer);
stack.utils.webserial.PORT_FILTERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null);
stack.utils.webserial.describe_port_filter = (function stack$utils$webserial$describe_port_filter(pf){
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s (%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pf),new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417).cljs$core$IFn$_invoke$arity$1(pf)], 0));
});
stack.utils.webserial.FTDI_PORT_FILTER = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027),new cljs.core.Keyword(null,"name","name",1843675177),"FTDI"], null);
stack.utils.webserial.BAUD_RATE_DEFAULT = (115200);
stack.utils.webserial.FLOW_CONTROL_DEFAULT = "hardware";
stack.utils.webserial.get_webserial_entrypoint = (function stack$utils$webserial$get_webserial_entrypoint(){
return navigator.serial;
});
stack.utils.webserial.is_supported_QMARK_ = (function stack$utils$webserial$is_supported_QMARK_(){
return (!((stack.utils.webserial.get_webserial_entrypoint() == null)));
});
stack.utils.webserial.request_port_PLUS_ = (function stack$utils$webserial$request_port_PLUS_(vendor_id){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webserial";
var __id = null;
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,66,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vendor-filter","vendor-filter",1677320651),vendor_id], null),null,"Requesting port",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

var filters = (cljs.core.truth_((function (){var and__5000__auto__ = vendor_id;
if(cljs.core.truth_(and__5000__auto__)){
return (vendor_id > (0));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),vendor_id], null)], null):cljs.core.PersistentVector.EMPTY);
return stack.utils.webserial.get_webserial_entrypoint().requestPort(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),filters], null)));
});
stack.utils.webserial.describe_port = (function stack$utils$webserial$describe_port(port){
var port_info = port.getInfo();
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s::%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([port_info.usbVendorId,port_info.usbProductId], 0));
});
stack.utils.webserial.await_port = (function stack$utils$webserial$await_port(var_args){
var args__5732__auto__ = [];
var len__5726__auto___94330 = arguments.length;
var i__5727__auto___94331 = (0);
while(true){
if((i__5727__auto___94331 < len__5726__auto___94330)){
args__5732__auto__.push((arguments[i__5727__auto___94331]));

var G__94332 = (i__5727__auto___94331 + (1));
i__5727__auto___94331 = G__94332;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic = (function (p__93681){
var map__93682 = p__93681;
var map__93682__$1 = cljs.core.__destructure_map(map__93682);
var vendor_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93682__$1,new cljs.core.Keyword(null,"vendor-id","vendor-id",904935999),null);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93682__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93682__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_93691){
var state_val_93692 = (state_93691[(1)]);
if((state_val_93692 === (1))){
var inst_93684 = promesa.protocols._promise(null);
var inst_93685 = (function (){return (function (___47964__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.utils.webserial.request_port_PLUS_(vendor_id)),(function (port){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(port)?(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(port) : on_success.call(null, port)):(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, )))),(function (___47932__auto__){
return promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webserial";
var __id = null;
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),80,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,80,14,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["Got port ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stack.utils.webserial.describe_port(port))].join(''),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})());
}));
}));
});
})();
var inst_93686 = promesa.protocols._mcat(inst_93684,inst_93685);
var state_93691__$1 = state_93691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93691__$1,inst_93686);
} else {
return null;
}
});
return (function() {
var stack$utils$webserial$state_machine__33347__auto__ = null;
var stack$utils$webserial$state_machine__33347__auto____0 = (function (){
var statearr_93708 = [null,null,null,null,null,null,null];
(statearr_93708[(0)] = stack$utils$webserial$state_machine__33347__auto__);

(statearr_93708[(1)] = (1));

return statearr_93708;
});
var stack$utils$webserial$state_machine__33347__auto____1 = (function (state_93691){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_93691);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e93711){var ex__33350__auto__ = e93711;
var statearr_93713_94348 = state_93691;
(statearr_93713_94348[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_93691[(4)]))){
var statearr_93715_94354 = state_93691;
(statearr_93715_94354[(1)] = cljs.core.first((state_93691[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94355 = state_93691;
state_93691 = G__94355;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webserial$state_machine__33347__auto__ = function(state_93691){
switch(arguments.length){
case 0:
return stack$utils$webserial$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webserial$state_machine__33347__auto____1.call(this,state_93691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webserial$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webserial$state_machine__33347__auto____0;
stack$utils$webserial$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webserial$state_machine__33347__auto____1;
return stack$utils$webserial$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_93723 = f__33422__auto__();
(statearr_93723[(6)] = c__33421__auto__);

return statearr_93723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webserial.await_port.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webserial.await_port.cljs$lang$applyTo = (function (seq93678){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq93678));
}));

stack.utils.webserial.open_port_PLUS_ = (function stack$utils$webserial$open_port_PLUS_(port){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webserial";
var __id = null;
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),83,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,83,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,stack.utils.webserial.describe_port(port),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

try{return port.open(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),(115200),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),"hardware",new cljs.core.Keyword(null,"bufferSize","bufferSize",1012463826),(4096)], null)));
}catch (e93750){if((e93750 instanceof Error)){
var e = e93750;
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webserial";
var __id = new cljs.core.Keyword("stack.utils.webserial","port-open-failure","stack.utils.webserial/port-open-failure",-141660296);
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),90,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,90,7,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return null;
} else {
throw e93750;

}
}});
stack.utils.webserial.open_port = (function stack$utils$webserial$open_port(var_args){
var args__5732__auto__ = [];
var len__5726__auto___94381 = arguments.length;
var i__5727__auto___94382 = (0);
while(true){
if((i__5727__auto___94382 < len__5726__auto___94381)){
args__5732__auto__.push((arguments[i__5727__auto___94382]));

var G__94383 = (i__5727__auto___94382 + (1));
i__5727__auto___94382 = G__94383;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.utils.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.utils.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic = (function (port,p__93810){
var map__93811 = p__93810;
var map__93811__$1 = cljs.core.__destructure_map(map__93811);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93811__$1,new cljs.core.Keyword(null,"options","options",99638489),stack.utils.webserial.DEFAULTS);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93811__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93811__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_93827){
var state_val_93828 = (state_93827[(1)]);
if((state_val_93828 === (1))){
var inst_93815 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webserial";
var __id = null;
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),13,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,96,13,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,options,null,"Opening port...",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
});
})();
var inst_93816 = inst_93815();
var inst_93819 = stack.utils.webserial.open_port_PLUS_(port);
var inst_93822 = (function (){return (function (){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webserial";
var __id = new cljs.core.Keyword("stack.utils.webserial","port-opened","stack.utils.webserial/port-opened",402600587);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,99,26,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,port,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(port) : on_success.call(null, port));
});
})();
var inst_93823 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_93819,inst_93822);
var inst_93824 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webserial";
var __id = new cljs.core.Keyword("stack.utils.webserial","port-open-failure","stack.utils.webserial/port-open-failure",-141660296);
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),102,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,102,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

(on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(port) : on_failure.call(null, port));

return null;
});
})();
var inst_93825 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_93823,inst_93824);
var state_93827__$1 = (function (){var statearr_93866 = state_93827;
(statearr_93866[(7)] = inst_93816);

return statearr_93866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_93827__$1,inst_93825);
} else {
return null;
}
});
return (function() {
var stack$utils$webserial$state_machine__33347__auto__ = null;
var stack$utils$webserial$state_machine__33347__auto____0 = (function (){
var statearr_93869 = [null,null,null,null,null,null,null,null];
(statearr_93869[(0)] = stack$utils$webserial$state_machine__33347__auto__);

(statearr_93869[(1)] = (1));

return statearr_93869;
});
var stack$utils$webserial$state_machine__33347__auto____1 = (function (state_93827){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_93827);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e93871){var ex__33350__auto__ = e93871;
var statearr_93873_94397 = state_93827;
(statearr_93873_94397[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_93827[(4)]))){
var statearr_93874_94398 = state_93827;
(statearr_93874_94398[(1)] = cljs.core.first((state_93827[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94399 = state_93827;
state_93827 = G__94399;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webserial$state_machine__33347__auto__ = function(state_93827){
switch(arguments.length){
case 0:
return stack$utils$webserial$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webserial$state_machine__33347__auto____1.call(this,state_93827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webserial$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webserial$state_machine__33347__auto____0;
stack$utils$webserial$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webserial$state_machine__33347__auto____1;
return stack$utils$webserial$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_93878 = f__33422__auto__();
(statearr_93878[(6)] = c__33421__auto__);

return statearr_93878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webserial.open_port.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.utils.webserial.open_port.cljs$lang$applyTo = (function (seq93800){
var G__93801 = cljs.core.first(seq93800);
var seq93800__$1 = cljs.core.next(seq93800);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93801,seq93800__$1);
}));

/**
 * Close and 'forget' the port (i.e. relinquish the access permissions).
 *   See https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/forget
 */
stack.utils.webserial.forget_port = (function stack$utils$webserial$forget_port(var_args){
var args__5732__auto__ = [];
var len__5726__auto___94401 = arguments.length;
var i__5727__auto___94402 = (0);
while(true){
if((i__5727__auto___94402 < len__5726__auto___94401)){
args__5732__auto__.push((arguments[i__5727__auto___94402]));

var G__94403 = (i__5727__auto___94402 + (1));
i__5727__auto___94402 = G__94403;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.utils.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.utils.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic = (function (port,p__93897){
var map__93898 = p__93897;
var map__93898__$1 = cljs.core.__destructure_map(map__93898);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93898__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93898__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_93910){
var state_val_93911 = (state_93910[(1)]);
if((state_val_93911 === (1))){
var inst_93905 = port.forget();
var inst_93906 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_93905,on_success);
var inst_93907 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webserial";
var __id = new cljs.core.Keyword("stack.utils.webserial","port-forget-failure","stack.utils.webserial/port-forget-failure",-1697596807);
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),116,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,116,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(e) : on_failure.call(null, e));
});
})();
var inst_93908 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_93906,inst_93907);
var state_93910__$1 = state_93910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93910__$1,inst_93908);
} else {
return null;
}
});
return (function() {
var stack$utils$webserial$state_machine__33347__auto__ = null;
var stack$utils$webserial$state_machine__33347__auto____0 = (function (){
var statearr_93969 = [null,null,null,null,null,null,null];
(statearr_93969[(0)] = stack$utils$webserial$state_machine__33347__auto__);

(statearr_93969[(1)] = (1));

return statearr_93969;
});
var stack$utils$webserial$state_machine__33347__auto____1 = (function (state_93910){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_93910);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e93971){var ex__33350__auto__ = e93971;
var statearr_93972_94413 = state_93910;
(statearr_93972_94413[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_93910[(4)]))){
var statearr_93973_94414 = state_93910;
(statearr_93973_94414[(1)] = cljs.core.first((state_93910[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94415 = state_93910;
state_93910 = G__94415;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webserial$state_machine__33347__auto__ = function(state_93910){
switch(arguments.length){
case 0:
return stack$utils$webserial$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webserial$state_machine__33347__auto____1.call(this,state_93910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webserial$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webserial$state_machine__33347__auto____0;
stack$utils$webserial$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webserial$state_machine__33347__auto____1;
return stack$utils$webserial$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_93974 = f__33422__auto__();
(statearr_93974[(6)] = c__33421__auto__);

return statearr_93974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webserial.forget_port.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.utils.webserial.forget_port.cljs$lang$applyTo = (function (seq93888){
var G__93890 = cljs.core.first(seq93888);
var seq93888__$1 = cljs.core.next(seq93888);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__93890,seq93888__$1);
}));

stack.utils.webserial.go_read_as = (function stack$utils$webserial$go_read_as(p__93977){
var map__93984 = p__93977;
var map__93984__$1 = cljs.core.__destructure_map(map__93984);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93984__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var byte_stream_transformer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93984__$1,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93984__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94076){
var state_val_94077 = (state_94076[(1)]);
if((state_val_94077 === (7))){
var inst_94018 = (state_94076[(7)]);
var inst_94016 = (state_94076[(8)]);
var inst_94016__$1 = (state_94076[(2)]);
var inst_94018__$1 = (inst_94016__$1 instanceof cljs.core.ExceptionInfo);
var state_94076__$1 = (function (){var statearr_94082 = state_94076;
(statearr_94082[(7)] = inst_94018__$1);

(statearr_94082[(8)] = inst_94016__$1);

return statearr_94082;
})();
if(cljs.core.truth_(inst_94018__$1)){
var statearr_94083_94416 = state_94076__$1;
(statearr_94083_94416[(1)] = (8));

} else {
var statearr_94084_94417 = state_94076__$1;
(statearr_94084_94417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (20))){
var inst_94048 = (state_94076[(9)]);
var inst_94052 = cljs.core.ex_data(inst_94048);
var inst_94053 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_94052);
var inst_94054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_94053,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_94076__$1 = state_94076;
var statearr_94085_94420 = state_94076__$1;
(statearr_94085_94420[(2)] = inst_94054);

(statearr_94085_94420[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (1))){
var inst_93985 = port.readable;
var inst_93986 = (byte_stream_transformer.cljs$core$IFn$_invoke$arity$1 ? byte_stream_transformer.cljs$core$IFn$_invoke$arity$1(inst_93985) : byte_stream_transformer.call(null, inst_93985));
var inst_93987 = inst_93986.getReader();
var state_94076__$1 = (function (){var statearr_94088 = state_94076;
(statearr_94088[(10)] = inst_93987);

return statearr_94088;
})();
var statearr_94092_94421 = state_94076__$1;
(statearr_94092_94421[(2)] = null);

(statearr_94092_94421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (24))){
var inst_94048 = (state_94076[(9)]);
var state_94076__$1 = state_94076;
var statearr_94093_94423 = state_94076__$1;
(statearr_94093_94423[(2)] = inst_94048);

(statearr_94093_94423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (4))){
var inst_93987 = (state_94076[(10)]);
var _ = (function (){var statearr_94095 = state_94076;
(statearr_94095[(4)] = cljs.core.rest((state_94076[(4)])));

return statearr_94095;
})();
var inst_93991 = (state_94076[(2)]);
var inst_93992 = (function (){var reader = inst_93987;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webserial";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),142,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,142,11,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,port,null,"Releasing port read lock",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
});
})();
var inst_93993 = inst_93992();
var inst_93994 = inst_93987.releaseLock();
var ___$1 = (function (){var temp__5823__auto__ = (state_94076[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__32581__auto__ = temp__5823__auto__;
throw e__32581__auto__;
} else {
return null;
}
})();
var state_94076__$1 = (function (){var statearr_94109 = state_94076;
(statearr_94109[(11)] = inst_93993);

(statearr_94109[(12)] = inst_93994);

return statearr_94109;
})();
var statearr_94111_94436 = state_94076__$1;
(statearr_94111_94436[(2)] = inst_93991);

(statearr_94111_94436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (15))){
var inst_94066 = (state_94076[(2)]);
var _ = (function (){var statearr_94113 = state_94076;
(statearr_94113[(4)] = cljs.core.rest((state_94076[(4)])));

return statearr_94113;
})();
var state_94076__$1 = state_94076;
var statearr_94114_94442 = state_94076__$1;
(statearr_94114_94442[(2)] = inst_94066);

(statearr_94114_94442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (21))){
var inst_94049 = (state_94076[(13)]);
var state_94076__$1 = state_94076;
var statearr_94117_94443 = state_94076__$1;
(statearr_94117_94443[(2)] = inst_94049);

(statearr_94117_94443[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (13))){
var inst_94030 = (state_94076[(2)]);
var inst_94031 = inst_94030;
var state_94076__$1 = (function (){var statearr_94121 = state_94076;
(statearr_94121[(14)] = inst_94031);

return statearr_94121;
})();
var statearr_94123_94444 = state_94076__$1;
(statearr_94123_94444[(2)] = null);

(statearr_94123_94444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (22))){
var inst_94057 = (state_94076[(2)]);
var state_94076__$1 = state_94076;
if(cljs.core.truth_(inst_94057)){
var statearr_94134_94445 = state_94076__$1;
(statearr_94134_94445[(1)] = (23));

} else {
var statearr_94135_94446 = state_94076__$1;
(statearr_94135_94446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (6))){
var _ = (function (){var statearr_94141 = state_94076;
(statearr_94141[(4)] = cljs.core.rest((state_94076[(4)])));

return statearr_94141;
})();
var state_94076__$1 = state_94076;
var ex94119 = (state_94076__$1[(2)]);
var statearr_94142_94447 = state_94076__$1;
(statearr_94142_94447[(5)] = ex94119);


if((ex94119 instanceof Error)){
var statearr_94143_94448 = state_94076__$1;
(statearr_94143_94448[(1)] = (5));

(statearr_94143_94448[(5)] = null);

} else {
throw ex94119;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (25))){
var inst_94063 = (state_94076[(2)]);
var inst_94031 = inst_94063;
var state_94076__$1 = (function (){var statearr_94146 = state_94076;
(statearr_94146[(14)] = inst_94031);

return statearr_94146;
})();
var statearr_94149_94449 = state_94076__$1;
(statearr_94149_94449[(2)] = null);

(statearr_94149_94449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (17))){
var state_94076__$1 = state_94076;
var statearr_94150_94450 = state_94076__$1;
(statearr_94150_94450[(2)] = null);

(statearr_94150_94450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (3))){
var inst_94069 = (state_94076[(2)]);
var state_94076__$1 = state_94076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94076__$1,inst_94069);
} else {
if((state_val_94077 === (12))){
var inst_94016 = (state_94076[(8)]);
var state_94076__$1 = state_94076;
var statearr_94153_94451 = state_94076__$1;
(statearr_94153_94451[(2)] = inst_94016);

(statearr_94153_94451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (2))){
var inst_93987 = (state_94076[(10)]);
var _ = (function (){var statearr_94158 = state_94076;
(statearr_94158[(4)] = cljs.core.cons((4),(state_94076[(4)])));

return statearr_94158;
})();
var ___$1 = (function (){var statearr_94164 = state_94076;
(statearr_94164[(4)] = cljs.core.cons((6),(state_94076[(4)])));

return statearr_94164;
})();
var inst_94013 = inst_93987.read();
var inst_94014 = cljs.core.async.interop.p__GT_c(inst_94013);
var state_94076__$1 = state_94076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94076__$1,(7),inst_94014);
} else {
if((state_val_94077 === (23))){
var inst_94048 = (state_94076[(9)]);
var inst_94060 = (function(){throw inst_94048})();
var state_94076__$1 = state_94076;
var statearr_94172_94455 = state_94076__$1;
(statearr_94172_94455[(2)] = inst_94060);

(statearr_94172_94455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (19))){
var inst_94049 = (state_94076[(13)]);
var inst_94048 = (state_94076[(9)]);
var inst_94048__$1 = (state_94076[(2)]);
var inst_94049__$1 = (inst_94048__$1 instanceof cljs.core.ExceptionInfo);
var state_94076__$1 = (function (){var statearr_94186 = state_94076;
(statearr_94186[(13)] = inst_94049__$1);

(statearr_94186[(9)] = inst_94048__$1);

return statearr_94186;
})();
if(cljs.core.truth_(inst_94049__$1)){
var statearr_94191_94456 = state_94076__$1;
(statearr_94191_94456[(1)] = (20));

} else {
var statearr_94193_94457 = state_94076__$1;
(statearr_94193_94457[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (11))){
var inst_94016 = (state_94076[(8)]);
var inst_94027 = (function(){throw inst_94016})();
var state_94076__$1 = state_94076;
var statearr_94196_94459 = state_94076__$1;
(statearr_94196_94459[(2)] = inst_94027);

(statearr_94196_94459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (9))){
var inst_94018 = (state_94076[(7)]);
var state_94076__$1 = state_94076;
var statearr_94207_94460 = state_94076__$1;
(statearr_94207_94460[(2)] = inst_94018);

(statearr_94207_94460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (5))){
var inst_93987 = (state_94076[(10)]);
var inst_93998 = (state_94076[(2)]);
var inst_94005 = (function (){var reader = inst_93987;
var e = inst_93998;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webserial";
var __id = new cljs.core.Keyword(null,"port-read-failure","port-read-failure",1851685975);
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),140,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,140,11,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
});
})();
var inst_94006 = inst_94005();
var state_94076__$1 = state_94076;
var statearr_94226_94464 = state_94076__$1;
(statearr_94226_94464[(2)] = inst_94006);

(statearr_94226_94464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (14))){
var inst_94031 = (state_94076[(14)]);
var state_94076__$1 = state_94076;
if(cljs.core.truth_(inst_94031)){
var statearr_94228_94466 = state_94076__$1;
(statearr_94228_94466[(1)] = (16));

} else {
var statearr_94233_94467 = state_94076__$1;
(statearr_94233_94467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (16))){
var inst_94031 = (state_94076[(14)]);
var inst_94036 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_94031);
var inst_94037 = cljs.core.__destructure_map(inst_94036);
var inst_94038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_94037,"value");
var inst_94039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_94037,"_done");
var inst_94040 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_94038) : handler.call(null, inst_94038));
var state_94076__$1 = (function (){var statearr_94234 = state_94076;
(statearr_94234[(15)] = inst_94039);

return statearr_94234;
})();
var statearr_94235_94473 = state_94076__$1;
(statearr_94235_94473[(2)] = inst_94040);

(statearr_94235_94473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (10))){
var inst_94025 = (state_94076[(2)]);
var state_94076__$1 = state_94076;
if(cljs.core.truth_(inst_94025)){
var statearr_94236_94475 = state_94076__$1;
(statearr_94236_94475[(1)] = (11));

} else {
var statearr_94237_94476 = state_94076__$1;
(statearr_94237_94476[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94077 === (18))){
var inst_93987 = (state_94076[(10)]);
var inst_94043 = (state_94076[(2)]);
var inst_94044 = inst_93987.read();
var inst_94046 = cljs.core.async.interop.p__GT_c(inst_94044);
var state_94076__$1 = (function (){var statearr_94238 = state_94076;
(statearr_94238[(16)] = inst_94043);

return statearr_94238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94076__$1,(19),inst_94046);
} else {
if((state_val_94077 === (8))){
var inst_94016 = (state_94076[(8)]);
var inst_94020 = cljs.core.ex_data(inst_94016);
var inst_94021 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_94020);
var inst_94022 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_94021,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_94076__$1 = state_94076;
var statearr_94247_94479 = state_94076__$1;
(statearr_94247_94479[(2)] = inst_94022);

(statearr_94247_94479[(1)] = (10));


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
});
return (function() {
var stack$utils$webserial$go_read_as_$_state_machine__33347__auto__ = null;
var stack$utils$webserial$go_read_as_$_state_machine__33347__auto____0 = (function (){
var statearr_94254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_94254[(0)] = stack$utils$webserial$go_read_as_$_state_machine__33347__auto__);

(statearr_94254[(1)] = (1));

return statearr_94254;
});
var stack$utils$webserial$go_read_as_$_state_machine__33347__auto____1 = (function (state_94076){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94076);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94255){var ex__33350__auto__ = e94255;
var statearr_94256_94480 = state_94076;
(statearr_94256_94480[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94076[(4)]))){
var statearr_94257_94481 = state_94076;
(statearr_94257_94481[(1)] = cljs.core.first((state_94076[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94482 = state_94076;
state_94076 = G__94482;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webserial$go_read_as_$_state_machine__33347__auto__ = function(state_94076){
switch(arguments.length){
case 0:
return stack$utils$webserial$go_read_as_$_state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webserial$go_read_as_$_state_machine__33347__auto____1.call(this,state_94076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webserial$go_read_as_$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webserial$go_read_as_$_state_machine__33347__auto____0;
stack$utils$webserial$go_read_as_$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webserial$go_read_as_$_state_machine__33347__auto____1;
return stack$utils$webserial$go_read_as_$_state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94262 = f__33422__auto__();
(statearr_94262[(6)] = c__33421__auto__);

return statearr_94262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
});
stack.utils.webserial.as_byte_readable = (function stack$utils$webserial$as_byte_readable(readable){
return readable;
});
stack.utils.webserial.as_text_readable = (function stack$utils$webserial$as_text_readable(readable){
return readable.pipeThrough((new TextDecoderStream()));
});
stack.utils.webserial.go_read_text = (function stack$utils$webserial$go_read_text(port,handler){
return stack.utils.webserial.go_read_as(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310),stack.utils.webserial.as_text_readable], null));
});
stack.utils.webserial.go_read_bytes = (function stack$utils$webserial$go_read_bytes(port,handler){
return stack.utils.webserial.go_read_as(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310),stack.utils.webserial.as_byte_readable], null));
});
stack.utils.webserial.get_read_channel = (function stack$utils$webserial$get_read_channel(port){
var byte_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var byte_handler = (function (new_bytes){
return cljs.core.async._GT__BANG_(byte_channel,new_bytes);
});
stack.utils.webserial.go_read_bytes(port,byte_handler);

return byte_channel;
});
stack.utils.webserial.write = (function stack$utils$webserial$write(port,command){
var writer = port.writable.getWriter();
var encoder = (new TextEncoder());
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webserial";
var __id = null;
var __level = new cljs.core.Keyword(null,"debug","debug",-1608172596);
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
var signal__42289__auto__ = (new cljs.core.Delay((function (){

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webserial",new cljs.core.Keyword(null,"line","line",212345235),173,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs"], null),__ns,173,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,command,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42281__auto__ = temp__5821__auto__;
return (sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42281__auto__.cljs$core$IFn$_invoke$arity$1(signal__42280__auto__) : sig_middleware__42281__auto__.call(null, signal__42280__auto__));
} else {
return signal__42280__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42289__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42289__auto__) : __run_result.call(null, signal__42289__auto__));
} else {
return true;
}
} else {
return null;
}
})();

writer.write(encoder.encode(command));

return writer.releaseLock();
});

//# sourceMappingURL=stack.utils.webserial.js.map
