goog.provide('expound.util');
expound.util.assert_message = "Internal Expound assertion failed. Please report this bug at https://github.com/bhb/expound/issues";
expound.util.nan_QMARK_ = (function expound$util$nan_QMARK_(x){
var and__5000__auto__ = typeof x === 'number';
if(and__5000__auto__){
return isNaN(x);
} else {
return and__5000__auto__;
}
});
/**
 * Look up for the parent spec using the spec hierarchy.
 */
expound.util.parent_spec = (function expound$util$parent_spec(k){
var temp__5823__auto__ = (function (){var G__86999 = k;
if((G__86999 == null)){
return null;
} else {
return cljs.spec.alpha.get_spec(G__86999);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var p = temp__5823__auto__;
var or__5002__auto__ = ((cljs.core.qualified_ident_QMARK_(p))?p:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.spec.alpha.form(p);
}
} else {
return null;
}
});
/**
 * Returns all spec keys or pred 
 */
expound.util.spec_vals = (function expound$util$spec_vals(spec_ident){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.iterate(expound.util.parent_spec,spec_ident));
});

//# sourceMappingURL=expound.util.js.map
