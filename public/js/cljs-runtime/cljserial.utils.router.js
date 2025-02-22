goog.provide('cljserial.utils.router');
cljserial.utils.router.RoutePath = new cljs.core.Keyword(null,"string","string",-1989541586);
cljserial.utils.router.RouteProps = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null);
cljserial.utils.router.PureRouteProps = malli.util.merge.cljs$core$IFn$_invoke$arity$2(cljserial.utils.router.RouteProps,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null));
cljserial.utils.router.Route = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),cljserial.utils.router.RoutePath,cljserial.utils.router.RouteProps], null);
cljserial.utils.router.PureRoute = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),cljserial.utils.router.RoutePath,cljserial.utils.router.PureRouteProps], null);
/**
 * Augment reitit minimal route props with a href derived from the title.
 *   N.B. Calling this BEFORE starting the router will cause an error as depends on existing history.
 */
cljserial.utils.router.augment_reitit_route_props = (function cljserial$utils$router$augment_reitit_route_props(route_props,match_name){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.utils.router.RouteProps,route_props))){
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

if(cljs.core.truth_(cljserial.utils.router.PureRouteProps)){
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
cljserial.utils.router.augment_reitit_routes = (function cljserial$utils$router$augment_reitit_routes(routes,match_name){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljserial.utils.router.Route], null),routes))){
} else {
throw (new Error("Assert failed: (m/validate [:sequential Route] routes)"));
}

var _PERCENT_ = (function (){var iter__5523__auto__ = (function cljserial$utils$router$augment_reitit_routes_$_iter__52179(s__52180){
return (new cljs.core.LazySeq(null,(function (){
var s__52180__$1 = s__52180;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__52180__$1);
if(temp__5804__auto__){
var s__52180__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52180__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52180__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52186 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52185 = (0);
while(true){
if((i__52185 < size__5522__auto__)){
var vec__52187 = cljs.core._nth(c__5521__auto__,i__52185);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52187,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52187,(1),null);
cljs.core.chunk_append(b__52186,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljserial.utils.router.augment_reitit_route_props(route_props,match_name)], null));

var G__52245 = (i__52185 + (1));
i__52185 = G__52245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52186),cljserial$utils$router$augment_reitit_routes_$_iter__52179(cljs.core.chunk_rest(s__52180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52186),null);
}
} else {
var vec__52194 = cljs.core.first(s__52180__$2);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52194,(0),null);
var route_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52194,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljserial.utils.router.augment_reitit_route_props(route_props,match_name)], null),cljserial$utils$router$augment_reitit_routes_$_iter__52179(cljs.core.rest(s__52180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(routes);
})();
if(cljs.core.truth_(malli.core.validate)){
} else {
throw (new Error("Assert failed: m/validate"));
}

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljserial.utils.router.PureRoute], null))){
} else {
throw (new Error("Assert failed: [:sequential PureRoute]"));
}

if(cljs.core.truth_(_PERCENT_)){
} else {
throw (new Error("Assert failed: %"));
}

return _PERCENT_;
});
cljserial.utils.router.get_default_view = (function cljserial$utils$router$get_default_view(routes){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(routes)));
});
cljserial.utils.router.get_match_view = (function cljserial$utils$router$get_match_view(routes,route_match){
var default_view = cljserial.utils.router.get_default_view(routes);
if(cljs.core.truth_(route_match)){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_match));
} else {
return default_view;
}
});
cljserial.utils.router.extract_valid_route = (function cljserial$utils$router$extract_valid_route(routes,route_match){
var default_route = cljs.core.second(cljs.core.first(routes));
if(cljs.core.truth_(route_match)){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_match);
} else {
return default_route;
}
});
cljserial.utils.router.inject_routes = (function cljserial$utils$router$inject_routes(props__38176__auto__){
var clj_props__38177__auto__ = uix.core.glue_args(props__38176__auto__);
var vec__52219 = [clj_props__38177__auto__];
var map__52222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52219,(0),null);
var map__52222__$1 = cljs.core.__destructure_map(map__52222);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var languages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"languages","languages",1471910331));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var with_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52222__$1,new cljs.core.Keyword(null,"with-auth","with-auth",-1859683627));
var f__38178__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___52246 = cljserial.utils.router.inject_routes.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___52246)){
var f__38107__auto___52249 = temp__5804__auto___52246;
(f__38107__auto___52249.cljs$core$IFn$_invoke$arity$0 ? f__38107__auto___52249.cljs$core$IFn$_invoke$arity$0() : f__38107__auto___52249.call(null, ));
} else {
}
} else {
}

var session = (function (){var G__52230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auth-session","auth-session",208574324)], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__52230) : cljserial.utils.dbfx.use_sub.call(null, G__52230));
})();
var route_match = (function (){var G__52231 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-match","route-match",-1450985937)], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__52231) : cljserial.utils.dbfx.use_sub.call(null, G__52231));
})();
var route = cljserial.utils.router.extract_valid_route(routes,route_match);
var route_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(session)){
return uix.compiler.alpha.component_element(layout,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),cljserial.utils.router.augment_reitit_routes(routes,route_name),new cljs.core.Keyword(null,"languages","languages",1471910331),languages,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"on-sign-out","on-sign-out",-1169646444),stack.services.auth.sign_out], null)],[]);
} else {
return uix.compiler.alpha.component_element(stack.services.auth.ui_component,[null],[]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__52232 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__52233 = cljserial.utils.router.inject_routes;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__52233);

try{if(((cljs.core.map_QMARK_(clj_props__38177__auto__)) || ((clj_props__38177__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38177__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38177__auto__) (clojure.core/nil? clj-props__38177__auto__))"].join('')));
}

return f__38178__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__52232);
}} else {
return f__38178__auto__();
}
});

(cljserial.utils.router.inject_routes.uix_component_QMARK_ = true);

(cljserial.utils.router.inject_routes.displayName = "cljserial.utils.router/inject-routes");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38116__auto___52250 = window.uix.dev.signature_BANG_();
(sig__38116__auto___52250.cljs$core$IFn$_invoke$arity$4 ? sig__38116__auto___52250.cljs$core$IFn$_invoke$arity$4(cljserial.utils.router.inject_routes,"(use-sub [:auth-session])(use-sub [:route-match])",null,null) : sig__38116__auto___52250.call(null, cljserial.utils.router.inject_routes,"(use-sub [:auth-session])(use-sub [:route-match])",null,null));

window.uix.dev.register_BANG_(cljserial.utils.router.inject_routes,cljserial.utils.router.inject_routes.displayName);

(cljserial.utils.router.inject_routes.fast_refresh_signature = sig__38116__auto___52250);
} else {
}
} else {
}
cljserial.utils.router.start_BANG_ = (function cljserial$utils$router$start_BANG_(routes){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljserial.utils.router.Route], null),routes))){
} else {
throw (new Error("Assert failed: (m/validate [:sequential Route] routes)"));
}

return reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(routes),(function (m){
var G__52238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-matched","route-matched",1753048943),m], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__52238) : cljserial.utils.dbfx.dispatch.call(null, G__52238));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});
cljserial.utils.router.render_BANG_ = (function cljserial$utils$router$render_BANG_(p__52239){
var map__52240 = p__52239;
var map__52240__$1 = cljs.core.__destructure_map(map__52240);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var languages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"languages","languages",1471910331));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var with_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52240__$1,new cljs.core.Keyword(null,"with-auth","with-auth",-1859683627));
stack.services.auth.init(with_auth);

cljserial.utils.router.start_BANG_(routes);

return cljserial.utils.uix.render(uix.compiler.alpha.component_element(cljserial.utils.router.inject_routes,[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"languages","languages",1471910331),languages,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout,new cljs.core.Keyword(null,"with-auth","with-auth",-1859683627),with_auth], null)],[]));
});

//# sourceMappingURL=cljserial.utils.router.js.map
