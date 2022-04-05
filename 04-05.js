// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// function removeEveryOther(arr){
//     //your code here
//   }

function removeEveryOther(arr){
    let x = arr.filter((e,i) => i % 2 === 0)
    return x;
  }



// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// var capitals = function (word) {
// 	// Write your code here
// };

var capitals = function (word) {
	//put word into an array by character
    let arr = word.split("")
    console.log(arr)
    let uppercase = []
    //if element === element.toUpperCase, push index number to new array
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            uppercase.push(i)
        }
    }
    //return new array with only uppercase letters' index
    return uppercase;
};

//refactored

var capitals = function (word) {
    let uppercase = []
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            uppercase.push(i)
        }
    }
    return uppercase;
};


// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// function firstNonConsecutive (arr) {
//     // your code here
// }

function firstNonConsecutive (arr) {
    // iterate through the numbers in the array  
    for(let i = 1; i < arr.length; i++){
    // if current !== previous + 1
      let current = arr[i];
      let previous = arr[i-1]
      if (current !== (previous + 1)){
        return current;
      }
    }
    return null;
  }


// Given a number n, return the number of positive odd numbers below n, EASY!
// function oddCount(n){
//     // your code here
//   }

function oddCount(n){
    return Math.floor(n / 2)
  }
