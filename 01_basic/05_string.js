const name = "anam"
//typeof(name) = string
const repoCount = 20

// console.log(name + repoCount + " Value"); //string concatenation - outdated.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// string interpolation using placeholders - recommended

const gameName = new String('anam-com-com')
//typeof(gameName) = object. New keyword initializes object.

console.log(gameName[0]);
console.log(gameName.__proto__);
//A prototype is like a hidden object attached to every object (and string, array, function...) in JavaScript.
//It contains methods and properties that your object can use.

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4); //'anam'
console.log(newString);

//cannot use negative indices.
const anotherString = gameName.slice(-13, 4); //'anam'. can use negative indices.
console.log(anotherString);

const anotherString2 = "   anam    ";
console.log(anotherString2.trim());

const url = "https://anam.com/anam%20saeed.com"
console.log(url.replace('%20', '-'));
console.log(url.includes('nice'));

console.log(gameName.split('-'));
