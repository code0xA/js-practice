const myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); //object - date object

//for specific date
//const myCreatedDate = new Date(2023, 0, 23) //year, month, date - months start from 0 (for single digit)
// const myCreatedDate = new Date(2023, 0, 23, 5, 3) // hour and min also
// const myCreatedDate = new Date("2024-01-29") //yyyy-mm-dd format. Months start from 01.
const myCreatedDate = new Date("06-29-2004") //mm-dd-yyyy format.
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now() //returns milliseconds from jan 1 1970 till now.
// console.log(timeStamp);

// console.log(myCreatedDate.getTime()); //returns milliseconds of created date
//now can compare the above two to see if same date.

// console.log(Math.floor(Date.now()/1000)); // to get in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //as months start from 0, add 1 to get conventional months representation
console.log(newDate.getDay()); //0 denotes sunday

console.log(`Today the date is ${newDate.getDate()} and day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {
    weekday: "long"
})