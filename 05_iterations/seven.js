const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//MAP
// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);

//FOREACH
// const newNums = []
// myNumers.forEach( (nums) => {
//     newNums.push(nums+10)
// })

//Chaining
const newNums = myNumers
                .map((num) => num * 10 ) //10, 20, 30 ... 100
                .map( (num) => num + 1) //11, 21, 31 ... 101
                .filter( (num) => num >= 40) //41, 51, 61 ... 101

console.log(newNums);
