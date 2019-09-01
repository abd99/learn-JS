// Array to iterate through
const days  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// Another one
const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// forEach loop
days.forEach(function (day) {
    console.log(day);
    
})

// Another one
months.forEach(function (month, index) {
    console.log(`Month no: ${index + 1} is ${month}`);
    
})

// For loop
for (let iTmp = 0; iTmp < days.length; iTmp++) {
    console.log(days[iTmp]);
    
}

// Reverse For loop
for (let iTmp = days.length - 1; iTmp >= 0; iTmp--) {
    console.log(days[iTmp]);
    
}

// Another one
for (let iTmp = 0; iTmp < months.length; iTmp++) {
    console.log(`Month no: ${iTmp + 1} is ${months[iTmp]}`);
}