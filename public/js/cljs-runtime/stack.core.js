goog.provide('stack.core');
stack.core._STAR_dispatch_STAR_ = null;
/**
 * Register a global dispatch function for event handlers and life-cycle hooks
 *   that are not functions. See data-driven event handlers and life-cycle hooks in
 *   the user guide for details.
 */
stack.core.set_dispatch_BANG_ = (function stack$core$set_dispatch_BANG_(f){
return (stack.core._STAR_dispatch_STAR_ = f);
});
goog.exportSymbol('stack.core.set_dispatch_BANG_', stack.core.set_dispatch_BANG_);
stack.core.dispatch = (function stack$core$dispatch(args){
return stack.core._STAR_dispatch_STAR_.call(null, args);
});

//# sourceMappingURL=stack.core.js.map
