goog.provide('statecharts.impl');
statecharts.impl.canon_one_transition = (function statecharts$impl$canon_one_transition(x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),x], null);
}
});
statecharts.impl.canon_transitions = (function statecharts$impl$canon_transitions(x){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
return cljs.core.some(cljs.core.map_QMARK_,x);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(statecharts.impl.canon_one_transition,x);
} else {
if(cljs.core.map_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),x], null)], null);

}
}
});
statecharts.impl.canon_actions = (function statecharts$impl$canon_actions(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
statecharts.impl.canon_event = (function statecharts$impl$canon_event(x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),x], null);
}
});
statecharts.impl.T_Actions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),statecharts.impl.canon_actions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null);
/**
 * See `resolve-target` for the synatx of target definition.
 */
statecharts.impl.T_Target = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.keyword_QMARK_], null)], null);
statecharts.impl.T_Transition = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),statecharts.impl.canon_transitions], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Target], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null)], null)], null);
statecharts.impl.T_Entry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null);
statecharts.impl.T_Exit = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null);
statecharts.impl.T_DelayExpression = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.int_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null);
/**
 * Generated internal event for delayed transitions.
 */
statecharts.impl.T_DelayedEvent = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),cljs.core.keyword_QMARK_,statecharts.impl.T_Target,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
statecharts.impl.T_Event = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.keyword_QMARK_,statecharts.impl.T_DelayedEvent], null);
statecharts.impl.T_Transitions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),statecharts.impl.T_Event,statecharts.impl.T_Transition], null)], null);
statecharts.impl.T_Initial = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Target], null);
statecharts.impl.decode_delayed_map = (function statecharts$impl$decode_delayed_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__94775){
var vec__94777 = p__94775;
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94777,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94777,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__94771_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__94771_SHARP_,new cljs.core.Keyword(null,"delay","delay",-574225219),ms);
}),statecharts.impl.canon_transitions(target));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
statecharts.impl.decode_delayed_transitions = (function statecharts$impl$decode_delayed_transitions(x){
if(cljs.core.map_QMARK_(x)){
return statecharts.impl.decode_delayed_map(x);
} else {
return x;
}
});
statecharts.impl.T_DelayedTransition = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219),statecharts.impl.T_DelayExpression], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Target], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null)], null);
statecharts.impl.T_DelayedTransitions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),statecharts.impl.decode_delayed_transitions], null),statecharts.impl.T_DelayedTransition], null);
statecharts.impl.T_After = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_DelayedTransitions], null);
statecharts.impl.T_EventlessTransitions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Transition], null);
statecharts.impl.insert_eventless_transitions = (function statecharts$impl$insert_eventless_transitions(node){
var always = new cljs.core.Keyword(null,"always","always",-1772028770).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.not(always)){
return node;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(node,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.assoc,new cljs.core.Keyword("fsm","always","fsm/always",-1771917474),always);
}
});
statecharts.impl.T_Type = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null)], null);
statecharts.impl.T_States = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(statecharts.impl.insert_eventless_transitions,statecharts.delayed.insert_delayed_transitions)], null)], null),statecharts.impl.T_After,statecharts.impl.T_Entry,statecharts.impl.T_Exit,statecharts.impl.T_EventlessTransitions,statecharts.impl.T_Transitions,statecharts.impl.T_Initial,statecharts.impl.T_Type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regions","regions",-1023815958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117)], null)], null)], null);
statecharts.impl.T_Integrations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition-event","transition-event",-127562483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-event","initialize-event",-1064386772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.keyword_QMARK_], null)], null)], null)], null)], null);
statecharts.impl.T_Machine = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(statecharts.delayed.replace_delayed_place_holder,statecharts.delayed.insert_delayed_transitions)], null)], null),statecharts.impl.T_Integrations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),statecharts.delayed.scheduler_QMARK_], null)], null),statecharts.impl.T_Transitions,statecharts.impl.T_After,statecharts.impl.T_Entry,statecharts.impl.T_Exit,statecharts.impl.T_Initial,statecharts.impl.T_Type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_States], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regions","regions",-1023815958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_States], null)], null);
/**
 * Create a canonical presentation of the machine using malli.
 */
statecharts.impl.machine = (function statecharts$impl$machine(orig){
var conformed = malli.core.decode.cljs$core$IFn$_invoke$arity$3(statecharts.impl.T_Machine,orig,malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform.default_value_transformer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fsm","fsm",937922990)], null)], 0)));
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(statecharts.impl.T_Machine,conformed))){
} else {
var reason_95609 = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(statecharts.impl.T_Machine,conformed));
var machine_id_95610 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(conformed);
var msg_95611 = (function (){var G__94793 = "Invalid fsm machine spec:";
if(cljs.core.truth_(machine_id_95610)){
return [G__94793," machine-id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(machine_id_95610)].join('');
} else {
return G__94793;
}
})();
console.warn(msg_95611,JSON.stringify(cljs.core.clj__GT_js(reason_95609)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_95611,reason_95609);
}

(statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1 ? statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1(conformed) : statecharts.impl.validate_targets.call(null, conformed));

return conformed;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
statecharts.impl.ContextAssignment = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(statecharts.impl.ContextAssignment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k94797,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__94806 = k94797;
var G__94806__$1 = (((G__94806 instanceof cljs.core.Keyword))?G__94806.fqn:null);
switch (G__94806__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k94797,else__5303__auto__);

}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__94810){
var vec__94812 = p__94810;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94812,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94812,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#statecharts.impl.ContextAssignment{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__94796){
var self__ = this;
var G__94796__$1 = this;
return (new cljs.core.RecordIter((0),G__94796__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new statecharts.impl.ContextAssignment(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-729162794 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this94798,other94799){
var self__ = this;
var this94798__$1 = this;
return (((!((other94799 == null)))) && ((((this94798__$1.constructor === other94799.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94798__$1.v,other94799.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this94798__$1.__extmap,other94799.__extmap)))))));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new statecharts.impl.ContextAssignment(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k94797){
var self__ = this;
var this__5307__auto____$1 = this;
var G__94839 = k94797;
var G__94839__$1 = (((G__94839 instanceof cljs.core.Keyword))?G__94839.fqn:null);
switch (G__94839__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k94797);

}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__94796){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__94842 = cljs.core.keyword_identical_QMARK_;
var expr__94843 = k__5309__auto__;
if(cljs.core.truth_((pred__94842.cljs$core$IFn$_invoke$arity$2 ? pred__94842.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__94843) : pred__94842.call(null, new cljs.core.Keyword(null,"v","v",21465059),expr__94843)))){
return (new statecharts.impl.ContextAssignment(G__94796,self__.__meta,self__.__extmap,null));
} else {
return (new statecharts.impl.ContextAssignment(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__94796),null));
}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__94796){
var self__ = this;
var this__5299__auto____$1 = this;
return (new statecharts.impl.ContextAssignment(self__.v,G__94796,self__.__extmap,self__.__hash));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(statecharts.impl.ContextAssignment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(statecharts.impl.ContextAssignment.cljs$lang$type = true);

(statecharts.impl.ContextAssignment.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"statecharts.impl/ContextAssignment",null,(1),null));
}));

(statecharts.impl.ContextAssignment.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"statecharts.impl/ContextAssignment");
}));

/**
 * Positional factory function for statecharts.impl/ContextAssignment.
 */
statecharts.impl.__GT_ContextAssignment = (function statecharts$impl$__GT_ContextAssignment(v){
return (new statecharts.impl.ContextAssignment(v,null,null,null));
});

/**
 * Factory function for statecharts.impl/ContextAssignment, taking a map of keywords to field values.
 */
statecharts.impl.map__GT_ContextAssignment = (function statecharts$impl$map__GT_ContextAssignment(G__94804){
var extmap__5342__auto__ = (function (){var G__94859 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__94804,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__94804)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__94859);
} else {
return G__94859;
}
})();
return (new statecharts.impl.ContextAssignment(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__94804),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * Wrap a function into a context assignment function.
 */
statecharts.impl.assign = (function statecharts$impl$assign(f){
return (function() { 
var G__95638__delegate = function (args){
return (new statecharts.impl.ContextAssignment(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args),null,null,null));
};
var G__95638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__95639__i = 0, G__95639__a = new Array(arguments.length -  0);
while (G__95639__i < G__95639__a.length) {G__95639__a[G__95639__i] = arguments[G__95639__i + 0]; ++G__95639__i;}
  args = new cljs.core.IndexedSeq(G__95639__a,0,null);
} 
return G__95638__delegate.call(this,args);};
G__95638.cljs$lang$maxFixedArity = 0;
G__95638.cljs$lang$applyTo = (function (arglist__95640){
var args = cljs.core.seq(arglist__95640);
return G__95638__delegate(args);
});
G__95638.cljs$core$IFn$_invoke$arity$variadic = G__95638__delegate;
return G__95638;
})()
;
});
statecharts.impl.internal_action_QMARK_ = (function statecharts$impl$internal_action_QMARK_(action){
return ((cljs.core.map_QMARK_(action)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__94879 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(action);
if((G__94879 == null)){
return null;
} else {
return cljs.core.namespace(G__94879);
}
})(),"fsm")));
});
statecharts.impl.execute_internal_action = (function statecharts$impl$execute_internal_action(p__94894,state,transition_event,p__94895){
var map__94898 = p__94894;
var map__94898__$1 = cljs.core.__destructure_map(map__94898);
var fsm = map__94898__$1;
var scheduler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94898__$1,new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208));
var map__94899 = p__94895;
var map__94899__$1 = cljs.core.__destructure_map(map__94899);
var internal_action = map__94899__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94899__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94899__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94899__$1,new cljs.core.Keyword(null,"event-delay","event-delay",-262476060));
if(cljs.core.truth_(scheduler)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Delayed fsm without scheduler configured",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),internal_action], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword("fsm","schedule-event","fsm/schedule-event",1735252958))){
var event_delay__$1 = ((cljs.core.int_QMARK_(event_delay))?event_delay:(event_delay.cljs$core$IFn$_invoke$arity$2 ? event_delay.cljs$core$IFn$_invoke$arity$2(state,transition_event) : event_delay.call(null, state,transition_event)));
return statecharts.delayed.schedule(scheduler,fsm,state,event,event_delay__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword("fsm","unschedule-event","fsm/unschedule-event",-1330804273))){
return statecharts.delayed.unschedule(scheduler,fsm,state,event);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown internal action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''),internal_action);

}
}
});
/**
 * Execute the actions/entry/exit functions when transitioning.
 */
statecharts.impl.execute = (function statecharts$impl$execute(var_args){
var G__94918 = arguments.length;
switch (G__94918) {
case 3:
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.execute.cljs$core$IFn$_invoke$arity$3 = (function (fsm,state,event){
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4(fsm,state,event,null);
}));

(statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4 = (function (fsm,state,event,p__94933){
var map__94934 = p__94933;
var map__94934__$1 = cljs.core.__destructure_map(map__94934);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94934__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var _STAR_clock_STAR__orig_val__94935 = statecharts.clock._STAR_clock_STAR_;
var _STAR_clock_STAR__temp_val__94936 = (function (){var G__94937 = new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208).cljs$core$IFn$_invoke$arity$1(fsm);
if((G__94937 == null)){
return null;
} else {
return G__94937.clock;
}
})();
(statecharts.clock._STAR_clock_STAR_ = _STAR_clock_STAR__temp_val__94936);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_state,action){
if(statecharts.impl.internal_action_QMARK_(action)){
statecharts.impl.execute_internal_action(fsm,new_state,event,action);

return new_state;
} else {
var retval = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(new_state,event) : action.call(null, new_state,event));
if((retval instanceof statecharts.impl.ContextAssignment)){
return retval.v;
} else {
return new_state;
}
}
}),(function (){var G__94943 = state;
if(cljs.core.not(debug)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__94943,new cljs.core.Keyword(null,"_actions","_actions",882633086));
} else {
return G__94943;
}
})(),new cljs.core.Keyword(null,"_actions","_actions",882633086).cljs$core$IFn$_invoke$arity$1(state));
}finally {(statecharts.clock._STAR_clock_STAR_ = _STAR_clock_STAR__orig_val__94935);
}}));

(statecharts.impl.execute.cljs$lang$maxFixedArity = 4);

/**
 * Schema of an element of a expanded path. We need the
 *   transitions/exit/entry information to:
 *   1. transitions: in a compound node, decide which level handles
 *   the event
 *   2. :id of each level to resolve the target state node.
 *   3. entry/exit: collect the actions during a transtion transition.
 */
statecharts.impl.PathElement = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.keyword_QMARK_], null)], null),statecharts.impl.T_Transitions,statecharts.impl.T_Entry,statecharts.impl.T_Exit], null);
statecharts.impl.parallel_QMARK_ = (function statecharts$impl$parallel_QMARK_(node){
var G__94946 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if((G__94946 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__94946,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
}
});
statecharts.impl.compound_QMARK_ = (function statecharts$impl$compound_QMARK_(node){
return cljs.core.contains_QMARK_(node,new cljs.core.Keyword(null,"initial","initial",1854648214));
});
statecharts.impl.atomic_QMARK_ = (function statecharts$impl$atomic_QMARK_(node){
return ((cljs.core.not(statecharts.impl.parallel_QMARK_(node))) && ((!(statecharts.impl.compound_QMARK_(node)))));
});
/**
 * Calculate the _state value based on the node paths.
 * 
 *   In our internal code, we need to represent the current state as a series of
 *   nodes, but when presenting the current state to the user we need to extract the
 *   simplest form.
 */
statecharts.impl.path__GT__state = (function statecharts$impl$path__GT__state(xs){
var indexed_xs = statecharts.utils.with_index(cljs.core.rest(xs));
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accu,p__94957){
var vec__94960 = p__94957;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94960,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__94960,(1),null);
if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))){
var para_state = statecharts.utils.map_vals(statecharts.impl.path__GT__state,new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node));
if((i === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [para_state], null);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(accu,(i - (1)),(function (id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,para_state]);
}));
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accu,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
}
}),cljs.core.PersistentVector.EMPTY,indexed_xs);
return statecharts.utils.devectorize(ret);
});
statecharts.impl.check_or_throw = (function statecharts$impl$check_or_throw(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95660 = arguments.length;
var i__5727__auto___95661 = (0);
while(true){
if((i__5727__auto___95661 < len__5726__auto___95660)){
args__5732__auto__.push((arguments[i__5727__auto___95661]));

var G__95663 = (i__5727__auto___95661 + (1));
i__5727__auto___95661 = G__95663;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return statecharts.impl.check_or_throw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(statecharts.impl.check_or_throw.cljs$core$IFn$_invoke$arity$variadic = (function (x,k,v,p__94971){
var map__94972 = p__94971;
var map__94972__$1 = cljs.core.__destructure_map(map__94972);
var map = map__94972__$1;
if((x == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown fsm ",cljs.core.name(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map,k,v));
} else {
return null;
}
}));

(statecharts.impl.check_or_throw.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(statecharts.impl.check_or_throw.cljs$lang$applyTo = (function (seq94966){
var G__94967 = cljs.core.first(seq94966);
var seq94966__$1 = cljs.core.next(seq94966);
var G__94968 = cljs.core.first(seq94966__$1);
var seq94966__$2 = cljs.core.next(seq94966__$1);
var G__94969 = cljs.core.first(seq94966__$2);
var seq94966__$3 = cljs.core.next(seq94966__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__94967,G__94968,G__94969,seq94966__$3);
}));

/**
 * Resolve the given transition target given the current state context.
 * 
 *   Rules for resolving the target:
 *   - If the target is nil, it's the same as the current state, a.k.a self-transition
 * 
 *   - If the target is a vector and the first element is :>, it's an absolute path
 * 
 *  (f :whatever [:> :s2]) => [:s2]
 * 
 *   - If the target is a vector and the first element is not :>, it's an relative path
 * 
 *  (f [:s1] [:s2]) => :s2
 *  (f [:s1 :s1.1] [:s1.2]) => [:s1 :s1.2]
 * 
 *   - If the target is a keyword, it's the same as an one-element vector
 * 
 *  (f [:s1] :s2) => :s2
 *  (f [:s1 :s1.1] :s1.2) => [:s1 :s1.2]
 * 
 *   - If the target is a vector and the first element is :., it's a
 *  child state of current node:
 * 
 *  (f [:s1] [:. :s1.1]) => [:s1 :s1.1]
 * 
 *   E.g. given current state [:s1 :s1.1] and a target of :s1.2, it
 *   should resolve to [:s1 :s1.2]
 */
statecharts.impl.resolve_target = (function statecharts$impl$resolve_target(base,target){
var base__$1 = statecharts.utils.ensure_vector(base);
var parent = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(base__$1));
if((target == null)){
return base__$1;
} else {
if((target instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent,target);
} else {
if((!(cljs.core.sequential_QMARK_(target)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid fsm target",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),new cljs.core.Keyword(null,">",">",-555517146))){
return cljs.core.vec(cljs.core.next(target));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),new cljs.core.Keyword(null,".",".",335144435))){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base__$1,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),target)));
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent,target));

}
}
}
}
}
});
statecharts.impl.absolute_target_QMARK_ = (function statecharts$impl$absolute_target_QMARK_(target){
return ((cljs.core.sequential_QMARK_(target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),new cljs.core.Keyword(null,">",">",-555517146))));
});
statecharts.impl.is_prefix_QMARK_ = (function statecharts$impl$is_prefix_QMARK_(short$,long$){
var n = cljs.core.count(short$);
return (((n <= cljs.core.count(long$))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(short$,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,long$))));
});
/**
 * Calculate the actions for an external self-transition.
 * 
 *   if handler is on [:s1 :s1.1]
 *   and current state is [:s1 :s1.1 :s1.1.1]
 *   then we shall exit s1.1.1 s1.1 and entry s1.1 s1.1.1 again
 * 
 *   if handler is on [:s1]
 *   and current state is [:s1 :s1.1 :s1.1.1]
 *   then we shall exit s1.1.1 s1.1 s1 and entry s1 s1.1 s1.1.1 again
 * 
 *   if handler is on [:s2]
 *   and current state is [:s2]
 *   then we shall exit s2 and entry s2 again
 * 
 *   if handler is on []
 *   and current state is [:s2]
 *   then we shall exit s2 Machine and entry Machine s2 again
 *   
 */
statecharts.impl.external_self_transition_actions = (function statecharts$impl$external_self_transition_actions(handler,nodes){
return null;
});
statecharts.impl.has_eventless_transition_QMARK_ = (function statecharts$impl$has_eventless_transition_QMARK_(nodes){
return cljs.core.boolean$(cljs.core.some((function (p1__94999_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__94999_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword("fsm","always","fsm/always",-1771917474)], null));
}),nodes));
});
/**
 * Update the last element of a vector
 */
statecharts.impl.updatev_last = (function statecharts$impl$updatev_last(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95683 = arguments.length;
var i__5727__auto___95684 = (0);
while(true){
if((i__5727__auto___95684 < len__5726__auto___95683)){
args__5732__auto__.push((arguments[i__5727__auto___95684]));

var G__95685 = (i__5727__auto___95684 + (1));
i__5727__auto___95684 = G__95685;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return statecharts.impl.updatev_last.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(statecharts.impl.updatev_last.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,v,(cljs.core.count(v) - (1)),f,args);
}));

(statecharts.impl.updatev_last.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(statecharts.impl.updatev_last.cljs$lang$applyTo = (function (seq95001){
var G__95002 = cljs.core.first(seq95001);
var seq95001__$1 = cljs.core.next(seq95001);
var G__95003 = cljs.core.first(seq95001__$1);
var seq95001__$2 = cljs.core.next(seq95001__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95002,G__95003,seq95001__$2);
}));

statecharts.impl.RT_NodePath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
statecharts.impl.RT_Node = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atomic","atomic",-120459460),new cljs.core.Keyword(null,"compound","compound",1539396613),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null);
statecharts.impl.RT_TX = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null)], null);
statecharts.impl.T_Configuration = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),statecharts.impl.RT_NodePath], null);
statecharts.impl.add_node_type = (function statecharts$impl$add_node_type(node){
var type = (cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))?new cljs.core.Keyword(null,"parallel","parallel",-1863607128):((statecharts.impl.compound_QMARK_(node))?new cljs.core.Keyword(null,"compound","compound",1539396613):new cljs.core.Keyword(null,"atomic","atomic",-120459460)
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"type","type",1174270348),type);
});
statecharts.impl.resolve_node = (function statecharts$impl$resolve_node(var_args){
var G__95020 = arguments.length;
switch (G__95020) {
case 2:
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2 = (function (root,path){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3(root,path,false);
}));

(statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3 = (function (root,path,full_QMARK_){
var node = (function (){var path__$1 = statecharts.utils.ensure_vector(path);
var node = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (current_root,k){
if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(current_root))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regions","regions",-1023815958),k], null));
} else {
if(statecharts.impl.compound_QMARK_(current_root)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),k], null));
} else {
return cljs.core.reduced(null);

}
}
}),root,path__$1);
var G__95039 = node;
var G__95039__$1 = (((G__95039 == null))?null:statecharts.impl.add_node_type(G__95039));
if((G__95039__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95039__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
}
})();
if(cljs.core.truth_(full_QMARK_)){
return node;
} else {
var G__95043 = node;
if((G__95043 == null)){
return null;
} else {
return cljs.core.select_keys(G__95043,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)], null));
}
}
}));

(statecharts.impl.resolve_node.cljs$lang$maxFixedArity = 3);

statecharts.impl._state__GT_nodes = (function statecharts$impl$_state__GT_nodes(_state){
var G__95073 = statecharts.utils.ensure_vector(_state);
var vec__95076 = G__95073;
var seq__95077 = cljs.core.seq(vec__95076);
var first__95078 = cljs.core.first(seq__95077);
var seq__95077__$1 = cljs.core.next(seq__95077);
var head = first__95078;
var more = seq__95077__$1;
var prefix = cljs.core.PersistentVector.EMPTY;
var ret = cljs.core.sorted_set();
var G__95073__$1 = G__95073;
var prefix__$1 = prefix;
var ret__$1 = ret;
while(true){
var vec__95122 = G__95073__$1;
var seq__95123 = cljs.core.seq(vec__95122);
var first__95124 = cljs.core.first(seq__95123);
var seq__95123__$1 = cljs.core.next(seq__95123);
var head__$1 = first__95124;
var more__$1 = seq__95123__$1;
var prefix__$2 = prefix__$1;
var ret__$2 = ret__$1;
if((head__$1 instanceof cljs.core.Keyword)){
var current = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix__$2,head__$1);
var ret__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret__$2,current);
if(cljs.core.seq(more__$1)){
var G__95696 = more__$1;
var G__95697 = current;
var G__95698 = ret__$3;
G__95073__$1 = G__95696;
prefix__$1 = G__95697;
ret__$1 = G__95698;
continue;
} else {
return ret__$3;
}
} else {
if(cljs.core.map_QMARK_(head__$1)){
if(cljs.core.empty_QMARK_(more__$1)){
} else {
throw (new Error(["Assert failed: ","invalid _state, parallel state must be the last one","\n","(empty? more)"].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret__$2,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__95073__$1,prefix__$1,ret__$1,vec__95122,seq__95123,first__95124,seq__95123__$1,head__$1,more__$1,prefix__$2,ret__$2,G__95073,vec__95076,seq__95077,first__95078,seq__95077__$1,head,more,prefix,ret){
return (function (p__95133){
var vec__95134 = p__95133;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95134,(1),null);
var prefix__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix__$2,k);
return cljs.core.cons(prefix__$3,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__95073__$1,prefix__$1,ret__$1,prefix__$3,vec__95134,k,v,vec__95122,seq__95123,first__95124,seq__95123__$1,head__$1,more__$1,prefix__$2,ret__$2,G__95073,vec__95076,seq__95077,first__95078,seq__95077__$1,head,more,prefix,ret){
return (function (p1__95054_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix__$3,p1__95054_SHARP_);
});})(G__95073__$1,prefix__$1,ret__$1,prefix__$3,vec__95134,k,v,vec__95122,seq__95123,first__95124,seq__95123__$1,head__$1,more__$1,prefix__$2,ret__$2,G__95073,vec__95076,seq__95077,first__95078,seq__95077__$1,head,more,prefix,ret))
,(statecharts.impl._state__GT_nodes.cljs$core$IFn$_invoke$arity$1 ? statecharts.impl._state__GT_nodes.cljs$core$IFn$_invoke$arity$1(v) : statecharts.impl._state__GT_nodes.call(null, v))));
});})(G__95073__$1,prefix__$1,ret__$1,vec__95122,seq__95123,first__95124,seq__95123__$1,head__$1,more__$1,prefix__$2,ret__$2,G__95073,vec__95076,seq__95077,first__95078,seq__95077__$1,head,more,prefix,ret))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head__$1], 0)));
} else {
return null;
}
}
break;
}
});
statecharts.impl._state__GT_configuration = (function statecharts$impl$_state__GT_configuration(var_args){
var args__5732__auto__ = [];
var len__5726__auto___95699 = arguments.length;
var i__5727__auto___95700 = (0);
while(true){
if((i__5727__auto___95700 < len__5726__auto___95699)){
args__5732__auto__.push((arguments[i__5727__auto___95700]));

var G__95701 = (i__5727__auto___95700 + (1));
i__5727__auto___95700 = G__95701;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return statecharts.impl._state__GT_configuration.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(statecharts.impl._state__GT_configuration.cljs$core$IFn$_invoke$arity$variadic = (function (fsm,_state,p__95153){
var map__95154 = p__95153;
var map__95154__$1 = cljs.core.__destructure_map(map__95154);
var _opt = map__95154__$1;
var no_resolve_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95154__$1,new cljs.core.Keyword(null,"no-resolve?","no-resolve?",1149516037));
var _state__$1 = statecharts.utils.ensure_vector(_state);
var paths = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(statecharts.impl._state__GT_nodes(_state__$1),cljs.core.PersistentVector.EMPTY);
var nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__95142_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__95142_SHARP_);
}),paths);
if(cljs.core.truth_(no_resolve_QMARK_)){
return paths;
} else {
return nodes;
}
}));

(statecharts.impl._state__GT_configuration.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(statecharts.impl._state__GT_configuration.cljs$lang$applyTo = (function (seq95144){
var G__95145 = cljs.core.first(seq95144);
var seq95144__$1 = cljs.core.next(seq95144);
var G__95146 = cljs.core.first(seq95144__$1);
var seq95144__$2 = cljs.core.next(seq95144__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__95145,G__95146,seq95144__$2);
}));

/**
 * Return a (maybe lazy) sequence of the node path with all its ancestors, starting from the
 *   node and goes up.
 */
statecharts.impl.backtrack_ancestors_as_paths = (function statecharts$impl$backtrack_ancestors_as_paths(fsm,path){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3((function (accu,_){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(accu));
}),path,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(path)));
});
/**
 * Like backtrack-ancestors-as-paths but resolves the paths into nodes.
 */
statecharts.impl.backtrack_ancestors_as_nodes = (function statecharts$impl$backtrack_ancestors_as_nodes(fsm,path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95169_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__95169_SHARP_);
}),statecharts.impl.backtrack_ancestors_as_paths(fsm,path));
});
statecharts.impl.find_least_common_compound_ancessor = (function statecharts$impl$find_least_common_compound_ancessor(fsm,path1,path2){
return statecharts.utils.find_first((function (anc){
return statecharts.impl.is_prefix_QMARK_(anc,path1);
}),statecharts.impl.backtrack_ancestors_as_paths(fsm,path2));
});
statecharts.impl.get_tx_domain = (function statecharts$impl$get_tx_domain(fsm,p__95183){
var map__95185 = p__95183;
var map__95185__$1 = cljs.core.__destructure_map(map__95185);
var tx = map__95185__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95185__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95185__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,target)){
return source;
} else {
return statecharts.impl.find_least_common_compound_ancessor(fsm,source,target);

}
}
});
/**
 * Given an atomic node and an event, find the first satistifed transition by
 *   walking from the node and then its ancestors, until the root.
 * 
 *   Return a two-tuple:
 *   - The first element is the a boolean indicates whether any transition is found at
 *  all (regarding it's satisfied or not)
 *   - The second element is the found transition, if any.
 *   
 */
statecharts.impl.select_one_tx = (function statecharts$impl$select_one_tx(fsm,p__95197,state,p__95198,input_event){
var map__95199 = p__95197;
var map__95199__$1 = cljs.core.__destructure_map(map__95199);
var node = map__95199__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95199__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var map__95200 = p__95198;
var map__95200__$1 = cljs.core.__destructure_map(map__95200);
var event = map__95200__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95200__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var first_satisfied_tx = (function (txs){
return cljs.core.some((function (p__95209){
var map__95210 = p__95209;
var map__95210__$1 = cljs.core.__destructure_map(map__95210);
var tx = map__95210__$1;
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95210__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(guard);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return (guard.cljs$core$IFn$_invoke$arity$2 ? guard.cljs$core$IFn$_invoke$arity$2(state,input_event) : guard.call(null, state,input_event));
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.Keyword(null,"guard","guard",-873147811));
} else {
return null;
}
}),txs);
});
var found = cljs.core.volatile_BANG_(false);
var tx = (function (){var temp__5823__auto__ = cljs.core.some((function (p__95214){
var map__95215 = p__95214;
var map__95215__$1 = cljs.core.__destructure_map(map__95215);
var node__$1 = map__95215__$1;
var path__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95215__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var temp__5823__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),type], null)));
if(temp__5823__auto__){
var txs = temp__5823__auto__;
cljs.core.vreset_BANG_(found,true);

var temp__5823__auto____$1 = first_satisfied_tx(txs);
if(cljs.core.truth_(temp__5823__auto____$1)){
var tx = temp__5823__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword(null,"source","source",-433931539),path__$1);
} else {
return null;
}
} else {
return null;
}
}),statecharts.impl.backtrack_ancestors_as_nodes(fsm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5823__auto__)){
var map__95221 = temp__5823__auto__;
var map__95221__$1 = cljs.core.__destructure_map(map__95221);
var tx = map__95221__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95221__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95221__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_resolved = (cljs.core.truth_(target)?statecharts.impl.resolve_target(source,target):null);
var tx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword(null,"target","target",253001721),target_resolved),new cljs.core.Keyword(null,"external?","external?",579765478),((statecharts.impl.absolute_target_QMARK_(target)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_resolved,source))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx__$1,new cljs.core.Keyword(null,"domain","domain",1847214937),statecharts.impl.get_tx_domain(fsm,tx__$1));
} else {
return null;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(found),tx], null);
});
statecharts.impl.get_initial_path = (function statecharts$impl$get_initial_path(p__95232){
var map__95233 = p__95232;
var map__95233__$1 = cljs.core.__destructure_map(map__95233);
var _node = map__95233__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95233__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95233__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var initial__$1 = statecharts.utils.ensure_vector(initial);
var initial__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(initial__$1),new cljs.core.Keyword(null,".",".",335144435)))?cljs.core.next(initial__$1):initial__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,initial__$2);
});
statecharts.impl.add_ancestors_to_entry_set = (function statecharts$impl$add_ancestors_to_entry_set(fsm,domain,path,external_QMARK_){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (path__$1){
var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,cljs.core.PersistentVector.EMPTY);
if(and__5000__auto__){
var and__5000__auto____$1 = (function (){var or__5002__auto__ = external_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(domain,path__$1);
}
})();
if(cljs.core.truth_(and__5000__auto____$1)){
return statecharts.impl.is_prefix_QMARK_(domain,path__$1);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}),statecharts.impl.backtrack_ancestors_as_paths(fsm,path));
});
statecharts.impl.compute_entry_set = (function statecharts$impl$compute_entry_set(fsm,txs){
var get_tx_entry_set = (function (p__95255){
var map__95256 = p__95255;
var map__95256__$1 = cljs.core.__destructure_map(map__95256);
var _tx = map__95256__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95256__$1,new cljs.core.Keyword(null,"target","target",253001721));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95256__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var external_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95256__$1,new cljs.core.Keyword(null,"external?","external?",579765478));
if(cljs.core.truth_(target)){
var entry_set = cljs.core.PersistentHashSet.createAsIfByAssoc([target]);
var seeds = entry_set;
while(true){
var exist_QMARK_ = ((function (entry_set,seeds,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_){
return (function (p1__95248_SHARP_){
return cljs.core.contains_QMARK_(entry_set,p1__95248_SHARP_);
});})(entry_set,seeds,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_))
;
var new$ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entry_set,seeds,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_){
return (function (p__95266){
var map__95267 = p__95266;
var map__95267__$1 = cljs.core.__destructure_map(map__95267);
var node = map__95267__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95267__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95267__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(exist_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(statecharts.impl.add_ancestors_to_entry_set(fsm,domain,path,external_QMARK_),(function (){var G__95271 = type;
var G__95271__$1 = (((G__95271 instanceof cljs.core.Keyword))?G__95271.fqn:null);
switch (G__95271__$1) {
case "parallel":
var regions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entry_set,seeds,G__95271,G__95271__$1,map__95267,map__95267__$1,node,type,path,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_){
return (function (p1__95250_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__95250_SHARP_);
});})(entry_set,seeds,G__95271,G__95271__$1,map__95267,map__95267__$1,node,type,path,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_))
,cljs.core.keys(new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node)));
return regions;

break;
case "compound":
if(cljs.core.truth_(cljs.core.some(((function (entry_set,seeds,G__95271,G__95271__$1,map__95267,map__95267__$1,node,type,path,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_){
return (function (x){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,x)) && (statecharts.impl.is_prefix_QMARK_(path,x)));
});})(entry_set,seeds,G__95271,G__95271__$1,map__95267,map__95267__$1,node,type,path,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_))
,entry_set))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [statecharts.impl.get_initial_path(node)], null);
}

break;
default:
return null;

}
})()));
});})(entry_set,seeds,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entry_set,seeds,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_){
return (function (p1__95249_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3(fsm,p1__95249_SHARP_,true);
});})(entry_set,seeds,exist_QMARK_,map__95256,map__95256__$1,_tx,target,domain,external_QMARK_))
,seeds)));
var new$__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new$),entry_set);
if((!(cljs.core.empty_QMARK_(new$__$1)))){
var G__95745 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(entry_set,new$__$1);
var G__95746 = new$__$1;
entry_set = G__95745;
seeds = G__95746;
continue;
} else {
return entry_set;
}
break;
}
} else {
return null;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_tx_entry_set,txs));
});
statecharts.impl.get_actions = (function statecharts$impl$get_actions(fsm,path,k){
var node = statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,path);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(node) : k.call(null, node));
});
statecharts.impl.get_entry_actions = (function statecharts$impl$get_entry_actions(fsm,entry_set){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__95288_SHARP_){
return statecharts.impl.get_actions(fsm,p1__95288_SHARP_,new cljs.core.Keyword(null,"entry","entry",505168823));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_set], 0));
});
statecharts.impl.simple_state = (function statecharts$impl$simple_state(x){
if(((cljs.core.sequential_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(1))))){
return cljs.core.first(x);
} else {
return x;
}
});
/**
 * Represent the current configuration in a user-friendly form. It's the reverse
 *   operation of `_state->configuration`.
 *   
 */
statecharts.impl.configuration__GT__state = (function statecharts$impl$configuration__GT__state(fsm,configuration){
return statecharts.impl.simple_state((function (){var paths = configuration;
var node = fsm;
var _state = cljs.core.PersistentVector.EMPTY;
var parent_compound_QMARK_ = false;
while(true){
var paths__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,paths));
if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))){
var children = new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node);
var groups = cljs.core.group_by(cljs.core.first,paths__$1);
var parallel_state = statecharts.utils.map_kv_vals(((function (paths,node,_state,parent_compound_QMARK_,children,groups,paths__$1){
return (function (k,region){
var G__95319 = region;
var G__95320 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.next,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,k));
return (statecharts.impl.configuration__GT__state.cljs$core$IFn$_invoke$arity$2 ? statecharts.impl.configuration__GT__state.cljs$core$IFn$_invoke$arity$2(G__95319,G__95320) : statecharts.impl.configuration__GT__state.call(null, G__95319,G__95320));
});})(paths,node,_state,parent_compound_QMARK_,children,groups,paths__$1))
,children);
if(parent_compound_QMARK_){
return statecharts.impl.updatev_last(_state,((function (paths,node,_state,parent_compound_QMARK_,children,groups,parallel_state,paths__$1){
return (function (k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,parallel_state]);
});})(paths,node,_state,parent_compound_QMARK_,children,groups,parallel_state,paths__$1))
);
} else {
return parallel_state;
}
} else {
if(statecharts.impl.compound_QMARK_(node)){
var ks = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,paths__$1));
var k = cljs.core.first(ks);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ks),(1))){
} else {
throw (new Error(["Assert failed: ",["invalid paths: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paths__$1)].join(''),"\n","(= (count ks) 1)"].join('')));
}

var paths__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.next,paths__$1));
if(cljs.core.seq(paths__$2)){
var G__95759 = paths__$2;
var G__95760 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),k], null));
var G__95761 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_state,k);
var G__95762 = true;
paths = G__95759;
node = G__95760;
_state = G__95761;
parent_compound_QMARK_ = G__95762;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_state,k);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_state,cljs.core.ffirst(paths__$1));

}
}
break;
}
})());
});
statecharts.impl._do_transition = (function statecharts$impl$_do_transition(fsm,p__95338,event,input_event,ignore_unknown_event_QMARK_){
var map__95339 = p__95338;
var map__95339__$1 = cljs.core.__destructure_map(map__95339);
var state = map__95339__$1;
var _state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95339__$1,new cljs.core.Keyword(null,"_state","_state",-791882382));
var configuration = statecharts.impl._state__GT_configuration(fsm,_state);
var atomic_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__95330_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__95330_SHARP_),new cljs.core.Keyword(null,"atomic","atomic",-120459460));
}),configuration);
var txs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95331_SHARP_){
return statecharts.impl.select_one_tx(fsm,p1__95331_SHARP_,state,event,input_event);
}),atomic_nodes);
var _ = (cljs.core.truth_(ignore_unknown_event_QMARK_)?null:(cljs.core.truth_(cljs.core.some(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,txs)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["fsm ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fsm))," got unknown event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event))," when in state ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_state)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_state","_state",-791882382),_state], null))})()));
var txs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,txs));
if((!(cljs.core.seq_QMARK_(txs__$1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_state,cljs.core.PersistentVector.EMPTY,false], null);
} else {
var exit_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__95345){
var map__95346 = p__95345;
var map__95346__$1 = cljs.core.__destructure_map(map__95346);
var node = map__95346__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95346__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.some((function (p__95347){
var map__95348 = p__95347;
var map__95348__$1 = cljs.core.__destructure_map(map__95348);
var tx = map__95348__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95348__$1,new cljs.core.Keyword(null,"target","target",253001721));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95348__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var external_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95348__$1,new cljs.core.Keyword(null,"external?","external?",579765478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentVector.EMPTY)){
var and__5000__auto__ = external_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.PersistentVector.EMPTY);
} else {
return and__5000__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domain,path)){
return external_QMARK_;
} else {
return statecharts.impl.is_prefix_QMARK_(domain,path);

}
}
}),txs__$1);
}),configuration)));
var entry_set = statecharts.impl.compute_entry_set(fsm,txs__$1);
var exit_actions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__95335_SHARP_){
return statecharts.impl.get_actions(fsm,p1__95335_SHARP_,new cljs.core.Keyword(null,"exit","exit",351849638));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(exit_set)], 0));
var entry_actions = statecharts.impl.get_entry_actions(fsm,entry_set);
var tx_actions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([txs__$1], 0));
var actions = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(exit_actions,tx_actions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_actions], 0));
var new_configuration = clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),configuration)),exit_set),entry_set);
var new_value = statecharts.impl.configuration__GT__state(fsm,new_configuration);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value,actions,statecharts.impl.has_eventless_transition_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95337_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__95337_SHARP_);
}),entry_set))], null);
}
});
statecharts.impl._do_init = (function statecharts$impl$_do_init(fsm){
var tx = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"target","target",253001721),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"external?","external?",579765478),true,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.PersistentVector.EMPTY], null);
var entry_set = statecharts.impl.compute_entry_set(fsm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
var entry_actions = statecharts.impl.get_entry_actions(fsm,entry_set);
var _state = statecharts.impl.configuration__GT__state(fsm,entry_set);
var _pending_eventless_tx_QMARK_ = statecharts.impl.has_eventless_transition_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__95362_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__95362_SHARP_);
}),entry_set));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_state,entry_actions,_pending_eventless_tx_QMARK_], null);
});
statecharts.impl.initialize = (function statecharts$impl$initialize(var_args){
var G__95372 = arguments.length;
switch (G__95372) {
case 1:
return statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$1 = (function (fsm){
return statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2(fsm,null);
}));

(statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2 = (function (p__95376,p__95377){
var map__95378 = p__95376;
var map__95378__$1 = cljs.core.__destructure_map(map__95378);
var fsm = map__95378__$1;
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95378__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95378__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__95379 = p__95377;
var map__95379__$1 = cljs.core.__destructure_map(map__95379);
var _opts = map__95379__$1;
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95379__$1,new cljs.core.Keyword(null,"exec","exec",1625568743),true);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95379__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95379__$1,new cljs.core.Keyword(null,"context","context",-830191113),null);
var context__$1 = (((!((context == null))))?context:new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(fsm));
var event = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("fsm","init","fsm/init",-1875649690)], null);
var vec__95383 = statecharts.impl._do_init(fsm);
var _state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95383,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95383,(1),null);
var _pending_eventless_tx_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95383,(2),null);
var state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context__$1,new cljs.core.Keyword(null,"_state","_state",-791882382),_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_actions","_actions",882633086),actions], 0));
var new_state = (cljs.core.truth_(exec)?statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4(fsm,state,event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null)):state);
if(cljs.core.not(_pending_eventless_tx_QMARK_)){
return new_state;
} else {
var G__95389 = fsm;
var G__95390 = new_state;
var G__95391 = new cljs.core.Keyword("fsm","always","fsm/always",-1771917474);
var G__95392 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exec","exec",1625568743),exec,new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null);
return (statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4 ? statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4(G__95389,G__95390,G__95391,G__95392) : statecharts.impl.transition.call(null, G__95389,G__95390,G__95391,G__95392));
}
}));

(statecharts.impl.initialize.cljs$lang$maxFixedArity = 2);

/**
 * Do the transition, but would not follow new eventless transitions defined on
 *   the target state.
 */
statecharts.impl._transition_once = (function statecharts$impl$_transition_once(fsm,state,event,p__95394){
var map__95395 = p__95394;
var map__95395__$1 = cljs.core.__destructure_map(map__95395);
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95395__$1,new cljs.core.Keyword(null,"exec","exec",1625568743),true);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95395__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var input_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95395__$1,new cljs.core.Keyword(null,"input-event","input-event",803933188));
var ignore_unknown_event_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95395__$1,new cljs.core.Keyword(null,"ignore-unknown-event?","ignore-unknown-event?",-1415682521));
var input_event__$1 = (function (){var or__5002__auto__ = input_event;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return event;
}
})();
var vec__95396 = statecharts.impl._do_transition(fsm,state,event,input_event__$1,ignore_unknown_event_QMARK_);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95396,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95396,(1),null);
var _pending_eventless_tx_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95396,(2),null);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"_state","_state",-791882382),new_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589),_pending_eventless_tx_QMARK_,new cljs.core.Keyword(null,"_prev-state","_prev-state",1694374073),new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"_actions","_actions",882633086),actions], 0));
if(cljs.core.truth_(exec)){
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4(fsm,new_state,input_event__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null));
} else {
return new_state;
}
});
/**
 * Return the new state and the actions to execute.
 */
statecharts.impl._transition_impl = (function statecharts$impl$_transition_impl(fsm,state,input_event,opts){
var i = (0);
var state__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"_actions","_actions",882633086));
var actions = cljs.core.PersistentVector.EMPTY;
while(true){
if((i > (10))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Possible dead loop on event",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input_event))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(state__$1)], null));
} else {
}

var event = (((i === (0)))?input_event:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("fsm","always","fsm/always",-1771917474)], null));
var map__95412 = statecharts.impl._transition_once(fsm,state__$1,event,opts);
var map__95412__$1 = cljs.core.__destructure_map(map__95412);
var state__$2 = map__95412__$1;
var _actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"_actions","_actions",882633086));
var _pending_eventless_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95412__$1,new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589));
var actions__$1 = (cljs.core.truth_(_actions)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(actions,_actions):actions);
if(cljs.core.truth_(_pending_eventless_tx_QMARK_)){
var G__95796 = (i + (1));
var G__95797 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$2,new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589));
var G__95798 = actions__$1;
i = G__95796;
state__$1 = G__95797;
actions = G__95798;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,actions__$1], null);
}
break;
}
});
/**
 * Given a machine with its current state, trigger a transition to the
 *   next state based on the given event.
 * 
 *   The nature and purpose of the transition impl is to get two outputs:
 *   - the new state
 *   - the actions to execute
 * 
 *   By default it executes all actions, unless the `exec` opt is false,
 *   in which case it is a pure function.
 */
statecharts.impl.transition = (function statecharts$impl$transition(var_args){
var G__95423 = arguments.length;
switch (G__95423) {
case 3:
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.transition.cljs$core$IFn$_invoke$arity$3 = (function (fsm,state,event){
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4(fsm,state,event,null);
}));

(statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4 = (function (fsm,state,event,p__95429){
var map__95430 = p__95429;
var map__95430__$1 = cljs.core.__destructure_map(map__95430);
var opts = map__95430__$1;
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__95430__$1,new cljs.core.Keyword(null,"exec","exec",1625568743),true);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__95430__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var input_event = statecharts.impl.canon_event(event);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"input-event","input-event",803933188),input_event);
var vec__95431 = statecharts.impl._transition_impl(fsm,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"_actions","_actions",882633086)),input_event,opts__$1);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95431,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95431,(1),null);
var G__95434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_state,new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_prev-state","_prev-state",1694374073)], 0));
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not(exec);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return debug;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__95434,new cljs.core.Keyword(null,"_actions","_actions",882633086),actions);
} else {
return G__95434;
}
}));

(statecharts.impl.transition.cljs$lang$maxFixedArity = 4);

statecharts.impl.valid_target_QMARK_ = (function statecharts$impl$valid_target_QMARK_(node,path){
try{if(cljs.core.truth_(statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(node,path))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("node not found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword("statecharts.impl","type","statecharts.impl/type",-2067516284),new cljs.core.Keyword(null,"invalid-path","invalid-path",1333291965)], null));
}

return true;
}catch (e95436){if((e95436 instanceof Error)){
var e = e95436;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("statecharts.impl","type","statecharts.impl/type",-2067516284).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)),new cljs.core.Keyword(null,"invalid-path","invalid-path",1333291965))){
return false;
} else {
throw e;
}
} else {
throw e95436;

}
}});
/**
 * Walk the fsm and try to resolve all transition targets. Raise an
 *   exception if any target is invalid.
 */
statecharts.impl.validate_targets = (function statecharts$impl$validate_targets(var_args){
var G__95438 = arguments.length;
switch (G__95438) {
case 1:
return statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1 = (function (root){
return statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,root,cljs.core.PersistentVector.EMPTY);
}));

(statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3 = (function (root,node,current_path){
var transitions_95805 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(node))], 0));
var targets_95806 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),transitions_95805));
if(cljs.core.seq(targets_95806)){
var seq__95443_95807 = cljs.core.seq(targets_95806);
var chunk__95445_95808 = null;
var count__95446_95809 = (0);
var i__95447_95810 = (0);
while(true){
if((i__95447_95810 < count__95446_95809)){
var target_95811 = chunk__95445_95808.cljs$core$IIndexed$_nth$arity$2(null, i__95447_95810);
var target_95813__$1 = statecharts.impl.resolve_target(current_path,target_95811);
if(cljs.core.truth_(statecharts.impl.valid_target_QMARK_(root,target_95813__$1))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_95813__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target_95813__$1,new cljs.core.Keyword(null,"state","state",-1988618099),current_path], null));
}


var G__95816 = seq__95443_95807;
var G__95817 = chunk__95445_95808;
var G__95818 = count__95446_95809;
var G__95819 = (i__95447_95810 + (1));
seq__95443_95807 = G__95816;
chunk__95445_95808 = G__95817;
count__95446_95809 = G__95818;
i__95447_95810 = G__95819;
continue;
} else {
var temp__5823__auto___95820 = cljs.core.seq(seq__95443_95807);
if(temp__5823__auto___95820){
var seq__95443_95821__$1 = temp__5823__auto___95820;
if(cljs.core.chunked_seq_QMARK_(seq__95443_95821__$1)){
var c__5525__auto___95822 = cljs.core.chunk_first(seq__95443_95821__$1);
var G__95826 = cljs.core.chunk_rest(seq__95443_95821__$1);
var G__95827 = c__5525__auto___95822;
var G__95828 = cljs.core.count(c__5525__auto___95822);
var G__95829 = (0);
seq__95443_95807 = G__95826;
chunk__95445_95808 = G__95827;
count__95446_95809 = G__95828;
i__95447_95810 = G__95829;
continue;
} else {
var target_95830 = cljs.core.first(seq__95443_95821__$1);
var target_95831__$1 = statecharts.impl.resolve_target(current_path,target_95830);
if(cljs.core.truth_(statecharts.impl.valid_target_QMARK_(root,target_95831__$1))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_95831__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target_95831__$1,new cljs.core.Keyword(null,"state","state",-1988618099),current_path], null));
}


var G__95832 = cljs.core.next(seq__95443_95821__$1);
var G__95833 = null;
var G__95834 = (0);
var G__95835 = (0);
seq__95443_95807 = G__95832;
chunk__95445_95808 = G__95833;
count__95446_95809 = G__95834;
i__95447_95810 = G__95835;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5823__auto___95836 = new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5823__auto___95836)){
var initial_95837 = temp__5823__auto___95836;
var initial_node_95838 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),initial_95837], null));
if(cljs.core.truth_(initial_node_95838)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid initial target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_95837)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),initial_95837,new cljs.core.Keyword(null,"state","state",-1988618099),current_path], null));
}
} else {
}

var seq__95481_95839 = cljs.core.seq(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(node));
var chunk__95482_95840 = null;
var count__95483_95841 = (0);
var i__95484_95842 = (0);
while(true){
if((i__95484_95842 < count__95483_95841)){
var vec__95495_95843 = chunk__95482_95840.cljs$core$IIndexed$_nth$arity$2(null, i__95484_95842);
var name_95844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95495_95843,(0),null);
var child_95845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95495_95843,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child_95845,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name_95844));


var G__95846 = seq__95481_95839;
var G__95847 = chunk__95482_95840;
var G__95848 = count__95483_95841;
var G__95849 = (i__95484_95842 + (1));
seq__95481_95839 = G__95846;
chunk__95482_95840 = G__95847;
count__95483_95841 = G__95848;
i__95484_95842 = G__95849;
continue;
} else {
var temp__5823__auto___95850 = cljs.core.seq(seq__95481_95839);
if(temp__5823__auto___95850){
var seq__95481_95851__$1 = temp__5823__auto___95850;
if(cljs.core.chunked_seq_QMARK_(seq__95481_95851__$1)){
var c__5525__auto___95852 = cljs.core.chunk_first(seq__95481_95851__$1);
var G__95853 = cljs.core.chunk_rest(seq__95481_95851__$1);
var G__95854 = c__5525__auto___95852;
var G__95855 = cljs.core.count(c__5525__auto___95852);
var G__95856 = (0);
seq__95481_95839 = G__95853;
chunk__95482_95840 = G__95854;
count__95483_95841 = G__95855;
i__95484_95842 = G__95856;
continue;
} else {
var vec__95502_95857 = cljs.core.first(seq__95481_95851__$1);
var name_95858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95502_95857,(0),null);
var child_95859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95502_95857,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child_95859,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name_95858));


var G__95860 = cljs.core.next(seq__95481_95851__$1);
var G__95861 = null;
var G__95862 = (0);
var G__95863 = (0);
seq__95481_95839 = G__95860;
chunk__95482_95840 = G__95861;
count__95483_95841 = G__95862;
i__95484_95842 = G__95863;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))){
var seq__95511 = cljs.core.seq(new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node));
var chunk__95512 = null;
var count__95513 = (0);
var i__95514 = (0);
while(true){
if((i__95514 < count__95513)){
var vec__95528 = chunk__95512.cljs$core$IIndexed$_nth$arity$2(null, i__95514);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95528,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95528,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name));


var G__95864 = seq__95511;
var G__95865 = chunk__95512;
var G__95866 = count__95513;
var G__95867 = (i__95514 + (1));
seq__95511 = G__95864;
chunk__95512 = G__95865;
count__95513 = G__95866;
i__95514 = G__95867;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__95511);
if(temp__5823__auto__){
var seq__95511__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__95511__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__95511__$1);
var G__95868 = cljs.core.chunk_rest(seq__95511__$1);
var G__95869 = c__5525__auto__;
var G__95870 = cljs.core.count(c__5525__auto__);
var G__95871 = (0);
seq__95511 = G__95868;
chunk__95512 = G__95869;
count__95513 = G__95870;
i__95514 = G__95871;
continue;
} else {
var vec__95531 = cljs.core.first(seq__95511__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95531,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95531,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name));


var G__95873 = cljs.core.next(seq__95511__$1);
var G__95874 = null;
var G__95875 = (0);
var G__95876 = (0);
seq__95511 = G__95873;
chunk__95512 = G__95874;
count__95513 = G__95875;
i__95514 = G__95876;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(statecharts.impl.validate_targets.cljs$lang$maxFixedArity = 3);

statecharts.impl.matches = (function statecharts$impl$matches(state,value){
var v1 = statecharts.utils.ensure_vector(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state));
var v2 = statecharts.utils.ensure_vector(value);
return statecharts.impl.is_prefix_QMARK_(v2,v1);
});

//# sourceMappingURL=statecharts.impl.js.map
