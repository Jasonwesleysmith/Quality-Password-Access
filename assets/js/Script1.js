// available password characters and symbols
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":"]
// function to determine password length
function passwordOptions() {
    var length = parseInt(prompt("choose password length: (8-128 characters)")) //method
    if (length < 8) {
        alert("password needs to 8 or more characters")
        return null
    }
    if (length > 128) {
        alert("password needs to be less than 129 characters")
        return null
    }
    //prompts to ascertain password requirements
    var includesSpecialChar = confirm("Do you want to include special characters?")
    var includesLowerCase = confirm("Do you want to include lower case letters?")
    var includesUpperCase = confirm("Do you want to include upper case letters?")
    var includesNumbers = confirm("Do you want to include numbers?")

    var passwordCriteria = {
        length: length,
        includesSpecialChar: includesSpecialChar,
        includesLowerCase: includesLowerCase,
        includesUpperCase: includesUpperCase,
        includesNumbers: includesNumbers
    }
    return passwordCriteria
}
function randomFunction(Arr) {
    var randomIndex = Math.floor(Math.random() * Arr.length)
    var randomElement = Arr[randomIndex]
    return randomElement

}

//function to generate password
function generatePassword() {
    var options = passwordOptions()
    var results = []
    var possibleCharacters = []
    var guaranteedCharacters = []
    if (options.includesSpecialChar) {
        possibleCharacters = possibleCharacters.concat(specialCharacters)
        guaranteedCharacters.push(randomFunction(specialCharacters))
    }
    
    if (options.includesLowerCase) {
        possibleCharacters = possibleCharacters.concat(lowerCase)
        guaranteedCharacters.push(randomFunction(lowerCase))
    }

    if (options.includesUpperCase) {
        possibleCharacters = possibleCharacters.concat(upperCase)
        guaranteedCharacters.push(randomFunction(upperCase))
    }

    if (options.includesNumbers) {
        possibleCharacters = possibleCharacters.concat(numbers)
        guaranteedCharacters.push(randomFunction(numbers))
    }

    for (let i = 0; i < options.length; i++) {
        var maybeCharacter = randomFunction(possibleCharacters)
        results.push(maybeCharacter)
    }

    for (let i = 0; i < guaranteedCharacters.length; i++) {
        results[i] = guaranteedCharacters[i]
    }
    return results.join("")
}
//function to write password to html text area
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


  

