const user = {
    name: "faraz",
    age: 21,
    message : function(){
        // console.log(`Welcome ${this.name}`); // here we used this keyword to refer current context value within scope
        // console.log(this); // inside context it gave whole object and then we override value outside context it changed that and also gave us that specific value as well
    }
}
// user.message()
// user.name = "farazamir"
// user.message()

// console.log(this); // it give empty object i.e. {} here but when we run this in browser console it gives windows objects

// now lets call only this keyword in function and outside execution context


function one(){
    // console.log(this); // it gives many values when run alone of node environment 
}
// one()

function two(){
    let name = "faraz"
    // console.log(this.name); // now it give undefined so i see right now it is working in objects not in functions
}
two()

// lets convert it into arrow function
let three = () => {
    let name = "faraz"
    // console.log(this.name); 
}
// three() 

let four1 = (n1, n2) => {
    return n1 + n2 // it is explicit function in which return is used
}
four1(5,8)


// lets try implicit return function 
let four = (n1, n2) => n1 + n2
console.log(four(4, 5))

// above one can also be written as ( which is useful in react )

let four2 = (n1,n2) => (n1 + n2) // if we use curly braces then return is compulsory but if we use round brackets no need to use return keyword
four2(4, 5)

// what if we want to return objects
// let five = () => {username : "faraz"} // it will give undefined so it should be wrap in brackets
let five = () => ({username : "faraz"})
console.log(five()) 