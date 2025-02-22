goog.provide('stack.apis.webserial');
stack.apis.webserial.get_webserial_entrypoint = (function stack$apis$webserial$get_webserial_entrypoint(){
return navigator.serial;
});
stack.apis.webserial.is_supported_QMARK_ = (function stack$apis$webserial$is_supported_QMARK_(){
return (!((stack.apis.webserial.get_webserial_entrypoint() == null)));
});
stack.apis.webserial.request_port_PLUS_ = (function stack$apis$webserial$request_port_PLUS_(vendor_id){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,16,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vendor-filter","vendor-filter",1677320651),vendor_id], null),null,"Requesting port",null,null,null,null,null,null,null,null));
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

var filters = (cljs.core.truth_((function (){var and__5000__auto__ = vendor_id;
if(cljs.core.truth_(and__5000__auto__)){
return (vendor_id > (0));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),vendor_id], null)], null):cljs.core.PersistentVector.EMPTY);
return stack.apis.webserial.get_webserial_entrypoint().requestPort(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),filters], null)));
});
stack.apis.webserial.describe_port = (function stack$apis$webserial$describe_port(port){
var port_info = port.getInfo();
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("%s::%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([port_info.usbVendorId,port_info.usbProductId], 0));
});
stack.apis.webserial.await_port = (function stack$apis$webserial$await_port(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95275 = arguments.length;
var i__5727__auto___95276 = (0);
while(true){
if((i__5727__auto___95276 < len__5726__auto___95275)){
args__5732__auto__.push((arguments[i__5727__auto___95276]));

var G__95277 = (i__5727__auto___95276 + (1));
i__5727__auto___95276 = G__95277;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.apis.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.apis.webserial.await_port.cljs$core$IFn$_invoke$arity$variadic = (function (p__94776){
var map__94780 = p__94776;
var map__94780__$1 = cljs.core.__destructure_map(map__94780);
var vendor_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94780__$1,new cljs.core.Keyword(null,"vendor-id","vendor-id",904935999),null);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94780__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94780__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_94785){
var state_val_94786 = (state_94785[(1)]);
if((state_val_94786 === (1))){
var inst_94781 = promesa.protocols._promise(null);
var inst_94782 = (function (){return (function (___91412__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(stack.apis.webserial.request_port_PLUS_(vendor_id)),(function (port){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(port)?(on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(port) : on_success.call(null, port)):(on_failure.cljs$core$IFn$_invoke$arity$0 ? on_failure.cljs$core$IFn$_invoke$arity$0() : on_failure.call(null, )))),(function (___91346__auto__){
return promesa.protocols._promise((function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),30,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,30,14,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,["Got port ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stack.apis.webserial.describe_port(port))].join(''),null,null,null,null,null,null,null,null));
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
var inst_94783 = promesa.protocols._mcat(inst_94781,inst_94782);
var state_94785__$1 = state_94785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94785__$1,inst_94783);
} else {
return null;
}
});
return (function() {
var stack$apis$webserial$state_machine__33324__auto__ = null;
var stack$apis$webserial$state_machine__33324__auto____0 = (function (){
var statearr_94808 = [null,null,null,null,null,null,null];
(statearr_94808[(0)] = stack$apis$webserial$state_machine__33324__auto__);

(statearr_94808[(1)] = (1));

return statearr_94808;
});
var stack$apis$webserial$state_machine__33324__auto____1 = (function (state_94785){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_94785);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e94811){var ex__33327__auto__ = e94811;
var statearr_94815_95280 = state_94785;
(statearr_94815_95280[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_94785[(4)]))){
var statearr_94816_95285 = state_94785;
(statearr_94816_95285[(1)] = cljs.core.first((state_94785[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95286 = state_94785;
state_94785 = G__95286;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webserial$state_machine__33324__auto__ = function(state_94785){
switch(arguments.length){
case 0:
return stack$apis$webserial$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webserial$state_machine__33324__auto____1.call(this,state_94785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webserial$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webserial$state_machine__33324__auto____0;
stack$apis$webserial$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webserial$state_machine__33324__auto____1;
return stack$apis$webserial$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_94818 = f__33449__auto__();
(statearr_94818[(6)] = c__33448__auto__);

return statearr_94818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webserial.await_port.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.apis.webserial.await_port.cljs$lang$applyTo = (function (seq94770){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq94770));
}));

stack.apis.webserial.open_port_PLUS_ = (function stack$apis$webserial$open_port_PLUS_(port){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,33,3,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,stack.apis.webserial.describe_port(port),null,null,null,null,null,null,null,null));
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

try{return port.open(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),(115200),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),"hardware",new cljs.core.Keyword(null,"bufferSize","bufferSize",1012463826),(4096)], null)));
}catch (e94848){if((e94848 instanceof Error)){
var e = e94848;
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webserial";
var __id = new cljs.core.Keyword("stack.apis.webserial","port-open-failure","stack.apis.webserial/port-open-failure",-1012770428);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),40,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,40,7,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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

return null;
} else {
throw e94848;

}
}});
stack.apis.webserial.open_port = (function stack$apis$webserial$open_port(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95293 = arguments.length;
var i__5727__auto___95294 = (0);
while(true){
if((i__5727__auto___95294 < len__5726__auto___95293)){
args__5732__auto__.push((arguments[i__5727__auto___95294]));

var G__95295 = (i__5727__auto___95294 + (1));
i__5727__auto___95294 = G__95295;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.apis.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.apis.webserial.open_port.cljs$core$IFn$_invoke$arity$variadic = (function (port,p__94907){
var map__94908 = p__94907;
var map__94908__$1 = cljs.core.__destructure_map(map__94908);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__94908__$1,new cljs.core.Keyword(null,"options","options",99638489),stack.schema.webserial.DEFAULTS);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94908__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94908__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_94931){
var state_val_94932 = (state_94931[(1)]);
if((state_val_94932 === (1))){
var inst_94919 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webserial";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),46,new cljs.core.Keyword(null,"column","column",2078222095),13,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,46,13,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,options,null,"Opening port...",null,null,null,null,null,null,null,null));
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
});
})();
var inst_94920 = inst_94919();
var inst_94921 = stack.apis.webserial.open_port_PLUS_(port);
var inst_94926 = (function (){return (function (){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webserial";
var __id = new cljs.core.Keyword("stack.apis.webserial","port-opened","stack.apis.webserial/port-opened",-1279141609);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),49,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,49,26,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,port,null,null,null,null,null,null,null,null,null,null));
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

return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(port) : on_success.call(null, port));
});
})();
var inst_94927 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94921,inst_94926);
var inst_94928 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webserial";
var __id = new cljs.core.Keyword("stack.apis.webserial","port-open-failure","stack.apis.webserial/port-open-failure",-1012770428);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,52,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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

(on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(port) : on_failure.call(null, port));

return null;
});
})();
var inst_94929 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94927,inst_94928);
var state_94931__$1 = (function (){var statearr_94973 = state_94931;
(statearr_94973[(7)] = inst_94920);

return statearr_94973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_94931__$1,inst_94929);
} else {
return null;
}
});
return (function() {
var stack$apis$webserial$state_machine__33324__auto__ = null;
var stack$apis$webserial$state_machine__33324__auto____0 = (function (){
var statearr_94975 = [null,null,null,null,null,null,null,null];
(statearr_94975[(0)] = stack$apis$webserial$state_machine__33324__auto__);

(statearr_94975[(1)] = (1));

return statearr_94975;
});
var stack$apis$webserial$state_machine__33324__auto____1 = (function (state_94931){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_94931);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e94977){var ex__33327__auto__ = e94977;
var statearr_94978_95311 = state_94931;
(statearr_94978_95311[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_94931[(4)]))){
var statearr_94979_95313 = state_94931;
(statearr_94979_95313[(1)] = cljs.core.first((state_94931[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95314 = state_94931;
state_94931 = G__95314;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webserial$state_machine__33324__auto__ = function(state_94931){
switch(arguments.length){
case 0:
return stack$apis$webserial$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webserial$state_machine__33324__auto____1.call(this,state_94931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webserial$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webserial$state_machine__33324__auto____0;
stack$apis$webserial$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webserial$state_machine__33324__auto____1;
return stack$apis$webserial$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_94984 = f__33449__auto__();
(statearr_94984[(6)] = c__33448__auto__);

return statearr_94984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webserial.open_port.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.apis.webserial.open_port.cljs$lang$applyTo = (function (seq94882){
var G__94883 = cljs.core.first(seq94882);
var seq94882__$1 = cljs.core.next(seq94882);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94883,seq94882__$1);
}));

/**
 * Close and 'forget' the port (i.e. relinquish the access permissions).
 *   See https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/forget
 */
stack.apis.webserial.forget_port = (function stack$apis$webserial$forget_port(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95316 = arguments.length;
var i__5727__auto___95317 = (0);
while(true){
if((i__5727__auto___95317 < len__5726__auto___95316)){
args__5732__auto__.push((arguments[i__5727__auto___95317]));

var G__95318 = (i__5727__auto___95317 + (1));
i__5727__auto___95317 = G__95318;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.apis.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.apis.webserial.forget_port.cljs$core$IFn$_invoke$arity$variadic = (function (port,p__94990){
var map__94991 = p__94990;
var map__94991__$1 = cljs.core.__destructure_map(map__94991);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94991__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94991__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_94997){
var state_val_94998 = (state_94997[(1)]);
if((state_val_94998 === (1))){
var inst_94992 = port.forget();
var inst_94993 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_94992,on_success);
var inst_94994 = (function (){return (function (e){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webserial";
var __id = new cljs.core.Keyword("stack.apis.webserial","port-forget-failure","stack.apis.webserial/port-forget-failure",920966957);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,66,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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
var inst_94995 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_94993,inst_94994);
var state_94997__$1 = state_94997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94997__$1,inst_94995);
} else {
return null;
}
});
return (function() {
var stack$apis$webserial$state_machine__33324__auto__ = null;
var stack$apis$webserial$state_machine__33324__auto____0 = (function (){
var statearr_95005 = [null,null,null,null,null,null,null];
(statearr_95005[(0)] = stack$apis$webserial$state_machine__33324__auto__);

(statearr_95005[(1)] = (1));

return statearr_95005;
});
var stack$apis$webserial$state_machine__33324__auto____1 = (function (state_94997){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_94997);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e95006){var ex__33327__auto__ = e95006;
var statearr_95008_95332 = state_94997;
(statearr_95008_95332[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_94997[(4)]))){
var statearr_95010_95333 = state_94997;
(statearr_95010_95333[(1)] = cljs.core.first((state_94997[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95334 = state_94997;
state_94997 = G__95334;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webserial$state_machine__33324__auto__ = function(state_94997){
switch(arguments.length){
case 0:
return stack$apis$webserial$state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webserial$state_machine__33324__auto____1.call(this,state_94997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webserial$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webserial$state_machine__33324__auto____0;
stack$apis$webserial$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webserial$state_machine__33324__auto____1;
return stack$apis$webserial$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_95017 = f__33449__auto__();
(statearr_95017[(6)] = c__33448__auto__);

return statearr_95017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.apis.webserial.forget_port.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.apis.webserial.forget_port.cljs$lang$applyTo = (function (seq94986){
var G__94987 = cljs.core.first(seq94986);
var seq94986__$1 = cljs.core.next(seq94986);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94987,seq94986__$1);
}));

stack.apis.webserial.go_read_as = (function stack$apis$webserial$go_read_as(p__95021){
var map__95023 = p__95021;
var map__95023__$1 = cljs.core.__destructure_map(map__95023);
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95023__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var byte_stream_transformer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95023__$1,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95023__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_95113){
var state_val_95114 = (state_95113[(1)]);
if((state_val_95114 === (7))){
var inst_95052 = (state_95113[(7)]);
var inst_95053 = (state_95113[(8)]);
var inst_95052__$1 = (state_95113[(2)]);
var inst_95053__$1 = (inst_95052__$1 instanceof cljs.core.ExceptionInfo);
var state_95113__$1 = (function (){var statearr_95119 = state_95113;
(statearr_95119[(7)] = inst_95052__$1);

(statearr_95119[(8)] = inst_95053__$1);

return statearr_95119;
})();
if(cljs.core.truth_(inst_95053__$1)){
var statearr_95120_95340 = state_95113__$1;
(statearr_95120_95340[(1)] = (8));

} else {
var statearr_95121_95341 = state_95113__$1;
(statearr_95121_95341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (20))){
var inst_95089 = (state_95113[(9)]);
var inst_95095 = cljs.core.ex_data(inst_95089);
var inst_95096 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_95095);
var inst_95097 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_95096,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_95113__$1 = state_95113;
var statearr_95129_95342 = state_95113__$1;
(statearr_95129_95342[(2)] = inst_95097);

(statearr_95129_95342[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (1))){
var inst_95024 = port.readable;
var inst_95025 = (byte_stream_transformer.cljs$core$IFn$_invoke$arity$1 ? byte_stream_transformer.cljs$core$IFn$_invoke$arity$1(inst_95024) : byte_stream_transformer.call(null, inst_95024));
var inst_95026 = inst_95025.getReader();
var state_95113__$1 = (function (){var statearr_95140 = state_95113;
(statearr_95140[(10)] = inst_95026);

return statearr_95140;
})();
var statearr_95141_95343 = state_95113__$1;
(statearr_95141_95343[(2)] = null);

(statearr_95141_95343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (24))){
var inst_95089 = (state_95113[(9)]);
var state_95113__$1 = state_95113;
var statearr_95143_95344 = state_95113__$1;
(statearr_95143_95344[(2)] = inst_95089);

(statearr_95143_95344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (4))){
var inst_95026 = (state_95113[(10)]);
var _ = (function (){var statearr_95148 = state_95113;
(statearr_95148[(4)] = cljs.core.rest((state_95113[(4)])));

return statearr_95148;
})();
var inst_95028 = (state_95113[(2)]);
var inst_95033 = (function (){var reader = inst_95026;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webserial";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),92,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,92,11,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,port,null,"Releasing port read lock",null,null,null,null,null,null,null,null));
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
});
})();
var inst_95034 = inst_95033();
var inst_95035 = inst_95026.releaseLock();
var ___$1 = (function (){var temp__5823__auto__ = (state_95113[(5)]);
if(cljs.core.truth_(temp__5823__auto__)){
var e__32558__auto__ = temp__5823__auto__;
throw e__32558__auto__;
} else {
return null;
}
})();
var state_95113__$1 = (function (){var statearr_95157 = state_95113;
(statearr_95157[(11)] = inst_95035);

(statearr_95157[(12)] = inst_95034);

return statearr_95157;
})();
var statearr_95159_95349 = state_95113__$1;
(statearr_95159_95349[(2)] = inst_95028);

(statearr_95159_95349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (15))){
var inst_95108 = (state_95113[(2)]);
var _ = (function (){var statearr_95165 = state_95113;
(statearr_95165[(4)] = cljs.core.rest((state_95113[(4)])));

return statearr_95165;
})();
var state_95113__$1 = state_95113;
var statearr_95166_95351 = state_95113__$1;
(statearr_95166_95351[(2)] = inst_95108);

(statearr_95166_95351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (21))){
var inst_95090 = (state_95113[(13)]);
var state_95113__$1 = state_95113;
var statearr_95168_95352 = state_95113__$1;
(statearr_95168_95352[(2)] = inst_95090);

(statearr_95168_95352[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (13))){
var inst_95066 = (state_95113[(2)]);
var inst_95067 = inst_95066;
var state_95113__$1 = (function (){var statearr_95171 = state_95113;
(statearr_95171[(14)] = inst_95067);

return statearr_95171;
})();
var statearr_95172_95353 = state_95113__$1;
(statearr_95172_95353[(2)] = null);

(statearr_95172_95353[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (22))){
var inst_95100 = (state_95113[(2)]);
var state_95113__$1 = state_95113;
if(cljs.core.truth_(inst_95100)){
var statearr_95174_95355 = state_95113__$1;
(statearr_95174_95355[(1)] = (23));

} else {
var statearr_95175_95356 = state_95113__$1;
(statearr_95175_95356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (6))){
var _ = (function (){var statearr_95177 = state_95113;
(statearr_95177[(4)] = cljs.core.rest((state_95113[(4)])));

return statearr_95177;
})();
var state_95113__$1 = state_95113;
var ex95170 = (state_95113__$1[(2)]);
var statearr_95179_95358 = state_95113__$1;
(statearr_95179_95358[(5)] = ex95170);


if((ex95170 instanceof Error)){
var statearr_95181_95359 = state_95113__$1;
(statearr_95181_95359[(1)] = (5));

(statearr_95181_95359[(5)] = null);

} else {
throw ex95170;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (25))){
var inst_95105 = (state_95113[(2)]);
var inst_95067 = inst_95105;
var state_95113__$1 = (function (){var statearr_95182 = state_95113;
(statearr_95182[(14)] = inst_95067);

return statearr_95182;
})();
var statearr_95184_95360 = state_95113__$1;
(statearr_95184_95360[(2)] = null);

(statearr_95184_95360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (17))){
var state_95113__$1 = state_95113;
var statearr_95191_95361 = state_95113__$1;
(statearr_95191_95361[(2)] = null);

(statearr_95191_95361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (3))){
var inst_95111 = (state_95113[(2)]);
var state_95113__$1 = state_95113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_95113__$1,inst_95111);
} else {
if((state_val_95114 === (12))){
var inst_95052 = (state_95113[(7)]);
var state_95113__$1 = state_95113;
var statearr_95192_95363 = state_95113__$1;
(statearr_95192_95363[(2)] = inst_95052);

(statearr_95192_95363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (2))){
var inst_95026 = (state_95113[(10)]);
var _ = (function (){var statearr_95193 = state_95113;
(statearr_95193[(4)] = cljs.core.cons((4),(state_95113[(4)])));

return statearr_95193;
})();
var ___$1 = (function (){var statearr_95196 = state_95113;
(statearr_95196[(4)] = cljs.core.cons((6),(state_95113[(4)])));

return statearr_95196;
})();
var inst_95049 = inst_95026.read();
var inst_95050 = cljs.core.async.interop.p__GT_c(inst_95049);
var state_95113__$1 = state_95113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95113__$1,(7),inst_95050);
} else {
if((state_val_95114 === (23))){
var inst_95089 = (state_95113[(9)]);
var inst_95102 = (function(){throw inst_95089})();
var state_95113__$1 = state_95113;
var statearr_95201_95366 = state_95113__$1;
(statearr_95201_95366[(2)] = inst_95102);

(statearr_95201_95366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (19))){
var inst_95090 = (state_95113[(13)]);
var inst_95089 = (state_95113[(9)]);
var inst_95089__$1 = (state_95113[(2)]);
var inst_95090__$1 = (inst_95089__$1 instanceof cljs.core.ExceptionInfo);
var state_95113__$1 = (function (){var statearr_95202 = state_95113;
(statearr_95202[(13)] = inst_95090__$1);

(statearr_95202[(9)] = inst_95089__$1);

return statearr_95202;
})();
if(cljs.core.truth_(inst_95090__$1)){
var statearr_95205_95367 = state_95113__$1;
(statearr_95205_95367[(1)] = (20));

} else {
var statearr_95208_95368 = state_95113__$1;
(statearr_95208_95368[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (11))){
var inst_95052 = (state_95113[(7)]);
var inst_95063 = (function(){throw inst_95052})();
var state_95113__$1 = state_95113;
var statearr_95211_95369 = state_95113__$1;
(statearr_95211_95369[(2)] = inst_95063);

(statearr_95211_95369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (9))){
var inst_95053 = (state_95113[(8)]);
var state_95113__$1 = state_95113;
var statearr_95212_95370 = state_95113__$1;
(statearr_95212_95370[(2)] = inst_95053);

(statearr_95212_95370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (5))){
var inst_95026 = (state_95113[(10)]);
var inst_95038 = (state_95113[(2)]);
var inst_95040 = (function (){var reader = inst_95026;
var e = inst_95038;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.apis.webserial";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),90,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,90,11,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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
});
})();
var inst_95041 = inst_95040();
var state_95113__$1 = state_95113;
var statearr_95217_95373 = state_95113__$1;
(statearr_95217_95373[(2)] = inst_95041);

(statearr_95217_95373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (14))){
var inst_95067 = (state_95113[(14)]);
var state_95113__$1 = state_95113;
if(cljs.core.truth_(inst_95067)){
var statearr_95218_95374 = state_95113__$1;
(statearr_95218_95374[(1)] = (16));

} else {
var statearr_95220_95375 = state_95113__$1;
(statearr_95220_95375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (16))){
var inst_95067 = (state_95113[(14)]);
var inst_95075 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_95067);
var inst_95079 = cljs.core.__destructure_map(inst_95075);
var inst_95080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_95079,"value");
var inst_95081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_95079,"_done");
var inst_95082 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_95080) : handler.call(null, inst_95080));
var state_95113__$1 = (function (){var statearr_95225 = state_95113;
(statearr_95225[(15)] = inst_95081);

return statearr_95225;
})();
var statearr_95226_95380 = state_95113__$1;
(statearr_95226_95380[(2)] = inst_95082);

(statearr_95226_95380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (10))){
var inst_95061 = (state_95113[(2)]);
var state_95113__$1 = state_95113;
if(cljs.core.truth_(inst_95061)){
var statearr_95227_95381 = state_95113__$1;
(statearr_95227_95381[(1)] = (11));

} else {
var statearr_95228_95382 = state_95113__$1;
(statearr_95228_95382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_95114 === (18))){
var inst_95026 = (state_95113[(10)]);
var inst_95085 = (state_95113[(2)]);
var inst_95086 = inst_95026.read();
var inst_95087 = cljs.core.async.interop.p__GT_c(inst_95086);
var state_95113__$1 = (function (){var statearr_95230 = state_95113;
(statearr_95230[(16)] = inst_95085);

return statearr_95230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_95113__$1,(19),inst_95087);
} else {
if((state_val_95114 === (8))){
var inst_95052 = (state_95113[(7)]);
var inst_95056 = cljs.core.ex_data(inst_95052);
var inst_95057 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_95056);
var inst_95058 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_95057,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_95113__$1 = state_95113;
var statearr_95231_95386 = state_95113__$1;
(statearr_95231_95386[(2)] = inst_95058);

(statearr_95231_95386[(1)] = (10));


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
var stack$apis$webserial$go_read_as_$_state_machine__33324__auto__ = null;
var stack$apis$webserial$go_read_as_$_state_machine__33324__auto____0 = (function (){
var statearr_95235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_95235[(0)] = stack$apis$webserial$go_read_as_$_state_machine__33324__auto__);

(statearr_95235[(1)] = (1));

return statearr_95235;
});
var stack$apis$webserial$go_read_as_$_state_machine__33324__auto____1 = (function (state_95113){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_95113);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e95236){var ex__33327__auto__ = e95236;
var statearr_95237_95387 = state_95113;
(statearr_95237_95387[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_95113[(4)]))){
var statearr_95239_95388 = state_95113;
(statearr_95239_95388[(1)] = cljs.core.first((state_95113[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95393 = state_95113;
state_95113 = G__95393;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$apis$webserial$go_read_as_$_state_machine__33324__auto__ = function(state_95113){
switch(arguments.length){
case 0:
return stack$apis$webserial$go_read_as_$_state_machine__33324__auto____0.call(this);
case 1:
return stack$apis$webserial$go_read_as_$_state_machine__33324__auto____1.call(this,state_95113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$webserial$go_read_as_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$webserial$go_read_as_$_state_machine__33324__auto____0;
stack$apis$webserial$go_read_as_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$webserial$go_read_as_$_state_machine__33324__auto____1;
return stack$apis$webserial$go_read_as_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_95244 = f__33449__auto__();
(statearr_95244[(6)] = c__33448__auto__);

return statearr_95244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
stack.apis.webserial.as_byte_readable = (function stack$apis$webserial$as_byte_readable(readable){
return readable;
});
stack.apis.webserial.as_text_readable = (function stack$apis$webserial$as_text_readable(readable){
return readable.pipeThrough((new TextDecoderStream()));
});
stack.apis.webserial.go_read_text = (function stack$apis$webserial$go_read_text(port,handler){
return stack.apis.webserial.go_read_as(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310),stack.apis.webserial.as_text_readable], null));
});
stack.apis.webserial.go_read_bytes = (function stack$apis$webserial$go_read_bytes(port,handler){
return stack.apis.webserial.go_read_as(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"port","port",1534937262),port,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"byte-stream-transformer","byte-stream-transformer",78158310),stack.apis.webserial.as_byte_readable], null));
});
stack.apis.webserial.get_read_channel = (function stack$apis$webserial$get_read_channel(port){
var byte_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var byte_handler = (function (new_bytes){
return cljs.core.async._GT__BANG_(byte_channel,new_bytes);
});
stack.apis.webserial.go_read_bytes(port,byte_handler);

return byte_channel;
});
stack.apis.webserial.write = (function stack$apis$webserial$write(port,command){
var writer = port.writable.getWriter();
var encoder = (new TextEncoder());
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.apis.webserial";
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
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.apis.webserial",new cljs.core.Keyword(null,"line","line",212345235),123,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs"], null),__ns,123,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/apis/webserial.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,command,null,null,null,null,null,null,null,null));
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

writer.write(encoder.encode(command));

return writer.releaseLock();
});

//# sourceMappingURL=stack.apis.webserial.js.map
