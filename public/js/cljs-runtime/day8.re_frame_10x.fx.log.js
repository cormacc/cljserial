goog.provide('day8.re_frame_10x.fx.log');
day8.re_frame_10x.fx.log.pretty = (function day8$re_frame_10x$fx$log$pretty(value){
var _STAR_print_length_STAR__orig_val__77196 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_length_STAR__temp_val__77197 = (20);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__77197);

try{var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__77201_77230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__77202_77231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__77203_77232 = true;
var _STAR_print_fn_STAR__temp_val__77204_77233 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__77203_77232);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__77204_77233);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(value);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__77202_77231);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__77201_77230);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__77196);
}});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.log","console","day8.re-frame-10x.fx.log/console",-1073534176),(function (p__77208){
var map__77209 = p__77208;
var map__77209__$1 = cljs.core.__destructure_map(map__77209);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77209__$1,new cljs.core.Keyword(null,"value","value",305978217));
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.log","console-raw","day8.re-frame-10x.fx.log/console-raw",-2046765886),(function (p__77214){
var map__77215 = p__77214;
var map__77215__$1 = cljs.core.__destructure_map(map__77215);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77215__$1,new cljs.core.Keyword(null,"value","value",305978217));
var pretty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77215__$1,new cljs.core.Keyword(null,"pretty?","pretty?",-1481161944));
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(pretty_QMARK_)?day8.re_frame_10x.fx.log.pretty(value):cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))], 0));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.core.reg_fx(new cljs.core.Keyword("day8.re-frame-10x.fx.log","clipboard","day8.re-frame-10x.fx.log/clipboard",-2127755755),(function (p__77220){
var map__77222 = p__77220;
var map__77222__$1 = cljs.core.__destructure_map(map__77222);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77222__$1,new cljs.core.Keyword(null,"value","value",305978217));
var pretty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77222__$1,new cljs.core.Keyword(null,"pretty?","pretty?",-1481161944));
return day8.re_frame_10x.fx.clipboard.copy_BANG_((function (){var G__77225 = value;
if(cljs.core.truth_(pretty_QMARK_)){
return day8.re_frame_10x.fx.log.pretty(G__77225);
} else {
return G__77225;
}
})());
}));

//# sourceMappingURL=day8.re_frame_10x.fx.log.js.map
