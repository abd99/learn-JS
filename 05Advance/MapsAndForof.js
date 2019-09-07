// Define an Object
let courseObject = {
    title : 'Mongo DB',
    author : "Hitesh Choudhary",
    price : 999 
}

// Another one
let courseObject2 = {
    title : 'Blockchain',
    author : "Saksham Choudhary",
    price : 899 
}

// Create a Map
let courses = new Map()

// Add items in the map
courses.set('Mongo', courseObject)
courses.set('Blockchain', courseObject2)

// Get the size of the map
console.log(courses.size);

// Get the values
console.log(courses.values());

// Print all the keys using forof loop
for (const key of courses.keys()) {
    console.log(key);
    
}

// Print the values of titles using forof loop 
for (const value of courses.values()) {
    console.log(value.title);
    
}

// Print the key and the authors using forof
for (const [key, value] of courses) {
    console.log(key + ": " + value.author);
    
}

// Print the price using forEach Loop
courses.forEach((value, key) => console.log(key + ": " + value.price))


// Create an array of arrays
let arrayOfArr = [['one', 1], ['two', 2], ['three', 3]]

// Initialize a map out of it
let arrayMap = new Map(arrayOfArr)

console.log(arrayMap);





