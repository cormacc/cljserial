goog.provide('cljserial.utils.hsm');
cljserial.utils.hsm.Id = new cljs.core.Keyword(null,"keyword","keyword",811389747);
cljserial.utils.hsm.State = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
cljserial.utils.hsm.Context = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_state","_state",-791882382),cljserial.utils.hsm.State], null)], null);
cljserial.utils.hsm.get_state = (function cljserial$utils$hsm$get_state(context){
return new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(context);
});
cljserial.utils.hsm.in_state = (function cljserial$utils$hsm$in_state(current_state,match_state){
return cljs.core.some((function (p1__56334_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match_state,p1__56334_SHARP_);
}),cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state], null)));
});
cljserial.utils.hsm.get_state_events = (function cljserial$utils$hsm$get_state_events(state){
if(cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"on","on",173873944))){
return cljs.core.keys(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(state));
} else {
return null;
}
});
cljserial.utils.hsm.find_machine_events = (function cljserial$utils$hsm$find_machine_events(top_state){
return cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,cljserial.utils.collections.find_all(top_state,new cljs.core.Keyword(null,"on","on",173873944)))));
});
cljserial.utils.hsm.recurse_state_events = (function cljserial$utils$hsm$recurse_state_events(var_args){
var G__56336 = arguments.length;
switch (G__56336) {
case 2:
return cljserial.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljserial.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljserial.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$2 = (function (parent_state,state_v){
return cljserial.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$3(parent_state,cljs.core.flatten(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state_v], null)),cljs.core.PersistentVector.EMPTY);
}));

(cljserial.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$3 = (function (parent_state,state_v,event_v){
while(true){
if(cljs.core.empty_QMARK_(state_v)){
return cljs.core.set(event_v);
} else {
var vec__56337 = state_v;
var seq__56338 = cljs.core.seq(vec__56337);
var first__56339 = cljs.core.first(seq__56338);
var seq__56338__$1 = cljs.core.next(seq__56338);
var state_v_first = first__56339;
var state_v_rest = seq__56338__$1;
var next_state = (function (){var G__56340 = new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(parent_state);
return (state_v_first.cljs$core$IFn$_invoke$arity$1 ? state_v_first.cljs$core$IFn$_invoke$arity$1(G__56340) : state_v_first.call(null, G__56340));
})();
var event_v_new = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,event_v,cljserial.utils.hsm.get_state_events(next_state));
var G__56412 = next_state;
var G__56413 = state_v_rest;
var G__56414 = event_v_new;
parent_state = G__56412;
state_v = G__56413;
event_v = G__56414;
continue;
}
break;
}
}));

(cljserial.utils.hsm.recurse_state_events.cljs$lang$maxFixedArity = 3);

cljserial.utils.hsm.handled_events = (function cljserial$utils$hsm$handled_events(var_args){
var G__56342 = arguments.length;
switch (G__56342) {
case 1:
return cljserial.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljserial.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljserial.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$1 = (function (machine){
return cljserial.utils.hsm.find_machine_events(machine);
}));

(cljserial.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$2 = (function (machine,state_v){
return cljserial.utils.hsm.recurse_state_events.cljs$core$IFn$_invoke$arity$2(machine,state_v);
}));

(cljserial.utils.hsm.handled_events.cljs$lang$maxFixedArity = 2);

cljserial.utils.hsm.can_handle = (function cljserial$utils$hsm$can_handle(machine,state_v,event_id){
return cljs.core.contains_QMARK_(cljserial.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$2(machine,state_v),event_id);
});
cljserial.utils.hsm.handle = (function cljserial$utils$hsm$handle(hsm_id,hsm_impl,event,hsm_context){
var vec__56343 = event;
var seq__56344 = cljs.core.seq(vec__56343);
var first__56345 = cljs.core.first(seq__56344);
var seq__56344__$1 = cljs.core.next(seq__56344);
var event_id = first__56345;
var event_params = seq__56344__$1;
var state = cljserial.utils.hsm.get_state(hsm_context);
if((!(cljserial.utils.hsm.can_handle(hsm_impl,state,event_id)))){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("handler","no-handler-this-state","handler/no-handler-this-state",258450000),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsm_id),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_id)," not handled!"].join(''),new cljs.core.Keyword(null,"line","line",212345235),62], null)),null);
} else {
}

return hsm_context;
} else {
var new_context = (function (){var G__56346 = hsm_impl;
var G__56347 = hsm_context;
var G__56348 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),event_id,new cljs.core.Keyword(null,"data","data",-232669377),event_params], null);
return (statecharts.core.transition.cljs$core$IFn$_invoke$arity$3 ? statecharts.core.transition.cljs$core$IFn$_invoke$arity$3(G__56346,G__56347,G__56348) : statecharts.core.transition.call(null, G__56346,G__56347,G__56348));
})();
var new_state = cljserial.utils.hsm.get_state(new_context);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("handle","transition","handle/transition",1957038607),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsm_id),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_id),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_state)].join(''),new cljs.core.Keyword(null,"line","line",212345235),66], null)),null);
} else {
}

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("handle","event","handle/event",-915055606),event,new cljs.core.Keyword(null,"line","line",212345235),67], null)),null);
} else {
}

return new_context;
}
});
cljserial.utils.hsm.sub_name = (function cljserial$utils$hsm$sub_name(hsm_id,sub_tag){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(hsm_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_tag)].join(''));
});
cljserial.utils.hsm.sub_context_name = (function cljserial$utils$hsm$sub_context_name(hsm_id){
return cljserial.utils.hsm.sub_name(hsm_id,"context");
});
cljserial.utils.hsm.sub_state_name = (function cljserial$utils$hsm$sub_state_name(hsm_id){
return cljserial.utils.hsm.sub_name(hsm_id,"state");
});
var G__56354_56427 = new cljs.core.Keyword(null,"hsm-init","hsm-init",-992358119);
var G__56355_56428 = (function (app_db,p__56357){
var vec__56358 = p__56357;
var _event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56358,(0),null);
var hsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56358,(1),null);
var hsm_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hsm);
var context = (statecharts.core.initialize.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.initialize.cljs$core$IFn$_invoke$arity$1(hsm) : statecharts.core.initialize.call(null, hsm));
var state = cljserial.utils.hsm.get_state(context);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"config","config",994861415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("init","transition","init/transition",764749175),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsm_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_event_id),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join(''),new cljs.core.Keyword(null,"line","line",212345235),87], null)),null);
} else {
}

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"trace","trace",-1082747415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("init","context","init/context",-822687993),context,new cljs.core.Keyword(null,"line","line",212345235),88], null)),null);
} else {
}

return cljs.core.assoc_in(app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsm_id], null),context);
});
(cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$2(G__56354_56427,G__56355_56428) : cljserial.utils.dbfx.reg_event_db.call(null, G__56354_56427,G__56355_56428));
/**
 * Define a subscription for the context of a given statemachine ID
 */
cljserial.utils.hsm.reg_sub_context = (function cljserial$utils$hsm$reg_sub_context(hsm_id){
var sub_name = cljserial.utils.hsm.sub_context_name(hsm_id);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"config","config",994861415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("reg-sub","context","reg-sub/context",-1788425346),hsm_id,new cljs.core.Keyword(null,"line","line",212345235),98], null)),null);
} else {
}

var G__56365 = sub_name;
var G__56366 = (function (app_db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db,hsm_id);
});
return (cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56365,G__56366) : cljserial.utils.dbfx.reg_sub.call(null, G__56365,G__56366));
});
/**
 * Define a subscription for the state of a given statemachine ID
 */
cljserial.utils.hsm.reg_sub_state = (function cljserial$utils$hsm$reg_sub_state(hsm_id){
var sub_name = cljserial.utils.hsm.sub_state_name(hsm_id);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"config","config",994861415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("reg-sub","state","reg-sub/state",-908553450),hsm_id,new cljs.core.Keyword(null,"line","line",212345235),110], null)),null);
} else {
}

var G__56367 = sub_name;
var G__56368 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__56369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljserial.utils.hsm.sub_context_name(hsm_id)], null);
var G__56370 = (function (hsm_context,_){
return cljserial.utils.hsm.get_state(hsm_context);
});
return (cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4 ? cljserial.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$4(G__56367,G__56368,G__56369,G__56370) : cljserial.utils.dbfx.reg_sub.call(null, G__56367,G__56368,G__56369,G__56370));
});
cljserial.utils.hsm.reg_event_handler = (function cljserial$utils$hsm$reg_event_handler(hsm_id,event_id,hsm_impl){
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hsm-event-handler","hsm-event-handler",-2016842356),["Registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_id)," handler for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsm_id)].join(''),new cljs.core.Keyword(null,"line","line",212345235),119], null)),null);
} else {
}

var G__56373 = event_id;
var G__56374 = (function (){var G__56376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsm_id], null);
return (cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__56376) : cljserial.utils.dbfx.path.call(null, G__56376));
})();
var G__56375 = (function (hsm_context,event){
return cljserial.utils.hsm.handle(hsm_id,hsm_impl,event,hsm_context);
});
return (cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? cljserial.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__56373,G__56374,G__56375) : cljserial.utils.dbfx.reg_event_db.call(null, G__56373,G__56374,G__56375));
});
cljserial.utils.hsm.reg_event_handlers = (function cljserial$utils$hsm$reg_event_handlers(hsm_data){
var hsm_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hsm_data);
var event_ids = cljserial.utils.hsm.handled_events.cljs$core$IFn$_invoke$arity$1(hsm_data);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("register","handlers","register/handlers",-606504656),["Registering ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(event_ids))," event handlers for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsm_id)].join(''),new cljs.core.Keyword(null,"line","line",212345235),131], null)),null);
} else {
}

var seq__56382 = cljs.core.seq(event_ids);
var chunk__56383 = null;
var count__56384 = (0);
var i__56385 = (0);
while(true){
if((i__56385 < count__56384)){
var event_id = chunk__56383.cljs$core$IIndexed$_nth$arity$2(null, i__56385);
cljserial.utils.hsm.reg_event_handler(hsm_id,event_id,hsm_data);


var G__56442 = seq__56382;
var G__56443 = chunk__56383;
var G__56444 = count__56384;
var G__56445 = (i__56385 + (1));
seq__56382 = G__56442;
chunk__56383 = G__56443;
count__56384 = G__56444;
i__56385 = G__56445;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56382);
if(temp__5804__auto__){
var seq__56382__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56382__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56382__$1);
var G__56448 = cljs.core.chunk_rest(seq__56382__$1);
var G__56449 = c__5568__auto__;
var G__56450 = cljs.core.count(c__5568__auto__);
var G__56451 = (0);
seq__56382 = G__56448;
chunk__56383 = G__56449;
count__56384 = G__56450;
i__56385 = G__56451;
continue;
} else {
var event_id = cljs.core.first(seq__56382__$1);
cljserial.utils.hsm.reg_event_handler(hsm_id,event_id,hsm_data);


var G__56452 = cljs.core.next(seq__56382__$1);
var G__56453 = null;
var G__56454 = (0);
var G__56455 = (0);
seq__56382 = G__56452;
chunk__56383 = G__56453;
count__56384 = G__56454;
i__56385 = G__56455;
continue;
}
} else {
return null;
}
}
break;
}
});
cljserial.utils.hsm.register = (function cljserial$utils$hsm$register(hsm_data){
var hsm_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(hsm_data);
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.utils.hsm",new cljs.core.Keyword(null,"config","config",994861415),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("register","on-dom-content-loaded","register/on-dom-content-loaded",358923162),hsm_id,new cljs.core.Keyword(null,"line","line",212345235),138], null)),null);
} else {
}

document.addEventListener("DOMContentLoaded",(function (){
var G__56391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hsm-init","hsm-init",-992358119),hsm_data], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56391) : cljserial.utils.dbfx.dispatch.call(null, G__56391));
}));

cljserial.utils.hsm.reg_sub_context(hsm_id);

cljserial.utils.hsm.reg_sub_state(hsm_id);

return cljserial.utils.hsm.reg_event_handlers(hsm_data);
});
cljserial.utils.hsm.use_sub_context = (function cljserial$utils$hsm$use_sub_context(hsm_id){
var G__56394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljserial.utils.hsm.sub_context_name(hsm_id)], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__56394) : cljserial.utils.dbfx.use_sub.call(null, G__56394));
});
cljserial.utils.hsm.use_sub_state = (function cljserial$utils$hsm$use_sub_state(hsm_id){
var G__56400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljserial.utils.hsm.sub_state_name(hsm_id)], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__56400) : cljserial.utils.dbfx.use_sub.call(null, G__56400));
});

//# sourceMappingURL=cljserial.utils.hsm.js.map
