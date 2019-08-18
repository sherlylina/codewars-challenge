/*Diberikan sebuah function yang menerima parameter array multidimensi, buatlah sebuah program JavaScript 
untuk mengubah input menjadi format array of objects seperti di contoh.
function convert (data) {
  // Your code here
}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/

var result = []
function convert (data) {
for(i=0 ; i < data.length ; i++){
 var obj = {}
 obj.id = data[i][0]
 obj.firstName = data[i][1]
 obj.lastName = data[i][2]
 obj.email = data[i][3]
 result.push(obj)
 }
 return result
}

console.log(convert([
    [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
    [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
  ]));

