const fs = require('fs')

fs.rename('output.txt', 'renamed.txt', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File renamed successfully')
})