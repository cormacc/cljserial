goog.provide('taoensso.telemere.consoles');
/**
 * Experimental, subject to change.
 * 
 *   If `js/console` exists, returns a signal handler that:
 *     - Takes a Telemere signal (map).
 *     - Writes the signal as a string to JavaScript console.
 * 
 *   A general-purpose `println`-style handler that's well suited for outputting
 *   signals as human or machine-readable (edn, JSON) strings.
 * 
 *   Options:
 *     `:output-fn` - (fn [signal]) => string, see `format-signal-fn` or `pr-signal-fn`
 */
taoensso.telemere.consoles.handler_COLON_console = (function taoensso$telemere$consoles$handler_COLON_console(var_args){
var G__62732 = arguments.length;
switch (G__62732) {
case 0:
return taoensso.telemere.consoles.handler_COLON_console.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.consoles.handler_COLON_console.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.consoles.handler_COLON_console.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.consoles.handler_COLON_console.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.consoles.handler_COLON_console.cljs$core$IFn$_invoke$arity$1 = (function (p__62733){
var map__62735 = p__62733;
var map__62735__$1 = cljs.core.__destructure_map(map__62735);
var output_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62735__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.telemere.utils.format_signal_fn.cljs$core$IFn$_invoke$arity$0());
if((typeof console !== 'undefined')){
var js_console_logger = taoensso.telemere.utils.js_console_logger;
return (function() {
var taoensso$telemere$consoles$a_handler_COLON_console = null;
var taoensso$telemere$consoles$a_handler_COLON_console__0 = (function (){
return null;
});
var taoensso$telemere$consoles$a_handler_COLON_console__1 = (function (signal){
var temp__5823__auto__ = (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(signal) : output_fn.call(null, signal));
if(cljs.core.truth_(temp__5823__auto__)){
var output = temp__5823__auto__;
var logger = (function (){var G__62752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal,new cljs.core.Keyword(null,"level","level",1290497552));
return (js_console_logger.cljs$core$IFn$_invoke$arity$1 ? js_console_logger.cljs$core$IFn$_invoke$arity$1(G__62752) : js_console_logger.call(null, G__62752));
})();
return logger.call(logger,cljs.core.str.cljs$core$IFn$_invoke$arity$1(output));
} else {
return null;
}
});
taoensso$telemere$consoles$a_handler_COLON_console = function(signal){
switch(arguments.length){
case 0:
return taoensso$telemere$consoles$a_handler_COLON_console__0.call(this);
case 1:
return taoensso$telemere$consoles$a_handler_COLON_console__1.call(this,signal);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$telemere$consoles$a_handler_COLON_console.cljs$core$IFn$_invoke$arity$0 = taoensso$telemere$consoles$a_handler_COLON_console__0;
taoensso$telemere$consoles$a_handler_COLON_console.cljs$core$IFn$_invoke$arity$1 = taoensso$telemere$consoles$a_handler_COLON_console__1;
return taoensso$telemere$consoles$a_handler_COLON_console;
})()
} else {
return null;
}
}));

(taoensso.telemere.consoles.handler_COLON_console.cljs$lang$maxFixedArity = 1);

taoensso.telemere.consoles.logger_fn = (function taoensso$telemere$consoles$logger_fn(logger){
return (function() {
var G__62785 = null;
var G__62785__1 = (function (x1){
return logger.call(logger,x1);
});
var G__62785__2 = (function (x1,x2){
return logger.call(logger,x1,x2);
});
var G__62785__3 = (function (x1,x2,x3){
return logger.call(logger,x1,x2,x3);
});
var G__62785__4 = (function() { 
var G__62786__delegate = function (x1,x2,x3,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(logger,x1,x2,x3,more);
};
var G__62786 = function (x1,x2,x3,var_args){
var more = null;
if (arguments.length > 3) {
var G__62787__i = 0, G__62787__a = new Array(arguments.length -  3);
while (G__62787__i < G__62787__a.length) {G__62787__a[G__62787__i] = arguments[G__62787__i + 3]; ++G__62787__i;}
  more = new cljs.core.IndexedSeq(G__62787__a,0,null);
} 
return G__62786__delegate.call(this,x1,x2,x3,more);};
G__62786.cljs$lang$maxFixedArity = 3;
G__62786.cljs$lang$applyTo = (function (arglist__62788){
var x1 = cljs.core.first(arglist__62788);
arglist__62788 = cljs.core.next(arglist__62788);
var x2 = cljs.core.first(arglist__62788);
arglist__62788 = cljs.core.next(arglist__62788);
var x3 = cljs.core.first(arglist__62788);
var more = cljs.core.rest(arglist__62788);
return G__62786__delegate(x1,x2,x3,more);
});
G__62786.cljs$core$IFn$_invoke$arity$variadic = G__62786__delegate;
return G__62786;
})()
;
G__62785 = function(x1,x2,x3,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return G__62785__1.call(this,x1);
case 2:
return G__62785__2.call(this,x1,x2);
case 3:
return G__62785__3.call(this,x1,x2,x3);
default:
var G__62789 = null;
if (arguments.length > 3) {
var G__62790__i = 0, G__62790__a = new Array(arguments.length -  3);
while (G__62790__i < G__62790__a.length) {G__62790__a[G__62790__i] = arguments[G__62790__i + 3]; ++G__62790__i;}
G__62789 = new cljs.core.IndexedSeq(G__62790__a,0,null);
}
return G__62785__4.cljs$core$IFn$_invoke$arity$variadic(x1,x2,x3, G__62789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62785.cljs$lang$maxFixedArity = 3;
G__62785.cljs$lang$applyTo = G__62785__4.cljs$lang$applyTo;
G__62785.cljs$core$IFn$_invoke$arity$1 = G__62785__1;
G__62785.cljs$core$IFn$_invoke$arity$2 = G__62785__2;
G__62785.cljs$core$IFn$_invoke$arity$3 = G__62785__3;
G__62785.cljs$core$IFn$_invoke$arity$variadic = G__62785__4.cljs$core$IFn$_invoke$arity$variadic;
return G__62785;
})()
});
/**
 * Experimental, subject to change.
 * 
 *   If `js/console` exists, returns a signal handler that:
 *     - Takes a Telemere signal (map).
 *     - Writes the raw signal to JavaScript console.
 * 
 *   Intended for use with browser formatting tools like `binaryage/devtools`,
 *   Ref. <https://github.com/binaryage/cljs-devtools>.
 * 
 *   Options:
 *     `:preamble-fn`     - (fn [signal])   => string, see [1].
 *     `:format-nsecs-fn` - (fn [nanosecs]) => string.
 * 
 *   [1] `taoensso.telemere.utils/signal-preamble-fn`, etc.
 */
taoensso.telemere.consoles.handler_COLON_console_raw = (function taoensso$telemere$consoles$handler_COLON_console_raw(var_args){
var G__62774 = arguments.length;
switch (G__62774) {
case 0:
return taoensso.telemere.consoles.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.consoles.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.consoles.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.consoles.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$1(null);
}));

(taoensso.telemere.consoles.handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$1 = (function (p__62776){
var map__62777 = p__62776;
var map__62777__$1 = cljs.core.__destructure_map(map__62777);
var opts = map__62777__$1;
var preamble_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62777__$1,new cljs.core.Keyword(null,"preamble-fn","preamble-fn",-900320209),taoensso.telemere.utils.signal_preamble_fn.cljs$core$IFn$_invoke$arity$0());
var format_nsecs_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62777__$1,new cljs.core.Keyword(null,"format-nsecs-fn","format-nsecs-fn",-1487810716),taoensso.telemere.utils.format_nsecs_fn.cljs$core$IFn$_invoke$arity$0());
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.group !== 'undefined')))){
var js_console_logger = taoensso.telemere.utils.js_console_logger;
var content_fn = taoensso.telemere.utils.signal_content_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format-nsecs-fn","format-nsecs-fn",-1487810716),format_nsecs_fn,new cljs.core.Keyword(null,"format-error-fn","format-error-fn",-560488578),null,new cljs.core.Keyword(null,"raw-error?","raw-error?",-39485940),true], null));
return (function() {
var taoensso$telemere$consoles$a_handler_COLON_console_raw = null;
var taoensso$telemere$consoles$a_handler_COLON_console_raw__0 = (function (){
return null;
});
var taoensso$telemere$consoles$a_handler_COLON_console_raw__1 = (function (signal){
var map__62779 = signal;
var map__62779__$1 = cljs.core.__destructure_map(map__62779);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62779__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62779__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var logger = (js_console_logger.cljs$core$IFn$_invoke$arity$1 ? js_console_logger.cljs$core$IFn$_invoke$arity$1(level) : js_console_logger.call(null, level));
console.group((preamble_fn.cljs$core$IFn$_invoke$arity$1 ? preamble_fn.cljs$core$IFn$_invoke$arity$1(signal) : preamble_fn.call(null, signal)));

content_fn(signal,taoensso.telemere.consoles.logger_fn(logger),cljs.core.identity);

var temp__5823__auto___62793 = (function (){var and__5000__auto__ = error;
if(cljs.core.truth_(and__5000__auto__)){
return taoensso.encore.ex_root(error).stack;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto___62793)){
var stack_62794__$1 = temp__5823__auto___62793;
logger.call(logger,stack_62794__$1);
} else {
}

return console.groupEnd();
});
taoensso$telemere$consoles$a_handler_COLON_console_raw = function(signal){
switch(arguments.length){
case 0:
return taoensso$telemere$consoles$a_handler_COLON_console_raw__0.call(this);
case 1:
return taoensso$telemere$consoles$a_handler_COLON_console_raw__1.call(this,signal);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$telemere$consoles$a_handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$0 = taoensso$telemere$consoles$a_handler_COLON_console_raw__0;
taoensso$telemere$consoles$a_handler_COLON_console_raw.cljs$core$IFn$_invoke$arity$1 = taoensso$telemere$consoles$a_handler_COLON_console_raw__1;
return taoensso$telemere$consoles$a_handler_COLON_console_raw;
})()
} else {
return null;
}
}));

(taoensso.telemere.consoles.handler_COLON_console_raw.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=taoensso.telemere.consoles.js.map
