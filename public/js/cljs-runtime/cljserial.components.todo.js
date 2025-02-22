goog.provide('cljserial.components.todo');
cljserial.components.todo.filter_by = (function cljserial$components$todo$filter_by(todos,task_filter){
var filter_fn = (function (){var G__56826 = task_filter;
var G__56826__$1 = (((G__56826 instanceof cljs.core.Keyword))?G__56826.fqn:null);
switch (G__56826__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56826__$1)].join('')));

}
})();
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,todos);
});
cljserial.components.todo.header = (function cljserial$components$todo$header(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56830 = [clj_props__39918__auto__];
var map__56833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56830,(0),null);
var map__56833__$1 = cljs.core.__destructure_map(map__56833);
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56833__$1,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56971 = cljserial.components.todo.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56971)){
var f__39838__auto___56972 = temp__5804__auto___56971;
(f__39838__auto___56972.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56972.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56972.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"navbar flex rounded-box"}],[uix.compiler.aot._GT_el("div",[{'className':"flex-1 px-2 flex-none"}],[uix.compiler.aot._GT_el("a",uix.compiler.attributes.interpret_attrs("Uix2 TodoMVC - ",["a",null,"text-lg font-bold",false],false),[cljs.core.name(task_filter)," tasks"])]),uix.compiler.aot._GT_el("div",[{'className':"flex justify-end flex-1 px-2"}],[uix.compiler.aot._GT_el("div",[{'className':"flex items-stretch"}],[uix.compiler.aot._GT_el("div",[{'className':"dropdown dropdown-end"}],[uix.compiler.aot._GT_el("label",[{'className':"btn btn-ghost rounded-btn",'tabIndex':(0)}],["Filter"]),uix.compiler.aot._GT_el("ul",[{'className':"menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4",'tabIndex':(0)}],[(function (){var iter__5523__auto__ = (function cljserial$components$todo$header_$_iter__56834(s__56835){
return (new cljs.core.LazySeq(null,(function (){
var s__56835__$1 = s__56835;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56835__$1);
if(temp__5804__auto__){
var s__56835__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56835__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56835__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56837 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56836 = (0);
while(true){
if((i__56836 < size__5522__auto__)){
var show = cljs.core._nth(c__5521__auto__,i__56836);
cljs.core.chunk_append(b__56837,uix.compiler.aot._GT_el("li",[{'key':cljs.core.name(show),'onClick':((function (i__56836,show,c__5521__auto__,size__5522__auto__,b__56837,s__56835__$2,temp__5804__auto__,clj_props__39918__auto__,vec__56830,map__56833,map__56833__$1,task_filter){
return (function (){
var G__56840 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-todo-filter","apply-todo-filter",805818581),show], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56840) : cljserial.utils.dbfx.dispatch.call(null, G__56840));
});})(i__56836,show,c__5521__auto__,size__5522__auto__,b__56837,s__56835__$2,temp__5804__auto__,clj_props__39918__auto__,vec__56830,map__56833,map__56833__$1,task_filter))
}],[uix.compiler.aot._GT_el("a",uix.compiler.attributes.interpret_attrs(cljs.core.name(show),["a",null,null,false],false),[])]));

var G__56977 = (i__56836 + (1));
i__56836 = G__56977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56837),cljserial$components$todo$header_$_iter__56834(cljs.core.chunk_rest(s__56835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56837),null);
}
} else {
var show = cljs.core.first(s__56835__$2);
return cljs.core.cons(uix.compiler.aot._GT_el("li",[{'key':cljs.core.name(show),'onClick':((function (show,s__56835__$2,temp__5804__auto__,clj_props__39918__auto__,vec__56830,map__56833,map__56833__$1,task_filter){
return (function (){
var G__56845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-todo-filter","apply-todo-filter",805818581),show], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56845) : cljserial.utils.dbfx.dispatch.call(null, G__56845));
});})(show,s__56835__$2,temp__5804__auto__,clj_props__39918__auto__,vec__56830,map__56833,map__56833__$1,task_filter))
}],[uix.compiler.aot._GT_el("a",uix.compiler.attributes.interpret_attrs(cljs.core.name(show),["a",null,null,false],false),[])]),cljserial$components$todo$header_$_iter__56834(cljs.core.rest(s__56835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"done","done",-889844188)], null)));
})()])])])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56851 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56852 = cljserial.components.todo.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56852);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56851);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.header.uix_component_QMARK_ = true);

(cljserial.components.todo.header.displayName = "cljserial.components.todo/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56978 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56978.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56978.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.header,"",null,null) : sig__39847__auto___56978.call(null, cljserial.components.todo.header,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.header,cljserial.components.todo.header.displayName);

(cljserial.components.todo.header.fast_refresh_signature = sig__39847__auto___56978);
} else {
}
} else {
}
cljserial.components.todo.footer = (function cljserial$components$todo$footer(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56870 = [clj_props__39918__auto__];
var map__56873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56870,(0),null);
var map__56873__$1 = cljs.core.__destructure_map(map__56873);
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56873__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56873__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56979 = cljserial.components.todo.footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56979)){
var f__39838__auto___56980 = temp__5804__auto___56979;
(f__39838__auto___56980.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56980.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56980.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("footer",[{'className':"flex items-center p-4"}],[uix.compiler.aot._GT_el("aside",[{'className':"items-center grid-flow-col"}],[uix.compiler.aot._GT_el("span",[null],[uix.compiler.aot._GT_el("strong",uix.compiler.attributes.interpret_attrs(done,["strong",null,null,false],false),[])," of ",uix.compiler.aot._GT_el("strong",uix.compiler.attributes.interpret_attrs(total,["strong",null,null,false],false),[])," tasks completed"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56882 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56883 = cljserial.components.todo.footer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56883);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56882);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.footer.uix_component_QMARK_ = true);

(cljserial.components.todo.footer.displayName = "cljserial.components.todo/footer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56982 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56982.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56982.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.footer,"",null,null) : sig__39847__auto___56982.call(null, cljserial.components.todo.footer,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.footer,cljserial.components.todo.footer.displayName);

(cljserial.components.todo.footer.fast_refresh_signature = sig__39847__auto___56982);
} else {
}
} else {
}
cljserial.components.todo.todo_input = (function cljserial$components$todo$todo_input(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56889 = [clj_props__39918__auto__];
var map__56892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56889,(0),null);
var map__56892__$1 = cljs.core.__destructure_map(map__56892);
var on_add_todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56892__$1,new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56985 = cljserial.components.todo.todo_input.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56985)){
var f__39838__auto___56986 = temp__5804__auto___56985;
(f__39838__auto___56986.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56986.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56986.call(null, ));
} else {
}
} else {
}

var vec__56893 = uix.core.use_state("");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56893,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56893,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"flex items-center"}],[uix.compiler.aot.create_uix_input("input",[{'className':"flex-1 py-2 px-2 border-x-0 border-y-0 text-lg",'value':uix.compiler.attributes.keyword__GT_string(value),'placeholder':"Add a new todo and hit Enter to save",'onChange':(function (e){
var G__56896 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__56896) : set_value_BANG_.call(null, G__56896));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_value_BANG_.call(null, ""));

return (on_add_todo.cljs$core$IFn$_invoke$arity$1 ? on_add_todo.cljs$core$IFn$_invoke$arity$1(value) : on_add_todo.call(null, value));
} else {
return null;
}
})}],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56897 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56898 = cljserial.components.todo.todo_input;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56898);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56897);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.todo_input.uix_component_QMARK_ = true);

(cljserial.components.todo.todo_input.displayName = "cljserial.components.todo/todo-input");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56987 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56987.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56987.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.todo_input,"(uix/use-state \"\")",null,null) : sig__39847__auto___56987.call(null, cljserial.components.todo.todo_input,"(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.todo_input,cljserial.components.todo.todo_input.displayName);

(cljserial.components.todo.todo_input.fast_refresh_signature = sig__39847__auto___56987);
} else {
}
} else {
}
cljserial.components.todo.todo_item_text = (function cljserial$components$todo$todo_item_text(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56908 = [clj_props__39918__auto__];
var map__56911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56908,(0),null);
var map__56911__$1 = cljs.core.__destructure_map(map__56911);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56911__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56911__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_done_editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56911__$1,new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___56990 = cljserial.components.todo.todo_item_text.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56990)){
var f__39838__auto___56991 = temp__5804__auto___56990;
(f__39838__auto___56991.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56991.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56991.call(null, ));
} else {
}
} else {
}

var vec__56915 = uix.core.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56915,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56915,(1),null);
var vec__56918 = uix.core.use_state("");
var editing_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56918,(0),null);
var set_editing_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56918,(1),null);
if(cljs.core.truth_(editing_QMARK_)){
return uix.compiler.aot.create_uix_input("input",[{'className':"flex-1 text-lg outline-0 border-0",'value':uix.compiler.attributes.keyword__GT_string(editing_value),'autoFocus':true,'onChange':(function (e){
var G__56924 = e.target.value;
return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__56924) : set_editing_value_BANG_.call(null, G__56924));
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
var _STAR_current_component_STAR__orig_val__56930 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56931 = cljserial.components.todo.todo_item_text;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56931);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56930);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.todo_item_text.uix_component_QMARK_ = true);

(cljserial.components.todo.todo_item_text.displayName = "cljserial.components.todo/todo-item-text");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___56995 = window.uix.dev.signature_BANG_();
(sig__39847__auto___56995.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___56995.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.todo_item_text,"(uix/use-state false)(uix/use-state \"\")",null,null) : sig__39847__auto___56995.call(null, cljserial.components.todo.todo_item_text,"(uix/use-state false)(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.todo_item_text,cljserial.components.todo.todo_item_text.displayName);

(cljserial.components.todo.todo_item_text.fast_refresh_signature = sig__39847__auto___56995);
} else {
}
} else {
}
cljserial.components.todo.todo_item = (function cljserial$components$todo$todo_item(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56935 = [clj_props__39918__auto__];
var map__56938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56935,(0),null);
var map__56938__$1 = cljs.core.__destructure_map(map__56938);
var props = map__56938__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56938__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var f__39919__auto__ = (function (){
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(cljserial.services.todo.Task,props))){
} else {
throw (new Error("Assert failed: (m/validate todos/Task props)"));
}

if(goog.DEBUG){
var temp__5804__auto___56997 = cljserial.components.todo.todo_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___56997)){
var f__39838__auto___56999 = temp__5804__auto___56997;
(f__39838__auto___56999.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___56999.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___56999.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'className':"flex items-center justify-between py-2 px-2 border-b-2 text-lg font-medium"}],[uix.compiler.aot.create_uix_input("input",[{'className':"w-5 h-5 mr-12",'type':"checkbox",'checked':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(done,true),'onChange':(function (){
var G__56939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-todo","toggle-todo",1473079782),id], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56939) : cljserial.utils.dbfx.dispatch.call(null, G__56939));
})}],[]),uix.compiler.alpha.component_element(cljserial.components.todo.todo_item_text,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),description,new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,done))?new cljs.core.Keyword(null,"line-through","line-through",-250988971):null)], null),new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127),(function (p1__56933_SHARP_){
var G__56940 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-todo","save-todo",-1159250078),id,p1__56933_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56940) : cljserial.utils.dbfx.dispatch.call(null, G__56940));
})], null)],[]),uix.compiler.aot._GT_el("button",[{'className':"border-0 text-xl text-red-600 cursor-pointer",'onClick':(function (){
var G__56941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),id], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56941) : cljserial.utils.dbfx.dispatch.call(null, G__56941));
})}],["\u00D7"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56942 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56943 = cljserial.components.todo.todo_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56943);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56942);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.todo_item.uix_component_QMARK_ = true);

(cljserial.components.todo.todo_item.displayName = "cljserial.components.todo/todo-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57002 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57002.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57002.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.todo_item,"",null,null) : sig__39847__auto___57002.call(null, cljserial.components.todo.todo_item,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.todo_item,cljserial.components.todo.todo_item.displayName);

(cljserial.components.todo.todo_item.fast_refresh_signature = sig__39847__auto___57002);
} else {
}
} else {
}
cljserial.components.todo.todo_widget = (function cljserial$components$todo$todo_widget(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56945 = [clj_props__39918__auto__];
var map__56948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56945,(0),null);
var map__56948__$1 = cljs.core.__destructure_map(map__56948);
var props = map__56948__$1;
var tasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56948__$1,new cljs.core.Keyword(null,"tasks","tasks",-1754368880));
var task_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56948__$1,new cljs.core.Keyword(null,"task-filter","task-filter",1152805919));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57004 = cljserial.components.todo.todo_widget.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57004)){
var f__39838__auto___57006 = temp__5804__auto___57004;
(f__39838__auto___57006.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57006.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57006.call(null, ));
} else {
}
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));

var all_tasks = cljs.core.vals(tasks);
var done = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),all_tasks));
var total = cljs.core.count(all_tasks);
return uix.compiler.aot._GT_el("div",[{'className':"block p-6 w-full mx-auto rounded-xl shadow-lg"}],[uix.compiler.alpha.component_element(cljserial.components.todo.header,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"task-filter","task-filter",1152805919),task_filter], null)],[]),uix.compiler.alpha.component_element(cljserial.components.todo.todo_input,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228),(function (p1__56944_SHARP_){
if(cljs.core.seq(p1__56944_SHARP_)){
var G__56949 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),p1__56944_SHARP_], null);
return (cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.dispatch.cljs$core$IFn$_invoke$arity$1(G__56949) : cljserial.utils.dbfx.dispatch.call(null, G__56949));
} else {
return null;
}
})], null)],[]),((cljs.core.seq(tasks))?uix.compiler.aot._GT_el("ul",[null],[(function (){var iter__5523__auto__ = (function cljserial$components$todo$todo_widget_$_iter__56950(s__56951){
return (new cljs.core.LazySeq(null,(function (){
var s__56951__$1 = s__56951;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56951__$1);
if(temp__5804__auto__){
var s__56951__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56951__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__56951__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__56953 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__56952 = (0);
while(true){
if((i__56952 < size__5522__auto__)){
var todo = cljs.core._nth(c__5521__auto__,i__56952);
cljs.core.chunk_append(b__56953,uix.compiler.aot._GT_el("li",[{'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)}],[uix.compiler.alpha.component_element(cljserial.components.todo.todo_item,uix.compiler.attributes.interpret_props(todo),[])]));

var G__57010 = (i__56952 + (1));
i__56952 = G__57010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56953),cljserial$components$todo$todo_widget_$_iter__56950(cljs.core.chunk_rest(s__56951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56953),null);
}
} else {
var todo = cljs.core.first(s__56951__$2);
return cljs.core.cons(uix.compiler.aot._GT_el("li",[{'key':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)}],[uix.compiler.alpha.component_element(cljserial.components.todo.todo_item,uix.compiler.attributes.interpret_props(todo),[])]),cljserial$components$todo$todo_widget_$_iter__56950(cljs.core.rest(s__56951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljserial.components.todo.filter_by(all_tasks,task_filter));
})()]):null),uix.compiler.alpha.component_element(cljserial.components.todo.footer,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",-889844188),done,new cljs.core.Keyword(null,"total","total",1916810418),total], null)],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56954 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56955 = cljserial.components.todo.todo_widget;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56955);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56954);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.todo_widget.uix_component_QMARK_ = true);

(cljserial.components.todo.todo_widget.displayName = "cljserial.components.todo/todo-widget");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57011 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57011.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57011.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.todo_widget,"",null,null) : sig__39847__auto___57011.call(null, cljserial.components.todo.todo_widget,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.todo_widget,cljserial.components.todo.todo_widget.displayName);

(cljserial.components.todo.todo_widget.fast_refresh_signature = sig__39847__auto___57011);
} else {
}
} else {
}
cljserial.components.todo.todo_app = (function cljserial$components$todo$todo_app(props__39917__auto__){
var clj_props__39918__auto__ = uix.core.glue_args(props__39917__auto__);
var vec__56956 = [clj_props__39918__auto__];
var map__56959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56956,(0),null);
var map__56959__$1 = cljs.core.__destructure_map(map__56959);
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56959__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var f__39919__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57012 = cljserial.components.todo.todo_app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57012)){
var f__39838__auto___57013 = temp__5804__auto___57012;
(f__39838__auto___57013.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57013.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57013.call(null, ));
} else {
}
} else {
}

var todo_data = (function (){var G__56960 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub], null);
return (cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1 ? cljserial.utils.dbfx.use_sub.cljs$core$IFn$_invoke$arity$1(G__56960) : cljserial.utils.dbfx.use_sub.call(null, G__56960));
})();
return uix.compiler.alpha.component_element(cljserial.components.todo.todo_widget,uix.compiler.attributes.interpret_props(todo_data),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56961 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56962 = cljserial.components.todo.todo_app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56962);

try{if(((cljs.core.map_QMARK_(clj_props__39918__auto__)) || ((clj_props__39918__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__39918__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__39918__auto__) (clojure.core/nil? clj-props__39918__auto__))"].join('')));
}

return f__39919__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56961);
}} else {
return f__39919__auto__();
}
});

(cljserial.components.todo.todo_app.uix_component_QMARK_ = true);

(cljserial.components.todo.todo_app.displayName = "cljserial.components.todo/todo-app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57014 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57014.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57014.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.todo_app,"(use-sub [sub])",null,null) : sig__39847__auto___57014.call(null, cljserial.components.todo.todo_app,"(use-sub [sub])",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.todo_app,cljserial.components.todo.todo_app.displayName);

(cljserial.components.todo.todo_app.fast_refresh_signature = sig__39847__auto___57014);
} else {
}
} else {
}
cljserial.components.todo.sample_app = (function cljserial$components$todo$sample_app(){
var f__39915__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___57015 = cljserial.components.todo.sample_app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___57015)){
var f__39838__auto___57016 = temp__5804__auto___57015;
(f__39838__auto___57016.cljs$core$IFn$_invoke$arity$0 ? f__39838__auto___57016.cljs$core$IFn$_invoke$arity$0() : f__39838__auto___57016.call(null, ));
} else {
}
} else {
}

return uix.compiler.alpha.component_element(cljserial.components.todo.todo_app,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"todo-data","todo-data",715447299)], null)],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__56963 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__56964 = cljserial.components.todo.sample_app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__56964);

try{return f__39915__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__56963);
}} else {
return f__39915__auto__();
}
});

(cljserial.components.todo.sample_app.uix_component_QMARK_ = true);

(cljserial.components.todo.sample_app.displayName = "cljserial.components.todo/sample-app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__39847__auto___57017 = window.uix.dev.signature_BANG_();
(sig__39847__auto___57017.cljs$core$IFn$_invoke$arity$4 ? sig__39847__auto___57017.cljs$core$IFn$_invoke$arity$4(cljserial.components.todo.sample_app,"",null,null) : sig__39847__auto___57017.call(null, cljserial.components.todo.sample_app,"",null,null));

window.uix.dev.register_BANG_(cljserial.components.todo.sample_app,cljserial.components.todo.sample_app.displayName);

(cljserial.components.todo.sample_app.fast_refresh_signature = sig__39847__auto___57017);
} else {
}
} else {
}

//# sourceMappingURL=cljserial.components.todo.js.map
