const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Anam"
//     console.log(this.username); // results in undefined, Cannot use this in functions.
// }

// one()

// const one = function(){
//     let username = "Anam"
//     console.log(this.username);
    
// }
// one()

//Arrow function
// const one = () => {
//     let username = "Anam"
//     console.log(this);
    
// }
// one ()

//eg.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  //implicit return. no {} and no return keyword required
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));

const objectReturn = (num1, num2) => ({username: "anam"})
//must enclose object in () to return. Implicit return

const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(function() {}) //normal function for each
// myArray.forEach(() => {}) //arrow func for each
// myArray.forEach(() => ()) //implicit return func for each