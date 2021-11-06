// Add event listener to generate button
generate.addEventListener("click", writePassword);

//special characters for function created 
const specialCharacters = "!@#$%^&*()"
const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//prompts for criteria for generating password
function generatePassword() {
  var passwordLength = prompt("Enter the number of characters you want for your new password. It must be more than 12 but not less than 128!");

  // Conditional Recursive Function Call
  if (passwordLength === "" || passwordLength === null) {
  window.alert("You need to provide a valid answer! Please try again.");
  return generatePassword();
  }

  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");

  //minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;

  //empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimimUpperCases = "";
  var minimumSpecialCharacters = "";

  // Generator functions**
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 +48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 +97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

//checks to make sure user selected ok for all and uses empty minmums from above

if (numbers === true) {
  minimumNumbers = functionArray.getNumbers();
  minimumCount++;

}

if (lowerCases === true) {
  minimumLowerCases = functionArray.getLowerCases();
  minimumCount++;
}

if (upperCases === true) {
  minimimUpperCases = functionArray.getUpperCases();
}

if (special === true) {
  minimumSpecialCharacters = functionArray.getSpecialCharacters();
  minimumCount++;
}

//empty string variable for the loop below 
var randomPasswordGenerated = "";

//loop getting random characters 
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    
    randomPasswordGenerated += randomNumberPicked;
}

//to make sure characters are added to the password
randomPasswordGenerated += minimumNumbers;
randomPasswordGenerated += minimumLowerCases;
randomPasswordGenerated += minimumUpperCases;
randomPasswordGenerated += minimumSpecialCharacters;

return randomPasswordGenerated;
}


