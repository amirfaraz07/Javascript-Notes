if(true){
    let a = 10
    const b = 20
    var c = 30 // that's why var has malfunction error while using in scope i.e. let and const can't be accessed on the other hard var is easily accessible even it is not returned
}

// console.log(a);
// console.log(b);
console.log(c);

// global scope in broswer and console is different 

function one(){
    const user = "faraz"

    function two(){
        const user1 = "farazamir"
        console.log(user); // it is also called closure in which child func can access parent func
    }

    // console.log(user1);
    two()
}

one()

if(true){
    const user = "faraz"
    if(user){
        const user1 = " amir"
        console.log( user + user1 );
    }
    // console.log(user1);
}

// console.log(user);

function addOne(n){ 
    return n + 1
}

addOne(5) // what if we declare it above the function it will execute without giving an error

const addTwo = function(n){ // function can also be written as by holding the function in a variable
    return n + 1
}
addTwo(5) // but if we hold it in a variable and then call it above function scope it will give error ( it is a concept of hoisting in JS that hw JS deal variables and it's execution context)