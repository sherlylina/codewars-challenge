/*reverse Words
<8 kyu>

reverseWords("The greatest victory is that which no battle")
output : "battle no requires which that is victory greatest The"
*/


function reverseWords(str){
    var array = str.split(' ')
    var temp = []
    for(i=array.length-1; i >= 0; i--){
      temp.push(array[i])
    }
    return temp.join(' ')
   }
console.log(reverseWords('sherly anjelina'))


/* cara cepat :
   function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
*/
  