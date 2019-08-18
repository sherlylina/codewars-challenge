/* Diberikan sebuah function yang menerima parameter 
 berupa array, buatlah sebuah program JavaScript untuk grouping
 score yang lulus dan yang gagal. (Gagal jika score < 75)
 <hacktiv 8>
 function grouping (scores) {
}
console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

console.log(grouping([]));
*/

var obj = {
 pass: [],
 fail: []
}
function grouping (scores) {
 for(i=0; i <scores.length ; i++){
 if(scores[i] < 75){
   obj.fail.push(scores[i])
 }
 else{
   obj.pass.push(scores[i])
 }
 }
 return obj
}
console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]))