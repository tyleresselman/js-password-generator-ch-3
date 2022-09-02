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

function generatePassword() {

// Here I'm establishing the container variables that I'll need later to complete the generated password.

  var characterBank = "";
  // var guaranteedChar = "";
  var yourPassword = "";

  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  
  // First off, establishing how long the user would like the password to be including a return in case they choose a character number outside of the limits.


  var howLong = prompt("Hello there. I'm a computer! How long would you like this password to be? It can be anywhere between 8 and 128 characters? What sounds good to you?");
  
  if (((parseInt(howLong) >= 8)) && ((parseInt(howLong) <= 128))) {
    // console.log(howLong);
    // console.log(characterBank);
  } else {
    alert("Sorry, the password length has to be at least 8 characters and no more than 128.");
    return null;
  }

    // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // Now I establish which groups of characters the user would like to include in their password.

  var upperCase = confirm("Nice. Next question. Do you want your password to include upper case letters?");
  var lowerCase = confirm("Do you want your password to include lower case letters?");
  var wantNumbers = confirm("How about numbers? Do you want those in your password?");
  var specialChar = confirm("We've got these special characters too. Want to include those?");

  // Here are the steps to add the specified groups of characters to the available bank of characters for the password.

    if (upperCase) {
      characterBank = characterBank + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // guaranteedChar = guaranteedChar + getRandom(characterBank);
    }

    // console.log(characterBank);

    if (lowerCase) {
      characterBank = characterBank + "abcdefghijklmnopqrstuvwxyz";
      // guaranteedChar = guaranteedChar + getRandom(characterBank);
    }

    // console.log(characterBank);

    if (wantNumbers) {
      characterBank = characterBank + "1234567890";
      // guaranteedChar = guaranteedChar + getRandom(characterBank);
    }

    // console.log(characterBank);

    if (specialChar) {
      characterBank = characterBank + "!@#$%^&*?><~";
      // guaranteedChar = guaranteedChar + getRandom(characterBank);
    }

    // I included this statement in case the user purposefully or accidentally declines all character group options.

    if ((!upperCase) && (!lowerCase) && (!wantNumbers) && (!specialChar)) {
      alert("Sorry, you need to pick at least one character category. Try again.");
      return null;
    }

    // This function ensure the randomness of the selection of characters for the password, based on the bank of available characters.

    function getRandom(str) {
      var randomIndex = Math.floor(Math.random()*str.length);
      var randomChar = str.charAt(randomIndex);
      // console.log(randomChar);
      return randomChar;
    } 

    // And, finally, this function generates the user's password.
  

    for(var i = 0; i < parseInt(howLong); i++) {
      yourPassword = yourPassword + getRandom(characterBank);
      // console.log(yourPassword);
    }
  

    return (yourPassword);

  }

/* The commented sections with a guaranteedChar variable are something I tried to establish, with the advice and guidance of TA Sam, to ensure that there would be a character from each group of characters no matter how short the password. That will be something I look to add in the future. */
