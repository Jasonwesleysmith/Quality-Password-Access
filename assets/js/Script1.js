var lowerCase
var upperCase
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters

function passwordOptions (){
    var length = parseInt(prompt("choose password length: (8-128 characters)")) //method
    if (length <8) {
      alert("password needs to 8 or more characters")  
      return null
    }
    if (length >128) {
        alert("password needs to be less than 129 characters")
    return null
    }
    
    var IncludesSpecialChar = confirm("Do you want to include special characters?")
    var includesLowerCase = confirm("Do you want to include special characters?")
    var includesUpperCase = confirm("Do you want to include upper case")
    var includesNumbers = confirm("Do you want to include numbers")

    var passwordCriteria = {
        length: length,
        IncludesSpecialChar: IncludesSpecialChar,
        includesLowerCase: includesLowerCase,
        includesUpperCase: includesUpperCase,
        includesNumbers: includesNumbers
    }
    return passwordCriteria
}
 function generatePassword (){
     var options = passwordOptions()
     var results = []
     var possibleCharacters = []
     var garunteedCHaracters = []
 }