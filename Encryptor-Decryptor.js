// node ency_decy.js
const prompt = require('prompt-sync')();

// For Token --------------------------------------
// Arrays of Values for token
const symbolToken =  ['@','#','$','&'] //Tk (tk->Token)
const numberToken1 = ['1','2','3','4','5','6','7','8','9'] //Tk1 (tk->Token)
const numberToken2 = ['91','28','37','46','05','64','73','82','19'] //Tk2 (tk->Token)
const numberToken3 = ['1','2','3','4','5','6','7','8','9'] //Tk3 (tk->Token)

// Getting Random index perspective to the lenght of thier respective arrays
const randomIndexTk = Math.floor(Math.random()*symbolToken.length)
const randomIndexTk1 = Math.floor(Math.random()*numberToken1.length)
const randomIndexTk2 = Math.floor(Math.random()*numberToken2.length)
const randomIndexTk3 = Math.floor(Math.random()*numberToken3.length)

// Getting the value from array on the randomIndex Generated
const indexSymbol = symbolToken[randomIndexTk]
const indexToken1 = numberToken1[randomIndexTk1]
const indexToken2 = numberToken2[randomIndexTk2]
const indexToken3 = numberToken3[randomIndexTk3]

// Token 
const userMsgToken = (`${indexSymbol}${indexToken1}${indexToken2}${indexToken3}`)

// For Token --------------------------------------

console.log('\n---------------------------------------------');
// Getting userMessage 
const userMsg = prompt("Message : ");
console.log('---------------------------------------------');

//Splitting the userMessage into words in the form of array on the basis of whiteSpaces
const userMsgArr = userMsg.split(' ') 

// console.log(userMsgArr);

//mapping the each item and performing specific task for encryption
// packet refers to each single msg item of array
const encryptedValue = userMsgArr.map( (packet)=>{
    //Assigning the common variables
    let reqValue;
    let leftQR = '(]]'
    let rightQR = '}[]'
    
    // Checking the lenght of each word and performing the specific action oon the basis of length of word
    
    if(packet.length == 1){
        return (leftQR + packet + rightQR)
    }

    else if(packet.length == 2){
        reqValue = packet.charAt(1)+packet.charAt(0)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 3){
        reqValue = packet.charAt(1)+packet.charAt(0).toLowerCase()+packet.charAt(2)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 4){
        reqValue = packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(3)+packet.charAt(1)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 5){
        reqValue = packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(4)+packet.charAt(3)+packet.charAt(1)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 6){
        reqValue = packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(4)+packet.charAt(3)+packet.charAt(1)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 7){
        reqValue = packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(4)+packet.charAt(3)+packet.charAt(1)+packet.charAt(6)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 8){
        reqValue = packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(4)+packet.charAt(3)+packet.charAt(7)+packet.charAt(1)+packet.charAt(6)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 9){
        reqValue = packet.charAt(8)+packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(4)+packet.charAt(3)+packet.charAt(7)+packet.charAt(1)+packet.charAt(6)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 10){
        reqValue = packet.charAt(8)+packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(4)+packet.charAt(3)+packet.charAt(7)+packet.charAt(1)+packet.charAt(6)+packet.charAt(9)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 11){
        reqValue = packet.charAt(8)+packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(10)+packet.charAt(3)+packet.charAt(7)+packet.charAt(1)+packet.charAt(6)+packet.charAt(9)+packet.charAt(4)
        return (`${leftQR}${reqValue}${rightQR}`)
    }
    
    else if(packet.length == 12){
        reqValue = packet.charAt(8)+packet.charAt(5)+packet.charAt(2)+packet.charAt(0).toLowerCase()+packet.charAt(10)+packet.charAt(3)+packet.charAt(7)+packet.charAt(11)+packet.charAt(6)+packet.charAt(9)+packet.charAt(4)+packet.charAt(1)
        return (`${leftQR}${reqValue}${rightQR}`)
    }

    // I have assumed the wordMaxLength = 12 if it excced then it will simply return the same word .. This is just basic and it can be later modified .....
    
    else{
        return packet
    }    
})

const encryptedMsg = String(encryptedValue).replaceAll(',' , "")
console.log(`The Token to Decrypt Your Message is : ${userMsgToken}`);
console.log('---------------------------------------------');
console.log('The Message is : '+ encryptedMsg);
console.log('---------------------------------------------');

// Decryption Section -----------

const userEntryToken = prompt('Enter Your Token to decrypt the message : ')
console.log('---------------------------------------------');

if(userEntryToken == userMsgToken){
    console.log(`The Message was : ${userMsg}`)
    console.log('---------------------------------------------');
} else{
    console.log("Code didn't Match...");
    console.log('---------------------------------------------');
}
