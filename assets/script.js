// Assignment code here

//Acceptance criteria
  //first create a function called generatePassword().

  //Ask user for length of password between 1 - 128 characters

  //Ask the user what criteria they want to use (Add uppercase letters, lowercase letters, numeric and special characters)

  //add the criteria to the generate password

  //have the generated password display on the page

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letters = alphabet.split("");
let uppercaseLetters = letters.map(letter => letter.toUpperCase());
let specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
specialCharacters = specialCharacters.split("");

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

let getPasswordCriteria = function(){
  lowercaseLetterAC = window.confirm('Would you like lowercase letters in your password?');
  if (lowercaseLetterAC){
    criteriaUsed.push(letters);
  }

  uppercaseLetterAC = window.confirm('Would you like uppercase letters in your password?');
  if (uppercaseLetterAC){
    criteriaUsed.push(uppercaseLetters);
  }

  specialCharacterAC = window.confirm('Would you like special characters in your password?');
  if (specialCharacterAC){
    criteriaUsed.push(specialCharacters);
  }

  
}

let checkPasswordLength = function(){

}

let generatePassword = function(){
  let criteriaUsed = [];
  let passwordLength = 0;
  
  password = "";
  passwordLength = getNum();
  getPasswordCriteria();
  console.log("Final product",criteriaUsed);

  for (let count = 0; count < passwordLength; count++){
    let index = Math.floor(Math.random() * criteriaUsed.length);
    let currentCharacter = criteriaUsed[index];

    if (currentCharacter === specialCharacters){
      currentCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }else if (currentCharacter === letters){
      currentCharacter = letters[Math.floor(Math.random() * letters.length)];
    }else{
      currentCharacter = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }
    password = password.concat(currentCharacter);
  }

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
