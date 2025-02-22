goog.provide('reitit.frontend.easy');
if((typeof reitit !== 'undefined') && (typeof reitit.frontend !== 'undefined') && (typeof reitit.frontend.easy !== 'undefined') && (typeof reitit.frontend.easy.history !== 'undefined')){
} else {
reitit.frontend.easy.history = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * This registers event listeners on HTML5 history and hashchange events.
 * 
 *   Automatically removes previous event listeners so it is safe to call this repeatedly, for example when using
 *   Figwheel or similar development workflow.
 * 
 *   Parameters:
 *   - router         The Reitit router.
 *   - on-navigate    Function to be called when route changes. Takes two parameters, ´match´ and ´history´ object.
 * 
 *   Options:
 *   - :use-fragment  (default true) If true, onhashchange and location hash are used to store current route.
 * 
 *   Options (Html5History):
 *   - :ignore-anchor-click?  Function (router, event, anchor element, uri) which will be called to
 *                         check if the anchor click event should be ignored.
 *                         To extend built-in check, you can call `reitit.frontend.history/ignore-anchor-click?`
 *                         function, which will ignore clicks if the href matches route tree.
 */
reitit.frontend.easy.start_BANG_ = (function reitit$frontend$easy$start_BANG_(router,on_navigate,opts){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.history,reitit.frontend.history.stop_BANG_);

return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3(router,(function reitit$frontend$easy$start_BANG__$_rfe_on_navigate(m,this$){
if((cljs.core.deref(reitit.frontend.easy.history) == null)){
cljs.core.reset_BANG_(reitit.frontend.easy.history,this$);
} else {
}

return (on_navigate.cljs$core$IFn$_invoke$arity$2 ? on_navigate.cljs$core$IFn$_invoke$arity$2(m,this$) : on_navigate.call(null, m,this$));
}),opts);
});
/**
 * Generate a URL for a route defined by name, with given path-params and query-params.
 * 
 *   The URL is formatted using Reitit frontend history handler, so using it with
 *   anchor element href will correctly trigger route change event.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 */
reitit.frontend.easy.href = (function reitit$frontend$easy$href(var_args){
var G__98702 = arguments.length;
switch (G__98702) {
case 1:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,null,null,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2 = (function (name,path_params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,null,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3 = (function (name,path_params,query_params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params,null);
}));

(reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$4 = (function (name,path_params,query_params,fragment){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params,fragment);
}));

(reitit.frontend.easy.href.cljs$lang$maxFixedArity = 4);

/**
 * Updates the browser location and pushes new entry to the history stack using
 *   URL built from a route defined by name, with given path-params and
 *   query-params.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
 */
reitit.frontend.easy.push_state = (function reitit$frontend$easy$push_state(var_args){
var G__98705 = arguments.length;
switch (G__98705) {
case 1:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,null,null,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$2 = (function (name,path_params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,null,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3 = (function (name,path_params,query_params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params,null);
}));

(reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$4 = (function (name,path_params,query_params,fragment){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params,fragment);
}));

(reitit.frontend.easy.push_state.cljs$lang$maxFixedArity = 4);

/**
 * Updates the browser location and replaces latest entry in the history stack
 *   using URL built from a route defined by name, with given path-params and
 *   query-params.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
 */
reitit.frontend.easy.replace_state = (function reitit$frontend$easy$replace_state(var_args){
var G__98708 = arguments.length;
switch (G__98708) {
case 1:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,null,null,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$2 = (function (name,path_params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,null,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$3 = (function (name,path_params,query_params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params,null);
}));

(reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$4 = (function (name,path_params,query_params,fragment){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$5(cljs.core.deref(reitit.frontend.easy.history),name,path_params,query_params,fragment);
}));

(reitit.frontend.easy.replace_state.cljs$lang$maxFixedArity = 4);

/**
 * Updates the browser location and either pushes new entry to the history stack
 *   or replaces the latest entry in the the history stack (controlled by
 *   `replace` option) using URL built from a route defined by name given
 *   parameters.
 * 
 *   Will also trigger on-navigate callback on Reitit frontend History handler.
 * 
 *   Note: currently collections in query-parameters are encoded as field-value
 *   pairs separated by &, i.e. "?a=1&a=2", if you want to encode them
 *   differently, convert the collections to strings first.
 * 
 *   See also:
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
 *   https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
 */
reitit.frontend.easy.navigate = (function reitit$frontend$easy$navigate(var_args){
var G__98712 = arguments.length;
switch (G__98712) {
case 1:
return reitit.frontend.easy.navigate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.navigate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.navigate.cljs$core$IFn$_invoke$arity$1 = (function (name){
return reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reitit.frontend.easy.history),name);
}));

(reitit.frontend.easy.navigate.cljs$core$IFn$_invoke$arity$2 = (function (name,p__98714){
var map__98715 = p__98714;
var map__98715__$1 = cljs.core.__destructure_map(map__98715);
var opts = map__98715__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98715__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98715__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98715__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
var fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98715__$1,new cljs.core.Keyword(null,"fragment","fragment",826775688));
return reitit.frontend.history.navigate.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(reitit.frontend.easy.history),name,opts);
}));

(reitit.frontend.easy.navigate.cljs$lang$maxFixedArity = 2);

/**
 * Update query parameters for the current route.
 * 
 *   New query params can be given as a map, or a function taking
 *   the old params and returning the new modified params.
 * 
 *   Note: The query parameter values aren't coereced, so the
 *   update fn will see string values for all query params.
 */
reitit.frontend.easy.set_query = (function reitit$frontend$easy$set_query(var_args){
var G__98718 = arguments.length;
switch (G__98718) {
case 1:
return reitit.frontend.easy.set_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.frontend.easy.set_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.frontend.easy.set_query.cljs$core$IFn$_invoke$arity$1 = (function (new_query_or_update_fn){
return reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(reitit.frontend.easy.history),new_query_or_update_fn);
}));

(reitit.frontend.easy.set_query.cljs$core$IFn$_invoke$arity$2 = (function (new_query_or_update_fn,p__98720){
var map__98721 = p__98720;
var map__98721__$1 = cljs.core.__destructure_map(map__98721);
var opts = map__98721__$1;
var replace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__98721__$1,new cljs.core.Keyword(null,"replace","replace",-786587770));
return reitit.frontend.history.set_query.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(reitit.frontend.easy.history),new_query_or_update_fn,opts);
}));

(reitit.frontend.easy.set_query.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.frontend.easy.js.map
