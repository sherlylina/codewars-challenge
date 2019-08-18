function sayang(kamu){
   var str = ''
   for(i= kamu.length-1; i >= 0 ; i--){
      str = str + kamu[i]
   }
   return str
}

console.log(sayang('nhat'))