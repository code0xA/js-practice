let score = "33abc"
console.log(typeof(score));

let numScore = Number(score)
console.log(numScore);
console.log(typeof(numScore));

//"33" => 33
//"33abc" => NaN  -- It stand for Not a Number, however, its type is number i.e. typeof(NaN)=number
//true => 1 and false => 0

let isLoggedIn = undefined;
let inBoolean = Boolean(isLoggedIn)
console.log(inBoolean);

//"" => false
//non-empty string will give true
//0 will give false, any other digit will give true
//NaN and undefined also give false

let digit = 33
let inString = String(digit)
console.log(typeof(inString))
console.log(inString);

