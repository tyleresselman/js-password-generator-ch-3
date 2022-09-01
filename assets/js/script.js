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

  var characterBank = "";
  var yourPassword = "";

  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  var upperCase = confirm("Do you want your password to include upper case letters?");
  var lowerCase = confirm("Do you want your password to include lower case letters?");
  var wantNumbers = confirm("How about numbers? Do you want those in your password?");
  var specialChar = confirm("We've got these special characters too. Want to include those?");

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  var howLong = prompt("Great. How long would you like this password to be? It can be anywhere between 8 and 128 characters? What sounds good to you?");
    if (((parseInt(howLong) >= 8)) && ((parseInt(howLong) <= 128))) {

      console.log(howLong);
      console.log(characterBank);
    } else {
      alert("Sorry, the password length has to be at least 8 characters and no more than 128.");
    }

    if (upperCase) {
      characterBank = characterBank + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    console.log(characterBank);

    if (lowerCase) {
      characterBank = characterBank + "abcdefghijklmnopqrstuvwxyz";
    }

    console.log(characterBank);

    if (wantNumbers) {
      characterBank = characterBank + "1234567890";
    }

    console.log(characterBank);

    if (specialChar) {
      characterBank = characterBank + "!@#$%^&*?><~";
    }

    if ((!upperCase) && (!lowerCase) && (!wantNumbers) && (!specialChar)) {
      alert("Sorry, you need to pick at least one character category. Try again.");
      generatePassword();
    }

    for(var i = 0; i < parseInt(howLong); i++) {
      var randomIndex = Math.floor(Math.random()*characterBank.length);
      // console.log(randomIndex);
      var randomCharacter = characterBank[randomIndex];
      // console.log(randomCharacter);
      yourPassword = yourPassword + randomCharacter;
      // console.log(yourPassword);
    }

    return (yourPassword);

  }



generateBtn.addEventListener("click", writePassword);
