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
// Display The Token
console.log(userMsgToken);
