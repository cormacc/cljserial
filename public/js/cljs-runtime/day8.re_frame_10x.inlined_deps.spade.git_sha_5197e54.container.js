goog.provide('day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container');

/**
 * The IStyleContainer represents anything that can be used by Spade to
 * 'mount' styles for access by Spade style components.
 * @interface
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.IStyleContainer = function(){};

var day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mounted_info$dyn_59375 = (function (this$,style_name){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mounted_info[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_name) : m__5351__auto__.call(null, this$,style_name));
} else {
var m__5349__auto__ = (day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mounted_info["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_name) : m__5349__auto__.call(null, this$,style_name));
} else {
throw cljs.core.missing_protocol("IStyleContainer.mounted-info",this$);
}
}
});
/**
 * Given a style-name, return the info object that was passed when style-name
 *   was mounted, or nil if that style is not currently mounted.
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mounted_info = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$mounted_info(this$,style_name){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mounted_info$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mounted_info$arity$2(this$,style_name);
} else {
return day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mounted_info$dyn_59375(this$,style_name);
}
});

var day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mount_style_BANG_$dyn_59378 = (function (this$,style_name,css,info){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mount_style_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,style_name,css,info) : m__5351__auto__.call(null, this$,style_name,css,info));
} else {
var m__5349__auto__ = (day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mount_style_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,style_name,css,info) : m__5349__auto__.call(null, this$,style_name,css,info));
} else {
throw cljs.core.missing_protocol("IStyleContainer.mount-style!",this$);
}
}
});
/**
 * Ensure the style with the given name and CSS is available. [info]
 *   should be stored somewhere in-memory to be quickly retrieved
 *   by a call to [mounted-info].
 */
day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.mount_style_BANG_ = (function day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$mount_style_BANG_(this$,style_name,css,info){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mount_style_BANG_$arity$4 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mount_style_BANG_$arity$4(this$,style_name,css,info);
} else {
return day8$re_frame_10x$inlined_deps$spade$git_sha_5197e54$container$IStyleContainer$mount_style_BANG_$dyn_59378(this$,style_name,css,info);
}
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.spade.git_sha_5197e54.container.js.map
