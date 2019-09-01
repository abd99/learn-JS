// Defition of function
let sayHello = function(name) {
    console.log(`Greeting message for ${name}.`);
    console.log(`Hey, ${name}.`);
}

// Calling function sayHello()
sayHello('John')

// Defintion
let fullNameMaker = function(firstName, lastName) {
    console.log(`Happy to have you, ${firstName} ${lastName}.`);
}

// Function call
fullNameMaker('John', 'Doe')

// Function returning a value
let multiplier = function(num1, num2) {
    return (num1 * num2)
}

console.log(multiplier(7, 8));
