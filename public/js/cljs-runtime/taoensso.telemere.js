goog.provide('taoensso.telemere');
taoensso.telemere.level_aliases = taoensso.encore.signals.level_aliases;

/**
 * A signal will be provided to a handler iff ALL of the following are true:
 * 
 *  1. Signal creation is allowed by "signal filters":
 *    a. Compile-time: sample rate, kind, ns, id, level, when form, rate limit
 *    b. Runtime:      sample rate, kind, ns, id, level, when form, rate limit
 * 
 *  2. Signal handling is allowed by "handler filters":
 *    a. Compile-time: not applicable
 *    b. Runtime:      sample rate, kind, ns, id, level, when fn, rate limit
 * 
 *  3. Signal  middleware (fn [signal]) => ?modified-signal does not return nil
 *  4. Handler middleware (fn [signal]) => ?modified-signal does not return nil
 * 
 *   Note that middleware provides a flexible way to filter signals by arbitrary
 *   signal data/content conditions (return nil to filter signal).
 * 
 *   Config:
 * 
 *  To set signal filters (1a, 1b):
 * 
 *    Use:
 *      `set-kind-filter!`, `with-kind-filter`
 *      `set-ns-filter!`,   `with-ns-filter`
 *      `set-id-filter!`,   `with-id-filter`
 *      `set-min-level!`,   `with-min-level`
 *      or see `help:environmental-config`.
 * 
 *  To set handler filters (2b) or handler middleware (4):
 * 
 *    Provide relevant opts when calling `add-handler!` or `with-handler/+`.
 *    See `help:handler-dispatch-options` for details.
 * 
 *    Note: signal filters (1a, 1b) should generally be AT LEAST as permissive as
 *    handler filters (2b), otherwise signals will be filtered before even
 *    reaching handlers.
 * 
 *  To set signal middleware (3): use `set-middleware!`, `with-middleware`
 * 
 *   Compile-time vs runtime filters:
 * 
 *  Compile-time filters are an advanced feature that can be tricky to set
 *  and use correctly. Most folks will want ONLY runtime filters.
 * 
 *  Compile-time filters works by eliding (completely removing the code for)
 *  disallowed signals. This means zero performance cost for these signals,
 *  but also means that compile-time filters are PERMANENT once applied.
 * 
 *  So if you set `:info` as the compile-time minimum level, that'll REMOVE
 *  CODE for every signal below `:info` level. To decrease that minimum level,
 *  you'll need to rebuild.
 * 
 *  Compile-time filters can be set ONLY with environmental config
 *  (see `help:environmental-config` for details).
 * 
 *   Signal and handler sampling is multiplicative:
 * 
 *  Both signals and handlers can have independent sample rates, and these
 *  MULTIPLY! If a signal is created with 20% sampling and a handler
 *  handles 50% of received signals, then 10% of possible signals will be
 *  handled (50% of 20%).
 * 
 *  The final (multiplicative) rate is helpfully reflected in each signal's
 *  `:sample-rate` value.
 * 
 *   For more info:
 * 
 *  - On signal  filters, see: `help:filters`
 *  - On handler filters, see: `help:handler-dispatch-options`
 * 
 *   If anything is unclear, please ping me (@ptaoussanis) so that I can
 *   improve these docs!
 */
taoensso.telemere.help_COLON_filters = "See docstring";

/**
 * Signal handlers process created signals to do something with them (analyse them,
 *      write them to console/file/queue/db, etc.).
 * 
 *   Manage handlers with:
 * 
 *  `get-handlers`       - Returns info  on  registered handlers (dispatch options, etc.)
 *  `get-handlers-stats` - Returns stats for registered handlers (handling times,   etc.)
 * 
 *  `add-handler!`       - Registers   given handler
 *  `remove-handler!`    - Unregisters given handler
 * 
 *  `with-handler`       - Executes form with ONLY the given handler        registered
 *  `with-handler+`      - Executes form with      the given handler (also) registered
 * 
 *  `stop-handlers!`     - Stops registered handlers
 *    NB you should always call `stop-handlers!` somewhere appropriate - usually
 *    near the end of your `-main` or shutdown procedure, AFTER all other code has
 *    completed that could create signals.
 * 
 *   See the relevant docstrings for details.
 *   See `help:handler-dispatch-options` for handler filters, etc.
 * 
 *   If anything is unclear, please ping me (@ptaoussanis) so that I can
 *   improve these docs!
 */
taoensso.telemere.help_COLON_handlers = "See docstring";

/**
 * Dispatch options can be provided for each signal handler when calling
 *   `add-handler!` or `with-handler/+`. These options will be merged over the
 *   defaults specified by `default-handler-dispatch-opts`.
 * 
 *   All handlers support the same dispatch options, including:
 * 
 *  `:async` (Clj only) - may be `nil` (synchronous) or map with options:
 * 
 *    `:buffer-size` (default 1024)
 *      Size of request buffer, and the max number of pending requests before
 *      configured back-pressure behaviour is triggered (see `:mode`).
 * 
 *    `:mode` (default `:blocking`)
 *      Back-pressure mode ∈ #{:blocking :dropping :sliding}.
 *      Controls what happens when a new request is made while request buffer is full:
 *        `:blocking` => Blocks caller until buffer space is available
 *        `:dropping` => Drops the newest request (noop)
 *        `:sliding`  => Drops the oldest request
 * 
 *    `:n-threads` (default 1)
 *      Number of threads to use for executing fns (servicing request buffer).
 *      NB execution order may be non-sequential when n > 1.
 * 
 *    `:drain-msecs` (default 6000 msecs)
 *      Maximum time (in milliseconds) to try allow pending execution requests to
 *      complete when stopping handler. nil => no maximum.
 * 
 *  `:priority` (default 100)
 *    Optional handler priority ∈ℤ.
 *    Handlers will be called in descending priority order (larger ints first).
 * 
 *  `:track-stats?` (default true)
 *    Should handler track statistics (e.g. handling times) for
 *    reporting by `get-handlers-stats`?
 * 
 *  `:sample-rate` (default nil => no sampling)
 *    Optional sample rate ∈ℝ[0,1], or (fn dyamic-sample-rate []) => ℝ[0,1].
 *    When present, handle only this (random) proportion of args:
 *      1.0 => handle every arg (same as nil rate, default)
 *      0.0 => noop   every arg
 *      0.5 => handle random 50% of args
 * 
 *  `:kind-filter` - Kind      filter as in `set-kind-filter!` (when relevant)
 *  `:ns-filter`   - Namespace filter as in `set-ns-filter!`
 *  `:id-filter`   - Id        filter as in `set-id-filter!`   (when relevant)
 *  `:min-level`   - Minimum   level  as in `set-min-level!`
 * 
 *  `:when-fn` (default nil => always allow)
 *    Optional nullary (fn allow? []) that must return truthy for handler to be
 *    called. When present, called *after* sampling and other filters, but before
 *    rate limiting. Useful for filtering based on external state/context.
 * 
 *    See `:middleware` for an alternative that takes a signal argument.
 * 
 *  `:rate-limit` (default nil => no rate limit)
 *    Optional rate limit spec as provided to `taoensso.encore/rate-limiter`,
 *    {<limit-id> [<n-max-calls> <msecs-window>]}.
 * 
 *    Examples:
 *      {"1/sec"  [1   1000]} => Max 1  call  per 1000 msecs
 *      {"1/sec"  [1   1000]
 *       "10/min" [10 60000]} => Max 1  call  per 1000 msecs,
 *                               and 10 calls per 60   secs
 * 
 *  `:middleware` (default nil => no middleware)
 *    Optional (fn [signal]) => ?modified-signal to apply before
 *    handling signal. When middleware returns nil, skips handler.
 * 
 *    Compose multiple middleware fns together with `comp-middleware`.
 * 
 *  `:error-fn` - (fn [{:keys [handler-id signal error]}]) to call on handler error.
 *  `:backp-fn` - (fn [{:keys [handler-id             ]}]) to call on handler back-pressure.
 * 
 *   If anything is unclear, please ping me (@ptaoussanis) so that I can
 *   improve these docs!
 */
taoensso.telemere.help_COLON_handler_dispatch_options = "See docstring";

/**
 * Returns current ?{:keys [compile-time runtime]} filter config.
 */
taoensso.telemere.get_filters = (function taoensso$telemere$get_filters(){
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Keyword(null,"compile-time","compile-time",214692584),taoensso.encore.force_ref(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"runtime","runtime",-1331573996),taoensso.encore.force_ref(taoensso.telemere.impl._STAR_rt_sig_filter_STAR_)], 0));
});

/**
 * Returns current ?{:keys [compile-time runtime]} minimum signal levels.
 */
taoensso.telemere.get_min_levels = (function taoensso$telemere$get_min_levels(var_args){
var G__62811 = arguments.length;
switch (G__62811) {
case 0:
return taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$2(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
}));

(taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$2(kind,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
}));

(taoensso.telemere.get_min_levels.cljs$core$IFn$_invoke$arity$2 = (function (kind,ns){
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(null,new cljs.core.Keyword(null,"runtime","runtime",-1331573996),taoensso.encore.signals.parse_min_level(cljs.core.get.cljs$core$IFn$_invoke$arity$2(taoensso.encore.force_ref(taoensso.telemere.impl._STAR_rt_sig_filter_STAR_),new cljs.core.Keyword(null,"min-level","min-level",1634684919)),kind,ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"compile-time","compile-time",214692584),taoensso.encore.signals.parse_min_level(cljs.core.get.cljs$core$IFn$_invoke$arity$2(taoensso.encore.force_ref(null),new cljs.core.Keyword(null,"min-level","min-level",1634684919)),kind,ns)], 0));
}));

(taoensso.telemere.get_min_levels.cljs$lang$maxFixedArity = 2);


/**
 * Returns ?{<handler-id> {:keys [dispatch-opts handler-fn handler-stats_]}}
 *   for all registered signal handlers.
 */
taoensso.telemere.get_handlers = (function taoensso$telemere$get_handlers(){
return taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$1(taoensso.telemere.impl._STAR_sig_handlers_STAR_);
});

/**
 * Alpha, subject to change.
 *   Returns ?{<handler-id> {:keys [handling-nsecs counts]}} for all registered
 *   signal handlers that have the `:track-stats?` dispatch option enabled
 *   (it is by default).
 * 
 *   Stats include:
 * 
 *  `:handling-nsecs` - Summary stats of nanosecond handling times, keys:
 *    `:min`  - Minimum handling time
 *    `:max`  - Maximum handling time
 *    `:mean` - Arithmetic mean handling time
 *    `:mad`  - Mean absolute deviation of handling time (measure of dispersion)
 *    `:var`  - Variance                of handling time (measure of dispersion)
 *    `:p50`  - 50th percentile of handling time (50% of times <= this)
 *    `:p90`  - 90th percentile of handling time (90% of times <= this)
 *    `:p99`  - 99th percentile of handling time
 *    `:last` - Most recent        handling time
 *    ...
 * 
 *  `:counts` - Integer counts for handler outcomes, keys (chronologically):
 * 
 *    `:dropped`       - Noop handler calls due to stopped handler
 *    `:back-pressure` - Handler calls that experienced (async) back-pressure
 *                       (possible noop, depending on back-pressure mode)
 * 
 *    `:sampled`      - Noop  handler calls due to sample rate
 *    `:filtered`     - Noop  handler calls due to kind/ns/id/level/when filtering
 *    `:rate-limited` - Noop  handler calls due to rate limit
 *    `:disallowed`   - Noop  handler calls due to sampling/filtering/rate-limiting
 *    `:allowed`      - Other handler calls    (no sampling/filtering/rate-limiting)
 * 
 *    `:suppressed`   - Noop handler calls due to nil middleware result
 *    `:handled`      - Handler calls that completed successfully
 *    `:errors`       - Handler calls that threw an error
 * 
 *    Note that for performance reasons returned counts are not mutually atomic,
 *    e.g. `:sampled` count may be incremented before `:disallowed` count is.
 * 
 *   Useful for understanding/debugging how your handlers behave in practice,
 *   especially when they're under stress (high-volumes, etc.).
 * 
 *   Handler stats are tracked from the time each handler is last registered
 *   (e.g. with an `add-handler!` call).
 */
taoensso.telemere.get_handlers_stats = (function taoensso$telemere$get_handlers_stats(){
return taoensso.encore.signals.get_handlers_stats(taoensso.telemere.impl._STAR_sig_handlers_STAR_);
});



/**
 * Sets signal kind filter based on given `kind-filter` spec.
 *   `kind-filter` may be:
 * 
 *  - A regex pattern of kind/s to allow
 *  - A str/kw/sym to allow, with "*" and "(.*)" as wildcards:
 *    "foo.*"   will allow "foo.bar"
 *    "foo(.*)" will allow "foo.bar" and "foo"
 * 
 *  - A set/vector of above (allow on any match)
 *  - A map, {:allow <spec> :disallow <spec>} with specs as above:
 *    If present, `:allow`    spec MUST     match, AND
 *    If present, `:disallow` spec MUST NOT match.
 */
taoensso.telemere.set_kind_filter_BANG_ = (function taoensso$telemere$set_kind_filter_BANG_(kind_filter){
return taoensso.encore.force_ref((taoensso.telemere.impl._STAR_rt_sig_filter_STAR_ = (function (old__41992__auto__){
return taoensso.encore.signals.update_sig_filter(old__41992__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind-filter","kind-filter",2030810915),kind_filter], null));
})(taoensso.telemere.impl._STAR_rt_sig_filter_STAR_)));
});


/**
 * Sets signal namespace filter based on given `ns-filter` spec.
 *   `ns-filter` may be:
 * 
 *  - A namespace.
 *  - A regex pattern of namespaces/s to allow
 *  - A str/kw/sym to allow, with "*" and "(.*)" as wildcards:
 *    "foo.*"   will allow "foo.bar"
 *    "foo(.*)" will allow "foo.bar" and "foo"
 * 
 *  - A set/vector of above (allow on any match)
 *  - A map, {:allow <spec> :disallow <spec>} with specs as above:
 *    If present, `:allow`    spec MUST     match, AND
 *    If present, `:disallow` spec MUST NOT match.
 */
taoensso.telemere.set_ns_filter_BANG_ = (function taoensso$telemere$set_ns_filter_BANG_(ns_filter){
return taoensso.encore.force_ref((taoensso.telemere.impl._STAR_rt_sig_filter_STAR_ = (function (old__41995__auto__){
return taoensso.encore.signals.update_sig_filter(old__41995__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),ns_filter], null));
})(taoensso.telemere.impl._STAR_rt_sig_filter_STAR_)));
});


/**
 * Sets signal id filter based on given `id-filter` spec.
 *   `id-filter` may be:
 * 
 *  - A regex pattern of id/s to allow
 *  - A str/kw/sym to allow, with "*" and "(.*)" as wildcards:
 *    "foo.*"   will allow "foo.bar"
 *    "foo(.*)" will allow "foo.bar" and "foo"
 * 
 *  - A set/vector of above (allow on any match)
 *  - A map, {:allow <spec> :disallow <spec>} with specs as above:
 *    If present, `:allow`    spec MUST     match, AND
 *    If present, `:disallow` spec MUST NOT match.
 */
taoensso.telemere.set_id_filter_BANG_ = (function taoensso$telemere$set_id_filter_BANG_(id_filter){
return taoensso.encore.force_ref((taoensso.telemere.impl._STAR_rt_sig_filter_STAR_ = (function (old__41998__auto__){
return taoensso.encore.signals.update_sig_filter(old__41998__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id-filter","id-filter",-572281277),id_filter], null));
})(taoensso.telemere.impl._STAR_rt_sig_filter_STAR_)));
});


/**
 * Sets minimum signal level based on given `min-level` spec.
 *   `min-level` may be:
 * 
 *  - nil (=> no minimum level).
 *  - A level keyword (see `level-aliases` var for details).
 *  - An integer.
 * 
 *   If `ns-filter` is provided, then the given minimum level
 *   will apply only for the namespace/s that match `ns-filter`.
 *   See `set-ns-filter!` for details.
 * 
 *   If non-nil `kind` is provided, then the given minimum level
 *   will apply only for that signal kind.
 * 
 *   Examples:
 *  (set-min-level! nil)   ; Disable        minimum level
 *  (set-min-level! :info) ; Set `:info` as minimum level
 *  (set-min-level! 100)   ; Set 100     as minimum level
 * 
 *  ;; Set `:debug` as minimum level for current namespace
 *  ;; (nil `kind` => all kinds)
 *  (set-min-level! nil *ns* :debug)
 */
taoensso.telemere.set_min_level_BANG_ = (function taoensso$telemere$set_min_level_BANG_(var_args){
var G__62830 = arguments.length;
switch (G__62830) {
case 1:
return taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (min_level){
return taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$3(null,null,min_level);
}));

(taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (kind,min_level){
return taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$3(kind,null,min_level);
}));

(taoensso.telemere.set_min_level_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (kind,ns_filter,min_level){
return taoensso.encore.force_ref((taoensso.telemere.impl._STAR_rt_sig_filter_STAR_ = (function (old_sf__42004__auto__){
return taoensso.encore.signals.update_sig_filter(old_sf__42004__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-level-fn","min-level-fn",-1014940803),(function (old_ml__42005__auto__){
return taoensso.encore.signals.update_min_level(old_ml__42005__auto__,kind,ns_filter,min_level);
})], null));
})(taoensso.telemere.impl._STAR_rt_sig_filter_STAR_)));
}));

(taoensso.telemere.set_min_level_BANG_.cljs$lang$maxFixedArity = 3);




/**
 * Registers given signal handler and returns
 *   {<handler-id> {:keys [dispatch-opts handler-fn]}} for all handlers
 *   now registered. If an old handler already existed under the same id, stop it.
 * 
 *   `handler-fn` should be a fn of exactly 2 arities:
 * 
 *  [signal] ; Single argument
 *    Called asynchronously or synchronously (depending on dispatch options)
 *    to do something useful with the given signal.
 * 
 *    Example actions:
 *      Save data to disk or db, `tap>`, log, `put!` to an appropriate
 *      `core.async` channel, filter, aggregate, use for a realtime analytics
 *      dashboard, examine for outliers or unexpected data, etc.
 * 
 *  [] ; No arguments
 *    Called exactly once when stopping handler to provide an opportunity
 *    for handler to flush buffers, close files, etc. May just noop.
 * 
 *   NB you should always call `stop-handlers!` somewhere appropriate - usually
 *   near the end of your `-main` or shutdown procedure, AFTER all other code has
 *   completed that could create signals.
 * 
 *   See `help:handler-dispatch-options` for handler filters, etc.
 */
taoensso.telemere.add_handler_BANG_ = (function taoensso$telemere$add_handler_BANG_(var_args){
var G__62838 = arguments.length;
switch (G__62838) {
case 2:
return taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (handler_id,handler_fn){
return taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3(handler_id,handler_fn,null);
}));

(taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (handler_id,handler_fn,dispatch_opts){
var removed_handler__42014__auto__ = taoensso.encore.signals.get_wrapped_handler_fn(taoensso.telemere.impl._STAR_sig_handlers_STAR_,handler_id);
var new_handlers_vec__42015__auto__ = (taoensso.telemere.impl._STAR_sig_handlers_STAR_ = (function (m__42016__auto__){
return taoensso.encore.signals.add_handler.cljs$core$IFn$_invoke$arity$5(m__42016__auto__,handler_id,handler_fn,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.encore.signals.default_handler_dispatch_opts,new cljs.core.Keyword(null,"convey-bindings?","convey-bindings?",1403560206),false),dispatch_opts);
})(taoensso.telemere.impl._STAR_sig_handlers_STAR_));
if(cljs.core.truth_(removed_handler__42014__auto__)){
(removed_handler__42014__auto__.cljs$core$IFn$_invoke$arity$0 ? removed_handler__42014__auto__.cljs$core$IFn$_invoke$arity$0() : removed_handler__42014__auto__.call(null, ));
} else {
}

return taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$1(new_handlers_vec__42015__auto__);
}));

(taoensso.telemere.add_handler_BANG_.cljs$lang$maxFixedArity = 3);


/**
 * Stops and deregisters signal handler with given id, and returns
 *   ?{<handler-id> {:keys [dispatch-opts handler-fn]}} for all handlers
 *   still registered.
 */
taoensso.telemere.remove_handler_BANG_ = (function taoensso$telemere$remove_handler_BANG_(handler_id){
var removed_handler__42018__auto__ = taoensso.encore.signals.get_wrapped_handler_fn(taoensso.telemere.impl._STAR_sig_handlers_STAR_,handler_id);
var new_handlers_vec__42019__auto__ = (taoensso.telemere.impl._STAR_sig_handlers_STAR_ = (function (m__42020__auto__){
return taoensso.encore.signals.remove_handler(m__42020__auto__,handler_id);
})(taoensso.telemere.impl._STAR_sig_handlers_STAR_));
if(cljs.core.truth_(removed_handler__42018__auto__)){
(removed_handler__42018__auto__.cljs$core$IFn$_invoke$arity$0 ? removed_handler__42018__auto__.cljs$core$IFn$_invoke$arity$0() : removed_handler__42018__auto__.call(null, ));
} else {
}

return taoensso.encore.signals.get_handlers_map.cljs$core$IFn$_invoke$arity$1(new_handlers_vec__42019__auto__);
});

/**
 * Stops registered signal handlers in parallel by calling each
 *   handler-fn with no arguments. This gives each handler the opportunity
 *   to flush buffers, close files, etc.
 * 
 *   Each handler will immediately stop accepting new signals, nooping if called.
 * 
 *   Blocks to return ?{<handler-id> {:keys [okay error]}}, honouring each
 *   handler's `:drain-msecs` value (see `help:handler-dispatch-options`).
 * 
 *   NB you should always call `stop-handlers!` somewhere appropriate - usually
 *   near the end of your `-main` or shutdown procedure, AFTER all other code has
 *   completed that could create signals.
 */
taoensso.telemere.stop_handlers_BANG_ = (function taoensso$telemere$stop_handlers_BANG_(){
return taoensso.encore.signals.stop_handlers_BANG_(taoensso.telemere.impl._STAR_sig_handlers_STAR_);
});

/**
 * Optional context (state) attached to all signals.
 *   Value may be any type, but is usually nil or a map. Default (root) value is nil.
 * 
 *   Useful for dynamically attaching arbitrary app-level state to signals.
 * 
 *   Re/bind dynamic        value using `with-ctx`, `with-ctx+`, or `binding`.
 *   Modify  root (default) value using `set-ctx!`.
 * 
 *   As with all dynamic Clojure vars, "binding conveyance" applies when using
 *   futures, agents, etc.
 * 
 *   Tips:
 *  - Value may be (or may contain) an atom if you want mutable semantics.
 *  - Value may be of form {<scope-id> <data>} for custom scoping, etc.
 *  - Use `get-env` to set default (root) value based on environmental config.
 */
taoensso.telemere._STAR_ctx_STAR_ = null;

/**
 * Set `*ctx*` var's default (root) value. See `*ctx*` for details.
 */
taoensso.telemere.set_ctx_BANG_ = (function taoensso$telemere$set_ctx_BANG_(root_ctx_val){
return (taoensso.telemere._STAR_ctx_STAR_ = root_ctx_val);
});

var ret__5781__auto___63121 = /**
 * Evaluates given form with given `*ctx*` value. See `*ctx*` for details.
 */
taoensso.telemere.with_ctx = (function taoensso$telemere$with_ctx(_AMPERSAND_form,_AMPERSAND_env,ctx_val,form){
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","binding","taoensso.encore/binding",-252016054,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.telemere","*ctx*","taoensso.telemere/*ctx*",-115690411,null),null,(1),null)),(new cljs.core.List(null,ctx_val,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)));
});
(taoensso.telemere.with_ctx.cljs$lang$macro = true);


var ret__5781__auto___63124 = /**
 * Evaluates given form with updated `*ctx*` value.
 * 
 *   `update-map-or-fn` may be:
 *  - A map to merge with    current `*ctx*` value, or
 *  - A unary fn to apply to current `*ctx*` value
 * 
 *   See `*ctx*` for details.
 */
taoensso.telemere.with_ctx_PLUS_ = (function taoensso$telemere$with_ctx_PLUS_(_AMPERSAND_form,_AMPERSAND_env,update_map_or_fn,form){
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","binding","taoensso.encore/binding",-252016054,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.telemere","*ctx*","taoensso.telemere/*ctx*",-115690411,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore.signals","update-ctx","taoensso.encore.signals/update-ctx",-270251357,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.telemere","*ctx*","taoensso.telemere/*ctx*",-115690411,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,update_map_or_fn,null,(1),null))], 0))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)));
});
(taoensso.telemere.with_ctx_PLUS_.cljs$lang$macro = true);


/**
 * Optional (fn [signal]) => ?modified-signal to apply to all signals.
 *   When middleware returns nil, skips all handlers. Default (root) value is nil.
 * 
 *   Useful for dynamically transforming signals and/or filtering signals
 *   by signal data/content/etc.
 * 
 *   Re/bind dynamic        value using `with-middleware`, `with-middleware+`, `binding`.
 *   Modify  root (default) value using `set-middleware!`.
 * 
 *   As with all dynamic Clojure vars, "binding conveyance" applies when using
 *   futures, agents, etc.
 * 
 *   Examples:
 * 
 *  ;; Filter all signals by returning nil:
 *  (t/set-middleware! (fn [signal] (when-not (:skip-me? signal) signal)))
 * 
 *  ;; Remove key/s from all signals:
 *  (t/set-middleware! (fn [signal] (dissoc signal :unwanted-key1 ...)))
 * 
 *  ;; Remove key/s from signals to specific handler:
 *  (t/add-handler! ::my-handler my-handler
 *    {:middleware (fn [signal] (dissoc signal :unwanted-key1 ...))})
 * 
 *  ;; Set middleware for specific signal/s:
 *  (binding [*middleware* (fn [signal] ...)]
 *    (...))
 * 
 *   Tips:
 *  - Compose multiple middleware fns together with `comp-middleware`.
 *  - Use `get-env` to set default (root) value based on environmental config.
 */
taoensso.telemere._STAR_middleware_STAR_ = null;

/**
 * Set `*middleware*` var's default (root) value. See `*middleware*` for details.
 */
taoensso.telemere.set_middleware_BANG_ = (function taoensso$telemere$set_middleware_BANG_(_QMARK_root_middleware_fn){
return (taoensso.telemere._STAR_middleware_STAR_ = _QMARK_root_middleware_fn);
});

var ret__5781__auto___63125 = /**
 * Evaluates given form with given `*middleware*` value.
 *   See `*middleware*` for details.
 */
taoensso.telemere.with_middleware = (function taoensso$telemere$with_middleware(_AMPERSAND_form,_AMPERSAND_env,_QMARK_middleware_fn,form){
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","binding","taoensso.encore/binding",-252016054,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.telemere","*middleware*","taoensso.telemere/*middleware*",1634228003,null),null,(1),null)),(new cljs.core.List(null,_QMARK_middleware_fn,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)));
});
(taoensso.telemere.with_middleware.cljs$lang$macro = true);


var ret__5781__auto___63126 = /**
 * Evaluates given form with composed `*middleware*` value.
 *   Same as (with-middleware (comp-middleware *middleware* ?middleware-fn) ...).
 *   See `*middleware*` for details.
 */
taoensso.telemere.with_middleware_PLUS_ = (function taoensso$telemere$with_middleware_PLUS_(_AMPERSAND_form,_AMPERSAND_env,_QMARK_middleware_fn,form){
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","binding","taoensso.encore/binding",-252016054,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("taoensso.telemere","*middleware*","taoensso.telemere/*middleware*",1634228003,null),null,(1),null)),(new cljs.core.List(null,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("taoensso.encore","comp-middleware","taoensso.encore/comp-middleware",510138495,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("taoensso.telemere","*middleware*","taoensso.telemere/*middleware*",1634228003,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,_QMARK_middleware_fn,null,(1),null))], 0))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)));
});
(taoensso.telemere.with_middleware_PLUS_.cljs$lang$macro = true);

/**
 * Returns true with given probability ∈ ℝ[0,1].
 */
taoensso.telemere.chance = taoensso.encore.chance;

/**
 * Takes a spec of form
 *  [           [<n-max-reqs> <msecs-window>] ...] or ; Unnamed limits
 *  {<limit-id> [<n-max-reqs> <msecs-window>]}        ;   Named limits
 *   and returns stateful (fn a-rate-limiter [] [req-id] [command req-id]).
 * 
 *   Call the returned limiter fn with a request id (any Clojure value!) to
 *   enforce limits independently for each id.
 * 
 *   For example, (limiter-fn <ip-address-string>) will return:
 *  - Falsey when    allowed (all limits pass for given IP), or
 *  - Truthy when disallowed (any limits fail for given IP):
 *    [<worst-limit-id> <worst-backoff-msecs> {<limit-id> <backoff-msecs>}]
 * 
 *   Or call the returned limiter fn with an extra command argument:
 *  (limiter-fn :rl/peek  <req-id) - Check limits WITHOUT incrementing count
 *  (limiter-fn :rl/reset <req-id) - Reset all limits for given req-id
 */
taoensso.telemere.rate_limiter = taoensso.encore.rate_limiter;

/**
 * Single system newline
 */
taoensso.telemere.newline = "\n";

/**
 * Returns a single (composite) unary fn that applies all given unary fns
 *   sequentially (left->right!: f1, f2, ...). If any given fn returns nil, the
 *   returned composite fn immediately returns nil:
 * 
 *  ((comp-middleware inc #(* % 2) inc) 1) => 5 ; (inc (* (inc 1) 2))
 *  ((comp-middleware inc (fn [_] nil) (fn [_] (throw (Exception. "Never thrown!")))) 1) => nil
 * 
 *   Useful for composing Ring-style middleware fns.
 */
taoensso.telemere.comp_middleware = taoensso.encore.comp_middleware;

taoensso.telemere.default_handler_dispatch_opts = taoensso.encore.signals.default_handler_dispatch_opts;

/**
 * For use within signal message vectors.
 *   Wraps given arguments so that they're spliced when creating message.
 *   Useful for conditionally splicing in extra message content, etc.:
 * 
 *  (signal! {:msg [(when <cond> (msg-splice ["Username:" "Steve"])) <...>]}) or
 *  (log!          [(when <cond> (msg-splice ["Username:" "Steve"]))])
 * 
 *    %> {:msg_ "Username: Steve"}
 */
taoensso.telemere.msg_splice = taoensso.telemere.impl.msg_splice;

taoensso.telemere.msg_skip = taoensso.telemere.impl.msg_skip;

/**
 * Experimental, subject to change.
 *   Returns a (fn clean [signal]) that:
 *  - Takes a Telemere  signal (map).
 *  - Returns a minimal signal (map) ready for printing, etc.
 * 
 *   Signals are optimized for cheap creation and easy handling, so tend to be
 *   verbose and may contain things like nil values and duplicated content.
 * 
 *   This util efficiently cleans signals of such noise, helping reduce
 *   storage/transmission size, and making key info easier to see.
 * 
 *   Options:
 *  `:incl-nils?` - Include signal's keys with nil values? (default false)
 *  `:incl-kvs?`  - Include signal's app-level root kvs?   (default false)
 *  `:incl-keys`  - Subset of signal keys to retain from those otherwise
 *                  excluded by default: #{:location :kvs :file :host :thread}
 */
taoensso.telemere.clean_signal_fn = taoensso.telemere.utils.clean_signal_fn;

/**
 * Experimental, subject to change.
 *   Returns a (fn format [signal]) that:
 *  - Takes a Telemere signal (map).
 *  - Returns a human-readable signal string.
 * 
 *   Options:
 *  `:incl-newline?` - Include terminating system newline? (default true)
 *  `:preamble-fn`   - (fn [signal]) => signal preamble string, see [1]
 *  `:content-fn`    - (fn [signal]) => signal content  string, see [2]
 * 
 *   [1] `taoensso.telemere.utils/signal-preamble-fn`, etc.
 *   [2] `taoensso.telemere.utils/signal-content-fn`,  etc.
 * 
 *   See also `pr-signal-fn` for an alternative to `format-signal-fn`
 *   that produces machine-readable output (edn, JSON, etc.).
 */
taoensso.telemere.format_signal_fn = taoensso.telemere.utils.format_signal_fn;

/**
 * Experimental, subject to change.
 *   Returns a (fn pr [signal]) that:
 *  - Takes a Telemere signal (map).
 *  - Returns a machine-readable signal string.
 * 
 *   Options:
 *  `:pr-fn`         - ∈ #{<unary-fn> :edn (default) :json (Cljs only)}
 *  `:clean-fn`      - (fn [signal]) => clean signal map, see [1]
 *  `:incl-newline?` - Include terminating system newline? (default true)
 * 
 *   Examples:
 * 
 *  ;; To print as edn:
 *  (pr-signal-fn {:pr-fn :edn})
 * 
 *  ;; To print as JSON:
 *  ;; Ref.  <https://github.com/metosin/jsonista> (or any alt JSON lib)
 *  #?(:clj (require '[jsonista.core :as jsonista]))
 *  (pr-signal-fn
 *    {:pr-fn
 *      #?(:cljs :json ; Use js/JSON.stringify
 *         :clj  jsonista/write-value-as-string)})
 * 
 *   [1] `taoensso.telemere.utils/clean-signal-fn`, etc.
 * 
 *   See also `format-signal-fn` for an alternative to `pr-signal-fn`
 *   that produces human-readable output.
 */
taoensso.telemere.pr_signal_fn = taoensso.telemere.utils.pr_signal_fn;

/**
 * Experimental, subject to change.
 *   Returns true iff given signal has an `:error` value, or a `:kind` or `:level`
 *   that indicates that it's an error.
 */
taoensso.telemere.error_signal_QMARK_ = taoensso.telemere.utils.error_signal_QMARK_;
/**
 * Call a Telemere signal creator to conditionally create a signal at that callsite.
 * 
 * When filtering conditions are met [4], the call creates a Telemere signal [3]
 * and dispatches it to registered handlers for processing (e.g. writing to
 * console/file/queue/db, etc.).
 * 
 * Telemere doesn't make a hard distinction between different kinds of signals
 * (log, event, error, etc.) - they're all just plain Clojure/Script maps with
 * various keys:
 * 
 *   - All signal creators offer the same options [2], and
 *   - All signal kinds can contain the same content [3]
 * 
 * Creators vary only in in their default options and call APIs (expected args
 * and return values), making them more/less convenient for certain use cases:
 * 
 *   `event!` -------- [id   ] or [id   opts/level] => true iff signal was created (allowed)
 *   `log!` ---------- [msg  ] or [opts/level  msg] => true iff signal was created (allowed)
 *   `error!` -------- [error] or [opts/id   error] => given error (unconditional)
 *   `trace!` -------- [form ] or [opts/id    form] => form result (value/throw) (unconditional)
 *   `spy!` ---------- [form ] or [opts/level form] => form result (value/throw) (unconditional)
 *   `catch->error!` - [form ] or [opts/id    form] => form value, or given fallback
 *   `signal!` ------- [opts ]                      => depends on options
 * 
 * - `log!` and `event!` are both good default/general-purpose signal creators.
 * - `log!` emphasizes messages, while `event!` emphasizes ids.
 * - `signal!` is the generic creator, and is used by all the others.
 * 
 * ----------------------------------------------------------------------
 * [2] See `help:signal-options` - {:keys [kind level id data ...]}
 * [3] See `help:signal-content` - {:keys [kind level id data ...]}
 * [4] See `help:signal-filters` - (by ns/kind/id/level, sampling, etc.)
 */
taoensso.telemere.help_COLON_signal_creators = "See docstring";

/**
 * Signal options (shared by all signal creators):
 * 
 * `:inst` -------- Platform instant [1] when signal was created, ∈ #{nil :auto <[1]>}
 * `:level` ------- Signal level ∈ #{<int> :trace :debug :info :warn :error :fatal :report ...}
 * `:kind` -------- Signal ?kind ∈ #{nil :event :error :log :trace :spy <app-val> ...}
 * `:id` ---------- ?id of signal          (common to all  signals created at callsite, contrast with `:uid`)
 * `:uid` --------- ?id of signal instance (unique to each signal  created at callsite, contrast with  `:id`)
 *               Defaults to `:auto` for tracing signals, and nil otherwise
 * 
 * `:msg` --------- Arb app-level ?message to incl. in signal: str or vec of strs to join (with `\space`), may be a delay
 * `:data` -------- Arb app-level ?data    to incl. in signal: usu. a map
 * `:error` ------- Arb app-level ?error   to incl. in signal: platform error [2]
 * 
 * `:run` --------- ?form     to execute UNCONDITIONALLY; will incl. `:run-val` in signal
 * `:do` ---------- ?form     to execute   conditionally (iff signal allowed), before establishing `:let` ?binding
 * `:let` --------- ?bindings to establish conditionally (iff signal allowed), BEFORE evaluating `:data` and `:msg` (useful!)
 * 
 * `:parent` ------ Custom ?{:keys [id uid]} to override auto (dynamic) parent signal tracing info
 * `:root` -------- Custom ?{:keys [id uid]} to override auto (dynamic) root   signal tracing info
 * `:location` ---- Custom ?{:keys [ns line column file]} to override auto signal creator callsite location
 * `:ctx` --------- Custom ?val to override auto (dynamic `*ctx*`) in signal, as per `with-ctx`
 * `:ctx+` -------- Custom ?val to update   auto (dynamic `*ctx*`) in signal, as per `with-ctx+`
 * 
 * `:elidable?` --- Should signal be subject to compile-time elision? (Default: true)
 * `:sample-rate` - ?rate ∈ℝ[0,1] for signal sampling (0.75 => allow 75% of signals, nil => allow all)
 * `:when` -------- Arb ?form; when present, form must return truthy to allow signal
 * `:rate-limit` -- ?spec as given to `taoensso.telemere/rate-limiter`, see its docstring for details
 * `:rate-limit-by` When present, rate limits will be enforced independently for each id (any Clojure value!)
 * `:middleware` -- Optional (fn [signal]) => ?modified-signal to apply when signal is created, as per `with-middleware`
 * `:middleware+` - Optional (fn [signal]) => ?modified-signal to apply when signal is created, as per `with-middleware+`
 * `:trace?` ------ Should tracing be enabled for `:run` form?
 * 
 * <kvs> ---------- Other arb app-level ?kvs to incl. in signal. Typically NOT included in
 *               handler output, so a great way to provide custom data/opts for use
 *               (only) by custom middleware/handlers.
 * 
 * If anything is unclear, please ping me (@ptaoussanis) so that I can improve these docs!
 * 
 * [1] `java.time.Instant`   or `js/Date`
 * [2] `java.lang.Throwable` or `js/Error`
 */
taoensso.telemere.help_COLON_signal_options = "See docstring";

/**
 * Signals are maps with {:keys [inst id ns level data msg_ ...]}, though they
 * can be modified by signal and/or handler middleware.
 * 
 * Default signal keys:
 * 
 * `:schema` ------ Int version of signal schema (current: 1)
 * `:inst` -------- Platform instant [1] when signal was created
 * `:level` ------- Signal level ∈ #{<int> :trace :debug :info :warn :error :fatal :report ...}
 * `:kind` -------- Signal ?kind ∈ #{nil :event :error :log :trace :spy :slf4j :tools-logging <app-val> ...}
 * `:id` ---------- ?id of signal          (common to all  signals created at callsite,              contrast with `:uid`)
 * `:uid` --------- ?id of signal instance (unique to each signal  created at callsite when tracing, contrast with  `:id`)
 * 
 * `:msg_` -------- Arb app-level message  ?str              given to signal creator - may be a delay, always use `force` to unwrap!
 * `:data` -------- Arb app-level data     ?val (usu. a map) given to signal creator
 * `:error` ------- Arb app-level platform ?error [2]        given to signal creator
 * 
 * `:run-form` ---- Unevaluated ?form given to signal creator as `:run`
 * `:run-val` ----- Successful return ?val of  `:run` ?form
 * `:run-nsecs` --- ?int nanosecs runtime of   `:run` ?form
 * `:end-inst` ---- Platform ?instant [1] when `:run` ?form completed
 * 
 * `:ctx` --------- ?val of `*ctx*` (arb app-level state) when signal was created
 * `:parent` ------ ?{:keys [id uid]} of parent signal, present in nested signals when tracing
 * `:root` -------- ?{:keys [id uid]} of root   signal, present in nested signals when tracing
 * 
 * `:location` ---- ?{:keys [ns file line column]} signal creator callsite
 * `:ns` ---------- ?str namespace of signal creator callsite, same as (:ns     location)
 * `:line` -------- ?int line      of signal creator callsite, same as (:line   location)
 * `:column` ------ ?int column    of signal creator callsite, same as (:column location)
 * `:file` -------- ?str filename  of signal creator callsite, same as (:file   location)
 * 
 * `:host` -------- (Clj only) {:keys [name ip]}       info for network host
 * `:thread` ------ (Clj only) {:keys [name id group]} info for thread that created signal
 * 
 * `:sample-rate` - ?rate ∈ℝ[0,1] for combined signal AND handler sampling (0.75 => allow 75% of signals, nil => allow all)
 * 
 * <kvs> ---------- Other arb app-level ?kvs given to signal creator. Typically NOT included
 *               in handler output, so a great way to provide custom data/opts for use
 *               (only) by custom middleware/handlers.
 * 
 * If anything is unclear, please ping me (@ptaoussanis) so that I can improve these docs!
 * 
 * [1] `java.time.Instant`   or `js/Date`
 * [2] `java.lang.Throwable` or `js/Error`
 */
taoensso.telemere.help_COLON_signal_content = "See docstring";

/**
 * Telemere supports extensive environmental config via JVM properties,
 * environment variables, or classpath resources.
 * 
 * Environmental filter config includes:
 * 
 *   Kind filter:
 *        JVM property: `taoensso.telemere.rt-kind-filter`
 *        Env variable: `TAOENSSO_TELEMERE_RT_KIND_FILTER`
 *  Classpath resource: `taoensso.telemere.rt-kind-filter`
 * 
 *   Namespace filter:
 *        JVM property: `taoensso.telemere.rt-ns-filter`
 *        Env variable: `TAOENSSO_TELEMERE_RT_NS_FILTER`
 *  Classpath resource: `taoensso.telemere.rt-ns-filter`
 * 
 *   Id filter:
 *        JVM property: `taoensso.telemere.rt-id-filter`
 *        Env variable: `TAOENSSO_TELEMERE_RT_ID_FILTER`
 *  Classpath resource: `taoensso.telemere.rt-id-filter`
 * 
 *   Minimum level:
 *        JVM property: `taoensso.telemere.rt-min-level`
 *        Env variable: `TAOENSSO_TELEMERE_RT_MIN_LEVEL`
 *  Classpath resource: `taoensso.telemere.rt-min-level`
 * 
 * Values are edn, examples:
 * 
 *   `taoensso.telemere.rt-min-level`       -> ":info"
 *   `TAOENSSO_TELEMERE_RT_NS_FILTER`       -> "{:disallow \"taoensso.*\"}"
 *   `taoensso.telemere.rt-id-filter.cljs`  -> "#{:my-id1 :my-id2}"
 *   `TAOENSSO_TELEMERE_RT_KIND_FILTER_CLJ` -> "nil"
 * 
 * For other (non-filter) environmental config, see the relevant docstrings.
 * 
 * Tips:
 * 
 *   - The above ids are for runtime filters (the most common).
 *  For compile-time filters, change `rt`->`ct` / `RT`->`CT`.
 * 
 *   - The above ids will affect both Clj AND Cljs.
 *  For platform-specific filters, use
 *    ".clj.edn"  / "_CLJ_EDN"  or
 *    ".cljs.edn" / "_CLJS_EDN" suffixes instead.
 * 
 *   - Optional ".edn" / "_EDN" suffixes may be added for clarity.
 * 
 *   - To get the right edn syntax, first set your runtime filters using the
 *  standard utils (`set-min-level!`, etc.). Then call `get-filters` and
 *  serialize the relevant parts to edn with `pr-str`.
 * 
 *   - All environmental config uses `get-env` underneath.
 *  See the `get-env` docstring for more/advanced details.
 * 
 *   - Classpath resources are files accessible on your project's
 *  classpath. This usually includes files in your project's
 *  `resources/` dir.
 */
taoensso.telemere.help_COLON_environmental_config = "See docstring";
/**
 * Experimental, subject to change. Feedback welcome!
 *   (fn [root?]) used to generate signal `:uid` values (unique instance ids)
 *   when tracing.
 * 
 *   Relevant only when `otel-tracing?` is false.
 *   If `otel-tracing?` is true, uids are instead generated by `*otel-tracer*`.
 * 
 *   `root?` argument is true iff signal is a top-level trace (i.e. form being
 *   traced is unnested = has no parent form). Root-level uids typically need
 *   more entropy and so are usually longer (e.g. 32 vs 16 hex chars).
 * 
 *   Override default by setting one of the following:
 *        JVM property: `taoensso.telemere/uid-fn`
 *        Env variable: `TAOENSSO_TELEMERE_UID_FN`
 *  Classpath resource: `taoensso.telemere/uid-fn`
 * 
 *  Possible (compile-time) values include:
 *    `:uuid`          - UUID string (Cljs) or `java.util.UUID` (Clj)
 *    `:uuid-str`      - UUID string       (36/36 chars)
 *    `:nano/secure`   - nano-style string (21/10 chars) w/ strong RNG
 *    `:nano/insecure` - nano-style string (21/10 chars) w/ fast   RNG (default)
 *    `:hex/insecure`  - hex-style  string (32/16 chars) w/ strong RNG
 *    `:hex/secure`    - hex-style  string (32/16 chars) w/ fast   RNG
 */
taoensso.telemere._STAR_uid_fn_STAR_ = taoensso.telemere.utils.parse_uid_fn(taoensso.telemere.impl.uid_kind);
/**
 * Dispatches given signal to registered handlers, supports `with-signal/s`.
 *   Normally called automatically (internally) by signal creators, this util
 *   is provided publicly since it's also handy for manually re/dispatching
 *   custom/modified signals, etc.:
 * 
 *  (let [original-signal (with-signal :trap (event! ::my-id1))
 *        modified-signal (assoc original-signal :id ::my-id2)]
 *    (dispatch-signal! modified-signal))
 */
taoensso.telemere.dispatch_signal_BANG_ = (function taoensso$telemere$dispatch_signal_BANG_(signal){
var temp__5823__auto__ = taoensso.telemere.impl.wrap_signal(signal);
if(cljs.core.truth_(temp__5823__auto__)){
var wrapped_signal = temp__5823__auto__;
return taoensso.telemere.impl.dispatch_signal_BANG_(wrapped_signal);
} else {
return null;
}
});
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
taoensso.telemere.handler_COLON_console = taoensso.telemere.consoles.handler_COLON_console;

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
taoensso.telemere.handler_COLON_console_raw = taoensso.telemere.consoles.handler_COLON_console_raw;
if((typeof taoensso !== 'undefined') && (typeof taoensso.telemere !== 'undefined') && (typeof taoensso.telemere.__on_init !== 'undefined')){
} else {
taoensso.telemere.__on_init = (function (){
(taoensso.encore.signals._STAR_default_handler_error_fn_STAR_ = (function (p__63062){
var map__63063 = p__63062;
var map__63063__$1 = cljs.core.__destructure_map(map__63063);
var m = map__63063__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63063__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"error","error",-978969032);
var __ns = "taoensso.encore.signals";
var __id = new cljs.core.Keyword("taoensso.encore.signals","handler-error","taoensso.encore.signals/handler-error",1772750988);
var __level = new cljs.core.Keyword(null,"error","error",-978969032);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),"taoensso.encore.signals"], null),__ns,null,null,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"error","error",-978969032)),null,"Error executing wrapped handler fn",error,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();
}));

(taoensso.encore.signals._STAR_default_handler_backp_fn_STAR_ = (function (data){
return (function (){
var __run_fn_form = null;
var __kind = new cljs.core.Keyword(null,"event","event",301435442);
var __ns = "taoensso.encore.signals";
var __id = new cljs.core.Keyword("taoensso.encore.signals","handler-back-pressure","taoensso.encore.signals/handler-back-pressure",699164801);
var __level = new cljs.core.Keyword(null,"warn","warn",-436710552);
if(cljs.core.truth_((function (){var sf = taoensso.telemere.impl._STAR_rt_sig_filter_STAR_;
if(cljs.core.truth_(sf)){
return (sf.cljs$core$IFn$_invoke$arity$4 ? sf.cljs$core$IFn$_invoke$arity$4(__kind,__ns,__id,__level) : sf.call(null, __kind,__ns,__id,__level));
} else {
return true;
}
})())){
var __inst = (new Date());
var __thread = null;
var __root0 = taoensso.telemere.impl._STAR_trace_root_STAR_;
var __otel_context1 = null;
var __uid = null;
var __root1 = __root0;
var __run_result = null;
var signal__42410__auto__ = (new cljs.core.Delay((function (){

var signal__42401__auto__ = (new taoensso.telemere.impl.Signal((1),__inst,__uid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),"taoensso.encore.signals"], null),__ns,null,null,null,null,__kind,__id,__level,taoensso.telemere._STAR_ctx_STAR_,taoensso.telemere.impl._STAR_trace_parent_STAR_,__root1,data,null,"Back pressure on wrapped handler fn",null,null,null,null,null,null,null,null));
var temp__5821__auto__ = taoensso.telemere._STAR_middleware_STAR_;
if(cljs.core.truth_(temp__5821__auto__)){
var sig_middleware__42402__auto__ = temp__5821__auto__;
return (sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1 ? sig_middleware__42402__auto__.cljs$core$IFn$_invoke$arity$1(signal__42401__auto__) : sig_middleware__42402__auto__.call(null, signal__42401__auto__));
} else {
return signal__42401__auto__;
}
}),null));
taoensso.telemere.impl.dispatch_signal_BANG_((new taoensso.telemere.impl.WrappedSignal(__kind,__ns,__id,__level,signal__42410__auto__)));

if(cljs.core.truth_(__run_result)){
return (__run_result.cljs$core$IFn$_invoke$arity$1 ? __run_result.cljs$core$IFn$_invoke$arity$1(signal__42410__auto__) : __run_result.call(null, signal__42410__auto__));
} else {
return true;
}
} else {
return null;
}
})();
}));

taoensso.telemere.add_handler_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("default","console","default/console",-1389954628),(taoensso.telemere.handler_COLON_console.cljs$core$IFn$_invoke$arity$0 ? taoensso.telemere.handler_COLON_console.cljs$core$IFn$_invoke$arity$0() : taoensso.telemere.handler_COLON_console.call(null, )));

return null;
})()

;
}

//# sourceMappingURL=taoensso.telemere.js.map
