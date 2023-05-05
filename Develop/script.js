// Assignment code here
function generatePassword() {
  console.log("Generate Password button clicked")

    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var numbersChar = "1234567890";
    var specialChar = "!@#$%^&*()-_+={}[],.?/:;\|";

    let passwordLength = parseInt(prompt('How many characters do you want in your password? (Enter a number between 8 and 128)'));
  
    
   
    
    const includeLowercase = confirm('Do you want to include lowercase letters?');
    const includeUppercase = confirm('Do you want to include uppercase letters?');
    const includeNumeric = confirm('Do you want to include numbers?');
    const includeSpecial = confirm('Do you want to include special characters?');
    
    
    if (includeLowercase) {
      possibleChars = possibleChars.concat(lowercaseChars);
    }
    if (includeUppercase) {
      possibleChars = possibleChars.concat(uppercaseChars);
    }
    if (includeNumeric) {
      possibleChars = possibleChars.concat(numericChars);
    }
    if (includeSpecial) {
      possibleChars = possibleChars.concat(specialChars);
    }
    
    
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
    }
    
    for (let x = 0; x < passwordLength; x++) {
        let randomList = randomListCharacter(userChoices);
        let randomCharacter = randomListCharacter (randomList);
        generatePassword += randomCharacter;
    }
    return password;
  }
  
  alert('Your new password is: ' + generatePassword());

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