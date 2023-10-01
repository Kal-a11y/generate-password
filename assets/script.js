// Assignment code here

//Acceptance criteria
  //first create a function called generatePassword().

  //Ask user for length of password between 1 - 128 characters

  //Ask the user what criteria they want to use (Add uppercase letters, lowercase letters, numeric and special characters)

  //add the criteria to the generate password

  //have the generated password display on the page

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
