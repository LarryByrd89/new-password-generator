// Assignment code here
function generatePassword() {
  console.log("Generate Password button clicked")

    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var numbersChar = "1234567890";
    var specialChar = "!@#$%^&*()-_+={}[],.?/:;\|";

  var passwordLength = Math.floor(Math.random() * (121 - 8)) + 8;

 // Append all character sets to the selected array.
 selectedArray = selectedArray.concat(lowerCaseSet, upperCaseSet, numSet, specialSet);

 var passwordString = "";
 for (var i = 0; i < passwordLength; i++) {
   passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
 }

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