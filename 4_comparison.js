// if you compare same data type values it gives answer in true or fasle 
console.log( 2 > 1 );
console.log( 2 >= 1 );
console.log( 2 < 1 );
console.log( 2 <= 1 );
console.log( 2 == 1 );
console.log( 2 != 1 );

// but if we comapre different data type values
console.log( "2" > 1 );
console.log( 2 > "1" ); 
// it converts string into nmbr and compare them however it is now allowed in typescript and they have strict rules

// sometimes we didn't get expected output 
// lets take an example like NULL

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);

// in JS == > < they work differently but when combined i.e. in 3rd one >= here null is convereted into number 0

// above operations of different dataypes and make confusion so we can also do strict check using ===

console.log("2" === 2);