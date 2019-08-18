/*The format
A function passing two strings, searching for one (the name) within the other. ``function nameInStr(str, name){ return true || false }``
Examples
nameInStr('Across the rivers', 'chris') --> true
            ^      ^  ^^   ^
            c      h  ri   s

Contains all of the letters in 'chris', in order.
*/

function nameInStr(str, name){
  var newArr = []; //true,true,true,true,false
  name = name.toLowerCase();
  str = str.toLowerCase();
  for(var i=0; i < name.length; i++){ // 0(c),1(h),2(r),3(i)
      if (str.includes(name[i])){
        newArr.push(true);
        str = str.slice(str.indexOf(name[i])+1); //p
        //crew that boaerds the ship 
        //ds the ship 
        console.log(str)
      }else{
        newArr.push(false);
      }
  } 
  return newArr.reduce((a,b) => a && b); // b = newArr
                                         // a = var penampungnya dari method reduce 
} 


 console.log(nameInStr('Across the rivers', 'chris'))
 console.log(nameInStr('Next to a lake', 'chris'))
 console.log(nameInStr('Under a sea', 'chris'))
console.log(nameInStr('A crew that boards the ship', 'chris'))
 console.log(nameInStr('A live son', 'Allison'))
