//Creation of promise
const promiseOne = new Promise(function(resolve, reject) { //Promise contains a func with two args- res, rej
    //Do an async task :
    //DB calls, cryptograpgy, network
    setTimeout(function() {
        console.log('Async task is complete');
        resolve(); //this connects resolve with this()
    }, 1000)
})

//Consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed"); 
})
//Resolve in promise function param is directly connected with then()

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    //Creation and consumption in one step.
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "Chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Anam", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

//.then() to get values if received.
//.catch() to handle error if occurred.
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => { //second then gets what the previous .then() returned i.e. username
    console.log(username);
}).catch(function(err){
    console.log(err); 
}).finally(()=> console.log("The promise is either resolved or rejected")
) //Finally block always gets executed. It runs after promise is settled, fulfilled or not.
//This is called CHAINING

//*******INCORRECT SYNTAX to get username from user*********.
// const username = promiseFour.then((user)=> {
//     console.log(user);
//     return user.username;
// })
// console.log(username); //Storing promise in a const and using that to get value doesnt work.
//******************************************************** */

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

//async-await doesnt handle errors gracefully. Must use try-catch
//Another way to handle promises async-await instead of then, catch
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);  
    } catch (error) {
       console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //convert response from string to json. Takes time so add await here as well.
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// getAllUsers()

//Write a promise type instead of async-await.
//Fetch returns a promise
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=> console.log(data)
)
.catch((err)=> console.log(err)
)