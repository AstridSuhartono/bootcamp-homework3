var clipboard = new Clipboard('.copy')
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789",
  punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  /* lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  punctuationInput = document.getElementById("punctuation"),
  numbersInput = document.getElementById("numbers"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("pass-field"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"), */
  confirmLowercase,
  confirmUppercase,
  confirmSpecialChar,
  confirmNumber,
  confirmLength,
  passwordLength,
  userPassword,
  passwordCharSet;

  function generatePassword(){
    userPassword = "";
    passwordCharSet ="";
    //set the length of the password and validate the length input
    confirmlength = Number(prompt("Please enter you password length between 8 - 128 characters"))
    while (confirmlength != isNaN || confirmLength < 8 || confirmLength > 128 || confirmLength == null){
      alert("Not valid, please enter valid number and length")
      confirmlength = Number(prompt("Please enter you password length between 8 - 128 characters"))
    }
    //
    confirmLowercase = confirm("Include lowercase characters?")

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
