// Function declare 

function myFunc (x,y){
    return x + y;
}

/* document.getElementById('my-btn').onclick = function handleEnvet(){

} */



console.log(myFunc(3,2));



const add2 = function add2(num1, num2){
    return num1 + num2;
}

console.log(add2(2, 2));



const add3 = function (num1, num2){
    return num2 + num2;
}

const sum = add3(12, 12);
console.log(sum);


// ES6 Arrow Function 
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(12, 12);
console.log(sum4);