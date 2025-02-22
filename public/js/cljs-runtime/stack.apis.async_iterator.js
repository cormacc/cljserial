goog.provide('stack.apis.async_iterator');
/**
 * Create an async iterator object from `iterable`. `iterable` must have a method
 *   definition for `js/Symbol.asyncIterator`.
 */
stack.apis.async_iterator.get_iterator = (function stack$apis$async_iterator$get_iterator(iterable){
return cljs.core.js_invoke(iterable,Symbol.asyncIterator);
});
/**
 * Run `step` when `value` is taken from `output` channel.
 */
stack.apis.async_iterator.push_next = (function stack$apis$async_iterator$push_next(output,value,step){
var c__33483__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33484__auto__ = (function (){var switch__33346__auto__ = (function (state_63144){
var state_val_63145 = (state_63144[(1)]);
if((state_val_63145 === (1))){
var state_63144__$1 = state_63144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63144__$1,(2),output,value);
} else {
if((state_val_63145 === (2))){
var inst_63136 = (state_63144[(2)]);
var state_63144__$1 = state_63144;
if(cljs.core.truth_(inst_63136)){
var statearr_63151_63177 = state_63144__$1;
(statearr_63151_63177[(1)] = (3));

} else {
var statearr_63152_63178 = state_63144__$1;
(statearr_63152_63178[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63145 === (3))){
var inst_63138 = (step.cljs$core$IFn$_invoke$arity$0 ? step.cljs$core$IFn$_invoke$arity$0() : step.call(null, ));
var state_63144__$1 = state_63144;
var statearr_63153_63182 = state_63144__$1;
(statearr_63153_63182[(2)] = inst_63138);

(statearr_63153_63182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63145 === (4))){
var state_63144__$1 = state_63144;
var statearr_63154_63183 = state_63144__$1;
(statearr_63154_63183[(2)] = null);

(statearr_63154_63183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63145 === (5))){
var inst_63142 = (state_63144[(2)]);
var state_63144__$1 = state_63144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63144__$1,inst_63142);
} else {
return null;
}
}
}
}
}
});
return (function() {
var stack$apis$async_iterator$push_next_$_state_machine__33347__auto__ = null;
var stack$apis$async_iterator$push_next_$_state_machine__33347__auto____0 = (function (){
var statearr_63157 = [null,null,null,null,null,null,null];
(statearr_63157[(0)] = stack$apis$async_iterator$push_next_$_state_machine__33347__auto__);

(statearr_63157[(1)] = (1));

return statearr_63157;
});
var stack$apis$async_iterator$push_next_$_state_machine__33347__auto____1 = (function (state_63144){
while(true){
var ret_value__33348__auto__ = (function (){try{while(true){
var result__33349__auto__ = switch__33346__auto__(state_63144);
if(cljs.core.keyword_identical_QMARK_(result__33349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33349__auto__;
}
break;
}
}catch (e63158){var ex__33350__auto__ = e63158;
var statearr_63159_63184 = state_63144;
(statearr_63159_63184[(2)] = ex__33350__auto__);


if(cljs.core.seq((state_63144[(4)]))){
var statearr_63160_63185 = state_63144;
(statearr_63160_63185[(1)] = cljs.core.first((state_63144[(4)])));

} else {
throw ex__33350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63186 = state_63144;
state_63144 = G__63186;
continue;
} else {
return ret_value__33348__auto__;
}
break;
}
});
stack$apis$async_iterator$push_next_$_state_machine__33347__auto__ = function(state_63144){
switch(arguments.length){
case 0:
return stack$apis$async_iterator$push_next_$_state_machine__33347__auto____0.call(this);
case 1:
return stack$apis$async_iterator$push_next_$_state_machine__33347__auto____1.call(this,state_63144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stack$apis$async_iterator$push_next_$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$0 = stack$apis$async_iterator$push_next_$_state_machine__33347__auto____0;
stack$apis$async_iterator$push_next_$_state_machine__33347__auto__.cljs$core$IFn$_invoke$arity$1 = stack$apis$async_iterator$push_next_$_state_machine__33347__auto____1;
return stack$apis$async_iterator$push_next_$_state_machine__33347__auto__;
})()
})();
var state__33485__auto__ = (function (){var statearr_63162 = f__33484__auto__();
(statearr_63162[(6)] = c__33483__auto__);

return statearr_63162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33485__auto__);
}));

return c__33483__auto__;
});
/**
 * Pull the value from an async iterator `element`.
 */
stack.apis.async_iterator.take_value = (function stack$apis$async_iterator$take_value(element){
if(cljs.core.not(element.done)){
return element.value;
} else {
return null;
}
});
/**
 * Iteratively take values from async `iterator` and push them to channel
 *   `output`. By default, will close `output` when `iterator` is
 *   exhausted. Provide false `close?` argument to leave the output open.
 */
stack.apis.async_iterator.onto_chan = (function stack$apis$async_iterator$onto_chan(var_args){
var G__63165 = arguments.length;
switch (G__63165) {
case 2:
return stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (output,iterator){
return stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$3(output,iterator,true);
}));

(stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (output,iterator,close_QMARK_){
var step = (function (){
return stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$2(output,iterator);
});
return iterator.next().then((function (element){
var temp__5821__auto__ = stack.apis.async_iterator.take_value(element);
if(cljs.core.truth_(temp__5821__auto__)){
var value = temp__5821__auto__;
return stack.apis.async_iterator.push_next(output,value,step);
} else {
if(cljs.core.truth_(close_QMARK_)){
return cljs.core.async.close_BANG_(output);
} else {
return null;
}
}
}),(function (err){
return stack.apis.async_iterator.push_next(output,err,step);
}));
}));

(stack.apis.async_iterator.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Create an unbuffered `core.async` channel that pulls values from async
 *   `iterator`. Channel will close when `iterator` is exhausted.
 */
stack.apis.async_iterator.to_chan = (function stack$apis$async_iterator$to_chan(iterator){
var iter_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
stack.apis.async_iterator.onto_chan.cljs$core$IFn$_invoke$arity$2(iter_chan,iterator);

return iter_chan;
});

//# sourceMappingURL=stack.apis.async_iterator.js.map
