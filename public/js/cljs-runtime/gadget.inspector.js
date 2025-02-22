goog.provide('gadget.inspector');
gadget.inspector._STAR_remote_inspector_STAR_ = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not(window.cljs_data_browser);
if(and__5000__auto__){
return cljs.core.re_find(/^http:\/\/localhost(:|$)/,location.origin);
} else {
return and__5000__auto__;
}
})())?"http://localhost:7117":null);
gadget.inspector.event_source = null;
gadget.inspector.client_id = null;
gadget.inspector.ensure_event_source = (function gadget$inspector$ensure_event_source(){
if(cljs.core.truth_((function (){var and__5000__auto__ = (gadget.inspector.event_source == null);
if(and__5000__auto__){
return gadget.inspector._STAR_remote_inspector_STAR_;
} else {
return and__5000__auto__;
}
})())){
return fetch([cljs.core.str.cljs$core$IFn$_invoke$arity$1(gadget.inspector._STAR_remote_inspector_STAR_),"/clients"].join(''),({"method": "POST", "mode": "cors", "headers": ({"content-type": "application/json"}), "body": JSON.stringify(({"userAgent": navigator.userAgent, "host": location.host}))})).then((function (p1__63338_SHARP_){
return p1__63338_SHARP_.json();
})).then((function (p1__63339_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__63339_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
})).then((function (p__63346){
var map__63347 = p__63346;
var map__63347__$1 = cljs.core.__destructure_map(map__63347);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
gadget.inspector.event_source = (function (){var source = (new EventSource([cljs.core.str.cljs$core$IFn$_invoke$arity$1(gadget.inspector._STAR_remote_inspector_STAR_),"/events/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')));
source.addEventListener("action",(function (event){
return gadget.core.action(event.data);
}));

return source;
})();

gadget.inspector.client_id = id;

return id;
}));
} else {
return Promise.resolve(gadget.inspector.client_id);
}
});
gadget.core.render_data.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (data_fn){
var inspector = gadget.inspector._STAR_remote_inspector_STAR_;
if(cljs.core.truth_(window.cljs_data_browser)){
return cljs_data_browser((data_fn.cljs$core$IFn$_invoke$arity$0 ? data_fn.cljs$core$IFn$_invoke$arity$0() : data_fn.call(null, )));
} else {
if(cljs.core.truth_(inspector)){
return gadget.inspector.ensure_event_source().then((function (client_id){
return fetch([cljs.core.str.cljs$core$IFn$_invoke$arity$1(inspector),"/events/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id)].join(''),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"mode","mode",654403691),"cors",new cljs.core.Keyword(null,"body","body",-2049205669),(data_fn.cljs$core$IFn$_invoke$arity$0 ? data_fn.cljs$core$IFn$_invoke$arity$0() : data_fn.call(null, ))], null)));
})).catch((function (){
return (
gadget.inspector._STAR_remote_inspector_STAR_ = null)
;
}));
} else {
return null;
}
}
}));
gadget.inspector.inspect = gadget.core.inspect;
gadget.inspector.create_atom = gadget.core.create_atom;
gadget.inspector.pause_BANG_ = gadget.core.pause_BANG_;
gadget.inspector.resume_BANG_ = gadget.core.resume_BANG_;
gadget.inspector.set_render_debounce_ms_BANG_ = gadget.core.set_render_debounce_ms_BANG_;
if((typeof gadget !== 'undefined') && (typeof gadget.inspector !== 'undefined') && (typeof gadget.inspector.listener !== 'undefined')){
} else {
gadget.inspector.listener = window.addEventListener("message",(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.data.id,"cljs-data-browser-action")){
return gadget.core.action(event.data.message);
} else {
return null;
}
}));
}

//# sourceMappingURL=gadget.inspector.js.map
