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

// Display specific object contents(properties)
console.log(`Hey, new course on ${courseObject.title} by ${courseObject.author} for ${courseObject.price} is up at LCO`);
 
// Reassign property value 
courseObject.price = 799
console.log(`Hey, new course on ${courseObject.title} by ${courseObject.author} for ${courseObject.price} is up at LCO`);

// Define function that returns an object
let displayPrice  = function(object) {
    return{
        format1: `Price of the course is ${object.price}`,
        format2: `${object.price} is the price of the book`
    }
}

// Store value returned by function in price variable
price = displayPrice(courseObject)

// Display specific properties of the returned object
console.log(price.format1);
console.log(price.format2)

