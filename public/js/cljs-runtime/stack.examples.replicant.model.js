goog.provide('stack.examples.replicant.model');
if((typeof stack !== 'undefined') && (typeof stack.examples !== 'undefined') && (typeof stack.examples.replicant !== 'undefined') && (typeof stack.examples.replicant.model !== 'undefined') && (typeof stack.examples.replicant.model._BANG_state !== 'undefined')){
} else {
stack.examples.replicant.model._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
stack.examples.replicant.model.init_BANG_ = (function stack$examples$replicant$model$init_BANG_(initial_route){
cljs.core.reset_BANG_(stack.examples.replicant.model._BANG_state,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"app-started-at","app-started-at",1131293954),(new Date()),new cljs.core.Keyword(null,"route","route",329891309),initial_route,new cljs.core.Keyword(null,"language","language",-1591107564),stack.utils.i18n.default_language_code,new cljs.core.Keyword(null,"theme","theme",-1247880880),stack.utils.themes.default$,new cljs.core.Keyword(null,"domain-db","domain-db",143141236),stack.utils.datascript.empty_db(stack.examples.models.domain.storage_id,stack.examples.models.domain.schema),new cljs.core.Keyword(null,"filestore","filestore",1449104233),stack.utils.filestore.empty_filestore,new cljs.core.Keyword(null,"webserial","webserial",-1669376567),stack.statecharts.webserial.init(),new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"new-task","new-task",-939876740),"",new cljs.core.Keyword(null,"create-file-path","create-file-path",353207413),"/",new cljs.core.Keyword(null,"create-file-content","create-file-content",-1313327236),"",new cljs.core.Keyword(null,"selected-file-path","selected-file-path",-1192355145),"",new cljs.core.Keyword(null,"webserial-cmd","webserial-cmd",-1350530167),"",new cljs.core.Keyword(null,"tx-time","tx-time",1760515071),(0),new cljs.core.Keyword(null,"valid-time","valid-time",1635730538),(0)], null)], null));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(stack.utils.datascript.load_bitemporal_db_PLUS_(stack.examples.models.domain.storage_id,stack.examples.models.domain.schema),(function (domain_db){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stack.examples.replicant.model._BANG_state,cljs.core.assoc,new cljs.core.Keyword(null,"domain-db","domain-db",143141236),domain_db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stack.examples.replicant.model._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"tx-time","tx-time",1760515071)], null),cljs.core.last(new cljs.core.Keyword(null,"tx-times","tx-times",-690029852).cljs$core$IFn$_invoke$arity$1(domain_db)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stack.examples.replicant.model._BANG_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"valid-time","valid-time",1635730538)], null),cljs.core.last(new cljs.core.Keyword(null,"valid-times","valid-times",-1544145409).cljs$core$IFn$_invoke$arity$1(domain_db)));
}));
});
stack.examples.replicant.model.watch_BANG_ = (function stack$examples$replicant$model$watch_BANG_(render_fn){
cljs.core.add_watch(stack.examples.replicant.model._BANG_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(new_state) : render_fn.call(null, new_state));
} else {
return null;
}
}));

var G__63434 = cljs.core.deref(stack.examples.replicant.model._BANG_state);
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__63434) : render_fn.call(null, G__63434));
});

//# sourceMappingURL=stack.examples.replicant.model.js.map
