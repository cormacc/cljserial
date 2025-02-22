goog.provide('stack.examples.pages.cloud_db');
stack.examples.pages.cloud_db.layout = (function stack$examples$pages$cloud_db$layout(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95624 = [clj_props__45318__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95624,(0),null);
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95687 = stack.examples.pages.cloud_db.layout.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95687)){
var f__45248__auto___95688 = temp__5823__auto___95687;
(f__45248__auto___95688.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95688.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95688.call(null, ));
} else {
}
} else {
}

var vec__95627 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var devices = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95627,(0),null);
var set_devices_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95627,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return stack.utils.supabase.get_table.cljs$core$IFn$_invoke$arity$variadic("devices",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"then","then",460598070),set_devices_BANG_], 0));
}),uix.core.jsfy_deps([]));

return uix.compiler.alpha.component_element(stack.components.hardware.device_table,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"devices","devices",1929380599),devices], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95633 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95634 = stack.examples.pages.cloud_db.layout;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95634);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95633);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_db.layout.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_db.layout.displayName = "stack.examples.pages.cloud-db/layout");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95699 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95699.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95699.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_db.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])",null,null) : sig__45257__auto___95699.call(null, stack.examples.pages.cloud_db.layout,"(uix.core/use-state [])(uix.core/use-effect (fn [] (supabase/get-table \"devices\" :then set-devices!)) [])",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_db.layout,stack.examples.pages.cloud_db.layout.displayName);

(stack.examples.pages.cloud_db.layout.fast_refresh_signature = sig__45257__auto___95699);
} else {
}
} else {
}
stack.examples.pages.cloud_db.layout_with_auth = (function stack$examples$pages$cloud_db$layout_with_auth(props__45317__auto__){
var clj_props__45318__auto__ = uix.core.glue_args(props__45317__auto__);
var vec__95657 = [clj_props__45318__auto__];
var _props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__95657,(0),null);
var f__45319__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___95710 = stack.examples.pages.cloud_db.layout_with_auth.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___95710)){
var f__45248__auto___95711 = temp__5823__auto___95710;
(f__45248__auto___95711.cljs$core$IFn$_invoke$arity$0 ? f__45248__auto___95711.cljs$core$IFn$_invoke$arity$0() : f__45248__auto___95711.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.services.auth.wrap_layout,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),stack.examples.pages.cloud_db.layout], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__95666 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__95667 = stack.examples.pages.cloud_db.layout_with_auth;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__95667);

try{if(((cljs.core.map_QMARK_(clj_props__45318__auto__)) || ((clj_props__45318__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__45318__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__45318__auto__) (clojure.core/nil? clj-props__45318__auto__))"].join('')));
}

return f__45319__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__95666);
}} else {
return f__45319__auto__();
}
});

(stack.examples.pages.cloud_db.layout_with_auth.uix_component_QMARK_ = true);

(stack.examples.pages.cloud_db.layout_with_auth.displayName = "stack.examples.pages.cloud-db/layout-with-auth");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__45257__auto___95713 = window.uix.dev.signature_BANG_();
(sig__45257__auto___95713.cljs$core$IFn$_invoke$arity$4 ? sig__45257__auto___95713.cljs$core$IFn$_invoke$arity$4(stack.examples.pages.cloud_db.layout_with_auth,"",null,null) : sig__45257__auto___95713.call(null, stack.examples.pages.cloud_db.layout_with_auth,"",null,null));

window.uix.dev.register_BANG_(stack.examples.pages.cloud_db.layout_with_auth,stack.examples.pages.cloud_db.layout_with_auth.displayName);

(stack.examples.pages.cloud_db.layout_with_auth.fast_refresh_signature = sig__45257__auto___95713);
} else {
}
} else {
}

//# sourceMappingURL=stack.examples.pages.cloud_db.js.map
