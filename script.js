// Declare items 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~"]
var joinedArray;
var generate = document.querySelector("#generate");
var userPasswordString = "password";
var userLength;
var userCharacters;
var userCharactersLower;
var userCharactersUpper;
var userCharactersNumber;
var userCharactersSpecial;
var userPasswordLength;
var finalPassword = "";


// Prompts and alerts
generate.addEventListener("click", function(){

  userLength = prompt("How many characters do you want your password to have? Type a number from 8-128");
      if (userLength<8){
          alert("Password too short");
          prompt("How many characters do you want your password to have? Type a number from 8-128");
      }
      else if (userLength>128){
          alert("Password too long");
          prompt("How many characters do you want your password to have? Type a number from 8-128");
      } 
      else {
          console.log (userPasswordString = [userLength]);
          alert("Your password will have " + userLength + " characters.");
          passwordLength();
      }

      userCharactersLower = confirm("Do you want lower case letters?");  
      userCharactersUpper = confirm("Do you want upper case letters?");
      userCharactersNumber = confirm("Do you want numbers?");
      userCharactersSpecial = confirm("Do you want special characters?");
          
      if (userCharactersLower || userCharactersUpper || userCharactersNumber || userCharactersSpecial === true) {
          alert("Your Password is being generated");
          selectArray();
          setPassword();
      }
      else{
           alert("You must select an option");
          userCharactersLower = confirm("Do you want lower case letters?");  
          userCharactersUpper = confirm("Do you want upper case letters?");
          userCharactersNumber = confirm("Do you want numbers?");
          userCharactersSpecial = confirm("Do you want special characters?");   
        }   
    });
        
    
function passwordLength (){userPasswordLength = parseInt(userLength);
}

function selectArray () {
  

  if (userCharactersLower && !userCharactersUpper && !userCharactersNumber && !userCharactersSpecial) {  
      for (var i = 0; i < userPasswordLength; i++){
          finalPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && userCharactersUpper && !userCharactersNumber && !userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(upperCase);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && userCharactersUpper && userCharactersNumber && !userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(upperCase, numbers);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && userCharactersUpper && !userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(upperCase, special);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && userCharactersUpper && userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(upperCase, numbers, special);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && !userCharactersUpper && userCharactersNumber && !userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(numbers);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && !userCharactersUpper && userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(numbers, special);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (userCharactersLower && !userCharactersUpper && !userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = lowerCase.concat(special);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (!userCharactersLower && userCharactersUpper && !userCharactersNumber && !userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          finalPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (!userCharactersLower && userCharactersUpper  && userCharactersNumber  && !userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = upperCase.concat(numbers);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (!userCharactersLower && userCharactersUpper && userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = upperCase.concat(numbers, special);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (!userCharactersLower && !userCharactersUpper && userCharactersNumber && !userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          finalPassword += numbers[Math.floor(Math.random() * numbers.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (!userCharactersLower && !userCharactersUpper && userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          var joinedArray = numbers.concat(special);
          finalPassword += joinedArray[Math.floor(Math.random() * joinedArray.length)];
          console.log("finalPassword", finalPassword);
      }
  } else if (!userCharactersLower && !userCharactersUpper && !userCharactersNumber && userCharactersSpecial) {
      for (var i = 0; i < userPasswordLength; i++){
          finalPassword += special[Math.floor(Math.random() * special.length)];
          console.log("finalPassword", finalPassword);
      }
  }    
}
  
// addes generated password to text area
function setPassword (){
  document.getElementById("password").innerHTML = finalPassword;
}
