goog.provide('stack.services.sync');
stack.services.sync.default_context = cljs.core.PersistentArrayMap.EMPTY;
stack.services.sync.controller = (function (){var G__61014 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sync-service","sync-service",-607251671),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"context","context",-830191113),stack.services.sync.default_context,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (ctx,e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.services.sync",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("offline","entry","offline/entry",1911444812),"TODO: Start building transaction backlog",new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"e","e",1381269198),e,new cljs.core.Keyword(null,"line","line",212345235),22], null)),null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-sign-in","auth-sign-in",913514741),new cljs.core.Keyword(null,"online","online",868574801)], null)], null),new cljs.core.Keyword(null,"online","online",868574801),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (_ctx,_e){
if(goog.debug.LOGGING_ENABLED){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.services.sync",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("online","entry","online/entry",1374727132),"TODO: Begin sync",new cljs.core.Keyword(null,"line","line",212345235),27], null)),null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-sign-out","auth-sign-out",904626899),new cljs.core.Keyword(null,"offline","offline",-107631935)], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__61014) : statecharts.core.machine.call(null, G__61014));
})();
stack.services.sync.init = (function stack$services$sync$init(){
return stack.utils.hsm.register(stack.services.sync.controller);
});

//# sourceMappingURL=stack.services.sync.js.map
