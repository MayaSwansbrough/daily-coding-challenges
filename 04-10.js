// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// var number=function(array){
//     //your awesome code here
//   }

var number=function(array){
    let str = []
    for(let i = 0; i < array.length; i++){
      str.push(`${i+1}: ${array[i]}`)
      console.log(str)
    }
    return str
  }

// refactored

var number=function(array){
    return array.map((e, n) => e = `${n+1}: ${e}`)
  }


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//   }
  
function betterThanAverage(classPoints, yourPoints) {
    let avg = classPoints.reduce((a,c) => a + c, 0) / classPoints.length
    
    if (yourPoints > avg){
      return true
    }
    return false
  }

// refactored

function betterThanAverage(classPoints, yourPoints) {
    return (yourPoints > (classPoints.reduce((a,c) => a + c, 0) / classPoints.length) ? true : false) 
  }

// refactored again

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > (classPoints.reduce((a,c) => a + c, 0) / classPoints.length) 
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

function arrAdder(arr) {

}