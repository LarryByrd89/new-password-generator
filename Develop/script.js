// Assignment code here
function generatePassword() {
  console.log("Generate Password button clicked")

    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var numbersChar = "1234567890";
    var specialChar = "!@#$%^&*()-_+={}[],.?/:;\|"
  
    var passwordLength = passwordLength < 8 || passwordLength > 128 

    var useUppercase = confirm("Do you wan to include uppercase characters?");
    var useLowercase = confirm("Do you want to include lowercase characters?");
    var useNumbers = confirm("Do you want to include numeric characters?");
    var useSpecial = confirm("Do you want to include special characters?");
  
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
