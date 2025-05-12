//using literal ==> singleton never created
//using constructor ==> singleton
//Object.create

const mySymb = Symbol("Key1")

const JsUser = {
    name: "Anam",
    age: 18,
    [mySymb]: "myKey1", //Add [] for symbols
    location: "Delhi",
    email: "anam@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); //must give key in ""
// console.log(JsUser[mySymb]);

// JsUser.email="anam@email.com"

// //To freeze objects and prevent changes
// Object.freeze(JsUser)
// JsUser.email="anam@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello Js User");
}
JsUser.greetingsTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());
