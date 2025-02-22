goog.provide('stack.utils.webbluetooth');
stack.utils.webbluetooth.NORDIC_UART_SERVICE = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
stack.utils.webbluetooth.SILICON_LABS_SPP = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"4880c12c-fdcb-4077-8920-a450d7f9b907",new cljs.core.Keyword(null,"desc","desc",2093485764),"Silicon Labs SPP Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"SPP Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"fec26ec4-6d71-4442-9f81-55bc21d658d6",new cljs.core.Keyword(null,"desc","desc",2093485764),"SPP Data",new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"fec26ec4-6d71-4442-9f81-55bc21d658d6",new cljs.core.Keyword(null,"desc","desc",2093485764),"SPP Data",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
stack.utils.webbluetooth.NEUROMOD_SPS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TBD SERVICE UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Lenire Controller",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TDB RX CHAR UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-without-response","write-without-response",-1295149971),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TDB TX CHAR UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
stack.utils.webbluetooth.SUPPORTED_SERVICES = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))], null);
stack.utils.webbluetooth.ALL_DEV_OPTIONS = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceptAllDevices","acceptAllDevices",2032724083),true,new cljs.core.Keyword(null,"optionalServices","optionalServices",-1792972093),stack.utils.webbluetooth.SUPPORTED_SERVICES], null);
stack.utils.webbluetooth.DEFAULT_OPTIONS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"services","services",970478783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))], null)], null)], null)], null);
stack.utils.webbluetooth.DEVICE_FILTERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Default (Nordic UART Service)",new cljs.core.Keyword(null,"options","options",99638489),stack.utils.webbluetooth.DEFAULT_OPTIONS], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"All devices",new cljs.core.Keyword(null,"options","options",99638489),stack.utils.webbluetooth.ALL_DEV_OPTIONS], null)], null);
stack.utils.webbluetooth.ServiceUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null));
stack.utils.webbluetooth.SerialRxCharUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))));
stack.utils.webbluetooth.SerialTxCharUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))));
stack.utils.webbluetooth.describe_device_filter = (function stack$utils$webbluetooth$describe_device_filter(pf){
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pf)], 0));
});
stack.utils.webbluetooth.get_webbluetooth_entrypoint = (function stack$utils$webbluetooth$get_webbluetooth_entrypoint(){
return navigator.bluetooth;
});
stack.utils.webbluetooth.is_supported_QMARK_ = (function stack$utils$webbluetooth$is_supported_QMARK_(){
return (!((stack.utils.webbluetooth.get_webbluetooth_entrypoint() == null)));
});
stack.utils.webbluetooth.request_device_PLUS_ = (function stack$utils$webbluetooth$request_device_PLUS_(filter_options){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),104,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,104,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Requesting device",null,null,null,null,null,null,null,null));
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

(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),105,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,105,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,filter_options,null,null,null,null,null,null,null,null));
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

(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),106,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,106,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,(cljs.core.truth_(stack.utils.webbluetooth.is_supported_QMARK_)?"Web Bluetooth supported":"Web Bluetooth supported"),null,null,null,null,null,null,null,null));
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

return stack.utils.webbluetooth.get_webbluetooth_entrypoint().requestDevice(cljs.core.clj__GT_js(filter_options));
});
stack.utils.webbluetooth.describe_device = (function stack$utils$webbluetooth$describe_device(device){
return device.name;
});
stack.utils.webbluetooth.await_device = (function stack$utils$webbluetooth$await_device(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95091 = arguments.length;
var i__5727__auto___95092 = (0);
while(true){
if((i__5727__auto___95092 < len__5726__auto___95091)){
args__5732__auto__.push((arguments[i__5727__auto___95092]));

var G__95095 = (i__5727__auto___95092 + (1));
i__5727__auto___95092 = G__95095;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic = (function (p__94433){
var map__94434 = p__94433;
var map__94434__$1 = cljs.core.__destructure_map(map__94434);
var filter_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94434__$1,new cljs.core.Keyword(null,"filter-options","filter-options",-80791297),null);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94434__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94434__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94440){
var state_val_94441 = (state_94440[(1)]);
if((state_val_94441 === (1))){
var inst_94435 = promesa.protocols._promise(null);
var inst_94437 = (function (){return (function (___47964__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.utils.webbluetooth.request_device_PLUS_(filter_options)),(function (device){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(device)?(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(device) : on_success.call(null, device)):(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, )))),(function (___47932__auto__){
return promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),116,new cljs.core.Keyword(null,"column","column",2078222095),15,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,116,15,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["Got device ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stack.utils.webbluetooth.describe_device(device))].join(''),null,null,null,null,null,null,null,null));
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
var inst_94438 = promesa.protocols._mcat(inst_94435,inst_94437);
var state_94440__$1 = state_94440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94440__$1,inst_94438);
} else {
return null;
}
});
return (function() {
var stack$utils$webbluetooth$state_machine__33347__auto__ = null;
var stack$utils$webbluetooth$state_machine__33347__auto____0 = (function (){
var statearr_94465 = [null,null,null,null,null,null,null];
(statearr_94465[(0)] = stack$utils$webbluetooth$state_machine__33347__auto__);

(statearr_94465[(1)] = (1));

return statearr_94465;
});
var stack$utils$webbluetooth$state_machine__33347__auto____1 = (function (state_94440){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94440);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94469){var ex__33350__auto__ = e94469;
var statearr_94471_95120 = state_94440;
(statearr_94471_95120[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94440[(4)]))){
var statearr_94474_95121 = state_94440;
(statearr_94474_95121[(1)] = cljs.core.first((state_94440[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95125 = state_94440;
state_94440 = G__95125;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webbluetooth$state_machine__33347__auto__ = function(state_94440){
switch(arguments.length){
case 0:
return stack$utils$webbluetooth$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webbluetooth$state_machine__33347__auto____1.call(this,state_94440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webbluetooth$state_machine__33347__auto____0;
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webbluetooth$state_machine__33347__auto____1;
return stack$utils$webbluetooth$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94478 = f__33422__auto__();
(statearr_94478[(6)] = c__33421__auto__);

return statearr_94478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webbluetooth.await_device.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webbluetooth.await_device.cljs$lang$applyTo = (function (seq94422){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94422));
}));

stack.utils.webbluetooth.device_gatt_connect_PLUS_ = (function stack$utils$webbluetooth$device_gatt_connect_PLUS_(device){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),119,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,119,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,stack.utils.webbluetooth.describe_device(device),null,null,null,null,null,null,null,null));
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

return device.gatt.connect();
});
stack.utils.webbluetooth.await_device_gatt_connect = (function stack$utils$webbluetooth$await_device_gatt_connect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95148 = arguments.length;
var i__5727__auto___95149 = (0);
while(true){
if((i__5727__auto___95149 < len__5726__auto___95148)){
args__5732__auto__.push((arguments[i__5727__auto___95149]));

var G__95150 = (i__5727__auto___95149 + (1));
i__5727__auto___95149 = G__95150;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__94490){
var map__94491 = p__94490;
var map__94491__$1 = cljs.core.__destructure_map(map__94491);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94491__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94491__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94491__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94498){
var state_val_94499 = (state_94498[(1)]);
if((state_val_94499 === (1))){
var inst_94492 = stack.utils.webbluetooth.device_gatt_connect_PLUS_(device);
var inst_94493 = (function (){return (function (gatt){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,125,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,gatt,null,null,null,null,null,null,null,null));
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

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(gatt) : on_success.call(null, gatt));
});
})();
var inst_94494 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94492,inst_94493);
var inst_94495 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webbluetooth";
var __id = new cljs.core.Keyword("stack.utils.webbluetooth","gatt-connection-error","stack.utils.webbluetooth/gatt-connection-error",1877655068);
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),128,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,128,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_94496 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94494,inst_94495);
var state_94498__$1 = state_94498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94498__$1,inst_94496);
} else {
return null;
}
});
return (function() {
var stack$utils$webbluetooth$state_machine__33347__auto__ = null;
var stack$utils$webbluetooth$state_machine__33347__auto____0 = (function (){
var statearr_94526 = [null,null,null,null,null,null,null];
(statearr_94526[(0)] = stack$utils$webbluetooth$state_machine__33347__auto__);

(statearr_94526[(1)] = (1));

return statearr_94526;
});
var stack$utils$webbluetooth$state_machine__33347__auto____1 = (function (state_94498){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94498);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94527){var ex__33350__auto__ = e94527;
var statearr_94529_95180 = state_94498;
(statearr_94529_95180[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94498[(4)]))){
var statearr_94531_95181 = state_94498;
(statearr_94531_95181[(1)] = cljs.core.first((state_94498[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95183 = state_94498;
state_94498 = G__95183;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webbluetooth$state_machine__33347__auto__ = function(state_94498){
switch(arguments.length){
case 0:
return stack$utils$webbluetooth$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webbluetooth$state_machine__33347__auto____1.call(this,state_94498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webbluetooth$state_machine__33347__auto____0;
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webbluetooth$state_machine__33347__auto____1;
return stack$utils$webbluetooth$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94533 = f__33422__auto__();
(statearr_94533[(6)] = c__33421__auto__);

return statearr_94533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webbluetooth.await_device_gatt_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webbluetooth.await_device_gatt_connect.cljs$lang$applyTo = (function (seq94489){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94489));
}));

stack.utils.webbluetooth.gatt_get_service_PLUS_ = (function stack$utils$webbluetooth$gatt_get_service_PLUS_(gatt){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),133,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,133,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(gatt),null,null,null,null,null,null,null,null));
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

return gatt.getPrimaryService(stack.utils.webbluetooth.ServiceUuid);
});
stack.utils.webbluetooth.await_gatt_get_service = (function stack$utils$webbluetooth$await_gatt_get_service(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95202 = arguments.length;
var i__5727__auto___95203 = (0);
while(true){
if((i__5727__auto___95203 < len__5726__auto___95202)){
args__5732__auto__.push((arguments[i__5727__auto___95203]));

var G__95205 = (i__5727__auto___95203 + (1));
i__5727__auto___95203 = G__95205;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic = (function (p__94608){
var map__94610 = p__94608;
var map__94610__$1 = cljs.core.__destructure_map(map__94610);
var gatt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94610__$1,new cljs.core.Keyword(null,"gatt","gatt",1833563448));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94610__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94610__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94631){
var state_val_94632 = (state_94631[(1)]);
if((state_val_94632 === (1))){
var inst_94622 = stack.utils.webbluetooth.gatt_get_service_PLUS_(gatt);
var inst_94626 = (function (){return (function (service){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),139,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,139,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,service,null,null,null,null,null,null,null,null));
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

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(service) : on_success.call(null, service));
});
})();
var inst_94627 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94622,inst_94626);
var inst_94628 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webbluetooth";
var __id = new cljs.core.Keyword("stack.utils.webbluetooth","gatt-service-error","stack.utils.webbluetooth/gatt-service-error",-1263624123);
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),142,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,142,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_94629 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94627,inst_94628);
var state_94631__$1 = state_94631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94631__$1,inst_94629);
} else {
return null;
}
});
return (function() {
var stack$utils$webbluetooth$state_machine__33347__auto__ = null;
var stack$utils$webbluetooth$state_machine__33347__auto____0 = (function (){
var statearr_94697 = [null,null,null,null,null,null,null];
(statearr_94697[(0)] = stack$utils$webbluetooth$state_machine__33347__auto__);

(statearr_94697[(1)] = (1));

return statearr_94697;
});
var stack$utils$webbluetooth$state_machine__33347__auto____1 = (function (state_94631){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94631);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94698){var ex__33350__auto__ = e94698;
var statearr_94699_95228 = state_94631;
(statearr_94699_95228[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94631[(4)]))){
var statearr_94700_95229 = state_94631;
(statearr_94700_95229[(1)] = cljs.core.first((state_94631[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95230 = state_94631;
state_94631 = G__95230;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webbluetooth$state_machine__33347__auto__ = function(state_94631){
switch(arguments.length){
case 0:
return stack$utils$webbluetooth$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webbluetooth$state_machine__33347__auto____1.call(this,state_94631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webbluetooth$state_machine__33347__auto____0;
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webbluetooth$state_machine__33347__auto____1;
return stack$utils$webbluetooth$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94720 = f__33422__auto__();
(statearr_94720[(6)] = c__33421__auto__);

return statearr_94720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webbluetooth.await_gatt_get_service.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webbluetooth.await_gatt_get_service.cljs$lang$applyTo = (function (seq94593){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94593));
}));

stack.utils.webbluetooth.service_get_characteristic_PLUS_ = (function stack$utils$webbluetooth$service_get_characteristic_PLUS_(service,char_uuid){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),147,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,147,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,char_uuid,null,null,null,null,null,null,null,null));
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

return service.getCharacteristic(cljs.core.clj__GT_js(char_uuid));
});
stack.utils.webbluetooth.await_service_get_tx_characteristic = (function stack$utils$webbluetooth$await_service_get_tx_characteristic(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95270 = arguments.length;
var i__5727__auto___95271 = (0);
while(true){
if((i__5727__auto___95271 < len__5726__auto___95270)){
args__5732__auto__.push((arguments[i__5727__auto___95271]));

var G__95272 = (i__5727__auto___95271 + (1));
i__5727__auto___95271 = G__95272;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic = (function (p__94762){
var map__94763 = p__94762;
var map__94763__$1 = cljs.core.__destructure_map(map__94763);
var service = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94763__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94763__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94763__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94771){
var state_val_94772 = (state_94771[(1)]);
if((state_val_94772 === (1))){
var inst_94765 = stack.utils.webbluetooth.service_get_characteristic_PLUS_(service,stack.utils.webbluetooth.SerialTxCharUuid);
var inst_94766 = (function (){return (function (characteristic){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),153,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,153,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,characteristic,null,null,null,null,null,null,null,null));
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

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(characteristic) : on_success.call(null, characteristic));
});
})();
var inst_94767 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94765,inst_94766);
var inst_94768 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webbluetooth";
var __id = new cljs.core.Keyword("stack.utils.webbluetooth","tx-characteristic-error","stack.utils.webbluetooth/tx-characteristic-error",-1131837756);
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),156,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,156,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_94769 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94767,inst_94768);
var state_94771__$1 = state_94771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94771__$1,inst_94769);
} else {
return null;
}
});
return (function() {
var stack$utils$webbluetooth$state_machine__33347__auto__ = null;
var stack$utils$webbluetooth$state_machine__33347__auto____0 = (function (){
var statearr_94804 = [null,null,null,null,null,null,null];
(statearr_94804[(0)] = stack$utils$webbluetooth$state_machine__33347__auto__);

(statearr_94804[(1)] = (1));

return statearr_94804;
});
var stack$utils$webbluetooth$state_machine__33347__auto____1 = (function (state_94771){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94771);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94807){var ex__33350__auto__ = e94807;
var statearr_94808_95306 = state_94771;
(statearr_94808_95306[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94771[(4)]))){
var statearr_94811_95307 = state_94771;
(statearr_94811_95307[(1)] = cljs.core.first((state_94771[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95308 = state_94771;
state_94771 = G__95308;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webbluetooth$state_machine__33347__auto__ = function(state_94771){
switch(arguments.length){
case 0:
return stack$utils$webbluetooth$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webbluetooth$state_machine__33347__auto____1.call(this,state_94771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webbluetooth$state_machine__33347__auto____0;
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webbluetooth$state_machine__33347__auto____1;
return stack$utils$webbluetooth$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94814 = f__33422__auto__();
(statearr_94814[(6)] = c__33421__auto__);

return statearr_94814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webbluetooth.await_service_get_tx_characteristic.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webbluetooth.await_service_get_tx_characteristic.cljs$lang$applyTo = (function (seq94751){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94751));
}));

stack.utils.webbluetooth.await_service_get_rx_characteristic = (function stack$utils$webbluetooth$await_service_get_rx_characteristic(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95309 = arguments.length;
var i__5727__auto___95310 = (0);
while(true){
if((i__5727__auto___95310 < len__5726__auto___95309)){
args__5732__auto__.push((arguments[i__5727__auto___95310]));

var G__95312 = (i__5727__auto___95310 + (1));
i__5727__auto___95310 = G__95312;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic = (function (p__94836){
var map__94837 = p__94836;
var map__94837__$1 = cljs.core.__destructure_map(map__94837);
var service = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94837__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94837__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94837__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94844){
var state_val_94845 = (state_94844[(1)]);
if((state_val_94845 === (1))){
var inst_94838 = stack.utils.webbluetooth.service_get_characteristic_PLUS_(service,stack.utils.webbluetooth.SerialRxCharUuid);
var inst_94839 = (function (){return (function (characteristic){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),163,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,163,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,characteristic,null,null,null,null,null,null,null,null));
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

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(characteristic) : on_success.call(null, characteristic));
});
})();
var inst_94840 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94838,inst_94839);
var inst_94841 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webbluetooth";
var __id = new cljs.core.Keyword("stack.utils.webbluetooth","rx-characteristic-error","stack.utils.webbluetooth/rx-characteristic-error",-517117066);
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),166,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,166,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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

(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, ));

return null;
});
})();
var inst_94842 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94840,inst_94841);
var state_94844__$1 = state_94844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94844__$1,inst_94842);
} else {
return null;
}
});
return (function() {
var stack$utils$webbluetooth$state_machine__33347__auto__ = null;
var stack$utils$webbluetooth$state_machine__33347__auto____0 = (function (){
var statearr_94877 = [null,null,null,null,null,null,null];
(statearr_94877[(0)] = stack$utils$webbluetooth$state_machine__33347__auto__);

(statearr_94877[(1)] = (1));

return statearr_94877;
});
var stack$utils$webbluetooth$state_machine__33347__auto____1 = (function (state_94844){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94844);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94879){var ex__33350__auto__ = e94879;
var statearr_94881_95371 = state_94844;
(statearr_94881_95371[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94844[(4)]))){
var statearr_94883_95372 = state_94844;
(statearr_94883_95372[(1)] = cljs.core.first((state_94844[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95373 = state_94844;
state_94844 = G__95373;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webbluetooth$state_machine__33347__auto__ = function(state_94844){
switch(arguments.length){
case 0:
return stack$utils$webbluetooth$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webbluetooth$state_machine__33347__auto____1.call(this,state_94844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webbluetooth$state_machine__33347__auto____0;
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webbluetooth$state_machine__33347__auto____1;
return stack$utils$webbluetooth$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94886 = f__33422__auto__();
(statearr_94886[(6)] = c__33421__auto__);

return statearr_94886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webbluetooth.await_service_get_rx_characteristic.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webbluetooth.await_service_get_rx_characteristic.cljs$lang$applyTo = (function (seq94820){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94820));
}));

stack.utils.webbluetooth.service_write_value_without_response = (function stack$utils$webbluetooth$service_write_value_without_response(tx_char,value){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.webbluetooth";
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),171,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,171,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,value,null,null,null,null,null,null,null,null));
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

return tx_char.writeValueWithoutResponse(value);
});
/**
 * Close and 'forget' the connected device (i.e. relinquish the access permissions).
 *   See https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice
 */
stack.utils.webbluetooth.forget_device = (function stack$utils$webbluetooth$forget_device(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95380 = arguments.length;
var i__5727__auto___95381 = (0);
while(true){
if((i__5727__auto___95381 < len__5726__auto___95380)){
args__5732__auto__.push((arguments[i__5727__auto___95381]));

var G__95383 = (i__5727__auto___95381 + (1));
i__5727__auto___95381 = G__95383;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic = (function (p__94908){
var map__94909 = p__94908;
var map__94909__$1 = cljs.core.__destructure_map(map__94909);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94909__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94909__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94909__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33421__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33422__auto__ = (function (){var switch__33346__auto__ = (function (state_94928){
var state_val_94930 = (state_94928[(1)]);
if((state_val_94930 === (1))){
var inst_94917 = device.forget();
var inst_94918 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94917,on_success);
var inst_94924 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.webbluetooth";
var __id = new cljs.core.Keyword("stack.utils.webbluetooth","forget-device-error","stack.utils.webbluetooth/forget-device-error",1716060183);
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

var signal__42280__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),182,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs"], null),__ns,182,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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
var inst_94925 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94918,inst_94924);
var state_94928__$1 = state_94928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94928__$1,inst_94925);
} else {
return null;
}
});
return (function() {
var stack$utils$webbluetooth$state_machine__33347__auto__ = null;
var stack$utils$webbluetooth$state_machine__33347__auto____0 = (function (){
var statearr_94979 = [null,null,null,null,null,null,null];
(statearr_94979[(0)] = stack$utils$webbluetooth$state_machine__33347__auto__);

(statearr_94979[(1)] = (1));

return statearr_94979;
});
var stack$utils$webbluetooth$state_machine__33347__auto____1 = (function (state_94928){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_94928);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e94984){var ex__33350__auto__ = e94984;
var statearr_94985_95393 = state_94928;
(statearr_94985_95393[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_94928[(4)]))){
var statearr_94986_95394 = state_94928;
(statearr_94986_95394[(1)] = cljs.core.first((state_94928[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95395 = state_94928;
state_94928 = G__95395;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$utils$webbluetooth$state_machine__33347__auto__ = function(state_94928){
switch(arguments.length){
case 0:
return stack$utils$webbluetooth$state_machine__33347__auto____0.call(this);
case 1:
return stack$utils$webbluetooth$state_machine__33347__auto____1.call(this,state_94928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$webbluetooth$state_machine__33347__auto____0;
stack$utils$webbluetooth$state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$webbluetooth$state_machine__33347__auto____1;
return stack$utils$webbluetooth$state_machine__33347__auto__;
})()
})();
var state__33423__auto__ = (function (){var statearr_94993 = f__33422__auto__();
(statearr_94993[(6)] = c__33421__auto__);

return statearr_94993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33423__auto__);
}));

return c__33421__auto__;
}));

(stack.utils.webbluetooth.forget_device.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.webbluetooth.forget_device.cljs$lang$applyTo = (function (seq94900){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94900));
}));


//# sourceMappingURL=stack.utils.webbluetooth.js.map
