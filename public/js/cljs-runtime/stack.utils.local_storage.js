goog.provide('stack.utils.local_storage');
/**
 * Write a string to local storage
 */
stack.utils.local_storage.write = (function stack$utils$local_storage$write(id,data){
return localStorage.setItem(id,data);
});
/**
 * Read a string from local storage
 */
stack.utils.local_storage.read = (function stack$utils$local_storage$read(id){
return localStorage.getItem(id);
});
/**
 * 
 */
stack.utils.local_storage.has_data_QMARK_ = (function stack$utils$local_storage$has_data_QMARK_(id){
return localStorage.hasOwnProperty(id);
});
/**
 * Delete a data item from local storage
 */
stack.utils.local_storage.delete$ = (function stack$utils$local_storage$delete(id){
return localStorage.removeItem(id);
});
/**
 * Serialise EDN data to local storage
 */
stack.utils.local_storage.serialise = (function stack$utils$local_storage$serialise(id,data){
return stack.utils.local_storage.write(id,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
});
/**
 * Deserialise EDN data from local storage
 */
stack.utils.local_storage.deserialise = (function stack$utils$local_storage$deserialise(id){
var G__89426 = stack.utils.local_storage.read(id);
if((G__89426 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__89426);
}
});

//# sourceMappingURL=stack.utils.local_storage.js.map
