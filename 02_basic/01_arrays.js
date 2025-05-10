const arr = [0, 1, 2, 3, 4]
const heros = ["batman", "spiderman", "venom"]

const arr1 = new Array(1, 2, 3, 4);
//console.log(arr1[2]);

//array methods
// arr.push(6);
// arr.push(7);
// arr.pop()
// arr.unshift(0); //adds to the beginning
// arr.shift(); //removes the first element
 
// console.log(arr.includes(7));
// console.log(arr.indexOf(7));

// const newArr = arr.join();
// console.log(arr);
// console.log(newArr);

//slice & splice

const slicedArr = arr.slice(1,3);
console.log(slicedArr);

const splicedArr = arr.splice(1,3)
console.log(splicedArr);
console.log("Original arr now", arr);
