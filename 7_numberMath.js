const age = 21
console.log(age);

const newAge = new Number(21) // just like in 6_string
console.log(newAge); 

console.log(newAge.toString());
console.log(newAge.toFixed(2)); // to get upto to 2 decimal place numbers

const nmbr = 211.66
console.log(nmbr.toPrecision(4));
console.log(nmbr.toPrecision(3));
console.log(nmbr.toPrecision(2));// be careful while using precision 

const zeros = 2000000
console.log(zeros.toLocaleString()); // by default it is set to US standard
console.log(zeros.toLocaleString('en-PK')); // you can change standard while using your country 

// in console write number. then you can see different values for it like max mn value finite value etc

console.log(Math); // run in console to see different prototypes
console.log(Math.abs(-21));
console.log(Math.round(5.6));
console.log(Math.ceil(4.2)); // round off to highest
console.log(Math.floor(4.8)); // round off to lowest
console.log(Math.min(3,4,45,54,40));
console.log(Math.max(3,4,45,54,40));

console.log(Math.random()); // give random valuw between 0 and 1
console.log((Math.random() * 6) + 1 ); // now we get random between 1 and 6

let max = 10
let min = 20
console.log(Math.round(Math.random() * (max - min + 1) + min));



