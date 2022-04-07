// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// const rps = (p1, p2) => {
//     // your code here
//   };


const rps = (p1, p2) => {
    if(p1 === "rock" && p2 === "scissors" || p1 === "paper" && p2 === "rock" || p1 === "scissors" && p2 ==="paper"){
      return "Player 1 won!"
    } else if (p1 ==="rock" && p2 === "paper" || p1 === "paper" && p2 === "scissors" || p1 === "scissors" && p2 === "rock"){
      return "Player 2 won!"
    }
    return "Draw!"
  };


//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//   Examples:
  
//   solution('abc', 'bc') // returns true
//   solution('abc', 'd') // returns false

// function solution(str, ending){
//     // TODO: complete
//   }

function solution(str, ending){
    return str.endsWith(ending)
  }


// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// function insertDash(num) {
//     //code me
//  }
 
// function insertDash(num) {
//     const arr = String(num).split("")
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0){
//         arr[i] += "-"
//        console.log(arr[i])
//       }
//     }
//    return arr.join("")
//  }
 



// OOP Exercise - Create a stopwatch object with a duration property
// and reset, start, and stop methods. Initially, duration is 0.
// We can start the stopwatch, but if started again, it throws an error.
// Same for stopping.
// We can count the duration by seconds. Reset takes it back to its initial
// state.

function Stopwatch(){
  let startTime, endTime, running, duration = 0;

  this.start = function() {
    startTime = new Date();
    running = true;

    if(running)
      throw new Error('Stopwatch has already started')
  }

  this.stop = function() {
    endTime = new Date();
    running = false;
    let time = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;

    if(running)
      throw new Error('Stopwatch is already stopped')
  }

  this.reset = function() {
    duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  }

  Object.defineProperty(this, 'duration', {
    get: function()  { return duration;}
  })
}







const sw = new Stopwatch()