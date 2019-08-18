function findChildren(santasList, children) {
  var array = []
  santasList = santasList.sort()
  children = children.sort()
  for(i=0; i < santasList.length ; i++){
    for(j=0; j < children.length ; j++){
     if(santasList[i]== children[j]){
         array.push(children[j])
     }
    }
  }
 return array
}


console.log(findChildren(["Jason", "Jackson", "Jordan", "Johnny"], ["Jason", "Jordan", "Jennifer"]))



// belum solve ke semua all test