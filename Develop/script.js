// Select the generate button element from the DOM
var generateBtn = document.querySelector("#generate");

// Define arrays for different character sets
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?'];
var numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// Initialize variables for character set, password, password length, and user choices
var characterSet = [];
var password = '';
var passwordLength = +prompt('Please provide a password length');
var wantsLowercase = confirm('Include lowercase characters?');
var wantsUppercase = confirm('Include uppercase characters?');
var wantsNumbers = confirm('Include numbers?');
var wantsSpecialCharacters = confirm('Include special characters?');

// Select the password text box element from the DOM
var textBox = document.querySelector('#password');

// Function to generate the password
function generatePassword() {
  // Reset password and characterSet before generating a new password
  password = '';
  characterSet = [];

  // Check user choices and add respective character sets to the main characterSet
  if (wantsLowercase) {
    characterSet = characterSet.concat(lowercase);
  }
  if (wantsUppercase) {
    characterSet = characterSet.concat(uppercase);
  }
  if (wantsNumbers) {
    characterSet = characterSet.concat(numbers);
  }
  if (wantsSpecialCharacters) {
    characterSet = characterSet.concat(specialCharacters);
  }

  // Generate the password by randomly selecting characters from the characterSet
  for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[ranIndex];
  }

  // Set the value of the textarea to the generated password
  textBox.value = password;
}

// Add an event listener to the generate button to call the generatePassword function when clicked
generateBtn.addEventListener("click", generatePassword);


