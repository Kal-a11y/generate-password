// Assignment code here

//Acceptance criteria
  //first create a function called generatePassword().

  //Ask user for length of password between 1 - 128 characters

  //Ask the user what criteria they want to use (Add uppercase letters, lowercase letters, numeric and special characters)

  //add the criteria to the generate password

  //have the generated password display on the page

//Base Variables
let criteriaUsed = [];
let passwordLength = 0;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letters = alphabet.split("");
let uppercaseLetters = letters.map(letter => letter.toUpperCase());
let specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
specialCharacters = specialCharacters.split("");
let numbers = '0123456789';
numbers = numbers.split("");


//Get password length number
let getNum = function(){
  num = window.prompt("Choose password length. (min: 8 max: 128)");
  num = Number(num);

  if (num >= 8 && num <= 128){
    return num;
  }else{
    window.alert("Invalid input")
    return getNum();
  }
}

//Set criteria to be used
let getPasswordCriteria = function(){
  let lowercaseLetterAC = window.confirm('Would you like lowercase letters in your password?');
  if (lowercaseLetterAC){
    criteriaUsed.push(letters);
  }

  let uppercaseLetterAC = window.confirm('Would you like uppercase letters in your password?');
  if (uppercaseLetterAC){
    criteriaUsed.push(uppercaseLetters);
  }

  let specialCharacterAC = window.confirm('Would you like special characters in your password?');
  if (specialCharacterAC){
    criteriaUsed.push(specialCharacters);
  }

  let numbersAC = window.confirm('Would you like numeric characters in your password?');
  if (numbersAC){
    criteriaUsed.push(numbers);
  }

  if (criteriaUsed.length === 0){
    window.alert("You must choose at least 1 criteria.");
    getPasswordCriteria();
  }
  
}

//Create password form length and criteria
let generatePassword = function(){
  password = "";
  passwordLength = getNum();
  getPasswordCriteria();

  //Create each password character
  for (let count = 0; count < passwordLength; count++){
    let index = Math.floor(Math.random() * criteriaUsed.length);
    let currentCharacter = criteriaUsed[index];

    //Get nested array item 
    if (currentCharacter === specialCharacters){
      currentCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }else if (currentCharacter === letters){
      currentCharacter = letters[Math.floor(Math.random() * letters.length)];
    }else if (currentCharacter === uppercaseLetters){
      currentCharacter = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }else{
      currentCharacter = numbers[Math.floor(Math.random() * numbers.length)];
    }
    password = password.concat(currentCharacter);
  }

  //Reset password for reuse
  criteriaUsed = [];
  passwordLength = 0;

  return password;
}


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
