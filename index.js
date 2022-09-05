const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/* MINUS AND PLUS BUTTON */
let plusBtn = document.getElementById("plus-btn")
let minusBtn = document.getElementById("minus-btn")
let passwordLength = document.getElementById("pass-length")

/* General Variable */
let randomOne = document.getElementById("random-one")
let randomTwo = document.getElementById("random-two")

let passLength = 15

function randomEl() {
    let randomVal = Math.floor( Math.random() * characters.length)
    return characters[randomVal]
}

function plusButton() {
    passLength++
    passwordLength.textContent = "Password Length: " + passLength
}

function minusButton() {
    passLength--
    passwordLength.textContent = "Password Length: " + passLength
}

function passwordOne() {
    let randomOneSum = "";
    for(let i = 0; i < passLength; i++) {
        randomOneSum += randomEl()
    }
    randomOne.textContent = randomOneSum
}

function passwordTwo() {
    let randomTwoSum = "";
    for(let i = 0; i < passLength; i++) {
        randomTwoSum += randomEl()
    }
    randomTwo.textContent = randomTwoSum
}


function generate() {
    passwordOne()
    passwordTwo()
}