// Immediately Invoked Function Expression ( IIFE )
// someties global scope causes pollution i.e. its variables etc so to avoid that we use IIFE just we do it that we wrap function in round brackets (function definiton) and then execution brackets () so that it executes immediately
(function one(){ // named iffe
    console.log(`Faraz Amir`);
})();

// what if we call another IIFE will it run??
// lets try it with an arrow function

( (name) => { // unnamed iife by giving parameter
    console.log(`BS IT ${name}`);
} )("M.Faraz") // it will not run  reason: because we have to end the 1st IIFE by adding a semicolon at the end then it will run easily