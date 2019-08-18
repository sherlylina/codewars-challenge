function multiples(m, n){
    var array = []
    var count = 0
    for(i=0 ; i < m ; i++){
     var count = count + n
     array.push(count)
    }
   return array
   }

console.log(multiples(4,5))