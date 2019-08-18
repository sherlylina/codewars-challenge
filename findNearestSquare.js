/* Find Nearest Square Number
<8 kyu>
Test.describe("Basic tests",() => {
  Test.assertEquals(nearestSq(1),1)
  Test.assertEquals(nearestSq(2),1)
  Test.assertEquals(nearestSq(10),9)
  Test.assertEquals(nearestSq(111),121)
  Test.assertEquals(nearestSq(9999),10000)
  
}); */

function nearestSq(n){
    let a = Math.round(Math.sqrt(n));
    return a*a;
}

 console.log(nearestSq(9))