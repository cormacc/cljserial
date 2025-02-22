goog.provide('stack.services.router');
stack.services.router.RoutePath = new cljs.core.Keyword(null,"string","string",-1989541586);
stack.services.router.RouteProps = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null);
stack.services.router.PureRouteProps = malli.util.merge.cljs$core$IFn$_invoke$arity$2(stack.services.router.RouteProps,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null));
stack.services.router.Route = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),stack.services.router.RoutePath,stack.services.router.RouteProps], null);
stack.services.router.PureRoute = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),stack.services.router.RoutePath,stack.services.router.PureRouteProps], null);
var G__98763_98817 = new cljs.core.Keyword(null,"route-matched","route-matched",1753048943);
var G__98764_98818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__98767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null);
return (stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.path.cljs$core$IFn$_invoke$arity$1(G__98767) : stack.utils.dbfx.path.call(null, G__98767));
})()], null);
var G__98765_98819 = (function (_current_match,p__98769){
var vec__98770 = p__98769;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98770,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98770,(1),null);
return new_match;
});
(stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3 ? stack.utils.dbfx.reg_event_db.cljs$core$IFn$_invoke$arity$3(G__98763_98817,G__98764_98818,G__98765_98819) : stack.utils.dbfx.reg_event_db.call(null, G__98763_98817,G__98764_98818,G__98765_98819));
var G__98773_98822 = new cljs.core.Keyword(null,"route-match","route-match",-1450985937);
var G__98774_98823 = (function (db,_){
return new cljs.core.Keyword(null,"route-match","route-match",-1450985937).cljs$core$IFn$_invoke$arity$1(db);
});
(stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2 ? stack.utils.dbfx.reg_sub.cljs$core$IFn$_invoke$arity$2(G__98773_98822,G__98774_98823) : stack.utils.dbfx.reg_sub.call(null, G__98773_98822,G__98774_98823));
/**
 * Augment reitit minimal route props with a href derived from the title.
 *   N.B. Calling this BEFORE starting the router will cause an error as depends on existing history.
 */
stack.services.router.augment_reitit_route_props = (function stack$services$router$augment_reitit_route_props(route_props,match_name){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(stack.services.router.RouteProps,route_props))){
} else {
throw (new Error("Assert failed: (m/validate RouteProps route-props)"));
}

var _PERCENT_ = (function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route_props);
var active = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,match_name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(route_props,new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(name),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active","active",1895962068),active], 0));
})();
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(stack.services.router.PureRouteProps)){
} else {
throw (new Error("Assert failed: PureRouteProps"));
}

if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
/**
 * Augment each reitit route with a href derived from the title.
 */
stack.services.router.augment_routes = (function stack$services$router$augment_routes(routes,match_name){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),stack.services.router.Route], null),routes))){
} else {
throw (new Error("Assert failed: (m/validate [:sequential Route] routes)"));
}

var _PERCENT_ = (function (){var iter__5480__auto__ = (function stack$services$router$augment_routes_$_iter__98776(s__98777){
return (new cljs.core.LazySeq(null,(function (){
var s__98777__$1 = s__98777;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__98777__$1);
if(temp__5823__auto__){
var s__98777__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__98777__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__98777__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__98779 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__98778 = (0);
while(true){
if((i__98778 < size__5479__auto__)){
var vec__98782 = cljs.core._nth(c__5478__auto__,i__98778);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98782,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98782,(1),null);
cljs.core.chunk_append(b__98779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,stack.services.router.augment_reitit_route_props(route_props,match_name)], null));

var G__98825 = (i__98778 + (1));
i__98778 = G__98825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__98779),stack$services$router$augment_routes_$_iter__98776(cljs.core.chunk_rest(s__98777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__98779),null);
}
} else {
var vec__98785 = cljs.core.first(s__98777__$2);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98785,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98785,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,stack.services.router.augment_reitit_route_props(route_props,match_name)], null),stack$services$router$augment_routes_$_iter__98776(cljs.core.rest(s__98777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})();
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),stack.services.router.PureRoute], null))){
} else {
throw (new Error("Assert failed: [:sequential PureRoute]"));
}

if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
stack.services.router.extract_valid_route = (function stack$services$router$extract_valid_route(routes,route_match){
var default_route = cljs.core.second(cljs.core.first(routes));
if(cljs.core.truth_(route_match)){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_match);
} else {
return default_route;
}
});
stack.services.router.inject_routes = (function stack$services$router$inject_routes(props__46991__auto__){
var props98790 = uix.core.glue_args(props__46991__auto__);
var vec__98792 = [props98790];
var map__98795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98792,(0),null);
var map__98795__$1 = cljs.core.__destructure_map(map__98795);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98795__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98795__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98795__$1,new cljs.core.Keyword(null,"wrapper","wrapper",-969103524));
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98828 = stack.services.router.inject_routes.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98828)){
var f__46909__auto___98829 = temp__5823__auto___98828;
(f__46909__auto___98829.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98829.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98829.call(null, ));
} else {
}
} else {
}

var route_match = (function (){var G__98798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__98798) : stack.utils.dbfx.use_sub.call(null, G__98798));
})();
var route = stack.services.router.extract_valid_route(routes,route_match);
var route_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route);
var layout__$1 = (function (){var uix_fn98799 = (function stack$services$router$inject_routes_$_uix_fn98799(props__46996__auto__){
var props98800 = uix.core.glue_args(props__46996__auto__);
var vec__98801 = [props98800];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98801,(0),null);
var f__46997__auto__ = (function (){

return uix.compiler.alpha.component_element(layout,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),stack.services.router.augment_routes(routes,route_name),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(route)], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98804 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98805 = stack$services$router$inject_routes_$_uix_fn98799;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98805);

try{if(((cljs.core.map_QMARK_(props98800)) || ((props98800 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98800)].join(''),"\n","(clojure.core/or (clojure.core/map? props98800) (clojure.core/nil? props98800))"].join('')));
}

return f__46997__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98804);
}} else {
return f__46997__auto__();
}
});
(uix_fn98799.uix_component_QMARK_ = true);

(uix_fn98799.displayName = "uix-fn98799");

Object.defineProperty(uix_fn98799,"name",(function (){var obj98807 = ({"value":"uix-fn98799"});
return obj98807;
})());

return uix_fn98799;
})();
if(cljs.core.truth_(wrapper)){
return uix.compiler.alpha.component_element(wrapper,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),layout__$1], null)],[]);
} else {
return uix.compiler.alpha.component_element(layout__$1,[null],[]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98808 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98809 = stack.services.router.inject_routes;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98809);

try{if(((cljs.core.map_QMARK_(props98790)) || ((props98790 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98790)].join(''),"\n","(clojure.core/or (clojure.core/map? props98790) (clojure.core/nil? props98790))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98808);
}} else {
return f__46992__auto__();
}
});

(stack.services.router.inject_routes.uix_component_QMARK_ = true);

(stack.services.router.inject_routes.displayName = "stack.services.router/inject-routes");

Object.defineProperty(stack.services.router.inject_routes,"name",(function (){var obj98812 = ({"value":"stack.services.router/inject-routes"});
return obj98812;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98831 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98831.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98831.cljs$core$IFn$_invoke$arity$4(stack.services.router.inject_routes,"(dbfx/use-sub [:route-match])",null,null) : sig__46918__auto___98831.call(null, stack.services.router.inject_routes,"(dbfx/use-sub [:route-match])",null,null));

window.uix.dev.register_BANG_(stack.services.router.inject_routes,stack.services.router.inject_routes.displayName);

(stack.services.router.inject_routes.fast_refresh_signature = sig__46918__auto___98831);
} else {
}
} else {
}

stack.services.router.start_BANG_ = (function stack$services$router$start_BANG_(routes){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),stack.services.router.Route], null),routes))){
} else {
throw (new Error("Assert failed: (m/validate [:sequential Route] routes)"));
}

return stack.utils.router.start_BANG_(routes,(function (p1__98813_SHARP_){
var G__98814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-matched","route-matched",1753048943),p1__98813_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__98814) : stack.utils.dbfx.dispatch.call(null, G__98814));
}));
});
stack.services.router.render_BANG_ = (function stack$services$router$render_BANG_(p__98815){
var map__98816 = p__98815;
var map__98816__$1 = cljs.core.__destructure_map(map__98816);
var props = map__98816__$1;
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98816__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98816__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__98816__$1,new cljs.core.Keyword(null,"wrapper","wrapper",-969103524),null);
stack.services.router.start_BANG_(routes);

return stack.utils.uix.render(uix.compiler.alpha.component_element(stack.services.router.inject_routes,uix.compiler.attributes.interpret_props(props),[]));
});

//# sourceMappingURL=stack.services.router.js.map
