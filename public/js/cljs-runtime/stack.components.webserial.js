goog.provide('stack.components.webserial');
var f__35372__auto___64144 = cljs.core.with_meta((function() { 
var G__64146__delegate = function (args__35358__auto__){
var vec__63926 = args__35358__auto__;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63926,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63926,(1),null);
var res__35359__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),attrs,"The Web Serial API is not currently available. Make sure you're running Chrome, Edge or Safari and serving this page from a secure context (i.e. over a https link or from localhost).  See Mozilla documentation for more details on ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API#browser_compatibility"], null),"browser support"], null),", and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"], null),"secure contexts"], null),"."], null);
var G__63971 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__63971,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.webserial","unsupported-message","stack.components.webserial/unsupported-message",-1009626301),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__63971;
}
};
var G__64146 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64149__i = 0, G__64149__a = new Array(arguments.length -  0);
while (G__64149__i < G__64149__a.length) {G__64149__a[G__64149__i] = arguments[G__64149__i + 0]; ++G__64149__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64149__a,0,null);
} 
return G__64146__delegate.call(this,args__35358__auto__);};
G__64146.cljs$lang$maxFixedArity = 0;
G__64146.cljs$lang$applyTo = (function (arglist__64150){
var args__35358__auto__ = cljs.core.seq(arglist__64150);
return G__64146__delegate(args__35358__auto__);
});
G__64146.cljs$core$IFn$_invoke$arity$variadic = G__64146__delegate;
return G__64146;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.webserial","unsupported-message","stack.components.webserial/unsupported-message",-1009626301)], null));
var alias__35373__auto___64145 = new cljs.core.Keyword("stack.components.webserial","unsupported-message","stack.components.webserial/unsupported-message",-1009626301);
replicant.alias.register_BANG_(alias__35373__auto___64145,f__35372__auto___64144);

stack.components.webserial.unsupported_message = alias__35373__auto___64145;
stack.components.webserial.CONFIG_OPTIONS = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null),new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4000000),(2000000),(1000000),(512000),(256000),(128000),(115200),(57600),(38400),(19200),(9600)], null),new cljs.core.Keyword(null,"dataBits","dataBits",-455071493),stack.schema.webserial.DATA_BITS,new cljs.core.Keyword(null,"stopBits","stopBits",341236831),stack.schema.webserial.STOP_BITS,new cljs.core.Keyword(null,"parity","parity",-1130304573),stack.schema.webserial.PARITY,new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),stack.schema.webserial.FLOW_CONTROL], null);
var f__35372__auto___64161 = cljs.core.with_meta((function() { 
var G__64167__delegate = function (args__35358__auto__){
var vec__64017 = args__35358__auto__;
var map__64020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64017,(0),null);
var map__64020__$1 = cljs.core.__destructure_map(map__64020);
var _attrs = map__64020__$1;
var option_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"option-id","option-id",755458226));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"config","config",994861415));
var has_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"has-port","has-port",-211221493));
var interpolator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"interpolator","interpolator",-1278412813));
var _children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64017,(1),null);
var res__35359__auto__ = (function (){var current_value = (option_id.cljs$core$IFn$_invoke$arity$1 ? option_id.cljs$core$IFn$_invoke$arity$1(config) : option_id.call(null, config));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","select.w-full.text-xs.py-0","stack.components.forms/select.w-full.text-xs.py-0",1876257253),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("stack.components.forms","selected","stack.components.forms/selected",22714471),current_value,new cljs.core.Keyword("stack.components.forms","options","stack.components.forms/options",1696105180),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),b,new cljs.core.Keyword(null,"value","value",305978217),b,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)], null);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(stack.components.webserial.CONFIG_OPTIONS,option_id)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","assoc-in","view/assoc-in",-1751445467),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"port-config","port-config",654923145),option_id], null),interpolator], null)], null)], null)], null)], null);
})();
var G__64064 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64064,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64064;
}
};
var G__64167 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64191__i = 0, G__64191__a = new Array(arguments.length -  0);
while (G__64191__i < G__64191__a.length) {G__64191__a[G__64191__i] = arguments[G__64191__i + 0]; ++G__64191__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64191__a,0,null);
} 
return G__64167__delegate.call(this,args__35358__auto__);};
G__64167.cljs$lang$maxFixedArity = 0;
G__64167.cljs$lang$applyTo = (function (arglist__64193){
var args__35358__auto__ = cljs.core.seq(arglist__64193);
return G__64167__delegate(args__35358__auto__);
});
G__64167.cljs$core$IFn$_invoke$arity$variadic = G__64167__delegate;
return G__64167;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660)], null));
var alias__35373__auto___64162 = new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660);
replicant.alias.register_BANG_(alias__35373__auto___64162,f__35372__auto___64161);

stack.components.webserial.port_option_select = alias__35373__auto___64162;
var f__35372__auto___64200 = cljs.core.with_meta((function() { 
var G__64203__delegate = function (args__35358__auto__){
var vec__64082 = args__35358__auto__;
var map__64085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64082,(0),null);
var map__64085__$1 = cljs.core.__destructure_map(map__64085);
var _attrs = map__64085__$1;
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64085__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var port_description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64085__$1,new cljs.core.Keyword(null,"port-description","port-description",-253080342));
var port_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64085__$1,new cljs.core.Keyword(null,"port-config","port-config",654923145));
var _children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64082,(1),null);
var res__35359__auto__ = (function (){var has_port = (!((port == null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","card","stack.components.layout/card",548279820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","header","stack.components.layout/header",-2119626286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.justify-between","div.flex.flex-wrap.justify-between",2134851158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.font-semibold","h3.font-semibold",107458474),"Port settings"], null),((has_port)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline.btn-secondary.btn-xs","button.btn.btn-outline.btn-secondary.btn-xs",296363072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"forget-port","forget-port",-1597064846)], null)], null)], null)], null),"Close port"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline.btn-primary.btn-xs","button.btn.btn-outline.btn-primary.btn-xs",1196036042),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"request-port","request-port",278673489),new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(port_config)], null)], null)], null)], null),"Request port"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.layout","content","stack.components.layout/content",1986211172),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),((has_port)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Port"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),port_description], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Port filter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.forms","select.w-full.text-xs.py-0","stack.components.forms/select.w-full.text-xs.py-0",1876257253),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("stack.components.forms","selected","stack.components.forms/selected",22714471),new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511).cljs$core$IFn$_invoke$arity$1(port_config),new cljs.core.Keyword("stack.components.forms","options","stack.components.forms/options",1696105180),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64111){
var map__64120 = p__64111;
var map__64120__$1 = cljs.core.__destructure_map(map__64120);
var f = map__64120__$1;
var usbVendorId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64120__$1,new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),usbVendorId,new cljs.core.Keyword(null,"value","value",305978217),usbVendorId,new cljs.core.Keyword(null,"content","content",15833224),stack.schema.webserial.describe_port_filter(f)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"None",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"FTDI",new cljs.core.Keyword(null,"usbVendorId","usbVendorId",1610157417),(1027)], null)], null)),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),has_port,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",-1163046502),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","assoc-in","view/assoc-in",-1751445467),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"webserial","webserial",-1669376567),new cljs.core.Keyword(null,"port-config","port-config",654923145),new cljs.core.Keyword(null,"vendorIdFilter","vendorIdFilter",656885511)], null),new cljs.core.Keyword("event","target.value-as-int","event/target.value-as-int",599206608)], null)], null)], null)], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Baud rate"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"option-id","option-id",755458226),new cljs.core.Keyword(null,"baudRate","baudRate",-1240249298),new cljs.core.Keyword(null,"config","config",994861415),port_config,new cljs.core.Keyword(null,"has-port","has-port",-211221493),has_port,new cljs.core.Keyword(null,"interpolator","interpolator",-1278412813),new cljs.core.Keyword("event","target.value-as-int","event/target.value-as-int",599206608)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Data bits"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"option-id","option-id",755458226),new cljs.core.Keyword(null,"dataBits","dataBits",-455071493),new cljs.core.Keyword(null,"config","config",994861415),port_config,new cljs.core.Keyword(null,"has-port","has-port",-211221493),has_port,new cljs.core.Keyword(null,"interpolator","interpolator",-1278412813),new cljs.core.Keyword("event","target.value-as-int","event/target.value-as-int",599206608)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Stop bits"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"option-id","option-id",755458226),new cljs.core.Keyword(null,"stopBits","stopBits",341236831),new cljs.core.Keyword(null,"config","config",994861415),port_config,new cljs.core.Keyword(null,"has-port","has-port",-211221493),has_port,new cljs.core.Keyword(null,"interpolator","interpolator",-1278412813),new cljs.core.Keyword("event","target.value-as-int","event/target.value-as-int",599206608)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Parity"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"option-id","option-id",755458226),new cljs.core.Keyword(null,"parity","parity",-1130304573),new cljs.core.Keyword(null,"config","config",994861415),port_config,new cljs.core.Keyword(null,"has-port","has-port",-211221493),has_port,new cljs.core.Keyword(null,"interpolator","interpolator",-1278412813),new cljs.core.Keyword("event","target.value-as-keyword","event/target.value-as-keyword",-2012194010)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Flow control"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stack.components.webserial","port-option-select","stack.components.webserial/port-option-select",227173660),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"option-id","option-id",755458226),new cljs.core.Keyword(null,"flowControl","flowControl",-846811302),new cljs.core.Keyword(null,"config","config",994861415),port_config,new cljs.core.Keyword(null,"has-port","has-port",-211221493),has_port,new cljs.core.Keyword(null,"interpolator","interpolator",-1278412813),new cljs.core.Keyword("event","target.value-as-keyword","event/target.value-as-keyword",-2012194010)], null)], null)], null)], null)], null)], null)], null)], null);
})();
var G__64131 = res__35359__auto__;
if(cljs.core.vector_QMARK_(res__35359__auto__)){
return cljs.core.with_meta(G__64131,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","context","replicant/context",-909059467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword("stack.components.webserial","port-config","stack.components.webserial/port-config",-1963562829),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(args__35358__auto__)], null)], null));
} else {
return G__64131;
}
};
var G__64203 = function (var_args){
var args__35358__auto__ = null;
if (arguments.length > 0) {
var G__64235__i = 0, G__64235__a = new Array(arguments.length -  0);
while (G__64235__i < G__64235__a.length) {G__64235__a[G__64235__i] = arguments[G__64235__i + 0]; ++G__64235__i;}
  args__35358__auto__ = new cljs.core.IndexedSeq(G__64235__a,0,null);
} 
return G__64203__delegate.call(this,args__35358__auto__);};
G__64203.cljs$lang$maxFixedArity = 0;
G__64203.cljs$lang$applyTo = (function (arglist__64237){
var args__35358__auto__ = cljs.core.seq(arglist__64237);
return G__64203__delegate(args__35358__auto__);
});
G__64203.cljs$core$IFn$_invoke$arity$variadic = G__64203__delegate;
return G__64203;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","alias","replicant/alias",563629492),new cljs.core.Keyword("stack.components.webserial","port-config","stack.components.webserial/port-config",-1963562829)], null));
var alias__35373__auto___64201 = new cljs.core.Keyword("stack.components.webserial","port-config","stack.components.webserial/port-config",-1963562829);
replicant.alias.register_BANG_(alias__35373__auto___64201,f__35372__auto___64200);

stack.components.webserial.port_config = alias__35373__auto___64201;

//# sourceMappingURL=stack.components.webserial.js.map
