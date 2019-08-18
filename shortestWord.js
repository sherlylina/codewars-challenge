function findShort(s){
 var array = s.split(' ')
 var result = s.length
 for(i=0 ; i < array.length ; i++){
     if(array[i].length < result){
         result = array[i].length
        console.log(result)
     }
 }
 return result
}







console.log(findShort("Mine"))