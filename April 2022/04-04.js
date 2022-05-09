// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4

// function between(a, b){
//     // your code here
// }

function between(a, b) {
    let result = [];
    
    for(let i = a; i <= b; i++){
        result.push(i);
    }

    return result;
}


//   In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// function reverseList(list) {
//     // your code here
//   }

function reverseList(list) {
    return list.reverse();
}


//   Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

//   function take(arr, n) {
//     // Your code here
//   }

function take(arr, n) {
    return arr.slice(0, n);
}


// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//     // your code here
// }

function positiveSum(arr) {
    let sum = 0;
    // get only positive numbers out of array
    let positives = arr.filter(e => e > 0);
    console.log(positives);
    // sum  those
    sum = positives.reduce((a,c) => a + c, 0);
    return sum;
}