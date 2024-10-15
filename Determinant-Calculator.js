const prompt = require('prompt-sync')();
//  node matrixSolver.js
console.log('\n----------------------------------------------');
console.log("Welcome to Matrix solver by STC")
console.log('----------------------------------------------');

const userMode = prompt('2x2(A) & 3x3(B) : ')

if (userMode == 'A') {
    console.log('----------------------------------------------');
    console.log("Entered 2x2 Matrix ") 
    // Getting the cofactors of 2x2 matrix
    let x11 = parseInt(prompt('your x11 = '))  
    let x12 = parseInt(prompt('your x12 = '))  
    let x21 = parseInt(prompt('your x21 = '))  
    let x22 = parseInt(prompt('your x22 = ')) 
    
    // To show Data in tabluar form
    const baseMatrix = [x11, x12, x21, x22]
    console.table([baseMatrix])
    
    // To provide the preferences to users
    console.log('Your Preferences : \n ◙ Determinant(Det)')
    
    // Getting Preferences from user
    console.log('----------------------------------------------');
    const userDesire = prompt('Preferences : ')
    
    // Checking the requirements
    if (userDesire == "det") {
        function determinant(x11,x12,x21,x22){
            const det = parseInt((x11*x22) - (x21*x12))
            console.log(`Determinant is ${Math.abs(det)}`);
        }
        determinant(x11,x12,x21,x22);
        console.log('----------------------------------------------');
    } 
    else {
         console.log('Selection Error !!!')
     }
}

// For 3x3 Matrix 
else if(userMode == 'B'){
    console.log('----------------------------------------------');
    console.log("Entered 3x3 Matrix ")

    // Getting the cofactors of 3x3 matrix
    let x11 = parseInt(prompt('your x11 = '))  
    let x12 = parseInt(prompt('your x12 = '))  
    let x13 = parseInt(prompt('your x13 = '))  
    let x21 = parseInt(prompt('your x21 = '))  
    let x22 = parseInt(prompt('your x22 = ')) 
    let x23 = parseInt(prompt('your x23 = ')) 
    let x31 = parseInt(prompt('your x31 = ')) 
    let x32 = parseInt(prompt('your x32 = ')) 
    let x33 = parseInt(prompt('your x33 = ')) 
    
    // To show Data in tabluar form
    const baseMatrix = [x11,x12,x13,x21,x22,x23,x31,x32,x33]
    console.table([baseMatrix])
    
    // To provide the preferences to users
    console.log('Your Preferences : \n ◙ Determinant(Det)')
    
    // Getting Preferences from user
    console.log('----------------------------------------------');
    const userDesire = prompt('Preferences : ')
    
    // Checking the requirements
    if (userDesire == "det") {
        function determinant(x11,x12,x13,x21,x22,x23,x31,x32,x33){
            const det = parseInt( ( x11*((x22*x33)-(x32*x23)) - x12*((x21*x33)-(x31*x23)) + x13*((x21*x32)-(x31*x22)) ) )
            console.log(`Determinant is ${Math.abs(det)}`);
        }
        determinant(x11,x12,x13,x21,x22,x23,x31,x32,x33);
        console.log('----------------------------------------------');
    } 
    else {
         console.log('Selection Error !!!')
     }
}

// Last Error Case SHowCase
else{
    console.log("Enter Valid Option !!!");
}
