goog.provide('cljserial.dispatch');
cljserial.dispatch.interpolate_actions = (function cljserial$dispatch$interpolate_actions(event,actions){
return clojure.walk.postwalk((function (x){
if((x instanceof cljs.core.Keyword)){
var G__64575 = x;
var G__64575__$1 = (((G__64575 instanceof cljs.core.Keyword))?G__64575.fqn:null);
switch (G__64575__$1) {
case "event/target.id":
return event.target.id;

break;
case "event/target.value":
return event.target.value;

break;
case "event/target.value-as-int":
return event.target.valueAsNumber;

break;
case "event/target.value-as-keyword":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.target.value);

break;
case "event/key":
return event.key;

break;
default:
return x;

}
} else {
return x;

}
}),actions);
});
cljserial.dispatch.execute_actions = (function cljserial$dispatch$execute_actions(actions){
var seq__64578 = cljs.core.seq(actions);
var chunk__64579 = null;
var count__64580 = (0);
var i__64581 = (0);
while(true){
if((i__64581 < count__64580)){
var vec__64620 = chunk__64579.cljs$core$IIndexed$_nth$arity$2(null, i__64581);
var seq__64621 = cljs.core.seq(vec__64620);
var first__64622 = cljs.core.first(seq__64621);
var seq__64621__$1 = cljs.core.next(seq__64621);
var action = first__64622;
var args = seq__64621__$1;
var G__64623_64659 = action;
var G__64623_64660__$1 = (((G__64623_64659 instanceof cljs.core.Keyword))?G__64623_64659.fqn:null);
switch (G__64623_64660__$1) {
case "view/assoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc,args);

break;
case "view/assoc-in":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc_in,args);

break;
case "view/dissoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.dissoc,args);

break;
case "domain/transact":
var current_db_64662 = new cljs.core.Keyword(null,"domain-db","domain-db",143141236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljserial.model._BANG_state));
var new_db_64663 = stack.utils.datascript.transact_BANG_(current_db_64662,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljserial.model._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"domain-db","domain-db",143141236),new_db_64663);

break;
case "user/input":
var vec__64624_64664 = args;
var seq__64625_64665 = cljs.core.seq(vec__64624_64664);
var first__64626_64666 = cljs.core.first(seq__64625_64665);
var seq__64625_64667__$1 = cljs.core.next(seq__64625_64665);
var id_64668 = first__64626_64666;
var value_64669 = seq__64625_64667__$1;
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),id_64668], null),value_64669);

break;
case "user/on-key":
var vec__64627_64670 = args;
var key_exp_64671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64627_64670,(0),null);
var key_act_64672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64627_64670,(1),null);
var nested_actions_64673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64627_64670,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_exp_64671,key_act_64672)){
(cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1 ? cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1(nested_actions_64673) : cljserial.dispatch.execute_actions.call(null, nested_actions_64673));
} else {
}

break;
case "user/sign-out":
((function (seq__64578,chunk__64579,count__64580,i__64581,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "cljserial.dispatch";
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
var signal__48019__auto__ = (new cljs.core.Delay(((function (seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),70,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,70,7,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"IMPLEMENT ME!",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
();

break;
case "file/write":
var vec__64630_64674 = args;
var path_64675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64630_64674,(0),null);
var data_64676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64630_64674,(1),null);
promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.filestore.write_PLUS_(path_64675,data_64676),((function (seq__64578,chunk__64579,count__64580,i__64581,vec__64630_64674,path_64675,data_64676,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (p1__64576_SHARP_){
var G__64633 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","update-index","file/update-index",1705478451),p1__64576_SHARP_], null)], null);
return (cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1 ? cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1(G__64633) : cljserial.dispatch.execute_actions.call(null, G__64633));
});})(seq__64578,chunk__64579,count__64580,i__64581,vec__64630_64674,path_64675,data_64676,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
);

break;
case "file/read":
promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.filestore.read_PLUS_(cljs.core.first(args)),((function (seq__64578,chunk__64579,count__64580,i__64581,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (p1__64577_SHARP_){
var G__64634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","update-index","file/update-index",1705478451),p1__64577_SHARP_], null)], null);
return (cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1 ? cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1(G__64634) : cljserial.dispatch.execute_actions.call(null, G__64634));
});})(seq__64578,chunk__64579,count__64580,i__64581,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
);

break;
case "file/update-index":
var map__64635_64677 = args;
var map__64635_64678__$1 = cljs.core.__destructure_map(map__64635_64677);
var path_64679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64635_64678__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data_64680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64635_64678__$1,new cljs.core.Keyword(null,"data","data",-232669377));
((function (seq__64578,chunk__64579,count__64580,i__64581,map__64635_64677,map__64635_64678__$1,path_64679,data_64680,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "cljserial.dispatch";
var __id = new cljs.core.Keyword("cljserial.dispatch","file-index-updated","cljserial.dispatch/file-index-updated",-626605988);
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
var signal__48019__auto__ = (new cljs.core.Delay(((function (seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,map__64635_64677,map__64635_64678__$1,path_64679,data_64680,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),88,new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,88,9,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"path","path",-188191168),path_64679,new cljs.core.Keyword(null,"data","data",-232669377),data_64680], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,map__64635_64677,map__64635_64678__$1,path_64679,data_64680,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,map__64635_64677,map__64635_64678__$1,path_64679,data_64680,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
();

cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filestore","filestore",1449104233),new cljs.core.Keyword(null,"entries","entries",-86943161),path_64679], null),args);

break;
case "webserial":
var event_type_64681 = cljs.core.first(args);
var event_data_64682 = cljs.core.rest(args);
var current_context_64683 = new cljs.core.Keyword(null,"webserial","webserial",-1669376567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljserial.model._BANG_state));
var new_context_64684 = (function (){var G__64636 = stack.statecharts.webserial.controller;
var G__64637 = current_context_64683;
var G__64638 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),event_type_64681,new cljs.core.Keyword(null,"data","data",-232669377),event_data_64682], null);
return (statecharts.core.transition.cljs$core$IFn$_invoke$arity$3 ? statecharts.core.transition.cljs$core$IFn$_invoke$arity$3(G__64636,G__64637,G__64638) : statecharts.core.transition.call(null, G__64636,G__64637,G__64638));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljserial.model._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new_context_64684);

break;
default:
((function (seq__64578,chunk__64579,count__64580,i__64581,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "cljserial.dispatch";
var __id = new cljs.core.Keyword("cljserial.dispatch","action-unrecognised","cljserial.dispatch/action-unrecognised",-1378996314);
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
var signal__48019__auto__ = (new cljs.core.Delay(((function (seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args){
return (function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),107,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,107,7,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"args","args",1315556576),args], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,G__64623_64659,G__64623_64660__$1,vec__64620,seq__64621,first__64622,seq__64621__$1,action,args))
();

}


var G__64688 = seq__64578;
var G__64689 = chunk__64579;
var G__64690 = count__64580;
var G__64691 = (i__64581 + (1));
seq__64578 = G__64688;
chunk__64579 = G__64689;
count__64580 = G__64690;
i__64581 = G__64691;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__64578);
if(temp__5823__auto__){
var seq__64578__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64578__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__64578__$1);
var G__64692 = cljs.core.chunk_rest(seq__64578__$1);
var G__64693 = c__5525__auto__;
var G__64694 = cljs.core.count(c__5525__auto__);
var G__64695 = (0);
seq__64578 = G__64692;
chunk__64579 = G__64693;
count__64580 = G__64694;
i__64581 = G__64695;
continue;
} else {
var vec__64639 = cljs.core.first(seq__64578__$1);
var seq__64640 = cljs.core.seq(vec__64639);
var first__64641 = cljs.core.first(seq__64640);
var seq__64640__$1 = cljs.core.next(seq__64640);
var action = first__64641;
var args = seq__64640__$1;
var G__64642_64696 = action;
var G__64642_64697__$1 = (((G__64642_64696 instanceof cljs.core.Keyword))?G__64642_64696.fqn:null);
switch (G__64642_64697__$1) {
case "view/assoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc,args);

break;
case "view/assoc-in":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc_in,args);

break;
case "view/dissoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.dissoc,args);

break;
case "domain/transact":
var current_db_64699 = new cljs.core.Keyword(null,"domain-db","domain-db",143141236).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljserial.model._BANG_state));
var new_db_64700 = stack.utils.datascript.transact_BANG_(current_db_64699,args);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljserial.model._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"domain-db","domain-db",143141236),new_db_64700);

break;
case "user/input":
var vec__64643_64701 = args;
var seq__64644_64702 = cljs.core.seq(vec__64643_64701);
var first__64645_64703 = cljs.core.first(seq__64644_64702);
var seq__64644_64704__$1 = cljs.core.next(seq__64644_64702);
var id_64705 = first__64645_64703;
var value_64706 = seq__64644_64704__$1;
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),id_64705], null),value_64706);

break;
case "user/on-key":
var vec__64646_64707 = args;
var key_exp_64708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64646_64707,(0),null);
var key_act_64709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64646_64707,(1),null);
var nested_actions_64710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64646_64707,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_exp_64708,key_act_64709)){
(cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1 ? cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1(nested_actions_64710) : cljserial.dispatch.execute_actions.call(null, nested_actions_64710));
} else {
}

break;
case "user/sign-out":
((function (seq__64578,chunk__64579,count__64580,i__64581,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"log","log",-1595516004);
var __ns = "cljserial.dispatch";
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
var signal__48019__auto__ = (new cljs.core.Delay(((function (seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),70,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,70,7,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,null,null,"IMPLEMENT ME!",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
();

break;
case "file/write":
var vec__64649_64711 = args;
var path_64712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64649_64711,(0),null);
var data_64713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64649_64711,(1),null);
promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.filestore.write_PLUS_(path_64712,data_64713),((function (seq__64578,chunk__64579,count__64580,i__64581,vec__64649_64711,path_64712,data_64713,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (p1__64576_SHARP_){
var G__64652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","update-index","file/update-index",1705478451),p1__64576_SHARP_], null)], null);
return (cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1 ? cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1(G__64652) : cljserial.dispatch.execute_actions.call(null, G__64652));
});})(seq__64578,chunk__64579,count__64580,i__64581,vec__64649_64711,path_64712,data_64713,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
);

break;
case "file/read":
promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.filestore.read_PLUS_(cljs.core.first(args)),((function (seq__64578,chunk__64579,count__64580,i__64581,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (p1__64577_SHARP_){
var G__64653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("file","update-index","file/update-index",1705478451),p1__64577_SHARP_], null)], null);
return (cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1 ? cljserial.dispatch.execute_actions.cljs$core$IFn$_invoke$arity$1(G__64653) : cljserial.dispatch.execute_actions.call(null, G__64653));
});})(seq__64578,chunk__64579,count__64580,i__64581,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
);

break;
case "file/update-index":
var map__64654_64714 = args;
var map__64654_64715__$1 = cljs.core.__destructure_map(map__64654_64714);
var path_64716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64654_64715__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data_64717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64654_64715__$1,new cljs.core.Keyword(null,"data","data",-232669377));
((function (seq__64578,chunk__64579,count__64580,i__64581,map__64654_64714,map__64654_64715__$1,path_64716,data_64717,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "cljserial.dispatch";
var __id = new cljs.core.Keyword("cljserial.dispatch","file-index-updated","cljserial.dispatch/file-index-updated",-626605988);
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
var signal__48019__auto__ = (new cljs.core.Delay(((function (seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,map__64654_64714,map__64654_64715__$1,path_64716,data_64717,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),88,new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,88,9,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"path","path",-188191168),path_64716,new cljs.core.Keyword(null,"data","data",-232669377),data_64717], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,map__64654_64714,map__64654_64715__$1,path_64716,data_64717,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,map__64654_64714,map__64654_64715__$1,path_64716,data_64717,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
();

cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,cljserial.model._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filestore","filestore",1449104233),new cljs.core.Keyword(null,"entries","entries",-86943161),path_64716], null),args);

break;
case "webserial":
var event_type_64718 = cljs.core.first(args);
var event_data_64719 = cljs.core.rest(args);
var current_context_64720 = new cljs.core.Keyword(null,"webserial","webserial",-1669376567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljserial.model._BANG_state));
var new_context_64721 = (function (){var G__64655 = stack.statecharts.webserial.controller;
var G__64656 = current_context_64720;
var G__64657 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),event_type_64718,new cljs.core.Keyword(null,"data","data",-232669377),event_data_64719], null);
return (statecharts.core.transition.cljs$core$IFn$_invoke$arity$3 ? statecharts.core.transition.cljs$core$IFn$_invoke$arity$3(G__64655,G__64656,G__64657) : statecharts.core.transition.call(null, G__64655,G__64656,G__64657));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljserial.model._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new_context_64721);

break;
default:
((function (seq__64578,chunk__64579,count__64580,i__64581,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "cljserial.dispatch";
var __id = new cljs.core.Keyword("cljserial.dispatch","action-unrecognised","cljserial.dispatch/action-unrecognised",-1378996314);
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
var signal__48019__auto__ = (new cljs.core.Delay(((function (seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__){
return (function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),107,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,107,7,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"args","args",1315556576),args], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,__inst,__thread,__root0,__otel_context1,__uid,__root1,__run_result,__run_fn_form,__kind,__ns,__id,__level,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
,null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
});})(seq__64578,chunk__64579,count__64580,i__64581,G__64642_64696,G__64642_64697__$1,vec__64639,seq__64640,first__64641,seq__64640__$1,action,args,seq__64578__$1,temp__5823__auto__))
();

}


var G__64722 = cljs.core.next(seq__64578__$1);
var G__64723 = null;
var G__64724 = (0);
var G__64725 = (0);
seq__64578 = G__64722;
chunk__64579 = G__64723;
count__64580 = G__64724;
i__64581 = G__64725;
continue;
}
} else {
return null;
}
}
break;
}
});
cljserial.dispatch.handle_events = (function cljserial$dispatch$handle_events(event_data,actions){
(function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "cljserial.dispatch";
var __id = new cljs.core.Keyword("cljserial.dispatch","handle-event","cljserial.dispatch/handle-event",-221076291);
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
var signal__48019__auto__ = (new cljs.core.Delay((function (){

var signal__48010__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),"cljserial.dispatch",new cljs.core.Keyword(null,"line","line",212345235),110,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"file","file",-1269645878),"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs"], null),__ns,110,3,"file:/home/cormacc/dev/clj/cljserial/src/cljserial/dispatch.cljs",null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139),event_data,new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null),null,null,null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__48011__auto__ = temp__5821__auto__;
return (sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__48011__auto__.cljs$core$IFn$_invoke$arity$1(signal__48010__auto__) : sig_middleware__48011__auto__.call(null, signal__48010__auto__));
} else {
return signal__48010__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__48019__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__48019__auto__) : __run_result.call(null, signal__48019__auto__));
} else {
return true;
}
} else {
return null;
}
})();

return cljserial.dispatch.execute_actions(cljserial.dispatch.interpolate_actions(new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512).cljs$core$IFn$_invoke$arity$1(event_data),actions));
});

//# sourceMappingURL=cljserial.dispatch.js.map
