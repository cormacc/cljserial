goog.provide('stack.utils.events');
/**
 * Add a DOM event listener and return the target -- syntactic sugar for chained listener creation
 */
stack.utils.events.add_listener = (function stack$utils$events$add_listener(target,type,callback){
target.addEventListener(type,callback);

return target;
});
stack.utils.events.extract_result = (function stack$utils$events$extract_result(e){
return e.target.result;
});

//# sourceMappingURL=stack.utils.events.js.map
