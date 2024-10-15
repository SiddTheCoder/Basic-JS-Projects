const prompt = require('prompt-sync')();

console.time('Password Generated In : ')
// For Symbols --------------------------------------------
const symbols = ['!','@','#','$','*','-','_','+',]

let symbolIndex1 = Math.floor(Math.random() * symbols.length);
let symbolIndex2 = Math.floor(Math.random() * symbols.length);
let symbolIndex3 = Math.floor(Math.random() * symbols.length);
const getSymbol1 = symbols[symbolIndex1]
const getSymbol2 = symbols[symbolIndex2]
const getSymbol3 = symbols[symbolIndex3]
// console.log(getSymbol1);
// console.log(getSymbol2);
// console.log(getSymbol3);

// For Numbers

const numbers = ['0','1','2','3','4','5','6','7','8','9']

let numberIndex1 = Math.floor(Math.random() * numbers.length);
let numberIndex2 = Math.floor(Math.random() * numbers.length);
let numberIndex3 = Math.floor(Math.random() * numbers.length);
const getNumber1 = numbers[numberIndex1]
const getNumber2 = numbers[numberIndex2]
const getNumber3 = numbers[numberIndex3]
// console.log(getNumber1);
// console.log(getNumber2);
// console.log(getNumber3);

// For capital alphabets

const alphabet = [];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i).toUpperCase());
}

let charIndex1 = Math.floor(Math.random() * alphabet.length);
let charIndex2 = Math.floor(Math.random() * alphabet.length);
let charIndex3 = Math.floor(Math.random() * alphabet.length);
const getChar1 = alphabet[charIndex1]
const getChar2 = alphabet[charIndex2]
const getChar3 = alphabet[charIndex3]
// console.log(getChar1);
// console.log(getChar2);
// console.log(getChar3);


// For small alphabets

const lowerAlphabet = [];
for (let i = 97; i <= 122; i++) {
  lowerAlphabet.push(String.fromCharCode(i));
}

let lowerCharIndex1 = Math.floor(Math.random() * lowerAlphabet.length);
let lowerCharIndex2 = Math.floor(Math.random() * lowerAlphabet.length);
let lowerCharIndex3 = Math.floor(Math.random() * lowerAlphabet.length);
const getLowerChar1 = lowerAlphabet[lowerCharIndex1]
const getLowerChar2 = lowerAlphabet[lowerCharIndex2]
const getLowerChar3 = lowerAlphabet[lowerCharIndex3]
// console.log(getLowerChar1);
// console.log(getLowerChar2);
// console.log(getLowerChar3);
console.log("Your password is going to Make From :")
console.log("")
const collection = [
getSymbol1,getSymbol2,getSymbol3,getNumber1,getNumber2,getNumber3,getChar1,getChar2,getChar3,getLowerChar1,getLowerChar2,getLowerChar3
  ]
console.log(collection)
console.log("__________________________________________________")
console.log("")
const pass = getNumber3+getChar3+getSymbol1+getLowerChar1+getChar1+getSymbol2+getNumber1+getLowerChar3+getNumber2+getNumber3+getChar2+getLowerChar2+getSymbol3;
console.log('PassWord : '+ pass)
console.log("")
console.timeEnd('Password Generated In : ')
