goog.provide('stack.utils.supabase');
goog.scope(function(){
  stack.utils.supabase.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$supabase$supabase_js$dist$main$index=shadow.js.require("module$node_modules$$supabase$supabase_js$dist$main$index", {});
var module$node_modules$$supabase$auth_ui_react$dist$index_cjs=shadow.js.require("module$node_modules$$supabase$auth_ui_react$dist$index_cjs", {});
var module$node_modules$$supabase$auth_ui_shared$dist$index=shadow.js.require("module$node_modules$$supabase$auth_ui_shared$dist$index", {});
/**
 * @define {string}
 */
stack.utils.supabase.API_URL = goog.define("stack.utils.supabase.API_URL","https://vyayflsbqdtxjgnhqoah.supabase.co");
/**
 * @define {string}
 */
stack.utils.supabase.ANON_KEY = goog.define("stack.utils.supabase.ANON_KEY","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5YXlmbHNicWR0eGpnbmhxb2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMjQ0MDMsImV4cCI6MjAzNTYwMDQwM30.5r2s9BcLF9po-q4OKfsARcjYV4B8-RR6OLQCSePt5Go");
if((typeof stack !== 'undefined') && (typeof stack.utils !== 'undefined') && (typeof stack.utils.supabase !== 'undefined') && (typeof stack.utils.supabase.client !== 'undefined')){
} else {
stack.utils.supabase.client = module$node_modules$$supabase$supabase_js$dist$main$index.createClient(stack.utils.supabase.API_URL,stack.utils.supabase.ANON_KEY);
}
stack.utils.supabase.extract_result_data = (function stack$utils$supabase$extract_result_data(query_result){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(query_result.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
stack.utils.supabase.get_table = (function stack$utils$supabase$get_table(var_args){
var args__5732__auto__ = [];
var len__5726__auto___97685 = arguments.length;
var i__5727__auto___97686 = (0);
while(true){
if((i__5727__auto___97686 < len__5726__auto___97685)){
args__5732__auto__.push((arguments[i__5727__auto___97686]));

var G__97687 = (i__5727__auto___97686 + (1));
i__5727__auto___97686 = G__97687;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic = (function (table_id,p__96642){
var map__96644 = p__96642;
var map__96644__$1 = cljs.core.__destructure_map(map__96644);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96644__$1,new cljs.core.Keyword(null,"then","then",460598070),null);
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_96662){
var state_val_96663 = (state_96662[(1)]);
if((state_val_96663 === (1))){
var inst_96649 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","get-table","stack.utils.supabase/get-table",-1802357904);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,39,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,table_id,null,null,null,null,null,null,null,null,null,null));
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
var inst_96650 = inst_96649();
var inst_96655 = promesa.core.promise.cljs$core$IFn$_invoke$arity$1(stack.utils.supabase.client);
var inst_96656 = (function (){return (function (p__91509__auto__){
return p__91509__auto__.from(table_id);
});
})();
var inst_96657 = (function (){return (function (p__91509__auto__){
return p__91509__auto__.select("*");
});
})();
var inst_96658 = (function (){return (function (p__91509__auto__){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(p__91509__auto__,(function (result){
var rows = stack.utils.supabase.extract_result_data(result);
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","get-table-ok","stack.utils.supabase/get-table-ok",932653091);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),23,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,45,23,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),table_id,new cljs.core.Keyword(null,"row-count","row-count",1060167988),cljs.core.count(rows)], null),null,null,null,null,null,null,null,null,null,null));
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

if(cljs.core.truth_(then)){
return (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(rows) : then.call(null, rows));
} else {
return null;
}
}));
});
})();
var inst_96659 = (function (){return (function (p__91509__auto__){
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(p__91509__auto__,(function (e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","table-get-failure","stack.utils.supabase/table-get-failure",1633273726);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),47,new cljs.core.Keyword(null,"column","column",2078222095),28,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,47,28,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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
}));
});
})();
var inst_96660 = promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(inst_96655,inst_96656,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_96657,inst_96658,inst_96659], 0));
var state_96662__$1 = (function (){var statearr_96708 = state_96662;
(statearr_96708[(7)] = inst_96650);

return statearr_96708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_96662__$1,inst_96660);
} else {
return null;
}
});
return (function() {
var stack$utils$supabase$state_machine__33324__auto__ = null;
var stack$utils$supabase$state_machine__33324__auto____0 = (function (){
var statearr_96712 = [null,null,null,null,null,null,null,null];
(statearr_96712[(0)] = stack$utils$supabase$state_machine__33324__auto__);

(statearr_96712[(1)] = (1));

return statearr_96712;
});
var stack$utils$supabase$state_machine__33324__auto____1 = (function (state_96662){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_96662);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e96716){var ex__33327__auto__ = e96716;
var statearr_96717_97701 = state_96662;
(statearr_96717_97701[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_96662[(4)]))){
var statearr_96718_97702 = state_96662;
(statearr_96718_97702[(1)] = cljs.core.first((state_96662[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97704 = state_96662;
state_96662 = G__97704;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$utils$supabase$state_machine__33324__auto__ = function(state_96662){
switch(arguments.length){
case 0:
return stack$utils$supabase$state_machine__33324__auto____0.call(this);
case 1:
return stack$utils$supabase$state_machine__33324__auto____1.call(this,state_96662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$supabase$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$supabase$state_machine__33324__auto____0;
stack$utils$supabase$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$supabase$state_machine__33324__auto____1;
return stack$utils$supabase$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_96722 = f__33449__auto__();
(statearr_96722[(6)] = c__33448__auto__);

return statearr_96722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.utils.supabase.get_table.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stack.utils.supabase.get_table.cljs$lang$applyTo = (function (seq96632){
var G__96633 = cljs.core.first(seq96632);
var seq96632__$1 = cljs.core.next(seq96632);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__96633,seq96632__$1);
}));

stack.utils.supabase.list_buckets = (function stack$utils$supabase$list_buckets(p__96732){
var map__96733 = p__96732;
var map__96733__$1 = cljs.core.__destructure_map(map__96733);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96733__$1,new cljs.core.Keyword(null,"then","then",460598070),null);
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_96798){
var state_val_96801 = (state_96798[(1)]);
if((state_val_96801 === (7))){
var inst_96763 = (state_96798[(7)]);
var inst_96766 = cljs.core.ex_data(inst_96763);
var inst_96768 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_96766);
var inst_96769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_96768,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_96798__$1 = state_96798;
var statearr_96813_97707 = state_96798__$1;
(statearr_96813_97707[(2)] = inst_96769);

(statearr_96813_97707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (1))){
var inst_96737 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.supabase";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),61,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,61,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"all",null,null,null,null,null,null,null,null));
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
var inst_96738 = inst_96737();
var state_96798__$1 = (function (){var statearr_96832 = state_96798;
(statearr_96832[(8)] = inst_96738);

return statearr_96832;
})();
var statearr_96834_97718 = state_96798__$1;
(statearr_96834_97718[(2)] = null);

(statearr_96834_97718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (4))){
var inst_96739 = (state_96798[(2)]);
var inst_96748 = (function (){var err = inst_96739;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","list-buckets-error","stack.utils.supabase/list-buckets-error",-2120365462);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),68,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,68,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,err,null,null,null,null,null,null,null,null,null,null));
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
var inst_96749 = inst_96748();
var state_96798__$1 = state_96798;
var statearr_96860_97728 = state_96798__$1;
(statearr_96860_97728[(2)] = inst_96749);

(statearr_96860_97728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (15))){
var inst_96791 = (state_96798[(2)]);
var _ = (function (){var statearr_96864 = state_96798;
(statearr_96864[(4)] = cljs.core.rest((state_96798[(4)])));

return statearr_96864;
})();
var state_96798__$1 = state_96798;
var statearr_96866_97731 = state_96798__$1;
(statearr_96866_97731[(2)] = inst_96791);

(statearr_96866_97731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (13))){
var inst_96780 = (state_96798[(9)]);
var inst_96788 = (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(inst_96780) : then.call(null, inst_96780));
var state_96798__$1 = state_96798;
var statearr_96870_97732 = state_96798__$1;
(statearr_96870_97732[(2)] = inst_96788);

(statearr_96870_97732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (6))){
var inst_96763 = (state_96798[(7)]);
var inst_96764 = (state_96798[(10)]);
var inst_96763__$1 = (state_96798[(2)]);
var inst_96764__$1 = (inst_96763__$1 instanceof cljs.core.ExceptionInfo);
var state_96798__$1 = (function (){var statearr_96873 = state_96798;
(statearr_96873[(7)] = inst_96763__$1);

(statearr_96873[(10)] = inst_96764__$1);

return statearr_96873;
})();
if(cljs.core.truth_(inst_96764__$1)){
var statearr_96875_97734 = state_96798__$1;
(statearr_96875_97734[(1)] = (7));

} else {
var statearr_96876_97735 = state_96798__$1;
(statearr_96876_97735[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (3))){
var inst_96796 = (state_96798[(2)]);
var state_96798__$1 = state_96798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_96798__$1,inst_96796);
} else {
if((state_val_96801 === (12))){
var inst_96780 = (state_96798[(9)]);
var inst_96779 = (state_96798[(2)]);
var inst_96780__$1 = stack.utils.supabase.extract_result_data(inst_96779);
var inst_96782 = (function (){var result = inst_96779;
var buckets = inst_96780__$1;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","list-buckets-ok","stack.utils.supabase/list-buckets-ok",395228670);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,66,9,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,buckets,null,null,null,null,null,null,null,null,null,null));
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
var inst_96783 = inst_96782();
var state_96798__$1 = (function (){var statearr_96913 = state_96798;
(statearr_96913[(11)] = inst_96783);

(statearr_96913[(9)] = inst_96780__$1);

return statearr_96913;
})();
if(cljs.core.truth_(then)){
var statearr_96914_97746 = state_96798__$1;
(statearr_96914_97746[(1)] = (13));

} else {
var statearr_96915_97747 = state_96798__$1;
(statearr_96915_97747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (2))){
var _ = (function (){var statearr_96918 = state_96798;
(statearr_96918[(4)] = cljs.core.cons((5),(state_96798[(4)])));

return statearr_96918;
})();
var inst_96756 = stack.utils.supabase.client.storage;
var inst_96757 = inst_96756.listBuckets();
var inst_96758 = cljs.core.async.interop.p__GT_c(inst_96757);
var state_96798__$1 = state_96798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_96798__$1,(6),inst_96758);
} else {
if((state_val_96801 === (11))){
var inst_96763 = (state_96798[(7)]);
var state_96798__$1 = state_96798;
var statearr_96920_97749 = state_96798__$1;
(statearr_96920_97749[(2)] = inst_96763);

(statearr_96920_97749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (9))){
var inst_96772 = (state_96798[(2)]);
var state_96798__$1 = state_96798;
if(cljs.core.truth_(inst_96772)){
var statearr_96924_97750 = state_96798__$1;
(statearr_96924_97750[(1)] = (10));

} else {
var statearr_96925_97751 = state_96798__$1;
(statearr_96925_97751[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (5))){
var _ = (function (){var statearr_96926 = state_96798;
(statearr_96926[(4)] = cljs.core.rest((state_96798[(4)])));

return statearr_96926;
})();
var state_96798__$1 = state_96798;
var ex96919 = (state_96798__$1[(2)]);
var statearr_96928_97754 = state_96798__$1;
(statearr_96928_97754[(5)] = ex96919);


if((ex96919 instanceof Error)){
var statearr_96930_97756 = state_96798__$1;
(statearr_96930_97756[(1)] = (4));

(statearr_96930_97756[(5)] = null);

} else {
throw ex96919;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (14))){
var state_96798__$1 = state_96798;
var statearr_96931_97758 = state_96798__$1;
(statearr_96931_97758[(2)] = null);

(statearr_96931_97758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (10))){
var inst_96763 = (state_96798[(7)]);
var inst_96776 = (function(){throw inst_96763})();
var state_96798__$1 = state_96798;
var statearr_96936_97761 = state_96798__$1;
(statearr_96936_97761[(2)] = inst_96776);

(statearr_96936_97761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_96801 === (8))){
var inst_96764 = (state_96798[(10)]);
var state_96798__$1 = state_96798;
var statearr_96937_97763 = state_96798__$1;
(statearr_96937_97763[(2)] = inst_96764);

(statearr_96937_97763[(1)] = (9));


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
});
return (function() {
var stack$utils$supabase$list_buckets_$_state_machine__33324__auto__ = null;
var stack$utils$supabase$list_buckets_$_state_machine__33324__auto____0 = (function (){
var statearr_96941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_96941[(0)] = stack$utils$supabase$list_buckets_$_state_machine__33324__auto__);

(statearr_96941[(1)] = (1));

return statearr_96941;
});
var stack$utils$supabase$list_buckets_$_state_machine__33324__auto____1 = (function (state_96798){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_96798);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e96945){var ex__33327__auto__ = e96945;
var statearr_96947_97775 = state_96798;
(statearr_96947_97775[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_96798[(4)]))){
var statearr_96949_97780 = state_96798;
(statearr_96949_97780[(1)] = cljs.core.first((state_96798[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97782 = state_96798;
state_96798 = G__97782;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$utils$supabase$list_buckets_$_state_machine__33324__auto__ = function(state_96798){
switch(arguments.length){
case 0:
return stack$utils$supabase$list_buckets_$_state_machine__33324__auto____0.call(this);
case 1:
return stack$utils$supabase$list_buckets_$_state_machine__33324__auto____1.call(this,state_96798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$supabase$list_buckets_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$supabase$list_buckets_$_state_machine__33324__auto____0;
stack$utils$supabase$list_buckets_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$supabase$list_buckets_$_state_machine__33324__auto____1;
return stack$utils$supabase$list_buckets_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_96956 = f__33449__auto__();
(statearr_96956[(6)] = c__33448__auto__);

return statearr_96956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
stack.utils.supabase.from_bucket = (function stack$utils$supabase$from_bucket(bucket){
return stack.utils.supabase.client.storage.from(bucket);
});
stack.utils.supabase.list_files = (function stack$utils$supabase$list_files(bucket_id,p__96975){
var map__96977 = p__96975;
var map__96977__$1 = cljs.core.__destructure_map(map__96977);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96977__$1,new cljs.core.Keyword(null,"then","then",460598070),null);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96977__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363),(100));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__96977__$1,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97045){
var state_val_97046 = (state_97045[(1)]);
if((state_val_97046 === (7))){
var inst_97013 = (state_97045[(7)]);
var inst_97017 = cljs.core.ex_data(inst_97013);
var inst_97019 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_97017);
var inst_97020 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_97019,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_97045__$1 = state_97045;
var statearr_97055_97787 = state_97045__$1;
(statearr_97055_97787[(2)] = inst_97020);

(statearr_97055_97787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (1))){
var inst_96983 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.supabase";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),78,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,78,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,bucket_id,null,null,null,null,null,null,null,null));
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
var inst_96984 = inst_96983();
var state_97045__$1 = (function (){var statearr_97078 = state_97045;
(statearr_97078[(8)] = inst_96984);

return statearr_97078;
})();
var statearr_97081_97795 = state_97045__$1;
(statearr_97081_97795[(2)] = null);

(statearr_97081_97795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (4))){
var inst_96986 = (state_97045[(2)]);
var inst_96988 = (function (){var err = inst_96986;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","list-files-error","stack.utils.supabase/list-files-error",-1823320472);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),86,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,86,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,err,null,null,null,null,null,null,null,null,null,null));
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
var inst_96989 = inst_96988();
var state_97045__$1 = state_97045;
var statearr_97096_97807 = state_97045__$1;
(statearr_97096_97807[(2)] = inst_96989);

(statearr_97096_97807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (15))){
var inst_97040 = (state_97045[(2)]);
var _ = (function (){var statearr_97099 = state_97045;
(statearr_97099[(4)] = cljs.core.rest((state_97045[(4)])));

return statearr_97099;
})();
var state_97045__$1 = state_97045;
var statearr_97100_97810 = state_97045__$1;
(statearr_97100_97810[(2)] = inst_97040);

(statearr_97100_97810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (13))){
var inst_97030 = (state_97045[(9)]);
var inst_97037 = (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(inst_97030) : then.call(null, inst_97030));
var state_97045__$1 = state_97045;
var statearr_97103_97813 = state_97045__$1;
(statearr_97103_97813[(2)] = inst_97037);

(statearr_97103_97813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (6))){
var inst_97015 = (state_97045[(10)]);
var inst_97013 = (state_97045[(7)]);
var inst_97013__$1 = (state_97045[(2)]);
var inst_97015__$1 = (inst_97013__$1 instanceof cljs.core.ExceptionInfo);
var state_97045__$1 = (function (){var statearr_97106 = state_97045;
(statearr_97106[(10)] = inst_97015__$1);

(statearr_97106[(7)] = inst_97013__$1);

return statearr_97106;
})();
if(cljs.core.truth_(inst_97015__$1)){
var statearr_97107_97814 = state_97045__$1;
(statearr_97107_97814[(1)] = (7));

} else {
var statearr_97108_97815 = state_97045__$1;
(statearr_97108_97815[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (3))){
var inst_97043 = (state_97045[(2)]);
var state_97045__$1 = state_97045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97045__$1,inst_97043);
} else {
if((state_val_97046 === (12))){
var inst_97030 = (state_97045[(9)]);
var inst_97029 = (state_97045[(2)]);
var inst_97030__$1 = stack.utils.supabase.extract_result_data(inst_97029);
var inst_97034 = (function (){var result = inst_97029;
var items = inst_97030__$1;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","list-files-ok","stack.utils.supabase/list-files-ok",1993471152);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),84,new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,84,9,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bucket","bucket",1126218366),bucket_id,new cljs.core.Keyword(null,"item-count","item-count",8658772),cljs.core.count(items),new cljs.core.Keyword(null,"files","files",-472457450),items], null),null,null,null,null,null,null,null,null,null,null));
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
var inst_97035 = inst_97034();
var state_97045__$1 = (function (){var statearr_97123 = state_97045;
(statearr_97123[(11)] = inst_97035);

(statearr_97123[(9)] = inst_97030__$1);

return statearr_97123;
})();
if(cljs.core.truth_(then)){
var statearr_97127_97848 = state_97045__$1;
(statearr_97127_97848[(1)] = (13));

} else {
var statearr_97128_97849 = state_97045__$1;
(statearr_97128_97849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (2))){
var _ = (function (){var statearr_97134 = state_97045;
(statearr_97134[(4)] = cljs.core.cons((5),(state_97045[(4)])));

return statearr_97134;
})();
var inst_96996 = stack.utils.supabase.from_bucket(bucket_id);
var inst_96997 = [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"sort-by","sort-by",-322599303)];
var inst_96999 = [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"order","order",-1254677256)];
var inst_97001 = ["name","asc"];
var inst_97005 = cljs.core.PersistentHashMap.fromArrays(inst_96999,inst_97001);
var inst_97007 = [limit,offset,inst_97005];
var inst_97008 = cljs.core.PersistentHashMap.fromArrays(inst_96997,inst_97007);
var inst_97009 = cljs.core.clj__GT_js(inst_97008);
var inst_97010 = inst_96996.list("",inst_97009);
var inst_97011 = cljs.core.async.interop.p__GT_c(inst_97010);
var state_97045__$1 = state_97045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97045__$1,(6),inst_97011);
} else {
if((state_val_97046 === (11))){
var inst_97013 = (state_97045[(7)]);
var state_97045__$1 = state_97045;
var statearr_97141_97854 = state_97045__$1;
(statearr_97141_97854[(2)] = inst_97013);

(statearr_97141_97854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (9))){
var inst_97023 = (state_97045[(2)]);
var state_97045__$1 = state_97045;
if(cljs.core.truth_(inst_97023)){
var statearr_97148_97856 = state_97045__$1;
(statearr_97148_97856[(1)] = (10));

} else {
var statearr_97149_97857 = state_97045__$1;
(statearr_97149_97857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (5))){
var _ = (function (){var statearr_97151 = state_97045;
(statearr_97151[(4)] = cljs.core.rest((state_97045[(4)])));

return statearr_97151;
})();
var state_97045__$1 = state_97045;
var ex97140 = (state_97045__$1[(2)]);
var statearr_97152_97859 = state_97045__$1;
(statearr_97152_97859[(5)] = ex97140);


if((ex97140 instanceof Error)){
var statearr_97155_97860 = state_97045__$1;
(statearr_97155_97860[(1)] = (4));

(statearr_97155_97860[(5)] = null);

} else {
throw ex97140;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (14))){
var state_97045__$1 = state_97045;
var statearr_97163_97861 = state_97045__$1;
(statearr_97163_97861[(2)] = null);

(statearr_97163_97861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (10))){
var inst_97013 = (state_97045[(7)]);
var inst_97025 = (function(){throw inst_97013})();
var state_97045__$1 = state_97045;
var statearr_97165_97862 = state_97045__$1;
(statearr_97165_97862[(2)] = inst_97025);

(statearr_97165_97862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97046 === (8))){
var inst_97015 = (state_97045[(10)]);
var state_97045__$1 = state_97045;
var statearr_97169_97863 = state_97045__$1;
(statearr_97169_97863[(2)] = inst_97015);

(statearr_97169_97863[(1)] = (9));


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
});
return (function() {
var stack$utils$supabase$list_files_$_state_machine__33324__auto__ = null;
var stack$utils$supabase$list_files_$_state_machine__33324__auto____0 = (function (){
var statearr_97174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97174[(0)] = stack$utils$supabase$list_files_$_state_machine__33324__auto__);

(statearr_97174[(1)] = (1));

return statearr_97174;
});
var stack$utils$supabase$list_files_$_state_machine__33324__auto____1 = (function (state_97045){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97045);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97176){var ex__33327__auto__ = e97176;
var statearr_97177_97866 = state_97045;
(statearr_97177_97866[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97045[(4)]))){
var statearr_97178_97867 = state_97045;
(statearr_97178_97867[(1)] = cljs.core.first((state_97045[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97868 = state_97045;
state_97045 = G__97868;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$utils$supabase$list_files_$_state_machine__33324__auto__ = function(state_97045){
switch(arguments.length){
case 0:
return stack$utils$supabase$list_files_$_state_machine__33324__auto____0.call(this);
case 1:
return stack$utils$supabase$list_files_$_state_machine__33324__auto____1.call(this,state_97045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$supabase$list_files_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$supabase$list_files_$_state_machine__33324__auto____0;
stack$utils$supabase$list_files_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$supabase$list_files_$_state_machine__33324__auto____1;
return stack$utils$supabase$list_files_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97186 = f__33449__auto__();
(statearr_97186[(6)] = c__33448__auto__);

return statearr_97186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
stack.utils.supabase.get_file = (function stack$utils$supabase$get_file(p__97188){
var map__97190 = p__97188;
var map__97190__$1 = cljs.core.__destructure_map(map__97190);
var bucket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97190__$1,new cljs.core.Keyword(null,"bucket","bucket",1126218366));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97190__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97190__$1,new cljs.core.Keyword(null,"then","then",460598070),null);
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97289){
var state_val_97290 = (state_97289[(1)]);
if((state_val_97290 === (7))){
var inst_97223 = (state_97289[(7)]);
var inst_97231 = cljs.core.ex_data(inst_97223);
var inst_97232 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_97231);
var inst_97233 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_97232,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_97289__$1 = state_97289;
var statearr_97296_97874 = state_97289__$1;
(statearr_97296_97874[(2)] = inst_97233);

(statearr_97296_97874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (20))){
var inst_97269 = (state_97289[(8)]);
var inst_97273 = (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(inst_97269) : then.call(null, inst_97269));
var state_97289__$1 = state_97289;
var statearr_97297_97881 = state_97289__$1;
(statearr_97297_97881[(2)] = inst_97273);

(statearr_97297_97881[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (1))){
var inst_97200 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","file-get","stack.utils.supabase/file-get",437091462);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),91,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,91,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bucket","bucket",1126218366),bucket,new cljs.core.Keyword(null,"path","path",-188191168),path], null),null,null,null,null,null,null,null,null,null,null));
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
var inst_97201 = inst_97200();
var state_97289__$1 = (function (){var statearr_97315 = state_97289;
(statearr_97315[(9)] = inst_97201);

return statearr_97315;
})();
var statearr_97317_97907 = state_97289__$1;
(statearr_97317_97907[(2)] = null);

(statearr_97317_97907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (4))){
var inst_97206 = (state_97289[(2)]);
var inst_97208 = (function (){var err = inst_97206;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","file-get-error","stack.utils.supabase/file-get-error",-1580593869);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"column","column",2078222095),27,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,99,27,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,err,null,null,null,null,null,null,null,null,null,null));
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
var inst_97209 = inst_97208();
var state_97289__$1 = state_97289;
var statearr_97325_97925 = state_97289__$1;
(statearr_97325_97925[(2)] = inst_97209);

(statearr_97325_97925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (15))){
var inst_97255 = (state_97289[(10)]);
var state_97289__$1 = state_97289;
var statearr_97326_97926 = state_97289__$1;
(statearr_97326_97926[(2)] = inst_97255);

(statearr_97326_97926[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (21))){
var state_97289__$1 = state_97289;
var statearr_97330_97927 = state_97289__$1;
(statearr_97330_97927[(2)] = null);

(statearr_97330_97927[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (13))){
var inst_97254 = (state_97289[(11)]);
var inst_97255 = (state_97289[(10)]);
var inst_97254__$1 = (state_97289[(2)]);
var inst_97255__$1 = (inst_97254__$1 instanceof cljs.core.ExceptionInfo);
var state_97289__$1 = (function (){var statearr_97332 = state_97289;
(statearr_97332[(11)] = inst_97254__$1);

(statearr_97332[(10)] = inst_97255__$1);

return statearr_97332;
})();
if(cljs.core.truth_(inst_97255__$1)){
var statearr_97333_97930 = state_97289__$1;
(statearr_97333_97930[(1)] = (14));

} else {
var statearr_97334_97935 = state_97289__$1;
(statearr_97334_97935[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (22))){
var inst_97276 = (state_97289[(2)]);
var _ = (function (){var statearr_97335 = state_97289;
(statearr_97335[(4)] = cljs.core.rest((state_97289[(4)])));

return statearr_97335;
})();
var state_97289__$1 = state_97289;
var statearr_97336_97936 = state_97289__$1;
(statearr_97336_97936[(2)] = inst_97276);

(statearr_97336_97936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (6))){
var inst_97223 = (state_97289[(7)]);
var inst_97226 = (state_97289[(12)]);
var inst_97223__$1 = (state_97289[(2)]);
var inst_97226__$1 = (inst_97223__$1 instanceof cljs.core.ExceptionInfo);
var state_97289__$1 = (function (){var statearr_97340 = state_97289;
(statearr_97340[(7)] = inst_97223__$1);

(statearr_97340[(12)] = inst_97226__$1);

return statearr_97340;
})();
if(cljs.core.truth_(inst_97226__$1)){
var statearr_97342_97940 = state_97289__$1;
(statearr_97342_97940[(1)] = (7));

} else {
var statearr_97343_97941 = state_97289__$1;
(statearr_97343_97941[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (17))){
var inst_97254 = (state_97289[(11)]);
var inst_97264 = (function(){throw inst_97254})();
var state_97289__$1 = state_97289;
var statearr_97344_97942 = state_97289__$1;
(statearr_97344_97942[(2)] = inst_97264);

(statearr_97344_97942[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (3))){
var inst_97279 = (state_97289[(2)]);
var state_97289__$1 = state_97289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_97289__$1,inst_97279);
} else {
if((state_val_97290 === (12))){
var inst_97242 = (state_97289[(13)]);
var inst_97241 = (state_97289[(14)]);
var inst_97241__$1 = (state_97289[(2)]);
var inst_97242__$1 = stack.utils.supabase.extract_result_data(inst_97241__$1);
var inst_97243 = [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"content","content",15833224)];
var inst_97251 = inst_97242__$1.text();
var inst_97252 = cljs.core.async.interop.p__GT_c(inst_97251);
var state_97289__$1 = (function (){var statearr_97356 = state_97289;
(statearr_97356[(13)] = inst_97242__$1);

(statearr_97356[(14)] = inst_97241__$1);

(statearr_97356[(15)] = inst_97243);

return statearr_97356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97289__$1,(13),inst_97252);
} else {
if((state_val_97290 === (2))){
var _ = (function (){var statearr_97358 = state_97289;
(statearr_97358[(4)] = cljs.core.cons((5),(state_97289[(4)])));

return statearr_97358;
})();
var inst_97219 = stack.utils.supabase.from_bucket(bucket);
var inst_97220 = inst_97219.download(path);
var inst_97221 = cljs.core.async.interop.p__GT_c(inst_97220);
var state_97289__$1 = state_97289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_97289__$1,(6),inst_97221);
} else {
if((state_val_97290 === (19))){
var inst_97242 = (state_97289[(13)]);
var inst_97241 = (state_97289[(14)]);
var inst_97269 = (state_97289[(8)]);
var inst_97243 = (state_97289[(15)]);
var inst_97267 = (state_97289[(2)]);
var inst_97268 = [path,inst_97267];
var inst_97269__$1 = cljs.core.PersistentHashMap.fromArrays(inst_97243,inst_97268);
var inst_97270 = (function (){var result = inst_97241;
var blob = inst_97242;
var file = inst_97269__$1;
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","file-get-ok","stack.utils.supabase/file-get-ok",-1150223739);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),97,new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,97,9,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bucket","bucket",1126218366),bucket,new cljs.core.Keyword(null,"path","path",-188191168),path], null),null,null,null,null,null,null,null,null,null,null));
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
var inst_97271 = inst_97270();
var state_97289__$1 = (function (){var statearr_97369 = state_97289;
(statearr_97369[(16)] = inst_97271);

(statearr_97369[(8)] = inst_97269__$1);

return statearr_97369;
})();
if(cljs.core.truth_(then)){
var statearr_97370_97966 = state_97289__$1;
(statearr_97370_97966[(1)] = (20));

} else {
var statearr_97371_97968 = state_97289__$1;
(statearr_97371_97968[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (11))){
var inst_97223 = (state_97289[(7)]);
var state_97289__$1 = state_97289;
var statearr_97373_97973 = state_97289__$1;
(statearr_97373_97973[(2)] = inst_97223);

(statearr_97373_97973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (9))){
var inst_97236 = (state_97289[(2)]);
var state_97289__$1 = state_97289;
if(cljs.core.truth_(inst_97236)){
var statearr_97376_97975 = state_97289__$1;
(statearr_97376_97975[(1)] = (10));

} else {
var statearr_97379_97977 = state_97289__$1;
(statearr_97379_97977[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (5))){
var _ = (function (){var statearr_97384 = state_97289;
(statearr_97384[(4)] = cljs.core.rest((state_97289[(4)])));

return statearr_97384;
})();
var state_97289__$1 = state_97289;
var ex97372 = (state_97289__$1[(2)]);
var statearr_97386_97979 = state_97289__$1;
(statearr_97386_97979[(5)] = ex97372);


if((ex97372 instanceof Error)){
var statearr_97387_97981 = state_97289__$1;
(statearr_97387_97981[(1)] = (4));

(statearr_97387_97981[(5)] = null);

} else {
throw ex97372;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (14))){
var inst_97254 = (state_97289[(11)]);
var inst_97257 = cljs.core.ex_data(inst_97254);
var inst_97258 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_97257);
var inst_97259 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_97258,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_97289__$1 = state_97289;
var statearr_97395_97987 = state_97289__$1;
(statearr_97395_97987[(2)] = inst_97259);

(statearr_97395_97987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (16))){
var inst_97262 = (state_97289[(2)]);
var state_97289__$1 = state_97289;
if(cljs.core.truth_(inst_97262)){
var statearr_97398_97990 = state_97289__$1;
(statearr_97398_97990[(1)] = (17));

} else {
var statearr_97399_97993 = state_97289__$1;
(statearr_97399_97993[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (10))){
var inst_97223 = (state_97289[(7)]);
var inst_97238 = (function(){throw inst_97223})();
var state_97289__$1 = state_97289;
var statearr_97400_97999 = state_97289__$1;
(statearr_97400_97999[(2)] = inst_97238);

(statearr_97400_97999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (18))){
var inst_97254 = (state_97289[(11)]);
var state_97289__$1 = state_97289;
var statearr_97401_98001 = state_97289__$1;
(statearr_97401_98001[(2)] = inst_97254);

(statearr_97401_98001[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97290 === (8))){
var inst_97226 = (state_97289[(12)]);
var state_97289__$1 = state_97289;
var statearr_97404_98004 = state_97289__$1;
(statearr_97404_98004[(2)] = inst_97226);

(statearr_97404_98004[(1)] = (9));


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
});
return (function() {
var stack$utils$supabase$get_file_$_state_machine__33324__auto__ = null;
var stack$utils$supabase$get_file_$_state_machine__33324__auto____0 = (function (){
var statearr_97420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_97420[(0)] = stack$utils$supabase$get_file_$_state_machine__33324__auto__);

(statearr_97420[(1)] = (1));

return statearr_97420;
});
var stack$utils$supabase$get_file_$_state_machine__33324__auto____1 = (function (state_97289){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97289);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97427){var ex__33327__auto__ = e97427;
var statearr_97432_98009 = state_97289;
(statearr_97432_98009[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97289[(4)]))){
var statearr_97433_98012 = state_97289;
(statearr_97433_98012[(1)] = cljs.core.first((state_97289[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98016 = state_97289;
state_97289 = G__98016;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$utils$supabase$get_file_$_state_machine__33324__auto__ = function(state_97289){
switch(arguments.length){
case 0:
return stack$utils$supabase$get_file_$_state_machine__33324__auto____0.call(this);
case 1:
return stack$utils$supabase$get_file_$_state_machine__33324__auto____1.call(this,state_97289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$supabase$get_file_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$supabase$get_file_$_state_machine__33324__auto____0;
stack$utils$supabase$get_file_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$supabase$get_file_$_state_machine__33324__auto____1;
return stack$utils$supabase$get_file_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97437 = f__33449__auto__();
(statearr_97437[(6)] = c__33448__auto__);

return statearr_97437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
stack.utils.supabase.get_session_PLUS_ = (function stack$utils$supabase$get_session_PLUS_(){
return stack.utils.supabase.client.auth.getSession();
});
stack.utils.supabase.get_session = (function stack$utils$supabase$get_session(var_args){
var args__5732__auto__ = [];
var len__5726__auto___98023 = arguments.length;
var i__5727__auto___98024 = (0);
while(true){
if((i__5727__auto___98024 < len__5726__auto___98023)){
args__5732__auto__.push((arguments[i__5727__auto___98024]));

var G__98025 = (i__5727__auto___98024 + (1));
i__5727__auto___98024 = G__98025;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return stack.utils.supabase.get_session.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(stack.utils.supabase.get_session.cljs$core$IFn$_invoke$arity$variadic = (function (p__97453){
var map__97454 = p__97453;
var map__97454__$1 = cljs.core.__destructure_map(map__97454);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__97454__$1,new cljs.core.Keyword(null,"then","then",460598070),null);
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97469){
var state_val_97471 = (state_97469[(1)]);
if((state_val_97471 === (1))){
var inst_97455 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","get-session","stack.utils.supabase/get-session",1893709181);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),111,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,111,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,null,null,null,null,null,null,null,null,null));
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
var inst_97456 = inst_97455();
var inst_97459 = stack.utils.supabase.client.auth;
var inst_97460 = inst_97459.getSession();
var inst_97461 = (function (){return (function (result){
var session = new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(stack.utils.supabase.extract_result_data(result));
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","get-session-ok","stack.utils.supabase/get-session-ok",440640705);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),119,new cljs.core.Keyword(null,"column","column",2078222095),21,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,119,21,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,session,null,null,null,null,null,null,null,null,null,null));
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

if(cljs.core.truth_(then)){
return (then.cljs$core$IFn$_invoke$arity$1 ? then.cljs$core$IFn$_invoke$arity$1(session) : then.call(null, session));
} else {
return null;
}
});
})();
var inst_97462 = promesa.core.then.cljs$core$IFn$_invoke$arity$2(inst_97460,inst_97461);
var inst_97466 = (function (){return (function (e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","get-session-error","stack.utils.supabase/get-session-error",-772281600);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),121,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,121,26,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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
});
})();
var inst_97467 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_97462,inst_97466);
var state_97469__$1 = (function (){var statearr_97535 = state_97469;
(statearr_97535[(7)] = inst_97456);

return statearr_97535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_97469__$1,inst_97467);
} else {
return null;
}
});
return (function() {
var stack$utils$supabase$state_machine__33324__auto__ = null;
var stack$utils$supabase$state_machine__33324__auto____0 = (function (){
var statearr_97540 = [null,null,null,null,null,null,null,null];
(statearr_97540[(0)] = stack$utils$supabase$state_machine__33324__auto__);

(statearr_97540[(1)] = (1));

return statearr_97540;
});
var stack$utils$supabase$state_machine__33324__auto____1 = (function (state_97469){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97469);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97541){var ex__33327__auto__ = e97541;
var statearr_97542_98085 = state_97469;
(statearr_97542_98085[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97469[(4)]))){
var statearr_97548_98086 = state_97469;
(statearr_97548_98086[(1)] = cljs.core.first((state_97469[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98087 = state_97469;
state_97469 = G__98087;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$utils$supabase$state_machine__33324__auto__ = function(state_97469){
switch(arguments.length){
case 0:
return stack$utils$supabase$state_machine__33324__auto____0.call(this);
case 1:
return stack$utils$supabase$state_machine__33324__auto____1.call(this,state_97469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$supabase$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$supabase$state_machine__33324__auto____0;
stack$utils$supabase$state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$supabase$state_machine__33324__auto____1;
return stack$utils$supabase$state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97551 = f__33449__auto__();
(statearr_97551[(6)] = c__33448__auto__);

return statearr_97551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
}));

(stack.utils.supabase.get_session.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(stack.utils.supabase.get_session.cljs$lang$applyTo = (function (seq97447){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq97447));
}));

stack.utils.supabase.on_auth_state_change = (function stack$utils$supabase$on_auth_state_change(set_session){
var response = stack.utils.supabase.client.auth.onAuthStateChange((function (_event,session){
return (set_session.cljs$core$IFn$_invoke$arity$1 ? set_session.cljs$core$IFn$_invoke$arity$1(session) : set_session.call(null, session));
}));
return new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(stack.utils.supabase.extract_result_data(response));
});
stack.utils.supabase.register_session_callback = (function stack$utils$supabase$register_session_callback(callback){
stack.utils.supabase.get_session.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),callback], 0));

return stack.utils.supabase.on_auth_state_change(callback);
});
stack.utils.supabase.sign_out = (function stack$utils$supabase$sign_out(){
var c__33448__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33449__auto__ = (function (){var switch__33323__auto__ = (function (state_97601){
var state_val_97602 = (state_97601[(1)]);
if((state_val_97602 === (1))){
var inst_97594 = (function (){return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "stack.utils.supabase";
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),145,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,145,5,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"ending session",null,null,null,null,null,null,null,null));
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
var inst_97595 = inst_97594();
var inst_97596 = stack.utils.supabase.client.auth;
var inst_97597 = inst_97596.signOut();
var inst_97598 = (function (){return (function (e){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "stack.utils.supabase";
var __id = new cljs.core.Keyword("stack.utils.supabase","signout-error","stack.utils.supabase/signout-error",300728263);
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

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"stack.utils.supabase",new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"column","column",2078222095),26,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs"], null),__ns,149,26,"file:/home/cormacc/nmd/products/connect/portal/src/stack/utils/supabase.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,e,null,null,null,null,null,null,null,null,null,null));
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
});
})();
var inst_97599 = promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(inst_97597,inst_97598);
var state_97601__$1 = (function (){var statearr_97636 = state_97601;
(statearr_97636[(7)] = inst_97595);

return statearr_97636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_97601__$1,inst_97599);
} else {
return null;
}
});
return (function() {
var stack$utils$supabase$sign_out_$_state_machine__33324__auto__ = null;
var stack$utils$supabase$sign_out_$_state_machine__33324__auto____0 = (function (){
var statearr_97642 = [null,null,null,null,null,null,null,null];
(statearr_97642[(0)] = stack$utils$supabase$sign_out_$_state_machine__33324__auto__);

(statearr_97642[(1)] = (1));

return statearr_97642;
});
var stack$utils$supabase$sign_out_$_state_machine__33324__auto____1 = (function (state_97601){
while(true){
var ret_value__33325__auto__ = (function (){try{while(true){
var result__33326__auto__ = switch__33323__auto__(state_97601);
if(cljs.core.keyword_identical_QMARK_(result__33326__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33326__auto__;
}
break;
}
}catch (e97647){var ex__33327__auto__ = e97647;
var statearr_97648_98120 = state_97601;
(statearr_97648_98120[(2)] = ex__33327__auto__);


if(cljs.core.seq((state_97601[(4)]))){
var statearr_97651_98121 = state_97601;
(statearr_97651_98121[(1)] = cljs.core.first((state_97601[(4)])));

} else {
throw ex__33327__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33325__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__98124 = state_97601;
state_97601 = G__98124;
continue;
} else {
return ret_value__33325__auto__;
}
break;
}
});
stack$utils$supabase$sign_out_$_state_machine__33324__auto__ = function(state_97601){
switch(arguments.length){
case 0:
return stack$utils$supabase$sign_out_$_state_machine__33324__auto____0.call(this);
case 1:
return stack$utils$supabase$sign_out_$_state_machine__33324__auto____1.call(this,state_97601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$utils$supabase$sign_out_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$0 = stack$utils$supabase$sign_out_$_state_machine__33324__auto____0;
stack$utils$supabase$sign_out_$_state_machine__33324__auto__.cljs$core$IFn$_invoke$arity$1 = stack$utils$supabase$sign_out_$_state_machine__33324__auto____1;
return stack$utils$supabase$sign_out_$_state_machine__33324__auto__;
})()
})();
var state__33450__auto__ = (function (){var statearr_97654 = f__33449__auto__();
(statearr_97654[(6)] = c__33448__auto__);

return statearr_97654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33450__auto__);
}));

return c__33448__auto__;
});
stack.utils.supabase.auth_component = (function stack$utils$supabase$auth_component(){
var f__46985__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___98126 = stack.utils.supabase.auth_component.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98126)){
var f__46909__auto___98127 = temp__5823__auto___98126;
(f__46909__auto___98127.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98127.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98127.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(module$node_modules$$supabase$auth_ui_react$dist$index_cjs.Auth,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"supabaseClient","supabaseClient",-1103632658),stack.utils.supabase.client,new cljs.core.Keyword(null,"appearance","appearance",-216383432),({"theme": module$node_modules$$supabase$auth_ui_shared$dist$index.ThemeSupa})], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__97662 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__97663 = stack.utils.supabase.auth_component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__97663);

try{return f__46985__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__97662);
}} else {
return f__46985__auto__();
}
});

(stack.utils.supabase.auth_component.uix_component_QMARK_ = true);

(stack.utils.supabase.auth_component.displayName = "stack.utils.supabase/auth-component");

Object.defineProperty(stack.utils.supabase.auth_component,"name",(function (){var obj97667 = ({"value":"stack.utils.supabase/auth-component"});
return obj97667;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98130 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98130.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98130.cljs$core$IFn$_invoke$arity$4(stack.utils.supabase.auth_component,"",null,null) : sig__46918__auto___98130.call(null, stack.utils.supabase.auth_component,"",null,null));

window.uix.dev.register_BANG_(stack.utils.supabase.auth_component,stack.utils.supabase.auth_component.displayName);

(stack.utils.supabase.auth_component.fast_refresh_signature = sig__46918__auto___98130);
} else {
}
} else {
}


//# sourceMappingURL=stack.utils.supabase.js.map
