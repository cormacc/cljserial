goog.provide('cljserial.core');
lambdaisland.glogi.console.install_BANG_();
lambdaisland.glogi.set_levels(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("glogi","root","glogi/root",-77414841),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Symbol(null,"cljserial.utils.hsm","cljserial.utils.hsm",-1069415434,null),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Symbol(null,"my.app.other","my.app.other",36462589,null),new cljs.core.Keyword(null,"error","error",-978969032)], null));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("startup","logging","startup/logging",1070102166),"Logging initialised!",new cljs.core.Keyword(null,"line","line",212345235),35], null)),null);
} else {
}
cljs.core.enable_console_print_BANG_();
var G__57580_57585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null);
(cljserial.utils.dbfx.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__57580_57585) : cljserial.utils.dbfx.dispatch_sync.call(null, G__57580_57585));
cljserial.core.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cljserial.core","serial-terminal","cljserial.core/serial-terminal",209898073),new cljs.core.Keyword(null,"title","title",636505583),"WebSerial",new cljs.core.Keyword(null,"view","view",1247994814),cljserial.pages.serial_terminal.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/bt",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cljserial.core","bt-terminal","cljserial.core/bt-terminal",-51543256),new cljs.core.Keyword(null,"title","title",636505583),"WebBluetooth",new cljs.core.Keyword(null,"view","view",1247994814),cljserial.pages.bt_terminal.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/backend",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cljserial.core","backend-demo","cljserial.core/backend-demo",920709277),new cljs.core.Keyword(null,"title","title",636505583),"Backend",new cljs.core.Keyword(null,"view","view",1247994814),cljserial.pages.backend.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/todo",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cljserial.core","todo","cljserial.core/todo",453322270),new cljs.core.Keyword(null,"title","title",636505583),"TodoMVC",new cljs.core.Keyword(null,"view","view",1247994814),cljserial.pages.todo_mvc.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/convert",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("cljserial.core","convert","cljserial.core/convert",1123974442),new cljs.core.Keyword(null,"title","title",636505583),"HTML->UIx",new cljs.core.Keyword(null,"view","view",1247994814),cljserial.pages.converter.layout], null)], null)], null);
cljserial.core.init_services = (function cljserial$core$init_services(){
cljserial.services.webserial.init();

cljserial.services.bt.init();

return cljserial.services.mbt_cd.init();
});
cljserial.core.init = (function cljserial$core$init(){
cljserial.core.init_services();

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("cljserial.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),"Rendering!",new cljs.core.Keyword(null,"line","line",212345235),103], null)),null);
} else {
}

return cljserial.utils.router.render_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),cljserial.core.routes,new cljs.core.Keyword(null,"languages","languages",1471910331),cljserial.i18n.supported_languages,new cljs.core.Keyword(null,"layout","layout",-2120940921),cljserial.layout.app_layout,new cljs.core.Keyword(null,"with-auth","with-auth",-1859683627),true], null));
});
goog.exportSymbol('cljserial.core.init', cljserial.core.init);

//# sourceMappingURL=cljserial.core.js.map
