// which values are considered true and false 

// falsy values
// false, 0, -0, BigInt 0n, null, undefined, NaN, "" (empty String)
// other all values are true
// "0", "false" (bcz wrapped in string), " " (if space given in string then it is considered true), [], {}, funcstion(){}

// chking empty array and object

let arr = []
if ( arr.length == 0 ){
    console.log(`arr is empty`);
}

let obj = {}
if ( Object.keys(obj).length == 0 ){
    console.log(`obj is empty`);
}

// important info   false == 0 is true, false == "" is true, 0 == "" is true

// **** nullish coalescing operator (??) **** => only used for null and undefined 
// let suppose we have some cases in database that has null or undefined values so to avoid it we use this 

// let val = 20 ?? 30 // in this case 1st value is printed
// let val = null ?? 40 // now if it find null or undefined value it gives other value
// let val = undefined ?? 60
let val = undefined ?? 60 ?? 70 // 60 is printed bcz after undefined or null 1st value it gets is 60

console.log(val);

// Terniary Operator
//  condition ? true : false  // different from above one

const price = 100 
price >= 90 ? console.log(`greater than 90`): console.log(`less than 90`);