/* Exes and Ohs
<7 kyu>
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str){
 var x = [];
 var o = [];
 for(i=0; i < str.length; i++){
  if(str[i]=== "x" || str[i]=== "X"){
    x.push(str[i])
  }
  else if((str[i]=== "o" || str[i]=== "O")){
    o.push(str[i])
  }
 }
 if(x.length === o.length){
  return true
 }
 else if(x.length == 0 && o.length == 0){
  return true
 }
 else{
  return false
 }
}

console.log(XO("OOXX"))

/* CARA CEPAT:
 function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/
