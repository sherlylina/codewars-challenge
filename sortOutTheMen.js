/* SORT MEN FROM BOYS 
   -7KYU-
   MEN = EVENS
   BOYS = ODDS
   NOTE = EVENS SHOULD EXCUTE FIRST AND THEN ODDS
*/

function menFromBoys(arr){
    let evens = []
    let odds = []
for( let i= 0; i < arr.length; i++){
 if(evens.indexOf(arr[i]) === -1 && arr[i]%2 == 0){
   evens.push(arr[i])
 }
}
var flag = true
while(flag){
  flag = false
 for(let k= 0; k < evens.length ; k++){
  if(evens[k] > evens[k+1]){
    var temp = evens[k]
    evens[k] = evens[k+1]
    evens[k+1] = temp
    flag = true
  }
 }
}
for( let j= 0; j < arr.length; j++){
  if(odds.indexOf(arr[j]) === -1 && arr[j] % 2 != 0){
    odds.push(arr[j])
  }
 }
 var flag1 = true
 while(flag1){
   flag1 = false
  for(let l= 0; l < odds.length ; l++){
   if(odds[l] < odds[l+1]){
     var temp = odds[l]
     odds[l] = odds[l+1]
     odds[l+1] = temp
     flag1 = true
   }
  }
 }
 let result = evens.concat(odds)
 return result
}

console.log(menFromBoys([49,818,-282,900,928,281,-282,-1]))