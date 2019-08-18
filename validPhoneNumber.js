function validPhoneNumber(phoneNumber){ 
 var string1 = phoneNumber.slice(0,5)
 var string2 = phoneNumber.slice(5,9)
 var string3 = phoneNumber.slice(10,phoneNumber.length)
var string4 = phoneNumber.slice(9,10)
 if(string1.length == 5 && string2.length == 4 && string3.length == 4
    && !string2.includes('-')  && !string1.includes('-') && !string3.includes('-') && 
    string4.includes('-')){
     return true
 }
 else{
     return false
 }
}


 console.log(validPhoneNumber("(123) 456-7890"))