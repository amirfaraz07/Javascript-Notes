const myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

// months start from 0 in JS

// const createDate = new Date(2024, 0, 23)
// const createDate = new Date(2024, 0, 23, 5, 3)
const createDate = new Date("01-23-2024") // in this case month start from 1 // MM DD YY

const timeStamp = Date.now()
console.log(timeStamp);
console.log(createDate.getTime()); // it gives time in milliseconds from that date to till now 
console.log(Math.floor(Date.now()/1000)); // to convert this into seconds

console.log(myDate.getMonth() + 1); // it give month number and it start with 0 // for exact month just do +1
console.log(myDate.getFullYear());

// most important is using using "To local string" we can costumize it more easily

myDate.toLocaleString('default', {
    weekday : 'long',
    month : 'numeric'
})


