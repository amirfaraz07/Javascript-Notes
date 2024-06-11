// const arr = [1,2,3,4,5]

// what if we store foreach in a variable and see what it returns

// const forEachReturn = arr.forEach( (item) => {
    // console.log(item);
    //return item // let see by returning the item that whether it give some result or not 
    // but it gave undefined bcz forEach don't return value
// } )

// console.log(forEachReturn);

// filter is basically a true fasle game
// As foreach didn't return this problem can be solved using ****filter**** 
const arr = [1,2,3,4,5,6,7,8,9]

const filterReturn = arr.filter( (item) => item > 4 ) // filter also has a callback function in which we give value like item then we have to give condition ( in this we used implicit function )
// console.log(filterReturn);

// what if we use explicit func
// const filterReturn = arr.filter( (item) => {
    // return item > 4 // we have to return must else it will give empty brackets i.e. if we open scope we have to use return
// } )
// console.log(filterReturn);

// we can apply it using foreach loop also but we have to push it into new arr
const arr1 = [1,2,3,4,5,6,7,8,9]
let newArr = []

arr1.forEach( (item) => {
    if (item > 4) {
        newArr.push(item)
    }
} )
// console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const historyBook = books.filter( (item) => item.genre === "History" )
  const publishBook = books.filter( (item) => item.publish > 2000 )
//   console.log(historyBook);
  console.log(publishBook);

