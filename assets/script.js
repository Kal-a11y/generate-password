// Assignment code here

//Acceptance criteria
  //first create a function called generatePassword().

  //Ask user for length of password between 1 - 128 characters

  //Ask the user what criteria they want to use (Add uppercase letters, lowercase letters, numeric and special characters)

  //add the criteria to the generate password

  //have the generated password display on the page

let criteriaUsed = [];
let passwordLength = 0;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letters = alphabet.split("");
let uppercaseLetters = letters.map(letter => letter.toUpperCase());

let getNum = function(){

}

let getPasswordCriteria = function(){
  
}

let checkPasswordLength = function(){

}

let generatePassword = function(){
  
}

writePassword();
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
