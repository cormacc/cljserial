goog.provide('stack.utils.themes');
/**
 * @define {string}
 */
stack.utils.themes.THEMES = goog.define("stack.utils.themes.THEMES","nord");
stack.utils.themes.all = clojure.string.split.cljs$core$IFn$_invoke$arity$2(stack.utils.themes.THEMES," ");
stack.utils.themes.default$ = cljs.core.first(stack.utils.themes.all);
stack.utils.themes.select = (function stack$utils$themes$select(theme){
return document.documentElement.setAttribute("data-theme",theme);
});

//# sourceMappingURL=stack.utils.themes.js.map
