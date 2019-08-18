/* SUM OF BEACH
< KYU 7 >
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
*/

// cara regex 
// const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/ig) || []).length

function sumOfABeach(beach) {
  let result = 0;
  beach = beach.toLowerCase();
  let elements = ["sand", "water", "fish", "sun"];
  for (let i = 0; i < 4; i++) {
      while (beach.includes(elements[i])) {
          beach = beach.replace(elements[i], '');
          result++;
      }
  }
  return result;
}


console.log(sumOfABeach("gOfIshsunesunFiSh"))