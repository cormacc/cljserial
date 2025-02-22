goog.provide('stack.utils.browser');
/**
 * Write data to local storage
 */
stack.utils.browser.write = (function stack$utils$browser$write(p__83507){
var map__83508 = p__83507;
var map__83508__$1 = cljs.core.__destructure_map(map__83508);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83508__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83508__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return localStorage.setItem(id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(data));
});
/**
 * Read data from browser storage
 */
stack.utils.browser.read_item = (function stack$utils$browser$read_item(id){
return localStorage.getItem(id);
});
/**
 * Read data from local storage
 */
stack.utils.browser.read = (function stack$utils$browser$read(id){
var G__83511 = stack.utils.browser.read_item(id);
if((G__83511 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__83511);
}
});
/**
 * Read data from local storage as a sorted map
 */
stack.utils.browser.read_sorted_map = (function stack$utils$browser$read_sorted_map(id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),stack.utils.browser.read(id));
});

//# sourceMappingURL=stack.utils.browser.js.map
