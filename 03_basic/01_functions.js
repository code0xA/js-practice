
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("M");
}

//sayMyName // This is just a reference
//sayMyName() //This is for execution

// function addTwoNum(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNum(3, 4)//returns 7
// addTwoNum(3, "4") //assumes 3 to be a string as well. returns 34

function addTwoNum(number1, number2){
    let result = number1 + number2
    return result
    //all lines after result wont execute
}
const result = addTwoNum(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username) {
    if (username===undefined){ // Or (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Anam"));
// console.log(loginUserMessage()); //undefined just logged in

//OR give a default argument. In function def -> eg. (username = "sam").

function calculateCartPrice(...num1){ //... is rest operator. rest and spread operator is same, depends on usecase
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "anam",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)
//OR give object directly
// handleObject({
//     username:"sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
//OR give array directly
console.log(returnSecondValue([200,100,300]));
