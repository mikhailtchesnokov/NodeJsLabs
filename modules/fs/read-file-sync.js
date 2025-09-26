let fs = require('fs')

let data = fs.readFileSync('input.txt');
console.log(typeof data);
console.log(data.toString());

console.log('----------------------------------');

let data2 = fs.readFileSync('input.txt', 'utf8');
console.log(typeof data2);
console.log(data2);

// fs.readFile('input.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })


