// Coercion by - sign - Output: 0
console.log('5' -'5');
console.log('5' - 5);

// Coercion by + sign - Output: 55
console.log('5' +'5');
console.log('5' + 5);

// Coercion by boolean values
console.log(5 + true);
// Another one!
console.log(5 - true);
// Another one!
console.log(5 + false);
// Another one!
console.log(5 - false);

// Converting value to number
console.log(Number(true));
console.log(Number(false));

// Passing values to if other than true/false
if ('') {
    console.log('Inside if block');
    
} else {
    console.log('Inside else block');
    
}


// Values that interpret as false:
// false
// 0
// ''
// mull
// undefined

