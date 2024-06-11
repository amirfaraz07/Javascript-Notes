let arr = [1,2,3,4,5,6,7,8,9]

// let printArr = arr.map( (item) => item + 10 ) // it also has a call back function which can return values itself
// console.log(printArr);

// we can use multiple maps along with filters in this 

let printArr = arr
                  .map( (item) => item * 10 )
                  .map( (item) => item + 1 ) // in map we can do anything
                  .filter( (item) => item >= 40 ) // it is true false game
console.log(printArr);