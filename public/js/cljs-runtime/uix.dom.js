goog.provide('uix.dom');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * Create a React root for the supplied container and return the root.
 * 
 *   See: https://react.dev/reference/react-dom/client/createRoot
 */
uix.dom.create_root = (function uix$dom$create_root(var_args){
var G__96317 = arguments.length;
switch (G__96317) {
case 1:
return uix.dom.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.dom.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return module$node_modules$react_dom$client.createRoot(node);
}));

(uix.dom.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,p__96318){
var map__96321 = p__96318;
var map__96321__$1 = cljs.core.__destructure_map(map__96321);
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96321__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96321__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
var on_caught_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96321__$1,new cljs.core.Keyword(null,"on-caught-error","on-caught-error",2071941198));
var on_uncaught_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96321__$1,new cljs.core.Keyword(null,"on-uncaught-error","on-uncaught-error",289860558));
return module$node_modules$react_dom$client.createRoot(node,({"onRecoverableError": on_recoverable_error, "identifierPrefix": identifier_prefix, "onCaughtError": on_caught_error, "onUncaughtError": on_uncaught_error}));
}));

(uix.dom.create_root.cljs$lang$maxFixedArity = 2);

/**
 * Same as `create-root`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.
 * 
 *   See: https://react.dev/reference/react-dom/client/hydrateRoot
 */
uix.dom.hydrate_root = (function uix$dom$hydrate_root(var_args){
var G__96333 = arguments.length;
switch (G__96333) {
case 2:
return uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,element){
return module$node_modules$react_dom$client.hydrateRoot(container,element);
}));

(uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,element,p__96337){
var map__96341 = p__96337;
var map__96341__$1 = cljs.core.__destructure_map(map__96341);
var options = map__96341__$1;
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96341__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96341__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
return module$node_modules$react_dom$client.hydrateRoot(container,element,({"onRecoverableError": on_recoverable_error, "identifierPrefix": identifier_prefix}));
}));

(uix.dom.hydrate_root.cljs$lang$maxFixedArity = 3);

/**
 * Renders React root into the DOM node.
 */
uix.dom.render_root = (function uix$dom$render_root(element,root){
return root.render(element);
});
/**
 * Remove a mounted React root from the DOM and clean up its event handlers and state.
 */
uix.dom.unmount_root = (function uix$dom$unmount_root(root){
return root.unmount();
});
/**
 * DEPRECATED: Renders element into DOM node. The first argument is React element.
 */
uix.dom.render = (function uix$dom$render(element,node){
return module$node_modules$react_dom$index.render(element,node);
});
/**
 * DEPRECATED: Hydrates server rendered document at `node` with `element`.
 */
uix.dom.hydrate = (function uix$dom$hydrate(element,node){
return module$node_modules$react_dom$index.hydrate(element,node);
});
/**
 * Force React to flush any updates inside the provided callback synchronously.
 *   This ensures that the DOM is updated immediately.
 * 
 *   See: https://react.dev/reference/react-dom/flushSync
 */
uix.dom.flush_sync = (function uix$dom$flush_sync(callback){
return module$node_modules$react_dom$index.flushSync(callback);
});
uix.dom.batched_updates = (function uix$dom$batched_updates(f){
return module$node_modules$react_dom$index.unstable_batchedUpdates(f);
});
/**
 * Unmounts React component rendered into DOM node
 */
uix.dom.unmount_at_node = (function uix$dom$unmount_at_node(node){
return module$node_modules$react_dom$index.unmountComponentAtNode(node);
});
/**
 * If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.
 * 
 *   See: https://react.dev/reference/react-dom/findDOMNode
 */
uix.dom.find_dom_node = (function uix$dom$find_dom_node(component){
return module$node_modules$react_dom$index.findDOMNode(component);
});
/**
 * Creates a portal. Portals provide a way to render children into a DOM node
 *   that exists outside the hierarchy of the DOM component.
 * 
 *   See: https://react.dev/reference/react-dom/createPortal
 */
uix.dom.create_portal = (function uix$dom$create_portal(var_args){
var G__96381 = arguments.length;
switch (G__96381) {
case 2:
return uix.dom.create_portal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.dom.create_portal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.create_portal.cljs$core$IFn$_invoke$arity$2 = (function (child,node){
return module$node_modules$react_dom$index.createPortal(child,node);
}));

(uix.dom.create_portal.cljs$core$IFn$_invoke$arity$3 = (function (child,node,key){
return module$node_modules$react_dom$index.createPortal(child,node,key);
}));

(uix.dom.create_portal.cljs$lang$maxFixedArity = 3);

/**
 * Gives you status information of the last form submission
 * 
 *   See: https://react.dev/reference/react-dom/hooks/useFormStatus
 */
uix.dom.use_form_status = (function uix$dom$use_form_status(){
return module$node_modules$react_dom$index.useFormStatus();
});
/**
 * Lets you eagerly look up the IP of a server that you expect to load resources from.
 *   See: https://react.dev/reference/react-dom/prefetchDNS
 */
uix.dom.prefetch_dns = (function uix$dom$prefetch_dns(url){
return module$node_modules$react_dom$index.prefetchDNS(url);
});
/**
 * Lets you eagerly connect to a server that you expect to load resources from.
 *   See: https://react.dev/reference/react-dom/preconnect
 */
uix.dom.preconnect = (function uix$dom$preconnect(url){
return module$node_modules$react_dom$index.preconnect(url);
});
/**
 * Lets you eagerly fetch a resource such as a stylesheet, font, or external script that you expect to use.
 *   See: https://react.dev/reference/react-dom/preload
 */
uix.dom.preload = (function uix$dom$preload(url,p__96398){
var map__96399 = p__96398;
var map__96399__$1 = cljs.core.__destructure_map(map__96399);
var integrity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"integrity","integrity",-562947111));
var image_src_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"image-src-set","image-src-set",685363003));
var nonce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var fetch_priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"fetch-priority","fetch-priority",-678604566));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var referrer_policy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"referrer-policy","referrer-policy",-504499278));
var image_sizes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"image-sizes","image-sizes",-185365515));
var cross_origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96399__$1,new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210));
return module$node_modules$react_dom$index.preload(url,({"as": as, "type": type, "referrerPolicy": referrer_policy, "crossOrigin": cross_origin, "imageSrcSet": image_src_set, "integrity": integrity, "nonce": nonce, "imageSizes": image_sizes, "fetchPriority": fetch_priority}));
});
/**
 * Lets you eagerly fetch an ESM module that you expect to use.
 *   See: https://react.dev/reference/react-dom/preloadModule
 */
uix.dom.preload_module = (function uix$dom$preload_module(url,p__96426){
var map__96428 = p__96426;
var map__96428__$1 = cljs.core.__destructure_map(map__96428);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var cross_origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210));
var integrity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"integrity","integrity",-562947111));
var nonce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96428__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331));
return module$node_modules$react_dom$index.preloadModule(url,({"as": as, "crossOrigin": cross_origin, "integrity": integrity, "nonce": nonce}));
});
/**
 * Lets you eagerly fetch and evaluate a stylesheet or external script.
 *   See: https://react.dev/reference/react-dom/preinit
 */
uix.dom.preinit = (function uix$dom$preinit(url,p__96437){
var map__96438 = p__96437;
var map__96438__$1 = cljs.core.__destructure_map(map__96438);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var precedence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"precedence","precedence",-425651461));
var cross_origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210));
var integrity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"integrity","integrity",-562947111));
var nonce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331));
var fetch_priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96438__$1,new cljs.core.Keyword(null,"fetch-priority","fetch-priority",-678604566));
return module$node_modules$react_dom$index.preinit(url,({"as": as, "precedence": precedence, "crossOrigin": cross_origin, "integrity": integrity, "nonce": nonce, "fetchPriority": fetch_priority}));
});
/**
 * Lets you eagerly fetch and evaluate an ESM module.
 *   See: https://react.dev/reference/react-dom/preinitModule
 */
uix.dom.preinit_module = (function uix$dom$preinit_module(url,p__96443){
var map__96444 = p__96443;
var map__96444__$1 = cljs.core.__destructure_map(map__96444);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96444__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var cross_origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96444__$1,new cljs.core.Keyword(null,"cross-origin","cross-origin",-2100195210));
var integrity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96444__$1,new cljs.core.Keyword(null,"integrity","integrity",-562947111));
var nonce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__96444__$1,new cljs.core.Keyword(null,"nonce","nonce",564330331));
return module$node_modules$react_dom$index.preinitModule(url,({"as": as, "crossOrigin": cross_origin, "integrity": integrity, "nonce": nonce}));
});

//# sourceMappingURL=uix.dom.js.map
