const path = require('path');

// Base file name
console.log(path.basename(__filename));
// path_demo.js

// Directory name
console.log(path.dirname(__filename));
// C:\Users\Maya\Documents\GitHub\daily-coding-challenges\node-crash-course\reference

// File extension
console.log(path.extname(__filename))
// .js

// Create path object
console.log(path.parse(__filename))
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\Maya\\Documents\\GitHub\\daily-coding-challenges\\node-crash-course\\reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))
// C:\\Users\\Maya\\Documents\\GitHub\\daily-coding-challenges\\node-crash-course\\reference/test/hello.html