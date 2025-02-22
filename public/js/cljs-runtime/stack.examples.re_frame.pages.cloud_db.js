goog.provide('stack.examples.re_frame.pages.cloud_db');
stack.examples.re_frame.pages.cloud_db.layout = (function stack$examples$re_frame$pages$cloud_db$layout(props__46991__auto__){
var props98332 = uix.core.glue_args(props__46991__auto__);
var vec__98339 = [props98332];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98339,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98427 = stack.examples.re_frame.pages.cloud_db.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98427)){
var f__46909__auto___98430 = temp__5823__auto___98427;
(f__46909__auto___98430.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98430.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98430.call(null, ));
} else {
}
} else {
}

var vec__98343 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var devices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98343,(0),null);
var set_devices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98343,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic("devices",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),set_devices_BANG_], 0));
}),[uix.hooks.alpha.use_clj_deps(cljs.core.PersistentVector.EMPTY)]);

return uix.compiler.alpha.component_element(stack.uix.hardware.device_table,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"devices","devices",1929380599),devices], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98362 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98363 = stack.examples.re_frame.pages.cloud_db.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98363);

try{if(((cljs.core.map_QMARK_(props98332)) || ((props98332 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98332)].join(''),"\n","(clojure.core/or (clojure.core/map? props98332) (clojure.core/nil? props98332))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98362);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_db.layout.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_db.layout.displayName = "stack.examples.re-frame.pages.cloud-db/layout");

Object.defineProperty(stack.examples.re_frame.pages.cloud_db.layout,"name",(function (){var obj98372 = ({"value":"stack.examples.re-frame.pages.cloud-db/layout"});
return obj98372;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98442 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98442.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98442.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_db.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])",null,null) : sig__46918__auto___98442.call(null, stack.examples.re_frame.pages.cloud_db.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_db.layout,stack.examples.re_frame.pages.cloud_db.layout.displayName);

(stack.examples.re_frame.pages.cloud_db.layout.fast_refresh_signature = sig__46918__auto___98442);
} else {
}
} else {
}

stack.examples.re_frame.pages.cloud_db.layout_with_auth = (function stack$examples$re_frame$pages$cloud_db$layout_with_auth(props__46991__auto__){
var props98388 = uix.core.glue_args(props__46991__auto__);
var vec__98392 = [props98388];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__98392,(0),null);
var f__46992__auto__ = (function (){

if(goog.DEBUG){
var temp__5823__auto___98445 = stack.examples.re_frame.pages.cloud_db.layout_with_auth.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___98445)){
var f__46909__auto___98449 = temp__5823__auto___98445;
(f__46909__auto___98449.cljs$core$IFn$_invoke$arity$0 ? f__46909__auto___98449.cljs$core$IFn$_invoke$arity$0() : f__46909__auto___98449.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.services.auth.wrap_layout,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),stack.examples.re_frame.pages.cloud_db.layout], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__98404 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__98405 = stack.examples.re_frame.pages.cloud_db.layout_with_auth;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__98405);

try{if(((cljs.core.map_QMARK_(props98388)) || ((props98388 == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(props98388)].join(''),"\n","(clojure.core/or (clojure.core/map? props98388) (clojure.core/nil? props98388))"].join('')));
}

return f__46992__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__98404);
}} else {
return f__46992__auto__();
}
});

(stack.examples.re_frame.pages.cloud_db.layout_with_auth.uix_component_QMARK_ = true);

(stack.examples.re_frame.pages.cloud_db.layout_with_auth.displayName = "stack.examples.re-frame.pages.cloud-db/layout-with-auth");

Object.defineProperty(stack.examples.re_frame.pages.cloud_db.layout_with_auth,"name",(function (){var obj98420 = ({"value":"stack.examples.re-frame.pages.cloud-db/layout-with-auth"});
return obj98420;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__46918__auto___98456 = window.uix.dev.signature_BANG_();
(sig__46918__auto___98456.cljs$core$IFn$_invoke$arity$4 ? sig__46918__auto___98456.cljs$core$IFn$_invoke$arity$4(stack.examples.re_frame.pages.cloud_db.layout_with_auth,"",null,null) : sig__46918__auto___98456.call(null, stack.examples.re_frame.pages.cloud_db.layout_with_auth,"",null,null));

window.uix.dev.register_BANG_(stack.examples.re_frame.pages.cloud_db.layout_with_auth,stack.examples.re_frame.pages.cloud_db.layout_with_auth.displayName);

(stack.examples.re_frame.pages.cloud_db.layout_with_auth.fast_refresh_signature = sig__46918__auto___98456);
} else {
}
} else {
}


//# sourceMappingURL=stack.examples.re_frame.pages.cloud_db.js.map
