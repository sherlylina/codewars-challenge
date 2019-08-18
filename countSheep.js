/*Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers. 
<8 kyu>

*/

var countSheep = function (num){
    var temp = ""
for(i=1 ; i <= num; i++){
  temp = temp + i + " sheep" + ". . ."
 }
return temp
}

console.log(countSheep(3))