const score = 100;
// console.log(score); //100

const balance = new Number(200)
// console.log(balance); //[Number: 200] //type = object

// console.log(typeof(balance));

//toString func allows to convert number to string, gives access to a whole new set of functions to use

// console.log(balance.toString.length); //3
// console.log(balance.toFixed(2)); //200.00

const number = 23.8946
// console.log(number.toPrecision(3)); //23.9

const bigNum = 1000000;
// console.log(bigNum.toLocaleString()); //1,000,000
// console.log(bigNum.toLocaleString('en-In')); //Indian standard - 10,00,000
 
//************************** MATH *******************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1); //returns single digit because of floor

//for a range, use min and max
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min); //same thing done as above, except with limits
