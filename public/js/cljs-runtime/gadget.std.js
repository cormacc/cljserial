goog.provide('gadget.std');
gadget.std.debounce = (function gadget$std$debounce(f,ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__33483__auto___61353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33484__auto__ = (function (){var switch__33346__auto__ = (function (state_61308){
var state_val_61311 = (state_61308[(1)]);
if((state_val_61311 === (7))){
var inst_61275 = (state_61308[(7)]);
var inst_61294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_61275);
var state_61308__$1 = (function (){var statearr_61321 = state_61308;
(statearr_61321[(8)] = inst_61294);

return statearr_61321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61308__$1,(9),c);
} else {
if((state_val_61311 === (1))){
var state_61308__$1 = state_61308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61308__$1,(2),c);
} else {
if((state_val_61311 === (4))){
var inst_61305 = (state_61308[(2)]);
var state_61308__$1 = state_61308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61308__$1,inst_61305);
} else {
if((state_val_61311 === (6))){
var inst_61286 = (state_61308[(9)]);
var inst_61275 = inst_61286;
var state_61308__$1 = (function (){var statearr_61322 = state_61308;
(statearr_61322[(7)] = inst_61275);

return statearr_61322;
})();
var statearr_61323_61354 = state_61308__$1;
(statearr_61323_61354[(2)] = null);

(statearr_61323_61354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61311 === (3))){
var inst_61280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61281 = cljs.core.async.timeout(ms);
var inst_61282 = [c,inst_61281];
var inst_61283 = (new cljs.core.PersistentVector(null,2,(5),inst_61280,inst_61282,null));
var state_61308__$1 = state_61308;
return cljs.core.async.ioc_alts_BANG_(state_61308__$1,(5),inst_61283);
} else {
if((state_val_61311 === (2))){
var inst_61274 = (state_61308[(2)]);
var inst_61275 = inst_61274;
var state_61308__$1 = (function (){var statearr_61326 = state_61308;
(statearr_61326[(7)] = inst_61275);

return statearr_61326;
})();
var statearr_61328_61355 = state_61308__$1;
(statearr_61328_61355[(2)] = null);

(statearr_61328_61355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61311 === (9))){
var inst_61297 = (state_61308[(2)]);
var inst_61275 = inst_61297;
var state_61308__$1 = (function (){var statearr_61332 = state_61308;
(statearr_61332[(7)] = inst_61275);

return statearr_61332;
})();
var statearr_61334_61356 = state_61308__$1;
(statearr_61334_61356[(2)] = null);

(statearr_61334_61356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61311 === (5))){
var inst_61285 = (state_61308[(2)]);
var inst_61286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61285,(0),null);
var inst_61287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61285,(1),null);
var inst_61288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61287,c);
var state_61308__$1 = (function (){var statearr_61338 = state_61308;
(statearr_61338[(9)] = inst_61286);

return statearr_61338;
})();
if(inst_61288){
var statearr_61339_61357 = state_61308__$1;
(statearr_61339_61357[(1)] = (6));

} else {
var statearr_61340_61358 = state_61308__$1;
(statearr_61340_61358[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61311 === (8))){
var inst_61301 = (state_61308[(2)]);
var state_61308__$1 = state_61308;
var statearr_61343_61359 = state_61308__$1;
(statearr_61343_61359[(2)] = inst_61301);

(statearr_61343_61359[(1)] = (4));


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
});
return (function() {
var gadget$std$debounce_$_state_machine__33347__auto__ = null;
var gadget$std$debounce_$_state_machine__33347__auto____0 = (function (){
var statearr_61344 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61344[(0)] = gadget$std$debounce_$_state_machine__33347__auto__);

(statearr_61344[(1)] = (1));

return statearr_61344;
});
var gadget$std$debounce_$_state_machine__33347__auto____1 = (function (state_61308){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_61308);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e61347){var ex__33350__auto__ = e61347;
var statearr_61348_61360 = state_61308;
(statearr_61348_61360[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_61308[(4)]))){
var statearr_61349_61361 = state_61308;
(statearr_61349_61361[(1)] = cljs.core.first((state_61308[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61362 = state_61308;
state_61308 = G__61362;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
gadget$std$debounce_$_state_machine__33347__auto__ = function(state_61308){
switch(arguments.length){
case 0:
return gadget$std$debounce_$_state_machine__33347__auto____0.call(this);
case 1:
return gadget$std$debounce_$_state_machine__33347__auto____1.call(this,state_61308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gadget$std$debounce_$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = gadget$std$debounce_$_state_machine__33347__auto____0;
gadget$std$debounce_$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = gadget$std$debounce_$_state_machine__33347__auto____1;
return gadget$std$debounce_$_state_machine__33347__auto__;
})()
})();
var state__33485__auto__ = (function (){var statearr_61350 = f__33484__auto__();
(statearr_61350[(6)] = c__33483__auto___61353);

return statearr_61350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33485__auto__);
}));


return (function() { 
var G__61363__delegate = function (args){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__5002__auto__ = args;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
};
var G__61363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61364__i = 0, G__61364__a = new Array(arguments.length -  0);
while (G__61364__i < G__61364__a.length) {G__61364__a[G__61364__i] = arguments[G__61364__i + 0]; ++G__61364__i;}
  args = new cljs.core.IndexedSeq(G__61364__a,0,null);
} 
return G__61363__delegate.call(this,args);};
G__61363.cljs$lang$maxFixedArity = 0;
G__61363.cljs$lang$applyTo = (function (arglist__61365){
var args = cljs.core.seq(arglist__61365);
return G__61363__delegate(args);
});
G__61363.cljs$core$IFn$_invoke$arity$variadic = G__61363__delegate;
return G__61363;
})()
;
});
gadget.std.date_QMARK_ = (function gadget$std$date_QMARK_(v){
return (v instanceof Date);
});
gadget.std.state_data = (function gadget$std$state_data(state,label){
var map__61351 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),label], null));
var map__61351__$1 = cljs.core.__destructure_map(map__61351);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61351__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_(ref)){
return cljs.core.deref(ref);
} else {
return data;
}
});
gadget.std.pad = (function gadget$std$pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});

//# sourceMappingURL=gadget.std.js.map
