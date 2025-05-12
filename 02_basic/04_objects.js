const tinderUser = new Object(); //Singleton object - using constructor

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anam",
            lastname: "Saeed"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2) //first parameter is "target" others are "source"
//adding extra {} is a good practice. use as target.

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //returns array of keys
console.log(Object.values(tinderUser)); //returns array of values
console.log(Object.entries(tinderUser)); //returns array within array. each key-value pair is array.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //returns true
//To check if an object has a particular property
