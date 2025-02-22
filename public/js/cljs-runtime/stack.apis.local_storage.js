goog.provide('stack.apis.local_storage');
/**
 * Write a string to local storage
 */
stack.apis.local_storage.write = (function stack$apis$local_storage$write(id,data){
return localStorage.setItem(id,data);
});
/**
 * Read a string from local storage
 */
stack.apis.local_storage.read = (function stack$apis$local_storage$read(id){
return localStorage.getItem(id);
});
/**
 * 
 */
stack.apis.local_storage.has_data_QMARK_ = (function stack$apis$local_storage$has_data_QMARK_(id){
return localStorage.hasOwnProperty(id);
});
/**
 * Delete a data item from local storage
 */
stack.apis.local_storage.delete$ = (function stack$apis$local_storage$delete(id){
return localStorage.removeItem(id);
});
/**
 * Serialise EDN data to local storage
 */
stack.apis.local_storage.serialise = (function stack$apis$local_storage$serialise(id,data){
return stack.apis.local_storage.write(id,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
});
/**
 * Deserialise EDN data from local storage
 */
stack.apis.local_storage.deserialise = (function stack$apis$local_storage$deserialise(id){
var G__91615 = stack.apis.local_storage.read(id);
if((G__91615 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__91615);
}
});

//# sourceMappingURL=stack.apis.local_storage.js.map
