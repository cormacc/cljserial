goog.provide('zprint.util');
/**
 * Do a simple dissoc-in for two levels.  Does not remove the
 *   second map if it is empty.
 */
zprint.util.dissoc_two = (function zprint$util$dissoc_two(m,p__64345){
var vec__64347 = p__64345;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64347,(0),null);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64347,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k1),k2));
});
/**
 * Given two option maps, merge any debugging info from the second
 *   map into the first map.
 */
zprint.util.dbg_s_merge = (function zprint$util$dbg_s_merge(map1,map2){
var map1__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(map2))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map1,new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(map1),new cljs.core.Keyword(null,"dbg-s","dbg-s",986366408).cljs$core$IFn$_invoke$arity$1(map2))):map1);
var map1__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(map2))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map1__$1,new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(map1__$1),new cljs.core.Keyword(null,"all","all",892129742))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dbg?","dbg?",1845730771).cljs$core$IFn$_invoke$arity$1(map2),new cljs.core.Keyword(null,"all","all",892129742)))))?new cljs.core.Keyword(null,"all","all",892129742):true)):map1__$1);
return map1__$2;
});
/**
 * Return the absolute value of a number.
 */
zprint.util.local_abs = (function zprint$util$local_abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
/**
 * Return the size of an sexpr, essentially the number of characters
 *   in its string representation.  If the sexpr is already a string,
 *   return the number of characters in the string plus 2 to account
 *   for the double quotes, unless no-string-adj? is non-nil.  In that
 *   case, simply return the character count of the string.  If sexpr
 *   is nil, return nil.
 */
zprint.util.size = (function zprint$util$size(var_args){
var G__64366 = arguments.length;
switch (G__64366) {
case 2:
return zprint.util.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.util.size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.util.size.cljs$core$IFn$_invoke$arity$2 = (function (sexpr,no_string_adj_QMARK_){
if(cljs.core.truth_(sexpr)){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr);
var s__$1 = ((clojure.string.starts_with_QMARK_(s,":zprint.core/"))?clojure.string.replace(s,":zprint.core/","::"):((clojure.string.starts_with_QMARK_(s,":clojure.core/"))?clojure.string.replace(s,":clojure.core/","::"):s
));
var s_count = ((s__$1).length);
if(((cljs.core.not(no_string_adj_QMARK_)) && (typeof sexpr === 'string'))){
return (s_count + (2));
} else {
return s_count;
}
} else {
return null;
}
}));

(zprint.util.size.cljs$core$IFn$_invoke$arity$1 = (function (sexpr){
return zprint.util.size.cljs$core$IFn$_invoke$arity$2(sexpr,null);
}));

(zprint.util.size.cljs$lang$maxFixedArity = 2);

/**
 * Find the median of a series of numbers.
 */
zprint.util.median = (function zprint$util$median(coll){
var sorted_coll = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var len = cljs.core.count(coll);
var middle = (len / (2));
if(cljs.core.odd_QMARK_(len)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_coll,middle);
} else {
var lower = (middle - (1));
var lower_middle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_coll,lower);
var upper_middle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted_coll,middle);
return ((lower_middle + upper_middle) / (2));
}
});
/**
 * Find the mean of a series of numbers.
 */
zprint.util.mean = (function zprint$util$mean(coll){
if((!(cljs.core.empty_QMARK_(coll)))){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll) / cljs.core.count(coll));
} else {
return null;
}
});
/**
 * Return the percentage of numbers greater than n.
 */
zprint.util.percent_gt_n = (function zprint$util$percent_gt_n(n,coll){
if((!(cljs.core.empty_QMARK_(coll)))){
var count_gt = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cnt,m){
if((m > n)){
return (cnt + (1));
} else {
return cnt;
}
}),(0),coll);
var percentage = (((count_gt / cljs.core.count(coll)) * (100)) | (0));
return percentage;
} else {
return null;
}
});
/**
 * Return the variance of a sequence of numbers. Ignore nil values.
 *   Return the variance or nil if there are no numbers.
 */
zprint.util.variance = (function zprint$util$variance(coll){
var coll__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,coll);
var len = cljs.core.count(coll__$1);
if((!((len === (0))))){
var mean = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll__$1) / len);
var dev_from_mean = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._,mean),coll__$1);
var sq_dev_from_mean = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64385_SHARP_){
return (p1__64385_SHARP_ * p1__64385_SHARP_);
}),dev_from_mean);
var variance = ((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,sq_dev_from_mean) / len) | (0));
return variance;
} else {
return null;
}
});
/**
 * Given a sequence of numbers, return the indices of all of the
 *   numbers that are equal to the maximum number.  Returns: 
 *   [max-number [indicies-of-max-number] length-of-sequence]
 */
zprint.util.find_max = (function zprint$util$find_max(coll){
var indicies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__64399,n){
var vec__64401 = p__64399;
var max_so_far = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64401,(0),null);
var indicies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64401,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64401,(2),null);
if((n == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_so_far,indicies,(index + (1))], null);
} else {
if((n > max_so_far)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),(index + (1))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,max_so_far)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_so_far,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indicies,index),(index + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_so_far,indicies,(index + (1))], null);

}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0)], null),coll);
return indicies;
});
/**
 * Given a vector, set specific indicies to nil.
 */
zprint.util.remove_indicies = (function zprint$util$remove_indicies(indicies,coll){
if(cljs.core.truth_(indicies)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,coll,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(indicies,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
} else {
return coll;
}
});
/**
 * Given a vector of numbers, remove every instance of the maximum number 
 *   from the vector and replace it with nil, unless it would remove more 
 *   than half of the numbers in the vector, in which case return the vector
 *   unchanged. Returns: [indicies-removed vector-with-max-removed]
 */
zprint.util.remove_max_not_half = (function zprint$util$remove_max_not_half(coll_vec){
var vec__64413 = zprint.util.find_max(coll_vec);
var max_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(0),null);
var indicies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(1),null);
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64413,(2),null);
if((cljs.core.count(indicies) > (length / (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,coll_vec], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [indicies,zprint.util.remove_indicies(indicies,coll_vec)], null);
}
});
/**
 * Given a vector of indicies and a vector of vectors (columns), remove 
 *   the specified indicies from the columns by replacing them with nil, starting
 *   at the vector specified by the index.
 */
zprint.util.remove_indicies_from_columns = (function zprint$util$remove_indicies_from_columns(index,indicies,columns){
if((index < cljs.core.count(columns))){
var vec__64429 = cljs.core.split_at(index,columns);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64429,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64429,(1),null);
var beginning__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,beginning);
var end__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,end);
var new_end = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.util.remove_indicies,indicies),end__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(beginning__$1,new_end);
} else {
return columns;
}
});
/**
 * Count the non-nil items in a sequence.
 */
zprint.util.count_non_nil = (function zprint$util$count_non_nil(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cnt,x){
if((x == null)){
return cnt;
} else {
return (cnt + (1));
}
}),(0),coll);
});
/**
 * Given a vector of vectors, where each vector represents the sizes
 *   in a column, find the variance of the column, and if it is too high
 *   remove the largest and then second largest values to see if we can
 *   get it low enough for alignment.  If yes, return the alignment and the
 *   new vector of vectors (where the rows that were not considered for the
 *   successful variance calculation have been removed from all (inc index)
 *   columns).  If no, return nil and the unchanged vector of vectors. 
 *   Returns: [max-width-or-nil columns]
 */
zprint.util.column_width_variance = (function zprint$util$column_width_variance(max_variance,columns,index){
if((index >= cljs.core.count(columns))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);
} else {
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(columns,index);
var beginning_variance = zprint.util.variance(column);
var row_count = zprint.util.count_non_nil(column);
if((beginning_variance == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);
} else {
if((max_variance > beginning_variance)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(zprint.util.find_max(column)),columns], null);
} else {
if((row_count > (2))){
var vec__64458 = zprint.util.remove_max_not_half(column);
var first_indicies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64458,(0),null);
var first_column_wo_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64458,(1),null);
var first_variance = zprint.util.variance(first_column_wo_max);
if((first_variance == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);
} else {
if((max_variance > first_variance)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(zprint.util.find_max(first_column_wo_max)),zprint.util.remove_indicies_from_columns((index + (1)),first_indicies,columns)], null);
} else {
var vec__64468 = zprint.util.remove_max_not_half(first_column_wo_max);
var second_indicies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64468,(0),null);
var second_column_wo_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64468,(1),null);
var second_variance = zprint.util.variance(second_column_wo_max);
if((second_variance == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);
} else {
if(((cljs.core.count(first_indicies) + cljs.core.count(second_indicies)) >= (row_count / (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);
} else {
if((max_variance > second_variance)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(zprint.util.find_max(second_column_wo_max)),zprint.util.remove_indicies_from_columns((index + (1)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(first_indicies,second_indicies),columns)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);

}
}
}

}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,columns], null);

}
}
}
}
});
/**
 * Given a seq and a length, return a vector which contains the
 *   size of every element in the seq and is the length specified.  If
 *   the element is already a string, the size is the number of
 *   characters plus 2 for the surrounding double quotes, unless
 *   no-string-adj? is non-nil, in which case just the character count
 *   of an actual string is used.  If the length is less than the
 *   length of the input seq, then skip the remaining elements.  If
 *   the length is greater than the length of the input seq, fill out
 *   the missing elements with nils, and ensure that the last element
 *   is replaced by a nil (to avoid influencing the spacing of a column
 *   that it doesn't have).
 */
zprint.util.size_and_extend = (function zprint$util$size_and_extend(length,no_string_adj_QMARK_,coll){
var last_good_col = (cljs.core.count(coll) - (1));
var coll__$1 = coll;
var index = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if((index >= length)){
return out;
} else {
var G__64634 = cljs.core.next(coll__$1);
var G__64635 = (index + (1));
var G__64636 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(((index >= last_good_col))?null:zprint.util.size.cljs$core$IFn$_invoke$arity$2(cljs.core.first(coll__$1),no_string_adj_QMARK_)));
coll__$1 = G__64634;
index = G__64635;
out = G__64636;
continue;
}
break;
}
});
/**
 * Given a sequence of seqs, produce a new sequence of seqs where
 *   each element in the seq is replaced by the size of that element.
 *   If the element is already a string, the size is the number of
 *   characters plus 2 for the surrounding double quotes, unless
 *   no-string-adj? is non-nil, in which case just the character count
 *   of an actual string is used.  Do this for all of the elements in
 *   every seq but the last.  In addition, for every seq that is shorter
 *   than the longest one, fill out the missing elements with nils.
 */
zprint.util.size_and_extend_butlast = (function zprint$util$size_and_extend_butlast(var_args){
var G__64494 = arguments.length;
switch (G__64494) {
case 3:
return zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$3 = (function (seq_of_seqs,max_len,no_string_adj_QMARK_){
var len = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,seq_of_seqs)) - (1));
var len__$1 = (cljs.core.truth_(max_len)?(function (){var x__5090__auto__ = max_len;
var y__5091__auto__ = len;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})():len);
var seq_of_sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zprint.util.size_and_extend,len__$1,no_string_adj_QMARK_),seq_of_seqs);
return seq_of_sizes;
}));

(zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$1 = (function (seq_of_seqs){
return zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$3(seq_of_seqs,null,null);
}));

(zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$2 = (function (seq_of_seqs,max_len){
return zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$3(seq_of_seqs,max_len,null);
}));

(zprint.util.size_and_extend_butlast.cljs$lang$maxFixedArity = 3);

/**
 * Given a seq of seqs, create a vector of vectors where every
 *   internal vector contains a series of integers representing the
 *   width of the element in that column across all of the seqs.  The
 *   width for the elements is their string length. Note that the
 *   length of actual strings is increased by two to account for the
 *   double quotes unless no-string-adj? is non-nil, in which case
 *   these routines assume that was already handled.  The various input
 *   seqs do not have to be the same length, and there will be as many
 *   columns as one less than the count of elements in the longest seq
 *   (or number-of-columns if it is specified and less than the count
 *   of the elements in the longest seq).  For seqs which do not extend
 *   to the maximum length, their positions in the column vectors will
 *   be filled with nil.
 */
zprint.util.create_columns = (function zprint$util$create_columns(var_args){
var G__64516 = arguments.length;
switch (G__64516) {
case 3:
return zprint.util.create_columns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return zprint.util.create_columns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.util.create_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.util.create_columns.cljs$core$IFn$_invoke$arity$3 = (function (seq_of_seqs,number_of_columns,no_string_adj_QMARK_){
var seq_of_sizes = zprint.util.size_and_extend_butlast.cljs$core$IFn$_invoke$arity$3(seq_of_seqs,number_of_columns,no_string_adj_QMARK_);
var transpose = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,seq_of_sizes);
return transpose;
}));

(zprint.util.create_columns.cljs$core$IFn$_invoke$arity$1 = (function (seq_of_seqs){
return zprint.util.create_columns.cljs$core$IFn$_invoke$arity$3(seq_of_seqs,null,null);
}));

(zprint.util.create_columns.cljs$core$IFn$_invoke$arity$2 = (function (seq_of_seqs,number_of_columns){
return zprint.util.create_columns.cljs$core$IFn$_invoke$arity$3(seq_of_seqs,number_of_columns,null);
}));

(zprint.util.create_columns.cljs$lang$maxFixedArity = 3);

/**
 * Given a seq-of-seqs which contain elements to justify, return a
 *   vector with the size of the maximum element in each column that
 *   should be used to justify the next column.  Note that the length
 *   of actual strings is increased by two to account for the double
 *   quotes unless no-string-adj? is non-nil, in which case these
 *   routines assume that was already handled.  If number-of-columns
 *   is given, only justify that many columns, else justify all but
 *   the last. Note that if the max-variance is exceeded after having
 *   skipped the largest and second largest in a column, then the return
 *   is nil, signifying that justification is not possible.
 */
zprint.util.column_alignment = (function zprint$util$column_alignment(var_args){
var G__64546 = arguments.length;
switch (G__64546) {
case 4:
return zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$4 = (function (max_variance,seq_of_seqs,number_of_columns,no_string_adj_QMARK_){
var columns = zprint.util.create_columns.cljs$core$IFn$_invoke$arity$3(seq_of_seqs,number_of_columns,no_string_adj_QMARK_);
var max_width_vec = cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__64564,index){
var vec__64565 = p__64564;
var columns__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64565,(0),null);
var max_width_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64565,(1),null);
var vec__64570 = zprint.util.column_width_variance(max_variance,columns__$1,index);
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64570,(0),null);
var new_columns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64570,(1),null);
if(cljs.core.truth_(max_width)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_columns,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(max_width_vec,max_width)], null);
} else {
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [columns__$1,null], null));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [columns,cljs.core.PersistentVector.EMPTY], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(columns))));
return max_width_vec;
}));

(zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$2 = (function (max_variance,seq_of_seqs){
return zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$4(max_variance,seq_of_seqs,null,null);
}));

(zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$3 = (function (max_variance,seq_of_seqs,number_of_columns){
return zprint.util.column_alignment.cljs$core$IFn$_invoke$arity$4(max_variance,seq_of_seqs,number_of_columns,null);
}));

(zprint.util.column_alignment.cljs$lang$maxFixedArity = 4);

/**
 * Given a vector of max-widths from column-alignment, produce a vector
 *   of the cumulative alignment positions for the second through nth columns.
 */
zprint.util.cumulative_alignment = (function zprint$util$cumulative_alignment(max_width_vec){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__64579,column_max_width){
var vec__64580 = p__64579;
var current_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64580,(0),null);
var cumulative_widths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64580,(1),null);
var this_alignment = (current_width + (column_max_width + (1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_alignment,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cumulative_widths,this_alignment)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),max_width_vec));
});

//# sourceMappingURL=zprint.util.js.map
