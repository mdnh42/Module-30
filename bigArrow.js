// Video - 7
// Two parameter 
const add = (num1, num2) => num1 + num2;
console.log(add(2,2));
// 3 times 
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 3, 4);
console.log(result);
// five times 
const fiveTimes = (num) => num * 5; 

const ouput = fiveTimes(15);
console.log(ouput);

// js func
const materials = [
    'Hydrogen', 
    'Helium',
    'Lithium',
    'BeryLium'
];

console.log(materials.map(materials => materials.length));


const sixTimes = num => num * 10;
console.log(sixTimes(10));



const doMath = (x,y) => {
    const sum = x + y; 
    const sub = x - y;
    const result = sum;
    const output = sub *2;
    return output;
}
const total = doMath(3, 2);
console.log(total);