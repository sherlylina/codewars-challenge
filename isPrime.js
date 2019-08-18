function isPrime (number) {
//  if(number == 1 || number == 0){
//    return false
//  }
for(i=2 ; i <= number ; i++){
  if(number == i ){
    return true
  }
  else if(number% i == 0 ){
    return false
  }
  }
}
  
  // TEST CASES
  console.log(isPrime(3)); // true
  console.log(isPrime(10)); // true
  console.log(isPrime(6)); // false
  console.log(isPrime(23)); // true
  console.log(isPrime(33)); 