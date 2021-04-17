

function passwordsPrompt() {
  var passwordLength = parseInt(prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128."));
  //validator
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
    len: passwordLength,
    numbers: numbers,
    lowerCase: lowerCases,
    upperCase: upperCases,
    specialChar: special,
  }
  return userChoices
}


//Grabs user input- filters out unchecked ones- randomizes and loops it through. 
function generatePassword() {
  var blah = passwordsPrompt()//USERS CHOICES 

  var selected = []

  if (blah.numbers) {
    selected.push("getRandomNumber")
  }
  if (blah.lowerCase) {
    selected.push("getRandomLower")
  }
  if (blah.upperCase) {
    selected.push("getRandomUpper")
  }
  if (blah.specialChar) {
    selected.push("getRandomsymbol")
  }

  var passwordVal = "";
  for(var i = 0; i < blah.len; i++) {
    var randomIndex = Math.floor(Math.random() * selected.length);
    if (selected[randomIndex]== "getRandomNumber") {
      passwordVal = passwordVal + getRandomNumber()
    }
    if (selected[randomIndex]== "getRandomLower") {
      passwordVal = passwordVal + getRandomlower()
    }
    if (selected[randomIndex]== "getRandomUpper") {
      passwordVal = passwordVal + getRandomUpper()
    }
    if (selected[randomIndex]== "getRandomsymbol") {
      passwordVal = passwordVal + getRandomsymbol()
    }
  }

  return passwordVal

} 

writePassword()


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
  



var generateBtn = document.querySelector("#generate");
function writePassword() {
    var password = generatePassword();
    passwordVal = password;
    document.getElementById("password").textContent = (password);
}
  
  generateBtn.addEventListener("click", writePassword)