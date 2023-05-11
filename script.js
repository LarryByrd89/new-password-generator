// Assignment code here
function generatePassword() {
  console.log("Generate Password button clicked")

    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split("")
    var numbersChar = "1234567890".split("")
    var specialChar = "!@#$%^&*()-_+={}[],.?/:;\|".split("")

    let passwordLength = parseInt(prompt('How many characters do you want in your password? (Enter a number between 8 and 128)'));
  
    
    const includeLowercase = confirm('Do you want to include lowercase letters?');
    const includeUppercase = confirm('Do you want to include uppercase letters?');
    const includeNumeric = confirm('Do you want to include numbers?');
    const includeSpecial = confirm('Do you want to include special characters?');
    
    var possibleChar = []
    if (includeLowercase) {
      possibleChar = possibleChar.concat(lowercaseChar);
    }
    if (includeUppercase) {
      possibleChar = possibleChar.concat(uppercaseChar);
    }
    if (includeNumeric) {
      possibleChar = possibleChar.concat(numbersChar);
    }
    if (includeSpecial) {
      possibleChar = possibleChar.concat(specialChar);
    }
    
    
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * possibleChar.length);
      var computerChoice = possibleChar[index];
      password = password.concat(computerChoice)
    }
    
    // for (let x = 0; x < passwordLength; x++) {
    //     let randomList = randomListCharacter(userChoices);
    //     let randomCharacter = randomListCharacter (randomList);
    //     generatePassword += randomCharacter;
    // }
    return password;
  }
  
  // alert('Your new password is: ' + generatePassword());

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