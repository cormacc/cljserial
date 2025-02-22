goog.provide('stack.components.todo');
stack.components.todo.filter_by = (function stack$components$todo$filter_by(todos,task_filter){
var filter_fn = (function (){var G__84293 = task_filter;
var G__84293__$1 = (((G__84293 instanceof cljs.core.Keyword))?G__84293.fqn:null);
switch (G__84293__$1) {
case "pending":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__84293__$1)].join('')));

}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,todos);
});
stack.components.todo.header = (function stack$components$todo$header(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84304 = [clj_props__38770__auto__];
var map__84307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84304,(0),null);
var map__84307__$1 = cljs.core.__destructure_map(map__84307);
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84307__$1,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84548 = stack.components.todo.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84548)){
var f__38700__auto___84549 = temp__5823__auto___84548;
(f__38700__auto___84549.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84549.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84549.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"navbar flex rounded-box"}],[uix.compiler.aot._GT_el("div",[{'className':"flex-1 px-2 flex-none"}],[uix.compiler.aot._GT_el("a",uix.compiler.attributes.interpret_attrs("Uix2 TodoMVC - ",["a",null,"text-lg font-bold",false],false),[cljs.core.name(task_filter)," tasks"])]),uix.compiler.aot._GT_el("div",[{'className':"flex justify-end flex-1 px-2"}],[uix.compiler.aot._GT_el("div",[{'className':"flex items-stretch"}],[uix.compiler.aot._GT_el("div",[{'className':"dropdown dropdown-end"}],[uix.compiler.aot._GT_el("label",[{'className':"btn btn-ghost rounded-btn",'tabIndex':(0)}],["Filter"]),uix.compiler.aot._GT_el("ul",[{'className':"menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4",'tabIndex':(0)}],[(function (){var iter__5480__auto__ = (function stack$components$todo$header_$_iter__84328(s__84329){
return (new cljs.core.LazySeq(null,(function (){
var s__84329__$1 = s__84329;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__84329__$1);
if(temp__5823__auto__){
var s__84329__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84329__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__84329__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__84331 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__84330 = (0);
while(true){
if((i__84330 < size__5479__auto__)){
var show = cljs.core._nth(c__5478__auto__,i__84330);
cljs.core.chunk_append(b__84331,uix.compiler.aot._GT_el("li",[{'key':cljs.core.name(show),'onClick':((function (i__84330,show,c__5478__auto__,size__5479__auto__,b__84331,s__84329__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84304,map__84307,map__84307__$1,task_filter){
return (function (){
var G__84340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-task-filter","apply-task-filter",937697869),show], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84340) : stack.utils.dbfx.dispatch.call(null, G__84340));
});})(i__84330,show,c__5478__auto__,size__5479__auto__,b__84331,s__84329__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84304,map__84307,map__84307__$1,task_filter))
}],[uix.compiler.aot._GT_el("a",uix.compiler.attributes.interpret_attrs(cljs.core.name(show),["a",null,null,false],false),[])]));

var G__84550 = (i__84330 + (1));
i__84330 = G__84550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84331),stack$components$todo$header_$_iter__84328(cljs.core.chunk_rest(s__84329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84331),null);
}
} else {
var show = cljs.core.first(s__84329__$2);
return cljs.core.cons(uix.compiler.aot._GT_el("li",[{'key':cljs.core.name(show),'onClick':((function (show,s__84329__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84304,map__84307,map__84307__$1,task_filter){
return (function (){
var G__84369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-task-filter","apply-task-filter",937697869),show], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84369) : stack.utils.dbfx.dispatch.call(null, G__84369));
});})(show,s__84329__$2,temp__5823__auto__,clj_props__38770__auto__,vec__84304,map__84307,map__84307__$1,task_filter))
}],[uix.compiler.aot._GT_el("a",uix.compiler.attributes.interpret_attrs(cljs.core.name(show),["a",null,null,false],false),[])]),stack$components$todo$header_$_iter__84328(cljs.core.rest(s__84329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"done","done",-889844188)], null)));
})()])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84375 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84376 = stack.components.todo.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84376);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84375);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.header.uix_component_QMARK_ = true);

(stack.components.todo.header.displayName = "stack.components.todo/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84555 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84555.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84555.cljs$core$IFn$_invoke$arity$4(stack.components.todo.header,"",null,null) : sig__38709__auto___84555.call(null, stack.components.todo.header,"",null,null));

window.uix.dev.register_BANG_(stack.components.todo.header,stack.components.todo.header.displayName);

(stack.components.todo.header.fast_refresh_signature = sig__38709__auto___84555);
} else {
}
} else {
}
stack.components.todo.footer = (function stack$components$todo$footer(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84383 = [clj_props__38770__auto__];
var map__84386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84383,(0),null);
var map__84386__$1 = cljs.core.__destructure_map(map__84386);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84386__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84386__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84560 = stack.components.todo.footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84560)){
var f__38700__auto___84561 = temp__5823__auto___84560;
(f__38700__auto___84561.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84561.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84561.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("footer",[{'className':"flex items-center p-4"}],[uix.compiler.aot._GT_el("aside",[{'className':"items-center grid-flow-col"}],[uix.compiler.aot._GT_el("span",[null],[uix.compiler.aot._GT_el("strong",uix.compiler.attributes.interpret_attrs(done,["strong",null,null,false],false),[])," of ",uix.compiler.aot._GT_el("strong",uix.compiler.attributes.interpret_attrs(total,["strong",null,null,false],false),[])," tasks completed"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84400 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84401 = stack.components.todo.footer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84401);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84400);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.footer.uix_component_QMARK_ = true);

(stack.components.todo.footer.displayName = "stack.components.todo/footer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84562 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84562.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84562.cljs$core$IFn$_invoke$arity$4(stack.components.todo.footer,"",null,null) : sig__38709__auto___84562.call(null, stack.components.todo.footer,"",null,null));

window.uix.dev.register_BANG_(stack.components.todo.footer,stack.components.todo.footer.displayName);

(stack.components.todo.footer.fast_refresh_signature = sig__38709__auto___84562);
} else {
}
} else {
}
stack.components.todo.todo_input = (function stack$components$todo$todo_input(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84408 = [clj_props__38770__auto__];
var map__84411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84408,(0),null);
var map__84411__$1 = cljs.core.__destructure_map(map__84411);
var on_add_task = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84411__$1,new cljs.core.Keyword(null,"on-add-task","on-add-task",1995396425));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84569 = stack.components.todo.todo_input.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84569)){
var f__38700__auto___84574 = temp__5823__auto___84569;
(f__38700__auto___84574.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84574.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84574.call(null, ));
} else {
}
} else {
}

var vec__84412 = uix.core.use_state("");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84412,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84412,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"flex items-center"}],[uix.compiler.aot.create_uix_input("input",[{'className':"flex-1 py-2 px-2 border-x-0 border-y-0 text-lg",'value':uix.compiler.attributes.keyword__GT_string(value),'placeholder':"Add a new todo and hit Enter to save",'onChange':(function (e){
var G__84419 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__84419) : set_value_BANG_.call(null, G__84419));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_value_BANG_.call(null, ""));

return (on_add_task.cljs$core$IFn$_invoke$arity$1 ? on_add_task.cljs$core$IFn$_invoke$arity$1(value) : on_add_task.call(null, value));
} else {
return null;
}
})}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84421 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84422 = stack.components.todo.todo_input;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84422);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84421);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.todo_input.uix_component_QMARK_ = true);

(stack.components.todo.todo_input.displayName = "stack.components.todo/todo-input");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84575 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84575.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84575.cljs$core$IFn$_invoke$arity$4(stack.components.todo.todo_input,"(uix/use-state \"\")",null,null) : sig__38709__auto___84575.call(null, stack.components.todo.todo_input,"(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(stack.components.todo.todo_input,stack.components.todo.todo_input.displayName);

(stack.components.todo.todo_input.fast_refresh_signature = sig__38709__auto___84575);
} else {
}
} else {
}
stack.components.todo.todo_item_text = (function stack$components$todo$todo_item_text(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84452 = [clj_props__38770__auto__];
var map__84455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84452,(0),null);
var map__84455__$1 = cljs.core.__destructure_map(map__84455);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84455__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84455__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_done_editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84455__$1,new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84579 = stack.components.todo.todo_item_text.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84579)){
var f__38700__auto___84580 = temp__5823__auto___84579;
(f__38700__auto___84580.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84580.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84580.call(null, ));
} else {
}
} else {
}

var vec__84463 = uix.core.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84463,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84463,(1),null);
var vec__84466 = uix.core.use_state("");
var editing_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84466,(0),null);
var set_editing_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84466,(1),null);
if(cljs.core.truth_(editing_QMARK_)){
return uix.compiler.aot.create_uix_input("input",[{'className':"flex-1 text-lg outline-0 border-0",'value':uix.compiler.attributes.keyword__GT_string(editing_value),'autoFocus':true,'onChange':(function (e){
var G__84473 = e.target.value;
return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__84473) : set_editing_value_BANG_.call(null, G__84473));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_editing_value_BANG_.call(null, ""));

(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null, false));

return (on_done_editing.cljs$core$IFn$_invoke$arity$1 ? on_done_editing.cljs$core$IFn$_invoke$arity$1(editing_value) : on_done_editing.call(null, editing_value));
} else {
return null;
}
})}],[]);
} else {
return uix.compiler.aot._GT_el("span",[{'className':"flex-1",'style':uix.compiler.attributes.convert_props(text_style,[],true),'onClick':(function (_){
(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null, true));

return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(text) : set_editing_value_BANG_.call(null, text));
})}],[text]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84474 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84475 = stack.components.todo.todo_item_text;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84475);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84474);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.todo_item_text.uix_component_QMARK_ = true);

(stack.components.todo.todo_item_text.displayName = "stack.components.todo/todo-item-text");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84583 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84583.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84583.cljs$core$IFn$_invoke$arity$4(stack.components.todo.todo_item_text,"(uix/use-state false)(uix/use-state \"\")",null,null) : sig__38709__auto___84583.call(null, stack.components.todo.todo_item_text,"(uix/use-state false)(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(stack.components.todo.todo_item_text,stack.components.todo.todo_item_text.displayName);

(stack.components.todo.todo_item_text.fast_refresh_signature = sig__38709__auto___84583);
} else {
}
} else {
}
stack.components.todo.todo_item = (function stack$components$todo$todo_item(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84485 = [clj_props__38770__auto__];
var map__84488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84485,(0),null);
var map__84488__$1 = cljs.core.__destructure_map(map__84488);
var props = map__84488__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84488__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84488__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84488__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var f__38771__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(stack.services.todo.Task,props))){
} else {
throw (new Error("Assert failed: (m/validate todos/Task props)"));
}

if(goog.DEBUG){
var temp__5823__auto___84584 = stack.components.todo.todo_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84584)){
var f__38700__auto___84585 = temp__5823__auto___84584;
(f__38700__auto___84585.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84585.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84585.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex items-center justify-between py-2 px-2 border-b-2 text-lg font-medium"}],[uix.compiler.aot.create_uix_input("input",[{'className':"w-5 h-5 mr-12",'type':"checkbox",'checked':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(done,true),'onChange':(function (){
var G__84494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-task","toggle-task",576669128),id], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84494) : stack.utils.dbfx.dispatch.call(null, G__84494));
})}],[]),uix.compiler.alpha.component_element(stack.components.todo.todo_item_text,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),description,new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,done))?new cljs.core.Keyword(null,"line-through","line-through",-250988971):null)], null),new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127),(function (p1__84481_SHARP_){
var G__84495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-task","save-task",1224731637),id,p1__84481_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84495) : stack.utils.dbfx.dispatch.call(null, G__84495));
})], null)],[]),uix.compiler.aot._GT_el("button",[{'className':"border-0 text-xl text-red-600 cursor-pointer",'onClick':(function (){
var G__84497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-task","delete-task",-1353277694),id], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84497) : stack.utils.dbfx.dispatch.call(null, G__84497));
})}],["\u00D7"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84498 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84499 = stack.components.todo.todo_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84499);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84498);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.todo_item.uix_component_QMARK_ = true);

(stack.components.todo.todo_item.displayName = "stack.components.todo/todo-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84594 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84594.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84594.cljs$core$IFn$_invoke$arity$4(stack.components.todo.todo_item,"",null,null) : sig__38709__auto___84594.call(null, stack.components.todo.todo_item,"",null,null));

window.uix.dev.register_BANG_(stack.components.todo.todo_item,stack.components.todo.todo_item.displayName);

(stack.components.todo.todo_item.fast_refresh_signature = sig__38709__auto___84594);
} else {
}
} else {
}
stack.components.todo.todo_widget = (function stack$components$todo$todo_widget(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84506 = [clj_props__38770__auto__];
var map__84509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84506,(0),null);
var map__84509__$1 = cljs.core.__destructure_map(map__84509);
var props = map__84509__$1;
var tasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84509__$1,new cljs.core.Keyword(null,"tasks","tasks",-1754368880));
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84509__$1,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84595 = stack.components.todo.todo_widget.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84595)){
var f__38700__auto___84596 = temp__5823__auto___84595;
(f__38700__auto___84596.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84596.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84596.call(null, ));
} else {
}
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));

var all_tasks = cljs.core.vals(tasks);
var done = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),all_tasks));
var total = cljs.core.count(all_tasks);
return uix.compiler.aot._GT_el("div",[{'className':"block p-6 w-full mx-auto rounded-xl shadow-lg"}],[uix.compiler.alpha.component_element(stack.components.todo.header,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),task_filter], null)],[]),uix.compiler.alpha.component_element(stack.components.todo.todo_input,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-add-task","on-add-task",1995396425),(function (p1__84504_SHARP_){
if(cljs.core.seq(p1__84504_SHARP_)){
var G__84511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-task","add-task",-913525549),p1__84504_SHARP_], null);
return (stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__84511) : stack.utils.dbfx.dispatch.call(null, G__84511));
} else {
return null;
}
})], null)],[]),((cljs.core.seq(tasks))?uix.compiler.aot._GT_el("ul",[null],[(function (){var iter__5480__auto__ = (function stack$components$todo$todo_widget_$_iter__84512(s__84513){
return (new cljs.core.LazySeq(null,(function (){
var s__84513__$1 = s__84513;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__84513__$1);
if(temp__5823__auto__){
var s__84513__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84513__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__84513__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__84515 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__84514 = (0);
while(true){
if((i__84514 < size__5479__auto__)){
var todo = cljs.core._nth(c__5478__auto__,i__84514);
cljs.core.chunk_append(b__84515,uix.compiler.aot._GT_el("li",[{'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)}],[uix.compiler.alpha.component_element(stack.components.todo.todo_item,uix.compiler.attributes.interpret_props(todo),[])]));

var G__84599 = (i__84514 + (1));
i__84514 = G__84599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84515),stack$components$todo$todo_widget_$_iter__84512(cljs.core.chunk_rest(s__84513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84515),null);
}
} else {
var todo = cljs.core.first(s__84513__$2);
return cljs.core.cons(uix.compiler.aot._GT_el("li",[{'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)}],[uix.compiler.alpha.component_element(stack.components.todo.todo_item,uix.compiler.attributes.interpret_props(todo),[])]),stack$components$todo$todo_widget_$_iter__84512(cljs.core.rest(s__84513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(stack.components.todo.filter_by(all_tasks,task_filter));
})()]):null),uix.compiler.alpha.component_element(stack.components.todo.footer,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"total","total",1916810418),total], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84525 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84526 = stack.components.todo.todo_widget;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84526);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84525);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.todo_widget.uix_component_QMARK_ = true);

(stack.components.todo.todo_widget.displayName = "stack.components.todo/todo-widget");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84604 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84604.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84604.cljs$core$IFn$_invoke$arity$4(stack.components.todo.todo_widget,"",null,null) : sig__38709__auto___84604.call(null, stack.components.todo.todo_widget,"",null,null));

window.uix.dev.register_BANG_(stack.components.todo.todo_widget,stack.components.todo.todo_widget.displayName);

(stack.components.todo.todo_widget.fast_refresh_signature = sig__38709__auto___84604);
} else {
}
} else {
}
stack.components.todo.todo_app = (function stack$components$todo$todo_app(props__38769__auto__){
var clj_props__38770__auto__ = uix.core.glue_args(props__38769__auto__);
var vec__84528 = [clj_props__38770__auto__];
var map__84531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84528,(0),null);
var map__84531__$1 = cljs.core.__destructure_map(map__84531);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84531__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var f__38771__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84607 = stack.components.todo.todo_app.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84607)){
var f__38700__auto___84608 = temp__5823__auto___84607;
(f__38700__auto___84608.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84608.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84608.call(null, ));
} else {
}
} else {
}

var todo_data = (function (){var G__84536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
return (stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? stack.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__84536) : stack.utils.dbfx.use_sub.call(null, G__84536));
})();
return uix.compiler.alpha.component_element(stack.components.todo.todo_widget,uix.compiler.attributes.interpret_props(todo_data),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84537 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84538 = stack.components.todo.todo_app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84538);

try{if(((cljs.core.map_QMARK_(clj_props__38770__auto__)) || ((clj_props__38770__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__38770__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__38770__auto__) (clojure.core/nil? clj-props__38770__auto__))"].join('')));
}

return f__38771__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84537);
}} else {
return f__38771__auto__();
}
});

(stack.components.todo.todo_app.uix_component_QMARK_ = true);

(stack.components.todo.todo_app.displayName = "stack.components.todo/todo-app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84609 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84609.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84609.cljs$core$IFn$_invoke$arity$4(stack.components.todo.todo_app,"(use-sub [sub])",null,null) : sig__38709__auto___84609.call(null, stack.components.todo.todo_app,"(use-sub [sub])",null,null));

window.uix.dev.register_BANG_(stack.components.todo.todo_app,stack.components.todo.todo_app.displayName);

(stack.components.todo.todo_app.fast_refresh_signature = sig__38709__auto___84609);
} else {
}
} else {
}
stack.components.todo.sample_app = (function stack$components$todo$sample_app(){
var f__38767__auto__ = (function (){
if(goog.DEBUG){
var temp__5823__auto___84610 = stack.components.todo.sample_app.fast_refresh_signature;
if(cljs.core.truth_(temp__5823__auto___84610)){
var f__38700__auto___84611 = temp__5823__auto___84610;
(f__38700__auto___84611.cljs$core$IFn$_invoke$arity$0 ? f__38700__auto___84611.cljs$core$IFn$_invoke$arity$0() : f__38700__auto___84611.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(stack.components.todo.todo_app,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"todo-data","todo-data",715447299)], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__84543 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__84544 = stack.components.todo.sample_app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__84544);

try{return f__38767__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__84543);
}} else {
return f__38767__auto__();
}
});

(stack.components.todo.sample_app.uix_component_QMARK_ = true);

(stack.components.todo.sample_app.displayName = "stack.components.todo/sample-app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__38709__auto___84612 = window.uix.dev.signature_BANG_();
(sig__38709__auto___84612.cljs$core$IFn$_invoke$arity$4 ? sig__38709__auto___84612.cljs$core$IFn$_invoke$arity$4(stack.components.todo.sample_app,"",null,null) : sig__38709__auto___84612.call(null, stack.components.todo.sample_app,"",null,null));

window.uix.dev.register_BANG_(stack.components.todo.sample_app,stack.components.todo.sample_app.displayName);

(stack.components.todo.sample_app.fast_refresh_signature = sig__38709__auto___84612);
} else {
}
} else {
}

//# sourceMappingURL=stack.components.todo.js.map
