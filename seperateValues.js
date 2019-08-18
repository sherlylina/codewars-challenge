// const wheatFromChaff = (values) => {
//  for(i=0 ; i < values.length ; i++){
//    var flag = true
//    for(j=values.length-1 ; j >= i ; j--){
//      if(Math.sign(values[i]) != -1 && Math.sign(values[j]) == -1 && flag == true){
//         var temp = values[i]
//         values[i] = values[j]
//         values[j] = temp
//         flag = false
      
//      }

//    }

//  }
//  return values
// }
function wheatFromChaff(values) {
  let i = 0, j = values.length - 1;
  
  while (i < j) {
    while (i < j && values[i] < 0)
      i++;
      
    while (i < j && values[j] > 0)
      j--;
      
    if (i < j) {
      let a = values[i];
      values[i] = values[j];
      values[j] = a;
      i++;
      j--;
    }
  }
  
  return values;
    
}


console.log(wheatFromChaff([-25,-48,-29,-25,1,49,-32,-19,-46,1]))
console.log(wheatFromChaff([2,-4,6,-6]))
console.log(wheatFromChaff([7,-3,-10]))
console.log(wheatFromChaff([7,-8,1,-2]))
console.log(wheatFromChaff([8,10,-6,-7,9]))
console.log(wheatFromChaff([-3,4,-10,2,-6]))
console.log(wheatFromChaff([2,-6,-4,1,-8,-2]))