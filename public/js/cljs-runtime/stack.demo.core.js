goog.provide('stack.demo.core');
lambdaisland.glogi.console.install_BANG_();
lambdaisland.glogi.set_levels(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("glogi","root","glogi/root",-77414841),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Symbol(null,"stack.utils.hsm","stack.utils.hsm",119361412,null),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Symbol(null,"my.app.other","my.app.other",36462589,null),new cljs.core.Keyword(null,"error","error",-978969032)], null));
if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.demo.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("startup","logging","startup/logging",1070102166),"Logging initialised!",new cljs.core.Keyword(null,"line","line",212345235),39], null)),null);
} else {
}
cljs.core.enable_console_print_BANG_();
var G__88761_88763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null);
(stack.utils.dbfx.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__88761_88763) : stack.utils.dbfx.dispatch_sync.call(null, G__88761_88763));
stack.demo.core.routes = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("stack.demo.core","serial-terminal","stack.demo.core/serial-terminal",-2106926803),new cljs.core.Keyword(null,"title","title",636505583),"WebSerial",new cljs.core.Keyword(null,"view","view",1247994814),connect.pages.mbt_terminal.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/bt",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("stack.demo.core","bt-terminal","stack.demo.core/bt-terminal",1717930476),new cljs.core.Keyword(null,"title","title",636505583),"WebBluetooth",new cljs.core.Keyword(null,"view","view",1247994814),stack.pages.bt_terminal.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/local",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("stack.demo.core","local-data","stack.demo.core/local-data",-1044825375),new cljs.core.Keyword(null,"title","title",636505583),"Local",new cljs.core.Keyword(null,"view","view",1247994814),stack.pages.domain_data.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/backend",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("stack.demo.core","backend-demo","stack.demo.core/backend-demo",-1354182383),new cljs.core.Keyword(null,"title","title",636505583),"Backend",new cljs.core.Keyword(null,"view","view",1247994814),stack.pages.backend.layout_with_auth], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/todo",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("stack.demo.core","todo","stack.demo.core/todo",612180114),new cljs.core.Keyword(null,"title","title",636505583),"TodoMVC",new cljs.core.Keyword(null,"view","view",1247994814),stack.pages.todo_mvc.layout], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/convert",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("stack.demo.core","convert","stack.demo.core/convert",-610892738),new cljs.core.Keyword(null,"title","title",636505583),"HTML->UIx",new cljs.core.Keyword(null,"view","view",1247994814),stack.pages.converter.layout], null)], null)], null);
stack.demo.core.init_services = (function stack$demo$core$init_services(){
stack.services.auth.init(true);

stack.services.webserial.init();

stack.services.bt.init();

return connect.services.mbt_cd.init();
});
stack.demo.core.init = (function stack$demo$core$init(){
stack.demo.core.init_services();

if(goog.debug.LOGGING_ENABLED){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4("stack.demo.core",new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.identity(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),"Rendering!",new cljs.core.Keyword(null,"line","line",212345235),116], null)),null);
} else {
}

return stack.utils.router.render_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),stack.demo.core.routes,new cljs.core.Keyword(null,"layout","layout",-2120940921),connect.layout.app_layout], null));
});
goog.exportSymbol('stack.demo.core.init', stack.demo.core.init);

//# sourceMappingURL=stack.demo.core.js.map
