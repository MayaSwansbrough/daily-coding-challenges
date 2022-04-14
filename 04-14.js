// Given a varying number of integer arguments, return the digits that are not present in any of them.
// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
    let args = ""
    let str = ""
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    for(let i = 0; i < arguments.length; i++){
      args += arguments[i]
    }
    
    for(let i = 0; i < num.length; i++){
      if(!args.includes(num[i])){
        str += num[i]
      }
    }
  
    return str
  }


// Given a two dimensional array, return the co-ordinates of 'x'.

// If 'x' is not inside the array, or if 'x' appears multiple times, return []

// The co-ordinates should be zero indexed.

// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (rows) => {
  
    let result = []
    for(let clm = 0; clm < rows.length; clm++){
        if(rows[clm].includes('x')){
          result.push([clm, rows[clm].indexOf('x')])
        }
      }
    console.log(result)
    if(result.length === 1){
      return result[0]
    } else {
      return []
    }
  }