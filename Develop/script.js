// Assignment Code
var generateBtn = document.querySelector("#generate");


/* const upperChar   = ['A', 'B', 'C', 'D', 'E']
const lowerChar   = ['a', 'b', 'c', 'd', 'e']
const numChar     = ['1', '2', '3', '4', '5']
const specialChar = ['!', '@', '#', '$', '%'] */
const passCharacter   = ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e', '1', '2', '3', '4', '5', '!', '@', '#', '$', '%']
const passArrayLength = passCharacter.length
const passFinalArray = []

let passFinalChoice   = ""
let passLength        = parseInt(prompt("What's the length of the Password?"))

//Making sure the user selected a password atleast of 8 length and no more than 128
while( 8 >= passLength > 128)
{
  passLength = parseInt(prompt("Please Choose a length more than 8"))
}


let upperY            = confirm("Do You Want To Have Uppercase?")
let lowerY            = confirm("Do You Want To Have Lowercase?")
let numY              = confirm("Do You Want To Have Number?")
let specialY          = confirm("Do You Want To Have Special Symbol?")

/* let includeUpper = false
let includeLower = false
let includeNum   = false
let includeSpec  = false 

Determine which in the array is selected
let rando = 0

for(let i=0; i<passLength; i++)
{
  rando = Math.round(Math.random()*4)
  passCounter.push(rando)
} */

/* //generating Upper Case
function generateUpper()
{
  for(i=0;i<passLength)
}
//generating Lower Case
function generateLower()
{

}
//generating Number
function generateNum()
{

}
//generating Special Character
function generateSpecial()
{

} */

//['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e', '1', '2', '3', '4', '5', '!', '@', '#', '$', '%']//
//^^ For Reference
function generatePassword()
{
  let selected = 0
  if(upperY==false)
  {
    passCharacter.splice(0,5)
  }
  if(lowerY==false)
  {
    passCharacter.splice(5,5)
  }
  if(numY==false)
  {
    passCharacter.splice(10,5)
  }
  if(specialrY==false)
  {
    passCharacter.splice(15,5)
  }

  for(let i=0;i<passLength;i++)
  {
    selected = Math.round(Math.random()*passArrayLength)
    passFinalArray.push(selected)
  }

  passFinalChoice = passFinalChoice.toString()
  return passFinalChoice

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
