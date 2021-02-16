const numbers = [1, 2, 3, 4];

// const newNumbers = numbers.filter(number => number != 3);
// console.log(newNumbers); // [ 1, 2, 4 ]

const newNumbers = numbers.filter(number => number > 1);
console.log(newNumbers); // [ 2, 3, 4 ]