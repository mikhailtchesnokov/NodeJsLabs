let fs = require('fs').promises;

fs.readFile('input.txt', 'utf8').then(data => {
  console.log('file read successfully');  
  console.log(data)
}).catch(err => {
  console.error('Error reading file:', err)
})  .finally(() => {
  console.log('Read file operation completed.')
})
