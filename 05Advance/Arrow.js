// Declare a normal arrow function to print a parameter
const sayHello  = (name) => `Hey there, ${name}!.`

// Use the function
console.log(sayHello('Abd'));

// Define an array of objects to iterate through
const todos = [{
    title: 'Prepare for AAD',
    isDone: false
},{
    title: 'LCO JS',
    isDone: true
},{
    title: 'Work on MSBTESG',
    isDone: false
},{
    title: 'Work out',
    isDone: false
},{
    title: 'Buy Bread',
    isDone: true
},{
    title: 'Watch YouTube Videos',
    isDone: true
}]

// Find all objects with isDone === false and store in a variable
const listRemainingStuff = todos.filter((todo) => todo.isDone === false)

// Print only the title of the obtained objects
listRemainingStuff.forEach((todo) => {console.log(todo.title)})

// Create an object
let myObject = {
    weight:2000,
    price:800,
    // New way of declaring functions
    myDes() {
        return `This camera is of ${this.price}$`
    },
}

// Calling the function
console.log(myObject.myDes());
