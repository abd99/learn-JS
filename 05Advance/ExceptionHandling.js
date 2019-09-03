// Define function to convert USD to INR
let convertToINR = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 70
    } else {
        // Throw error if the input is not a number
        throw Error("Amount should be a number")
    }
}

// Use try to monitor the code for errors
try {
    // Give normal input
    console.log(convertToINR(25));
    // Give error prone input
    console.log(convertToINR(' '));
} catch (error) { // Use catch to handle the errors
    console.log("Error: " + error.message);
    
}

// The following line will not run if the program crashes
console.log("I won't run if program crashes");
