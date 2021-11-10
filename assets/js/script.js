//Assignment Code 
var generateBtn = document.querySelector("#generate");



function generatePassword() {

    //*Prompt the user for the password criteria
    var passwordLength = prompt("Please enter the number of characters you want for your new password. It must be more than 8 but not more than 128!");
   
    //*length of at least 8 characters and no more than 128 characters
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      
    }
    //*Lowercase, uppercase, numbers, special characters
    //if(confirm("Do you want numbers in your password?"));
  //var lowerCases = confirm("Do you want lowercases in your password?");
  //var upperCases = confirm("Do you want uppercases in your password?");
  //var special = confirm("Do you want special characters in your password?");
    
    else{
      for (var i=0; i<passwordLength; i++){
        Math.floor(Math.random());
        return;
      }
    }
      
      
      

    


    
    //2. Validate the input.
    //3. Generate password based on criteria 


    //4. Display password to the page. 
       //return generatePassword() ;
       
      };


//write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);







