const fs = require('fs')

// for(let i = 0; i < 10; i++) {
//   fs.appendFile('output.txt', `Line ${i + 1}\n`, (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//   })
// }

let writeStream = fs.createWriteStream('output.txt', { flags: 'a' });

writeStream.on('drain', () => {
  console.log('Buffer drained, resuming writes');
});

for(let i = 0; i < 10; i++) {
  writeStream.write(`Line ${i + 1}\n`, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}