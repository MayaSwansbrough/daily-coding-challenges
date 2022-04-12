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
