goog.provide('re_frame.flow.alpha');
re_frame.flow.alpha.db_path_QMARK_ = cljs.core.vector_QMARK_;
re_frame.flow.alpha.flow_QMARK_ = cljs.core.map_QMARK_;
re_frame.flow.alpha.flow_LT___QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150));
re_frame.flow.alpha.flows = re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);
re_frame.flow.alpha.lookup = (function re_frame$flow$alpha$lookup(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.flow.alpha.flows),id);
});
re_frame.flow.alpha.input_ids = (function re_frame$flow$alpha$input_ids(p__86688){
var map__86689 = p__86688;
var map__86689__$1 = cljs.core.__destructure_map(map__86689);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86689__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86689__$1,new cljs.core.Keyword(null,"live-inputs","live-inputs",1350889395));
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(re_frame.flow.alpha.db_path_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__86687_SHARP_){
var or__5002__auto__ = new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150).cljs$core$IFn$_invoke$arity$1(p1__86687_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return p1__86687_SHARP_;
}
}))),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(inputs),cljs.core.vals(live_inputs)))));
});
re_frame.flow.alpha.topsort = (function re_frame$flow$alpha$topsort(flows){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(flows,cljs.core.reverse(re_frame.utils.topsort_kahn(re_frame.utils.remove_orphans(re_frame.utils.map_vals(re_frame.flow.alpha.input_ids,flows)))));
});
re_frame.flow.alpha.default$ = (function re_frame$flow$alpha$default(id){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),new cljs.core.Keyword(null,"inputs","inputs",865803858),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.constantly(true),new cljs.core.Keyword(null,"live?","live?",-1539352230),cljs.core.constantly(true),new cljs.core.Keyword(null,"live-inputs","live-inputs",1350889395),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),re_frame.utils.deep_dissoc], null);
});
re_frame.flow.alpha.stale_in_flows = (function re_frame$flow$alpha$stale_in_flows(flows,p__86707){
var map__86708 = p__86707;
var map__86708__$1 = cljs.core.__destructure_map(map__86708);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86708__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
return cljs.core.reduce_kv((function (m,k,p__86709){
var map__86710 = p__86709;
var map__86710__$1 = cljs.core.__destructure_map(map__86710);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86710__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var G__86712 = m;
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.vals(inputs)),path)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86712,k,path);
} else {
return G__86712;
}
}),cljs.core.PersistentArrayMap.EMPTY,flows);
});
re_frame.flow.alpha.stale_out_flows = (function re_frame$flow$alpha$stale_out_flows(flows,p__86713){
var map__86714 = p__86713;
var map__86714__$1 = cljs.core.__destructure_map(map__86714);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86714__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.reduce_kv((function (m,k,p__86719){
var map__86720 = p__86719;
var map__86720__$1 = cljs.core.__destructure_map(map__86720);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86720__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var bad_inputs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([path]),cljs.core.val)),inputs);
var G__86721 = m;
if(cljs.core.seq(bad_inputs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__86721,k,bad_inputs);
} else {
return G__86721;
}
}),cljs.core.PersistentArrayMap.EMPTY,flows);
});
re_frame.flow.alpha.validate_inputs = (function re_frame$flow$alpha$validate_inputs(p__86727){
var map__86728 = p__86727;
var map__86728__$1 = cljs.core.__destructure_map(map__86728);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86728__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var seq__86729 = cljs.core.seq(inputs);
var chunk__86731 = null;
var count__86732 = (0);
var i__86733 = (0);
while(true){
if((i__86733 < count__86732)){
var vec__86754 = chunk__86731.cljs$core$IIndexed$_nth$arity$2(null, i__86733);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86754,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86754,(1),null);
if(cljs.core.not(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,re_frame.flow.alpha.flow_LT___QMARK_)(input))){
throw (new Error("bad input"));


var G__86891 = seq__86729;
var G__86892 = chunk__86731;
var G__86893 = count__86732;
var G__86894 = (i__86733 + (1));
seq__86729 = G__86891;
chunk__86731 = G__86892;
count__86732 = G__86893;
i__86733 = G__86894;
continue;
} else {
var G__86895 = seq__86729;
var G__86896 = chunk__86731;
var G__86897 = count__86732;
var G__86898 = (i__86733 + (1));
seq__86729 = G__86895;
chunk__86731 = G__86896;
count__86732 = G__86897;
i__86733 = G__86898;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__86729);
if(temp__5823__auto__){
var seq__86729__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__86729__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__86729__$1);
var G__86899 = cljs.core.chunk_rest(seq__86729__$1);
var G__86900 = c__5525__auto__;
var G__86901 = cljs.core.count(c__5525__auto__);
var G__86902 = (0);
seq__86729 = G__86899;
chunk__86731 = G__86900;
count__86732 = G__86901;
i__86733 = G__86902;
continue;
} else {
var vec__86757 = cljs.core.first(seq__86729__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86757,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86757,(1),null);
if(cljs.core.not(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.db_path_QMARK_,re_frame.flow.alpha.flow_LT___QMARK_)(input))){
throw (new Error("bad input"));


var G__86903 = cljs.core.next(seq__86729__$1);
var G__86904 = null;
var G__86905 = (0);
var G__86906 = (0);
seq__86729 = G__86903;
chunk__86731 = G__86904;
count__86732 = G__86905;
i__86733 = G__86906;
continue;
} else {
var G__86907 = cljs.core.next(seq__86729__$1);
var G__86908 = null;
var G__86909 = (0);
var G__86910 = (0);
seq__86729 = G__86907;
chunk__86731 = G__86908;
count__86732 = G__86909;
i__86733 = G__86910;
continue;
}
}
} else {
return null;
}
}
break;
}
});
re_frame.flow.alpha.warn_stale_dependencies = (function re_frame$flow$alpha$warn_stale_dependencies(flows,new_flow){
var ins = re_frame.flow.alpha.stale_in_flows(flows,new_flow);
var outs = re_frame.flow.alpha.stale_out_flows(flows,new_flow);
var warn_ins = (function (p__86765){
var vec__86768 = p__86765;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86768,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86768,(1),null);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Input",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"matches the output path of",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".\n","  For an explicit dependency, change it to (re-frame/flow<-",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")."].join(''),"\n"], null);
});
var warn_outs = (function (p__86771){
var vec__86772 = p__86771;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86772,(0),null);
var inputs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86772,(1),null);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__86778){
var vec__86779 = p__86778;
var input_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86779,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86779,(1),null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["- Output",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new_flow)),"matches the input",cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_id),"of the flow",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".\n"].join(''),"  For an explicit dependency, change that input to","(re-frame/flow<-",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_flow)),")."].join(''),"\n"], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inputs], 0));
});
var warnings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(warn_ins,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ins], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(warn_outs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([outs], 0)));
if(cljs.core.seq(warnings)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(re_frame.loggers.console,new cljs.core.Keyword(null,"warn","warn",-436710552),"Warning: You called `reg-flow` with the flow",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_flow)),"but this created stale dependencies.\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Your flows may not evaluate in the correct order.\n",warnings], 0));
} else {
return null;
}
});
re_frame.flow.alpha.reg_flow = (function re_frame$flow$alpha$reg_flow(var_args){
var G__86788 = arguments.length;
switch (G__86788) {
case 2:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2 = (function (k,m){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"id","id",-1388402092),k));
}));

(re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1 = (function (m){
re_frame.flow.alpha.validate_inputs(m);

re_frame.flow.alpha.warn_stale_dependencies(cljs.core.deref(re_frame.flow.alpha.flows),m);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m),cljs.core.with_meta(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame.flow.alpha.default$(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)),m], 0)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-frame.flow.alpha","new?","re-frame.flow.alpha/new?",1214332038),true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-frame.flow.alpha","ref","re-frame.flow.alpha/ref",854314016),reagent.ratom.make_reaction((function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.db.app_db),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m));
}))], null)], 0))));
}));

(re_frame.flow.alpha.reg_flow.cljs$lang$maxFixedArity = 2);

re_frame.flow.alpha.clear_flow = (function re_frame$flow$alpha$clear_flow(var_args){
var G__86804 = arguments.length;
switch (G__86804) {
case 0:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0 = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into,cljs.core.deref(re_frame.flow.alpha.flows)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flows,cljs.core.empty);
}));

(re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1 = (function (id){
var temp__5823__auto__ = re_frame.flow.alpha.lookup(id);
if(cljs.core.truth_(temp__5823__auto__)){
var flow = temp__5823__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.flows,cljs.core.dissoc,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.update,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow),flow], 0));
} else {
return null;
}
}));

(re_frame.flow.alpha.clear_flow.cljs$lang$maxFixedArity = 1);

re_frame.flow.alpha.flow_LT__ = (function re_frame$flow$alpha$flow_LT__(id){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150),id], null);
});
re_frame.flow.alpha.flow_fx_ids = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-flow","clear-flow",2086400997),null,new cljs.core.Keyword(null,"reg-flow","reg-flow",-1365926178),null], null), null);
re_frame.flow.alpha.do_effect = (function re_frame$flow$alpha$do_effect(p__86812){
var vec__86813 = p__86812;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86813,(1),null);
var fexpr__86816 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"fx","fx",-1237829572),k,false);
return (fexpr__86816.cljs$core$IFn$_invoke$arity$1 ? fexpr__86816.cljs$core$IFn$_invoke$arity$1(v) : fexpr__86816.call(null, v));
});
re_frame.flow.alpha.remove_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,re_frame.flow.alpha.flow_fx_ids);
re_frame.flow.alpha.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-flow-fx","do-flow-fx",528807066),new cljs.core.Keyword(null,"after","after",594996914),(function (p__86821){
var map__86822 = p__86821;
var map__86822__$1 = cljs.core.__destructure_map(map__86822);
var ctx = map__86822__$1;
var map__86823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86822__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var map__86823__$1 = cljs.core.__destructure_map(map__86823);
var effects = map__86823__$1;
var fx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86823__$1,new cljs.core.Keyword(null,"fx","fx",-1237829572));
var flow_fx = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(effects,re_frame.flow.alpha.flow_fx_ids),cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.flow_fx_ids,cljs.core.first),fx));
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.do_effect,flow_fx));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"fx","fx",-1237829572)], null),re_frame.flow.alpha.remove_fx),new cljs.core.Keyword(null,"effects","effects",-282369292),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY),re_frame.flow.alpha.remove_fx));
})], null)], 0));
re_frame.flow.alpha.resolve_input = (function re_frame$flow$alpha$resolve_input(db,input){
if(cljs.core.vector_QMARK_(input)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,input);
} else {
var G__86826 = input;
var G__86826__$1 = (((G__86826 == null))?null:new cljs.core.Keyword("re-frame.flow.alpha","flow<-","re-frame.flow.alpha/flow<-",1540916150).cljs$core$IFn$_invoke$arity$1(G__86826));
var G__86826__$2 = (((G__86826__$1 == null))?null:re_frame.flow.alpha.lookup(G__86826__$1));
var G__86826__$3 = (((G__86826__$2 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__86826__$2));
if((G__86826__$3 == null)){
return null;
} else {
return (re_frame.flow.alpha.resolve_input.cljs$core$IFn$_invoke$arity$2 ? re_frame.flow.alpha.resolve_input.cljs$core$IFn$_invoke$arity$2(db,G__86826__$3) : re_frame.flow.alpha.resolve_input.call(null, db,G__86826__$3));
}
}
});
re_frame.flow.alpha.resolve_inputs = (function re_frame$flow$alpha$resolve_inputs(db,inputs){
if(cljs.core.empty_QMARK_(inputs)){
return db;
} else {
return re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.flow.alpha.resolve_input,db),inputs);
}
});
re_frame.flow.alpha.run = (function re_frame$flow$alpha$run(ctx,p__86829){
var map__86830 = p__86829;
var map__86830__$1 = cljs.core.__destructure_map(map__86830);
var flow = map__86830__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var cleanup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959));
var live_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"live?","live?",-1539352230));
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"inputs","inputs",865803858));
var live_inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"live-inputs","live-inputs",1350889395));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var cleared_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86830__$1,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548));
var map__86835 = cljs.core.meta(flow);
var map__86835__$1 = cljs.core.__destructure_map(map__86835);
var new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86835__$1,new cljs.core.Keyword("re-frame.flow.alpha","new?","re-frame.flow.alpha/new?",1214332038));
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
var db = (function (){var or__5002__auto__ = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return old_db;
}
})();
var id__GT_old_in = re_frame.flow.alpha.resolve_inputs(old_db,inputs);
var id__GT_in = re_frame.flow.alpha.resolve_inputs(db,inputs);
var dirty_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id__GT_in,id__GT_old_in);
var id__GT_old_live_in = re_frame.flow.alpha.resolve_inputs(old_db,live_inputs);
var id__GT_live_in = re_frame.flow.alpha.resolve_inputs(db,live_inputs);
var bardo = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new_QMARK_)?new cljs.core.Keyword(null,"new","new",-2085437848):(cljs.core.truth_((live_QMARK_.cljs$core$IFn$_invoke$arity$1 ? live_QMARK_.cljs$core$IFn$_invoke$arity$1(id__GT_old_live_in) : live_QMARK_.call(null, id__GT_old_live_in)))?new cljs.core.Keyword(null,"live","live",-1610148039):new cljs.core.Keyword(null,"dead","dead",-1946604091)
)),(cljs.core.truth_(cleared_QMARK_)?new cljs.core.Keyword(null,"cleared","cleared",-1267667336):(cljs.core.truth_((live_QMARK_.cljs$core$IFn$_invoke$arity$1 ? live_QMARK_.cljs$core$IFn$_invoke$arity$1(id__GT_live_in) : live_QMARK_.call(null, id__GT_live_in)))?new cljs.core.Keyword(null,"live","live",-1610148039):new cljs.core.Keyword(null,"dead","dead",-1946604091)
))], null);
var new_db = (function (){var G__86841 = bardo;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__86841)){
var G__86844 = db;
if(dirty_QMARK_){
return cljs.core.assoc_in(G__86844,path,(output.cljs$core$IFn$_invoke$arity$1 ? output.cljs$core$IFn$_invoke$arity$1(id__GT_in) : output.call(null, id__GT_in)));
} else {
return G__86844;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null),G__86841)){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(db,path) : cleanup.call(null, db,path));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__86841)){
return cljs.core.assoc_in(db,path,(output.cljs$core$IFn$_invoke$arity$1 ? output.cljs$core$IFn$_invoke$arity$1(id__GT_in) : output.call(null, id__GT_in)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"live","live",-1610148039)], null),G__86841)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.flow.alpha.flows,cljs.core.update,id,cljs.core.vary_meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","new?","re-frame.flow.alpha/new?",1214332038)], 0));

return cljs.core.assoc_in(db,path,(output.cljs$core$IFn$_invoke$arity$1 ? output.cljs$core$IFn$_invoke$arity$1(id__GT_in) : output.call(null, id__GT_in)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"cleared","cleared",-1267667336)], null),G__86841)){
return (cleanup.cljs$core$IFn$_invoke$arity$2 ? cleanup.cljs$core$IFn$_invoke$arity$2(db,path) : cleanup.call(null, db,path));
} else {
return null;

}
}
}
}
}
})();
var G__86849 = ctx;
if(cljs.core.truth_(new_db)){
return re_frame.interceptor.assoc_effect(G__86849,new cljs.core.Keyword(null,"db","db",993250759),new_db);
} else {
return G__86849;
}
});
re_frame.flow.alpha.with_cleared = (function re_frame$flow$alpha$with_cleared(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__86852){
var vec__86856 = p__86852;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86856,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327),k,cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword("re-frame.flow.alpha","cleared?","re-frame.flow.alpha/cleared?",1524733548),true)], null);
}),new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m))));
});
re_frame.flow.alpha.interceptor = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"flow","flow",590489032),new cljs.core.Keyword(null,"after","after",594996914),(function (ctx){
var all_flows = re_frame.flow.alpha.with_cleared(cljs.core.deref(re_frame.flow.alpha.flows));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.flow.alpha.flows,cljs.core.vary_meta,cljs.core.dissoc,new cljs.core.Keyword("re-frame.flow.alpha","cleared","re-frame.flow.alpha/cleared",234911327));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frame.flow.alpha.run,ctx,cljs.core.memoize(re_frame.flow.alpha.topsort)(all_flows));
})], null)], 0));

//# sourceMappingURL=re_frame.flow.alpha.js.map
