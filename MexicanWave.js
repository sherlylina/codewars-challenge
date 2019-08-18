function wave(string){
 var splitString = string.split('')
 var array = []
 for(i=0; i <splitString.length ; i++){
   if(splitString[i] != ' '){
     splitString[i] = splitString[i].toUpperCase()
     splitString = splitString.join('')
     array.push(splitString)
     splitString = string.split('')
   }
 }
return array
}


console.log(wave('nhhat'))