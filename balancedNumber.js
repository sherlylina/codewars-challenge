function balancedNum(number){
number = Math.round(number)
var stringNumber = number.toString()
var array = stringNumber.split('')
var hasil1 = array
var hasil2 = array
var mid = Math.floor(array.length/2);
if(array.length % 2 == 0){
  hasil1 = array.slice(0,mid-1)
  hasil2 = array.slice(mid+1,array.length)
}

 else if(array.length % 2 == 1){
  hasil1 = array.slice(0,mid)
  hasil2 = array.slice(mid+1,array.length)
 }

 var result1 = 0
 for(k=0 ; k < hasil1.length ; k++){
   result1 = result1 + parseInt(hasil1[k])
 }
 var result2 = 0
 for(l=0 ; l < hasil2.length ; l++){
   result2 = result2 + parseInt(hasil2[l])
 }
 if(result1 == result2){
   return "Balanced"
 }
 else{
   return "Not Balanced"
 }
}

 console.log(balancedNum(56239814))