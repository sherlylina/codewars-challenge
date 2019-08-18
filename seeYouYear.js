/* See You Next Year 
   2000 menjadi 2013
   1123 menjadi 1203
*/

function nextHappyYear(year){
    let unique = false;                              
    while (!unique) {
      year++;
      if (check_unique(year) === true)
      unique = true;
    }
    return year;
  }
  
  function check_unique(str) {
    str = str.toString(); // '2000'
    let unq = []; //[2,0]
     
    for (let i=0; i<str.length; i++) { 
      if (!unq.includes(str.charAt(i))) unq.push(str.charAt(i));
    }
    if (unq.length !== str.length) return false;
    else return true;// true
  }

  console.log(nextHappyYear(2000))