// Arrays in JS
const superHeroes = ['Iron Man', 'Captain America', 'Thor']

// Prining
console.log(superHeroes);
console.log(superHeroes[1]);

// Printing last element
console.log(superHeroes[superHeroes.length - 1])

console.log("We have %d Super Heroes.", superHeroes.length);

// Delete first element
superHeroes.shift()

// Insert at the start
superHeroes.unshift('SOMETHING_NEW')

// Delet from the end
superHeroes.pop()

// Insert at the end
superHeroes.push('SOMETHING_NEWER')

// Replace element at the middle
superHeroes.splice(1,1,'Hulk')

console.log(superHeroes);


