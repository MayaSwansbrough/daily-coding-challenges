// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []
// function solution(nums){
//     // your code here
//     }

function solution(nums){
    return nums !== null ? nums.sort((a,b) => a - b) : []
    }


// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.
// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
// function solve(arr){  
//     //code
//     };

function solve(arr){
  let result = []
  arr = arr.map((e) => e.toLowerCase())
  
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                'y', 'z']
  
  for(let i = 0; i < arr.length; i++){
    let word = arr[i].split('')
    let val = 0

    for(let i = 0; i < word.length; i++){
      // match character
      // match character's index
      // if the index of the current character === to the index of the matching character's index, ++value for that word
      if (i === alpha.findIndex(e => e === word[i])){
        ++val;
      }
    }
    result.push(val) 
  }
  // return an array that has the total number for each word separated by word
  return result
};