// Show a popup that the file is connected
// alert("File is attached")

// Log the document details
// console.log(document.head);

// console.log(document.title);

// console.log(document.body);

// Create an object of the paragraph content
const myPElements = document.querySelector('p')
// change the textContent of the object - It reflects directly at the web page
myPElements.textContent = 'This is the new paragraph text changed at runtime using JS'
// Note - Comment out/remove below lines of code to check the working of above two lines

// Define an object getting an array of all p tags
const allPElements = document.querySelectorAll('p')

allPElements.forEach((p) => p.textContent = "This is changed using Loop in JS")