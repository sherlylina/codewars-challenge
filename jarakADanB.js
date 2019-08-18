// function threeStepsAB(text){
// var temp = false
// for(i=0;i<text.length;i++){
//   var count = 0
//  if(text[i]=='a'||text[i]=='b'){
//  for(j=i+1; j<text.length;j++){
//   if(text[j] != 'b'&& text[j] != 'a'){
//     count++
//   }
//   else if(text[j] == 'b'|| text[j]=='a'){
//     if(count== 3){
//     return true
//     }
//     else if(count==0){
//      for(k=j+1; k < text.length ; k++){
//       if(text[k] != 'a' || text[k] != 'b'){
//           count++
//       }
//       else if(text[k] == 'a'){
//         if(count== 3){
//          return true
//         }
//         else{
//           return false
//         }
//       }
//      }
//     }
//    }
//      else{
//         return false
//      }
//   }
//  }
//  else{
//     temp= false
//    }
//  }
// return temp
// }

function threeStepsAB (text) {
for(i=0; i< text.length; i++){
  if(text[i] === 'a'){
    if(text[i+4] === 'b'){
     return true
    }
  }
  else if(text[i]=== 'b'){
    if(text[i+4] === 'a'){
     return true
    }
  }
  
}
 return false
}


console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat'))