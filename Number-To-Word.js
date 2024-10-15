// Prompt for accepting the userInput 
const prompt = require('prompt-sync')(); // from prompt-sync Module
// node numberToWord.js
const userInput = prompt('Number :- ') ;
// splitting the string using splitMethod and itslef get converted into an array
const inputSplit = userInput.split('')

// mapping the array item with some specific conditions and returning the value in valueInWord vriable
const vlaueInWord = inputSplit.map( (num)=>{
    if (num == '0') {
        return 'Zero'
    }
    if (num == '1') {
        return 'One'
    }
    if (num == '2') {
        return 'Two'
    }
    if (num == '3') {
        return 'Three'
    }
    if (num == '4') {
        return 'Four'
    }
    if (num == '5') {
        return 'Five'
    }
    if (num == '6') {
        return 'Six'
    }
    if (num == '7') {
        return 'Seven'
    }
    if (num == '8') {
        return 'Eight'
    }
    if (num == '9') {
        return 'Nine'
    }
    else {
        return num
    }
})
// Basic Operation performed
const outputVal = String(vlaueInWord).replaceAll(',',' ')
console.log(`-$ ${outputVal}`)
