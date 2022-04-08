// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
// Your program will take in a string and clean out all numeric characters, and return a string with spacing 
// and special characters ~#$%^&!@*():;"'.,? all intact.
// function stringClean(s){
//     // Function will return the cleaned string
//   }

function stringClean(s){
    const regex = /[0-9]/g
    return s.replace(regex, "")
  }

  // refactored
function stringClean(s){
    return s.replace(/[0-9]/g, "")
  }


//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.
// function stringy(size) {
  // your code here   
// }

function stringy(size) {
    let result = ""
    
    for(let i = 1; i <= size; i++){
      if(i % 2 !== 0){
        result += "1"
      } else {
        result += "0"
      }
    }
    
    return result;
  }

  // refactored
  function stringy(size) {
    let result = ""
    for(let i = 1; i <= size; i++){
      i % 2 !== 0 ? result += 1 : result += 0
    }
    return result;
  }


//   My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. 
//   Being the competitor I am, I can't take a loss without getting a chance at redemption. 
//   Often times, this manifests in the form of a "Double or nothing" bet. 
//   Rather than paying up, the wager will instead be doubled, and an additional round will be played.
//   ...This consistently results in me losing more money than I initially wagered.
//   Given the amount of cash on hand, the initial wager, and the number of rounds played, 
//   return the amount of money that I'll have left after our gam(bl)ing session has concluded.
//   If I can't afford to pay up, return "I'll pay you back later" instead ;)
// function doubleOrNothing(cash, wager, losses){
//     //your code here
//   }

function doubleOrNothing(cash, wager, losses){
    for(let i = 1; i < losses; i++){
      wager = wager * 2
    }
    if(wager > cash){
      return "I\'ll pay you back later"
    }
    return cash - wager;
  }