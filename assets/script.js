// Assignment Code
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()-+"

var bank = ''
var newPassword = ''

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
var newPassword = '';

var passwordLength = prompt("Password Length: \n(must be at least 8 characters and no more than 128 characters)");

if (passwordLength < 8) {
  alert("Password Length must be at least 8 characters and no more than 128 characters")
} else if (passwordLength >= 129) { 
  alert("Password Length must be at least 8 characters and no more than 128 characters")
} else if (isNaN(passwordLength)=== true) {
  alert("Please write a number value not a string value")
}
// add confirmation questions if they want specific Characters
var confirmedLowerCase = confirm("Do you want to include Lower Case Characters?")
var confirmUpperCase = confirm("Do you want to include Upper Case Characters?")
var confirmNumbers = confirm("Do you want to include Numbers?")
var confirmSpecialCharacters= confirm("Do you want to include Special Characters?")

// add if statements to check if user says yes or no
if (confirmedLowerCase === true) {
  bank = bank.concat(lowerCaseLetters)
}
if (confirmUpperCase === true) {
  bank = bank.concat(upperCaseLetters)
}
if (confirmNumbers === true) {
  bank = bank.concat(numbers)
}
if (confirmSpecialCharacters === true) {
  bank = bank.concat(specialCharacters) 
}

// Create Function to randomize bank
function randomizeBank (apple) {
  return [Math.floor(Math.random() * apple)]
}

// Add variable that will take place of password
for (var i=0; i<passwordLength; i++) {
  newPassword = newPassword.concat(bank.charAt(randomizeBank(bank.length - 1)))
}

return newPassword
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
