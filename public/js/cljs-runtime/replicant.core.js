goog.provide('replicant.core');
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){
if((!(cljs.core.not(cljs.core.re_find(/#($|\.)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)))))){
var fn__34210__auto___63702 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63703 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63704 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63139 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__63139__$1 = (cljs.core.truth_(fn__34210__auto___63702)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63139,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63702):G__63139);
var G__63139__$2 = (cljs.core.truth_(alias__34211__auto___63703)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63139__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63703):G__63139__$1);
if(cljs.core.truth_(fd__34212__auto___63704)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63139__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63704);
} else {
return G__63139__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)))))){
var fn__34210__auto___63705 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63706 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63707 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63150 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__63150__$1 = (cljs.core.truth_(fn__34210__auto___63705)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63150,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63705):G__63150);
var G__63150__$2 = (cljs.core.truth_(alias__34211__auto___63706)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63150__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63706):G__63150__$1);
if(cljs.core.truth_(fd__34212__auto___63707)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63150__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63707);
} else {
return G__63150__$2;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)))))){
var fn__34210__auto___63708 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63709 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63710 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63155 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__63155__$1 = (cljs.core.truth_(fn__34210__auto___63708)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63155,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63708):G__63155);
var G__63155__$2 = (cljs.core.truth_(alias__34211__auto___63709)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63155__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63709):G__63155__$1);
if(cljs.core.truth_(fd__34212__auto___63710)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63155__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63710);
} else {
return G__63155__$2;
}
})());
} else {
}

var ns = cljs.core.namespace(tag);
var tag__$1 = cljs.core.name(tag);
var id_index = (function (){var index = tag__$1.indexOf("#");
if((index > (0))){
return index;
} else {
return null;
}
})();
var class_index = (function (){var index = tag__$1.indexOf(".");
if((index > (0))){
return index;
} else {
return null;
}
})();
var tag_name = (function (){var G__63161 = (cljs.core.truth_(id_index)?tag__$1.substring((0),id_index):(cljs.core.truth_(class_index)?tag__$1.substring((0),class_index):tag__$1
));
if(cljs.core.truth_(ns)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,G__63161);
} else {
return G__63161;
}
})();
var id = (cljs.core.truth_(id_index)?(cljs.core.truth_(class_index)?tag__$1.substring((id_index + (1)),class_index):tag__$1.substring((id_index + (1)))):null);
var classes = (cljs.core.truth_(class_index)?cljs.core.seq(tag__$1.substring((class_index + (1))).split(".")):null);
return [tag_name,id,classes];
});
/**
 * Hiccup symbols can include tag name, id and classes. The argument map is
 *   optional. This function finds the important bits of the hiccup data structure
 *   and returns a "headers" tuple with a stable position for:
 * 
 *   - tag-name
 *   - id from the hiccup symbol
 *   - classes from the hiccup symbol
 *   - key
 *   - attributes
 *   - children
 *   - namespace
 *   - original s-expression
 * 
 *   Attributes and children are completely untouched. Headers can be used to
 *   quickly determine tag name and key, or sent to `get-attrs` and
 *   `get-children` for usable information about those things.
 * 
 *   Returns a tuple (instead of a map) for speed.
 * 
 *   - `sexp` is the hiccup to parse
 * 
 *   - `ns` is the namespace of the elements, used for SVG elements. The SVG
 *   element has an explicit namespace, which needs to be set on all of its
 *   children, so they can all be created with createElementNS etc.
 */
replicant.core.get_hiccup_headers = (function replicant$core$get_hiccup_headers(ns,sexp){
if(cljs.core.truth_(sexp)){
if(replicant.hiccup.hiccup_QMARK_(sexp)){
var sym = cljs.core.first(sexp);
var args = cljs.core.rest(sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_(cljs.core.first(args));
var attrs = ((has_args_QMARK_)?cljs.core.first(args):cljs.core.PersistentArrayMap.EMPTY);
var pt__34089__auto__ = replicant.core.parse_tag(sym);
var G__63166 = pt__34089__auto__;
G__63166.push((function (){var temp__5823__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5823__auto__)){
var k__34083__auto__ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pt__34089__auto__[(0)]),k__34083__auto__], null);
} else {
return null;
}
})());

G__63166.push(attrs);

G__63166.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__63166.push(ns);

G__63166.push(sexp);

G__63166.push(null);

G__63166.push(null);

return G__63166;
} else {
var text__34096__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,text__34096__auto__,text__34096__auto__,null));
}
} else {
return null;
}
});
replicant.core.get_classes = (function replicant$core$get_classes(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if((classes instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if(cljs.core.empty_QMARK_(classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(classes)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (class$){
if(cljs.core.truth_(class$)){
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if((class$ instanceof cljs.core.Symbol)){
return cljs.core.name(class$);
} else {
if(typeof class$ === 'string'){
return cljs.core.not_empty(class$.trim());
} else {
return null;
}
}
}
} else {
return null;
}
}),classes);
} else {
if(typeof classes === 'string'){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__63171_SHARP_){
return cljs.core.not_empty(p1__63171_SHARP_.trim());
}),classes.split(" "));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("class name is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
}
});
replicant.core.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
/**
 * Converts string values for the style attribute to a map of keyword keys and
 *   string values.
 */
replicant.core.explode_styles = (function replicant$core$explode_styles(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kv){
var vec__63179 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63176_SHARP_){
return p1__63176_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63179,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
}),s.split(";")));
});
replicant.core.get_style_val = (function replicant$core$get_style_val(attr,v){
if(typeof v === 'number'){
if(cljs.core.truth_((replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1 ? replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1(attr) : replicant.core.skip_pixelize_attrs.call(null, attr)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
return v;

}
}
});
replicant.core.prep_attrs = (function replicant$core$prep_attrs(attrs,id,classes){
var classes__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(replicant.core.get_classes(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),classes);
var G__63190 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__63190__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63190,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__63190);
var G__63190__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63190__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__63190__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__63190__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__63190__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__34210__auto___63712 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63713 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63714 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63199 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__63199__$1 = (cljs.core.truth_(fn__34210__auto___63712)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63199,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63712):G__63199);
var G__63199__$2 = (cljs.core.truth_(alias__34211__auto___63713)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63199__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63713):G__63199__$1);
if(cljs.core.truth_(fd__34212__auto___63714)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63199__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63714);
} else {
return G__63199__$2;
}
})());
} else {
}

if((!((function (){var class__34357__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__34357__auto__ === 'string'))) || ((class__34357__auto__.indexOf(" ") < (0))));
})()))){
var fn__34210__auto___63716 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63717 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63718 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63206 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__34357__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__34357__auto__], 0))," to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__34357__auto__.split(" "))], 0))].join('');
})()], null);
var G__63206__$1 = (cljs.core.truth_(fn__34210__auto___63716)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63206,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63716):G__63206);
var G__63206__$2 = (cljs.core.truth_(alias__34211__auto___63717)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63206__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63717):G__63206__$1);
if(cljs.core.truth_(fd__34212__auto___63718)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63206__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63718);
} else {
return G__63206__$2;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__34210__auto___63719 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63720 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63721 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63212 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__63212__$1 = (cljs.core.truth_(fn__34210__auto___63719)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63212,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63719):G__63212);
var G__63212__$2 = (cljs.core.truth_(alias__34211__auto___63720)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63212__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63720):G__63212__$1);
if(cljs.core.truth_(fd__34212__auto___63721)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63212__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63721);
} else {
return G__63212__$2;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__63214 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63214,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__63214;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5821__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5821__auto__)){
var mounting = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__63221 = headers;
if(cljs.core.truth_(mounting)){
var headers__34103__auto__ = G__63221;
(headers__34103__auto__[(4)] = replicant.core.merge_attrs((headers__34103__auto__[(4)]),mounting));

return headers__34103__auto__;
} else {
return G__63221;
}
})();
return replicant.core.prep_attrs((headers__$1[(4)]),(headers__$1[(1)]),(headers__$1[(2)]));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers)], null);
}
});
replicant.core.get_unmounting_attrs = (function replicant$core$get_unmounting_attrs(vdom){
if(cljs.core.truth_((vdom[(6)]))){
return replicant.core.prep_attrs(replicant.core.merge_attrs((vdom[(3)]),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((vdom[(7)]),(1)))),null,(vdom[(2)]));
} else {
return null;
}
});
replicant.core.flatten_seqs_STAR_ = (function replicant$core$flatten_seqs_STAR_(xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2 ? replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2(x,coll) : replicant.core.flatten_seqs_STAR_.call(null, x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,x);

}
}),null,xs);
});
replicant.core.flatten_seqs = (function replicant$core$flatten_seqs(xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_seqs_STAR_(xs,coll);

return cljs.core.persistent_BANG_(coll);
});
replicant.core.flatten_map_seqs_STAR_ = (function replicant$core$flatten_map_seqs_STAR_(f,xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3 ? replicant.core.flatten_map_seqs_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,coll) : replicant.core.flatten_map_seqs_STAR_.call(null, f,x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null, x)));

}
}),null,xs);
});
replicant.core.flatten_map_seqs = (function replicant$core$flatten_map_seqs(f,xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_map_seqs_STAR_(f,xs,coll);

return cljs.core.persistent_BANG_(coll);
});
/**
 * Given an optional tag namespace `ns` (e.g. for SVG nodes) and `headers`, as
 *   produced by `get-hiccup-headers`, returns a flat collection of children as
 *   "hiccup headers". Children will carry the `ns`, if any.
 */
replicant.core.get_children = (function replicant$core$get_children(headers,ns){
if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))){
return null;
} else {
return replicant.core.flatten_map_seqs((function (p1__63222_SHARP_){
var G__63223 = p1__63222_SHARP_;
if((G__63223 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(ns,G__63223);
}
}),(headers[(5)]));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__63224 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__63227,hiccup){
var vec__63228 = p__63227;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63228,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(ns,hiccup);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__63231 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__63231,k);
} else {
return G__63231;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63224,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63224,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event){
var or__5002__auto__ = ((((cljs.core.fn_QMARK_(handler)) || (((cljs.core.var_QMARK_(handler)) && (cljs.core.fn_QMARK_(cljs.core.deref(handler)))))))?handler:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ((cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_))?(function (e){
var node = e.target;
var rd = (function (){var G__63267 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e,new cljs.core.Keyword("replicant","dom-event","replicant/dom-event",-1613182512),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63267,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__63267;
}
})();
return replicant.core._STAR_dispatch_STAR_.call(null, rd,handler);
}):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5002__auto__ = ((cljs.core.fn_QMARK_(handler))?handler:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_((function (){var and__5000__auto__ = handler;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_);
} else {
return and__5000__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null, e,handler);
}):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
replicant.core.call_hook = (function replicant$core$call_hook(p__63291){
var vec__63292 = p__63291;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63292,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63292,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63292,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63292,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63292,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63292,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__63302 = (function (){var G__63303 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63303,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__63303;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63302) : f.call(null, G__63302));
} else {
return null;
}
});
/**
 * Register the life-cycle hooks from the corresponding virtual DOM node to call
 *   in `impl`, if any. `details` is a vector of keywords that provide some detail
 *   about why the hook is invoked.
 */
replicant.core.register_hooks = (function replicant$core$register_hooks(var_args){
var args__5732__auto__ = [];
var len__5726__auto___63724 = arguments.length;
var i__5727__auto___63725 = (0);
while(true){
if((i__5727__auto___63725 < len__5726__auto___63724)){
args__5732__auto__.push((arguments[i__5727__auto___63725]));

var G__63727 = (i__5727__auto___63725 + (1));
i__5727__auto___63725 = G__63727;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__63311,node,headers,p__63312){
var map__63314 = p__63311;
var map__63314__$1 = cljs.core.__destructure_map(map__63314);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63314__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__63316 = p__63312;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63316,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63316,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (life_cycle_key){
var temp__5823__auto__ = (life_cycle_key.cljs$core$IFn$_invoke$arity$1 ? life_cycle_key.cljs$core$IFn$_invoke$arity$1(target) : life_cycle_key.call(null, target));
if(cljs.core.truth_(temp__5823__auto__)){
var hook = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_(new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__63324 = headers;
if((G__63324 == null)){
return null;
} else {
return (G__63324[(7)]);
}
})();
var vdom_sexp = (function (){var G__63327 = vdom;
if((G__63327 == null)){
return null;
} else {
return (G__63327[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63331){
var vec__63332 = p__63331;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq63307){
var G__63308 = cljs.core.first(seq63307);
var seq63307__$1 = cljs.core.next(seq63307);
var G__63309 = cljs.core.first(seq63307__$1);
var seq63307__$2 = cljs.core.next(seq63307__$1);
var G__63310 = cljs.core.first(seq63307__$2);
var seq63307__$3 = cljs.core.next(seq63307__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63308,G__63309,G__63310,seq63307__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__63340,node,mounting_attrs,attrs){
var map__63341 = p__63340;
var map__63341__$1 = cljs.core.__destructure_map(map__63341);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63341__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63343_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__63343_SHARP_) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__63344_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__63344_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__63345_SHARP_){
var new_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__63345_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_styles,p1__63345_SHARP_))){
if((!((p1__63345_SHARP_ instanceof cljs.core.Keyword)))){
var fn__34210__auto___63728 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63729 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63730 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63351 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63345_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63345_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63345_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__63351__$1 = (cljs.core.truth_(fn__34210__auto___63728)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63351,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63728):G__63351);
var G__63351__$2 = (cljs.core.truth_(alias__34211__auto___63729)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63351__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63729):G__63351__$1);
if(cljs.core.truth_(fd__34212__auto___63730)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63351__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63730);
} else {
return G__63351__$2;
}
})());
} else {
}

if((!((function (){var name__34396__auto__ = cljs.core.name(p1__63345_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__34396__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__34396__auto__,clojure.string.lower_case(name__34396__auto__))));
})()))){
var fn__34210__auto___63731 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63732 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63733 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63355 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__63345_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63345_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__63355__$1 = (cljs.core.truth_(fn__34210__auto___63731)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63355,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63731):G__63355);
var G__63355__$2 = (cljs.core.truth_(alias__34211__auto___63732)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63355__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63732):G__63355__$1);
if(cljs.core.truth_(fd__34212__auto___63733)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63355__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63733);
} else {
return G__63355__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__63345_SHARP_,replicant.core.get_style_val(p1__63345_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__63357_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__63357_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__63358_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__63358_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__63359){
var vec__63360 = p__63359;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63360,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63360,(1),null);
if((!((function (){var event__34368__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__34368__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__34368__auto__,clojure.string.lower_case(event__34368__auto__))));
})()))){
var fn__34210__auto___63734 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63735 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63736 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63363 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__63363__$1 = (cljs.core.truth_(fn__34210__auto___63734)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63363,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63734):G__63363);
var G__63363__$2 = (cljs.core.truth_(alias__34211__auto___63735)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63363__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63735):G__63363__$1);
if(cljs.core.truth_(fd__34212__auto___63736)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63363__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63736);
} else {
return G__63363__$2;
}
})());
} else {
}

var temp__5823__auto__ = replicant.core.get_event_handler(handler,event);
if(cljs.core.truth_(temp__5823__auto__)){
var handler__$1 = temp__5823__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,handler__$1);
} else {
return null;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),val));
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(renderer,el,new_handlers,old_handlers){
cljs.core.run_BANG_((function (p1__63370_SHARP_){
return replicant.protocols.remove_event_handler(renderer,el,p1__63370_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_handlers,cljs.core.keys(new_handlers))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(old_handlers,cljs.core.keys(old_handlers))));

return replicant.core.add_event_listeners(renderer,el,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__63371_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handlers,cljs.core.key(p1__63371_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.stringify = (function replicant$core$stringify(x){
return [(function (){var temp__5823__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name(x)].join('');
});
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name(attr);
if((!((!(clojure.string.starts_with_QMARK_(cljs.core.name(attr),"on")))))){
var fn__34210__auto___63737 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63738 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63739 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63376 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))," ,,,}"].join('')], null);
var G__63376__$1 = (cljs.core.truth_(fn__34210__auto___63737)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63376,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63737):G__63376);
var G__63376__$2 = (cljs.core.truth_(alias__34211__auto___63738)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63376__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63738):G__63376__$1);
if(cljs.core.truth_(fd__34212__auto___63739)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63376__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63739);
} else {
return G__63376__$2;
}
})());
} else {
}

if(cljs.core.not(cljs.core.re_find(/^[a-zA-Z\-:_][a-zA-Z0-9\-:\._]*$/,cljs.core.name(attr)))){
var fn__34210__auto___63741 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63742 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63743 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63385 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Invalid attribute name ",cljs.core.name(attr)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var attr__34407__auto__ = cljs.core.name(attr);
return ["Tried to set attribute ",attr__34407__auto__," to value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),". This will fail","horribly in the browser because ",(cljs.core.truth_(cljs.core.re_find(/^[0-9]/,attr__34407__auto__))?" it starts with a number":(cljs.core.truth_(cljs.core.re_find(/^\./,attr__34407__auto__))?" it starts with a dot":[" it contains the character ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/[^a-zA-Z0-9\-:\._]/,attr__34407__auto__))].join('')
)),", which isn't allowed as per the HTML spec."].join('');
})()], null);
var G__63385__$1 = (cljs.core.truth_(fn__34210__auto___63741)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63385,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63741):G__63385);
var G__63385__$2 = (cljs.core.truth_(alias__34211__auto___63742)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63385__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63742):G__63385__$1);
if(cljs.core.truth_(fd__34212__auto___63743)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63385__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63743);
} else {
return G__63385__$2;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__63390 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return replicant.core.stringify(G__63390);
} else {
return G__63390;
}
})(),(function (){var G__63397 = cljs.core.PersistentArrayMap.EMPTY;
var G__63397__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63397,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__63397);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63397__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__63397__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__63401 = attr;
var G__63401__$1 = (((G__63401 instanceof cljs.core.Keyword))?G__63401.fqn:null);
switch (G__63401__$1) {
case "style":
return replicant.core.update_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5821__auto__ = (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null, new$));
if(cljs.core.truth_(temp__5821__auto__)){
var v = temp__5821__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(old) : attr.call(null, old)))){
return replicant.core.set_attr_val(renderer,el,attr,v);
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute(renderer,el,cljs.core.name(attr));
}

}
}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(renderer,el,new_attrs,old_attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__63403_SHARP_,p2__63402_SHARP_){
return replicant.core.update_attr(renderer,el,p2__63402_SHARP_,new_attrs,old_attrs);
}),null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_attrs)),cljs.core.keys(old_attrs)));
});
replicant.core.reconcile_attributes = (function replicant$core$reconcile_attributes(renderer,el,new_attrs,old_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_attrs,old_attrs)){
return false;
} else {
replicant.core.update_attributes(renderer,el,new_attrs,old_attrs);

return true;
}
});
replicant.core.set_styles = (function replicant$core$set_styles(renderer,el,new_styles){
return cljs.core.run_BANG_((function (p1__63405_SHARP_){
if((!((p1__63405_SHARP_ instanceof cljs.core.Keyword)))){
var fn__34210__auto___63746 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63747 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63406 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63405_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["Replicant expects your style keys to be keywords. While anything that supports `name` (strings, symbols) will ","technically work, mixing types will hinder Replicant from recognizing changes properly. Rendering once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63405_SHARP_)," and once with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63405_SHARP_)))," may produce undesired results. Your safest option is to always use keywords."].join('')], null);
var G__63406__$1 = (cljs.core.truth_(fn__34210__auto___63746)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63406,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63746):G__63406);
var G__63406__$2 = (cljs.core.truth_(alias__34211__auto___63747)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63406__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63747):G__63406__$1);
if(cljs.core.truth_(fd__34212__auto___63748)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63406__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63748);
} else {
return G__63406__$2;
}
})());
} else {
}

if((!((function (){var name__34396__auto__ = cljs.core.name(p1__63405_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__34396__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__34396__auto__,clojure.string.lower_case(name__34396__auto__))));
})()))){
var fn__34210__auto___63749 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63750 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63751 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63407 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__63405_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63405_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__63407__$1 = (cljs.core.truth_(fn__34210__auto___63749)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63407,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63749):G__63407);
var G__63407__$2 = (cljs.core.truth_(alias__34211__auto___63750)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63407__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63750):G__63407__$1);
if(cljs.core.truth_(fd__34212__auto___63751)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63407__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63751);
} else {
return G__63407__$2;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__63405_SHARP_,replicant.core.get_style_val(p1__63405_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__63405_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__63408_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__63408_SHARP_);
}),new_classes);
});
replicant.core.set_event_listeners = (function replicant$core$set_event_listeners(renderer,el,new_handlers){
return replicant.core.add_event_listeners(renderer,el,new_handlers);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__63411 = attr;
var G__63411__$1 = (((G__63411 instanceof cljs.core.Keyword))?G__63411.fqn:null);
switch (G__63411__$1) {
case "style":
return replicant.core.set_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "classes":
return replicant.core.set_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "on":
return replicant.core.set_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
return replicant.core.set_attr_val(renderer,el,attr,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null, new$)));

}
}
});
replicant.core.set_attributes = (function replicant$core$set_attributes(renderer,el,new_attrs){
return cljs.core.run_BANG_((function (p1__63414_SHARP_){
return replicant.core.set_attr(renderer,el,p1__63414_SHARP_,new_attrs);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_attrs,cljs.core.keys(new_attrs)));
});
replicant.core.render_default_alias = (function replicant$core$render_default_alias(tag_name,_attrs,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),["Undefined alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)].join('')], null),(function (){var iter__5480__auto__ = (function replicant$core$render_default_alias_$_iter__63415(s__63416){
return (new cljs.core.LazySeq(null,(function (){
var s__63416__$1 = s__63416;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__63416__$1);
if(temp__5823__auto__){
var s__63416__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63416__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__63416__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__63418 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__63417 = (0);
while(true){
if((i__63417 < size__5479__auto__)){
var child = cljs.core._nth(c__5478__auto__,i__63417);
cljs.core.chunk_append(b__63418,(function (){var G__63419 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__63419], 0));
} else {
return G__63419;
}
})());

var G__63756 = (i__63417 + (1));
i__63417 = G__63756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63418),replicant$core$render_default_alias_$_iter__63415(cljs.core.chunk_rest(s__63416__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63418),null);
}
} else {
var child = cljs.core.first(s__63416__$2);
return cljs.core.cons((function (){var G__63420 = child;
if((((!(typeof child === 'string'))) && ((!(replicant.hiccup.hiccup_QMARK_(child)))))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__63420], 0));
} else {
return G__63420;
}
})(),replicant$core$render_default_alias_$_iter__63415(cljs.core.rest(s__63416__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(children);
})()], null);
});
replicant.core.add_classes = (function replicant$core$add_classes(class_attr,classes){
if(cljs.core.coll_QMARK_(class_attr)){
return cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(class_attr,classes));
} else {
if((class_attr == null)){
return cljs.core.set(classes);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(classes),class_attr);

}
}
});
replicant.core.get_alias_headers = (function replicant$core$get_alias_headers(p__63425,headers){
var map__63426 = p__63425;
var map__63426__$1 = cljs.core.__destructure_map(map__63426);
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63426__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63426__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var tag_name = (headers[(0)]);
if((tag_name instanceof cljs.core.Keyword)){
var f = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replicant.core.render_default_alias,tag_name);
}
})();
var id = (headers[(1)]);
var classes = (headers[(2)]);
if((!(cljs.core.fn_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(aliases,tag_name))))){
var fn__34210__auto___63764 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63765 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63766 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63427 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name)," isn't defined"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),["There's no available function to render this alias. Replicant will ","render an empty element with data attributes in its place. Available ","aliases are:\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keys(aliases))].join('')], null);
var G__63427__$1 = (cljs.core.truth_(fn__34210__auto___63764)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63427,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63764):G__63427);
var G__63427__$2 = (cljs.core.truth_(alias__34211__auto___63765)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63427__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63765):G__63427__$1);
if(cljs.core.truth_(fd__34212__auto___63766)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63427__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63766);
} else {
return G__63427__$2;
}
})());
} else {
}

try{var attrs = (headers[(4)]);
var alias_hiccup = (function (){var G__63429 = (function (){var G__63431 = attrs;
var G__63431__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__63431,new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__63424_SHARP_){
var or__5002__auto__ = p1__63424_SHARP_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return id;
}
})):G__63431);
var G__63431__$2 = (cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.seq(classes);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__63431__$1,new cljs.core.Keyword(null,"class","class",-2030961996),replicant.core.add_classes,classes):G__63431__$1);
if(cljs.core.truth_(alias_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63431__$2,new cljs.core.Keyword("replicant","alias-data","replicant/alias-data",1929752572),alias_data);
} else {
return G__63431__$2;
}
})();
var G__63430 = cljs.core.seq(replicant.core.flatten_seqs((headers[(5)])));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__63429,G__63430) : f.call(null, G__63429,G__63430));
})();
if((!(((typeof alias_hiccup === 'string') || (replicant.hiccup.hiccup_QMARK_(alias_hiccup)))))){
var fn__34210__auto___63771 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___63772 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___63773 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63432 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Aliases must return valid hiccup",new cljs.core.Keyword(null,"message","message",-406056002),["Aliases must always represent a node in the document, and ","cannot return ",(((alias_hiccup == null))?"nil":((cljs.core.map_QMARK_(alias_hiccup))?"a map":((cljs.core.coll_QMARK_(alias_hiccup))?"multiple nodes":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alias_hiccup], 0))
))),". Please check the implementation of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),"."].join('')], null);
var G__63432__$1 = (cljs.core.truth_(fn__34210__auto___63771)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63432,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___63771):G__63432);
var G__63432__$2 = (cljs.core.truth_(alias__34211__auto___63772)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63432__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___63772):G__63432__$1);
if(cljs.core.truth_(fd__34212__auto___63773)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63432__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___63773);
} else {
return G__63432__$2;
}
})());
} else {
}

var hh__34109__auto__ = replicant.core.get_hiccup_headers(null,alias_hiccup);
var alias__34110__auto__ = headers;
if(cljs.core.truth_(hh__34109__auto__)){
var G__63433 = hh__34109__auto__;
(G__63433[(3)] = (function (){var or__5002__auto__ = (alias__34110__auto__[(3)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (hh__34109__auto__[(3)]);
}
})());

(G__63433[(7)] = (hh__34109__auto__[(7)]));

(G__63433[(9)] = (alias__34110__auto__[(7)]));

return G__63433;
} else {
return null;
}
}catch (e63428){var e = e63428;
return replicant.core.get_hiccup_headers(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-replicant-error","data-replicant-error",1583668098),"Alias threw exception",new cljs.core.Keyword(null,"data-replicant-exception","data-replicant-exception",-506817638),e.message,new cljs.core.Keyword(null,"data-replicant-sexp","data-replicant-sexp",1848901448),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(headers[(7)])], 0))], null)], null));
}} else {
return null;
}
});
/**
 * Create DOM node according to virtual DOM in `headers`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns a
 *   tuple of the newly created node and the fully realized vdom.
 */
replicant.core.create_node = (function replicant$core$create_node(p__63438,headers){
var map__63439 = p__63438;
var map__63439__$1 = cljs.core.__destructure_map(map__63439);
var impl = map__63439__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63439__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___63777 = (function (){var or__5002__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___63777)){
var ctx__34204__auto___63778 = temp__5823__auto___63777;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__34204__auto___63778);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

var or__5002__auto__ = (function (){var temp__5823__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5823__auto__)){
var text = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(function (){var text__34311__auto__ = text;
return (new Array(null,null,null,null,null,null,false,text__34311__auto__,text__34311__auto__,null,null));
})()], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var alias_headers = temp__5823__auto__;
var vec__63440 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,alias_headers) : replicant.core.create_node.call(null, impl,alias_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63440,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63440,(1),null);
var k = (alias_headers[(3)]);
var vdom__$1 = (function (){var headers__34318__auto__ = headers;
return (new Array((headers__34318__auto__[(0)]),(headers__34318__auto__[(3)]),(headers__34318__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom], null),(function (){var G__63443 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63443,k);
} else {
return G__63443;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__34318__auto__[(4)]))),(headers__34318__auto__[(7)]),null,null,(1)));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_node,vdom__$1], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var tag_name = (headers[(0)]);
var ns = (function (){var or__5002__auto____$2 = (headers[(6)]);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tag_name)){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var node = replicant.protocols.create_element(renderer,tag_name,(cljs.core.truth_(ns)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null):null));
var vec__63444 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63444,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63444,(1),null);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5002__auto____$2 = mounting_attrs;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return attrs;
}
})());
var vec__63447 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__63450,child_headers){
var vec__63451 = p__63450;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63451,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63451,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63451,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__63454 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null, impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63454,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63454,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__63458 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__63458,k);
} else {
return G__63458;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63447,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63447,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63447,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(function (){var headers__34318__auto__ = headers;
return (new Array((headers__34318__auto__[(0)]),(headers__34318__auto__[(3)]),(headers__34318__auto__[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__34318__auto__[(4)]))),(headers__34318__auto__[(7)]),null,null,n_children));
})()], null);
}
}
});
/**
 * Two elements are considered similar enough for reuse if they are both hiccup
 *   elements with the same tag name and the same key (or both have no key) - or
 *   they are both strings.
 * 
 *   Similarity in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.reusable_QMARK_ = (function replicant$core$reusable_QMARK_(headers,vdom){
var or__5002__auto__ = (function (){var and__5000__auto__ = (headers[(8)]);
if(cljs.core.truth_(and__5000__auto__)){
return (vdom[(8)]);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
});
replicant.core.index_of = (function replicant$core$index_of(f,xs){
var coll_n = (0);
var dom_n = (0);
var xs__$1 = cljs.core.seq(xs);
while(true){
if((xs__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null);
} else {
if((cljs.core.first(xs__$1) == null)){
var G__63841 = (coll_n + (1));
var G__63842 = dom_n;
var G__63843 = cljs.core.next(xs__$1);
coll_n = G__63841;
dom_n = G__63842;
xs__$1 = G__63843;
continue;
} else {
if(cljs.core.truth_((function (){var G__63477 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63477) : f.call(null, G__63477));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__63844 = (coll_n + (1));
var G__63845 = (dom_n + (1));
var G__63846 = cljs.core.next(xs__$1);
coll_n = G__63844;
dom_n = G__63845;
xs__$1 = G__63846;
continue;

}
}
}
break;
}
});
replicant.core.get_ns = (function replicant$core$get_ns(headers){
var or__5002__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",(headers[(0)]))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
});
replicant.core.insert_children = (function replicant$core$insert_children(p__63484,el,children,vdom){
var map__63485 = p__63484;
var map__63485__$1 = cljs.core.__destructure_map(map__63485);
var impl = map__63485__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63485__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__63486,child){
var vec__63487 = p__63486;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63487,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63487,(1),null);
if(cljs.core.truth_(child)){
var vec__63493 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63493,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63493,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__63496,unmounts,el,n,vdom){
var map__63497 = p__63496;
var map__63497__$1 = cljs.core.__destructure_map(map__63497);
var impl = map__63497__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63497__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5821__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5821__auto__)){
var id = temp__5821__auto__;
if(cljs.core.truth_((unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(id) : unmounts.call(null, id)))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5821__auto____$1 = replicant.core.get_unmounting_attrs(vdom);
if(cljs.core.truth_(temp__5821__auto____$1)){
var attrs = temp__5821__auto____$1;
var vdom__$1 = (function (){var vdom__34305__auto__ = vdom;
(vdom__34305__auto__[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null, ) + (1))));

return vdom__34305__auto__;
})();
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5823__auto___63897 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5823__auto___63897)){
var hook_63898 = temp__5823__auto___63897;
replicant.core.call_hook(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_63898,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
} else {
}

return renderer;
}));

return vdom__$1;
} else {
var child = replicant.protocols.get_child(renderer,el,n);
replicant.protocols.remove_child(renderer,el,child);

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom], 0));

return null;
}
})();
return res;
}
});
replicant.core.move_node_details = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null);
replicant.core.unchanged_QMARK_ = (function replicant$core$unchanged_QMARK_(headers,vdom){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__63508 = headers;
if((G__63508 == null)){
return null;
} else {
return (G__63508[(7)]);
}
})(),(function (){var G__63509 = vdom;
if((G__63509 == null)){
return null;
} else {
return (G__63509[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__63515,el,headers,new_children,vdom,old_children,n,n_children){
var map__63516 = p__63515;
var map__63516__$1 = cljs.core.__destructure_map(map__63516);
var impl = map__63516__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63516__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__63518 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__63510_SHARP_){
return replicant.core.same_QMARK_(headers,p1__63510_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63518,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63518,(1),null);
var vec__63521 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__63511_SHARP_){
return replicant.core.same_QMARK_(p1__63511_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63521,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63521,(1),null);
if((o_idx < n_idx)){
var idx = ((n + n_dom_idx) + (1));
var child = replicant.protocols.get_child(renderer,el,n);
if((idx < n_children)){
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,idx));
} else {
replicant.protocols.append_child(renderer,el,child);
}

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_children,n_idx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,replicant.core.move_node_details], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_idx,cljs.core.next(old_children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(old_children)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n_idx + (1)),old_children)], 0)),n,(idx - (1))], null);
} else {
var idx = (n + o_dom_idx);
var child = replicant.protocols.get_child(renderer,el,idx);
var corresponding_old_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_children,o_idx);
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,n));

(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,headers,corresponding_old_vdom,n) : replicant.core.reconcile_STAR_.call(null, impl,el,headers,corresponding_old_vdom,n));

if(replicant.core.unchanged_QMARK_(headers,corresponding_old_vdom)){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([corresponding_old_vdom,replicant.core.move_node_details], 0));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(new_children),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(o_idx,old_children),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((o_idx + (1)),old_children)),(n + (1)),((n + o_idx) + (1)),corresponding_old_vdom], null);
}
});
replicant.core.insert_node = (function replicant$core$insert_node(r,el,child,n,n_children){
if((n_children <= n)){
return replicant.protocols.append_child(r,el,child);
} else {
return replicant.protocols.insert_before(r,el,child,replicant.protocols.get_child(r,el,n));
}
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new_children,new_ks,old_children,old_ks,n_children){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var unmounts = cljs.core.deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl));
var new_c = cljs.core.seq(new_children);
var old_c = cljs.core.seq(old_children);
var n = (0);
var move_n = (0);
var n_children__$1 = (function (){var or__5002__auto__ = n_children;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var changed_QMARK_ = false;
var vdom = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_headers = cljs.core.first(new_c);
var old_vdom = cljs.core.first(old_c);
var new_empty_QMARK_ = (new_c == null);
var old_empty_QMARK_ = (old_c == null);
var new_nil_QMARK_ = (new_headers == null);
var old_nil_QMARK_ = (old_vdom == null);
if(((new_empty_QMARK_) && (old_empty_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_QMARK_,cljs.core.persistent_BANG_(vdom),new_ks,n_children__$1], null);
} else {
if(new_empty_QMARK_){
var children = cljs.core.seq(old_c);
var vdom__$1 = vdom;
var n__$1 = n;
var n_children__$2 = n_children__$1;
while(true){
if((children == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,n_children__$2], null);
} else {
if((cljs.core.first(children) == null)){
var G__63933 = cljs.core.next(children);
var G__63934 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__63935 = n__$1;
var G__63936 = n_children__$2;
children = G__63933;
vdom__$1 = G__63934;
n__$1 = G__63935;
n_children__$2 = G__63936;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5821__auto__)){
var pending_vdom = temp__5821__auto__;
var G__63940 = cljs.core.next(children);
var G__63941 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__63942 = (n__$1 + (1));
var G__63943 = n_children__$2;
children = G__63940;
vdom__$1 = G__63941;
n__$1 = G__63942;
n_children__$2 = G__63943;
continue;
} else {
var G__63948 = cljs.core.next(children);
var G__63949 = vdom__$1;
var G__63950 = n__$1;
var G__63951 = (n_children__$2 - (1));
children = G__63948;
vdom__$1 = G__63949;
n__$1 = G__63950;
n_children__$2 = G__63951;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__63570 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63570,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63570,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__63957 = cljs.core.next(new_c);
var G__63958 = cljs.core.next(old_c);
var G__63959 = n;
var G__63960 = move_n;
var G__63961 = n_children__$1;
var G__63962 = changed_QMARK_;
var G__63963 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__63957;
old_c = G__63958;
n = G__63959;
move_n = G__63960;
n_children__$1 = G__63961;
changed_QMARK_ = G__63962;
vdom = G__63963;
continue;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = old_vdom;
if(cljs.core.truth_(and__5000__auto__)){
return (old_vdom[(9)]);
} else {
return and__5000__auto__;
}
})())){
var vec__63576 = (cljs.core.truth_((function (){var and__5000__auto__ = new_headers;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var G__63579 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__63579) : old_ks.call(null, G__63579));
})());
} else {
return and__5000__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63576,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63576,(1),null);
if(cljs.core.truth_((function (){var G__63583 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__63583) : unmounts.call(null, G__63583));
})())){
if(new_nil_QMARK_){
var G__63977 = cljs.core.next(new_c);
var G__63978 = cljs.core.next(old_c);
var G__63979 = (n + (1));
var G__63980 = move_n;
var G__63981 = n_children__$1;
var G__63982 = changed_QMARK_;
var G__63983 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__63977;
old_c = G__63978;
n = G__63979;
move_n = G__63980;
n_children__$1 = G__63981;
changed_QMARK_ = G__63982;
vdom = G__63983;
continue;
} else {
if(cljs.core.truth_(child)){
var G__63991 = cljs.core.next(new_c);
var G__63992 = cljs.core.next(old_c);
var G__63993 = (n + (2));
var G__63994 = move_n;
var G__63995 = (n_children__$1 + (1));
var G__63996 = true;
var G__63997 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__63991;
old_c = G__63992;
n = G__63993;
move_n = G__63994;
n_children__$1 = G__63995;
changed_QMARK_ = G__63996;
vdom = G__63997;
continue;
} else {
var G__64000 = new_c;
var G__64001 = cljs.core.next(old_c);
var G__64002 = (n + (1));
var G__64003 = move_n;
var G__64004 = n_children__$1;
var G__64005 = changed_QMARK_;
var G__64006 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__64000;
old_c = G__64001;
n = G__64002;
move_n = G__64003;
n_children__$1 = G__64004;
changed_QMARK_ = G__64005;
vdom = G__64006;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__64008 = cljs.core.next(new_c);
var G__64009 = cljs.core.next(old_c);
var G__64010 = n;
var G__64011 = (move_n - (1));
var G__64012 = (n_children__$1 - (1));
var G__64013 = changed_QMARK_;
var G__64014 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__64008;
old_c = G__64009;
n = G__64010;
move_n = G__64011;
n_children__$1 = G__64012;
changed_QMARK_ = G__64013;
vdom = G__64014;
continue;
} else {
if(cljs.core.truth_(child)){
var G__64023 = cljs.core.next(new_c);
var G__64024 = cljs.core.next(old_c);
var G__64025 = (n + (1));
var G__64026 = move_n;
var G__64027 = n_children__$1;
var G__64028 = true;
var G__64029 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__64023;
old_c = G__64024;
n = G__64025;
move_n = G__64026;
n_children__$1 = G__64027;
changed_QMARK_ = G__64028;
vdom = G__64029;
continue;
} else {
var G__64034 = new_c;
var G__64035 = cljs.core.next(old_c);
var G__64036 = n;
var G__64037 = (move_n - (1));
var G__64038 = (n_children__$1 - (1));
var G__64039 = changed_QMARK_;
var G__64040 = vdom;
new_c = G__64034;
old_c = G__64035;
n = G__64036;
move_n = G__64037;
n_children__$1 = G__64038;
changed_QMARK_ = G__64039;
vdom = G__64040;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__64043 = cljs.core.next(new_c);
var G__64044 = old_c;
var G__64045 = n;
var G__64046 = move_n;
var G__64047 = n_children__$1;
var G__64048 = true;
var G__64049 = vdom;
new_c = G__64043;
old_c = G__64044;
n = G__64045;
move_n = G__64046;
n_children__$1 = G__64047;
changed_QMARK_ = G__64048;
vdom = G__64049;
continue;
} else {
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__64053 = cljs.core.next(new_c);
var G__64054 = cljs.core.next(old_c);
var G__64055 = (n + (1));
var G__64057 = move_n;
var G__64059 = n_children__$1;
var G__64061 = true;
var G__64062 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__64053;
old_c = G__64054;
n = G__64055;
move_n = G__64057;
n_children__$1 = G__64059;
changed_QMARK_ = G__64061;
vdom = G__64062;
continue;
} else {
var G__64065 = cljs.core.next(new_c);
var G__64066 = cljs.core.next(old_c);
var G__64067 = n;
var G__64068 = move_n;
var G__64069 = (n_children__$1 - (1));
var G__64070 = true;
var G__64071 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__64065;
old_c = G__64066;
n = G__64067;
move_n = G__64068;
n_children__$1 = G__64069;
changed_QMARK_ = G__64070;
vdom = G__64071;
continue;
}
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = old_vdom;
if(cljs.core.truth_(and__5000__auto__)){
return replicant.core.reusable_QMARK_(new_headers,old_vdom);
} else {
return and__5000__auto__;
}
})())){
var new_vdom = (replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,new_headers,old_vdom,n) : replicant.core.reconcile_STAR_.call(null, impl,el,new_headers,old_vdom,n));
var node_unchanged_QMARK_ = replicant.core.unchanged_QMARK_(new_headers,old_vdom);
if(((node_unchanged_QMARK_) && ((n < move_n)))){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,replicant.protocols.get_child(r,el,n),new_headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_vdom,replicant.core.move_node_details], 0));
} else {
}

var G__64075 = cljs.core.next(new_c);
var G__64076 = cljs.core.next(old_c);
var G__64077 = (n + (1));
var G__64078 = move_n;
var G__64079 = n_children__$1;
var G__64080 = (function (){var or__5002__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__64081 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__64075;
old_c = G__64076;
n = G__64077;
move_n = G__64078;
n_children__$1 = G__64079;
changed_QMARK_ = G__64080;
vdom = G__64081;
continue;
} else {
if(cljs.core.not((function (){var G__63593 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__63593) : old_ks.call(null, G__63593));
})())){
var vec__63594 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63594,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63594,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__64091 = cljs.core.next(new_c);
var G__64092 = (function (){var G__63597 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__63597);
} else {
return G__63597;
}
})();
var G__64093 = (n + (1));
var G__64094 = move_n;
var G__64095 = (n_children__$1 + (1));
var G__64096 = true;
var G__64097 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__64091;
old_c = G__64092;
n = G__64093;
move_n = G__64094;
n_children__$1 = G__64095;
changed_QMARK_ = G__64096;
vdom = G__64097;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__63598 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__63598) : new_ks.call(null, G__63598));
})())))){
var temp__5821__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5821__auto__)){
var unmounting_node = temp__5821__auto__;
var G__64104 = new_c;
var G__64105 = cljs.core.next(old_c);
var G__64106 = (n + (1));
var G__64107 = move_n;
var G__64108 = n_children__$1;
var G__64109 = true;
var G__64110 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__64104;
old_c = G__64105;
n = G__64106;
move_n = G__64107;
n_children__$1 = G__64108;
changed_QMARK_ = G__64109;
vdom = G__64110;
continue;
} else {
var G__64112 = new_c;
var G__64113 = cljs.core.next(old_c);
var G__64114 = n;
var G__64115 = move_n;
var G__64116 = (n_children__$1 - (1));
var G__64117 = true;
var G__64118 = vdom;
new_c = G__64112;
old_c = G__64113;
n = G__64114;
move_n = G__64115;
n_children__$1 = G__64116;
changed_QMARK_ = G__64117;
vdom = G__64118;
continue;
}
} else {
var vec__63599 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63599,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63599,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63599,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63599,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63599,(4),null);
var G__64123 = nc;
var G__64124 = oc;
var G__64125 = n__$1;
var G__64126 = move_n__$1;
var G__64127 = n_children__$1;
var G__64128 = true;
var G__64129 = (function (){var G__63602 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__63602,vdom_node);
} else {
return G__63602;
}
})();
new_c = G__64123;
old_c = G__64124;
n = G__64125;
move_n = G__64126;
n_children__$1 = G__64127;
changed_QMARK_ = G__64128;
vdom = G__64129;
continue;

}
}
}
}
}
}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__63604,el,headers,vdom,index){
var map__63607 = p__63604;
var map__63607__$1 = cljs.core.__destructure_map(map__63607);
var impl = map__63607__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63607__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5823__auto___64134 = (function (){var or__5002__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___64134)){
var ctx__34204__auto___64140 = temp__5823__auto___64134;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__34204__auto___64140);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if((!((!(replicant.asserts.has_bad_conditional_attrs_QMARK_(vdom,headers)))))){
var fn__34210__auto___64141 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var alias__34211__auto___64142 = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__34212__auto___64143 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__63621 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid conditionals around the attribute map",new cljs.core.Keyword(null,"message","message",-406056002),replicant.asserts.convey_bad_conditional_attributes(vdom,headers)], null);
var G__63621__$1 = (cljs.core.truth_(fn__34210__auto___64141)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63621,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__34210__auto___64141):G__63621);
var G__63621__$2 = (cljs.core.truth_(alias__34211__auto___64142)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63621__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),alias__34211__auto___64142):G__63621__$1);
if(cljs.core.truth_(fd__34212__auto___64143)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63621__$2,new cljs.core.Keyword(null,"data","data",-232669377),fd__34212__auto___64143);
} else {
return G__63621__$2;
}
})());
} else {
}

var or__5002__auto__ = ((replicant.core.unchanged_QMARK_(headers,vdom))?vdom:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5823__auto__ = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(temp__5823__auto__)){
var alias_headers = temp__5823__auto__;
var vdom_child = cljs.core.first((vdom[(4)]));
var updated_vdom = (cljs.core.truth_(replicant.core.reusable_QMARK_(alias_headers,vdom_child))?(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,alias_headers,vdom_child,index) : replicant.core.reconcile_STAR_.call(null, impl,el,alias_headers,vdom_child,index)):(function (){var vec__63622 = replicant.core.create_node(impl,alias_headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63622,(0),null);
var updated_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63622,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return updated_vdom;
})());
var headers__34318__auto__ = headers;
return (new Array((headers__34318__auto__[(0)]),(headers__34318__auto__[(3)]),(headers__34318__auto__[(2)]),(headers[(4)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_vdom], null),(function (){var temp__5823__auto____$1 = (updated_vdom[(1)]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var k = temp__5823__auto____$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else {
return null;
}
})(),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__34318__auto__[(4)]))),(headers__34318__auto__[(7)]),null,null,(1)));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)])))?(function (){var vec__63628 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63628,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63628,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return vdom__$1;
})():null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var child = replicant.protocols.get_child(renderer,el,index);
var headers__$1 = (function (){var or__5002__auto____$3 = replicant.core.get_alias_headers(impl,headers);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return headers;
}
})();
var attrs = replicant.core.get_attrs(headers__$1);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes(renderer,child,attrs,vdom_attrs);
var vec__63635 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers__$1,replicant.core.get_ns(headers__$1)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63635,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63635,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63635,(2),null);
var vec__63638 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63638,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63638,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63638,(2),null);
var vec__63641 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63641,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63641,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63641,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63641,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers__$1[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5000__auto__ = attrs_changed_QMARK___$1;
if(and__5000__auto__){
return children_changed_QMARK_;
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

var headers__34318__auto__ = headers__$1;
return (new Array((headers__34318__auto__[(0)]),(headers__34318__auto__[(3)]),(headers__34318__auto__[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers__34318__auto__[(4)]))),(headers__34318__auto__[(7)]),null,null,n_children));
}
}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__63658){
var vec__63660 = p__63658;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63660,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63660,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63660,(2),null);
return replicant.core.update_attributes(renderer,node,attrs,mounting_attrs);
});
/**
 * Reconcile the DOM in `el` by diffing `hiccup` with `vdom`. If there is no
 *   `vdom`, `reconcile` will create the DOM as per `hiccup`. Assumes that the DOM
 *   in `el` is in sync with `vdom` - if not, this will certainly not produce the
 *   desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5732__auto__ = [];
var len__5726__auto___64218 = arguments.length;
var i__5727__auto___64220 = (0);
while(true){
if((i__5727__auto___64220 < len__5726__auto___64218)){
args__5732__auto__.push((arguments[i__5727__auto___64220]));

var G__64221 = (i__5727__auto___64220 + (1));
i__5727__auto___64220 = G__64221;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__63688){
var vec__63689 = p__63688;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63689,(0),null);
var map__63692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63689,(1),null);
var map__63692__$1 = cljs.core.__destructure_map(map__63692);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var alias_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63692__$1,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930));
var impl = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5002__auto__ = unmounts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})(),new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases,new cljs.core.Keyword(null,"alias-data","alias-data",1743863930),alias_data], null);
var vdom__$1 = (function (){var headers = replicant.core.get_hiccup_headers(null,hiccup);
if(cljs.core.truth_(headers)){
var temp__5823__auto___64226 = (function (){var or__5002__auto__ = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1(cljs.core.meta((headers[(7)])));
}
})();
if(cljs.core.truth_(temp__5823__auto___64226)){
var ctx__34204__auto___64230 = temp__5823__auto___64226;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__34204__auto___64230);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = headers;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = vdom;
if(cljs.core.truth_(and__5000__auto____$1)){
return ((replicant.core.unchanged_QMARK_(headers,cljs.core.first(vdom))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(vdom))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return vdom;
} else {
var k = (cljs.core.truth_(headers)?(headers[(3)]):null);
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__63697 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__63697,k);
} else {
return G__63697;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__63675_SHARP_){
return (p1__63675_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})();
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5821__auto___64233 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5821__auto___64233){
var mounts_64234 = temp__5821__auto___64233;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__63676_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__63676_SHARP_);
}),mounts_64234);

return cljs.core.run_BANG_(replicant.core.call_hook,hooks);
}));
} else {
cljs.core.run_BANG_(replicant.core.call_hook,hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq63677){
var G__63678 = cljs.core.first(seq63677);
var seq63677__$1 = cljs.core.next(seq63677);
var G__63679 = cljs.core.first(seq63677__$1);
var seq63677__$2 = cljs.core.next(seq63677__$1);
var G__63680 = cljs.core.first(seq63677__$2);
var seq63677__$3 = cljs.core.next(seq63677__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63678,G__63679,G__63680,seq63677__$3);
}));

cljs.core.add_watch(replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),(function (___34222__auto__,___34222__auto____$1,___34222__auto____$2,error__34223__auto__){
return replicant.console_logger.report(error__34223__auto__);
}));

//# sourceMappingURL=replicant.core.js.map
