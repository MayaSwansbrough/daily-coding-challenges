// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].
// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// function vowelIndices(word){
//     //your code here
//   }

function vowelIndices(word){
    //your code here
    let result = [];
    let arr = word.toLowerCase().split("");

    
    for(let i = 0; i <= arr.length; i++){
      if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u" || arr[i] === "y"){
        result.push(i+1)
      }
    }
    
    return result;
}

//   Create a function that takes an array of letters, and combines them into words in a sentence.
//   The array will be formatted as so:
//   [['J','L','L','M']
//   ,['u','i','i','a']
//   ,['s','v','f','n']
//   ,['t','e','e','']]
//   The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.
//   Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).
// function arrAdder(arr) {

// }

function arrAdder(rows) {
  let str = ""
  
  let numClms = rows[0].length
  for(let clm = 0; clm < numClms; clm++){ // < 8
    for (let row = 0; row < rows.length; row++){ // < 12
      str += rows[row][clm]
    }
    str += ' '
  }
  
  return str.trim()
}