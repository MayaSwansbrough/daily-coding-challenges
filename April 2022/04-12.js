// Write a function that will check if two given characters are the same case.
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1
// function sameCase(a, b){
//     return 0;
//   }

function sameCase(a, b){
    let lower = /[a-z]/g;
    let upper = /[A-Z]/g;
    if(a.match(lower) && b.match(lower) || a.match(upper) && b.match(upper)){
      return 1;
    } else if (a.match(lower) && b.match(upper) || a.match(upper) && b.match(lower)){
      return 0;
    }
    return -1;
  }
