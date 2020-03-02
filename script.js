//declare and initialise variables
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  confirmLowercase,
  confirmUppercase,
  confirmSpecialChar,
  confirmNumbers,
  passwordLength,
  userPassword,
  passwordCharSet;

//function to generate user password
function generatePassword(){
  userPassword = "";
  passwordCharSet ="";

  //set the length of the password and validate the length input
  passwordLength = prompt("Please enter your password length between 8 - 128 characters")
  if(passwordLength === null){
    return;
  }
  while( isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Not valid, please enter valid number and length");
    passwordLength = prompt("Please enter your password length between 8 - 128 characters");
  }

  //confirming inclusion of lowercase characters into the password
  confirmLowercase = confirm("Include lowercase characters?")
  if(confirmLowercase){passwordCharSet += lowercase;}
  //confirming inclusion of uppercase characters into the password
  confirmUppercase = confirm("Include uppercase characters?")
  if(confirmUppercase){passwordCharSet += uppercase;}
  //confirming inclusion of special characters into the password
  confirmSpecialChar = confirm("Include special characters?")
  if(confirmSpecialChar){passwordCharSet += specialChars}
  //confirming inclusion of number characters into the password
  confirmNumbers = confirm("Include numbers characters?")
  if(confirmNumbers){passwordCharSet += numbers}

  // loop to generate the password depends on the character sets that the user choose
  for(let i = 0; i < passwordLength; i++){
    userPassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length));
  }

  //validate user to choose at least one characters set option
  if(userPassword == ""){
    alert("Please select at least one option to be included in the password!")
  } 
  else{return userPassword;}
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
