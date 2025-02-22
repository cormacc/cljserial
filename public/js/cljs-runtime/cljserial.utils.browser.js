goog.provide('cljserial.utils.browser');
/**
 * Write data to browser storage
 */
cljserial.utils.browser.write = (function cljserial$utils$browser$write(p__111551){
var map__111552 = p__111551;
var map__111552__$1 = cljs.core.__destructure_map(map__111552);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__111552__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return localStorage.setItem(id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data));
});
/**
 * Read data from browser storage
 */
cljserial.utils.browser.read = (function cljserial$utils$browser$read(id){
return localStorage.getItem(id);
});
/**
 * Read data from browser local storage as a sorted map
 */
cljserial.utils.browser.read_map = (function cljserial$utils$browser$read_map(id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var G__111562 = cljserial.utils.browser.read(id);
if((G__111562 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__111562);
}
})());
});

//# sourceMappingURL=cljserial.utils.browser.js.map
