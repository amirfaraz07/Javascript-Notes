// some loops are already embedded in arr this can be seen on prototype by running your arr in console or declare your arr and write arr. you'll see forEach loop in it

let arr = [1,2,3,4,5]
// arr.forEach( function name(){} ) // it takes a call back function so we wrote it within round brackets but as it is call back function we will not give it a name
// arr.forEach( function (item){ // give it a parameter
    // console.log(item);
// } )

// lets write it down using arrow function

// arr.forEach( (item) => {
    // console.log(item);
// } )

// let pass a function to forEach

// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)

// arr not only have access to item rather it can also print index and full arr

// arr.forEach( (item, index, arr1) => {
//     console.log(item, index, arr1);
// } )


const obj = [
    {
        a : 1,
        b :2
    },
    {
        a : 3,
        b : 4
    },
    {
        a : 5,
        b : 6
    }
]

obj.forEach( (item) =>{
    console.log(item.a);
} )