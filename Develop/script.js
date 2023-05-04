// Assignment code here
function generatePassword() {
  console.log("Generate Password button clicked")

    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var numbersChar = "1234567890";
    var specialChar = "!@#$%^&*()-_+={}[],.?/:;\|"
  
    var passwordLength = 
  //lowercase, uppercase, numbers, special characters
  //validate the input
  //display generated password on page
return "Password Generated";
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
