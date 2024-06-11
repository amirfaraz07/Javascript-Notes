const arr = [1,2,3]

const newArr = arr.reduce( (accumulator, curVal) =>{
    console.log(`acc = ${accumulator} + curVal = ${curVal}`);
    return accumulator + curVal // but here accumulator didn't know from where it should start while curVal take values from arr like 1 then 2 then 3 
    // so for initialization of accumulator we add 0 after this function
}, 0 ) // here 0 means that accumulutator = 0 

console.log(newArr);

// now what basically happening is that let suppose we have  acc = 0 and curval = 1 both sum = 1 which now get stored in acc  
// now acc = 1 curval = 2 both sum = 3 which get stored in acc again 
// now acc = 3 curval = 3 here arr ends so total value = 6


// lets try above one in arrow func

const arr1 = [1,2,3]

const newArr1 = arr1.reduce( (acc, curval) => acc + curval, 0 )
console.log(newArr1);


const cart = [
    {
        name : "JS",
        price : 200
    },
    {
        name : "PY",
        price : 100
    },
    {
        name : "React JS",
        price : 500
    },
]

const totalPrice = cart.reduce( (accumulator, curVal) => accumulator + curVal.price, 0 )
console.log(totalPrice);