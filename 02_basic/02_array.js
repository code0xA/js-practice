const heros = ["spiderman", "ironman", "thor"]
const dc = ["superman", "flash", "batman"]

// heros.push(dc);
// console.log(heros); //inserts the dc arr into heros as a whole

// const allHeros = heros.concat(dc); // adds all indvisually
// console.log(allHeros);

const newAll = [...heros, ...dc]; //spread operator
console.log(newAll);

const anotherArray = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity) //spreads out all arrays at same depth
//The Infinity defines the depth
console.log(realAnotherArray);

console.log(Array.isArray("Anam"));
console.log(Array.from("Anam"));
console.log(Array.from({name : "Anam"})); //object. Must specify what to convert into array. i.e. keys or values
//if not specifies, returns empty array.

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1, num2, num3));
