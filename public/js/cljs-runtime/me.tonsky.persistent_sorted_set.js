goog.provide('me.tonsky.persistent_sorted_set');
/**
 * js limitation for bit ops
 */
me.tonsky.persistent_sorted_set.max_safe_path = Math.pow((2),(31));
/**
 * tunable param
 */
me.tonsky.persistent_sorted_set.bits_per_level = (5);
me.tonsky.persistent_sorted_set.max_len = Math.pow((2),(5));
me.tonsky.persistent_sorted_set.min_len = (me.tonsky.persistent_sorted_set.max_len / (2));
me.tonsky.persistent_sorted_set.avg_len = ((me.tonsky.persistent_sorted_set.max_len + me.tonsky.persistent_sorted_set.min_len) >>> (1));
me.tonsky.persistent_sorted_set.max_safe_level = Math.floor(((31) / (5)));
me.tonsky.persistent_sorted_set.bit_mask = (me.tonsky.persistent_sorted_set.max_len - (1));
me.tonsky.persistent_sorted_set.factors = me.tonsky.persistent_sorted_set.arrays.into_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__88541_SHARP_){
return Math.pow((2),p1__88541_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(52),(5))));
me.tonsky.persistent_sorted_set.empty_path = (0);
me.tonsky.persistent_sorted_set.path_get = (function me$tonsky$persistent_sorted_set$path_get(path,level){
if((level < me.tonsky.persistent_sorted_set.max_safe_level)){
return ((path >>> (level * (5))) & me.tonsky.persistent_sorted_set.bit_mask);
} else {
return (Math.floor((path / (me.tonsky.persistent_sorted_set.factors[level]))) & me.tonsky.persistent_sorted_set.bit_mask);
}
});
me.tonsky.persistent_sorted_set.path_set = (function me$tonsky$persistent_sorted_set$path_set(path,level,idx){
var smol_QMARK_ = (((path < me.tonsky.persistent_sorted_set.max_safe_path)) && ((level < me.tonsky.persistent_sorted_set.max_safe_level)));
var old = me.tonsky.persistent_sorted_set.path_get(path,level);
var minus = ((smol_QMARK_)?(old << (level * (5))):(old * (me.tonsky.persistent_sorted_set.factors[level])));
var plus = ((smol_QMARK_)?(idx << (level * (5))):(idx * (me.tonsky.persistent_sorted_set.factors[level])));
return ((path - minus) + plus);
});
me.tonsky.persistent_sorted_set.path_inc = (function me$tonsky$persistent_sorted_set$path_inc(path){
return (path + (1));
});
me.tonsky.persistent_sorted_set.path_dec = (function me$tonsky$persistent_sorted_set$path_dec(path){
return (path - (1));
});
me.tonsky.persistent_sorted_set.path_cmp = (function me$tonsky$persistent_sorted_set$path_cmp(path1,path2){
return (path1 - path2);
});
me.tonsky.persistent_sorted_set.path_lt = (function me$tonsky$persistent_sorted_set$path_lt(path1,path2){
return (path1 < path2);
});
me.tonsky.persistent_sorted_set.path_lte = (function me$tonsky$persistent_sorted_set$path_lte(path1,path2){
return (path1 <= path2);
});
me.tonsky.persistent_sorted_set.path_eq = (function me$tonsky$persistent_sorted_set$path_eq(path1,path2){
return (path1 === path2);
});
me.tonsky.persistent_sorted_set.path_same_leaf = (function me$tonsky$persistent_sorted_set$path_same_leaf(path1,path2){
if((((path1 < me.tonsky.persistent_sorted_set.max_safe_path)) && ((path2 < me.tonsky.persistent_sorted_set.max_safe_path)))){
return ((path1 >>> (5)) === (path2 >>> (5)));
} else {
return (Math.floor((path1 / me.tonsky.persistent_sorted_set.max_len)) === Math.floor((path2 / me.tonsky.persistent_sorted_set.max_len)));
}
});
me.tonsky.persistent_sorted_set.path_str = (function me$tonsky$persistent_sorted_set$path_str(path){
var res = cljs.core.List.EMPTY;
var path__$1 = path;
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,(0))){
var G__89136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.mod(path__$1,me.tonsky.persistent_sorted_set.max_len));
var G__89137 = Math.floor((path__$1 / me.tonsky.persistent_sorted_set.max_len));
res = G__89136;
path__$1 = G__89137;
continue;
} else {
return cljs.core.vec(res);
}
break;
}
});
me.tonsky.persistent_sorted_set.binary_search_l = (function me$tonsky$persistent_sorted_set$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$(r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if(((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(mk,k) : cmp.call(null, mk,k)) < (0))){
var G__89138 = (m + (1));
var G__89139 = r__$1;
l = G__89138;
r__$1 = G__89139;
continue;
} else {
var G__89140 = l;
var G__89141 = (m - (1));
l = G__89140;
r__$1 = G__89141;
continue;
}
} else {
return l;
}
break;
}
});
me.tonsky.persistent_sorted_set.binary_search_r = (function me$tonsky$persistent_sorted_set$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$(r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if(((cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(mk,k) : cmp.call(null, mk,k)) > (0))){
var G__89142 = l;
var G__89143 = (m - (1));
l = G__89142;
r__$1 = G__89143;
continue;
} else {
var G__89144 = (m + (1));
var G__89145 = r__$1;
l = G__89144;
r__$1 = G__89145;
continue;
}
} else {
return l;
}
break;
}
});
me.tonsky.persistent_sorted_set.lookup_exact = (function me$tonsky$persistent_sorted_set$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,arr,(arr_l - (1)),key);
if((((idx < arr_l)) && (((0) === (function (){var G__88597 = (arr[idx]);
var G__88598 = key;
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__88597,G__88598) : cmp.call(null, G__88597,G__88598));
})())))){
return idx;
} else {
return (-1);
}
});
me.tonsky.persistent_sorted_set.lookup_range = (function me$tonsky$persistent_sorted_set$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
me.tonsky.persistent_sorted_set.cut_n_splice = (function me$tonsky$persistent_sorted_set$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = me.tonsky.persistent_sorted_set.arrays.make_array(((l1 + xs_l) + l2));
var l__47842__auto___89147 = (splice_from - cut_from);
var n__5593__auto___89148 = l__47842__auto___89147;
var i__47843__auto___89149 = (0);
while(true){
if((i__47843__auto___89149 < n__5593__auto___89148)){
(new_arr[(i__47843__auto___89149 + (0))] = (arr[(i__47843__auto___89149 + cut_from)]));

var G__89150 = (i__47843__auto___89149 + (1));
i__47843__auto___89149 = G__89150;
continue;
} else {
}
break;
}

var l__47842__auto___89151 = (xs_l - (0));
var n__5593__auto___89152 = l__47842__auto___89151;
var i__47843__auto___89153 = (0);
while(true){
if((i__47843__auto___89153 < n__5593__auto___89152)){
(new_arr[(i__47843__auto___89153 + l1)] = (xs[(i__47843__auto___89153 + (0))]));

var G__89154 = (i__47843__auto___89153 + (1));
i__47843__auto___89153 = G__89154;
continue;
} else {
}
break;
}

var l__47842__auto___89155 = (cut_to - splice_to);
var n__5593__auto___89156 = l__47842__auto___89155;
var i__47843__auto___89157 = (0);
while(true){
if((i__47843__auto___89157 < n__5593__auto___89156)){
(new_arr[(i__47843__auto___89157 + l1xs)] = (arr[(i__47843__auto___89157 + splice_to)]));

var G__89158 = (i__47843__auto___89157 + (1));
i__47843__auto___89157 = G__89158;
continue;
} else {
}
break;
}

return new_arr;
});
me.tonsky.persistent_sorted_set.splice = (function me$tonsky$persistent_sorted_set$splice(arr,splice_from,splice_to,xs){
return me.tonsky.persistent_sorted_set.cut_n_splice(arr,(0),arr.length,splice_from,splice_to,xs);
});
me.tonsky.persistent_sorted_set.insert = (function me$tonsky$persistent_sorted_set$insert(arr,idx,xs){
return me.tonsky.persistent_sorted_set.cut_n_splice(arr,(0),arr.length,idx,idx,xs);
});
me.tonsky.persistent_sorted_set.merge_n_split = (function me$tonsky$persistent_sorted_set$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = me.tonsky.persistent_sorted_set.arrays.make_array(r1_l);
var r2 = me.tonsky.persistent_sorted_set.arrays.make_array(r2_l);
if((a1_l <= r1_l)){
var l__47842__auto___89159 = (a1_l - (0));
var n__5593__auto___89160 = l__47842__auto___89159;
var i__47843__auto___89161 = (0);
while(true){
if((i__47843__auto___89161 < n__5593__auto___89160)){
(r1[(i__47843__auto___89161 + (0))] = (a1[(i__47843__auto___89161 + (0))]));

var G__89162 = (i__47843__auto___89161 + (1));
i__47843__auto___89161 = G__89162;
continue;
} else {
}
break;
}

var l__47842__auto___89163 = ((r1_l - a1_l) - (0));
var n__5593__auto___89164 = l__47842__auto___89163;
var i__47843__auto___89165 = (0);
while(true){
if((i__47843__auto___89165 < n__5593__auto___89164)){
(r1[(i__47843__auto___89165 + a1_l)] = (a2[(i__47843__auto___89165 + (0))]));

var G__89166 = (i__47843__auto___89165 + (1));
i__47843__auto___89165 = G__89166;
continue;
} else {
}
break;
}

var l__47842__auto___89167 = (a2_l - (r1_l - a1_l));
var n__5593__auto___89168 = l__47842__auto___89167;
var i__47843__auto___89169 = (0);
while(true){
if((i__47843__auto___89169 < n__5593__auto___89168)){
(r2[(i__47843__auto___89169 + (0))] = (a2[(i__47843__auto___89169 + (r1_l - a1_l))]));

var G__89170 = (i__47843__auto___89169 + (1));
i__47843__auto___89169 = G__89170;
continue;
} else {
}
break;
}
} else {
var l__47842__auto___89171 = (r1_l - (0));
var n__5593__auto___89172 = l__47842__auto___89171;
var i__47843__auto___89173 = (0);
while(true){
if((i__47843__auto___89173 < n__5593__auto___89172)){
(r1[(i__47843__auto___89173 + (0))] = (a1[(i__47843__auto___89173 + (0))]));

var G__89174 = (i__47843__auto___89173 + (1));
i__47843__auto___89173 = G__89174;
continue;
} else {
}
break;
}

var l__47842__auto___89175 = (a1_l - r1_l);
var n__5593__auto___89177 = l__47842__auto___89175;
var i__47843__auto___89178 = (0);
while(true){
if((i__47843__auto___89178 < n__5593__auto___89177)){
(r2[(i__47843__auto___89178 + (0))] = (a1[(i__47843__auto___89178 + r1_l)]));

var G__89179 = (i__47843__auto___89178 + (1));
i__47843__auto___89178 = G__89179;
continue;
} else {
}
break;
}

var l__47842__auto___89180 = (a2_l - (0));
var n__5593__auto___89181 = l__47842__auto___89180;
var i__47843__auto___89182 = (0);
while(true){
if((i__47843__auto___89182 < n__5593__auto___89181)){
(r2[(i__47843__auto___89182 + (a1_l - r1_l))] = (a2[(i__47843__auto___89182 + (0))]));

var G__89183 = (i__47843__auto___89182 + (1));
i__47843__auto___89182 = G__89183;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
me.tonsky.persistent_sorted_set.eq_arr = (function me$tonsky$persistent_sorted_set$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__5000__auto__ = (len === (a2_to - a2_from));
if(and__5000__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if((!(((0) === (function (){var G__88649 = (a1[(i + a1_from)]);
var G__88650 = (a2[(i + a2_from)]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__88649,G__88650) : cmp.call(null, G__88649,G__88650));
})())))){
return false;
} else {
var G__89187 = (i + (1));
i = G__89187;
continue;

}
}
break;
}
} else {
return and__5000__auto__;
}
});
me.tonsky.persistent_sorted_set.check_n_splice = (function me$tonsky$persistent_sorted_set$check_n_splice(cmp,arr,from,to,new_arr){
if(me.tonsky.persistent_sorted_set.eq_arr(cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return me.tonsky.persistent_sorted_set.splice(arr,from,to,new_arr);
}
});
/**
 * Drop non-nil references and return array of arguments
 */
me.tonsky.persistent_sorted_set.return_array = (function me$tonsky$persistent_sorted_set$return_array(var_args){
var G__88659 = arguments.length;
switch (G__88659) {
case 1:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
}));

(me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
}));

(me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
}));

(me.tonsky.persistent_sorted_set.return_array.cljs$lang$maxFixedArity = 3);


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.INode = function(){};

var me$tonsky$persistent_sorted_set$INode$node_lim_key$dyn_89195 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_lim_key[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_lim_key["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("INode.node-lim-key",_);
}
}
});
me.tonsky.persistent_sorted_set.node_lim_key = (function me$tonsky$persistent_sorted_set$node_lim_key(_){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1(_);
} else {
return me$tonsky$persistent_sorted_set$INode$node_lim_key$dyn_89195(_);
}
});

var me$tonsky$persistent_sorted_set$INode$node_len$dyn_89196 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_len[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_len["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("INode.node-len",_);
}
}
});
me.tonsky.persistent_sorted_set.node_len = (function me$tonsky$persistent_sorted_set$node_len(_){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_len$arity$1(_);
} else {
return me$tonsky$persistent_sorted_set$INode$node_len$dyn_89196(_);
}
});

var me$tonsky$persistent_sorted_set$INode$node_merge$dyn_89197 = (function (_,next){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_merge[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__5351__auto__.call(null, _,next));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_merge["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__5349__auto__.call(null, _,next));
} else {
throw cljs.core.missing_protocol("INode.node-merge",_);
}
}
});
me.tonsky.persistent_sorted_set.node_merge = (function me$tonsky$persistent_sorted_set$node_merge(_,next){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2(_,next);
} else {
return me$tonsky$persistent_sorted_set$INode$node_merge$dyn_89197(_,next);
}
});

var me$tonsky$persistent_sorted_set$INode$node_merge_n_split$dyn_89214 = (function (_,next){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_merge_n_split[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__5351__auto__.call(null, _,next));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_merge_n_split["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(_,next) : m__5349__auto__.call(null, _,next));
} else {
throw cljs.core.missing_protocol("INode.node-merge-n-split",_);
}
}
});
me.tonsky.persistent_sorted_set.node_merge_n_split = (function me$tonsky$persistent_sorted_set$node_merge_n_split(_,next){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2(_,next);
} else {
return me$tonsky$persistent_sorted_set$INode$node_merge_n_split$dyn_89214(_,next);
}
});

var me$tonsky$persistent_sorted_set$INode$node_lookup$dyn_89218 = (function (_,cmp,key){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_lookup[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__5351__auto__.call(null, _,cmp,key));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_lookup["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__5349__auto__.call(null, _,cmp,key));
} else {
throw cljs.core.missing_protocol("INode.node-lookup",_);
}
}
});
me.tonsky.persistent_sorted_set.node_lookup = (function me$tonsky$persistent_sorted_set$node_lookup(_,cmp,key){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3(_,cmp,key);
} else {
return me$tonsky$persistent_sorted_set$INode$node_lookup$dyn_89218(_,cmp,key);
}
});

var me$tonsky$persistent_sorted_set$INode$node_conj$dyn_89225 = (function (_,cmp,key){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_conj[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__5351__auto__.call(null, _,cmp,key));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_conj["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(_,cmp,key) : m__5349__auto__.call(null, _,cmp,key));
} else {
throw cljs.core.missing_protocol("INode.node-conj",_);
}
}
});
me.tonsky.persistent_sorted_set.node_conj = (function me$tonsky$persistent_sorted_set$node_conj(_,cmp,key){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3(_,cmp,key);
} else {
return me$tonsky$persistent_sorted_set$INode$node_conj$dyn_89225(_,cmp,key);
}
});

var me$tonsky$persistent_sorted_set$INode$node_disj$dyn_89226 = (function (_,cmp,key,root_QMARK_,left,right){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set.node_disj[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$6(_,cmp,key,root_QMARK_,left,right) : m__5351__auto__.call(null, _,cmp,key,root_QMARK_,left,right));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set.node_disj["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$6(_,cmp,key,root_QMARK_,left,right) : m__5349__auto__.call(null, _,cmp,key,root_QMARK_,left,right));
} else {
throw cljs.core.missing_protocol("INode.node-disj",_);
}
}
});
me.tonsky.persistent_sorted_set.node_disj = (function me$tonsky$persistent_sorted_set$node_disj(_,cmp,key,root_QMARK_,left,right){
if((((!((_ == null)))) && ((!((_.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 == null)))))){
return _.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
return me$tonsky$persistent_sorted_set$INode$node_disj$dyn_89226(_,cmp,key,root_QMARK_,left,right);
}
});

me.tonsky.persistent_sorted_set.rotate = (function me$tonsky$persistent_sorted_set$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$1(node);
} else {
if((me.tonsky.persistent_sorted_set.node_len(node) > me.tonsky.persistent_sorted_set.min_len)){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3(left,node,right);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = left;
if(cljs.core.truth_(and__5000__auto__)){
return (me.tonsky.persistent_sorted_set.node_len(left) <= me.tonsky.persistent_sorted_set.min_len);
} else {
return and__5000__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2(me.tonsky.persistent_sorted_set.node_merge(left,node),right);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = right;
if(cljs.core.truth_(and__5000__auto__)){
return (me.tonsky.persistent_sorted_set.node_len(right) <= me.tonsky.persistent_sorted_set.min_len);
} else {
return and__5000__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2(left,me.tonsky.persistent_sorted_set.node_merge(node,right));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = left;
if(cljs.core.truth_(and__5000__auto__)){
return (((right == null)) || ((me.tonsky.persistent_sorted_set.node_len(left) < me.tonsky.persistent_sorted_set.node_len(right))));
} else {
return and__5000__auto__;
}
})())){
var nodes = me.tonsky.persistent_sorted_set.node_merge_n_split(left,node);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3((nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = me.tonsky.persistent_sorted_set.node_merge_n_split(node,right);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$3(left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.INode}
*/
me.tonsky.persistent_sorted_set.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
});
(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arr__47858__auto__ = self__.keys;
return (arr__47858__auto__[(arr__47858__auto__.length - (1))]);
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.aconcat(self__.keys,next.keys),me.tonsky.persistent_sorted_set.arrays.aconcat(self__.pointers,next.pointers)));
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = me.tonsky.persistent_sorted_set.merge_n_split(self__.keys,next.keys);
var ps = me.tonsky.persistent_sorted_set.merge_n_split(self__.pointers,next.pointers);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((new me.tonsky.persistent_sorted_set.Node((ks[(0)]),(ps[(0)]))),(new me.tonsky.persistent_sorted_set.Node((ks[(1)]),(ps[(1)]))));
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_range(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return me.tonsky.persistent_sorted_set.node_lookup((self__.pointers[idx]),cmp,key);
}
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = me.tonsky.persistent_sorted_set.node_conj((self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = me.tonsky.persistent_sorted_set.check_n_splice(cmp,self__.keys,idx,(idx + (1)),me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,nodes));
var new_pointers = me.tonsky.persistent_sorted_set.splice(self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= me.tonsky.persistent_sorted_set.max_len)){
return [(new me.tonsky.persistent_sorted_set.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new me.tonsky.persistent_sorted_set.Node(new_keys.slice((0),middle),new_pointers.slice((0),middle))),(new me.tonsky.persistent_sorted_set.Node(new_keys.slice(middle),new_pointers.slice(middle)))];
}
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Node.prototype.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_range(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = me.tonsky.persistent_sorted_set.node_disj(child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = me.tonsky.persistent_sorted_set.check_n_splice(cmp,self__.keys,left_idx,right_idx,me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,disjned));
var new_pointers = me.tonsky.persistent_sorted_set.splice(self__.pointers,left_idx,right_idx,disjned);
return me.tonsky.persistent_sorted_set.rotate((new me.tonsky.persistent_sorted_set.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
}));

(me.tonsky.persistent_sorted_set.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
}));

(me.tonsky.persistent_sorted_set.Node.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Node.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Node");

(me.tonsky.persistent_sorted_set.Node.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"me.tonsky.persistent-sorted-set/Node");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Node.
 */
me.tonsky.persistent_sorted_set.__GT_Node = (function me$tonsky$persistent_sorted_set$__GT_Node(keys,pointers){
return (new me.tonsky.persistent_sorted_set.Node(keys,pointers));
});


/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.INode}
*/
me.tonsky.persistent_sorted_set.Leaf = (function (keys){
this.keys = keys;
});
(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var arr__47858__auto__ = self__.keys;
return (arr__47858__auto__[(arr__47858__auto__.length - (1))]);
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.arrays.aconcat(self__.keys,next.keys)));
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = me.tonsky.persistent_sorted_set.merge_n_split(self__.keys,next.keys);
return me.tonsky.persistent_sorted_set.return_array.cljs$core$IFn$_invoke$arity$2((new me.tonsky.persistent_sorted_set.Leaf((ks[(0)]))),(new me.tonsky.persistent_sorted_set.Leaf((ks[(1)]))));
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_exact(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if((((idx < keys_l)) && (((0) === (function (){var G__88770 = key;
var G__88771 = (self__.keys[idx]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__88770,G__88771) : cmp.call(null, G__88770,G__88771));
})())))){
return null;
} else {
if((keys_l === me.tonsky.persistent_sorted_set.max_len)){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new me.tonsky.persistent_sorted_set.Leaf(self__.keys.slice((0),middle))),(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.cut_n_splice(self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.cut_n_splice(self__.keys,(0),middle,idx,idx,[key]))),(new me.tonsky.persistent_sorted_set.Leaf(self__.keys.slice(middle,keys_l)))];
}
} else {
return [(new me.tonsky.persistent_sorted_set.Leaf(me.tonsky.persistent_sorted_set.splice(self__.keys,idx,idx,[key])))];

}
}
}));

(me.tonsky.persistent_sorted_set.Leaf.prototype.me$tonsky$persistent_sorted_set$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = me.tonsky.persistent_sorted_set.lookup_exact(cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = me.tonsky.persistent_sorted_set.splice(self__.keys,idx,(idx + (1)),[]);
return me.tonsky.persistent_sorted_set.rotate((new me.tonsky.persistent_sorted_set.Leaf(new_keys)),root_QMARK_,left,right);
}
}));

(me.tonsky.persistent_sorted_set.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
}));

(me.tonsky.persistent_sorted_set.Leaf.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Leaf.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Leaf");

(me.tonsky.persistent_sorted_set.Leaf.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"me.tonsky.persistent-sorted-set/Leaf");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Leaf.
 */
me.tonsky.persistent_sorted_set.__GT_Leaf = (function me$tonsky$persistent_sorted_set$__GT_Leaf(keys){
return (new me.tonsky.persistent_sorted_set.Leaf(keys));
});



me.tonsky.persistent_sorted_set.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ITransientSet}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEditableCollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.ITransientCollection}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.BTSet = (function (root,shift,cnt,comparator,meta,_hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8332;
});
(me.tonsky.persistent_sorted_set.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return me.tonsky.persistent_sorted_set.node_lookup(self__.root,self__.comparator,k);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__5002__auto__ = me.tonsky.persistent_sorted_set.node_lookup(self__.root,self__.comparator,k);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq(this$__$1));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__._hash));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq((me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null, this$__$1)));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5111__auto__ = self__._hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__._hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((cljs.core.set_QMARK_(other)) && ((((self__.cnt === cljs.core.count(other))) && (cljs.core.every_QMARK_((function (p1__88782_SHARP_){
return cljs.core.contains_QMARK_(this$__$1,p1__88782_SHARP_);
}),other)))));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),self__.comparator,self__.meta,null));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.disj.call(null, this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__5821__auto__ = (me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null, this$__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var i = temp__5821__auto__;
return cljs.core._reduce(i,f);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__5821__auto__ = (me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null, this$__$1));
if(cljs.core.truth_(temp__5821__auto__)){
var i = temp__5821__auto__;
return cljs.core._reduce(i,f,start);
} else {
return start;
}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.conj.call(null, this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1 ? me.tonsky.persistent_sorted_set.btset_iter.cljs$core$IFn$_invoke$arity$1(this$__$1) : me.tonsky.persistent_sorted_set.btset_iter.call(null, this$__$1));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.disj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.disj.call(null, this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__._hash));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.conj.cljs$core$IFn$_invoke$arity$3(this$__$1,key,self__.comparator) : me.tonsky.persistent_sorted_set.conj.call(null, this$__$1,key,self__.comparator));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.call = (function (unused__11220__auto__){
var self__ = this;
var self__ = this;
var G__88814 = (arguments.length - (1));
switch (G__88814) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.apply = (function (self__,args88783){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args88783)));
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null, k);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));

(me.tonsky.persistent_sorted_set.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(me.tonsky.persistent_sorted_set.BTSet.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.BTSet.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/BTSet");

(me.tonsky.persistent_sorted_set.BTSet.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"me.tonsky.persistent-sorted-set/BTSet");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/BTSet.
 */
me.tonsky.persistent_sorted_set.__GT_BTSet = (function me$tonsky$persistent_sorted_set$__GT_BTSet(root,shift,cnt,comparator,meta,_hash){
return (new me.tonsky.persistent_sorted_set.BTSet(root,shift,cnt,comparator,meta,_hash));
});

me.tonsky.persistent_sorted_set.keys_for = (function me$tonsky$persistent_sorted_set$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__89282 = (level - (1));
var G__89283 = (node.pointers[me.tonsky.persistent_sorted_set.path_get(path,level)]);
level = G__89282;
node = G__89283;
continue;
} else {
return node.keys;
}
break;
}
});
me.tonsky.persistent_sorted_set.alter_btset = (function me$tonsky$persistent_sorted_set$alter_btset(set,root,shift,cnt){
return (new me.tonsky.persistent_sorted_set.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
me.tonsky.persistent_sorted_set._next_path = (function me$tonsky$persistent_sorted_set$_next_path(node,path,level){
var idx = me.tonsky.persistent_sorted_set.path_get(path,level);
if((level > (0))){
var sub_path = (function (){var G__88833 = (node.pointers[idx]);
var G__88834 = path;
var G__88835 = (level - (1));
return (me.tonsky.persistent_sorted_set._next_path.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set._next_path.cljs$core$IFn$_invoke$arity$3(G__88833,G__88834,G__88835) : me.tonsky.persistent_sorted_set._next_path.call(null, G__88833,G__88834,G__88835));
})();
if((sub_path == null)){
if(((idx + (1)) < node.pointers.length)){
return me.tonsky.persistent_sorted_set.path_set((0),level,(idx + (1)));
} else {
return null;
}
} else {
return me.tonsky.persistent_sorted_set.path_set(sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return me.tonsky.persistent_sorted_set.path_set((0),(0),(idx + (1)));
} else {
return null;
}
}
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
me.tonsky.persistent_sorted_set._rpath = (function me$tonsky$persistent_sorted_set$_rpath(node,path,level){
var node__$1 = node;
var path__$1 = path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__89285 = (function (){var arr__47858__auto__ = node__$1.pointers;
return (arr__47858__auto__[(arr__47858__auto__.length - (1))]);
})();
var G__89286 = me.tonsky.persistent_sorted_set.path_set(path__$1,level__$1,(node__$1.pointers.length - (1)));
var G__89287 = (level__$1 - (1));
node__$1 = G__89285;
path__$1 = G__89286;
level__$1 = G__89287;
continue;
} else {
return me.tonsky.persistent_sorted_set.path_set(path__$1,(0),(node__$1.keys.length - (1)));
}
break;
}
});
/**
 * Returns path representing next item after `path` in natural traversal order.
 * Will overflow at leaf if at the end of the tree
 */
me.tonsky.persistent_sorted_set.next_path = (function me$tonsky$persistent_sorted_set$next_path(set,path){
if((path < (0))){
return (0);
} else {
var or__5002__auto__ = me.tonsky.persistent_sorted_set._next_path(set.root,path,set.shift);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return me.tonsky.persistent_sorted_set.path_inc(me.tonsky.persistent_sorted_set._rpath(set.root,(0),set.shift));
}
}
});
me.tonsky.persistent_sorted_set._prev_path = (function me$tonsky$persistent_sorted_set$_prev_path(node,path,level){
var idx = me.tonsky.persistent_sorted_set.path_get(path,level);
if(((((0) === level)) && (((0) === idx)))){
return null;
} else {
if(((0) === level)){
return me.tonsky.persistent_sorted_set.path_set((0),(0),(idx - (1)));
} else {
if((idx >= me.tonsky.persistent_sorted_set.node_len(node))){
return me.tonsky.persistent_sorted_set._rpath(node,path,level);
} else {
var path_SINGLEQUOTE_ = (function (){var G__88860 = (node.pointers[idx]);
var G__88861 = path;
var G__88862 = (level - (1));
return (me.tonsky.persistent_sorted_set._prev_path.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set._prev_path.cljs$core$IFn$_invoke$arity$3(G__88860,G__88861,G__88862) : me.tonsky.persistent_sorted_set._prev_path.call(null, G__88860,G__88861,G__88862));
})();
if((!((path_SINGLEQUOTE_ == null)))){
return me.tonsky.persistent_sorted_set.path_set(path_SINGLEQUOTE_,level,idx);
} else {
if(((0) === idx)){
return null;
} else {
var path_SINGLEQUOTE___$1 = me.tonsky.persistent_sorted_set._rpath((node.pointers[(idx - (1))]),path,(level - (1)));
return me.tonsky.persistent_sorted_set.path_set(path_SINGLEQUOTE___$1,level,(idx - (1)));

}
}

}
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order.
 * Will overflow at leaf if at beginning of tree
 */
me.tonsky.persistent_sorted_set.prev_path = (function me$tonsky$persistent_sorted_set$prev_path(set,path){
if((me.tonsky.persistent_sorted_set.path_get(path,(set.shift + (1))) > (0))){
return me.tonsky.persistent_sorted_set._rpath(set.root,path,set.shift);
} else {
var or__5002__auto__ = me.tonsky.persistent_sorted_set._prev_path(set.root,path,set.shift);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return me.tonsky.persistent_sorted_set.path_dec((0));
}
}
});

/**
 * Iterator that represents the whole set
 */
me.tonsky.persistent_sorted_set.btset_iter = (function me$tonsky$persistent_sorted_set$btset_iter(set){
if((me.tonsky.persistent_sorted_set.node_len(set.root) > (0))){
var left = (0);
var rpath = me.tonsky.persistent_sorted_set._rpath(set.root,(0),set.shift);
var right = me.tonsky.persistent_sorted_set.next_path(set,rpath);
return (me.tonsky.persistent_sorted_set.iter.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.iter.cljs$core$IFn$_invoke$arity$3(set,left,right) : me.tonsky.persistent_sorted_set.iter.call(null, set,left,right));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IChunk}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.Chunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition0$ = 524306;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.end - self__.off);
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (self__.arr[(self__.off + i)]);
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
if((((i >= (0))) && ((i < (self__.end - self__.off))))){
return (self__.arr[(self__.off + i)]);
} else {
return not_found;
}
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IChunk$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.off === self__.end)){
throw (new Error("-drop-first of empty chunk"));
} else {
return (new cljs.core.ArrayChunk(self__.arr,(self__.off + (1)),self__.end));
}
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.off === self__.end)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
return cljs.core._reduce(this$__$1.cljs$core$IChunk$_drop_first$arity$1(null, ),f,(self__.arr[self__.off]));
}
}));

(me.tonsky.persistent_sorted_set.Chunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var val = start;
var n = self__.off;
while(true){
if((n < self__.end)){
var val_SINGLEQUOTE_ = (function (){var G__88883 = val;
var G__88884 = (self__.arr[n]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__88883,G__88884) : f.call(null, G__88883,G__88884));
})();
if(cljs.core.reduced_QMARK_(val_SINGLEQUOTE_)){
return cljs.core.deref(val_SINGLEQUOTE_);
} else {
var G__89292 = val_SINGLEQUOTE_;
var G__89293 = (n + (1));
val = G__89292;
n = G__89293;
continue;
}
} else {
return val;
}
break;
}
}));

(me.tonsky.persistent_sorted_set.Chunk.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
}));

(me.tonsky.persistent_sorted_set.Chunk.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Chunk.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Chunk");

(me.tonsky.persistent_sorted_set.Chunk.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"me.tonsky.persistent-sorted-set/Chunk");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Chunk.
 */
me.tonsky.persistent_sorted_set.__GT_Chunk = (function me$tonsky$persistent_sorted_set$__GT_Chunk(arr,off,end){
return (new me.tonsky.persistent_sorted_set.Chunk(arr,off,end));
});


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.IIter = function(){};

var me$tonsky$persistent_sorted_set$IIter$_copy$dyn_89294 = (function (this$,left,right){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set._copy[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,left,right) : m__5351__auto__.call(null, this$,left,right));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set._copy["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,left,right) : m__5349__auto__.call(null, this$,left,right));
} else {
throw cljs.core.missing_protocol("IIter.-copy",this$);
}
}
});
me.tonsky.persistent_sorted_set._copy = (function me$tonsky$persistent_sorted_set$_copy(this$,left,right){
if((((!((this$ == null)))) && ((!((this$.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 == null)))))){
return this$.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(this$,left,right);
} else {
return me$tonsky$persistent_sorted_set$IIter$_copy$dyn_89294(this$,left,right);
}
});


/**
 * @interface
 */
me.tonsky.persistent_sorted_set.ISeek = function(){};

var me$tonsky$persistent_sorted_set$ISeek$_seek$dyn_89295 = (function() {
var G__89296 = null;
var G__89296__2 = (function (this$,key){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set._seek[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__5351__auto__.call(null, this$,key));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set._seek["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,key) : m__5349__auto__.call(null, this$,key));
} else {
throw cljs.core.missing_protocol("ISeek.-seek",this$);
}
}
});
var G__89296__3 = (function (this$,key,comparator){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (me.tonsky.persistent_sorted_set._seek[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,key,comparator) : m__5351__auto__.call(null, this$,key,comparator));
} else {
var m__5349__auto__ = (me.tonsky.persistent_sorted_set._seek["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,key,comparator) : m__5349__auto__.call(null, this$,key,comparator));
} else {
throw cljs.core.missing_protocol("ISeek.-seek",this$);
}
}
});
G__89296 = function(this$,key,comparator){
switch(arguments.length){
case 2:
return G__89296__2.call(this,this$,key);
case 3:
return G__89296__3.call(this,this$,key,comparator);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__89296.cljs$core$IFn$_invoke$arity$2 = G__89296__2;
G__89296.cljs$core$IFn$_invoke$arity$3 = G__89296__3;
return G__89296;
})()
;
me.tonsky.persistent_sorted_set._seek = (function me$tonsky$persistent_sorted_set$_seek(var_args){
var G__88899 = arguments.length;
switch (G__88899) {
case 2:
return me.tonsky.persistent_sorted_set._seek.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set._seek.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set._seek.cljs$core$IFn$_invoke$arity$2 = (function (this$,key){
if((((!((this$ == null)))) && ((!((this$.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$2 == null)))))){
return this$.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$2(this$,key);
} else {
return me$tonsky$persistent_sorted_set$ISeek$_seek$dyn_89295(this$,key);
}
}));

(me.tonsky.persistent_sorted_set._seek.cljs$core$IFn$_invoke$arity$3 = (function (this$,key,comparator){
if((((!((this$ == null)))) && ((!((this$.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$3 == null)))))){
return this$.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$3(this$,key,comparator);
} else {
return me$tonsky$persistent_sorted_set$ISeek$_seek$dyn_89295(this$,key,comparator);
}
}));

(me.tonsky.persistent_sorted_set._seek.cljs$lang$maxFixedArity = 3);




/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.IIter}
 * @implements {cljs.core.IReversible}
 * @implements {me.tonsky.persistent_sorted_set.ISeek}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IReduce}
*/
me.tonsky.persistent_sorted_set.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 2309488832;
this.cljs$lang$protocol_mask$partition1$ = 1536;
});
(me.tonsky.persistent_sorted_set.Iter.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$ISeek$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$3(null, key,self__.set.comparator);
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$3 = (function (this$,key,cmp){
var self__ = this;
var this$__$1 = this;
if((key == null)){
throw (new Error("seek can't be called with a nil key!"));
} else {
if(cljs.core.nat_int_QMARK_((function (){var G__88909 = (self__.keys[self__.idx]);
var G__88910 = key;
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__88909,G__88910) : cmp.call(null, G__88909,G__88910));
})())){
return this$__$1;
} else {
var temp__5827__auto__ = (me.tonsky.persistent_sorted_set._seek_STAR_.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set._seek_STAR_.cljs$core$IFn$_invoke$arity$3(self__.set,key,cmp) : me.tonsky.persistent_sorted_set._seek_STAR_.call(null, self__.set,key,cmp));
if((temp__5827__auto__ == null)){
return null;
} else {
var left_SINGLEQUOTE_ = temp__5827__auto__;
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,left_SINGLEQUOTE_,self__.right,me.tonsky.persistent_sorted_set.keys_for(self__.set,left_SINGLEQUOTE_),me.tonsky.persistent_sorted_set.path_get(left_SINGLEQUOTE_,(0))));
}

}
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.seq(this$__$1));
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx + (1)) < self__.keys.length)){
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.path_inc(self__.left);
if(me.tonsky.persistent_sorted_set.path_lt(left_SINGLEQUOTE_,self__.right)){
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,left_SINGLEQUOTE_,self__.right,self__.keys,(self__.idx + (1))));
} else {
return null;
}
} else {
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path(self__.set,self__.left);
if(me.tonsky.persistent_sorted_set.path_lt(left_SINGLEQUOTE_,self__.right)){
return this$__$1.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(null, left_SINGLEQUOTE_,self__.right);
} else {
return null;
}
}
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
var G__88918 = self__.set;
var G__88919 = me.tonsky.persistent_sorted_set.prev_path(self__.set,self__.left);
var G__88920 = me.tonsky.persistent_sorted_set.prev_path(self__.set,self__.right);
return (me.tonsky.persistent_sorted_set.riter.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set.riter.cljs$core$IFn$_invoke$arity$3(G__88918,G__88919,G__88920) : me.tonsky.persistent_sorted_set.riter.call(null, G__88918,G__88919,G__88920));
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,other);
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
if((self__.keys == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));
} else {
var first = this$__$1.cljs$core$ISeq$_first$arity$1(null, );
var temp__5825__auto__ = this$__$1.cljs$core$INext$_next$arity$1(null, );
if((temp__5825__auto__ == null)){
return first;
} else {
var next = temp__5825__auto__;
return cljs.core._reduce(next,f,first);
}
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var left__$1 = self__.left;
var keys__$1 = self__.keys;
var idx__$1 = self__.idx;
var acc = start;
while(true){
if((keys__$1 == null)){
return acc;
} else {
var new_acc = (function (){var G__88926 = acc;
var G__88927 = (keys__$1[idx__$1]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__88926,G__88927) : f.call(null, G__88926,G__88927));
})();
if(cljs.core.reduced_QMARK_(new_acc)){
return cljs.core.deref(new_acc);
} else {
if(((idx__$1 + (1)) < keys__$1.length)){
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.path_inc(left__$1);
if(me.tonsky.persistent_sorted_set.path_lt(left_SINGLEQUOTE_,self__.right)){
var G__89308 = left_SINGLEQUOTE_;
var G__89309 = keys__$1;
var G__89310 = (idx__$1 + (1));
var G__89311 = new_acc;
left__$1 = G__89308;
keys__$1 = G__89309;
idx__$1 = G__89310;
acc = G__89311;
continue;
} else {
return new_acc;
}
} else {
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path(self__.set,left__$1);
if(me.tonsky.persistent_sorted_set.path_lt(left_SINGLEQUOTE_,self__.right)){
var G__89314 = left_SINGLEQUOTE_;
var G__89315 = me.tonsky.persistent_sorted_set.keys_for(self__.set,left_SINGLEQUOTE_);
var G__89316 = me.tonsky.persistent_sorted_set.path_get(left_SINGLEQUOTE_,(0));
var G__89317 = new_acc;
left__$1 = G__89314;
keys__$1 = G__89315;
idx__$1 = G__89316;
acc = G__89317;
continue;
} else {
return new_acc;
}

}
}
}
break;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = this$__$1.cljs$core$INext$_next$arity$1(null, );
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.List.EMPTY;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var end_idx = ((me.tonsky.persistent_sorted_set.path_same_leaf(self__.left,self__.right))?me.tonsky.persistent_sorted_set.path_get(self__.right,(0)):self__.keys.length);
return (new me.tonsky.persistent_sorted_set.Chunk(self__.keys,self__.idx,end_idx));
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = this$__$1.cljs$core$IChunkedNext$_chunked_next$arity$1(null, );
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.List.EMPTY;
}
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$IIter$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.Iter.prototype.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 = (function (_,l,r){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.Iter(self__.set,l,r,me.tonsky.persistent_sorted_set.keys_for(self__.set,l),me.tonsky.persistent_sorted_set.path_get(l,(0))));
}));

(me.tonsky.persistent_sorted_set.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var last = me.tonsky.persistent_sorted_set.path_set(self__.left,(0),(self__.keys.length - (1)));
var left_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.next_path(self__.set,last);
if(me.tonsky.persistent_sorted_set.path_lt(left_SINGLEQUOTE_,self__.right)){
return this$__$1.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(null, left_SINGLEQUOTE_,self__.right);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(me.tonsky.persistent_sorted_set.Iter.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.Iter.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/Iter");

(me.tonsky.persistent_sorted_set.Iter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"me.tonsky.persistent-sorted-set/Iter");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/Iter.
 */
me.tonsky.persistent_sorted_set.__GT_Iter = (function me$tonsky$persistent_sorted_set$__GT_Iter(set,left,right,keys,idx){
return (new me.tonsky.persistent_sorted_set.Iter(set,left,right,keys,idx));
});

me.tonsky.persistent_sorted_set.iter = (function me$tonsky$persistent_sorted_set$iter(set,left,right){
return (new me.tonsky.persistent_sorted_set.Iter(set,left,right,me.tonsky.persistent_sorted_set.keys_for(set,left),me.tonsky.persistent_sorted_set.path_get(left,(0))));
});

/**
* @constructor
 * @implements {me.tonsky.persistent_sorted_set.IIter}
 * @implements {cljs.core.IReversible}
 * @implements {me.tonsky.persistent_sorted_set.ISeek}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
*/
me.tonsky.persistent_sorted_set.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 2308964544;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(me.tonsky.persistent_sorted_set.ReverseIter.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$ISeek$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return this$__$1.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$3(null, key,self__.set.comparator);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$ISeek$_seek$arity$3 = (function (this$,key,cmp){
var self__ = this;
var this$__$1 = this;
if((key == null)){
throw (new Error("seek can't be called with a nil key!"));
} else {
if(cljs.core.nat_int_QMARK_((function (){var G__88959 = key;
var G__88960 = (self__.keys[self__.idx]);
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__88959,G__88960) : cmp.call(null, G__88959,G__88960));
})())){
return this$__$1;
} else {
var right_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.prev_path(self__.set,(me.tonsky.persistent_sorted_set._rseek_STAR_.cljs$core$IFn$_invoke$arity$3 ? me.tonsky.persistent_sorted_set._rseek_STAR_.cljs$core$IFn$_invoke$arity$3(self__.set,key,cmp) : me.tonsky.persistent_sorted_set._rseek_STAR_.call(null, self__.set,key,cmp)));
if(((cljs.core.nat_int_QMARK_(right_SINGLEQUOTE_)) && (((me.tonsky.persistent_sorted_set.path_lte(self__.left,right_SINGLEQUOTE_)) && (me.tonsky.persistent_sorted_set.path_lt(right_SINGLEQUOTE_,self__.right)))))){
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,self__.left,right_SINGLEQUOTE_,me.tonsky.persistent_sorted_set.keys_for(self__.set,right_SINGLEQUOTE_),me.tonsky.persistent_sorted_set.path_get(right_SINGLEQUOTE_,(0))));
} else {
return null;
}

}
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.seq(this$__$1));
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
if((self__.idx > (0))){
var right_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.path_dec(self__.right);
if(me.tonsky.persistent_sorted_set.path_lt(self__.left,right_SINGLEQUOTE_)){
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,self__.left,right_SINGLEQUOTE_,self__.keys,(self__.idx - (1))));
} else {
return null;
}
} else {
var right_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.prev_path(self__.set,self__.right);
if(me.tonsky.persistent_sorted_set.path_lt(self__.left,right_SINGLEQUOTE_)){
return this$__$1.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3(null, self__.left,right_SINGLEQUOTE_);
} else {
return null;
}
}
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return me.tonsky.persistent_sorted_set.iter(self__.set,me.tonsky.persistent_sorted_set.next_path(self__.set,self__.left),me.tonsky.persistent_sorted_set.next_path(self__.set,self__.right));
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core.equiv_sequential(this$__$1,other);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = this$__$1.cljs$core$INext$_next$arity$1(null, );
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.List.EMPTY;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
}));

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$IIter$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.ReverseIter.prototype.me$tonsky$persistent_sorted_set$IIter$_copy$arity$3 = (function (_,l,r){
var self__ = this;
var ___$1 = this;
return (new me.tonsky.persistent_sorted_set.ReverseIter(self__.set,l,r,me.tonsky.persistent_sorted_set.keys_for(self__.set,r),me.tonsky.persistent_sorted_set.path_get(r,(0))));
}));

(me.tonsky.persistent_sorted_set.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$type = true);

(me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$ctorStr = "me.tonsky.persistent-sorted-set/ReverseIter");

(me.tonsky.persistent_sorted_set.ReverseIter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"me.tonsky.persistent-sorted-set/ReverseIter");
}));

/**
 * Positional factory function for me.tonsky.persistent-sorted-set/ReverseIter.
 */
me.tonsky.persistent_sorted_set.__GT_ReverseIter = (function me$tonsky$persistent_sorted_set$__GT_ReverseIter(set,left,right,keys,idx){
return (new me.tonsky.persistent_sorted_set.ReverseIter(set,left,right,keys,idx));
});

me.tonsky.persistent_sorted_set.riter = (function me$tonsky$persistent_sorted_set$riter(set,left,right){
return (new me.tonsky.persistent_sorted_set.ReverseIter(set,left,right,me.tonsky.persistent_sorted_set.keys_for(set,right),me.tonsky.persistent_sorted_set.path_get(right,(0))));
});
me.tonsky.persistent_sorted_set._distance = (function me$tonsky$persistent_sorted_set$_distance(node,left,right,level){
var idx_l = me.tonsky.persistent_sorted_set.path_get(left,level);
var idx_r = me.tonsky.persistent_sorted_set.path_get(right,level);
if((level > (0))){
if((idx_l === idx_r)){
var G__88990 = (node.pointers[idx_l]);
var G__88991 = left;
var G__88992 = right;
var G__88993 = (level - (1));
return (me.tonsky.persistent_sorted_set._distance.cljs$core$IFn$_invoke$arity$4 ? me.tonsky.persistent_sorted_set._distance.cljs$core$IFn$_invoke$arity$4(G__88990,G__88991,G__88992,G__88993) : me.tonsky.persistent_sorted_set._distance.call(null, G__88990,G__88991,G__88992,G__88993));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__89347 = (level__$1 - (1));
var G__89348 = (res * me.tonsky.persistent_sorted_set.avg_len);
level__$1 = G__89347;
res = G__89348;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
me.tonsky.persistent_sorted_set.distance = (function me$tonsky$persistent_sorted_set$distance(set,path_l,path_r){
if(me.tonsky.persistent_sorted_set.path_eq(path_l,path_r)){
return (0);
} else {
if(me.tonsky.persistent_sorted_set.path_eq(me.tonsky.persistent_sorted_set.path_inc(path_l),path_r)){
return (1);
} else {
if(me.tonsky.persistent_sorted_set.path_eq(me.tonsky.persistent_sorted_set.next_path(set,path_l),path_r)){
return (1);
} else {
return me.tonsky.persistent_sorted_set._distance(set.root,path_l,path_r,set.shift);

}
}
}
});
me.tonsky.persistent_sorted_set.est_count = (function me$tonsky$persistent_sorted_set$est_count(iter){
return me.tonsky.persistent_sorted_set.distance(iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
me.tonsky.persistent_sorted_set._seek_STAR_ = (function me$tonsky$persistent_sorted_set$_seek_STAR_(set,key,comparator){
if((key == null)){
return (0);
} else {
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = me.tonsky.persistent_sorted_set.node_len(node);
if(((0) === level)){
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return null;
} else {
return me.tonsky.persistent_sorted_set.path_set(path,(0),idx);
}
} else {
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_l(comparator,keys,(keys_l - (2)),key);
var G__89351 = (node.pointers[idx]);
var G__89352 = me.tonsky.persistent_sorted_set.path_set(path,level,idx);
var G__89353 = (level - (1));
node = G__89351;
path = G__89352;
level = G__89353;
continue;
}
break;
}
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
me.tonsky.persistent_sorted_set._rseek_STAR_ = (function me$tonsky$persistent_sorted_set$_rseek_STAR_(set,key,comparator){
if((key == null)){
return me.tonsky.persistent_sorted_set.path_inc(me.tonsky.persistent_sorted_set._rpath(set.root,(0),set.shift));
} else {
var node = set.root;
var path = (0);
var level = set.shift;
while(true){
var keys_l = me.tonsky.persistent_sorted_set.node_len(node);
if(((0) === level)){
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_r(comparator,keys,(keys_l - (1)),key);
var res = me.tonsky.persistent_sorted_set.path_set(path,(0),idx);
return res;
} else {
var keys = node.keys;
var idx = me.tonsky.persistent_sorted_set.binary_search_r(comparator,keys,(keys_l - (2)),key);
var res = me.tonsky.persistent_sorted_set.path_set(path,level,idx);
var G__89358 = (node.pointers[idx]);
var G__89359 = res;
var G__89360 = (level - (1));
node = G__89358;
path = G__89359;
level = G__89360;
continue;
}
break;
}
}
});
me.tonsky.persistent_sorted_set._slice = (function me$tonsky$persistent_sorted_set$_slice(set,key_from,key_to,comparator){
var temp__5827__auto__ = me.tonsky.persistent_sorted_set._seek_STAR_(set,key_from,comparator);
if((temp__5827__auto__ == null)){
return null;
} else {
var path = temp__5827__auto__;
var till_path = me.tonsky.persistent_sorted_set._rseek_STAR_(set,key_to,comparator);
if(me.tonsky.persistent_sorted_set.path_lt(path,till_path)){
return (new me.tonsky.persistent_sorted_set.Iter(set,path,till_path,me.tonsky.persistent_sorted_set.keys_for(set,path),me.tonsky.persistent_sorted_set.path_get(path,(0))));
} else {
return null;
}
}
});
me.tonsky.persistent_sorted_set.arr_map_inplace = (function me$tonsky$persistent_sorted_set$arr_map_inplace(f,arr){
var len = arr.length;
var i_89361 = (0);
while(true){
if((i_89361 < len)){
(arr[i_89361] = (function (){var G__89014 = (arr[i_89361]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__89014) : f.call(null, G__89014));
})());

var G__89363 = (i_89361 + (1));
i_89361 = G__89363;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
me.tonsky.persistent_sorted_set.arr_partition_approx = (function me$tonsky$persistent_sorted_set$arr_partition_approx(min_len,max_len,arr){
var chunk_len = me.tonsky.persistent_sorted_set.avg_len;
var len = arr.length;
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_89364 = (0);
while(true){
var rest_89366 = (len - pos_89364);
if((rest_89366 <= max_len)){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,arr.slice(pos_89364));
} else {
if((rest_89366 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,arr.slice(pos_89364,(pos_89364 + chunk_len)));

var G__89372 = (pos_89364 + chunk_len);
pos_89364 = G__89372;
continue;
} else {
var piece_len_89373 = (rest_89366 >>> (1));
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,arr.slice(pos_89364,(pos_89364 + piece_len_89373)));

var G__89374 = (pos_89364 + piece_len_89373);
pos_89364 = G__89374;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array(cljs.core.persistent_BANG_(acc));
});
me.tonsky.persistent_sorted_set.sorted_arr_distinct_QMARK_ = (function me$tonsky$persistent_sorted_set$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(e,p) : cmp.call(null, e,p)))){
return false;
} else {
var G__89378 = (i + (1));
var G__89379 = e;
i = G__89378;
p = G__89379;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
me.tonsky.persistent_sorted_set.sorted_arr_distinct = (function me$tonsky$persistent_sorted_set$sorted_arr_distinct(arr,cmp){
if(me.tonsky.persistent_sorted_set.sorted_arr_distinct_QMARK_(arr,cmp)){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.persistent_BANG_(acc));
} else {
var e = (arr[i]);
if(((0) === (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(e,p) : cmp.call(null, e,p)))){
var G__89385 = acc;
var G__89386 = (i + (1));
var G__89387 = e;
acc = G__89385;
i = G__89386;
p = G__89387;
continue;
} else {
var G__89388 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,e);
var G__89389 = (i + (1));
var G__89390 = e;
acc = G__89388;
i = G__89389;
p = G__89390;
continue;
}
}
break;
}
}
});
/**
 * Analogue to [[clojure.core/conj]] with comparator that overrides the one stored in set.
 */
me.tonsky.persistent_sorted_set.conj = (function me$tonsky$persistent_sorted_set$conj(set,key,cmp){
var roots = me.tonsky.persistent_sorted_set.node_conj(set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return me.tonsky.persistent_sorted_set.alter_btset(set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return me.tonsky.persistent_sorted_set.alter_btset(set,(new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,roots),roots)),(set.shift + (1)),(set.cnt + (1)));

}
}
});
/**
 * Analogue to [[clojure.core/disj]] with comparator that overrides the one stored in set.
 */
me.tonsky.persistent_sorted_set.disj = (function me$tonsky$persistent_sorted_set$disj(set,key,cmp){
var new_roots = me.tonsky.persistent_sorted_set.node_disj(set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if((((new_root instanceof me.tonsky.persistent_sorted_set.Node)) && (((1) === new_root.pointers.length)))){
return me.tonsky.persistent_sorted_set.alter_btset(set,(new_root.pointers[(0)]),(set.shift - (1)),(set.cnt - (1)));
} else {
return me.tonsky.persistent_sorted_set.alter_btset(set,new_root,set.shift,(set.cnt - (1)));
}
}
});
/**
 * An iterator for part of the set with provided boundaries.
 * `(slice set from to)` returns iterator for all Xs where from <= X <= to.
 * Optionally pass in comparator that will override the one that set uses. Supports efficient [[clojure.core/rseq]].
 */
me.tonsky.persistent_sorted_set.slice = (function me$tonsky$persistent_sorted_set$slice(var_args){
var G__89039 = arguments.length;
switch (G__89039) {
case 3:
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return me.tonsky.persistent_sorted_set._slice(set,key_from,key_to,set.comparator);
}));

(me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$4 = (function (set,key_from,key_to,comparator){
return me.tonsky.persistent_sorted_set._slice(set,key_from,key_to,comparator);
}));

(me.tonsky.persistent_sorted_set.slice.cljs$lang$maxFixedArity = 4);

/**
 * A reverse iterator for part of the set with provided boundaries.
 * `(rslice set from to)` returns backwards iterator for all Xs where from <= X <= to.
 * Optionally pass in comparator that will override the one that set uses. Supports efficient [[clojure.core/rseq]].
 */
me.tonsky.persistent_sorted_set.rslice = (function me$tonsky$persistent_sorted_set$rslice(var_args){
var G__89043 = arguments.length;
switch (G__89043) {
case 2:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
var G__89049 = me.tonsky.persistent_sorted_set._slice(set,key,key,set.comparator);
if((G__89049 == null)){
return null;
} else {
return cljs.core.rseq(G__89049);
}
}));

(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
var G__89050 = me.tonsky.persistent_sorted_set._slice(set,key_to,key_from,set.comparator);
if((G__89050 == null)){
return null;
} else {
return cljs.core.rseq(G__89050);
}
}));

(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$4 = (function (set,key_from,key_to,comparator){
var G__89054 = me.tonsky.persistent_sorted_set._slice(set,key_to,key_from,comparator);
if((G__89054 == null)){
return null;
} else {
return cljs.core.rseq(G__89054);
}
}));

(me.tonsky.persistent_sorted_set.rslice.cljs$lang$maxFixedArity = 4);

/**
 * An efficient way to seek to a specific key in a seq (either returned by [[clojure.core.seq]] or a slice.)
 *   `(seek (seq set) to)` returns iterator for all Xs where to <= X.
 *   Optionally pass in comparator that will override the one that set uses.
 */
me.tonsky.persistent_sorted_set.seek = (function me$tonsky$persistent_sorted_set$seek(var_args){
var G__89058 = arguments.length;
switch (G__89058) {
case 2:
return me.tonsky.persistent_sorted_set.seek.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.seek.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.seek.cljs$core$IFn$_invoke$arity$2 = (function (seq,to){
return me.tonsky.persistent_sorted_set._seek(seq,to);
}));

(me.tonsky.persistent_sorted_set.seek.cljs$core$IFn$_invoke$arity$3 = (function (seq,to,cmp){
return me.tonsky.persistent_sorted_set._seek(seq,to,cmp);
}));

(me.tonsky.persistent_sorted_set.seek.cljs$lang$maxFixedArity = 3);

/**
 * Fast path to create a set if you already have a sorted array of elements on your hands.
 */
me.tonsky.persistent_sorted_set.from_sorted_array = (function me$tonsky$persistent_sorted_set$from_sorted_array(var_args){
var G__89072 = arguments.length;
switch (G__89072) {
case 2:
return me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$2 = (function (cmp,arr){
return me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4(cmp,arr,arr.length,cljs.core.PersistentArrayMap.EMPTY);
}));

(me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$3 = (function (cmp,arr,_len){
return me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4(cmp,arr,_len,cljs.core.PersistentArrayMap.EMPTY);
}));

(me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4 = (function (cmp,arr,_len,_opts){
var leaves = me.tonsky.persistent_sorted_set.arr_map_inplace((function (p1__89064_SHARP_){
return (new me.tonsky.persistent_sorted_set.Leaf(p1__89064_SHARP_));
}),me.tonsky.persistent_sorted_set.arr_partition_approx(me.tonsky.persistent_sorted_set.min_len,me.tonsky.persistent_sorted_set.max_len,arr));
var current_level = leaves;
var shift = (0);
while(true){
var G__89076 = cljs.core.count(current_level);
switch (G__89076) {
case (0):
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),cmp,null,null));

break;
case (1):
return (new me.tonsky.persistent_sorted_set.BTSet(cljs.core.first(current_level),shift,arr.length,cmp,null,null));

break;
default:
var G__89429 = me.tonsky.persistent_sorted_set.arr_map_inplace(((function (current_level,shift,G__89076,leaves){
return (function (p1__89065_SHARP_){
return (new me.tonsky.persistent_sorted_set.Node(me.tonsky.persistent_sorted_set.arrays.amap(me.tonsky.persistent_sorted_set.node_lim_key,p1__89065_SHARP_),p1__89065_SHARP_));
});})(current_level,shift,G__89076,leaves))
,me.tonsky.persistent_sorted_set.arr_partition_approx(me.tonsky.persistent_sorted_set.min_len,me.tonsky.persistent_sorted_set.max_len,current_level));
var G__89430 = (shift + (1));
current_level = G__89429;
shift = G__89430;
continue;

}
break;
}
}));

(me.tonsky.persistent_sorted_set.from_sorted_array.cljs$lang$maxFixedArity = 4);

/**
 * Create a set with custom comparator and a collection of keys. Useful when you don’t want to call [[clojure.core/apply]] on [[sorted-set-by]].
 */
me.tonsky.persistent_sorted_set.from_sequential = (function me$tonsky$persistent_sorted_set$from_sequential(cmp,seq){
var arr = me.tonsky.persistent_sorted_set.sorted_arr_distinct(me.tonsky.persistent_sorted_set.arrays.asort(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(seq),cmp),cmp);
return me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$2(cmp,arr);
});
/**
 * Create a set with custom comparator, metadata and settings
 */
me.tonsky.persistent_sorted_set.sorted_set_STAR_ = (function me$tonsky$persistent_sorted_set$sorted_set_STAR_(opts){
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"cmp","cmp",575646375).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.compare;
}
})(),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts),null));
});
me.tonsky.persistent_sorted_set.sorted_set_by = (function me$tonsky$persistent_sorted_set$sorted_set_by(var_args){
var G__89103 = arguments.length;
switch (G__89103) {
case 1:
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___89440 = arguments.length;
var i__5727__auto___89441 = (0);
while(true){
if((i__5727__auto___89441 < len__5726__auto___89440)){
args_arr__5751__auto__.push((arguments[i__5727__auto___89441]));

var G__89442 = (i__5727__auto___89441 + (1));
i__5727__auto___89441 = G__89442;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((1) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((1)),(0),null)):null);
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5752__auto__);

}
});

(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new me.tonsky.persistent_sorted_set.BTSet((new me.tonsky.persistent_sorted_set.Leaf([])),(0),(0),cmp,null,null));
}));

(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return me.tonsky.persistent_sorted_set.from_sequential(cmp,keys);
}));

/** @this {Function} */
(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$lang$applyTo = (function (seq89101){
var G__89102 = cljs.core.first(seq89101);
var seq89101__$1 = cljs.core.next(seq89101);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89102,seq89101__$1);
}));

(me.tonsky.persistent_sorted_set.sorted_set_by.cljs$lang$maxFixedArity = (1));

me.tonsky.persistent_sorted_set.sorted_set = (function me$tonsky$persistent_sorted_set$sorted_set(var_args){
var G__89118 = arguments.length;
switch (G__89118) {
case 0:
return me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___89452 = arguments.length;
var i__5727__auto___89453 = (0);
while(true){
if((i__5727__auto___89453 < len__5726__auto___89452)){
args_arr__5751__auto__.push((arguments[i__5727__auto___89453]));

var G__89455 = (i__5727__auto___89453 + (1));
i__5727__auto___89453 = G__89455;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((0) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((0)),(0),null)):null);
return me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$variadic(argseq__5752__auto__);

}
});

(me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$0 = (function (){
return me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
}));

(me.tonsky.persistent_sorted_set.sorted_set.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return me.tonsky.persistent_sorted_set.from_sequential(cljs.core.compare,keys);
}));

/** @this {Function} */
(me.tonsky.persistent_sorted_set.sorted_set.cljs$lang$applyTo = (function (seq89115){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq89115));
}));

(me.tonsky.persistent_sorted_set.sorted_set.cljs$lang$maxFixedArity = (0));

me.tonsky.persistent_sorted_set.settings = (function me$tonsky$persistent_sorted_set$settings(set){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"branching-factor","branching-factor",1903198601),me.tonsky.persistent_sorted_set.max_len,new cljs.core.Keyword(null,"ref-type","ref-type",-1367328851),new cljs.core.Keyword(null,"strong","strong",269529000)], null);
});

//# sourceMappingURL=me.tonsky.persistent_sorted_set.js.map
