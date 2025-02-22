goog.provide('stack.apis.webbluetooth');
stack.apis.webbluetooth.NORDIC_UART_SERVICE = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
stack.apis.webbluetooth.SILICON_LABS_SPP = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"4880c12c-fdcb-4077-8920-a450d7f9b907",new cljs.core.Keyword(null,"desc","desc",2093485764),"Silicon Labs SPP Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"SPP Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"fec26ec4-6d71-4442-9f81-55bc21d658d6",new cljs.core.Keyword(null,"desc","desc",2093485764),"SPP Data",new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"fec26ec4-6d71-4442-9f81-55bc21d658d6",new cljs.core.Keyword(null,"desc","desc",2093485764),"SPP Data",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
stack.apis.webbluetooth.NEUROMOD_SPS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TBD SERVICE UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Lenire Controller",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TDB RX CHAR UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-without-response","write-without-response",-1295149971),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"TDB TX CHAR UUID",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null);
stack.apis.webbluetooth.SUPPORTED_SERVICES = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))], null);
stack.apis.webbluetooth.ALL_DEV_OPTIONS = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"acceptAllDevices","acceptAllDevices",2032724083),true,new cljs.core.Keyword(null,"optionalServices","optionalServices",-1792972093),stack.apis.webbluetooth.SUPPORTED_SERVICES], null);
stack.apis.webbluetooth.DEFAULT_OPTIONS = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"services","services",970478783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))], null)], null)], null)], null);
stack.apis.webbluetooth.DEVICE_FILTERS = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Default (Nordic UART Service)",new cljs.core.Keyword(null,"options","options",99638489),stack.apis.webbluetooth.DEFAULT_OPTIONS], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"All devices",new cljs.core.Keyword(null,"options","options",99638489),stack.apis.webbluetooth.ALL_DEV_OPTIONS], null)], null);
stack.apis.webbluetooth.ServiceUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null));
stack.apis.webbluetooth.SerialRxCharUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))));
stack.apis.webbluetooth.SerialTxCharUuid = new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chars","chars",-1094630317).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400001-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"Nordic UART Service",new cljs.core.Keyword(null,"advt","advt",1771693862),true,new cljs.core.Keyword(null,"name","name",1843675177),"Nordic_UART_Service",new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400003-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"RX Characteristic",new cljs.core.Keyword(null,"write","write",-1857649168),true,new cljs.core.Keyword(null,"write-no-response","write-no-response",1727345113),true], null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),"6e400002-b5a3-f393-e0a9-e50e24dcca9e",new cljs.core.Keyword(null,"desc","desc",2093485764),"TX Characteristic",new cljs.core.Keyword(null,"read","read",1140058661),true,new cljs.core.Keyword(null,"rotify","rotify",-1069408089),true], null)], null)], null))));
stack.apis.webbluetooth.describe_device_filter = (function stack$apis$webbluetooth$describe_device_filter(pf){
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pf)], 0));
});
stack.apis.webbluetooth.get_webbluetooth_entrypoint = (function stack$apis$webbluetooth$get_webbluetooth_entrypoint(){
return navigator.bluetooth;
});
stack.apis.webbluetooth.is_supported_QMARK_ = (function stack$apis$webbluetooth$is_supported_QMARK_(){
return (!((stack.apis.webbluetooth.get_webbluetooth_entrypoint() == null)));
});
stack.apis.webbluetooth.request_device_PLUS_ = (function stack$apis$webbluetooth$request_device_PLUS_(filter_options){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),104,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,104,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"Requesting device",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),105,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,105,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,filter_options,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),106,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,106,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,(cljs.core.truth_(stack.apis.webbluetooth.is_supported_QMARK_)?"Web Bluetooth supported":"Web Bluetooth supported"),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return stack.apis.webbluetooth.get_webbluetooth_entrypoint().requestDevice(cljs.core.clj__GT_js(filter_options));
});
stack.apis.webbluetooth.describe_device = (function stack$apis$webbluetooth$describe_device(device){
return device.name;
});
stack.apis.webbluetooth.await_device = (function stack$apis$webbluetooth$await_device(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97680 = arguments.length;
var i__5727__auto___97681 = (0);
while(true){
if((i__5727__auto___97681 < len__5726__auto___97680)){
args__5732__auto__.push((arguments[i__5727__auto___97681]));

var G__97682 = (i__5727__auto___97681 + (1));
i__5727__auto___97681 = G__97682;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webbluetooth.await_device.cljs$core$IFn$_invoke$arity$variadic = (function (p__96678){
var map__96679 = p__96678;
var map__96679__$1 = cljs.core.__destructure_map(map__96679);
var filter_options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96679__$1,new cljs.core.Keyword(null,"filter-options","filter-options",-80791297),null);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96679__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96679__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_96685){
var state_val_96687 = (state_96685[(1)]);
if((state_val_96687 === (1))){
var inst_96681 = promesa.protocols._promise(null);
var inst_96682 = (function (){return (function (___91412__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.webbluetooth.request_device_PLUS_(filter_options)),(function (device){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(device)?(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(device) : on_success.call(null, device)):(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, )))),(function (___91346__auto__){
return promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),116,new cljs.core.Keyword(null,"column","column",2078222095),15,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,116,15,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["Got device ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stack.apis.webbluetooth.describe_device(device))].join(''),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_96683 = promesa.protocols._mcat(inst_96681,inst_96682);
var state_96685__$1 = state_96685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96685__$1,inst_96683);
} else {
return null;
}
});
return (function() {
var stack$apis$webbluetooth$state_machine__33324__auto__ = null;
var stack$apis$webbluetooth$state_machine__33324__auto____0 = (function (){
var statearr_96720 = [null,null,null,null,null,null,null];
(statearr_96720[(0)] = stack$apis$webbluetooth$state_machine__33324__auto__);

(statearr_96720[(1)] = (1));

return statearr_96720;
});
var stack$apis$webbluetooth$state_machine__33324__auto____1 = (function (state_96685){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_96685);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e96723){var ex__33327__auto__ = e96723;
var statearr_96724_97693 = state_96685;
(statearr_96724_97693[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_96685[(4)]))){
var statearr_96725_97695 = state_96685;
(statearr_96725_97695[(1)] = cljs.core.first((state_96685[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97696 = state_96685;
state_96685 = G__97696;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webbluetooth$state_machine__33324__auto__ = function(state_96685){
switch(arguments.length){
case 0:
return stack$apis$webbluetooth$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webbluetooth$state_machine__33324__auto____1.call(this,state_96685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webbluetooth$state_machine__33324__auto____0;
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webbluetooth$state_machine__33324__auto____1;
return stack$apis$webbluetooth$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_96731 = f__33449__auto__();
(statearr_96731[(6)] = c__33448__auto__);

return statearr_96731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webbluetooth.await_device.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webbluetooth.await_device.cljs$lang$applyTo = (function (seq96677){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96677));
}));

stack.apis.webbluetooth.device_gatt_connect_PLUS_ = (function stack$apis$webbluetooth$device_gatt_connect_PLUS_(device){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),119,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,119,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,stack.apis.webbluetooth.describe_device(device),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return device.gatt.connect();
});
stack.apis.webbluetooth.await_device_gatt_connect = (function stack$apis$webbluetooth$await_device_gatt_connect(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97708 = arguments.length;
var i__5727__auto___97713 = (0);
while(true){
if((i__5727__auto___97713 < len__5726__auto___97708)){
args__5732__auto__.push((arguments[i__5727__auto___97713]));

var G__97714 = (i__5727__auto___97713 + (1));
i__5727__auto___97713 = G__97714;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webbluetooth.await_device_gatt_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__96826){
var map__96831 = p__96826;
var map__96831__$1 = cljs.core.__destructure_map(map__96831);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96831__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96831__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96831__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_96850){
var state_val_96851 = (state_96850[(1)]);
if((state_val_96851 === (1))){
var inst_96836 = stack.apis.webbluetooth.device_gatt_connect_PLUS_(device);
var inst_96837 = (function (){return (function (gatt){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),125,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,125,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,gatt,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_96838 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_96836,inst_96837);
var inst_96840 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webbluetooth";
var __id = new cljs.core.Keyword("stack.apis.webbluetooth","gatt-connection-error","stack.apis.webbluetooth/gatt-connection-error",-1280548560);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),128,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,128,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_96845 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_96838,inst_96840);
var state_96850__$1 = state_96850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96850__$1,inst_96845);
} else {
return null;
}
});
return (function() {
var stack$apis$webbluetooth$state_machine__33324__auto__ = null;
var stack$apis$webbluetooth$state_machine__33324__auto____0 = (function (){
var statearr_96897 = [null,null,null,null,null,null,null];
(statearr_96897[(0)] = stack$apis$webbluetooth$state_machine__33324__auto__);

(statearr_96897[(1)] = (1));

return statearr_96897;
});
var stack$apis$webbluetooth$state_machine__33324__auto____1 = (function (state_96850){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_96850);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e96909){var ex__33327__auto__ = e96909;
var statearr_96910_97776 = state_96850;
(statearr_96910_97776[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_96850[(4)]))){
var statearr_96911_97781 = state_96850;
(statearr_96911_97781[(1)] = cljs.core.first((state_96850[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97783 = state_96850;
state_96850 = G__97783;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webbluetooth$state_machine__33324__auto__ = function(state_96850){
switch(arguments.length){
case 0:
return stack$apis$webbluetooth$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webbluetooth$state_machine__33324__auto____1.call(this,state_96850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webbluetooth$state_machine__33324__auto____0;
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webbluetooth$state_machine__33324__auto____1;
return stack$apis$webbluetooth$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_96916 = f__33449__auto__();
(statearr_96916[(6)] = c__33448__auto__);

return statearr_96916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webbluetooth.await_device_gatt_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webbluetooth.await_device_gatt_connect.cljs$lang$applyTo = (function (seq96815){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96815));
}));

stack.apis.webbluetooth.gatt_get_service_PLUS_ = (function stack$apis$webbluetooth$gatt_get_service_PLUS_(gatt){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),133,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,133,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(gatt),null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return gatt.getPrimaryService(stack.apis.webbluetooth.ServiceUuid);
});
stack.apis.webbluetooth.await_gatt_get_service = (function stack$apis$webbluetooth$await_gatt_get_service(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97799 = arguments.length;
var i__5727__auto___97800 = (0);
while(true){
if((i__5727__auto___97800 < len__5726__auto___97799)){
args__5732__auto__.push((arguments[i__5727__auto___97800]));

var G__97803 = (i__5727__auto___97800 + (1));
i__5727__auto___97800 = G__97803;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webbluetooth.await_gatt_get_service.cljs$core$IFn$_invoke$arity$variadic = (function (p__96954){
var map__96955 = p__96954;
var map__96955__$1 = cljs.core.__destructure_map(map__96955);
var gatt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96955__$1,new cljs.core.Keyword(null,"gatt","gatt",1833563448));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96955__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96955__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_96969){
var state_val_96970 = (state_96969[(1)]);
if((state_val_96970 === (1))){
var inst_96957 = stack.apis.webbluetooth.gatt_get_service_PLUS_(gatt);
var inst_96960 = (function (){return (function (service){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),139,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,139,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,service,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_96961 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_96957,inst_96960);
var inst_96964 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webbluetooth";
var __id = new cljs.core.Keyword("stack.apis.webbluetooth","gatt-service-error","stack.apis.webbluetooth/gatt-service-error",1891959145);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),142,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,142,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_96965 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_96961,inst_96964);
var state_96969__$1 = state_96969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96969__$1,inst_96965);
} else {
return null;
}
});
return (function() {
var stack$apis$webbluetooth$state_machine__33324__auto__ = null;
var stack$apis$webbluetooth$state_machine__33324__auto____0 = (function (){
var statearr_97052 = [null,null,null,null,null,null,null];
(statearr_97052[(0)] = stack$apis$webbluetooth$state_machine__33324__auto__);

(statearr_97052[(1)] = (1));

return statearr_97052;
});
var stack$apis$webbluetooth$state_machine__33324__auto____1 = (function (state_96969){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_96969);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97063){var ex__33327__auto__ = e97063;
var statearr_97065_97873 = state_96969;
(statearr_97065_97873[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_96969[(4)]))){
var statearr_97066_97876 = state_96969;
(statearr_97066_97876[(1)] = cljs.core.first((state_96969[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97882 = state_96969;
state_96969 = G__97882;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webbluetooth$state_machine__33324__auto__ = function(state_96969){
switch(arguments.length){
case 0:
return stack$apis$webbluetooth$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webbluetooth$state_machine__33324__auto____1.call(this,state_96969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webbluetooth$state_machine__33324__auto____0;
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webbluetooth$state_machine__33324__auto____1;
return stack$apis$webbluetooth$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97073 = f__33449__auto__();
(statearr_97073[(6)] = c__33448__auto__);

return statearr_97073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webbluetooth.await_gatt_get_service.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webbluetooth.await_gatt_get_service.cljs$lang$applyTo = (function (seq96938){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq96938));
}));

stack.apis.webbluetooth.service_get_characteristic_PLUS_ = (function stack$apis$webbluetooth$service_get_characteristic_PLUS_(service,char_uuid){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),147,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,147,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,char_uuid,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return service.getCharacteristic(cljs.core.clj__GT_js(char_uuid));
});
stack.apis.webbluetooth.await_service_get_tx_characteristic = (function stack$apis$webbluetooth$await_service_get_tx_characteristic(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97913 = arguments.length;
var i__5727__auto___97914 = (0);
while(true){
if((i__5727__auto___97914 < len__5726__auto___97913)){
args__5732__auto__.push((arguments[i__5727__auto___97914]));

var G__97917 = (i__5727__auto___97914 + (1));
i__5727__auto___97914 = G__97917;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webbluetooth.await_service_get_tx_characteristic.cljs$core$IFn$_invoke$arity$variadic = (function (p__97135){
var map__97137 = p__97135;
var map__97137__$1 = cljs.core.__destructure_map(map__97137);
var service = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97137__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97137__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97137__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97162){
var state_val_97164 = (state_97162[(1)]);
if((state_val_97164 === (1))){
var inst_97150 = stack.apis.webbluetooth.service_get_characteristic_PLUS_(service,stack.apis.webbluetooth.SerialTxCharUuid);
var inst_97153 = (function (){return (function (characteristic){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),153,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,153,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,characteristic,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_97154 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_97150,inst_97153);
var inst_97159 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webbluetooth";
var __id = new cljs.core.Keyword("stack.apis.webbluetooth","tx-characteristic-error","stack.apis.webbluetooth/tx-characteristic-error",-204724240);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),156,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,156,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_97160 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_97154,inst_97159);
var state_97162__$1 = state_97162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97162__$1,inst_97160);
} else {
return null;
}
});
return (function() {
var stack$apis$webbluetooth$state_machine__33324__auto__ = null;
var stack$apis$webbluetooth$state_machine__33324__auto____0 = (function (){
var statearr_97311 = [null,null,null,null,null,null,null];
(statearr_97311[(0)] = stack$apis$webbluetooth$state_machine__33324__auto__);

(statearr_97311[(1)] = (1));

return statearr_97311;
});
var stack$apis$webbluetooth$state_machine__33324__auto____1 = (function (state_97162){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97162);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97312){var ex__33327__auto__ = e97312;
var statearr_97313_97974 = state_97162;
(statearr_97313_97974[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97162[(4)]))){
var statearr_97316_97978 = state_97162;
(statearr_97316_97978[(1)] = cljs.core.first((state_97162[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97980 = state_97162;
state_97162 = G__97980;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webbluetooth$state_machine__33324__auto__ = function(state_97162){
switch(arguments.length){
case 0:
return stack$apis$webbluetooth$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webbluetooth$state_machine__33324__auto____1.call(this,state_97162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webbluetooth$state_machine__33324__auto____0;
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webbluetooth$state_machine__33324__auto____1;
return stack$apis$webbluetooth$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97320 = f__33449__auto__();
(statearr_97320[(6)] = c__33448__auto__);

return statearr_97320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webbluetooth.await_service_get_tx_characteristic.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webbluetooth.await_service_get_tx_characteristic.cljs$lang$applyTo = (function (seq97120){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97120));
}));

stack.apis.webbluetooth.await_service_get_rx_characteristic = (function stack$apis$webbluetooth$await_service_get_rx_characteristic(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97997 = arguments.length;
var i__5727__auto___97998 = (0);
while(true){
if((i__5727__auto___97998 < len__5726__auto___97997)){
args__5732__auto__.push((arguments[i__5727__auto___97998]));

var G__98000 = (i__5727__auto___97998 + (1));
i__5727__auto___97998 = G__98000;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webbluetooth.await_service_get_rx_characteristic.cljs$core$IFn$_invoke$arity$variadic = (function (p__97339){
var map__97341 = p__97339;
var map__97341__$1 = cljs.core.__destructure_map(map__97341);
var service = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97341__$1,new cljs.core.Keyword(null,"service","service",-1963054559));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97341__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97341__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97351){
var state_val_97353 = (state_97351[(1)]);
if((state_val_97353 === (1))){
var inst_97345 = stack.apis.webbluetooth.service_get_characteristic_PLUS_(service,stack.apis.webbluetooth.SerialRxCharUuid);
var inst_97346 = (function (){return (function (characteristic){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),163,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,163,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,characteristic,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_97347 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_97345,inst_97346);
var inst_97348 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webbluetooth";
var __id = new cljs.core.Keyword("stack.apis.webbluetooth","rx-characteristic-error","stack.apis.webbluetooth/rx-characteristic-error",608356442);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),166,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,166,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_97349 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_97347,inst_97348);
var state_97351__$1 = state_97351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97351__$1,inst_97349);
} else {
return null;
}
});
return (function() {
var stack$apis$webbluetooth$state_machine__33324__auto__ = null;
var stack$apis$webbluetooth$state_machine__33324__auto____0 = (function (){
var statearr_97431 = [null,null,null,null,null,null,null];
(statearr_97431[(0)] = stack$apis$webbluetooth$state_machine__33324__auto__);

(statearr_97431[(1)] = (1));

return statearr_97431;
});
var stack$apis$webbluetooth$state_machine__33324__auto____1 = (function (state_97351){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97351);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97435){var ex__33327__auto__ = e97435;
var statearr_97436_98058 = state_97351;
(statearr_97436_98058[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97351[(4)]))){
var statearr_97438_98064 = state_97351;
(statearr_97438_98064[(1)] = cljs.core.first((state_97351[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98070 = state_97351;
state_97351 = G__98070;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webbluetooth$state_machine__33324__auto__ = function(state_97351){
switch(arguments.length){
case 0:
return stack$apis$webbluetooth$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webbluetooth$state_machine__33324__auto____1.call(this,state_97351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webbluetooth$state_machine__33324__auto____0;
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webbluetooth$state_machine__33324__auto____1;
return stack$apis$webbluetooth$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97446 = f__33449__auto__();
(statearr_97446[(6)] = c__33448__auto__);

return statearr_97446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webbluetooth.await_service_get_rx_characteristic.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webbluetooth.await_service_get_rx_characteristic.cljs$lang$applyTo = (function (seq97328){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97328));
}));

stack.apis.webbluetooth.service_write_value_without_response = (function stack$apis$webbluetooth$service_write_value_without_response(tx_char,value){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webbluetooth";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),171,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,171,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,value,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
stack.apis.webbluetooth.forget_device = (function stack$apis$webbluetooth$forget_device(var_args){
var args__5732__auto__ = [];
var len__5726__auto___98097 = arguments.length;
var i__5727__auto___98098 = (0);
while(true){
if((i__5727__auto___98098 < len__5726__auto___98097)){
args__5732__auto__.push((arguments[i__5727__auto___98098]));

var G__98099 = (i__5727__auto___98098 + (1));
i__5727__auto___98098 = G__98099;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webbluetooth.forget_device.cljs$core$IFn$_invoke$arity$variadic = (function (p__97495){
var map__97496 = p__97495;
var map__97496__$1 = cljs.core.__destructure_map(map__97496);
var device = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97496__$1,new cljs.core.Keyword(null,"device","device",1817743352));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97496__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97496__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97510){
var state_val_97511 = (state_97510[(1)]);
if((state_val_97511 === (1))){
var inst_97503 = device.forget();
var inst_97504 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_97503,on_success);
var inst_97507 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webbluetooth";
var __id = new cljs.core.Keyword("stack.apis.webbluetooth","forget-device-error","stack.apis.webbluetooth/forget-device-error",1435673187);
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webbluetooth",new cljs.core.Keyword(null,"line","line",212345235),182,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs"], null),__ns,182,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webbluetooth.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
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
var inst_97508 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_97504,inst_97507);
var state_97510__$1 = state_97510;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97510__$1,inst_97508);
} else {
return null;
}
});
return (function() {
var stack$apis$webbluetooth$state_machine__33324__auto__ = null;
var stack$apis$webbluetooth$state_machine__33324__auto____0 = (function (){
var statearr_97565 = [null,null,null,null,null,null,null];
(statearr_97565[(0)] = stack$apis$webbluetooth$state_machine__33324__auto__);

(statearr_97565[(1)] = (1));

return statearr_97565;
});
var stack$apis$webbluetooth$state_machine__33324__auto____1 = (function (state_97510){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97510);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97574){var ex__33327__auto__ = e97574;
var statearr_97575_98117 = state_97510;
(statearr_97575_98117[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97510[(4)]))){
var statearr_97580_98118 = state_97510;
(statearr_97580_98118[(1)] = cljs.core.first((state_97510[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98119 = state_97510;
state_97510 = G__98119;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webbluetooth$state_machine__33324__auto__ = function(state_97510){
switch(arguments.length){
case 0:
return stack$apis$webbluetooth$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webbluetooth$state_machine__33324__auto____1.call(this,state_97510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webbluetooth$state_machine__33324__auto____0;
stack$apis$webbluetooth$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webbluetooth$state_machine__33324__auto____1;
return stack$apis$webbluetooth$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97591 = f__33449__auto__();
(statearr_97591[(6)] = c__33448__auto__);

return statearr_97591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webbluetooth.forget_device.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webbluetooth.forget_device.cljs$lang$applyTo = (function (seq97484){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97484));
}));


//# sourceMappingURL=stack.apis.webbluetooth.js.map
