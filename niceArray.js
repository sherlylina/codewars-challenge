/*A Nice array is defined to be an array where for 
 every value n in the array, there is also an element n-1 
 or n+1 in the array.
 <7 kyu>
*/
// function isNice(arr){
//  var one= Math.abs(arr[0]-arr[1])
//  var two = Math.abs(arr[2]-arr[3])
//  var three = Math.abs(arr[0]-arr[3])
//  var four = Math.abs(arr[1]-arr[2])
//  var five = Math.abs(arr[0]-arr[2])
//  var six = Math.abs(arr[1]-arr[3])

//  if(one == 1 && two == 1){
//     return true
//  }
//  else if (three == 1 && four == 1){
//     return true
//  }
//  else if ( five == 1 && six == 1){
//     return true
//  }
//  else{
//     return false
//  }
// }


function isNice(arr){
    var counter = 0
    for(var i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) counter ++
    }
    if (counter == arr.length && arr.length != 0) return true
    return false
}
console.log(isNice([8,9,10,11]))