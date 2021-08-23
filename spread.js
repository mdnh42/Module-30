const numbers = [23, 12, 43, 41, 43];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(34, 3, 12, 42);
console.log(max);

const maxArray = Math.max(...numbers);
console.log(maxArray);

numbers.push(33);
// console.log(numbers);

const numbers2 = [21,...numbers, 88];

numbers.push(33);
console.log(numbers2);