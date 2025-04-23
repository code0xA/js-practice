// 🔹 Primitive Data Types
// Hold single values
// Immutable
// Stored by value
// Types: String, Number, Boolean, Undefined, Null, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

// 🔸 Non-Primitive Data Types
// Hold collections/complex values
// Mutable
// Stored by reference
// Types: Object, Array, Function
const fruit = ["apple", "mango", "watermelon"]

let myObj = {
    name : "Anam",
    age : 20
}

const myFunction = function(){
    console.log("Hello world");
}

// JavaScript is a dynamically typed language.
// 🔹 What does that mean?
// You don’t declare data types when creating variables.
// The type is determined at runtime based on the value assigned.
// You can change the type of a variable anytime.

let x = 10;     // x is a Number
x = "hello";    // now x is a String

//In contrast, statically typed languages (like Java, C++) require type declarations,
//and types can’t change at runtime.

//typeof(null) = object
//typeof(undefined) = undefined

//non-primitves typeof return object. For a function it returns 'function' object.
//typeof(myFunction) = function
//typeof of symbol = symbol