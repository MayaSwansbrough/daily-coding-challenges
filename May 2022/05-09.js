// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a','e','i','o','u']
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j < vowels.length; j++){
        console.log(str[i], vowels[j])
        if(str[i] === vowels[j]){
          console.log(str[i], vowels[j])
          ++vowelsCount;
        }
      }
    }
    return vowelsCount;
}
