goog.provide('stack.schema.filestore');
stack.schema.filestore.Path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null);
stack.schema.filestore.FileType = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"directory","directory",-58912409),new cljs.core.Keyword(null,"file","file",-1269645878)], null);
stack.schema.filestore.Timestamp = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922)], null);
stack.schema.filestore.File = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),stack.schema.filestore.Path], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1((0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created","created",-704993748),stack.schema.filestore.Timestamp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified","modified",-2134587826),stack.schema.filestore.Timestamp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synced","synced",-1518561120),stack.schema.filestore.Timestamp], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
stack.schema.filestore.FileMap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),stack.schema.filestore.Path,stack.schema.filestore.File], null);
stack.schema.filestore.FSInfo = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"capacity","capacity",72689734),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"used","used",-1414786177),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null);
stack.schema.filestore.FileStore = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),stack.schema.filestore.FSInfo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries","entries",-86943161),stack.schema.filestore.FileMap], null)], null);
/**
 * Extract the filename component of a path string of the form '/some/folders/filename.ext'.
 */
stack.schema.filestore.get_filename = (function stack$schema$filestore$get_filename(path){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/"));
});
/**
 * Extract a vector representation of a given path
 */
stack.schema.filestore.get_path_vector = (function stack$schema$filestore$get_path_vector(path){
var p = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(path)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,(1)):path);
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p,"/");
});
/**
 * Extract a vector representation of the folder components of a given path
 */
stack.schema.filestore.get_dir_vector = (function stack$schema$filestore$get_dir_vector(path){
return cljs.core.butlast(stack.schema.filestore.get_path_vector(path));
});

//# sourceMappingURL=stack.schema.filestore.js.map
