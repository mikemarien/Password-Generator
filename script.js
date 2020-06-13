// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//password criteria

function randomSymbol() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
  //retrives html character code, math.floor sets math.random to integers rather than decimals. 14 is the number of symbols that are being used. 33 sets the range the symbols begin from in the character code.
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //retrives html character code, math.floor sets math.random to integers rather than decimals. 10 is the number of numbers. 48 sets the range where the numbers begin from in the character code.
}

function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  //retrives html character code, math.floor sets math.random to integers rather than decimals. 26 is number of letters in alphabet. 97 sets the range where lower case letters begin.
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //retrives html character code, math.floor sets math.random to integers rather than decimals. 26 is number of letters in alphabet. 65 sets the range where upper case letters begin.
}

const passwordCriteria = {
  symbol: randomSymbol,
  number: randomNumber,
  lowercase: randomLowercase,
  uppercase: randomUppercase
};

