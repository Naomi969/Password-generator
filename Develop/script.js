




function passwordsPrompt() {
  var passwordLength = parseInt(prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."));
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please make your password 8-128 in length')
    return
  }
  var numbers = confirm("Do you want numbers in your password?");
  
  
  var lowerCases = confirm("Do you want lowercases in your password?");
  
  var upperCases = confirm("Do you want uppercases in your password?");
  
  var special = confirm("Do you want special characters in your password?");
  
  //validators
  if (numbers === false && lowerCases === false && upperCases === false && special === false) {
    alert("You need to choose at least one character")
    return
  }
  
  var userChoices = {
    length: passwordLength,
    numbers: numbers,
    lowerCase: lowerCases,
    upperCase: upperCases,
    specialChar: special,
  }
  return userChoices
}


// passwordsPrompt() made it run twice





//need help trying either to loop it until it completes the lenght or doing it using if statemnts. 
function generatePassword() {
  var blah = passwordsPrompt()//USERS CHOICES 
  console.log(blah)
  
  if (blah.numbers === true){
    console.log(getRandomNumber())
    
  }
} 

generatePassword()


// random functions 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
  
function getRandomlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
  
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
  
function getRandomsymbol() {
    var symbol = '!@#$%^&*()_+,./<>?-:;';
    return symbol[Math.floor(Math.random() * symbol.length)];
}
  
//already here   
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword)