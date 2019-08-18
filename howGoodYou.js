function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints)
  var count = 0
  for(i=0 ; i < classPoints.length; i++){
   var count = count + classPoints[i]
  }

  var average = count/classPoints.length
  if(yourPoints > average){
  return true}
  else{
  return false }
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))