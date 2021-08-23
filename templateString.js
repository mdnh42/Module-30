// 30-5 Template string, multiple line string, dynamic string

const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kabita = `kobita tumi sopno charini`;
console.log(priya);
console.log(meye);
console.log(kabita);

/* const multiline "This is my first line 
jasdfjlsd"; */

const multilineNew = `
    This is Multilien 
    Hello wolrd
    this is third line
    this is fourth line
`;
const friends = ['Abul', 'Babul', 
'Cabul'];
const  friendCout = 5;
const oldHeader = `<h3 class = "friend-name"> Friend -5 </h3>`;
const oldHeader2 = `<h3 class = "friend-name"> ${friends.length} Friend -5 ${friendCout}</h3>`;

console.log(multilineNew);
console.log(oldHeader);

// 
const firstName = 'MD Nur';
const lastname = 'Hasan';
const fullName = `Full Name is -  ${firstName} ${lastname} * 100 -20`;
console.log(fullName);
