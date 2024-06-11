let age = 26
let age1 = "26"
let age3 = "26abc" 
// if we give them "NULL" and convert into number it gives 0 and on "undefined" it gives NaN

console.log(typeof age);
console.log(typeof(age1)); // can be written in both styles

// what if i want to take value in always nmber or string

let valueInNumber = Number(age1) // it wil convert string into number
let valueInString = String(age) // nmbr into string
let valueInNumber1 = Number(age3) // it will Nan (not a number) as it has both numbers and alphabets ( which cannot be converted into numbers )

console.log(valueInNumber);
console.log(valueInString);
console.log(valueInNumber1)
console.log(typeof valueInNumber);
console.log(typeof(valueInString));
console.log(typeof valueInNumber1);


// true => 1 and false => 0
// converting bool 0 and 1 to true n false

let boolean1 = 1;
let valueInBool = Boolean(boolean1)
console.log(valueInBool);

// 1 =>  true and 0 => false
// "" => false  ( empty string to fasle )
// "faraz" => true


// ****Operations****
// we have + - * / basic  ** => power    % => modulo(remainder)

let value = 3
console.log( -value ); // we get -3

console.log(1 + 2 + "3"); // as 1st nmbr is nmbr it will add them and then concatenate
console.log("1" + 2 + 3); // as 1st nmbr is string it will concatenate and take all as string

console.log(true);
console.log(+true); // it will give 1 as + is taken to add nmbrs 

// postfix and prefix increment 
let x = x1 = 4 // let x = 4 let x1 = 4
const y = x++ // 1st x is stored in y then x value is incremented and stored in x again as 5
const z = ++x1 // 1st x is incremented and then stored in z and incremented value is also stored in x and gives both 5
console.table([x,y,z, x1])
