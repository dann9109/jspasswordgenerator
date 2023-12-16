// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?'];

// var numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10]

// var characterSet = [];


// var password = ''





// // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }
// // textBox.value = pass;

// var passwordLength = +prompt('Please provide a password length');

// var wantsLowercase = true;
// var wantsUppercase = true;
// var wantsNumbers = true;
// var wantsSpecialCharacters = false;

// var textBox = document.querySelector('form textarea')

// var pass = generatePassword();

// function generatePassword() {


//   // if the user wants lowercase, then we combine the character set with lowercase array
//   if (wantsLowercase) {
//     characterSet = characterSet.concat(lowercase)

//   }
//   if (wantsUppercase) {
//     characterSet = characterSet.concat(uppercase)

//   }
//   if (wantsNumbers) {
//     characterSet = characterSet.concat(numbers)

//   }
//   if (wantsSpecialCharacters) {
//     characterSet = characterSet.concat(specialCharacters)

//   }

//   // console.log(characterSet);

//   for (var count = 0; count < passwordLength; count++) {
//     var ranIndex = Math.floor(Math.random() * characterSet.length);
//     password += characterSet[ranIndex];
//   }

//   return password;
// }
// generateBtn.addEventListener("click", function () {
//   generatePassword();
// });
// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);



// console.log(pass);

var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?'];
var numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10]
var characterSet = [];
var password = ''

var passwordLength = +prompt('Please provide a password length');
var wantsLowercase = true;
var wantsUppercase = true;
var wantsNumbers = true;
var wantsSpecialCharacters = false;

var textBox = document.querySelector('#password');

function generatePassword() {
  // Reset password and characterSet before generating a new password
  password = '';
  characterSet = [];

  if (wantsLowercase) {
    characterSet = characterSet.concat(lowercase)
  }
  if (wantsUppercase) {
    characterSet = characterSet.concat(uppercase)
  }
  if (wantsNumbers) {
    characterSet = characterSet.concat(numbers)
  }
  if (wantsSpecialCharacters) {
    characterSet = characterSet.concat(specialCharacters)
  }

  for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[ranIndex];
  }

  textBox.value = password; // Set the value of the textarea to the generated password
}

generateBtn.addEventListener("click", generatePassword);




