//Assignment Code 
var specialCharacters = [ '@', '%', '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


var generateBtn = document.querySelector("#generate");
var possiblecharacters = []


function generatePassword() {

    //*Prompt the user for the password criteria
    var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be more than 8 but not more than 128!");
   
    //*length of at least 8 characters and no more than 128 characters - validate the input.
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null || isNaN (passwordLength)) {
      window.alert("You need to provide a valid answer! Please try again.");
      return generatePassword();
    }

    //*Lowercase, uppercase, numbers, special characters
  var numbers = confirm("Do you want numbers in your password?");
  var lowerCases = confirm("Do you want lowercases in your password?");
  var upperCases = confirm("Do you want uppercases in your password?");
  var special = confirm("Do you want special characters in your password?");
  var password = []
  var counter = 0;

  if (numbers) { 
    var random = Math.floor(Math.random() * numericCharacters.length);
    password.push(numericCharacters[random]);
    counter++;
    for (var i = 0; i<numericCharacters.length; i++){
        possiblecharacters.push(numericCharacters[i]);
    }
  }
  if (lowerCases) { 
    var random = Math.floor(Math.random() * lowerCasedCharacters.length);
    password.push(lowerCasedCharacters[random]);
    counter++;
    for (var i = 0; i<lowerCasedCharacters.length; i++){
        possiblecharacters.push(lowerCasedCharacters[i]);
    }
  }
  if (upperCases) { 
    var random = Math.floor(Math.random() * upperCasedCharacters.length);
    password.push(upperCasedCharacters[random]);
    counter++;
    for (var i = 0; i<upperCasedCharacters.length; i++){
        possiblecharacters.push(upperCasedCharacters[i]);
    }
  }
  if (special) { 
    var random = Math.floor(Math.random() * specialCharacters.length);
    password.push(specialCharacters[random]);
    counter++;
    for (var i = 0; i<specialCharacters.length; i++){
        possiblecharacters.push(specialCharacters[i]);
    }
  }

  //console.log(possiblecharacters);

  //3. Generate password based on criteria 
 
      for (var i=0; i<passwordLength - counter; i++) {
        var random = Math.floor(Math.random() * possiblecharacters.length);
      password.push(possiblecharacters[random]);
      }
      return password.join("");

      };

//4. Display password to the page - write password
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);







