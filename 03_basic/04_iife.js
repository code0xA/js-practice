//Immediately Invoked Function Expressions (IIFE)
function two() {
    console.log(`DB connected`);
}
two(); 
//This calls immediately after function definiton.

//***IIFE isnt just for immediate execution. It is to prevent***
//***pollution from the global scope within a block scope***

//Instead of calling function by its name function() later
//Enclose function within paranthesis and call it right there itself


(function one() { //named IIFE
    console.log(`DB connection`);
})(); //last paranthesis for function call. (function)()


//next function wont get executed until add ;
//JS doesnt know when to stop execution of one and start another. Will give error


( (name) => {
    console.log(`DB Connection 2 ${name}`);
} )("Anam")

//For 2 consecutive IIFEs, add ; between them.