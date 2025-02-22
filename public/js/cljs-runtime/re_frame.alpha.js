goog.provide('re_frame.alpha');
/**
 * Register a handler.
 * 
 *   `kind`: what kind of handler to register. Possible vals:
 * 
 *   ** :sub-lifecycle **
 * 
 *   UNDOCUMENTED. See https://github.com/day8/re-frame/issues/680.
 * 
 *   ** :legacy-sub **
 * 
 *   `(reg :sub query-id signal computation-fn)`
 * 
 *   Register a `signal-fn` and a `computation-fn` for a given `query-id`.
 *   `computation-fn` is a function of `[signals query-vector]`.
 *   See `:sub` for an explanation of all the arguments.
 * 
 *   Compatibility:
 * 
 *   Call `sub` to invoke the `computation-fn`. If passed a query-map,
 *   `sub` converts it to a query-vector.
 * 
 *   If a `:re-frame/query-v` key is present, `sub` uses it
 *   for the query-vector. Otherwise it uses the `:re-frame/q`
 *   key to build a 1-item vector. `sub` includes the original
 *   query-map in the metadata with a `:re-frame/query-m` key.
 * 
 *   For instance,
 *   `#!clj {::rf/q ::items}`
 *   converts to:
 *   `#!clj ^{::rf/query-m {::rf/q ::items}} [::items]`
 * 
 *    #!clj
 *    {::rf/q ::items
 *     ::rf/lifecycle :reactive
 *     ::rf/query-v [::items 1 2 3]}
 * 
 * 
 *    converts to:
 * 
 *    #!clj
 *    ^{::rf/query-m {::rf/q ::items
 *                    ::rf/lifecycle :reactive}}
 *    [::items 1 2 3]
 * 
 *  ** :sub **
 * 
 *  `(reg :sub query-id signal computation-fn)`
 * 
 *  Register a `signal-fn` and a `computation-fn` for a given `query-id`.
 *  `computation-fn` is a function of `[signals query-map]`.
 *  Call `sub` to invoke the handler. If passed a query-vector,
 *  re-frame converts it to a query map, merging in the value of
 *  `:re-frame/query-m` from the metadata, and including
 *  the original query-vector with a `:re-frame/query-v` key.
 * 
 *  For instance,
 *  `#!clj ^{:rf/query-m {:rf/lifecycle :reactive}} [::items 1 2 3]`
 *  converts to:
 * 
 *    #!clj
 *    {::rf/q ::items
 *     ::rf/lifecycle :reactive
 *     ::rf/query-v [::items 1 2 3]}
 * 
 *  For convenience, re-frame also merges in the `:re-frame/lifecycle`
 *  key from the metadata. For instance,
 *  `#!clj ^{:rf/lifecycle :reactive} [::items 1 2 3]`
 *  converts to:
 * 
 *    #!clj
 *    {:rf/q ::items
 *     :rf/lifecycle :reactive
 *     :rf/query-v [::items 1 2 3]}
 * 
 *  A call to `(reg :sub query-id signal-fn computation-fn)`
 *  associates a `query-id` WITH two functions.
 * 
 *  The two functions provide 'a mechanism' for creating a node
 *  in the Signal Graph. When a node of type `query-id` is needed,
 *  the two functions can be used to create it.
 * 
 *  - `query-id` - typically a namespaced keyword (later used in subscribe).
 *  - `signal-fn` - optional. Returns the input data-flows required by this kind of node.
 *  - `computation-fn` - computes the value (output) of the node (from the input data flows).
 * 
 *  Later, during app execution, a call to `(sub {:re-frame/q :sub-id :color :blue})`
 *  will trigger the need for a new `:sub-id` Signal Graph node (matching the
 *  query `{:re-frame/q :sub-id :color :blue}`). And, to create that node the two functions
 *  associated with `:sub-id` will be looked up and used.
 * 
 *  Just to be clear: calling `reg :sub` does not immediately create a node.
 *  It only registers 'a mechanism' (the two functions) by which nodes
 *  can be created later, when a node is bought into existence by the
 *  use of `sub`.
 * 
 *  The `computation-fn` is always the last argument supplied and has three ways to be called.
 *  Two of these ways are syntactic sugar to provide easier access to functional abstractions around your data.
 * 
 *  1. A function that will accept two parameters, the `input-values` and `query`. This is the
 *     standard way to provide a `computation-function`
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          (fn [input-values query]
 *            (:foo input-values)))
 * 
 *  2. A single sugary tuple of `:->`and a 1-arity `computation-function`:
 * 
 *        #!clj
 *        (reg-sub
 *         :query-id
 *         :-> computation-fn)
 * 
 *      This sugary variation allows you to pass a function that will expect only one parameter,
 *      namely the `input-values`, and entirely omit the `query`. A typical `computation-function`
 *      expects two parameters which can cause unfortunate results when attempting to use
 *      clojure standard library functions, or other functions, in a functional manner.
 * 
 *      For example, a significant number of subscriptions exist only to get a value
 *      from the `input-values`. As shown below, this subscription will simply retrieve
 *      the value associated with the `:foo` key in our db:
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          (fn [db _]    ;; :<---- trivial boilerplate we might want to skip over
 *            (:foo db)))
 * 
 *      This is slightly more boilerplate than we might like to do,
 *      as we can use a keyword directly as a function, and we might like to do this:
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          :foo)  ;; :<---- This could be dangerous. If `:foo` is not in db, we get the `query-vector` instead of `nil`.
 * 
 *      By using `:->` our function would not contain the `query-vector`, and any
 *      missing keys would be represented as such:
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          :-> :foo)
 * 
 *      This form allows us to ignore the `query` if our `computation-fn`
 *      has no need for it, and be safe from any accidents. Any 1-arity function can be provided,
 *      and for more complicated use cases, `partial`, `comp`, and anonymous functions can still be used.
 * 
 *  3. A single sugary tuple of `:=>` and a multi-arity `computation-function`
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          :=> computation-fn)
 * 
 *      A vector `query` can be broken into two components `[query-id & optional-values]`, and
 *      some subscriptions require the `optional-values` for extra work within the subscription.
 *      To use them in variation #1, we need to destructure our `computation-fn` parameters
 *      in order to use them.
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          (fn [db [_ foo]]
 *            [db foo]))
 * 
 *      Again we are writing boilerplate just to reach our values, and we might prefer to
 *      have direct access through a parameter vector like `[input-values optional-values]`
 *      instead, so we might be able to use a multi-arity function directly as our `computation-fn`.
 *      A rewrite of the above sub using this sugary syntax would look like this:
 * 
 *        #!clj
 *        (reg-sub
 *          :query-id
 *          :=> vector)  ;; :<---- Could also be `(fn [db foo] [db foo])`
 * 
 *      If handling a map query, `:=>` simply uses the entire map.
 * 
 *  The `computation function` is expected to take two arguments:
 * 
 *  - `input-values` - the values which flow into this node (how is it wired into the graph?)
 *  - `query` - the value passed to `sub`
 * 
 * and it returns a computed value (which becomes the output of the node)
 * 
 *  When `computation-fn` is called, the 2nd argument, `query`, will be that
 *  value passed to `sub`. So, if the call was `(subscribe {:re-frame/q :sub-id :color :blue})`,
 *  then the `query` supplied to the computation function will be `{:re-frame/q :sub-id :color :blue}`.
 * 
 *  The argument(s) supplied to `reg-sub` between `query-id` and the `computation-function`
 *  can vary in 3 ways, but whatever is there defines the `input signals` part
 *  of `the mechanism`, specifying what input values "flow into" the
 *  `computation function` (as the 1st argument) when it is called.
 * 
 *  So, `reg-sub` can be called in one of three ways, because there are three ways
 *  to define the input signals part. But note, the 2nd way, in which a
 *  `signals function` is explicitly supplied, is the most canonical and
 *  instructive. The other two are really just sugary variations.
 * 
 *  **First variation** - no input signal function given:
 * 
 *    #!clj
 *    (reg-sub
 *      :query-id
 *      a-computation-fn)   ;; has signature:  (fn [db query]  ... ret-value)
 * 
 *   In the absence of an explicit `signals function`, the node's input signal defaults to `app-db`
 *   and, as a result, the value within `app-db` (a map) is
 *   given as the 1st argument when `a-computation-fn` is called.
 * 
 * 
 *  **Second variation** - a signal function is explicitly supplied:
 * 
 *      #!clj
 *      (reg-sub
 *        :query-id
 *        signal-fn     ;; <-- here
 *        computation-fn)
 * 
 *  This is the most canonical and instructive of the three variations.
 * 
 *  When a node is created from the template, the `signal function` will be called and it
 *  is expected to return the input signal(s) as either a singleton, if there is only
 *  one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *  The current values of the returned signals will be supplied as the 1st argument to
 *  the `a-computation-fn` when it is called - and subject to what this `signal-fn` returns,
 *  this value will be either a singleton, sequence or map of them (paralleling
 *  the structure returned by the `signal function`).
 * 
 *  This example `signal function` returns a 2-vector of input signals.
 * 
 *      #!clj
 *      (fn [query]
 *         [(sub [:a-sub])
 *          (sub [:b-sub])])
 * 
 *  The associated computation function must be written
 *  to expect a 2-vector of values for its first argument:
 * 
 *      #!clj
 *      (fn [[a b] query]     ;; 1st argument is a seq of two values
 *        ....)
 * 
 *  If, on the other hand, the signal function was simpler and returned a singleton, like this:
 * 
 *      #!clj
 *      (fn [query]
 *        (sub [:a-sub]))      ;; <-- returning a singleton
 * 
 *  then the associated computation function must be written to expect a single value
 *  as the 1st argument:
 * 
 *      #!clj
 *      (fn [a query]       ;; 1st argument is a single value
 *         ...)
 * 
 *  Further Note: variation #1 above, in which an `signal-fn` was not supplied, like this:
 * 
 *      #!clj
 *      (reg-sub
 *        :query-id
 *        a-computation-fn)   ;; has signature:  (fn [db query]  ... ret-value)
 * 
 *  is the equivalent of using this
 *  2nd variation and explicitly supplying a `signal-fn` which returns `app-db`:
 * 
 *      #!clj
 *      (reg-sub
 *        :query-id
 *        (fn [_ _] re-frame/app-db)   ;; <-- explicit signal-fn
 *        a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)
 * 
 *  **Third variation** - syntax Sugar
 * 
 *      #!clj
 *      (reg-sub
 *        :a-b-sub
 *        :<- [:a-sub]
 *        :<- [:b-sub]
 *        (fn [[a b] query]    ;; 1st argument is a seq of two values
 *          {:a a :b b}))
 * 
 *  This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an
 *  `signals-fn` you provide one or more pairs of `:<-` and a subscription vector.
 * 
 *  If you supply only one pair a singleton will be supplied to the computation function,
 *  as if you had supplied a `signal-fn` returning only a single value:
 * 
 *      #!clj
 *      (reg-sub
 *        :a-sub
 *        :<- [:a-sub]
 *        (fn [a query]      ;; only one pair, so 1st argument is a single value
 *          ...))
 * 
 *  Syntactic sugar for both the `signal-fn` and `computation-fn` can be used together
 *  and the direction of arrows shows the flow of data and functions. The example from
 *  directly above is reproduced here:
 * 
 *      #!clj
 *      (reg-sub
 *        :a-b-sub
 *        :<- [:a-sub]
 *        :<- [:b-sub]
 *        :-> (partial zipmap [:a :b]))
 * 
 *  For further understanding, read the tutorials, and look at the detailed comments in
 *  /examples/todomvc/src/subs.cljs.
 * 
 *  See also: `sub`
 *          
 */
re_frame.alpha.reg = (function re_frame$alpha$reg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___87848 = arguments.length;
var i__5727__auto___87849 = (0);
while(true){
if((i__5727__auto___87849 < len__5726__auto___87848)){
args__5732__auto__.push((arguments[i__5727__auto___87849]));

var G__87850 = (i__5727__auto___87849 + (1));
i__5727__auto___87849 = G__87850;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic = (function (kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.register.alpha.reg,kind,args);
}));

(re_frame.alpha.reg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.alpha.reg.cljs$lang$applyTo = (function (seq87218){
var G__87219 = cljs.core.first(seq87218);
var seq87218__$1 = cljs.core.next(seq87218);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87219,seq87218__$1);
}));

/**
 * Queue `event` for processing (handling).
 * 
 *   `event` is a vector and the first element is typically a keyword
 *   which identifies the kind of event.
 * 
 *   The event will be added to a FIFO processing queue, so event
 *   handling does not happen immediately. It will happen 'very soon'
 *   but not now. And if the queue already contains events, they
 *   will be processed first.
 * 
 *   Usage:
 * 
 *    #!clj
 *    (dispatch [:order "pizza" {:supreme 2 :meatlovers 1 :veg 1}])
 *   
 */
re_frame.alpha.dispatch = (function re_frame$alpha$dispatch(event){
return re_frame.router.dispatch(event);
});
/**
 * Synchronously (immediately) process `event`. It does **not** queue
 *   the event for handling later as `dispatch` does.
 * 
 *   `event` is a vector and the first element is typically a keyword
 *   which identifies the kind of event.
 * 
 *   It is an error to use `dispatch-sync` within an event handler because
 *   you can't immediately process an new event when one is already
 *   part way through being processed.
 * 
 *   Generally, avoid using this function, and instead, use `dispatch`.
 *   Only use it in the narrow set of cases where any delay in
 *   processing is a problem:
 * 
 *  1. the `:on-change` handler of a text field where we are expecting fast typing
 *  2. when initialising your app - see 'main' in examples/todomvc/src/core.cljs
 *  3. in a unit test where immediate, synchronous processing is useful
 * 
 *   Usage:
 * 
 *    #!clj
 *    (dispatch-sync [:sing :falsetto "piano accordion"])
 *   
 */
re_frame.alpha.dispatch_sync = (function re_frame$alpha$dispatch_sync(event){
return re_frame.router.dispatch_sync(event);
});
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain:
 * 
 *  - `id` is typically a namespaced keyword  (but can be anything)
 *  - `handler` is a function: (db event) -> db
 *  - `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 * 
 *   Example Usage:
 * 
 *    #!clj
 *    (reg-event-db
 *      :token
 *      (fn [db event]
 *        (assoc db :some-key (get event 2)))  ;; return updated db
 * 
 *   Or perhaps:
 * 
 *    #!clj
 *    (reg-event-db
 *      :namespaced/id           ;; <-- namespaced keywords are often used
 *      [one two three]          ;; <-- a seq of interceptors
 *      (fn [db [_ arg1 arg2]]   ;; <-- event vector is destructured
 *        (-> db
 *          (dissoc arg1)
 *          (update :key + arg2))))   ;; return updated db
 *   
 */
re_frame.alpha.reg_event_db = (function re_frame$alpha$reg_event_db(var_args){
var G__87248 = arguments.length;
switch (G__87248) {
case 2:
return re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.flow.alpha.interceptor,re_frame.flow.alpha.do_fx,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(re_frame.alpha.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain:
 * 
 *  - `id` is typically a namespaced keyword  (but can be anything)
 *  - `handler` is a function: (coeffects-map event-vector) -> effects-map
 *  - `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 * 
 * 
 *   Example Usage:
 * 
 *    #!clj
 *    (reg-event-fx
 *      :event-id
 *      (fn [cofx event]
 *        {:db (assoc (:db cofx) :some-key (get event 2))}))   ;; return a map of effects
 * 
 * 
 *   Or perhaps:
 * 
 *    #!clj
 *    (reg-event-fx
 *      :namespaced/id           ;; <-- namespaced keywords are often used
 *      [one two three]          ;; <-- a seq of interceptors
 *      (fn [{:keys [db] :as cofx} [_ arg1 arg2]] ;; destructure both arguments
 *        {:db (assoc db :some-key arg1)          ;; return a map of effects
 *         :fx [[:dispatch [:some-event arg2]]]}))
 *   
 */
re_frame.alpha.reg_event_fx = (function re_frame$alpha$reg_event_fx(var_args){
var G__87259 = arguments.length;
switch (G__87259) {
case 2:
return re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.flow.alpha.interceptor,re_frame.flow.alpha.do_fx,re_frame.std_interceptors.inject_global_interceptors,re_frame.flow.alpha.interceptor,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(re_frame.alpha.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain:
 * 
 *  - `id` is typically a namespaced keyword  (but can be anything)
 *  - `handler` is a function: context-map -> context-map
 * 
 *   You can explore what is provided in `context` [here](https://day8.github.io/re-frame/Interceptors/#what-is-context).
 * 
 *   Example Usage:
 * 
 *    #!clj
 *    (reg-event-ctx
 *      :event-id
 *      (fn [{:keys [coeffects] :as context}]
 *        (let [initial  {:db     (:db coeffects)
 *                        :event  (:event coeffects)
 *                        :fx     []}
 *              result   (-> initial
 *                           function1
 *                           function2
 *                           function3)
 *              effects  (select-keys result [:db :fx])]
 *           (assoc context :effects effects))))
 *   
 */
re_frame.alpha.reg_event_ctx = (function re_frame$alpha$reg_event_ctx(var_args){
var G__87284 = arguments.length;
switch (G__87284) {
case 2:
return re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.flow.alpha.interceptor,re_frame.flow.alpha.do_fx,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(re_frame.alpha.reg_event_ctx.cljs$lang$maxFixedArity = 3);

/**
 * Unregisters event handlers (presumably registered previously via the use of `reg-event-db` or `reg-event-fx`).
 * 
 *   When called with no args, it will unregister all currently registered event handlers.
 * 
 *   When given one arg, assumed to be the `id` of a previously registered
 *   event handler, it will unregister the associated handler. Will produce a warning to
 *   console if it finds no matching registration.
 */
re_frame.alpha.clear_event = (function re_frame$alpha$clear_event(var_args){
var G__87296 = arguments.length;
switch (G__87296) {
case 0:
return re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind);
}));

(re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.events.kind,id);
}));

(re_frame.alpha.clear_event.cljs$lang$maxFixedArity = 1);

/**
 * Register the given event error `handler` (function) that will catch unhandled exceptions
 *   thrown in the interceptors/handler chain.
 * 
 *   Only one `handler` can be registered. Registering a new `handler` clears the existing `handler`.
 * 
 *   This `handler` function has the signature:
 * 
 *   `(handler [original-error re-frame-error])`
 * 
 *   - `original-error`: A plaform-native Error object.
 *   Represents the original error thrown by user code.
 * 
 *   This is the error you see when no `handler` is registered.
 *   To preserve this behavior, simply call `(throw original-error)`
 *   at the end of your handler function.
 * 
 *   - `re-frame-error`: A clojure ExceptionInfo object.
 *   Includes the stacktrace of re-frame's internal functions,
 *   and extra data about the current interceptor context.
 *   Call `(ex-data re-frame-error)` to get this info.
 *   It includes:
 * 
 *   - `:interceptor`: the `:id` of the throwing interceptor.
 *   - `:direction`: `:before` or `:after`.
 *   - `:event-v`: the re-frame event which invoked this interceptor.
 */
re_frame.alpha.reg_event_error_handler = (function re_frame$alpha$reg_event_error_handler(handler){
return re_frame.registrar.register_handler(new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),handler);
});
re_frame.alpha.reg_event_error_handler(re_frame.interceptor.default_error_handler);
/**
 * Given a `query`, returns a Reagent `reaction` which will, over
 *   time, reactively deliver a stream of values. So, in FRP-ish terms,
 *   it returns a `Signal`.
 * 
 *   To obtain the current value from the Signal, it must be dereferenced:
 * 
 *    #!clj
 *    (let [signal (sub {:re-frame/q ::items})
 *          value  (deref signal)]     ;; could be written as @signal
 *      ...)
 * 
 * which is typically written tersely as simple:
 * 
 *    #!clj
 *    (let [items  @(sub {:re-frame/q ::items})]
 *      ...)
 * 
 * 
 *   `query` is a map containing:
 *  `:re-frame/q`:         Required. Names the query. Typically a namespaced keyword.
 *  `:re-frame/lifecycle`: Optional. See docs for `reg-sub-lifecycle`.
 * 
 *   The entire `query` is passed to the subscription handler. This means you can use
 *   additional keys to parameterise the query it performs.
 * 
 *   **Example Usage**:
 * 
 *    #!clj
 *    (require '[re-frame :as-alias rf])
 *    (sub {::rf/q ::items
 *                ::rf/lifecycle ::rf/reactive
 *                :color "blue"
 *                :size :small})
 * 
 *   Note: for any given call to `sub there must have been a previous call
 *   to `reg`, registering the query handler (functions) associated with
 *   `query-id`.
 * 
 *   **De-duplication**
 * 
 *   Two, or more, concurrent subscriptions for the same query will
 *   source reactive updates from the one executing handler.
 * 
 *   See also: `reg-sub`
 * 
 *   **Flows**
 * 
 *   Flows have their own lifecycle, and you don't need to provide an `::rf/lifecycle` key.
 *   To subscribe to a flow, simply call:
 * 
 *    #!clj
 *    (sub :flow {:id :your-flow-id})
 * 
 *   **Legacy support**
 * 
 *   `dyn-v` is not supported.
 *   
 */
re_frame.alpha.sub = (function re_frame$alpha$sub(var_args){
var G__87322 = arguments.length;
switch (G__87322) {
case 1:
return re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1(q);
}));

(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2 = (function (id,q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2(id,q);
}));

(re_frame.alpha.sub.cljs$lang$maxFixedArity = 2);

/**
 * Unregisters subscription handlers (presumably registered previously via the use of `reg-sub`).
 * 
 *   When called with no args, it will unregister all currently registered subscription handlers.
 * 
 *   When given one arg, assumed to be the `id` of a previously registered
 *   subscription handler, it will unregister the associated handler. Will produce a warning to
 *   console if it finds no matching registration.
 * 
 *   NOTE: Depending on the usecase, it may be necessary to call `clear-subscription-cache!` afterwards
 */
re_frame.alpha.clear_sub = (function re_frame$alpha$clear_sub(var_args){
var G__87336 = arguments.length;
switch (G__87336) {
case 0:
return re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);
}));

(re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1 = (function (query_id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
}));

(re_frame.alpha.clear_sub.cljs$lang$maxFixedArity = 1);

/**
 * This is a low level, advanced function.  You should probably be
 *   using `reg-sub` instead.
 * 
 *   Some explanation is available in the docs at
 *   <a href="http://day8.github.io/re-frame/flow-mechanics/" target="_blank">http://day8.github.io/re-frame/flow-mechanics/</a>
 */
re_frame.alpha.reg_sub_raw = (function re_frame$alpha$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
/**
 * Removes all subscriptions from the cache.
 * 
 *   This function can be used at development time or test time. Useful when hot reloading
 *   namespaces containing subscription handlers. Also call it after a React/render exception,
 *   because React components won't have been cleaned up properly. And this, in turn, means
 *   the subscriptions within those components won't have been cleaned up correctly. So this
 *   forces the issue.
 *   
 */
re_frame.alpha.clear_subscription_cache_BANG_ = (function re_frame$alpha$clear_subscription_cache_BANG_(){
return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * Register the given effect `handler` for the given `id`:
 * 
 *  - `id` is keyword, often namespaced.
 *  - `handler` is a side-effecting function which takes a single argument and whose return
 *    value is ignored.
 * 
 *   To use, first, associate `:effect2` with a handler:
 * 
 *    #!clj
 *    (reg-fx
 *       :effect2
 *       (fn [value]
 *          ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map:
 * 
 *    #!clj
 *    {:effect2  [1 2]}
 * 
 *   then the `handler` `fn` we registered previously, using `reg-fx`, will be
 *   called with an argument of `[1 2]`.
 *   
 */
re_frame.alpha.reg_fx = (function re_frame$alpha$reg_fx(id,handler){
return re_frame.fx.reg_fx(id,handler);
});
/**
 * Unregisters effect handlers (presumably registered previously via the use of `reg-fx`).
 * 
 *   When called with no args, it will unregister all currently registered effect handlers.
 * 
 *   When given one arg, assumed to be the `id` of a previously registered
 *   effect handler, it will unregister the associated handler. Will produce a warning to
 *   console if it finds no matching registration.
 *   
 */
re_frame.alpha.clear_fx = (function re_frame$alpha$clear_fx(var_args){
var G__87365 = arguments.length;
switch (G__87365) {
case 0:
return re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind);
}));

(re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.fx.kind,id);
}));

(re_frame.alpha.clear_fx.cljs$lang$maxFixedArity = 1);

/**
 * Register the given coeffect `handler` for the given `id`, for later use
 *   within `inject-cofx`:
 * 
 *  - `id` is keyword, often namespaced.
 *  - `handler` is a function which takes either one or two arguments, the first of which is
 *     always `coeffects` and which returns an updated `coeffects`.
 * 
 *   See also: `inject-cofx`
 *   
 */
re_frame.alpha.reg_cofx = (function re_frame$alpha$reg_cofx(id,handler){
return re_frame.cofx.reg_cofx(id,handler);
});
/**
 * Given an `id`, and an optional, arbitrary `value`, returns an interceptor
 *   whose `:before` adds to the `:coeffects` (map) by calling a pre-registered
 *   'coeffect handler' identified by the `id`.
 * 
 *   The previous association of a `coeffect handler` with an `id` will have
 *   happened via a call to `re-frame.core/reg-cofx` - generally on program startup.
 * 
 *   Within the created interceptor, this 'looked up' `coeffect handler` will
 *   be called (within the `:before`) with two arguments:
 * 
 *   - the current value of `:coeffects`
 *   - optionally, the originally supplied arbitrary `value`
 * 
 *   This `coeffect handler` is expected to modify and return its first, `coeffects` argument.
 * 
 *   **Example of `inject-cofx` and `reg-cofx` working together**
 * 
 * 
 *   First - Early in app startup, you register a `coeffect handler` for `:datetime`:
 * 
 *    #!clj
 *    (re-frame.core/reg-cofx
 *      :datetime                        ;; usage  (inject-cofx :datetime)
 *      (fn coeffect-handler
 *        [coeffect]
 *        (assoc coeffect :now (js/Date.))))   ;; modify and return first arg
 * 
 *   Second - Later, add an interceptor to an -fx event handler, using `inject-cofx`:
 * 
 *    #!clj
 *    (re-frame.core/reg-event-fx            ;; when registering an event handler
 *      :event-id
 *      [ ... (inject-cofx :datetime) ... ]  ;; <-- create an injecting interceptor
 *      (fn event-handler
 *        [coeffect event]
 *          ;;... in here can access (:now coeffect) to obtain current datetime ...
 *        )))
 * 
 *   **Background**
 * 
 *   `coeffects` are the input resources required by an event handler
 *   to perform its job. The two most obvious ones are `db` and `event`.
 *   But sometimes an event handler might need other resources.
 * 
 *   Perhaps an event handler needs a random number or a GUID or the current
 *   datetime. Perhaps it needs access to a DataScript database connection.
 * 
 *   If an event handler directly accesses these resources, it stops being
 *   pure and, consequently, it becomes harder to test, etc. So we don't
 *   want that.
 * 
 *   Instead, the interceptor created by this function is a way to 'inject'
 *   'necessary resources' into the `:coeffects` (map) subsequently given
 *   to the event handler at call time.
 * 
 *   See also `reg-cofx`
 *   
 */
re_frame.alpha.inject_cofx = (function re_frame$alpha$inject_cofx(var_args){
var G__87380 = arguments.length;
switch (G__87380) {
case 1:
return re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(id,value);
}));

(re_frame.alpha.inject_cofx.cljs$lang$maxFixedArity = 2);

/**
 * Unregisters coeffect handlers (presumably registered previously via the use of `reg-cofx`).
 * 
 *   When called with no args, it will unregister all currently registered coeffect handlers.
 * 
 *   When given one arg, assumed to be the `id` of a previously registered
 *   coeffect handler, it will unregister the associated handler. Will produce a warning to
 *   console if it finds no matching registration.
 */
re_frame.alpha.clear_cofx = (function re_frame$alpha$clear_cofx(var_args){
var G__87387 = arguments.length;
switch (G__87387) {
case 0:
return re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind);
}));

(re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
}));

(re_frame.alpha.clear_cofx.cljs$lang$maxFixedArity = 1);

/**
 * An interceptor which logs/instruments an event handler's actions to
 *   `re-frame/console` at the `:log` level.
 * 
 *   Output includes:
 * 
 *  1. the event vector
 *  2. a `clojure.data/diff` of db, before vs after, which shows
 *     the changes caused by the event handler. To understand the output,
 *     you should understand:
 *     <a href="https://clojuredocs.org/clojure.data/diff" target="_blank">https://clojuredocs.org/clojure.data/diff</a>.
 * 
 *   You'd typically include this interceptor after (to the right of) any
 *   `path` interceptor.
 * 
 *   Warning:  calling `clojure.data/diff` on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. So, you should condition it out like this:
 * 
 *    #!clj
 *    (re-frame.core/reg-event-db
 *      :evt-id
 *      [(when ^boolean goog.DEBUG re-frame.core/debug)]  ;; <-- conditional
 *      (fn [db v]
 *         ...))
 * 
 *   To make this code fragment work, you'll also have to set `goog.DEBUG` to
 *   `false` in your production builds. For an example, look in `project.clj` of /examples/todomvc.
 *   
 */
re_frame.alpha.debug = re_frame.std_interceptors.debug;
/**
 * Returns an interceptor which acts somewhat like `clojure.core/update-in`, in the sense that
 *   the event handler is given a specific part of `app-db` to change, not all of `app-db`.
 * 
 *   The interceptor has both a `:before` and `:after` functions. The `:before` replaces
 *   the `:db` key within coeffects with a sub-path within `app-db`. The `:after` reverses the process,
 *   and it grafts the handler's return value back into db, at the right path.
 * 
 *   Examples:
 * 
 *    #!clj
 *    (path :some :path)
 *    (path [:some :path])
 *    (path [:some :path] :to :here)
 *    (path [:some :path] [:to] :here)
 * 
 *   Example Use:
 * 
 *    #!clj
 *    (reg-event-db
 *      :event-id
 *      (path [:a :b])  ;; <-- used here, in interceptor chain
 *      (fn [b v]       ;; 1st arg is not db. Is the value from path [:a :b] within db
 *        ... new-b))   ;; returns a new value for that path (not the entire db)
 * 
 *   Notes:
 * 
 *  1. `path` may appear more than once in an interceptor chain. Progressive narrowing.
 *  2. if `:effects` contains no `:db` effect, can't graft a value back in.
 *   
 */
re_frame.alpha.path = (function re_frame$alpha$path(var_args){
var args__5732__auto__ = [];
var len__5726__auto___87913 = arguments.length;
var i__5727__auto___87914 = (0);
while(true){
if((i__5727__auto___87914 < len__5726__auto___87913)){
args__5732__auto__.push((arguments[i__5727__auto___87914]));

var G__87915 = (i__5727__auto___87914 + (1));
i__5727__auto___87914 = G__87915;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frame.alpha.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.std_interceptors.path,args);
}));

(re_frame.alpha.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.path.cljs$lang$applyTo = (function (seq87415){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87415));
}));

/**
 * Returns an interceptor which will run the given function `f` in the `:after`
 *   position.
 * 
 *   `f` is called with two arguments: `db` and `event`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` interceptor which is only about side effects, `enrich`
 *   expects `f` to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   If `f` returns `nil`, the `db` value passed to `f` will be returned instead.
 * 
 *   #### Example Use:
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them via a warning
 *   at the bottom of the panel.
 * 
 *   Almost any user action (edit text, add new todo, remove a todo) requires a
 *   complete reassessment of duplication errors and warnings. E.g. that edit
 *   just made might have introduced a new duplicate, or removed one. Same with
 *   any todo removal. So we need to re-calculate warnings after any CRUD events
 *   associated with the todos list.
 * 
 *   Unless we are careful, we might end up coding subtly different checks
 *   for each kind of CRUD operation.  The duplicates check made after
 *   'delete todo' event might be subtly different to that done after an
 *   editing operation. Nice and efficient, but fiddly. A bug generator
 *   approach.
 * 
 *   So, instead, we create an `f` which recalculates ALL warnings from scratch
 *   every time there is ANY change. It will inspect all the todos, and
 *   reset ALL FLAGS every time (overwriting what was there previously)
 *   and fully recalculate the list of duplicates (displayed at the bottom?).
 * 
 *   <a href="https://twitter.com/nathanmarz/status/879722740776939520" target="_blank">https://twitter.com/nathanmarz/status/879722740776939520</a>
 * 
 *   By applying `f` in an `:enrich` interceptor, after every CRUD event,
 *   we keep the handlers simple and yet we ensure this important step
 *   (of getting warnings right) is not missed on any change.
 * 
 *   We can test `f` easily - it is a pure function - independently of
 *   any CRUD operation.
 * 
 *   This brings huge simplicity at the expense of some re-computation
 *   each time. This may be a very satisfactory trade-off in many cases.
 * 
 *   #### Returning nil
 * 
 *   In some cases, it's useful to apply a change to specific situations that can
 *   be determined at runtime instead of when defining the handler with an
 *   `:enrich` interceptor. Instead of forcing you to return the `db` from every
 *   non-applicable branch, you can return `nil` to use the given `db` value:
 * 
 *    #!clj
 *    (def set-last-update
 *      (core/enrich
 *        (fn [{db :db} [_ {user :user}]]
 *          (when (active-user? user)  ;; <- Only perform an update if user is active
 *            ...))))
 *   
 */
re_frame.alpha.enrich = (function re_frame$alpha$enrich(f){
return re_frame.std_interceptors.enrich(f);
});
/**
 * > New in v1.2.0
 * 
 * An interceptor which decreases the amount of destructuring necessary in an
 * event handler where the event is structured as a 2-vector of
 * [event-id payload-map].
 * 
 * It promotes the `payload-map` part to be the event ultimately given to the
 * event handler. Should you want the full original event, it can be found in
 * `coeffects` under the key `:original-event`.
 * 
 * If a dispatch looked like this:
 * 
 *    #!clj
 *     (dispatch [:event-id {:x 1 :y 2 :z 3}])
 * 
 * Your event handlers can look like this:
 * 
 *    #!clj
 *     (reg-event-fx
 *       :event-id
 *       [... unwrap ...]                    ;; <-- added to the interceptors
 *       (fn [{:keys [db]} {:keys [x y z]}]  ;; <-- instead of [_ {:keys [x y z]}]
 *         ...)
 * 
 */
re_frame.alpha.unwrap = re_frame.std_interceptors.unwrap;
/**
 * An interceptor which removes the first element of the event vector,
 *   before it is supplied to the event handler, allowing you to write more
 * aesthetically pleasing event handlers. No leading underscore on the event-v!
 * 
 *   Should you want the full original event, it can be found in `coeffects` under
 *   the key `:original-event`.
 * 
 *   Your event handlers will look like this:
 * 
 *    #!clj
 *    (reg-event-db
 *      :event-id
 *      [... trim-v ...]    ;; <-- added to the interceptors
 *      (fn [db [x y z]]    ;; <-- instead of [_ x y z]
 *        ...)
 *  
 */
re_frame.alpha.trim_v = re_frame.std_interceptors.trim_v;
/**
 * Returns an interceptor which runs the given function `f` in the `:after`
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `:effects` value for `:db`
 *   (or the `:coeffect` value of `:db` if no `:db` effect is returned) and the event.
 *   Its return value is ignored, so `f` can only side-effect.
 * 
 *   An example of use can be seen in the re-frame github repo in `/examples/todomvc/events.cljs`:
 * 
 *   - `f` runs schema validation (reporting any errors found).
 *   - `f` writes to localstorage.
 */
re_frame.alpha.after = (function re_frame$alpha$after(f){
return re_frame.std_interceptors.after(f);
});
/**
 * Returns an interceptor which will observe N paths within `db`, and if any of them
 *   test not `identical?` to their previous value  (as a result of a event handler
 *   being run), then it will run `f` to compute a new value, which is then assoc-ed
 *   into the given `out-path` within `db`.
 * 
 *   Example Usage:
 * 
 *    #!clj
 *    (defn my-f
 *      [a-val b-val]
 *      ... some computation on a and b in here)
 * 
 *    ;; use it
 *    (def my-interceptor (on-changes my-f [:c] [:a] [:b]))
 * 
 *    (reg-event-db
 *      :event-id
 *      [... my-interceptor ...]  ;; <-- ultimately used here
 *      (fn [db v]
 *         ...))
 * 
 * 
 *   If you put this interceptor on handlers which might change paths `:a` or `:b`,
 *   it will:
 * 
 *  - call `f` each time the value at path `[:a]` or `[:b]` changes
 *  - call `f` with the values extracted from `[:a]` `[:b]`
 *  - assoc the return value from `f` into the path  `[:c]`
 *   
 */
re_frame.alpha.on_changes = (function re_frame$alpha$on_changes(var_args){
var args__5732__auto__ = [];
var len__5726__auto___87920 = arguments.length;
var i__5727__auto___87921 = (0);
while(true){
if((i__5727__auto___87921 < len__5726__auto___87920)){
args__5732__auto__.push((arguments[i__5727__auto___87921]));

var G__87923 = (i__5727__auto___87921 + (1));
i__5727__auto___87921 = G__87923;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return re_frame.alpha.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(re_frame.alpha.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_frame.std_interceptors.on_changes,f,out_path,in_paths);
}));

(re_frame.alpha.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.alpha.on_changes.cljs$lang$applyTo = (function (seq87469){
var G__87470 = cljs.core.first(seq87469);
var seq87469__$1 = cljs.core.next(seq87469);
var G__87471 = cljs.core.first(seq87469__$1);
var seq87469__$2 = cljs.core.next(seq87469__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87470,G__87471,seq87469__$2);
}));

/**
 * Registers the given `interceptor` as a global interceptor. Global interceptors are
 * included in the processing chain of every event.
 * 
 * When you register an event handler, you have the option of supplying an
 * interceptor chain. Any global interceptors you register are effectively
 * prepending to this chain.
 * 
 * Global interceptors are run in the order that they are registered.
 * 
 * Global interceptors are unique by :id. If a global interceptor with the same :id
 * key as `interceptor` is already registered, `interceptor` will take its place in the
 * global interceptor chain. This facilitates hot-reloading.
 * 
 * Note: members of re-frame.std-interceptors do not have unique ids. To register
 * more than one, consider:
 * 
 *   (reg-global-interceptor (-> (re-frame.std-interceptors/on-changes + [:a] [:b])
 *                            (assoc :id :my-unique-id)))
 */
re_frame.alpha.reg_global_interceptor = (function re_frame$alpha$reg_global_interceptor(interceptor){
return re_frame.settings.reg_global_interceptor(interceptor);
});
/**
 * Unregisters global interceptors (presumably registered previously via the use of `reg-global-interceptor`).
 * 
 *   When called with no args, it will unregister all currently registered global interceptors.
 * 
 *   When given one arg, assumed to be the `id` of a previously registered
 *   global interceptors, it will unregister the associated interceptor. Will produce a warning to
 *   console if it finds no matching registration.
 */
re_frame.alpha.clear_global_interceptor = (function re_frame$alpha$clear_global_interceptor(var_args){
var G__87515 = arguments.length;
switch (G__87515) {
case 0:
return re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();
}));

(re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.alpha.clear_global_interceptor.cljs$lang$maxFixedArity = 1);

/**
 * A utility function for creating interceptors.
 * 
 *   Accepts three optional, named arguments:
 * 
 *   - `:id` - an id for the interceptor (decorative only)
 *   - `:before` - the interceptor's before function
 *   - `:after`  - the interceptor's after function
 * 
 *   Example use:
 * 
 *    #!clj
 *    (def my-interceptor
 *      (->interceptor
 *       :id     :my-interceptor
 *       :before (fn [context]
 *                 ... modifies and returns `context`)
 *       :after  (fn [context]
 *                 ... modifies and returns `context`)))
 * 
 *   Notes:
 * 
 *  - `:before` functions modify and return their `context` argument. Sometimes they
 *    only side effect, in which case, they'll perform the side effect and return
 *    `context` unchanged.
 *  - `:before` functions often modify the `:coeffects` map within `context` and,
 *    if they do, then they should use the utility functions `get-coeffect` and
 *    `assoc-coeffect`.
 *  - `:after` functions modify and return their `context` argument. Sometimes they
 *    only side effect, in which case, they'll perform the side effect and return
 *    `context` unchanged.
 *  - `:after` functions often modify the `:effects` map within `context` and,
 *    if they do, then they should use the utility functions `get-effect`
 *    and `assoc-effect`
 */
re_frame.alpha.__GT_interceptor = (function re_frame$alpha$__GT_interceptor(var_args){
var args__5732__auto__ = [];
var len__5726__auto___87936 = arguments.length;
var i__5727__auto___87937 = (0);
while(true){
if((i__5727__auto___87937 < len__5726__auto___87936)){
args__5732__auto__.push((arguments[i__5727__auto___87937]));

var G__87942 = (i__5727__auto___87937 + (1));
i__5727__auto___87937 = G__87942;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__87533){
var map__87534 = p__87533;
var map__87534__$1 = cljs.core.__destructure_map(map__87534);
var m = map__87534__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87534__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87534__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87534__$1,new cljs.core.Keyword(null,"after","after",594996914));
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(re_frame.interceptor.__GT_interceptor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(re_frame.alpha.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.__GT_interceptor.cljs$lang$applyTo = (function (seq87520){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87520));
}));

/**
 * A utility function, typically used when writing an interceptor's `:before` function.
 * 
 * When called with one argument, it returns the `:coeffects` map from within that `context`.
 * 
 * When called with two or three arguments, behaves like `clojure.core/get` and
 * returns the value mapped to `key` in the `:coeffects` map within `context`, `not-found` or
 * `nil` if `key` is not present.
 */
re_frame.alpha.get_coeffect = (function re_frame$alpha$get_coeffect(var_args){
var G__87551 = arguments.length;
switch (G__87551) {
case 1:
return re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,key);
}));

(re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3(context,key,not_found);
}));

(re_frame.alpha.get_coeffect.cljs$lang$maxFixedArity = 3);

/**
 * A utility function, typically used when writing an interceptor's `:before` function.
 * 
 * Adds or updates a key/value pair in the `:coeffects` map within `context`. 
 */
re_frame.alpha.assoc_coeffect = (function re_frame$alpha$assoc_coeffect(context,key,value){
return re_frame.interceptor.assoc_coeffect(context,key,value);
});
/**
 * A utility function, used when writing interceptors, typically within an `:after` function.
 * 
 * When called with one argument, returns the `:effects` map from the `context`.
 * 
 * When called with two or three arguments, behaves like `clojure.core/get` and
 * returns the value mapped to `key` in the effects map, `not-found` or
 * `nil` if `key` is not present.
 */
re_frame.alpha.get_effect = (function re_frame$alpha$get_effect(var_args){
var G__87595 = arguments.length;
switch (G__87595) {
case 1:
return re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,key);
}));

(re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,key,not_found);
}));

(re_frame.alpha.get_effect.cljs$lang$maxFixedArity = 3);

/**
 * A utility function, typically used when writing an interceptor's `:after` function.
 * 
 * Adds or updates a key/value pair in the `:effects` map within `context`. 
 */
re_frame.alpha.assoc_effect = (function re_frame$alpha$assoc_effect(context,key,value){
return re_frame.interceptor.assoc_effect(context,key,value);
});
/**
 * A utility function, used when writing an interceptor's `:before` function.
 * 
 *   Adds the given collection of `interceptors` to those already in `context's`
 *   execution `:queue`. It returns the updated `context`.
 * 
 *   So, it provides a way for one interceptor to add more interceptors to the
 *   currently executing interceptor chain.
 *   
 */
re_frame.alpha.enqueue = (function re_frame$alpha$enqueue(context,interceptors){
return re_frame.interceptor.enqueue(context,interceptors);
});
/**
 * re-frame outputs warnings and errors via the API function `console`
 * which, by default, delegates to `js/console`'s default implementation for
 *   `log`, `error`, `warn`, `debug`, `group` and `groupEnd`. But, using this function,
 * you can override that behaviour with your own functions.
 * 
 *   The argument `new-loggers` should be a map containing a subset of they keys
 *   for the standard `loggers`, namely  `:log` `:error` `:warn` `:debug` `:group`
 *   or `:groupEnd`.
 * 
 *   Example Usage:
 * 
 *    #!clj
 *    (defn my-logger      ;; my alternative logging function
 *      [& args]
 *      (post-it-somewhere (apply str args)))
 * 
 *    ;; now install my alternative loggers
 *    (re-frame.core/set-loggers!  {:warn my-logger :log my-logger})
 * 
 */
re_frame.alpha.set_loggers_BANG_ = (function re_frame$alpha$set_loggers_BANG_(new_loggers){
return re_frame.loggers.set_loggers_BANG_(new_loggers);
});
/**
 * A utility logging function which is used internally within re-frame to produce
 *   warnings and other output. It can also be used by libraries which
 *   extend re-frame, such as effect handlers.
 * 
 *   By default, it will output the given `args` to `js/console` at the given log `level`.
 *   However, an application using re-frame can redirect `console` output via `set-loggers!`.
 * 
 *   `level` can be one of `:log`, `:error`, `:warn`, `:debug`, `:group` or `:groupEnd`.
 * 
 *   Example usage:
 * 
 *    #!clj
 *    (console :error "Sure enough it happened:" a-var "and" another)
 *    (console :warn "Possible breach of containment wall at:" dt)
 *   
 */
re_frame.alpha.console = (function re_frame$alpha$console(var_args){
var args__5732__auto__ = [];
var len__5726__auto___88000 = arguments.length;
var i__5727__auto___88001 = (0);
while(true){
if((i__5727__auto___88001 < len__5726__auto___88000)){
args__5732__auto__.push((arguments[i__5727__auto___88001]));

var G__88006 = (i__5727__auto___88001 + (1));
i__5727__auto___88001 = G__88006;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.console,level,args);
}));

(re_frame.alpha.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.alpha.console.cljs$lang$applyTo = (function (seq87622){
var G__87623 = cljs.core.first(seq87622);
var seq87622__$1 = cljs.core.next(seq87622);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87623,seq87622__$1);
}));

/**
 * This is a utility function, typically used in testing.
 * 
 *   It checkpoints the current state of re-frame and returns a function which, when
 *   later called, will restore re-frame to the checkpointed state.
 * 
 *   The checkpoint includes `app-db`, all registered handlers and all subscriptions.
 *   
 */
re_frame.alpha.make_restore_fn = (function re_frame$alpha$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_88028 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_88029 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__87660_88030 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_88029,original_subs_88028));
var chunk__87661_88031 = null;
var count__87662_88032 = (0);
var i__87663_88033 = (0);
while(true){
if((i__87663_88033 < count__87662_88032)){
var sub_88039 = chunk__87661_88031.cljs$core$IIndexed$_nth$arity$2(null, i__87663_88033);
re_frame.interop.dispose_BANG_(sub_88039);


var G__88040 = seq__87660_88030;
var G__88041 = chunk__87661_88031;
var G__88042 = count__87662_88032;
var G__88043 = (i__87663_88033 + (1));
seq__87660_88030 = G__88040;
chunk__87661_88031 = G__88041;
count__87662_88032 = G__88042;
i__87663_88033 = G__88043;
continue;
} else {
var temp__5823__auto___88044 = cljs.core.seq(seq__87660_88030);
if(temp__5823__auto___88044){
var seq__87660_88045__$1 = temp__5823__auto___88044;
if(cljs.core.chunked_seq_QMARK_(seq__87660_88045__$1)){
var c__5525__auto___88052 = cljs.core.chunk_first(seq__87660_88045__$1);
var G__88053 = cljs.core.chunk_rest(seq__87660_88045__$1);
var G__88054 = c__5525__auto___88052;
var G__88055 = cljs.core.count(c__5525__auto___88052);
var G__88056 = (0);
seq__87660_88030 = G__88053;
chunk__87661_88031 = G__88054;
count__87662_88032 = G__88055;
i__87663_88033 = G__88056;
continue;
} else {
var sub_88059 = cljs.core.first(seq__87660_88045__$1);
re_frame.interop.dispose_BANG_(sub_88059);


var G__88061 = cljs.core.next(seq__87660_88045__$1);
var G__88062 = null;
var G__88063 = (0);
var G__88064 = (0);
seq__87660_88030 = G__88061;
chunk__87661_88031 = G__88062;
count__87662_88032 = G__88063;
i__87663_88033 = G__88064;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Removes all events currently queued for processing
 */
re_frame.alpha.purge_event_queue = (function re_frame$alpha$purge_event_queue(){
return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null, );
});
/**
 * Registers the given function `f` to be called after each event is processed.
 * 
 * `f` will be called with two arguments:
 * 
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This facility is useful in advanced cases like:
 * 
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   `id` is typically a keyword. If it supplied when an `f` is added, it can be
 *   subsequently be used to identify it for removal. See `remove-post-event-callback`.
 *   
 */
re_frame.alpha.add_post_event_callback = (function re_frame$alpha$add_post_event_callback(var_args){
var G__87701 = arguments.length;
switch (G__87701) {
case 1:
return re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null, id,f);
}));

(re_frame.alpha.add_post_event_callback.cljs$lang$maxFixedArity = 2);

/**
 * Unregisters a post event callback function, identified by `id`.
 * 
 *   Such a function must have been previously registered via `add-post-event-callback`
 */
re_frame.alpha.remove_post_event_callback = (function re_frame$alpha$remove_post_event_callback(id){
return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null, id);
});
/**
 * Registers a `flow`.
 * 
 *   A full tutorial can be found at https://day8.github.io/re-frame/Flows
 * 
 *   Re-frame uses the flow registry to execute a dataflow graph.
 * 
 *   On every event, re-frame runs each registered `flow`.
 *   It resolves the flow's inputs, determines if the flow is live, and if so,
 *   evaluates the output function, putting the result in `app-db` at the path.
 * 
 *   A `flow` is a map, specifying one dataflow node. It has keys:
 * 
 *   - `:id`: uniquely identifies the node.
 *   - When a `flow` is already registered with the same `:id`, replaces it.
 *   - You can provide an `id` argument to `reg-flow`, instead of including `:id`.
 *   - `:inputs`: a map of `keyword->input`. An input can be one of two types:
 *   - vector: expresses a path in `app-db`.
 *   - map: expresses the output of another flow, identified by a
 *     `::re-frame.flow.alpha/flow<-` key.
 *     Call the `re-frame.alpha/flow<-` function to construct this map.
 *   - `:output`: a function of the `keyword->resolved-input` map, returning the output value of the node.
 *   - A resolved vector input is the value in `app-db` at that path.
 *   - A resolved `flow<-` input is the value in `app-db` at the path of the named flow.
 *   - Re-frame topologically sorts the flows, to make sure any input flows always run first.
 *   - Re-frame throws an error at registration time if any flow inputs form a cycle.
 *   - `:path`: specifies the `app-db` location where the `:output` value is stored.
 *   - `:live-inputs`: a map of `keyword->live-input` for the `:live?` function.
 *   - A `live-input` works the same way an `input`.
 *   - `:live?`: a predicate function of the `keyword->resolved-live-input` map,    returning the current lifecycle state of the node.
 *   - `:cleanup`: a function of `app-db` and the `:path`.
 *   - Returns a new `app-db`.
 *   - Runs the first time `:live?` returns `false`
 *   - Runs when the flow is cleared (see `re-frame.alpha/clear-flow`).
 * 
 *   `:id` is the only required key. All others have a default value:
 * 
 *   - `:path`: `[id]`
 *   - `:inputs`: `{}`
 *   - `:output`: `(constantly true)`
 *   - `:live?`: `(constantly true)`
 *   - `:live-inputs`: `{}`
 *   - `:cleanup`: `re-frame.utils/dissoc-in`
 */
re_frame.alpha.reg_flow = (function re_frame$alpha$reg_flow(var_args){
var G__87741 = arguments.length;
switch (G__87741) {
case 1:
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1 = (function (flow){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(flow);
}));

(re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2 = (function (id,flow){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(id,flow);
}));

(re_frame.alpha.reg_flow.cljs$lang$maxFixedArity = 2);

/**
 * Arguments: `[id]`
 *   Deregisters a flow, identified by `id`.
 * 
 *   Later, re-frame will update `app-db` with the flow's `:cleanup` function.
 * 
 *   If `clear-flow` is invoked by the `:clear-flow` effect, this cleanup happens in the `:after` phase of the same event returning `:clear-flow`.
 * 
 *   If you call `clear-flow` directly, cleanup will happen on the next event.
 */
re_frame.alpha.clear_flow = (function re_frame$alpha$clear_flow(var_args){
var G__87759 = arguments.length;
switch (G__87759) {
case 0:
return re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();
}));

(re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.alpha.clear_flow.cljs$lang$maxFixedArity = 1);

/**
 * Returns the value within `db` at the `:path` given by the registered flow
 *   with an `:id` key equal to `id`, if it exists. Otherwise, returns nil.
 */
re_frame.alpha.get_flow = (function re_frame$alpha$get_flow(db,id){
return re_frame.flow.alpha.resolve_input(db,re_frame.flow.alpha.flow_LT__(id));
});
/**
 * Creates an input from a flow id.
 */
re_frame.alpha.flow_LT__ = (function re_frame$alpha$flow_LT__(id){
return re_frame.flow.alpha.flow_LT__(id);
});
re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flow","flow",590489032),(function (db,input){
return re_frame.flow.alpha.resolve_input(db,input);
})], 0));
re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"live?","live?",-1539352230),(function (db,input){
return re_frame.flow.alpha.resolve_input(db,input);
})], 0));
re_frame.alpha.reg_fx(new cljs.core.Keyword(null,"reg-flow","reg-flow",-1365926178),re_frame.flow.alpha.reg_flow);
re_frame.alpha.reg_fx(new cljs.core.Keyword(null,"clear-flow","clear-flow",2086400997),re_frame.flow.alpha.clear_flow);
/**
 * Equivalent to `sub` (except with flows, which have their own lifecycle and are not cached).
 * 
 *   Call `(subscribe [:flow {:id :your-flow-id}])` to subscribe to a flow.
 */
re_frame.alpha.subscribe = re_frame.alpha.sub;
/**
 * Equivalent to `reg` `:legacy-sub`.
 */
re_frame.alpha.reg_sub = (function re_frame$alpha$reg_sub(var_args){
var args__5732__auto__ = [];
var len__5726__auto___88179 = arguments.length;
var i__5727__auto___88184 = (0);
while(true){
if((i__5727__auto___88184 < len__5726__auto___88179)){
args__5732__auto__.push((arguments[i__5727__auto___88184]));

var G__88185 = (i__5727__auto___88184 + (1));
i__5727__auto___88184 = G__88185;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.alpha.reg,new cljs.core.Keyword(null,"legacy-sub","legacy-sub",207431632),args);
}));

(re_frame.alpha.reg_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.reg_sub.cljs$lang$applyTo = (function (seq87793){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87793));
}));

/**
 * Deprecated. Use `reg-event-db` instead.
 */
re_frame.alpha.register_handler = (function re_frame$alpha$register_handler(var_args){
var args__5732__auto__ = [];
var len__5726__auto___88201 = arguments.length;
var i__5727__auto___88206 = (0);
while(true){
if((i__5727__auto___88206 < len__5726__auto___88201)){
args__5732__auto__.push((arguments[i__5727__auto___88206]));

var G__88212 = (i__5727__auto___88206 + (1));
i__5727__auto___88206 = G__88212;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frame.alpha.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args)),")"], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.alpha.reg_event_db,args);
}));

(re_frame.alpha.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.register_handler.cljs$lang$applyTo = (function (seq87809){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87809));
}));

/**
 * Deprecated. Use `reg-sub-raw` instead.
 */
re_frame.alpha.register_sub = (function re_frame$alpha$register_sub(var_args){
var args__5732__auto__ = [];
var len__5726__auto___88233 = arguments.length;
var i__5727__auto___88234 = (0);
while(true){
if((i__5727__auto___88234 < len__5726__auto___88233)){
args__5732__auto__.push((arguments[i__5727__auto___88234]));

var G__88236 = (i__5727__auto___88234 + (1));
i__5727__auto___88234 = G__88236;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(re_frame.alpha.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"register-sub\" is used to register the event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))," but it is a deprecated part of the API. Please use \"reg-sub-raw\" instead."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.alpha.reg_sub_raw,args);
}));

(re_frame.alpha.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.register_sub.cljs$lang$applyTo = (function (seq87825){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq87825));
}));


//# sourceMappingURL=re_frame.alpha.js.map
