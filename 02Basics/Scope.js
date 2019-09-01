// global variable
let iAmGlobal = 'someValue'

if (true) {
    // local variable
    let iAmLocal = 'someMoreValue'
    // reassigning global variable
    iAmGlobal = 'newGlobalValue'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

// printing out of scope value(error expected if run)
// console.log(iAmLocal);

// printing global value
console.log(iAmGlobal);

