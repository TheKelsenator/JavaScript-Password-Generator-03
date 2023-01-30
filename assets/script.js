// Assignment code here

// Arrays
var selectedArray = [];
 
var characterUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var characterLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var characterNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characterSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "?", "/", "<", ">", "~"]; 

var characterLength = 8;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var correctPrompts = prompts();

    if (correctPrompts) {
      var newPassword = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    } 
}

function prompts() {
  selectedArray = [];
  characterLength = parseInt(prompt("Please choose the number of characters: 8 - 128"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

  if (confirm("Do you want lowercase letters in your password?" + ' ' + "(Select 'Cancel' for no)")) {
    selectedArray = selectedArray.concat(characterLower);
  } 

  if (confirm("Do you want uppercase letters in your password?" + ' ' + "(Select 'Cancel' for no)")) {
    selectedArray = selectedArray.concat(characterUpper);
  }
    
  if (confirm("Do you want numbers in your password?" + ' ' + "(Select 'Cancel' for no)")) {
    selectedArray = selectedArray.concat(characterNumber);
  }  

  if (confirm("Do you want special characters in your password?" + ' ' + "(Select 'Cancel' for no)")) {
    selectedArray = selectedArray.concat(characterSpecial);
  }
  return true;  
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * selectedArray.length);
    password = password + selectedArray[randomIndex];
  }
  return password;
}