goog.provide('cljserial.utils.webbluetooth');
cljserial.utils.webbluetooth.NORDIC_UART_SERVICE = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
cljserial.utils.webbluetooth.SILICON_LABS_SPP = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"4880c12c-fdcb-4077-8920-a450d7f9b907",new cljs.core.Keyword(null,"desc","desc",2093485764),"Silicon Labs SPP Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"SPP Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"fec26ec4-6d71-4442-9f81-55bc21d658d6",new cljs.core.Keyword(null,"desc","desc",2093485764),"SPP Data",new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"fec26ec4-6d71-4442-9f81-55bc21d658d6",new cljs.core.Keyword(null,"desc","desc",2093485764),"SPP Data",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
cljserial.utils.webbluetooth.NEUROMOD_SPS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TBD SERVICE UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Lenire Controller",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TDB RX CHAR UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-without-response","write-without-response",-1295149971),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TDB TX CHAR UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
cljserial.utils.webbluetooth.SUPPORTED_SERVICES = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))], null);
cljserial.utils.webbluetooth.ALL_DEV_OPTIONS = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceptAllDevices","acceptAllDevices",2032724083),true,new cljs.core.Keyword(null,"optionalServices","optionalServices",-1792972093),cljserial.utils.webbluetooth.SUPPORTED_SERVICES], null);
cljserial.utils.webbluetooth.DEFAULT_OPTIONS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"services","services",970478783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))], null)], null)], null)], null);
cljserial.utils.webbluetooth.DEVICE_FILTERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Default (Nordic UART Service)",new cljs.core.Keyword(null,"options","options",99638489),cljserial.utils.webbluetooth.DEFAULT_OPTIONS], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"All devices",new cljs.core.Keyword(null,"options","options",99638489),cljserial.utils.webbluetooth.ALL_DEV_OPTIONS], null)], null);
cljserial.utils.webbluetooth.ServiceUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null));
cljserial.utils.webbluetooth.SerialRxCharUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))));
cljserial.utils.webbluetooth.SerialTxCharUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))));
cljserial.utils.webbluetooth.describe_device_filter = (function cljserial$utils$webbluetooth$describe_device_filter(pf){
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pf)], 0));
});
cljserial.utils.webbluetooth.get_webbluetooth_entrypoint = (function cljserial$utils$webbluetooth$get_webbluetooth_entrypoint(){
return navigator.bluetooth;
});
cljserial.utils.webbluetooth.is_supported_QMARK_ = (function cljserial$utils$webbluetooth$is_supported_QMARK_(){
return (!((cljserial.utils.webbluetooth.get_webbluetooth_entrypoint() == null)));
});
cljserial.utils.webbluetooth.request_device_PLUS_ = (function cljserial$utils$webbluetooth$request_device_PLUS_(filter_options){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","request","device/request",450233017),"Requesting device",new cljs.core.Keyword(null,"line","line",212345235),104], null)),null);
} else {
}

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","request","device/request",450233017),filter_options,new cljs.core.Keyword(null,"line","line",212345235),105], null)),null);
} else {
}

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","request","device/request",450233017),(cljs.core.truth_(cljserial.utils.webbluetooth.is_supported_QMARK_)?"Web Bluetooth supported":"Web Bluetooth supported"),new cljs.core.Keyword(null,"line","line",212345235),106], null)),null);
} else {
}

return cljserial.utils.webbluetooth.get_webbluetooth_entrypoint().requestDevice(cljs.core.clj__GT_js(filter_options));
});
cljserial.utils.webbluetooth.describe_device = (function cljserial$utils$webbluetooth$describe_device(device){
return device.name;
});
cljserial.utils.webbluetooth.await_device = (function cljserial$utils$webbluetooth$await_device(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55679 = arguments.length;
var i__5770__auto___55680 = (0);
while(true){
if((i__5770__auto___55680 < len__5769__auto___55679)){
args__5775__auto__.push((arguments[i__5770__auto___55680]));

var G__55682 = (i__5770__auto___55680 + (1));
i__5770__auto___55680 = G__55682;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic = (function (p__55330){
var map__55331 = p__55330;
var map__55331__$1 = cljs.core.__destructure_map(map__55331);
var filter_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55331__$1,new cljs.core.Keyword(null,"filter-options","filter-options",-80791297),null);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55331__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55331__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55336){
var state_val_55337 = (state_55336[(1)]);
if((state_val_55337 === (1))){
var inst_55332 = promesa.protocols._promise(null);
var inst_55333 = (function (){return (function (___43690__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljserial.utils.webbluetooth.request_device_PLUS_(filter_options)),(function (device){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(device)?(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(device) : on_success.call(null, device)):(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, )))),(function (___43658__auto__){
return promesa.protocols._promise(((goog.debug.LOGGING_ENABLED)?lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","acquired","device/acquired",1048435672),["Got device ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljserial.utils.webbluetooth.describe_device(device))].join(''),new cljs.core.Keyword(null,"line","line",212345235),116], null)),null):null));
}));
}));
});
})();
var inst_55334 = promesa.protocols._mcat(inst_55332,inst_55333);
var state_55336__$1 = state_55336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55336__$1,inst_55334);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webbluetooth$state_machine__33464__auto__ = null;
var cljserial$utils$webbluetooth$state_machine__33464__auto____0 = (function (){
var statearr_55345 = [null,null,null,null,null,null,null];
(statearr_55345[(0)] = cljserial$utils$webbluetooth$state_machine__33464__auto__);

(statearr_55345[(1)] = (1));

return statearr_55345;
});
var cljserial$utils$webbluetooth$state_machine__33464__auto____1 = (function (state_55336){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55336);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55350){var ex__33467__auto__ = e55350;
var statearr_55352_55692 = state_55336;
(statearr_55352_55692[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55336[(4)]))){
var statearr_55354_55693 = state_55336;
(statearr_55354_55693[(1)] = cljs.core.first((state_55336[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55694 = state_55336;
state_55336 = G__55694;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webbluetooth$state_machine__33464__auto__ = function(state_55336){
switch(arguments.length){
case 0:
return cljserial$utils$webbluetooth$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webbluetooth$state_machine__33464__auto____1.call(this,state_55336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webbluetooth$state_machine__33464__auto____0;
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webbluetooth$state_machine__33464__auto____1;
return cljserial$utils$webbluetooth$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55356 = f__33561__auto__();
(statearr_55356[(6)] = c__33560__auto__);

return statearr_55356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webbluetooth.await_device.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webbluetooth.await_device.cljs$lang$applyTo = (function (seq55322){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55322));
}));

cljserial.utils.webbluetooth.device_gatt_connect_PLUS_ = (function cljserial$utils$webbluetooth$device_gatt_connect_PLUS_(device){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","connect-attempt","device/connect-attempt",661431162),cljserial.utils.webbluetooth.describe_device(device),new cljs.core.Keyword(null,"line","line",212345235),119], null)),null);
} else {
}

return device.gatt.connect();
});
cljserial.utils.webbluetooth.await_device_gatt_connect = (function cljserial$utils$webbluetooth$await_device_gatt_connect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55700 = arguments.length;
var i__5770__auto___55701 = (0);
while(true){
if((i__5770__auto___55701 < len__5769__auto___55700)){
args__5775__auto__.push((arguments[i__5770__auto___55701]));

var G__55702 = (i__5770__auto___55701 + (1));
i__5770__auto___55701 = G__55702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__55362){
var map__55363 = p__55362;
var map__55363__$1 = cljs.core.__destructure_map(map__55363);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55363__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55363__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55363__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55372){
var state_val_55373 = (state_55372[(1)]);
if((state_val_55373 === (1))){
var inst_55364 = cljserial.utils.webbluetooth.device_gatt_connect_PLUS_(device);
var inst_55366 = (function (){return (function (gatt){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","connect-success","device/connect-success",-1755002193),gatt,new cljs.core.Keyword(null,"line","line",212345235),125], null)),null);
} else {
}

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(gatt) : on_success.call(null, gatt));
});
})();
var inst_55368 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55364,inst_55366);
var inst_55369 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","connect-failure","device/connect-failure",-242056238),e,new cljs.core.Keyword(null,"line","line",212345235),128], null)),null);
} else {
}

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_55370 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55368,inst_55369);
var state_55372__$1 = state_55372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55372__$1,inst_55370);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webbluetooth$state_machine__33464__auto__ = null;
var cljserial$utils$webbluetooth$state_machine__33464__auto____0 = (function (){
var statearr_55377 = [null,null,null,null,null,null,null];
(statearr_55377[(0)] = cljserial$utils$webbluetooth$state_machine__33464__auto__);

(statearr_55377[(1)] = (1));

return statearr_55377;
});
var cljserial$utils$webbluetooth$state_machine__33464__auto____1 = (function (state_55372){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55372);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55382){var ex__33467__auto__ = e55382;
var statearr_55384_55707 = state_55372;
(statearr_55384_55707[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55372[(4)]))){
var statearr_55386_55708 = state_55372;
(statearr_55386_55708[(1)] = cljs.core.first((state_55372[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55709 = state_55372;
state_55372 = G__55709;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webbluetooth$state_machine__33464__auto__ = function(state_55372){
switch(arguments.length){
case 0:
return cljserial$utils$webbluetooth$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webbluetooth$state_machine__33464__auto____1.call(this,state_55372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webbluetooth$state_machine__33464__auto____0;
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webbluetooth$state_machine__33464__auto____1;
return cljserial$utils$webbluetooth$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55392 = f__33561__auto__();
(statearr_55392[(6)] = c__33560__auto__);

return statearr_55392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webbluetooth.await_device_gatt_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webbluetooth.await_device_gatt_connect.cljs$lang$applyTo = (function (seq55359){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55359));
}));

cljserial.utils.webbluetooth.gatt_get_service_PLUS_ = (function cljserial$utils$webbluetooth$gatt_get_service_PLUS_(gatt){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-service","device/get-service",1004136356),cljs.core.str.cljs$core$IFn$_invoke$arity$1(gatt),new cljs.core.Keyword(null,"line","line",212345235),133], null)),null);
} else {
}

return gatt.getPrimaryService(cljserial.utils.webbluetooth.ServiceUuid);
});
cljserial.utils.webbluetooth.await_gatt_get_service = (function cljserial$utils$webbluetooth$await_gatt_get_service(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55714 = arguments.length;
var i__5770__auto___55716 = (0);
while(true){
if((i__5770__auto___55716 < len__5769__auto___55714)){
args__5775__auto__.push((arguments[i__5770__auto___55716]));

var G__55718 = (i__5770__auto___55716 + (1));
i__5770__auto___55716 = G__55718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic = (function (p__55416){
var map__55417 = p__55416;
var map__55417__$1 = cljs.core.__destructure_map(map__55417);
var gatt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55417__$1,new cljs.core.Keyword(null,"gatt","gatt",1833563448));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55417__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55417__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55428){
var state_val_55429 = (state_55428[(1)]);
if((state_val_55429 === (1))){
var inst_55421 = cljserial.utils.webbluetooth.gatt_get_service_PLUS_(gatt);
var inst_55423 = (function (){return (function (service){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-service","device/get-service",1004136356),service,new cljs.core.Keyword(null,"line","line",212345235),139], null)),null);
} else {
}

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(service) : on_success.call(null, service));
});
})();
var inst_55424 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55421,inst_55423);
var inst_55425 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-service-failure","device/get-service-failure",2045558030),e,new cljs.core.Keyword(null,"line","line",212345235),142], null)),null);
} else {
}

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_55426 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55424,inst_55425);
var state_55428__$1 = state_55428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55428__$1,inst_55426);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webbluetooth$state_machine__33464__auto__ = null;
var cljserial$utils$webbluetooth$state_machine__33464__auto____0 = (function (){
var statearr_55444 = [null,null,null,null,null,null,null];
(statearr_55444[(0)] = cljserial$utils$webbluetooth$state_machine__33464__auto__);

(statearr_55444[(1)] = (1));

return statearr_55444;
});
var cljserial$utils$webbluetooth$state_machine__33464__auto____1 = (function (state_55428){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55428);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55447){var ex__33467__auto__ = e55447;
var statearr_55448_55726 = state_55428;
(statearr_55448_55726[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55428[(4)]))){
var statearr_55451_55728 = state_55428;
(statearr_55451_55728[(1)] = cljs.core.first((state_55428[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55730 = state_55428;
state_55428 = G__55730;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webbluetooth$state_machine__33464__auto__ = function(state_55428){
switch(arguments.length){
case 0:
return cljserial$utils$webbluetooth$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webbluetooth$state_machine__33464__auto____1.call(this,state_55428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webbluetooth$state_machine__33464__auto____0;
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webbluetooth$state_machine__33464__auto____1;
return cljserial$utils$webbluetooth$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55453 = f__33561__auto__();
(statearr_55453[(6)] = c__33560__auto__);

return statearr_55453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webbluetooth.await_gatt_get_service.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webbluetooth.await_gatt_get_service.cljs$lang$applyTo = (function (seq55410){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55410));
}));

cljserial.utils.webbluetooth.service_get_characteristic_PLUS_ = (function cljserial$utils$webbluetooth$service_get_characteristic_PLUS_(service,char_uuid){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-characteristic","device/get-characteristic",711584348),char_uuid,new cljs.core.Keyword(null,"line","line",212345235),147], null)),null);
} else {
}

return service.getCharacteristic(cljs.core.clj__GT_js(char_uuid));
});
cljserial.utils.webbluetooth.await_service_get_tx_characteristic = (function cljserial$utils$webbluetooth$await_service_get_tx_characteristic(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55734 = arguments.length;
var i__5770__auto___55735 = (0);
while(true){
if((i__5770__auto___55735 < len__5769__auto___55734)){
args__5775__auto__.push((arguments[i__5770__auto___55735]));

var G__55736 = (i__5770__auto___55735 + (1));
i__5770__auto___55735 = G__55736;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic = (function (p__55473){
var map__55477 = p__55473;
var map__55477__$1 = cljs.core.__destructure_map(map__55477);
var service = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55477__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55477__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55477__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55484){
var state_val_55485 = (state_55484[(1)]);
if((state_val_55485 === (1))){
var inst_55478 = cljserial.utils.webbluetooth.service_get_characteristic_PLUS_(service,cljserial.utils.webbluetooth.SerialTxCharUuid);
var inst_55479 = (function (){return (function (characteristic){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-characteristic","device/get-characteristic",711584348),characteristic,new cljs.core.Keyword(null,"line","line",212345235),153], null)),null);
} else {
}

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(characteristic) : on_success.call(null, characteristic));
});
})();
var inst_55480 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55478,inst_55479);
var inst_55481 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-characteristic-failure","device/get-characteristic-failure",891160576),e,new cljs.core.Keyword(null,"line","line",212345235),156], null)),null);
} else {
}

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_55482 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55480,inst_55481);
var state_55484__$1 = state_55484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55484__$1,inst_55482);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webbluetooth$state_machine__33464__auto__ = null;
var cljserial$utils$webbluetooth$state_machine__33464__auto____0 = (function (){
var statearr_55497 = [null,null,null,null,null,null,null];
(statearr_55497[(0)] = cljserial$utils$webbluetooth$state_machine__33464__auto__);

(statearr_55497[(1)] = (1));

return statearr_55497;
});
var cljserial$utils$webbluetooth$state_machine__33464__auto____1 = (function (state_55484){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55484);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55498){var ex__33467__auto__ = e55498;
var statearr_55499_55749 = state_55484;
(statearr_55499_55749[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55484[(4)]))){
var statearr_55500_55751 = state_55484;
(statearr_55500_55751[(1)] = cljs.core.first((state_55484[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55753 = state_55484;
state_55484 = G__55753;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webbluetooth$state_machine__33464__auto__ = function(state_55484){
switch(arguments.length){
case 0:
return cljserial$utils$webbluetooth$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webbluetooth$state_machine__33464__auto____1.call(this,state_55484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webbluetooth$state_machine__33464__auto____0;
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webbluetooth$state_machine__33464__auto____1;
return cljserial$utils$webbluetooth$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55504 = f__33561__auto__();
(statearr_55504[(6)] = c__33560__auto__);

return statearr_55504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webbluetooth.await_service_get_tx_characteristic.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webbluetooth.await_service_get_tx_characteristic.cljs$lang$applyTo = (function (seq55461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55461));
}));

cljserial.utils.webbluetooth.await_service_get_rx_characteristic = (function cljserial$utils$webbluetooth$await_service_get_rx_characteristic(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55756 = arguments.length;
var i__5770__auto___55757 = (0);
while(true){
if((i__5770__auto___55757 < len__5769__auto___55756)){
args__5775__auto__.push((arguments[i__5770__auto___55757]));

var G__55758 = (i__5770__auto___55757 + (1));
i__5770__auto___55757 = G__55758;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic = (function (p__55511){
var map__55512 = p__55511;
var map__55512__$1 = cljs.core.__destructure_map(map__55512);
var service = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55512__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55512__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55512__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55522){
var state_val_55523 = (state_55522[(1)]);
if((state_val_55523 === (1))){
var inst_55513 = cljserial.utils.webbluetooth.service_get_characteristic_PLUS_(service,cljserial.utils.webbluetooth.SerialRxCharUuid);
var inst_55514 = (function (){return (function (characteristic){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-characteristic","device/get-characteristic",711584348),characteristic,new cljs.core.Keyword(null,"line","line",212345235),163], null)),null);
} else {
}

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(characteristic) : on_success.call(null, characteristic));
});
})();
var inst_55515 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55513,inst_55514);
var inst_55518 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","get-characteristic-failure","device/get-characteristic-failure",891160576),e,new cljs.core.Keyword(null,"line","line",212345235),166], null)),null);
} else {
}

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_55519 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55515,inst_55518);
var state_55522__$1 = state_55522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55522__$1,inst_55519);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webbluetooth$state_machine__33464__auto__ = null;
var cljserial$utils$webbluetooth$state_machine__33464__auto____0 = (function (){
var statearr_55553 = [null,null,null,null,null,null,null];
(statearr_55553[(0)] = cljserial$utils$webbluetooth$state_machine__33464__auto__);

(statearr_55553[(1)] = (1));

return statearr_55553;
});
var cljserial$utils$webbluetooth$state_machine__33464__auto____1 = (function (state_55522){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55522);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55556){var ex__33467__auto__ = e55556;
var statearr_55557_55768 = state_55522;
(statearr_55557_55768[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55522[(4)]))){
var statearr_55558_55769 = state_55522;
(statearr_55558_55769[(1)] = cljs.core.first((state_55522[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55771 = state_55522;
state_55522 = G__55771;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webbluetooth$state_machine__33464__auto__ = function(state_55522){
switch(arguments.length){
case 0:
return cljserial$utils$webbluetooth$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webbluetooth$state_machine__33464__auto____1.call(this,state_55522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webbluetooth$state_machine__33464__auto____0;
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webbluetooth$state_machine__33464__auto____1;
return cljserial$utils$webbluetooth$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55569 = f__33561__auto__();
(statearr_55569[(6)] = c__33560__auto__);

return statearr_55569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webbluetooth.await_service_get_rx_characteristic.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webbluetooth.await_service_get_rx_characteristic.cljs$lang$applyTo = (function (seq55506){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55506));
}));

cljserial.utils.webbluetooth.service_write_value_without_response = (function cljserial$utils$webbluetooth$service_write_value_without_response(tx_char,value){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","write","device/write",1523574818),value,new cljs.core.Keyword(null,"line","line",212345235),171], null)),null);
} else {
}

return tx_char.writeValueWithoutResponse(value);
});
/**
 * Close and 'forget' the connected device (i.e. relinquish the access permissions).
 *   See https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice
 */
cljserial.utils.webbluetooth.forget_device = (function cljserial$utils$webbluetooth$forget_device(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55775 = arguments.length;
var i__5770__auto___55776 = (0);
while(true){
if((i__5770__auto___55776 < len__5769__auto___55775)){
args__5775__auto__.push((arguments[i__5770__auto___55776]));

var G__55777 = (i__5770__auto___55776 + (1));
i__5770__auto___55776 = G__55777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return cljserial.utils.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(cljserial.utils.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic = (function (p__55626){
var map__55627 = p__55626;
var map__55627__$1 = cljs.core.__destructure_map(map__55627);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55627__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55627__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55627__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33560__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33561__auto__ = (function (){var switch__33463__auto__ = (function (state_55633){
var state_val_55634 = (state_55633[(1)]);
if((state_val_55634 === (1))){
var inst_55628 = device.forget();
var inst_55629 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_55628,on_success);
var inst_55630 = (function (){return (function (e){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.webbluetooth",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("device","forget-failure","device/forget-failure",1044559654),e,new cljs.core.Keyword(null,"line","line",212345235),182], null)),null);
} else {
}

return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(e) : on_failure.call(null, e));
});
})();
var inst_55631 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_55629,inst_55630);
var state_55633__$1 = state_55633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55633__$1,inst_55631);
} else {
return null;
}
});
return (function() {
var cljserial$utils$webbluetooth$state_machine__33464__auto__ = null;
var cljserial$utils$webbluetooth$state_machine__33464__auto____0 = (function (){
var statearr_55645 = [null,null,null,null,null,null,null];
(statearr_55645[(0)] = cljserial$utils$webbluetooth$state_machine__33464__auto__);

(statearr_55645[(1)] = (1));

return statearr_55645;
});
var cljserial$utils$webbluetooth$state_machine__33464__auto____1 = (function (state_55633){
while(true){
var ret_value__33465__auto__ = (function (){try{while(true){
var result__33466__auto__ = switch__33463__auto__(state_55633);
if(cljs.core.keyword_identical_QMARK_(result__33466__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33466__auto__;
}
break;
}
}catch (e55646){var ex__33467__auto__ = e55646;
var statearr_55647_55779 = state_55633;
(statearr_55647_55779[(2)] = ex__33467__auto__);


if(cljs.core.seq((state_55633[(4)]))){
var statearr_55648_55780 = state_55633;
(statearr_55648_55780[(1)] = cljs.core.first((state_55633[(4)])));

} else {
throw ex__33467__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33465__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55781 = state_55633;
state_55633 = G__55781;
continue;
} else {
return ret_value__33465__auto__;
}
break;
}
});
cljserial$utils$webbluetooth$state_machine__33464__auto__ = function(state_55633){
switch(arguments.length){
case 0:
return cljserial$utils$webbluetooth$state_machine__33464__auto____0.call(this);
case 1:
return cljserial$utils$webbluetooth$state_machine__33464__auto____1.call(this,state_55633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$0 = cljserial$utils$webbluetooth$state_machine__33464__auto____0;
cljserial$utils$webbluetooth$state_machine__33464__auto__.cljs$core$IFn$_invoke$arity$1 = cljserial$utils$webbluetooth$state_machine__33464__auto____1;
return cljserial$utils$webbluetooth$state_machine__33464__auto__;
})()
})();
var state__33562__auto__ = (function (){var statearr_55653 = f__33561__auto__();
(statearr_55653[(6)] = c__33560__auto__);

return statearr_55653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33562__auto__);
}));

return c__33560__auto__;
}));

(cljserial.utils.webbluetooth.forget_device.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljserial.utils.webbluetooth.forget_device.cljs$lang$applyTo = (function (seq55606){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55606));
}));


//# sourceMappingURL=cljserial.utils.webbluetooth.js.map
