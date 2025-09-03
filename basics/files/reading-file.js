var fs = require('fs')

// fs.readFile('input.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })


console.log(fs.readFileSync('input.txt', 'utf8'));