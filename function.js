
// function parameter handle when a parameter user not give 
function add(num1, num2 = 33){


    // option -2 
   /*  if(num2 = num2 || 0){
        
    } */
    // option -1 
    /* if(num2 == undefined){

        num2 = 0;
    } */
    const total = num1 + num2;
    return total;
}

const result = add(12);
console.log(result);

